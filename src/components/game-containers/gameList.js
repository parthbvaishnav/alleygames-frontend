import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllGame } from "../../utils/indexService";
import { useDispatch, useSelector } from "react-redux";
import { setGameLinkKey } from "../../redux/reducers/gameLinkReducer";
import Loader from "../loader/loader";
const GameList = (props) => {
  const dispatch = useDispatch();
  const [totalRecords, setTotalRecords] = useState(0)
  const gameData = useSelector((state) => state.games.gameList);
  const loading = useSelector((state) => state.status.loading);
  const categoryKey = useSelector((state) => state.category_filter.filterCategoryKey);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const count = dispatch(getAllGame(categoryKey, page,props.searchFilter));
    count.then(data=>{
      setTotalRecords(data)
    })    
  }, [categoryKey, page,props.searchFilter]);
  useEffect(() => {
    setPage(1)
  }, [categoryKey]);
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
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
  return (
    <>
      <div className="all-items">
        {page===1 && loading && <Loader />}
        {gameData.map((game, index) => (
          <Link
            to={`/view-game/${game.UUID}`}
            key={index}
            className="single-item"
            onClick={() => {
              dispatch(setGameLinkKey(game));
            }}
            onMouseEnter={(e) => {
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
              handleMouseEnter(e.currentTarget.querySelector("video"));
            }}
            onMouseLeave={(e) => {
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
              handleMouseLeave(e.currentTarget.querySelector("video"));
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
      <div className="btn-area mt-3 text-center">
        {totalRecords > gameData.length ?
          <a className="cmn-btn" onClick={handleLoadMore}>
            {loading ? "Loading..." : "Load More"}
          </a>
        :null}
      </div>
    </>
  );
};

export default GameList;
