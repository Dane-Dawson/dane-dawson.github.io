import React, { useState } from "react";
import "./Projects.css";

import { projectsArray } from "./ProjectsData";

import ProjectCard from "./ProjectCard";

export default function Projects() {

  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('')

  const filteredProjects = () => {
    let projects = projectsArray.filter(project => project.name.toLowerCase().includes(searchTerm))

    if (filterTerm != "all"){
      let filteredProjects = projects.filter(project => project.tech.includes(filterTerm))
      return filteredProjects
    }

    return projects
  }
  return (
    <div className="projects-main-div">
    <div className="projects-info-div">

      <div className="projects-intro">
      <p>
        A collection of projects I have made. Most are learning tools, some are
        collections I have built over time.
      </p>
      <p>
        This portion is also still under construction, but I hope you enjoy what's available for now!
      </p>
    </div>
      </div>
      <div className="projects-and-searchbar-container">
        {/* <SearchBar /> */}

        <div className="searchbar-main-div">
        <input onChange={(e)=>setSearchTerm(e.target.value)} className="searchbar-input" placeholder="Find a repository..."></input>
        
        <select onChange={(e)=>setFilterTerm(e.target.value)} className="tech-dropdown">
        <option value="all">Tech utilized</option>
        <option value="starred">Starred</option>
        <option value="javascript">JavaScript</option>
        <option value="react">React</option>
        <option value="json">JSON-Server</option>
        <option value="ruby">Ruby</option>
        <option value="rails">Ruby on Rails</option>
        </select>
      </div>
      <span className="projects-container">
        {filteredProjects().map((project, idx) => {
          return <ProjectCard key={idx} project={project} />;
        })}
      </span>
      </div>
    </div>
  );
}
