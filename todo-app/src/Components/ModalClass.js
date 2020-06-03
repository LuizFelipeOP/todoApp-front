import React, { Component, Fragment } from 'react';
import '../App.css';
import ModalCreate from './ModalCreate';

class ModalClass extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            name: '',
            task: Array
        }
        this.state = this.stateInicial;
    }

    inputListenerList = event => {
        //debugger
        const { value } = event.target;
        this.setState({
            name: value,
            task: Array
        });

    }
    onSave = (event) => {
        event.preventDefault();
        this.props.submitListenerList(this.state);
        this.setState(this.stateInicial);
        event.target.firstChild.value = "";
    }


    render() {

        return (
            <ModalCreate title={this.props.title} inputListenerList={this.inputListenerList} onSave={this.onSave} />
        );
    }
}
export default ModalClass;
