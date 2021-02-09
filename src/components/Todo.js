import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.handleToDoToggle(props.toDos.id);
    }

    return(
        <div onClick = {handleClick}>
            <p>{props.toDos.name} {props.toDos.completed ? "this task is done" : ""}</p>
        </div>
    )
}

export default Todo;