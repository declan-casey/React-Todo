import React from "react"
import Todo from "./Todo"
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    const handleClick = () => {
        props.handleComplete();
        console.log(props)
    }
    return(
        <div className = "todo-list">
            List
            {props.toDos.map(toDo =>  (
                <Todo handleToDoToggle = {props.handleToDoToggle} key = {toDo.id} toDos = {toDo}/>
            ))}
        <button onClick={handleClick} className="clear-btn">
            Clear Purchased
        </button>
        </div>
    )
}

export default TodoList;