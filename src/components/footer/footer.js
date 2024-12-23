import React from 'react'
import { HeaderLogo } from '../../utils/ImagesLoad'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSocialMediaData } from '../../utils/indexService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

library.add( faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram, faPinterest );

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const dispatch = useDispatch();
    const { socialMedia, loading, error } = useSelector((state) => state.socialMedia);
    
    useEffect(() => {
        dispatch(getSocialMediaData());
    }, [dispatch]);

    const iconMap = {
        facebook: faFacebookF,
        instagram: faInstagram,
        twitter: faTwitter,
        linkedin: faLinkedinIn,
        youtube: faYoutube,
        pinterest: faPinterest,
    };

  return (
    <footer className="footer-section">
        <div className="container">           
            <div className="footer-area pt-120">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer-top d-flex align-items-center justify-content-between">
                            <Link to="/">
                                <img src={HeaderLogo} className="logo" alt="logo"/>
                            </Link>
                            <div className="footer-box">
                                <ul className="footer-link d-flex align-items-center gap-4">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/privacyPolicy">Privacy Policy</Link></li>
                                    <li><Link to="/TermsConditions">Terms of Service</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-7 d-flex justify-content-center justify-content-lg-start order-lg-0 order-1">
                            <div className="copyright text-center">
                                <p>© Alleygames, {currentYear} | Design by <Link to={"/"}>Alleygames.</Link> All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-5 d-flex justify-content-center justify-content-lg-end">
                            <div className="social">
                                <ul className="footer-link gap-2 d-flex align-items-center">
                                {socialMedia && socialMedia.length > 0 ? (
                                    socialMedia.map((link) => (
                                        <li key={link.id}>
                                            <Link to={link.Media_link} target='_blank'>
                                                <FontAwesomeIcon icon={iconMap[link.Social_Media]}/>
                                            </Link>
                                        </li>
                                    ))
                                    ) : (
                                        <li>No social links available</li> // Add a fallback if no data
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
