import React from 'react'

export default function Home() {
    const thehome = {
        background-color:"white",
        background-position: center,
        background-repeat: no-repeat,
        background-size: cover,
      };
    return (
        <section>
        <div className="homedv" id="Home" style={thehome}>
            <h1>My name is</h1>
            <h2>Fred Shumbusho</h2>
        </div>
        </section>
    )
}
