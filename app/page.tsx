"use client"

import React, { useEffect, useState } from 'react';
import TodoList from './components/todo/TodoList';
import TodoForm from './components/todo/TodoForm';
import { postTodos, getTodos } from './services/TodoService';
import { Todo } from './models/Todo';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [autoCompleteTags, setAutoCompleteTags] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getTodos();
      if (data) setTodos(data);
    })();
  }, [])


  useEffect(() => {
    if (!todos) return;
    var tags = autoCompleteTags;
    todos?.forEach((todo) => {
      if (todo.tags) {
        tags = [...tags, ...todo.tags];
        tags = tags.filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
      }
    });
    setAutoCompleteTags(tags);
  }, [todos])

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
      <TodoForm onSaveTodo={saveTodo} autoCompleteTags={autoCompleteTags} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}
