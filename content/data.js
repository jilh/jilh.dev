// Everything on the site lives here. Edit this file, not the components.
// Only claims you can back up belong in this file.
//
// The site is two pages in one: ADVOCATE (the home page) and BUILDER (/builder).
// They share a layout but not their words, so each is written separately below.

export const person = {
  name: 'Stephen Afolayan',
  email: 'afolayan4life@gmail.com',
  linkedin: 'https://linkedin.com/in/jilh',
  github: 'https://github.com/jilh',
  play: 'https://play.google.com/store/apps/developer?id=JILH',
  vendorl: 'https://vendorl.com',
};

export const values = {
  line: 'Just Introduce Life to Humanity.',
  intro: 'jilh is my handle. Jesus Christ powers everything I do, and it shows up in three ways.',
  pillars: [
    { name: 'Excellence', text: 'Work I am proud to sign.' },
    { name: 'Timeliness', text: 'If I say Friday, I mean Friday.' },
    { name: 'Honesty', text: 'Real numbers. Shared credit.' },
  ],
  amen: 'Jesus is Lord, Hallelujah.',
};

export const openTo = 'Developer relations · Community and program management · React Native engineering';
export const where = 'Remote, or with relocation. Canada, US, EU, and Africa.';

/* ------------------------------------------------------------------ */
/* ADVOCATE                                                            */
/* ------------------------------------------------------------------ */

export const advocate = {
  key: 'advocate',
  label: 'Advocate',
  path: '/',
  nav: [
    ['Story', '#story'],
    ['Proof', '#proof'],
    ['Talks', '#talks'],
    ['Tools', '#tools'],
    ['Resume', '#resume'],
    ['Contact', '#contact'],
  ],

  hero: {
    eyebrow: 'Developer Advocate · Community & Program Manager',
    headline: ['I build developer communities', 'from zero.'],
    sub: 'I start them where nothing exists yet, then make them last. Coding since 2009, building communities since 2017.',
    primary: { label: 'See the proof', href: '#proof' },
    hint: { text: 'I also ship mobile apps.', label: 'See the builder view', href: '/builder/' },
    stats: [
      { to: 258, label: 'members in GDG Egbe, from zero' },
      { to: 24, label: 'campuses opened across Nigeria and Kenya' },
      { to: 23, suffix: ' of 24', label: 'fellows employed after our program' },
    ],
  },

  marquee: [
    'I/O Extended',
    'Flutter Forward',
    'DevFest',
    'Build with AI',
    'Cloud Certification',
    'OpenCSH',
    'Open Source Roundtable',
    'Binapti Conf',
    'Binapti Explore',
    '#APILiteracyTour',
  ],

  story: {
    kicker: 'The story',
    title: 'It always starts',
    em: 'the same way.',
    chapters: [
      {
        n: '01',
        head: 'Nobody is doing it.',
        text: 'In 2017 I founded Binapti. Its conference became the first tech event Egbe had hosted.',
      },
      {
        n: '02',
        head: 'So I start it.',
        text: 'In 2022 I started the first Google Developer Group in Egbe. Zero members then. 258 now.',
      },
      {
        n: '03',
        head: 'Then I make it last.',
        text: 'Meetups, a mentorship hackathon, and student leaders on 24 campuses who went on to run their own chapters.',
      },
    ],
  },

  proof: {
    kicker: 'The proof',
    title: 'Four communities,',
    em: 'started from zero.',
    items: [
      {
        big: '0 → 258',
        name: 'Google Developer Group Egbe',
        line: 'The first and only GDG in Egbe. 23+ events, from I/O Extended to Build with AI.',
        role: 'Lead Organizer',
        years: '2022 – now',
      },
      {
        big: '300+',
        name: 'Binapti Conf',
        line: 'The first tech conference in Egbe, backed by VMware and Mullvad.',
        role: 'Founder',
        years: '2017 – now',
      },
      {
        big: '0 → 20+',
        name: 'Open Source Community Africa, Egbe',
        line: 'Meetups, a roundtable, and OpenCSH, a three-month mentorship hackathon.',
        role: 'Lead Organizer',
        years: '2021 – now',
      },
      {
        big: '24',
        name: 'Postman #APILiteracyTour',
        line: 'I opened the doors on 24 campuses in Nigeria and Kenya. The student leaders built the chapters: 1,400+ members.',
        role: 'Student Leader',
        years: '2023 – 2024',
      },
    ],
    note: 'Also Community Lead at Data Scientists Network, Egbe.',
  },

  program: {
    kicker: 'Programs',
    title: 'From strategy to',
    em: 'people with jobs.',
    big: 23,
    suffix: ' of 24',
    label: 'fellows in our first cohort are employed.',
    text: 'At Brave Redemptive I turn the director’s strategy into weekly delivery, with Sheets and AppScript automation behind it. The Fundamentals cohort graduated 25 from 200+ applicants.',
    meta: 'Program Manager · since June 2024',
  },

  tools: {
    kicker: 'Tools',
    title: 'What I run',
    em: 'communities with.',
    items: [
      { icon: 'postman' },
      { icon: 'github' },
      { icon: 'figma' },
      { icon: 'canva' },
      { icon: 'adobe' },
      { icon: 'sheets' },
      { icon: 'appsscript' },
      { icon: 'discord' },
      { icon: 'slack' },
      { icon: 'trello' },
    ],
  },

  resume: {
    title: 'Take the one',
    em: 'that fits.',
    items: [
      {
        title: 'Developer Advocate',
        for: 'DevRel and developer advocacy roles.',
        file: '/resumes/Stephen_Afolayan_DevRel_Resume.pdf',
      },
      {
        title: 'Community & Program Manager',
        for: 'Community and program management, in tech or beyond.',
        file: '/resumes/Stephen_Afolayan_Community_Program_Resume.pdf',
      },
    ],
    elsewhere: {
      text: 'Hiring an engineer?',
      label: 'The React Native resume is on the Builder page',
      href: '/builder/#resume',
    },
  },

  other: {
    kicker: 'The other side',
    title: 'I also',
    em: 'build.',
    text: 'Three React Native apps are live on Google Play, with 5,000+ downloads on RC Hymns. See how I ship.',
    cta: 'Switch to the Builder view',
    href: '/builder/',
  },
};

// Talks. The one marked `featured: true` plays first. Add more and a scrollable list appears.
// `id` is the YouTube video id (the part after v= or /live/). `start` is in seconds (optional).
export const talks = {
  kicker: 'Talks',
  title: 'On stage,',
  em: 'on the record.',
  videos: [
    {
      id: 'On80FJ5D1LU',
      start: 10466, // 2:54:26
      title: 'Unveiling the Economy of Studentship',
      event: 'TEDx Thomas Adewumi University',
      when: 'November 2023',
      note: 'My talk begins at 2:54:26 in the full event stream.',
      featured: true,
    },
    // { id: 'YOUTUBE_ID', start: 0, title: 'Talk title', event: 'DevFest Lokoja', when: 'Month Year', note: 'One line.' },
  ],
  also: 'Also on stage at DevFest Lokoja, Ogbomoso, Ilorin, and Ikot-Ekpene.',
};

// Photos from stages and events. A photo appears on the site only once its file exists in
// public/images/moments/. Fill in `when`, `place` and `note` for each one you add.
// tags: 'On stage', 'Hosting' or 'Community' (or invent your own; the filters build themselves).
export const moments = [
  { src: '/images/moments/tedx-tau.jpg', title: 'TEDx talk', event: 'TEDx Thomas Adewumi University', when: 'November 2023', place: '', note: 'Talk: “Unveiling the Economy of Studentship.”', tags: ['On stage'] },
  { src: '/images/moments/devfest-lokoja.jpg', title: 'Speaking at DevFest Lokoja', event: 'DevFest Lokoja', when: '', place: 'Lokoja', note: '', tags: ['On stage'] },
  { src: '/images/moments/devfest-ogbomoso.jpg', title: 'Speaking at DevFest Ogbomoso', event: 'DevFest Ogbomoso', when: '', place: 'Ogbomoso', note: '', tags: ['On stage'] },
  { src: '/images/moments/devfest-ilorin.jpg', title: 'Speaking at DevFest Ilorin', event: 'DevFest Ilorin', when: '', place: 'Ilorin', note: '', tags: ['On stage'] },
  { src: '/images/moments/devfest-ikot-ekpene.jpg', title: 'Speaking at DevFest Ikot-Ekpene', event: 'DevFest Ikot-Ekpene', when: '', place: 'Ikot-Ekpene', note: '', tags: ['On stage'] },
  { src: '/images/moments/binapti-conf.jpg', title: 'Binapti Conf', event: 'Binapti Conf', when: '', place: 'Egbe', note: 'The first tech conference in Egbe. 300+ attendees.', tags: ['Hosting'] },
  { src: '/images/moments/gdg-io-extended.jpg', title: 'I/O Extended', event: 'GDG Egbe', when: '', place: 'Egbe', note: '', tags: ['Hosting'] },
  { src: '/images/moments/gdg-flutter-forward.jpg', title: 'Flutter Forward', event: 'GDG Egbe', when: '', place: 'Egbe', note: '', tags: ['Hosting'] },
  { src: '/images/moments/gdg-build-with-ai.jpg', title: 'Build with AI', event: 'GDG Egbe', when: '', place: 'Egbe', note: '', tags: ['Hosting'] },
  { src: '/images/moments/opencsh.jpg', title: 'OpenCSH', event: 'Open Source Community Africa, Egbe', when: '', place: 'Egbe', note: 'A three-month mentorship hackathon.', tags: ['Community'] },
  { src: '/images/moments/postman-tour.jpg', title: '#APILiteracyTour', event: 'Postman Student Community', when: '', place: '', note: 'Campus onboarding across Nigeria and Kenya.', tags: ['Community'] },
];

/* ------------------------------------------------------------------ */
/* BUILDER                                                             */
/* ------------------------------------------------------------------ */

export const builder = {
  key: 'builder',
  label: 'Builder',
  path: '/builder/',
  nav: [
    ['Story', '#story'],
    ['Apps', '#apps'],
    ['Craft', '#craft'],
    ['Tools', '#tools'],
    ['Resume', '#resume'],
    ['Contact', '#contact'],
  ],

  hero: {
    eyebrow: 'React Native Engineer · Mobile',
    headline: ['I ship mobile apps', 'people keep.'],
    sub: 'React Native and Expo up front, Supabase and Firebase behind. Three apps live on Google Play, a fourth on the way.',
    primary: { label: 'See the apps', href: '#apps' },
    hint: { text: 'I also build communities.', label: 'See the advocate view', href: '/' },
    stats: [
      { to: 3, label: 'apps live on Google Play' },
      { to: 5000, suffix: '+', label: 'downloads on RC Hymns' },
      { to: 17, label: 'years writing code' },
    ],
  },

  story: {
    kicker: 'The story',
    title: 'How I',
    em: 'got here.',
    chapters: [
      {
        n: '01',
        head: 'Start with the basics.',
        text: 'I wrote my first HTML in Dreamweaver in 2009. By 2016 it was my profession.',
      },
      {
        n: '02',
        head: 'Ship for real people.',
        text: 'Since 2022 I publish apps as JILH: a hymn book, an anonymous inbox, a Bible quiz.',
      },
      {
        n: '03',
        head: 'Make it work anywhere.',
        text: 'Offline-first, so an app keeps working without a connection and catches up when it returns.',
      },
    ],
  },

  apps: {
    kicker: 'Apps',
    title: 'Live on',
    em: 'real phones.',
    sub: 'The source is private because of the payment integrations. I am happy to walk through the code on a call.',
    items: [
      {
        name: 'RC Hymns',
        meta: 'Google Play · June 2024',
        stack: ['Expo', 'Firebase'],
        hook: 'Every hymn in your pocket, no signal needed.',
        features: ['Full hymn library that works offline', 'Share any hymn as an image'],
        metric: '5,000+ downloads',
        image: '/images/rc-hymns.png',
        link: 'play',
      },
      {
        name: 'Anony.ng',
        meta: 'Google Play · December 2024',
        stack: ['Expo', 'Firebase'],
        hook: 'Anonymous messages, with no email required.',
        features: ['Sign up with only a username and password', 'Push notifications for new messages'],
        metric: '5.0 rating · 100+ downloads',
        image: '/images/anony-ng.png',
        link: 'play',
      },
      {
        name: 'Akosori',
        meta: 'Google Play · February 2026',
        stack: ['Expo', 'Supabase'],
        hook: 'A Bible quiz your whole group can play together.',
        features: ['Real-time group play', 'Offline play with online sync', 'Rewards for players'],
        metric: '50+ downloads',
        image: '/images/akosori.png',
        link: 'play',
      },
      {
        name: 'Vendorl',
        meta: 'Launching 2026',
        stack: ['Expo', 'Supabase'],
        hook: 'A point of sale on your phone, so small businesses skip the hardware.',
        features: ['Built for business owners and SMEs'],
        metric: 'Coming soon',
        image: '/images/vendorl.png',
        link: 'vendorl',
        soon: true,
      },
    ],
  },

  craft: {
    kicker: 'Craft',
    title: 'The hard parts,',
    em: 'solved.',
    items: [
      { name: 'Offline-first sync', where: 'RC Hymns · Akosori' },
      { name: 'Real-time group play', where: 'Akosori' },
      { name: 'Sign-up without email', where: 'Anony.ng' },
      { name: 'Push notifications', where: 'Anony.ng' },
      { name: 'Share as image', where: 'RC Hymns' },
      { name: 'Paystack payments', where: 'Across my apps' },
    ],
  },

  tools: {
    kicker: 'Tools',
    title: 'What I',
    em: 'build with.',
    items: [
      { icon: 'react' },
      { icon: 'expo' },
      { icon: 'javascript' },
      { icon: 'python' },
      { icon: 'supabase' },
      { icon: 'firebase' },
      { icon: 'paystack' },
      { icon: 'openai' },
      { icon: 'langchain' },
      { icon: 'pinecone' },
      { icon: 'github' },
      { icon: 'postman' },
      { icon: 'figma' },
      { icon: 'antigravity' },
    ],
    note: 'AI-assisted development with Google Antigravity.',
  },

  resume: {
    title: 'Take the one',
    em: 'that fits.',
    items: [
      {
        title: 'React Native Engineer',
        for: 'Mobile engineering roles with Expo, React Native, Supabase, and Firebase.',
        file: '/resumes/Stephen_Afolayan_React_Native_Resume.pdf',
      },
    ],
    elsewhere: {
      text: 'Hiring for DevRel or community?',
      label: 'Those resumes are on the Advocate page',
      href: '/#resume',
    },
  },

  other: {
    kicker: 'The other side',
    title: 'I also',
    em: 'build communities.',
    text: 'I started the first Google Developer Group in Egbe: 0 to 258 members and 23+ events. See how I do it.',
    cta: 'Switch to the Advocate view',
    href: '/',
  },
};
