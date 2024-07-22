import axios from 'axios';
import React, {useEffect, useState} from 'react'

const BasicCrud = () => {
    const [tododata1, setTododata1]=useState([]);
    const [inputvalue, setInputvalue]=useState([]);
    const [error, setError]=useState();
    const handle = async () => {

            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/albums")
               setTododata1(response.data[0].title); 
            }
            catch(error){
                console.log("error========>>>>>>>",error)
                setError(error.message || "An error occureed")
            }

    }
    
  return (
    <div>
        <h1>BasicCrud</h1>
        <h2><button onClick={handle}>asdfgh</button></h2>
        <p>{error}</p>
        <p>{tododata1}</p>
        
        
    </div>
  )
}

export default BasicCrud