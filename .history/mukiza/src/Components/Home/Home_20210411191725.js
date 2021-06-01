import React, { useState, useEffect }  from 'react'
import './Home.css';
import { useAnimation, motion  } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Fred from '../../Images/Fred.png'

const Box = () => {
    const BoxVariant = {
      visible: { opacity: 1, x: 220, y: 50, transition: { duration: 1 } },
      hidden: { opacity: 0, x: 450, y: 50 }
    };
    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      inView && control.start("visible");
    }, [control, inView]);
    return (
      <motion.div
        ref={ref}
        variants={BoxVariant}
        initial="hidden"
        animate={control}
      >
          <img src={Fred} alt="Fred's Image" />
      </motion.div>
    );
  };
  const Para = () => {
    const BoxVariant = {
      visible: { opacity: 1, x: 0, y: 50, transition: { duration: 1 } },
      hidden: { opacity: 0, x: 450, y: 50 }
    };
    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      inView && control.start("visible");
    }, [control, inView]);
    return (
      <motion.div
        ref={ref}
        variants={BoxVariant}
        initial="hidden"
        animate={control}
      >
          
                <p className="p1">Hello, I'm</p>
                <p className="p2">Fred Shumbusho</p>
                <p className="p3">A passionate web Developer and software engineer thrilled to work on end to end products which simplify people’s lives</p>
            
      </motion.div>
    );
  };


export default function Home() {
   
   
    return (
        
        <div className="Home" id="Home" >
            <div className="theps">
            <Para/>
            </div>
            <Box/>
        </div>
       
    )
}
