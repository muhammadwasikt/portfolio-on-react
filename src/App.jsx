
import { Route, Routes } from 'react-router'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'
import AppLayout from './components/AppLayout'

function App() {

  return (
    <div>
      <Navbar />
         <Routes>
        <Route path='/' element={<AppLayout />} />
        <Route path='/home' element={<AppLayout />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Service />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/project' element={<Projects />} />
        {/* <Route path='*' element='error' /> */}

      </Routes>
      <Footer />
    </div>
  )
}

export default App
