import { useEffect } from "react"
import { useSelector } from "react-redux"
import { setTodoFilter } from "../store/actions/todo.actions"
import { todoService } from "../services/todo.service"
import type { Todo } from "../types"
import { useUserSearchParams } from "./useUserSearchParams"

export function useTodos(userId: number | null) {
    const { params } = useUserSearchParams()
    const todos = useSelector((state: any) => state.todoModule.todos)
    const loading = useSelector((state: any) => state.todoModule.loading)
    const error = useSelector((state: any) => state.todoModule.error)
    const filter = useSelector((state: any) => state.todoModule.filter)

    useEffect(() => {
        if (!userId) return
        initTodos(userId)
    }, [userId])


    useEffect(() => {
        if (!userId) return
        
        setTodoFilter({
            userId,
            hideCompleted: params.hideCompleted
        })

    }, [params.hideCompleted, userId])


    async function initTodos(userId: number) {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
            const fetchedTodos: Todo[] = await res.json()
            todoService.save(fetchedTodos)
            
            await setTodoFilter({ userId, hideCompleted: false })

        } catch (err) {
            console.error("initTodos failed", err)
        }
    }

    function toggleHideCompleted() {
        setTodoFilter({ hideCompleted: !filter.hideCompleted })
    }

    const filteredTodos = filter.hideCompleted
        ? todos.filter((t:Todo) => !t.completed)
        : todos

    return {
        todos: filteredTodos,
        hideCompleted: filter.hideCompleted,
        loading,
        error,
        toggleHideCompleted,
    }
}
