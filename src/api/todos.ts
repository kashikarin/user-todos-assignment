import type { Todo } from "../types"

export async function fetchTodos(userId: number): Promise<Todo[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    if (!res.ok) throw new Error("Failed to fetch todos")
    return res.json()
}