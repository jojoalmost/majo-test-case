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
            // console.dir(this.state);
        }
    }

    titleInputHandler = e => {
        this.setState({todo: {...this.state.todo, title: e.target.value}})
    }

    descriptionInputHandler = e => {
        this.setState({todo: {...this.state.todo, description: e.target.value}})
    }

    render() {
        return (
            <>
                <h3>Todo Test Case</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" placeholder='Input Todo' onChange={this.titleInputHandler}/>
                    <br/>
                    <textarea placeholder='Deskripsi' cols="30" rows="10" onChange={this.descriptionInputHandler}/>
                    <br/>
                    <button type={"submit"}>Create Todo</button>
                </form>
                <TodoList createdData={this.state.todo} isSubmit={this.state.isSubmit}/>
            </>
        )
    }
}

