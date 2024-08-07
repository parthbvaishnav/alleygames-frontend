import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext } from "react";
import Home from "./pages/home/home";
import Blog from "./pages/blog/blog";
import Layout from "./layout/layout";
import BlogDetails from "./pages/blog/blogDetails";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import PrivacyPolicy from "./pages/policy/privacyPolicy";
import TermsConditions from "./pages/policy/termsConditions";
import AllGame from "./pages/allGame/allGame";

export const Context = createContext();

function App() {
  return (
    <Context.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
               <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/allGame" element={<AllGame />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blogdetails" element={<BlogDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} /> 
              <Route path="/TermsConditions" element={<TermsConditions />} /> 
            </Route>
          </Routes>
        </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
