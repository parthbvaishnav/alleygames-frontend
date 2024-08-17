import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllGame } from "../../utils/indexService";
import { useDispatch, useSelector } from "react-redux";
import { setGameLinkKey } from "../../redux/reducers/gameLinkReducer";

const GameList = () => {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.games.gameList);
  const loading = useSelector((state) => state.status.loading);
  const error = useSelector((state) => state.status.error);
  const filterKey = useSelector((state) => state.filter.filterKey);
  const categoryKey = useSelector((state) => state.category_filter.filterCategoryKey);

  useEffect(() => {
    if (gameData.length === 0 && !loading && !error) {
      dispatch(getAllGame());
    }
  }, [dispatch, gameData.length, loading, error]);

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
    <div className="all-items">
      {gameData.map((game, index) => (
        <Link
          // to={game.Game_link}
          to={'/playGame'}
          key={index}
          className="single-item"
          onClick={()=>{
            dispatch(setGameLinkKey(game)); 
          }}
          onMouseEnter={(e) =>{
            const imgElement = e.currentTarget.querySelector("img");
            if (imgElement && game.Video_link) {
              imgElement.style.display = 'block';
              imgElement.style.opacity = '0';
              imgElement.style.visibility = 'hidden';
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
  );
};

export default GameList;
