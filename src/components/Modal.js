import React from "react";
import {connect} from "react-redux";
import {deleteTodo, selectedTodoModal, toggleTodo} from "../redux/Actions";
import {selectedTodo} from "../redux/Actions";

const Modal = ({handleClose, show, todo}) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName} onClick={handleClose}>
            <div className={'modal-body'}>
                <table>
                    <tbody>
                    <tr>
                        <td>Title</td>
                        <td>{todo.title}</td>
                    </tr>
                    <tr>
                        <td>Deskripsi</td>
                        <td>{todo.description}</td>
                    </tr>
                    <tr>
                        <td>Created At</td>
                        <td>{todo.createdAt}</td>
                    </tr>
                    </tbody>
                </table>
                <button>Edit</button>
                <button onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    selectTodo: item => dispatch(selectedTodo(item)),
})

export default connect(null, mapDispatchToProps)(Modal)

