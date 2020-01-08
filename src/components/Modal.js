import React from "react";
import {connect} from "react-redux";
import {deleteTodo} from "../redux/Actions";
import {selectedTodo} from "../redux/Actions";

const Modal = ({handleClose, show, todo, deleteTodo, selectTodo}) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName} onClick={handleClose} ref={node => this.node = node}>
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
                <button onClick={() => selectTodo(todo)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)} className={todo.status ? 'hide' : 'show'}>Delete
                </button>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    selectTodo: item => dispatch(selectedTodo(item)),
})

export default connect(null, mapDispatchToProps)(Modal)

