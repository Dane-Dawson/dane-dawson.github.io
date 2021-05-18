import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import gitIcon from "./components/projects/images/git-icon.png";
import rocketDane from "./images/Rocket-Dane.png";
import piConstruction from "./images/pika-construction.gif";
import Terminal from "./components/terminal/Terminal";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Devquarium from "./components/devquarium/Devquarium"

function App() {
  const [pets, petPikachu] = useState(0);

  return (
    <div className="App">
      {/* <img src={rocketDane} className="rocket-dane" alt="logo" /> */}
      <br />
      <Router>
        <div>
          <nav>
            <Link className="home-link link" to="/">Home</Link>||
            <Link className="show-terminal link" to="/terminal">
              Terminal
            </Link>
            ||
            <Link className="projects-link link" to="/projects">
              Pr<img src={gitIcon} className="icon git-1" />jects
            </Link>
            ||
            <Link className="devquarium-link link" to="/devquarium">
              Devquarium
            </Link>
          </nav>
          <br />
          <br />

          <Switch>
            <Route path="/terminal">
              <Terminal />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/devquarium">
              <Devquarium />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      
        {/* <img src={piConstruction} 
        onClick={()=>petPikachu(prev => prev + 1)}
        className="construction-pika" 
        alt="under construction" />
          <p>
          {pets} Pikachu pets. Well done.
          </p> */}
    </div>
  );
}

export default App;
