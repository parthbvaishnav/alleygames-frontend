import React from 'react'
import { HeaderFavLogo, HeaderLogo, LoaderLogo } from '../../utils/ImagesLoad'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

library.add(faBars, faSearch, faFacebookF, faTwitter, faLinkedinIn, faYoutube);

const MainHeader = () => {
  return (
    <>
        <header className="header-section">
            <div className="overlay">
                <div className="container">
                    <div className="row d-flex header-area">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="index.html">
                                <img src={HeaderFavLogo} className="fav d-none d-lg-block d-xl-none" alt="fav"/>
                                <img src={HeaderLogo} className="logo d-block d-lg-none d-xl-block" alt="logo"/>
                            </a>
                            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbar-content">
                                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="games.html">Games</a>
                                    </li>
                                    <li className="nav-item dropdown main-navbar">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" data-bs-auto-close="outside">Lottery</a>
                                        <ul className="dropdown-menu main-menu shadow">
                                            <li><a className="nav-link" href="lottery.html">Lottery</a></li>
                                            <li><a className="nav-link" href="lottery-details.html">Lottery Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown main-navbar">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" data-bs-auto-close="outside">Pages</a>
                                        <ul className="dropdown-menu main-menu shadow">
                                            <li><a className="nav-link" href="about-us.html">About Us</a></li>
                                            <li className="dropend sub-navbar">
                                                <a href="javascript:void(0)" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">Promotions</a>
                                                <ul className="dropdown-menu sub-menu shadow">
                                                    <li><a className="nav-link" href="promotions.html">Promotions</a></li>
                                                    <li><a className="nav-link" href="promotions-details.html">Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropend sub-navbar">
                                                <a href="javascript:void(0)" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">Tournaments</a>
                                                <ul className="dropdown-menu sub-menu shadow">
                                                    <li><a className="nav-link" href="tournaments.html">Tournaments</a></li>
                                                    <li><a className="nav-link" href="tournaments-result.html">Result</a></li>
                                                    <li><a className="nav-link" href="tournaments-details.html">Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a className="nav-link" href="terms-conditions.html">Terms Conditions</a></li>
                                            <li><a className="nav-link" href="privacy-policy.html">Privacy Policy</a></li>
                                            <li><a className="nav-link" href="error.html">Error</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown main-navbar">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" data-bs-auto-close="outside">Blog</a>
                                        <ul className="dropdown-menu main-menu shadow">
                                            <li><a className="nav-link" href="blog.html">Blog</a></li>
                                            <li><a className="nav-link" href="blog-2.html">Blog Second</a></li>
                                            <li><a className="nav-link" href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact</a>
                                    </li>
                                </ul>
                                <div className="right-area header-action d-flex align-items-center max-un">
                                    <button type="button" className="login" data-bs-toggle="modal" data-bs-target="#loginMod">
                                        Sign In
                                    </button>
                                    <button type="button" className="cmn-btn reg" data-bs-toggle="modal" data-bs-target="#loginMod">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default MainHeader
