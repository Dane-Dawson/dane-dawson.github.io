import "./Terminal.css";
import React, { useState } from "react";

import { handleTerminalDisplay, commands, help, limmerick, terminalLoading, terminalInput } from "./TerminalDisplayReadouts";

function Terminal(props) {
  const [terminalDisplay, setTerminalDisplay] = useState("");

  const handleChange = (event) => {
    props.setTerminalInput(event.target.value);
    let commandArray = ["help", "commands", "clear", "limmerick"];
    let command = event.target.value.toLowerCase();
    if (commandArray.includes(command)) {
      setTerminalDisplay(command);
      props.setTerminalInput("");
    }
  };

  return (
    <div className="terminal-div">
      {terminalLoading()}
      <br />
      {handleTerminalDisplay(terminalDisplay)}
      {terminalInput(props, handleChange)}
    </div>
  );
}

export default Terminal;
