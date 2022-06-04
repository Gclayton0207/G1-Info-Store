import React from 'react';
import styles from '../Produtos/Produtos.module.css';
import AgeOfEmpires from '../../Assets/Produtos/Age_of_Empires_IV.jpg';

const ProdutoAgeOfEmpires = () => {
  return (
      <div className={styles.card}>
    <div className={styles.card2}>
              <div src={AgeOfEmpires}className={styles.img}></div>
                <div className={styles.info}>
                <span>AOE IV</span>
                <p>199,90</p>
          </div>
          <div className={styles.containerBotom}>
          <button className={styles.button}> Comprar
      </button>
      </div>
    </div>
  </div>
  
  )
}

export default ProdutoAgeOfEmpires;
