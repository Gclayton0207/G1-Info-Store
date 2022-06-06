import React, { useEffect, useState } from "react";
import styles from "../Produtos/Produtos.module.css";
import aoe from "../../Assets/Produtos/AOE.svg";
import axios from "axios";

const Produtos = () => {
  const [softwares, setSoftwares] = useState([]);
  const [hardwares, setHardwares] = useState([]);
  const [produtos, setProdutos] = useState([]);

  
  useEffect(() => {
    async function Api() {
      try {
        const { data } = await axios(
          "https://projeto-final-m4.herokuapp.com/softwares" 
        );
        setSoftwares(data);
        setProdutos([...data])
        console.log();
      } catch (err) {
        console.error("ops! ocorreu um erro" + err);
      }
    }
    async function Api2() {
      try {
        const { data } = await axios(
          "https://projeto-final-m4.herokuapp.com/hardwares" 
        );
        setHardwares(data);
        setProdutos((produtosAtuais)=>[...produtosAtuais, ...data])
        
        console.log(produtos);
      } catch (err) {
        console.error("ops! ocorreu um erro" + err);
      }
    }
    Api()
    Api2();

  }, []);

  

 return(
   <div  className={styles.ProdutosContainer}>
   {produtos.length>0 && produtos.map((software, index)=> (
        <div key={index}className={styles.card}>
          <div className={styles.card2}>
            <img src={aoe} className={styles.img} />
            <div className={styles.info}>
              <p>{software.nome}</p>
              <p>R${software.preço.toFixed(2).replace(".", ",")}</p>
            </div>
            <div className={styles.containerBotom}>
              <button className={styles.button}>
                {" "}
                <span></span>
                <span></span>
                <span></span>
                <span></span> Comprar
              </button>
            </div>
          </div>
          </div>
   ))
        }
 </div>
        
    )
    
}

export default Produtos;
