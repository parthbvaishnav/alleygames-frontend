import React, { useEffect } from "react";
import "../../App.css";
import { countericon1, countericon2, featuresicon1, featuresicon2, featuresicon3, featuresicon4, jackpotimage1, jackpotimage2, jackpotimage3, jackpotimage4, populargameitem} from "../../utils/ImagesLoad";
import { Link } from "react-router-dom";
// import GameList from "../../components/game-containers/gameList";
import AdComponent from "../AdComponent/AdComponent";
import { useDispatch, useSelector } from "react-redux";
import { getCatWiseGame } from "../../utils/indexService";
import { setGameLinkKey } from "../../redux/reducers/gameLinkReducer";

const Home = () => {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.catWiseGame.catWiseGame);
  console.log("gameData0-000000000000000000",gameData)
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
                      {/* <AdComponent/> */}
                      <h5 className="sub-title">Welcome To Gaming World</h5>
                      <h1 className="title">Next Level <span>Crypto Gaming</span> Platform</h1>
                      <p className="xlr">Mind-blowing bonuses. Zero withdrawal fees. Flash-like customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="counter-section">
          <div className="container wow fadeInUp">
            <div className="main-content">
              <div className="row cus-mar">
                <div className="col-lg-6 col-md-6">
                  <div className="single-box d-flex align-items-center">
                    <div className="img-area">
                      <img src={countericon1} alt="icon" />
                    </div>
                    <div className="text-area">
                      <h6>Total Games</h6>
                      <h3>
                        <span className="counter">1350</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-box second d-flex align-items-center">
                    <div className="img-area">
                      <img src={countericon2} alt="icon" />
                    </div>
                    <div className="text-area">
                      <h6>Total Puzzle Games</h6>
                      <h3>
                        <span className="counter">3500</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
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
                    <h5 className="sub-title">{item.Category.Name}</h5>
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
          {/* <div className="container gameBoxSection">
            <div className="row wow fadeInUp">
              <div className="text-left">
                <h5 className="sub-title">Easy way for crypto Play</h5>
                <div className="games-section ">
                  <GameList/>
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp">
              <div className="games-carousel">
                <div className="single">
                  <div className="single-box">
                    <img src={populargameimage1} alt="populargameimage" />
                  </div>
                </div>
                <div className="single">
                  <div className="single-box">
                    <img src={populargameimage2} alt="populargameimage" />
                  </div>
                </div>
                <div className="single">
                  <div className="single-box">
                    <img src={populargameimage3} alt="populargameimage" />
                  </div>
                </div>
                <div className="single">
                  <div className="single-box">
                    <img src={populargameimage4} alt="populargameimage" />
                  </div>
                </div>
                <div className="single">
                  <div className="single-box">
                    <img src={populargameimage5} alt="populargameimage" />
                  </div>
                </div>
                <div className="single">
                  <div className="single-box">
                    <img src={populargameimage6} alt="populargameimage" />
                  </div>
                </div>
                <div className="single">
                  <div className="single-box">
                    <img src={populargameimage3} alt="populargameimage" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="btn-area mt-40 text-center">
                  <Link to="/allGame" className="cmn-btn">All Games <i className="icon-d-right-arrow-2"></i></Link>
                </div>
              </div>
            </div>
          </div> */}
          
        </div>
      </section>
      {/* <section className="features">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row align-items-center">
              <div className="col-lg-9">
                <div className="section-top">
                  <div className="section-text">
                    <h5 className="sub-title">The Fastest Withdrawals In The Galaxy</h5>
                    <h2 className="title">Enjoy fast, secure withdrawals at Casino Bizera.</h2>
                    <p>Find gamers who care about the same things you do — whether you have shared values or common goals — and connect with them in a meaningful way.</p>
                  </div>
                  <div className="btn-area">
                    <a href="games.html" className="cmn-btn">Enter our Universe <i className="icon-d-right-arrow-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row cus-mar pt-120">
              <div className="col-xl-3 col-sm-6">
                <div className="single-box">
                  <div className="icon-box">
                    <img src={featuresicon1} alt="featuresicon" />
                  </div>
                  <h3>100</h3>
                  <p>Welcome Bonus</p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="single-box second">
                  <div className="icon-box">
                    <img src={featuresicon2} alt="featuresicon" />
                  </div>
                  <h3>10%</h3>
                  <p>Cash Back </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="single-box third">
                  <div className="icon-box">
                    <img src={featuresicon3} alt="featuresicon" />
                  </div>
                  <h3>5000%</h3>
                  <p>Games</p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="single-box fourth">
                  <div className="icon-box">
                    <img src={featuresicon4} alt="featuresicon" />
                  </div>
                  <h3>100%</h3>
                  <p>Scure & Stable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
{/* 
      <section className="total-jackpot">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="title mb-20 d-flex justify-content-between">
                  <h4>Jackpot Games</h4>
                  <Link>Show All</Link>
                </div>
                <div className="jackpot-carousel">
                  <div className="single-slide">
                    <div className="box">
                      <div className="img-box">
                        <img src={jackpotimage1} alt="icon" />
                      </div>
                      <div className="img-box">
                        <img src={jackpotimage2} alt="icon" />
                      </div>
                    </div>
                  </div>
                  <div className="single-slide">
                    <div className="box">
                      <div className="img-box">
                        <img src={jackpotimage3} alt="icon" />
                      </div>
                      <div className="img-box">
                        <img src={jackpotimage1} alt="icon" />
                      </div>
                    </div>
                  </div>
                  <div className="single-slide">
                    <div className="box">
                      <div className="img-box">
                        <img src={jackpotimage4} alt="icon" />
                      </div>
                      <div className="img-box">
                        <img src={jackpotimage3} alt="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
