"use client"

import { useState } from "react";
import ClickButton from "./ClickButton";
import Input from "./Input";
import TagsInput from "./TagsInput";

interface TodoFormProps {
    onSaveTodo: any;
}

const TodoForm = ({ onSaveTodo }: TodoFormProps) => {
    const [value, setValue] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    const addClickHandler = () => {
        onSaveTodo(value, tags);
        setValue("");
    }

    return (
        <div>
            <Input type="text" value={value} onChange={setValue} placeholder="Todo..." />
            <TagsInput tags={tags} onChangeTags={(newTags) => { setTags(newTags) }} />
            <ClickButton label="Add" onClick={addClickHandler} disabled={!value} />
        </div>
    );
}

export default TodoForm;