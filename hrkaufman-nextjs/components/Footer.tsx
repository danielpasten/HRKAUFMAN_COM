import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#EDE7D9] mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
          {/* Column 1 */}
          <div>
            <Link
              href="/"
              className="text-[#EDE7D9] hover:text-[#C9A96E] transition-colors"
            >
              Home
            </Link>
          </div>

          {/* Column 2 */}
          <div className="text-center">
            <p>60 East 42nd Street, 47th Floor</p>
            <p>New York, New York 10165</p>
            <p className="mt-2">
              Email:{' '}
              <a
                href="mailto:hkaufman@hrkaufman.com"
                className="text-[#C9A96E] hover:underline"
              >
                hkaufman@hrkaufman.com
              </a>
            </p>
            <p>Phone: (212) 880-0842</p>
            <p className="mt-3 text-[0.7rem] uppercase tracking-widest text-[#888]">
              Attorney Advertising
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-right">
            <p>© Henry R. Kaufman, P.C. 2012–2022</p>
            <Link
              href="/disclaimer"
              className="text-[#C9A96E] hover:underline mt-1 inline-block"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
