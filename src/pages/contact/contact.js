import React from 'react'
import { emailicon, facebook, infoicon1, infoicon2, instagram, rightarrow2, security, twitter } from '../../utils/ImagesLoad'

const Contact = () => {
  return (
    <>
    <div className="log-reg">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="modal fade" id="loginMod">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header justify-content-center">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <ul className="nav log-reg-btn d-none justify-content-around">
                                    <li className="bottom-area" role="presentation">
                                        <button className="nav-link" id="regArea-tab" data-bs-toggle="tab" data-bs-target="#regArea" type="button" role="tab" aria-controls="regArea" aria-selected="false">
                                            SIGN UP
                                        </button>
                                    </li>
                                    <li className="bottom-area" role="presentation">
                                        <button className="nav-link active" id="loginArea-tab" data-bs-toggle="tab" data-bs-target="#loginArea" type="button" role="tab" aria-controls="loginArea" aria-selected="true">
                                            LOGIN
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="loginArea" role="tabpanel" aria-labelledby="loginArea-tab">
                                        <div className="login-reg-content">
                                            <div className="modal-body">
                                                <div className="form-area">
                                                    <form action="#">
                                                        <div className="section-text text-center">
                                                            <h3 className="title">Welcome Back</h3>
                                                            <p>Not a member ? <a href="javascript:void(0)" className="reg-btn">Register</a></p>
                                                        </div>
                                                        <div className="input-area d-flex align-items-center">
                                                            <img src={emailicon} alt="icon"/>
                                                            <input type="text" placeholder="Email"/>
                                                        </div>
                                                        <div className="input-area d-flex align-items-center">
                                                            <img src={security} alt="icon"/>
                                                            <input type="text" placeholder="Password"/>
                                                        </div>
                                                        <div className="checkbox-item d-flex justify-content-between">
                                                            <label className="checkbox-single d-flex align-items-center">
                                                                <span className="content-area">
                                                                    <span className="checkbox-area d-flex">
                                                                        <input type="checkbox"/>
                                                                        <span className="checkmark"></span>
                                                                    </span>
                                                                    <span className="item-title d-flex align-items-center">
                                                                        <span>Remember me</span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <a href="javascript:void(0)">Forget Password</a>
                                                        </div>
                                                        <div className="btn-area text-center">
                                                            <a href="javascript:void(0)" className="cmn-btn mt-4">Login
                                                                <i className="icon-d-right-arrow-2"></i>
                                                            </a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="regArea" role="tabpanel" aria-labelledby="regArea-tab">
                                        <div className="login-reg-content regMode">
                                            <div className="modal-body">
                                                <div className="form-area">
                                                    <form action="#">
                                                        <div className="section-text text-center">
                                                            <h5 className="sub-title">Ready to get started?</h5>
                                                            <h3 className="title">Welcome Bonus €1,500 + 270 FS</h3>
                                                            <p>Already have an member ? <a href="javascript:void(0)" className="log-btn">Login</a></p>
                                                        </div>
                                                        <div className="input-area d-flex align-items-center">
                                                            <img src={emailicon} alt="icon"/>
                                                            <input type="text" placeholder="Email"/>
                                                        </div>
                                                        <div className="input-area d-flex align-items-center">
                                                            <img src={security} alt="icon"/>
                                                            <input type="text" placeholder="Password"/>
                                                        </div>
                                                        <div className="sidebar-single-item">
                                                            <label className="checkbox-single d-flex">
                                                                <span className="content-area">
                                                                    <span className="checkbox-area d-flex">
                                                                        <input type="checkbox" checked="checked"/>
                                                                        <span className="checkmark"></span>
                                                                    </span>
                                                                    <span className="item-title d-flex align-items-center">
                                                                        <span>I am at least 18 years of age and I have read,
                                                                            accepted and agreed to the <u><a href="javascript:void(0)">Privacy Policy</a>,
                                                                                Bonus T&C, <a href="javascript:void(0)">Terms and Conditions</a></u>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <label className="checkbox-single d-flex align-items-center">
                                                                <span className="content-area">
                                                                    <span className="checkbox-area d-flex">
                                                                        <input type="checkbox"/>
                                                                        <span className="checkmark"></span>
                                                                    </span>
                                                                    <span className="item-title d-flex align-items-center">
                                                                        <span>I want to receive promotions by e-mail.</span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <div className="btn-area text-center">
                                                                <a href="javascript:void(0)" className="cmn-btn mt-4">Get Start Now
                                                                    <i className="icon-d-right-arrow-2"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="banner-section inner-banner contact">
        <div className="overlay">
            <div className="banner-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10">
                            <div className="main-content">
                                <h1>Contact</h1>
                                <div className="breadcrumb-area">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb d-flex align-items-center">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item"><a href="javascript:void(0)">Pages</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="get-in-touch">
        <div className="overlay pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-text">
                            <h5 className="sub-title">Contact</h5>
                            <h2 className="title">Get in Touch</h2>
                        </div>
                        <div className="cus-mar d-flex justify-content-between align-items-center">
                            <div className="single-box">
                                <div className="icon-area">
                                    <img src={infoicon1} alt="icon"/>
                                </div>
                                <h5>Visit Us</h5>
                                <p>1420 Grant Road, Frankton Queenstown, New Zealand</p>
                            </div>
                            <div className="single-box">
                                <div className="icon-area">
                                    <img src={infoicon2} alt="icon"/>
                                </div>
                                <h5>Get in Touch</h5>
                                <p className="phone-email">+123 456 789 0245</p>
                                <p className="phone-email"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="157d7c55777c6f7067743b7c7a">[email&#160;protected]</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form action="#">
                            <div className="col-12">
                                <div className="single-input">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" placeholder="John Doe" autocomplete="off"/>
                                </div>
                                <div className="single-input">
                                    <label for="email">Email</label>
                                    <input type="text" id="email" placeholder="your@gmail.com" autocomplete="off"/>
                                </div>
                                <div className="single-input">
                                    <label for="message">Message</label>
                                    <textarea cols="30" id="message" rows="4" placeholder="Type something here"></textarea>
                                </div>
                                <div className="btn-area text-center">
                                    <button className="cmn-btn">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="faqs-section contact">
        <div className="overlay pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="section-area">
                            <h5 className="sub-title">FAQ Questions</h5>
                            <h2 className="title">Discover the most commonly asked questions</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion" id="accordionFaqs">
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        What is Bizera Lottery?
                                    </button>
                                </h6>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFaqs">
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How does Bizera Lottery?
                                    </button>
                                </h6>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFaqs">
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        When Lottery start?
                                    </button>
                                </h6>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFaqs">
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How can participate in Lottery?
                                    </button>
                                </h6>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFaqs">
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        What is the prize?
                                    </button>
                                </h6>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionFaqs">
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="social-media">
        <div className="overlay pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-12">
                        <div className="section-text text-center">
                            <h5 className="sub-title">Social Media</h5>
                            <h2 className="title">Follow us on</h2>
                        </div>
                    </div>
                </div>
                <div className="row cus-mar">
                    <div className="col-xl-4 col-md-6">
                        <div className="single-box">
                            <div className="icon-area">
                                <img src={facebook} alt="image"/>
                            </div>
                            <h4>Facebook</h4>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores. </p>
                            <a href="https://www.facebook.com/">
                                Follow US
                                <div className="icon-area">
                                    <img src={rightarrow2} alt="icon"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="single-box">
                            <div className="icon-area">
                                <img src={twitter} alt="image"/>
                            </div>
                            <h4>Twitter</h4>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores. </p>
                            <a href="https://www.twitter.com/">
                                Follow US
                                <div className="icon-area">
                                    <img src={rightarrow2} alt="icon"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="single-box">
                            <div className="icon-area">
                                <img src={instagram} alt="image"/>
                            </div>
                            <h4>Instagram</h4>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores. </p>
                            <a href="https://www.instagram.com/">
                                Follow US
                                <div className="icon-area">
                                    <img src={rightarrow2} alt="icon"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact
