import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/Main-Content'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
