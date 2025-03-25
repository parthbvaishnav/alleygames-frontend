import React, { useEffect, useRef, useState } from "react";
import { exitFullscreen, fullscreen, leftArrowIcon } from "../../utils/ImagesLoad";
import { useDispatch, useSelector } from "react-redux";
import { getAdsManager, getGameByUUID, getSimilarGame } from "../../utils/indexService";
import { Link, useParams } from "react-router-dom";
import { BUCKET_URL } from "../../utils/constant";
import GoogleAd from "../AdComponent/GoogleAd";
import ParticleBg from "../../components/particleBg/particleBg";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const PlayGame = () => {
  const screenRef = useRef(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const gameData = useSelector(state => state.singleGame.singleGameList);
  const { adsManager, loading, error } = useSelector(state => state.adsManager);
  const [isCompleteNext, setIsCompleteNext] = useState(false);
  const [isVideoAd, setIsVideoAd] = useState(false);
  const [isInterstitial, setIsInterstitial] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyD1zKVxsNfRqEnl5DCtLmyUiy7K3pgj_Rc",
    authDomain: "alley-b9d49.firebaseapp.com",
    projectId: "alley-b9d49",
    storageBucket: "alley-b9d49.appspot.com",
    messagingSenderId: "466077068329",
    appId: "1:466077068329:web:d2215cf58588f6fa594038",
    measurementId: "G-CLVTHKDXPW",
  };

  useEffect(() => {
    firebaseSetting();
  }, []);
  useEffect(() => {
    dispatch(getAdsManager());
  }, [dispatch]);
  const firebaseSetting = async () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "alley"));
    querySnapshot.forEach(doc => {
      const FireRes = doc.data();
      setIsCompleteNext(FireRes.is_completeNext);
      setIsVideoAd(FireRes.is_videoAd);
      setIsInterstitial(FireRes.is_interstitial);
    });
  };

  const [isFullScreen, setIsFullScreen] = useState(false);
  useEffect(() => {
    handleGameSetup(gameData);
  }, [gameData]);
  useEffect(() => {
    dispatch(getGameByUUID(id));
  }, [id]);
  useEffect(() => {
    if (gameData?.Category) {
      dispatch(getSimilarGame(gameData?.Category));
    }
  }, [gameData]);
  const handleGameSetup = async data => {
    const { Game_link, Landscape } = data;
    let frameWidth, frameHeight;
    frameHeight = document.getElementById("game-section").clientHeight - 53;
    frameWidth = document.getElementById("gameFrameContainer").clientWidth - 1;

    const dimensions = `${frameWidth}/${frameHeight}`;
    const gameFrame = document.getElementById("game");
    gameFrame.src = Game_link;
    gameFrame.style.width = `${frameWidth}px`;
    gameFrame.style.height = `${frameHeight}px`;
    gameFrame.style.border = "none";
    gameFrame.onload = () => setScreenSize(dimensions);
    setTimeout(() => {
      let arg = "ADS_ON";
      if (adsManager.length <= 0) {
        arg = "ADS_OFF";
      }
      gameFrame.contentWindow.postMessage("unity_event," + arg, "https://gamersaimstorage.s3.ap-south-1.amazonaws.com");
    }, 12000);

    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement && gameFrame) {
        handleBack();
      }
    });
  };

  const fullScreenGame = () => {
    const gameFrame = document.getElementById("game");
    gameFrame.onload = () => {
      gameFrame.contentWindow.postMessage("fullscreen", BUCKET_URL);
    };
  };

  const setScreenSize = dimensions => {
    const gameFrame = document.getElementById("game");
    gameFrame?.contentWindow.postMessage(`size_event,${dimensions}`, BUCKET_URL);
  };

  const handleFullScreen = () => {
    const screen = screenRef.current; 
    if (screen) {
      fullScreenGame();
      setIsFullScreen(true);
      screen
        .requestFullscreen()
        .then(() => {
          let frameHeight = document.getElementById("gameFrameContainer").clientHeight - 53;
          let frameWidth = document.getElementById("gameFrameContainer").clientWidth - 1;
          const dimensions = `${frameWidth}/${frameHeight}`;
          setScreenSize(dimensions);
          if(gameData.Landscape){
            document.getElementById("game").style.height = `${frameWidth}px`;
            document.getElementById("game").style.width = `${frameHeight}px`;
          } else{
            document.getElementById("game").style.width = `${frameWidth}px`;
            document.getElementById("game").style.height = `${frameHeight}px`;
          }
        })
        .catch(err => console.error("Error attempting to lock screen orientation:", err));
    } else {
      console.error("Fullscreen div not found");
    }
  };

  const handleBack = () => {
    setIsFullScreen(false);

    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .then(() => {
          const gameSection = document.getElementById("game-section");
          if (gameSection) {
            let frameHeight = document.getElementById("game-section").clientHeight - 53;
            let frameWidth = document.getElementById("gameFrameContainer").clientWidth - 1;
            const dimensions = `${frameWidth}/${frameHeight}`;
            setScreenSize(dimensions);
            const gameFrame = document.getElementById("game");
            if (gameFrame) {
              gameFrame.style.width = `${frameWidth}px`;
              gameFrame.style.height = `${frameHeight}px`;
            }
          }
        })
        .catch(err => console.error("Error exiting fullscreen:", err));
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 991) {
      handleFullScreen();
    }
  },[]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        handleFullScreen();
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const enterFullScreen = () => {
      const screenElement = screenRef.current;
      if (screenElement) {
        screenElement
          .requestFullscreen()
          .then(() => {
            console.log("Fullscreen mode enabled");
          })
          .catch(err => {
            console.error("Error attempting to enable fullscreen:", err);
          });
      } else {
        console.error("Fullscreen element not found");
      }
    };

    // Attempt fullscreen on page load
    enterFullScreen();
  }, []); 
  useEffect(() => {
    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.error("Error exiting fullscreen:", err));
      }
    };
  }, []);
  const sendUnityMsg = arg => {
    const iframe = document.getElementById("game");
    iframe.contentWindow.postMessage("unity_event," + arg, "https://gamersaimstorage.s3.ap-south-1.amazonaws.com");
  };
  const setSound = (soundCheck, isOn) => {
    if (isOn) {
      if (soundCheck === "ON" || soundCheck === "") {
        sendUnityMsg("PLAY_SOUND");
      }
    } else {
      if (soundCheck === "ON" || soundCheck === "") {
        sendUnityMsg("STOP_SOUND");
      }
    }
  };
  const manageAdCloseEvent = (soundCheck, isOn, nextevent) => {
    setSound(soundCheck, isOn);
    setTimeout(() => {
      sendUnityMsg(nextevent);
    }, 100);
  };
  useEffect(() => {
    let event_name_stored = "";
    let soundCheck = "";
    window.addEventListener("message", event => {
      let args;
      if (event.data.toString().includes(",")) {
        args = event.data.split(",");
      } else {
        args = [event.data];
      }
      //STARTTIME, SHOW_BANNER, COMPLETE_NEXT, SHOW_VIDEO, SHOW_INTER, GAMEOVER, LEVELSKIP, KINFEAD,afterLevelFiald
      if (args[0] == "COMPLETE_NEXT") {
        event_name_stored = args[1];
        if (isCompleteNext) {
          if (args.length > 2) {
            soundCheck = args[2];
          }
          setSound(soundCheck, false);
          setTimeout(() => {
            manageAdCloseEvent(soundCheck, false, event_name_stored);
          }, 10);
        } else {
          sendUnityMsg(event_name_stored);
        }
      } else if (args[0] == "SHOW_VIDEO") {
        event_name_stored = args[1];
        if (isVideoAd) {
          if (args.length > 2) {
            soundCheck = args[2];
          }
          setSound(soundCheck, false);
          setTimeout(() => {
            manageAdCloseEvent(soundCheck, false, event_name_stored);
          }, 10);
        } else {
          sendUnityMsg(event_name_stored);
        }
      } else if (args[0] == "SHOW_INTER") {
        event_name_stored = args[1];
        if (isInterstitial) {
          if (args.length > 2) {
            soundCheck = args[2];
          }
          setSound(soundCheck, false);
          setTimeout(() => {
            manageAdCloseEvent(soundCheck, false, event_name_stored);
          }, 10);
        } else {
          sendUnityMsg(event_name_stored);
        }
      }
    });
  }, []);

  return (
    <div id="playGameSection">
      <ParticleBg />
      <section className="blog-details" style={{ marginTop: 0 }}>
        <div className="overlay">
          <div className="container mobileFull">
            <div className="grid-view">
              <div className="games-section sidebar" id="sidebar-left">
                {/* <GoogleAd /> */}
                <p>Google Ads</p>
              </div>
              <div className="game-play-area">
                <div
                  className="game-area"
                  id="game-section"
                  // style={{
                  //   width: gameData.Landscape == true ? "100%" : "fit-content",
                  // }}
                >
                  <section className={`games-container play-game ${isFullScreen ? "fullscreen" : ""}`}>
                    <div className="game-play-div" ref={screenRef}>
                      <div className="footer-play-section">
                        <div className="gameNameArrow">
                          <Link to={`/view-game/${gameData.UUID}`}>
                            <img src={leftArrowIcon} alt="Back Arrow" />
                          </Link>
                          <h4 className="game-title-bottom">{gameData.Title}</h4>
                        </div>
                        <div
                          className="fullScreenIcon"
                          onClick={isFullScreen === false ? handleFullScreen : handleBack}>
                          <img src={isFullScreen === true ? exitFullscreen : fullscreen} alt="fullscreen" />
                        </div>
                      </div>
                      <div
                        className="game-frame-container"
                        style={{
                          height: isFullScreen ? "100vh" : null,
                          //aspectRatio: gameData.Landscape ? '16 / 9' : '9 / 16'
                        }}
                        id="gameFrameContainer">
                        <iframe
                          id="game"
                          className="game-frame"
                          allowFullScreen
                          webkitAllowFullScreen
                          mozAllowFullScreen></iframe>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="games-section sidebar" id="sidebar-right">
                <ins className="adsbygoogle"
                  style={{display:"inline-block", width:200, height:800,}}
                  data-ad-client="ca-pub-6750010916802163"
                  data-ad-slot="6802522234"
                ></ins>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayGame;
