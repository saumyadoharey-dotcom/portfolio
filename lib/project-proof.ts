export type ProofItemType = 'youtube' | 'drive-pdf' | 'drive-video' | 'image' | 'link';

export type ProofItem = {
  type: ProofItemType;
  title: string;
  description?: string;
  url: string;
  actionLabel?: string;
};

export type ProjectProof = {
  intro: string;
  items: ProofItem[];
};

/**
 * Add only real, approved work samples here.
 * Google Drive files must be set to "Anyone with the link — Viewer".
 * Paste the ordinary share URL; the component converts Drive file links
 * to preview embeds for PDFs and videos.
 *
 * For images, use a path under /public, e.g. /proof/phurr/missing-poster.webp.
 * For YouTube, paste the regular watch or youtu.be URL.
 */
export const projectProof: Record<string, ProjectProof> = {
  hoopr: { intro: 'Selected footage and production evidence.', items: [] },
  milld: { intro: 'Both video contributions, with my role identified for each.', items: [] },
  woktok: { intro: 'The finished ad and selected creative material.', items: [] },
  'eat-kried': { intro: 'The finished film and supporting production material.', items: [] },
  'green-packaging': { intro: 'The episode and selected research or script material.', items: [] },
  'popcorn-pricing': { intro: 'The episode and selected research or script material.', items: [] },
  sportsyard: { intro: 'Selected research, findings and recommendations.', items: [] },
  'epicure-robotics': { intro: 'Identity explorations and selected applications.', items: [] },
  cotopay: { intro: 'Page explorations, screenshots and prototype material.', items: [] },
  'framer-hosting': { intro: 'Selected redesign screens and prototype material.', items: [] },
  'krismar-marbles': { intro: 'Selected research and pitch-deck slides.', items: [] },
  bsff: { intro: 'Campaign planning, audience thinking and measurement.', items: [] },
  'house-of-andhra': { intro: 'Selected brand strategy and 7Ps material.', items: [] },
  'asan-cup': { intro: 'Campaign strategy, content routes and planning.', items: [] },
  phurr: { intro: 'Creator strategy, launch narrative and campaign assets.', items: [] },
};
