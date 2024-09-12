import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogpostimage1, rightarrow2 } from '../../utils/ImagesLoad'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogList } from '../../utils/indexService';
import Loader from '../../components/loader/loader';

const Blog = () => {
    const dispatch = useDispatch();
    const blogData = useSelector((state) => state.blogList.blogList);
    const loading = useSelector((state) => state.status.loading);
    const error = useSelector((state) => state.status.error);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getAllBlogList(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // Calculate total number of pages, but only if blogData.count is defined
    const totalPages = blogData?.count ? Math.ceil(blogData.count / 5) : 0;

    return (
        <>
         {loading && <Loader/>}
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
                            {blogData.results && blogData.results.map((post) => (
                                <div className="col-lg-4" key={post.id}>
                                    <div className="single-box">
                                        <div className="img-area">
                                            <img src={post.Blog_cover_image || blogpostimage1} alt={post.Blog_title}/>
                                        </div>
                                        <div className="text-area">
                                            <Link to={`/blogdetails/${post.UUID}`}>
                                                <h4>{post.Blog_title}</h4>
                                            </Link>
                                            <p className='blogDetailsList' dangerouslySetInnerHTML={{ __html: post.Blog_description }}></p>
                                            <div className="btn-area">
                                                <Link to={`/blogdetails/${post.UUID}`}>
                                                    Read More
                                                    <div className="icon-area">
                                                        <img src={rightarrow2} alt="icon"/>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="col-lg-12 d-flex justify-content-center">
                                <nav aria-label="Page navigation" className="d-inline-flex justify-content-center align-items-center pagination-area mt-4">
                                    <Link className="page-btn previous" aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)} disabled={!blogData.previous}>
                                        <span>Previous</span>
                                    </Link>
                                    <ul className="pagination justify-content-center align-items-center">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <li className="page-item" key={index + 1}>
                                                <Link className={`page-link ${currentPage === index + 1 ? 'active' : ''}`} onClick={() => handlePageChange(index + 1)}>
                                                    {index + 1}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link className="page-btn next" aria-label="Next" onClick={() => handlePageChange(currentPage + 1)} disabled={!blogData.next}>
                                        <span>Next</span>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Blog
