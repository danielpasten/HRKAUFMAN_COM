import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online/Social Media Legal Issues | Henry R. Kaufman, P.C.',
};

export default function Page() {
  return (
    <div id="main">
      <div id="primary">
        <div id="content" role="main">
          <article className="page hentry">
            <header className="entry-header">
              <h1 className="entry-title">Online/Social Media Legal Issues</h1>
            </header>
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{
                __html: `<p>Media Law issues are rapidly migrating to &#8211; and proliferating on &#8211; social media and other online sites. Accordingly, it has been a natural extension of the firm’s media practice to also advise clients with issues, problems or opportunities online. In fact, currently, probably a majority of the firm’s new matters are coming from the online world.</p>
<p>For example, the firm’s previous activity regarding voluntary media corrections or retractions in the hard-copy world, in lieu of defamation litigation, has readily translated to the online universe where, it is becoming evident, the opportunities for such corrections or retractions &#8211; and possibly even complete takedowns &#8211; are in fact broader, more flexible and thus more readily available than in a print context.</p>
<p>On the other hand, ready public access to the Internet and social media has also led to an explosion in the number of disputes that are arising over alleged defamation material and other media-type violations.</p>
<p>Finally, of course, changes in the firm’s media law practice also more broadly reflect the revolutionary changes in the nature of the media itself. Today, it is well-understood, many of the most powerful news and advertising operations in this country, and throughout the world, are now headquartered on the web.</p>
<p>Some of the firm’s recent, representative online and social media cases, can be found in the Online/Social Media section of “Notable Developments” &#8211; infra. <a href="/notable-developments/onlinesocial-media-litigation-and-related-matters/">Notable Developments &#8211; Online/Social Media</a></p>
<p>&nbsp;</p>`,
              }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}
