import React, { Component } from 'react';
import { FiX, FiEdit2 } from 'react-icons/fi';
import ModalClass from './Modal/ModalClass';

class TaskListItem extends Component {


    render() {
        return (
            <div className="container">
                <div className="task-wrapper">
                    <input type="checkbox"></input>
                    <li className="task-item">{this.props.description}</li>
                    <ModalClass
                        modalType={'detail'}
                        buttonClass={FiEdit2}
                        list={this.props.item}
                        title={'Edite a tarefa'}
                        id_task={this.props.id_task}
                        id_list={this.props.id_list}
                        removeTask={this.props.removeTask}
                        editTask={this.props.editTask}
                        description={this.props.description}
                    />


                </div>
            </div>
        );
    }
}
export default TaskListItem