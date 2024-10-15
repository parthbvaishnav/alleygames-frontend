import React, { useEffect, useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCatWiseGame } from "../../utils/indexService";
import { setGameLinkKey } from "../../redux/reducers/gameLinkReducer";
import ParticleBg from "../../components/particleBg/particleBg";

const Home = () => {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.catWiseGame.catWiseGame);  
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    dispatch(getCatWiseGame());
  }, [dispatch]);

  const handleMouseEnter = (videoRef) => {
    if (videoRef) {
      videoRef.play().catch((error) => {
        console.error("Error trying to play video:", error);
      });
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef) {
      videoRef.pause();
      videoRef.currentTime = 0;
    }
  };

  const handleVideoError = (event) => {
    console.error("Video failed to load:", event.target.src);
    event.target.style.display = "none";
  };

  const toggleViewAll = (sectionId) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId], 
    }));
  };

  return (
    <div>
      <section className="banner-section index">
        <div className="overlay">
          <div className="banner-content">
            <div className="container wow fadeInUp">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-8">
                  <div className="main-content">
                    <div className="top-area section-text">
                      <h5 className="sub-title">Welcome To AlleyGames</h5>
                      <h1 className="title">Next Level <span>Online Gaming</span> Platform</h1>
                      <p className="xlr">Play to win, but never forgot to have fun</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-game">
        <ParticleBg />
        <div className="overlay pt-120 pb-120">
          {gameData.map((item, index) => (
            <div key={index} className="container gameBoxSection">
              <div className="row wow fadeInUp">
                <div className="text-left">
                  <div className="d-flex justify-content-between">
                    <h5 className="sub-title m-0">{item.Section_name}</h5>
                    <Link to="#" onClick={() => toggleViewAll(item.Section_name)}>{visibleSections[item.Section_name] ? "Show Less" : "View All"}</Link>
                  </div>
                  <div className="games-section">
                    <div className="all-items">
                      {item?.Games?.slice(0, visibleSections[item.Section_name] ? item.Games.length : 6).map((game, index) => (
                        <Link 
                          to={`/view-game/${game.UUID}`}
                          key={index}
                          className="single-item"
                          onClick={() => {
                            dispatch(setGameLinkKey(game));
                          }}
                          onMouseEnter={(e) => {
                            const imgElement = e.currentTarget.querySelector("img");
                            if (imgElement && game.Video_link) {
                              imgElement.style.display = "block";
                              imgElement.style.opacity = "0";
                              imgElement.style.visibility = "hidden";

                              const videoElement = e.currentTarget.querySelector("video");
                              videoElement.style.display = "block";
                              videoElement.style.opacity = "1";
                              videoElement.style.visibility = "visible";
                            }
                            handleMouseEnter(e.currentTarget.querySelector("video"));
                          }}
                          onMouseLeave={(e) => {
                            const imgElement = e.currentTarget.querySelector("img");
                            if (imgElement) {
                              imgElement.style.display = "block";
                              imgElement.style.opacity = "1";
                              imgElement.style.visibility = "visible";

                              const videoElement = e.currentTarget.querySelector("video");
                              videoElement.style.display = "block";
                              videoElement.style.opacity = "0";
                              videoElement.style.visibility = "hidden";
                            }
                            handleMouseLeave(e.currentTarget.querySelector("video"));
                          }}
                        >
                          <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                            <div className="bg-area">
                              <img className="bg-item" src={game.Game_Banner_image} alt="game banner"/>
                              <video className="bg-item" src={game.Video_link} muted onError={handleVideoError} />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
