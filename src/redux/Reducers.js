import todos from "./TodoReducer";
import selectedTodo from "./SelectedTodoReducer";
import {combineReducers} from "redux";

const rootReducers = combineReducers({todos, selectedTodo});
export default rootReducers;
