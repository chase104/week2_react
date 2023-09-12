
import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Cards from './pages/Cards'

function App() {

  return (
    <div className='app'>
      <Navbar />  

      {/* show different pages here */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/poke_cards" element={<Cards />}/>

      </Routes>

    </div>
  )
}

export default App
