import React from "react";

const Task = props => {
    return (
        <div className={`task${props.task.completed ? " completed" : ""}`}
        onClick={e => props.toggleItem(props.task.id)}
      >
        {props.item.name}

        </div>
    )
};

export default Task