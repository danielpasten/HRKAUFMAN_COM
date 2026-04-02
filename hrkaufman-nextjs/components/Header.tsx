'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'Firm Overview', href: '/firm-overview' },
  {
    label: 'Practice Areas',
    href: '/practice-areas',
    children: [
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
    ],
  },
  {
    label: 'Attorneys',
    href: '/attorneys',
    children: [
      { label: 'Henry R. Kaufman', href: '/attorneys/henry-r-kaufman' },
      { label: 'Michael K. Cantwell', href: '/attorneys/michael-k-cantwell' },
      { label: 'Carol A. Schrager', href: '/attorneys/carol-a-schrager' },
    ],
  },
  {
    label: 'Notable Developments',
    href: '/notable-developments',
    children: [
      { label: 'Defamation And Other First Amendment Issues', href: '/notable-developments/defamation-and-other-first-amendment-issues-and-litigation' },
      { label: 'Online/Social Media Litigation', href: '/notable-developments/onlinesocial-media-litigation-and-related-matters' },
      { label: 'Intellectual Property Litigation', href: '/notable-developments/intellectual-property-litigation' },
      { label: 'Intellectual Property Transactions', href: '/notable-developments/intellectual-property-transactions' },
      { label: 'Other Publishing & Entertainment Transactions', href: '/notable-developments/other-publishing-and-entertainment-transactions' },
      { label: 'Higher Education/Academic Freedom', href: '/notable-developments/higher-educationacademic-freedom' },
      { label: 'Pre-Publication Review', href: '/notable-developments/pre-publication-review' },
      { label: 'Publications And Presentations', href: '/notable-developments/publications-and-presentations' },
      { label: 'Retractions, Corrections or Clarifications', href: '/notable-developments/corrections-and-retractions' },
      { label: 'Miscellaneous Developments', href: '/notable-developments/miscellaneous-developments' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Papers, Briefs and Other Materials', href: '/resources/papers-briefs-and-other-materials' },
      { label: 'Amicus Curiae Briefs', href: '/resources/amicus-curiae-briefs' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F0E8] border-b-2 border-[#7B2323] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="text-[#7B2323]">
              <div
                className="font-bold leading-tight tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1rem, 2.5vw, 1.35rem)' }}
              >
                Henry R. Kaufman, P.C.
              </div>
              <div
                className="text-[#5A1A1A] italic leading-tight"
                style={{ fontFamily: "'PT Serif', Georgia, serif", fontSize: 'clamp(0.65rem, 1.5vw, 0.78rem)' }}
              >
                Media, First Amendment Law, Intellectual Property
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-[#1A1A1A] hover:text-[#7B2323] transition-colors duration-200"
                  style={{ fontFamily: "'PT Serif', Georgia, serif", fontSize: '0.82rem' }}
                >
                  {item.label}
                  {item.children && <span className="ml-1 text-[0.6rem]">▾</span>}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-72 bg-[#F5F0E8] border border-[#7B2323] border-t-2 shadow-lg z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-[0.8rem] text-[#1A1A1A] hover:bg-[#EDE7D9] hover:text-[#7B2323] border-b border-[#EDE7D9] last:border-0 transition-colors"
                        style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-[#7B2323]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#EDE7D9] bg-[#F5F0E8] max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-5 py-3 text-[#1A1A1A] font-semibold border-b border-[#EDE7D9] hover:bg-[#EDE7D9] hover:text-[#7B2323] transition-colors"
                style={{ fontFamily: "'PT Serif', Georgia, serif", fontSize: '0.9rem' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="bg-[#EDE7D9]">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-8 py-2.5 text-[0.82rem] text-[#3A3A3A] hover:text-[#7B2323] border-b border-[#E0D8C8] last:border-0 transition-colors"
                      style={{ fontFamily: "'PT Serif', Georgia, serif" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
