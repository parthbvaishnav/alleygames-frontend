import React, { useEffect, useState } from 'react'
import { gamestabicon1 } from '../../utils/ImagesLoad'
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from '../../utils/indexService';
import { setCategoryFilterKey } from '../../redux/reducers/categoryFilter';

const CategoriesList = () => {
    const dispatch = useDispatch();
    const categoriesData = useSelector((state) => state.categories.categoryList);
    const loading = useSelector((state) => state.status.loading);
    const error = useSelector((state) => state.status.error);
  
    useEffect(() => {
      if (categoriesData.length === 0 && !loading && !error) {
        dispatch(getAllCategories());
      }
    }, [dispatch, categoriesData.length, loading, error]);
  
    const handleFilterClick = (key) => {
      dispatch(setCategoryFilterKey(key));
    };
  
  return (
    <ul className="nav gap-2 justify-content-lg-between justify-content-start" role="tablist">
        {categoriesData.map((categories, index) => (
            <li key={index} className="nav-item" role="presentation">
                {/* Selected tab add this class "********active******" */}
                <button onClick={() => handleFilterClick(categories.id)}
                className={index === 0 ?  "nav-link active" : "nav-link"} id="slots-tab" data-bs-toggle="tab" data-bs-target="#slots" type="button" role="tab" aria-controls="slots" aria-selected="true">
                    <img src={categories.Category_image || gamestabicon1} alt="gamestabicon"/>
                    {categories.Name}
                </button>
            </li>
        ))}
    </ul>
  )
}

export default CategoriesList
