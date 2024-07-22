import { useEffect, useRef } from "react"
import React from 'react'

const Focus = () => {
    const refe = useRef();
    useEffect(() => {
        refe.current.focus();
        
    }, []);
  return (
    <div>
        <label htmlFor="myInput">Name</label>
        <input type="text" id="myInput" ref={refe}/>
    </div>
  )
}

export default Focus