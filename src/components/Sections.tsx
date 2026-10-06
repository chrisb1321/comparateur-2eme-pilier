import { Link } from "react-router-dom"
import { Arrow } from "./icons"
import { SearchForm } from "./SearchForm"

export const Hero = () => (
  <section className="cb-hero">
    <svg className="cb-shapes" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
      <polygon points="980,0 1440,0 1440,420" fill="#fff" fillOpacity=".04" />
      <polygon points="1160,0 1440,0 1440,230" fill="#fff" fillOpacity=".04" />
      <polygon points="0,900 0,560 520,900" fill="#fff" fillOpacity=".03" />
      <polygon points="760,900 1440,560 1440,900" fill="#fff" fillOpacity=".035" />
      <line x1="620" y1="900" x2="1440" y2="470" stroke="#fff" strokeOpacity=".07" />
    </svg>
    <div className="cb-wrap">
      <div className="cb-grid">
        <div className="cb-left">
          <p className="cb-sub">Vous avez changé d'emploi ou quitté la Suisse ?</p>
          <h1>
            Retrouvez l'argent
            <br />
            de votre <em>2e pilier.</em>
          </h1>
          <p className="cb-txt">On cherche vos avoirs dans toutes les caisses de pension suisses. Gratuitement, sans engagement.</p>
          <div className="cb-ctas">
            <a href="#cb-form" className="cb-btn cb-btn-main">
              Lancer ma recherche <Arrow />
            </a>
            <a href="#comment" className="cb-btn cb-btn-ghost">
              Comment ça marche <Arrow color="#fff" />
            </a>
          </div>
          <div className="cb-stats">
            <div className="cb-stat">
              <b>10 ans</b>
              <span>de conseil en Suisse romande</span>
            </div>
            <div className="cb-stat">
              <b>1 600</b>
              <span>caisses de pension interrogées</span>
            </div>
            <div className="cb-stat">
              <b>AFA</b>
              <span>conseiller diplômé, enregistré FINMA</span>
            </div>
          </div>
        </div>
        <SearchForm />
      </div>
    </div>
  </section>
)

export const Solution = () => (
  <section className="cb-sol" id="comment">
    <div className="cb-in">
      <div className="cb-sol-head">
        <div>
          <span className="cb-kick">Comment ça marche</span>
          <h2>
            Simple comme <em>1, 2, 3.</em>
          </h2>
        </div>
        <p className="cb-intro">Vous n'avez rien à chercher vous-même. On s'occupe de la recherche, et du transfert si vous le souhaitez.</p>
      </div>
      <div className="cb-cards">
        <article className="cb-card">
          <div className="cb-card-top">
            <span className="cb-num">01</span>
            <div className="cb-ico" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#23597C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="4" width="14" height="17" rx="2" />
                <path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3" />
              </svg>
            </div>
          </div>
          <span className="cb-tag">En 1 minute</span>
          <h3>Vous demandez</h3>
          <p>Répondez à 4 questions simples. Aucun papier à chercher.</p>
        </article>
        <svg className="cb-arrow" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9FB4C3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
        <article className="cb-card">
          <div className="cb-card-top">
            <span className="cb-num">02</span>
            <div className="cb-ico" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#23597C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="6.5" />
                <path d="M20 20l-4.3-4.3" />
              </svg>
            </div>
          </div>
          <span className="cb-tag">En quelques semaines</span>
          <h3>On cherche</h3>
          <p>Avec votre numéro AVS, on interroge toutes les caisses de pension suisses. Vous recevez la liste des caisses où se trouvent vos avoirs.</p>
        </article>
        <svg className="cb-arrow" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9FB4C3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
        <article className="cb-card dark">
          <div className="cb-card-top">
            <span className="cb-num">03</span>
            <div className="cb-ico" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#BFF3EA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
                <path d="M4 8l2-4h12l2 4" />
                <path d="M12 11v6M9.5 14.5L12 17l2.5-2.5" />
              </svg>
            </div>
          </div>
          <span className="cb-tag">En option</span>
          <h3>Vous regroupez</h3>
          <p>On ouvre votre compte et on s'occupe des virements. Vous suivez tout avec vos propres accès.</p>
        </article>
      </div>
      <a href="#cb-form" className="cb-cta">
        Lancer ma recherche <Arrow />
      </a>
    </div>
  </section>
)

export const Offer = () => (
  <section className="cb-off" id="offre">
    <svg className="cb-shapes" viewBox="0 0 1440 880" preserveAspectRatio="none" aria-hidden="true">
      <polygon points="0,0 460,0 0,320" fill="#fff" fillOpacity=".035" />
      <polygon points="1440,880 1440,480 900,880" fill="#fff" fillOpacity=".035" />
      <line x1="0" y1="420" x2="640" y2="0" stroke="#fff" strokeOpacity=".06" />
    </svg>
    <div className="cb-in">
      <div className="cb-left">
        <span className="cb-kick">Votre offre</span>
        <h2>
          Ce que vous <em>recevez.</em>
        </h2>
        <div className="cb-plans">
          <div className="cb-plan">
            <div className="cb-plan-top">
              <span className="cb-plan-name">La recherche</span>
            </div>
            <div className="cb-price">
              Gratuit<small>Sans engagement</small>
            </div>
            <ul>
              <li>
                <CheckTeal />
                La liste des caisses où se trouvent vos avoirs de libre passage
              </li>
            </ul>
          </div>
          <div className="cb-plan hl">
            <div className="cb-plan-top">
              <span className="cb-plan-name">L'option regroupement</span>
            </div>
            <div className="cb-price">
              2 %<small>de frais d'entrée sur les avoirs transférés</small>
            </div>
            <ul>
              <li>
                <CheckGreen />
                On ouvre votre compte
              </li>
              <li>
                <CheckGreen />
                On se charge des virements vers ce compte
              </li>
              <li>
                <CheckGreen />
                Vous suivez tout avec vos accès à votre compte
              </li>
            </ul>
          </div>
        </div>
        <div className="cb-note">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#BFF3EA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <span>
            <strong>Aucune facture à régler.</strong> Les 2 % sont prélevés directement sur le montant transféré.
          </span>
        </div>
        <a href="#cb-form" className="cb-cta">
          Lancer ma recherche <Arrow />
        </a>
      </div>
    </div>
  </section>
)

const CheckTeal = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5FE0CC" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

const CheckGreen = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F7F72" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export const Fact = () => (
  <section className="cb-info" id="saviez-vous">
    <div className="cb-in">
      <div className="cb-left">
        <span className="cb-kick">Le saviez-vous ?</span>
        <span className="cb-big">6,75</span>
        <span className="cb-unit">milliards de francs</span>
        <p className="cb-lead">dorment dans des comptes de libre passage oubliés en Suisse.</p>
        <div className="cb-mini">
          <b>960 000</b>
          <span>comptes dont le propriétaire n'a plus donné de nouvelles</span>
        </div>
        <span className="cb-src">Source : Fondation institution supplétive LPP, chiffres au 31.12.2025</span>
        <a href="#cb-form" className="cb-cta">
          Vérifier si j'en fais partie <Arrow />
        </a>
      </div>
      <div className="cb-qs">
        <article className="cb-q">
          <div className="cb-n">1</div>
          <div>
            <h3>Pourquoi ai-je peut-être des avoirs oubliés ?</h3>
            <p>À chaque changement d'emploi, votre 2e pilier doit suivre. Si personne ne s'en occupe, il part après 6 mois à 2 ans dans une caisse de réserve.</p>
          </div>
        </article>
        <article className="cb-q">
          <div className="cb-n">2</div>
          <div>
            <h3>Est-ce grave pour ma retraite ?</h3>
            <p>Un avoir oublié rapporte très peu. Sur 10 ou 20 ans, c'est autant d'argent en moins le jour de votre retraite.</p>
          </div>
        </article>
        <article className="cb-q dark">
          <div className="cb-n">3</div>
          <div>
            <h3>Quelle est la solution ?</h3>
            <p>Une demande de 1 minute. On cherche dans toutes les caisses, puis on vous aide à tout regrouper si vous le souhaitez. Votre caisse de pension actuelle n'est jamais touchée.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
)

export const About = () => (
  <section className="cb-leg" id="qui">
    <div className="cb-in">
      <div className="cb-top">
        <div className="cb-photo">
          <img src="/images/christophe.png" alt="Christophe Bouin, conseiller en prévoyance" width="540" height="600" />
          <div className="cb-place">
            <svg width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" rx="6" fill="#DA291C" />
              <rect x="13" y="6" width="6" height="20" fill="#fff" />
              <rect x="6" y="13" width="20" height="6" fill="#fff" />
            </svg>
            Carouge, Genève
          </div>
          <div className="cb-promise">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BFF3EA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
            <div>
              <b>Mon engagement</b>
              <span>Un seul interlocuteur, du premier appel au transfert de vos avoirs.</span>
            </div>
          </div>
        </div>
        <div className="cb-text">
          <span className="cb-kick">Qui va vous accompagner</span>
          <h2>
            Un vrai conseiller.
            <br />
            <em>Une vraie expertise.</em>
          </h2>
          <p className="cb-p1">Je suis Christophe Bouin, conseiller en prévoyance diplômé AFA. Depuis 10 ans, j'aide les Romands à y voir clair dans leur 2e pilier.</p>
          <p className="cb-p2">Aujourd'hui, tout passe par des robots et des plateformes sans visage. Chez moi, c'est l'inverse : vous avez mon nom, un rendez-vous direct avec moi, et c'est moi qui suis votre dossier jusqu'au bout.</p>
          <div className="cb-sign">
            <strong>Christophe Bouin</strong>
            <small>Fondateur, Swiss Financial Advice</small>
          </div>
          <div className="cb-badges">
            <span className="cb-badge">Diplômé AFA</span>
            <span className="cb-badge">Enregistré FINMA</span>
            <span className="cb-badge">10 ans d'expérience</span>
          </div>
        </div>
      </div>
      <div className="cb-values">
        <div className="cb-val">
          <div>
            <b>Humain</b>
            <span>Une vraie personne, jamais un robot.</span>
          </div>
        </div>
        <div className="cb-val">
          <div>
            <b>Indépendant</b>
            <span>Je compare les solutions pour vous.</span>
          </div>
        </div>
        <div className="cb-val">
          <div>
            <b>Transparent</b>
            <span>Recherche gratuite, frais annoncés dès le départ.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export const Faq = () => {
  const items = [
    {
      q: "Combien ça coûte ?",
      a: "La recherche est gratuite. Si vous choisissez l'option regroupement, 2 % de frais d'entrée sont prélevés sur les avoirs transférés. Aucune facture à régler.",
      proofs: ["Recherche gratuite", "2 % sur le montant transféré"],
    },
    {
      q: "Comment être sûr de tout retrouver ?",
      a: "Grâce à votre numéro AVS, la recherche passe par la Centrale du 2e pilier, qui couvre toutes les caisses de pension suisses.",
      proofs: ["Toutes les caisses", "Via votre numéro AVS"],
    },
    {
      q: "Combien de temps ça prend ?",
      a: "En général quelques semaines. Christophe vous tient informé à chaque étape.",
      proofs: ["Résultat en quelques semaines"],
    },
    {
      q: "Ma caisse de pension actuelle est-elle touchée ?",
      a: "Non, jamais. On s'occupe uniquement de vos avoirs de libre passage, pas de la caisse de votre employeur actuel.",
      proofs: ["Caisse actuelle intacte"],
    },
    {
      q: "Quand puis-je retirer mes avoirs ?",
      a: "Dans certains cas prévus par la loi. Christophe vérifie avec vous si votre situation le permet.",
      proofs: ["Départ de Suisse (hors UE)", "Achat de votre logement", "Retraite ou préretraite", "Activité indépendante"],
    },
    {
      q: "Mes avoirs sont déjà sur un compte. Puis-je changer ?",
      a: "Oui. Avec l'option regroupement, on ouvre votre nouveau compte et on s'occupe des virements.",
      proofs: ["Option regroupement"],
    },
    {
      q: "Comment joindre Christophe ?",
      a: "En réservant un appel ou en remplissant le formulaire. Vous parlez toujours à la même personne.",
      proofs: ["Réserver un appel", "Formulaire"],
    },
  ]

  return (
    <section className="cb-faq" id="faq">
      <div className="cb-in">
        <div className="cb-left">
          <span className="cb-kick">Questions fréquentes</span>
          <h2>
            Vos questions,
            <br />
            <em>nos réponses.</em>
          </h2>
          <p className="cb-intro">Tout ce qu'on nous demande avant de lancer une recherche.</p>
          <div className="cb-help">
            <div className="cb-who">
              <img src="/images/christophe.jpg" alt="Christophe Bouin" width="64" height="64" />
              <div>
                <b>Une autre question ?</b>
                <span>Christophe vous répond directement.</span>
              </div>
            </div>
            <a href="https://cal.com/2eme-pilier/15min" target="_blank" rel="noopener noreferrer" className="cb-btn">
              Réserver un appel
            </a>
          </div>
        </div>
        <div className="cb-list">
          {items.map((item, index) => (
            <details
              key={item.q}
              name="faq"
              ref={
                index === 0
                  ? (node) => {
                      if (node) node.open = true
                    }
                  : undefined
              }
            >
              <summary>{item.q}</summary>
              <div className="cb-ans">
                <p>{item.a}</p>
                <div className="cb-proofs">
                  {item.proofs.map((proof) => (
                    <span key={proof}>{proof}</span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Footer = () => (
  <footer className="cbx-footer">
    <svg className="cb-shapes" viewBox="0 0 1440 1180" preserveAspectRatio="none" aria-hidden="true">
      <polygon points="1000,0 1440,0 1440,380" fill="#fff" fillOpacity=".04" />
      <polygon points="0,560 0,260 380,560" fill="#fff" fillOpacity=".03" />
    </svg>
    <div className="cb-in">
      <div className="cb-cols">
        <div className="cb-brand">
          <Link to="/" className="cb-logo">
            <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" rx="6" fill="#DA291C" />
              <rect x="13" y="6" width="6" height="20" fill="#fff" />
              <rect x="6" y="13" width="20" height="6" fill="#fff" />
            </svg>
            Comparateur <span>2e pilier</span>
          </Link>
          <p>Un service de Swiss Financial Advice, cabinet de conseil en prévoyance à Carouge, Genève.</p>
          <span className="cb-badge">Diplômé AFA · Enregistré FINMA</span>
        </div>
        <div className="cb-links">
          <div className="cb-col">
            <strong>Le service</strong>
            <Link to="/#comment">Comment ça marche</Link>
            <Link to="/#offre">Ce que vous recevez</Link>
            <Link to="/#faq">Questions fréquentes</Link>
            <Link to="/#cb-form">Lancer ma recherche</Link>
          </div>
          <div className="cb-col">
            <strong>Contact</strong>
            <span>Carouge, Genève</span>
            <a href="https://cal.com/2eme-pilier/15min" target="_blank" rel="noopener noreferrer">
              Prendre un rendez-vous
            </a>
          </div>
          <div className="cb-col">
            <strong>Légal</strong>
            <Link to="/politique-de-confidentialite#mentions">Mentions légales</Link>
            <Link to="/politique-de-confidentialite#conditions">Conditions générales</Link>
            <Link to="/politique-de-confidentialite#confidentialite">Confidentialité</Link>
            <Link to="/politique-de-confidentialite#cookies">Cookies</Link>
          </div>
        </div>
      </div>
      <span className="cb-big" aria-hidden="true">
        Comparateur <em>2e pilier</em>
      </span>
      <div className="cb-bottom">
        <span>© 2026 Comparateur 2e pilier. Tous droits réservés.</span>
        <span>Swiss Financial Advice, C. Bouin</span>
      </div>
    </div>
  </footer>
)
