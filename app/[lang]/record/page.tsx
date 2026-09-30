import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Disclaimer } from '@/components/Disclaimer';
import { RecordForm } from '@/components/RecordForm';
import { isLang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === 'bn' ? 'আমার কথা' : 'My record' };
}

export default async function Record({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const bn = lang === 'bn';
  return (
    <div className="rise">
      <h1>{bn ? 'লিখে রাখুন' : 'Write it down'}</h1>
      <p className="lede">
        {bn
          ? 'এটি আপনার নিজের নোট। পরে থানায়, আইনজীবীর কাছে বা কাউন্সেলরের কাছে বলতে সুবিধা হবে। যেটুকু পারেন, ততটুকুই লিখুন।'
          : 'These are your own notes. They make it easier to tell it later to the police, a lawyer or a counsellor. Write only as much as you can.'}
      </p>
      <RecordForm lang={lang} />
      <Disclaimer lang={lang} />
    </div>
  );
}
