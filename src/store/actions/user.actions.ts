import { userService } from "../../services/user.service"
import type { User } from "../../types"
import {
    USER_ACTIONS
} from "../reducers/user.reducer"
import { store } from "../store"

export async function loadUsers() {
    try {
        store.dispatch(getCmdSetUsers())
        const users: User[] = await userService.query()
        store.dispatch(getCmdSetUsersSuccess(users))
        return users
    } catch (err: any) {
        store.dispatch(getCmdSetUsersFailure(err.message))
        console.error("loadUsers failed:", err)
        throw err
    }
}

export async function loadUser(userId: number | null) {
    try {
        if (userId === null) {
            store.dispatch(getCmdSetUser(null))
            return
        } 
        const user: User = await userService.getById(userId)
        if (!user) throw new Error("User not found")
        store.dispatch(getCmdSetUser(user))
    } catch (err) {
        console.error("selectUser failed:", err)
        throw err
    }
}

//command creators
function getCmdSetUsers() {
    return { type: USER_ACTIONS.SET_USERS_REQUEST };
}

function getCmdSetUsersSuccess(users: User[]) {
    return { type: USER_ACTIONS.SET_USERS_SUCCESS, users };
}

function getCmdSetUsersFailure(error: string) {
    return { type: USER_ACTIONS.SET_USERS_FAILURE, error };
}

function getCmdSetUser(user: User | null) {
    return { type: USER_ACTIONS.SET_USER, user };
}
