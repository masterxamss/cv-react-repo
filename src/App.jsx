// COMPONENTS
import NavBar from "./components/NavBar"

// PAGES
import Home from "./pages/Home"
import Services from "./pages/Services"
import Achievements from "./pages/Achievements"
import LegalMentions from "./pages/LegalMentions"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

import { BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="legal-mentions" element={<LegalMentions />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App
