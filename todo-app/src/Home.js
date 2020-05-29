import React, { Component, Fragment } from 'react';
import './App.css';
import List from './Components/List'
import Button from './Components/Button'
// import Anime from './Utils/Anime'

class Home extends Component{

  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          list_id: 1,
          list_name: 'Estudos',
          tarefas: [
            {
              descricao: 'Aprender mais JavaScript' 
            },
            {
              descricao: 'Aprender mais React' 
            }
          ]
        },
        {
          list_id: 2,
          list_name: 'Faxina',
          tarefas: [
            {
              descricao: 'Lavar o chão' 
            }
          ]
        }
      ],
    };
  }
  submitListener = (tarefa, index) => {
    var newState = {...this.state.todos};
    newState[index].tarefas.push(tarefa);
    this.setState({newState});
  }
  render() {
    return (
      <Fragment>
      <div className="App">
        <div className="header-wrapper">
          
        </div>
        <Button/>
          <List list={this.state.todos} submitListener={this.submitListener} ></List>
        </div>

      {/* <Anime/> */}
      </Fragment>
      
    );
  }
}
export default Home;
