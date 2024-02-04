"use client"

import { useState } from "react";
import ClickButton from "@/app/components/ClickButton";
import Input from "@/app/components/Input";
import TagsInput from "@/app/components/tag/TagsInput";

interface TodoFormProps {
    onSaveTodo: (value: string, tags: string[]) => void;
    autoCompleteTags: string[]
}

const TodoForm = ({
    onSaveTodo,
    autoCompleteTags = []
}: TodoFormProps) => {
    const [value, setValue] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    const addClickHandler = () => {
        onSaveTodo(value, tags);
        setValue("");
        setTags([]);
    }

    return (
        <div>
            <Input
                type="text"
                value={value}
                onChange={setValue}
                placeholder="Enter Todo..." />

            <TagsInput
                tags={tags}
                autoCompleteTags={autoCompleteTags}
                placeholder="Enter Tag..."
                onChangeTags={(tag) => { setTags(tag) }} />

            <ClickButton
                label="Add"
                onClick={addClickHandler}
                disabled={!value} />
        </div>
    );
}

export default TodoForm;