import React, { useState } from "react";
import { Link } from "react-router-dom";
import GameList from "../../components/game-containers/gameList";
import CategoriesList from "../../components/categories/categoriesList";
import SearchFilter from "../../components/filter/searchFilter";

const AllGame = () => {
  const [searchFilter, setSearchFilter] = useState("")
  return (
    <div>
      <section className="banner-section inner-banner games">
        <div className="overlay">
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10">
                  <div className="main-content">
                    <h1>Games</h1>
                    <div className="breadcrumb-area">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb d-flex align-items-center">
                          <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Games
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="games-section">
        <div className="overlay pb-120">
          <div className="top-nav">
            <div className="container">
              <div className="row justify-content-center wow fadeInUp">
                <div className="col-lg-12">
                  <CategoriesList />
                </div>
              </div>
            </div>
          </div>
          <div className="container pt-120">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="slots"
                role="tabpanel"
                aria-labelledby="slots-tab"
              >
                <div className="row justify-content-between align-items-center">
                  <div className="col-xl-4 col-md-7">
                    {/* <GameFilter /> */}
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-5">
                    <SearchFilter setSearchFilter={setSearchFilter}/>
                  </div>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="slots-all"
                    role="tabpanel"
                    aria-labelledby="slots-all-tab"
                  >
                    <GameList searchFilter={searchFilter}/>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllGame;
