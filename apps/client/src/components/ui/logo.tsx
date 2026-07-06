type LogoProps = Omit<React.ComponentProps<'svg'>, 'viewBox' | 'fill'>

export function Logo(props: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...props}>
      <rect
        x="2.5"
        y="2.5"
        width="43"
        height="43"
        rx="8"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        fill="currentColor"
        d="M8.5 32V17h2.5l2.5 4 2.5-4H18.5v15h-2.5v-10l-2.5 3.8L10.5 22v10H8.5zm11.2 0V17h2.7l5.1 8.2V17h2.8v15h-2.8l-5.2-8.4v8.4h-2.6z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 32h2.5l.6-3.2h4.4l.6 3.2h2.5L37.5 17h-2.5l-5 15zm2.8-5.5h3.4l-1.7-4.8-1.7 4.8z"
      />
    </svg>
  )
}
