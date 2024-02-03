import { NextRequest, NextResponse } from "next/server";
import fs from 'fs/promises';

const saveTodos = async (values:any) => {
    try {
        await fs.writeFile('data/todos.json', JSON.stringify(values));
    } catch (error) {
        console.error('データの保存に失敗しました', error);
    }
};

export async function POST(req: NextRequest) {
    const data = await req.json()
    saveTodos(data);
    return NextResponse.json(data);
}