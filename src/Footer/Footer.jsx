import React from 'react'
import './Footer.css'
export default function Footer() {
  return <>

   <footer className='text-center'>
   <div className="container">
    <div className="row">
      <div className="col-lg-4 mb-5 mb-lg-0">
       <h4 className='text-uppercase mb-4'>location</h4>
       <p className='mb-0'>
       2215 John Daniel Drive <br/>Clark, MO 65243
       </p>
      </div>
      <div className="col-lg-4 mb-5 mb-lg-0">
         <h4 className='text-uppercase mb-4'>AROUND THE WEB</h4>
          <a className='btn btn-outline-light rounded-circle  mx-1'> <i className="fa-brands fa-facebook-f fa-3"></i></a>
          <a className='btn btn-outline-light rounded-circle mx-1'> <i className="fa-brands fa-twitter fa-3"></i></a>
          <a className='btn btn-outline-light rounded-circle mx-1'> <i className="fa-brands fa-linkedin-in fa-3"></i></a>
          <a className='btn btn-outline-light rounded-circle mx-1'> <i className="fa-brands fa-dribbble fa-3"></i></a>
      </div>

      <div className="col-lg-4">
       <h4 className='text-uppercase mb-4'>ABOUT FREELANCER</h4>
       <p className='mb-0'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
      </div>
    </div>
   </div>
   </footer>
   <div className='end py-4 text-center text-white'>
    <div className="container">
      <small>Copyright © Your Website 2021</small>
    </div>
   </div>
  </>
}
