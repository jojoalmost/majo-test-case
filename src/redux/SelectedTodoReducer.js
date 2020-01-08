const selectedTodo = (state = {}, action) => {
    switch (action.type) {
        case 'SELECTED_TODO' :
            return state.map(todo =>
                todo.id === action.id ? {...todo} : null
            )
        default:
            return state
    }
}

export default selectedTodo;
