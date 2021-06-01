import React from 'react'
import Navbar from '../NavBar/Navbar.js'
import logoFred from '../../Images/logoFred.png'
import './Header.css'
export default function Header() {
    return (
        <div className="Header">
            <img src={logoFred} alt="Logo" className="image" />
            <div className="navigations">
                <Navbar />
            </div>
        </div>
    )
}
