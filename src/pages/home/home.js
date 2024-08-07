import React from 'react'
import '../../App.css';
import GameList from '../../components/game-containers/gameList';
import { btcicon2, countericon1, countericon2, dash, emailicon, etc, featuresicon1, featuresicon2, featuresicon3, featuresicon4, howworksicon1, howworksicon2, howworksicon3, jackpoticon, jackpotimage1, jackpotimage2, jackpotimage3, jackpotimage4, populargameimage1, populargameimage2, populargameimage3, populargameimage4, populargameimage5, populargameimage6, populargameitem, referillus, refershape, security, tableimage1, trx } from '../../utils/ImagesLoad';
// import Loader from '../../components/loader/loader';

const Home = () => {
  return (
    <div>
        {/* <Loader/> */}
        {/* <GameList/> */}
        
      <div className="log-reg">
          <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="modal fade" id="loginMod">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header justify-content-center">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <ul className="nav log-reg-btn d-none justify-content-around">
                                    <li className="bottom-area" role="presentation">
                                        <button className="nav-link" id="regArea-tab" data-bs-toggle="tab" data-bs-target="#regArea" type="button" role="tab" aria-controls="regArea" aria-selected="false">
                                            SIGN UP
                                        </button>
                                    </li>
                                    <li className="bottom-area" role="presentation">
                                        <button className="nav-link active" id="loginArea-tab" data-bs-toggle="tab" data-bs-target="#loginArea" type="button" role="tab" aria-controls="loginArea" aria-selected="true">
                                            LOGIN
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="loginArea" role="tabpanel" aria-labelledby="loginArea-tab">
                                        <div className="login-reg-content">
                                            <div className="modal-body">
                                                <div className="form-area">
                                                    <form action="#">
                                                        <div className="section-text text-center">
                                                            <h3 className="title">Welcome Back</h3>
                                                            <p>Not a member ? <a href="javascript:void(0)" className="reg-btn">Register</a></p>
                                                        </div>
                                                        <div className="input-area d-flex align-items-center">
                                                            <img src={emailicon} alt="icon"/>
                                                            <input type="text" placeholder="Email"/>
                                                        </div>
                                                        <div className="input-area d-flex align-items-center">
                                                            <img src={security} alt="icon"/>
                                                            <input type="text" placeholder="Password"/>
                                                        </div>
                                                        <div className="checkbox-item d-flex justify-content-between">
                                                            <label className="checkbox-single d-flex align-items-center">
                                                                <span className="content-area">
                                                                    <span className="checkbox-area d-flex">
                                                                        <input type="checkbox"/>
                                                                        <span className="checkmark"></span>
                                                                    </span>
                                                                    <span className="item-title d-flex align-items-center">
                                                                        <span>Remember me</span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <a href="javascript:void(0)">Forget Password</a>
                                                        </div>
                                                        <div className="btn-area text-center">
                                                            <a href="javascript:void(0)" className="cmn-btn mt-4">Login
                                                                <i className="icon-d-right-arrow-2"></i>
                                                            </a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="regArea" role="tabpanel" aria-labelledby="regArea-tab">
                                        <div className="login-reg-content regMode">
                                            <div className="modal-body">
                                                <div className="form-area">
                                                    <form action="#">
                                                        <div className="section-text text-center">
                                                            <h5 className="sub-title">Ready to get started?</h5>
                                                            <h3 className="title">Welcome Bonus €1,500 + 270 FS</h3>
                                                            <p>Already have an member ? <a href="javascript:void(0)" className="log-btn">Login</a></p>
                                                        </div>
                                                        <div className="input-area d-flex align-items-center">
                                                            <img src={emailicon} alt="icon"/>
                                                            <input type="text" placeholder="Email"/>
                                                        </div>
                                                        <div className="input-area d-flex align-items-center">
                                                            <img src={security} alt="icon"/>
                                                            <input type="text" placeholder="Password"/>
                                                        </div>
                                                        <div className="sidebar-single-item">
                                                            <label className="checkbox-single d-flex">
                                                                <span className="content-area">
                                                                    <span className="checkbox-area d-flex">
                                                                        <input type="checkbox" checked="checked"/>
                                                                        <span className="checkmark"></span>
                                                                    </span>
                                                                    <span className="item-title d-flex align-items-center">
                                                                        <span>I am at least 18 years of age and I have read,
                                                                            accepted and agreed to the <u><a href="javascript:void(0)">Privacy Policy</a>,
                                                                                Bonus T&C, <a href="javascript:void(0)">Terms and Conditions</a></u>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <label className="checkbox-single d-flex align-items-center">
                                                                <span className="content-area">
                                                                    <span className="checkbox-area d-flex">
                                                                        <input type="checkbox"/>
                                                                        <span className="checkmark"></span>
                                                                    </span>
                                                                    <span className="item-title d-flex align-items-center">
                                                                        <span>I want to receive promotions by e-mail.</span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <div className="btn-area text-center">
                                                                <a href="javascript:void(0)" className="cmn-btn mt-4">Get Start Now
                                                                    <i className="icon-d-right-arrow-2"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
    <section className="banner-section index">
        <div className="overlay">
            <div className="banner-content">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-8">
                            <div className="main-content">
                                <div className="top-area section-text">
                                    <h5 className="sub-title">Welcome To Gaming World</h5>
                                    <h1 className="title">Next Level <span>Crypto Gaming</span> Platform</h1>
                                    <p className="xlr">Mind-blowing bonuses. Zero withdrawal fees. Flash-like customer</p>
                                    <div className="btn-area mt-30">
                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#loginMod" className="cmn-btn reg">Sign Up
                                            <i className="icon-d-right-arrow-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="counter-section">
            <div className="container wow fadeInUp">
                <div className="main-content">
                    <div className="row cus-mar">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-box d-flex align-items-center">
                                <div className="img-area">
                                    <img src={countericon1} alt="icon"/>
                                </div>
                                <div className="text-area">
                                    <h6>Weekly Draw Prizes</h6>
                                    <h3>$<span className="counter">1350</span></h3>
                                    <p>Next Draw in <span>04d 21h 46m</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="single-box second d-flex align-items-center">
                                <div className="img-area">
                                    <img src={countericon2} alt="icon"/>
                                </div>
                                <div className="text-area">
                                    <h6>Paid Overall</h6>
                                    <h3>$<span className="counter">1144624</span></h3>
                                    <p>Overall Winnings <span>paid to players</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="popular-game">
        <div className="overlay pt-120 pb-120">
            <div className="abs-item">
                <img src={populargameitem} alt="icon"/>
            </div>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp">
                    <div className="col-lg-6 text-center">
                        <div className="section-text">
                            <h5 className="sub-title">Easy way for crypto Play</h5>
                            <h2 className="title">Popular Game</h2>
                            <p>Unparalleled slots to give lovers of the gambling world an exciting gaming experience par excellence</p>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp">
                    <div className="games-carousel">
                        <div className="single">
                            <div className="single-box">
                                <img src={populargameimage1} alt="Image"/>
                            </div>
                        </div>
                        <div className="single">
                            <div className="single-box">
                                <img src={populargameimage2} alt="Image"/>
                            </div>
                        </div>
                        <div className="single">
                            <div className="single-box">
                                <img src={populargameimage3} alt="Image"/>
                            </div>
                        </div>
                        <div className="single">
                            <div className="single-box">
                                <img src={populargameimage4} alt="Image"/>
                            </div>
                        </div>
                        <div className="single">
                            <div className="single-box">
                                <img src={populargameimage5} alt="Image"/>
                            </div>
                        </div>
                        <div className="single">
                            <div className="single-box">
                                <img src={populargameimage6} alt="Image"/>
                            </div>
                        </div>
                        <div className="single">
                            <div className="single-box">
                                <img src={populargameimage3} alt="Image"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="btn-area mt-40 text-center">
                            <a href="games.html" className="cmn-btn">
                                All Games
                                <i className="icon-d-right-arrow-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="features">
        <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <div className="section-top">
                            <div className="section-text">
                                <h5 className="sub-title">The Fastest Withdrawals In The Galaxy</h5>
                                <h2 className="title">Enjoy fast, secure withdrawals at Casino Bizera.</h2>
                                <p>Find gamers who care about the same things you do — whether you have shared values or common goals — and connect with them in a meaningful way.</p>
                            </div>
                            <div className="btn-area">
                                <a href="games.html" className="cmn-btn">
                                    Enter our Universe
                                    <i className="icon-d-right-arrow-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row cus-mar pt-120">
                    <div className="col-xl-3 col-sm-6">
                        <div className="single-box">
                            <div className="icon-box">
                                <img src={featuresicon1} alt="Image"/>
                            </div>
                            <h3>100</h3>
                            <p>Welcome Bonus</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="single-box second">
                            <div className="icon-box">
                                <img src={featuresicon2} alt="Image"/>
                            </div>
                            <h3>10%</h3>
                            <p>Cash Back </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="single-box third">
                            <div className="icon-box">
                                <img src={featuresicon3} alt="Image"/>
                            </div>
                            <h3>5000%</h3>
                            <p>Games</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="single-box fourth">
                            <div className="icon-box">
                                <img src={featuresicon4} alt="Image"/>
                            </div>
                            <h3>100%</h3>
                            <p>Scure & Stable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="how-works">
        <div className="overlay pb-120">
            <div className="container wow fadeInUp">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-header text-center">
                            <h5 className="sub-title">How it works</h5>
                            <h2 className="title">It’s Really Easy!</h2>
                            <p>It’s easier than you think.Follow 3 simple easy steps</p>
                        </div>
                    </div>
                </div>
                <div className="row cus-mar">
                    <div className="col-xl-4 col-sm-6">
                        <div className="single-box text-center">
                            <div className="thumb">
                                <img src={howworksicon1} alt="icon"/>
                            </div>
                            <div className="text-area">
                                <h5>Instant Register</h5>
                                <p>Instant Register within 5 minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                        <div className="single-box mid text-center">
                            <div className="thumb">
                                <img src={howworksicon2} alt="icon"/>
                            </div>
                            <div className="text-area">
                                <h5>Fastest Deposit</h5>
                                <p>Deposit with Fastest Lightning Network</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                        <div className="single-box text-center">
                            <div className="thumb">
                                <img src={howworksicon3} alt="icon"/>
                            </div>
                            <div className="text-area">
                                <h5>Play and get Win</h5>
                                <p>Get fastest Withdraw with Lightning Network</p>
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
    <section className="total-jackpot">
        <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-area text-center">
                            <h5 className="sub-title">Latest Winners</h5>
                            <h3 className="title">122 163 738,00 EUR</h3>
                            <div className="btn-area mt-40">
                                <a href="games.html" className="cmn-btn">
                                    All Jackpot Games
                                    <i className="icon-d-right-arrow-2"></i>
                                </a>
                            </div>
                            <div className="icon-img"><img src={jackpoticon} alt="icon"/></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="title mb-20 d-flex justify-content-between">
                            <h4>Jackpot Games</h4>
                            <a href="javascript:void(0)">Show All</a>
                        </div>
                        <div className="jackpot-carousel">
                            <div className="single-slide">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={jackpotimage1} alt="icon"/>
                                    </div>
                                    <div className="img-box">
                                        <img src={jackpotimage2} alt="icon"/>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={jackpotimage3} alt="icon"/>
                                    </div>
                                    <div className="img-box">
                                        <img src={jackpotimage1} alt="icon"/>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={jackpotimage4} alt="icon"/>
                                    </div>
                                    <div className="img-box">
                                        <img src={jackpotimage3} alt="icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="refer-section">
        <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
                <div className="shape-area">
                    <img src={refershape} alt="Image"/>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 order-lg-0 order-1">
                        <div className="bg-img d-rtl">
                            <img src={referillus} alt="Image" className="max-un"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-text">
                            <h5 className="sub-title">Earn more with</h5>
                            <h2 className="title">Refer and Earn</h2>
                            <p>When you successfully join bizera Partners, you will automatically receive an amazing 30% to 50% Revenue Share based on the number of New Depositing Customers you send our way.</p>
                        </div>
                        <div className="btn-area">
                            <a href="javascript:void(0)" className="cmn-btn reg" data-bs-toggle="modal" data-bs-target="#loginMod">
                                Join Now
                                <i className="icon-d-right-arrow-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home
