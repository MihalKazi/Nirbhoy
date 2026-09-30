import { HARMS, type Case } from './store';
import type { Lang } from './i18n';

const BLANK = { bn: '……………', en: '……………' };

export function buildDraft(lang: Lang, c: Case, custody = ''): string {
  const bn = lang === 'bn';
  const annex = custody ? `\n\n${bn ? 'সংযুক্তি:' : 'Annex:'}\n${custody}` : '';
  const harms = HARMS.filter((h) => c.harms.includes(h.id)).map((h) => `- ${h[lang]}`);
  const attackers = c.attackers
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => `- ${l}`);

  const have: string[] = [];
  if (c.hasShots) have.push(bn ? '- তারিখ-সময়সহ স্ক্রিনশট (প্রিন্ট কপি)' : '- Screenshots showing date and time (printed copies)');
  if (c.hasRecording)
    have.push(
      bn
        ? '- আপত্তিকর পোস্ট থেকে অপরাধীর প্রোফাইলে যাওয়ার পুরো প্রক্রিয়ার স্ক্রিন রেকর্ডিং'
        : '- Screen recording of the full path from the abusive post to the offender’s profile',
    );
  if (c.hasArchive)
    have.push(
      bn
        ? '- আর্কাইভ করা লিংক / পিডিএফ (archive.ph, web.archive.org)'
        : '- Archived links / PDFs (archive.ph, web.archive.org)',
    );

  if (bn) {
    return [
      `বরাবর,`,
      `ভারপ্রাপ্ত কর্মকর্তা`,
      `${c.station || BLANK.bn} থানা`,
      ``,
      `বিষয়: অনলাইনে হয়রানি ও হুমকি সংক্রান্ত সাধারণ ডায়েরি (জিডি)।`,
      ``,
      `জনাব,`,
      `আমি ${c.name || BLANK.bn}। ${c.when ? `${c.when} তারিখে` : 'সম্প্রতি'}${c.platform ? ` ${c.platform} মাধ্যমে` : ' অনলাইনে'} আমি নিম্নোক্ত ঘটনার শিকার হয়েছি।`,
      ``,
      `মূল উস্কানিদাতার প্রোফাইল, পেজ বা গ্রুপ (নাম ও সরাসরি লিংক):`,
      c.instigator || BLANK.bn,
      ``,
      `প্রধান আক্রমণকারীদের আইডি ও লিংক:`,
      ...(attackers.length ? attackers : [BLANK.bn]),
      ``,
      `হামলার ধরন:`,
      ...(harms.length ? harms : [BLANK.bn]),
      ``,
      `ঘটনার বিবরণ:`,
      c.story || BLANK.bn,
      ``,
      `আমার কাছে সংরক্ষিত প্রমাণ:`,
      ...(have.length ? have : [BLANK.bn]),
      ``,
      `অতএব, বিষয়টি তদন্ত করে প্রয়োজনীয় আইনি ব্যবস্থা নেওয়ার জন্য বিনীত অনুরোধ জানাচ্ছি।`,
      ``,
      `বিনীত,`,
      c.name || BLANK.bn,
      `যোগাযোগ: ……………`,
    ].join('\n') + annex;
  }

  return [
    `To,`,
    `The Officer in Charge`,
    `${c.station || BLANK.en} Police Station`,
    ``,
    `Subject: General Diary (GD) about online harassment and threats.`,
    ``,
    `Sir/Madam,`,
    `I am ${c.name || BLANK.en}. ${c.when ? `On ${c.when}` : 'Recently'}${c.platform ? `, on ${c.platform},` : ', online,'} I was subjected to the following.`,
    ``,
    `Main instigating profile, page or group (name and direct link):`,
    c.instigator || BLANK.en,
    ``,
    `Main attackers (IDs and links):`,
    ...(attackers.length ? attackers : [BLANK.en]),
    ``,
    `Type of attack:`,
    ...(harms.length ? harms : [BLANK.en]),
    ``,
    `What happened:`,
    c.story || BLANK.en,
    ``,
    `Evidence I hold:`,
    ...(have.length ? have : [BLANK.en]),
    ``,
    `I therefore humbly request that the matter be investigated and appropriate legal action taken.`,
    ``,
    `Yours faithfully,`,
    c.name || BLANK.en,
    `Contact: ……………`,
  ].join('\n') + annex;
}
