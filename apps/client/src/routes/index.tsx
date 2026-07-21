import { createFileRoute } from '@tanstack/react-router'

import HeroShell from './-components/hero-shell'
import PortfolioFooter from './-components/portfolio-footer'
import {
  CompanyWorkSection,
  CtaSection,
  HeroSection,
  PersonalProjectsSection,
  PhilosophySection,
  ProcessSection,
  StatsSection,
  TechSection,
  ResearchSection,
} from './-components/portfolio-sections'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Muhammad Nameer Akhter · Software Engineer' },
      {
        name: 'description',
        content:
          'Software engineer at Prodios Labs building government-scale platforms, CBDC payment infrastructure, and AI-powered workflows.',
      },
    ],
  }),
  component: PortfolioPage,
})

function PortfolioPage() {
  return (
    <div className="portfolio min-h-screen bg-(--pf-bg) text-(--pf-fg) antialiased">
      <div className="pf-lines">
        <HeroShell>
          <HeroSection />
          <StatsSection />
        </HeroShell>
        <main>
          <ResearchSection />
          <CompanyWorkSection />
          <PersonalProjectsSection />
          <PhilosophySection />
          <TechSection />
          <ProcessSection />
          <CtaSection />
        </main>
        <PortfolioFooter />
      </div>
    </div>
  )
}
