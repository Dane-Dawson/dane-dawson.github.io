import { useState } from "react";
import { createPortal } from "react-dom";
import "./Devquarium.css";
import useSound from "use-sound";

import axolotl from "./sounds/Axolotl.mp3";
import nyan from "./sounds/nyan.mp3";
import scary from "./sounds/scary-fish.mp3";
import pirate from "./sounds/pirate.mp3";
import tardis from "./sounds/tardis.mp3";
import chicken from "./sounds/chicken.mp3";
import bubbles from "./sounds/bubbles.mp3";
import octopus from "./sounds/cephalapod.mp3";

import { devquarium, rightSidePanel, leftSidePanel } from "./DevquariumData";

const Devquarium = () => {
  const [display, setDisplay] = useState("none");

  const [playAxolotl] = useSound(axolotl, { volume: 0.05 });
  const [playNyan] = useSound(nyan, { volume: 0.05 });
  const [playScary] = useSound(scary, { volume: 0.1 });
  const [playPirate] = useSound(pirate, { volume: 0.15 });
  const [playTardis] = useSound(tardis, { volume: 0.4 });
  const [playChicken] = useSound(chicken, { volume: 0.15 });
  const [playBubbles] = useSound(bubbles, { volume: 0.15 });
  const [playOctopus] = useSound(octopus, { volume: 0.15 });

  return createPortal(
    <div className="devquarium-main-div">
      {leftSidePanel()}
      {devquarium(setDisplay)}
      {rightSidePanel(
        display,
        playAxolotl,
        playNyan,
        playScary,
        playPirate,
        playTardis,
        playChicken,
        playBubbles,
        playOctopus
      )}
    </div>,
    document.body
  );
};

export default Devquarium;
