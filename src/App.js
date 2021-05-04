import React, { useState } from 'react';
import './App.css';

import rocketDane from './images/Rocket-Dane.png'
import piConstruction from './images/pika-construction.gif'
import Terminal from './components/terminal/Terminal'


function App() {
  const [pets, petPikachu] = useState( 0 );
  const [terminalInput, setTerminalInput] = useState( '')

  return (
    <div className="App">
      <header className="App-header">
        <img src={rocketDane} className="rocket-dane" alt="logo" />
        <p>
          Welcome to Dane's site!
        </p>
        <Terminal setTerminalInput={setTerminalInput} terminalInput={terminalInput}/>
        <p>
          It's currently under construction. Click to pet the Pikachu while you wait.
        </p>
        <img src={piConstruction} 
        onClick={()=>petPikachu(prev => prev + 1)}
        className="construction-pika" 
        alt="under construction" />
          <p>
          {pets} Pikachu pets. Well done.
          </p>
      </header>
    </div>
  );
}

export default App;