import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Project1App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://node-js-api-git-main-buraks-projects-4eef02eb.vercel.app/?vercelToolbarCode=TDBo7hfyGRsPnAe"
      );
      setData(response.data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch data");
      console.log(error);
    }
  };

  return (
    <div className="project1">
      <h1>Welcome to Project 1</h1>
      <p>This is the frontend for Project 1!</p>
      <button onClick={fetchData}>Fetch Data</button>

      {data && (
        <div className="data-display">
          <h2>Backend Data:</h2>
          <p>
            {data.message} @ {data.timestamp}
            {console.log(data.timestamp)}
          </p>
        </div>
      )}

      {error && <p>The error message: {error}</p>}
    </div>
  );
};

export default Project1App;