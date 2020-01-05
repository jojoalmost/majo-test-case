import React from "react";
import TodoList from "./TodoList";

export default class TodoApp extends React.Component {
    state = {
        input: {
            title: '',
            description: '',
            createdAt: '',
            status: 0,
        },
        todo: null,
        isSubmit: false,
        isEdit: false,
    }

    onSubmitHandler = (type) => {
        const description = this.state.input.description;
        const title = this.state.input.title;
        if (description !== '' && title !== '') {
            this.setState({isSubmit: true});
            const date = new Date();
            const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getUTCHours()}:${date.getMinutes()}`;
            this.setState({
                todo: {...this.state.input, createdAt: currentDate,}
            });
            this.setState({
                input: {
                    title: '',
                    description: '',
                    createdAt: '',
                    status: 0,
                }
            }, () => {
                this.setState({
                    todo: null,
                })
            })
        }
    }

    onEditTodo = (todo) => {
        this.setState({input: todo, isEdit: true});
    }

    onEditFinished = () => {
        this.setState({isEdit: false});
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
                    <button type={"button"} onClick={() => this.onSubmitHandler('create')}
                            className={this.state.isEdit ? 'hide' : 'show'}>Create
                    </button>
                    <button type={"button"} onClick={() => this.onSubmitHandler('update')}
                            className={this.state.isEdit ? 'show' : 'hide'}>Update
                    </button>
                </form>
                <TodoList createdData={this.state.todo} onEditTodo={this.onEditTodo} isEdit={this.state.isEdit}
                          onEditFinished={this.onEditFinished}/>
            </div>
        )
    }
}

