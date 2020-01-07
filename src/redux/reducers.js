const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            const date = new Date();
            const createdAt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getUTCHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            return [
                ...state, {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    status: 0,
                    createdAt: createdAt,
                }
            ]
        case 'DELETE_TODO' :
            return state.filter(todo => todo.id !== todo.id);
        default:
            return state;
    }
}

export default todos;
