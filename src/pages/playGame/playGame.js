import React, { useEffect, useState } from 'react';
import { exitFullscreen, fullscreen } from '../../utils/ImagesLoad';
import { useDispatch, useSelector } from "react-redux";
import { getGameByUUID, getSimilarGame } from '../../utils/indexService';
import { Link, useParams } from 'react-router-dom';
import { BUCKET_URL } from '../../utils/constant';

const PlayGame = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const mobileWidth = 600;
  const gameData = useSelector((state) => state.singleGame.singleGameList);
  const similarGames = useSelector((state) => state.similarGame.similarGameList);
  const loading = useSelector((state) => state.status.loading);
  const error = useSelector((state) => state.status.error);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const screen = document.getElementById('fullscreen_div');

  useEffect(() => {
    handleGameSetup(gameData);
  }, [gameData]);
  useEffect(() => {
      dispatch(getGameByUUID(id));      
  }, [id]);
  useEffect(() => {
    if(gameData?.Category){
      dispatch(getSimilarGame(gameData?.Category));
    }
  }, [gameData]);
  const exitHandler = ()=>{
    setIsFullScreen(false)
  }
  const handleGameSetup = async (data) => {
    const { Game_link, Banner_image,Title, Landscape } = data;
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.querySelector('.game-logo').src = Banner_image;
    document.querySelector('.game-title').innerHTML = Title;
    document.querySelector('.game-title-bottom').innerHTML = Title;
    if (window.innerWidth <= mobileWidth) {
      document.querySelector('.game-logo').src = Banner_image;
      document.getElementById('game').classList.add('hidden');
    } else {
      let frameHeight = 600;
      let frameWidth = 350;
      if (Landscape) {
        frameWidth = Math.round(document.getElementById('game').clientWidth - 20);
        frameHeight = Math.round((4 * frameWidth) / 7);
      } else {
        if (document.body.clientHeight - document.querySelector('header').clientHeight <= 600) {
          frameHeight = document.body.clientHeight - document.querySelector('header').clientHeight - 20;
          frameWidth = Math.round((4 * frameHeight) / 7);
        }
      }
      const dimensions = `${frameWidth}/${frameHeight}`;
      document.getElementById('game').src = Game_link;
      document.getElementById('game').onload = () => {
        setScreenSize(dimensions);
      };
      document.getElementById('game').style.width = `${frameWidth + 10}px`;
      document.getElementById('game').style.height = isFullScreen ? '92%' : `${frameHeight + 10}px`;
      document.getElementById('game').style.border = 'none';
    }
  };


  const fullScreenGame = () => {
    const gameFrame = document.getElementById('game');
    // gameFrame.src = gameData.Game_link;
    gameFrame.onload = () => {
      gameFrame.contentWindow.postMessage('fullscreen', BUCKET_URL);
    };

    
  };

  const setScreenSize = (dimensions) => {
    const gameFrame = document.getElementById('game');
    gameFrame.contentWindow.postMessage(`size_event,${dimensions}`, BUCKET_URL);
  };

  const handlePlayNow = () => {
    document.getElementById('overlay-div').classList.add('overlay-div-hidden');
    // if (!gameData.Landscape) {
    //   screen.orientation.lock('landscape');
    // }
  };

  const handleFullScreen = () => {
    fullScreenGame();
    setIsFullScreen(true);
    screen.requestFullscreen();
    // if (!gameData.Landscape) {
    //   screen.orientation.lock('landscape');
    // }
  };

  const handleBack = () => {
    // if (!gameData.Landscape) {
    //   screen.orientation.lock('portrait');
    // }
    setIsFullScreen(false);
    document.exitFullscreen();
  };
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
    <div id="playGameSection">
      <section className="banner-section inner-banner blog details">
          <div className="overlay">
              <div className="banner-content game-content-banner">                  
              </div>
          </div>
      </section>
      <section className="blog-details">
        <div className="overlay">
            <div className="container pb-120">
                <div className="row">
                    <div className="col-lg-2 games-section sidebar" id="sidebar">
                      <div className="all-items">      
                        {similarGames.slice(0,Math.ceil(similarGames.length / 2)).map((game, index) => (
                          <Link
                            to={'/playGame/'+game.UUID}
                            onClick={()=>{
                              document.getElementById('overlay-div').classList.remove('overlay-div-hidden');
                            }}
                            key={index}
                            className="single-item"
                            onMouseEnter={(e) =>{
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
                                handleMouseEnter(e.currentTarget.querySelector("video"))
                            }
                            }
                            onMouseLeave={(e) =>{
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
                              handleMouseLeave(e.currentTarget.querySelector("video"))
                            }
                            }
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
                    <div className="col-lg-8 game-area">
                      <section className={`games-container play-game ${isFullScreen ? 'fullscreen' : ''}`}>
                        <div className="game-div" id="fullscreen_div">
                          <div className="banner-div" id='overlay-div'>
                            <div className="game-logo-div">
                              <img className="game-logo" alt="game-logo" />
                              <h4 className="game-title"> </h4>
                              <a className="cmn-btn play-now" onClick={handlePlayNow}>Play Now</a>
                            </div>
                          </div>
                          <div style={{height:'95.5%', display:'flex', alignItems:'center'}}>
                            <iframe id="game" className="game-frame" allowFullScreen webkitAllowFullScreen mozAllowFullScreen></iframe>
                          </div>
                          <div className="footer-play-section">
                            <h4 className="game-title-bottom"> </h4>
                            <div className="fullScreenIcon" onClick={isFullScreen === false ? handleFullScreen : handleBack}>
                              <img src={isFullScreen === true ? exitFullscreen : fullscreen} alt='fullscreen'/>
                            </div>
                          </div>
                        </div>                        
                      </section>
                      <div className='gameDescriptionSection'>                  
                        <div dangerouslySetInnerHTML={
                            { __html: gameData?.Game_description }
                        }></div>                        
                      </div>
                    </div>
                    <div className="col-lg-2 games-section sidebar" id="sidebar">
                      <div className="all-items">  
                        {similarGames.slice(Math.ceil(similarGames.length / 2)).map((game, index) => (
                              <Link
                                to={'/playGame/'+game.UUID}
                                onClick={()=>{
                                  document.getElementById('overlay-div').classList.remove('overlay-div-hidden');
                                }}
                                key={index}
                                className="single-item"
                                onMouseEnter={(e) =>{
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
                                    handleMouseEnter(e.currentTarget.querySelector("video"))
                                }
                                }
                                onMouseLeave={(e) =>{
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
                                  handleMouseLeave(e.currentTarget.querySelector("video"))
                                }
                                }
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
      </section>
  </div>
  );
};

export default PlayGame;
