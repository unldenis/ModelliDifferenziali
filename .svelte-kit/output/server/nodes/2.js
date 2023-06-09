import * as universal from '../entries/pages/_page.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.36ce89eb.js","_app/immutable/chunks/index.054d6729.js"];
export const stylesheets = [];
export const fonts = [];
