"use client"

import { Todo } from "../models/Todo";

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: any;
}

const TodoList = ({ todos, onDeleteTodo }: TodoListProps) => {

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span className="p-4">
                            {todo.value}
                        </span>

                        <button
                            onClick={() => onDeleteTodo(index)}
                            className="w-[100px] text-white py-2 px-4 mb-2 rounded bg-red-500 hover:bg-red-700"
                        >Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;