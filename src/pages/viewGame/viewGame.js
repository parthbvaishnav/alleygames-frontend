import React, { useEffect, useRef, } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getGameByUUID, getSimilarGame } from '../../utils/indexService';
import { Link, useParams } from 'react-router-dom';

const ViewGame = () => {
  const screenRef = useRef(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const gameData = useSelector((state) => state.singleGame.singleGameList);
  const similarGames = useSelector((state) => state.similarGame.similarGameList);
  const loading = useSelector((state) => state.status.loading);
  const error = useSelector((state) => state.status.error);

  useEffect(() => {
      dispatch(getGameByUUID(id));      
  }, [id]);
  useEffect(() => {
    if(gameData?.Category){
      dispatch(getSimilarGame(gameData?.Category));
    }
  }, [gameData]);
    
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
                <div className="banner-content game-content-banner"></div>
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
                                    to={'/view-game/'+game.UUID}
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
                        <div className="col-lg-8" id='game-section'>
                            <div className='game-area'>
                                <section className={`games-container play-game`}>
                                    <div className="game-div" ref={screenRef} style={{backgroundImage:`url("${gameData.Banner_image}")`}}>
                                        <div className="banner-div" id='overlay-div'>
                                            <div className="game-logo-div">
                                            <img className="game-logo" src={gameData.Banner_image} alt="game-logo" />
                                            <h4 className="game-title">{gameData.Title} </h4>
                                            <Link
                                            to={'/game/'+gameData.UUID}
                                            className="cmn-btn play-now" id="link" 
                                            //onClick={handlePlayNow}
                                            >Play Now
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {gameData?.Game_description && 
                                <div className='game-area'>
                                    <div className='gameDescriptionSection'>
                                        <div dangerouslySetInnerHTML={{ __html: gameData?.Game_description }}></div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="col-lg-2 games-section sidebar" id="sidebar">
                            <div className="all-items">  
                                {similarGames.slice(Math.ceil(similarGames.length / 2)).map((game, index) => (
                                    <Link
                                        to={'/view-game/'+game.UUID}
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
                                        }}
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
        </section>
    </div>
  );
};

export default ViewGame;
