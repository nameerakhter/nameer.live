import { useResolvedTheme } from '@/hooks/use-resolved-theme'
import { useTheme } from '@/hooks/use-theme'
import { cn, type WithBasicProps } from '@/lib/utils'

type ThemeToggleProps = WithBasicProps

function ThemeSunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <line
        x1="12"
        y1="2"
        x2="12"
        y2="5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="19"
        x2="12"
        y2="22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="12"
        x2="5"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="19"
        y1="12"
        x2="22"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="4.5"
        y1="4.5"
        x2="6.5"
        y2="6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="17.5"
        y1="17.5"
        x2="19.5"
        y2="19.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="4.5"
        y1="19.5"
        x2="6.5"
        y2="17.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="17.5"
        y1="6.5"
        x2="19.5"
        y2="4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ThemeMoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ThemeToggle({ className, style }: ThemeToggleProps) {
  const { setTheme } = useTheme()
  const resolvedTheme = useResolvedTheme()

  return (
    <button
      type="button"
      aria-label="Toggle light/dark theme"
      className={cn('theme-toggle', className)}
      style={style}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? <ThemeSunIcon /> : <ThemeMoonIcon />}
    </button>
  )
}
