import React, { useState, useEffect }  from 'react'
import './Home.css';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Fred from '../../Images/Fred.png'

const Box = () => {
    const BoxVariant = {
      visible: { opacity: 1, x: 450, transition: { duration: 1 } },
      hidden: { opacity: 0, x: 300 }
    };
    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      inView && control.start("visible");
    }, [control, inView]);
    return (
      <div
        ref={ref}
        variants={BoxVariant}
        initial="hidden"
        animate={control}
      />
    );
  };



export default function Home() {
   
    const [inView, setInView] = useState(false);
    const [innerView, setInnerView] = useState(false);
    const [theref, settheref] = useState(false);
    const dosomething = () =>{
        setInView(inView)
        console.log('outerview', inView)
    };
    const innerviewchanger = (innrView) =>{
        setInnerView(innrView)
        console.log('inner view', innerView)
    };
    const therefchanger = (therf) =>{
        settheref(therf)
        console.log('theref', theref)
    };
    return (
        
        <div className="Home" id="Home" >
            <div className="theps">
                <p className="p1">Hello, I'm</p>
                <p className="p2">Fred Shumbusho</p>
                <p className="p3">A passionate web Developer and software engineer thrilled to work on end to end products which simplify people’s lives</p>
            </div>
            <box>
                <img src={Fred} alt="Fred's Image" />
               
            </box>
        </div>
       
    )
}
