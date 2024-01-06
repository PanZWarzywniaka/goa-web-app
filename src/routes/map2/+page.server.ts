
import { getAPIEndpoint, getRequestOptions } from '$lib/server/util';
import type { PageServerLoad } from './$types';
import { layers, type LayerData } from './map_layers';

async function fetchLayer(layer_name: string): Promise<string> {
    console.log(`Fetching: ${layer_name}`)

    const body = JSON.stringify({
        layer_name: layer_name,
        // area

    })

    return fetch(`${getAPIEndpoint()}v3/paths`, getRequestOptions(body)).then(r => r.text())
}


function fetchLayerPaths(): LayerData[] {
    const ret: LayerData[] = layers.map((layer: LayerData) => {
        return {
            ...layer, //spread existing properites
            paths: fetchLayer(layer.name)
        }
    })

    return ret
}

export const load: PageServerLoad = async ({ fetch, params, url }) => {

    console.log(`Search params are ${url.searchParams}`)

    const p = url.searchParams
    let test = [{ "motorway": "somestring" }, { "footway": "somestring" }]
    return {
        "map_data": {
            greenery: fetchLayer("greenery"),
            water: fetchLayer("water"),
            pier: fetchLayer("pier"),
            street_data: fetchLayerPaths()

        },
        "display_name": "Hard coded Kraków"//p.get("display_name")
    }
}