export type WorkLink = {
  label: string
  href: string
}

export type CaseImageSlot = {
  /** Path under public/ (e.g. /work/apuni-sarkar/01-public-portal.webp) */
  path: string
  label: string
}

export type SurveyStation = {
  /** Approximate WGS84 — labelled as surveyed placement on the sheet */
  lat: number
  lng: number
  place: string
  /** Optional label offset in world units to reduce clustering */
  labelOffset?: { x: number; y: number }
  /** When true, placement is an honest approximation (Prodios cluster) */
  approximate?: boolean
}

export type CaseStudy = {
  id: string
  year: string
  title: string
  /** Short label for the station marker */
  tabLabel: string
  role: string
  period: string
  scope: string
  /** One-line client pitch under the title */
  pitch: string
  tags: readonly string[]
  links: readonly WorkLink[]
  /** Folder under public/work/<id>/ */
  assetFolder: string
  images: readonly CaseImageSlot[]
  station: SurveyStation
}

export type ExperienceItem = {
  year: string
  title: string
  place: string
}

/**
 * Selected work — ordered for client scan:
 * scale → AI product ownership → production AI → current civic →
 * enterprise → mobile breadth → research closer
 */
export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 'apuni-sarkar',
    year: '2024',
    title: 'Apuni Sarkar',
    tabLabel: 'Apuni Sarkar',
    role: 'Software Engineer',
    period: '2024 → Present',
    scope:
      'NestJS backends for citizen-facing e-District services — 1Cr+ users, 1,000+ public services, and CBDC subsidy payment rails across Uttarakhand.',
    pitch:
      'Government-scale citizen services and subsidy payment rails that have to stay up.',
    tags: [
      'NestJS',
      'Redis',
      'MongoDB',
      'React',
      'TanStack Query',
      'Docker',
      'CI/CD',
      'Nginx',
    ],
    links: [{ label: 'e-Services', href: 'https://eservices.uk.gov.in/' }],
    assetFolder: 'work/apuni-sarkar',
    images: [
      {
        path: '/work/apuni-sarkar/01-public-portal.webp',
        label: 'Citizen e-Services portal',
      },
      {
        path: '/work/apuni-sarkar/02-departments-grid.webp',
        label: 'All departments services grid',
      },
      {
        path: '/work/apuni-sarkar/03-applications-dashboard.webp',
        label: 'Actionable applications dashboard',
      },
      {
        path: '/work/apuni-sarkar/04-stats-geographic.webp',
        label: 'Geographic distribution stats',
      },
      {
        path: '/work/apuni-sarkar/05-feedback-insights.webp',
        label: 'Citizen feedback insights',
      },
      {
        path: '/work/apuni-sarkar/06-best-worst-services.webp',
        label: 'Best and worst services',
      },
    ],
    station: {
      lat: 30.3165,
      lng: 78.0322,
      place: 'Dehradun',
      labelOffset: { x: -0.35, y: 0.25 },
    },
  },
  {
    id: 'chat-forge',
    year: '2025',
    title: 'Chat Forge',
    tabLabel: 'Chat Forge',
    role: 'Software Engineer',
    period: '2025 → Present',
    scope:
      'Platform for building support agents trained on a site — crawl a URL, index pages, and keep replies grounded in those sources.',
    pitch:
      'Support agents that stay grounded in your site — crawl, index, answer.',
    tags: ['RAG', 'Agents', 'LLM'],
    links: [{ label: 'Chat Forge', href: 'https://chatforge.prodioslabs.in/' }],
    assetFolder: 'work/chat-forge',
    images: [
      {
        path: '/work/chat-forge/01-landing-hero.webp',
        label: 'Landing hero',
      },
      {
        path: '/work/chat-forge/02-landing-features.webp',
        label: 'Landing features',
      },
      {
        path: '/work/chat-forge/03-agents-dashboard.webp',
        label: 'Agents dashboard',
      },
      {
        path: '/work/chat-forge/04-website-sources.webp',
        label: 'Website sources and training',
      },
      {
        path: '/work/chat-forge/05-actions.webp',
        label: 'Agent actions',
      },
    ],
    station: {
      lat: 30.338,
      lng: 78.068,
      place: 'Prodios Labs, Dehradun',
      approximate: true,
      labelOffset: { x: 0.55, y: 0.35 },
    },
  },
  {
    id: 'ai-assistant',
    year: '2024',
    title: 'AI Assistant',
    tabLabel: 'AI Assistant',
    role: 'Software Engineer',
    period: '2024',
    scope:
      'Production RAG assistants with vector search and tool-calling — live on PGETA and Apuni Sarkar.',
    pitch:
      'Production RAG assistants with tool-calling, live on civic products.',
    tags: ['RAG', 'LLM', 'Vector Search'],
    links: [
      { label: 'PGETA', href: 'https://www.pgeta.in/' },
      { label: 'Apuni Sarkar', href: 'https://eservices.uk.gov.in/' },
    ],
    assetFolder: 'work/ai-assistant',
    images: [
      {
        path: '/work/ai-assistant/01-pgeta-assistant.webp',
        label: 'PGETA assistant on landing',
      },
      {
        path: '/work/ai-assistant/02-pgeta-chat.webp',
        label: 'PGETA chat answers',
      },
      {
        path: '/work/ai-assistant/03-apuni-sarkar-chatbot.webp',
        label: 'Apuni Sarkar chatbot',
      },
    ],
    station: {
      lat: 30.292,
      lng: 78.062,
      place: 'Prodios Labs, Dehradun',
      approximate: true,
      labelOffset: { x: 0.7, y: -0.15 },
    },
  },
  {
    id: 'kumbh-2027',
    year: '2025',
    title: 'Haridwar Kumbh 2027',
    tabLabel: 'Kumbh 2027',
    role: 'Software Engineer',
    period: '2025 → Present',
    scope:
      'Digital platform for Haridwar Kumbh 2027 — pilgrim-facing services, operations tooling, and high-traffic civic infrastructure built with Prodios Labs.',
    pitch:
      'Pilgrim services and ops tooling for a high-traffic civic event.',
    tags: ['Civic', 'NestJS', 'Events'],
    links: [{ label: 'Kumbh 2027', href: 'https://kumbh.prodioslabs.in/' }],
    assetFolder: 'work/kumbh-2027',
    images: [
      {
        path: '/work/kumbh-2027/01-home-hero.webp',
        label: 'Home hero and countdown',
      },
      {
        path: '/work/kumbh-2027/02-story-of-kumbh.webp',
        label: 'The story of Kumbh',
      },
      {
        path: '/work/kumbh-2027/03-tradition-timeline.webp',
        label: 'Tradition timeline',
      },
      {
        path: '/work/kumbh-2027/04-explore-haridwar.webp',
        label: 'Explore Haridwar',
      },
      {
        path: '/work/kumbh-2027/05-dos-and-donts.webp',
        label: 'Pilgrim dos and don’ts',
      },
      {
        path: '/work/kumbh-2027/06-kumbh-map.webp',
        label: 'Kumbh GIS map',
      },
    ],
    station: {
      lat: 29.9457,
      lng: 78.1642,
      place: 'Haridwar',
      labelOffset: { x: 0.4, y: 0.2 },
    },
  },
  {
    id: 'nhm',
    year: '2023',
    title: 'NHM Training Management',
    tabLabel: 'NHM',
    role: 'Software Engineer',
    period: '2023',
    scope:
      'Enterprise training platform tracking 50K+ hours with automated validation and RBAC.',
    pitch:
      'Enterprise training platform with automated validation and RBAC.',
    tags: ['Enterprise', 'NestJS', 'RBAC'],
    links: [{ label: 'Portal', href: 'https://tms.uk.gov.in/login' }],
    assetFolder: 'work/nhm',
    images: [
      {
        path: '/work/nhm/01-login.webp',
        label: 'TMS login',
      },
      {
        path: '/work/nhm/02-training-calendar.webp',
        label: 'Training calendar',
      },
    ],
    station: {
      lat: 30.298,
      lng: 78.018,
      place: 'Dehradun',
      labelOffset: { x: -0.6, y: -0.25 },
    },
  },
  {
    id: 'stray-reporter',
    year: '2024',
    title: 'Stray Reporter',
    tabLabel: 'Stray Reporter',
    role: 'Full-stack',
    period: 'Personal',
    scope:
      'Mobile app for reporting stray cows and dogs — citizen capture flow, rescue tracking, and team inbox for accept/reject and status updates.',
    pitch:
      'Citizen capture to rescue tracking — a full mobile civic loop.',
    tags: [
      'React Native',
      'Expo',
      'Next.js',
      'MongoDB',
      'Prisma',
      'Redis',
    ],
    links: [
      { label: 'Stray Reporter', href: 'https://stray-reporter.prodioslabs.in/' },
    ],
    assetFolder: 'work/stray-reporter',
    images: [
      {
        path: '/work/stray-reporter/01-marketing-landing.webp',
        label: 'Marketing landing collage',
      },
      {
        path: '/work/stray-reporter/02-get-started.webp',
        label: 'Get started onboarding',
      },
      {
        path: '/work/stray-reporter/03-login.webp',
        label: 'Login / continue',
      },
      {
        path: '/work/stray-reporter/04-home.webp',
        label: 'Home — report and captures',
      },
      {
        path: '/work/stray-reporter/05-new-scan.webp',
        label: 'New scan capture',
      },
      {
        path: '/work/stray-reporter/06-report-submitted.webp',
        label: 'Report submitted',
      },
      {
        path: '/work/stray-reporter/07-rescue-tracking.webp',
        label: 'Rescue on the way',
      },
      {
        path: '/work/stray-reporter/08-team-dashboard.webp',
        label: 'Team dashboard and requests',
      },
      {
        path: '/work/stray-reporter/09-update-status.webp',
        label: 'Update status and close case',
      },
    ],
    station: {
      lat: 30.305,
      lng: 78.01,
      place: 'Prodios Labs, Dehradun',
      approximate: true,
      labelOffset: { x: 0.15, y: 0.55 },
    },
  },
  {
    id: 'research',
    year: '2025',
    title: 'Bearing Fault Detection',
    tabLabel: 'Research',
    role: 'Research Intern',
    period: '2024 → 2025',
    scope:
      'IEEE-published research from IIT Roorkee — 1D CNN + PCA + SVM for CWRU vibration-based bearing fault detection, with a Streamlit explorer for time/FFT analysis.',
    pitch:
      'IEEE-published vibration ML from IIT Roorkee — CNN, PCA, SVM.',
    tags: ['Research', '1D CNN', 'IEEE'],
    links: [
      {
        label: 'Paper',
        href: 'https://doi.org/10.1109/iatmsi64286.2025.10985009',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/nameerakhter/Vibration_signal_analysis',
      },
    ],
    assetFolder: 'work/research',
    images: [
      {
        path: '/work/research/01-paper-title.webp',
        label: 'IEEE paper — title and abstract',
      },
      {
        path: '/work/research/02-cnn-block-diagram.webp',
        label: 'CNN–PCA–SVM pipeline block diagram',
      },
      {
        path: '/work/research/03-tsne-features.webp',
        label: 'CWRU setup and t-SNE feature clusters',
      },
      {
        path: '/work/research/04-results-metrics.webp',
        label: 'Accuracy metrics and confusion matrices',
      },
      {
        path: '/work/research/07-segment-plot.webp',
        label: 'Segment FFT of bearing signal',
      },
      {
        path: '/work/research/08-segment-fft.webp',
        label: 'Per-segment frequency spectrum',
      },
    ],
    station: {
      lat: 29.8543,
      lng: 77.888,
      place: 'Roorkee',
      labelOffset: { x: -0.45, y: 0.2 },
    },
  },
]

export const EXPERIENCE: readonly ExperienceItem[] = [
  { year: '2025', title: 'Software Engineer', place: 'Prodios Labs' },
  { year: '2024', title: 'Research Intern', place: 'IIT Roorkee' },
  { year: '2023', title: 'Front-End Developer', place: 'PlutosOne' },
  { year: '2020', title: 'B.Tech CS (AIML)', place: 'UPES' },
]

export const CONTACT = {
  email: 'akhtarnameer@gmail.com',
  github: 'https://github.com/nameerakhter',
  availability: 'Open',
  availabilityNote: 'Available for engineering roles and selected collaborations',
} as const

/** Geographic bounds of the stylised sheet (WGS84) */
export const SHEET_BOUNDS = {
  latMin: 29.72,
  latMax: 30.52,
  lngMin: 77.72,
  lngMax: 78.32,
} as const

export const SHEET_COPY = {
  role: 'Software engineer · Dehradun',
  tagline:
    'I build civic platforms, payment rails, and AI systems that have to work when the stakes are high.',
  cta: 'Start a project',
  indexTitle: 'Index to stations',
  indexLead:
    'Seven surveyed projects across the Doon valley, Haridwar, and Roorkee. Open a station for screenshots and live links.',
  aboutTitle: 'Marginal notes',
  about: [
    'I am a software engineer based in Dehradun. At Prodios Labs I build platforms real people depend on — citizen portals, CBDC subsidy rails, and AI assistants that need to stay correct under load.',
    'My background spans full-stack product work, ML research at IIT Roorkee, and a B.Tech in Computer Science (AIML) from UPES. I care about API design, automated testing, and shipping systems that hold when the stakes are high.',
    'I do my best work on hard technical problems with clear product stakes. If that sounds like your project, let’s talk.',
  ],
  experienceTitle: 'Elevation profile',
  experienceLead: 'A cross-section through the places that shaped the work.',
  footerCredit: 'Surveyed by M. N. Akhter',
  mapCredit:
    'Terrain imagery © Esri, Maxar, Earthstar Geographics · DEM AWS / Mapzen',
  approximateNote: 'placement approx.',
} as const
