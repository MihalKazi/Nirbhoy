import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Disclaimer } from '@/components/Disclaimer';
import { Icon } from '@/components/Icons';
import { TogetherArt } from '@/components/Illustrations';
import { PlanSteps } from '@/components/PlanSteps';
import { digits, isLang, LANGS } from '@/lib/i18n';
import { PLANS } from '@/lib/plans';

export function generateStaticParams() {
  return LANGS.flatMap((lang) => PLANS.map((p) => ({ lang, id: p.id })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }): Promise<Metadata> {
  const { lang, id } = await params;
  const plan = PLANS.find((p) => p.id === id);
  if (!plan || !isLang(lang)) return {};
  return { title: plan.name[lang] };
}

export default async function PlanPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  if (!isLang(lang)) notFound();
  const plan = PLANS.find((p) => p.id === id);
  if (!plan) notFound();
  const bn = lang === 'bn';

  return (
    <div className="rise">
      <p className="eyebrow" style={{ marginBottom: 8 }}>
        <Link href={`/${lang}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon name="back" size={16} />
          {bn ? 'সব পরিস্থিতি' : 'All situations'}
        </Link>
      </p>
      {plan.id === 'friend' && (
        <TogetherArt className="page-art" label={bn ? 'দুই বন্ধু পাশাপাশি' : 'Two friends side by side'} />
      )}
      <h1 className="plan-title">{plan.name[lang]}</h1>
      <p className="lede">{plan.lede[lang]}</p>

      {plan.urgent && (
        <div className="urgent" role="alert">
          <p>{plan.urgent[lang]}</p>
          <a className="btn btn-rose" href="tel:999">
            <Icon name="phone" size={20} />
            {bn ? `${digits(lang, 999)} এ কল` : 'Call 999'}
          </a>
        </div>
      )}

      {plan.donts && (
        <>
          <h2 style={{ fontSize: '1.125rem', marginBlock: '28px 8px' }}>{bn ? 'যা করবেন না' : 'Do not'}</h2>
          <ul className="donts">
            {plan.donts.map((d) => (
              <li key={d.en}>
                <Icon name="x" size={18} />
                {d[lang]}
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>{bn ? 'আপনার পরিকল্পনা' : 'Your plan'}</h2>
      <PlanSteps lang={lang} plan={plan} />

      <h2>{bn ? 'অন্য পরিস্থিতি' : 'Other situations'}</h2>
      <ul className="other-plans">
        {PLANS.filter((p) => p.id !== plan.id).map((p) => (
          <li key={p.id}>
            <Link href={`/${lang}/plan/${p.id}`}>{p.name[lang]}</Link>
          </li>
        ))}
      </ul>

      <Disclaimer lang={lang} />
    </div>
  );
}
