import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Project1App from "./subprojects/proj1/frontend/App";
import Project2App from "./subprojects/proj2/frontend/App";

const projects = [
  {
    name: "Project 1",
    url: "/project1",
    title: "Link Shortener",
    description: "Shortens the any posted link",
    component: Project1App,
  },
  {
    name: "Project 2",
    url: "/project2",
    title: "E-Commerce Platform",
    description:
      "An online store for browsing and purchasing your favorite products.",
    component: Project2App,
  },
];

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <Link key={index} to={project.url}>
              {project.title}
            </Link>
          ))}
        </div>

        <div className="main-content">
          <Routes>
            {projects.map((project, index) => (
              <Route
                key={index}
                path={project.url}
                element={<project.component />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
