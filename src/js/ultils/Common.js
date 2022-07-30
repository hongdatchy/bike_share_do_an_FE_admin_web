export function getDataLocalStorage(key, defaultValue = ""){
    let value = window.localStorage.getItem(key)
    return value != null ? value : defaultValue
}