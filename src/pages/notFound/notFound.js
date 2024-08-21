import React from 'react'
import { NotFoundImage } from '../../utils/ImagesLoad'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section class="error-section">
        <div class="overlay pt-120 pb-120">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7">
                        <div class="section-area pt-120 pb-120 text-center">
                            <div class="img-box">
                                <img src={NotFoundImage} alt="Image"/>
                            </div>
                            <h3 class="title">Oops, Something went wrong !</h3>
                            <div class="btn-area mt-30">
                                <Link to={'/'} class="cmn-btn">
                                    <i class="icon-d-right-arrow-2"></i>
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
