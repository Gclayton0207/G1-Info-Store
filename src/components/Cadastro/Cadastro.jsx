import axios from 'axios'
import React, { useState } from 'react'

const Cadastro = () => {
  const [nome, setNome] = useState("")
  const [marca, setMarca] = useState("")
  const [preco, setPreco] = useState("")
  const [tipo, setTipo] = useState("")

  const limpaCampo = ()=> 
  {
      setNome('')
      setMarca('')
      setPreco('')
      setTipo('')

    
    }

  const criarProduto = () => {
    console.log("HELLO");
    const dados = {nome, marca, preço:preco, tipo}

   axios.post('https://projeto-final-m4.herokuapp.com/software', dados).then(function(response){console.log(response)}).catch(function(error){console.log(error)})

   limpaCampo()

  }
  
  return (
    <div style={style.container}>
    <h2 style={style.Label}>Cadastrar Produto</h2>
     <label style={style.Label}>Nome</label>
     <input 
       type="text" 
       value={nome} 
       onChange={e => setNome(e.target.value)}/>

     <label style={style.Label}>Marca</label>
     <input 
        type="text"
        value={marca}
        onChange={e => setMarca(e.target.value)}
        />
     <label style={style.Label}>Preço</label>
     <input type="text"
        value={preco}
        onChange={e => setPreco(e.target.value)}
     />
     <label style={style.Label}>Tipo</label>
     <textarea
      value={tipo}
      onChange={e => setTipo(e.target.value)}
     
     />

     <button onClick={ criarProduto }>Cadastrar</button>



    </div>
  )
}

const style={ 
    Label: { color:"white" }, 
    container:{ display:"flex", flexDirection:"column"}
}

export default Cadastro