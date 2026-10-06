import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CalendarIcon, SwissCross } from "./icons"

const LINKS = [
  { href: "/#comment", label: "Comment ça marche" },
  { href: "/#offre", label: "Votre offre" },
  { href: "/#qui", label: "Qui suis-je" },
  { href: "/#faq", label: "FAQ" },
]

export const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavigate = () => setOpen(false)

  const headerClass = ["cbx-header", open ? "open" : "", scrolled ? "scrolled" : ""].filter(Boolean).join(" ")

  return (
    <header className={headerClass}>
      <div className="cb-info">
        <SwissCross size={14} />
        <span>
          <b>Recherche 100 % gratuite</b>
          <span className="cb-long"> de vos avoirs 2e pilier</span> · <span className="cb-long">Un conseiller diplômé </span>AFA à Genève
        </span>
      </div>
      <nav aria-label="Menu principal">
        <Link to="/" className="cb-logo" onClick={handleNavigate}>
          <SwissCross />
          Comparateur <span>2e pilier</span>
        </Link>
        <div className="cb-menu">
          {LINKS.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="cb-actions">
          <a href="https://cal.com/2eme-pilier/15min" target="_blank" rel="noopener noreferrer" className="cb-ghost">
            <CalendarIcon />
            Réserver un appel
          </a>
          <Link to="/#cb-form" className="cb-main">
            Lancer ma recherche
          </Link>
        </div>
        <button
          type="button"
          className="cb-burger"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="cb-panel"
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </nav>
      <div className="cb-panel" id="cb-panel">
        {LINKS.map((link) => (
          <Link key={link.href} className="cb-link" to={link.href} onClick={handleNavigate}>
            {link.label}
            <span>→</span>
          </Link>
        ))}
        <Link to="/#cb-form" className="cb-main" onClick={handleNavigate}>
          Lancer ma recherche
        </Link>
        <a href="https://cal.com/2eme-pilier/15min" target="_blank" rel="noopener noreferrer" className="cb-ghost" onClick={handleNavigate}>
          Réserver un appel
        </a>
      </div>
    </header>
  )
}
