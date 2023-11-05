

export const load = async ({ fetch }) => {
    // const res = await fetch('api/maps')
    // const item = await res.json()
    const res = await fetch('warsaw_emerald_a3.svg')
    const item = await res.text()

    return { svg_string: item }

}