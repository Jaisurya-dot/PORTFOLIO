import React from 'react'
import "./index.css"

const Loading = () => {
  
    return (
        <div className="loading-container">

            {/* Main loader */}
            <div className="loader-wrapper">
                <span className="loader-letter">L</span>
                <span className="loader-letter">o</span>
                <span className="loader-letter">a</span>
                <span className="loader-letter">d</span>
                <span className="loader-letter">i</span>
                <span className="loader-letter">n</span>
                <span className="loader-letter">g</span>
                <span className="loader-letter">.</span>
                <span className="loader-letter">.</span>
                <span className="loader-letter">.</span>

                <div className="loader"></div>
            </div>
        </div>
    )
}

export default Loading
