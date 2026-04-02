import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Firm Overview | Henry R. Kaufman, P.C.",
  description: "The firm was originally founded in 1982. Its principal attorney, Henry Kaufman, has been a leader in the publishing and media law fields for more than thirty-five years.",
};

export default function FirmOverview() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-[#7B2323] mb-2 pb-3 border-b border-[#7B2323]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem' }}
      >
        Firm Overview
      </h1>

      <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
        <p>
          The firm was originally founded in 1982. Its principal attorney,{' '}
          <Link href="/attorneys/henry-r-kaufman" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
            Henry Kaufman
          </Link>
          , has been a leader in the publishing and media law fields for more than thirty-five years.
          In addition to having represented a prominent roster of individual clients in litigated and
          transactional matters, Mr. Kaufman has held high in-house &amp; industry positions in publishing,
          media and music.
        </p>

        <p>
          Mr. Kaufman served as Vice President and General Counsel of the Association of American
          Publishers, the national trade association of U.S. book publishers; he was General Counsel
          of the Libel Defense Resource Center (now known as the Media Law Resource Center), an
          organization he helped to form and that is the leading U.S. coalition of media and journalism
          companies, organizations and law firms working to advance the media&apos;s First Amendment rights;
          and he was Senior Vice President &amp; General Counsel of SESAC, Inc., one of the three U.S.
          music performing rights licensing organizations.
        </p>

        <p>
          The firm&apos;s three Of Counsels are also highly-experienced attorneys with decades of
          litigation and/or transactional experience in their areas of specialization.
        </p>

        <p>
          <Link href="/attorneys/michael-k-cantwell" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
            Michael Cantwell
          </Link>{' '}
          leads the firm&apos;s trademark practice (registration, licensing and prosecution) and also works
          closely with Mr. Kaufman in connection with the firm&apos;s media and IP litigation practice.
          Before becoming Of Counsel to the firm Mr. Cantwell had practiced for approximately eight years
          in the IP departments of leading New York full-service firms. Previously he was Assistant General
          Counsel of the Libel Defense Resource Center. Prior to entering law school, Mr. Cantwell had more
          than fourteen years&apos; business experience developing, managing and publishing scientific journals
          for Elsevier Science Publishing Co. (n.k.a. Reed-Elsevier) and the American Institute of Physics.
        </p>

        <p>
          Of Counsels{' '}
          <Link href="/attorneys/carol-a-schrager" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
            Carol Schrager
          </Link>{' '}
          and Beth Willensky are seasoned trial and appellate litigators. They also maintain a separate
          active practice in the field of recreational liability defense, commercial transactions and real
          estate. Earlier in her career Ms. Schrager represented Consumers Union and other publishing clients.
        </p>

        <p>
          Henry R. Kaufman, P.C. has also in recent years worked with a well-established personal network
          of leading media lawyers and law firms nationwide. When appropriate, this potential relationship
          enables the firm to apply its focused proficiency and the efficiencies and cost-savings of a
          smaller firm while offering the capacity to handle larger IP and media litigations and other major
          matters in New York and several other cities and regions nationwide.
        </p>

        <p>
          The firm&apos;s primary areas of practice are:{' '}
          <Link href="/practice-areas/defamation-litigation" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
            Defamation
          </Link>{' '}
          and a wide range of other{' '}
          <Link href="/practice-areas/other-first-amendment-issues-and-litigation" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
            First Amendment Issues and Litigation
          </Link>
          ;{' '}
          <Link href="/practice-areas/amicus-brief-writing" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
            Amicus Brief Writing
          </Link>
          ,{' '}
          <Link href="/practice-areas/higher-education-academic-freedom" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
            Academic Freedom
          </Link>{' '}
          and related issues in Higher Education;{' '}
          <Link href="/practice-areas/intellectual-property-transactions" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
            IP Transactions
          </Link>{' '}
          and{' '}
          <Link href="/practice-areas/intellectual-property-litigation" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
            Litigation
          </Link>{' '}
          (Copyright &amp; Trademark);{' '}
          <Link href="/practice-areas/other-publishing-and-entertainment-transactions" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
            Publishing and Entertainment Transactions
          </Link>
          ; and{' '}
          <Link href="/practice-areas/pre-publication-review" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
            Pre-Publication Review
          </Link>
          .
        </p>

        <p>
          The firm is on the approved litigation counsel lists of a number of the leading media and
          E&amp;O insurance carriers.
        </p>
      </div>
    </div>
  );
}
