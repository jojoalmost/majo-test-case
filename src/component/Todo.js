import React from "react";
import TodoList from "./TodoList";

export default class TodoApp extends React.Component {
    state = {
        title: '',
        description: ''
    }

    onSubmitHandler = e => {
        e.preventDefault();
        console.dir(this.state);

        const date = new Date();
    }

    titleInputHandler = e => {
        this.setState({title: e.target.value})
    }

    descriptionInputHandler = e => {
        this.setState({description: e.target.value})
    }

    render() {
        return (
            <>
                <h3>Todo Test Case</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="">Text</label>
                    <input type="text" placeholder={'Input Todo'} onChange={this.titleInputHandler}/>
                    <br/>
                    <label htmlFor="">Deskripsi</label>
                    <textarea name="" id="" cols="30" rows="10" onChange={this.descriptionInputHandler}></textarea>
                    <br/>
                    <button type={"submit"}>Create Todo</button>
                </form>
                <TodoList/>
            </>
        )
    }
}

