import React, { useState } from "react";
import "./Projects.css";

import { projectsArray } from "./ProjectsData";

import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar"

export default function Projects() {
  return (
    <div className="projects-main-div">
      <div className="projects-intro">
      <p>

        A collection of projects I have made. Most are learning tools, some are
        collections I have built over time.
      </p>

      <p>
        This portion is also still under construction, but I hope you enjoy what's available for now!
      </p>
      </div>
      <div className="projects-and-searchbar-container">
        {/* <SearchBar /> */}
      <div className="projects-container">
        {projectsArray.map((project, idx) => {
          return <ProjectCard key={idx} project={project} />;
        })}
      </div>
      </div>
    </div>
  );
}
