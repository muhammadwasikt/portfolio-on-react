import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'
import { RouterProvider } from 'react-router'
import Projects from './pages/Projects.jsx'
import Hero from './pages/Hero.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <App />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Service />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/project',
        element: <Projects />
      },
      {
        path: '/hero',
        element: <Hero />
      },
    ]
  },

])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
