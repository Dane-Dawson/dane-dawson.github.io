import React from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string; // If present, opens in the custom popup window
  image?: string;
}

const Projects = () => {
  const myProjects: Project[] = [
    {
      title: "Devquarium",
      description: "Fun little project that acted as an exploration into animation and CSS in a fun, quasi-interactive aquarium setting. *Note* Designed for desktop",
      tech: ["React", "TypeScript", "Vite", "CSS Animation"],
      demoUrl: "/devquarium"
    },
    {
      title: "The Terminal",
      description: "Another early project of mine that played with animation and interactive Javascript, styled in the format of a terminal. *Note* Designed for desktop",
      tech: ["React", "TypeScript", "Vite", "CSS Animation"],
      demoUrl: '/terminal'
    },
    {
      title: "Monster Compendium",
      description: "An exploration of large, complex dataset management and visual data displays using D&D 5e monsters and ReChart library for data visualization.",
      tech: ["React", "TypeScript", "Vite", "CSS Animation", "ReChart"],
      demoUrl: '/monstercompendium'
    },
    {
      title: "Bob Ross Gallery",
      description: "Playing with video embedding and making a happy little demo to showcase the work of one of the kindest people of all time.",
      tech: ["React", "TypeScript", "Vite", "CSS Animation", "ReChart"],
      demoUrl: '/bobrossgallery'
    },
    {
      title: "Dane Dawson: The Site",
      description: "This site here! Made using React, hooks, css and whatever creative madness my mind could conjure.",
      tech: ["Javascript", "Typescript", "React", "CSS", "HTML"],
      githubUrl: "https://github.com/Dane-Dawson/dane-dawson.github.io"
    },
    {
      title: "Proptipus",
      description: "'Proptipus the cephalopod has a plethora of pretty pleasant past-times, but priorly preconcieved postulations prevent our poor Proptipus from performing his practical pursuits.' This lab is an exploration of Props, State, and data management in React.",
      tech: ["Javascript", "React", "CSS", "HTML"],
      githubUrl: "https://github.com/danedawson/ad-systems"
    },
    {
      title: "React Mini Coding Checkpoints",
      description: "A series of playful, interactive React modules designed to reinforce foundational concepts like state management and component lifecycles.",
      tech: ["React", "JavaScript", "JSON-Server", "CSS3"],
      githubUrl: "https://github.com/Dane-Dawson/react-mini-coding-checkpoints"
    },
    {
      title: "JavaScript Foundations & DOM",
      description: "A technical sandbox for mastering core JavaScript fundamentals including complex DOM manipulation, asynchronous fetch() calls, and event handling.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/Dane-Dawson/Mini-Code-Challenges"
    },
    {
      title: "JSON-Server Architecture",
      description: "A comprehensive guide and boilerplate for building and personalizing mock REST APIs for rapid frontend prototyping.",
      tech: ["JSON-Server", "JavaScript", "REST APIs"],
      githubUrl: "https://github.com/Dane-Dawson/json-server-practice"
    },
    {
      title: "Full-Stack Auth Template (Backend)",
      description: "A Ruby on Rails API blueprint for secure token-based authentication, designed to integrate seamlessly with modern React frontends.",
      tech: ["Ruby on Rails", "PostgreSQL", "JWT"],
      githubUrl: "https://github.com/Dane-Dawson/logintemp-backend"
    },
    {
      title: "Full-Stack Auth Template (Frontend)",
      description: "The frontend counterpart to the Rails Auth API, demonstrating secure login flows, protected routing, and session persistence.",
      tech: ["React", "JavaScript", "CSS3", "HTML5"],
      githubUrl: "https://github.com/Dane-Dawson/logintemp-frontend"
    },
    {
      title: "JSON DB Collection",
      description: "A curated collection of structured data sets tailored for JSON-server environments to simulate real-world database responses.",
      tech: ["JSON", "Database Schema Design"],
      githubUrl: "https://github.com/Dane-Dawson/json-server-collection"
    }
  ];

  const handleOpenDemo = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    const w = 1200;
    const h = 800;
    const left = (window.screen.width / 2) - (w / 2);
    const top = (window.screen.height / 2) - (h / 2);
    const features = `width=${w},height=${h},top=${top},left=${left},resizable=yes,scrollbars=yes`;
    
    window.open(url, 'ProjectPreview', features);
  };

  return (
    <div className="projects-page">
      <h1 className="projects-header"><span>Technical Projects</span></h1>
      <div className="projects-grid">
        {myProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech-stack">
                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>
            
            <div className="project-actions">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  GitHub
                </a>
              )}
              {project.demoUrl && (
                <button onClick={(e) => handleOpenDemo(e, project.demoUrl!)} className="btn-primary">
                  Launch Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;