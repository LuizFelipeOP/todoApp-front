import React, { Component } from 'react';

class ThemeButton extends Component{

    eventClickPath = () => {
    }
    render(){
        return (
            <div class="switch_container">
                <input id="switch-shadow" class="switch switch--shadow" type="checkbox" />
                <label for="switch-shadow"></label>
            </div>
        );
    }
}
export default ThemeButton