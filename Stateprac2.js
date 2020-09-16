import React from 'react'

class Stateprac2 extends React.Component{
    constructor()
    {
        super()
        {
            this.state={
                isconnected:true
            }
        }
    }
    render()
    {
        let info;
        if(this.state.isconnected)
        info='in'
        else
        info='out'
        return (
            <h1>you are logged {info}</h1>
        )   
    }
}

export default Stateprac2