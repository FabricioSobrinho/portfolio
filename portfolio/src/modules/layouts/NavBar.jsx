import styles from "./NavBar.module.css"
import { GiHamburgerMenu } from "react-icons/gi"

import { useRef, useEffect, useState } from "react"

function NavBar() {
  const [display, setDisplay] = useState(false) //State começa como falso = menu uculto
  const responsiveMenu = useRef(null) //Localiza o menu na dom

  const activateMenu = () => {
    setDisplay(!display); //Muda o valor de display para alternar a visibilidade do Menu
    responsiveMenu.current.classList.toggle = 'menuShowing'
  };

  useEffect(() => {
    if (responsiveMenu.current) { //Essa funcao determina se o menu esta ativado ou nao
      const estilo = window.getComputedStyle(responsiveMenu.current);
      const displayValue = estilo.getPropertyValue("display");
      setDisplay(displayValue === "flex");
    }
  }, []);

  useEffect(() => {
    if (responsiveMenu.current) {
      responsiveMenu.current.style.display = display ? "flex" : "none"; //Esse operador é o responsável por mudar a visibiilidade do menu
    }
  }, [display]);

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
        <div className={styles.responsiveMenu} onClick={activateMenu}>
          <GiHamburgerMenu />
          <div className={styles.layersMenu} ref={responsiveMenu}>
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
        </div>
      </nav>
    </div>
  )
}

export default NavBar
