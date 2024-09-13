import React, { useEffect, useRef, useState } from 'react';
import { exitFullscreen, fullscreen, leftArrowIcon } from '../../utils/ImagesLoad';
import { useDispatch, useSelector } from "react-redux";
import { getGameByUUID, getSimilarGame } from '../../utils/indexService';
import { Link, useParams } from 'react-router-dom';
import { BUCKET_URL } from '../../utils/constant';
import AdComponent from '../AdComponent/AdComponent';

const PlayGame = () => {
  const screenRef = useRef(null);
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
    // document.querySelector('.header-section').style.display = 'none';
    // document.querySelector('.banner-section').style.display = 'none';
    // document.querySelector('.footer-section').style.display = 'none';
  }, [])
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
    const { Game_link, Banner_image, Title, Landscape } = data;
    document.querySelector('.game-title-bottom').innerHTML = Title;
  
    let frameHeight;
    let frameWidth;
  
    // Determine screen orientation
    const isPortrait = window.innerHeight > window.innerWidth;
  
      if (Landscape) {
        if (isPortrait) {
          // For Landscape games in portrait mode
          frameWidth = window.innerWidth - 10;
          frameHeight = Math.round((4 * frameWidth) / 7);
        } else {
          // For Landscape games in landscape mode
          frameWidth = window.innerWidth - 10;
          if(!isFullScreen){
            frameWidth=document.getElementById("game-section").clientWidth            
          }
          frameHeight = Math.round((4 * frameWidth) / 7) - 58;         
        }
      } else {
        if (isPortrait) {
          // For Portrait games in portrait mode
          frameHeight = window.innerHeight - document.querySelector('header').clientHeight - 26;
          frameWidth = Math.round((4 * frameHeight) / 7);         
        } else {
          // For Portrait games in landscape mode
          frameWidth = 353;
          frameHeight = document.getElementById("game-section").clientHeight - 95;
          // frameHeight = window.innerHeight - document.querySelector('header').clientHeight - 26;
          // frameWidth = Math.round((4 * frameHeight) / 7);
        }
      }
  
      // Set iframe size
      const dimensions = `${frameWidth}/${frameHeight}`;
      document.getElementById('game').src = Game_link;
      document.getElementById('game').onload = () => {
        setScreenSize(dimensions);
      };
      document.getElementById('game').style.width = `${frameWidth + 0}px`;
      document.getElementById('game').style.height = isFullScreen ? '92%' : `${frameHeight + 0}px`;
      document.getElementById('game').style.border = 'none';


      document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
           //'In fullscreen mode'
        } else {
           //'Exited fullscreen mode'
           if(document.getElementById('game')){
          setIsFullScreen(false);
          let frameWidth=document.getElementById("game-section")?.clientWidth
          let frameHeight = Math.round((4 * frameWidth) / 7) - 58;   
          if(!gameData.Landscape){
            frameWidth = 353;
            frameHeight = document.getElementById("game-section")?.clientHeight - 95;
          } 
          const dimensions = `${frameWidth}/${frameHeight}`;
          setScreenSize(dimensions);
          document.getElementById('game').style.width = `${frameWidth + 0}px`;
          document.getElementById('game').style.height = `${frameHeight + 0}px`;
        }
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
                  <AdComponent/>
                </div>
                <div className="col-lg-8">
                  <div className='game-area' id='game-section'>
                    <section className={`games-container play-game ${isFullScreen ? 'fullscreen' : ''}`}>
                      <div className="game-play-div" id="fullscreen_div" ref={screenRef}>
                        <div className="game-frame-container" style={{height:isFullScreen ? '100vh':''}} id='gameFrameContainer'>
                          <iframe id="game" className="game-frame" allowFullScreen webkitAllowFullScreen mozAllowFullScreen></iframe>
                        </div>
                        <div className="footer-play-section">
                          <div className='gameNameArrow'>
                            <Link to={'/games'}>
                              <img src={leftArrowIcon} alt='Back Arrow'/>
                            </Link>
                            <h4 className="game-title-bottom"> </h4>
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
                  {/* <AdComponent/> */}
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayGame;
