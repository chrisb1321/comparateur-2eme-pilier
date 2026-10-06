import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const STORAGE_KEY = "c2p_cookie_choice"

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  const choose = (value: "accepted" | "refused") => {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cb-cookie" role="dialog" aria-label="Cookies">
      <p>
        Nous utilisons des cookies pour mesurer l'audience et améliorer le site. Vous pouvez accepter ou refuser les cookies non essentiels.{" "}
        <Link to="/politique-de-confidentialite#cookies">Politique de cookies</Link>
      </p>
      <div className="cb-cookie-actions">
        <button type="button" className="cb-accept" onClick={() => choose("accepted")}>
          Accepter
        </button>
        <button type="button" className="cb-refuse" onClick={() => choose("refused")}>
          Refuser
        </button>
      </div>
    </div>
  )
}
