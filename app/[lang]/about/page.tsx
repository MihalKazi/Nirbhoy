import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Disclaimer } from '@/components/Disclaimer';
import { isLang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === 'bn' ? 'আমাদের কথা' : 'About us' };
}

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const bn = lang === 'bn';

  const forms = bn
    ? [
        ['ডক্সিং', 'ব্যক্তিগত নম্বর বা ঠিকানা ফাঁস করে দেওয়া।'],
        ['ডিপফেক ও এআই হয়রানি', 'ছবি বা ভিডিও এডিট বা বিকৃত করে ছড়ানো।'],
        ['হুমকি ও ব্ল্যাকমেইল', 'হত্যা, ধর্ষণ বা শারীরিক ক্ষতির হুমকি। ব্যক্তিগত ছবি ফাঁসের ভয় দেখানো।'],
        ['ভুয়া প্রোফাইল', 'আপনার নামে অ্যাকাউন্ট খুলে অপমান বা প্রতারণা করা।'],
      ]
    : [
        ['Doxxing', 'Leaking a personal number or address.'],
        ['Deepfakes and AI harassment', 'Editing or distorting photos or videos and spreading them.'],
        ['Threats and blackmail', 'Threats of murder, rape or physical harm. Threatening to leak private images.'],
        ['Fake profiles', 'Opening an account in your name to insult or cheat.'],
      ];

  const plans = bn
    ? [
        'অনলাইন কর্মশালা: তরুণ নারীদের ডিপফেক, এআই হয়রানি ও নিরাপদ থাকার উপায় জানানো।',
        'তথ্যচিত্র: টিএফজিবিভি থেকে ঘুরে দাঁড়ানোর গল্প।',
        'নির্ভয় ডেস্ক ও ক্যাম্পাস নেটওয়ার্ক: বিশ্ববিদ্যালয়ে ছাত্র স্বেচ্ছাসেবকদের সহায়তা।',
        '“দশ কার” কাউন্টার-মিম: নারীবিদ্বেষী মন্তব্যের জবাবে ইতিবাচক বার্তা।',
      ]
    : [
        'Online workshops: teaching young women about deepfakes, AI harassment and staying safe.',
        'A documentary: coming back from TFGBV.',
        'Nirbhoy desks and a campus network: student volunteers offering support at universities.',
        '“Dosh Kar” counter-meme project: positive replies to misogynistic remarks.',
      ];

  return (
    <div className="rise">
      <h1>{bn ? 'কেন আমরা আপনার পাশে' : 'Why we stand with you'}</h1>
      <p className="lede">
        {bn
          ? 'প্রযুক্তির মাধ্যমে ঘটা লিঙ্গভিত্তিক সহিংসতাকে বলে টিএফজিবিভি। এতে দোষ কখনো আপনার নয়।'
          : 'Violence against women through technology is called TFGBV. The fault is never yours.'}
      </p>

      <h2>{bn ? 'বাংলাদেশে টিএফজিবিভি' : 'TFGBV in Bangladesh'}</h2>
      <div className="panel">
        <p>
          {bn
            ? 'অনলাইনের হয়রানি অনলাইনে থেমে থাকে না। তা ঘর, ক্যাম্পাস ও কাজের জায়গায় নিরাপত্তার ঝুঁকি বানায়। এর কয়েকটি রূপ:'
            : 'Online abuse does not stay online. It puts safety at risk at home, on campus and at work. Some of its forms:'}
        </p>
        <ul style={{ paddingInlineStart: 20, margin: 0 }}>
          {forms.map(([t, d]) => (
            <li key={t} style={{ marginBottom: 8 }}>
              <strong>{t}.</strong> {d}
            </li>
          ))}
        </ul>
      </div>

      <h2>{bn ? 'এই প্রকল্প কী করতে চায়' : 'What this project sets out to do'}</h2>
      <p>
        {bn
          ? 'ডিজিটাল খিচুড়ি চ্যালেঞ্জের ডিজিটাল রেসপেক্ট অ্যান্ড কোহেশন ফেলোশিপ ২০২৬-এর অংশ হিসেবে আট মাসের এই উদ্যোগ। ডিজিটাল টুল, গল্পের শক্তি ও সরাসরি কমিউনিটির সঙ্গে কাজ, তিনটি মিলিয়ে।'
          : 'An eight-month initiative within the DKC Digital Respect & Cohesion Fellowship 2026. It combines digital tools, storytelling and direct work with communities.'}
      </p>
      <p className="note">
        <strong>{bn ? 'প্রস্তাবিত, এখনো চালু নয়' : 'Proposed, not yet running'}</strong>
        <br />
        {bn ? 'নিচের কাজগুলো পরিকল্পনার অংশ। কোনোটি চালু হয়ে গেছে বলে দাবি করা হচ্ছে না।' : 'The activities below are part of the plan. None is claimed to be running yet.'}
      </p>
      <ul className="donts" style={{ maxWidth: 760 }}>
        {plans.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <Disclaimer lang={lang} />
    </div>
  );
}
