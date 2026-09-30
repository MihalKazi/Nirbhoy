import type { Lang } from '@/lib/i18n';

export function Disclaimer({ lang }: { lang: Lang }) {
  const bn = lang === 'bn';
  return (
    <p className="colophon">
      {bn ? (
        <>
          <strong>ডিসক্লেইমার:</strong> এই প্ল্যাটফর্মটি বর্তমানে একটি পরীক্ষামূলক প্রকল্প হিসেবে পরিচালিত হচ্ছে। সাইটের কাঠামো, তথ্য ও কারিগরি ফিচারগুলো পরিমার্জন ও উন্নত করা হবে। এটি আইনি পরামর্শের বিকল্প নয়।
        </>
      ) : (
        <>
          <strong>Disclaimer:</strong> This platform is currently an experimental pilot. The site structure, information and technical features will be refined and improved. It is not a substitute for legal advice.
        </>
      )}
    </p>
  );
}
