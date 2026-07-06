type ProjectLink = {
  label: string
  href: string
}

type ProjectLinksProps = {
  links: readonly ProjectLink[]
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <div className="pf-project-links mt-5 flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="pf-link-arrow inline-flex items-center gap-1.5"
        >
          {link.label}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  )
}
