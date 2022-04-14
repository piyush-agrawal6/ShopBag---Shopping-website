import React from 'react'
import {Routes , Route} from "react-router-dom"
import Header from './components/Header'
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import Orders from "./components/Orders"
import Login from "./components/Login"
import Footer from './components/Footer'
import Men from './components/Men'
const App = () => {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/men' element={<Men/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App