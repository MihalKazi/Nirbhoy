import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RowLink } from '@/components/Box';
import { Disclaimer } from '@/components/Disclaimer';
import { Icon } from '@/components/Icons';
import { HeroArt } from '@/components/Illustrations';
import { SituationList } from '@/components/SituationList';
import { digits, isLang } from '@/lib/i18n';
import { PLANS } from '@/lib/plans';

function HowSteps({ lang, className }: { lang: 'bn' | 'en'; className: string }) {
  const bn = lang === 'bn';
  const n = (v: number) => digits(lang, v);
  return (
    <ol className={className} aria-label={bn ? 'কীভাবে কাজ করে' : 'How it works'}>
      <li>
        <span className="howsteps-n">{n(1)}</span>
        {bn ? 'পরিস্থিতি বেছে নিন' : 'Pick your situation'}
      </li>
      <li>
        <span className="howsteps-n">{n(2)}</span>
        {bn ? 'ধাপগুলো অনুসরণ করুন' : 'Follow the steps'}
      </li>
      <li>
        <span className="howsteps-n">{n(3)}</span>
        {bn ? 'সহায়তা নিন' : 'Get help'}
      </li>
    </ol>
  );
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const bn = lang === 'bn';
  const n = (v: number) => digits(lang, v);

  const tools = [
    { href: '/evidence', icon: 'box' as const, name: bn ? 'প্রমাণ সংরক্ষণ' : 'Save proof' },
    { href: '/gd', icon: 'doc' as const, name: bn ? 'জিডির খসড়া' : 'GD draft' },
    { href: '/help', icon: 'phone' as const, name: bn ? 'সহায়তার নম্বর' : 'Help numbers' },
    { href: '/record', icon: 'pen' as const, name: bn ? 'লিখে রাখুন' : 'Write it down' },
  ];

  return (
    <div>
      <section className="hero rise">
        <HeroArt
          className="hero-art"
          label={bn ? 'একজন নারী নিরাপদে বসে ফোন দেখছেন' : 'A woman sitting safely, looking at her phone'}
        />
        <div>
          <h1>{bn ? 'আপনার সঙ্গে কী হচ্ছে?' : 'What is happening to you?'}</h1>
          <p className="lede">
            {bn
              ? 'যেটা মেলে সেটা বেছে নিন। আপনার জন্য ধাপে ধাপে পরিকল্পনা খুলবে।'
              : 'Pick what fits. A step-by-step plan opens for you.'}
          </p>
          <span className="reassure">
            <Icon name="heart" size={18} />
            {bn ? 'এটা আপনার দোষ নয়, আর আপনি একা নন।' : 'This is not your fault, and you are not alone.'}
          </span>
          <HowSteps lang={lang} className="howsteps howsteps-wide" />
        </div>
      </section>

      <div className="home-lists">
        <section>
          <ul className="wall">
            <li>
              <div className="row-card emergency" data-open="true">
                <div className="row-face" style={{ cursor: 'default' }}>
                  <span className="row-icon">
                    <Icon name="phone" />
                  </span>
                  <span className="row-text">
                    <span className="row-name">{bn ? 'আমি এখনই বিপদে আছি' : 'I am in danger right now'}</span>
                    <span className="row-hint">{bn ? 'জরুরি · ২৪/৭ · টোল-ফ্রি' : 'Emergency · 24/7 · toll-free'}</span>
                  </span>
                </div>
                <div className="interior">
                  <div>
                    <div className="interior-body" style={{ paddingInlineStart: 16 }}>
                      <div className="btn-row" style={{ marginTop: 0 }}>
                        <a className="btn btn-rose" href="tel:999">
                          <Icon name="phone" size={20} />
                          {bn ? `${n(999)} পুলিশ` : '999 Police'}
                        </a>
                        <a className="btn btn-line" href="tel:109">
                          <Icon name="phone" size={20} />
                          {bn ? `${n(109)} নারী ও শিশু` : '109 Women & children'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <SituationList lang={lang} plans={PLANS} />
            <li>
              <RowLink
                href={`/${lang}/help`}
                icon="info"
                name={bn ? 'আমার পরিস্থিতি এখানে নেই' : "My situation isn't here"}
                hint={bn ? 'তাতেও সমস্যা নেই। সরাসরি একজনের সঙ্গে কথা বলুন।' : "That's okay. Talk to someone directly."}
              />
            </li>
          </ul>
        </section>

        <aside>
          <HowSteps lang={lang} className="howsteps howsteps-narrow" />
          <h2 className="section-title">{bn ? 'সরাসরি টুল' : 'Go straight to a tool'}</h2>
          <ul className="tools">
            {tools.map((t) => (
              <li key={t.href}>
                <Link href={`/${lang}${t.href}`} className="tool-link">
                  <Icon name={t.icon} size={20} />
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="note" style={{ marginTop: 16 }}>
            {bn
              ? 'কিছুই কোথাও পাঠানো হয় না। দ্রুত বের হতে Esc দুবার চাপুন।'
              : 'Nothing is sent anywhere. Press Esc twice to leave fast.'}
          </p>
        </aside>
      </div>

      <Disclaimer lang={lang} />
    </div>
  );
}
