import { About, Fact, Faq, Hero, Offer, Solution } from "../components/Sections"
import { Reviews } from "../components/Reviews"

export const HomePage = () => (
  <main>
    <Hero />
    <Solution />
    <Offer />
    <Fact />
    <About />
    <Reviews />
    <Faq />
  </main>
)
