import React from 'react'

const ListItem1 = (props) => {
    console.log("props========>>>>>>",props.data)
  return (
    <div>
        <h1>List Values</h1>
        <ol>
        {
                props.data.map((list,index) => (
                    <li key={index}>{list}</li>
                ))
        }
        </ol>
        <ul>
        {
                props.data1.map((list,index) => (
                    <li key={index}>{list}</li>
                ))
        }
        </ul>
    </div>
  )
}
export default ListItem1