import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);

        this.stateInicial = {
            task: [
                {
                    name: '',
                    description: ''
                }
            ]

        }
        this.state = this.stateInicial;
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

    }
    onSave = (event) => {
        event.preventDefault();
        this.props.submitListenerTask(this.props.list._id, this.state);
        this.setState(this.stateInicial);
        event.target.querySelector('input').value = "";
    }

    render() {
        const { description } = this.state;

        return (
            <form onSubmit={this.onSave}>
                <label>Adicionar mais tarefas:</label><input value={description} name="description" type="text" onChange={this.inputListenerTask} />
            </form>
        );
    }
}
export default List;