import React, { useEffect, useState } from 'react';
import { gameslogo1, MemberBgImage, playicon, TeamImage1, TeamImage2, TeamImage3, TeamImage4, TeamImage5, TeamImage6, TeamImage7, TeamImage8 } from '../../utils/ImagesLoad';
import { Link } from 'react-router-dom';
import { getAllGame } from '../../utils/indexService';

const GameList = () => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {      
    getAllListGame();
  }, []);

  const getAllListGame = () => {
    getAllGame().then((data) => {    
      setGameData(data);
    });
  };

  return (
    <div className="all-items">
      {gameData.map((game, index) => (
        <div key={index} className="single-item">
          <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
            <div className="bg-area">
              <img className="bg-item" src={game.Banner_image} alt="gamestabicon"/>
            </div>
            <Link className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" to={game.Game_link || "https://www.youtube.com/watch?v=Djz8Nc0Qxwk"}>
              <img src={playicon} alt="icon"/>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
