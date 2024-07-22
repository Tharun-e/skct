import React, {useEffect, useState} from 'react'

const Useeffect = () => {
    const [update, setUpdate]=useState(0);
    useEffect(() => {
       setTimeout(()=>{
        setUpdate(update+1)
        
       },10)
       return()=>{

       };
    }, []);
  return (
    <div>
        <h1>{update}</h1>
    </div>
  )
}

export default Useeffect
useEffect(() => {
  
}, [input]);
