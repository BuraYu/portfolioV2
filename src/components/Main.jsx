import React from "react";
import Modal from "./Modal";

import { SocialIcon } from "react-social-icons";
import underConstruction from "../images/under_construction.svg";
import glowingArrow from "../images/return.png";
import Cli from "./Cli";

import reactIcon from "../icons/react-svgrepo-com.svg";
import javascriptIcon from "../icons/javascript-svgrepo-com.svg";
import typescriptIcon from "../icons/typescript-svgrepo-com.svg";
import nodeIcon from "../icons/node-16-svgrepo-com.svg";
import sassIcon from "../icons/sass-svgrepo-com.svg";
import mongoIcon from "../icons/mongodb-svgrepo-com.svg";
import nextJsIcon from "../icons/nextjs-fill-svgrepo-com.svg";

const Main = ({ toggleSidebar }) => {
  return (
    <div className="main-content-wrapper">
      <img src={underConstruction} alt="" className="under-construction" />
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
                Similique, sint obcaecati. Reprehenderit ipsa enim doloribus a
                facilis. Dolores, libero consectetur.
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
          <p>Fullstack Dev based in Berlin with a background in management</p>
          {/* <img src={berlinBear} alt="Logo: Berlin Bear" /> */}
        </div>
        <div class="div6 bento-box">
          <h2 className="bento-header">current project.</h2>
          <Modal />
        </div>
        <div class="div7 bento-box">
          <h2 className="bento-header">about me.</h2>
          <Cli />
        </div>
      </div>
    </div>
  );
};

export default Main;
