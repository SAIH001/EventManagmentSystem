import React from 'react'
import Overview from '../Components/Overview'
import Speakers from '../Components/Speakers'
import Shedule from '../Components/Shedule'
import Direction from '../Components/Direction'

const About = () => {
  return (
    <>
    <section class="banner page-banner position-relative pb-0">
    <div class="overlay">
    </div>
    <div class="container">
        <div class="page-title text-center position-relative py-11">
            <h2 class="text-white text-uppercase">About US</h2>
        </div>
    </div>
</section>

    <Overview/>
    <Speakers/>
    <Shedule/>
    <Direction/>




    </>
  )
}

export default About