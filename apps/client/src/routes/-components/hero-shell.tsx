import type React from 'react'

import PortfolioHeader from './portfolio-header'

type HeroShellProps = React.PropsWithChildren

export default function HeroShell({ children }: HeroShellProps) {
  return (
    <header className="hero" id="top">
      <PortfolioHeader />
      {children}
    </header>
  )
}
