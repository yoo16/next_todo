"use client"

import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { postTodos, getTodos } from './services/TodoService';
import { Todo } from './models/Todo';
import TagList from './components/TagList';
import TagsInput from './components/TagsInput';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [tags, setTags] = useState(['React', 'Next.js', 'JavaScript']);
  // const [tags, setTags] = useState(['React']);
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    (async () => {
      const data = await getTodos();
      console.log(data)
      if (data) setTodos(data);
    })();
  }, [])

  const saveTodo = async (value: string) => {
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
      <h1 className="flex p-3 me-3 text-2xl justify-center">TODO App</h1>
      <TodoForm onSaveTodo={saveTodo} />

      <TagsInput tags={tags} onChangeTags={(newTags) => { setTags(newTags) }} />

      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}
