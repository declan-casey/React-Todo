import React from "react"
import Todo from "./Todo"
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    const handleClick = () => {
        props.handleChoreCompleted();
        console.log(props)
    }
    return(
        <div className = "todo-list">
            {props.chores.map(chore =>  (
                <Todo handleChoreToggle = {props.handleChoreToggle} key = {chore.id} chores = {chore}/>
            ))}
        <button onClick={handleClick} className="clear-btn">
            Clear Purchased
        </button>
        </div>
    )
}

export default TodoList;