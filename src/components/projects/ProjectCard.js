import React, { useState } from "react";


export default function ProjectCard(props){
    return(<div className="project-card-main-div">
        <h1>{props.project.name}</h1>  
        <p>{props.project.description}</p>
        <a href={props.project.url}>Check it out here!</a>
    </div>
    )
}