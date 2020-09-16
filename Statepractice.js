import React from 'react'


class Statepractice extends React.Component{
    
    constructor(){
        super()
        {
            this.state={
                name:"shree",
                age:20
            }
        }
    }
    render()
    {
        return(
            <div>
              <h1>My name is{this.state.name}</h1>
              <h1>My age is{this.state.age}</h1>
              </div>
        )
    }
}

export default Statepractice