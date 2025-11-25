import { store } from "../store"
import type { Todo } from "../../types"
import { TODO_ACTIONS } from "../reducers/todo.reducer"
import { todoService } from "../../services/todo.service"

export async function loadTodos(){
    try {
        store.dispatch(getCmdSetTodos())
        const todos: Todo[] = await todoService.query()
        store.dispatch(getCmdSetTodosSuccess(todos))
        return todos 
    } catch(err: any) {
        store.dispatch(getCmdSetTodosFailure(err.message))
        console.error("loadTodos failed:", err)
        throw err
    }
}

export async function setTodoFilter (filter: Partial<{ userId: number | null; hideCompleted: boolean }>) {
    store.dispatch(getCmdSetFilter(filter))
    await loadTodos()
}


// Command creators
function getCmdSetTodos() {
    return { type: TODO_ACTIONS.SET_TODOS_REQUEST }
}

function getCmdSetTodosSuccess(todos: Todo[]) {
    return { type: TODO_ACTIONS.SET_TODOS_SUCCESS, todos }
}

function getCmdSetTodosFailure(error: string) {
    return { type: TODO_ACTIONS.SET_TODOS_FAILURE, error }
}

function getCmdSetFilter(filter: any) {
    return { type: TODO_ACTIONS.SET_FILTER, filter}
}