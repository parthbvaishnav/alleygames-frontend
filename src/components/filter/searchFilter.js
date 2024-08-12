import React from 'react'
import { searchicon } from '../../utils/ImagesLoad'

const SearchFilter = () => {
  return (
    <form action="#">
        <div className="form-group input-area d-flex align-items-center">
            <input type="text" placeholder="Search Game" autoComplete="off"/>
            <button className="btn-area">
                <img src={searchicon} alt="icon"/>
            </button>
        </div>
    </form>
  )
}

export default SearchFilter
