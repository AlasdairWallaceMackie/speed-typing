import React from "react"

import wallCandles from "./img/wall_candles.gif"

const GAME_LENGTH = 5

export default function App(){
    const [isGameRunning, setIsGameRunning] = React.useState(false)
    const [textValue, setTextValue] = React.useState("")
    const [timeRemaining, setTimeRemaining] = React.useState(0)

    function handleChange(event){
        setTextValue(event.target.value)
    }

    function getWordCount(){
        let count = textValue.trim().split(" ").length
        console.log(count)
        // return count
    }

    function startGame(){
        setIsGameRunning(true)
        setTimeRemaining(GAME_LENGTH)
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (timeRemaining > 0)
                setTimeRemaining(prevTime => prevTime-1)
            else
                setIsGameRunning(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [timeRemaining])

    return (
        <main>
            <h1 id="main-title">Speed Typing</h1>

            
            <div className="centering">
                <img src={wallCandles} alt="Wall Candles" />
                <div id="parchment" className="centering">
                    <textarea cols={18} value={textValue} onChange={handleChange} />
                </div>
                <img src={wallCandles} alt="Wall Candles" />
            </div>
            <br/>
            <div id="hud">
                <h1 className="font-medium">Time Remaining: {timeRemaining}</h1>
                <h1 className="font-medium">Word Count: ___</h1>
            </div>
            
            <div className="centering">
                <button
                    id="start-button"
                    className="centering font-medium shadow"
                    onClick={startGame}
                    disabled={isGameRunning}
                >
                    BEGIN
                </button>
            </div>
        </main>
    )
}