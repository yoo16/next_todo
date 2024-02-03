"use client"

import { Todo } from "../models/Todo";

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: any;
}

const TodoList = ({ todos, onDeleteTodo }: TodoListProps) => {

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index} className="flex border-b border-gray-200">
                    <div className="w-[80%] p-4">
                        {todo.value}
                    </div>
                    <div className="w-[20%] m-2">
                        <button
                            onClick={() => onDeleteTodo(index)}
                            className="w-[100px] text-white p-2 mb-2 rounded bg-red-500 hover:bg-red-700"
                        >Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoList;