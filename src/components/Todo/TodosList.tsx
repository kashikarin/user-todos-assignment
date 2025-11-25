import { useTodos } from "../../hooks/useTodos"
import { useUserSearchParams } from "../../hooks/useUserSearchParams"

import type { Todo } from "../../types"

export function TodoList({ userId }: { userId: number }){
    
    const { todos, hideCompleted, toggleHideCompleted, loading, error } = useTodos(userId)
    const { params, updateParams } = useUserSearchParams()

    function onToggleHide() {
        const next = !hideCompleted
        toggleHideCompleted()
        updateParams({ hideCompleted: next })
    }

    if (loading) return <p className="loading-msg">Loading TODOs...</p>
    if (error) return <p className="error-msg">Error loading TODOs</p>

    return(
        <section className="todo-list-container">
            <label>
                <input 
                    type="checkbox" 
                    checked={hideCompleted} 
                    onChange={onToggleHide} 
                />
                Hide completed todos
            </label>

            {/* //todos list */}
            <ul>
                {todos.map((t: Todo, i: number)=> (
                    <li key={i}>
                        <label>
                            <input type='checkbox' checked={Boolean(t.completed)} readOnly /> 
                            {t.title}
                        </label>
                    </li>
                ))}
            </ul>

        </section>
    )
}