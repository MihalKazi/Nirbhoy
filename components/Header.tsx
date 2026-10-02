import Link from 'next/link';
import { SITE_NAME, digits, type Lang } from '@/lib/i18n';
import { Icon } from './Icons';
import { CurrentNav } from './CurrentNav';
import { LangSwitch } from './LangSwitch';
import { QuickExit } from './QuickExit';
import { TextSize } from './TextSize';

function Brand({ lang }: { lang: Lang }) {
  return (
    <Link href={`/${lang}`} className="brand">
      <span className="brand-mark">
        <Icon name="heart" size={17} />
      </span>
      <span className="brand-text">
        <strong>{SITE_NAME[lang]}</strong>
        <small>{lang === 'bn' ? 'নির্ভয়ে থাকুন' : 'Be fearless.'}</small>
      </span>
    </Link>
  );
}

// Phones: sticky top strip. Desktop: light left rail. One nav, two shapes.
export function Chrome({ lang }: { lang: Lang }) {
  const bn = lang === 'bn';
  const smaller = bn ? 'লেখা ছোট করুন' : 'Smaller text';
  const bigger = bn ? 'লেখা বড় করুন' : 'Bigger text';
  return (
    <>
      <header className="topbar">
        <Brand lang={lang} />
        <details className="menu">
          <summary className="tool">{bn ? 'মেনু' : 'Menu'}</summary>
          <div className="menu-panel">
            <div className="menu-textsize">
              <span>{bn ? 'লেখার আকার' : 'Text size'}</span>
              <TextSize smaller={smaller} bigger={bigger} label={bn ? 'লেখার আকার' : 'Text size'} />
            </div>
            <CurrentNav lang={lang} />
          </div>
        </details>
        <LangSwitch lang={lang} />
        <QuickExit label={bn ? 'বের' : 'Exit'} />
      </header>

      <aside className="rail" aria-label={bn ? 'মেনু' : 'Menu'}>
        <Brand lang={lang} />
        <nav>
          <CurrentNav lang={lang} />
        </nav>
        <div className="rail-foot">
          <div className="call-row">
            <a className="call call-999" href="tel:999" aria-label={bn ? 'নয় নয় নয় এ কল' : 'Call 999'}>
              {digits(lang, 999)}
            </a>
            <a className="call call-109" href="tel:109" aria-label={bn ? 'এক শূন্য নয় এ কল' : 'Call 109'}>
              {digits(lang, 109)}
            </a>
          </div>
          <TextSize smaller={smaller} bigger={bigger} label={bn ? 'লেখার আকার' : 'Text size'} />
          <LangSwitch lang={lang} />
          <QuickExit label={bn ? 'দ্রুত বের হন' : 'Quick exit'} />
        </div>
      </aside>
    </>
  );
}
