import type { User } from '../../types'

interface Props {
    user: User;
    isSelected: boolean;
    onSelect: (userId: number) => void;
}

export function UserCard({ user, isSelected, onSelect }: Props){
    
    function handleToggle(ev: React.MouseEvent) {
        ev.stopPropagation()
        onSelect(user.id)
    }
    
    return(
        <article className={`user-card-container ${isSelected ? 'selected' : ''}`}>
            <div className="user-header">
                <h3 className="user-username">{user.username}</h3>
                <p className="user-name">{user.name}</p>
            </div>

            <button className="show-todos-btn" onClick={handleToggle}>
                {isSelected ? "Hide TODOs" : "Show TODOs"}
            </button>
        </article>
    )
}