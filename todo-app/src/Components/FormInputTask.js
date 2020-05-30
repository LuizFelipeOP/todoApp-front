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
        const { name, value } = event.target;
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
        debugger
        this.props.submitListenerTask(this.props.list._id, this.state);
        this.setState(this.stateInicial);
    }

    render() {
        const { description } = this.state;

        return (
            <form onSubmit={this.onSave}>
                <input value={description} name="description" type="text" onChange={this.inputListenerTask} />
            </form>
        );
    }
}
export default List;