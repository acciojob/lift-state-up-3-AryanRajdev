import React from 'react'

const Child1 = ({setSelectedOption}) => {
  return (
    <div style={{backgroundColor:"brown", width:"350px", height:"100px" ,padding:"5px"}}>
        <h2>Child Component 1</h2>
        <button data-testid="option-1" onClick={()=> setSelectedOption("Option 1")}>Option 1</button>
    </div>
  )
}

export default Child1