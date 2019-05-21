import React from "react"

function TodoItem(props) {
    const itemClassName =  props.item.completed?'completed':null
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}/>
            <p className={itemClassName}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem