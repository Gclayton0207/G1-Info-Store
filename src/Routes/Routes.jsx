import React from 'react'
import { BrowserRouter, Routes as Switch,Route } from "react-router-dom";
import Home from "../Pages/Home/Home"
import Sobre from "../Pages/Sobre/Sobre"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../index.css';

const Routes = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path='/'  element={<Home />}/>
            <Route path='/sobre' element={<Sobre/>}/>
        </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default Routes
