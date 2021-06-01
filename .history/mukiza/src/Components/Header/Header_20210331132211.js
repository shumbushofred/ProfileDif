import React from 'react'
import Navbar from '../NavBar/Navbar.js'
import logoFred from '../../Images/logoFred.png'
export default function Header() {
    return (
        <div>
            <img src={logoFred} alt="Logo" />
            <div>
                <Navbar />
            </div>
        </div>
    )
}
