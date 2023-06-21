import styles from './AboutPage.module.css'
import presentationImg from "../images/presentationabout.svg"
function AboutPage() {
  return (
    <div id="aboutSection" className={styles.aboutSection}>
      <div className={styles.mainAboutCard}>
        <div className={styles.leftAboutSection}>
          <h1>
          Quem sou eu? 
        </h1>
        <img src={presentationImg} alt="Apresentation of me"/>
        </div>
        <p>Sou desenvolvedor estudando front e backend. <br/>
        Faço curso de Análise e Desenvolvimento de Sistemas presencialmente na Unifasipe. <br/> 
        Atualmente estou estudando as tecnologias de Ruby e seu framework Rails, além de JS com o Node JS para o backend. <br/> 
        No frontend atualmente estou trabalhando com React JS além da dupla dinâmica: HTML e CSS! <br/> 
        Adoro estudar e descobrir novas tecnologias, sou fascinado por Ruby e no momento é a linguagem a qual eu mais tenho dado atenção no momento <br/>
        </p>
      </div>
      
    </div>
  )
}

export default AboutPage