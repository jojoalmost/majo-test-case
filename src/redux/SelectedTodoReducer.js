const selectedTodo = (state = {}, action) => {
    switch (action.type) {
        case 'SELECTED_TODO' :
            return action.todo
        default:
            return state
    }
}

export default selectedTodo;
