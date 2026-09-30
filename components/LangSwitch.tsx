'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Lang } from '@/lib/i18n';

export function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname() || `/${lang}`;
  const target: Lang = lang === 'bn' ? 'en' : 'bn';
  const href = pathname.replace(/^\/(bn|en)/, `/${target}`);
  return (
    <Link
      href={href}
      className="tool"
      hrefLang={target}
      lang={target}
      aria-label={target === 'en' ? 'Switch to English' : 'বাংলায় দেখুন'}
    >
      {target === 'en' ? 'EN' : 'বাংলা'}
    </Link>
  );
}
