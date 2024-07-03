import React from "react"

export const HomeSelectOption: React.FC = () => {
    return (
        <div className="container">
            <button className="option">
                <span>Simulator QUEUE</span>
            </button>
            <button className="option">
                <span>Simulator Stack</span>
            </button>
        </div>
    )
}