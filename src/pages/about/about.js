import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/loader';
import { getAboutUsData } from '../../utils/indexService';
import ParticleBg from '../../components/particleBg/particleBg';

const About = () => {
    const dispatch = useDispatch();
    const aboutUsData = useSelector((state) => state.aboutusList.aboutusList);    
    const loading = useSelector((state) => state.status.loading);
    useEffect(() => {
        dispatch(getAboutUsData());
    }, []);
  return (
    <>
     {loading && <Loader/>}
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
        <ParticleBg/>
        <div className="container gameBoxSectionAbout ptb-100">
            <div className="gap-4">
                <h1>Alley Games</h1>
                <div className="space-y-8">
                    <div dangerouslySetInnerHTML={{ __html: aboutUsData?.[0]?.About_us }}></div>
                </div>
            </div>
        </div>        
    </>
  )
}

export default About
