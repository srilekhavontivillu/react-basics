import React from 'react'

class Changestate extends React.Component{
   constructor()
   {
       super()
       {
           this.state={
               count:0,
           }
       }
       this.changevalue=this.changevalue.bind(this)
   }

   changevalue()
   {
       
       this.setState(prevState=>{
           return{
               count:prevState.count+1
           }
       })
   }
    render(){
     return(
         <div>
             <p>{this.state.count}</p>
             <button onClick={this.changevalue}>clickme</button>
         </div>
     )
    }
}

export default Changestate