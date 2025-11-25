import { createStore, combineReducers } from "redux"
import { userReducer } from "./reducers/user.reducer"
import { todoReducer } from "./reducers/todo.reducer"

const rootReducer = combineReducers({
    userModule: userReducer,
    todoModule: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)