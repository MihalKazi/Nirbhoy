export type Group = 'police' | 'legal' | 'support' | 'regulator';

export type Service = {
  id: string;
  group: Group;
  name: { bn: string; en: string };
  what: { bn: string; en: string };
  hours?: { bn: string; en: string };
  phones: { num: string; note?: { bn: string; en: string } }[];
  email?: string;
  womenOnly?: boolean;
};

// Source: DKC fellowship Proposal.docx. Verify every number before launch.
export const SERVICES: Service[] = [
  {
    id: 'pcsw',
    group: 'police',
    womenOnly: true,
    name: { bn: 'পুলিশ সাইবার সাপোর্ট ফর উইমেন (PCSW)', en: 'Police Cyber Support for Women (PCSW)' },
    what: {
      bn: 'শুধুমাত্র নারীদের জন্য সাইবার ও আইনি সহায়তা। নারী পুলিশ পরিচালিত।',
      en: 'Cyber and legal support for women only, run by women police officers.',
    },
    phones: [{ num: '01320000888' }],
    email: 'cybersupport.women@police.gov.bd',
  },
  {
    id: 'cid',
    group: 'police',
    name: { bn: 'সিআইডি সাইবার পুলিশ সেন্টার (CPC)', en: 'CID Cyber Police Centre (CPC)' },
    what: {
      bn: 'ফরেনসিক তদন্ত, আইপি ট্র্যাকিং ও আপত্তিকর কনটেন্ট সরানো।',
      en: 'Forensic investigation, IP tracking and removal of abusive content.',
    },
    hours: { bn: '২৪/৭', en: '24/7' },
    phones: [{ num: '01320010148' }, { num: '01320010146' }, { num: '01769691522' }],
    email: 'cyber@police.gov.bd',
  },
  {
    id: 'dmp-cyber',
    group: 'police',
    name: { bn: 'ডিএমপি সাইবার ক্রাইম বিভাগ (CTTC)', en: 'DMP Cyber Crime Division (CTTC)' },
    what: {
      bn: 'ঢাকা মেট্রোপলিটন এলাকায় সাইবার অপরাধ তদন্ত ও কারিগরি সহায়তা।',
      en: 'Cyber crime investigation and technical help within Dhaka Metropolitan area.',
    },
    phones: [{ num: '01320000888' }],
    email: 'cyberhelp@dmp.gov.bd',
  },
  {
    id: 'dmp-victim',
    group: 'police',
    womenOnly: true,
    name: { bn: 'ডিএমপি ভিকটিম সাপোর্ট সেন্টার', en: 'DMP Victim Support Centre' },
    what: {
      bn: 'নারী ভুক্তভোগীর তাৎক্ষণিক নিরাপত্তা, আইনি সহায়তা ও কাউন্সেলিং।',
      en: 'Immediate safety, legal help and counselling for women survivors.',
    },
    phones: [
      { num: '01320042055', note: { bn: 'কুইক রেসপন্স (QRT)', en: 'Quick Response (QRT)' } },
      { num: '01320042085', note: { bn: 'ডিউটি অফিসার', en: 'Duty officer' } },
      { num: '0241024848' },
    ],
  },
  {
    id: 'nes',
    group: 'police',
    name: { bn: 'জাতীয় জরুরি সেবা', en: 'National Emergency Service' },
    what: {
      bn: 'তাৎক্ষণিক শারীরিক নিরাপত্তার ঝুঁকিতে দ্রুত পুলিশি সহায়তা।',
      en: 'Fast police help when you are in immediate physical danger.',
    },
    hours: { bn: '২৪/৭, টোল-ফ্রি', en: '24/7, toll-free' },
    phones: [{ num: '999' }],
  },
  {
    id: 'nhv',
    group: 'support',
    womenOnly: true,
    name: {
      bn: 'নারী ও শিশু নির্যাতন প্রতিরোধ ন্যাশনাল হেল্পলাইন',
      en: 'National Helpline for Violence against Women & Children',
    },
    what: {
      bn: 'তাৎক্ষণিক আইনি পরামর্শ, পুলিশি সংযোগ ও মানসিক কাউন্সেলিং।',
      en: 'Instant legal advice, police connection and counselling.',
    },
    hours: { bn: '২৪/৭, টোল-ফ্রি', en: '24/7, toll-free' },
    phones: [{ num: '109' }],
  },
  {
    id: 'nlaso',
    group: 'legal',
    name: { bn: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা', en: 'National Legal Aid Services Organisation' },
    what: {
      bn: 'সরকারি খরচে বিনামূল্যে আইনজীবী ও আদালতে মামলা পরিচালনা।',
      en: 'A free government-paid lawyer and court representation.',
    },
    hours: { bn: 'টোল-ফ্রি', en: 'Toll-free' },
    phones: [{ num: '16699' }, { num: '16430' }],
  },
  {
    id: 'btrc',
    group: 'regulator',
    name: { bn: 'বিটিআরসি কমপ্লেইন সেল', en: 'BTRC Complaint Cell' },
    what: {
      bn: 'ক্ষতিকর ওয়েবসাইট বা আপত্তিকর লিংক ব্লক করার অভিযোগ।',
      en: 'Complaints to block harmful websites or abusive links.',
    },
    phones: [{ num: '100' }],
  },
  {
    id: 'ask',
    group: 'legal',
    name: { bn: 'আইন ও সালিশ কেন্দ্র (ASK)', en: 'Ain o Salish Kendra (ASK)' },
    what: {
      bn: 'বিনামূল্যে আইনি সহায়তা, মধ্যস্থতা ও মামলা পরিচালনা (বেসরকারি)।',
      en: 'Free legal help, mediation and case handling (non-government).',
    },
    hours: { bn: 'সকাল ৯টা – বিকাল ৫টা', en: '9 am – 5 pm' },
    phones: [{ num: '01724415677' }, { num: '01714025069' }, { num: '0258155991' }],
  },
  {
    id: 'blast',
    group: 'legal',
    name: { bn: 'বাংলাদেশ লিগ্যাল এইড অ্যান্ড সার্ভিসেস ট্রাস্ট (BLAST)', en: 'Bangladesh Legal Aid and Services Trust (BLAST)' },
    what: {
      bn: 'বিনামূল্যে আইনি পরামর্শ ও সাইবার ট্রাইব্যুনালে মামলা লড়া (বেসরকারি)।',
      en: 'Free legal advice and cases at the Cyber Tribunal (non-government).',
    },
    phones: [{ num: '01715220220' }, { num: '0223351464' }],
  },
  {
    id: 'bnwla',
    group: 'legal',
    womenOnly: true,
    name: { bn: 'বাংলাদেশ জাতীয় মহিলা আইনজীবী সমিতি (BNWLA)', en: 'Bangladesh National Woman Lawyers’ Association (BNWLA)' },
    what: {
      bn: 'সাইবার অপরাধের শিকার নারীদের পক্ষে বিনামূল্যে আইনি লড়াই।',
      en: 'Free legal action for women who are victims of cyber crime.',
    },
    phones: [{ num: '01711880777' }],
  },
  {
    id: 'mahila',
    group: 'support',
    womenOnly: true,
    name: { bn: 'বাংলাদেশ মহিলা পরিষদ', en: 'Bangladesh Mahila Parishad' },
    what: {
      bn: 'নারীর প্রতি সহিংসতা ও সাইবার অপরাধে আইনি ও সামাজিক সহায়তা।',
      en: 'Legal and social support on violence against women and cyber crime.',
    },
    phones: [
      { num: '029553849' },
      { num: '01717363647', note: { bn: 'ভিকটিম হেল্পলাইন', en: 'Victim helpline' } },
      { num: '01727209271', note: { bn: 'ভিকটিম হেল্পলাইন', en: 'Victim helpline' } },
    ],
  },
  {
    id: 'brac',
    group: 'legal',
    womenOnly: true,
    name: { bn: 'ব্র্যাক আইন সহায়তা কর্মসূচি (BRAC HRLS)', en: 'BRAC Human Rights & Legal Aid Services' },
    what: {
      bn: 'ভুক্তভোগী নারীদের আইনি পরামর্শ ও সহায়তা।',
      en: 'Legal advice and support for women survivors.',
    },
    phones: [{ num: '028831291' }],
  },
  {
    id: 'kpr',
    group: 'support',
    name: { bn: 'কান পেতে রই', en: 'Kaan Pete Roi' },
    what: {
      bn: 'সাইবার বুলিংয়ের ট্রমা ও মানসিক চাপে গোপনীয় মানসিক স্বাস্থ্য সহায়তা।',
      en: 'Confidential emotional support for cyberbullying trauma and distress.',
    },
    hours: { bn: 'গোপনীয়', en: 'Confidential' },
    phones: [{ num: '09612119911' }],
  },
];

export const GROUPS: { id: Group | 'all'; bn: string; en: string }[] = [
  { id: 'all', bn: 'সব', en: 'All' },
  { id: 'police', bn: 'পুলিশ ও তদন্ত', en: 'Police' },
  { id: 'legal', bn: 'আইনি সহায়তা', en: 'Legal aid' },
  { id: 'support', bn: 'কথা বলুন', en: 'Talk to someone' },
  { id: 'regulator', bn: 'লিংক সরানো', en: 'Remove content' },
];

export function formatPhone(num: string): string {
  if (/^01\d{9}$/.test(num)) return `${num.slice(0, 5)}-${num.slice(5)}`;
  if (/^09612\d{6}$/.test(num)) return `${num.slice(0, 5)}-${num.slice(5)}`;
  if (/^02\d+$/.test(num)) return `02-${num.slice(2)}`;
  return num;
}
