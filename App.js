import React from 'react';
import Todoitems from './Component/Todoitems';
import Tododata from './Tododata';
import './Component/Todoitem.css'

class App extends React.Component{
  constructor()
  {
    super()
    {
      this.state={
        todo:Tododata
      }
    }
  }
  Handlechange(id)
  {
    this.setState(prevState =>{
      const updateditems=prevState.todo.map(todos=>{
        if(todos.id===id)
        {
          todos.completed=!todos.completed
        }
        return todos
      })
      return updateditems
    })
  }
  render(){

    let list=this.state.todo.map(item=><Todoitems key={item.id} item={item} handlechange={this.Handlechange}/>)
    return (
      <div className="container">
      <div className='todo'> 
      <p className="para">TODO-LIST</p>  
        {list}
      </div>
      </div>
    )
  }
 
}

export default App;
