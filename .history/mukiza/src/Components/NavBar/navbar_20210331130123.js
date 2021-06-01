import React from 'react'
import { Link } from 'react-scroll';
import './NavBar.css'
import logoFred from '../../Images/logoFred.png'
export default function Navbar() {
    return (
        <div >
          <img src={logoFred} alt="Logo" />
        <div className="header">
            <Link activeClass="active" to="Home" spy={true} smooth={true} duration={1000}>
            Home
            </Link>
            <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={1000}>
            Projects
            </Link>
            <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={1000}>
            Contacts
            </Link>
            
        </div>
    </div>
    )
}

