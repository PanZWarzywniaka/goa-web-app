// place files you want to import through the `$lib` alias in this folder.
export const debounce = (callback: Function, wait = 300) => {
    let timeout: ReturnType<typeof setTimeout>

    return (...args: any[]) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => callback(...args), wait)
    }
}