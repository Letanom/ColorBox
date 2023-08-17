import React from 'react'

const Input = ({colorValue,setColorValue}) => {
  return (
    <form className='Input' onSubmit={(e)=>e.preventDefault()}>
    <label>Write a Color Name</label>
    <input 
     autoFocus
    type="text"
    placeholder='color name'
    required
    value={colorValue}
    onChange={(e) =>setColorValue(e.target.value)}
    
  />




    </form>
  )
}

export default Input