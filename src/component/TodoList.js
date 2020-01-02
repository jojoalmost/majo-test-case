import React from "react"
import Modal from "./Modal";
import axios from "axios"

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            isModalShow: false,
            selectedItem: {}
        }
    }

    fetchTodoApi = () => {
        axios.get('https://897ee1a7-a6ed-46ca-92ca-52a440c60807.mock.pstmn.io/to-do-list').then(res => {
            this.setState({
                item: res.data,
            });
        });
    }

    showModal = (item) => {
        this.setState({
            isModalShow: true,
            selectedItem: item,
        });
    }

    closeModal = () => {
        this.setState({
            isModalShow: false,
            selectedItem: {},
        });
    }

    componentDidMount() {
        this.fetchTodoApi();
    }

    render() {
        return (
            <>
                <Modal show={this.state.isModalShow} handleClose={this.closeModal} details={this.state.selectedItem}/>
                <ul>
                    {this.state.item.map((item, i) => {
                        if (item.status) {
                            return <li key={i} onClick={() => this.showModal(item)}>
                                <del>{item.title}</del>
                            </li>
                        } else {
                            return <li key={i} onClick={() => this.showModal(item)}>{item.title}</li>
                        }
                    })}
                </ul>
            </>
        )
    }
}
