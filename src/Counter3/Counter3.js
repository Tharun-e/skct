import React, { useState } from 'react'

const Counter3 = () => {
    const [count, setCount] = useState(0);
    const inc = () =>{
        setCount(count+1);
    }
    const dec = () =>{
        setCount(count-1);
    }
  return (
    <div>
        <h1>Counter Component</h1>
        <button onClick={inc} >Increament</button>
        <h2>Count : {count}</h2>
        <button onClick={dec}>Decreament</button>
    </div>
  )
}

export default Counter3