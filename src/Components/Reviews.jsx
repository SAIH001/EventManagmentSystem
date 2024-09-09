import React from 'react'

const Reviews = () => {
  return (
    <section class="testimonial bg-lightgrey">
    <div class="container">
        <div class="section-title w-lg-60 m-auto text-center pb-5">
            <p class="mb-1  pink">OUR TESTIMONIALS</p>
            <h2 class="mb-1">WHAT PEOPLES'S SAYS ABOUT <span class="pink">EVENTEN</span></h2>
            <p class="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id
                est laborum.
            </p>
        </div>
        <div class="slider testimonial-slide">
            <div class="box1 mx-4 p-6 rounded bg-white">
                <div class="testimonial-content position-relative">
                    <i class="fa fa-quote-left position-absolute" aria-hidden="true"></i>
                    <p class="my-6 position-relative w-md-75 m-6">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="testimonial-bio d-flex align-items-center">
                    <img src="images/speakers/1.jpg" alt class="bio-img me-5 rounded-circle float-start"/>
                    <div>
                        <p class="mb-1 fw-semibold black">DANIEL FRANKIE</p>
                        <p>Manager</p>
                    </div>
                </div>
            </div>
            <div class="box2 mx-4 p-6 rounded bg-white">
                <div class="testimonial-content position-relative">
                    <i class="fa fa-quote-left position-absolute" aria-hidden="true"></i>
                    <p class="my-6 position-relative w-md-75 ms-6">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="testimonial-bio d-flex align-items-center">
                    <img src="images/speakers/4.jpg" alt class="bio-img me-5 rounded-circle float-start"/>
                    <div>
                        <p class="mb-1 fw-semibold black">EMANUEL KELTON</p>
                        <p>Planner</p>
                    </div>
                </div>
            </div>
            <div class="box3 mx-4 p-6 rounded bg-white">
                <div class="testimonial-content position-relative">
                    <i class="fa fa-quote-left position-absolute" aria-hidden="true"></i>
                    <p class="my-6 position-relative w-md-75 ms-6">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="testimonial-bio d-flex align-items-center">
                    <img src="images/speakers/2.jpg" alt class="bio-img me-5 rounded-circle float-start"/>
                    <div>
                        <p class="mb-1 fw-semibold black">ROYLOR HENK</p>
                        <p>Director</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Reviews