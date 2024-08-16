import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllGame } from "../../utils/indexService";
import { useDispatch, useSelector } from "react-redux";

const GameList = () => {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.games.gameList);
  const loading = useSelector((state) => state.games.loading);
  const error = useSelector((state) => state.games.error);

  useEffect(() => {
    if (gameData.length <= 0) {
      dispatch(getAllGame());
    }
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
    <div className="all-items">
      {gameData.map((game, index) => (
        <Link
          to={game.Game_link}
          key={index}
          className="single-item"
          onMouseEnter={(e) =>
            handleMouseEnter(e.currentTarget.querySelector("video"))
          }
          onMouseLeave={(e) =>
            handleMouseLeave(e.currentTarget.querySelector("video"))
          }
        >
          <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
            <div className="bg-area">
              <img
                className="bg-item"
                src={game.Banner_image}
                alt="gamestabicon"
              />
              <video
                className="bg-item"
                src={game.Video_link}
                muted
                onError={handleVideoError}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GameList;
