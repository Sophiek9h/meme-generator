import React from "react";
import troll from "../img/Troll.png";


export default function Head(){
    return (
        <header className="header">
            <img src={troll} alt="troll img" className="troll-img"/>
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Project</h4>
        </header>
    )
}