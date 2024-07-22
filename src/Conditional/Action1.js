import React, { useState } from 'react'

const Action1 = () => {
    const [loged,setLoged] = useState(true)
    if(true) {
       
    }
    else{
        
    }
    const handleopen = () =>{
        setLoged(false);
    }
    const handleclose =() =>{
        setLoged(true);
    }
    return (
    <div>
        <h2>If statement</h2>
        
        {loged &&
        <form>
        <label>username</label>
        <input></input>
        <label>password</label>
        <input></input>
        </form>
}
<button onClick={handleopen}>close</button>
<button onClick={handleclose}>open</button>
    </div>
  )
}

export default Action1