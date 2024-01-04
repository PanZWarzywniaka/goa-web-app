import { env } from "$env/dynamic/private"

export function getAPIEndpoint(): URL {

    let api_url = new URL(`https://goa.olek.site`)
    if (env.LOCAL == "true") {
        api_url = new URL(`http://0.0.0.0:8000`)
    }
    console.log(`API URL: ${api_url}`)
    return api_url
}
