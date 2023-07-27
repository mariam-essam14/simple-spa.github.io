import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About/About'
import Contact from './Contact/Contact'
import Header from './Header/Header'
import Layout from './Layout'
import NotFound from './NotFound/NotFound'
import Portifolio from './Portifolio/Portifolio'

export default function App() {

  let routers = createBrowserRouter([
    {
      path:"",element: <Layout/> , children:[
        {path:"",element: <Header/>},
        {path:"portifolio",element: <Portifolio/>},
        {path:"about",element: <About/>},
        {path:"contact",element: <Contact/>},
        {path:"*",element: <NotFound/>},
        
      ]
    },
  ])

  return <>
   <RouterProvider router ={routers}/>
  </>
}




