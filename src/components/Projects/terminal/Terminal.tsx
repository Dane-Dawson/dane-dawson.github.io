import "./terminal.css";
import { useState } from "react";

import { handleTerminalDisplay, commandsArray, programsArray, terminalInput } from "./TerminalDisplayReadouts.tsx";

function Terminal() {
  const [terminalDisplay, setTerminalDisplay] = useState("initialize");
  const [commandLine, setCommandLine] = useState('')
  const [program, setProgram] = useState('launch')

  const handleChange = (event) => {
    setCommandLine(event.target.value);
    let command = event.target.value.toLowerCase();
    if (commandsArray.includes(command)) {
      setTerminalDisplay(command);
      setCommandLine("");
    } else if (programsArray.includes(command)) {
      setProgram(command);
      setTerminalDisplay("initialize");
      setCommandLine("");
    }
  };

  return (
    <div className="terminal-div">
      {handleTerminalDisplay(terminalDisplay, program)}
      {terminalInput(commandLine, handleChange)}
    </div>
  );
}

export default Terminal;
