import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from "./components/TodoList"

const chores = [
  {
    name : "clean",
    id : 1,
    completed: false
  }
]

class App extends React.Component {

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      chores: chores
    }
  }

  handleChoreToggle = (choreId) => {
    this.setState({
      chores: this.state.chores.map(chore => {
        if(chore.id === choreId){
          return{
            ...chore,
            completed: !chore.completed
          }
        }
        return(chore)
      })
    })
  }

  handleChoreAdd = (choreName) => {
    const chore = {
      name : choreName,
      id : Date.now(),
      completed : false
    };

    const newChore = [...this.state.chores, chore];

    this.setState({
      chores:newChore
    });
  }

  handleChoreCompleted = () => {
    const newChore = this.state.chores.filter(chore => {
      return(!chore.completed)
    });

    this.setState({
      chores:newChore
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleChoreAdd = {this.handleChoreAdd} chores = {chores}/>
        <TodoList chores = {this.state.chores} handleChoreCompleted = {this.handleChoreCompleted} handleChoreToggle = {this.handleChoreToggle}/>
      </div>
    );
  }
}

export default App;
