import axios from 'axios'
import React, { useState } from 'react'

const Axios1 = () => {
    const[apidata,setApidata] = useState()
    const[apidat,setApidat] = useState()
    const[apida,setApida] = useState()
    const[apid,setApid] = useState()
    const[api,setApi] = useState()
    const[ap,setAp] = useState()
    axios.get("https://jsonplaceholder.typicode.com/albums")
    .then(response => {
        setApidata(response.data[3].id)
        setApidat(response.data[3].title)
        setApida(response.data[3].userId)
        setApid(response.data[2].id)
        setApi(response.data[2].title)
        setAp(response.data[2].userId)
        console.log("response========>>>>>>>>>",response);
    })
    
    return (
    <div>
        <h1>Axios</h1>
        <h1>id1</h1>
        <h2>{apidata}</h2>
        <h1>Title1</h1>
        <h2>{apidat}</h2>
        <h1>UserId1</h1>
        <h2>{apida}</h2>
        <h1>id2</h1>
        <h2>{apid}</h2>
        <h1>Title2</h1>
        <h2>{api}</h2>
        <h1>UserId2</h1>
        <h2>{ap}</h2>
    </div>
  )
}
export default Axios1;