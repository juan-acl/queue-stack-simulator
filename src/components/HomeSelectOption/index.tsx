import React from "react";
import { Link } from "react-router-dom";
import "./homeSelectOption.scss"

export const HomeSelectOption: React.FC = () => {
    return (
        <div className="container_options">
            <Link className="option" to={"/queue"}> Simulator Queue</Link>
            <Link className="option" to={"/stack"}> Simulator Stack</Link>
        </div>
    )
}