import React, { Component } from 'react';
import { FiPlus } from 'react-icons/fi';

class Button extends Component {

    eventClickPah = () => {
        alert("(^(oo)^)");
    }
    render() {

        return (
            <button onClick={this.eventClickPah}><FiPlus /></button>
        );
    }
}
export default Button