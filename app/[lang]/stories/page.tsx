import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Disclaimer } from '@/components/Disclaimer';
import { Row } from '@/components/Box';
import { TogetherArt } from '@/components/Illustrations';
import { isLang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === 'bn' ? 'সাহসের গল্প' : 'Stories of resilience' };
}

export default async function Stories({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const bn = lang === 'bn';

  const terms = bn
    ? ['আপনি ঠিক করবেন কতটুকু বলবেন', 'নাম, ছবি ও পরিচয় গোপন থাকবে, যদি আপনি চান', 'ছাপানোর আগে আপনাকে দেখানো হবে। যেকোনো সময় তুলে নেওয়া যাবে']
    : ['You decide how much to share', 'Your name, photo and identity stay hidden if you want', 'You see it before it is published. You can withdraw it at any time'];

  return (
    <div className="rise">
      <TogetherArt className="page-art" label={bn ? 'দুই নারী পাশাপাশি' : 'Two women side by side'} />
      <h1>{bn ? 'সাহসের গল্প' : 'Stories of resilience'}</h1>
      <p className="lede">
        {bn
          ? 'যাঁরা অনলাইনে হয়রানির পরেও এগিয়ে গেছেন, তাঁদের কথা এখানে থাকবে। শুধু তাঁদের সম্মতিতে, নাম গোপন রেখে।'
          : 'Here we will keep the words of people who moved forward after online abuse. Only with their consent, and with names kept private.'}
      </p>

      <div className="row-card" data-open="true" style={{ maxWidth: 560, marginBlock: 32 }}>
        <div className="row-face" style={{ cursor: 'default' }}>
          <Row
            name={bn ? 'শেলফ এখনো খালি' : 'The shelf is empty'}
            hint={bn ? 'বানানো গল্প বসানো হবে না' : 'We will not invent stories'}
            status={{ on: false }}
          />
        </div>
        <div className="interior" style={{ gridTemplateRows: '1fr' }}>
          <div>
            <div className="interior-body">
              <p style={{ margin: 0 }}>
                {bn ? 'প্রতিটি গল্প আসবে সত্যিকারের মানুষের কাছ থেকে, তাঁর নিজের অনুমতিতে।' : 'Every story will come from a real person, with their own permission.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>{bn ? 'আপনার গল্প বলতে চাইলে' : 'If you want to share your story'}</h2>
      <ul className="donts" style={{ maxWidth: 640 }}>
        {terms.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p className="mono">
        {bn
          ? 'জমা দেওয়ার মাধ্যম এখনো ঠিক হয়নি। প্রকল্প দল চালু করলে এখানে জানানো হবে।'
          : 'The way to submit is not set up yet. It will be announced here once the project team opens it.'}
      </p>
      <p>
        <Link href={`/${lang}/help`}>{bn ? 'এখন কারও সঙ্গে কথা বলতে চাইলে' : 'If you want to talk to someone right now'}</Link>
      </p>

      <Disclaimer lang={lang} />
    </div>
  );
}
