import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practice Areas | Henry R. Kaufman, P.C.",
};

const practiceAreas = [
  { label: 'Defamation Litigation', href: '/practice-areas/defamation-litigation' },
  { label: 'Reputation Defense', href: '/reputation-defense' },
  { label: 'Other First Amendment Issues and Litigation', href: '/practice-areas/other-first-amendment-issues-and-litigation' },
  { label: 'Intellectual Property Litigation', href: '/practice-areas/intellectual-property-litigation' },
  { label: 'Intellectual Property Transactions', href: '/practice-areas/intellectual-property-transactions' },
  { label: 'Other Publishing and Entertainment Transactions', href: '/practice-areas/other-publishing-and-entertainment-transactions' },
  { label: 'Pre-publication Review', href: '/practice-areas/pre-publication-review' },
  { label: 'Online/Social Media Legal Issues', href: '/practice-areas/onlinesocial-media-legal-issues' },
  { label: 'Higher Education | Academic Freedom', href: '/practice-areas/higher-education-academic-freedom' },
  { label: 'Amicus Brief Writing', href: '/practice-areas/amicus-brief-writing' },
];

export default function PracticeAreas() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-[#7B2323] mb-2 pb-3 border-b border-[#7B2323]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem' }}
      >
        Practice Areas
      </h1>
      <div className="mt-8">
        {practiceAreas.map((area) => (
          <Link
            key={area.href}
            href={area.href}
            className="flex items-center justify-between py-4 px-2 border-b border-[#EDE7D9] group hover:bg-[#EDE7D9] hover:px-4 transition-all duration-200"
            style={{ fontFamily: "'PT Serif', Georgia, serif" }}
          >
            <span className="text-[#1A1A1A] group-hover:text-[#7B2323] text-[1.02rem]">{area.label}</span>
            <span className="text-[#7B2323] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
