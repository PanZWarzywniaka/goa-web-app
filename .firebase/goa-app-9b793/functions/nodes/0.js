

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.289137fd.js","_app/immutable/chunks/scheduler.17b940cc.js","_app/immutable/chunks/index.fa92f6d7.js"];
export const stylesheets = [];
export const fonts = [];
