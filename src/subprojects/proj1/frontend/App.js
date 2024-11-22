import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Project1App = () => {
  const [error, setError] = useState(null);
  const [create, setCreate] = useState(true);
  const [link, setLink] = useState("test");
  const [notification, setNotification] = useState(false);
  const [activeTab, setActiveTab] = useState("create");
  const [submitLink, setSubmitLink] = useState("null");

  const [isOpen, setIsOpen] = useState({ section1: false, section2: false });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const data = [
    {
      id: 1,
      link: "www.google.de",
      shortLink: "hurrdurr1.com/123",
      clicks: 23,
    },
    {
      id: 2,
      link: "www.google.com",
      shortLink: "hurrdurr1.com/345",
      clicks: 12,
    },
    {
      id: 3,
      link: "www.google.fr",
      shortLink: "hurrdurr1.com/4564",
      clicks: 199,
    },
  ];

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
      <div className="link-content__container">
        <h1 className="text-white">URL Shortener</h1>
        <div className="link-sub d-flex mb-3">
          <label htmlFor=""></label>
          <input type="text" className="form-control flex-grow-1" />
          <button className="btn btn-success ms-3">Submit</button>
        </div>
        <table class="table table-striped rounded-lg">
          <thead>
            <tr>
              <th scope="col">URL</th>
              <th scope="col">Shortened URL</th>
              <th scope="col">Clicks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, ind) => (
              <tr key={ind + 1}>
                <td>
                  <a href="#">{ele.link}</a>
                </td>
                <td>{ele.shortLink}</td>
                <td>{ele.clicks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Project1App;

{
  /* 

fix span postion 114
fix uneven button 110

*/
}
