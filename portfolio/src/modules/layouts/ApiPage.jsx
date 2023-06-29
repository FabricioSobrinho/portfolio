import styles from './ApiPage.module.css'
import cashImage from '../images/cashimage.svg'

function ApiPage() {
  return (
    <div className={styles.mainApi}>
        <div className={styles.leftPage}>
            <img src={cashImage} alt='Cash img'/>
        </div>
        <div className={styles.rightPage}>
            <div className={styles.form}>
                <input type="number" name="moedaReal" id="real" placeholder='Insira a quantia em reais'/>
                <label htmlFor="moedaDolar" className='yep'> Cotacao atual do dolar: "Inserir variavel de cotacao" </label>
                <input type="button" value="Converter"/>
            </div>
        </div>
    </div>
  )
}

export default ApiPage