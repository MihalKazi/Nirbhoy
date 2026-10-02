'use client';

import { useState } from 'react';
import { RowLink } from './Box';
import { Icon } from './Icons';
import { digits } from '@/lib/i18n';
import type { Plan } from '@/lib/plans';

const VISIBLE_AT_FIRST = 3;

export function SituationList({ lang, plans }: { lang: 'bn' | 'en'; plans: Plan[] }) {
  const [expanded, setExpanded] = useState(false);
  const bn = lang === 'bn';
  const n = (v: number) => digits(lang, v);
  const shown = expanded ? plans : plans.slice(0, VISIBLE_AT_FIRST);
  const rest = plans.length - VISIBLE_AT_FIRST;

  return (
    <>
      {shown.map((p) => (
        <li key={p.id}>
          <RowLink
            href={`/${lang}/plan/${p.id}`}
            icon={p.icon}
            name={p.name[lang]}
            hint={p.hint[lang]}
            data={bn ? `${n(p.steps.length)}টি ধাপ` : `${p.steps.length} steps`}
          />
        </li>
      ))}
      {!expanded && rest > 0 && (
        <li>
          <button type="button" className="row-card row-more" onClick={() => setExpanded(true)}>
            <span className="row-face">
              <span className="row-icon">
                <Icon name="plus" />
              </span>
              <span className="row-text">
                <span className="row-name">
                  {bn ? `আরও ${n(rest)}টি পরিস্থিতি দেখুন` : `See ${rest} more situations`}
                </span>
              </span>
            </span>
          </button>
        </li>
      )}
    </>
  );
}
