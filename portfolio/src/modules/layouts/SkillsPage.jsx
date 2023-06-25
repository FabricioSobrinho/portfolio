import styles from "./SkillsPage.module.css"

import {DiRuby, DiHtml5, DiCss3, DiReact, DiNodejs, DiDatabase } from 'react-icons/di'
import {SiRubyonrails, SiJavascript} from 'react-icons/si'

function SkillsPage() {

  return (
    <div className={styles.skillMain} id="skillsSection">
      <div className={styles.container} id="skillsContainer">
        <div className={styles.text}>
          <p>Este é meu baralho de habilidades.</p>
        <p>Passe o mouse por cima para ler a descrição de uma habilidade!</p>
        </div>
        
        <div className={styles.card}>
          <div className={styles.flip}>
            <div className={styles.frontCard}><p className="ruby">{<DiRuby/>}</p></div>
            <div className={styles.backCard}> <p>Ruby é uma tecnologia voltada para o backend na produção de aplicações.</p></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.flip}>
            <div className={styles.frontCard}> <p className="rails">{<SiRubyonrails/>}</p></div>
            <div className={styles.backCard}> <p>Rails é o framework principal do Ruby, com ele posso construir aplicações de forma rápida!</p></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.flip}>
            <div className={styles.frontCard}><p className={styles.html}>{<DiHtml5/>}</p></div>
            <div className={styles.backCard}> <p>HTML é a base das páginas web e ainda é muito popular e eficaz na construção de páginas.</p></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.flip}>
            <div className={styles.frontCard}><p className={styles.css}>{<DiCss3/>}</p></div>
            <div className={styles.backCard}> <p>CSS3 é o par do HTMl sendo a ferramenta de estilização web mais popular do mundo.</p></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.flip}>
            <div className={styles.frontCard}><p className={styles.js}>{<SiJavascript/>}</p></div>
            <div className={styles.backCard}> <p>JS é a base do funcionamento da maioria das páginas web, formando a trindade com HTML e CSS.</p></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.flip}>
            <div className={styles.frontCard}><p className={styles.node}>{<DiNodejs/>}</p></div>
            <div className={styles.backCard}> <p>Com o NodeJS é possível usar o JS, antes usado apenas no front-end, também no back-end!</p></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.flip}>
            <div className={styles.frontCard}><p className={styles.react}>{<DiReact/>}</p></div>
            <div className={styles.backCard}> <p>O ReactJS permite a criação de páginas com maior organização e agilidade, bem como está que foi feita usando este framework.</p></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.flip}>
            <div className={styles.frontCard}><p className={styles.dbs}>{<DiDatabase/>}</p></div>
            <div className={styles.backCard}> <p>Bancos de dados são úteis no back-end para tratar informações, eu tenho conhecimentos básicos de MySQL e MongoDb.</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPage
