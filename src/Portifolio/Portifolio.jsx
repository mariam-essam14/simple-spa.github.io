import React from 'react'
import './Portifolio.css'
import img1 from '../Image/cabin.png'
import img2 from '../Image/cake.png'
import img3 from '../Image/circus.png'
import img4 from '../Image/game.png'
import img5 from '../Image/safe.png'
import img6 from '../Image/submarine.png'
export default function Portifolio() {
    return <>
        <section className='portifolio'>
            <div className="container">
                <h2 className='text-center text-uppercase mb-0'>PORTFOLIO</h2>


                <div className="line-icon">
                    <div className="line rounded"></div>
                    <div className="icon"><i className='fa-solid fa-star  fa-2x'></i></div>
                    <div className="line  rounded"></div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img className='w-100 rounded' src={img1} />
                            <div className="item-layer rounded d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white fa-3x "></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <img className='w-100 rounded' src={img2} />
                            <div className="item-layer rounded d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white fa-3x "></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <img className='w-100 rounded' src={img3} />
                            <div className="item-layer rounded d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white fa-3x "></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <img className='w-100 rounded' src={img4} />
                            <div className="item-layer rounded d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white fa-3x "></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                            <img className='w-100 rounded' src={img5} />
                            <div className="item-layer rounded d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white fa-3x "></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                            <img className='w-100 rounded' src={img6} />
                            <div className="item-layer rounded d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white fa-3x "></i>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>



        <div className="modal fade  portifolio-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-xl">
                <div className="modal-content">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fa-sharp fa-solid fa-xmark"></i>
                        </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className='text-uppercase mb-0'>LOG CABIN</h2>
                                    <div className="line-icon">
                                        <div className="line rounded"></div>
                                        <div className="icon"><i className='fa-solid fa-star  fa-2x'></i></div>
                                        <div className="line  rounded"></div>
                                    </div>

                                    <img src={img1} className="rounded mb-5 w-100" />
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                                    <button type="button" className=" btn1" data-bs-dismiss="modal" aria-label="Close">
                                        <span >
                                            <i className="fa-sharp fa-solid fa-xmark"></i> Close Window
                                        </span>
                                    </button>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>



        <div className="modal fade  portifolio-modal" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-xl">
                <div className="modal-content">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fa-sharp fa-solid fa-xmark"></i>
                        </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className='text-uppercase mb-0'>LOG CABIN</h2>
                                    <div className="line-icon">
                                        <div className="line rounded"></div>
                                        <div className="icon"><i className='fa-solid fa-star  fa-2x'></i></div>
                                        <div className="line  rounded"></div>
                                    </div>

                                    <img src={img2} className="rounded mb-5 w-100" />
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                                    <button type="button" className=" btn1" data-bs-dismiss="modal" aria-label="Close">
                                        <span >
                                            <i className="fa-sharp fa-solid fa-xmark"></i> Close Window
                                        </span>
                                    </button>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>





        <div className="modal fade  portifolio-modal" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-xl">
                <div className="modal-content">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fa-sharp fa-solid fa-xmark"></i>
                        </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className='text-uppercase mb-0'>LOG CABIN</h2>
                                    <div className="line-icon">
                                        <div className="line rounded"></div>
                                        <div className="icon"><i className='fa-solid fa-star  fa-2x'></i></div>
                                        <div className="line  rounded"></div>
                                    </div>

                                    <img src={img3} className="rounded mb-5 w-100" />
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                                    <button type="button" className=" btn1" data-bs-dismiss="modal" aria-label="Close">
                                        <span >
                                            <i className="fa-sharp fa-solid fa-xmark"></i> Close Window
                                        </span>
                                    </button>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>





        <div className="modal fade  portifolio-modal" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-xl">
                <div className="modal-content">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fa-sharp fa-solid fa-xmark"></i>
                        </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className='text-uppercase mb-0'>LOG CABIN</h2>
                                    <div className="line-icon">
                                        <div className="line rounded"></div>
                                        <div className="icon"><i className='fa-solid fa-star  fa-2x'></i></div>
                                        <div className="line  rounded"></div>
                                    </div>

                                    <img src={img4} className="rounded mb-5 w-100" />
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                                    <button type="button" className=" btn1" data-bs-dismiss="modal" aria-label="Close">
                                        <span >
                                            <i className="fa-sharp fa-solid fa-xmark"></i> Close Window
                                        </span>
                                    </button>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>




        <div className="modal fade  portifolio-modal" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-xl">
                <div className="modal-content">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fa-sharp fa-solid fa-xmark"></i>
                        </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className='text-uppercase mb-0'>LOG CABIN</h2>
                                    <div className="line-icon">
                                        <div className="line rounded"></div>
                                        <div className="icon"><i className='fa-solid fa-star  fa-2x'></i></div>
                                        <div className="line  rounded"></div>
                                    </div>

                                    <img src={img5} className="rounded mb-5 w-100" />
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                                    <button type="button" className=" btn1" data-bs-dismiss="modal" aria-label="Close">
                                        <span >
                                            <i className="fa-sharp fa-solid fa-xmark"></i> Close Window
                                        </span>
                                    </button>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>




        <div className="modal fade  portifolio-modal" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-xl">
                <div className="modal-content">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fa-sharp fa-solid fa-xmark"></i>
                        </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className='text-uppercase mb-0'>LOG CABIN</h2>
                                    <div className="line-icon">
                                        <div className="line rounded"></div>
                                        <div className="icon"><i className='fa-solid fa-star  fa-2x'></i></div>
                                        <div className="line  rounded"></div>
                                    </div>

                                    <img src={img6} className="rounded mb-5 w-100" />
                                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

                                    <button type="button" className=" btn1" data-bs-dismiss="modal" aria-label="Close">
                                        <span >
                                            <i className="fa-sharp fa-solid fa-xmark"></i> Close Window
                                        </span>
                                    </button>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>
}
