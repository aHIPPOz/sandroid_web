import * as universal from '../entries/pages/alpine/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/alpine/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/alpine/+page.js";
export const imports = ["_app/immutable/nodes/3.DGYp0QKe.js","_app/immutable/chunks/scheduler.Cp8OC_ye.js","_app/immutable/chunks/index.DHd7Qox6.js","_app/immutable/chunks/WebVM.C-62wLW0.js","_app/immutable/chunks/preload-helper.CmsKOCeN.js","_app/immutable/chunks/index.57DhHpqs.js"];
export const stylesheets = ["_app/immutable/assets/WebVM.DXFenoDC.css"];
export const fonts = ["_app/immutable/assets/fa-brands-400.O7nZalfM.woff2","_app/immutable/assets/fa-brands-400.Dur5g48u.ttf","_app/immutable/assets/fa-regular-400.DgEfZSYE.woff2","_app/immutable/assets/fa-regular-400.Bf3rG5Nx.ttf","_app/immutable/assets/fa-solid-900.DOQJEhcS.woff2","_app/immutable/assets/fa-solid-900.BV3CbEM2.ttf","_app/immutable/assets/fa-v4compatibility.BX8XWJtE.woff2","_app/immutable/assets/fa-v4compatibility.B9MWI-E6.ttf"];
