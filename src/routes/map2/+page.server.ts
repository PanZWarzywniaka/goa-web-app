
import type { PageServerLoad } from './$types';
import { env } from "$env/dynamic/private"


export const load: PageServerLoad = async ({ fetch, params, url }) => {

    console.log(`Search params are ${url.searchParams}`)

    const p = url.searchParams



    return {

        "display_name": p.get("display_name")
    }
}