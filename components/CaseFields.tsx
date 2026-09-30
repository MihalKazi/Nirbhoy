'use client';

import type { Lang } from '@/lib/i18n';
import { HARMS, type Case } from '@/lib/store';

type Props = {
  lang: Lang;
  value: Case;
  onChange: (patch: Partial<Case>) => void;
};

export function HarmChecks({ lang, value, onChange }: Props) {
  const bn = lang === 'bn';
  return (
    <fieldset>
      <legend className="field-label">{bn ? 'কী ধরনের হামলা?' : 'What kind of attack?'}</legend>
      <span className="hint">{bn ? 'যা যা মিলে, সবগুলোতে টিক দিন।' : 'Tick everything that applies.'}</span>
      <div className="checks">
        {HARMS.map((h) => (
          <label key={h.id} className="check">
            <input
              type="checkbox"
              checked={value.harms.includes(h.id)}
              onChange={(e) =>
                onChange({
                  harms: e.target.checked ? [...value.harms, h.id] : value.harms.filter((x) => x !== h.id),
                })
              }
            />
            <span>{h[lang]}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      {hint && <span className="hint">{hint}</span>}
      {children}
    </label>
  );
}
