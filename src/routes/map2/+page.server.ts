
import { getAPIEndpoint, getRequestOptions } from '$lib/server/util';
import type { PageServerLoad } from './$types';


async function fetchLayer(layer_name: string): Promise<string> {
    console.log(`Fetching: ${layer_name}`)

    const body = JSON.stringify({
        layer_name: layer_name,
        // area

    })

    return fetch(`${getAPIEndpoint()}v3/paths`, getRequestOptions(body)).then(r => r.text())
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