"use client"

import { useState } from "react";
import ClickButton from "./ClickButton";
import Input from "./Input";

interface TodoFormProps {
    onSaveTodo: any;
}

const TodoForm = ({ onSaveTodo }: TodoFormProps) => {
    const [value, setValue] = useState('');

    const addClickHandler = () => {
        onSaveTodo(value);
        setValue("");
    }

    return (
        <div>
            <Input type="text" value={value} onChange={setValue} />
            <ClickButton label="Add" onClick={addClickHandler} />
        </div>
    );
}

export default TodoForm;