import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'



function App() {
  

  return (
    <div>
      <Header />
      <Routes>
        <Route  path='/home' element={<Home />}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
