export type WorkLink = {
  label: string
  href: string
}

export type CaseImageSlot = {
  /** Expected path under public/ — left blank until assets land */
  path: string
  label: string
}

export type CaseStudy = {
  id: string
  year: string
  title: string
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

/** Selected work — structure mirrors maciej.co case-study model; images blank */
export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 'apuni-sarkar',
    year: '2024',
    title: 'Apuni Sarkar',
    role: 'Software Engineer',
    period: '2024 → Present',
    scope:
      'NestJS backends for citizen-facing e-District services — 1Cr+ users and 1,000+ public services across Uttarakhand.',
    tags: ['NestJS', 'Civic', 'MongoDB', 'RBAC'],
    links: [{ label: 'e-Services', href: 'https://eservices.uk.gov.in/' }],
    assetFolder: 'work/apuni-sarkar',
    images: [
      { path: '/work/apuni-sarkar/01.jpg', label: 'Portal overview' },
      { path: '/work/apuni-sarkar/02.jpg', label: 'Services grid' },
      { path: '/work/apuni-sarkar/03.jpg', label: 'Workflow' },
    ],
  },
  {
    id: 'cbdc',
    year: '2024',
    title: 'CBDC Infrastructure',
    role: 'Software Engineer',
    period: '2024',
    scope:
      'Payment APIs and transaction validation for a state CBDC subsidy program handling ₹800Cr+ disbursement flows.',
    tags: ['Fintech', 'Payments', 'NestJS'],
    links: [{ label: 'e-Services', href: 'https://eservices.uk.gov.in/' }],
    assetFolder: 'work/cbdc',
    images: [
      { path: '/work/cbdc/01.jpg', label: 'Payment flow' },
      { path: '/work/cbdc/02.jpg', label: 'Validation UI' },
    ],
  },
  {
    id: 'ai-assistant',
    year: '2024',
    title: 'AI Assistant',
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
