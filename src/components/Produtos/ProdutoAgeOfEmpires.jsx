import React from 'react';
import styles from '../Produtos/Produtos.module.css';
import aoe from '../../Assets/Produtos/AOE.svg';

const ProdutoAgeOfEmpires = () => {
  return (
      <div className={styles.card}>
    <div className={styles.card2}>
              <img src={aoe}className={styles.img}/>
                <div className={styles.info}>
                <span>AOE IV</span>
                <p>199,90</p>
          </div>
          <div className={styles.containerBotom}>
          <button className={styles.button}> <span></span>
                     <span></span>
                      <span></span>
                      <span></span> Comprar
      </button>
      </div>
    </div>
  </div>
  
  )
}

export default ProdutoAgeOfEmpires;
