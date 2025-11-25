import type { User } from "../../types"
import { UserCard } from "./UserCard"

interface Props {
    users: User[]
    selectedUserId: number | null
    onSelectUser: (id: number) => void
}

export function UserList({ users, selectedUserId, onSelectUser }: Props) {
    if (!users.length) return <p className="user-list-empty">No users available</p>

    return(
        <div className="user-list card-grid">
            {users.map(user => (
                <UserCard
                    key={user.id}
                    user={user}
                    isSelected={user.id === selectedUserId}
                    onSelect={onSelectUser}
                />
            ))}
        </div>
    )
}