import {useState, useEffect} from "react";

export default function Main() {

    // let [singleImage, setSingleImage]=useState("")

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl:"http://i.imgflip.com/1bij.jpg"
    })
const [allMemeImgs, setAllMemeImgs] = useState([])
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data =>setAllMemeImgs(data.data.memes))
    }, [])


function pressButton(){
   const randomNumber = Math.floor(Math.random() *  allMemeImgs.length);
const newMemeUrl = allMemeImgs[randomNumber].url;
setMeme(prevMeme => ({
    ...prevMeme,
    imageUrl: newMemeUrl

}))

}

    function handleChange(event){
        const {value,name} = event.currentTarget;

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button onClick = {pressButton}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}