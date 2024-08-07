import React from 'react'
import { Link } from 'react-router-dom'
import { aboutusillus, aboutusobj1, aboutusobj2, emailicon, getstartillus, playicon, security, whychooseicon1 } from '../../utils/ImagesLoad'

const About = () => {
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
    <section className="banner-section inner-banner about-us">
        <div className="overlay">
            <div className="banner-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10">
                            <div className="main-content">
                                <h1>About Us</h1>
                                <div className="breadcrumb-area">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb d-flex align-items-center">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item"><a href="javascript:void(0)">Pages</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
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
    <section className="about-us">
        <div className="overlay pt-120">
            <div className="shape-item">
                <img src={aboutusobj2} alt="image"/>
            </div>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5 position-relative order-lg-0 order-1">
                        <div className="sec-img position-relative d-rtl">
                            <img src={aboutusillus} className="max-un bg-img" alt="image"/>
                            <div className="popup-area">
                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                    <a className="mfp-iframe popupvideo position-absolute" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                        <img src={playicon} alt="icon"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="shape-area">
                            <img src={aboutusobj1} alt="image"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="lottery-content">
                            <div className="section-header">
                                <h5 className="sub-title">An adventure to explore the galaxy</h5>
                                <h2 className="title">Bringing open-world galaxy to all gamers worldwide</h2>
                                <p>Bizera is a community-based crypto casino that offers their players the best online casino experience possible!At Bizera, we are convinced that blockchain will change the online crypto gambling industry forever! Jump in
                                    and check it out for yourself! Have fun and earn crypto!</p>
                            </div>
                            <div className="counter-area">
                                <div className="row cus-mar">
                                    <div className="col-6">
                                        <div className="single-box">
                                            <h3><span className="counter">5000</span>+</h3>
                                            <p>Premium casino games</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="single-box">
                                            <h3><span className="counter">24</span>/<span className="counter">7</span></h3>
                                            <p>Industry Best Support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="why-choose">
        <div className="overlay pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-12">
                        <div className="section-header text-center">
                            <h5 className="sub-title">Why choose it</h5>
                            <h2 className="title">We value all our players and we understand the thrill of online gaming</h2>
                            <p>Mind-blowing bonuses. Zero withdrawal fees. Flash-like customer support.</p>
                        </div>
                    </div>
                </div>
                <div className="row cus-mar">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-box">
                            <div className="icon-area">
                                <img src={whychooseicon1} alt="image"/>
                            </div>
                            <h5>VIP Membership</h5>
                            <p>Become a Premium VIP Member for a month and enjoy the benefits that will enrich your gambling adventures.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-box">
                            <div className="icon-area">
                                <img src={whychooseicon1} alt="image"/>
                            </div>
                            <h5>Provably fair</h5>
                            <p>We utilize the industry standard for provably fair gaming. Verify drawings with our or 3rd party verification tools.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-box">
                            <div className="icon-area">
                                <img src={whychooseicon1} alt="image"/>
                            </div>
                            <h5>Fast Withdrawals</h5>
                            <p>Get your winnings paid out to your wallet on your own terms. Simply select the withdrawal speed and confirm.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-box">
                            <div className="icon-area">
                                <img src={whychooseicon1} alt="image"/>
                            </div>
                            <h5>Progressive jackpots</h5>
                            <p>With every bet on dice and roulette you have the chance to win our ever growing jackpot.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-box">
                            <div className="icon-area">
                                <img src={whychooseicon1} alt="image"/>
                            </div>
                            <h5>Low house edge</h5>
                            <p>You’re here to win often and a lot. Our games have extremely low house edge, starting at only 1%.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-box">
                            <div className="icon-area">
                                <img src={whychooseicon1} alt="image"/>
                            </div>
                            <h5>Secure and private</h5>
                            <p>We don’t collect sensitive private information such as bank accounts, which makes your stay with us safe and private.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="get-start pb-120">
        <div className="overlay pt-120">
            <div className="container wow fadeInUp">
                <div className="row justify-content-between align-items-end">
                    <div className="col-xl-5 col-lg-6">
                        <div className="star-form">
                            <form action="#">
                                <div className="section-header text-center">
                                    <h5 className="sub-title">Ready to get started?</h5>
                                    <h3 className="title">Welcome Bonus €1,500 + 270 FS</h3>
                                    <p>More and more winners are added every time! To locate the most recent winner's information</p>
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
                                    <div className="btn-area">
                                        <a href="javascript:void(0)" className="cmn-btn reg mt-4" data-bs-toggle="modal" data-bs-target="#loginMod">Get Start Now
                                            <i className="icon-d-right-arrow-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-5 text-center">
                        <img src={getstartillus} alt="Image"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
