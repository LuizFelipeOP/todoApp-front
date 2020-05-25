import React, { Component } from 'react';

const ListItem = props => {
    const item = props.tarefas.forEach((tarefa, index) => {
        console.log(tarefa.descricao)
        let tarefaDesc = tarefa.descricao.toString()

        return ;
    });

    //return {item};

}
const ListBody = props => {
    const lista = props.list.map((item, index) => {
        return (
            <ul key={item.list[index].id}>
                {item.list[index].list_name}
                {
                    item.list[index].tarefas.map((tarefa, index) => {
                        return (
                        <li>{tarefa.descricao}</li>
                        )
                    })

                }
            </ul>
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
        const {list } = this.props;

        return (
            <ListBody list={list} /> 
        );
    }
}
export default List;