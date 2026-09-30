'use client';

import { useId, useState } from 'react';
import { Row } from './Box';
import { Icon } from './Icons';
import { digits, type Lang } from '@/lib/i18n';
import { useLocal } from '@/lib/store';
import { PLATFORMS, type Plan } from '@/lib/plans';
import { PlanLinkEl } from './PlanLinkEl';

export function PlanSteps({ lang, plan }: { lang: Lang; plan: Plan }) {
  const bn = lang === 'bn';
  const uid = useId();
  const { value, update, clear } = useLocal<{ done: string[] }>(`dkc.plan.${plan.id}`, { done: [] });
  const done = new Set(value.done);
  const firstOpen = plan.steps.findIndex((s) => !done.has(s.title.en));
  const [open, setOpen] = useState<number | null>(firstOpen === -1 ? null : firstOpen);
  const count = plan.steps.filter((s) => done.has(s.title.en)).length;

  function mark(i: number, id: string) {
    update((prev) => ({ done: prev.done.includes(id) ? prev.done : [...prev.done, id] }));
    const next = plan.steps.findIndex((s, j) => j > i && !done.has(s.title.en));
    setOpen(next === -1 ? null : next);
  }

  function unmark(id: string) {
    update((prev) => ({ done: prev.done.filter((x) => x !== id) }));
  }

  return (
    <div>
      <p className="eyebrow" aria-live="polite" style={{ marginBottom: 16 }}>
        {count === plan.steps.length
          ? bn
            ? 'সব ধাপ শেষ হয়েছে'
            : 'All steps done'
          : bn
            ? `${digits(lang, count)} / ${digits(lang, plan.steps.length)} ধাপ শেষ`
            : `${count} / ${plan.steps.length} steps done`}
      </p>

      <ol className="wall plan-steps">
        {plan.steps.map((s, i) => {
          const id = s.title.en;
          const isDone = done.has(id);
          const isOpen = open === i;
          const panel = `${uid}-${i}`;
          return (
            <li key={id}>
              <div className="row-card" data-open={isOpen}>
                <button type="button" className="row-face" aria-expanded={isOpen} aria-controls={panel} onClick={() => setOpen(isOpen ? null : i)}>
                  <Row
                    name={s.title[lang]}
                    hint={bn ? `ধাপ ${digits(lang, i + 1)} / ${digits(lang, plan.steps.length)}` : `Step ${i + 1} / ${plan.steps.length}`}
                    status={{ on: isDone, part: isOpen && !isDone, tone: 'leaf' }}
                  />
                </button>
                <div className="interior" id={panel} role="region" aria-label={s.title[lang]}>
                  <div>
                    <div className="interior-body">
                      {s.body.map((b) => (
                        <p key={b.en}>{b[lang]}</p>
                      ))}
                      {s.platforms && (
                        <details className="platforms">
                          <summary>{bn ? 'কোন অ্যাপে কীভাবে রিপোর্ট করবেন' : 'How to report, app by app'}</summary>
                          <dl>
                            {PLATFORMS.map((p) => (
                              <div key={p.name}>
                                <dt>{p.name}</dt>
                                <dd>
                                  {p.how[lang]}{' '}
                                  <a href={p.help} target="_blank" rel="noopener noreferrer">
                                    {bn ? 'সহায়তা পাতা' : 'Help page'}
                                  </a>
                                </dd>
                              </div>
                            ))}
                          </dl>
                          <p className="mono" style={{ margin: 0 }}>
                            {bn ? 'মেনুর নাম বদলাতে পারে। না পেলে অ্যাপের Help-এ "report" লিখে খুঁজুন।' : 'Menus change. If you cannot find it, search "report" in the app’s Help.'}
                          </p>
                        </details>
                      )}
                      {s.links && (
                        <div className="btn-row" style={{ marginBottom: isDone ? 0 : undefined }}>
                          {s.links.map((l) => (
                            <PlanLinkEl key={l.href + l.label.en} lang={lang} l={l} />
                          ))}
                        </div>
                      )}
                      <div className="btn-row" style={{ marginBottom: 0 }}>
                        {isDone ? (
                          <button type="button" className="btn-quiet" onClick={() => unmark(id)}>
                            {bn ? 'ফিরিয়ে নিন' : 'Undo'}
                          </button>
                        ) : (
                          <button type="button" className="btn" onClick={() => mark(i, id)}>
                            <Icon name="check" size={20} />
                            {bn ? 'শেষ হয়েছে' : 'Done'}
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
      </ol>

      {count > 0 && (
        <p>
          <button type="button" className="btn-quiet" onClick={clear}>
            {bn ? 'অগ্রগতি মুছুন' : 'Clear progress'}
          </button>
        </p>
      )}
    </div>
  );
}
