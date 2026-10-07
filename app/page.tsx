"use client";
import {useEffect,useState} from 'react';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import Toolkit from '@/components/toolkit';
import BrandStrip from '@/components/brand-strip';
import ArchiveHero from '@/components/archive-hero';

export default function Home(){const [progress,setProgress]=useState(0);
useEffect(()=>{const update=()=>setProgress(window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight));window.addEventListener('scroll',update,{passive:true});const hash=()=>{const slug=window.location.hash.replace('#project/','');if(projects.some(p=>p.slug===slug))window.location.replace('/work/'+slug);};hash();window.addEventListener('hashchange',hash);return()=>{window.removeEventListener('scroll',update);window.removeEventListener('hashchange',hash)}},[]);
return <><div className="reading-progress" style={{transform:`scaleX(${progress})`}}/><header className="nav"><a href="#" className="wordmark" aria-label="Saumya home">saumya<span>✳</span></a><nav><Link href="/work">Index <sup>{projects.length}</sup></Link><a href="#about">About</a><a href="#tools">Tools</a></nav><span className="nav-note">FILM / STRATEGY / DESIGN</span></header>
<main className="home-main"><ArchiveHero/>
<section className="quick-facts panel" aria-label="Quick details"><div><span>BASED IN</span><strong>Bengaluru, India</strong></div><div><span>MY PRACTICE</span><strong>Film, strategy & design</strong></div><div><span>THE NEXT CHAPTER</span><strong>Writing & directing films</strong></div></section>
<BrandStrip/>
<section className="profile-grid"><article id="about" className="about-panel panel"><p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p><h2>Curious by nature.<br/><em>Filmmaker in the making.</em></h2><p>I’m Saumya. My background in applied psychology shapes the questions I ask. Food, cinema, culture and everyday life give me stories to chase.</p><p>My work moves between production, creative strategy and design. I like being close to an idea as it becomes a script, a frame, a cut or a visual identity. Eventually, I want to write and direct films—and build a production house of my own.</p><div className="style-note"><span className="eyebrow">MY CREATIVE APPROACH</span><h3>Find the human detail.<br/>Give it a point of view.</h3><p>Observation first. A clear story. Room for a little unexpectedness.</p></div></article><Toolkit/></section>
<footer><span>ALWAYS IN THE MAKING.</span><a href="#" aria-label="Back to top">Back to the beginning ↑</a><div className="footer-name">saumya<span>✳</span></div><div className="footer-bottom"><span>SAUMYA DOHAREY</span><span>FILM / STRATEGY / DESIGN</span><span>BENGALURU · 2026</span></div></footer></main>
</>}
