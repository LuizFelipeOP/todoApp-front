import React, { Component, Fragment } from 'react';
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
        const { value } = event.target;
        this.setState({
            name: value,
            task: Array
        });

    }
    inputListenerTask = event => {
        debugger
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
    onSave = (event) => {
        event.preventDefault();
        this.props.submitListenerList(this.state);
        this.setState(this.stateInicial);
        event.target.firstChild.value = "";
    }
    startEditInputValue = (event) => {
        this.props.submitListenerList(this.state);
        this.setState(this.stateInicial);
        event.target.firstChild.value = "";
    }
    render() {

        if (this.props.modalType === "create") {
            return (
                <ModalCreate
                    onSave={this.onSave}
                    title={this.props.title}
                    inputListenerList={this.inputListenerList}
                />
            );
        }
        if (this.props.modalType === "edit") {
            return (
                <ModalEdit
                    onSave={this.onSave}
                    title={this.props.title}
                    id_task={this.props.id_task}
                    description={this.description}
                    inputListenerList={this.inputListenerTask}
                    startEditInputValue={this.startEditInputValue}
                />
            );
        }
    }
}
export default ModalClass;
