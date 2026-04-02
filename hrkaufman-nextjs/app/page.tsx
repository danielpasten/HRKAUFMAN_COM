'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const slides = [
  {
    img: '/wp-content/uploads/2012/02/grandcentral.jpg',
    imgSrcSet:
      '/wp-content/uploads/2012/02/grandcentral-300x215.jpg 300w, /wp-content/uploads/2012/02/grandcentral-250x179.jpg 250w, /wp-content/uploads/2012/02/grandcentral.jpg 390w',
    alt: 'Grand Central',
    heading: 'Welcome',
    body: (
      <>
        <p>
          <span>
            <strong>Henry R. Kaufman, P.C.</strong>
          </span>{' '}
          is a New York media and publishing law boutique specializing in First Amendment
          defamation and reputation defense, intellectual property (copyright &amp; trademark),
          publishing, music and other entertainment transactions and trial and appellate litigation.
        </p>
        <p>
          The firm offers its clients, at boutique rates, highly-capable senior litigators and
          transactional lawyers whose knowledge base and experience in their fields is at least
          equivalent to attorneys at larger boutiques or full-service law firms.
        </p>
      </>
    ),
  },
  {
    img: '/wp-content/uploads/2012/02/grandcentral1.jpg',
    imgSrcSet:
      '/wp-content/uploads/2012/02/grandcentral1-300x215.jpg 300w, /wp-content/uploads/2012/02/grandcentral1-250x179.jpg 250w, /wp-content/uploads/2012/02/grandcentral1.jpg 390w',
    alt: 'Grand Central',
    heading: null,
    body: (
      <>
        <p>
          Firm clients range from leading media and entertainment companies; book, newspaper, and
          online publishers of all sizes; to authors, bloggers, journalists and other private
          clients: companies, nonprofits and individuals; law firms; labor unions; higher education
          administration, faculty and students; media and E&amp;O insurance carriers.
        </p>
        <p>
          The firm&apos;s principal office is located in Manhattan directly across from Grand Central
          Terminal. The firm also serves the outer boroughs of New York City and Westchester, as well
          as Long Island and Upstate New York, and it has the capacity to represent clients in various
          other jurisdictions working in conjunction with leading law firm contacts nationwide.
        </p>
      </>
    ),
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 14000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <div id="main">
      <div id="primary-home">
        <div id="content" role="main">
          <div id="landing_content_slides">
            <div
              id="meteor-slideshowhome-slides"
              className="meteor-slides home-slides"
              style={{ position: 'relative' }}
            >
              {/* Pager dots */}
              <div id="meteor-buttonshome-slides" className="meteor-buttons">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrent(i)}
                    style={{
                      cursor: 'pointer',
                      display: 'inline-block',
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: i === current ? '#7b2323' : '#ccc',
                      margin: '0 4px',
                    }}
                  />
                ))}
              </div>

              <div className={`mslide mslide-${current + 1}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  width={390}
                  height={280}
                  src={slide.img}
                  srcSet={slide.imgSrcSet}
                  sizes="(max-width: 390px) 100vw, 390px"
                  className="attachment-featured-slide size-featured-slide wp-post-image"
                  alt={slide.alt}
                />
                {slide.heading && <div className="welcome-home">{slide.heading}</div>}
                <div className="homeslide-text">{slide.body}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
