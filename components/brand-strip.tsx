"use client";

import { useState } from 'react';

export const portfolioBrands = [
  { name: 'Hoopr', image: 'hoopr.png' },
  { name: 'Kreo', image: 'kreo.jpg' },
  { name: 'OK Tested', image: 'oktested.jpg' },
  { name: 'Mill’d', image: 'milld.png' },
  { name: 'WokTok', image: 'woktok.svg' },
  { name: 'Eat Kried', image: 'kried.webp' },
  { name: 'Green Packaging', note: 'Independent YouTube film' },
  { name: 'The Price of Popcorn', note: 'Independent YouTube film' },
  { name: 'Sportsyard', image: 'sportsyard.svg' },
  { name: 'Epicure Robotics', image: 'epicure.png' },
  { name: 'CotoPay', image: 'cotopay.webp' },
  { name: 'Framer Hosting', image: 'framer.svg' },
  { name: 'Krismar Marble', image: 'krismar.svg' },
  { name: 'BISFF' },
  { name: 'Vaara Jewellery' },
  { name: 'Asan Cup', image: 'asan.svg' },
  { name: 'DIL Foods', image: 'dil.webp' },
];

type Brand = { name: string; image?: string; note?: string };

export default function BrandStrip({ brands = portfolioBrands }: { brands?: Brand[] }) {
  const [paused, setPaused] = useState(false);
  const midpoint = Math.ceil(brands.length / 2);
  return <section className={`brand-strip panel${paused ? ' is-paused' : ''}`} aria-labelledby="brand-strip-title">
    <div className="brand-strip-heading">
      <div><p className="eyebrow">A FEW NAMES ALONG THE WAY</p><h2 id="brand-strip-title">Brands, briefs <em>& stories.</em></h2><p>A collection of brand work, creative explorations and independent films.</p></div>
      <button type="button" className="brand-motion" aria-pressed={paused} onClick={() => setPaused(!paused)} aria-label={paused ? 'Resume brand strip' : 'Pause brand strip'}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span> {paused ? 'Resume' : 'Pause'}</button>
    </div>
    <div className="brand-rows">
      {[brands.slice(0, midpoint), brands.slice(midpoint)].map((row, index) => <div className="brand-row" key={index}>
        <div className={`brand-track brand-track-${index}`}>
          {[false, true].map(duplicate => <ul className="brand-group" key={String(duplicate)} aria-hidden={duplicate || undefined}>
            {row.map(brand => <li className={`brand-tile${brand.note ? ' brand-film' : ''}${['Hoopr','Epicure Robotics','BISFF'].includes(brand.name) ? ' brand-dark' : ''}`} key={brand.name}>
              {brand.image ? <img src={`/brands/${brand.image}`} alt={brand.name} width="168" height="64" loading="lazy" /> : <span className="brand-name">{brand.name}</span>}
              {brand.note && <small>{brand.note}</small>}
            </li>)}
          </ul>)}
        </div>
      </div>)}
    </div>
    <div className="brand-strip-foot"><span>DIFFERENT WORLDS. THE SAME CURIOSITY.</span><span aria-hidden="true">✳</span></div>
  </section>;
}
