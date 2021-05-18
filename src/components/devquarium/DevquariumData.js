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
          For best viewing experience, view full screen on a non-mobile device. While it is *technically* fully responsive, it's still growing.
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
            <p className="display-source">Sourced with love from</p>
            <p className="actual-source">https://www.withnails.tumblr.com</p>
        </div>)
        case "scary":

        break;
        case "hook":

        break;
        case "tardis":
            return <p>Tardis!</p>
        case "chicken":

        break;
        case "bubbles":

        break;
        case "octopus":

        break;
        case "nyan":

        break;
    }
}