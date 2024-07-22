import { CircularProgress } from '@mui/material';
import React, { useState } from 'react'

const Focus = () => {
  const [add, setAdd] = useState(false);
  const handlestart = () =>{
    setAdd(true);
  }
  const handleend = () =>{
    setAdd(false);
  }
  return (
    <div>
      {add &&
        <CircularProgress/>
      }
      <button onClick={handlestart}>start</button>
      <button onClick={handleend}>Stop</button>
    </div>
  )
}

export default Focus