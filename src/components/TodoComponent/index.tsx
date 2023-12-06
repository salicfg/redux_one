import {FC, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {selectTodos} from "../../store/todo/todoSelector.ts";
import {addTodo, toggleTodo} from "../../store/todo/todoActions.ts";


const TodoComponent: FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleAddTodo = () => {
        if (inputRef.current?.value) {
            dispatch(addTodo(inputRef?.current?.value.trim() || ''));
            inputRef.current!.value = '' // Non nullish operator (TS assertion)
        }
    };

    const handleToggleTodo = (id: number) => {
        dispatch(toggleTodo(id));
    };

    return (
        <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
            <div>
                <h1>Todo List (Hook)</h1>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} onClick={() => handleToggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </li>
                    ))}
                </ul>
                <div>
                    <input ref={inputRef} type="text" />
                    <button onClick={handleAddTodo}>Add Todo</button>
                </div>
            </div>
        </div>

    );
}

export default TodoComponent;