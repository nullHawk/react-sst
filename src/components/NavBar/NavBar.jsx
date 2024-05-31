import React from "react";
import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar">
            <ul class="nav-list">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <a href="/Project">Project</a>
                <a href="/Resume">Resume</a>
            </ul>
        </nav>
    );
}

export default Navbar;