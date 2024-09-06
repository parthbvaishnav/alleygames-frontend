import React, { useEffect } from "react";
import "../../App.css";
import { countericon1, countericon2, featuresicon1, featuresicon2, featuresicon3, featuresicon4, jackpotimage1, jackpotimage2, jackpotimage3, jackpotimage4, populargameitem} from "../../utils/ImagesLoad";
import { Link } from "react-router-dom";
// import GameList from "../../components/game-containers/gameList";
// import AdComponent from "../AdComponent/AdComponent";
import { useDispatch, useSelector } from "react-redux";
import { getCatWiseGame } from "../../utils/indexService";
import { setGameLinkKey } from "../../redux/reducers/gameLinkReducer";
import {
  AdvertisingProvider,
  AdvertisingSlot,
  logVersionInfo
} from 'react-advertising';
import adsConfig from "../AdComponent/adsConfig";
import plugins from "../AdComponent/plugins.js";


const Home = () => {

  logVersionInfo();

  const displayInterstitialAd = () => {
    plugins[0].refreshInterstitialSlot();
  };

  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.catWiseGame.catWiseGame);
  useEffect(() => {
    dispatch(getCatWiseGame());
  }, []);
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
                      <h1 className="title">Next Level <span>Crypto Gaming</span> Platform</h1>
                      <p className="xlr">Mind-blowing bonuses. Zero withdrawal fees. Flash-like customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </section>
      <AdvertisingProvider config={adsConfig} plugins={plugins}>
      {/* Display Banner Ad */}
      <AdvertisingSlot id="div-slot" />

      {/* Display Another Banner Ad */}
      <AdvertisingSlot id="banner-slot" />

      {/* Display Video Ad */}
      <AdvertisingSlot id="video-slot" />

      {/* Trigger Interstitial Ad */}
      <button onClick={displayInterstitialAd}>Show Interstitial Ad</button>
    </AdvertisingProvider>
      <section className="popular-game">
        <div className="overlay pt-120 pb-120">
          <div className="abs-item">
            <img src={populargameitem} alt="icon" />
          </div>
          {gameData.map((item, index) => (
            <div className="container gameBoxSection">
              <div className="row wow fadeInUp">
                <div className="text-left">
                  <div className="d-flex justify-content-between">
                    <h5 className="sub-title">{item.Section_name}</h5>
                    <Link to={`/allGame`}>View All</Link>
                  </div>
                  <div className="games-section">
                    <div className="all-items">
                      {item?.Games?.map((game, index) => (
                          <Link
                            to={`/playGame/${game.UUID}`}
                            key={index}
                            className="single-item"
                            onClick={() => {
                              dispatch(setGameLinkKey(game));
                            }}
                            onMouseEnter={(e) => {
                              const imgElement = e.currentTarget.querySelector("img");
                              if (imgElement && game.Video_link) {
                                imgElement.style.display = 'block';
                                imgElement.style.opacity = '0';
                                imgElement.style.visibility = 'hidden';

                                const videoElement = e.currentTarget.querySelector("video");
                                videoElement.style.display = 'block';
                                videoElement.style.opacity = '1';
                                videoElement.style.visibility = 'visible';
                              }
                              handleMouseEnter(e.currentTarget.querySelector("video"));
                            }}
                            onMouseLeave={(e) => {
                              const imgElement = e.currentTarget.querySelector("img");
                              if (imgElement) {
                                imgElement.style.display = 'block';
                                imgElement.style.opacity = '1';
                                imgElement.style.visibility = 'visible';

                                const videoElement = e.currentTarget.querySelector("video");
                                videoElement.style.display = 'block';
                                videoElement.style.opacity = '0';
                                videoElement.style.visibility = 'hidden';
                              }
                              handleMouseLeave(e.currentTarget.querySelector("video"));
                            }}
                          >
                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                              <div className="bg-area">
                                <img className="bg-item" src={game.Banner_image} alt="gamestabicon" />
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
