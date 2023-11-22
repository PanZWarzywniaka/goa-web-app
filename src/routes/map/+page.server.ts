
import type { PageServerLoad } from './$types';

export const load = async ({ fetch, params, url }) => {

    url.searchParams
    console.log(`Fetching map ${params.location}`)

    const coordinates = [-3.761955, 40.366123, -3.653073, 40.465302]
    const api_url = new URL(`http://0.0.0.0:8000/v1/map`)

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(coordinates)
    };

    const res = await fetch(api_url, requestOptions)
    const item = await res.json()

    return item
}