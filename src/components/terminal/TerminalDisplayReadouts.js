// Input for handling commands, return is associated to the const created below associated with the recieved terminalDisplay

export const handleTerminalDisplay = (terminalDisplay) => {
    switch (terminalDisplay) {
      case "clear":
        return "";
      case "help":
        return help();
      case "commands":
        return commands();
      case "limmerick":
        return limmerick();
    }
  };


//  !!   commands returns for the terminal

export const commands = () => {
    return (<div>
        <p className="terminal-display commands-1">Seriously? Just look up like...2 lines.</p>
        <p className="terminal-display commands-2">I know devs don't read documentation, but come on now.</p>

        </div>)
}

export const help = () => {
    return (<div>
        <p className="terminal-display">I mean...I wish I could, I need some myself!</p>
        <p className="terminal-display help-1">Have you tried using Google?</p>
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

export const terminalLoading = () => {
    return (<span>
  <p className="webpack-compiling">webpack: Compiling...</p>
    <p className="webpack-compiled">webpack: Compiled successfully.</p>
    <p className="terminal-hash">Hash: 8675309-4eva&42</p>
    <p className="terminal-time">Time: 1337ms</p>
    <p className="terminal-enter-commands">
      Enter commands below to explore...
    </p>
    <p className="terminal-commands">
      help || clear || commands || limmerick
    </p>
    </span>
    )
}


//  Bottom row, terminal location and input

export const terminalInput = (props, handleChange) => {
    return (<div className="terminal-input-div">
    <span className="terminal-file-path">
      dane@Danes-Site dane-the-site %
    </span>
    <span className="terminal-input-placeholder">
      {props.terminalInput ? null : "Click here to type a command..."}
    </span>
    <input
      className="terminal-input"
      onChange={(event) => handleChange(event)}
      value={props.terminalInput}
    />
  </div>)
}