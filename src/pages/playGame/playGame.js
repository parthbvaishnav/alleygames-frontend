import React, { useEffect, useRef, useState } from 'react';
import { exitFullscreen, fullscreen, leftArrowIcon } from '../../utils/ImagesLoad';
import { useDispatch, useSelector } from "react-redux";
import { getGameByUUID, getSimilarGame } from '../../utils/indexService';
import { Link, useParams } from 'react-router-dom';
import { BUCKET_URL } from '../../utils/constant';
import AdComponent from '../AdComponent/AdComponent';
import GoogleAd from '../AdComponent/GoogleAd';

const PlayGame = () => {
  const screenRef = useRef(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const gameData = useSelector((state) => state.singleGame.singleGameList); 
  const loading = useSelector((state) => state.status.loading);
  const error = useSelector((state) => state.status.error);

  const [isFullScreen, setIsFullScreen] = useState(false);
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
  
  const handleGameSetup = async (data) => {
    const { Game_link, Landscape } = data;
    let frameWidth, frameHeight;
    const isPortrait = window.innerHeight > window.innerWidth;

    // Calculate frame dimensions based on game orientation and screen mode
    if (Landscape) {
      frameWidth = isPortrait ? window.innerWidth - 10 : document.getElementById("game-section").clientWidth || window.innerWidth - 10;
      frameHeight = Math.round((4 * frameWidth) / 7) - (isPortrait ? 0 : 58);
    } else {
      frameHeight = isPortrait ? window.innerHeight - document.querySelector('header')?.clientHeight - 26 : document.getElementById("game-section").clientHeight - 95;
      frameWidth = isPortrait ? Math.round((4 * frameHeight) / 7) : 353;
    }

    const dimensions = `${frameWidth}/${frameHeight}`;
    const gameFrame = document.getElementById('game');
    gameFrame.src = Game_link;
    gameFrame.style.width = `${frameWidth}px`;
    gameFrame.style.height = isFullScreen ? '92%' : `${frameHeight}px`;
    gameFrame.style.border = 'none';
    gameFrame.onload = () => setScreenSize(dimensions);

    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && gameFrame) {
        setIsFullScreen(false);
        frameWidth = gameData.Landscape ? document.getElementById("game-section")?.clientWidth : 353;
        frameHeight = gameData.Landscape ? Math.round((4 * frameWidth) / 7) - 58 : document.getElementById("game-section")?.clientHeight - 95;
        const dimensions = `${frameWidth}/${frameHeight}`;
        setScreenSize(dimensions);
        gameFrame.style.width = `${frameWidth}px`;
        gameFrame.style.height = `${frameHeight}px`;
    }
    });
  };



  const fullScreenGame = () => {
    const gameFrame = document.getElementById('game');
    gameFrame.onload = () => {
      gameFrame.contentWindow.postMessage('fullscreen', BUCKET_URL);
    };    
  };

  const setScreenSize = (dimensions) => {
    const gameFrame = document.getElementById('game');
    gameFrame?.contentWindow.postMessage(`size_event,${dimensions}`, BUCKET_URL);
  };

  const handleFullScreen = () => {
    const screen = screenRef.current; // Access the ref instead of querying the DOM
    if (screen) {
      fullScreenGame();
      setIsFullScreen(true);
      screen.requestFullscreen().then(() => {
        let frameWidth = window.innerWidth - 80;
        let frameHeight = window.innerHeight - 80;
        if (!gameData.Landscape) {
          frameWidth = window.innerHeight / 2;
          frameHeight = window.innerHeight - 80;
        }
        const dimensions = `${frameWidth}/${frameHeight}`;
        setScreenSize(dimensions);
        document.getElementById('game').style.width = `${frameWidth}px`;
        document.getElementById('game').style.height = `${frameHeight}px`;
      }).catch(err => console.error('Error attempting to lock screen orientation:', err));
    } else {
      console.error('Fullscreen div not found');
    }
  };
  
  
  const handleBack = () => {
    setIsFullScreen(false);
    
    if (document.fullscreenElement) {
      document.exitFullscreen()
        .then(() => {
          const gameSection = document.getElementById("game-section");
          if (gameSection) {
            let frameWidth = gameSection.clientWidth;
            let frameHeight = Math.round((4 * frameWidth) / 7) - 58;               
            if (!gameData.Landscape) {
              frameWidth = 353;
              frameHeight = gameSection.clientHeight - 95;
            } 
            const dimensions = `${frameWidth}/${frameHeight}`;
            setScreenSize(dimensions);
            const gameFrame = document.getElementById('game');
            if (gameFrame) {
              gameFrame.style.width = `${frameWidth}px`;
              gameFrame.style.height = `${frameHeight}px`;
            }
          }
        })
        .catch(err => console.error('Error exiting fullscreen:', err));
    }
  };  
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        handleFullScreen(); 
      }
    };  
    handleResize();      
    window.addEventListener('resize', handleResize);  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.error('Error exiting fullscreen:', err));
      }
    };
  }, []);
  const sendUnityMsg = (arg)=>{
    const iframe = document.getElementById('game');
    iframe.contentWindow.postMessage('unity_event,'+arg, 'https://gamersaimstorage.s3.ap-south-1.amazonaws.com');
  }
  useEffect(() => {
    let event_name_stored = "";
    window.addEventListener('message', (event) => {
      let args;
      // console.log("event.data----------------------",event.data)
      if (event.data.toString().includes(',')) {
          args = event.data.split(',');
      } else {
          args = [event.data];
      }
      // console.log("agrs-------",args);
      //don't remove this comment and logs
      //STARTTIME, SHOW_BANNER, COMPLETE_NEXT, SHOW_VIDEO, SHOW_INTER, GAMEOVER, LEVELSKIP, KINFEAD,afterLevelFiald
      if(args[0]=="COMPLETE_NEXT"){
          event_name_stored=args[1];
          sendUnityMsg(event_name_stored);
      }
      else if(args[0]=="SHOW_VIDEO"){
          event_name_stored=args[1];
              sendUnityMsg(event_name_stored);
      }
      else if(args[0]=="SHOW_INTER"){
          event_name_stored=args[1];
          sendUnityMsg(event_name_stored);
      }
  });
  }, [])

  return (
    <div id="playGameSection">      
      <section className="blog-details" style={{marginTop:10}}>
        <div className="overlay">
          <div className="container">
            <div className="row">
                <div className="col-lg-2 games-section sidebar" id="sidebar">
                  <GoogleAd/>
                </div>
                <div className="col-lg-8">
                  <div className='game-area' id='game-section'>
                    <section className={`games-container play-game ${isFullScreen ? 'fullscreen' : ''}`}>
                      <div className="game-play-div" ref={screenRef}>
                        <div className="game-frame-container" style={{height:isFullScreen ? '100vh':''}} id='gameFrameContainer'>
                          <iframe id="game" className="game-frame" allowFullScreen webkitAllowFullScreen mozAllowFullScreen></iframe>
                        </div>
                        <div className="footer-play-section">
                          <div className='gameNameArrow'>
                            <Link to={'/games'}>
                              <img src={leftArrowIcon} alt='Back Arrow'/>
                            </Link>
                            <h4 className="game-title-bottom">{gameData.Title}</h4>
                          </div>
                          <div className="fullScreenIcon" onClick={isFullScreen === false ? handleFullScreen : handleBack}>
                            <img src={isFullScreen === true ? exitFullscreen : fullscreen} alt='fullscreen'/>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="col-lg-2 games-section sidebar" id="sidebar">
                  <GoogleAd/>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayGame;
