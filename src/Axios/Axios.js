import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Axios = () => {
    const[apidata,setApidata] = useState()
    const[apidat,setApidat] = useState()
    const[apida,setApida] = useState()
    const[apid,setApid] = useState()
    const[api,setApi] = useState(false)
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        setApidata(response.data[5].id)
        setApidat(response.data[5].name)
        setApida(response.data[5].email)
        setApid(response.data[5].phone)
        setApi(true)
        console.log("response========>>>>>>>>>",response);
    })
    
    return (
    <div>
        { api ?
        <p>{apida}</p> :
        <CircularProgress/> 
        
}
        
        
    </div>
  )
}
export default Axios;