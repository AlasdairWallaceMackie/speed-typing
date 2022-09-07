import React from "react"

import wallCandles from "./img/wall_candles.gif"

export default function App(){
    return (
        <main>
            <h1 id="main-title">Speed Typing</h1>

            
            <div className="centering">
                <img src={wallCandles} />
                <textarea rows={10} cols={20} className="font-medium"></textarea>
                <img src={wallCandles} />
            </div>
            
            <h1 className="font-medium">Time Remaining: __</h1>
            
            <div className="centering">
                <button id="start-button" className="centering font-medium shadow">BEGIN</button>
            </div>
        </main>
    )
}