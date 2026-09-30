'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from './Icons';
import type { Lang } from '@/lib/i18n';
import { buildDraft } from '@/lib/gd';
import { CASE_KEY, EMPTY_CASE, useLocal, type Case } from '@/lib/store';
import { custodyLog, useVault } from '@/lib/vault';
import { Field, HarmChecks } from './CaseFields';

export function GdForm({ lang }: { lang: Lang }) {
  const bn = lang === 'bn';
  const { value, update, clear } = useLocal<Case>(CASE_KEY, EMPTY_CASE);
  const { items } = useVault();
  const [attach, setAttach] = useState(true);
  const [copied, setCopied] = useState(false);
  const patch = (p: Partial<Case>) => update((prev) => ({ ...prev, ...p }));
  const log = attach ? custodyLog(lang, items) : '';
  const draft = buildDraft(lang, value, log);

  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <div>
      <form className="panel" onSubmit={(e) => e.preventDefault()} autoComplete="off">
        <Field label={bn ? 'আপনার নাম' : 'Your name'} hint={bn ? 'ঐচ্ছিক। খসড়ায় বসবে।' : 'Optional. Goes into the draft.'}>
          <input className="input" value={value.name} onChange={(e) => patch({ name: e.target.value })} />
        </Field>

        <Field label={bn ? 'কোন থানায় জিডি করবেন?' : 'Which police station?'}>
          <input className="input" value={value.station} onChange={(e) => patch({ station: e.target.value })} />
        </Field>

        <Field
          label={bn ? 'মূল উস্কানিদাতার প্রোফাইল, পেজ বা গ্রুপ' : 'The main instigating profile, page or group'}
          hint={bn ? 'যেখান থেকে হামলার সূত্রপাত। নাম ও সরাসরি লিংক দিন।' : 'Where the attack started. Give the name and direct link.'}
        >
          <input className="input" value={value.instigator} onChange={(e) => patch({ instigator: e.target.value })} />
        </Field>

        <Field
          label={bn ? 'প্রধান আক্রমণকারীদের আইডি' : 'The main attackers'}
          hint={
            bn
              ? 'হত্যা, ধর্ষণ বা শারীরিক ক্ষতির হুমকি দেওয়া আইডিগুলোর লিংক। প্রতি লাইনে একটি।'
              : 'Links to IDs that threatened murder, rape or physical harm. One per line.'
          }
        >
          <textarea className="textarea" rows={4} value={value.attackers} onChange={(e) => patch({ attackers: e.target.value })} />
        </Field>

        <HarmChecks lang={lang} value={value} onChange={patch} />

        <Field
          label={bn ? 'কী ঘটেছে' : 'What happened'}
          hint={bn ? 'আমার কথা পাতা থেকে আসে। এখানেও বদলানো যায়।' : 'Comes from your record page. You can edit here too.'}
        >
          <textarea className="textarea" rows={5} value={value.story} onChange={(e) => patch({ story: e.target.value })} />
        </Field>

        <fieldset>
          <legend className="field-label">{bn ? 'আপনার কাছে কী কী প্রমাণ আছে?' : 'What proof do you hold?'}</legend>
          <div className="checks">
            <label className="check">
              <input type="checkbox" checked={value.hasShots} onChange={(e) => patch({ hasShots: e.target.checked })} />
              <span>{bn ? 'তারিখ-সময়সহ স্ক্রিনশট' : 'Screenshots with date and time'}</span>
            </label>
            <label className="check">
              <input type="checkbox" checked={value.hasRecording} onChange={(e) => patch({ hasRecording: e.target.checked })} />
              <span>{bn ? 'স্ক্রিন রেকর্ডিং' : 'Screen recording'}</span>
            </label>
            <label className="check">
              <input type="checkbox" checked={value.hasArchive} onChange={(e) => patch({ hasArchive: e.target.checked })} />
              <span>{bn ? 'আর্কাইভ লিংক বা পিডিএফ' : 'Archive links or PDFs'}</span>
            </label>
          </div>
        </fieldset>

        {items.length > 0 && (
          <label className="check" style={{ marginTop: 8 }}>
            <input type="checkbox" checked={attach} onChange={(e) => setAttach(e.target.checked)} />
            <span>
              {bn
                ? `প্রমাণ শেলফের হেফাজত-তালিকা সংযুক্ত করুন (${items.length}টি ফাইল, SHA-256)`
                : `Attach the proof shelf custody log (${items.length} files, SHA-256)`}
            </span>
          </label>
        )}
      </form>

      <h2>{bn ? 'আপনার জিডির খসড়া' : 'Your draft GD'}</h2>
      <pre className="draft" tabIndex={0} aria-label={bn ? 'জিডির খসড়া' : 'Draft GD'}>
        {draft}
      </pre>

      <div className="btn-row">
        <button type="button" className="btn" onClick={copy}>
          {copied ? (bn ? 'কপি হয়েছে' : 'Copied') : bn ? 'খসড়া কপি করুন' : 'Copy the draft'}
        </button>
        <button type="button" className="btn btn-line" onClick={() => window.print()}>
          {bn ? 'প্রিন্ট বা পিডিএফ' : 'Print or save as PDF'}
        </button>
        <a className="btn btn-line" href="https://gd.police.gov.bd/" target="_blank" rel="noopener noreferrer">
          {bn ? 'পুলিশের জিডি পোর্টাল' : 'Open the police GD portal'}
          <Icon name="arrow" size={20} />
        </a>
      </div>

      <p>
        {bn ? 'পোর্টালে এই লেখা পেস্ট করুন এবং সংরক্ষিত প্রমাণ সঙ্গে জমা দিন।' : 'Paste this text into the portal and submit your saved proof with it.'}{' '}
        <Link href={`/${lang}/evidence`}>{bn ? 'প্রমাণের ধাপ' : 'Proof steps'}</Link>
        {' / '}
        <Link href={`/${lang}/help`}>{bn ? 'সহায়তার নম্বর' : 'Help numbers'}</Link>
      </p>
      <p>
        <button
          type="button"
          className="btn-quiet"
          onClick={() => {
            if (window.confirm(bn ? 'এই ডিভাইস থেকে সব লেখা মুছে ফেলবেন?' : 'Erase everything you wrote from this device?')) clear();
          }}
        >
          {bn ? 'এই ডিভাইস থেকে সব মুছুন' : 'Erase everything from this device'}
        </button>
      </p>
    </div>
  );
}
