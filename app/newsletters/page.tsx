import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { site } from '../content';

export const metadata = {
  title: 'Reports & Newsletters | YOSA',
  description: 'YOSA reports and newsletters archive.',
};

export default function NewslettersPage() {
  return (
    <>
      <header className="bg-ink text-white">
        <div className="wrap flex h-24 items-center justify-between gap-6">
          <Link href="/" className="rounded-b-[42%] bg-white px-6 pb-5 pt-5">
            <img src="/brand/yosa-wordmark.svg" alt="YOSA home" className="w-36" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-xs font-extrabold text-white transition hover:bg-orange/90"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
        </div>
      </header>

      <main className="section min-h-[60vh] bg-[#f4f4f4]">
        <div className="wrap">
          <div className="eyebrow">Resources</div>
          <h1 className="heading">Reports &amp; Newsletters</h1>
        </div>
      </main>

      <footer className="bg-ink py-10 text-center text-xs text-white/60">
        <div className="wrap">
          © {new Date().getFullYear()} Youth Opportunities South Africa (YOSA) · {site.address}
        </div>
      </footer>
    </>
  );
}
