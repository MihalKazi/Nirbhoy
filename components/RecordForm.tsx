'use client';

import Link from 'next/link';
import { Icon } from './Icons';
import type { Lang } from '@/lib/i18n';
import { CASE_KEY, EMPTY_CASE, useLocal, type Case } from '@/lib/store';
import { Field, HarmChecks } from './CaseFields';

export function RecordForm({ lang }: { lang: Lang }) {
  const bn = lang === 'bn';
  const { value, update, clear } = useLocal<Case>(CASE_KEY, EMPTY_CASE);
  const patch = (p: Partial<Case>) => update((prev) => ({ ...prev, ...p }));

  return (
    <form className="panel" onSubmit={(e) => e.preventDefault()} autoComplete="off">
      <Field
        label={bn ? 'কবে ঘটেছে?' : 'When did it happen?'}
        hint={bn ? 'সঠিক তারিখ মনে না থাকলে আনুমানিক লিখুন।' : 'An approximate date is fine.'}
      >
        <input
          className="input"
          value={value.when}
          onChange={(e) => patch({ when: e.target.value })}
          placeholder={bn ? 'যেমন: ১২ সেপ্টেম্বর ২০২৬' : 'e.g. 12 September 2026'}
        />
      </Field>

      <Field
        label={bn ? 'কোথায় ঘটেছে?' : 'Where did it happen?'}
        hint={bn ? 'ফেসবুক, মেসেঞ্জার, হোয়াটসঅ্যাপ, টিকটক, ইমেইল…' : 'Facebook, Messenger, WhatsApp, TikTok, email…'}
      >
        <input className="input" value={value.platform} onChange={(e) => patch({ platform: e.target.value })} />
      </Field>

      <HarmChecks lang={lang} value={value} onChange={patch} />

      <Field
        label={bn ? 'নিজের ভাষায় লিখুন কী ঘটেছে' : 'In your own words, what happened'}
        hint={bn ? 'যতটুকু লিখতে পারেন। কোনো ভুল উত্তর নেই।' : 'Write what you can. There is no wrong answer.'}
      >
        <textarea className="textarea" rows={7} value={value.story} onChange={(e) => patch({ story: e.target.value })} />
      </Field>

      <p className="mono">
        {bn
          ? 'সেভ বাটন নেই। লিখলেই এই ডিভাইসে রাখা হয়। সার্ভারে কিছু যায় না।'
          : 'No save button. It is kept on this device as you type. Nothing goes to a server.'}
      </p>

      <div className="btn-row">
        <Link className="btn" href={`/${lang}/gd`}>
          {bn ? 'এটি দিয়ে জিডির খসড়া' : 'Use this for my GD draft'}
          <Icon name="arrow" size={20} />
        </Link>
        <button type="button" className="btn btn-line" onClick={() => window.print()}>
          {bn ? 'প্রিন্ট বা পিডিএফ' : 'Print or save as PDF'}
        </button>
        <button
          type="button"
          className="btn btn-line"
          onClick={() => {
            if (window.confirm(bn ? 'এই ডিভাইস থেকে সব লেখা মুছে ফেলবেন?' : 'Erase everything you wrote from this device?')) clear();
          }}
        >
          {bn ? 'সব মুছে ফেলুন' : 'Erase everything'}
        </button>
      </div>
    </form>
  );
}
