import React, { Component, Fragment } from 'react';
import './App.css';
import List from './Components/List'
import Button from './Components/Button'
// import Anime from './Utils/Anime'
import ApiService from './APIService';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    };
  }
  submitListenerTask = (id, tarefa) => {
    ApiService.CreateTask(id, JSON.stringify(tarefa))
      .then(res => {
        if (res && res.success) {
          var newState = this.state.todos;
          newState.map((item, ) => {
            if (item._id == id) {
              item.task.push(res.tasks[0])
            }
          })
          this.setState({ newState });
        }
      })
    //.catch(error => PopUp.showMessage('error', 'Falha ao comunicar com o servidor'));
  }
  removeTask = (id_list, id_task) => {
    const { todos } = this.state;
    debugger
    const ListAtualizado = todos.filter(list => {
      return list.task.filter((task, index) => {
        if (task._id != id_task) {
          return task;
        } else {
          debugger
          list.task.splice(index, 1);
        }
      })
    });
    ApiService.RemoveTask(id_list, id_task)
      .then(res => {
        debugger
        if (res && res.success) {
          this.setState({ todos: [...ListAtualizado] })
          //PopUp.showMessage('success', 'Livro removido com sucesso');
        }
      })
    // .catch(error => PopUp.showMessage('error', 'Falha ao comunicar com o servidor'))
  }
  componentDidMount() {
    ApiService.Get()
      .then(res => {
        this.setState({ todos: res })
      })
      .catch(
        error =>
          alert(error),
        //PopUp.showMessage('error', 'Falha ao comunicar com o servidor')
      );
  }
  render() {
    return (
      <Fragment>
        <div className="App">
          <div className="header-wrapper">

          </div>
          <Button />
          <List list={this.state.todos} submitListenerTask={this.submitListenerTask} removeTask={this.removeTask}></List>
        </div>

        {/* <Anime/> */}
      </Fragment>

    );
  }
}
export default Home;
