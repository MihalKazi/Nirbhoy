'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from './Icons';
import { NAV, type Lang } from '@/lib/i18n';

export function CurrentNav({ lang, className }: { lang: Lang; className?: string }) {
  const pathname = usePathname();
  return (
    <ul className={className}>
      {NAV.map((it) => {
        const full = `/${lang}${it.href}`;
        const current = pathname === full;
        return (
          <li key={it.href}>
            <Link className="nav-link" href={full} aria-current={current ? 'page' : undefined}>
              <Icon name={it.icon} size={22} />
              {it[lang]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
