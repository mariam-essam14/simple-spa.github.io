import React from 'react'
import './About.css'
export default function About() {
    return <>

        <section className='About text-white mb-0'>
            <div className="container">
                <h2 className='text-center text-white text-uppercase'>ABOUT</h2>
                <div className='line-icon'>
                    <div className="line bg-white rounded"></div>
                    <div className="icon"><i className='fa-solid fa-star text-white fa-2x'></i></div>
                    <div className="line bg-white rounded"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto">
                        <p>Freelancer is a free bootstrap theme <br/> created by Route. The download <br/>  includes the complete source files <br/> including HTML, CSS, and JavaScript<br/>  as well as optional SASS stylesheets<br/>  for easy customization.</p>
                    </div>
                    <div className="col-lg-4 me-auto">
                        <p>You can create your own custom <br/> avatar for the masthead, change the <br/> icon in the dividers, and add your<br/>  email address to the contact form to <br/> make it fully functional!

                        </p>
                    </div>
                </div>

            </div>
        </section>

    </>
}
