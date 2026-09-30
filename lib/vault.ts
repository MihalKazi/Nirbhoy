'use client';

import { useCallback, useEffect, useState } from 'react';
import { hashFile } from './sha256';
import type { Lang } from './i18n';

// Proof Vault: metadata + SHA-256 only. The file itself is never copied,
// uploaded or altered. It stays wherever the survivor keeps it.

export type Proof = {
  id: string;
  name: string;
  size: number;
  mime: string;
  modified: number;
  sha256: string;
  addedAt: number;
  note: string;
};

const DB = 'dkc-proof-vault';
const STORE = 'proofs';

function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: 'id' });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function tx<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await open();
  return new Promise((resolve, reject) => {
    const req = fn(db.transaction(STORE, mode).objectStore(STORE));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export const vaultAll = () => tx<Proof[]>('readonly', (s) => s.getAll() as IDBRequest<Proof[]>);
export const vaultPut = (p: Proof) => tx('readwrite', (s) => s.put(p));
export const vaultDelete = (id: string) => tx('readwrite', (s) => s.delete(id));
export const vaultClear = () => tx('readwrite', (s) => s.clear());

export function useVault() {
  const [items, setItems] = useState<Proof[]>([]);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState<{ name: string; fraction: number } | null>(null);
  const [error, setError] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const all = await vaultAll();
      setItems(all.sort((a, b) => a.addedAt - b.addedAt));
    } catch {
      setError(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const add = useCallback(
    async (files: FileList | File[]) => {
      for (const file of Array.from(files)) {
        setBusy({ name: file.name, fraction: 0 });
        try {
          const sha256 = await hashFile(file, (fraction) => setBusy({ name: file.name, fraction }));
          await vaultPut({
            id: crypto.randomUUID(),
            name: file.name,
            size: file.size,
            mime: file.type || '',
            modified: file.lastModified,
            sha256,
            addedAt: Date.now(),
            note: '',
          });
        } catch {
          setError(true);
        }
      }
      setBusy(null);
      await refresh();
    },
    [refresh],
  );

  const note = useCallback(
    async (id: string, text: string) => {
      setItems((prev) => prev.map((p) => (p.id === id ? { ...p, note: text } : p)));
      const found = (await vaultAll()).find((p) => p.id === id);
      if (found) await vaultPut({ ...found, note: text });
    },
    [],
  );

  const remove = useCallback(
    async (id: string) => {
      await vaultDelete(id);
      await refresh();
    },
    [refresh],
  );

  const clear = useCallback(async () => {
    await vaultClear();
    await refresh();
  }, [refresh]);

  return { items, ready, busy, error, add, note, remove, clear };
}

export function kindOf(p: Pick<Proof, 'mime' | 'name'>): 'image' | 'video' | 'pdf' | 'other' {
  if (p.mime.startsWith('image/')) return 'image';
  if (p.mime.startsWith('video/')) return 'video';
  if (p.mime === 'application/pdf' || /\.pdf$/i.test(p.name)) return 'pdf';
  return 'other';
}

export function humanSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

export function groupHash(hex: string, n = 16): string {
  return hex.slice(0, n).replace(/(.{4})/g, '$1 ').trim();
}

export function stamp(ms: number): string {
  const d = new Date(ms);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

export function custodyLog(lang: Lang, items: Proof[]): string {
  if (items.length === 0) return '';
  const bn = lang === 'bn';
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const lines: string[] = [];
  lines.push(bn ? 'প্রমাণের হেফাজত-তালিকা (Chain of custody log)' : 'Evidence chain-of-custody log');
  lines.push(
    bn
      ? `তৈরির সময়: ${stamp(Date.now())} (${tz}), ফাইল সংখ্যা: ${items.length}`
      : `Generated: ${stamp(Date.now())} (${tz}), files: ${items.length}`,
  );
  lines.push('');
  items.forEach((p, i) => {
    lines.push(`${i + 1}. ${p.name}`);
    lines.push(`   ${bn ? 'ধরন / আকার' : 'Type / size'}: ${p.mime || '-'} / ${humanSize(p.size)}`);
    lines.push(`   ${bn ? 'ফাইলের সর্বশেষ পরিবর্তন' : 'File last modified'}: ${stamp(p.modified)}`);
    lines.push(`   ${bn ? 'তালিকায় যোগ' : 'Logged'}: ${stamp(p.addedAt)}`);
    lines.push(`   SHA-256: ${p.sha256}`);
    if (p.note) lines.push(`   ${bn ? 'নোট' : 'Note'}: ${p.note}`);
  });
  lines.push('');
  lines.push(
    bn
      ? 'বিঃদ্রঃ SHA-256 মান আমার নিজের ডিভাইসে হিসাব করা হয়েছে। ফাইল কোথাও আপলোড বা পরিবর্তন করা হয়নি। মূল ফাইল অক্ষত আছে। ফাইল বদলালে এই মান মিলবে না।'
      : 'Note: SHA-256 values were computed on my own device. No file was uploaded or altered. Originals are intact. Any change to a file makes its value stop matching.',
  );
  return lines.join('\n');
}
