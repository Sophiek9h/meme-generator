import React from "react";
import meme from "./data"
import imgMeme from "../img/memeimg.png"


export default function Meme (){
    const [memeImg, setMemeImg] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: imgMeme     
    })

    const [allMemeImages] = React.useState(meme)

    function getMeme(){
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        
        setMemeImg(prev =>({
            ...prev,
            randomImg: url
        })) 
    
    }

    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button 
                    className="form-btn"
                    onClick={getMeme}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <img src={memeImg.randomImg} alt="meme" className="meme-img" />
        </main>
    )
}