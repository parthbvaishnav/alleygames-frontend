import React, { useEffect, useState } from 'react';
import { gamestabicon1 } from '../../utils/ImagesLoad';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from '../../utils/indexService';
import { setCategoryFilterKey } from '../../redux/reducers/categoryFilter';

const CategoriesList = () => {
    const dispatch = useDispatch();
    const categoriesData = useSelector((state) => state.categories.categoryList);
    const loading = useSelector((state) => state.status.loading);
    const error = useSelector((state) => state.status.error);

    // Define the "ALL" category
    const allCategory = {
        id: '0',
        Name: 'All',
        Category_image: gamestabicon1
    };

    useEffect(() => {
        if (categoriesData.length === 0 && !loading && !error) {
            dispatch(getAllCategories());
        }
    }, [dispatch, categoriesData.length, loading, error]);

    const handleFilterClick = (key) => {
        dispatch(setCategoryFilterKey(key));
    };

    // Combine "ALL" category with the fetched categories
    const combinedCategories = [allCategory, ...categoriesData];

    return (
        <ul className="nav gap-2 justify-content-lg-between justify-content-start" role="tablist">
            {combinedCategories.map((category, index) => (
                <li key={index} className="nav-item" role="presentation">
                    <button 
                        onClick={() => handleFilterClick(category.id)}
                        className={index === 0 ? "nav-link active" : "nav-link"} 
                        id={`category-tab-${index}`} 
                        data-bs-toggle="tab" 
                        data-bs-target={`#category-${index}`} 
                        type="button" 
                        role="tab" 
                        aria-controls={`category-${index}`} 
                        aria-selected={index === 0}
                    >
                        <img src={category.Category_image || gamestabicon1} alt={category.Name} />
                        {category.Name}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default CategoriesList;
