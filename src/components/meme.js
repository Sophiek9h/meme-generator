import React from "react";
import imgMeme from "../img/memeimg.png";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: imgMeme,
  });

  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() =>  {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
  }, [])


  function getMeme() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;

    setMeme((prev) => ({
      ...prev,
      randomImg: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button className="form-btn" onClick={getMeme}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImg} alt="meme" className="meme-img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
