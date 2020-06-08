import React, { Component, Fragment } from 'react';
import './App.css';
import './Styles/Button.css';
import './Styles/Header.css';
import './Styles/List.css';
import './Styles/Modal.css';
import List from './Components/List';
import ModalClass from './Components/Modal/ModalClass';
import ApiService from './APIService';
import ThemeSwitch from './Components/Theme/ThemeSwitch'
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
          newState.map((item) => {
            if (item._id === id) {
              item.task.push(res.tasks[0])
            }
          })
          this.setState({ newState });
        }
      })
    //.catch(error => PopUp.showMessage('error', 'Falha ao comunicar com o servidor'));
  }
  submitListenerList = (list) => {
    ApiService.CreateList(JSON.stringify(list))
      .then(res => {
        if (res && res.success) {
          var newState = this.state.todos;
          newState.push(res.list)
          this.setState({ newState });
          window.location.reload(false);
        }
      })
    //.catch(error => PopUp.showMessage('error', 'Falha ao comunicar com o servidor'));
  }
  editTask = (id_list, id_task, tarefa) => {
    ApiService.EditTask(id_task, JSON.stringify(tarefa))
      .then(res => {
        if (res && res.success) {
          var newState = this.state.todos;
          newState.map((item) => {
            if (item._id === id_list) {
              item.task.map((task, index) => {
                if (task._id === id_task) {
                  item.task.splice(index, 1);
                  item.task.push(res.task)
                }
              })
            }
          })
          this.setState({ newState });
          window.location.reload(false);
        }
      })
    //.catch(error => PopUp.showMessage('error', 'Falha ao comunicar com o servidor'));
  }
  removeTask = (id_list, id_task) => {
    const { todos } = this.state;
    const ListAtualizado = todos.filter(list => {
      return list.task.filter((task, index) => {
        if (task._id !== id_task) {
          return task;
        } else {
          list.task.splice(index, 1);
        }
      })
    });

    ApiService.RemoveTask(id_list, id_task)
      .then(res => {
        if (res && res.success) {
          this.setState({ todos: [...ListAtualizado] })
          //PopUp.showMessage('success', 'Livro removido com sucesso');
        }
      })
    // .catch(error => PopUp.showMessage('error', 'Falha ao comunicar com o servidor'))
  }
  removeList = (id_list) => {
    const { todos } = this.state;
    const ListAtualizado = todos.filter(list => {
      if (list._id !== id_list) {
        return list;
      }
    })
    ApiService.RemoveList(id_list)
      .then(res => {
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
            <ThemeSwitch />
            <h2 id="title">To-do App</h2>
          </div>

          <ModalClass
            modalType="create"
            title={'Crie uma lista de tarefas'}
            submitListenerList={this.submitListenerList}
          />
          <List list={this.state.todos}
            submitListenerTask={this.submitListenerTask}
            removeTask={this.removeTask}
            removeList={this.removeList}
            editTask={this.editTask}
          ></List>
        </div>
      </Fragment>

    );
  }
}
export default Home;
