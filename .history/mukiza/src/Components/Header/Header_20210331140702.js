import React from 'react'
import Navbar from '../NavBar/Navbar.js'
import logoFred from '../../Images/logoFred.png'
import { Link } from 'react-scroll';
import './Header.css'
export default function Header() {
    return (
        <div className="Header">
            <Link activeClass="active" to="Home" spy={true} smooth={true} duration={1000}>
                <img src={logoFred} alt="Logo" className="image" />
                </Link>
            <div className="navigations">
                <Navbar />
            </div>
        </div>
    )
}
