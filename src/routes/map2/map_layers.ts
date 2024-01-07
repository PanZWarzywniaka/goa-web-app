export interface Area {
    bbox?: number[]
    latlon?: number[]
    name?: string
    radius?: number
}

export interface LayerData {
    "name": string
    "relative_width"?: number
    "paths"?: Promise<string>
}

export const layers: LayerData[] = [
    { 'name': 'footway', 'relative_width': 1 },
    { 'name': 'pedestrian', 'relative_width': 2 },
    { 'name': 'unclassified', 'relative_width': 2 },
    { 'name': 'service', 'relative_width': 2 },
    { 'name': 'living_street', 'relative_width': 3 },
    { 'name': 'residential', 'relative_width': 3 },
    { 'name': 'cycleway', 'relative_width': 3.5 },
    { 'name': 'tertiary', 'relative_width': 3.5 },
    { 'name': 'secondary', 'relative_width': 4 },
    { 'name': 'primary', 'relative_width': 4.5 },
    { 'name': 'trunk', 'relative_width': 5 },
    { 'name': 'motorway', 'relative_width': 5 },
    { 'name': 'tertiary_link', 'relative_width': 3.5 },
    { 'name': 'secondary_link', 'relative_width': 4 },
    { 'name': 'primary_link', 'relative_width': 4.5 },
    { 'name': 'trunk_link', 'relative_width': 5 },
    { 'name': 'motorway_link', 'relative_width': 5 }]