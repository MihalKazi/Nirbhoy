'use client';

import { useState } from 'react';
import { Icon } from './Icons';
import { GROUPS, SERVICES, formatPhone, type Group } from '@/lib/directory';
import { digits, type Lang } from '@/lib/i18n';

function CopyButton({ text, label, done }: { text: string; label: string; done: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      className="btn-quiet"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setOk(true);
          window.setTimeout(() => setOk(false), 1800);
        } catch {}
      }}
    >
      {ok ? done : label}
    </button>
  );
}

export function Directory({ lang }: { lang: Lang }) {
  const bn = lang === 'bn';
  const [group, setGroup] = useState<Group | 'all'>('all');
  const list = SERVICES.filter((s) => group === 'all' || s.group === group);

  return (
    <div>
      <div className="chips" role="group" aria-label={bn ? 'ধরন অনুযায়ী দেখুন' : 'Filter by type'}>
        {GROUPS.map((g) => (
          <button key={g.id} type="button" className="chip" aria-pressed={group === g.id} onClick={() => setGroup(g.id)}>
            {g[lang]}
          </button>
        ))}
      </div>

      <ul className="wall wall-2" aria-live="polite">
        {list.map((s) => (
          <li key={s.id}>
            <div className="panel" style={{ margin: 0 }}>
              <h3>
                {s.name[lang]}
                {s.womenOnly && <span className="tag">{bn ? 'নারীদের জন্য' : 'Women'}</span>}
              </h3>
              <p className="hint" style={{ marginTop: 4 }}>
                {s.hours ? s.hours[lang] : GROUPS.find((g) => g.id === s.group)![lang]}
              </p>
              <p style={{ marginBottom: 14 }}>{s.what[lang]}</p>
              <div className="phones">
                {s.phones.map((p) => (
                  <div key={p.num} className="phone-line">
                    <a className="num" href={`tel:${p.num}`}>
                      <Icon name="phone" />
                      {digits(lang, formatPhone(p.num))}
                    </a>
                    {p.note && <span className="mono">{p.note[lang]}</span>}
                    <CopyButton text={formatPhone(p.num)} label={bn ? 'কপি' : 'Copy'} done={bn ? 'কপি হয়েছে' : 'Copied'} />
                  </div>
                ))}
                {s.email && (
                  <div className="phone-line">
                    <a className="mail" href={`mailto:${s.email}`}>
                      {s.email}
                    </a>
                    <CopyButton text={s.email} label={bn ? 'কপি' : 'Copy'} done={bn ? 'কপি হয়েছে' : 'Copied'} />
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
