import React, { Component } from 'react';
import { FiX, FiEdit2 } from 'react-icons/fi';

class TaskListItem extends Component {

    selectTask = event => {
        if (event.target.style.transform === 'translateX(0px)' || event.target.style.transform === '') {
            event.target.style.transform = 'translateX(-60px)';
            //const button = this.buttons(true);

        } else {
            event.target.style.transform = 'translateX(0px)';
            //this.buttons(false);
        }


    }
    openEditFormTask = (task_id) => {
        let taskClassName = '.task-item_' + task_id;
        let tasKItem = document.querySelector(taskClassName.toString());
        let taskDescription = document.querySelector(taskClassName.toString()).innerText;
        document.querySelector(taskClassName.toString()).hidden = true

        let wrapperClassName = '.task-wrapper_' + task_id;
        let wrapperItem = document.querySelector(wrapperClassName.toString());
        // let newInput = document.querySelector("input");
        // let newInputClassName = '.edit-task_' + task_id;
        // newInput.classList.add(newInputClassName.toString());

        // newInput.value = taskDescription;
        // tasKItem.replaceWith(newInput)
        debugger

    }
    render() {
        return (
            <div className={"task-wrapper  task-wrapper_" + this.props.id_task}>
                <li className={"task-item task-item_" + this.props.id_task} onClick={this.selectTask} key={this.props.taskId}>{this.props.description} </li>
                <button onClick={() => { this.openEditFormTask(this.props.id_task) }}>
                    <FiEdit2 />
                </button>
                <button onClick={() => { this.props.removeTask(this.props.id_list, this.props.id_task) }} >
                    <FiX />
                </button>
            </div>
        );
    }
}
export default TaskListItem