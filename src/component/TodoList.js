import React from "react"
import axios from "axios"

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
    }

    fetchTodoApi = () => {
        axios.get('https://897ee1a7-a6ed-46ca-92ca-52a440c60807.mock.pstmn.io/to-do-list').then(res => {
            this.setState({
                item: res.data
            });
        });
    }

    componentDidMount() {
        this.fetchTodoApi();
    }

    render() {
        return (
            <ul>
                {this.state.item.map(item => {
                    if (item.status) {
                        return <li><del>{item.title}</del></li>
                    } else {
                        return <li>{item.title}</li>
                    }
                })}
            </ul>
        )
    }
}
