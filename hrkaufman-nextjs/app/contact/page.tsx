import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | Henry R. Kaufman, P.C.',
};

export default function Contact() {
  return (
    <div id="main">
      <div id="primary">
        <div id="content" role="main">
          <article className="page hentry">
            <header className="entry-header">
              <h1 className="entry-title">Contact</h1>
            </header>
            <div className="entry-content">
              <p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4468280354727!2d-73.98090198459386!3d40.75219607932759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259019f32ed09%3A0xa522e1745cd64f59!2s60%20E%2042nd%20St%2047th%20Floor%2C%20New%20York%2C%20NY%2010165!5e0!3m2!1sen!2sus!4v1583782673285!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location map"
                />
              </p>

              <h3>Henry R. Kaufman, P.C.</h3>
              <p>
                60 East 42nd Street, 47th Floor
                <br />
                New York, New York 10165
                <br />
                Phone: (212) 880-0842
              </p>

              <p>
                To get in touch, please email us at{' '}
                <a href="mailto:help@hrkaufman.com">help@hrkaufman.com</a>.
              </p>

              <p>
                <em>
                  Please review our <Link href="/disclaimer">Disclaimer</Link> before contacting us.
                </em>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
