import React from 'react'

import Logo from '../images/logo/1.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <header class="main_header_area position-absolute w-100">
    <div class="header-content text-white">
        <div class="container">
            <div class="header-content-inner py-2">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="social-links ">
                            <ul class="m-0 p-0">
                                <li class="d-inline">
                                    <a href="#">
                                        <i class="fa fa-facebook border-social rounded-circle text-center"></i>
                                    </a>
                                </li>
                                <li class="d-inline">
                                    <a href="#">
                                        <i class="fa fa-twitter border-social rounded-circle text-center"></i>
                                    </a>
                                </li>
                                <li class="d-inline">
                                    <a href="#">
                                        <i class="fa fa-google border-social rounded-circle text-center"></i>
                                    </a>
                                </li>
                                <li class="d-inline">
                                    <a href="#">
                                        <i class="fa fa-instagram border-social rounded-circle text-center"></i>
                                    </a>
                                </li>
                                <li class="d-inline">
                                    <a href="#">
                                        <i class="fa fa-youtube-play border-social rounded-circle text-center "></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="header-event-info text-end">
                            <ul class="m-0 p-0">
                                <li class="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                                    <i class="fa fa-phone pe-1"></i>
                                    <small>+33 877 554 332</small>
                                </li>
                                <li class=" px-2 border-end d-inline border-lightgrey border-opacity-50">
                                    <i class="fa fa-envelope-o pe-1"></i>
                                    <small><a href=""
                                            class="__cf_email__"
                                            data-cfemail="">[email&#160;protected]</a></small>
                                </li>
                                <li class=" px-2 d-inline ">
                                    <i class="fa fa-clock-o pe-1"></i>
                                    <small>Mon - Fri: 9:00 - 18:30</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="header_menu " id="header_menu">
        <div class="container">
            <nav class="navbar navbar-expand-lg py-2">
                <div class="row">
                    <div class="col-lg-2 col-md-6">
                        <div class="navbar-brand m-0">
                            <img src={Logo} alt="Logo" class="w-100"/>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6 ">
                        <div class="collapse navbar-collapse justify-content-center"
                            id="bs-example-navbar-collapse-1">
                            <ul class="navbar-nav align-items-center" id="responsive-menu">
                                <li class="nav-item ">
                                    <Link class="nav-link px-2 my-4 py-0 text-white" aria-current="page"
                                        to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link px-2 my-4 py-0 text-white" to="/about">About</Link>
                                </li>
                                <li class="nav-item ">
                                    <Link class="nav-link px-2 my-4 py-0 text-white" to="/speakers"  >
                                        Speaker
                                    </Link>
                                
                                </li>
                                <li class="nav-item ">
                                    <Link class="nav-link  px-2 my-4 py-0 text-white" to="/shedule">
                                        Schedule
                                    </Link>
                                  
                                </li>
                             
                               
                                <li class="nav-item">
                                    <Link class="nav-link px-2 my-4 py-0 text-white" to="/contactus">Contact</Link>
                                </li>
                                <li class="nav-item  ">
                                    <Link class="nav-link  px-2 my-4 py-0 text-white" to="/registration">
                                        Registration
                                    </Link>
                                   
                                </li>
                                <li class="nav-item  ">
                                    <Link class="nav-link  px-2 my-4 py-0 text-white" to="/login">
                                        Login
                                    </Link>
                                   
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="text-end">
                          
                           
                            <a class="btn btn3" href="book-now.html">Buy Ticket<i
                                    class="fa fa-long-arrow-right ms-4"></i></a>
                        </div>
                    </div>
                    <div id="slicknav-mobile"></div>
                </div>
            </nav>
        </div>
        <div id="search1">
            <button type="button" class="close">×</button>
            <form>
                <input class="form-control form-control-lg rounded text-white" placeholder="Search..."/>
            </form>
            <button type="button" class="btn"><i class="fa fa-search text-white" aria-hidden="true"></i></button>
        </div>
    </div>

</header>
  )
}

export default Navbar