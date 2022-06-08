import React from "react";
import { Link } from "react-router-dom"
import styles from "./Painel.module.css";

const Painel = () => {
  return (
      <nav className={styles.painel}>
      <ul>
        <li>
          <span>Visualizar produtos</span>
        </li>
        <li>
          <Link to='/painel/criar'>Criar produtos</Link>
        </li>
        <li>
          <span>Atualizar produtos</span>
        </li>
        <li>
          <span>Deletar produtos</span>
        </li>
        <Link to='/painel/criar'>Criar produtos</Link>
      </ul>
    </nav>
    
  );
};

export default Painel;
