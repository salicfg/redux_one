// Define Todo type for the shape of a todo item
import {Action} from "redux";

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

// Define actions related to the todo list
export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
}

// Define action creators
type AddTodoAction = Action<TodoActionTypes.ADD_TODO> & {
    payload: { text: string };
};

type ToggleTodoAction = Action<TodoActionTypes.TOGGLE_TODO> & {
    payload: { id: number };
};

export type TodoAction = AddTodoAction | ToggleTodoAction;

// Define the initial state
export type TodoState = {
    todos: Todo[];
};