import { FormEvent, useState } from "react"

const SITUATIONS = [
  "Changement d'employeur",
  "Pause dans la carrière",
  "Départ de Suisse",
  "Chômage ou recherche d'emploi",
  "Formation ou congé maternité",
  "Autre situation",
]

const BESOINS = [
  "Retrouver mes avoirs",
  "Regrouper mes avoirs sur un seul compte",
  "Retirer mes avoirs",
]

const MONTANTS = [
  "Je ne sais pas",
  "Moins de CHF 100 000",
  "Entre CHF 100 000 et 300 000",
  "Plus de CHF 300 000",
]

type Lead = {
  situation: string
  besoin: string
  montant: string
  prenom: string
  nom: string
  email: string
  telephone: string
  rendezVous: string
}

const emptyLead: Lead = {
  situation: "",
  besoin: "",
  montant: "",
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  rendezVous: "",
}

export const SearchForm = () => {
  const [step, setStep] = useState(1)
  const [lead, setLead] = useState<Lead>(emptyLead)
  const [error, setError] = useState(false)

  const choose = (key: "situation" | "besoin" | "montant", value: string) => {
    setLead((current) => ({ ...current, [key]: value }))
    setStep((current) => current + 1)
  }

  const handleContinue = (event: FormEvent) => {
    event.preventDefault()
    const valid = lead.prenom.trim() && lead.nom.trim() && lead.email.includes("@") && lead.telephone.trim().length >= 8
    setError(!valid)
    if (valid) setStep(5)
  }

  const finish = (rendezVous: string) => {
    const payload = { ...lead, rendezVous }
    setLead(payload)
    const webhook = import.meta.env.VITE_LEAD_WEBHOOK
    if (webhook) {
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => undefined)
    }
    setStep(6)
  }

  return (
    <form className="cb-form" id="cb-form" noValidate onSubmit={handleContinue}>
      <div className="cb-top">
        <span className="cb-kicker">Recherche gratuite</span>
        <span className="cb-count">{step <= 5 ? `Étape ${step} sur 5` : "Demande envoyée"}</span>
      </div>
      <div className="cb-bar" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((index) => (
          <i key={index} className={index <= Math.min(step, 5) ? "on" : ""} />
        ))}
      </div>

      {step === 1 && (
        <div className="cb-step active">
          <h2>Quelle est votre situation ?</h2>
          <p className="cb-hint">Un clic suffit, on passe à la suite.</p>
          <div className="cb-opts">
            {SITUATIONS.map((option) => (
              <button key={option} type="button" className={lead.situation === option ? "cb-opt sel" : "cb-opt"} onClick={() => choose("situation", option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="cb-step active">
          <h2>De quoi avez-vous besoin ?</h2>
          <p className="cb-hint">Vous pourrez changer d'avis pendant l'appel.</p>
          <div className="cb-opts">
            {BESOINS.map((option) => (
              <button key={option} type="button" className={lead.besoin === option ? "cb-opt sel" : "cb-opt"} onClick={() => choose("besoin", option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="cb-step active">
          <h2>Combien pensez-vous avoir ?</h2>
          <p className="cb-hint">Une estimation suffit. Pas d'idée ? Aucun souci.</p>
          <div className="cb-opts">
            {MONTANTS.map((option) => (
              <button key={option} type="button" className={lead.montant === option ? "cb-opt sel" : "cb-opt"} onClick={() => choose("montant", option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="cb-step active">
          <h2>Où vous envoyer le résultat ?</h2>
          <p className="cb-hint">Christophe vous contacte personnellement.</p>
          <div className="cb-row">
            <label>
              Prénom
              <input value={lead.prenom} autoComplete="given-name" placeholder="Marie" onChange={(event) => setLead({ ...lead, prenom: event.target.value })} required />
            </label>
            <label>
              Nom
              <input value={lead.nom} autoComplete="family-name" placeholder="Dupont" onChange={(event) => setLead({ ...lead, nom: event.target.value })} required />
            </label>
          </div>
          <label>
            Email
            <input type="email" value={lead.email} autoComplete="email" placeholder="marie@exemple.ch" onChange={(event) => setLead({ ...lead, email: event.target.value })} required />
          </label>
          <label>
            Téléphone (WhatsApp)
            <input type="tel" value={lead.telephone} autoComplete="tel" placeholder="+41 79 000 00 00" onChange={(event) => setLead({ ...lead, telephone: event.target.value })} required />
          </label>
          <p className="cb-err" style={{ display: error ? "block" : "none" }}>
            Merci de remplir tous les champs.
          </p>
          <button type="submit" className="cb-go">
            Continuer
          </button>
          <p className="cb-legal">En continuant, vous acceptez notre déclaration de confidentialité.</p>
        </div>
      )}

      {step === 5 && (
        <div className="cb-step active">
          <h2>Choisissez votre appel avec Christophe</h2>
          <div className="cb-cal" style={{ padding: 0, display: "block" }}>
            <iframe
              src="https://cal.com/2eme-pilier/15min?embed=true"
              title="Réserver un appel avec Christophe"
              style={{ width: "100%", height: "100%", minHeight: 420, border: 0, borderRadius: 14 }}
              loading="lazy"
            />
          </div>
          <button type="button" className="cb-go" onClick={() => finish("rendez-vous choisi")}>
            Envoyer ma demande
          </button>
          <button type="button" className="cb-link" onClick={() => finish("rappel demandé")}>
            Je préfère être rappelé
          </button>
        </div>
      )}

      {step === 6 && (
        <div className="cb-step cb-done active">
          <div className="cb-check">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1A8C7B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </div>
          <h2>{lead.prenom ? `Merci ${lead.prenom} !` : "Merci !"}</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, maxWidth: 340 }}>
            Christophe vous recontacte très vite pour lancer la recherche.
          </p>
        </div>
      )}

      {step > 1 && step < 6 && (
        <div className="cb-formfoot">
          <button type="button" className="cb-back" style={{ visibility: "visible" }} onClick={() => setStep((current) => current - 1)}>
            ← Retour
          </button>
        </div>
      )}
    </form>
  )
}
