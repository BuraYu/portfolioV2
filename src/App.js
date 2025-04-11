import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";

import SidebarToggle from "./components/SidebarToggle";
import projects from "./data/data.js";
import Main from "./components/Main.jsx";

const App = () => {
  const [isBackendOpen, setIsBackendOpen] = useState(false);
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleBackend = () => {
    setIsBackendOpen(!isBackendOpen);
  };
  const toggleFrontend = () => setIsFrontendOpen(!isFrontendOpen);

  const toggleSidebarVisibility = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <Router>
      <div className="App">
        <Main toggleSidebar={toggleSidebar} />
        {/* Sidebar Toggle Icon */}
      </div>
    </Router>
  );
};

export default App;
