import React, { useState } from 'react'
import './Contact.css'
import $ from 'jquery'
export default function Contact() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let [message, setMessage] = useState('')
    let [error, setError] = useState(false)
    let handeSubmit = (e) => {
        e.preventDefault();
        if (name.length == 0 || email.length == 0 || phone.length == 0 || message.length == 0) {
            setError(true)
        }

    }

    return <>
        <section className='contact'>
            <div className="container">

                <h2 className='text-center text-uppercase mb-0'>CONTACT ME</h2>

                <div className="line-icon">
                    <div className="line rounded"></div>
                    <div className="icon"><i className='fa-solid fa-star  fa-2x'></i></div>
                    <div className="line  rounded"></div>
                </div>

                <div className="row">
                    <div className="col-lg-8 mx-auto">

                        <form onSubmit={handeSubmit}>
                            <div className="form-floating mb-0 pb-2">
                                <input onChange={e => setName(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label form="floatingInput">Name</label>
                                    {error && name.length <= 0 ? <p className='text-danger'>
                                        <ul>
                                            <li>
                                                please enter your name.
                                            </li>
                                        </ul>
                                    </p> : ""}
                            </div>

                            <div className="form-floating">
                                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label form="floatingPassword">Email Address</label>
                                    {error && email.length <= 0 ? <p className='text-danger'>
                                        <ul>
                                            <li>
                                                please enter your email.
                                            </li>
                                        </ul>
                                    </p> : ""}
                            </div>

                            <div className="form-floating py-3">
                                <input onChange={e => setPhone(e.target.value)} type="text" className="form-control" id="floatingPassword" placeholder="phone number"/>
                                    <label form="floatingPassword">Phone Number</label>
                                    {error && phone.length <= 0 ? <p className='text-danger'>
                                        <ul>
                                            <li>
                                                please enter your phone.
                                            </li>
                                        </ul>
                                    </p> : ""}
                            </div>

                            <div className="form-floating">
                                <textarea onChange={e => setMessage(e.target.value)}  type="number" rows="5" className="form-control" id="floatingPassword" placeholder="Message"/>
                                    <label form="floatingPassword">Message</label>
                                    {error && message.length <= 0 ? <p className='text-danger'>
                                        <ul>
                                            <li>
                                                please enter your message.
                                            </li>
                                        </ul>
                                    </p> : ""}
                            </div>
                            <br />
                            <div ><button className="btn btn1 btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>


                    </div>
                </div>
            </div>
        </section>

    </>
}
