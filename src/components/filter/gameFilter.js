import React from "react";

const GameFilter = () => {
  return (
    <ul className="nav bottom-nav gap-3" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          id="slots-all-tab"
          data-bs-toggle="tab"
          data-bs-target="#slots-all"
          type="button"
          role="tab"
          aria-controls="slots-all"
          aria-selected="true"
        >
          All
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="slots-popular-tab"
          data-bs-toggle="tab"
          data-bs-target="#slots-popular"
          type="button"
          role="tab"
          aria-controls="slots-popular"
          aria-selected="false"
        >
          Popular
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="slots-new-tab"
          data-bs-toggle="tab"
          data-bs-target="#slots-new"
          type="button"
          role="tab"
          aria-controls="slots-new"
          aria-selected="false"
        >
          New
        </button>
      </li>
    </ul>
  );
};

export default GameFilter;
