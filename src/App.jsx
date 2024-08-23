
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import { Toaster } from 'react-hot-toast'
import './index.css'

function App() {
  

  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster />
    
    </>
  )
}

export default App
