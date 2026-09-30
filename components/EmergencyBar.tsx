import { digits, type Lang } from '@/lib/i18n';

export function EmergencyBar({ lang }: { lang: Lang }) {
  const bn = lang === 'bn';
  return (
    <div className="foot-line no-print" role="region" aria-label={bn ? 'জরুরি কল' : 'Emergency call'}>
      <span>{bn ? 'বিপদে এখনই কল' : 'In danger? Call now'}</span>
      <a className="call call-999" href="tel:999" aria-label={bn ? 'নয় নয় নয় এ কল' : 'Call 999'}>
        {digits(lang, 999)}
      </a>
      <a className="call call-109" href="tel:109" aria-label={bn ? 'এক শূন্য নয় এ কল' : 'Call 109'}>
        {digits(lang, 109)}
      </a>
    </div>
  );
}
