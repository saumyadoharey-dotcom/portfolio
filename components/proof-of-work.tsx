import { projectProof } from '@/lib/project-proof';

type Props = { slug: string };

function driveFileId(url: string) {
  const match = url.match(/\/d\/([\w-]+)/) || url.match(/[?&]id=([\w-]+)/);
  return match?.[1] ?? null;
}

function youtubeEmbed(url: string) {
  try {
    const parsed = new URL(url);
    let id = '';
    if (parsed.hostname.includes('youtu.be')) id = parsed.pathname.slice(1);
    else if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname.startsWith('/shorts/')) id = parsed.pathname.split('/')[2] ?? '';
      else id = parsed.searchParams.get('v') ?? '';
    }
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

export default function ProofOfWork({ slug }: Props) {
  const proof = projectProof[slug];
  if (!proof || proof.items.length === 0) return null;

  return (
    <section id="proof-of-work" className="proof-section" aria-labelledby="proof-title">
      <div className="proof-heading">
        <div>
          <span className="eyebrow">03 / THE ACTUAL WORK</span>
          <h2 id="proof-title">Proof of work<span> ↘</span></h2>
        </div>
        <p>{proof.intro}</p>
      </div>
      <div className="proof-grid">
        {proof.items.map((item, index) => {
          const key = `${slug}-proof-${index}`;
          const yt = item.type === 'youtube' ? youtubeEmbed(item.url) : null;
          const fileId = item.type === 'drive-pdf' || item.type === 'drive-video' ? driveFileId(item.url) : null;
          const driveEmbed = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;

          return (
            <article className="proof-card" key={key}>
              <div className="proof-media">
                {item.type === 'image' ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title} image`}>
                    {/* Local, portfolio-owned proof images live under public/proof/. */}
                    <img src={item.url} alt={item.title} loading="lazy" />
                  </a>
                ) : yt ? (
                  <iframe src={yt} title={item.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                ) : driveEmbed ? (
                  <iframe src={driveEmbed} title={item.title} loading="lazy" allow="autoplay" allowFullScreen />
                ) : (
                  <div className="proof-link-preview"><span>{item.type === 'drive-pdf' ? 'PDF / DOCUMENT' : item.type === 'drive-video' ? 'VIDEO FILE' : 'EXTERNAL RESOURCE'}</span><strong>{item.title}</strong></div>
                )}
              </div>
              <div className="proof-card-caption">
                <div><h3>{item.title}</h3>{item.description ? <p>{item.description}</p> : null}</div>
                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.actionLabel ?? (item.type === 'drive-pdf' ? 'Open PDF ↗' : item.type === 'youtube' || item.type === 'drive-video' ? 'Open media ↗' : 'View item ↗')}</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
