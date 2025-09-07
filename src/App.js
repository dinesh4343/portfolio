// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import EducationExperience from "./components/EducationExperience";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import RouteLoader from "./components/RouteLoader"; // ✅ import

import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Footer.css";
import "./Styles/Loader.css";
import "./Styles/Header.css";
import "./Styles/Hero.css";
import "./Styles/About.css";
import "./Styles/EducationExperience.css";
import "./Styles/Services.css";
import "./Styles/Certifications.css";
import "./Styles/Skills.css";
import "./Styles/Contact.css";
import "./Styles/Project.css";

function HomePage() {
  return (
    <>
      <Hero />
      <About id="about" />
      <EducationExperience id="education" />
      <Services id="services" />
      <Skills id="skills" />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <RouteLoader>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </RouteLoader>
      <Footer />
    </Router>
  );
}

export default App;
