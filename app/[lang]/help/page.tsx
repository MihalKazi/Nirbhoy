import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Directory } from '@/components/Directory';
import { Disclaimer } from '@/components/Disclaimer';
import { isLang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === 'bn' ? 'জরুরি সহায়তা' : 'Emergency help' };
}

export default async function Help({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const bn = lang === 'bn';
  return (
    <div className="rise">
      <h1>{bn ? 'জরুরি সহায়তা' : 'Emergency help'}</h1>
      <p className="lede">
        {bn
          ? 'নম্বরে ট্যাপ করলেই কল হবে। কোথায় ফোন করবেন বুঝতে না পারলে ১০৯ বা ৯৯৯ দিয়ে শুরু করুন।'
          : 'Tap a number to call. If you are unsure where to start, begin with 109 or 999.'}
      </p>
      <Directory lang={lang} />
      <Disclaimer lang={lang} />
    </div>
  );
}
