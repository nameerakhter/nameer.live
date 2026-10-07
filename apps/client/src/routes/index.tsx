import { createFileRoute } from '@tanstack/react-router'

import PortfolioFooter from './-components/portfolio-footer'
import PortfolioHeader from './-components/portfolio-header'
import {
  AboutSection,
  CaseStudiesSection,
  ContactOpenSection,
  ExperienceSection,
  HeroMuralSlotSection,
  SelectedWorkSection,
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
    <div className="portfolio">
      <PortfolioHeader />
      <main>
        <ContactOpenSection />
        <HeroMuralSlotSection />
        <SelectedWorkSection />
        <AboutSection />
        <ExperienceSection />
        <CaseStudiesSection />
      </main>
      <PortfolioFooter />
    </div>
  )
}
