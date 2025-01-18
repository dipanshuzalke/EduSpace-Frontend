import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Home/>
    }
  ])

  return (
    <>
      <Navbar/>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
