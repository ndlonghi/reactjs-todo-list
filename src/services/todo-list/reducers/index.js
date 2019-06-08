import {
    ADD_TODO_ITEM,
    REMOVE_TODO_ITEM,
    UPDATE_TODO_ITEM
} from "../action-types";

function todoList(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_ITEM: {
            const nextId = state.items.length > 0 ? state.items[state.items.length - 1].id + 1 : 1;
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        ...action.payload.item,
                        id: nextId
                    }
                ]
            }
        }
        case UPDATE_TODO_ITEM: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload.item.id) {
                        return action.payload.item;
                    } else {
                        return item;
                    }
                })
            }
        }
        case REMOVE_TODO_ITEM: {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.item.id)
            }
        }
        default: {
            return state;
        }
    }
}

const initialState = {
    items: []
};

export default todoList;