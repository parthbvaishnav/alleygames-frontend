import React, { useState } from 'react'
import { searchicon } from '../../utils/ImagesLoad'

const SearchFilter = (props) => {
  const [search, setSearch] = useState("")
  return (
        <div className="form-group input-area d-flex align-items-center">
            <input onKeyDown={(e)=>{              
              if(e.code=="Enter"){
                props.setSearchFilter(search)
              }
            }} onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder="Search Game" autoComplete="off"/>
            <button className="btn-area"  onClick={()=>{
              props.setSearchFilter(search)
            }}>
                <img src={searchicon} alt="icon"/>
            </button>
        </div>
  )
}

export default SearchFilter
