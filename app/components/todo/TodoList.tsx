"use client"

import { Todo } from "../../models/Todo";
import TodoDetail from "./TodoDetail";

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: any;
}

const TodoList = ({ todos, onDeleteTodo }: TodoListProps) => {

    return (
        <div>
            {todos.map((todo, index) => (
                <TodoDetail key={index} todo={todo} index={index} onDeleteTodo={onDeleteTodo} />
            ))}
        </div>
    );
}

export default TodoList;