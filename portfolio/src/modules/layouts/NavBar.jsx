import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <div>
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
    </div>
  )
}

export default NavBar
