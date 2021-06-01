
import React from 'react'
import './App.css';
//import { HashLink as Link } from 'react-router-hash-link';
import Home from './Components/Home/Home.js'
import Header from './Components/Header/Header.js'
import Projects from './Components/Projects/Projects.js'
import Contact from './Components/Contact/Contact.js'
import Navbar from './Components/NavBar/Navbar.js';
//import StarfieldAnimation from 'react-starfield-animation'

function App() {
  
  return (
    <div className="App">
    <Header />
    <Home/>
    <Projects/>
    <Contact/> 
    </div>
  );
}

export default App;
