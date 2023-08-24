import { s as server_default } from './chunks/astro.e50c0466.mjs';
import _renderer1 from '@astrojs/lit/server.js';
import 'html-escaper';

const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/lit","serverEntrypoint":"@astrojs/lit/server.js","clientEntrypoint":"@astrojs/lit/dist/client.js"}, { ssr: _renderer1 }),];

export { renderers };
