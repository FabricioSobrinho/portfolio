import styles from "./ProjectsPage.module.css"

import MFLogo from "../images/MFLogo.svg"

import landingPage from "../images/landingPage.svg"
import calculator from "../images/jscalc.svg"
import costs from "../images/costs_logo.svg"
import projectsManager from "../images/managerProjects.svg"
import chessGame from "../images/chessGame.svg"

import ProjectCard from "./ProjectCard"

function ProjectsPage() {
  return (
    <div id="projectSection" className={styles.mainProjects}>
      <div className={styles.topPage}>
        <h1>Meus Projetos!</h1>
        <p>Clique no ícone para ir para o repositório do projeto!</p>
      </div>
      <div className={styles.bottomPage}>
        <ProjectCard
          nameProject="MF Bank"
          showRuby
          showJs
          showReact
          showRails
          img={MFLogo}
          linkRepo="https://github.com/FabricioSobrinho/MF-Bank"
        />
          <ProjectCard
            nameProject="Costs"
            showJs
            showHtml
            showCss
            showReact
            img={costs}
            linkRepo="https://github.com/FabricioSobrinho/costs"
          />
        <ProjectCard
          nameProject="Chess Game"
          showCsharp
          img={chessGame}
          linkRepo="https://github.com/FabricioSobrinho/Chess-Game"
        />
        <ProjectCard
          nameProject="Landing Page"
          showJs
          showHtml
          showCss
          img={landingPage}
          linkRepo="https://github.com/FabricioSobrinho/LandingPage-2.0"
        />
        <ProjectCard
          nameProject="Calculadora"
          showJs
          showHtml
          showCss
          img={calculator}
          linkRepo="https://github.com/FabricioSobrinho/JS-calc"
        />
        <ProjectCard
          nameProject="Manager Projects"
          showPy
          showFlask
          img={projectsManager}
          linkRepo="https://github.com/FabricioSobrinho/project-manager-api"
        />
      </div>
    </div>
  )
}

export default ProjectsPage
