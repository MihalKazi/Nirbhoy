import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Disclaimer } from '@/components/Disclaimer';
import { GdForm } from '@/components/GdForm';
import { isLang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === 'bn' ? 'জিডি খসড়া' : 'GD draft' };
}

export default async function Gd({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const bn = lang === 'bn';
  return (
    <div className="rise">
      <h1>{bn ? 'জিডির খসড়া' : 'Draft your GD'}</h1>
      <p className="lede">
        {bn
          ? 'নিচের ঘরগুলো পূরণ করুন। নিচে আপনার জিডির খসড়া নিজে নিজে তৈরি হবে। যা জানেন না, ফাঁকা রাখুন।'
          : 'Fill in the fields. Your draft GD writes itself underneath. Leave blank whatever you do not know.'}
      </p>
      <GdForm lang={lang} />
      <Disclaimer lang={lang} />
    </div>
  );
}
