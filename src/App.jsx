import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CardGiovanni from './components/sobre/CardGiovanni'


function App() {
  const [count, setCount] = useState(0)

  return (<main>
    <h1>G1 info store</h1>
    <CardGiovanni/>
   
    
    </main>
  )
}

export default App
