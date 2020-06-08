import React, { Component } from 'react';
import '../../App.css';
import ModalCreate from './ModalCreate';
import ModalEdit from './ModalEdit';

class ModalClass extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {

        }
        this.state = this.stateInicial;
        this.description = this.props.description;

    }

    inputListenerList = event => {
        var valueList;
        var valueTask;

        if (event.target.name === 'list') {
            valueList = event.target.value;

            this.setState({
                name: valueList,
            });
        }

        if (event.target.name === 'task') {
            valueTask = event.target.value;
            this.setState({
                task: [
                    {
                        name: valueTask,
                        description: valueTask
                    }
                ]
            });

        }

    }
    inputListenerTask = event => {
        const { value } = event.target;
        this.setState({
            task: [
                {
                    name: value,
                    description: value
                }
            ]
        });
        this.description = value;
    }
    onSaveCreateList = (event) => {
        this.props.submitListenerList(this.state);
        this.setState(this.stateInicial);
        event.target.firstChild.value = "";
    }
    onSaveEditTask = (event) => {
        event.preventDefault();
        this.props.editTask(this.props.id_list, this.props.id_task, this.state);
        this.setState(this.stateInicial);
        event.target.firstChild.value = "";
    }

    render() {

        if (this.props.modalType === "create") {
            return (
                <ModalCreate
                    title={this.props.title}
                    onSaveCreateList={this.onSaveCreateList}
                    inputListenerList={this.inputListenerList}
                />
            );
        }
        if (this.props.modalType === "edit") {
            return (
                <ModalEdit
                    title={this.props.title}
                    id_task={this.props.id_task}
                    description={this.description}
                    onSaveEditTask={this.onSaveEditTask}
                    inputListenerList={this.inputListenerTask}
                />
            );
        }
    }
}
export default ModalClass;
