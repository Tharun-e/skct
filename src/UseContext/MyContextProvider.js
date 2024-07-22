import React,{useState} from "react";
import MyContext from "./MyContext";
const MyContextProvider = ({children}) => {
    const [myvalue, setMyvalue] = useState('black');
    return(
        <MyContext.Provider value = {{myvalue, setMyvalue}}>
            {children}
        </MyContext.Provider>
    )
}
export default MyContextProvider;