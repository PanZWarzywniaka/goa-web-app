
import type { PageServerLoad } from './$types';

export const load = async ({ fetch, params }) => {

    console.log(`Fetching map ${params.location}`)
    const res = await fetch('http://0.0.0.0:8000/v1/map')

    // const item = await res.text()
    const item = await res.json()

    return { svg_string: item.svg_string }

}