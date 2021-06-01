import React from 'react'
import './Home.css';
import Fred from '../../Images/Fred.png'
export default function Home() {
   
    return (
        
        <div className="Home" id="Home">
            <div>
                <P>Hello, I'm</P>
                <p>Fred Shumbusho</p>
                <p>A passionate web Developer and software engineer thrilled to work on end to end products which simplify people’s lives</p>
            </div>
            <div>
                <img src={Fred} alt="Fred's Image" />
            </div>
        </div>
       
    )
}
