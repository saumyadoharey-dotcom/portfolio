export type ProjectStory = {
  focus: string;
  experience: string[];
  takeaway: string;
  disciplines: string[];
};

// Editorial first-person drafts based on the supplied project scopes.
// Do not add client feedback, campaign results or shoot anecdotes without verification.
export const stories: Record<string, ProjectStory> = {
  hoopr: {
    focus: 'Connecting direction, cinematography and the rhythm of an edit.',
    experience: [
      'My involvement in Hoopr moved across three parts of filmmaking: directing, shooting and editing. That gives this project a particular place in my portfolio—the creative contribution continues beyond a single stage of production.',
      'I see those roles as connected decisions. Direction establishes what a moment needs to communicate, cinematography decides how we see it, and editing decides how we experience it over time. Hoopr represents the kind of hands-on work I want to keep building on as I move towards film and creative direction.'
    ],
    takeaway: 'For me, the frame and the cut belong to the same conversation.',
    disciplines: ['Direction', 'Cinematography', 'Editing']
  },
  milld: {
    focus: 'A classroom-inspired story, with two different levels of involvement.',
    experience: [
      'My Mill’d work includes two separate contributions. On the first video, I handled the script, direction, shooting and edit. On the second, I helped with direction. It matters to me to make that distinction: these were different roles, even though they sit under the same brand.',
      'The classroom-inspired concept brought character and a familiar cultural reference into the work. It sits close to the kind of storytelling I enjoy—using a recognisable situation as the starting point for a brand story. Across the two videos, my experience spans both carrying an idea through production and contributing to direction within a shared effort.'
    ],
    takeaway: 'Creative ownership also means being precise about where my contribution begins and ends.',
    disciplines: ['Scriptwriting', 'Direction', 'Shooting', 'Editing', 'Direction support']
  },
  woktok: {
    focus: 'Bringing performance and production into the same food ad.',
    experience: [
      'For WokTok, I developed “The 2-Minute Redemption,” a short, dialogue-led concept. In the planning, I asked for two characters and moved the key action from a fridge to a kitchen cabinet. My hands-on contribution to the video covered acting, shooting and editing.',
      'The production planning considered a school studio, a small lighting setup and a camera or phone. That kept the idea connected to the resources available. Being on both sides of the camera also gave this project a different scope: I was part of the performance and part of the choices that shaped its final presentation.'
    ],
    takeaway: 'A performance lives in the way it is filmed and edited, too.',
    disciplines: ['Performance', 'Shooting', 'Editing']
  },
  'eat-kried': {
    focus: 'Following a food-brand idea from the written concept through the edit.',
    experience: [
      'My work for Eat Kried covered scripting, direction, shooting and editing. It is one of the projects where my involvement runs across the full creative sequence, from what the video should say to how the final piece is put together.',
      'This is the part of production I’m drawn to: staying close to an idea as it changes form. A written scene, a filmed moment and an edited sequence each ask for a different kind of attention. Eat Kried belongs in my portfolio because it connects those stages, rather than showing only one isolated skill.'
    ],
    takeaway: 'I want to stay with a story long enough to help it become a finished piece.',
    disciplines: ['Scriptwriting', 'Direction', 'Shooting', 'Editing']
  },
  'green-packaging': {
    focus: 'Using food packaging to explore the relationship between perception and choice.',
    experience: [
      'Green Packaging sits at the intersection of my psychology background and my interest in food storytelling. For Margins & Meals, I explored a question that starts on a supermarket shelf: what makes a product look healthy before we have even read its label?',
      'The creative direction uses comparisons between packaging colours and a sugar-cube reveal to make the topic visual. My contribution covered the script, direction, shooting and editing. This is the kind of independent work I want the channel to make space for—starting with something familiar, then looking more closely at the thinking and business around it.'
    ],
    takeaway: 'An everyday object can be the opening scene of a much bigger question.',
    disciplines: ['Research', 'Scriptwriting', 'Direction', 'Shooting', 'Editing']
  },
  'popcorn-pricing': {
    focus: 'Turning a familiar cinema purchase into a food-and-business story.',
    experience: [
      'This Margins & Meals episode begins with a question that belongs to the movie-going experience: why does the popcorn cost so much? It gives me a way to bring two of my interests—food and cinema—into the same story, through the lens of business.',
      'I scripted, directed, shot and edited the video. The project reflects the direction I want for the channel: food stories that go beyond taste and look at the systems surrounding what we buy. Here, the snack counter is the starting point for the explanation, rather than just part of the cinema backdrop.'
    ],
    takeaway: 'The story around food can be as interesting as the food itself.',
    disciplines: ['Research', 'Scriptwriting', 'Direction', 'Shooting', 'Editing']
  },
  sportsyard: {
    focus: 'Beginning with brand research before deciding what to make.',
    experience: [
      'My contribution to Sportsyard was brand research. This entry represents the part of my creative practice that happens before a script, shoot or visual identity: spending time with the brand and the questions around it.',
      'I want that thinking to have a place alongside execution in my portfolio. Research and production are different responsibilities, but both belong in the way I approach creative work. The scope shown here is the research contribution; it does not extend to a claim that I led a campaign or delivered measured business results.'
    ],
    takeaway: 'A useful creative starting point is a question worth investigating.',
    disciplines: ['Brand research']
  },
  'epicure-robotics': {
    focus: 'Translating precision and food operations into a visual identity.',
    experience: [
      'Epicure Robotics gave me a different kind of storytelling problem: how to express a business through an identity system. The positioning centred on making food operations scalable, consistent and autonomous.',
      'My exploration connected E + R with references to robotic arms and mechanical forms. I also considered how the identity could appear on cups and a vending machine. The experience sits between an abstract brand idea and the physical places someone encounters it—a useful connection to my broader interest in art direction and building coherent visual worlds.'
    ],
    takeaway: 'An identity needs a point of view, and places where that point of view can live.',
    disciplines: ['Rebranding', 'Logo exploration', 'Visual identity', 'Applications']
  },
  cotopay: {
    focus: 'Connecting landing-page structure, competitor research and motion.',
    experience: [
      'My CotoPay work focused on a landing page, supported by a review of competing expense-management experiences. I explored how the page could organise information and how the hero could introduce movement through micro-interactions, parallax and blur.',
      'For me, the interesting question is how movement supports a page’s story. There is a connection to editing here: sequence and emphasis influence what someone notices first and what they understand next. CotoPay shows that interest through interface design rather than through a film.'
    ],
    takeaway: 'Motion is most useful when it gives attention a direction.',
    disciplines: ['Competitor research', 'Landing-page design', 'Interaction exploration']
  },
  'framer-hosting': {
    focus: 'An independent exploration of how to communicate speed and security.',
    experience: [
      'This was an independent redesign exploration for Framer’s hosting page. I organised the concept around the line “Global scale hosting, engineered for speed and security,” with speed and security providing the main content structure.',
      'I looked at clarity, perception, conversion, flow and experience, then considered how to organise hosting features such as CDN delivery, compression, image optimisation and security. The feature titles and spotlight grid were part of that exploration. My aim was to make the page’s speed-and-security promise easier to follow; the redesign is a concept, not a measured conversion improvement.'
    ],
    takeaway: 'A strong headline needs a clear structure underneath it.',
    disciplines: ['Web design', 'Content hierarchy', 'Feature presentation']
  },
  'krismar-marbles': {
    focus: 'Bringing performance-marketing research into a pitch.',
    experience: [
      'For Krismar Marbles, my contribution was performance-marketing research and pitch development. This project represents my strategy work: developing the thinking behind a recommendation and shaping it into a presentation.',
      'It adds another dimension to my production interests. I want to understand the reason for making something as well as how to make it. The work presented here is the research and pitch scope; it is not a report of a live campaign or a claim about advertising performance.'
    ],
    takeaway: 'The reason behind a creative recommendation should be as clear as the recommendation itself.',
    disciplines: ['Performance-marketing research', 'Pitch development']
  },
  bsff: {
    focus: 'A registration-focused social campaign for people who care about film.',
    experience: [
      'The Bengaluru Short Film Festival brief brought my interest in cinema into campaign planning. The objective was to maximise registrations ahead of a three-day festival, with cinephiles and potential film producers as the core audiences.',
      'My planning focused on the lead-up to the event and on communication that could move people towards registering. It is a different way of contributing to the film space: helping an audience find a reason to show up. This entry covers the campaign-planning work, rather than a verified account of attendance or conversion results.'
    ],
    takeaway: 'A film event needs a story about why someone should be in the room.',
    disciplines: ['Campaign planning', 'Audience strategy', 'Social communication']
  }
};
