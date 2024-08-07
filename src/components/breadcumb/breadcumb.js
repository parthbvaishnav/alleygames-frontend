import React from 'react'
import { BreadcumbImage } from '../../utils/ImagesLoad'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faHouse, faCheckSquare);

const Breadcumb = () => {
  return (
    <div className="breadcumb-wrapper breadcumb-layout1 pt-200 pb-50"  data-overlay>
        <div className="container z-index-common">
            <div className="breadcumb-content text-center">
                <h1 className="breadcumb-title h1 text-white my-0">Pro-Players</h1>
                <h2 className="breadcumb-bg-title">Gamers</h2>
                <ul className="breadcumb-menu-style1 text-white mx-auto fs-xs">
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon icon={faHouse} />
                        Home
                      </Link>
                    </li>
                    <li className="active">Players</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Breadcumb
