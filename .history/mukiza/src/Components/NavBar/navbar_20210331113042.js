import React from 'react'
import { Link } from 'react-scroll';
export default function Navbar() {
    return (
        <div>
        <h1>hehe</h1>
        <div className="header">
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

