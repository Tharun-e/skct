import axios from 'axios';
import React, {useEffect, useState} from 'react'

const BasicCrud = () => {
    const [tododata2, setTododata2]=useState([]);
    const [inputvalue1, setInputvalue1]=useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then(response => {
            console.log("response=======>>>>>>",response.data)
            setTododata2(response.data)
        })
    }, []);
    const handleinput = (e) =>{
        setInputvalue1(e.target.value);
    }
    const handlesend = () =>{
        axios.post("https://jsonplaceholder.typicode.com/albums",{title:inputvalue1})
        .then(response =>{
            console.log("added========>>>>>",response)
            setTododata2([...tododata2,response.data])
            setInputvalue1("")
        })
    }
    const handledelete = (id) =>{
        axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
        setTododata2(tododata2.filter(task => task.id != id));
    }
  return (
    <div>
        <h1>BasicCrud</h1>
        <input onChange={handleinput} value={inputvalue1}></input>{" "}
        <button onClick={handlesend}>Add</button>
        {
          tododata2&&tododata2.map(index => (
              <>
                <p key = {index.id}>{index.title}</p>
                <button>Update</button>
                <button onClick={()=>handledelete (index.id)}>Delete</button>
                </>
            ))
        }
    </div>
  )
}

export default BasicCrud