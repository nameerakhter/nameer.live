import { createFileRoute } from '@tanstack/react-router'

import { ElevationProfile } from './-components/elevation-profile'
import { MarginalNotes } from './-components/marginal-notes'
import { ProjectSheet } from './-components/project-sheet'
import { SheetMargin } from './-components/sheet-margin'
import { StationIndex } from './-components/station-index'
import { SurveyProvider } from './-components/survey-context'
import { SurveyHero } from './-components/survey-hero'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Muhammad Nameer Akhter · Software Engineer' },
      {
        name: 'description',
        content:
          'Software engineer in Dehradun building government-scale platforms, CBDC payment infrastructure, and AI-powered workflows. Start a project.',
      },
    ],
  }),
  component: PortfolioPage,
})

function PortfolioPage() {
  return (
    <SurveyProvider>
      <div className="portfolio min-h-screen bg-sheet font-mona text-body/body font-normal tracking-body  text-ink antialiased">
        <SurveyHero />
        <main>
          <StationIndex />
          <MarginalNotes />
          <ElevationProfile />
        </main>
        <SheetMargin />
        <ProjectSheet />
      </div>
    </SurveyProvider>
  )
}
