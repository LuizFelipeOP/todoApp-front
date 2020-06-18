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
        event.preventDefault();
        this.props.submitListenerList(this.state);
        this.setState(this.stateInicial);
        var inputVal = document.querySelectorAll(".modal-input");
        for (var i = 0; i < inputVal.length; i++) {
            inputVal[i].value = "";
        }
    }
    onSaveEditTask = (event) => {
        event.preventDefault();
        this.props.editTask(this.props.id_list, this.props.id_task, this.state);
        this.setState(this.stateInicial);
    }
    getDescription = (event) => {
        debugger
        return event.target.parentElement.children[1].innerText;
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
                    id_list={this.props.id_list}
                    description={this.description}
                    onSaveEditTask={this.onSaveEditTask}
                    inputListenerList={this.inputListenerTask}
                />
            );
        }
        if (this.props.modalType === "detail") {
            return (
                <ModalEdit
                    title={this.props.title}
                    getDescription={this.getDescription}
                    id_task={this.props.id_task}
                    id_list={this.props.id_list}
                    removeTask={this.props.removeTask}
                    description={this.description}
                    onSaveEditTask={this.onSaveEditTask}
                    inputListenerList={this.inputListenerTask}
                />
            );
        }
    }
}
export default ModalClass;
