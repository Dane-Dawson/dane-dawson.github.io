import React, { useState } from "react";

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
  return (
    <div className="home-main-div">
      <p className="home-name">Dane Dawson</p>

      <div className="developer-info">
        <p> Developer </p>
        <p>Full-stack || JavaScript || React || Ruby || Ruby on Rails</p>
        <span
     class="txt-rotate"
     data-period="2000"
     data-rotate='[ "nerdy.", "simple.", "pure JS.", "pretty.", "fun!" ]'></span>
      </div>

      <div className="experience-div">

      <p>
        Previous experience (all jobs I have previously held and recieved
        payment for regularly)
      </p>
      <p>{jobs.join(" || ")} </p>
      </div>
      <div className="general-info-div">

      <p>
        Born and raised in Austin, Texas, I have led a unique and entertaining
        life thusfar (in my humble opinion).
      </p>
      <p>
        Happily married with a 3 year old tornado for a daughter, I've made the
        relatively recent career shift into programming and tech.
      </p>

      <p>
        Feel free to explore this portfolio that is a viewport into the chaos
        that is my mind!
      </p>

      <p>
        This project was created with React using only hooks with custom CSS
        throughout.
      </p>

      <p>
        It also contains a potentially dangerous amount of my own sense of humor
        and personality.
      </p>

      <p>
        Check back regularly, as this site is consistently under construction.
      </p>
      </div>
    </div>
  );
}
