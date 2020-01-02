import React from "react"
import axios from "axios"

export default class TodoList extends React.Component {
    fetchTodoApi = () => {
        axios.get('https://897ee1a7-a6ed-46ca-92ca-52a440c60807.mock.pstmn.io/to-do-list').then(res => {
            console.log(res);
        });
    }

    componentDidMount() {
        this.fetchTodoApi();
    }

    render() {
        return (
            <ul>
                <li>Test <span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </span>
                </li>
            </ul>
        )
    }
}
