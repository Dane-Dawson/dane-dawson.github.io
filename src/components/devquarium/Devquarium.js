// import "./Terminal.css";
import React, { useState } from "react";
import "./Devquarium.css";
import useSound from 'use-sound';

import axolotl from "./sounds/Axolotl.mp3"
import nyan from "./sounds/nyan.mp3"
import scary from "./sounds/scary-fish.mp3"
import pirate from "./sounds/pirate.mp3"
import tardis from "./sounds/tardis.mp3"
import chicken from "./sounds/chicken.mp3"
import bubbles from "./sounds/bubbles.mp3"
import octopus from "./sounds/cephalopod.mp3"


import { devquarium, rightSidePanel, leftSidePanel } from "./DevquariumData";

function Devquarium() {
    
const [playAxolotl] = useSound(axolotl, {volume: .05})
const [playNyan] = useSound(nyan, {volume: .05})
const [playScary] = useSound(scary, {volume: .1})
const [playPirate] = useSound(pirate, {volume: .15})
const [playTardis] = useSound(tardis, {volume: .20})
const [playChicken] = useSound(chicken, {volume: .10})
const [playBubbles] = useSound(bubbles, {volume: .15})
const [playOctopus] = useSound(octopus, {volume: .15})

  const [display, setDisplay] = useState('none')

  return (
    <div className="devquarium-main-div">
      {leftSidePanel()}
      {devquarium(setDisplay)}
      {rightSidePanel(display, playAxolotl, playNyan, playScary, playPirate, playTardis, playChicken, playBubbles, playOctopus)}
    </div>
  );
}

export default Devquarium;
