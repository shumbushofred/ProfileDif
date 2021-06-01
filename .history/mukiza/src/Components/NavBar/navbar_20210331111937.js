import React from 'react'

function navbar() {
    return (
       
    <div>
        <div className="header">
            <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
            Section 1
            </Link>
            <Link activeClass="active" to="section2" spy={true} smooth={true} duration={1000}>
            Section 2
            </Link>
            <Link activeClass="active" to="section3" spy={true} smooth={true} duration={1000}>
            Section 3
            </Link>
        </div>
    </div>
    )
}

export default navbar
