import React from 'react'
import "./Services.css"

const Services = () => {
    return (
        <>
            <section className='container-fluid Services' id='SERVICES'>
                <div className='row'>
                    <div className='col-sm-12 title'>
                        <h1 className='text-center'><span>Services</span> </h1>
                        <p className='text-center'>
                            Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est
                            <br /> eveniet deleniti fignissimos eos quam</p>
                    </div>
                    <div className='row'>
                        {/* 1 */}
                        <div className='col-lg-4 col-md-6'>
                            <div class="services-block-three ">
                                <span className='card '>
                                    <div class="padding-15px-bottom">
                                    <i class="fa-solid fa-screwdriver-wrench"></i>  
                                    </div>
                                    <h4>Nesciunt Mete</h4>
                                    <p class="xs-font-size13 xs-line-height-22">Provident nihil minus qui consequaturnon omnis maiores. Eos accusantiumminus dolores iure perferendistempore et consequatur.
                                    </p>
                                </span>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='col-lg-4 col-md-6 '>
                            <div class="services-block-three">
                                <span className='card '>
                                    <div class="padding-15px-bottom">
                                        <span class="material-symbols-outlined">location_city</span>
                                    </div>
                                    <h4>Eosle Commodi</h4>
                                    <p class="xs-font-size13 xs-line-height-22">Ut autem aut autem non a. Sint sint sitfacilis nam iusto Sint. Libero corruptineque eum hic non ut nesciuntdolorem.
                                    </p>
                                </span>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='col-lg-4 col-md-6 '>
                            <div class="services-block-three">
                                <span className='card '>
                                    <div class="padding-15px-bottom">
                                    <i class="fa-solid fa-compass-drafting"></i>
                                    </div>
                                    <h4>Ledo Markt</h4>
                                    <p class="xs-font-size13 xs-line-height-22">Ut excepturi voluptatem nisi sed.Quidem fuga consequatur. Minus eaaut. Vel qui id voluptas adipisci eosearum corrupti.</p>
                                </span>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className='col-lg-4 col-md-6 '>
                            <div class="services-block-three">
                                <span className='card '>
                                    <div class="padding-15px-bottom">
                                    <i class="fa-solid fa-pen-ruler"></i>
                                    </div>
                                    <h4>Asperiores Commodit</h4>
                                    <p class="xs-font-size13 xs-line-height-22">
                                        Non et temporibus minus omnis sedolor esse consequatur. Cupiditate sedrror ea fuga sit provident adipiscineque.
                                    </p>
                                </span>    
                            </div>
                        </div>
                        {/* 5 */}
                        <div className='col-lg-4 col-md-6 '>
                            <div class="services-block-three">
                                <span className='card '>
                                    <div class="padding-15px-bottom">
                                        <i class="fa-solid fa-helmet-safety"></i>                                   
                                    </div>
                                    <h4>Velit Doloremque</h4>
                                    <p class="xs-font-size13 xs-line-height-22">Cumque et suscipit saepe. Est maioresautem enim facilis ut aut ipsamcorporis aut. Sed animi at autem aliaseius labore.</p>
                                </span>
                            </div>
                        </div>
                        {/* 6 */}
                        <div className='col-lg-4 col-md-6 '>
                            <div class="services-block-three">
                                <span className='card '>
                                    <div class="padding-15px-bottom">
                                        <i class="fa-solid fa-building"></i>
                                    </div>
                                    <h4>Dolori Architecto</h4>
                                    <p class="xs-font-size13 xs-line-height-22">Hic molestias ea quibusdam eos.Fugiat enim doloremque aut nequenon et debitis iure. Corruptirecusandae ducimus enim.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services