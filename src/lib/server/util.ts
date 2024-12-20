import { env } from '$env/dynamic/private'

export function getAPIEndpoint(): URL {
	let api_url = new URL(`http://0.0.0.0:8000`)
	if (env.API_URL) {
		api_url = new URL(env.API_URL)
	}

	console.log(`API URL: ${api_url}`)
	return api_url
}

export function getRequestOptions(body: string) {
	const headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}

	const requestOptions = {
		method: 'POST',
		headers: headers,
		body: body
	}

	return requestOptions
}
