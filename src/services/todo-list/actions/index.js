import {
    ADD_TODO_ITEM,
    REMOVE_TODO_ITEM,
    UPDATE_TODO_ITEM
} from "../action-types";

export const addTodoItem = (item) => ({
    type: ADD_TODO_ITEM,
    payload: {
        item
    }
});

export const updateTodoItem = (item) => ({
    type: UPDATE_TODO_ITEM,
    payload: {
        item
    }
});

export const removeTodoItem = (item) => ({
    type: REMOVE_TODO_ITEM,
    payload: {
        item
    }
});