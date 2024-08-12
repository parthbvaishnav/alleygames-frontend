import React from 'react'

const GameFilter = () => {
  return (
    <ul className="nav bottom-nav gap-3" role="tablist">
        <li className="nav-item" role="presentation">
            <button className="nav-link active" id="others-all-tab" data-bs-toggle="tab" data-bs-target="#others-all" type="button" role="tab" aria-controls="others-all" aria-selected="true">All</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="others-popular-tab" data-bs-toggle="tab" data-bs-target="#others-popular" type="button" role="tab" aria-controls="others-popular" aria-selected="false">Popular</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="others-new-tab" data-bs-toggle="tab" data-bs-target="#others-new" type="button" role="tab" aria-controls="others-new" aria-selected="false">New</button>
        </li>
    </ul>
  )
}

export default GameFilter
