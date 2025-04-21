import React, { useState } from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  
  const [selectedOption , setSelectedOption] = useState("");

  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <Child1 setSelectedOption = {setSelectedOption}/>
        <Child2 setSelectedOption = {setSelectedOption}/>
        <p data-testid="selected-option">Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
