import React, { useState } from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  
  const [selectedOption , setSelectedOption] = useState("");

  return (
    <div className="parent">
        <h2>Parent Component</h2>
        <Child1 setSelectedOption = {setSelectedOption}/>
        <Child2 setSelectedOption = {setSelectedOption}/>
        <p>Seleted Option: {selectedOption}</p>
    </div>
  )
}

export default App
