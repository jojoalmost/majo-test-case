import React from "react";
import TodoList from "./TodoList";

export default class TodoApp extends React.Component {
    state = {
        todo: {
            title: '',
            description: '',
            createdAt: '',
            status: 0,
        },
        isSubmit: false,
        isEdit: false,
    }

    onSubmitHandler = e => {
        e.preventDefault();
        const description = this.state.todo.description;
        const title = this.state.todo.title;
        this.setState({isSubmit: true});
        if (description !== '' && title !== '') {
            const date = new Date();
            const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getUTCHours()}:${date.getMinutes()}`;
            this.setState({
                todo: {...this.state.todo, createdAt: currentDate,}
            });
        }
    }

    onEditTodo = (todo) => {
        this.setState({todo: todo, isEdit: true});
    }

    titleInputHandler = e => {
        this.setState({todo: {...this.state.todo, title: e.target.value}})
    }

    descriptionInputHandler = e => {
        this.setState({todo: {...this.state.todo, description: e.target.value}})
    }

    render() {
        return (
            <div className='form'>
                <h3>Todo Test Case</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" placeholder='Input Todo' value={this.state.todo.title}
                           onChange={this.titleInputHandler}/>
                    <br/>
                    <textarea placeholder='Deskripsi' cols="30" rows="10" value={this.state.todo.description}
                              onChange={this.descriptionInputHandler}/>
                    <br/>
                    <button type={"submit"}>Create</button>
                    <button type={"submit"} className={this.state.isEdit ? 'show' : 'hide'}>Edit</button>
                </form>
                <TodoList createdData={this.state.todo} isSubmit={this.state.isSubmit}
                          onEditTodo={this.onEditTodo}/>
            </div>
        )
    }
}

