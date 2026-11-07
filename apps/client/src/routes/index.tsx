import { createFileRoute } from '@tanstack/react-router'

import { CareerStints } from './-components/career-stints'
import { DriverProfile } from './-components/driver-profile'
import { GarageHero } from './-components/garage-hero'
import { PitWallFooter } from './-components/pit-wall-footer'
import { ProjectSheet } from './-components/project-sheet'
import { RaceProvider } from './-components/race-context'

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
    <RaceProvider>
      <div className="portfolio min-h-screen bg-carbon font-display text-body tracking-body text-chalk antialiased">
        <GarageHero />
        <main>
          <DriverProfile />
          <CareerStints />
        </main>
        <PitWallFooter />
        <ProjectSheet />
      </div>
    </RaceProvider>
  )
}
