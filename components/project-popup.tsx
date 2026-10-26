"use client";
import ProjectArtwork from '@/components/project-artwork';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import type { Project } from '@/lib/projects';
import { stories } from '@/lib/project-stories';
import ProofOfWork from '@/components/proof-of-work';

export default function ProjectPopup({project,children}:{project:Project;children:ReactNode}){
  const story=stories[project.slug];
  const reducedMotion=useReducedMotion();
  const [fullStoryOpen,setFullStoryOpen]=useState(false);
  const fullStoryId=`full-story-${project.slug}`;
  return <Dialog onOpenChange={(open)=>{if(!open)setFullStoryOpen(false)}}><DialogTrigger asChild>{children}</DialogTrigger><DialogContent className="work-popup" showCloseButton={false}>
    <div className="popup-bar"><span>PROJECT / {project.name}</span><div><DialogClose className="popup-close" aria-label="Close project details">Close ×</DialogClose></div></div>
    <motion.div className="popup-scroll" initial={{opacity:0,y:reducedMotion?0:18}} animate={{opacity:1,y:0}} transition={{duration:reducedMotion?0:.35}}>
      <header className="popup-heading"><p className="eyebrow">{project.cat} / {project.type}</p><DialogTitle className="popup-title">{project.name}</DialogTitle><DialogDescription className="popup-description">{project.line}</DialogDescription></header>
      <dl className="popup-facts"><div><dt>MY ROLE</dt><dd>{project.roles}</dd></div><div><dt>FORMAT</dt><dd>{project.format}</dd></div></dl>
      <div className={`popup-cover cover ${project.color}`} aria-hidden="true"><ProjectArtwork project={project}/></div>
      <article className="popup-story"><section><span className="eyebrow">01 / THE STARTING POINT</span><h3>The brief</h3><p>{project.brief}</p><p>{story.focus}</p></section><section><span className="eyebrow">02 / MY PART IN IT</span><h3>My contribution</h3><p>{project.work}</p><ul className="discipline-list" aria-label="Project disciplines">{story.disciplines.map(d=><li key={d}>{d}</li>)}</ul></section><div id={fullStoryId} className="popup-expanded-story" hidden={!fullStoryOpen}><ProofOfWork slug={project.slug}/></div><section><span className="eyebrow">04 / BEHIND THE WORK</span><h3>My experience</h3>{story.experience.map((paragraph,i)=><p key={i}>{paragraph}</p>)}</section><section className="popup-takeaway"><span className="eyebrow">05 / WHAT I TAKE FORWARD</span><p>{story.takeaway}</p></section></article>
      <div className="popup-bottom"><DialogClose className="paper-button">← Back to my work</DialogClose><button type="button" className="popup-expand-link" aria-expanded={fullStoryOpen} aria-controls={fullStoryId} onClick={()=>setFullStoryOpen(open=>!open)}>{fullStoryOpen ? "Show less ↑" : "Read the full story ↓"}</button></div>
    </motion.div>
  </DialogContent></Dialog>;
}
