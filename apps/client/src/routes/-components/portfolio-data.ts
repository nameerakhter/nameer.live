export type ProjectLink = {
  label: string
  href: string
}

export type SelectedProject = {
  id: string
  year: string
  title: string
  description: string
  tags: readonly string[]
  links?: readonly ProjectLink[]
  featured?: boolean
  embedHref?: string
  embedLabel?: string
}

export const SELECTED_PROJECTS: readonly SelectedProject[] = [
  {
    id: 'ieee-bearing',
    year: '2025',
    title: 'Bearing Fault Detection',
    description:
      'IEEE-published research from IIT Roorkee — evaluated 10+ ML/DL architectures for vibration-based fault detection on CWRU, with 25% gains via feature engineering.',
    tags: ['Research', '1D CNN', 'IEEE', 'IIT Roorkee'],
    links: [
      {
        label: 'Paper',
        href: 'https://doi.org/10.1109/iatmsi64286.2025.10985009',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/nameerakhter/Ann_cwru',
      },
    ],
    featured: true,
    embedHref: 'https://doi.org/10.1109/iatmsi64286.2025.10985009',
    embedLabel: 'IEEE · Peer-reviewed publication',
  },
  {
    id: 'apuni-sarkar',
    year: '2024',
    title: 'Apuni Sarkar',
    description:
      'NestJS backends for citizen-facing e-District services — 1Cr+ users and 1,000+ public services across Uttarakhand.',
    tags: ['NestJS', 'Civic', 'MongoDB', 'RBAC'],
    links: [{ label: 'e-Services', href: 'https://eservices.uk.gov.in/' }],
    featured: true,
    embedHref: 'https://eservices.uk.gov.in/',
    embedLabel: 'Prodios · Government platform',
  },
  {
    id: 'cbdc',
    year: '2024',
    title: 'CBDC Infrastructure',
    description:
      'Payment APIs and transaction validation for a state CBDC subsidy program handling ₹800Cr+ disbursement flows.',
    tags: ['Fintech', 'Payments', 'NestJS', 'Compliance'],
    links: [{ label: 'e-Services', href: 'https://eservices.uk.gov.in/' }],
  },
  {
    id: 'ai-assistant',
    year: '2024',
    title: 'AI Assistant',
    description:
      'Production RAG assistants with vector search and tool-calling — live on NATA and PGETA, cutting query time 30–40%.',
    tags: ['RAG', 'LLM', 'Vector Search'],
    links: [
      { label: 'NATA', href: 'https://nata.in/' },
      { label: 'PGETA', href: 'https://www.pgeta.in/' },
    ],
    featured: true,
    embedHref: 'https://nata.in/',
    embedLabel: 'Prodios · Applied AI',
  },
  {
    id: 'e-office',
    year: '2023',
    title: 'E-Office Dashboard',
    description:
      'Analytics dashboards and APIs adopted across 4+ government departments — 20–30% reporting efficiency gains.',
    tags: ['React', 'Analytics', 'REST'],
    links: [{ label: 'Dashboard', href: 'https://dashboard.uk.gov.in/' }],
  },
  {
    id: 'nhm',
    year: '2023',
    title: 'NHM Training Management',
    description:
      'Enterprise training platform tracking 50K+ hours with automated validation and secure role-based workflows.',
    tags: ['Enterprise', 'NestJS', 'RBAC'],
    links: [{ label: 'Portal', href: 'https://tms.prodioslabs.com/login' }],
  },
  {
    id: 'stray-reporter',
    year: '2023',
    title: 'Stray Reporter',
    description:
      'Civic complaint platform managing 84K+ complaints — API work cut average response times by 60%.',
    tags: ['Civic Tech', 'MongoDB', 'APIs'],
  },
  {
    id: 'ml-explainer',
    year: '2024',
    title: 'ML Explainer',
    description:
      'Interactive visual guides for machine learning concepts — React, TanStack Router, and Tailwind.',
    tags: ['React', 'ML', 'Education'],
    links: [
      { label: 'Live', href: 'https://ml-explainer-gray.vercel.app/' },
      {
        label: 'GitHub',
        href: 'https://github.com/nameerakhter/ml-explainer',
      },
    ],
    featured: true,
    embedHref: 'https://ml-explainer-gray.vercel.app/',
    embedLabel: 'Personal · Interactive ML',
  },
  {
    id: 'code-editor',
    year: '2024',
    title: 'Code Editor React',
    description:
      'Multi-language editor with PrismJS highlighting, scroll sync, and a transparent textarea overlay.',
    tags: ['React', 'PrismJS'],
    links: [
      { label: 'Live', href: 'https://code-editor-react.nameer.live/' },
      {
        label: 'GitHub',
        href: 'https://github.com/nameerakhter/code-editor-react',
      },
    ],
  },
  {
    id: 'macbook-hero',
    year: '2024',
    title: 'MacBook Pro Hero',
    description:
      '3D MacBook hero with loading sequence, scroll-driven showcase, and Apple-inspired interactions.',
    tags: ['Three.js', 'Product UI'],
    links: [{ label: 'Live', href: 'https://macbook-pro-hero.nameer.live/' }],
    featured: true,
    embedHref: 'https://macbook-pro-hero.nameer.live/',
    embedLabel: 'Personal · Three.js study',
  },
]

export const FEATURED_PROJECTS = SELECTED_PROJECTS.filter(
  (project): project is SelectedProject & { featured: true; embedHref: string } =>
    Boolean(project.featured && project.embedHref),
)
