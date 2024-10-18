

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BePfJ_as.js","_app/immutable/chunks/scheduler.Cp8OC_ye.js","_app/immutable/chunks/index.DHd7Qox6.js"];
export const stylesheets = [];
export const fonts = [];
