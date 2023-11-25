
import type { PageServerLoad } from './$types';

export const load = async ({ fetch, params, url }) => {

    console.log(`Search params are ${url.searchParams}`)


    const p = url.searchParams
    //min x min y max x max y
    // const coordinates = [p.get("min_lon"), p.get("min_lat"), p.get("max_lon"), p.get("max_lat")]

    const area = {
        "latlon": [
            p.get("lat"),
            p.get("lon")
        ]
    }
    const api_url = new URL(`http://0.0.0.0:8000/v1/map`)

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(area)
    };

    const res = await fetch(api_url, requestOptions)
    const item = await res.json()

    return item
}