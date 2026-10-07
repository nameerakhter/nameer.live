export type WorkLink = {
  label: string
  href: string
}

export type CaseImageSlot = {
  /** Path under public/ (e.g. /work/apuni-sarkar/01-public-portal.png) */
  path: string
  label: string
}

export type CaseStudy = {
  id: string
  year: string
  title: string
  /** Short label for the folder tab */
  tabLabel: string
  role: string
  period: string
  scope: string
  tags: readonly string[]
  links: readonly WorkLink[]
  /** Folder under public/work/<id>/ */
  assetFolder: string
  images: readonly CaseImageSlot[]
}

export type ExperienceItem = {
  year: string
  title: string
  place: string
}

/** Selected work — structure mirrors maciej.co case-study model */
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
    tags: ['NestJS', 'Civic', 'MongoDB', 'RBAC'],
    links: [{ label: 'e-Services', href: 'https://eservices.uk.gov.in/' }],
    assetFolder: 'work/apuni-sarkar',
    images: [
      {
        path: '/work/apuni-sarkar/01-public-portal.png',
        label: 'Citizen e-Services portal',
      },
      {
        path: '/work/apuni-sarkar/02-departments-grid.png',
        label: 'All departments services grid',
      },
      {
        path: '/work/apuni-sarkar/03-applications-dashboard.png',
        label: 'Actionable applications dashboard',
      },
      {
        path: '/work/apuni-sarkar/04-stats-geographic.png',
        label: 'Geographic distribution stats',
      },
      {
        path: '/work/apuni-sarkar/05-feedback-insights.png',
        label: 'Citizen feedback insights',
      },
      {
        path: '/work/apuni-sarkar/06-best-worst-services.png',
        label: 'Best and worst services',
      },
    ],
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
    tags: ['Mobile', 'React Native', 'Maps'],
    links: [{ label: 'GitHub', href: 'https://github.com/nameerakhter' }],
    assetFolder: 'work/stray-reporter',
    images: [
      {
        path: '/work/stray-reporter/01-marketing-landing.png',
        label: 'Marketing landing collage',
      },
      {
        path: '/work/stray-reporter/02-get-started.png',
        label: 'Get started onboarding',
      },
      {
        path: '/work/stray-reporter/03-login.png',
        label: 'Login / continue',
      },
      {
        path: '/work/stray-reporter/04-home.png',
        label: 'Home — report and captures',
      },
      {
        path: '/work/stray-reporter/05-new-scan.png',
        label: 'New scan capture',
      },
      {
        path: '/work/stray-reporter/06-report-submitted.png',
        label: 'Report submitted',
      },
      {
        path: '/work/stray-reporter/07-rescue-tracking.png',
        label: 'Rescue on the way',
      },
      {
        path: '/work/stray-reporter/08-team-dashboard.png',
        label: 'Team dashboard and requests',
      },
      {
        path: '/work/stray-reporter/09-update-status.png',
        label: 'Update status and close case',
      },
    ],
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
    tags: ['Civic', 'NestJS', 'Events'],
    links: [{ label: 'Kumbh 2027', href: 'https://kumbh.prodioslabs.in/' }],
    assetFolder: 'work/kumbh-2027',
    images: [
      { path: '/work/kumbh-2027/01-portal.jpg', label: 'Portal overview' },
      { path: '/work/kumbh-2027/02-services.jpg', label: 'Services' },
      { path: '/work/kumbh-2027/03-ops.jpg', label: 'Operations' },
    ],
  },
  {
    id: 'ai-assistant',
    year: '2024',
    title: 'AI Assistant',
    tabLabel: 'AI Assistant',
    role: 'Software Engineer',
    period: '2024',
    scope:
      'Production RAG assistants with vector search and tool-calling — live on NATA and PGETA.',
    tags: ['RAG', 'LLM', 'Vector Search'],
    links: [
      { label: 'NATA', href: 'https://nata.in/' },
      { label: 'PGETA', href: 'https://www.pgeta.in/' },
    ],
    assetFolder: 'work/ai-assistant',
    images: [
      { path: '/work/ai-assistant/01.jpg', label: 'Chat surface' },
      { path: '/work/ai-assistant/02.jpg', label: 'Tool calling' },
      { path: '/work/ai-assistant/03.jpg', label: 'Admin' },
    ],
  },
  {
    id: 'e-office',
    year: '2023',
    title: 'E-Office Dashboard',
    tabLabel: 'E-Office',
    role: 'Software Engineer',
    period: '2023',
    scope:
      'Analytics dashboards and APIs adopted across 4+ government departments.',
    tags: ['React', 'Analytics', 'REST'],
    links: [{ label: 'Dashboard', href: 'https://dashboard.uk.gov.in/' }],
    assetFolder: 'work/e-office',
    images: [
      { path: '/work/e-office/01.jpg', label: 'Dashboard' },
      { path: '/work/e-office/02.jpg', label: 'Reports' },
    ],
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
    tags: ['Enterprise', 'NestJS', 'RBAC'],
    links: [{ label: 'Portal', href: 'https://tms.prodioslabs.com/login' }],
    assetFolder: 'work/nhm',
    images: [
      { path: '/work/nhm/01.jpg', label: 'Training portal' },
      { path: '/work/nhm/02.jpg', label: 'Hours tracking' },
    ],
  },
  {
    id: 'research',
    year: '2025',
    title: 'Bearing Fault Detection',
    tabLabel: 'Research',
    role: 'Research Intern',
    period: '2024 → 2025',
    scope:
      'IEEE-published research from IIT Roorkee — 10+ ML/DL architectures for vibration-based fault detection.',
    tags: ['Research', '1D CNN', 'IEEE'],
    links: [
      {
        label: 'Paper',
        href: 'https://doi.org/10.1109/iatmsi64286.2025.10985009',
      },
    ],
    assetFolder: 'work/research',
    images: [
      { path: '/work/research/01.jpg', label: 'Paper figure' },
      { path: '/work/research/02.jpg', label: 'Model results' },
    ],
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
