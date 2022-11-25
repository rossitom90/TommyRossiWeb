import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
    </BrowserRouter>
  )
}

export default App
