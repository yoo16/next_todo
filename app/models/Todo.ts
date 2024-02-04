export interface Todo {
    value: string;
    tags: string[]
}

export const initialAutoCompleteTags = ['Apple', 'Microsoft', 'Google'];

export const loadTags = (todos: Todo[], currentTags: string[]) => {
    if (!todos) return currentTags;
    var tags = currentTags;
    todos?.forEach((todo) => {
        if (todo.tags) {
            tags = [...tags, ...todo.tags];
            tags = tags.filter((value, index, self) => {
                return self.indexOf(value) === index;
            });
        }
    });
    tags.sort();
    return tags;
}