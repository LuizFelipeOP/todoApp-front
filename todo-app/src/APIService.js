import axios from 'axios';

const ApiService = {
    Get: () => {
        return axios.get(`https://to-do-app-api.herokuapp.com/`)
            .then((res => res.data))
    },
    CreateTask: (id, tarefa) => {
        const headers = {
            'Content-Type': 'application/json',
        }

        return axios.post(`https://to-do-app-api.herokuapp.com/list/${id}/task`, tarefa, { headers: headers })
            .then(res => res.data)
            .catch(
                error =>
                    alert(error)
                //console.log(error),
                //PopUp.showMessage('error', 'Falha ao comunicar com o servidor')
            );
        // return fetch(`https://to-do-app-api.herokuapp.com/list/:${id}/task`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: tarefa })
        //     .then(res => ApiService.ErrorLog(res))
        //     .then(res => res.json());

    },
    CreateList: (list) => {
        const headers = {
            'Content-Type': 'application/json',
        }

        return axios.post(`https://to-do-app-api.herokuapp.com/list`, list, { headers: headers })
            .then(res => res.data)
            .catch(
                error =>
                    alert(error)
                //console.log(error),
                //PopUp.showMessage('error', 'Falha ao comunicar com o servidor')
            );
        // return fetch(`https://to-do-app-api.herokuapp.com/list/:${id}/task`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: tarefa })
        //     .then(res => ApiService.ErrorLog(res))
        //     .then(res => res.json());

    },
    EditTask: (id_task, tarefa) => {
        const headers = {
            'Content-Type': 'application/json',
        }


        return fetch(`https://to-do-app-api.herokuapp.com/list/task/${id_task}`, { method: 'PUT', headers: { 'content-type': 'application/json' }, body: tarefa })
            .then(res => ApiService.ErrorLog(res))
            .then(res => res.json());


        // return axios.put(`https://to-do-app-api.herokuapp.com/list/task/${id_task}`, tarefa, { headers: headers })
        //     .catch(
        //         error =>
        //             alert(error)
        //console.log(error),
        //PopUp.showMessage('error', 'Falha ao comunicar com o servidor')
        // );
        // return fetch(`https://to-do-app-api.herokuapp.com/list/:${id}/task`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: tarefa })
        //     .then(res => ApiService.ErrorLog(res))
        //     .then(res => res.json());

    },

    RemoveTask: (id_list, id_task) => {
        const headers = {
            'Content-Type': 'application/json',
        }
        return axios.delete(`https://to-do-app-api.herokuapp.com/list/${id_list}/task/${id_task}`, headers)
            .then(res => res.data)
            .catch(
                error =>
                    alert(error)
            );
    },
    RemoveList: (id_list) => {
        const headers = {
            'Content-Type': 'application/json',
        }
        return axios.delete(`https://to-do-app-api.herokuapp.com/list/${id_list}/remove`, headers)
            .then(res => res.data)
            .catch(
                error =>
                    alert(error)
            );
    },
    ErrorLog: res => {
        if (!res.ok) {
            throw Error(res.responseText);
        }
        return res;
    }
}
export default ApiService;