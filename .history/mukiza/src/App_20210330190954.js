import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";
import Home from './Components/Home/Home.js'
import Projects from './Components/Projects/Projects.js'
import Contact from './Components/Contact/Contact.js'
//import StarfieldAnimation from 'react-starfield-animation'
function App() {
  return (
   
    <Router>
      <div className="App">
        <ul className="ulrouter">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      
        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
