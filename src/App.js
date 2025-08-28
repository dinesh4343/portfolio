import React from 'react';
import './App.css';

import Navbar from './Js/Header';
import Hero from './Js/Hero';
import About from './Js/About';
import EducationExperience from './Js/EducationExperience';
import Services from './Js/Services';
import Skills from './Js/Skills.jsx';
import Footer from './Js/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Footer.css';
import './Css/ParticleNetwork.css';
import './Css/Header.css';
import './Css/Hero.css';
import './Css/About.css';
import './Css/Timeline.css';
import './Css/Services.css';
import './Css/Skills.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <EducationExperience />
      <Services />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
