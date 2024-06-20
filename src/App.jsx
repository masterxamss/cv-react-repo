// COMPONENTS
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Infos from "./components/Infos"

// PAGES
import Home from "./pages/Home"
import Services from "./pages/Services"
import Achievements from "./pages/Achievements"
import LegalMentions from "./pages/LegalMentions"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

import { BrowserRouter, Route, Routes} from "react-router-dom"
import React, { useEffect, useState } from "react";


function App() {

  const [user, setUser] = useState([]);

  const getUser = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUser(json);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <BrowserRouter> 
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="Achievements" element={<Achievements />} />
          <Route path="LegalMentions" element={<LegalMentions />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/components/Infos" element={<Infos user={user}/>} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App
