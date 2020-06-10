import React, { Component } from 'react';
import { FiX, FiEdit2 } from 'react-icons/fi';
import ModalClass from './Modal/ModalClass';

class TaskListItem extends Component {


    render() {
        return (
            <div className={"task-wrapper"}>
                <li className={"task-item task-item_" + this.props.id_task} key={this.props.taskId}>{this.props.description} </li>
                <div>
                    <ModalClass
                        modalType={'edit'}
                        buttonClass={FiEdit2}
                        list={this.props.item}
                        title={'Edite a tarefa'}
                        id_task={this.props.id_task}
                        id_list={this.props.id_list}
                        editTask={this.props.editTask}
                        description={this.props.description}
                    />
                    <button id="delete" onClick={() => { this.props.removeTask(this.props.id_list, this.props.id_task) }} >
                        <FiX />
                    </button>

                </div>
            </div>
        );
    }
}
export default TaskListItem