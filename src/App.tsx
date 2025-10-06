import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SobreODS from './pages/SobreODS'
import Artigos from './pages/Artigo'
import Artigo from './pages/Artigos'
import NaoEncontrada from './pages/NaoEncontrada'
import Menu from './components/Menu/Menu'


function App() {


  return (
    <>
    <Menu />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<SobreODS />} />
        <Route path="/artigos" element={<Artigo />} />
        <Route path="/artigo/:id" element={<Artigos />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </>
  )
}

export default App
