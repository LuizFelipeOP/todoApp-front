import React, { Component, Fragment } from 'react';
import FormNewTask from './FormInputTask';
import TaskListItem from './TaskListItem';
import { FiTrash2 } from 'react-icons/fi';

const ListBody = props => {

    const lista = props.list.map((item, indexList) => {
        return (
            <Fragment>
                <div className="list">
                    <button onClick={function () { props.removeList(item._id) }}><FiTrash2 /></button>
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
                <ListBody
                    selectTask={this.selectTask}
                    list={list}
                    submitListenerTask={this.props.submitListenerTask}
                    removeTask={this.props.removeTask}
                    removeList={this.props.removeList} />

            </Fragment>
        );
    }
}
export default List;