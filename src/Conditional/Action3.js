import React, { useState } from 'react'

const Action3 = () => {
    const [loged,setLoged] = useState("stud")
    if(loged==="stu") {
        alert("Welcome")
    }
    else{
        
        alert("Login")
        
    }
    const handlechange = () => {
        setLoged("stud")
    }
    return (
    <div>
         { loged ? 
        <h2>Welcome {loged}!</h2>:
        <h2>New user please Login to continue..</h2>
}
        
    
        <form>
        <label>username</label>
        <input></input>
        <label>password</label>
        <input></input>
        </form>
<button onClick={handlechange}>Log</button>
   </div>
  )
}

export default Action3

