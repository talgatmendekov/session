export const savetoLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value)) 
    } catch (error) {
        
    }
    
}