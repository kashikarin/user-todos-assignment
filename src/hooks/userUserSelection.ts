import { useUserSearchParams } from "./useUserSearchParams"
import { useUsers } from "./useUsers"

export function useUserSelection() {
    const { user, toggleUser } = useUsers()
    const selectedId = user?.id ?? null

    const { params, updateParams } = useUserSearchParams()

    function toggleSelectedUser(id: number) {
        const nextId = selectedId === id ? null : id
        toggleUser(id)
        updateParams({ user: nextId })

        updateParams({
            user: selectedId === id ? null : id
        })
    }

    return {
        selectedId,
        toggleSelectedUser,
        params
    }
}
