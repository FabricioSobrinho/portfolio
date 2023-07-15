import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { SiGithub } from "react-icons/si"

import styles from "./Footer.module.css"

function Footer() {
  return (
    <div>
      <footer>
        <div className={styles.leftFooter} id="contactSection">
          <p className={styles.contact}>Como entrar em contato comigo?</p> <br/>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/fabricioosobrinho/">
              <FaInstagram className={styles.ig} />
            </a>
            <a href="https://www.linkedin.com/in/fabricio-a-sobrinho-0b1570268/">
              <FaLinkedin className={styles.li} />
            </a>
            <a href="https://github.com/FabricioSobrinho">
              <SiGithub className={styles.gh} />
            </a>
          </div>
          <p className={styles.bottomText}>
            Copyright &copy; 2023 desenvolvido & planejado por Fabrício
            Sobrinho
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
