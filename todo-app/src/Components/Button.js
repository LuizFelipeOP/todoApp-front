import React, { Component } from 'react'

class Button extends Component{

    eventClickPah = () => {
        alert("(^(oo)^)");
    }
    render() {

        return (
            <button onClick={this.eventClickPah}>CARAI</button>
        );
    }
}
export default Button