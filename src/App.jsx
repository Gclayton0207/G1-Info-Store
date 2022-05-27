import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CardGiovanni from './components/Cards/CardGiovanni'
import styled from "styled-components";
import CardMaria from './components/Cards/CardMaria'
import CardDouglas from './components/Cards/CardDouglas'
import CardVictor from './components/Cards/CardVictor'
import CardOthon from './components/Cards/CardOthon'
import Loader from './components/loading/Loader';


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1>G1 info store</h1>
  
  <main>
    <Loader/>
    
    

    
    </main>
    </>
  )
}

export default App
