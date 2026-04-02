'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const HEADER_IMAGES = [
  '/wp-content/themes/hrkaufman/images/headers/chessboard.jpg',
  '/wp-content/themes/hrkaufman/images/headers/hanoi.jpg',
  '/wp-content/themes/hrkaufman/images/headers/lanterns.jpg',
  '/wp-content/themes/hrkaufman/images/headers/pine-cone.jpg',
  '/wp-content/themes/hrkaufman/images/headers/shore.jpg',
  '/wp-content/themes/hrkaufman/images/headers/trolley.jpg',
  '/wp-content/themes/hrkaufman/images/headers/wheel.jpg',
  '/wp-content/themes/hrkaufman/images/headers/willow.jpg',
];

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
      { label: 'Defamation And Other First Amendment Issues And Litigation', href: '/notable-developments/defamation-and-other-first-amendment-issues-and-litigation' },
      { label: 'Online/Social Media Litigation and Related Matters', href: '/notable-developments/onlinesocial-media-litigation-and-related-matters' },
      { label: 'Intellectual Property Litigation', href: '/notable-developments/intellectual-property-litigation' },
      { label: 'Intellectual Property Transactions', href: '/notable-developments/intellectual-property-transactions' },
      { label: 'Other Publishing And Entertainment Transactions', href: '/notable-developments/other-publishing-and-entertainment-transactions' },
      { label: 'Higher Education/Academic Freedom', href: '/notable-developments/higher-educationacademic-freedom' },
      { label: 'Pre-Publication Review', href: '/notable-developments/pre-publication-review' },
      { label: 'Publications And Presentations', href: '/notable-developments/publications-and-presentations' },
      { label: 'Retractions, Corrections or Clarifications', href: '/corrections-and-retractions' },
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
  const [headerImg, setHeaderImg] = useState(HEADER_IMAGES[1]); // default: hanoi
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setHeaderImg(HEADER_IMAGES[Math.floor(Math.random() * HEADER_IMAGES.length)]);
  }, []);

  return (
    <header id="branding" role="banner">
      <nav id="access" role="navigation">
        <h3 className="assistive-text">Main menu</h3>
        <div className="skip-link">
          <a className="assistive-text" href="#content" title="Skip to primary content">
            Skip to primary content
          </a>
        </div>
        <div className="skip-link">
          <a className="assistive-text" href="#secondary" title="Skip to secondary content">
            Skip to secondary content
          </a>
        </div>
        <div className="menu-main-container">
          <ul id="menu-main" className="menu">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`menu-item${item.children ? ' menu-item-has-children' : ''}`}
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href={item.href}>{item.label}</Link>
                {item.children && openDropdown === item.label && (
                  <ul className="sub-menu">
                    {item.children.map((child) => (
                      <li key={child.href} className="menu-item">
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <hgroup>
        <h1 id="site-title">
          <span>
            <Link href="/" title="Henry R. Kaufman, P.C." rel="home">
              Henry R. Kaufman, P.C.
            </Link>
          </span>
        </h1>
        <h2 id="site-description">Media, First Amendment Law, Intellectual Property</h2>
        <Link href="/" id="logo_home" aria-label="Home" />
      </hgroup>

      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={headerImg} width={1000} height={288} alt="" />
      </Link>
    </header>
  );
}
