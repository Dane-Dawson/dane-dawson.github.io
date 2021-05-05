import React, { useState } from 'react';
import './App.css';

import rocketDane from './images/Rocket-Dane.png'
import piConstruction from './images/pika-construction.gif'
import Terminal from './components/terminal/Terminal'


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
        <button className="show-terminal" onClick={()=>toggleTerminal(prev=>!prev)}>{showTerminal ? "Close Terminal" : "Open Terminal"}</button>
        <br/>
        {renderTerminal()}
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