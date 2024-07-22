
import React, {useState} from 'react'
import Hook2 from './Hook2';

const Hooks = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Nam1")
    const inc = () =>{
        setCount(count+1)
    }
    const dec = () =>{
        setCount(count-1)
    }
    const change = (e) =>{
        setName(e.target.value)
    }
    return (
      <div>
        <center>
        <h3>Count {count}</h3>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button><br></br><br></br>
        <input onChange={change}></input>
        <Hook2 data = {name}></Hook2>
        </center>
      </div>
    )
}

export default Hooks