import React from 'react'
import { btcicon2, dash, etc, gameslogo1, gameslogo10,gameslogo11,gameslogo12,gameslogo13,gameslogo14,gameslogo15,gameslogo16,gameslogo17,gameslogo18, gameslogo2, gameslogo3, gameslogo4, gameslogo5, gameslogo6, gameslogo7, gameslogo8, gameslogo9, gamestabicon1, gamestabicon2, gamestabicon3, gamestabicon4, gamestabicon5, gamestabicon6, gamestabicon7, gamestabicon8, playicon, tableimage1, trx } from '../../utils/ImagesLoad'

const AllGame = () => {
  return (
    <div>
        <section className="banner-section inner-banner games">
            <div className="overlay">
                <div className="banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10">
                                <div className="main-content">
                                    <h1>Games</h1>
                                    <div className="breadcrumb-area">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb d-flex align-items-center">
                                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Games</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="games-section">
            <div className="overlay pb-120">
                <div className="top-nav">
                    <div className="container">
                        <div className="row justify-content-center wow fadeInUp">
                            <div className="col-lg-12">
                                <ul className="nav gap-2 justify-content-lg-between justify-content-start" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="slots-tab" data-bs-toggle="tab" data-bs-target="#slots" type="button" role="tab" aria-controls="slots" aria-selected="true">
                                            <img src={gamestabicon1} alt="Image"/>
                                            slots
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="table-tab" data-bs-toggle="tab" data-bs-target="#table" type="button" role="tab" aria-controls="table" aria-selected="false">
                                            <img src={gamestabicon2} alt="Image"/>
                                            table
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="live-tab" data-bs-toggle="tab" data-bs-target="#live" type="button" role="tab" aria-controls="live" aria-selected="false">
                                            <img src={gamestabicon3} alt="Image"/>
                                            live
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="jackpot-tab" data-bs-toggle="tab" data-bs-target="#jackpot" type="button" role="tab" aria-controls="jackpot" aria-selected="false">
                                            <img src={gamestabicon4} alt="Image"/>
                                            faq
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="tournament-tab" data-bs-toggle="tab" data-bs-target="#tournament" type="button" role="tab" aria-controls="tournament" aria-selected="false">
                                            <img src={gamestabicon5} alt="Image"/>
                                            tournament
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="promotions-tab" data-bs-toggle="tab" data-bs-target="#promotions" type="button" role="tab" aria-controls="promotions" aria-selected="false">
                                            <img src={gamestabicon6} alt="Image"/>
                                            promotions
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="instant-wins-tab" data-bs-toggle="tab" data-bs-target="#instant-wins" type="button" role="tab" aria-controls="instant-wins" aria-selected="false">
                                            <img src={gamestabicon7} alt="Image"/>
                                            faq
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="others-tab" data-bs-toggle="tab" data-bs-target="#others" type="button" role="tab" aria-controls="others" aria-selected="false">
                                            <img src={gamestabicon8} alt="Image"/>
                                            others
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-120">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="slots" role="tabpanel" aria-labelledby="slots-tab">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-4 col-md-7">
                                    <ul className="nav bottom-nav gap-3" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="slots-all-tab" data-bs-toggle="tab" data-bs-target="#slots-all" type="button" role="tab" aria-controls="slots-all" aria-selected="true">All</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="slots-popular-tab" data-bs-toggle="tab" data-bs-target="#slots-popular" type="button" role="tab" aria-controls="slots-popular" aria-selected="false">Popular</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="slots-new-tab" data-bs-toggle="tab" data-bs-target="#slots-new" type="button" role="tab" aria-controls="slots-new" aria-selected="false">New</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5">
                                    <form action="#">
                                        <div className="form-group input-area d-flex align-items-center">
                                            <input type="text" placeholder="Search Game" autocomplete="off"/>
                                            <button className="btn-area"><img src="assets/images/icon/search-icon.png" alt="icon"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="slots-all" role="tabpanel" aria-labelledby="slots-all-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="slots-popular" role="tabpanel" aria-labelledby="slots-popular-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="slots-new" role="tabpanel" aria-labelledby="slots-new-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="table" role="tabpanel" aria-labelledby="table-tab">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-4 col-md-7">
                                    <ul className="nav bottom-nav gap-3" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="table-all-tab" data-bs-toggle="tab" data-bs-target="#table-all" type="button" role="tab" aria-controls="table-all" aria-selected="true">All</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="table-popular-tab" data-bs-toggle="tab" data-bs-target="#table-popular" type="button" role="tab" aria-controls="table-popular" aria-selected="false">Popular</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="table-new-tab" data-bs-toggle="tab" data-bs-target="#table-new" type="button" role="tab" aria-controls="table-new" aria-selected="false">New</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5">
                                    <form action="#">
                                        <div className="form-group input-area d-flex align-items-center">
                                            <input type="text" placeholder="Search Game" autocomplete="off"/>
                                            <button className="btn-area"><img src="assets/images/icon/search-icon.png" alt="icon"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="table-all" role="tabpanel" aria-labelledby="table-all-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="table-popular" role="tabpanel" aria-labelledby="table-popular-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="table-new" role="tabpanel" aria-labelledby="table-new-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="live" role="tabpanel" aria-labelledby="live-tab">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-4 col-md-7">
                                    <ul className="nav bottom-nav gap-3" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="live-all-tab" data-bs-toggle="tab" data-bs-target="#live-all" type="button" role="tab" aria-controls="live-all" aria-selected="true">All</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="live-popular-tab" data-bs-toggle="tab" data-bs-target="#live-popular" type="button" role="tab" aria-controls="live-popular" aria-selected="false">Popular</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="live-new-tab" data-bs-toggle="tab" data-bs-target="#live-new" type="button" role="tab" aria-controls="live-new" aria-selected="false">New</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5">
                                    <form action="#">
                                        <div className="form-group input-area d-flex align-items-center">
                                            <input type="text" placeholder="Search Game" autocomplete="off"/>
                                            <button className="btn-area"><img src="assets/images/icon/search-icon.png" alt="icon"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="live-all" role="tabpanel" aria-labelledby="live-all-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="live-popular" role="tabpanel" aria-labelledby="live-popular-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="live-new" role="tabpanel" aria-labelledby="live-new-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="jackpot" role="tabpanel" aria-labelledby="jackpot-tab">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-4 col-md-7">
                                    <ul className="nav bottom-nav gap-3" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="jackpot-all-tab" data-bs-toggle="tab" data-bs-target="#jackpot-all" type="button" role="tab" aria-controls="jackpot-all" aria-selected="true">All</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="jackpot-popular-tab" data-bs-toggle="tab" data-bs-target="#jackpot-popular" type="button" role="tab" aria-controls="jackpot-popular" aria-selected="false">Popular</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="jackpot-new-tab" data-bs-toggle="tab" data-bs-target="#jackpot-new" type="button" role="tab" aria-controls="jackpot-new" aria-selected="false">New</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5">
                                    <form action="#">
                                        <div className="form-group input-area d-flex align-items-center">
                                            <input type="text" placeholder="Search Game" autocomplete="off"/>
                                            <button className="btn-area"><img src="assets/images/icon/search-icon.png" alt="icon"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="jackpot-all" role="tabpanel" aria-labelledby="jackpot-all-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="jackpot-popular" role="tabpanel" aria-labelledby="jackpot-popular-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="jackpot-new" role="tabpanel" aria-labelledby="jackpot-new-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tournament" role="tabpanel" aria-labelledby="tournament-tab">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-4 col-md-7">
                                    <ul className="nav bottom-nav gap-3" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="tournament-all-tab" data-bs-toggle="tab" data-bs-target="#tournament-all" type="button" role="tab" aria-controls="tournament-all" aria-selected="true">All</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="tournament-popular-tab" data-bs-toggle="tab" data-bs-target="#tournament-popular" type="button" role="tab" aria-controls="tournament-popular" aria-selected="false">Popular</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="tournament-new-tab" data-bs-toggle="tab" data-bs-target="#tournament-new" type="button" role="tab" aria-controls="tournament-new" aria-selected="false">New</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5">
                                    <form action="#">
                                        <div className="form-group input-area d-flex align-items-center">
                                            <input type="text" placeholder="Search Game" autocomplete="off"/>
                                            <button className="btn-area"><img src="assets/images/icon/search-icon.png" alt="icon"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tournament-all" role="tabpanel" aria-labelledby="tournament-all-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tournament-popular" role="tabpanel" aria-labelledby="tournament-popular-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tournament-new" role="tabpanel" aria-labelledby="tournament-new-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="promotions" role="tabpanel" aria-labelledby="promotions-tab">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-4 col-md-7">
                                    <ul className="nav bottom-nav gap-3" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="promotions-all-tab" data-bs-toggle="tab" data-bs-target="#promotions-all" type="button" role="tab" aria-controls="promotions-all" aria-selected="true">All</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="promotions-popular-tab" data-bs-toggle="tab" data-bs-target="#promotions-popular" type="button" role="tab" aria-controls="promotions-popular" aria-selected="false">Popular</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="promotions-new-tab" data-bs-toggle="tab" data-bs-target="#promotions-new" type="button" role="tab" aria-controls="promotions-new" aria-selected="false">New</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5">
                                    <form action="#">
                                        <div className="form-group input-area d-flex align-items-center">
                                            <input type="text" placeholder="Search Game" autocomplete="off"/>
                                            <button className="btn-area"><img src="assets/images/icon/search-icon.png" alt="icon"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="promotions-all" role="tabpanel" aria-labelledby="promotions-all-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="promotions-popular" role="tabpanel" aria-labelledby="promotions-popular-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="promotions-new" role="tabpanel" aria-labelledby="promotions-new-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="instant-wins" role="tabpanel" aria-labelledby="instant-wins-tab">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-4 col-md-7">
                                    <ul className="nav bottom-nav gap-3" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="instant-wins-all-tab" data-bs-toggle="tab" data-bs-target="#instant-wins-all" type="button" role="tab" aria-controls="instant-wins-all" aria-selected="true">All</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="instant-wins-popular-tab" data-bs-toggle="tab" data-bs-target="#instant-wins-popular" type="button" role="tab" aria-controls="instant-wins-popular" aria-selected="false">Popular</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="instant-wins-new-tab" data-bs-toggle="tab" data-bs-target="#instant-wins-new" type="button" role="tab" aria-controls="instant-wins-new" aria-selected="false">New</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5">
                                    <form action="#">
                                        <div className="form-group input-area d-flex align-items-center">
                                            <input type="text" placeholder="Search Game" autocomplete="off"/>
                                            <button className="btn-area"><img src="assets/images/icon/search-icon.png" alt="icon"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="instant-wins-all" role="tabpanel" aria-labelledby="instant-wins-all-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="instant-wins-popular" role="tabpanel" aria-labelledby="instant-wins-popular-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="instant-wins-new" role="tabpanel" aria-labelledby="instant-wins-new-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="others" role="tabpanel" aria-labelledby="others-tab">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-4 col-md-7">
                                    <ul className="nav bottom-nav gap-3" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="others-all-tab" data-bs-toggle="tab" data-bs-target="#others-all" type="button" role="tab" aria-controls="others-all" aria-selected="true">All</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="others-popular-tab" data-bs-toggle="tab" data-bs-target="#others-popular" type="button" role="tab" aria-controls="others-popular" aria-selected="false">Popular</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="others-new-tab" data-bs-toggle="tab" data-bs-target="#others-new" type="button" role="tab" aria-controls="others-new" aria-selected="false">New</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5">
                                    <form action="#">
                                        <div className="form-group input-area d-flex align-items-center">
                                            <input type="text" placeholder="Search Game" autocomplete="off"/>
                                            <button className="btn-area"><img src="assets/images/icon/search-icon.png" alt="icon"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="others-all" role="tabpanel" aria-labelledby="others-all-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="others-popular" role="tabpanel" aria-labelledby="others-popular-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo1} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo2} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo3} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo4} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo6} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo7} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="others-new" role="tabpanel" aria-labelledby="others-new-tab">
                                    <div className="all-items">
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo16} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo17} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo18} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo5} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo8} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo9} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo10} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo11} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo12} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo13} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo14} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                <div className="bg-area">
                                                    <img className="bg-item" src={gameslogo15} alt="image"/>
                                                </div>
                                                <a className="mfp-iframe popupvideo position-absolute d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <img src={playicon} alt="icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area mt-3 text-center">
                                        <a href="javascript:void(0)" className="cmn-btn">
                                            Load More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="drops-wins">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-md-6">
                            <div className="section-header">
                                <h5 className="sub-title">Drops & Wins ( Live Casino)</h5>
                                <h2 className="title">Easy way for crypto Play</h2>
                            </div>
                            <h2 className="currency">€500.000</h2>
                            <div className="countdown d-flex align-items-center">
                                <span>Finishes in:</span>
                                <h6>
                                    <span className="days">00</span><span className="ref">Days:</span>
                                </h6>
                                <h6>
                                    <span className="hours">00</span><span className="ref">Hrs:</span>
                                </h6>
                                <h6>
                                    <span className="minutes">00</span><span className="ref">Mins</span>
                                </h6>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-md-6">
                            <div className="right-box">
                                <h4 className="mb-30">Deposit and Play</h4>
                                <form action="#">
                                    <div className="input-field thumb-select d-flex">
                                        <input type="text" placeholder="0.001"/>
                                        <select>
                                            <option value="1">BTC</option>
                                            <option value="2">ETH</option>
                                            <option value="3">LTC</option>
                                        </select>
                                    </div>
                                    <div className="btn-area mb-30 mt-60">
                                        <a href="javascript:void(0)" className="cmn-btn w-100">
                                            Start Playing
                                            <i className="icon-d-right-arrow-2"></i>
                                        </a>
                                    </div>
                                    <p>By Clicking you agree with our</p>
                                    <div className="link-area gap-1 d-flex align-items-center justify-content-center">
                                        <a href="terms-conditions.html">Terms and Conditions,</a>
                                        <a href="privacy-policy.html">Privacy Policy</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="latest-bets">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-header text-center">
                                <h5 className="sub-title">Latest Winners</h5>
                                <h2 className="title">Latest Bets</h2>
                                <p>More and more winners are added every time! To locate the most recent winner's information</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-center">
                                <ul className="nav" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="all-bets-tab" data-bs-toggle="tab" data-bs-target="#all-bets" type="button" role="tab" aria-controls="all-bets" aria-selected="true">All Bets</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="high-rollers-tab" data-bs-toggle="tab" data-bs-target="#high-rollers" type="button" role="tab" aria-controls="high-rollers" aria-selected="false">High Rollers</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="wager-contest-tab" data-bs-toggle="tab" data-bs-target="#wager-contest" type="button" role="tab" aria-controls="wager-contest" aria-selected="false">Wager Contest</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content mt-40">
                                <div className="tab-pane fade show active" id="all-bets" role="tabpanel" aria-labelledby="all-bets-tab">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Bet Id</th>
                                                    <th scope="col">Bet Amount</th>
                                                    <th scope="col">Multiplier</th>
                                                    <th scope="col">Game</th>
                                                    <th scope="col">Profit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Tom Bass</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Karl Day </span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Poker</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Jon Arnold</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span className="loss">0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Kim Clark</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Slot Machine</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Sergio Roy</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={trx} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={trx} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Wm Dixon</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Bitclimber</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Leo Berry</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span className="loss">0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Ross Ryan</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Alton Ray</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Poker</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="high-rollers" role="tabpanel" aria-labelledby="high-rollers-tab">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Bet Id</th>
                                                    <th scope="col">Bet Amount</th>
                                                    <th scope="col">Multiplier</th>
                                                    <th scope="col">Game</th>
                                                    <th scope="col">Profit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Kim Clark</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Slot Machine</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Sergio Roy</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={trx} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={trx} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Wm Dixon</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Bitclimber</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Tom Bass</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Karl Day </span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Poker</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Jon Arnold</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span className="loss">0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Leo Berry</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span className="loss">0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Ross Ryan</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Alton Ray</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Poker</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="wager-contest" role="tabpanel" aria-labelledby="wager-contest-tab">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Bet Id</th>
                                                    <th scope="col">Bet Amount</th>
                                                    <th scope="col">Multiplier</th>
                                                    <th scope="col">Game</th>
                                                    <th scope="col">Profit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Wm Dixon</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Bitclimber</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Leo Berry</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span className="loss">0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Ross Ryan</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Alton Ray</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Poker</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Tom Bass</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Karl Day </span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Poker</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={dash} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Jon Arnold</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={etc} alt="Image"/>
                                                            <span className="loss">0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Kim Clark</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Slot Machine</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={btcicon2} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="icon-box">
                                                            <img src={tableimage1} alt="Image"/>
                                                            <span>Sergio Roy</span>
                                                        </div>
                                                    </th>
                                                    <td>b799b8724b</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={trx} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                    <td>3.00X</td>
                                                    <td className="game">Dice</td>
                                                    <td>
                                                        <div className="icon-box">
                                                            <img src={trx} alt="Image"/>
                                                            <span>0.00000051</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AllGame
