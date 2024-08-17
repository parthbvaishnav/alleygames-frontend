import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GameList from '../../components/game-containers/gameList';

const PlayGame = () => {
  const gameLink = useSelector((state) => state.gameLink.gameLinkKey);
  console.log("gameLink---------------",gameLink);
  
  const mobileWidth = 600;
  const [gameData, setGameData] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const screen = document.getElementById('fullscreen_div');

  useEffect(() => {
    const gameDetail =  {
        gamelink:gameLink.Game_link,
        category:"",
        banner_link:gameLink.Banner_image,
        img:"https://gamersaimstorage.s3.ap-south-1.amazonaws.com/games_images/Knife_Shoot_bener.png",
        view_type:"",
      }
    if (gameDetail && gameDetail !== "null") {
      setGameData(gameDetail);
      handleGameSetup(gameDetail);
    } else {
      window.location.href = "/allGame";
    }
  }, []);

  const handleGameSetup = async (data) => {
    
    const { gamelink, category, banner_link, img, view_type } = data;

    // await getCategory(false);
    // await getSimilarGames(category);

    const handleResize = () => {
      if (window.innerWidth <= mobileWidth) {
        // Mobile view
        document.querySelector('.banner-div').classList.remove('hidden');
        document.querySelector('.game-banner').src = banner_link;
        document.querySelector('.game-logo').src = img;
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
        document.getElementById('game').src = gamelink;
        document.getElementById('game').onload = () => {
          setScreenSize(dimensions);
        };

        document.getElementById('game').style.width = `${frameWidth + 10}px`;
        document.getElementById('game').style.height = `${frameHeight + 10}px`;
        document.getElementById('game').style.border = 'none';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };

  const getCategory = async (isIndexPage) => {
    // Replace with actual API call
  };

  const getSimilarGames = async (gameType) => {
    // Example API call to fetch similar games
    try {
      const response = await fetch('https://gamersaim.com/Apis/category_by_data.php', {
        method: 'POST',
        body: JSON.stringify({ type: 'category', category_name: gameType }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const gameData = await response.json();
      const gameHtml = gameData.map(game => (
        `<div class="game-item" onclick="openGame('${encodeURIComponent(JSON.stringify(game))}');">
          <img src="${game.img}" alt="game" loading="lazy" />
        </div>`
      )).join('');
      document.querySelector('.game-suggestion').innerHTML = gameHtml;
    } catch (error) {
      console.error('Failed to fetch similar games:', error);
    }
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
            <div className="banner-content">                  
            </div>
        </div>
    </section>
    <section className="blog-details">
      <div className="overlay">
          <div className="container pb-120">
              <div className="row">
                  <div className="col-lg-2 sidebar" id="sidebar">
                    <GameList />
                  </div>
                  <div className="col-lg-8 game-area">
                    <section className={`games-container play-game ${isFullScreen ? 'fullscreen' : ''}`}>
                      <div className="game-div" id="fullscreen_div">
                        <div className={`banner-div ${!gameData ? 'hidden' : ''}`}>
                          <div className="bg-banner-div">
                            <div className="bg-color"></div>
                            <img className="game-banner w-100" alt="game-banner" />
                          </div>
                          <div className="game-logo-div">
                            <img className="game-logo" alt="game-logo" />
                            <button className="play-now" onClick={handlePlayNow}>Play Now</button>
                          </div>
                        </div>
                        <iframe id="game" className="game-frame" allowFullScreen webkitAllowFullScreen mozAllowFullScreen></iframe>
                      </div>
                    </section>
                  </div>
                  <div className="col-lg-2 sidebar" id="sidebar">
                    <GameList />
                  </div>
              </div>
          </div>
      </div>
    </section>
  </div>
  );
};

export default PlayGame;
