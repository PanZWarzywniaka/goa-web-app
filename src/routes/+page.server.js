

export const load = async ({ fetch }) => {
    // const res = await fetch('api/maps')
    // const item = await res.json()
    // const res = await fetch('warsaw_emerald_a3.svg')

    const res = await fetch('http://0.0.0.0:8000/v1/map')

    // const item = await res.text()
    const item = await res.json()

    return { svg_string: item.svg_string }

}