import { Link } from "react-router-dom";
import { getAllBlogList } from "../../utils/indexService";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/loader";
import { blogpostimage1, rightarrow2 } from "../../utils/ImagesLoad";

const Blog = () => {
    const dispatch = useDispatch();
    const blogData = useSelector((state) => state.blogList.blogList);
    const loading = useSelector((state) => state.status.loading);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getAllBlogList(currentPage));
    }, [dispatch, currentPage]);

    // Calculate total number of pages, only if blogData.count is defined
    const totalPages = blogData?.count ? Math.ceil(blogData.count / 6) : 0; // 6 posts per page

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            {loading && <Loader />}
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
                                            <img src={post.Blog_cover_image || blogpostimage1} alt={post.Blog_title} />
                                        </div>
                                        <div className="text-area">
                                            <Link to={`/blogdetails/${post.UUID}`}>
                                                <h4>{post.Blog_title}</h4>
                                            </Link>
                                            <p className="blogDetailsList" dangerouslySetInnerHTML={{ __html: post.Blog_description }}></p>
                                            <div className="btn-area">
                                                <Link to={`/blogdetails/${post.UUID}`}>
                                                    Read More
                                                    <div className="icon-area">
                                                        <img src={rightarrow2} alt="icon" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="col-lg-12 d-flex justify-content-center">
                                <nav aria-label="Page navigation" className="d-inline-flex justify-content-center align-items-center pagination-area mt-4">
                                    {/* Previous Button */}
                                    <Link 
                                        className={`page-btn previous ${currentPage === 1 ? 'disabled' : ''}`}
                                        aria-label="Previous"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto', opacity: currentPage === 1 ? 0.5 : 1 }}
                                    >
                                        <span>Previous</span>
                                    </Link>

                                    <ul className="pagination justify-content-center align-items-center">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <li className="page-item" key={index + 1}>
                                                <Link 
                                                    className={`page-link ${currentPage === index + 1 ? 'active' : ''}`} 
                                                    onClick={() => handlePageChange(index + 1)}
                                                >
                                                    {index + 1}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Next Button */}
                                    <Link 
                                        className={`page-btn next ${currentPage === totalPages ? 'disabled' : ''}`}
                                        aria-label="Next"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto', opacity: currentPage === totalPages ? 0.5 : 1 }}
                                    >
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
};

export default Blog;
