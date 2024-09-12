import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Service from './components/Service.jsx'
import { RouterProvider } from 'react-router'
import Projects from './components/Projects.jsx'
import Hero from './components/Hero.jsx'




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
