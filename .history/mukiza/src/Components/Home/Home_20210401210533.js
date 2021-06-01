import React, { useState }  from 'react'
import './Home.css';
import { InView } from 'react-intersection-observer'

import Fred from '../../Images/Fred.png'
export default function Home() {
   
    const [inView, setInView] = useState(false);
    const [innerView, setInnerView] = useState(false);
    const [theref, settheref] = useState(false);
    const dosomething = () =>{
        setInView(inView)
        console.log(inView)
    };
    const innerviewchanger = (innrView) =>{
        setInnerView(innrView)
        console.log(innerView)
    };
    const therefchanger = (therf) =>{
        settheref(therf)
        console.log(theref)
    };
    return (
        
        <div className="Home" id="Home" >
            <div className="theps">
                <p className="p1">Hello, I'm</p>
                <p className="p2">Fred Shumbusho</p>
                <p className="p3">A passionate web Developer and software engineer thrilled to work on end to end products which simplify people’s lives</p>
            </div>
            <div>
                <img src={Fred} alt="Fred's Image" />
                <InView onChange={dosomething}>
                {({ ref, inView }) => (
                   <h1>{setInnerView(ref)}</h1> 
            
         
        )}
        </InView>
            </div>
        </div>
       
    )
}
