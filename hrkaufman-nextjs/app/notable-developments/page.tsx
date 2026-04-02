import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notable Developments | Henry R. Kaufman, P.C.",
};

const developments = [
  { label: 'Defamation And Other First Amendment Issues And Litigation', href: '/notable-developments/defamation-and-other-first-amendment-issues-and-litigation' },
  { label: 'Online/Social Media Litigation and Related Matters', href: '/notable-developments/onlinesocial-media-litigation-and-related-matters' },
  { label: 'Intellectual Property Litigation', href: '/notable-developments/intellectual-property-litigation' },
  { label: 'Intellectual Property Transactions', href: '/notable-developments/intellectual-property-transactions' },
  { label: 'Other Publishing And Entertainment Transactions', href: '/notable-developments/other-publishing-and-entertainment-transactions' },
  { label: 'Higher Education/Academic Freedom', href: '/notable-developments/higher-educationacademic-freedom' },
  { label: 'Pre-Publication Review', href: '/notable-developments/pre-publication-review' },
  { label: 'Publications And Presentations', href: '/notable-developments/publications-and-presentations' },
  { label: 'Retractions, Corrections or Clarifications', href: '/notable-developments/corrections-and-retractions' },
  { label: 'Miscellaneous Developments', href: '/notable-developments/miscellaneous-developments' },
];

export default function NotableDevelopments() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-[#7B2323] mb-2 pb-3 border-b border-[#7B2323]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem' }}
      >
        Notable Developments
      </h1>
      <div className="mt-8">
        {developments.map((item) => (
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
