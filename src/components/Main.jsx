import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";

import { SocialIcon } from "react-social-icons";
import Cli from "./Cli";

import reactIcon from "../icons/react-svgrepo-com.svg";
import javascriptIcon from "../icons/javascript-svgrepo-com.svg";
import typescriptIcon from "../icons/typescript-svgrepo-com.svg";
import nodeIcon from "../icons/node-16-svgrepo-com.svg";
import sassIcon from "../icons/sass-svgrepo-com.svg";
import mongoIcon from "../icons/mongodb-svgrepo-com.svg";
import nextJsIcon from "../icons/nextjs-fill-svgrepo-com.svg";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/messages");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [messages]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "BerlinDieter", message: newMessage }),
      });

      if (response.ok) {
        const savedMessage = await response.json();
        setMessages((prevMessages) => [savedMessage, ...prevMessages]);
        setNewMessage("");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const slideVariants = {
    left: { x: "-100vw", opacity: 0 },
    right: { x: "100vw", opacity: 0 },
    top: { y: "-100vh", opacity: 0 },
    bottom: { y: "100vh", opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="main-content-wrapper">
      <div className="parent">
        <motion.div
          className="div1 bento-box"
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          initial={{ y: "-100vh", opacity: 0 }}
        >
          <div className="my-name-is-wrapper">
            <h2>Hello</h2>
            <h3>my name is</h3>
          </div>
          <div className="name_container">
            <h1>Burak</h1>
          </div>
        </motion.div>
        <motion.div
          className="div2 bento-box"
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          initial={{ x: "100vh", opacity: 0 }}
        >
          <div className="chat-container">
            {messages
              .slice()
              .reverse()
              .map((msg, index) => (
                <div className="super-chat" key={index}>
                  <p>
                    <span>{msg.username}: </span>
                    {msg.message}
                  </p>
                </div>
              ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </motion.div>
        <motion.div
          class="div3 bento-box"
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" },
          }}
          initial={{ x: "150vh", opacity: 0 }}
        >
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
        </motion.div>
        <motion.div
          class="div4 bento-box"
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 3, ease: "easeOut" },
          }}
          initial={{ x: "0", opacity: 0 }}
        >
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
        </motion.div>
        <motion.div
          class="div5 bento-box"
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" },
          }}
          initial={{ x: "-150vh", opacity: 0 }}
        >
          <h2 className="bento-header">who am i.</h2>
          <p>Fullstack Dev based in Berlin with a background in management</p>
        </motion.div>
        <motion.div
          class="div6 bento-box"
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" },
          }}
          initial={{ y: "150vh", opacity: 0 }}
        >
          <h2 className="bento-header">current project.</h2>
          <Modal />
        </motion.div>
        <motion.div
          class="div7 bento-box"
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" },
          }}
          initial={{ y: "150vh", opacity: 0 }}
        >
          <h2 className="bento-header">about me.</h2>
          <Cli />
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
