import { useUsers } from "../../hooks/useUsers"
import { UserList } from "../../components/User/UserList"
import { useUserSelection } from "../../hooks/userUserSelection"
import { TodoList } from "../../components/Todo/TodosList"

export function HomePage() {
    const { users } = useUsers()
    const { selectedId, toggleSelectedUser } = useUserSelection()

    return (
        <div className="app">
            <div className="main-container">
                <main>
                    <UserList
                        users={users}
                        selectedUserId={selectedId}
                        onSelectUser={toggleSelectedUser} 
                    />
                    {selectedId && (
                        <TodoList userId={selectedId} />
                    )}
                </main>
            </div>
        </div>
    )
}