import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Disclaimer } from '@/components/Disclaimer';
import { Icon } from '@/components/Icons';
import { ProofShelf } from '@/components/ProofShelf';
import { StepBoxes, type Step } from '@/components/StepBoxes';
import { isLang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === 'bn' ? 'প্রমাণ সিল করুন' : 'Seal your proof' };
}

export default async function Evidence({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const bn = lang === 'bn';

  const donts = bn
    ? ['প্রমাণ সংগ্রহের আগে কাউকে ব্লক করবেন না', 'কোনো মেসেজ বা কমেন্ট ডিলিট করবেন না', 'নিজের আইডি ডিঅ্যাক্টিভেট করবেন না']
    : ['Do not block anyone before you collect proof', 'Do not delete any message or comment', 'Do not deactivate your own account'];

  const archiveLinks = [
    { href: 'https://archive.ph', label: 'archive.ph (Archive.today)' },
    { href: 'https://web.archive.org/save', label: 'web.archive.org' },
  ];

  const steps: Step[] = bn
    ? [
        {
          id: 'url',
          title: 'লিংক কপি করুন',
          body: ['আপত্তিকর পোস্ট, কমেন্ট বা প্রোফাইলের URL কপি করুন। একটি নোটে রাখুন, বা নিজের কাছে মেসেজ করে রাখুন।'],
        },
        {
          id: 'shot',
          title: 'স্ক্রিনশট নিন',
          body: ['স্ক্রিনশট ক্রপ করবেন না। তারিখ ও সময় যেন দেখা যায়। প্রতিটি হুমকি, কমেন্ট ও প্রোফাইলের আলাদা স্ক্রিনশট নিন।'],
          vault: true,
        },
        {
          id: 'record',
          title: 'স্ক্রিন রেকর্ড করুন',
          body: ['ফোনের স্ক্রিন রেকর্ডার চালু করুন। আপত্তিকর পোস্ট থেকে ক্লিক করে অপরাধীর প্রোফাইলে যাওয়ার পুরো প্রক্রিয়া রেকর্ড করুন।'],
          vault: true,
        },
        {
          id: 'archive',
          title: 'আর্কাইভ করুন',
          body: [
            'নিচের সাইটে পোস্ট বা প্রোফাইলের লিংক পেস্ট করে ‘Save’ করুন। এতে পোস্ট মুছে গেলেও প্রমাণ থাকে।',
            'বিকল্প: ব্রাউজারে পোস্টটি খুলে Print দিয়ে ‘Save as PDF’ করুন।',
          ],
          links: archiveLinks,
          vault: true,
        },
        {
          id: 'backup',
          title: 'মূল ফাইল নিরাপদে রাখুন',
          body: [
            'মেটাডেটা অক্ষুণ্ণ রাখতে মূল স্ক্রিনশট ও স্ক্রিন রেকর্ডিং গুগল ড্রাইভে আপলোড করুন, নিজের ইমেইলে অ্যাটাচমেন্ট হিসেবে পাঠান, অথবা সরাসরি পেনড্রাইভে কপি করুন।',
            'ফাইল এডিট বা রিনেম করবেন না। মূল কপি অক্ষত রাখুন।',
          ],
        },
      ]
    : [
        {
          id: 'url',
          title: 'Copy the link',
          body: ['Copy the URL of the abusive post, comment or profile. Save it in a note, or message it to yourself.'],
        },
        {
          id: 'shot',
          title: 'Take screenshots',
          body: ['Do not crop. Make sure the date and time are visible. Take a separate screenshot of each threat, comment and profile.'],
          vault: true,
        },
        {
          id: 'record',
          title: 'Record your screen',
          body: ['Turn on your phone’s screen recorder. Record the whole path: from the abusive post, tapping through to the offender’s profile.'],
          vault: true,
        },
        {
          id: 'archive',
          title: 'Archive it',
          body: [
            'Paste the link of the post or profile into one of these sites and press ‘Save’. The proof stays even if the post is deleted.',
            'Alternative: open the post in your browser, choose Print, then ‘Save as PDF’.',
          ],
          links: archiveLinks,
          vault: true,
        },
        {
          id: 'backup',
          title: 'Keep the originals safe',
          body: [
            'To keep the metadata intact, upload the original screenshots and recordings to Google Drive, email them to yourself as attachments, or copy them straight to a pen drive.',
            'Do not edit or rename the files. Keep the original copies untouched.',
          ],
        },
      ];

  return (
    <div className="rise">
      <h1>{bn ? 'আগে প্রমাণ' : 'Proof first'}</h1>
      <p className="lede">
        {bn
          ? 'পাঁচটি ধাপ। ঠিকভাবে রাখা প্রমাণ পুলিশ ও আদালতে কাজে লাগে। প্রতিটি বাক্স খুলুন, কাজ শেষ হলে সিল করুন।'
          : 'Five steps. Proof kept the right way holds up with the police and in court. Open each box, then seal it when the step is done.'}
      </p>

      <h2 style={{ fontSize: '1.125rem', marginBlock: '28px 8px' }}>{bn ? 'যে কাজ করবেন না' : 'What not to do'}</h2>
      <ul className="donts">
        {donts.map((d) => (
          <li key={d}>
            <Icon name="x" size={18} />
            {d}
          </li>
        ))}
      </ul>

      <h2>{bn ? 'যা যা করবেন' : 'What to do'}</h2>
      <StepBoxes lang={lang} steps={steps} />

      <h2>{bn ? 'আপনার প্রমাণ শেলফ' : 'Your proof shelf'}</h2>
      <ProofShelf lang={lang} />

      <Disclaimer lang={lang} />
    </div>
  );
}
