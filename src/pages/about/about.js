import React from 'react'
import { Link } from 'react-router-dom'
import { aboutusillus, aboutusobj1, aboutusobj2,playicon, whychooseicon1 } from '../../utils/ImagesLoad'

const About = () => {
  return (
    <>
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
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item"><Link>Pages</Link></li>
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
                    <img src={aboutusobj2} alt="aboutusobj2"/>
                </div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 position-relative order-lg-0 order-1">
                            <div className="sec-img position-relative d-rtl">
                                <img src={aboutusillus} className="max-un bg-img" alt="aboutusillus"/>
                                <div className="popup-area">
                                    <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                        <a className="mfp-iframe popupvideo position-absolute" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                            <img src={playicon} alt="icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="shape-area">
                                <img src={aboutusobj1} alt="aboutusobj1"/>
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
                                    <img src={whychooseicon1} alt="whychooseicon1"/>
                                </div>
                                <h5>VIP Membership</h5>
                                <p>Become a Premium VIP Member for a month and enjoy the benefits that will enrich your gambling adventures.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <div className="icon-area">
                                    <img src={whychooseicon1} alt="whychooseicon1"/>
                                </div>
                                <h5>Provably fair</h5>
                                <p>We utilize the industry standard for provably fair gaming. Verify drawings with our or 3rd party verification tools.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <div className="icon-area">
                                    <img src={whychooseicon1} alt="whychooseicon1"/>
                                </div>
                                <h5>Fast Withdrawals</h5>
                                <p>Get your winnings paid out to your wallet on your own terms. Simply select the withdrawal speed and confirm.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <div className="icon-area">
                                    <img src={whychooseicon1} alt="whychooseicon1"/>
                                </div>
                                <h5>Progressive jackpots</h5>
                                <p>With every bet on dice and roulette you have the chance to win our ever growing jackpot.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <div className="icon-area">
                                    <img src={whychooseicon1} alt="whychooseicon1"/>
                                </div>
                                <h5>Low house edge</h5>
                                <p>You’re here to win often and a lot. Our games have extremely low house edge, starting at only 1%.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <div className="icon-area">
                                    <img src={whychooseicon1} alt="whychooseicon1"/>
                                </div>
                                <h5>Secure and private</h5>
                                <p>We don’t collect sensitive private information such as bank accounts, which makes your stay with us safe and private.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
