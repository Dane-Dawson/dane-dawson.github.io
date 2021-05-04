import './Terminal.css';
import React, { useState } from 'react';

import {commands, help, limmerick} from "./TerminalDisplayReadouts"

function Terminal(props) {
    const [terminalDisplay, setTerminalDisplay] = useState( '')

    const handleChange = (event) => {
        props.setTerminalInput(event.target.value)
        let commandArray = ["help", "commands", "clear", "limmerick"]
        let command = event.target.value.toLowerCase()
        if (commandArray.includes(command)){
            setTerminalDisplay(command)
            props.setTerminalInput('')
        }
    }

    const handleTerminalDisplay = () => {
        switch (terminalDisplay){
            case "clear":
                return "";
            case "help":
                return help()
            case "commands":
                return commands()
            case "limmerick":
                return limmerick()
        }
    }

    
  return (
    <div className="terminal-div">
    <p className="webpack-compiling">webpack: Compiling...</p>
    <p className="webpack-compiled">webpack: Compiled successfully.</p>
    <p className="terminal-hash">Hash: 8675309-4eva&42</p>
    <p className="terminal-time">Time: 1337ms</p>
    <p className="terminal-enter-commands">Enter commands below to explore...</p>
    <p className="terminal-commands">help || clear || commands || limmerick</p>
    <br/>
    <p>{handleTerminalDisplay()}</p>
    <div className="terminal-input-div">
    <span className="terminal-file-path"> dane@Danes-Site dane-the-site %</span>
    <span className="terminal-input-placeholder">{props.terminalInput ? null : "Click here to type a command..."}</span>
    <input 
    className="terminal-input"
    onChange={(event)=>handleChange(event)} 
    value={props.terminalInput}
    />
    </div>
    
    </div>
  );
}

export default Terminal;