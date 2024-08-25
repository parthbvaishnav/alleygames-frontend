import React from 'react'
import { HeaderLogo } from '../../utils/ImagesLoad'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faMapMarkerAlt, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faYoutube);

const Footer = () => {
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
                                <p>© Bizera, 2023 | Design by <a href="https://themeforest.net/user/pixelaxis">pixelaxis.</a> All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-5 d-flex justify-content-center justify-content-lg-end">
                            <div className="social">
                                <ul className="footer-link gap-2 d-flex align-items-center">
                                    <li><Link><i className="fb fab fa-facebook-f"></i></Link></li>
                                    <li><Link><i className="ins fab fa-instagram"></i></Link></li>
                                    <li><Link><i className="tw fab fa-twitter"></i></Link></li>
                                    <li><Link><i className="in fab fa-linkedin-in"></i></Link></li>
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
