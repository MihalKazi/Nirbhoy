'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { Row } from './Box';
import { Icon } from './Icons';
import { digits, type Lang } from '@/lib/i18n';
import { EVIDENCE_KEY, useLocal } from '@/lib/store';

export type Step = {
  id: string;
  title: string;
  body: string[];
  links?: { href: string; label: string }[];
  vault?: boolean;
};

export function StepBoxes({ lang, steps }: { lang: Lang; steps: Step[] }) {
  const bn = lang === 'bn';
  const uid = useId();
  const { value, update, clear } = useLocal<{ done: string[] }>(EVIDENCE_KEY, { done: [] });
  const [open, setOpen] = useState<string | null>(steps[0]?.id ?? null);
  const done = new Set(value.done);
  const count = steps.filter((s) => done.has(s.id)).length;

  function seal(id: string) {
    update((prev) => ({ done: prev.done.includes(id) ? prev.done : [...prev.done, id] }));
    const idx = steps.findIndex((s) => s.id === id);
    const next = steps.slice(idx + 1).find((s) => !done.has(s.id));
    setOpen(next ? next.id : null);
  }

  function unseal(id: string) {
    update((prev) => ({ done: prev.done.filter((x) => x !== id) }));
  }

  function goNext() {
    const next = steps.find((s) => !done.has(s.id));
    if (!next) return;
    setOpen(next.id);
    window.setTimeout(() => document.getElementById(`row-${uid}-${next.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 60);
  }

  return (
    <div>
      <p className="eyebrow" aria-live="polite" style={{ marginBottom: 16 }}>
        {count === steps.length
          ? bn
            ? 'সব ধাপ শেষ হয়েছে'
            : 'All steps done'
          : bn
            ? `${digits(lang, count)} / ${digits(lang, steps.length)} ধাপ শেষ`
            : `${count} / ${steps.length} steps done`}
      </p>

      {count < steps.length && (
        <div className="btn-row" style={{ marginTop: 0 }}>
          <button type="button" className="btn" onClick={goNext}>
            {bn ? 'পরের ধাপ' : 'Next step'}
            <Icon name="arrow" size={20} />
          </button>
        </div>
      )}

      <ul className="wall">
        {steps.map((s, i) => {
          const isDone = done.has(s.id);
          const isOpen = open === s.id;
          const panel = `${uid}-${s.id}`;
          return (
            <li key={s.id} id={`row-${uid}-${s.id}`}>
              <div className="row-card" data-open={isOpen}>
                <button
                  type="button"
                  className="row-face"
                  aria-expanded={isOpen}
                  aria-controls={panel}
                  onClick={() => setOpen(isOpen ? null : s.id)}
                >
                  <Row
                    name={s.title}
                    hint={
                      bn
                        ? `ধাপ ${digits(lang, i + 1)} / ${digits(lang, steps.length)}`
                        : `Step ${i + 1} / ${steps.length}`
                    }
                    data={isDone ? (bn ? 'শেষ' : 'Done') : undefined}
                    status={{ on: isDone, part: isOpen && !isDone, tone: 'leaf' }}
                  />
                </button>
                <div className="interior" id={panel} role="region" aria-label={s.title}>
                  <div>
                    <div className="interior-body">
                      {s.body.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                      {s.links && (
                        <ul style={{ paddingInlineStart: 20, margin: '0 0 1em' }}>
                          {s.links.map((l) => (
                            <li key={l.href}>
                              <a href={l.href} target="_blank" rel="noopener noreferrer">
                                {l.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                      {s.vault && (
                        <p>
                          <a href="#shelf">{bn ? 'ফাইল হ্যাশ করে শেলফে রাখুন ↓' : 'Hash the file and shelve it below ↓'}</a>
                        </p>
                      )}
                      <div className="btn-row" style={{ marginBottom: 0 }}>
                        {isDone ? (
                          <button type="button" className="btn-quiet" onClick={() => unseal(s.id)}>
                            {bn ? 'ফিরিয়ে নিন' : 'Undo'}
                          </button>
                        ) : (
                          <button type="button" className="btn" onClick={() => seal(s.id)}>
                            <Icon name="check" size={20} />
                            {bn ? 'শেষ, পরবর্তীতে যান' : 'Done, mark complete'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {count === steps.length && (
        <div className="btn-row">
          <Link className="btn" href={`/${lang}/gd`}>
            {bn ? 'এবার জিডির খসড়া করুন' : 'Now draft your GD'}
            <Icon name="arrow" size={20} />
          </Link>
        </div>
      )}

      {count > 0 && (
        <p>
          <button type="button" className="btn-quiet" onClick={clear}>
            {bn ? 'সব ফিরিয়ে আবার শুরু' : 'Reset and start over'}
          </button>
        </p>
      )}
    </div>
  );
}
