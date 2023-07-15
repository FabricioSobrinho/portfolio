import styles from "./SkillsPage.module.css"

function SkillCard({icon, text, tech}) {
  return (
    <div className={styles.card}>
      <div className={styles.flip}>
        <div className={styles.frontCard}>
          <p className={styles[tech]}>{icon}</p>
        </div>
        <div className={styles.backCard}>
          <p>
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
