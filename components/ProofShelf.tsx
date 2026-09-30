'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { Row } from './Box';
import { Icon } from './Icons';
import { digits, type Lang } from '@/lib/i18n';
import { hashFile } from '@/lib/sha256';
import { custodyLog, groupHash, humanSize, kindOf, stamp, useVault, type Proof } from '@/lib/vault';

const KIND: Record<ReturnType<typeof kindOf>, { bn: string; en: string }> = {
  image: { bn: 'স্ক্রিনশট / ছবি', en: 'Screenshot / image' },
  video: { bn: 'স্ক্রিন রেকর্ডিং', en: 'Recording' },
  pdf: { bn: 'পিডিএফ', en: 'PDF' },
  other: { bn: 'ফাইল', en: 'File' },
};

function ProofBox({
  lang,
  p,
  onNote,
  onRemove,
}: {
  lang: Lang;
  p: Proof;
  onNote: (t: string) => void;
  onRemove: () => void;
}) {
  const bn = lang === 'bn';
  const uid = useId();
  const [open, setOpen] = useState(false);
  const [verify, setVerify] = useState<'idle' | 'checking' | 'ok' | 'bad'>('idle');

  async function check(file: File | undefined) {
    if (!file) return;
    setVerify('checking');
    const h = await hashFile(file);
    setVerify(h === p.sha256 ? 'ok' : 'bad');
  }

  return (
    <div className="row-card" data-open={open}>
      <button type="button" className="row-face" aria-expanded={open} aria-controls={uid} onClick={() => setOpen(!open)}>
        <Row
          name={p.name}
          hint={`${KIND[kindOf(p)][lang]} / ${humanSize(p.size)}`}
          data={digits(lang, stamp(p.addedAt))}
          status={{ on: true, tone: 'leaf' }}
        />
      </button>
      <div className="interior" id={uid} role="region" aria-label={p.name}>
        <div>
          <div className="interior-body">
            <p className="eyebrow" style={{ marginBottom: 4 }}>
              SHA-256
            </p>
            <p className="hashfull">{p.sha256}</p>
            <label className="field">
              <span className="field-label">{bn ? 'নোট (ঐচ্ছিক)' : 'Note (optional)'}</span>
              <span className="hint">{bn ? 'যেমন: কে, কোথায়, কী লেখা ছিল।' : 'Who, where, what it shows.'}</span>
              <input className="input" defaultValue={p.note} onBlur={(e) => onNote(e.target.value)} />
            </label>

            <div className="btn-row" style={{ marginBlock: 0 }}>
              <span className="picker">
                <span className="btn btn-line">
                  <Icon name="check" size={20} />
                  {bn ? 'ফাইল মিলিয়ে দেখুন' : 'Verify file'}
                </span>
                <input
                  type="file"
                  aria-label={bn ? 'মিলিয়ে দেখার ফাইল বাছুন' : 'Choose the file to verify'}
                  onChange={(e) => {
                    check(e.target.files?.[0]);
                    e.target.value = '';
                  }}
                />
              </span>
              <button type="button" className="btn-quiet" onClick={onRemove}>
                {bn ? 'তালিকা থেকে সরান' : 'Remove from shelf'}
              </button>
            </div>

            <p aria-live="polite" style={{ marginBlock: 12 }}>
              {verify === 'checking' && (bn ? 'হিসাব হচ্ছে…' : 'Checking…')}
              {verify === 'ok' && (
                <span className="verify-ok">
                  <Icon name="check" size={18} />
                  {bn ? 'মিলেছে: ফাইল অক্ষত আছে' : 'Match: file is unchanged'}
                </span>
              )}
              {verify === 'bad' && (
                <span className="verify-bad">
                  <Icon name="x" size={18} />
                  {bn ? 'মেলেনি: ফাইল বদলেছে বা অন্য ফাইল' : 'No match: file changed, or a different file'}
                </span>
              )}
            </p>
            <p className="mono" style={{ marginBottom: 0 }}>
              {bn ? 'ফাইলের সর্বশেষ পরিবর্তন: ' : 'File last modified: '}
              {digits(lang, stamp(p.modified))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProofShelf({ lang }: { lang: Lang }) {
  const bn = lang === 'bn';
  const { items, ready, busy, error, add, note, remove, clear } = useVault();
  const [copied, setCopied] = useState(false);
  const log = custodyLog(lang, items);

  async function copy() {
    try {
      await navigator.clipboard.writeText(log);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <div id="shelf">
      <div className="panel">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Icon name="lock" size={22} />
          {bn ? 'ফাইল কোথাও যায় না' : 'Files never leave this phone'}
        </h3>
        <p style={{ marginTop: 12 }}>
          {bn
            ? 'স্ক্রিনশট বা রেকর্ডিং বেছে নিন। আপনার ব্রাউজার ফাইলটির একটি ডিজিটাল আঙুলের ছাপ (SHA-256) হিসাব করে এবং সময়সহ শেলফে রাখে। ফাইল আপলোড বা কপি হয় না। পরে ফাইল বদলে গেলে ছাপ মিলবে না, তাই আদালতে প্রমাণ করা যায় ফাইল অক্ষত।'
            : 'Pick a screenshot or recording. Your browser works out a digital fingerprint (SHA-256) of the file and shelves it with the time. The file is not uploaded or copied. If it changes later the fingerprint stops matching, so you can show a court it is untouched.'}
        </p>
        <div className="btn-row" style={{ marginBottom: 0 }}>
          <span className="picker">
            <span className="btn">
              <Icon name="plus" size={20} />
              {bn ? 'প্রমাণ শেলফে রাখুন' : 'Shelve proof files'}
            </span>
            <input
              type="file"
              multiple
              accept="image/*,video/*,application/pdf"
              aria-label={bn ? 'প্রমাণের ফাইল বাছুন' : 'Choose proof files'}
              onChange={(e) => {
                if (e.target.files?.length) add(e.target.files);
                e.target.value = '';
              }}
            />
          </span>
        </div>
        {busy && (
          <div aria-live="polite">
            <p className="mono" style={{ margin: '12px 0 0' }}>
              {bn ? 'ছাপ হিসাব হচ্ছে: ' : 'Fingerprinting: '}
              {busy.name}
            </p>
            <div className="meter">
              <i style={{ transform: `scaleX(${busy.fraction})` }} />
            </div>
          </div>
        )}
        {error && (
          <p className="note" role="alert">
            <strong>{bn ? 'সংরক্ষণ বন্ধ' : 'Storage blocked'}</strong>
            <br />
            {bn
              ? 'আপনার ব্রাউজার (সম্ভবত প্রাইভেট মোড) ডিভাইসে তালিকা রাখতে দিচ্ছে না। তালিকা এই পাতা বন্ধ করলে হারিয়ে যেতে পারে। নিচের লগ কপি করে রাখুন।'
              : 'Your browser (maybe private mode) will not keep the list on this device. It may be lost when you close this page. Copy the log below.'}
          </p>
        )}
      </div>

      {ready && items.length === 0 && <p className="eyebrow">{bn ? 'শেলফ এখনো খালি' : 'The shelf is empty'}</p>}

      <ul className="wall wall-2">
        {items.map((p) => (
          <li key={p.id}>
            <ProofBox lang={lang} p={p} onNote={(t) => note(p.id, t)} onRemove={() => remove(p.id)} />
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <>
          <h2>{bn ? 'হেফাজত-তালিকা' : 'Chain-of-custody log'}</h2>
          <p>
            {bn
              ? 'এই তালিকা আপনার জিডির খসড়ার সঙ্গে সংযুক্ত হবে। পুলিশ বা আইনজীবীকে দেখানোর জন্য প্রিন্টও করা যায়।'
              : 'This log attaches to your GD draft. You can also print it for the police or a lawyer.'}
          </p>
          <pre className="draft" tabIndex={0} aria-label={bn ? 'হেফাজত-তালিকা' : 'Chain-of-custody log'}>
            {log}
          </pre>
          <div className="btn-row">
            <button type="button" className="btn" onClick={copy}>
              {copied ? (bn ? 'কপি হয়েছে' : 'Copied') : bn ? 'তালিকা কপি করুন' : 'Copy the log'}
            </button>
            <button type="button" className="btn btn-line" onClick={() => window.print()}>
              {bn ? 'প্রিন্ট বা পিডিএফ' : 'Print or save as PDF'}
            </button>
            <Link className="btn btn-line" href={`/${lang}/gd`}>
              {bn ? 'জিডির খসড়ায় যান' : 'Go to GD draft'}
              <Icon name="arrow" size={20} />
            </Link>
          </div>
          <p>
            <button
              type="button"
              className="btn-quiet"
              onClick={() => {
                if (window.confirm(bn ? 'শেলফের সব তালিকা মুছবেন? আপনার মূল ফাইল মুছবে না।' : 'Clear the whole shelf list? Your original files are not deleted.')) clear();
              }}
            >
              {bn ? 'শেলফ খালি করুন' : 'Clear the shelf'}
            </button>
          </p>
        </>
      )}
    </div>
  );
}
