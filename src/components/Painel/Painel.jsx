import React from "react";
import styles from "./Painel.module.css";

const Painel = () => {
  return (
      <nav className={styles.painel}>
      <ul>
        <li>
          <span>Visualizar produtos</span>
        </li>
        <li>
          <span>Editar produtos</span>
        </li>
        <li>
          <span>Atualizar produtos</span>
        </li>
        <li>
          <span>Deletar produtos</span>
        </li>
      </ul>
    </nav>
    
  );
};

export default Painel;
