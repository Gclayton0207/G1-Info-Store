import React from 'react'
import { BrowserRouter, Routes as Switch,Route } from "react-router-dom";
import Home from "../Pages/Home/Home"
import Sobre from "../Pages/Sobre/Sobre"
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path='/'  element={<Home />}/>
          <Route path='/sobre' element={<Sobre/>}/>
      </Switch>
      </BrowserRouter>
  )
}

export default Routes
