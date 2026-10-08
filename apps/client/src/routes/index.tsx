import { createFileRoute } from '@tanstack/react-router'

import PortfolioFooter from './-components/portfolio-footer'
import PortfolioHeader from './-components/portfolio-header'
import { HeroMuralSection } from './-components/hero-mural'
import {
  AboutSection,
  ExperienceSection,
} from './-components/portfolio-sections'
import { WorkGallery } from './-components/work-gallery'

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
    <div className="portfolio min-h-screen bg-slate-dark font-replica-regular text-body font-normal tracking-body leading-body text-bone-white antialiased">
      <div className="pf-viewport flex max-h-dvh min-h-[620px] h-dvh flex-col overflow-clip box-border">
        <PortfolioHeader />
        <HeroMuralSection />
        <WorkGallery />
      </div>
      <main>
        <AboutSection />
        <ExperienceSection />
      </main>
      <PortfolioFooter />
    </div>
  )
}
