import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Hero from "./pages/Hero"
import Navbar from "./components/Navbar"
import Projects from "./pages/Projects"
import Service from "./pages/Service"

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Service />
      <Footer />
    </div>
  )
}

export default App
