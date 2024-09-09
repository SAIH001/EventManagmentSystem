import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Registration from './Pages/Registration'
import About from './Pages/About'
import EventShedule from './Pages/EventShedule'
import ContactUs from './Pages/ContactUs'
import SpeakersPage from './Pages/SpeakersPage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/registration' element={<Registration/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/shedule' element={<EventShedule/>}/>
<Route path='/contactus' element={<ContactUs/>}/>
<Route path='/speakers' element={<SpeakersPage/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
    
   
    </>
  )
}

export default App