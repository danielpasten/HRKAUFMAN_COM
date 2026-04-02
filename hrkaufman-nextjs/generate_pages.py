#!/usr/bin/env python3
"""
Generate Next.js page.tsx files from the static HTML archive.
Extracts article content, strips spam injections, and writes TSX files.
"""

import os
import re

SRC = "/Users/daniel/Documents/Claude/Projects/Henry's Website/www.hrkaufman.com"
DST = "/Users/daniel/Documents/Claude/Projects/Henry's Website/hrkaufman-nextjs/app"

# ── Spam stripping ──────────────────────────────────────────────────────────
# Injected spans have IDs made up of 8+ hex characters (e.g., "de6b22abc2")
SPAM_SPAN_RE = re.compile(
    r'<span\s+id="[0-9a-f]{8,}[^"]*"[^>]*>.*?</span>',
    re.DOTALL | re.IGNORECASE,
)
# Hiding scripts: <script> blocks that call document.getElementById(...).style.display
HIDE_SCRIPT_RE = re.compile(
    r'<script[^>]*>(?:(?!</script>).)*?document\.getElementById[^<]*\.style\.display[^<]*</script>',
    re.DOTALL | re.IGNORECASE,
)
# Any remaining bare <script> blocks in content (WP emoji, etc.)
SCRIPT_RE = re.compile(r'<script\b[^>]*>.*?</script>', re.DOTALL | re.IGNORECASE)


def strip_spam(html: str) -> str:
    html = SPAM_SPAN_RE.sub('', html)
    html = HIDE_SCRIPT_RE.sub('', html)
    return html


def extract_content(html_path: str):
    """Return (page_title, content_html, has_sidebar, sidebar_html)."""
    with open(html_path, encoding='utf-8', errors='replace') as f:
        raw = f.read()

    # Page title from <title> tag
    title_m = re.search(r'<title>([^<]+)</title>', raw)
    raw_title = title_m.group(1) if title_m else ''
    # Strip " | Henry R. Kaufman, P.C." suffix
    page_title = re.sub(r'\s*[|\u00bb]\s*Henry R\. Kaufman.*$', '', raw_title).strip()
    if not page_title:
        page_title = 'Henry R. Kaufman, P.C.'

    # Entry title (h1 inside article header)
    entry_title_m = re.search(
        r'<header class="entry-header"[^>]*>.*?<h1[^>]*class="entry-title"[^>]*>(.*?)</h1>',
        raw, re.DOTALL,
    )
    entry_title = entry_title_m.group(1).strip() if entry_title_m else page_title

    # Entry content
    content_m = re.search(
        r'<div class="entry-content">(.*?)</div><!-- \.entry-content -->',
        raw, re.DOTALL,
    )
    content_html = content_m.group(1).strip() if content_m else ''
    content_html = strip_spam(content_html)
    # Remove leftover inline scripts (WP emoji etc.) from content
    content_html = SCRIPT_RE.sub('', content_html)

    # Sidebar (#secondary)
    sidebar_m = re.search(
        r'<div id="secondary" class="widget-area"[^>]*>(.*?)</div><!-- #secondary',
        raw, re.DOTALL,
    )
    has_sidebar = bool(sidebar_m)
    sidebar_html = sidebar_m.group(1).strip() if sidebar_m else ''
    sidebar_html = strip_spam(sidebar_html)
    sidebar_html = SCRIPT_RE.sub('', sidebar_html)

    return page_title, entry_title, content_html, has_sidebar, sidebar_html


def escape_backtick(s: str) -> str:
    """Escape backticks and ${} for template literals — not needed since we use JSX strings."""
    return s


def jsx_escape(s: str) -> str:
    """Escape a string for use inside a JSX attribute or template literal."""
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')


STANDARD_PAGE_TEMPLATE = '''\
import type {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{meta_title}',
}};

export default function Page() {{
  return (
    <div id="main">
      <div id="primary">
        <div id="content" role="main">
          <article className="page hentry">
            <header className="entry-header">
              <h1 className="entry-title">{entry_title}</h1>
            </header>
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{{{
                __html: `{content_html}`,
              }}}}
            />
          </article>
        </div>
      </div>
    </div>
  );
}}
'''

SIDEBAR_PAGE_TEMPLATE = '''\
import type {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{meta_title}',
}};

export default function Page() {{
  return (
    <div id="main">
      <div id="primary">
        <div id="content" role="main">
          <article className="page hentry">
            <header className="entry-header">
              <h1 className="entry-title">{entry_title}</h1>
            </header>
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{{{
                __html: `{content_html}`,
              }}}}
            />
          </article>
        </div>
      </div>
      <div id="secondary" className="widget-area" role="complementary">
        <div dangerouslySetInnerHTML={{{{ __html: `{sidebar_html}` }}}} />
      </div>
    </div>
  );
}}
'''

# Map: Next.js route → source HTML path relative to SRC
PAGES = {
    'firm-overview': 'firm-overview/index.html',
    'reputation-defense': 'reputation-defense/index.html',
    'attorneys': 'attorneys/index.html',
    'attorneys/henry-r-kaufman': 'attorneys/henry-r-kaufman/index.html',
    'attorneys/michael-k-cantwell': 'attorneys/michael-k-cantwell/index.html',
    'attorneys/carol-a-schrager': 'attorneys/carol-a-schrager/index.html',
    'practice-areas': 'practice-areas/index.html',
    'practice-areas/defamation-litigation': 'practice-areas/defamation-litigation/index.html',
    'practice-areas/other-first-amendment-issues-and-litigation': 'practice-areas/other-first-amendment-issues-and-litigation/index.html',
    'practice-areas/intellectual-property-litigation': 'practice-areas/intellectual-property-litigation/index.html',
    'practice-areas/intellectual-property-transactions': 'practice-areas/intellectual-property-transactions/index.html',
    'practice-areas/other-publishing-and-entertainment-transactions': 'practice-areas/other-publishing-and-entertainment-transactions/index.html',
    'practice-areas/pre-publication-review': 'practice-areas/pre-publication-review/index.html',
    'practice-areas/onlinesocial-media-legal-issues': 'practice-areas/onlinesocial-media-legal-issues/index.html',
    'practice-areas/higher-education-academic-freedom': 'practice-areas/higher-education-academic-freedom/index.html',
    'practice-areas/amicus-brief-writing': 'practice-areas/amicus-brief-writing/index.html',
    'notable-developments': 'notable-developments/index.html',
    'notable-developments/defamation-and-other-first-amendment-issues-and-litigation': 'notable-developments/defamation-and-other-first-amendment-issues-and-litigation/index.html',
    'notable-developments/onlinesocial-media-litigation-and-related-matters': 'notable-developments/onlinesocial-media-litigation-and-related-matters/index.html',
    'notable-developments/intellectual-property-litigation': 'notable-developments/intellectual-property-litigation/index.html',
    'notable-developments/intellectual-property-transactions': 'notable-developments/intellectual-property-transactions/index.html',
    'notable-developments/other-publishing-and-entertainment-transactions': 'notable-developments/other-publishing-and-entertainment-transactions/index.html',
    'notable-developments/higher-educationacademic-freedom': 'notable-developments/higher-educationacademic-freedom/index.html',
    'notable-developments/pre-publication-review': 'notable-developments/pre-publication-review/index.html',
    'notable-developments/publications-and-presentations': 'notable-developments/publications-and-presentations/index.html',
    'notable-developments/miscellaneous-developments': 'notable-developments/miscellaneous-developments/index.html',
    'corrections-and-retractions': 'corrections-and-retractions/index.html',
    'resources': 'resources/index.html',
    'resources/papers-briefs-and-other-materials': 'resources/papers-briefs-and-other-materials/index.html',
    'resources/amicus-curiae-briefs': 'resources/amicus-curiae-briefs/index.html',
    'disclaimer': 'disclaimer/index.html',
}


def write_page(route: str, src_rel: str):
    src_path = os.path.join(SRC, src_rel)
    if not os.path.exists(src_path):
        print(f'  SKIP (not found): {src_path}')
        return

    page_title, entry_title, content_html, has_sidebar, sidebar_html = extract_content(src_path)

    # Escape backticks and ${} in HTML strings for template literal embedding
    content_html_esc = content_html.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    sidebar_html_esc = sidebar_html.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

    meta_title = f'{page_title} | Henry R. Kaufman, P.C.'

    if has_sidebar:
        tsx = SIDEBAR_PAGE_TEMPLATE.format(
            meta_title=meta_title,
            entry_title=entry_title,
            content_html=content_html_esc,
            sidebar_html=sidebar_html_esc,
        )
    else:
        tsx = STANDARD_PAGE_TEMPLATE.format(
            meta_title=meta_title,
            entry_title=entry_title,
            content_html=content_html_esc,
        )

    out_dir = os.path.join(DST, route)
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, 'page.tsx')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(tsx)
    print(f'  OK: /{route}/page.tsx  (sidebar={has_sidebar})')


def write_contact_page():
    out_dir = os.path.join(DST, 'contact')
    os.makedirs(out_dir, exist_ok=True)
    tsx = """\
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
"""
    with open(os.path.join(out_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
        f.write(tsx)
    print('  OK: /contact/page.tsx (custom)')


if __name__ == '__main__':
    print('Generating content pages...')
    for route, src_rel in PAGES.items():
        write_page(route, src_rel)
    write_contact_page()
    print('\nDone.')
