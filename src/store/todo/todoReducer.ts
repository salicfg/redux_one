// Define the todoReducer
import {Todo, TodoAction, TodoActionTypes, TodoState} from "./types.ts";

export const initialState: TodoState = {
    todos: [],
};
const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            // eslint-disable-next-line no-case-declarations
            const newTodo: Todo = {
                id: state.todos.length + 1,
                text: action.payload.text,
                completed: false,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
            };

        case TodoActionTypes.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };

        default:
            return state;
    }
};

export default todoReducer;