import React from "react"
import axios from "axios"
import {connect} from 'react-redux'

import Modal from "./Modal";
import List from "./List";
import {addTodo} from "../redux/actions";

class TodoList extends React.Component {
    componentDidMount() {
        this.fetchTodoApi();
    }

    fetchTodoApi = () => {
        axios.get('https://897ee1a7-a6ed-46ca-92ca-52a440c60807.mock.pstmn.io/to-do-list').then(res => {
            this.setState({
                item: res.data,
            });
        });
    }

    render() {
        return (
            <>
                <div className='pending'>
                    <h3>Pending</h3>
                    <List items={this.props.todos} filter={0}/>
                </div>
                <div className='finish'>
                    <h3>Finish</h3>
                    <List items={this.props.todos} filter={1}/>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
    todos: state
})

export default connect(mapStateToProps, null)(TodoList)
