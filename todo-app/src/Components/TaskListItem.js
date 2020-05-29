import React, { Component, Fragment } from 'react';

class TaskListItem extends Component{

      buttons = (visible) =>{
        if(visible){
            return (
                <div className="button-wrapper">
                    <button>editar</button><button>X</button>
                </div>
            );
        }else{
            return
        }

      }
      selectTask = (event) =>{
          if(event.target.style.transform == 'translateX(0px)' || event.target.style.transform == ''){
              event.target.style.transform = 'translateX(-60px)';
              const button = this.buttons(true);
              debugger
              
          }else{
            event.target.style.transform = 'translateX(0px)';
            this.buttons(false);
          }
        

      }
      render() {
        return (
            <div >
                <li className="taskItem" onClick={this.selectTask} key={this.props.taskId}>{this.props.descricao} </li>
            </div>
        );
      }
}
export default TaskListItem