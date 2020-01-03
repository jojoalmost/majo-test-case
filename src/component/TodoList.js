import React from "react"
import axios from "axios"

import Modal from "./Modal";
import List from "./List";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            isModalShow: false,
            selectedItem: {}
        }

    }

    // static getDerivedStateFromProps(props, state) {
    //     let getId = state.item.length + 1;
    //     console.log(props);
    //     props.createdData.id = getId;
    //     if (props.isSubmit) {
    //         if (props.createdData.title !== null) {
    //             return state;
    //         }
    //         return null
    //     }
    //     // Return null if the state hasn't changed
    //     return null;
    // }

    UNSAFE_componentWillReceiveProps(nextProp) {
        if (!nextProp.isSubmit) return;
        let getId = this.state.item.length + 1;
        nextProp.createdData.id = getId;
        this.setState({item: [...this.state.item, nextProp.createdData]});
    }

    deleteTodo = (todo) => {
        if (todo.status) return;
        const filterTodo = this.state.item.filter(item => item.id !== todo.id);
        this.setState({item: filterTodo});
    }

    editTodo = (todo) => {
        this.props.onEditTodo(todo);
    }

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

    onModalOpen = (item) => {
        this.setState(prevState => ({
            isModalShow: !prevState.isModalShow,
            selectedItem: item || {},
        }));
    }

    onChangeItem = (todo) => {
        this.setState(prevState => ({
            item: prevState.item.map(
                item => item.id === todo.id ? {...item, status: item.status === 1 ? 0 : 1} : item
            )
        }))
    }

    render() {
        const {selectedItem, isModalShow, item} = this.state;
        return (
            <>
                <Modal show={isModalShow} handleClose={this.onModalOpen} details={selectedItem}/>
                <div className='pending'>
                    <h3>Pending</h3>
                    <List items={item} onSelectedItem={this.onModalOpen} onEditItem={this.editTodo}
                          onDeleteItem={this.deleteTodo} filter={0} onChangeItem={this.onChangeItem}/>
                </div>
                <div className='finish'>
                    <h3>Finish</h3>
                    <List items={item} onSelectedItem={this.onModalOpen} onEditItem={this.editTodo}
                          onDeleteItem={this.deleteTodo} filter={1} onChangeItem={this.onChangeItem}/>
                </div>
            </>
        )
    }
}
