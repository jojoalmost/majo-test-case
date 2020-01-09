import React from "react";
import {connect} from 'react-redux';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import {selectedTodo, addTodo, updateTodo} from "../redux/Actions";

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <TodoForm/>
                <TodoList/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: (title, description) => dispatch(addTodo(title, description)),
    updateTodo: (id, title, description) => dispatch(updateTodo(id, title, description)),
    selectedNull: (todo) => dispatch(selectedTodo(todo))
})

const mapStateToProps = state => ({
    selectedTodo: state.selectedTodo
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
