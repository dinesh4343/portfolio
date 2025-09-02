import React from "react";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";

import Header from "./Js/Header";
import Hero from "./Js/Hero";
import About from "./Js/About";
import EducationExperience from "./Js/EducationExperience";
import Services from "./Js/Services";
import Skills from "./Js/Skills";
import Certifications from "./Js/Certifications";
import Footer from "./Js/Footer";
import Projects from "./Js/Projects";

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

function HomePage() {
  return (
    <>
      <Hero />
      <About id="about" />
      <EducationExperience id="education" />
      <Services id="services" />
      <Skills id="skills" />
    </>
  );
}

// 👉 Decide router type automatically
const Router =
  window.location.hostname.includes("github.io") ? HashRouter : BrowserRouter;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
