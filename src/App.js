
// import "./styles.css";

import React from "react";
import "./index.css";
import {HashRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import News from "./components/pages/News";
import Profile from "./components/pages/Profile";

import SlideShow from "./components/pages/SlideShow";
import Dashboard from "./backend/pages/Dashboard";
import New from "./backend/pages/New";
import Slides from "./backend/pages/Slides";
import Logout from "./backend/pages/logout";
import Profiles from "./backend/pages/Profiles";
import Login from "./backend/pages/Login";

function App() {
  return (
    <div className="App" style={{borderLeft: "8px solid #a19810", borderRight: "8px solid #a19810"}}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/profile" element={<Profile/>}/>

          <Route path="/slide" element={<SlideShow/>}/>
          <Route path="/admin/dashboard" exact element={<Dashboard/>}/>
          <Route path="/admin/slides" element={<Slides/>}/>
          <Route path="/admin/profile" element={<Profiles/>}/>
          <Route path="/admin/news" element={<New/>}/>
          <Route path="/admin/logout" element={<Logout/>}/>
          <Route path="/admin/login" element={<Login/>}/>
        </Routes>
      </HashRouter>
      
    </div>

  );
}

export default App;
