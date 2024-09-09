import React from 'react'

const Footer = () => {
  return (
   
    <footer class="pt-9 text-center text-white position-relative z-1">
        <div class="overlay z-n1 start-0"></div>
        <div class="container">
            <div class="footer-content w-lg-50 m-auto">
                <div class="footer-logo mb-4 pt-1">
                    <a href="index.html"><img src="images/logo/1.png" class="w-50" alt="footer-logo"/></a>
                </div>
                <div class="footer-disciption border-bottom border-white border-opacity-25 m-auto mb-6">
                    <p class=" mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore.</p>
                    <div class="footer-socials pb-6">
                        <ul class="m-0 p-0">
                            <li class="d-inline me-2">
                                <a class="d-inline-block rounded-circle bg-white  bg-opacity-25">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li class="d-inline me-2">
                                <a class="d-inline-block rounded-circle bg-white  bg-opacity-25">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li class="d-inline me-2">
                                <a class="d-inline-block rounded-circle bg-white  bg-opacity-25">
                                    <i class="fa fa-youtube-play"></i>
                                </a>
                            </li>
                            <li class="d-inline me-2">
                                <a class="d-inline-block rounded-circle bg-white  bg-opacity-25">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-menu pb-9">
                    <ul class="p-0 m-0">
                        <li class="d-inline mx-2"><a href="about.html"><small>About Event</small></a></li>
                        <li class="d-inline mx-2"><a href><small>Services</small></a></li>
                        <li class="d-inline mx-2"><a href="speaker_list.html"><small>Speakers</small></a></li>
                        <li class="d-inline mx-2"><a href="event_list.html"><small>Schedule</small></a></li>
                        <li class="d-inline mx-2"><a href="pricing.html"><small>Ticket Pricing</small></a></li>
                        <li class="d-inline mx-2"><a href="contact.html"><small>Contact Us</small></a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright pb-6 pt-1">
                <small>Copyright &#169;2024 Eventen. All Rights Reserved Copyright</small>
            </div>
        </div>
    </footer>
  )
}

export default Footer