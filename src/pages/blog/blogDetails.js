import React from 'react'
import { BlogImage1, BlogImage2, blogpostimage1, emailicon, profileimage, rightarrow2, security } from '../../utils/ImagesLoad'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
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
    <section className="banner-section inner-banner blog details">
        <div className="overlay">
            <div className="banner-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10">
                            <div className="main-content">
                                <h1>Blog Details</h1>
                                <div className="breadcrumb-area">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb d-flex align-items-center">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
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
    <section className="blog-details">
        <div className="overlay">
            <div className="container pb-120">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="img-area">
                            <img src={blogpostimage1} alt="image"/>
                        </div>
                        <div className="mt-40 row justify-content-between">
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="sidebar-area text-center position-sticky">
                                    <div className="img-area">
                                        <img src={profileimage} alt="image"/>
                                    </div>
                                    <h5>Sophie Moore</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    <div className="mt-30 d-flex justify-content-center">
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
                            <div className="col-lg-7">
                                <div className="single-item mb-60">
                                    <h3>8 Tips On How To Make Money crypto Casino Games</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                        facilisis. </p>
                                </div>
                                <div className="single-item mb-60">
                                    <h4>Online Gambling: Bitcoin vs Ethereum</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque cursus non sed morbi at gravida non. Aliquet lectus eget <u>varius nec dictum.</u></p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nulla blandit</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur ristique nulla blandit tincidunt.</li>
                                    </ul>
                                </div>
                                <div className="single-item mb-60">
                                    <h4>Crypto Games: Do They Exist?</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                        facilisis. </p>
                                    <div className="item-image text-center">
                                        <div className="img-area">
                                            <img src={blogpostimage1} alt="image"/>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className="single-item mb-60">
                                    <h4>Guide: Best Bitcoin Gambling Wallets</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque cursus non sed morbi at gravida non. Aliquet lectus eget <u>varius nec dictum.</u></p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nulla blandit</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur ristique nulla blandit tincidunt.</li>
                                    </ul>
                                    <div className="item-image text-center">
                                        <div className="img-area">
                                            <img src={blogpostimage1} alt="image"/>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className="single-item mb-60">
                                    <h4>Bitcoin Gambling with Online Casinos</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque cursus non sed morbi at gravida non. Aliquet lectus eget <u>varius nec dictum.</u></p>
                                </div>
                                <div className="single-item mb-60">
                                    <div className="quotation">
                                        <p className="xlr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <h5>Getting Started With Crypto Casino Game</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque cursus non sed morbi at gravida non. Aliquet lectus eget <u>varius nec dictum.</u></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="blog-post">
        <div className="overlay pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-text d-flex flex-wrap gap-3 align-items-center justify-content-between">
                            <h3>Latest Articles</h3>
                            <a href="blog.html">View All Articles</a>
                        </div>
                    </div>
                </div>
                <div className="row cus-mar">
                    <div className="col-lg-6">
                        <div className="single-box">
                            <div className="img-area">
                                <img src={blogpostimage1} alt="image"/>
                            </div>
                            <div className="text-area">
                                <h6>Casino game -- <span className="date">July 15,2023</span></h6>
                                <a href="blog-details.html">
                                    <h4>Next Generation Dice and tips, tricks how to win crypto game</h4>
                                </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua. </p>
                                <div className="btn-area">
                                    <a href="blog-details.html">
                                        Read More
                                        <div className="icon-area">
                                            <img src={rightarrow2} alt="icon"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-box">
                            <div className="img-area">
                                <img src={blogpostimage1} alt="image"/>
                            </div>
                            <div className="text-area">
                                <h6>Casino game -- <span className="date">May 4,2023</span></h6>
                                <a href="blog-details.html">
                                    <h4>8 Tips On How To Make Money crypto Casino Games</h4>
                                </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua. </p>
                                <div className="btn-area">
                                    <a href="blog-details.html">
                                        Read More
                                        <div className="icon-area">
                                            <img src={rightarrow2} alt="icon"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BlogDetails
