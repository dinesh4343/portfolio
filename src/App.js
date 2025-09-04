import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Js/Header";
import Hero from "./Js/Hero";
import About from "./Js/About";
import EducationExperience from "./Js/EducationExperience";
import Services from "./Js/Services";
import Skills from "./Js/Skills";
import Certifications from "./Js/Certifications";
import Footer from "./Js/Footer";
import Projects from "./Js/Projects";
import Contact from "./Js/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/Footer.css";
import "./Css/ParticleNetwork.css";
import "./Css/Header.css";
import "./Css/Hero.css";
import "./Css/About.css";
import "./Css/EducationExperience.css";
import "./Css/Services.css";
import "./Css/Certifications.css";
import "./Css/Skills.css";
import "./Css/Contact.css";


function HomePage() {
  return (
    <>
      <Hero />
      <About id="about" />
      <EducationExperience id="education" />
      <Services id="services" />
      <Skills id="skills" />
      <Contact/>
    
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page (with scroll sections) */}
        <Route path="/" element={<HomePage />} />

        {/* Projects Page */}
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/certifications" element={<Certifications />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
