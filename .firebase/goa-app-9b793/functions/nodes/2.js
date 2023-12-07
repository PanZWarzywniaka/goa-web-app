

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.183cc4ba.js","_app/immutable/chunks/scheduler.17b940cc.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/index.fa92f6d7.js"];
export const stylesheets = [];
export const fonts = [];
