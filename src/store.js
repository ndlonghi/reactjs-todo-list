import {createStore} from "redux";

import todoList from "./services/todo-list/reducers";

const store = createStore(todoList);

export default store;