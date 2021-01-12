import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.handleChoreToggle(props.chores.id);
    }

    return(
        <div onClick = {handleClick}>
            <p>{props.chores.name} {props.chores.completed ? "this task is done" : ""}</p>
        </div>
    )
}

export default Todo;