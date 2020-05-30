import React, { Component, Fragment } from 'react';
import FormNewTask from './FormInputTask';
import TaskListItem from './TaskListItem';
import anime from 'animejs';

const ListBody = props => {

    const lista = props.list.map((item, indexList) => {
        return (
            <Fragment>
                <div className="list">
                    <ul key={indexList}>
                        {item.name}
                        {
                            item.task.map((tarefa, indexItem) => {
                                return (
                                    <TaskListItem taskId={indexItem} removeTask={props.removeTask} id_list={item._id} id_task={tarefa._id} description={tarefa.description} />
                                )
                            })

                        }
                    </ul>
                    <FormNewTask id={indexList} list={item} submitListenerTask={props.submitListenerTask} />
                </div>
            </Fragment>
        );
    });

    return (
        <div className="list-wrapper">
            {lista}
        </div>
    );
}
class List extends Component {

    render() {
        const { list } = this.props;

        return (
            <Fragment>
                <ListBody selectTask={this.selectTask} list={list} submitListenerTask={this.props.submitListenerTask} removeTask={this.props.removeTask} />
            </Fragment>
        );
    }
}
export default List;