import React from 'react'
import { NotFoundImage } from '../../utils/ImagesLoad'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="error-section">
        <div className="overlay pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-7">
                        <div className="section-area pt-120 pb-120 text-center">
                            <div className="img-box">
                                <img src={NotFoundImage} alt="NotFoundImage"/>
                            </div>
                            <h3 className="title">Oops, Something went wrong !</h3>
                            <div className="btn-area mt-30">
                                <Link to={'/'} className="cmn-btn">
                                    <i className="icon-d-right-arrow-2"></i>
                                    Back To Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NotFound
