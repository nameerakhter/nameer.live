import type React from 'react'

import { GridBackground, Spotlight } from '@/components/ui/spotlight'

import PortfolioHeader from './portfolio-header'

type HeroShellProps = React.PropsWithChildren

export default function HeroShell({ children }: HeroShellProps) {
  return (
    <header className="hero" id="top">
      <div className="hero-backdrop" aria-hidden>
        <GridBackground />
        <div className="hero-mesh" />
        <div className="hero-vignette" />
        <div className="hero-grain" />
      </div>

      <Spotlight className="hero-spotlight-wrap">
        <PortfolioHeader />
        {children}
      </Spotlight>
    </header>
  )
}
