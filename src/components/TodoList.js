import React from "react"
import axios from "axios"
import {connect} from 'react-redux'
import List from "./List";
import Modal from "./Modal";

class TodoList extends React.Component {
    state = {
        isModalShow: false,
    }

    componentDidMount() {
        this.fetchTodoApi();
    }

    componentWillReceiveProps(props) {
        if (Object.keys(props.data.selectedModalTodo).length !== Object.keys(this.props.data.selectedModalTodo).length) {
            this.setState({
                isModalShow: true,
            })
        }
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
                <Modal handleClose={() => this.setState({isModalShow: false})} show={this.state.isModalShow}
                       todo={this.props.data.selectedModalTodo}/>
                <div className='pending'>
                    <h3>Pending</h3>
                    <List items={this.props.data.todos} filter={0}/>
                </div>
                <div className='finish'>
                    <h3>Finish</h3>
                    <List items={this.props.data.todos} filter={1}/>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
    data: state
})

export default connect(mapStateToProps, null)(TodoList)
