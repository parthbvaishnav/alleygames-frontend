import React, { useEffect } from 'react'
import {  blogpostimage1} from '../../utils/ImagesLoad'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBlogList } from '../../utils/indexService';
import Loader from '../../components/loader/loader';

const BlogDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const blogDataSingle = useSelector((state) => state.blogSingle.blogSingle);
    const loading = useSelector((state) => state.status.loading);
    const error = useSelector((state) => state.status.error);
    useEffect(() => {
        dispatch(getSingleBlogList(id));
    }, [dispatch,id ]);

  return (
    <>
    {loading && <Loader/>}
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
                                                <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
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
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="img-area blogDetailsSection">
                                <img src={blogDataSingle.Blog_cover_image || blogpostimage1} alt={blogDataSingle.Blog_cover_image}/>
                            </div>
                            <br/><br/>
                            <h4>{blogDataSingle.Blog_title}</h4>
                            <br/>
                            <div className="row gameDescriptionSection justify-content-center">    
                                <div dangerouslySetInnerHTML={{ __html: blogDataSingle?.Blog_description }}></div>
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
