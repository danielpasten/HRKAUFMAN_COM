import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Firm Overview | Henry R. Kaufman, P.C.',
};

export default function Page() {
  return (
    <div id="main">
      <div id="primary">
        <div id="content" role="main">
          <article className="page hentry">
            <header className="entry-header">
              <h1 className="entry-title">Firm Overview</h1>
            </header>
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{
                __html: `<div class="ezcol ezcol-one-half">
<p>The firm was originally founded in 1982. Its principal attorney, <a title="Henry R. Kaufman" href="/attorneys/henry-r-kaufman/">Henry Kaufman</a>, has been a leader in the publishing and media law fields for more than thirty-five years. In addition to having represented a prominent roster of individual clients in litigated and transactional matters, Mr. Kaufman has held high in-house &amp; industry positions in publishing, media and music.</p>
<p>Mr. Kaufman served as Vice President and General Counsel of the Association of American Publishers, the national trade association of U.S. book publishers; he was General Counsel of the Libel Defense Resource Center (now known as the Media Law Resource Center), an organization he helped to form and that is the leading U.S. coalition of media and journalism companies, organizations and law firms working to advance the media’s First Amendment rights; and he was Senior Vice President &amp; General Counsel of SESAC, Inc., one of the three U.S. music performing rights licensing organizations.</p>
<p>The firm’s three Of Counsels are also highly-experienced attorneys with decades of litigation and/or transactional experience in their areas of specialization.</p>
<p><a title="Michael K. Cantwell" href="/attorneys/michael-k-cantwell/">Michael Cantwell</a> leads the firm’s trademark practice (registration, licensing and prosecution) and also works closely with Mr. Kaufman in connection with the firm’s media and IP litigation practice.  Before becoming Of Counsel to the firm Mr. Cantwell had practiced for approximately eight years in the IP departments of leading New York full-service firms. Previously he was Assistant General Counsel of the Libel Defense Resource Center.  Prior to entering law school, Mr. Cantwell had more than fourteen years’ business experience developing, managing and publishing scientific journals for Elsevier Science Publishing Co. (n.k.a. Reed-Elsevier) and the American Institute of Physics.</p>
</div><div class="ezcol ezcol-one-half ezcol-last">
<br />
Of Counsels <a title="Carol A. Schrager" href="/attorneys/carol-a-schrager/">Carol Schrager</a> and <a title="Beth A. Willensky" href="/attorneys/beth-a-willensky/">Beth Willensky</a> are seasoned trial and appellate litigators. They also maintain a separate active practice in the field of recreational liability defense, commercial transactions and real estate. Earlier in her career Ms. Schrager represented Consumers Union and other publishing clients.</p>
<p>Henry R. Kaufman, P.C. has also in recent years worked with a well-established personal network of leading media lawyers and law firms nationwide. When appropriate, this potential relationship enables the firm to apply its focused proficiency and the efficiencies and cost-savings of a smaller firm while offering the capacity to handle larger IP and media litigations and other major matters in New York and several other cities and regions nationwide.</p>
<p>The firm’s primary areas of practice are: <a title="Defamation Litigation" href="/practice-areas/defamation-litigation/">Defamation</a> and a wide range of <a title="Other First Amendment Litigation" href="/practice-areas/other-first-amendment-litigation/">other First Amendment Issues and Litigation</a>; <a href="/practice-areas/amicus-brief-writing/">Amicus Brief Writing</a>, <a title="Higher Education | Academic Freedom" href="/practice-areas/higher-education-academic-freedom/">Academic Freedom</a> and related issues in Higher Education; <a title="Intellectual Property Transactions" href="/practice-areas/intellectual-property-transactions/">IP Transactions</a> and <a title="Intellectual Property Litigation" href="/practice-areas/intellectual-property-litigation/">Litigation</a> (Copyright &amp; Trademark); <a title="Other Publishing and Entertainment Transactions" href="/practice-areas/other-publishing-and-entertainment-transactions/">Publishing and Entertainment Transactions</a>; and <a title="Pre-publication Review" href="/practice-areas/pre-publication-review/">Pre-Publication Review</a>.</p>
<p>The firm is on the approved litigation counsel lists of a number of the leading media and E&amp;O insurance carriers.</p>
</div><div class="ezcol-divider"></div></p>`,
              }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}
