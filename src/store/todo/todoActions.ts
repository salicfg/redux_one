import {TodoAction, TodoActionTypes} from "./types.ts";

export const addTodo = (text: string): TodoAction => {
    return  {
        type: TodoActionTypes.ADD_TODO,
        payload: { text },
    };
}

export const toggleTodo = (id: number): TodoAction => {
    return  {
        type: TodoActionTypes.TOGGLE_TODO,
        payload: { id },
    };
}