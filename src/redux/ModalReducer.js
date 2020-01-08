const selectedModalTodo = (state = {}, action) => {
    switch (action.type) {
        case 'SELECTED_MODAL_TODO' :
            return action.todo
        default:
            return state
    }
}

export default selectedModalTodo;
