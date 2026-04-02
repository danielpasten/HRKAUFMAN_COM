import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Henry R. Kaufman, P.C. -- Media, First Amendment Law, Intellectual Property',
  description:
    'Henry R. Kaufman, P.C. is a New York media and publishing law boutique specializing in First Amendment and defamation, intellectual property (copyright & trademark), publishing, music and other entertainment transactions.',
  keywords:
    'Freedom of speech, Freedom of expression, Freedom of the press, Libel law, Libel suits, Copyright infringement, Trademark infringement, Shield law, Media law, New York',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        {/* Google Fonts matching original site */}
        <link
          href="https://fonts.googleapis.com/css?family=PT+Serif:400,400italic,700,700italic|Sorts+Mill+Goudy:400,400italic"
          rel="stylesheet"
          type="text/css"
        />
        {/* Original WordPress theme stylesheet — drives all site styling */}
        <link
          rel="stylesheet"
          type="text/css"
          media="all"
          href="/wp-content/themes/hrkaufman/style.css"
        />
        {/* Plugin stylesheets */}
        <link
          rel="stylesheet"
          href="/wp-content/plugins/easy-columns/css/easy-columns.css"
          type="text/css"
          media="screen, projection"
        />
        <link
          rel="stylesheet"
          href="/wp-content/themes/hrkaufman/meteor-slides.css"
          type="text/css"
          media="all"
        />
      </head>
      <body>
        <div id="page" className="hfeed">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
