
import React from 'react'
import './App.css';
//import { HashLink as Link } from 'react-router-hash-link';
import Home from './Components/Home/Home.js'
import Projects from './Components/Projects/Projects.js'
import Contact from './Components/Contact/Contact.js'
import navbar from './Components/Navbar/navbar.js';
//import StarfieldAnimation from 'react-starfield-animation'

function App() {
  
  return (
    <div className="App">
     <navbar />
    <Home/>
    <Projects/>
    <Contact/> 
    </div>
  );
}

export default App;
