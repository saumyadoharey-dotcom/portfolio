"use client";
import ProjectArtwork from '@/components/project-artwork';
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import ProjectPopup from '@/components/project-popup';
import { projects } from '@/lib/projects';
import Link from 'next/link';

export default function WorkPage() {
  const reducedMotion = useReducedMotion();
  const [filter, setFilter] = useState('All work');
  const [view, setView] = useState('grid');
  const visible = projects.filter(p => filter === 'All work' || p.cat === filter);
  return <div className="project-page"><header className="nav"><Link href="/" className="wordmark" aria-label="Saumya home">saumya<span>✳</span></Link><nav><Link href="/work" aria-current="page">Index <sup>{projects.length}</sup></Link><Link href="/#about">About</Link><Link href="/#tools">Tools</Link></nav><span className="nav-note">SELECTED WORK / {projects.length} PROJECTS</span></header>
    <main id="work-main">
      <section className="work work-page-section">
        <div className="section-heading"><h2>Selected work<span> ({projects.length})</span></h2><span className="eyebrow">IDEA → EXECUTION</span></div>
        <div className="toolbar"><div className="filters" aria-label="Filter projects">{['All work', 'Film & production', 'Creative strategy', 'Design'].map(f => <motion.button whileTap={reducedMotion ? undefined : { scale: .95 }} key={f} aria-pressed={filter === f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}<sup>{f === 'All work' ? projects.length : projects.filter(p => p.cat === f).length}</sup></motion.button>)}</div><div className="views" aria-label="Project view"><button aria-label="Grid view" aria-pressed={view === 'grid'} onClick={() => setView('grid')}>▦</button><button aria-label="List view" aria-pressed={view === 'list'} onClick={() => setView('list')}>☰</button></div></div>
        <p className="sr-only" aria-live="polite">{visible.length} projects shown</p>
        <motion.div layout className={'projects ' + view}><AnimatePresence initial={false}>{visible.map(project => <motion.div className="project-shell" key={project.slug} layout initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: reducedMotion ? 1 : .97 }} transition={{ duration: reducedMotion ? 0 : .3 }}><ProjectPopup project={project}><motion.button type="button" className="project" whileHover={reducedMotion ? undefined : { y: -4 }} whileTap={reducedMotion ? undefined : { scale: .99 }}><div className={'cover ' + project.color}><span className="cover-meta">{project.format} / {String(projects.indexOf(project) + 1).padStart(2, '0')}</span><ProjectArtwork project={project} /><span className="cover-bottom">{project.type}<i>↗</i></span></div><div className="project-info"><div><h3>{project.name}</h3><p>{project.roles}</p></div><span className="project-category">{project.cat}</span></div><span className="read-case">Read my experience <span aria-hidden="true">↗</span></span></motion.button></ProjectPopup></motion.div>)}</AnimatePresence></motion.div>
        <p className="archive-note">An evolving selection. Covers use brand artwork for identification; original films and design deliverables will be added to the archive.</p>
      </section>
    </main>
    <footer className="detail-footer"><Link href="/">← Back to home</Link><span>SAUMYA DOHAREY / IN THE MAKING</span></footer>
  </div>;
}
