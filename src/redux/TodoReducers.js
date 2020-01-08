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
        case 'EDIT_TODO' :
            return state.map(todo =>
                todo.id === action.id ? {selected: {...todo}} : {selected: {}}
            )
        case 'UPDATE_TODO':
            return [
                ...state, {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? {...todo, status: todo.status === 1 ? 0 : 1} : todo
            )
        case 'DELETE_TODO' :
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

export default todos;
