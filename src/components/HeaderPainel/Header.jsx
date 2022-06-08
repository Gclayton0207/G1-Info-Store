import React from "react";
import { Link } from 'react-router-dom';
import Produtos from "../Produtos/Produtos";

import '../HeaderPainel/Header.css';

function HeaderPainel() {


    return (
        <header>
            <div className="container">
            <div style={{display:"flex", padding:"10px"}}>
                      
                      <div style={{padding:"5px"}}>
                       <button className="update-btn" type="submit">Atualizar</button>
                       </div>
 
                     <div style={{padding:"5px"}}>
                        <button onClick={() => setModalDelet(true)} className="del-btn">Excluir</button>
                    </div> 
                      </div>
                </div>
        </header>
    )
}

export default HeaderPainel;