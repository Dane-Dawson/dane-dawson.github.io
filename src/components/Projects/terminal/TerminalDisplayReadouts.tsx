// Input for handling commands, return is associated to the const created below associated with the recieved terminalDisplay

import type { ChangeEvent } from "react";

export const handleTerminalDisplay = (terminalDisplay: string, program: string) => {
    // depending on program set in terminal, it returns a different sequences of responses.
    // match case with string in programsArray and it's related const below
    switch (program){
        case "launch":
            return launchProgram(terminalDisplay)
    }
    
};

// collections of inputs for each program, named by [program]Program where [program] is recieved from Terminal

const launchProgram = (terminalDisplay: string) => {
    switch (terminalDisplay) {
        case "clear":
          return "";
        case "help":
          return help();
        case "initialize":
          return terminalInitialize();
        case "commands":
          return commands();
        case "limmerick":
          return limmerick();
      }
}

// array of commands available
// string entered here needs a matching constant below it with a readout, then a switch case above to initialize it.

export const commandsArray = ["commands", "clear", "initialize", "help", "limmerick"]

// programs available

export const programsArray = ["launch"]

// generate dynamic list of commands as a p tag

const commandsListPTag = () => <p className="terminal-commands">{commandsArray.join(" || ")}</p>

//  !!   commands returns for the terminal in the "launch" program

export const commands = () => {
    return (<div>
        <br/>
        <p>...</p>
        <br/>
        <p className="terminal-display commands-1">Seriously? It was literally on the screen a second ago.</p>
        <p className="terminal-display commands-2">I know devs don't read documentation, but come on now.</p>
        <br />
        <p className="terminal-display commands-3">You REALLY can't remember?</p>
        <br/>
        <p className="terminal-display commands-4">Fine.</p>
        <br/>
        {commandsListPTag()}
        </div>)
}

export const help = () => {
    return (<div>
        <p className="terminal-display">I mean...I wish I could, I need some myself!</p>
        <br/>
        <p className="terminal-display help-1">Have you tried googling it?</p>
        </div>)
}

export const limmerick = () => {
    return (<div>
                    <p className="terminal-display limmerick-1">There once was a coder who came</p>
                    <p className="terminal-display limmerick-2">to a site engineered by a Dane.</p>
                    <p className="terminal-display limmerick-3">His work is unique</p>
                    <p className="terminal-display limmerick-4">and he's up for critique,</p>
                    <p className="terminal-display limmerick-5">but be gentle to cause him no pain.</p>
                    <br/>
                    <br/>
                    <p className="terminal-display limmerick-6">...please?</p>
        </div>
    )
}


// Initial loading screen for the terminal

export const terminalInitialize = () => {
    return (<span>
  <p className="webpack-compiling">webpack: Compiling...</p>
    <p className="webpack-compiled">webpack: Compiled successfully.</p>
    <p className="terminal-hash">Hash: 8675309-4eva&42</p>
    <p className="terminal-time">Time: 1337ms</p>
    <p className="terminal-enter-commands">
      Enter commands below to explore...
    </p>
      {commandsListPTag()}
    </span>
    )
}


//  Bottom row, terminal location and input

export const terminalInput = (commandLine: string | number | readonly string[] | undefined, handleChange: { (event: any): void; (arg0: ChangeEvent<HTMLInputElement, HTMLInputElement>): void; }) => {
    return (<div className="terminal-input-div">
    <span className="terminal-file-path">
      dane@Danes-Site dane-the-site %
    </span>
    <span className="terminal-input-placeholder">
      {commandLine ? null : "Click here to type a command..."}
    </span>
    <input
      className="terminal-input"
      onChange={(event) => handleChange(event)}
      value={commandLine}
    />
  </div>)
}