
// import "./styles.css";

import React from "react";
import "./index.css";
import {BrowserRouter,HashRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import News from "./components/pages/News";
import Profile from "./components/pages/Profile";
import SlideShow from "./components/pages/SlideShow";

function App() {
  return (
    <div classNameName="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/slide" element={<SlideShow/>}/>
        </Routes>
      </HashRouter>
      
    </div>

  );
}

export default App;
