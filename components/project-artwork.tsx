import { projectArtwork } from '@/lib/brand-artwork';
import type { Project } from '@/lib/projects';

export default function ProjectArtwork({ project }: { project: Project }) {
  if (project.slug === 'green-packaging') {
    return (
      <span className="project-logo-surface full-bleed video-thumbnail">
        <img
          src="https://img.youtube.com/vi/_qdZbwa6ktA/hqdefault.jpg"
          alt="Green Packaging video thumbnail"
          loading="lazy"
          width="480"
          height="360"
        />
      </span>
    );
  }

  const art = projectArtwork[project.slug];
  if (!art) {
    return (
      <strong>
        {project.cover.split(' / ').map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </strong>
    );
  }

  const className = [
    'project-logo-surface',
    art.fullBleed ? 'full-bleed' : '',
    art.fullBleed && project.slug === 'phurr' ? 'phurr-artwork' : '',
    art.dark ? 'logo-dark' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={className}>
      <img
        src={`/brands/${art.file}`}
        alt={`${project.name} brand artwork`}
        loading="lazy"
        width="320"
        height="180"
      />
    </span>
  );
}
