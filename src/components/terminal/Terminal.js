import './Terminal.css';
import React, { useState } from 'react';

function Terminal(props) {
    const [terminalDisplay, setTerminalDisplay] = useState( '')

    const commandsList = {
        help: "I mean...I wish I could. I need some help myself.",
        commands: "Seriously? Just look up like...2 lines. I know devs don't read documentation, but come on now.",
        clear: ""
    }

    const handleChange = (event) => {
        props.setTerminalInput(event.target.value)
        let commandArray = Object.keys(commandsList)
        let command = event.target.value.toLowerCase()
        if (commandArray.includes(command)){
            setTerminalDisplay(commandsList[command])
            props.setTerminalInput('')
        }
    }

  return (
    <div className="terminal-div">
    <p>webpack: Compiling...</p>
    <p>webpack: Compiled successfully.</p>
    <p>Hash: 86753094eva&42</p>
    <p>Time: 1337ms</p>
    <p>Enter commands below to explore...</p>
    <p>help || commands || clear </p>
    <br/>
    <p>{terminalDisplay}</p>
    <div className="terminal-input-div">
    <span className="terminal-file-path"> dane@Danes-Site dane-the-site %</span>
    <input 
    placeholder="Click here to type a command..."
    className="terminal-input"
    onChange={(event)=>handleChange(event)} 
    value={props.terminalInput}
    />
    </div>
    
    </div>
  );
}

export default Terminal;