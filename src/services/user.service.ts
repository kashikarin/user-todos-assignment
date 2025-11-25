export const userService = {
    query,
    save,
    getById,
    remove,
}

const STORAGE_KEY = "users"

async function query() {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    return users
}

function save(users: any[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
}

function getById(id: number) {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    return users.find((u: any) => u.id === id) || null
}

function remove(id: number) {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    const filtered = users.filter((u: any) => u.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}