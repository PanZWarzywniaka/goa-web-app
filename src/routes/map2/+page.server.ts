
import { getAPIEndpoint } from '$lib/server/util';
import type { PageServerLoad } from './$types';

import { greenery, water } from './data';


function getRequestOptions() {

    //     const area = {
    //     "latlon": [
    //         lat,
    //         lon
    //     ]
    // }
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const requestOptions = {
        method: 'POST',
        headers: headers,
        // body: JSON.stringify(area)
    };

    return requestOptions
}


async function fetchGreeneryData(): Promise<string> {
    return fetch(`${getAPIEndpoint()}v2/greenery`, getRequestOptions()).then(r => r.text())
}

async function fetchWaterData(): Promise<string> {
    return fetch(`${getAPIEndpoint()}v2/water`, getRequestOptions()).then(r => r.text())
}


export const load: PageServerLoad = async ({ fetch, params, url }) => {

    console.log(`Search params are ${url.searchParams}`)

    const p = url.searchParams



    return {
        "map_data": {
            greenery: fetchGreeneryData(),
            water: fetchWaterData()
        },
        "display_name": "Hard coded Kraków"//p.get("display_name")
    }
}