import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Skills from './pages/Skills'

function App() {

  return (
    <>
      <Navbar />
        <div className="pt-16">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      <Footer />
    </>
  )
}

export default App