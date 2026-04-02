import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: '320px' }}>
        <Image
          src="https://www.hrkaufman.com/wp-content/uploads/2012/02/grandcentral.jpg"
          alt="Grand Central Terminal"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1
              className="font-bold tracking-wide"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              Welcome
            </h1>
            <div
              className="mt-2 text-[#EDE7D9] italic"
              style={{ fontFamily: "'PT Serif', Georgia, serif", fontSize: 'clamp(0.85rem, 2vw, 1.1rem)' }}
            >
              Henry R. Kaufman, P.C.
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-[#7B2323]" />
          <div className="w-2 h-2 bg-[#7B2323] rotate-45" />
          <div className="flex-1 h-px bg-[#7B2323]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-[1.05rem] leading-relaxed mb-5" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              <strong>Henry R. Kaufman, P.C.</strong> is a New York media and publishing law boutique specializing in First Amendment defamation and reputation defense, intellectual property (copyright &amp; trademark), publishing, music and other entertainment transactions and trial and appellate litigation.
            </p>
            <p className="text-[1.05rem] leading-relaxed" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              The firm offers its clients, at boutique rates, highly-capable senior litigators and transactional lawyers whose knowledge base and experience in their fields is at least equivalent to attorneys at larger boutiques or full-service law firms.
            </p>
          </div>
          <div>
            <p className="text-[1.05rem] leading-relaxed mb-5" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              Firm clients range from leading media and entertainment companies; book, newspaper, and online publishers of all sizes; to authors, bloggers, journalists and other private clients: companies, nonprofits and individuals; law firms; labor unions; higher education administration, faculty and students; media and E&amp;O insurance carriers.
            </p>
            <p className="text-[1.05rem] leading-relaxed" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
              The firm&apos;s principal office is located in Manhattan directly across from Grand Central Terminal. The firm also serves the outer boroughs of New York City and Westchester, as well as Long Island and Upstate New York, and it has the capacity to represent clients in various other jurisdictions working in conjunction with leading law firm contacts nationwide.
            </p>
          </div>
        </div>

        {/* Practice Areas Quick Links */}
        <div className="mt-14 pt-10 border-t border-[#EDE7D9]">
          <h2
            className="text-[#7B2323] mb-6 text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem' }}
          >
            Areas of Practice
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { label: 'Defamation Litigation', href: '/practice-areas/defamation-litigation' },
              { label: 'Reputation Defense', href: '/reputation-defense' },
              { label: 'First Amendment', href: '/practice-areas/other-first-amendment-issues-and-litigation' },
              { label: 'IP Litigation', href: '/practice-areas/intellectual-property-litigation' },
              { label: 'IP Transactions', href: '/practice-areas/intellectual-property-transactions' },
              { label: 'Publishing & Entertainment', href: '/practice-areas/other-publishing-and-entertainment-transactions' },
              { label: 'Pre-publication Review', href: '/practice-areas/pre-publication-review' },
              { label: 'Online/Social Media', href: '/practice-areas/onlinesocial-media-legal-issues' },
              { label: 'Higher Education', href: '/practice-areas/higher-education-academic-freedom' },
              { label: 'Amicus Brief Writing', href: '/practice-areas/amicus-brief-writing' },
            ].map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="block p-3 bg-[#EDE7D9] border border-[#E0D8C8] text-[0.82rem] text-[#7B2323] text-center leading-tight hover:bg-[#7B2323] hover:text-white transition-colors duration-200"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                {area.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
