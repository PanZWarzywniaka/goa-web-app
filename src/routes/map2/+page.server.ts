
import { getAPIEndpoint } from '$lib/server/util';
import type { PageServerLoad } from './$types';

import { greenery, water } from './data';


function getRequestOptions() {

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

async function fetchLayer(layer_name: string) {
    console.log(`Fetching: ${layer_name}`)
    let ro = getRequestOptions()
    ro.body = JSON.stringify({
        layer_name: layer_name,
        // area

    })
    console.log(ro)
    return fetch(`${getAPIEndpoint()}v3/paths`, ro).then(r => r.text())
}


export const load: PageServerLoad = async ({ fetch, params, url }) => {

    console.log(`Search params are ${url.searchParams}`)

    const p = url.searchParams


    return {
        "map_data": {
            greenery: fetchLayer("greenery"),
            water: fetchLayer("water"),
            pier: fetchLayer("pier")
        },
        "display_name": "Hard coded Kraków"//p.get("display_name")
    }
}