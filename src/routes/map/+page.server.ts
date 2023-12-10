
import type { PageServerLoad } from './$types';
import { env } from "$env/dynamic/private"

export const load: PageServerLoad = async ({ fetch, params, url }) => {

    console.log(`Search params are ${url.searchParams}`)

    const p = url.searchParams
    const area = {
        "latlon": [
            p.get("lat"),
            p.get("lon")
        ]
    }

    let api_url = new URL(`https://goa.olek.site/v1/map`)
    if (env.LOCAL == "true") {
        api_url = new URL(`http://0.0.0.0:8000/v1/map`)
    }
    console.log(`API URL: ${api_url}`)
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