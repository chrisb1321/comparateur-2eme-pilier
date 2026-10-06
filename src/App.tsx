import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { HomePage } from "./pages/HomePage"
import { LegalPage } from "./pages/LegalPage"

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/politique-de-confidentialite" element={<LegalPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </Layout>
)

export default App
