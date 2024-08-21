import React, { useEffect, useState } from 'react';
import GameList from '../../components/game-containers/gameList';
import { exitFullscreen, fullscreen } from '../../utils/ImagesLoad';
import { useDispatch, useSelector } from "react-redux";
import { getGameByUUID } from '../../utils/indexService';
import { useParams } from 'react-router-dom';

const PlayGame = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const mobileWidth = 600;
  const gameData = useSelector((state) => state.singleGame.singleGameList);
  const loading = useSelector((state) => state.status.loading);
  const error = useSelector((state) => state.status.error);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const screen = document.getElementById('fullscreen_div');

  useEffect(() => {
    handleGameSetup(gameData);
  }, [gameData]);
  useEffect(() => {
    if (gameData.length === 0 && !loading && !error) {
      dispatch(getGameByUUID(id));
    }
  }, []);

  const handleGameSetup = async (data) => {
    const { Game_link, Category, Banner_image,Title, view_type } = data;
    const handleResize = () => {
      // document.querySelector('.banner-div').classList.remove('hidden');
      document.querySelector('.game-logo').src = Banner_image;
      document.querySelector('.game-title').innerHTML = Title;
      document.querySelector('.game-title-bottom').innerHTML = Title;
      if (window.innerWidth <= mobileWidth) {
        // document.querySelector('.banner-div').classList.remove('hidden');
        document.querySelector('.game-logo').src = Banner_image;
        document.getElementById('game').classList.add('hidden');
      } else {
        // Desktop view
        let frameHeight = 600;
        let frameWidth = 350;
        if (view_type === "horizontal") {

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

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };


  const fullScreenGame = () => {
    const gameFrame = document.getElementById('game');
    gameFrame.src = gameData.Game_link;
    gameFrame.onload = () => {
      gameFrame.contentWindow.postMessage('fullscreen', 'https://gamersaimstorage.s3.ap-south-1.amazonaws.com');
    };
  };

  const setScreenSize = (dimensions) => {
    const gameFrame = document.getElementById('game');
    gameFrame.contentWindow.postMessage(`size_event,${dimensions}`, 'https://gamersaimstorage.s3.ap-south-1.amazonaws.com');
  };

  const handlePlayNow = () => {
    // fullScreenGame();
    // setIsFullScreen(true);
    // screen.requestFullscreen();
    document.getElementById('overlay-div').classList.add('overlay-div-hidden');
    if (gameData.view_type === "horizontal") {
      screen.orientation.lock('landscape');
    }
  };

  const handleFullScreen = () => {
    fullScreenGame();
    setIsFullScreen(true);
    screen.requestFullscreen();
    if (gameData.view_type === "horizontal") {
      screen.orientation.lock('landscape');
    }
  };


  const handleBack = () => {
    if (gameData.view_type === "horizontal") {
      screen.orientation.lock('portrait');
    }
    setIsFullScreen(false);
    document.exitFullscreen();
  };

  return (
    <div>
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
                    <div className="col-lg-2 sidebar" id="sidebar">
                      <GameList category={gameData?.Category}/>
                    </div>
                    <div className="col-lg-8 game-area">
                      <section className={`games-container play-game ${isFullScreen ? 'fullscreen' : ''}`}>
                        <div className="game-div" id="fullscreen_div">
                          <div className="banner-div" id='overlay-div'>
                            <div className="game-logo-div">
                              <img className="game-logo" alt="game-logo" />
                              <h4 className="game-title"></h4>
                              <a className="cmn-btn play-now" onClick={handlePlayNow}>Play Now</a>
                            </div>
                          </div>
                          <iframe id="game" className="game-frame" style={{height:isFullScreen ? '92%':'100%'}} allowFullScreen webkitAllowFullScreen mozAllowFullScreen></iframe>
                          <div className="footer-play-section">
                            <h4 className="game-title-bottom"></h4>
                            <div className="fullScreenIcon" onClick={isFullScreen == false ? handleFullScreen : handleBack}>
                              <img src={isFullScreen == true ? exitFullscreen : fullscreen} alt='fullscreen'/>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="col-lg-2 sidebar" id="sidebar">
                      <GameList category={gameData?.Category}/>
                    </div>
                </div>
            </div>
        </div>
      </section>
  </div>
  );
};

export default PlayGame;
