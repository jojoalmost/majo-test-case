const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SELECTED_TODO = 'SELECTED_TODO';

let nextTodoId = 0;
export const addTodo = (title, description) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    title, description
})

export const editTodo = (id) => ({
    type: EDIT_TODO,
    id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})

export const selectedTodo = (id) => ({
    type: SELECTED_TODO,
    id
})
