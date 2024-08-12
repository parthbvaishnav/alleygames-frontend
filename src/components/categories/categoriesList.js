import React, { useEffect, useState } from 'react'
import { gamestabicon1 } from '../../utils/ImagesLoad'
import { getAllCategories } from '../../utils/indexService';

const CategoriesList = () => {
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {      
      getAllListCategories();
    }, []);
  
    const getAllListCategories = () => {
        getAllCategories().then((data) => {
        setCategoriesData(data);
      });
    };
  return (
    <ul className="nav gap-2 justify-content-lg-between justify-content-start" role="tablist">
        {categoriesData.map((categories, index) => (
            <li key={index} className="nav-item" role="presentation">
                {/* Selected tab add this class "********active******" */}
                <button className={index === 0 ?  "nav-link active" : "nav-link"} id="slots-tab" data-bs-toggle="tab" data-bs-target="#slots" type="button" role="tab" aria-controls="slots" aria-selected="true">
                    <img src={categories.Category_image || gamestabicon1} alt="gamestabicon"/>
                    {categories.Name}
                </button>
            </li>
        ))}
    </ul>
  )
}

export default CategoriesList
