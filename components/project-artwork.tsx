import { projectArtwork } from '@/lib/brand-artwork';
import type { Project } from '@/lib/projects';
export default function ProjectArtwork({project}:{project:Project}){
 const art=projectArtwork[project.slug];
 return art ? <span className={`project-logo-surface${art.dark?' logo-dark':''}`}><img src={`/brands/${art.file}`} alt={`${project.name} brand artwork`} loading="lazy" width="320" height="180"/></span> : <strong>{project.cover.split(' / ').map((word,i)=><span key={i}>{word}</span>)}</strong>;
}
