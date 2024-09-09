import React from 'react'

const Faq = () => {
  return (
    <section class="faq pb-0 overflow-visible d-block position-relative z-1">
        <div class="overlay bg-blue opacity-25 z-n1">
        </div>
        <div class="container">
            <div>
                <div class="row">
                    <div class="col-lg-6 px-4 mb-2">
                        <div class="faq-general">
                            <div class="section-title pb-3 text-center text-lg-start">
                                <p class="mb-1 pink">GENERAL QUESTIONS</p>
                                <h2 class="mb-2 text-white">FREQUENT ASKED <span class="pink">QUESTIONS!!</span></h2>
                                <p class="text-white">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                            <div class="faq-accordion p-4 mb-5 bg-white rounded">
                                <div class="accordion accordion-faq" id="accordionFlushExample">
                                    <div class="accordion-item ">
                                        <p class="accordion-header p-4">
                                            <button class="accordion-button collapsed fw-semibold p-0" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                                aria-expanded="false" aria-controls="flush-collapseOne">
                                                GLOBAL SEARCH ENGINE OPTIMIZATION
                                            </button>
                                        </p>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body bg-lightgrey p-6">Phasellus quis diam sed ligula
                                                sagittis tempus
                                                malesuada sed eros. Quisque elementum, diam et pellentesque volutpat,
                                                ligula diam suscipit
                                                ligula, sit amet hendrerit arcu ipsum eu nulla. Morbi sed molestie
                                                nulla, ac viverra turpis.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <p class="accordion-header p-4">
                                            <button class="accordion-button collapsed  fw-semibold p-0" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                                WE OWN AND SHAPE OUR FUTURE
                                            </button>
                                        </p>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body bg-lightgrey p-6">Placeholder content for this
                                                accordion, which is
                                                intended to demonstrate the <code>.accordion-flush</code> class. This is
                                                the second item's
                                                accordion body. Let's imagine this being filled with some actual
                                                content.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <p class="accordion-header p-4">
                                            <button class="accordion-button collapsed fw-semibold p-0" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                                aria-expanded="false" aria-controls="flush-collapseThree">
                                                HOW LONG DO I GET SUPPORT & UPDATES?
                                            </button>
                                        </p>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body bg-lightgrey p-6">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Curabitur interdum, arcu a accumsan
                                                vulputate, leo diam sodales mi, et bibendum mi nunc at lorem. Etiam ut
                                                nisi hendrerit,</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6  align-self-center px-4">
                        <div class="faq-form bg-white rounded shadow-lg p-6 mb-mi">
                            <div class="form-title mb-4">
                                <p class="mb-1 pink">TICKET BOOK</p>
                                <h2 class="mb-2">LET'S RESERVE A <span class="pink">SEAT</span></h2>
                                <p class="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit
                                    anim id est laborum.</p>
                            </div>
                            <div class="form-content justify-content-between">
                                <form>
                                    <input type="text" placeholder="Full Name" class="mb-5"/>
                                    <div class=" row justify-content-around">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="phone-no">
                                                <input type="tel" placeholder="Phone No." class="mb-5"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="emai">
                                                <input type="email" placeholder="Email Address" class="mb-5" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <textarea placeholder="How may we help you?" rows="4" class="mb-5"></textarea>
                                    <button class="btn mb-5" id="sub-btn">SEND MESSAGE</button>
                                </form>
                                <small>*Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero hic facere,
                                    minima impedit ea
                                    quasi nemo odio.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Faq