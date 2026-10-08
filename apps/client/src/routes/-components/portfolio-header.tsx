import { motion, useReducedMotion } from 'motion/react'

import { useLocalClock } from '@/hooks/use-local-clock'
import { introChromeTransition } from '@/lib/portfolio-motion'

import { CONTACT } from './portfolio-data'

export default function PortfolioHeader() {
  const clock = useLocalClock()
  const reduce = useReducedMotion()

  return (
    <header className="relative shrink-0">
      <motion.nav
        aria-label="Site"
        className="box-border grid h-[60px] grid-cols-4 items-center gap-x-1 px-6 pr-[calc(1.5rem+140px)] max-[700px]:h-auto max-[700px]:min-h-12 max-[700px]:grid-cols-2 max-[700px]:gap-y-1.5 max-[700px]:py-3 max-[700px]:pr-[calc(1.5rem+120px)] max-[700px]:[&>:nth-child(3)]:hidden max-[700px]:[&>:nth-child(4)]:hidden"
        initial={reduce ? false : { opacity: 0, filter: 'blur(4px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={introChromeTransition}
      >
        <a
          href="/"
          className="truncate font-replica-regular text-body font-medium tracking-body text-bone-white/88 no-underline max-[700px]:text-caption"
        >
          Muhammad Nameer Akhter
        </a>
        <p className="m-0 truncate font-replica-regular text-body font-medium tracking-body text-bone-white/88 max-[700px]:text-caption">
          Software engineer
        </p>
        <p className="m-0 truncate font-replica-regular text-body font-medium tracking-body text-bone-white/88">
          “Portfolio”
        </p>
        <p
          aria-label="Local time"
          className="m-0 truncate font-replica-regular text-body font-medium tracking-body text-bone-white/88"
        >
          {clock} Dehradun
        </p>
      </motion.nav>

      <motion.a
        href={`mailto:${CONTACT.email}`}
        className="absolute top-2.5 right-2.5 z-20 inline-flex h-10 origin-top-right items-center justify-center gap-2 rounded-2xl border-0 bg-bone-white/12 pr-3 pl-4 font-replica-regular text-body font-medium leading-none tracking-body text-bone-white no-underline backdrop-blur-[12px] backdrop-saturate-[1.15] transition-colors duration-[160ms] hover:bg-bone-white/16 hover:text-gallery-accent"
        initial={reduce ? false : { opacity: 0, filter: 'blur(4px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={introChromeTransition}
      >
        Contact
        <svg
          viewBox="0 0 20 20"
          className="size-5 shrink-0 fill-current"
          aria-hidden
        >
          <path d="M10 3.5a1 1 0 0 1 1 1V9h5.5a1 1 0 1 1 0 2H11v5.5a1 1 0 1 1-2 0V11H3.5a1 1 0 1 1 0-2H9V4.5a1 1 0 0 1 1-1z" />
        </svg>
      </motion.a>
    </header>
  )
}
