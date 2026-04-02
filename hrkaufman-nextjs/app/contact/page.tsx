import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Henry R. Kaufman, P.C.",
};

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-[#7B2323] mb-2 pb-3 border-b border-[#7B2323]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem' }}
      >
        Contact
      </h1>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Address + Map */}
        <div>
          <div className="mb-6 text-[1rem] leading-relaxed" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
            <p className="mb-1">60 East 42nd Street, 47th Floor</p>
            <p className="mb-1">New York, New York 10165</p>
            <p className="mt-3">
              Email:{' '}
              <a href="mailto:hkaufman@hrkaufman.com" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
                hkaufman@hrkaufman.com
              </a>
            </p>
            <p>Phone: (212) 880-0842</p>
            <p className="mt-4 text-[0.78rem] uppercase tracking-widest text-[#888]">Attorney Advertising</p>
          </div>

          <div className="w-full overflow-hidden border border-[#EDE7D9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4468280354727!2d-73.98090198459386!3d40.75219607932759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259019f32ed09%3A0xa522e1745cd64f59!2s60%20E%2042nd%20St%2047th%20Floor%2C%20New%20York%2C%20NY%2010165!5e0!3m2!1sen!2sus!4v1583782673285!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <p className="mb-4 text-[0.95rem] text-[#3A3A3A]" style={{ fontFamily: "'PT Serif', Georgia, serif" }}>
            Comments or questions are welcome.{' '}
            <Link href="/disclaimer" className="text-[#7B2323] underline underline-offset-2 hover:text-[#9B3333]">
              (See website disclaimer)
            </Link>
          </p>

          <form className="space-y-4" action="mailto:hkaufman@hrkaufman.com" method="GET">
            <div>
              <label
                htmlFor="name"
                className="block text-[0.88rem] font-semibold mb-1 text-[#1A1A1A]"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                Your Name <span className="text-[#7B2323]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-[#C0B8A8] bg-white px-3 py-2 text-[0.95rem] focus:outline-none focus:border-[#7B2323] transition-colors"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[0.88rem] font-semibold mb-1 text-[#1A1A1A]"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                Your E-mail Address <span className="text-[#7B2323]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-[#C0B8A8] bg-white px-3 py-2 text-[0.95rem] focus:outline-none focus:border-[#7B2323] transition-colors"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-[0.88rem] font-semibold mb-1 text-[#1A1A1A]"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                Subject <span className="text-[#7B2323]">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full border border-[#C0B8A8] bg-white px-3 py-2 text-[0.95rem] focus:outline-none focus:border-[#7B2323] transition-colors"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[0.88rem] font-semibold mb-1 text-[#1A1A1A]"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              >
                Message <span className="text-[#7B2323]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full border border-[#C0B8A8] bg-white px-3 py-2 text-[0.95rem] focus:outline-none focus:border-[#7B2323] transition-colors resize-none"
                style={{ fontFamily: "'PT Serif', Georgia, serif" }}
              />
            </div>
            <button
              type="submit"
              className="bg-[#7B2323] text-white px-8 py-2.5 text-[0.9rem] hover:bg-[#5A1A1A] transition-colors duration-200"
              style={{ fontFamily: "'PT Serif', Georgia, serif" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
