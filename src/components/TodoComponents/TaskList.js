import React from "react";
import Task from './Task';

const TaskList = props => {
    return (
        <div className="task-list">
        {props.tasks.map(task => {
          return <Task task={task} key={task.id} toggleItem={props.toggleItem} />;
        })}
        </div>
    );
};

export default TaskList;

