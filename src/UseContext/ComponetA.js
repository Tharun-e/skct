import React,{useContext} from "react";
import MyContext from "./MyContext";
const ComponetA =() => {
    const {myvalue, setMyvalue} = useContext(MyContext);
    const nav =()=>{
        setMyvalue("red")
    }
    return(
        <div>
        <p style={{color:myvalue}}>Value : {myvalue}</p>
        <button onClick={nav}>Change</button>
        </div>
    )
}
export default ComponetA