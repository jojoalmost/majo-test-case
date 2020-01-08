import todos from "./TodoReducers";
import selectedTodo from "./SelectedTodoReducer";
import {combineReducers} from "redux";

const rootReducers = combineReducers({todos, selectedTodo});
export default rootReducers;
