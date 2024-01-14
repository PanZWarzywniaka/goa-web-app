
export interface OSMNominatimPlace {
    addresstype: string
    boundingbox: number[]
    class: string
    display_name: string
    lat: string
    lon: string
    name: string
    type: string
    url?: string
}


export const getLocations = async (query: string): Promise<OSMNominatimPlace[]> => {
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&limit=10&format=json`
    const response = await (await fetch(url)).json() as OSMNominatimPlace[]

    const locations = response
        // get rid of administrative locations
        .filter((el) => el.addresstype != 'administrative')
        .map((el) => {
            el.url = `/map2?lat=${el.lat}&lon=${el.lon}&display_name=${el.display_name}`
            return el
        })

    return locations
}