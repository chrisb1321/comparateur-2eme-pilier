type Review = { quote: string; mark?: string; name: string; place: string; initial: string }

const ROW_ONE: Review[] = [
  { initial: "M", name: "Marina P.", place: "Onex", quote: "Je ne savais même pas que j'avais des avoirs de libre passage en attente. Grâce à leur aide, ", mark: "j'ai pu récupérer 24 058 CHF", },
  { initial: "K", name: "Kevin T.", place: "Payerne", quote: "Je recommande vivement ce service à tous ceux qui cherchent à ", mark: "retrouver de l'argent perdu" },
  { initial: "L", name: "Léa H.", place: "Berne", quote: "J'ai apprécié l'expertise pour l'ouverture de mon compte de libre passage. Ils ont ", mark: "pris le temps de m'expliquer" },
  { initial: "E", name: "Eric K.", place: "Fribourg", quote: "Je n'avais jamais pensé à faire cette recherche. Ils m'ont aussi ", mark: "aidé à regrouper mes avoirs" },
  { initial: "P", name: "Pierre A.", place: "Lausanne", quote: "J'étais persuadé d'avoir tout suivi. Votre site m'a permis de ", mark: "récupérer gratuitement des avoirs oubliés depuis plus de 8 ans" },
]

const ROW_TWO: Review[] = [
  { initial: "C", name: "Caroline Q.", place: "Sion", quote: "Votre service est tip top. J'ai reçu ", mark: "le résultat de ma recherche en seulement quelques jours" },
  { initial: "A", name: "Armand T.", place: "Suisse romande", quote: "J'ai échangé avec M. Bouin pour le regroupement de mes avoirs. Merci pour ", mark: "ses conseils et son professionnalisme" },
  { initial: "L", name: "Lina F.", place: "Morges", quote: "Pour ", mark: "un service gratuit" },
  { initial: "M", name: "Michel", place: "Saint-Oyens", quote: "En plus de la recherche de mes avoirs, ", mark: "j'ai pu comprendre comment sera calculée ma retraite" },
  { initial: "P", name: "Paul I.", place: "Genève", quote: "J'avais fait une demande sur un autre site il y a 3 mois. Ici, ", mark: "en seulement 15 jours" },
]

const endings: Record<string, string> = {
  "Marina P.": " dont j'ignorais l'existence.",
  "Kevin T.": ". Ils ont été très professionnels.",
  "Léa H.": " les différentes possibilités.",
  "Eric K.": " auprès d'une de leurs banques partenaires.",
  "Pierre A.": ".",
  "Caroline Q.": ".",
  "Armand T.": ", il a proposé la solution la mieux adaptée à ma situation.",
  "Lina F.": ", je suis vraiment satisfaite du suivi. Après un bref appel, j'ai compris toutes les démarches, alors que je cherchais depuis 3 heures sur internet.",
  "Michel": ".",
  "Paul I.": " j'ai reçu la recherche et le montant de mes avoirs.",
}

const Card = ({ review }: { review: Review }) => (
  <figure className="cbav-card">
    <span className="cbav-stars" aria-label="5 étoiles sur 5">★★★★★</span>
    <blockquote>
      {review.quote}
      {review.mark ? <mark>{review.mark}</mark> : null}
      {endings[review.name] ?? "."}
    </blockquote>
    <figcaption>
      <span className="cbav-av">{review.initial}</span>
      <span>
        <b>{review.name}</b>
        <small>{review.place}</small>
      </span>
    </figcaption>
  </figure>
)

const Track = ({ reviews }: { reviews: Review[] }) => (
  <div className="cbav-track">
    {[...reviews, ...reviews].map((review, index) => (
      <Card key={`${review.name}-${index}`} review={review} />
    ))}
  </div>
)

export const Reviews = () => (
  <section className="cbav" id="avis" aria-label="Avis clients">
    <div className="cbav-head">
      <div>
        <span className="cbav-kick">Ils l'ont fait avant vous</span>
        <h2>
          Ce que disent <em>nos clients.</em>
        </h2>
      </div>
    </div>
    <div className="cbav-rows">
      <div className="cbav-row">
        <Track reviews={ROW_ONE} />
      </div>
      <div className="cbav-row rev">
        <Track reviews={ROW_TWO} />
      </div>
    </div>
  </section>
)
