import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getPrivacyPolicyData } from '../../utils/indexService';
import Loader from '../../components/loader/loader';

const PrivacyPolicy = () => {
    const dispatch = useDispatch();
    const privacyPolicyData = useSelector((state) => state.privacyPolicyList.privacyPolicyList);    
    const loading = useSelector((state) => state.status.loading);
    useEffect(() => {
        dispatch(getPrivacyPolicyData());
    }, []);
  return (
    <>
    {loading && <Loader/>}
    <div>       
        <section className="banner-section inner-banner contact">
            <div className="overlay">
                <div className="banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10">
                                <div className="main-content">
                                    <h2>Privacy Policy</h2>
                                    <div className="breadcrumb-area">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb d-flex align-items-center">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item"><Link>Pages</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
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
        <div className="container gameBoxSectionAbout mt-5">
            <div className="gap-4">
                <h1>Alley Games</h1>
                <div className="space-y-8">
                    <div dangerouslySetInnerHTML={{ __html: privacyPolicyData?.[0]?.Policy_description }}></div>                   
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PrivacyPolicy
