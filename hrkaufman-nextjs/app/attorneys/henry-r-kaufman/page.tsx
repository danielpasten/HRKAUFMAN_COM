import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Henry R. Kaufman | Henry R. Kaufman, P.C.",
};

export default function HenryKaufman() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-[#7B2323] mb-1 pb-3 border-b border-[#7B2323]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem' }}
      >
        Henry R. Kaufman
      </h1>
      <p className="mt-2 mb-8 text-[#5A5A5A] italic" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
        Media and Intellectual Property Law | Trial and Appellate Litigation
      </p>

      <div className="space-y-5 text-[1rem] leading-relaxed" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
        <p>
          Henry Kaufman, the principal of Henry R. Kaufman, P.C., has been a nationally-recognized
          leader of the publishing and media law bar for more than three decades.
        </p>
        <p>
          Mr. Kaufman began his publishing law career as General Counsel of the Association of
          American Publishers where he represented the book publishing industry on both First Amendment
          and copyright law issues, including the latter stages of passage and initial implementation
          of the Copyright Reform Act of 1976.
        </p>
        <p>
          While at AAP Mr. Kaufman helped to found, and thereafter served for fifteen years as General
          Counsel of, the Libel Defense Resource Center/LDRC (now known as the Media Law Resource
          Center/MLRC), a national coalition of media companies, media and journalism organizations and
          law firms focused on advancing the legal rights and interests of the media in the United States,
          in particular as regards their First Amendment rights.
        </p>
        <p>
          After leaving the LDRC, Mr. Kaufman joined SESAC, Inc., the music performing rights licensing
          company, where he served as Senior Vice President-General Counsel from 1996 to 1999. At SESAC
          he dealt with individual and industry-wide licensing transactions, copyright infringement
          litigation and copyright arbitrations, and legislative matters in connection with the Digital
          Millennium Copyright Act of 1999, the Copyright Term Extension Act and the Fairness in Music
          Licensing Act.
        </p>
        <p>
          Mr. Kaufman&apos;s current practice focuses on litigation and transactional matters for book,
          newspaper and online publishers, authors, artists, film and music industry clients, higher
          education and other individual, corporate and law firm clients covering a range of both First
          Amendment and Intellectual Property law matters, including defamation, privacy, publicity,
          commercial speech, access, reporter&apos;s privilege, prior restraint, obscenity and indecency,
          and copyright, trademark, tradename, unfair competition, trade secrets, misappropriation and
          &quot;hot news.&quot; He also maintains an active pre-publication and pre-broadcast review practice.
        </p>
      </div>

      {/* Education */}
      <div className="mt-10">
        <h5
          className="text-[#7B2323] uppercase tracking-wider text-[0.85rem] font-bold mb-3 pb-1 border-b border-[#EDE7D9]"
          style={{ fontFamily: "'PT Serif', Georgia, serif" }}
        >
          Education
        </h5>
        <ul className="space-y-1 text-[0.95rem]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
          <li>Harvard Law School, J.D., cum laude, 1971</li>
          <li>Hamilton College, A.B., Phi Beta Kappa, 1967</li>
        </ul>
      </div>

      {/* Other Affiliations */}
      <div className="mt-8">
        <h5
          className="text-[#7B2323] uppercase tracking-wider text-[0.85rem] font-bold mb-3 pb-1 border-b border-[#EDE7D9]"
          style={{ fontFamily: "'PT Serif', Georgia, serif" }}
        >
          Other Affiliations
        </h5>
        <ul className="space-y-1 text-[0.95rem]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
          {[
            'SESAC, Senior Vice President, General Counsel, 1996-99',
            'Libel Defense Resource Center, General Counsel, 1980-95',
            'Lankenau, Kovner & Bickford, Of Counsel, 1980-82',
            'Association of American Publishers, Vice President, General Counsel, 1976-80',
            'Paul, Weiss, Rifkind, Wharton & Garrison, Litigation Associate, 1972-76',
            'Hon. John F. Dooling, Jr., Law Clerk, E.D.N.Y., 1971-72',
          ].map((item) => (
            <li key={item} className="pl-4 border-l-2 border-[#EDE7D9]">{item}</li>
          ))}
        </ul>
      </div>

      {/* Professional Activities */}
      <div className="mt-8">
        <h5
          className="text-[#7B2323] uppercase tracking-wider text-[0.85rem] font-bold mb-3 pb-1 border-b border-[#EDE7D9]"
          style={{ fontFamily: "'PT Serif', Georgia, serif" }}
        >
          Professional Activities / Publications / Honors
        </h5>
        <ul className="space-y-1.5 text-[0.95rem]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
          {[
            'American Law Institute, Member (1995-present)',
            'American Bar Foundation, Member (2011-present)',
            'Copyright Society of the U.S.A., Board of Trustees (1979–1985), Member (1976-present)',
            'New York City Bar Association, Communications and Media Law Committee (1976-82; 1990-96; 2001-present)',
            'LDRC 50-STATE SURVEY OF DEVELOPMENTS IN MEDIA LIBEL LAW, Editor (Annual, 1982–1997)',
            'LDRC 50-STATE SURVEY OF MEDIA PRIVACY AND RELATED LAW, Editor (Annual, 1995–1997)',
            '"Reflections on the New ALI Restatement (Third) of Unfair Competition," National Law Journal (February 1995)',
            '"Potential Impact of the Uniform Correction or Clarification of Defamation Act on Damages," LDRC Bulletin (July 1994)',
            '"Breathing Space" in the "Two-Live Crew" Case, National Law Journal (May 1994)',
            '"The First Amendment, Academic Freedom and Freedom of Expression on Campus," (Hamilton College 2005, 2016)',
            'Martindale-Hubbell AV Preeminent Peer Review/Judicial Review Rating (1984-present)',
            'AVVO Attorney Profile/10.0 Attorney Rating',
          ].map((item) => (
            <li key={item} className="pl-4 border-l-2 border-[#EDE7D9]">{item}</li>
          ))}
        </ul>
      </div>

      {/* Representative Cases */}
      <div className="mt-8">
        <h5
          className="text-[#7B2323] uppercase tracking-wider text-[0.85rem] font-bold mb-3 pb-1 border-b border-[#EDE7D9]"
          style={{ fontFamily: "'PT Serif', Georgia, serif" }}
        >
          Representative Reported Cases
        </h5>
        <ul className="space-y-2 text-[0.92rem]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
          {[
            'Matovcik v. Times Beacon Record Newspapers, 108 A.D.3d 511 (2d Dept.), leave to appeal denied, 22 N.Y.3d 855 (2013) (Defamation/Summary Judgment)',
            'Sorrell v. IMS Health, Inc., 131 S.Ct.2653, 564 U.S.___ (2011) (amici curiae) (Commercial Speech)',
            'Barclays Capital Inc. v. Theflyonthewall.com, 650 F.3d 876 (2d Cir. 2011) (amicus curiae) (Misappropriation/\'Hot News\')',
            'Mann v. Abel, 10 N.Y.3d 271 (2008), cert denied, 555 U.S. 1170 (N.Y. 2009) (Defamation/Opinion)',
            'Ottinger v. Tiekert, 25 Misc.3d 1212(A), 901 N.Y.S.2d 908 (Westchester Co. 2009) (Defamation/SLAPP Statute)',
            'Matovcik v. Times Beacon Record Newspapers, 46 A.D.3d 636 (2d Dept. 2007) (Defamation/Motion to Dismiss on the Documentary Evidence)',
            'Ash v. Board of Managers, 44 A.D.3d 324 (1st Dept. 2007) (Prior Restraint)',
            'Visentin v. Haldane Central School District, 4 Misc.3d 918, 782 N.Y.S.2d 517, 32 Media L. Rptr. 2619 (Putnam Co. 2004) (Defamation/Summary Judgment/Unsealing of Documents)',
          ].map((item) => (
            <li key={item} className="pl-4 border-l-2 border-[#EDE7D9] py-1 italic text-[#3A3A3A]">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
