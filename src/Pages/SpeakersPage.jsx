import React from 'react'
import Sponser from '../Components/Sponser'
import TicketInvitation from '../Components/TicketInvitation'
import Speakers from '../Components/Speakers'

const SpeakersPage = () => {
  return (
  <>
  
  <section class="banner page-banner position-relative pb-0">
    <div class="overlay">
    </div>
    <div class="container">
        <div class="page-title text-center position-relative py-11">
            <h2 class="text-white text-uppercase">OUR SPEAKERS </h2>
        </div>
    </div>
</section>
<Speakers/>
<TicketInvitation/>
<Sponser/>
  
  </>
  )
}

export default SpeakersPage