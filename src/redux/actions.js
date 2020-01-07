const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';

let nextTodoId = 0;
export const addTodo = (title, description) => ({
    type: ADD_TODO,
    id: nextTodoId + 1,
    title, description
})

export const editTodo = (id) => ({
    type: EDIT_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})
