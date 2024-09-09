import React from 'react'

const Registration = () => {
  return (
    <>
    <section class="banner page-banner position-relative pb-0">
        <div class="overlay">
        </div>
        <div class="container">
            <div class="page-title text-center position-relative py-11">
                <h2 class="text-white">Get A Account</h2>
            </div>
        </div>
    </section>


    <section class="contact">
        <div class="container">
            <div class="contact-inner text-center text-md-start">
                <div class="row g-md-5 gy-5 align-items-center">
                    <div class="col-lg-4 col-md-5">
                        <div class="contact-event-info p-8 text-white h-100 rounded bg-pink">
                            <div class="event-venue pb-5">
                                <h5 class="text-white pb-2">EVENT VENUE:</h5>
                                <p class="m-0">Galleria mall conference center</p>
                            </div>
                            <div class="address pb-5">
                                <h5 class="text-white pb-2">ADDRESS:</h5>
                                <p class="m-0">19 By Pass NR, Bali, Indonesia, BC 22196</p>
                            </div>
                            <div class="reception-info pb-5">
                                <h5 class="text-white pb-2">RECEPTION INFO:</h5>
                                <p class="m-0">Booking: (+62) 1919-2020</p>
                            </div>
                            <div class="ticket-info pb-5">
                                <h5 class="text-white pb-2">Ticket INFO:</h5>
                                <p class="m-0">Booking: (+62) 1919-2020</p>
                                <p class="m-0">Email: <a
                                        href="https://htmldesigntemplates.com/cdn-cgi/l/email-protection"
                                        class="__cf_email__"
                                        data-cfemail="640112010a10010a2409050d084a070b09">[email&#160;protected]</a></p>
                            </div>
                            <div class="direction-link">
                                <a>Get Directions</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-7">
                        <div class="contact-form">
                            <div class="form-title mb-4">
                                <h2 class="mb-1">Drop a <span class="pink">line</span></h2>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                            <div class="form">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <input type="text" placeholder="Name" class="mb-3"/>
                                        </div>
                                        <div class="col-lg-6 ">
                                            <input type="email" placeholder="Email" class="mb-3" required/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <input type="password" placeholder="Password" class="mb-3"/>
                                        </div>
                                        <div class="col-lg-6 ">
                                            <input type="Password" placeholder="Confirm Password" class="mb-3" required/>
                                        </div>
                                    </div>
                                 
                                  
                                   
                                    <a class="btn">Create Account<i class="fa fa-long-arrow-right ms-3"></i></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="map-direction mt-5">
                    <iframe height="400" class="rounded w-100"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(mangal%20bazar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Registration