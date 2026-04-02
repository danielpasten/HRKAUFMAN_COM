import type { Metadata } from "next";
import { PT_Serif, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-pt-serif",
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Henry R. Kaufman, P.C. — Media, First Amendment Law, Intellectual Property",
  description: "Henry R. Kaufman, P.C. is a New York media and publishing law boutique specializing in First Amendment and defamation, intellectual property (copyright & trademark), publishing, music and other entertainment transactions.",
  keywords: "Freedom of speech, First Amendment, Libel law, Copyright infringement, Trademark infringement, Media law, New York",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ptSerif.variable} ${playfairDisplay.variable}`}>
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "'PT Serif', Georgia, serif", backgroundColor: '#F5F0E8' }}
      >
        {/* TODO: Add analytics tracking here */}
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
