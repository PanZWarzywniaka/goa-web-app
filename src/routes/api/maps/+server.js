export const GET = async ({ request }) => {

    const data = {
        map: 'test map string'
    }
    return new Response(JSON.stringify(data), { status: 200 })
}