import React from 'react'
import { BlogImage1, BlogImage2, blogpostimage1, emailicon, profileimage, rightarrow2, security } from '../../utils/ImagesLoad'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
  return (
    <>
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
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
                                <img src={blogpostimage1} alt="blogpostimage1"/>
                            </div>
                            <div className="mt-40 row justify-content-between">
                                <div className="col-lg-4 col-md-6 col-sm-9">
                                    <div className="sidebar-area text-center position-sticky">
                                        <div className="img-area">
                                            <img src={profileimage} alt="profileimage"/>
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
                                                <img src={blogpostimage1} alt="blogpostimage1"/>
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
                                                <img src={blogpostimage1} alt="blogpostimage1"/>
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
                                <Link to="/blog">View All Articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-mar">
                        <div className="col-lg-6">
                            <div className="single-box">
                                <div className="img-area">
                                    <img src={blogpostimage1} alt="blogpostimage1"/>
                                </div>
                                <div className="text-area">
                                    <h6>Casino game -- <span className="date">July 15,2023</span></h6>
                                    <Link to="/blogdetails">
                                        <h4>Next Generation Dice and tips, tricks how to win crypto game</h4>
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <div className="btn-area">
                                        <Link to="/blogdetails">
                                            Read More
                                            <div className="icon-area">
                                                <img src={rightarrow2} alt="icon"/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-box">
                                <div className="img-area">
                                    <img src={blogpostimage1} alt="blogpostimage1"/>
                                </div>
                                <div className="text-area">
                                    <h6>Casino game -- <span className="date">May 4,2023</span></h6>
                                    <Link to="/blogdetails">
                                        <h4>8 Tips On How To Make Money crypto Casino Games</h4>
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <div className="btn-area">
                                        <Link to="/blogdetails">
                                            Read More
                                            <div className="icon-area">
                                                <img src={rightarrow2} alt="icon"/>
                                            </div>
                                        </Link>
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
