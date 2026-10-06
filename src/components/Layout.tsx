import { useEffect, type ReactNode } from "react"
import { useLocation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Sections"
import { CookieBanner } from "./CookieBanner"

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const target = document.getElementById(hash.slice(1))
    if (!target) return
    const header = document.querySelector(".cbx-header")
    const offset = (header?.getBoundingClientRect().height ?? 120) + 16
    const top = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: "smooth" })
  }, [pathname, hash])

  return (
    <>
      <Header />
      {children}
      <Footer />
      <CookieBanner />
    </>
  )
}
