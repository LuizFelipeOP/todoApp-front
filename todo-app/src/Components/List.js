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
                        {item.list_name}
                        {
                            item.tarefas.map((tarefa, indexItem) => {
                                return (
                                    <div >
                                        <TaskListItem  taskId={indexItem} descricao={tarefa.descricao}/>
                                    </div>
                                )
                            })
        
                        }
                    </ul>
                    <FormNewTask id={indexList} list={item} submitListener = { props.submitListener} />
                </div>
            </Fragment>
        );
    });

    return (
        ////<td><button onClick={() => { props.removeAutor(linha.id) }} className="waves-effect waves-light indigo lighten-2 btn blue">Remover</button></td>
        //colocar titulo da lista
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
                <ListBody selectTask={this.selectTask} list={list} submitListener={this.props.submitListener}/> 
            </Fragment>
        ); 
    }
}
export default List;