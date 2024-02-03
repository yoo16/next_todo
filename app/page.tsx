"use client"

import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { postTodos, getTodos } from './services/TodoService';
import { Todo } from './models/Todo';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getTodos();
      console.log(data)
      if (data) setTodos(data);
    })();
  }, [])

  const saveTodo = async (value: string) => {
    if (value.trim() !== '') {
      const data = [{ value }, ...todos];
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
      <h1 className="flex p-3 me-3 text-2xl justify-center">TODO App</h1>
      <TodoForm onSaveTodo={saveTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}
