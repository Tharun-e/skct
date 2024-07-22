import React, { useState } from 'react'

const Action2 = () => {
    const [user , setUser] = useState("stud")
    const handlelogout = () => {
        setUser("")
    }
    const handlelogin = () => {
        setUser("stud")
    }
  return (
    <div>
        { user ? 
        <h2>Welcome {user}!</h2>:
        <h2>New user please Login to continue..</h2>
}
        <button onClick={handlelogout}>Logout</button>
        <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Action2