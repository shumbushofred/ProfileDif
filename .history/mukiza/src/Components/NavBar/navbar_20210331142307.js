import React from 'react'
import { Link } from 'react-scroll';
import './NavBar.css'

export default function Navbar() {
    return ( 
    <div className="selections">
            <Link activeClass="active" to="Home" spy={true} smooth={true} duration={1000} className ="thelinks">
            Home
            </Link>
            <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={1000} className ="thelinks">
            Projects
            </Link>
            <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={1000} className ="thelinks contacts">
            Contacts
            </Link>
    </div>
    )
}

