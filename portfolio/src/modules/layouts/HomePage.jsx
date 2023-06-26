import styles from "./HomePage.module.css"
import DevImage from "../images/Developer activity-rafiki.svg"

import { useState, useEffect } from "react"

function HomePage() {
  const [text, setText] = useState("")
  useEffect(() => {
    const typeText = `Seeja bem vindo!
    Meu nome é: Fabrício Sobrinho !`

    const interval = 100
    let charIndex = 0

    const typer = setInterval(() => {
      if (charIndex >= typeText.length) {
        clearInterval(typer)
        return
      }

      setText((prevText) => prevText + typeText.charAt(charIndex))
      charIndex++
    }, interval)

    return () => clearInterval(typer)
  }, [])

  return (
    <div className={styles.main} id="main">
      <div className={styles.glassCard}>
        <div className={styles.leftContent}>
          <img src={DevImage} alt="JR dev" className={styles.imgDev} />
        </div>
        <div className={styles.rightContent}>
          <p>
            {text} <span className={styles.especialLetter}>I</span><br/> Sou acadêmico no curso de ADS. Venha conhecer meu portifólio!
          </p>
          <div className={styles.formButtonProject}>
            <a href="#projectSection"><button>Clique aqui para conferir meus projetos!</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
