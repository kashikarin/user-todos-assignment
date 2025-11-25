import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useUserSearchParams } from "./useUserSearchParams"
import { userService } from "../services/user.service"
import { loadUsers, loadUser } from "../store/actions/user.actions"
import type { User } from "../types"

export function useUsers() {
    const { params } = useUserSearchParams()
    const users = useSelector((state: any) => state.userModule.users)
    const user = useSelector((state: any) => state.userModule.user)
    const loading = useSelector((state: any) => state.userModule.loading)
    const error = useSelector((state: any) => state.userModule.error)

    const selectedId = user?.id ?? null

    useEffect(() => {
        initUsers()
    }, [])

    useEffect(() => {
        if (params.user) loadUser(params.user)
        else loadUser(null)
    }, [params.user])

    async function toggleUser(userId: number) {
        if (selectedId === userId) {
            localStorage.removeItem("selectedUserId")
            await loadUser(null)
        } else {
            localStorage.setItem("selectedUserId", String(userId))
            await loadUser(userId)
        }
    }

    async function initUsers() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const fetchedUsers: User[] = await res.json()

            userService.save(fetchedUsers)

            await loadUsers()

            const savedId = Number(localStorage.getItem("selectedUserId"))
            if (savedId) {
                await loadUser(savedId)
            }

        } catch (err) {
            console.error("initUsers failed", err)
        }
    }

    return {
            users,
            user,
            selectedId,
            loading,
            error,
            loadUser,
            toggleUser
    }
}

    


