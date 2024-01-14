
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

    const display_name: string = p.get("display_name") as string
    const splited: string[] = display_name.split(',');
    const main_label: string = splited[0].trim()
    const sub_label: string = splited[splited.length - 1].trim()

    return {
        "map_data": {
            water: fetchLayer("water", a),
            greenery: fetchLayer("greenery", a),
            pier: fetchLayer("pier", a),
            street_data: fetchLayerPaths(a)

        },
        display_name,
        main_label,
        sub_label
    }
}