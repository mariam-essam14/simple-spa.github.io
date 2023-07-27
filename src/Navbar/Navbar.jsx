

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return <>
<nav className="navbar navbar-expand-lg text-uppercase fixed-top " id='Nav'> 
  <div className="container w-75 ">
    <Link className="navbar-brand text-white" to='header'>start react</Link>
    <button className="navbar-toggler  text-uppercase  fw-bold text-white rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      menu <span><i className='fa-solid fa-bars'></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <NavLink className={({isActive})=> isActive==true? "nav-link active" :"nav-link"} aria-current="page" to="portifolio">portifolio</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className={({isActive})=> isActive==true? "nav-link active" :"nav-link"}  to="about">about</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className={({isActive})=> isActive==true? "nav-link active" :"nav-link"}  to="contact">contact</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

  </>
}

