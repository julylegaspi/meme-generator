import React, { useState, useEffect } from 'react'

function MemeForm()
{
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/9ehk.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(async () => {
        const res = await fetch("https://api.imgflip.com/get_memes") //return 100 memes
        const data = await res.json()
        setAllMemes(data.data.memes)
    }, [])

    function getMemeImage()
    {
        const randomNumber = Math.floor(Math.random() * allMemes.length) //generate 0-99
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event)
    {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    function handleSubmit(event)
    {
        event.preventDefault()
    }

    return (
        <main>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <input type="text" name="topText" value={meme.topText} onChange={handleChange} className="form-control form-control-lg" placeholder="Top text" aria-label="Top text" />
                        </div>
                        <div className="col">
                            <input type="text" name="bottomText" value={meme.bottomText} onChange={handleChange} className="form-control form-control-lg" placeholder="Bottom text" aria-label="Bottom text" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="d-grid gap-2">
                            <button onClick={getMemeImage} className="btn btn-outline-dark btn-lg" type="submit">Generate Meme image</button>
                        </div>
                    </div>
                </form>
                
                <div className="row mt-3 mb-3 meme_container">
                    <img src={meme.randomImage} className="img-fluid" alt="Meme" />
                    <div className="top-center">{meme.topText}</div>
                    <div className="bottom-center">{meme.bottomText}</div>
                </div>
            </div>
        </main>
    )
}


export default MemeForm