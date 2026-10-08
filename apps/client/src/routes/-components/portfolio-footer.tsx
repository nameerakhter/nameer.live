import { CONTACT } from './portfolio-data'

export default function PortfolioFooter() {
  return (
    <footer className="border-t border-surface-hairline px-0 pt-6 pb-[90px]">
      <div className="box-border flex w-full flex-wrap items-center justify-between gap-3 px-6">
        <p className="m-0 text-caption text-ash">
          © {new Date().getFullYear()} Muhammad Nameer Akhter
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-caption tracking-caption text-fog no-underline hover:text-bone-white"
        >
          {CONTACT.email}
        </a>
      </div>
    </footer>
  )
}
