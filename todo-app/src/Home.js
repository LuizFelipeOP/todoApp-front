import React, { Component, Fragment } from 'react';
import './App.css';
import './Styles/Button.css';
import './Styles/DarkMode.css';
import './Styles/LightMode.css';
import './Styles/Header.css';
import './Styles/List.css';
import './Styles/Modal.css';
import List from './Components/List';
import ModalClass from './Components/ModalClass';
import ThemeButton from './Components/ThemeButton';
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
          newState.push(res)
          this.setState({ newState });
        }
      })
    //.catch(error => PopUp.showMessage('error', 'Falha ao comunicar com o servidor'));
  }
  editTask = (id, tarefa) => {
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
            <ThemeButton/>
              <h2>To do App</h2>
          </div>
          <div class="background">
            <ModalClass title={'Crie uma lista de tarefas'} submitListenerList={this.submitListenerList} />
            <List list={this.state.todos}
              submitListenerTask={this.submitListenerTask}
              removeTask={this.removeTask}
              removeList={this.removeList}
            ></List>
          </div>
        </div>

        {/* <Anime/> */}
      </Fragment>

    );
  }
}
export default Home;
