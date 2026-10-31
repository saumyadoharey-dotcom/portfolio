"use client";
import {useEffect,useState} from 'react';
import { projects } from '@/lib/projects';
import Toolkit from '@/components/toolkit';
import SiteNav from '@/components/site-nav';
import BrandStrip from '@/components/brand-strip';
import ArchiveHero from '@/components/archive-hero';
import SiteFooter from '@/components/site-footer';
import CreativeLicense from '@/components/creative-license';

export default function Home(){const [progress,setProgress]=useState(0);
useEffect(()=>{const update=()=>setProgress(window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight));window.addEventListener('scroll',update,{passive:true});const hash=()=>{const slug=window.location.hash.replace('#project/','');if(projects.some(p=>p.slug===slug))window.location.replace('/work/'+slug);};hash();window.addEventListener('hashchange',hash);return()=>{window.removeEventListener('scroll',update);window.removeEventListener('hashchange',hash)}},[]);
return (
  <>
    <div className="reading-progress" style={{transform:`scaleX(${progress})`}} />
    <SiteNav projectCount={projects.length} />
<main className="home-main"><ArchiveHero/>
<section className="quick-facts panel" aria-label="Quick details"><div><span>BASED IN</span><strong>Bengaluru, India</strong></div><div><span>MY PRACTICE</span><strong>Film, strategy & design</strong></div><div><span>THE NEXT CHAPTER</span><strong>Writing & directing films</strong></div></section>
<BrandStrip/>
<section className="profile-section"><article id="about" className="about-panel panel"><div className="about-copy"><p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p><h2>Curious by nature.<br/><em>Filmmaker in the making.</em></h2><p>My work lives at the intersection of human behavior and visual storytelling. With a background in applied psychology, I approach production, creative strategy, and design by looking closely at how people connect with culture, food, and everyday life.</p><p>I like being close to an idea at every stage of its lifecycle helping it evolve from a thought into a script, a frame, a cut, or a cohesive visual identity. Ultimately, my journey is building toward writing and directing films, and founding an independent production house dedicated to authentic storytelling.</p><div className="style-note"><span className="eyebrow">MY CREATIVE APPROACH</span><h3>Find the human detail.<br/>Give it a point of view.</h3><p>Observation first. A clear story. Room for a little unexpectedness.</p></div></div><CreativeLicense/></article><Toolkit/></section>
<SiteFooter/></main>
  </>
);
}
