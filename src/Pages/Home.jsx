import React from 'react'
import Navbar from '../Components/Navbar'
import Crousel from '../Components/Crousel'
import Overview from '../Components/Overview'
import Sponser from '../Components/Sponser'
import Service from '../Components/Service'
import Speakers from '../Components/Speakers'
import TicketInvitation from '../Components/TicketInvitation'
import Shedule from '../Components/Shedule'
import Reviews from '../Components/Reviews'
import Faq from '../Components/Faq'
import Direction from '../Components/Direction'
import Footer from '../Components/Footer'



const Home = () => {
  return (
    <>
   
   
   <Crousel/>
   <Overview/>
   <Sponser/>
   <Service/>
   <Speakers/>
   <TicketInvitation/>
   <Shedule/>
    <Faq/>
    
    </>
  )
}

export default Home