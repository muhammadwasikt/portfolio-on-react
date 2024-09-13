import { Route, Routes } from "react-router"
import About from "./About"
import Contact from "./Contact"
import Footer from "../components/Footer"
import Hero from "./Hero"
import Navbar from "../components/Navbar"
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
