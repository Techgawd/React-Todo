import React from "react";

const Task = props => {
    return (
        <div className={`task${props.item.completed ? " completed" : ""}`}
        onClick={e => props.toggleItem(props.item.id)}
      >
        {props.item.name}

        </div>
    )
};

export default Task