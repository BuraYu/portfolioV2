import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  const [isBackendOpen, setIsBackendOpen] = useState(false);
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const toggleBackend = () => {
    setIsBackendOpen(!isBackendOpen);
  };
  const toggleFrontend = () => setIsFrontendOpen(!isFrontendOpen);

  const toggleSidebarVisibility = () => {
    setToggleSidebar(!toggleSidebar);
  };

  const projects = [
    {
      name: "Project 1",
      url: "/project1",
      title: "Shortly",
      description: "LinkShortener",
      component: null,
      category: "backend",
      isExternal: true,
      externalUrl: "https://link-shortener-sand.vercel.app/",
    },

    {
      name: "Project 3",
      url: "/project3",
      title: "BenTo",
      description:
        "An online store for browsing and purchasing your favorite products.",
      component: null,
      category: "frontend",
      isExternal: true,
      externalUrl: "https://burayu.github.io/bento/",
    },
    {
      name: "Project 4",
      url: "/project4",
      title: "fylo",
      description: "CyberSec company that stores files.",
      component: null,
      category: "frontend",
      isExternal: true,
      externalUrl: "https://burayu.github.io/fylo/",
    },
    {
      name: "Project 5",
      url: "/project5",
      title: "AdviceAPI",
      description: "Get your daily advice here.",
      component: null,
      category: "frontend",
      isExternal: true,
      externalUrl: "https://burayu.github.io/adviceAPI/",
    },
    {
      name: "Project 6",
      url: "/project6",
      title: "TechBook",
      description: "Join the ultimate tech community.",
      component: null,
      category: "frontend",
      isExternal: true,
      externalUrl: "https://techbook-sigma.vercel.app/",
    },
  ];

  return (
    <Router>
      <div className="App">
        <div className={`sidebar ${toggleSidebar ? "active" : "hidden"}`}>
          <h2>Projects</h2>

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
        </div>

        {/* Sidebar Toggle Icon */}
        <button className="sidebar-toggle" onClick={toggleSidebarVisibility}>
          {toggleSidebar ? (
            <div className="hide-sidebar-label hide-sidebar">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.4955 7.44088C3.54724 8.11787 2.77843 8.84176 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C13.2958 19 14.4799 18.8108 15.5523 18.4977L13.8895 16.8349C13.2936 16.9409 12.6638 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366C4.23754 10.2097 4.99526 9.50784 5.93214 8.87753L4.4955 7.44088Z"
                  fill="#333"
                />
                <path
                  d="M8.53299 11.4784C8.50756 11.6486 8.49439 11.8227 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5C12.1716 15.5 12.3458 15.4868 12.516 15.4614L8.53299 11.4784Z"
                  fill="#333"
                />
                <path
                  d="M15.4661 12.4471L11.5473 8.52829C11.6937 8.50962 11.8429 8.5 11.9944 8.5C13.9274 8.5 15.4944 10.067 15.4944 12C15.4944 12.1515 15.4848 12.3007 15.4661 12.4471Z"
                  fill="#333"
                />
                <path
                  d="M18.1118 15.0928C19.0284 14.4702 19.7715 13.7805 20.3413 13.1634C20.9657 12.4872 20.9657 11.5128 20.3413 10.8366C18.8117 9.18002 16.0331 7 12 7C11.3594 7 10.7505 7.05499 10.1732 7.15415L8.50483 5.48582C9.5621 5.1826 10.7272 5 12 5C16.8112 5 20.0833 7.60905 21.8107 9.47978C23.1426 10.9222 23.1426 13.0778 21.8107 14.5202C21.2305 15.1486 20.476 15.8603 19.5474 16.5284L18.1118 15.0928Z"
                  fill="#333"
                />
                <path
                  d="M2.00789 3.42207C1.61736 3.03155 1.61736 2.39838 2.00789 2.00786C2.39841 1.61733 3.03158 1.61733 3.4221 2.00786L22.0004 20.5862C22.391 20.9767 22.391 21.6099 22.0004 22.0004C21.6099 22.3909 20.9767 22.3909 20.5862 22.0004L2.00789 3.42207Z"
                  fill="#ff0000"
                />
              </svg>
              <span className="hide-sidebar-font">Hide Sidebar</span>
            </div>
          ) : (
            <div className="hide-sidebar-label show-sidebar">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Edit / Show">
                  <g id="Vector">
                    <path
                      d="M3.5868 13.7788C5.36623 15.5478 8.46953 17.9999 12.0002 17.9999C15.5308 17.9999 18.6335 15.5478 20.413 13.7788C20.8823 13.3123 21.1177 13.0782 21.2671 12.6201C21.3738 12.2933 21.3738 11.7067 21.2671 11.3799C21.1177 10.9218 20.8823 10.6877 20.413 10.2211C18.6335 8.45208 15.5308 6 12.0002 6C8.46953 6 5.36623 8.45208 3.5868 10.2211C3.11714 10.688 2.88229 10.9216 2.7328 11.3799C2.62618 11.7067 2.62618 12.2933 2.7328 12.6201C2.88229 13.0784 3.11714 13.3119 3.5868 13.7788Z"
                      stroke="#333"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z"
                      stroke="#333"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
              </svg>
              <span className="show-sidebar-font">Show Sidebar</span>
            </div>
          )}
        </button>
      </div>
    </Router>
  );
};

export default App;
