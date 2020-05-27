import React, { Component, Fragment } from 'react';
import FormNewTask from './FormInputTask';
const ListBody = props => {
    debugger
    const lista = props.list.map((item, indexList) => {
        return (
            <Fragment>
                <ul key={indexList}>
                    {item.list_name}
                    {
                        item.tarefas.map((tarefa, indexItem) => {
                            return (
                            <li key={indexItem}>{tarefa.descricao}</li>
                            )
                        })
    
                    }
                </ul>
                <FormNewTask id={indexList} list={item} submitListener = { props.submitListener} />
            </Fragment>
        );
    });

    return (
        ////<td><button onClick={() => { props.removeAutor(linha.id) }} className="waves-effect waves-light indigo lighten-2 btn blue">Remover</button></td>
        //colocar titulo da lista
        <div>
            {lista}
        </div>
    );
}
class List extends Component {
    render() {
        const { list } = this.props;

        return (
            <Fragment>
                <ListBody list={list} submitListener={this.props.submitListener}/> 
            </Fragment>
        ); 
    }
}
export default List;