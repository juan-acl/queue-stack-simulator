import React from "react";
import "./homeSelectOption.scss"

export const HomeSelectOption: React.FC = () => {
    return (
        <div className="container_options">
            <button className="option">
                <span>Simulator Queue</span>
            </button>
            <button className="option">
                <span>Simulator Stack</span>
            </button>
        </div>
    )
}