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
        <div className={`sidebar ${toggleSidebar ? "active" : "hidden"}`}>
          <h2>Burak</h2>
          <a
            href="https://portfolio-v2-seven-lilac.vercel.app/"
            className="home"
          >
            Home
          </a>
          {/* Backend Accordion */}
          <div>
            <button onClick={toggleBackend} className="accordion-button">
              Backend {isBackendOpen ? "▲" : "▼"}
            </button>
            {isBackendOpen && (
              <div className="accordion-content">
                {projects
                  .filter((project) => project.category === "backend")
                  .map((project, index) => (
                    <Link key={index} to={project.url} className="project-link">
                      {project.title}
                    </Link>
                  ))}
              </div>
            )}
          </div>

          {/* Frontend Accordion */}
          <div>
            <button onClick={toggleFrontend} className="accordion-button">
              Frontend {isFrontendOpen ? "▲" : "▼"}
            </button>
            {isFrontendOpen && (
              <div className="accordion-content">
                {projects
                  .filter((project) => project.category === "frontend")
                  .map((project, index) => (
                    <Link key={index} to={project.url} className="project-link">
                      {project.title}
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </div>
        {/* Main Content */}
        <div className={`main-content ${toggleSidebar ? "active" : "hidden"}`}>
          <Routes>
            {projects.map((project, index) => (
              <Route
                key={index}
                path={project.url}
                element={
                  project.isExternal ? (
                    <iframe
                      src={project.externalUrl}
                      title={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    />
                  ) : (
                    project.component && <project.component />
                  )
                }
              />
            ))}
          </Routes>
          {/* Portfolio Page Content */}
          <Main toggleSidebar={toggleSidebar} />
        </div>
        {/* Sidebar Toggle Icon */}
        <SidebarToggle
          toggleSidebar={toggleSidebar}
          toggleSidebarVisibility={toggleSidebarVisibility}
        />
      </div>
    </Router>
  );
};

export default App;
