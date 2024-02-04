import { NextRequest, NextResponse } from "next/server";
import fs from 'fs/promises';

const loadTodos = async () => {
    try {
        const data = await fs.readFile('data/todos.json', 'utf-8');
        return await JSON.parse(data);
    } catch (error) {
        console.error("loadTodos:", error);
    }
};

export async function GET() {
    const data = await loadTodos();
    return NextResponse.json(data);
}