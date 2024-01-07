
import { getAPIEndpoint, getRequestOptions } from '$lib/server/util';
import type { PageServerLoad } from './$types';
import { layers, type LayerData, type Area } from './map_layers';

async function fetchLayer(layer_name: string, area: Area): Promise<string> {
    console.log(`Fetching: ${layer_name}`)

    const body = JSON.stringify({
        layer_name: layer_name,
        area: area

    })

    return fetch(`${getAPIEndpoint()}v3/paths`, getRequestOptions(body)).then(r => r.text())
}


function fetchLayerPaths(area: Area): LayerData[] {
    const ret: LayerData[] = layers.map((layer: LayerData) => {
        return {
            ...layer, //spread existing properites
            paths: fetchLayer(layer.name, area)
        }
    })

    return ret
}

export const load: PageServerLoad = async ({ fetch, params, url }) => {

    console.log(`Search params are ${url.searchParams}`)

    const p = url.searchParams
    const a: Area = {
        latlon: [
            p.get("lat"),
            p.get("lon")
        ]
    }

    return {
        "map_data": {
            greenery: fetchLayer("greenery", a),
            water: fetchLayer("water", a),
            pier: fetchLayer("pier", a),
            street_data: fetchLayerPaths(a)

        },
        "display_name": p.get("display_name")
    }
}