import React from 'react'
// import { BlogImage1, BlogImage2 } from '../../utils/ImagesLoad'
import { Link } from 'react-router-dom'
import { blogpostimage1, emailicon, rightarrow2, security } from '../../utils/ImagesLoad'

const Blog = () => {
  return (
   <>
        <section className="banner-section inner-banner blog">
            <div className="overlay">
                <div className="banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10">
                                <div className="main-content">
                                    <h1>Blog</h1>
                                    <div className="breadcrumb-area">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb d-flex align-items-center">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
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
        <section className="blog-post">
            <div className="overlay pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-box">
                                <div className="img-area">
                                    <img src={blogpostimage1} alt="blogpostimage"/>
                                </div>
                                <div className="text-area">
                                    <h6>Casino game -- <span className="date">April 8,2023</span></h6>
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
                        <div className="col-lg-6">
                            <div className="single-box">
                                <div className="img-area">
                                    <img src={blogpostimage1} alt="blogpostimage1"/>
                                </div>
                                <div className="text-area">
                                    <h6>Casino game -- <span className="date">June 5,2023</span></h6>
                                    <Link to="/blogdetails">
                                        <h4>Advantages of Playing Different Online Casino Games </h4>
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
                        <div className="col-lg-12 d-flex justify-content-center">
                            <nav aria-label="Page navigation" className="d-inline-flex justify-content-center align-items-center pagination-area mt-4">
                                <a className="page-btn previous" href="javascript:void(0)" aria-label="Previous">
                                    <span>Previous</span>
                                </a>
                                <ul className="pagination justify-content-center align-items-center">
                                    <li className="page-item"><a className="page-link" href="javascript:void(0)">01</a></li>
                                    <li className="page-item"><a className="page-link active" href="javascript:void(0)">02</a></li>
                                    <li className="page-item"><a className="page-link" href="javascript:void(0)">03</a></li>
                                </ul>
                                <a className="page-btn next" href="javascript:void(0)" aria-label="Next">
                                    <span>Next</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}

export default Blog
