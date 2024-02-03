"use client"

import React, { useEffect, useState } from 'react';
import TodoList from './components/todo/TodoList';
import TodoForm from './components/todo/TodoForm';
import { postTodos, getTodos } from './services/TodoService';
import { Todo } from './models/Todo';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getTodos();
      console.log(data)
      if (data) setTodos(data);
    })();
  }, [])

  const saveTodo = async (value: string, tags: string[]) => {
    if (value.trim() !== '') {
      const data = [{ value, tags }, ...todos] as Todo[];
      await postTodos(data);
      setTodos(data);
    }
  };

  const deleteTodo = async (index: number) => {
    const data = todos.filter((_, i) => i !== index);
    await postTodos(data);
    setTodos(data);
  };

  return (
    <div>
      <TodoForm onSaveTodo={saveTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}
