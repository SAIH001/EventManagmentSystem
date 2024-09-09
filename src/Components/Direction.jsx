import React from 'react'

const Direction = () => {
  return (

    <section class="direction pb-0">
    <div class="container">
        <div class="section-title text-center pb-2 w-lg-60 m-auto">
            <p class="mb-1  pink">REACH US</p>
            <h2 class="mb-1">GET DIRECTION TO THE <span class="pink">EVENT HALL</span></h2>
            <p class="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim
                id est laborum.
            </p>
        </div>
        <div class="direction-content">
            <div class="direction-info">
                <div class="row">
                    <div class="col-lg-5 col-md-5 px-1">
                        <div class="p-6 d-flex text-white w-100 h-100 rounded bg-pink ">
                            <div class="justify-content-center align-self-center ms-6">
                                <h5 class="text-white pb-2">EVENT VENUE:</h5>
                                <p class="pb-5 m-0">Galleria mall conference center</p>
                                <h5 class="text-white pb-2">ADDRESS:</h5>
                                <p class="pb-5 m-0">19 By Pass NR, Bali, Indonesia, BC 22196</p>
                                <h5 class="text-white pb-2">RECEPTION INFO:</h5>
                                <p class="pb-5 m-0">Booking: (+62) 1919-2020</p>
                                <a>Get Directions</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7 px-1 py-2">
                        <iframe height="400" class="rounded w-100"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(mangal%20bazar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
            </div>
            <div class="location-gallery">
                <div id="selector" class="row pt-1 justify-content-center">
                    <div class="item col-lg-4 col-md-6 p-1" data-src="images/group/4.jpg">
                        <a><img src="images/thumbnail/4.jpg" class="w-100 rounded"
                                alt="VR Presentation and conference"/></a>
                    </div>
                    <div class="item col-lg-4 col-md-6 p-1" data-src="images/group/7.jpg">
                        <a><img src="images/thumbnail/7.jpg" class="w-100 rounded"
                                alt="VR Presentation and conference"/></a>
                    </div>
                    <div class="item col-lg-4 col-md-6 p-1" data-src="images/group/1.jpg">
                        <a><img src="images/thumbnail/1.jpg" class="w-100 rounded"
                                alt="VR Presentation and conference"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Direction