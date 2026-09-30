import type { Metadata, Viewport } from 'next';
import { Anek_Bangla, Red_Hat_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Chrome } from '@/components/Header';
import { EmergencyBar } from '@/components/EmergencyBar';
import { LANGS, SITE_NAME, isLang } from '@/lib/i18n';
import '../globals.css';

// One family for both scripts: Anek Bangla's width axis gives the condensed
// label voice (Bangla and Latin alike); a mono carries data only.
const anek = Anek_Bangla({
  subsets: ['bengali', 'latin'],
  axes: ['wdth'],
  variable: '--font-anek',
  display: 'swap',
});

const mono = Red_Hat_Mono({
  subsets: ['latin'],
  variable: '--font-mono-data',
  display: 'swap',
});

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: '#faf7fd',
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return {
    title: {
      default: SITE_NAME[lang],
      template: `%s · ${SITE_NAME[lang]}`,
    },
    description:
      lang === 'bn'
        ? 'অনলাইনে হয়রানি বা লিঙ্গভিত্তিক সহিংসতার শিকার হলে প্রমাণ সংরক্ষণ, জিডি খসড়া ও জরুরি সহায়তার নিরাপদ গাইড। কোনো ফাইল কোথাও যায় না।'
        : 'A private guide for survivors of online gender-based violence in Bangladesh: seal evidence, draft a police GD, reach help. No file ever leaves your device.',
    robots: { index: true, follow: true },
    alternates: { languages: { bn: '/bn', en: '/en' } },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} className={`${anek.variable} ${mono.variable}`}>
      <body>
        <div className="shell">
          <Chrome lang={lang} />
          <main className="page">{children}</main>
        </div>
        <EmergencyBar lang={lang} />
      </body>
    </html>
  );
}
