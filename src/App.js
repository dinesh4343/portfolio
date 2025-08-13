
import './App.css';
import Footer from './Js/Footer';
import StarrySky from './Js/StarrySky';
import Navbar from './Js/Header';
import Hero from './Js/Hero';
import About from './Js/About';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Footer.css';
import './Css/StarrySky.css';
import './Css/Header.css';
import './Css/Hero.css';
import './Css/About.css';


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



    </div>
  );
}

export default App;
