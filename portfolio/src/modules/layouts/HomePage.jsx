import styles from "./HomePage.module.css"
import DevImage from "../images/Developer activity-rafiki.svg"

function HomePage() {
  return (
    <div className={styles.main}>
      <nav>
        <div className={styles.navText}>Fabrício Sobrinho Dev.</div>
        <div className={styles.navMenu}>
          <ul>
            <li>Sobre</li>
            <li>Skills</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </div>
      </nav>
      <div className={styles.leftContent}>
        <img src={DevImage} alt="This is an gif" className={styles.imgDev} />
      </div>
      <div className={styles.rightContent}>
        <p>Alguma coisa escrita</p>
      </div>
    </div>
  )
}

export default HomePage
