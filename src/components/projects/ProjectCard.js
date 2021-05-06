import React, { useState } from "react";

import "./ProjectCard.css"

import { returnIcons } from "./Icons";
import gitIcon from "./images/git-icon.png";

export default function ProjectCard(props) {
  return (
    <div className="project-card-main-div">
      <p className="project-title">{props.project.name}</p>
      <p className="project-description">{props.project.description}</p>
      <br/>
      <span className="github-repo-link">
          visit repository
      </span>
      <a
        target="_blank"
        href={props.project.url}
        className="project-github-link"
      >
      
        <img
          target="_blank"
          href={props.project.url}
          className="project-icon"
          src={gitIcon}
        />
      </a>
      <div className="tech-used">
      {returnIcons(props.project.tech)}
     
      </div>
    </div>
  );
}
