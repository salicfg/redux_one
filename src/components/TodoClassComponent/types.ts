import {Todo} from "../../store/todo/types.ts";

export type TodoClassComponentProp = StateToProps & DispatchToProps

export type StateToProps = {
    todos: Todo[]
}

export type DispatchToProps = {
    addTodo: (text: string) => void,
    toggleTodo: (id: number) => void
}