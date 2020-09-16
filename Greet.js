import React from 'react'

function Greet(){
    
    const date = new Date();
    const hour = date.getHours();
    let time;
    if(hour<12)
    {
        time="good morning";
    }
    else if((hour>=12)&&(hour<17))
    {
        time="good afternoon";
    }
    else
    {
        time="good night";
    }

    const s={
        color:"orange",
        backgroundColor:"red",
        fontSize:180,
        margin:0,
        textAlign:"center"
    }
    return (
        <h1 style={s}>{time} shree</h1>
    )
}
export default Greet;