import React from "react"

class Conditionalrendering extends React.Component{
    constructor()
    {
        super()
        {
            this.state={
                isload:true
            }
        }
    }

    render()
    {
        return (<conditional load={this.state.isload}/>)
    }
}