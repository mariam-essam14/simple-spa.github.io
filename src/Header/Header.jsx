// import React, { Component } from 'react'

// import './Header.css'
// import image from '../Image/avataaars.svg'
// export default class Header extends Component {
//   render() {
//     return <>
     
//      <header className='text-white text-center vh-100 d-flex  justify-content-center align-items-center'>
//         <div className="container d-flex align-items-center flex-column">
//            <img className='mb-3 ' src={image}></img>
//            <h1 className='text-uppercase mb-0'>START REACT</h1>
//            <div className='line-icon'>
//             <div className="line bg-white rounded"></div>
//             <div className="icon"><i className='fa-solid fa-star text-white fa-2x'></i></div>
//             <div className="line bg-white rounded"></div>
//            </div>
//            <p className=' mb-0'>Graphic Artist - Web Designer - Illustrator</p>
//         </div>
//      </header>

//     </>
//   }
// }

import React from 'react'
import image from '../Image/avataaars.svg'
import './Header.css'
export default function Header() {
  return <>
 <header className='text-white text-center vh-100 d-flex  justify-content-center align-items-center'>
        <div className="container d-flex align-items-center flex-column">
           <img className='mb-3 ' src={image}></img>
           <h1 className='text-uppercase mb-0'>START REACT</h1>
           <div className='line-icon'>
            <div className="line bg-white rounded"></div>
            <div className="icon"><i className='fa-solid fa-star text-white fa-2x'></i></div>
            <div className="line bg-white rounded"></div>
           </div>
           <p className=' mb-0'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
     </header>

  </>
}
