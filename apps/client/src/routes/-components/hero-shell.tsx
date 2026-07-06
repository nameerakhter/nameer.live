import type React from 'react'

import PortfolioHeader from './portfolio-header'

type HeroShellProps = React.PropsWithChildren

export default function HeroShell({ children }: HeroShellProps) {
  return (
    <header className="hero" id="top">
      <div className="hero-grid" aria-hidden />
      <div className="hero-glow" aria-hidden />
      <PortfolioHeader />
      {children}
    </header>
  )
}
