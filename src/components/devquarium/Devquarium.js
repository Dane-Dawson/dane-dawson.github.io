// import "./Terminal.css";
import React, { useState } from "react";
import "./Devquarium.css";

import axolotl from "./images/axolotl.gif";
// withnails.tumblr.com (tumblr won't let me link directly to account without my own account)
import scaryFish from "./images/scary-fish.gif";
// https://www.deviantart.com/narotiza/art/Tireeie-Animated-Pixel-Art-703595484
import fishingHook from "./images/fishing-hook.gif";
// https://giphy.com/stickers/fish-worm-poisson-8O86D1SZggIcIWe7Ee
import tardis from "./images/tardis-fade.gif";
// https://www.deviantart.com/astronautswhale
import chicken from "./images/chicken.gif";
// https://gfycat.com/uk/cluelessquaintgelding
import bubbles from "./images/bubble-fish.gif";
// https://br.pinterest.com/pin/792211390676963069/
import octopus from "./images/octopus.gif";
// http://rexsmealart.com/pixelart
import nyan from "./images/nyan-cat.gif";
// https://gfycat.com/accurateagreeabledairycow

// button bubbles - https://gfycat.com/angelicwildcondor

// background - https://www.artstation.com/csillarodonyi

function Devquarium() {
  return (
    <div className="devquarium-main-div">
      <div className="devquarium-side-panel">
        <div className="welcome">
          Welcome to the 
          <div className="welcome-title">Devquarium!!</div>
          For best viewing experience, view full screen on a non-mobile device.
        </div>
        <div className="project-intro">
          This project is an exploration of CSS animation and effects.
          Everything you can see in the "tank" was accomplished using 9 gifs
          (credited in the code) and pure CSS.
        </div>
        <div className="enjoy-message">
          For now, enjoy the 90 second animation at your leisure! 
        </div>

      </div>

      <div className="devquarium-tank">
        <img className="axolotl" src={axolotl} />
        <img className="scary-fish" src={scaryFish} />
        <img className="fishing-hook" src={fishingHook} />
        <img className="tardis" src={tardis} />
        <img className="chicken" src={chicken} />
        <img className="bubbles" src={bubbles} />
        <img className="octopus" src={octopus} />
        <img className="nyan" src={nyan} />
      </div>

      <div className="devquarium-side-panel"></div>
    </div>
  );
}

export default Devquarium;
