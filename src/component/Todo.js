import React from "react";
import TodoList from "./TodoList";

export default class TodoApp extends React.Component {

    render() {
        return (
            <>
                <h3>Todo Test Case</h3>
                <form action="">
                    <input type="text" placeholder={'Input Todo'}/>
                    <button>Create Todo</button>
                </form>
                <TodoList/>
            </>
        )
    }
}

