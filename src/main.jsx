import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'
import { RouterProvider } from 'react-router'
import Projects from './pages/Projects.jsx'
import Hero from './pages/Hero.jsx'
import Admin from './admin/Admin.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { AdminProvider } from './admin/context/AdminContext.jsx'
import { FeedbackProvider } from './admin/context/FeedbackContext.jsx'
import AppLayout from './pages/AppLayout.jsx'
import Home from './pages/Home.jsx'





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/home',
        element: <Home />
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
  {
    path: '/auth/admin',
    element: <Admin />
  },

])

createRoot(document.getElementById('root')).render(
  <AdminProvider>
    <FeedbackProvider>
      <RouterProvider router={router} />
    </FeedbackProvider>
  </AdminProvider>
)
