import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, fetch }) => {
    const location = url.searchParams.get('q') || "";

    const baseUrl = 'https://nominatim.openstreetmap.org/search';

    // Constructing the request URL with query parameters
    const osm_url = new URL(baseUrl);
    osm_url.searchParams.append('q', location);
    osm_url.searchParams.append('format', 'json');

    const res = await fetch(osm_url);
    const data = await res.json()

    // data.forEach(element => {
    //     console.log(element.display_name)
    // });
    const names = data.map(element => element.display_name);

    console.log(names)
    return json(names)
};