import * as server from '../entries/pages/map/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/map/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/map/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.d74dd187.js","_app/immutable/chunks/scheduler.17b940cc.js","_app/immutable/chunks/index.fa92f6d7.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/index.953680d5.js"];
export const stylesheets = ["_app/immutable/assets/3.6a604bb0.css"];
export const fonts = [];
