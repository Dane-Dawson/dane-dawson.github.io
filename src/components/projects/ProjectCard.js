import React, { useState } from "react";

import { returnIcons } from "./Icons";
import gitIcon from "./images/git-icon.png";

export default function ProjectCard(props) {
  return (
    <div className="project-card-main-div">
      <h1 className="project-title">{props.project.name}</h1>
      <p className="project-description">{props.project.description}</p>
      <br/>
      <span>Click here to see the repository {'=>'}</span>
      <span>

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
      <br />
      <span>Tech utilized:</span>
      {returnIcons(props.project.tech)}
      </span>
    </div>
  );
}
