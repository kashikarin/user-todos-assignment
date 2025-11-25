import { useSearchParams } from "react-router-dom"

interface UserSearchParams {
    user: number | null
    hideCompleted: boolean
}

export function useUserSearchParams() {
    const [searchParams, setSearchParams] = useSearchParams()

    const params: UserSearchParams = {
        user: searchParams.get("user") ? Number(searchParams.get("user")) : null,
        hideCompleted: searchParams.get("hideCompleted") === "true",
    }

    function updateParams(newParams: Partial<UserSearchParams>) {
        const updated = new URLSearchParams(searchParams.toString())

        if (newParams.user !== undefined) {
            if (newParams.user === null) updated.delete("user")
            else updated.set("user", String(newParams.user))
        }

        if (newParams.hideCompleted !== undefined) {
            updated.set("hideCompleted", String(newParams.hideCompleted))
        }

        setSearchParams(updated)
    }

    return {
        params,       
        updateParams, 
    }
}