import styles from "./SkillsPage.module.css"

import {
  DiRuby,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejs,
  DiDatabase,
} from "react-icons/di"
import { SiRubyonrails, SiJavascript } from "react-icons/si"

import SkillCard from "./SkillCard"

function SkillsPage() {
  return (
    <div className={styles.skillMain} id="skillsSection">
      <div className={styles.container} id="skillsContainer">
        <div className={styles.text}>
          <p>Este é meu baralho de habilidades.</p>
          <p>Passe o mouse por cima para ler a descrição de uma habilidade!</p>
        </div>
        <SkillCard
          icon={<DiRuby />}
          tech="ruby"
          text="Ruby é uma tecnologia voltada para o backend na produção de
            aplicações."
        />
        <SkillCard
          icon={<SiRubyonrails />}
          tech="rails"
          text="Rails é o framework principal do Ruby, com ele posso construir aplicações de forma rápida!"
        />
        <SkillCard
          icon={<DiHtml5 />}
          tech="html"
          text="HTML é a base das páginas web e ainda é muito popular e eficaz na construção de páginas web."
        />
        <SkillCard
          icon={<DiCss3 />}
          tech="css"
          text="CSS3 é o par do HTMl sendo a ferramenta de estilização web mais popular do mundo."
        />
        <SkillCard
          icon={<SiJavascript />}
          tech="js"
          text="JS é a base do funcionamento da maioria das páginas web, formando a trindade com HTML e CSS."
        />
        <SkillCard
          icon={<DiNodejs />}
          tech="node"
          text="Com o NodeJS é possível usar o JS, antes usado apenas no front-end, também no back-end!"
        />
        <SkillCard
          icon={<DiReact />}
          tech="react"
          text="ReactJS permite a criação de páginas com maior organização e agilidade, bem como está que foi feita usando este framework."
        />
        <SkillCard
          icon={<DiDatabase />}
          tech="dbs"
          text="Bancos de dados são úteis no back-end para tratar informações, eu tenho conhecimentos em MySQL e MongoDb."
        />
      </div>
    </div>
  )
}

export default SkillsPage
