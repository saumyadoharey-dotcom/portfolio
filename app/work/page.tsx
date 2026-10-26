"use client";

import ProjectArtwork from '@/components/project-artwork';
import SiteNav from '@/components/site-nav';
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import ProjectPopup from '@/components/project-popup';
import { featuredProjects, projects } from '@/lib/projects';
import Link from 'next/link';

const filters = [
  { id: 'All work', label: 'All work' },
  { id: 'Creative strategy', label: 'Creative strategy' },
  { id: 'Design', label: 'Design' },
  { id: 'Film production', label: 'Film production' },
  { id: 'Best work', label: 'Best work' },
];

function projectsForFilter(filter: string) {
  if (filter === 'All work') return projects;
  if (filter === 'Best work') return featuredProjects;
  return projects.filter((project) => project.cat === filter);
}

export default function WorkPage() {
  const reducedMotion = useReducedMotion();
  const [filter, setFilter] = useState('All work');
  const [view, setView] = useState('grid');
  const visible = projectsForFilter(filter);

  return (
    <div className="project-page">
      <SiteNav active="work" projectCount={projects.length} />

      <main id="work-main">
        <section className="work work-page-section">
          <div className="section-heading">
            <h2>
              {filter}
              <span> ({visible.length})</span>
            </h2>
            <span className="eyebrow">IDEA → EXECUTION</span>
          </div>

          <div className="work-filter-bar">
            <nav className="work-filters" aria-label="Filter projects">
              {filters.map((option, index) => {
                const count =
                  option.id === 'All work'
                    ? projects.length
                    : option.id === 'Best work'
                      ? featuredProjects.length
                      : projects.filter((project) => project.cat === option.id)
                          .length;

                return (
                  <span className="work-filter-item" key={option.id}>
                    <motion.button
                      whileTap={reducedMotion ? undefined : { scale: 0.95 }}
                      type="button"
                      aria-pressed={filter === option.id}
                      className={filter === option.id ? 'active' : ''}
                      onClick={() => setFilter(option.id)}
                    >
                      {option.label}
                      <sup>{count}</sup>
                    </motion.button>
                    {index < filters.length - 1 && (
                      <span className="work-filter-slash" aria-hidden="true">
                        /
                      </span>
                    )}
                  </span>
                );
              })}
            </nav>
            <div className="views" aria-label="Project view">
              <span className="view-label">VIEW</span>
              <button
                aria-label="Grid view"
                aria-pressed={view === 'grid'}
                onClick={() => setView('grid')}
              >
                ▦
              </button>
              <button
                aria-label="List view"
                aria-pressed={view === 'list'}
                onClick={() => setView('list')}
              >
                ☰
              </button>
            </div>
          </div>

          <p className="sr-only" aria-live="polite">
            {visible.length} projects shown
          </p>
          <motion.div layout className={'projects ' + view}>
            <AnimatePresence initial={false}>
              {visible.map((project, index) => (
                <motion.div
                  className="project-shell"
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.97 }}
                  transition={{ duration: reducedMotion ? 0 : 0.3 }}
                >
                  <ProjectPopup project={project}>
                    <motion.button
                      type="button"
                      className="project"
                      whileHover={reducedMotion ? undefined : { y: -4 }}
                      whileTap={reducedMotion ? undefined : { scale: 0.99 }}
                    >
                      <div className={'cover ' + project.color}>
                        <span className="cover-meta">
                          {project.format} / {String(index + 1).padStart(2, '0')}
                        </span>
                        <ProjectArtwork project={project} />
                        <span className="cover-bottom">
                          {project.type}
                          <i>↗</i>
                        </span>
                      </div>
                      <div className="project-info">
                        <div>
                          <h3>{project.name}</h3>
                          <p>{project.roles}</p>
                        </div>
                        <span className="project-category">{project.cat}</span>
                      </div>
                      <span className="read-case">
                        Read my experience <span aria-hidden="true">↗</span>
                      </span>
                    </motion.button>
                  </ProjectPopup>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <p className="archive-note">
            An evolving selection. Choose a discipline to explore the wider
            archive.
          </p>
        </section>
      </main>
      <footer className="detail-footer">
        <Link href="/">← Back to home</Link>
        <span>SAUMYA DOHAREY / IN THE MAKING</span>
      </footer>
    </div>
  );
}
