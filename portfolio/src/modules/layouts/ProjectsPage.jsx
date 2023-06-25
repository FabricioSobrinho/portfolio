import styles from "./ProjectsPage.module.css"

//js and html imports
import landingPage from "../images/landingPage.svg"
import mentalist from "../images/mentalist.svg"
import calculator from "../images/jscalc.svg"

//ruby projects imports
import bankIco from "../images/bankicon.svg"
import rubyTasks from "../images/rubytasks.svg"


//icons imports 
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"
import { DiRuby } from "react-icons/di"

function ProjectsPage() {
  return (
    <div id="projectSection" className={styles.mainProjects}>
      <div className={styles.topPage}>
        <h1>Meus Projetos!</h1>
        <p>Clique no ícone para ir para o repositório do projeto!</p>
      </div>
      <div className={styles.bottomPage}>
        <div className={styles.cardProject}>
            <div className={styles.icons}>
                {<SiJavascript/>}
                {<SiHtml5/>}
                {<SiCss3/>}
            </div>
          <a href="https://github.com/FabricioSobrinho/LandingPage-2.0">
            <img src={landingPage} alt="web page icon" href="" />
            <p>Landing page API</p>
          </a>
        </div>
        <div className={styles.cardProject}>
        <div className={styles.icons}>
                {<SiJavascript/>}
                {<SiHtml5/>}
                {<SiCss3/>}
            </div>
          <a href="https://github.com/FabricioSobrinho/mentalist">
            <img src={mentalist} alt="genius icon"/>
            <p>Jogo de adivinhação</p>
          </a>
        </div>
        <div className={styles.cardProject}>
        <div className={styles.icons}>
                {<SiJavascript/>}
                {<SiHtml5/>}
                {<SiCss3/>}
            </div>
          <a href="https://github.com/FabricioSobrinho/JS-calc">
            <img src={calculator} alt="calculator icon" href="" />
            <p>Calculadora JS</p>
          </a>
        </div>
        <div className={styles.cardProject}>
        <div className={styles.icons}>
                {<DiRuby/>}
            </div>
          <a href="https://github.com/FabricioSobrinho/Ruby-Activities">
            <img src={rubyTasks} alt="tasks icon" href="" />
            <p>Atividades em Ruby</p>
          </a>
        </div>
        <div className={styles.cardProject}>
        <div className={styles.icons}>
                {<DiRuby/>}
            </div>
          <a href="https://github.com/FabricioSobrinho/AccControler">
            <img src={bankIco} alt="bank icon" href="" />
            <p>Sistema Bancário</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
