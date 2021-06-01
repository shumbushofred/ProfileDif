
import React from 'react'
import './App.css';
import { HashLink as Link } from 'react-router-hash-link';
//import Home from './Components/Home/Home.js'
//import Projects from './Components/Projects/Projects.js'
//import Contact from './Components/Contact/Contact.js'
//import StarfieldAnimation from 'react-starfield-animation'
function App() {
  return (
   
    <BrowserRouter>
      <div className="App">
        <ul className="ulrouter">
          <li>
            <Link smooth to="/#home">Home</Link>
          </li>
          <li>
            <Link smooth to="/#Projects">Projects</Link>
          </li>
          <li>
            <Link smooth to="/#Contact">Contact</Link>
          </li>
        </ul>
      
        
      </div>
      </BrowserRouter>
    
  );
}

export default App;
