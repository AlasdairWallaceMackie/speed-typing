import React from "react"

import wallCandles from "./img/wall_candles.gif"

const GAME_LENGTH = 5

export default function App(){
    const ref = React.useRef(null)
    const [isGameRunning, setIsGameRunning] = React.useState(false)
    const [textValue, setTextValue] = React.useState("")
    const [timeRemaining, setTimeRemaining] = React.useState(0)
    const [wordCount, setWordCount] = React.useState(0)

    function handleChange(event){
        setTextValue(event.target.value)
    }

    function startGame(){
        setIsGameRunning(true)
        setTextValue("")
        setTimeRemaining(GAME_LENGTH)
        setWordCount(0)
        ref.current.disabled = false
        ref.current.focus()
    }

    function endGame(){
        setIsGameRunning(false)
        setWordCount(() => {
            return textValue.trim().split(" ").filter(word => word !== "").length
        })
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (timeRemaining > 0)
                setTimeRemaining(prevTime => prevTime-1)
            else
                endGame()
        }, 1000)
        return () => clearTimeout(timer)
    }, [timeRemaining])




    return (
        <main>
            <h1 id="main-title">Speed Typing</h1>

            <div className="centering">
                <img src={wallCandles} alt="Wall Candles" />
                <div id="parchment" className="centering">
                    <textarea
                        id="main-text-area"
                        ref={ref}
                        cols={18}
                        value={textValue} 
                        onChange={handleChange} 
                        disabled={!isGameRunning}
                        placeholder={!isGameRunning ? "Click begin and start typing!" : ""}
                    />
                </div>
                <img src={wallCandles} alt="Wall Candles" />
            </div>

            <br/>
            
            <div id="hud">
                <h1 className="font-medium">Time Remaining: {timeRemaining}</h1>
                <h1 className="font-medium">Word Count: {wordCount > 0 ? wordCount : "__"}</h1>
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