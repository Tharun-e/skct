import { Outlet,Link } from "react-router-dom";
import React from "react"
const App2 = () =>{
    return(
        <>
        <nav>
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/SignUp">SignUp</Link>
            </li>
        </ul>    
        </nav>
        <Outlet/>
        </>
    )
}
export default App2;