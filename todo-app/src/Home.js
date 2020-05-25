import React, { Component, Fragment } from 'react';
import './App.css';
import List from './Components/List'


class Home extends Component{

  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          list: [
            {
              id_list: 1,
              list_name: 'Estudos',
              tarefas: [
                {
                  descricao: 'Aprender mais JavaScript' 
                },
                {
                  descricao: 'Aprender mais React' 
                }
              ]
            }
          ]
        }
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <div className="header-wrapper">
          
        </div>

        <div className="list">
          <List list={this.state.todos}></List>
        </div>   
      </div>
    );
  }
}
export default Home;
