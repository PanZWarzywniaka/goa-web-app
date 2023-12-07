

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.df69d96f.js","_app/immutable/chunks/scheduler.17b940cc.js","_app/immutable/chunks/index.fa92f6d7.js","_app/immutable/chunks/singletons.27faa56f.js","_app/immutable/chunks/index.953680d5.js"];
export const stylesheets = [];
export const fonts = [];
