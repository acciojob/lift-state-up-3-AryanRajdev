import React from 'react'

const Child2 = ({setSelectedOption}) => {
  return (
    <div style={{backgroundColor:"Yellow", width:"350px", height:"100px" , padding:"5px"}}>
        <h2>Child Component 2</h2>
        <button data-testid="option-2" onClick={()=>setSelectedOption("Option 2")}>Option 2</button>
    </div>
  )
}

export default Child2