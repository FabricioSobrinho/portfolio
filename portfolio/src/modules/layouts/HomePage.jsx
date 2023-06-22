import styles from "./HomePage.module.css"
import DevImage from "../images/Developer activity-rafiki.svg"

function HomePage() {
  return (
    <div className={styles.main} id="main">
      <nav>
        <div className={styles.navText}>
          <p>
            <a href="#main">Fabrício Sobrinho Dev.</a>
          </p>
        </div>
        <div className={styles.navMenu}>
          <ul>
            <li>
              <a href="#aboutSection">Sobre</a>
            </li>
            <li>
              <a href="#skillsSection">Skills</a>
            </li>
            <li>
              <a href="#projectSection">Projetos</a>
            </li>
            <li>
              <a href="#contactSection">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.glassCard}>
        <div className={styles.leftContent}>
          <img src={DevImage} alt="This is an gif" className={styles.imgDev} />
        </div>
        <div className={styles.rightContent}>
          <p>
            Bem vindo! <br/>
            Meu nome é: Fabricio Sobrinho <br/>
            Sou acadêmico no curso de ADS. <br/>
            Venha conhecer meu portifólio!
          </p>
          <div className={styles.formButtonProject}>
            <button>Clique aqui para conferir meus projetos!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
