import { createFileRoute } from '@tanstack/react-router'

import HeroShell from './-components/hero-shell'
import PortfolioFooter from './-components/portfolio-footer'
import {
  CtaSection,
  HeroSection,
  PhilosophySection,
  ProcessSection,
  ServicesSection,
  StatsSection,
  TechSection,
  WorkSection,
} from './-components/portfolio-sections'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Nameer · Full-Stack Engineer' },
      {
        name: 'description',
        content:
          'Full-stack engineer building production systems — platforms, APIs, and intelligent workflows that scale.',
      },
    ],
  }),
  component: PortfolioPage,
})

function PortfolioPage() {
  return (
    <div className="portfolio min-h-screen bg-[#0E0D13] text-white antialiased">
      <HeroShell>
        <HeroSection />
        <StatsSection />
      </HeroShell>
      <main>
        <ServicesSection />
        <WorkSection />
        <PhilosophySection />
        <TechSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <PortfolioFooter />
    </div>
  )
}
