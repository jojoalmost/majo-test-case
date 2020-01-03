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

    UNSAFE_componentWillReceiveProps(nextProp) {
        if (!nextProp.isSubmit) return;
        let id = this.state.item.length + 1;
        nextProp.createdData.id = id;
        this.setState({item: [...this.state.item, nextProp.createdData]});
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

    render() {
        const {selectedItem, isModalShow, item} = this.state;
        return (
            <>
                <Modal show={isModalShow} handleClose={this.onModalOpen} details={selectedItem}/>
                done
                <List items={item} onSelectedItem={this.onModalOpen} filter={1}/>
                belum done
                <List items={item} onSelectedItem={this.onModalOpen} filter={0}/>
            </>
        )
    }
}
