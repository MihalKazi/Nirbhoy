export type Lang = 'bn' | 'en';

export const LANGS: Lang[] = ['bn', 'en'];

export function isLang(v: string): v is Lang {
  return v === 'bn' || v === 'en';
}

// Site name: change here to rename the site everywhere.
export const SITE_NAME = { bn: 'নির্ভয়', en: 'Nirbhoy' } as const;

const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export function digits(lang: Lang, value: string | number): string {
  const s = String(value);
  return lang === 'bn' ? s.replace(/\d/g, (d) => BN_DIGITS[Number(d)]) : s;
}

export type IconName = 'home' | 'box' | 'doc' | 'phone' | 'pen' | 'heart' | 'info';

export const NAV: { href: string; icon: IconName; bn: string; en: string }[] = [
  { href: '', icon: 'home', bn: 'শুরু', en: 'Start' },
  { href: '/evidence', icon: 'box', bn: 'প্রমাণ', en: 'Proof' },
  { href: '/record', icon: 'pen', bn: 'আমার কথা', en: 'My record' },
  { href: '/gd', icon: 'doc', bn: 'জিডি খসড়া', en: 'GD draft' },
  { href: '/help', icon: 'phone', bn: 'জরুরি সহায়তা', en: 'Help' },
  { href: '/stories', icon: 'heart', bn: 'সাহসের গল্প', en: 'Stories' },
  { href: '/about', icon: 'info', bn: 'আমাদের কথা', en: 'About' },
];
