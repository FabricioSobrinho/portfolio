// import {DiRuby} from 'react-icons/di'
import React, { useEffect } from "react"
import ScrollReveal from "scrollreveal"

//Pages
import NavBar from "./modules/layouts/NavBar"
import HomePage from "./modules/layouts/HomePage"
import AboutPage from "./modules/layouts/AboutPage"
import SkilssPage from "./modules/layouts/SkilssPage"

function App() {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.page', {
      duration: 1000,
      origin: 'bottom',
      delay: 200,
      reset: true,
      easing: 'ease-in',
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="interface">
        <div className="/">
          <HomePage id="page1"/>
        </div>
        <div className="page">
          <AboutPage id="page2" />
        </div>
        <div className="page">
          <SkilssPage id="page3"/>
        </div>
      </div>
    </div>
  );
}


export default App
