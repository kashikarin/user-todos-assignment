export const storageService = {
    save(key: string, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value))
    },

    load<T>(key: string): T | null {
        const data = sessionStorage.getItem(key)
        return data ? JSON.parse(data) : null
    },
}