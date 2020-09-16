import React from 'react'
import './Todoitem.css'

function Todoitems(props)
{
    return(
        <div className='todoitem'>
            <input type="checkbox" check={props.item.completed}
             onChange={()=> props.handlechange(props.item.id)}/>
             <p>{props.item.text}</p></div>
    )
}

export default Todoitems;