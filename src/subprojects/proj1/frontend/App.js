import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Project1App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [create, setCreate] = useState(true);
  const [link, setLink] = useState("test");
  const [notification, setNotification] = useState(false);
  const [activeTab, setActiveTab] = useState("create");
  const [submitLink, setSubmitLink] = useState("null");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Set the active tab when clicked
  };

  //handlesubmit for create and edit to add

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://node-js-api-git-main-buraks-projects-4eef02eb.vercel.app/?vercelToolbarCode=TDBo7hfyGRsPnAe"
  //     );
  //     setData(response.data);
  //     setError(null);
  //   } catch (error) {
  //     setError("Failed to fetch data");
  //     console.log(error);
  //   }
  // };

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setNotification(true);
      setTimeout(() => setNotification(false), 2000);
    });
  };

  return (
    <div className="link__container">
      {notification && (
        <div className="notification">Text has been copied.</div>
      )}
      <div className="link-content__container">
        <div className="link-nav__container">
          <span
            className={activeTab === "create" ? "active" : ""}
            onClick={() => handleTabClick("create")}
          >
            Create shortcut
          </span>
          <span
            className={activeTab === "edit" ? "active" : ""}
            onClick={() => handleTabClick("edit")}
          >
            Edit shortcut
          </span>
        </div>
        {activeTab === "create" ? (
          <form action="">
            <label htmlFor="">Please enter link</label>
            <div className="user-input">
              <input type="text" />
              <button>submit</button>
            </div>

            <div className={`copy__link ${link ? "visible" : ""}`}>
              <label>Your link was created</label>
              <div className="input-icon">
                <input
                  type="text"
                  value={link}
                  readOnly
                  title="Copy this link"
                />

                <svg
                  onClick={handleCopy}
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
          </form>
        ) : (
          <form>
            <label htmlFor="">Please enter link</label>
            <div className="user-input">
              <input type="text" />
              <button>submit</button>
            </div>
            {submitLink && (
              <>
                <label htmlFor="">Please edit the link</label>
                <div className="user-input">
                  <input type="text" />
                  <button>save</button>
                </div>
                <span>the link was edited on 10.10.2010</span>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Project1App;

{/* 

fix span postion 114
fix uneven button 110

*/ }
