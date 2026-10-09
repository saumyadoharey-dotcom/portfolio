export type ProofItemType = 'youtube' | 'youtube-video' | 'drive-pdf' | 'drive-video' | 'image' | 'link';

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
  hoopr: { intro: 'Selected footage and production evidence.', items: [{
      type: 'drive-video',
      title: 'Final film',
      description: 'Directed, shot and edited by me.',
      url: 'https://drive.google.com/file/d/1gI1x108-fLx95v5cEfvoKtt73QMkWgXE/view?usp=drive_link'
    },] },
  milld: { intro: 'Both video contributions, with my role identified for each.', items: [{
      type: 'drive-video',
      title: 'Final film',
      description: 'Directed, shot and edited by me.',
      url: 'https://drive.google.com/file/d/1RNoV3rDt0KMaTL9hiuvArIrY5gjVUKGi/view?usp=drive_link'
    },] },
  woktok: { intro: 'The finished ad and selected creative material.', items: [{
      type: 'drive-video',
      title: 'Final film',
      description: 'Directed, shot and edited by me.',
      url: 'https://drive.google.com/file/d/1XXUHLZdBTyMfL621gkkrqR4CBJZX82BN/view?usp=drive_link'
    },] },
  'eat-kried': { intro: 'The finished film and supporting production material.', items: [{
      type: 'drive-video',
      title: 'Final film',
      description: 'Directed, shot and edited by me.',
      url: 'https://drive.google.com/file/d/1LvpZxV5d-wS1_9Dnr40L0gjCofvbp4Zg/view?usp=drive_link'
    },] },
  'green-packaging': { intro: 'The episode and selected research or script material.', items: [{
      type: 'youtube-video',
      title: 'Final film',
      description: 'Directed, shot and edited by me.',
      url: 'https://youtu.be/_qdZbwa6ktA?si=5bUc0_FOaRYrbkDV'
    },] },
  'popcorn-pricing': { intro: 'The episode and selected research or script material.', items: [{
      type: 'youtube-video',
      title: 'Final film',
      description: 'Directed, shot and edited by me.',
      url: 'https://youtu.be/e5GudnURYBo?si=Cbf2nIVTuBsGx-BB'
    },] },
  sportsyard: { intro: 'Selected research, findings and recommendations.', items: [ {
      type: 'drive-pdf',
      title: 'Selected production material',
      description: 'Supporting material from the project.',
      url: 'https://canva.link/c9gfravomc5d9tp'
    }] },
  'epicure-robotics': { intro: 'Identity explorations and selected applications.', items: [ {
      type: 'drive-pdf',
      title: 'Selected production material',
      description: 'Supporting material from the project.',
      url: 'https://canva.link/sywx1e4f6cqs68l'
    }] },
  cotopay: { intro: 'Page explorations, screenshots and prototype material.', items: [ {
      type: 'drive-pdf',
      title: 'Selected production material',
      description: 'Supporting material from the project.',
      url: 'https://www.figma.com/proto/YsxC3oy3uTr6E8PrJ0XDAN/cotopay?node-id=78-450&viewport=152%2C59%2C0.07&t=KY3MwTQW2Km0ht3E-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=161%3A395&page-id=0%3A1&show-proto-sidebar=1'
    }] },
  'framer-hosting': { intro: 'Selected redesign screens and prototype material.', items: [ {
      type: 'drive-pdf',
      title: 'Selected production material',
      description: 'Supporting material from the project.',
      url: 'https://amazing-weather-951289.framer.app'
    }] },
  'krismar-marbles': { intro: 'Selected research and pitch-deck slides.', items: [ {
      type: 'drive-pdf',
      title: 'Selected production material',
      description: 'Supporting material from the project.',
      url: 'https://canva.link/3rtpdobenzd75qw'
    }] },
  bsff: { intro: 'Campaign planning, audience thinking and measurement.', items: [] },
  'house-of-andhra': { intro: 'Selected brand strategy and 7Ps material.', items: [ {
      type: 'drive-pdf',
      title: 'Selected production material',
      description: 'Supporting material from the project.',
      url: 'https://canva.link/8iiefh7o9chlfjl'
    }] },
  'asan-cup': { intro: 'Campaign strategy, content routes and planning.', items: [ {
      type: 'drive-pdf',
      title: 'Selected production material',
      description: 'Supporting material from the project.',
      url: 'https://canva.link/tn8b39f3ry4upy3'
    }] },
  phurr: { intro: 'Creator strategy, launch narrative and campaign assets.', items: [ {
      type: 'drive-pdf',
      title: 'Selected production material',
      description: 'Supporting material from the project.',
      url: 'https://canva.link/210jqjqpywbj9l6'
    }] },
};
