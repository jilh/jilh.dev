// All the words and numbers on the site live here. Edit this file, not the components.
// Only claims you can back up belong in this file.

export const person = {
  name: 'Stephen Afolayan',
  handle: 'jilh',
  email: 'afolayan4life@gmail.com',
  linkedin: 'https://linkedin.com/in/jilh',
  github: 'https://github.com/jilh',
  play: 'https://play.google.com/store/apps/developer?id=JILH',
  vendorl: 'https://vendorl.com',
  tedxId: 'On80FJ5D1LU',
  tedxStart: 10466, // 2:54:26
};

export const lenses = {
  advocate: {
    label: 'Advocate',
    headline: ['I build developer communities', 'from zero.'],
    sub: 'And I ship the apps to prove the tools work. Coding since 2009, building communities since 2017.',
    order: ['communities', 'apps', 'program', 'talks', 'moments'],
    stats: [
      { to: 258, label: 'members in GDG Egbe, from zero' },
      { to: 24, label: 'campuses onboarded across Nigeria and Kenya' },
      { to: 300, suffix: '+', label: 'at the first tech conference in Egbe' },
      { to: 23, suffix: ' of 24', label: 'fellows employed after our program' },
    ],
    resumes: [
      {
        title: 'Developer Advocate / DevRel',
        for: 'Developer relations, developer advocate, and community roles at developer-tool companies.',
        file: '/resumes/Stephen_Afolayan_DevRel_Resume.pdf',
      },
      {
        title: 'Community & Program Manager',
        for: 'Community management and program management, in tech or beyond.',
        file: '/resumes/Stephen_Afolayan_Community_Program_Resume.pdf',
      },
    ],
  },
  builder: {
    label: 'Builder',
    headline: ['I ship mobile apps', 'people keep.'],
    sub: 'Three React Native apps live on Google Play, offline-first and real-time, plus a fourth on the way. I also grow the communities around what gets built.',
    order: ['apps', 'communities', 'program', 'talks', 'moments'],
    stats: [
      { to: 3, label: 'apps live on Google Play' },
      { to: 5000, suffix: '+', label: 'downloads on RC Hymns' },
      { to: 17, suffix: ' yrs', label: 'writing code, since 2009' },
      { to: 2, label: 'backends I build on: Supabase and Firebase' },
    ],
    resumes: [
      {
        title: 'React Native Engineer',
        for: 'Mobile engineering roles with Expo, React Native, Supabase, and Firebase.',
        file: '/resumes/Stephen_Afolayan_React_Native_Resume.pdf',
      },
    ],
  },
};

export const marquee = [
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
];

export const timeline = [
  { year: '2009', text: 'Writes his first HTML and CSS in Dreamweaver.' },
  { year: '2016', text: 'First professional role: full-stack PHP developer at Education Online Nigeria.' },
  { year: '2017', text: 'Founds Binapti and hosts the first tech event in Egbe.' },
  { year: '2019', text: 'Starts training people in digital skills at Sanstonz. 200+ trained by 2022.' },
  { year: '2021', text: 'Starts the Open Source Community Africa chapter in Egbe.' },
  { year: '2022', text: 'Starts the first GDG in Egbe and the DSN chapter. Begins building apps as JILH.' },
  { year: '2023', text: 'Launches the #APILiteracyTour. Ships screens for Insync. Speaks at TEDx.' },
  { year: '2024', text: 'Becomes Program Manager at Brave Redemptive. Publishes RC Hymns and Anony.ng.' },
  { year: '2026', text: 'Completes the MBA. Publishes Akosori. Vendorl launches this year.', now: true },
];

export const communities = [
  {
    big: '0 → 258',
    name: 'Google Developer Group Egbe',
    role: 'Lead Organizer',
    years: '2022 – now',
    start: 'The first and only GDG chapter in Egbe, started from zero members.',
    moves:
      'A steady calendar of Google’s flagship formats: I/O Extended, Flutter Forward, DevFest, Cloud certification sessions, and Build with AI. Local sponsors to pay for them.',
    result: '258 members, 23+ events, and a partnership with Propel, a talent-placement company.',
  },
  {
    big: '300+',
    name: 'Binapti',
    role: 'Founder',
    years: '2017 – now',
    start: 'The first tech event Egbe had hosted.',
    moves:
      'Binapti Conf for developers, then Binapti Explore for entrepreneurs, with monthly meetups for developers, designers, and founders in between.',
    result: '300+ attendees, $1,000 from VMware, and €500 from Mullvad.',
  },
  {
    big: '0 → 20+',
    name: 'Open Source Community Africa, Egbe',
    role: 'Lead Organizer',
    years: '2021 – now',
    start: 'An open-source community in a town without one.',
    moves:
      'Meetups, the Open Source Roundtable, and OpenCSH, a three-month contribute-scale-hack mentorship hackathon I created.',
    result: '20+ active open-source contributors.',
  },
  {
    big: '24',
    name: 'Postman #APILiteracyTour',
    role: 'Student Leader',
    years: '2023 – 2024',
    start: 'A student program to open campus by campus across two countries.',
    moves:
      'An onboarding event for each campus, run by me or by a newly onboarded student leader who then ran their own chapter.',
    result:
      '24 campuses across Nigeria and Kenya, and 1,400+ members. The student leaders did the lasting work. I opened the doors.',
  },
  {
    big: 'Data + AI',
    name: 'Data Scientists Network, Egbe',
    role: 'Community Lead',
    years: '2022 – now',
    start: 'A local chapter focused on data science and AI education.',
    moves:
      'Co-organizing campaigns and training so people without access to data science and AI can begin.',
    result: 'Active since September 2022.',
  },
];

export const apps = [
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
    features: ['Real-time group play', 'Offline play with online sync', 'A reward system for players'],
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
];

export const program = {
  big: 23,
  bigSuffix: ' of 24',
  bigLabel: 'fellows in our first cohort are now employed',
  points: [
    'Our fellowship took 24 people from 400+ applicants.',
    'The Fundamentals cohort graduated 25 from 200+ applicants.',
    'I run day-to-day operations for a software and design training hub, turning the director’s strategy into weekly delivery.',
    'Before this, I trained 200+ people in digital marketing and content creation at Sanstonz, and mentored learners to a Google Digital Marketing certification.',
  ],
  tools: [
    'Student success reporting',
    'Finance and expense tracking',
    'Assignment submission and grading',
    'Form and calendar workflows',
    '30+ industry guest sessions',
  ],
  toolsIntro: 'Built with Google Sheets and AppScript:',
};

// Talks. The one marked `featured: true` plays first. Add more and a scrollable list appears.
// `id` is the YouTube video id (the part after v= or /live/). `start` is in seconds (optional).
export const talks = {
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
    // { id: 'YOUTUBE_ID', start: 0, title: 'Talk title', event: 'DevFest Lokoja', when: 'Month Year', note: 'One line about it.' },
  ],
  stages: ['DevFest Lokoja', 'DevFest Ogbomoso', 'DevFest Ilorin', 'DevFest Ikot-Ekpene'],
};

// Photos from stages and events. A photo only appears on the site once its file exists in
// public/images/moments/. Fill in `when`, `place` and `note` for each one you add.
// tags: use 'On stage', 'Hosting' or 'Community' (or invent your own; filters are automatic).
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
  { src: '/images/moments/opencsh.jpg', title: 'OpenCSH', event: 'Open Source Community Africa, Egbe', when: '', place: 'Egbe', note: 'A three-month contribute-scale-hack mentorship hackathon.', tags: ['Community'] },
  { src: '/images/moments/postman-tour.jpg', title: '#APILiteracyTour', event: 'Postman Student Community', when: '', place: '', note: 'Campus onboarding across Nigeria and Kenya.', tags: ['Community'] },
];

export const values = {
  line: 'Just Introduce Life to Humanity.',
  alt: 'Jesus is Lord, Hallelujah.',
  intro: 'jilh is my handle and my reason. Jesus Christ powers everything I do, and it shows up in three ways.',
  pillars: [
    { name: 'Excellence', text: 'The work should be good enough that I am not embarrassed to put my name on it.' },
    { name: 'Timeliness', text: 'If I say Friday, I mean Friday. Your time is part of the job.' },
    { name: 'Honesty', text: 'Real numbers, shared credit, and no claims I cannot back up.' },
  ],
};

export const openTo = [
  'Developer relations and developer advocacy',
  'Community and program management',
  'React Native engineering',
];
