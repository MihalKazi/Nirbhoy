import type { IconKey } from '@/components/Icons';

// Situation-based action plans. Content derived from the proposal doc plus
// public platform help. Verify every external link before launch.

type T = { bn: string; en: string };

export type PlanLink = { href: string; label: T; internal?: boolean };

export type PlanStep = {
  title: T;
  body: T[];
  links?: PlanLink[];
  platforms?: boolean;
};

export type Plan = {
  id: string;
  icon: IconKey;
  tone: 'brick' | 'steel' | 'violet' | 'kraft' | 'forest' | 'ink';
  name: T;
  hint: T;
  lede: T;
  urgent?: T;
  donts?: T[];
  steps: PlanStep[];
};

const L = {
  evidence: { href: '/evidence', internal: true, label: { bn: 'প্রমাণ সংরক্ষণের ধাপ', en: 'Proof-saving steps' } },
  gd: { href: '/gd', internal: true, label: { bn: 'জিডির খসড়া তৈরি করুন', en: 'Draft your GD' } },
  help: { href: '/help', internal: true, label: { bn: 'সব সহায়তার নম্বর', en: 'All help numbers' } },
  stopncii: { href: 'https://stopncii.org', label: { bn: 'StopNCII.org (১৮+ বয়সীদের জন্য)', en: 'StopNCII.org (18 and over)' } },
  takeitdown: { href: 'https://takeitdown.ncmec.org', label: { bn: 'Take It Down (১৮ বছরের কম হলে)', en: 'Take It Down (under 18)' } },
  google: {
    href: 'https://support.google.com/websearch/answer/6302812',
    label: { bn: 'গুগল সার্চ থেকে ছবি সরানোর আবেদন', en: 'Ask Google to remove images from Search' },
  },
  fbHacked: { href: 'https://www.facebook.com/hacked', label: { bn: 'ফেসবুক: হ্যাক হওয়া অ্যাকাউন্ট উদ্ধার', en: 'Facebook: recover a hacked account' } },
  fbCheckup: { href: 'https://www.facebook.com/privacy/checkup', label: { bn: 'ফেসবুক প্রাইভেসি চেকআপ', en: 'Facebook Privacy Checkup' } },
  gCheckup: {
    href: 'https://myaccount.google.com/security-checkup',
    label: { bn: 'গুগল অ্যাকাউন্ট সিকিউরিটি চেকআপ', en: 'Google Security Checkup' },
  },
} satisfies Record<string, PlanLink>;

const pcsw: PlanStep = {
  title: { bn: 'পুলিশকে জানান, জিডি করুন', en: 'Tell the police, file a GD' },
  body: [
    {
      bn: 'নারী পুলিশ পরিচালিত পুলিশ সাইবার সাপোর্ট ফর উইমেন (PCSW): ০১৩২০-০০০৮৮৮। প্রমাণ সঙ্গে রাখুন। জিডির খসড়া আমরা তৈরি করে দিই।',
      en: 'Police Cyber Support for Women (PCSW), run by women officers: 01320-000888. Keep your proof with you. We draft the GD for you.',
    },
  ],
  links: [L.gd, L.help],
};

const talk: PlanStep = {
  title: { bn: 'একা বইবেন না', en: 'Do not carry this alone' },
  body: [
    {
      bn: 'বিশ্বস্ত একজনকে বলুন। মন ভেঙে গেলে কান পেতে রই (০৯৬১২-১১৯৯১১) গোপনে কথা শোনে। নারী ও শিশু হেল্পলাইন ১০৯, ২৪ ঘণ্টা, টোল-ফ্রি।',
      en: 'Tell one person you trust. If you feel overwhelmed, Kaan Pete Roi (09612-119911) listens in confidence. The women and children helpline 109 is free, 24 hours.',
    },
  ],
  links: [L.help],
};

const save: PlanStep = {
  title: { bn: 'আগে প্রমাণ রাখুন', en: 'Save the proof first' },
  body: [
    {
      bn: 'লিংক কপি, ক্রপ না করা স্ক্রিনশট, স্ক্রিন রেকর্ডিং। তারপর রিপোর্ট বা ব্লক। ফাইলগুলো প্রমাণ শেলফে রাখলে ডিজিটাল ছাপ (SHA-256) তৈরি হয়। ফাইল ফোনের বাইরে যায় না।',
      en: 'Copy links, take uncropped screenshots, record the screen. Only then report or block. Put the files on the proof shelf to get a digital fingerprint (SHA-256). Files never leave your phone.',
    },
  ],
  links: [L.evidence],
};

export const PLANS: Plan[] = [
  {
    id: 'leak',
    icon: 'lock',
    tone: 'brick',
    name: { bn: 'আমার ব্যক্তিগত ছবি বা ভিডিও ছড়ানো হয়েছে, বা হুমকি দিচ্ছে', en: 'My private photo or video is shared, or someone threatens to share it' },
    hint: { bn: 'ব্ল্যাকমেইল · ছড়িয়ে পড়া বন্ধ করা', en: 'Blackmail / stop the spread' },
    lede: {
      bn: 'এটা আপনার দোষ নয়। দোষ যে ছড়াচ্ছে বা হুমকি দিচ্ছে তার। এখন যত দ্রুত সম্ভব ছড়ানো থামানোই প্রধান কাজ।',
      en: 'This is not your fault. The fault is with whoever shares or threatens. The main job now is to stop it spreading, fast.',
    },
    urgent: {
      bn: 'ব্ল্যাকমেইল করলে টাকা দেবেন না, আর কোনো ছবি পাঠাবেন না। টাকা দিলেও সাধারণত দাবি থামে না।',
      en: 'If you are being blackmailed: do not pay and do not send anything more. Paying usually does not end the demands.',
    },
    donts: [
      { bn: 'চ্যাট ডিলিট করবেন না', en: 'Do not delete the chat' },
      { bn: 'পাল্টা হুমকি দেবেন না', en: 'Do not threaten back' },
      { bn: 'ছবিটি কাউকে ফরোয়ার্ড করবেন না, প্রমাণ হিসেবেও না', en: 'Do not forward the image to anyone, not even as proof' },
    ],
    steps: [
      save,
      {
        title: { bn: 'ছড়িয়ে পড়া আটকান', en: 'Block it from spreading' },
        body: [
          {
            bn: 'StopNCII আপনার ফোনেই ছবির একটি ছাপ (hash) তৈরি করে। ছবি আপলোড হয় না। অংশীদার প্ল্যাটফর্মগুলো (যেমন ফেসবুক, ইনস্টাগ্রাম, টিকটক) সেই ছাপ মিলিয়ে একই ছবি আটকায়।',
            en: 'StopNCII makes a fingerprint (hash) of the image on your own phone. The image is not uploaded. Partner platforms (such as Facebook, Instagram, TikTok) use it to block the same image.',
          },
          { bn: 'বয়স ১৮-এর কম হলে Take It Down ব্যবহার করুন।', en: 'If you are under 18, use Take It Down.' },
        ],
        links: [L.stopncii, L.takeitdown],
      },
      {
        title: { bn: 'যেখানে পোস্ট হয়েছে, সেখানে রিপোর্ট করুন', en: 'Report it where it is posted' },
        body: [{ bn: 'কারণ হিসেবে "নগ্নতা" বা "অনুমতি ছাড়া ব্যক্তিগত ছবি" বেছে নিন।', en: 'Choose "nudity" or "private images shared without consent" as the reason.' }],
        platforms: true,
        links: [L.google],
      },
      pcsw,
      talk,
    ],
  },
  {
    id: 'deepfake',
    icon: 'doc',
    tone: 'violet',
    name: { bn: 'আমার ছবি এডিট বা এআই দিয়ে নকল (ডিপফেক) বানানো হয়েছে', en: 'My photo was edited or faked with AI (deepfake)' },
    hint: { bn: 'ভুয়া ছবি · সরানো · পরিবারকে বোঝানো', en: 'Fake images / removal / telling family' },
    lede: {
      bn: 'নকল ছবি আপনার সত্য নয়। এটি বানানো ও ছড়ানো হয়রানি, এবং পুলিশে রিপোর্ট করা যায়।',
      en: 'A fake image is not your truth. Making and spreading it is harassment, and it can be reported to the police.',
    },
    steps: [
      save,
      {
        title: { bn: 'মূল ছবিটি খুঁজে রাখুন', en: 'Find your original photo' },
        body: [
          {
            bn: 'কোন আসল ছবি থেকে নকলটা বানানো, সেটি খুঁজে সংরক্ষণ করুন। পাশাপাশি রাখলে নকল প্রমাণ করা সহজ।',
            en: 'Find and keep the real photo the fake was made from. Side by side, the fake is easier to prove.',
          },
        ],
      },
      {
        title: { bn: 'রিপোর্ট করুন ও সরান', en: 'Report and remove' },
        body: [
          {
            bn: 'প্ল্যাটফর্মে রিপোর্ট করুন। যৌন ধরনের নকল হলে StopNCII-ও কাজে লাগতে পারে (১৮+)।',
            en: 'Report on the platform. If the fake is sexual, StopNCII may also help (18 and over).',
          },
        ],
        platforms: true,
        links: [L.stopncii, L.google],
      },
      {
        title: { bn: 'পরিবারকে আগে থেকে জানান', en: 'Tell family before someone else does' },
        body: [
          {
            bn: 'একটি ছোট বার্তা তৈরি রাখুন: "আমার ছবি এডিট করে নকল বানিয়ে ছড়ানো হচ্ছে। এটি আমি নই। আমি পুলিশে জানাচ্ছি।"',
            en: 'Keep a short message ready: "Someone edited my photo into a fake and is spreading it. It is not me. I am reporting it to the police."',
          },
        ],
      },
      pcsw,
      talk,
    ],
  },
  {
    id: 'hacked',
    icon: 'key',
    tone: 'steel',
    name: { bn: 'আমার অ্যাকাউন্ট হ্যাক হয়েছে, বা আমার নামে ভুয়া আইডি', en: 'My account was hacked, or there is a fake profile of me' },
    hint: { bn: 'উদ্ধার · পাসওয়ার্ড · টু-ফ্যাক্টর', en: 'Recover / password / two-factor' },
    lede: {
      bn: 'দ্রুত নিয়ন্ত্রণ ফেরত নিন। হ্যাক হওয়া আইডি থেকে প্রায়ই পরিচিতদের কাছে টাকা বা ছবি চাওয়া হয়।',
      en: 'Take control back fast. Hacked accounts are often used to ask your contacts for money or photos.',
    },
    steps: [
      {
        title: { bn: 'অ্যাকাউন্ট উদ্ধার করুন', en: 'Recover the account' },
        body: [{ bn: 'অফিসিয়াল উদ্ধার পাতা ব্যবহার করুন। অন্য কাউকে পাসওয়ার্ড বা কোড দেবেন না।', en: 'Use the official recovery pages. Never give your password or codes to anyone.' }],
        links: [L.fbHacked, L.gCheckup],
      },
      {
        title: { bn: 'দরজা বন্ধ করুন', en: 'Lock the doors' },
        body: [
          {
            bn: 'নতুন শক্ত পাসওয়ার্ড দিন। টু-ফ্যাক্টর অথেনটিকেশন চালু করুন। "কোথায় লগইন আছে" থেকে অচেনা ডিভাইস লগআউট করুন। রিকভারি ইমেইল ও নম্বর আপনার কি না দেখুন।',
            en: 'Set a new strong password. Turn on two-factor authentication. Log out unknown devices under "Where you are logged in". Check the recovery email and phone are yours.',
          },
        ],
        links: [L.fbCheckup],
      },
      {
        title: { bn: 'বন্ধুদের সতর্ক করুন', en: 'Warn your friends' },
        body: [
          {
            bn: 'অন্য মাধ্যমে জানান: "আমার আইডি থেকে টাকা বা ছবি চাইলে দেবেন না, রিপোর্ট করুন।"',
            en: 'Tell them through another channel: "If my account asks for money or photos, do not send, report it."',
          },
        ],
      },
      {
        title: { bn: 'ভুয়া আইডি রিপোর্ট করুন', en: 'Report the fake profile' },
        body: [
          {
            bn: 'প্রোফাইলে গিয়ে রিপোর্ট → "অন্য কেউ সেজে আছে" → "আমি"। বন্ধুদেরও রিপোর্ট করতে বলুন।',
            en: 'On the profile: Report → "Pretending to be someone" → "Me". Ask friends to report it too.',
          },
        ],
        platforms: true,
      },
      save,
      pcsw,
    ],
  },
  {
    id: 'doxx',
    icon: 'home',
    tone: 'brick',
    name: { bn: 'আমার নম্বর বা ঠিকানা ফাঁস করে দেওয়া হয়েছে', en: 'My phone number or address was posted' },
    hint: { bn: 'শারীরিক নিরাপত্তা আগে', en: 'Physical safety first' },
    lede: {
      bn: 'ঠিকানা ফাঁস মানে ঝুঁকি অনলাইনের বাইরে চলে এসেছে। আগে নিজের নিরাপত্তা।',
      en: 'A leaked address means the risk has left the screen. Your safety comes first.',
    },
    urgent: {
      bn: 'কেউ আসার হুমকি দিলে বা আশেপাশে সন্দেহজনক কাউকে দেখলে এখনই ৯৯৯-এ কল করুন।',
      en: 'If someone threatens to come, or you see someone suspicious nearby, call 999 now.',
    },
    steps: [
      {
        title: { bn: 'নিরাপত্তার পরিকল্পনা', en: 'A safety plan' },
        body: [
          {
            bn: 'পরিবার বা বিশ্বস্ত কাউকে জানান। কিছুদিন একা চলাচল কমান, পথ বদলান। ফোন চার্জে রাখুন। বিশ্বস্ত কারও সঙ্গে লাইভ লোকেশন শেয়ার করুন।',
            en: 'Tell family or someone you trust. For a while, avoid going alone and vary your routes. Keep your phone charged. Share live location with someone you trust.',
          },
        ],
      },
      save,
      {
        title: { bn: 'পোস্ট রিপোর্ট করুন', en: 'Report the post' },
        body: [{ bn: 'কারণ: "ব্যক্তিগত তথ্য প্রকাশ"।', en: 'Reason: "sharing private information".' }],
        platforms: true,
      },
      {
        title: { bn: 'প্রোফাইল লক করুন', en: 'Lock your profile' },
        body: [
          {
            bn: 'ফোন নম্বর, ইমেইল, বন্ধু তালিকা "শুধু আমি" করুন। পুরনো পোস্ট থেকে ঠিকানা বা লোকেশন সরান।',
            en: 'Set phone number, email and friend list to "Only me". Remove your address or location from old posts.',
          },
        ],
        links: [L.fbCheckup],
      },
      {
        title: { bn: 'অচেনা কল লিখে রাখুন', en: 'Log unknown calls' },
        body: [
          {
            bn: 'অচেনা নম্বরে কথা বাড়াবেন না। নম্বর, তারিখ ও সময় লিখে রাখুন। এটাও প্রমাণ।',
            en: 'Do not engage with unknown callers. Write down each number, date and time. That is proof too.',
          },
        ],
        links: [{ href: '/record', internal: true, label: { bn: 'আমার কথায় লিখুন', en: 'Write it in My record' } }],
      },
      pcsw,
    ],
  },
  {
    id: 'harass',
    icon: 'phone',
    tone: 'kraft',
    name: { bn: 'কেউ হুমকি, গালি বা হয়রানি করছে', en: 'Someone threatens, abuses or harasses me' },
    hint: { bn: 'কমেন্ট · মেসেজ · হুমকি', en: 'Comments / messages / threats' },
    lede: {
      bn: 'আপনি চুপ থাকার জন্য দায়ী নন, জবাব দেওয়ার জন্যও নন। আগে প্রমাণ, তারপর সীমা টানুন।',
      en: 'You owe no one silence, and no one a reply. Proof first, then draw the line.',
    },
    donts: [
      { bn: 'তর্ক বা পাল্টা গালি দেবেন না', en: 'Do not argue or insult back' },
      { bn: 'প্রমাণ রাখার আগে ব্লক করবেন না', en: 'Do not block before saving proof' },
    ],
    steps: [
      save,
      {
        title: { bn: 'সীমা টানুন', en: 'Draw the line' },
        body: [
          {
            bn: 'প্রমাণ রাখার পর: Restrict বা Mute করুন, কমেন্ট সীমিত করুন, তারপর ব্লক করুন।',
            en: 'After saving proof: restrict or mute, limit who can comment, then block.',
          },
        ],
        platforms: true,
      },
      {
        title: { bn: 'হত্যা বা ধর্ষণের হুমকি গুরুতর', en: 'Threats of murder or rape are serious' },
        body: [
          {
            bn: 'এমন হুমকি পেলে দেরি না করে PCSW বা ৯৯৯-এ জানান এবং জিডি করুন।',
            en: 'If you receive such threats, contact PCSW or 999 without delay and file a GD.',
          },
        ],
        links: [L.gd],
      },
      talk,
    ],
  },
  {
    id: 'friend',
    icon: 'heart',
    tone: 'forest',
    name: { bn: 'আমার পরিচিত কেউ এর শিকার, কীভাবে পাশে দাঁড়াব', en: 'Someone I know is going through this. How do I help?' },
    hint: { bn: 'বিশ্বাস করুন · দোষ দেবেন না', en: 'Believe her / do not blame' },
    lede: {
      bn: 'বেশিরভাগ মানুষ প্রথমে একজন বন্ধুকেই বলে। আপনার প্রথম কথাটাই তার পরের পদক্ষেপ ঠিক করে দিতে পারে।',
      en: 'Most people tell a friend first. Your first words can decide what she does next.',
    },
    donts: [
      { bn: '"ছবি পাঠিয়েছিলে কেন?" জিজ্ঞেস করবেন না', en: 'Do not ask "why did you send it?"' },
      { bn: 'ছবি বা পোস্ট আর কাউকে দেখাবেন না', en: 'Do not show the image or post to anyone else' },
      { bn: 'একা অপরাধীর মুখোমুখি হবেন না', en: 'Do not confront the attacker alone' },
    ],
    steps: [
      {
        title: { bn: 'বিশ্বাস করুন, বলুন', en: 'Believe her, and say it' },
        body: [{ bn: '"এটা তোমার দোষ না। আমি তোমার পাশে আছি।"', en: '"This is not your fault. I am with you."' }],
      },
      {
        title: { bn: 'সিদ্ধান্ত তার', en: 'The decisions are hers' },
        body: [
          {
            bn: 'পরিবার, পুলিশ বা রিপোর্ট, কখন কী করবে সে ঠিক করবে। আপনি পাশে থেকে ধাপগুলো সহজ করুন।',
            en: 'Family, police, reporting: she decides what and when. You make the steps easier by staying beside her.',
          },
        ],
      },
      {
        title: { bn: 'একসঙ্গে পরিকল্পনা খুলুন', en: 'Open the right plan together' },
        body: [{ bn: 'কী ঘটেছে সেই অনুযায়ী শুরুর পাতা থেকে পরিকল্পনা বেছে নিন।', en: 'Pick the plan that matches what happened from the start page.' }],
        links: [{ href: '', internal: true, label: { bn: 'শুরুর পাতা', en: 'Start page' } }],
      },
      {
        title: { bn: 'নিজের যত্নও নিন', en: 'Look after yourself too' },
        body: [{ bn: 'কারও পাশে থাকা ভারী কাজ। আপনিও কথা বলতে পারেন।', en: 'Standing by someone is heavy. You can talk to someone too.' }],
        links: [L.help],
      },
    ],
  },
];

export const PLATFORMS: { name: string; how: T; help: string }[] = [
  {
    name: 'Facebook / Messenger',
    how: { bn: 'পোস্ট, প্রোফাইল বা মেসেজে ⋯ চাপুন → Report → কারণ বেছে নিন।', en: 'Tap ⋯ on the post, profile or message → Report → choose the reason.' },
    help: 'https://www.facebook.com/help',
  },
  {
    name: 'Instagram',
    how: { bn: 'পোস্ট বা প্রোফাইলে ⋯ চাপুন → Report।', en: 'Tap ⋯ on the post or profile → Report.' },
    help: 'https://help.instagram.com',
  },
  {
    name: 'TikTok',
    how: { bn: 'ভিডিওতে চেপে ধরুন বা Share → Report।', en: 'Press and hold the video, or tap Share → Report.' },
    help: 'https://support.tiktok.com',
  },
  {
    name: 'YouTube',
    how: { bn: 'ভিডিওর ⋮ মেনু → Report।', en: 'Video ⋮ menu → Report.' },
    help: 'https://support.google.com/youtube',
  },
  {
    name: 'WhatsApp',
    how: { bn: 'চ্যাট খুলে নামের ওপর চাপুন → Report।', en: 'Open the chat, tap the name → Report.' },
    help: 'https://faq.whatsapp.com',
  },
];
