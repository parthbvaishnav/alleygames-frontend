import React, { useEffect, useState } from 'react';

const PlayGame = () => {
  const mobileWidth = 600;
  const gameKey = "?key=9gHj3sP5Kq7Rt4A1fBz0uXmN2vYc6DwE8iF7oLpQbVdSjCkMn";
  const [gameData, setGameData] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const screen = document.getElementById('fullscreen_div');

  useEffect(() => {
    const gameDetail =  {
        gamelink:"https://gamersaimstorage.s3.ap-south-1.amazonaws.com/web_games/Bubble+Pop/index.html",
        category:"",
        banner_link:"https://gamersaimstorage.s3.ap-south-1.amazonaws.com/games_images/Knife_Shoot_bener.png",
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

    await getCategory(false);
    await getSimilarGames(category);

    const handleResize = () => {
      if (window.innerWidth <= mobileWidth) {
        // Mobile view
        document.querySelector('.banner-div').classList.remove('hidden');
        document.querySelector('.game-banner').src = banner_link;
        document.querySelector('.game-logo').src = img;
        document.getElementById('game').classList.add('hidden');
        document.getElementById('side_similar_game_list').classList.add('hidden');
        document.getElementById('similar_game_list').classList.remove('hidden');
      } else {
        // Desktop view
        let frameHeight = 600;
        let frameWidth = 350;

        if (view_type === "horizontal") {
          document.getElementById('side_similar_game_list').classList.add('hidden');
          document.getElementById('similar_game_list').classList.remove('hidden');

          frameWidth = Math.round(document.getElementById('game').clientWidth - 20);
          frameHeight = Math.round((4 * frameWidth) / 7);
        } else {
          document.getElementById('side_similar_game_list').classList.remove('hidden');
          document.getElementById('similar_game_list').classList.add('hidden');

          if (document.body.clientHeight - document.querySelector('header').clientHeight <= 600) {
            frameHeight = document.body.clientHeight - document.querySelector('header').clientHeight - 20;
            frameWidth = Math.round((4 * frameHeight) / 7);
          }
        }
        
        const dimensions = `${frameWidth}/${frameHeight}`;
        document.getElementById('game').src = gamelink + gameKey;
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
    gameFrame.src = gameData.gamelink + gameKey;
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
      <section className="sidebar" id="sidebar">
        <ul className="category-list" id="cat_list">
          <span>Loading...</span>
        </ul>
        <div className="sidebar-ads">Ads</div>
      </section>

      <section className={`games-container ${!gameData ? 'hidden' : ''}`} id="game_list_section">
        <div className="game-list" id="game_list">
          <span>Loading...</span>
        </div>
        <div className="side-ads">Ads</div>
      </section>

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
          <div className="back-btn" id="back_btn" onClick={handleBack}>
            <img src="assets/img/back-icon.png" alt="back-icon" />
            <img src="assets/img/back-logo.png" alt="back-logo" className="back-logo" />
          </div>
          <iframe id="game" className="game-frame" allowFullScreen webkitAllowFullScreen mozAllowFullScreen></iframe>
          <div className="games-container game-suggestion" id="side_similar_game_list"></div>
          <div className="side-ads">Ads</div>
        </div>
        <div className="bottom-ads">Ads</div>
        <div className="games-container game-suggestion" id="similar_game_list"></div>
      </section>

    </div>
  );
};

export default PlayGame;
