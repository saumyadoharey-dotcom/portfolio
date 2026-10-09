import ProjectArtwork from '@/components/project-artwork';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { stories } from '@/lib/project-stories';
import ProofOfWork from '@/components/proof-of-work';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({slug})=>({slug})); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug}=await params;
  const project=projects.find(p=>p.slug===slug);
  return project ? {title:`${project.name} — Saumya`,description:`${project.line} ${project.roles}. A project by Saumya Doharey.`} : {title:'Project not found — Saumya'};
}
export default async function ProjectPage({params}: Props) {
  const {slug}=await params;
  const index=projects.findIndex(p=>p.slug===slug);
  if(index<0) notFound();
  const project=projects[index];const story=stories[slug];
  const next=projects[(index+1)%projects.length];const previous=projects[(index+projects.length-1)%projects.length];
  return <div className="project-page">
    <header className="nav"><Link href="/" className="wordmark" aria-label="Saumya home">saumya<span>✳</span></Link><nav><Link href="/work">All work <sup>{projects.length}</sup></Link><Link href="/#about">About</Link><Link href="/#tools">Tools</Link></nav><span className="nav-note">A STORY FROM THE ARCHIVE</span></header>
    <main id="project-main">
      <section className="detail-hero">
        <div className="detail-kicker"><Link href="/work">← Selected work</Link><span>{String(index+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span></div>
        <p className="eyebrow">{project.cat} / {project.type}</p>
        <h1>{project.name}</h1><p className="detail-line">{project.line}</p>
        <dl className="detail-facts"><div><dt>MY ROLE</dt><dd>{project.roles}</dd></div><div><dt>FORMAT</dt><dd>{project.format}</dd></div><div><dt>PROJECT FOCUS</dt><dd>{story.focus}</dd></div></dl>
      </section>
      <div className={`detail-cover cover ${project.color}`} aria-hidden="true"><span className="cover-meta">SAUMYA DOHAREY / {project.format}</span><ProjectArtwork project={project}/><span className="cover-bottom">{project.name}<span>{String(index+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span></span></div>
      <div className="detail-body"><aside className="detail-index"><span className="eyebrow">EXPERIENCE FILE / {String(index+1).padStart(2,'0')}</span><nav aria-label="Case study sections"><a href="#brief">01 / The brief</a><a href="#contribution">02 / My contribution</a><a href="#proof-of-work">03 / Proof of work</a><a href="#experience">04 / My experience</a><a href="#takeaway">05 / What I take forward</a></nav><div className="scope-card"><span className="eyebrow">AT A GLANCE</span><p>{project.type}</p><p>{project.format}</p><Link href="/#tools">My working kit ↗</Link></div></aside>
      <article className="detail-story">
        <section id="brief"><span className="eyebrow">01 / THE STARTING POINT</span><h2>The brief</h2><p>{project.brief}</p></section>
        <section id="contribution"><span className="eyebrow">02 / MY PART IN IT</span><h2>My contribution</h2><p>{project.work}</p><ul className="discipline-list" aria-label="Project disciplines">{story.disciplines.map(d=><li key={d}>{d}</li>)}</ul></section>
        <ProofOfWork slug={slug} />
        <section id="experience"><span className="eyebrow">04 / BEHIND THE WORK</span><h2>My experience</h2>{story.experience.map((paragraph,i)=><p key={i}>{paragraph}</p>)}</section>
        <section id="takeaway" className="detail-takeaway"><span className="eyebrow">05 / WHAT I TAKE FORWARD</span><h2>{story.takeaway}</h2></section>
      </article></div>
      <nav className="detail-pagination" aria-label="Browse projects"><Link className="previous-detail" href={`/work/${previous.slug}`}><span>← PREVIOUS PROJECT</span><strong>{previous.name}</strong><small>{previous.cat}</small></Link><Link className="next-detail" href={`/work/${next.slug}`}><span>NEXT PROJECT →</span><strong>{next.name}</strong><small>{next.cat}</small></Link></nav>
    </main>
    <footer className="detail-footer"><Link href="/work">View all {projects.length} projects ↗</Link><span>SAUMYA DOHAREY / IN THE MAKING</span></footer>
  </div>;
}
