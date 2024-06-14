import Header from "./components/Header"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Achievements from "./pages/Achievements"
import LegalMentions from "./pages/LegalMentions"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="legal-mentions" element={<LegalMentions />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
