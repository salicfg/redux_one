import {RootState} from "../rootReducer.ts";

export const selectTodos = (state: RootState) => state.todoReducer.todos