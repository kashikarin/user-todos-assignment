import type { Todo } from "../types"

export const todoService = {
    query,
    save
}

const STORAGE_KEY = "todos"

function query(filterBy?: { userId?: number; hideCompleted?: boolean }): Todo[] {
    const todos: Todo[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")

    let filtered = todos

    if (filterBy?.userId !== undefined) {
        filtered = filtered.filter(t => t.userId === filterBy.userId)
    }

    if (filterBy?.hideCompleted) {
        filtered = filtered.filter(t => !t.completed)
    }

    return filtered
}


function save(todos: any[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}
