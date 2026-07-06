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
