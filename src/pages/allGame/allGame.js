import React, { useEffect } from "react";
import {
  btcicon2,
  dash,
  etc,
  gameslogo1,
  gameslogo10,
  gameslogo11,
  gameslogo12,
  gameslogo13,
  gameslogo14,
  gameslogo15,
  gameslogo16,
  gameslogo17,
  gameslogo18,
  gameslogo2,
  gameslogo3,
  gameslogo4,
  gameslogo5,
  gameslogo6,
  gameslogo7,
  gameslogo8,
  gameslogo9,
  gamestabicon1,
  gamestabicon2,
  gamestabicon3,
  gamestabicon4,
  gamestabicon5,
  gamestabicon6,
  gamestabicon7,
  gamestabicon8,
  playicon,
  tableimage1,
  trx,
} from "../../utils/ImagesLoad";
import { Link } from "react-router-dom";
import { getAllGame } from "../../utils/indexService";
import GameList from "../../components/game-containers/gameList";
import CategoriesList from "../../components/categories/categoriesList";
import GameFilter from "../../components/filter/gameFilter";
import SearchFilter from "../../components/filter/searchFilter";

const AllGame = () => {
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
                    <GameFilter />
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-5">
                    <SearchFilter />
                  </div>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="slots-all"
                    role="tabpanel"
                    aria-labelledby="slots-all-tab"
                  >
                    <GameList />
                    <div className="btn-area mt-3 text-center">
                      <a href="#" className="cmn-btn">
                        Load More
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="slots-popular"
                    role="tabpanel"
                    aria-labelledby="slots-popular-tab"
                  >
                    <GameList />
                    <div className="btn-area mt-3 text-center">
                      <a href="#" className="cmn-btn">
                        Load More
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="slots-new"
                    role="tabpanel"
                    aria-labelledby="slots-new-tab"
                  >
                    <GameList />
                    <div className="btn-area mt-3 text-center">
                      <a href="#" className="cmn-btn">
                        Load More
                      </a>
                    </div>
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
