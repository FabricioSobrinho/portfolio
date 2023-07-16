import styles from "./ProjectsPage.module.css"

//js and html imports
import landingPage from "../images/landingPage.svg"
import mentalist from "../images/mentalist.svg"
import calculator from "../images/jscalc.svg"
import costs from "../images/costs_logo.svg"

//ruby projects imports
import bankIco from "../images/bankicon.svg"
import rubyTasks from "../images/rubytasks.svg"

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
          nameProject="Landing Page"
          showJs
          showHtml
          showCss
          img={landingPage}
          linkRepo="https://github.com/FabricioSobrinho/LandingPage-2.0"
        />
        <ProjectCard
          nameProject="Guess Game"
          showJs
          showHtml
          showCss
          img={mentalist}
          linkRepo="https://github.com/FabricioSobrinho/mentalist"
        />
        <ProjectCard
          nameProject="Costs"
          showJs
          showHtml
          showCss
          img={costs}
          linkRepo="https://github.com/FabricioSobrinho/costs"
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
          nameProject="Ruby Activities"
          showRuby
          img={rubyTasks}
          linkRepo="https://github.com/FabricioSobrinho/Ruby-Activities"
        />
        <ProjectCard
          nameProject="Bank acc manager"
          showRuby
          img={bankIco}
          linkRepo="https://github.com/FabricioSobrinho/AccControler"
        />
      </div>
    </div>
  )
}

export default ProjectsPage
