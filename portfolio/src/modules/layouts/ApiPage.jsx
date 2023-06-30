import styles from "./ApiPage.module.css"
import cashImage from "../images/cashimage.svg"

import React, { useEffect,  useState } from "react";
import axios from 'axios'

function ApiPage() {
  const [value, setValue] = useState(0)
  const [cotacao, setCotation] = useState([])
  useEffect(() => {
    getCotation()
  }, []);

  function getCotation(){ 
     // chama a biblioteca
    axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL") // faz um get then normal 
    .then((response) => {
      setCotation(response.data.USDBRL.ask)
    })
    .catch((error) => {
      console.log(error)
    });
  }

  getCotation()

  let convValue = (value / cotacao).toFixed(2)

  return (
    <div className={styles.mainApi}>
      <div className={styles.leftPage}>
        <img src={cashImage} alt="Cash img" />
      </div>
      <div className={styles.rightPage}>
        <div className={styles.form}>
          <input
            type="number"
            name="moedaReal"
            id="real"
            placeholder="Insira a quantia em reais"
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <p>Cotacao atual do dolar: {cotacao} R$</p>
        </div>
        <div className={styles.res} id="res">{value} reais valem {convValue} $$ dólares</div>
      </div>
    </div>
  )
}

export default ApiPage
