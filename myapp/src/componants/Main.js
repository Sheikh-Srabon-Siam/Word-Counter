import React, { useState } from 'react';
import css from './main.css';


function Main() {
  
  const clicked = () => {
   setText(text.toUpperCase())
  }
    const clickedd = () => {
   setText(text.toLowerCase())
  }
  const vchange = (event) => {
    console.log("changed");
    setText(event.target.value)
  }
 
  const [text, setText] = useState("");
  return (
    <>
      <main>
        
        <div className="text-area">
          <p htmlFor="text">Enter Your Messege</p>
          <textarea value={text} onChange={vchange} id="text" className="text" rows="8" />
          <br />
          <button id="Capital" onClick={clicked} className="Capital">Transform to uppercase</button>
           <button id="Capital" onClick={clickedd} className="Capital">Transform to LowerCase</button>

        </div>
        <div className="length">
          <h1>
          Your Text Summary
          </h1>
        <p>
        Your Text Have {text.split(" ").length} Word And {text.length} Charecter.
        </p>
          <h2>
          Preview
          </h2>
          <p>{text}</p>
        </div>
      </main>
    </>
  )
}
export default Main;