//Pages
import NavBar from "./modules/layouts/NavBar"
import HomePage from "./modules/layouts/HomePage"
import AboutPage from "./modules/layouts/AboutPage"
import SkillsPage from "./modules/layouts/SkillsPage"
import ProjectsPage from "./modules/layouts/ProjectsPage"

import React, { useEffect } from "react"
import ScrollReveal from "scrollreveal"

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
          <SkillsPage id="page3"/>
        </div>
        <div className="page">
          <ProjectsPage/>
        </div>
      </div>
    </div>
  );
}


export default App
