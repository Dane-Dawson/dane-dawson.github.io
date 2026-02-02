import React, { useState } from "react";
import Typist from "react-typist";

import "./Home.css";
import skyline from "./images/austin-skyline.png"
import flatiron from "./images/flatiron-logo.png"
import projectTech from "./images/project-tech.png"
import homeDepot from "./images/home-depot.png"


export default function Home() {

  const [jobDisplay, setJobDisplay] = useState("Click the text!!");
  const [commentaryDisplay, setCommentaryDisplay] = useState("Then see a job and some deep, contemplative thoughts about it.");

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
  ];

  let wittyBanter = [
      "I did that!",
      "I remember those days fondly...What a time!",
      "Oh right...I still have a warrant out for that...",
      "...no further comment.",
      "You could consider me an expert!",
      "Oh man...I forgot about that!",
      "Surprised? You shouldn't be!",
      "You read that right!",
      "References available upon request!",
      "You know, who doesn't have that on their resume?",
      "I know, I know...EVERYONE does that, but still.",
      "Can you believe it?!",
      "Yes, of course you can ask me about it.",
      "It wasn't too bad once you got used to it.",
      "Harder than you'd think!",
      "I mean, who hasn't wanted to try that?",
      "Why yes, I *do* do contract work!",
      "Unfortunately, legally I can't discuss this until the statute of limitations expires.",
      "And that's how I ended up with this scar near my bellybutton.",
      "Believe it or not, I was actually in charge!"
  ]

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

  const jobRandomizer = () => {
    //   Randomly select a whole number between 0 and the length of the jobs array.
      let random = Math.floor(Math.random() * jobs.length)
      setJobDisplay(jobs[random])
      random = Math.floor(Math.random() * wittyBanter.length)
      setCommentaryDisplay(wittyBanter[random])
  }
  return (
    <div className="home-main-div">
      <p className="home-name">Dane Dawson</p>

      <div className="developer-info">
        <span className="tech-experience-list">
          <Typist
            cursor={{ hideWhenDone: true, blink: true, hideWhenDoneDelay: 400 }}
          >
            Developer with experience in {renderTechExperience()}
            Full Stack Engineering
          </Typist>
        </span>
      </div>
      <hr className="hr-line" />

      <div className="general-info-div">

        <div className="info-block">
        <img className="info-image" src={skyline} />
          <p className="info-blurb">
            Born and raised in Austin, Texas, my life has been an adventurous forray into a myriad of experiences thusfar (at least, in my humble opinion). With a lifetime of diverse hobbies and jobs, many browsable below, I've made the recent career shift into tech. With initial experience at SignUp and then as I moved into teaching programming with Flatiron, I have been thankful for the opportnity to find a unique field that is a meeting point for creativity, problem solving, and communication.
          </p>
        </div>

        <div className="info-block">
          <p className="info-blurb">
          I started my software engineer employed by Flatiron School as a Software Engineer Coach. During that time it was my responsibility to guide and teach students in the fundamentals of programming, with a primary focus in Ruby, Ruby on Rails, JavaScript, and React. I was also the scrum master and project manager for the cohorts, with duties including coordinating projects, troubleshooting and debugging code, creating materials and overseeing cohort teamwork and communication.
             </p>
          <div className="image-holder">

          <img className="info-image" src={flatiron} />
          </div>
        </div>

          <img className="info-image" src={homeDepot} />
        <div className="info-block">
          <p className="info-blurb">
          My most recent role was working at The Home Depot. I started on the Retail Media team and was responsible for integration of Google Ad Manager as well as a main contributor to projects with an estimated 1.2 million dollar annual revenue.

          I later transitioned to the Orange Method Orange Works team and became a Sr. leader in anchoring our Apprenticeship program, designed to bring associates in from the stores with no technical background and train them to join our technology teams. 

          We worked largely in a React front end, and Java/Spring backend environment, with some applications of Python, Angular, Google Cloud Platform, and other CICD tools.
             </p>
        </div>
        
        <div className="info-block">
        <img className="info-image" src={projectTech} />
          <p className="info-blurb">
            This portfolio was created with React using hooks and custom CSS throughout.A link to the repository is available in the "Projects" section above, with notes in the readme on resources and libraries utilized.  I also am experimenting with some ideas and concepts of front end data manipulation, and have included some pet projects as part of the site, located within the buttons above. 
            <br/>
            <br/>
            Be forwarned this site also contains a potentially dangerous amount of my own sense of
            humor and personality, so proceed at your own risk (and preferably with an open, lighthearted mind).

            <br/>
            <br/>
          
            Please feel free to check back regularly, as this site is consistently under construction.

            <br/>
            If you have any interest in contacting me feel free to visit my <a href="https://www.linkedin.com/in/dane-dawson/">LinkedIn.</a>
          </p>
        </div>

      <div className="info-block">
        <p className="info-blurb jobs-description">
          A renaissance man of sorts, I have collected an assortment of varied work experience over the years. Click to see a randomly selected place I have actually worked, as well as the poisition I held there!
          <br/>
        <p onClick={() => jobRandomizer()} > ➜ Click on this text here to display a random job (and some random commentary) to the right!</p>
        </p>
        
      <div className="info-image jobs-show">
        <br/>
        <span className="job-name">
        {jobDisplay}
        </span>
        <br/>
        {commentaryDisplay}
      </div>
        </div>
      

      </div>
    </div>
  );
}
