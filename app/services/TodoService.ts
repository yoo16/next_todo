import { Todo } from "../models/Todo";

export const getTodos = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL + "todo/get";
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error)
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos) return;
    const url = process.env.NEXT_PUBLIC_API_URL + "todo/add";
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(todos),
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error)
    }
}
