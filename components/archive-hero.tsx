'use client';

import ClassicTypewriterName from '@/components/classic-typewriter';
import ProjectArtwork from '@/components/project-artwork';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { featuredProjects, projects } from '@/lib/projects';
import ProjectPopup from '@/components/project-popup';

const filters = [
  { id: 'Best work', label: 'Best work' },
  { id: 'Creative strategy', label: 'Creative strategy' },
  { id: 'Design', label: 'Design' },
  { id: 'Film production', label: 'Film production' },
];

function projectsForFilter(filter: string) {
  return filter === 'Best work'
    ? featuredProjects
    : projects.filter((project) => project.cat === filter);
}

function countForFilter(filter: string) {
  return projectsForFilter(filter).length;
}

export default function ArchiveHero() {
  const [filter, setFilter] = useState('Best work');
  const [selectedSlug, setSelectedSlug] = useState('woktok');
  const reduced = useReducedMotion();
  const visibleProjects = projectsForFilter(filter);
  const project =
    visibleProjects.find((item) => item.slug === selectedSlug) ??
    visibleProjects[0] ??
    projects[0];
  const index = Math.max(
    0,
    visibleProjects.findIndex((item) => item.slug === project.slug),
  );

  const changeFilter = (nextFilter: string) => {
    setFilter(nextFilter);
    const nextProjects = projectsForFilter(nextFilter);
    if (nextProjects[0]) setSelectedSlug(nextProjects[0].slug);
  };

  const step = (direction: number) => {
    if (!visibleProjects.length) return;
    const nextIndex =
      (index + direction + visibleProjects.length) % visibleProjects.length;
    setSelectedSlug(visibleProjects[nextIndex].slug);
  };

  return (
    <section
      className="archive-hero"
      aria-label="Explore selected projects"
      onKeyDown={(event) => {
        if (!event.currentTarget.contains(event.target as Node)) return;
        if (event.target instanceof HTMLSelectElement) return;
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          step(1);
        }
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          step(-1);
        }
      }}
    >
      <div className="archive-masthead">
        <h1>Saumya Doharey</h1>
        <p>Production, creative strategy &amp; design.</p>
      </div>

      <aside className="archive-credits" aria-live="polite">
        <h2>{project.name}</h2>
        <dl>
          <div>
            <dt>MY ROLE</dt>
            <dd>{project.roles}</dd>
          </div>
          <div>
            <dt>FORMAT</dt>
            <dd>{project.format}</dd>
          </div>
          <div>
            <dt>PRACTICE</dt>
            <dd>{project.cat}</dd>
          </div>
        </dl>
      </aside>

      <div className="archive-selector">
        <label htmlFor="project-index">
          <span>Project index</span>
          <span>({visibleProjects.length})</span>
        </label>
        <nav className="archive-filters" aria-label="Filter selected work">
          {filters.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={filter === option.id}
              className={filter === option.id ? 'active' : ''}
              onClick={() => changeFilter(option.id)}
            >
              {option.label}
              <sup>{countForFilter(option.id)}</sup>
            </button>
          ))}
        </nav>
        <select
          id="project-index"
          value={project.slug}
          onChange={(event) => setSelectedSlug(event.target.value)}
        >
          {visibleProjects.map((item, itemIndex) => (
            <option key={item.slug} value={item.slug}>
              {String(itemIndex + 1).padStart(2, '0')} — {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="archive-stage">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={project.slug}
            className="archive-feature"
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -18 }}
            transition={{ duration: reduced ? 0 : 0.35 }}
          >
            <ProjectPopup project={project}>
              <button
                className="archive-art"
                aria-label={`Read ${project.name} case study`}
              >
                <span className="archive-edition">
                  SELECTED WORK / {String(index + 1).padStart(2, '0')}
                </span>
                <ProjectArtwork project={project} />
                <span className="archive-art-bottom">
                  {project.name}
                  <span>READ THE STORY ↗</span>
                </span>
              </button>
            </ProjectPopup>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="archive-bottom">
        <p className="archive-intent">
          An eye for the detail.
          <br />
          <em>A story in the making.</em>
        </p>
        <div className="archive-controls">
          <button
            onClick={() => step(-1)}
            aria-label="Previous featured project"
          >
            ←
          </button>
          <span aria-live="polite">
            {String(index + 1).padStart(2, '0')} / {visibleProjects.length}
          </span>
          <button onClick={() => step(1)} aria-label="Next featured project">
            →
          </button>
        </div>
        <a href="/work">Explore the index ↓</a>
      </div>
    </section>
  );
}
