
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Service from './pages/Service'
import AppLayout from './pages/AppLayout'

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
