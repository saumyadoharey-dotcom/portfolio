'use client';
import ProjectArtwork from '@/components/project-artwork';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projects } from '@/lib/projects';
import ProjectPopup from '@/components/project-popup';

export default function ArchiveHero(){
  const [index,setIndex]=useState(0);
  const reduced=useReducedMotion();
  const project=projects[index];
  const step=(direction:number)=>setIndex(i=>(i+direction+projects.length)%projects.length);
  return <section className="archive-hero" aria-label="Explore selected projects" onKeyDown={event=>{if(!event.currentTarget.contains(event.target as Node))return;if(event.target instanceof HTMLSelectElement)return;if(event.key==='ArrowRight'){event.preventDefault();step(1)}if(event.key==='ArrowLeft'){event.preventDefault();step(-1)}}}>
    <div className="archive-masthead"><h1>Saumya Doharey</h1><p>Production, creative strategy & design.</p></div>
    <aside className="archive-credits" aria-live="polite"><h2>{project.name}</h2><dl><div><dt>MY ROLE</dt><dd>{project.roles}</dd></div><div><dt>FORMAT</dt><dd>{project.format}</dd></div><div><dt>PRACTICE</dt><dd>{project.cat}</dd></div></dl></aside>
    <div className="archive-selector"><label htmlFor="project-index">Project index <span>({projects.length})</span></label><select id="project-index" value={index} onChange={e=>setIndex(Number(e.target.value))}>{projects.map((p,i)=><option key={p.slug} value={i}>{String(i+1).padStart(2,'0')} — {p.name}</option>)}</select></div>
    <div className="archive-stage">
      <AnimatePresence mode="wait" initial={false}><motion.div key={project.slug} className="archive-feature" initial={{opacity:0,y:reduced?0:24}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduced?0:-18}} transition={{duration:reduced?0:.35}}>
        <ProjectPopup project={project}><button className="archive-art" aria-label={`Read ${project.name} case study`}><span className="archive-edition">SELECTED WORK / {String(index+1).padStart(2,'0')}</span><ProjectArtwork project={project}/><span className="archive-art-bottom">{project.name}<span>READ THE STORY ↗</span></span></button></ProjectPopup>
      </motion.div></AnimatePresence>
    </div>
    <div className="archive-bottom"><p className="archive-intent">An eye for the detail.<br/><em>A story in the making.</em></p><div className="archive-controls"><button onClick={()=>step(-1)} aria-label="Previous featured project">←</button><span aria-live="polite">{String(index+1).padStart(2,'0')} / {projects.length}</span><button onClick={()=>step(1)} aria-label="Next featured project">→</button></div><a href="#work">Explore the archive ↓</a></div>
  </section>
}
