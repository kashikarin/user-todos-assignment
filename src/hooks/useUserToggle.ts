import { useUsers } from "./useUsers"
import { useUserSearchParams } from "./useUserSearchParams"

export function useUserToggle() {
    const { params, updateParams } = useUserSearchParams()
    const { user, selectedUserId, setSelectedUser } = useUsers()

    function toggleUser(id: number) {
        const next = selectedUserId === id ? null : id

        setSelectedUser(next)
        updateParams({ user: next })
    }

    return {
        selectedUserId,
        toggleUser,
    }
}