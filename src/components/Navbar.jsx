import React from "react";
import reactLogo from "../assets/ReactLogo.webp"
export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="nav--logo"></img>
            <h3 className="logo--text">ReactFacts<br /></h3>
            <h4 className="nav--text">React Course - Project-1</h4>
        </nav>
    )
}