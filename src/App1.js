import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App2 from "./App2";
import Login from "./Login Page/Login";
import SignUp from "./Sign Up/SignUp";
const App1 = () =>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
            <Route path="/"element={<App2/>}>
                <Route path='/Login' element={<Login/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
            </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App1;

