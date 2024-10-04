import React, { useEffect, useRef, useState } from "react";
import { exitFullscreen, fullscreen, leftArrowIcon } from "../../utils/ImagesLoad";
import { useDispatch, useSelector } from "react-redux";
import { getGameByUUID, getSimilarGame } from "../../utils/indexService";
import { Link, useParams } from "react-router-dom";
import { BUCKET_URL } from "../../utils/constant";
import GoogleAd from "../AdComponent/GoogleAd";
import ParticleBg from "../../components/particleBg/particleBg";

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
    if (gameData?.Category) {
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
      frameHeight = Math.round((4 * frameWidth) / 7) - (isPortrait ? 0 : 54);
    } else {
      frameHeight = isPortrait ? document.querySelector("gameFrameContainer")?.clientHeight : document.getElementById("game-section").clientHeight - 53;
      // frameWidth = isPortrait ? Math.round((4 * frameHeight) / 7) : 732;
      frameWidth = isPortrait ? document.getElementById("gameFrameContainer").clientWidth : document.getElementById("gameFrameContainer").clientWidth - 53;
    }

    const dimensions = `${frameWidth}/${frameHeight}`;
    const gameFrame = document.getElementById("game");
    gameFrame.src = Game_link;
    gameFrame.style.width = `${frameWidth}px`;
    gameFrame.style.height = isFullScreen ? "100%" : `${frameHeight}px`;
    gameFrame.style.border = "none";
    gameFrame.onload = () => setScreenSize(dimensions);

    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement && gameFrame) {
        handleBack();
        // setIsFullScreen(false);
        // frameWidth = gameData.Landscape ? document.getElementById("game-section")?.clientWidth : document.getElementById("gameFrameContainer").clientWidth+50;
        // frameHeight = gameData.Landscape ? Math.round((4 * frameWidth) / 7) - 54 : document.getElementById("gameFrameContainer")?.clientHeight - 53;
        // const dimensions = `${frameWidth}/${frameHeight}`;
        // setScreenSize(dimensions);
        // gameFrame.style.width = `${frameWidth}px`;
        // gameFrame.style.height = `${frameHeight}px`;
      }
    });
  };

  const fullScreenGame = () => {
    const gameFrame = document.getElementById("game");
    gameFrame.onload = () => {
      gameFrame.contentWindow.postMessage("fullscreen", BUCKET_URL);
    };
  };

  const setScreenSize = (dimensions) => {
    const gameFrame = document.getElementById("game");
    gameFrame?.contentWindow.postMessage(`size_event,${dimensions}`,BUCKET_URL);
  };

  const handleFullScreen = () => {
    const screen = screenRef.current; // Access the ref instead of querying the DOM
    if (screen) {
      fullScreenGame();
      setIsFullScreen(true);
      screen.requestFullscreen().then(() => {
          let w = document.getElementById("gameFrameContainer").clientWidth;
          let h = document.getElementById("gameFrameContainer").clientHeight;
          let frameWidth = w - 0; //window.innerWidth - 80;
          let frameHeight = h - 0; //window.innerHeight - 80;
          if (!gameData.Landscape) {
            frameWidth = h / 2;
            frameHeight = h;
          }
          const dimensions = `${frameWidth}/${frameHeight}`;
          setScreenSize(dimensions);
          document.getElementById("game").style.width = `${frameWidth}px`;
          document.getElementById("game").style.height = `${frameHeight}px`;
        })
        .catch((err) =>
          console.error("Error attempting to lock screen orientation:", err)
        );
    } else {
      console.error("Fullscreen div not found");
    }
  };

  const handleBack = () => {
    setIsFullScreen(false);

    if (document.fullscreenElement) {
      document.exitFullscreen()
        .then(() => {
          const gameSection = document.getElementById("game-section");
          if (gameSection) {
            // let frameWidth = gameSection.clientWidth;
            let frameWidth = document.getElementById("gameFrameContainer").clientWidth + 50;
            let frameHeight = document.getElementById("gameFrameContainer").clientHeight;
            if (!gameData.Landscape) {
              frameWidth = document.getElementById("gameFrameContainer").clientWidth + 50;
              frameHeight = gameSection.clientHeight - 53;
            }else{
              const isPortrait = window.innerHeight > window.innerWidth;
              frameWidth = isPortrait ? window.innerWidth - 10 : document.getElementById("game-section").clientWidth || window.innerWidth - 10;
              frameHeight = Math.round((4 * frameWidth) / 7) - (isPortrait ? 0 : 54);
            }
            const dimensions = `${frameWidth}/${frameHeight}`;
            setScreenSize(dimensions);
            const gameFrame = document.getElementById("game");
            if (gameFrame) {
              gameFrame.style.width = `${frameWidth}px`;
              gameFrame.style.height = `${frameHeight}px`;
            }
          }
        })
        .catch((err) => console.error("Error exiting fullscreen:", err));
    }
  };

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
    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch((err) => console.error("Error exiting fullscreen:", err));
      }
    };
  }, []);
  const sendUnityMsg = (arg) => {
    const iframe = document.getElementById("game");
    iframe.contentWindow.postMessage("unity_event," + arg,"https://gamersaimstorage.s3.ap-south-1.amazonaws.com");
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
    sendUnityMsg(nextevent);
  };
  useEffect(() => {
    let event_name_stored = "";
    let soundCheck = "";
    let is_completeNext = false;
    let is_videoAd = false;
    let is_interstitial = false;
    window.addEventListener("message", (event) => {
      let args;
      if (event.data.toString().includes(",")) {
        args = event.data.split(",");
        console.log("agrs-------", args);
      } else {
        args = [event.data];
      }
      //STARTTIME, SHOW_BANNER, COMPLETE_NEXT, SHOW_VIDEO, SHOW_INTER, GAMEOVER, LEVELSKIP, KINFEAD,afterLevelFiald
      if (args[0] == "COMPLETE_NEXT") {
        event_name_stored = args[1];
        if (is_completeNext) {
          if (args.length > 2) {
            soundCheck = args[2];
          }
          setSound(soundCheck, false);
          manageAdCloseEvent(soundCheck, false, event_name_stored);
        } else {
          is_completeNext = true;
          sendUnityMsg(event_name_stored);
        }
      } else if (args[0] == "SHOW_VIDEO") {
        event_name_stored = args[1];
        if (is_videoAd) {
          if (args.length > 2) {
            soundCheck = args[2];
          }
          setSound(soundCheck, false);
          manageAdCloseEvent(soundCheck, false, event_name_stored);
        } else {
          is_videoAd = true;
          sendUnityMsg(event_name_stored);
        }
      } else if (args[0] == "SHOW_INTER") {
        event_name_stored = args[1];
        if (is_interstitial) {
          if (args.length > 2) {
            soundCheck = args[2];
          }
          setSound(soundCheck, false);
          manageAdCloseEvent(soundCheck, false, event_name_stored);
        } else {
          is_interstitial = true;
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
          <div className="container">
            <div className="grid-view">
                <div className="games-section sidebar" id="sidebar-left">
                  {/* <GoogleAd /> */}
                  <p>Google Ads</p>
                </div>
              <div className="game-play-area">
                <div className="game-area" id="game-section"
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
                        <div className="fullScreenIcon" onClick={isFullScreen === false ? handleFullScreen : handleBack}>
                          <img src={isFullScreen === true? exitFullscreen : fullscreen} alt="fullscreen"/>
                        </div>
                      </div>
                      <div
                        className="game-frame-container"
                        style={{
                          height: gameData.Landscape ? "auto" : isFullScreen ? "100vh" : "",
                            aspectRatio: gameData.Landscape ? '16 / 9' : '9 / 16'
                        }}
                        id="gameFrameContainer"
                      >
                        <iframe id="game" className="game-frame" allowFullScreen webkitAllowFullScreen mozAllowFullScreen ></iframe>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
                <div className="games-section sidebar" id="sidebar-left">
                  {/* <GoogleAd /> */}
                  <p>Google Ads</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayGame;
