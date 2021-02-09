import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const toDos = [{
  name:"Cook",
  id: Date.now(),
  completed: false
}]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    toDos: toDos
  }

  handleToDoToggle = (toDoId) => {
    this.setState({
      toDos:this.state.toDos.map(toDo => {
        if(toDo.id === toDoId){
          return{
            ...toDo,
            completed: !toDoId.completed
          }
        }
        return(toDo)
      })
    })
  }

  handleToDoAdd = (toDoName) => {
    const toDo = {
      name : toDoName,
      id : Date.now(),
      completed : false
    }

    const newChore = [...this.state.toDos, toDo];

    this.setState({
      toDos: newChore
    })
  }

  handleComplete = () => {
    const newChore = this.state.toDos.filter(toDo => {
      return(!toDo.completed)
    });
    this.setState({
      toDos: newChore
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleToDoAdd = {this.handleToDoAdd} toDos = {toDos}/>
        <TodoList toDos = {this.state.toDos} handleComplete = {this.handleComplete} handleToDoToggle = {this.handleToDoToggle}/>
      </div>
    );
  }
}

export default App;
