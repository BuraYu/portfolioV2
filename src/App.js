import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";

import SidebarToggle from "./components/SidebarToggle";
import Modal from "./components/Modal";
import projects from "./data/data.js";

// import berlinBear from "./images/gave_me_the_looks_3.png";
import { SocialIcon } from "react-social-icons";
import underConstruction from "./images/under_construction.svg";
import glowingArrow from "./images/return.png";

import reactIcon from "./icons/react-svgrepo-com.svg";
import javascriptIcon from "./icons/javascript-svgrepo-com.svg";
import typescriptIcon from "./icons/typescript-svgrepo-com.svg";
import nodeIcon from "./icons/node-16-svgrepo-com.svg";
import sassIcon from "./icons/sass-svgrepo-com.svg";
import mongoIcon from "./icons/mongodb-svgrepo-com.svg";
import nextJsIcon from "./icons/nextjs-fill-svgrepo-com.svg";

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
          <div className="main-content-wrapper">
            <img
              src={underConstruction}
              alt=""
              className="under-construction"
            />
            {toggleSidebar ? null : (
              <img src={glowingArrow} alt="" className="arrow" />
            )}

            <div class="parent">
              <div class="div1 bento-box">
                <div className="my-name-is-wrapper">
                  <h2>Hello</h2>
                  <h3>my name is</h3>
                </div>
                <div className="name_container">
                  <h1>Burak</h1>
                </div>
              </div>
              <div class="div2 bento-box">
                <div className="chat-container">
                  <div className="super-chat">
                    <p>
                      <span>BerlinDieter: </span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Similique, sint obcaecati. Reprehenderit ipsa enim
                      doloribus a facilis. Dolores, libero consectetur.
                    </p>
                  </div>
                  <div className="super-chat">
                    <p>
                      <span>BerlinDieter: </span>
                      ldfasdfasdfdf
                    </p>
                  </div>
                  <div className="super-chat">
                    <p>
                      <span>BerlinDieter: </span>
                      ldfasdfasdfdf
                    </p>
                  </div>
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Type a message..." />
                  <button>Send</button>
                </div>
              </div>
              <div class="div3 bento-box">
                <h2 className="bento-header">socials.</h2>
                <div className="social-links-container">
                  <SocialIcon
                    className="custom-class"
                    url="http://www.github.com/burayu"
                  />
                  <SocialIcon url="https://www.linkedin.com/in/buraky%C3%BCksel-/" />
                  <SocialIcon url="http://www.xing.de/burayu" />
                  <SocialIcon url="mailto:burak.yueksel@hotmail.com" />
                </div>
              </div>
              <div class="div4 bento-box">
                <h2 className="bento-header">techstack.</h2>

                <div className="icon-container-wrapper">
                  <div className="icon-container">
                    <img src={reactIcon} alt="react icon" />
                    <p>React</p>
                  </div>
                  <div className="icon-container">
                    <img src={javascriptIcon} alt="react icon" />
                    <p>JavaScript</p>
                  </div>
                  <div className="icon-container">
                    <img src={typescriptIcon} alt="react icon" />
                    <p>Typescript</p>
                  </div>
                  <div className="icon-container">
                    <img src={nextJsIcon} alt="react icon" />
                    <p>NextJS</p>
                  </div>
                  <div className="icon-container">
                    <img src={mongoIcon} alt="react icon" />
                    <p>MongoDB</p>
                  </div>
                  <div className="icon-container">
                    <img src={sassIcon} alt="react icon" />
                    <p>Sass/SCSS</p>
                  </div>
                  <div className="icon-container">
                    <img src={nodeIcon} alt="react icon" />
                    <p>NodeJS</p>
                  </div>
                </div>
              </div>
              <div class="div5 bento-box">
                <h2 className="bento-header">Who am i.</h2>
                <p>Fullstack Dev based in Berlin</p>
                {/* <img src={berlinBear} alt="Logo: Berlin Bear" /> */}
              </div>
              <div class="div6 bento-box">
                <h2 className="bento-header">current project.</h2>
                <Modal />
              </div>
              <div class="div7 bento-box">
                <h2 className="bento-header">Add what here?</h2>
              </div>
            </div>
          </div>
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
