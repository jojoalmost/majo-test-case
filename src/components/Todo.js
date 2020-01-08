import React from "react";
import {connect} from 'react-redux';
import TodoList from "./TodoList";
import {addTodo} from "../redux/Actions";

class TodoApp extends React.Component {
    state = {
        input: {
            title: '',
            description: '',
        },
    }

    onSubmitHandler = () => {
        const description = this.state.input.description;
        const title = this.state.input.title;
        if (description !== '' && title !== '') {
            this.props.addTodo(title, description);
            this.setState({
                input: {
                    title: '',
                    description: ''
                }
            })
        }
    }

    titleInputHandler = e => {
        this.setState({input: {...this.state.input, title: e.target.value}})
    }

    descriptionInputHandler = e => {
        this.setState({input: {...this.state.input, description: e.target.value}})
    }

    render() {
        return (
            <div className='form'>
                <h3>Todo Test Case</h3>
                <form>
                    <input type="text" placeholder='Input Todo' value={this.state.input.title}
                           onChange={this.titleInputHandler}/>
                    <br/>
                    <textarea placeholder='Deskripsi' cols="30" rows="10" value={this.state.input.description}
                              onChange={this.descriptionInputHandler}/>
                    <br/>
                    <button type={"button"} onClick={this.onSubmitHandler}>Create
                    </button>
                </form>
                <TodoList/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: (title, description) => dispatch(addTodo(title, description))
})

const mapStateToProps = state => ({
    selectedTodo: state.selectedTodo
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
