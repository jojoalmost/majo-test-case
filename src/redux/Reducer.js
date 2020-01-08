import todos from "./TodoReducers";
import selectedTodo from "./SelectedTodoReducer";
import selectedModalTodo from "./ModalReducer";
import {combineReducers} from "redux";

const rootReducers = combineReducers({todos, selectedTodo, selectedModalTodo});
export default rootReducers;
