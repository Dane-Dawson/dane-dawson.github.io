import axolotl from "./images/axolotl.gif";
import scaryFish from "./images/scary-fish.gif";
import fishingHook from "./images/fishing-hook.gif";
import tardis from "./images/tardis-fade.gif";
import chicken from "./images/chicken.gif";
import bubbles from "./images/bubble-fish.gif";
import octopus from "./images/octopus.gif";
import nyan from "./images/nyan-cat.gif";

import heart from "./images/heart.png"

import mushroom from "./images/mushroom.gif";
// https://wifflegif.com/gifs/706475-pixel-art-mushroom-gif
// button bubbles - https://gfycat.com/angelicwildcondor

// background - https://www.artstation.com/csillarodonyi


import Typist from "react-typist";

export const leftSidePanel = () => {
    return (
        <div className="devquarium-side-panel">
        <div className="welcome">
          Welcome to the
          <div className="welcome-title">Devquarium!!</div>
          An adventure 20,000 Leagues Under the C...SS.
        </div>
        <div className="project-intro">
          This project is an exploration of CSS animation and effects.
          Everything you can see in the "tank" was accomplished using 9 gifs and pure CSS. For best viewing experience, view full screen on a non-mobile device. While it is *technically* fully responsive, it's still growing.
        </div>
        <div className="enjoy-message">
          For now, enjoy the 90 second animation at your leisure! Try clicking on the images for links to sources and extra fun!
        </div>
      </div>
    );
  };

  
export const devquarium = (setDisplay) => {
  return (
    <div className="devquarium-tank">
      <img className="axolotl" src={axolotl} onClick={()=>setDisplay("axolotl")}/>
      <img className="scary-fish" src={scaryFish} onClick={()=>setDisplay("scary")}/>
      <img className="fishing-hook" src={fishingHook} onClick={()=>setDisplay("hook")}/>
      <img className="tardis" src={tardis} onClick={()=>setDisplay("tardis")}/>
      <img className="chicken" src={chicken} onClick={()=>setDisplay("chicken")}/>
      <img className="bubbles" src={bubbles} onClick={()=>setDisplay("bubbles")}/>
      <img className="octopus" src={octopus} onClick={()=>setDisplay("octopus")}/>
      <img className="nyan" src={nyan} onClick={()=>setDisplay("nyan")}/>
    </div>
  );
};

const refreshPage = () => {
    window.location.reload();
}

export const rightSidePanel = (display) => {
  return (
    <div className="devquarium-side-panel">
      <div className="panel-1">
          {handleDisplay(display)}
      </div>
      <div className="restart-panel">
        <div className="another-castle">
          <Typist cursor={{ show: false }}>
            <Typist.Delay ms={95000} />
            Your fish are in another ca-
            <Typist.Backspace count={4} delay={400} />
            ...erm...
            <Typist.Backspace count={33} delay={800} />
            It seems your fish ran away!
            <br />
            Click me to restart the tank!
          </Typist>
        </div>
      </div>
      <img className="mushroom" src={mushroom} onClick={refreshPage} />
    </div>
  );
};

const handleDisplay = (display) => {
    switch (display) {
        case "none":
        return null
        break;
        case "axolotl":
        return (<div className="display-div">
            <p className="display-name">Axolotl</p>
            <p className="display-source">Sourced with creative commons license (and love). Click the image below to see their page.</p>
            <a target="_blank" className="actual-source" href="https://www.withnails.tumblr.com"><img src={heart} className="heart-icon"/></a>
        </div>)
        case "scary":
            return (<div className="display-div">
            <p className="display-name">Creepy Fish</p><p className="display-source">Sourced with creative commons license (and love). Click the image below to see their page.</p>
            <a target="_blank" className="actual-source" href="https://www.deviantart.com/narotiza/art/Tireeie-Animated-Pixel-Art-703595484"><img src={heart} className="heart-icon"/></a>
        </div>)
        break;
        case "hook":
            return (<div className="display-div">
            <p className="display-name">Cpt. Hook</p><p className="display-source">Sourced with creative commons license (and love). Click the image below to see their page.</p>
            <a target="_blank" className="actual-source" href="https://giphy.com/stickers/fish-worm-poisson-8O86D1SZggIcIWe7Ee"><img src={heart} className="heart-icon"/></a>
        </div>)
        break;
        case "tardis":
            return (<div className="display-div">
            <p className="display-name">TARDIS</p><p className="display-source">Sourced with creative commons license (and love). Click the image below to see their page.</p>
            <a target="_blank" className="actual-source" href="https://www.deviantart.com/astronautswhale"><img src={heart} className="heart-icon"/></a>
        </div>)
        case "chicken":
            return (<div className="display-div">
            <p className="display-name">Ninja Chicken</p><p className="display-source">Sourced with creative commons license (and love). Click the image below to see their page.</p>
            <a target="_blank" className="actual-source" href="https://gfycat.com/uk/cluelessquaintgelding"><img src={heart} className="heart-icon"/></a>
        </div>)
        break;
        case "bubbles":
            return (<div className="display-div">
            <p className="display-name">Bubbles The Fish</p><p className="display-source">Sourced with creative commons license (and love). Click the image below to see their page.</p>
            <a target="_blank" className="actual-source" href="https://br.pinterest.com/pin/792211390676963069/"><img src={heart} className="heart-icon"/></a>
        </div>)
        break;
        case "octopus":
            return (<div className="display-div">
            <p className="display-name">Oswald</p><p className="display-source">Sourced with creative commons license (and love). Click the image below to see their page.</p>
            <a target="_blank" className="actual-source" href="http://rexsmealart.com/pixelart"><img src={heart} className="heart-icon"/></a>
        </div>)
        break;
        case "nyan":
            return (<div className="display-div">
            <p className="display-name">Nyan Cat</p><p className="display-source">Sourced with creative commons license (and love). Click the image below to see their page.</p>
            <a target="_blank" className="actual-source" href="https://gfycat.com/accurateagreeabledairycow"><img src={heart} className="heart-icon"/></a>
        </div>)
        break;
    }
}