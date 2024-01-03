
import type { PageServerLoad } from './$types';
import { env } from "$env/dynamic/private"

function getAPIEndpoint(): URL {

    let api_url = new URL(`https://goa.olek.site/v1/map`)
    if (env.LOCAL == "true") {
        api_url = new URL(`http://0.0.0.0:8000/v1/map`)
    }
    console.log(`API URL: ${api_url}`)
    return api_url
}

async function getMap(lat: string, lon: string): Promise<{ "svg_string": string }> {

    const area = {
        "latlon": [
            lat,
            lon
        ]
    }

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(area)
    };

    return fetch(getAPIEndpoint(), requestOptions).then(r => r.json())

}

export const load: PageServerLoad = async ({ fetch, params, url }) => {

    console.log(`Search params are ${url.searchParams}`)

    const p = url.searchParams



    return {
        "svg_string": getMap(p.get("lat"), p.get("lon")),
        "display_name": p.get("display_name")
    }
}