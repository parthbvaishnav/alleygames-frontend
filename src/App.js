import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";
import Home from "./pages/home/home";
import Blog from "./pages/blog/blog";
import Layout from "./layout/layout";
import BlogDetails from "./pages/blog/blogDetails";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import PrivacyPolicy from "./pages/policy/privacyPolicy";
import TermsConditions from "./pages/policy/termsConditions";
import AllGame from "./pages/allGame/allGame";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import PlayGame from "./pages/playGame/playGame";
import NotFound from "./pages/notFound/notFound";
import ViewGame from "./pages/viewGame/viewGame";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export const Context = createContext();

function App() {
  const [buttonShow, setButtonShow] = useState(true)
  //  useEffect(() => {
  //   const threshold = 160;

  //   const detectDevTools = () => {
  //     return (window.outerWidth - window.innerWidth > threshold) || 
  //            (window.outerHeight - window.innerHeight > threshold);
  //   };

  //   const disableShortcuts = (event) => {
  //     if ((event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'C')) ||
  //         (event.metaKey && event.altKey && event.key === 'I') ||
  //         event.key === 'F12') {
  //       event.preventDefault();
  //     }
  //   };

  //   const disableRightClick = (event) => {
  //     event.preventDefault();
  //   };

  //   const checkDevToolsOnLoad = () => {
  //     if (detectDevTools()) {
  //       setInterval(() => {          
  //         return window.location.href="*"
  //       }, 5000);
  //       // alert("Please close Developer Tools to proceed.");
  //     }
  //   };

  //   window.addEventListener('keydown', disableShortcuts);
  //   window.addEventListener('contextmenu', disableRightClick);

  //   // Check if DevTools is open when the page loads
  //   checkDevToolsOnLoad();

  //   return () => {
  //     window.removeEventListener('keydown', disableShortcuts);
  //     window.removeEventListener('contextmenu', disableRightClick);
  //   };
  // }, []);
  const handleFullscreen = () => {
    setButtonShow(false)
    const elem = document.documentElement; 
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(err => {
        console.error("Fullscreen request failed:", err);
      });
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen().catch(err => {
        console.error("Fullscreen request failed:", err);
      });
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen().catch(err => {
        console.error("Fullscreen request failed:", err);
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        document.querySelector(".fullScreenButton")?.classList.add("show");
      } else {
        document.querySelector(".fullScreenButton")?.classList.remove("show");
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <Provider store={store}>
      {window.innerWidth <= 992 && buttonShow ? 
        <div className="fullScreenButton">
          <a className="cmn-btn play-now" onClick={handleFullscreen}>Go Fullscreen</a>
        </div>
        :
        null
      }
      <BrowserRouter>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/games" element={<AllGame />} />
            <Route path="/view-game/:id" element={<ViewGame />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogdetails/:id" element={<BlogDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsConditions" element={<TermsConditions />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/game/:id" element={<PlayGame />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
