import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Henry R. Kaufman, P.C.",
};

const resources = [
  { label: 'Papers, Briefs and Other Materials', href: '/resources/papers-briefs-and-other-materials' },
  { label: 'Amicus Curiae Briefs', href: '/resources/amicus-curiae-briefs' },
];

export default function Resources() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-[#7B2323] mb-2 pb-3 border-b border-[#7B2323]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem' }}
      >
        Resources
      </h1>
      <div className="mt-8">
        {resources.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center justify-between py-4 px-2 border-b border-[#EDE7D9] group hover:bg-[#EDE7D9] hover:px-4 transition-all duration-200"
            style={{ fontFamily: "'PT Serif', Georgia, serif" }}
          >
            <span className="text-[#1A1A1A] group-hover:text-[#7B2323] text-[1.02rem]">{item.label}</span>
            <span className="text-[#7B2323] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
