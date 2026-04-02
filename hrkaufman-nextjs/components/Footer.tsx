import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="colophon" role="contentinfo">
      <div id="supplementary" className="three">
        <div id="first" className="widget-area" role="complementary">
          <aside className="widget widget_text">
            <div className="textwidget">
              <Link href="/">Home</Link>
            </div>
          </aside>
        </div>

        <div id="second" className="widget-area" role="complementary">
          <aside className="widget widget_text">
            <div className="textwidget">
              <div style={{ textAlign: 'center' }}>
                60 East 42nd Street, 47th Floor
                <br />
                New York, New York 10165
                <br />
                Email:{' '}
                <a href="mailto:help@hrkaufman.com">help@hrkaufman.com</a>
                <br />
                Phone: (212) 880-0842
              </div>
              <p>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ color: '#DDD', fontSize: '9px', textTransform: 'uppercase' }}>
                    Attorney Advertising
                  </span>
                </div>
              </p>
            </div>
          </aside>
        </div>

        <div id="third" className="widget-area" role="complementary">
          <aside className="widget widget_text">
            <div className="textwidget">
              <div style={{ textAlign: 'right' }}>
                © Henry R. Kaufman, P.C. 2012–2022
                <br />
                <Link href="/disclaimer">Disclaimer</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div id="site-generator">
        <a href="http://ogdencreative.com" target="_blank" rel="noreferrer">
          Site Design by OgdenCreative.com
        </a>
      </div>
    </footer>
  );
}
