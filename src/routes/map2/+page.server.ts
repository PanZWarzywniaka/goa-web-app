
import { getAPIEndpoint } from '$lib/server/util';
import type { PageServerLoad } from './$types';

import { greenery, water } from './data';


async function fetchGreeneryData(): Promise<string> {
    // await new Promise(resolve => setTimeout(resolve, 3000));
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

    return fetch(`${getAPIEndpoint()}v2/greenery`, requestOptions).then(r => r.text())
    // return greenery
}


export const load: PageServerLoad = async ({ fetch, params, url }) => {

    console.log(`Search params are ${url.searchParams}`)

    const p = url.searchParams



    return {
        "map_data": {
            greenery: fetchGreeneryData(),
            water
        },
        "display_name": "Hard coded Kraków"//p.get("display_name")
    }
}