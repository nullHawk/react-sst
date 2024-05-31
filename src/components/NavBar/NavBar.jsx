import React from "react";
import './navbar.css';

function Navbar(){
    return (
        <nav className="navbar">
            <ul class="nav-list">
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/Project">Project</a>
                <a href="/Resume">Resume</a>
            </ul>
        </nav>
    );
}

export default Navbar;