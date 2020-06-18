import React, { Component, Fragment } from 'react';
import './App.css';
import './Styles/Button.css';
import './Styles/Header.css';
import './Styles/List.css';
import './Styles/Modal.css';
import List from './Components/List';
import ModalClass from './Components/Modal/ModalClass';
import ApiService from './APIService';
import ThemeSwitch from './Components/Theme/ThemeSwitch';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    };
  }
  notifySuccess = (title) => {
    toast.info(title, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  notifyWarning = (title) => {
    toast.warn(title, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
          this.notifySuccess('Tarefa adicionada com sucesso!');
        }
      })
      .catch(error => this.notifyWarning(error));
  }
  submitListenerList = (list) => {
    ApiService.CreateList(JSON.stringify(list))
      .then(res => {
        if (res && res.success) {
          ApiService.GetList(res.list._id)
            .then(newList => {
              var newState = this.state.todos;
              newState.push(newList.list)
              this.setState({ newState });
              this.notifySuccess('Lista adicionada com sucesso!');

            })
        }
      })
      .catch(error => this.notifyWarning(error));
  }
  editTask = (id_list, id_task, tarefa) => {
    ApiService.EditTask(id_task, JSON.stringify(tarefa))
      .then(res => {
        if (res && res.success) {
          ApiService.GetList(id_list)
            .then(newList => {
              var newState = this.state.todos;
              newState.map((item, index) => {
                if (item._id === id_list) {
                  newState.splice(index, 1, newList.list);
                }
              })
              this.setState({ newState });
              this.notifySuccess('Tarefa editada com sucesso!');

            })
        }
      })
      .catch(error => this.notifyWarning(error));
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
          this.setState({ ListAtualizado })
          this.notifySuccess('Tarefa removida com sucesso!');
        }
      })
      .catch(error => this.notifyWarning(error));
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
          this.setState({ ListAtualizado })
          this.notifySuccess('Lista removida com sucesso!');
        }
      })
      .catch(error => this.notifyWarning(error));
  }

  componentDidMount() {
    ApiService.Get()
      .then(res => {
        this.setState({ todos: res })
      })
      .catch(error => this.notifyWarning(error));

  }

  render() {

    return (
      <Fragment>
        <div className="App">
          <ToastContainer />
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
