import React from "react";
import {connect} from 'react-redux';
import TodoList from "./TodoList";
import {addTodo, updateTodo} from "../redux/Actions";
import {selectedTodo} from "../redux/Actions";

class TodoApp extends React.Component {
    state = {
        title: '',
        description: '',
    }

    componentWillReceiveProps(props) {
        if (Object.keys(props.selectedTodo).length !== Object.keys(this.props.selectedTodo).length) {
            this.setState({
                title: props.selectedTodo.title,
                description: props.selectedTodo.description
            });
        }
    }

    onSubmitHandler = () => {
        const description = this.state.description;
        const title = this.state.title;
        if (description && title) {
            this.props.addTodo(title, description);
            this.setState({
                title: '',
                description: ''
            })
        }
    }

    onUpdateHandler = () => {
        const description = this.state.description;
        const title = this.state.title;
        if (description && title) {
            this.props.updateTodo(this.props.selectedTodo.id, title, description);
            this.setState({
                title: '',
                description: ''
            })
            // this.props.selectedNull({});
        }
    }

    titleInputHandler = e => this.setState({title: e.target.value})

    descriptionInputHandler = e => this.setState({description: e.target.value})

    render() {
        const {title, description} = this.state;
        return (
            <div className='form'>
                <h3>Todo Test Case</h3>
                <form>
                    <input type="text" placeholder='Input Todo' value={title} onChange={this.titleInputHandler}/>
                    <br/>
                    <textarea placeholder='Deskripsi' cols="30" rows="10" value={description}
                              onChange={this.descriptionInputHandler}/>
                    <br/>
                    {Object.keys(this.props.selectedTodo).length !== 0 ? (
                        <button type={"button"} onClick={this.onUpdateHandler}>Update</button>
                    ) : (
                        <button type={"button"} onClick={this.onSubmitHandler}>Create</button>
                    )}
                </form>
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
