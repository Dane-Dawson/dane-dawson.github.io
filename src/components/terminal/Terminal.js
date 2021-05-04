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
                return (<div>
                <p className="terminal-display">I mean...I wish I could, I need some myself!</p>
                <p className="terminal-display help-1">Have you tried using Google?</p>
                </div>)
            case "clear":
                return "";
            case "commands":
                return (<div>
                <p className="terminal-display commands-1">Seriously? Just look up like...2 lines.</p>
                <p className="terminal-display commands-2">I know devs don't read documentation, but come on now.</p>

                </div>)
            case "limmerick":
                return(<div>
                    <p className="terminal-display limmerick-1">There once was a coder who came</p>
                    <p className="terminal-display limmerick-2">to a site engineered by a Dane.</p>
                    <p className="terminal-display limmerick-3">His work is unique</p>
                    <p className="terminal-display limmerick-4">and he's up for critique,</p>
                    <p className="terminal-display limmerick-5">but be gentle to cause him no pain.</p>
                    <br/>
                    <br/>
                    <p className="terminal-display limmerick-6">...please?</p>
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