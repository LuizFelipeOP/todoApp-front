import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);

        this.stateInicial = {
            descricao: '' 
        }
        // debugger
        this.state = this.stateInicial;
    }
    inputListenerTask = event => {
        const { name, value } = event.target;
        this.setState({
                [name]: value
        });

    }
    onSave = (event) => {
        event.preventDefault();
    debugger
        this.props.submitListener(this.state, this.props.id);
        this.setState(this.stateInicial);
    }
    
    render() {
        const { descricao } = this.state;

        return (
            <form onSubmit={this.onSave}>
                <input value={descricao} name="descricao" type="text"  onChange={this.inputListenerTask}/>
            </form> 
        );
    }
}
export default List;