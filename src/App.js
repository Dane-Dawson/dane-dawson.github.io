import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import gitIcon from "./components/projects/images/git-icon.png";
import Terminal from "./components/terminal/Terminal";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Devquarium from "./components/devquarium/Devquarium"
import IRLpg from "./components/IRLpg/IRLpg";

function App() {
  const [IRLpgView, toggleIRLpgView] = useState(false);

  return (
    <div className="App">
      <br />
      <Router>
        <div>
          {IRLpgView ? <button onClick={()=>toggleIRLpgView(false)}>Come back home</button> : <nav>
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
            <Link className="IRLpg-link link" to="/IRLpg" onClick={()=>toggleIRLpgView(true)}>
              IRLpg
            </Link>
          </nav>}
          
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
            <Route path="/IRLpg">
              <IRLpg toggleIRLpgView={toggleIRLpgView}/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
