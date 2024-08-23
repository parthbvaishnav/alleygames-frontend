import React from 'react'
import { HeaderFavLogo, HeaderLogo, LoaderLogo } from '../../utils/ImagesLoad'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

library.add(faBars, faSearch, faFacebookF, faTwitter, faLinkedinIn, faYoutube);

const MainHeader = () => {
  return (
    <>
        <header className="header-section">
            <div className="overlay">
                <div className="container">
                    <div className="row d-flex header-area">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to="/" className="navbar-brand">
                                <img src={HeaderFavLogo} className="fav d-none d-lg-block d-xl-none" alt="fav"/>
                                <img src={HeaderLogo} className="logo d-block d-lg-none d-xl-block" alt="logo"/>
                            </Link>
                            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbar-content">
                                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/allGame" className="nav-link" activeClassName="active">Games</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                                    </li>                                
                                </ul>
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
