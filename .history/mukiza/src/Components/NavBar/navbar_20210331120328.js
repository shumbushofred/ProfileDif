import React from 'react'
import { Link } from 'react-scroll';
import './NavBar.css'
export default function Navbar() {
    return (
        <div  className="header">
        <div>
            <Link activeClass="active" to="Home" spy={true} smooth={true} duration={1000}>
            Section 1
            </Link>
            <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={1000}>
            Section 2
            </Link>
            <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={1000}>
            Section 3
            </Link>
        </div>
    </div>
    )
}

