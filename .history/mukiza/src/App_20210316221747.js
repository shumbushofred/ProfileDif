import React from 'react'
import './App.css';
import StarfieldAnimation from 'react-starfield-animation'
function App() {
  return (
    <div className="App">
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
}

export default App;
