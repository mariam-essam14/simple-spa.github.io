import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { Link, Outlet } from 'react-router-dom'


export default function Layout() {
  return <>
   
   <Navbar/>
   
   <Outlet></Outlet>
     
   <Footer/>
      
  </>
}
