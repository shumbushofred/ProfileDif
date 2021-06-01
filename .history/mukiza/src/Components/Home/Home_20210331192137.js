import React from 'react'
import './Home.css';
import Fred from '../../Images/Fred.png'
export default function Home() {
   
    return (
        
        <div className="Home" id="Home">
            <div className="theps">
                <p className="p1">Hello, I'm</p>
                <p className="p2">Fred Shumbusho</p>
                <p className="p3">A passionate web Developer and software engineer thrilled to work on end to end products which simplify people’s lives</p>
            </div>
            <div>
                <img src={Fred} alt="Fred's Image" />
            </div>
        </div>
       
    )
}
