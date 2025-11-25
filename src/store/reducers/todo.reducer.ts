import type { Todo } from "../../types"

export const TODO_ACTIONS = {
    SET_TODOS_REQUEST: "TODO/SET_TODOS_REQUEST",
    SET_TODOS_SUCCESS: "TODO/SET_TODOS_SUCCESS",
    SET_TODOS_FAILURE: "TODO/SET_TODOS_FAILURE",
    SET_FILTER: "TODO/SET_FILTER",
} as const

export interface TodoFilter {
    userId: number | null
    hideCompleted: boolean
}

export interface TodoState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
    filter: TodoFilter
}

export type TodoAction =
    | { type: typeof TODO_ACTIONS.SET_TODOS_REQUEST }
    | { type: typeof TODO_ACTIONS.SET_TODOS_SUCCESS; todos: Todo[] }
    | { type: typeof TODO_ACTIONS.SET_TODOS_FAILURE; error: string }
    | { type: typeof TODO_ACTIONS.SET_FILTER; filter: Partial<TodoFilter> }

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    filter: {
        userId: null,
        hideCompleted: false,
    }
}

export function todoReducer(
    state: TodoState = initialState,
    action: TodoAction
): TodoState {
    switch (action.type) {
        case TODO_ACTIONS.SET_TODOS_REQUEST:
            return { ...state, loading: true, error: null }

        case TODO_ACTIONS.SET_TODOS_SUCCESS:
            return { ...state, loading: false, todos: action.todos }

        case TODO_ACTIONS.SET_TODOS_FAILURE:
            return { ...state, loading: false, error: action.error }

        case TODO_ACTIONS.SET_FILTER:
            return { 
                ...state, 
                filter: { ...state.filter, ...action.filter }, 
            }
        
        default:
            return state
  }
}