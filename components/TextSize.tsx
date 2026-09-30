'use client';

import { useEffect, useState } from 'react';

const KEY = 'dkc.textscale';
const STEPS = [1, 1.15, 1.3];

function apply(step: number) {
  document.documentElement.style.setProperty('--scale', String(STEPS[step]));
}

export function TextSize({ smaller, bigger, label }: { smaller: string; bigger: string; label: string }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    try {
      const saved = Number(window.localStorage.getItem(KEY));
      const s = Number.isInteger(saved) && saved >= 0 && saved < STEPS.length ? saved : 0;
      setStep(s);
      apply(s);
    } catch {}
  }, []);

  function set(next: number) {
    const clamped = Math.max(0, Math.min(STEPS.length - 1, next));
    setStep(clamped);
    apply(clamped);
    try {
      window.localStorage.setItem(KEY, String(clamped));
    } catch {}
  }

  return (
    <span className="textsize" role="group" aria-label={label}>
      <button type="button" className="tool textsize-btn" onClick={() => set(step - 1)} disabled={step === 0} aria-label={smaller}>
        A−
      </button>
      <button type="button" className="tool textsize-btn" onClick={() => set(step + 1)} disabled={step === STEPS.length - 1} aria-label={bigger}>
        A+
      </button>
    </span>
  );
}
