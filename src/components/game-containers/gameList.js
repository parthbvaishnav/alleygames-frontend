import React from 'react'
import { MemberBgImage, TeamImage1, TeamImage2, TeamImage3, TeamImage4, TeamImage5, TeamImage6, TeamImage7, TeamImage8 } from '../../utils/ImagesLoad'
import { Link } from 'react-router-dom'

const GameList = () => {
  return (
    <section className="vs-team-wrapper vs-team-layout1 space-top newsletter-pb">
        <div className="container">
           

            <div className="pagination-wrapper pagination-layout1 mt-lg-30 mb-30">
                <ul>
                    <li><Link className="active"><span className="text">1</span></Link></li>
                    <li><Link><span className='text'>2</span></Link></li>
                    <li><Link><span className='text'>3</span></Link></li>
                    <li><Link><span className='text'>4</span></Link></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default GameList
