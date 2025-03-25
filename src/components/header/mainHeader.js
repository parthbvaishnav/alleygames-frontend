import React, { useEffect, useState } from 'react'
import { HeaderFavLogo, HeaderLogo } from '../../utils/ImagesLoad'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import SearchFilter from "../filter/searchFilter";

library.add(faBars, faSearch, faFacebookF, faTwitter, faLinkedinIn, faYoutube);

const MainHeader = () => {
  const [searchFilter, setSearchFilter] = useState("")
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
      setIsOpen(!isOpen);
  };

  const closeMenu = () => {
      setIsOpen(false);
  };
  useEffect(() => {
    if(searchFilter){
        navigate('/games', { state: { searchFilter }});
    }
  }, [searchFilter])
  
  return (
    <>
        <header className="header-section">
            <div className="overlay">
                <div className="container">
                    <div className="row d-flex header-area">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to="/" className="navbar-brand">
                                <img src={HeaderFavLogo} className="fav d-none d-lg-block d-xl-none" alt="fav" />
                                <img src={HeaderLogo} className="logo d-block d-lg-none d-xl-block" alt="logo" />
                            </Link>
                            <button 
                                className={`navbar-toggler ${isOpen ? "" : "collapsed"}`} 
                                type="button" 
                                onClick={handleToggle}
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbar-content">
                                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link" activeclassname="active" onClick={closeMenu}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/games" className="nav-link" activeclassname="active" onClick={closeMenu}>Category</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/about" className="nav-link" activeclassname="active" onClick={closeMenu}>About Us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/blog" className="nav-link" activeclassname="active" onClick={closeMenu}>Blog</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/contact" className="nav-link" activeclassname="active" onClick={closeMenu}>Contact</NavLink>
                                    </li>
                                </ul>
                                <div className='games-section'>
                                    <SearchFilter setSearchFilter={setSearchFilter} />
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
