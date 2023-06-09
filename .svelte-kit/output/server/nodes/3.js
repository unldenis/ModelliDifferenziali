import * as universal from '../entries/pages/es1/_page.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/es1/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/es1/+page.js";
export const imports = ["_app/immutable/nodes/3.321aa167.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/index.054d6729.js"];
export const stylesheets = [];
export const fonts = [];
