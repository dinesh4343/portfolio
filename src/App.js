
import './App.css';


import Navbar from './Js/Header';
import Hero from './Js/Hero';
import About from './Js/About';
import EducationExperience from './Js/EducationExperience';
import Footer from './Js/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Footer.css';
import './Css/ParticleNetwork.css';
import './Css/Header.css';
import './Css/Hero.css';
import './Css/About.css';
import './Css/Timeline.css';


function App() {
  return (



    <div className="App">

      <div className='Navbar'>
        <Navbar />
      </div>
      
      

      <div className='Hero'>
      
       
      

        <Hero />
         
      </div>

      <div className='About'>
   
        <About />
      
      </div>


      <div className='EducationExperience'>
        <EducationExperience />
      </div>


      <div className='Footer'>
        <Footer/>
      </div>
      


    </div>
  );
}

export default App;
