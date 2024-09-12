import { Route, Routes } from "react-router"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Service from "./Service"


const AppLayout = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />


    </div>
  )
}

export default AppLayout
