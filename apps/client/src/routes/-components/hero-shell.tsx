import type React from 'react'

import HeroWatercolor from './hero-watercolor'
import PortfolioHeader from './portfolio-header'

import { useResolvedTheme } from '@/hooks/use-resolved-theme'

type HeroShellProps = React.PropsWithChildren

export default function HeroShell({ children }: HeroShellProps) {
  const theme = useResolvedTheme()

  return (
    <header className="hero" id="top">
      <HeroWatercolor key={theme} />
      <PortfolioHeader />
      {children}
    </header>
  )
}
