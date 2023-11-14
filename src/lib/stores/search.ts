import { writable } from "svelte/store"

export const createSearchStore = () => {
    const { subscribe, set, update } = writable({
        suggestions: [],
        search: "",

    })
    return {
        subscribe,
        set,
        update,
    }
}

export const searchHandler = async (store) => {
    if (store.search.length < 3) {
        console.log(`Search frase is too short`)
        return
    }
    console.log(`Search handler of ${store.search}`)
    console.log(`Fetching suggestions for ${store.search}`)
    const res = await fetch(`/api/nominatim?q=${store.search}`)
    const data = await res.json()

    console.log(`Got  ${data}`)
    store.suggestions = data
}