import javascriptIcon from "./images/javascript.svg";
import reactIcon from "./images/react.svg";
import jsonIcon from "./images/json.png";
import jsonServerIcon from "./images/jsonserver.png"


export const returnIcons = (techArray) => {
    let projectIcons = iconsArray.map(icon => techArray.includes(icon.props.alt) ? icon : null )
    console.log(projectIcons)
    return projectIcons
}

// img tags witha  classname project-icon to catch icon styling, a classname matching the tech for background coloring
// and an alt tag that matches the tech list in ProjectsData.js.  Icons sourced from https://simpleicons.org/
export const iconsArray = [
    <img className="javascript project-icon" src={javascriptIcon} alt="javascript" key="javascript"/>,
    <img className="react project-icon" src={reactIcon} alt="react" key="react"/>,
    <img className="json project-icon" src={jsonIcon} alt="json" key="json"/>,
    <img className="json-server project-icon" src={jsonServerIcon} alt="json-server" key="json-server"/>,
]