import {Component, createRef, Dispatch} from "react";
import {connect} from "react-redux";

import {DispatchToProps, TodoClassComponentProp, StateToProps} from "./types.ts";
import {addTodo, toggleTodo} from "../../store/todo/todoActions.ts";
import {RootState} from "../../store/rootReducer.ts";
import {TodoAction} from "../../store/todo/types.ts";

class TodoClassComponent extends Component<TodoClassComponentProp> {

    constructor(props: TodoClassComponentProp) {
        super(props);
    }

    inputRef = createRef<HTMLInputElement>()

    handleAddTodo = () => {
        if (this.inputRef.current?.value) {
            this.props.addTodo(this.inputRef?.current?.value.trim() || '');
            this.inputRef.current!.value = '' // Non nullish operator (TS assertion)
        }
    };

    handleToggleTodo = (id: number) => {
        this.props.toggleTodo(id);
    };

    render() {
        return (
            <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
                <div>
                    <h1>Todo List (Class)</h1>
                    <ul>
                        {this.props.todos.map((todo) => (
                            <li key={todo.id} onClick={() => this.handleToggleTodo(todo.id)}
                                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                                {todo.text}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <input ref={this.inputRef} type="text"/>
                        <button onClick={this.handleAddTodo}>Add Todo</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): StateToProps => {
    return {
        todos: state.todoReducer.todos
    }
}
const mapDispatchToProps = (dispatch: Dispatch<TodoAction>): DispatchToProps => {
    return {
        addTodo: (text: string) => dispatch(addTodo(text)),
        toggleTodo: (id: number) => dispatch(toggleTodo(id))
    }
}

const TodoClass = connect(mapStateToProps, mapDispatchToProps)(TodoClassComponent)
export default TodoClass;