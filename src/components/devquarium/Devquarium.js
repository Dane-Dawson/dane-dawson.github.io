// import "./Terminal.css";
import React, { useState } from "react";
import "./Devquarium.css";

import { devquarium, rightSidePanel, leftSidePanel } from "./DevquariumData";

function Devquarium() {
    
  const [display, setDisplay] = useState('none')

  return (
    <div className="devquarium-main-div">
      {leftSidePanel()}
      {devquarium(setDisplay)}
      {rightSidePanel(display)}
    </div>
  );
}

export default Devquarium;
