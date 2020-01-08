const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SELECTED_TODO = 'SELECTED_TODO';

let nextTodoId = 0;
export const addTodo = (title, description) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    title, description
})

export const updateTodo = (id, title, description) => ({
    type: UPDATE_TODO,
    id, title, description
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})

export const selectedTodo = (todo) => ({
    type: SELECTED_TODO,
    todo
})
