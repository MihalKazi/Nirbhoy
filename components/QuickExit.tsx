'use client';

import { useEffect } from 'react';
import { Icon } from './Icons';

const SAFE_URL = 'https://www.bbc.com/weather';

function leave() {
  try {
    window.open(SAFE_URL, '_blank', 'noopener');
  } catch {}
  window.location.replace(SAFE_URL);
}

export function QuickExit({ label }: { label: string }) {
  useEffect(() => {
    let presses = 0;
    let timer: number | undefined;
    function onKey(e: KeyboardEvent) {
      if (e.key !== 'Escape') return;
      presses += 1;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => (presses = 0), 900);
      if (presses >= 2) leave();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <button type="button" className="tool tool-exit" onClick={leave} title="Esc Esc">
      <Icon name="x" size={15} />
      {label}
    </button>
  );
}
