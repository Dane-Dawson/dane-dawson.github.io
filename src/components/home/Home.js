import React, { useState } from "react";
import Typist from "react-typist";

import "./Home.css";

export default function Home() {
  let jobs = [
    "Flatiron (Software Engineer Coach)",
    "Premier Family Physicians Phyiscal Medicine Department (Site Supervisor)",
    "Mary Louise Butters Brownies (Sales Representative)",
    "Balloon Twister (Self employed)",
    "The Altered Five - Jazz Band (Bass)",
    "Easter Bunny (Art For Your Head)",
    "Santa (Art For Your Head)",
    "Stilt Walker (Art For Your Head)",
    "Juggler (Epic Entertainment)",
    "Glass Blower (Summer Apprenticeship)",
    "Polka Band - Herzogenrath (Tuba)",
    "Barbershop Quartet - The Main Street Men (Bass)",
    "Massage Therapist (Self employed)",
    "Amy's Ice Cream (Server)",
    "Boy Scout (Archery Instructor)",
    "Weekly Children's Music - Graceland BBQ (Bass, Tuba, Keyboard, Drums, Vocals)",
    "Rowing Dock (Camp Counselor)",
    "Wyatt's Plant Nursery (Landscaping, Plant Care)",
    "Seton Brain and Spine Center (Physical Therapy Exercise Technician)",
    "Watson's Piano Works (Piano Repairman)",
    "TrekAmerica (Tour Guide)",
    "Piano Tuner (Self Employed)",
    "",
  ];

  const techExperience = [
    "SQL/Postrgress",
    "CSS/HTML",
    "Ruby/Ruby On Rails",
    "JavaScript/React",
  ];

  const renderTechExperience = () => {
    return techExperience.map((tech) => {
        // Added a delay so that shorter tech didn't erase too quickly
      return (
        <span>
          <Typist.Delay ms={1000} />
          <span>{tech}</span>
          <Typist.Backspace count={tech.length} delay={tech.length * 100} />
        </span>
      );
    });
  };
  return (
    <div className="home-main-div">
      <p className="home-name">Dane Dawson</p>

      <div className="developer-info">
        <span className="tech-experience-list">
          <Typist
            cursor={{ hideWhenDone: true, blink: true, hideWhenDoneDelay: 400 }}
          >
          Developer with experience in{' '} {renderTechExperience()}
            Full Stack Engineering
          </Typist>
        </span>
      </div>
<hr className="hr-line"/>

      <div className="general-info-div">
        <p>
          Born and raised in Austin, Texas, I have led a unique and entertaining
          life thusfar (in my humble opinion). 
          <br />
          With a lifetime of diverse experiences, I've made the relatively recent career shift
          <br/>
           into 
          tech with an initial focus on web development.
        </p>

        <p>
          Most recently I have been employed by Flatiron School as a Software Engineer Coach.

          <br/>

          During that time it was my responsibility to guide and teach students in the fundamentals of programming using
          <br/>
           -- Ruby, Ruby on Rails, JavaScript, and React --
           <br/>
           as well as coordinate projects, troubleshoot, create materials and oversee cohort teamwork.
        </p>

        <p>
          This project was created with React using hooks and custom CSS
          throughout. A link to the repository is available in the "Projects" section above!
        </p>

        <p>
          It also contains a potentially dangerous amount of my own sense of
          humor and personality.
        </p>

        <p>
          Check back regularly, as this site is consistently under construction.
        </p>
      </div>
      <div className="experience-div">
        <p>
          Previous experience (all jobs I have previously held and recieved
          payment for regularly)
        </p>
        <p>{jobs.join(" || ")} </p>
      </div>
    </div>
  );
}
