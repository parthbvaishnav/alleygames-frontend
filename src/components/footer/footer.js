import React from 'react'
import { FooterImage, HeaderLogo, SendIcon } from '../../utils/ImagesLoad'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faMapMarkerAlt, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faYoutube);

const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="footer-form">
                        <div className="section-area mb-30 text-center">
                            <h4 className="title">To Get Exclusive Benefits</h4>
                        </div>
                        <form action="#">
                            <div className="form-group input-area d-flex align-items-center">
                                <input type="text" placeholder="Enter your email address"/>
                                <button className="btn-area"><img src={SendIcon} alt="icon"/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-area pt-120">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer-top d-flex align-items-center justify-content-between">
                            <a href="index.html">
                                <img src={HeaderLogo} className="logo" alt="logo"/>
                            </a>
                            <div className="footer-box">
                                <ul className="footer-link d-flex align-items-center gap-4">
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                    <li><a href="terms-conditions.html">Terms of Service</a></li>
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
                                    <li><a href="javascript:void(0)"><i className="fb fab fa-facebook-f"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="ins fab fa-instagram"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="tw fab fa-twitter"></i></a></li>
                                    <li><a href="javascript:void(0)"><i className="in fab fa-linkedin-in"></i></a></li>
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
