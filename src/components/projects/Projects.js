
import React, { useState } from "react";
import "./Projects.css"

import {projectsArray} from "./ProjectsData"

import ProjectCard from "./ProjectCard"

export default function Projects(){
    return(<div className="projects-main-div">
        <div className="projects-intro">
        A collection of projects I have made. Most are learning tools, some are collections I have built over time.
        https://github.com/Dane-Dawson
        </div>
        <div className="projects-container">
        {projectsArray.map((project, idx)=>{
            return <ProjectCard key={idx} project={project} />
            })}
        </div>

    </div>
    )
}