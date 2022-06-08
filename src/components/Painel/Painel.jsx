import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
// import Header from "../../components/Header/header";
import HeaderPainel from "../../components/HeaderPainel/Header"
import { useForm } from 'react-hook-form';
import "../../components/HeaderPainel/Header"
import "../Painel/Painel.css"
// import axios from "axios"


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Produtos from "../Produtos/Produtos";


const validarPost = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório").max(40, "O titulo precisa ter menos de 30 caracteres"),
    marca: yup.string().required("A marca é obrigatória").max(150, "A descrição precisa ter menos de 150 caracteres"),
    preco: yup.string().required("O preço é obrigatório").max(500, "O conteudo precisa ter menos de 500 caracteres")
})

function Painel() {
    
    const navigate = useNavigate();

    const [productList, setProductList] = useState([]);
    const [removeProdut, setRemoveProduct] = useState();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validarPost)
    });

    const addPost = data => axios.post("https://projeto-final-m4.herokuapp.com/software", data)
        .then(() => {
            console.log("deu certo")
            navigate("/");
        }).catch(() => {
            console.log("deu errado")
        })
    

    
    const deletePost = (id) => {

            axios.delete(`http://localhost:3000/hardware/${id}`)
    
            setPosts(posts.filter(post => post._id !== id ))
        }
    


    return (
        <div>
             <HeaderPainel />
            <main>
                <div className="quadrado">

                    <h1>Cadastrar Produto</h1>
                    <div className="line-post"></div>

                    <div className="card-body-post">
                        <form onSubmit={handleSubmit(addPost)} style={{marginTop:"30px"}}>
                            <div className="fields">
                                <label>Nome</label>
                                <input type="text" name="nome" {...register("nome")} />
                                <p className="error-message">{errors.nome?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Marca</label>
                                <input type="text" name="marca" {...register("marca")} />
                                <p className="error-message">{errors.marca?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Preço</label>
                                <input type="text" name="preco" {...register("preco")} />
                                <p className="error-message">{errors.preco?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Tipo</label>
                                <textarea type="text" name="tipo" {...register("tipo")}></textarea>
                                <p className="error-message">{errors.tipo?.message}</p>
                            </div>
                            <div className="btn-post" style={{marginLeft:"20px", marginTop:"20px"}}>
                                <button type="submit">Cadastrar</button>
                            </div>
                           
                        </form>

                    </div>
                    
                </div>

            </main>

            <Produtos/>
          
        </div>
        

    )
}

export default Painel;