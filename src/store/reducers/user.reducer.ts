import type { User } from "../../types"

export const USER_ACTIONS = {
  SET_USERS_REQUEST: "USERS/SET_USERS_REQUEST",
  SET_USERS_SUCCESS: "USERS/SET_USERS_SUCCESS",
  SET_USERS_FAILURE: "USERS/SET_USERS_FAILURE",
  SET_USER: "USERS/SET_USER",
} as const

export interface UserState {
    users: User[]
    user: User | null
    loading: boolean
    error: string | null
}

export type UsersAction =
    | { type: typeof USER_ACTIONS.SET_USERS_REQUEST }
    | { type: typeof USER_ACTIONS.SET_USERS_SUCCESS; users: User[] }
    | { type: typeof USER_ACTIONS.SET_USERS_FAILURE; error: string }
    | { type: typeof USER_ACTIONS.SET_USER; user: User | null }

const initialState: UserState = {
    users: [],
    user: null,
    loading: false,
    error: null,
}

export function userReducer(
    state: UserState = initialState,
    action: UsersAction
): UserState {
    switch (action.type) {
        case USER_ACTIONS.SET_USERS_REQUEST:
            return { ...state, loading: true, error: null };

        case USER_ACTIONS.SET_USERS_SUCCESS:
            return { ...state, loading: false, users: action.users };

        case USER_ACTIONS.SET_USERS_FAILURE:
            return { ...state, loading: false, error: action.error };

        case USER_ACTIONS.SET_USER:
            return { ...state, user: action.user }

        default:
            return state;
    }
}
