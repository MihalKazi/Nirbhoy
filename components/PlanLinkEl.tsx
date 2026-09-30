import Link from 'next/link';
import { Icon } from './Icons';
import type { Lang } from '@/lib/i18n';
import type { PlanLink } from '@/lib/plans';

export function PlanLinkEl({ lang, l }: { lang: Lang; l: PlanLink }) {
  if (l.internal) {
    return (
      <Link href={`/${lang}${l.href}`} className="btn btn-line">
        {l.label[lang]}
        <Icon name="arrow" size={18} />
      </Link>
    );
  }
  return (
    <a href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-line">
      {l.label[lang]}
      <Icon name="arrow" size={18} />
    </a>
  );
}
