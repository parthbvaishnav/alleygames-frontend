import React from "react";
import { useDispatch } from "react-redux";
import { setFilterKey } from "../../redux/reducers/filterReducer";
const GameFilter = () => {
  const dispatch = useDispatch();

  const handleFilterClick = (key) => {
    dispatch(setFilterKey(key));
  };
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
          onClick={() => handleFilterClick('All')}
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
          onClick={() => handleFilterClick('Popular')}
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
          onClick={() => handleFilterClick('New')}
        >
          New
        </button>
      </li>
    </ul>
  );
};

export default GameFilter;
