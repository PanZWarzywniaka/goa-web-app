
import type { PageServerLoad } from './$types';
import { env } from "$env/dynamic/private"
import { greenery, water } from './data';

export const load: PageServerLoad = async ({ fetch, params, url }) => {

    console.log(`Search params are ${url.searchParams}`)

    const p = url.searchParams



    return {
        "map_data": {
            greenery,
            water
        },
        "display_name": "Hard coded Kraków"//p.get("display_name")
    }
}