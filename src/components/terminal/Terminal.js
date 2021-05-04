import './Terminal.css';
import React, { useState } from 'react';

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
            case "help":
                return <p className="terminal-display">I mean...I wish I could, I need some myself! Have you tried using Google?</p>;
            case "clear":
                return "";
            case "commands":
                return <p className="terminal-display">Seriously? Just look up like...2 lines. I know devs don't read documentation, but come on now.</p>;
            case "limmerick":
                return(<div>
                    <p className="terminal-display">There once was a coder who came</p>
                    <p className="terminal-display">to a site engineered by a Dane.</p>
                    <p className="terminal-display">His work is unique</p>
                    <p className="terminal-display">and he's up for critique,</p>
                    <p className="terminal-display">But be gentle to cause him no pain</p>
                </div>)
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