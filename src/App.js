import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import rocketDane from './images/Rocket-Dane.png'
import piConstruction from './images/pika-construction.gif'
import Terminal from './components/terminal/Terminal'
import Home from "./components/home/Home"


function App() {
  const [pets, petPikachu] = useState( 0 );
  const [terminalInput, setTerminalInput] = useState('')
  const [showTerminal, toggleTerminal] = useState(false)

  const renderTerminal = () => {
    if (showTerminal){
      return <Terminal setTerminalInput={setTerminalInput} />
    }
  }

  return (
    <div className="App">
        {/* <img src={rocketDane} className="rocket-dane" alt="logo" /> */}
        
        <p>
        Welcome to Dane's site! Although it's under construction, enjoy what he's done so far!!
        </p>
        <Router>
      <div>
        <nav>
              <Link to="/">Home</Link>||
              <Link className="show-terminal" to="/terminal">Terminal</Link>
          
        </nav>
        <br/>
        <br/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/terminal">
            <Terminal setTerminalInput={setTerminalInput} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
        {/* <p>
          It's currently under construction. Click to pet the Pikachu while you wait.
        </p>
        <img src={piConstruction} 
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