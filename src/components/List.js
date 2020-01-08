import React from "react";
import {connect} from "react-redux";
import {deleteTodo, editTodo, toggleTodo} from "../redux/Actions";

const List = props => {
    let sortedArray = props.items.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    if (!props.filter) {
        sortedArray = sortedArray.reverse();
    }
    return (
        <ul>
            {sortedArray.map((item, index) => props.filter === item.status && (
                <li key={index} className={item.status ? 'done' : ''}>
                    <p onClick={() => props.toggleTodo(item.id)}>{item.title}</p>
                    <button onClick={() => props.onSelectedItem(item)}>Detail</button>
                    <button onClick={() => props.editTodo(item.id)}>Edit</button>
                    <button onClick={() => props.deleteTodo(item.id)} disabled={item.status ? true : false}>Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}
const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: id => dispatch(editTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(null, mapDispatchToProps)(List)
