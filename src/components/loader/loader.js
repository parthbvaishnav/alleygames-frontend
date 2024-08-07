import React from 'react'
import { LoaderLogo } from '../../utils/ImagesLoad'

const Loader = () => {
  return (
    <div>
       <div className="preloader">
            <div className="preloader-inner">
                <div className="loader-logo">
                    <img src={LoaderLogo} alt="Loader"/>
                </div>
                <div className="loader-wrap pt-4">
                    <span className="loader"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loader
