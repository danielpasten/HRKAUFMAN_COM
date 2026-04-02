import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Attorneys | Henry R. Kaufman, P.C.",
};

const attorneys = [
  { name: 'Henry R. Kaufman', href: '/attorneys/henry-r-kaufman', role: 'Principal' },
  { name: 'Michael K. Cantwell', href: '/attorneys/michael-k-cantwell', role: 'Of Counsel' },
  { name: 'Carol A. Schrager', href: '/attorneys/carol-a-schrager', role: 'Of Counsel' },
];

export default function Attorneys() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-[#7B2323] mb-2 pb-3 border-b border-[#7B2323]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem' }}
      >
        Attorneys
      </h1>
      <div className="mt-8 space-y-3">
        {attorneys.map((attorney) => (
          <Link
            key={attorney.href}
            href={attorney.href}
            className="flex items-center justify-between py-4 px-4 border border-[#EDE7D9] bg-[#EDE7D9] hover:bg-[#7B2323] hover:text-white group transition-colors duration-200"
            style={{ fontFamily: "'PT Serif', Georgia, serif" }}
          >
            <div>
              <div className="text-[1.1rem] font-semibold group-hover:text-white text-[#1A1A1A]">
                {attorney.name}
              </div>
              <div className="text-[0.82rem] text-[#5A5A5A] group-hover:text-[#EDE7D9] italic mt-0.5">
                {attorney.role}
              </div>
            </div>
            <span className="text-[#7B2323] group-hover:text-white text-lg">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
