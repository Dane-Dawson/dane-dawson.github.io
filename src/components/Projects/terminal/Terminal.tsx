import "./terminal.css";
import { useState, type ChangeEvent } from "react";

import { handleTerminalDisplay, commandsArray, programsArray, terminalInput } from "./TerminalDisplayReadouts.tsx";

function Terminal() {
  const [terminalDisplay, setTerminalDisplay] = useState("initialize");
  const [commandLine, setCommandLine] = useState('')
  const [program, setProgram] = useState('launch')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCommandLine(event.target.value);
    let command = event.target.value.toLowerCase();
    if (commandsArray.includes(command)) {
      setCommandLine('clear');
      setTerminalDisplay('clear');
      setTimeout(() => {
      setTerminalDisplay(command);
  }, 100);
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
