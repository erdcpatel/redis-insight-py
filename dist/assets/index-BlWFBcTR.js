(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=(e,t,n=[])=>{const a=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{a.setAttribute(o,String(t[o]))}),n.length&&n.forEach(o=>{const i=hn(...o);a.appendChild(i)}),a};var Un=([e,t,n])=>hn(e,t,n);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),qn=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Gn=e=>e.flatMap(qn).map(n=>n.trim()).filter(Boolean).filter((n,a,o)=>o.indexOf(n)===a).join(" "),Jn=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,a)=>n.toUpperCase()+a.toLowerCase()),sn=(e,{nameAttr:t,icons:n,attrs:a})=>{const o=e.getAttribute(t);if(o==null)return;const i=Jn(o),r=n[i];if(!r)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const s=Vn(e),[c,m,v]=r,k={...m,"data-lucide":o,...a,...s},E=Gn(["lucide",`lucide-${o}`,s,a]);E&&Object.assign(k,{class:E});const x=Un([c,k,v]);return e.parentNode?.replaceChild(x,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=["svg",w,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=["svg",w,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=["svg",w,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=["svg",w,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=["svg",w,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=["svg",w,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=["svg",w,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=["svg",w,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=["svg",w,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=["svg",w,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=["svg",w,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=["svg",w,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=["svg",w,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=["svg",w,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=["svg",w,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=["svg",w,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=["svg",w,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=["svg",w,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=["svg",w,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=["svg",w,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=["svg",w,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=["svg",w,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=["svg",w,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=["svg",w,[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=["svg",w,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=["svg",w,[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=["svg",w,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=["svg",w,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=["svg",w,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=["svg",w,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=["svg",w,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=["svg",w,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=["svg",w,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=["svg",w,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=["svg",w,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=["svg",w,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=["svg",w,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=["svg",w,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=["svg",w,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=["svg",w,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=["svg",w,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=["svg",w,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=["svg",w,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=["svg",w,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const a=document.querySelectorAll(`[${t}]`);if(Array.from(a).forEach(o=>sn(o,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(i=>sn(i,{nameAttr:"icon-name",icons:e,attrs:n})))}};let ye=[],ge=[],Ne=0,De="",ve="all",Le=localStorage.getItem("redis_insight_view_mode")||"table",te=localStorage.getItem("redis_insight_tree_delimiter")||"auto",q=new Set,_e=!1,ue="",ln=null,ne=null,at=!1,Q=0,D="*",O="all",de=!1,Se=0,ee=!1,mt=0,$=null,z=[],Ee=new Set,G=!1,H=parseInt(localStorage.getItem("redis_insight_auto_refresh_sec")||"10",10);(isNaN(H)||H<5)&&(H=10);let j=H,he=null,Z=null,fn=null,ot=null,M=[],bn="ALL",Re="",st=null,xn="all",wn="",ae=2,Ce=0,ze=50,X=null;const kn=[50,100,200,500,1e3,2e3,5e3,1e4],Fa=200;function p(){Ha({icons:{Layers:ba,Plus:La,RefreshCw:$a,Search:Ia,Cpu:ra,Trash2:Ra,Zap:za,CheckCircle2:oa,AlertCircle:na,Database:da,ShieldCheck:Ba,Lock:wa,ArrowDownCircle:aa,X:Da,Play:Ca,Copy:la,Clock:ia,Edit:Ma,ExternalLink:pa,Code:sa,Users:Na,Server:Ta,Network:ka,GitBranch:ha,ArrowRightLeft:Yn,Activity:Wn,PieChart:Qn,AlertTriangle:Pa,TrendingUp:Aa,BarChart2:Zn,Power:Sa,ChevronLeft:ea,ChevronRight:ta,PanelLeft:Ea,Download:ca,FileText:ma,Folder:va,FolderOpen:ya,FolderTree:ga,Table:_a,List:xa,ChevronDown:Xn,Key:fa,Filter:ua}})}function Oa(){const e=document.getElementById("app");e&&(e.innerHTML=`
    <div class="app-container">
      <!-- Left Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="brand">
            <div class="brand-icon">
              <i data-lucide="layers" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="brand-title">
              Redis Insight
              <span class="brand-badge">py</span>
            </div>
          </div>
          <button type="button" class="sidebar-toggle-btn" id="btnToggleSidebar" title="Hide connections sidebar (Full Screen - Ctrl+B)">
            <i data-lucide="chevron-left" style="width: 16px; height: 16px;"></i>
          </button>
        </div>

        <div class="sidebar-action-bar">
          <span class="sidebar-heading">
            Connections <span class="badge-conn-count" id="totalConnCountBadge">0</span>
          </span>
          <div style="display: flex; gap: 0.35rem;">
            <button type="button" class="btn btn-secondary" id="btnReloadConfig" title="Reload from config/connections.yaml" style="padding: 0.35rem 0.5rem; font-size: 0.75rem;">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
            </button>
            <button type="button" class="btn btn-secondary" id="btnAddConn" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
              Add
            </button>
          </div>
        </div>

        <div class="sidebar-filter-section">
          <div class="sidebar-search-box">
            <i data-lucide="search" style="width: 13px; height: 13px; color: var(--text-muted); flex-shrink: 0;"></i>
            <input type="text" id="connSearchInput" class="sidebar-search-input" placeholder="Search connections (name, host)...">
            <button type="button" class="btn-clear-search" id="btnClearConnSearch" style="display: none;" title="Clear search">
              <i data-lucide="x" style="width: 11px; height: 11px;"></i>
            </button>
          </div>
          <div class="env-filter-pills" id="envFilterPills">
            <button type="button" class="env-pill-btn active" data-env="ALL">ALL</button>
            <button type="button" class="env-pill-btn" data-env="DEV">DEV</button>
            <button type="button" class="env-pill-btn" data-env="UAT">UAT</button>
            <button type="button" class="env-pill-btn" data-env="PROD">PROD</button>
          </div>
        </div>

        <!-- Connection Limit Status Bar -->
        <div class="sidebar-limit-bar" id="sidebarLimitBar">
          <div class="limit-status-left">
            <i data-lucide="shield-check" class="limit-shield-icon"></i>
            <div class="limit-meta">
              <span class="limit-title">Active Clusters</span>
              <div class="limit-progress-dots" id="limitProgressDots"></div>
            </div>
          </div>
          <div class="limit-controls">
            <span class="limit-count-pill" id="limitCountPill">
              <strong id="connectedCountDisplay" style="color: var(--accent-success);">0</strong>/<span id="connLimitDisplay">2</span>
            </span>
            <div class="limit-select-wrapper" title="Simultaneous connected clusters limit">
              <span>Max:</span>
              <select id="connLimitSelect" class="limit-select">
                <option value="1">1</option>
                <option value="2" selected>2</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="connections-list-wrapper" id="connectionsList">
          <div style="padding: 1rem; color: var(--text-muted); font-size: 0.8rem;">Loading connections...</div>
        </div>

        <div class="sidebar-footer">
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="cpu" style="width: 14px; height: 14px; color: var(--accent-primary);"></i>
            <span>FastAPI + Redis AsyncIO</span>
          </div>
          <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">v0.1.0</span>
        </div>
      </aside>

      <!-- Main Section -->
      <main class="main-wrapper">
        <!-- Top Status Bar -->
        <header class="top-navbar">
          <div class="top-navbar-left">
            <button type="button" class="sidebar-expand-btn" id="btnShowSidebar" title="Show connections sidebar (Ctrl+B)" style="display: none;">
              <i data-lucide="panel-left" style="width: 14px; height: 14px; color: var(--accent-primary);"></i>
              <i data-lucide="chevron-right" style="width: 12px; height: 12px; margin-left: -2px; color: var(--text-muted);"></i>
            </button>
            <div id="topConnContainer">
              <div class="top-conn-badge">
                <span class="status-indicator connected"></span>
                <span class="top-conn-name">Connecting to Redis...</span>
              </div>
            </div>
          </div>

          <div class="top-navbar-center" id="topVitalsContainer">
            <!-- Streamlined vitals capsule populated dynamically -->
          </div>

          <div class="top-navbar-right" id="topActionsContainer">
            <div class="top-tools-group">
              <button type="button" class="tool-pill-btn" id="btnOpenBenchmarkModal" title="Redis Benchmark & Latency Studio">
                <i data-lucide="zap" style="width: 13px; height: 13px; color: #f59e0b;"></i>
                <span>Benchmark</span>
              </button>
              <button type="button" class="tool-pill-btn" id="btnOpenSlowlog" title="Real-Time Slowlog & Latency Profiler">
                <i data-lucide="activity" style="width: 13px; height: 13px; color: #38bdf8;"></i>
                <span>Slowlog</span>
              </button>
              <button type="button" class="tool-pill-btn" id="btnOpenMemoryModal" title="Memory Analysis & BigKeys Profiler">
                <i data-lucide="pie-chart" style="width: 13px; height: 13px; color: #a78bfa;"></i>
                <span>BigKeys</span>
              </button>
              <button type="button" class="tool-icon-btn" id="btnRefreshStats" title="Ping active instance & refresh vitals">
                <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              </button>
            </div>
          </div>
        </header>

        <!-- Main Workspace -->
        <div class="workspace-content">
          <!-- Filter Controls -->
          <div class="controls-card">
            <div class="search-group">
              <i data-lucide="search" class="search-icon" style="width: 16px; height: 16px;"></i>
              <input type="text" id="keySearchInput" class="search-input" placeholder="Search keys by pattern (e.g. *, bikes:*, sample_*) - Press Enter" value="*">
            </div>

            <div class="type-filter-group" id="typeFilterGroup">
              <button type="button" class="type-tab active" data-type="all">All</button>
              <button type="button" class="type-tab" data-type="string">Strings</button>
              <button type="button" class="type-tab" data-type="hash">Hashes</button>
              <button type="button" class="type-tab" data-type="list">Lists</button>
              <button type="button" class="type-tab" data-type="set">Sets</button>
              <button type="button" class="type-tab" data-type="zset">ZSets</button>
              <button type="button" class="type-tab" data-type="json">JSON</button>
            </div>
          </div>

          <!-- Panel 1: Safe SCAN Status & Live Auto-Refresh Watcher -->
          <div class="chunk-status-bar">
            <div class="status-left">
              <span class="safety-badge">
                <i data-lucide="shield-check" style="width: 14px; height: 14px;"></i>
                <span id="scanChunkLabel">Safe SCAN (Chunk 50)</span>
              </span>
              <span id="scanStatusText" class="scan-status-text">Scanning keys...</span>
            </div>

            <div class="status-right">
              <div class="auto-refresh-control-group" id="autoRefreshGroup" title="Auto-refresh keys matching current pattern & type filter">
                <button type="button" class="btn btn-secondary btn-auto-refresh" id="btnToggleAutoRefresh" title="Click to start auto-refreshing keys for this pattern">
                  <span class="auto-refresh-dot" id="autoRefreshDot"></span>
                  <i data-lucide="timer" style="width: 12px; height: 12px;"></i>
                  <span id="autoRefreshStatusText">Auto: Off</span>
                </button>
                <select id="autoRefreshIntervalSelect" class="auto-refresh-select" title="Auto-refresh interval (5s to 5m)">
                  <option value="5">5s</option>
                  <option value="10" selected>10s</option>
                  <option value="15">15s</option>
                  <option value="30">30s</option>
                  <option value="60">1m</option>
                  <option value="120">2m</option>
                  <option value="300">5m</option>
                </select>
              </div>

              <button type="button" class="btn btn-secondary btn-toolbar-action" id="btnResetScan" title="Reload keys matching pattern immediately" style="font-size: 0.75rem; padding: 0.32rem 0.65rem;">
                <i data-lucide="refresh-cw" style="width: 12px; height: 12px;"></i>
                <span>Refresh</span>
              </button>
            </div>
          </div>

          <!-- Panel 2: Key Browsing Pagination & Action Operations -->
          <div class="keys-actions-bar">
            <div class="actions-left" id="scanActionsGroup">
              <div class="view-mode-toggle-group" id="viewModeToggleGroup">
                <button type="button" class="view-mode-tab ${Le==="table"?"active":""}" id="btnViewTable" data-mode="table" title="Flat Table View">
                  <i data-lucide="table" style="width: 13px; height: 13px;"></i>
                  <span>Table</span>
                </button>
                <button type="button" class="view-mode-tab ${Le==="tree"?"active":""}" id="btnViewTree" data-mode="tree" title="Virtual Tree / Namespace Folder View">
                  <i data-lucide="folder-tree" style="width: 13px; height: 13px;"></i>
                  <span>Tree</span>
                </button>
              </div>
              <div class="actions-divider"></div>
              <label for="scanBatchSizeSelect" class="batch-size-label">Keys per scan</label>
              <select id="scanBatchSizeSelect" class="batch-size-select" title="Keys requested per SCAN batch (applies to the next Load More)">
                ${kn.map(t=>`<option value="${t}"${t===50?" selected":""}>${t.toLocaleString()}</option>`).join("")}
              </select>
              <button type="button" class="btn btn-primary btn-toolbar-action" id="btnScanNext" style="font-size: 0.75rem; padding: 0.32rem 0.75rem;">
                <i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i>
                <span>Load More</span>
              </button>
            </div>

            <div class="actions-right">
              <button type="button" class="btn btn-secondary btn-toolbar-action" id="btnOpenExportModal" title="Export matched key names (CSV/TXT)" style="font-size: 0.75rem; padding: 0.32rem 0.65rem;">
                <i data-lucide="download" style="width: 12px; height: 12px;"></i>
                <span>Export</span>
              </button>
              <button type="button" class="btn btn-secondary btn-toolbar-action btn-danger-action" id="btnOpenBulkDeleteModal" title="Bulk delete matched keys (Dry-run & confirmation required)" style="font-size: 0.75rem; padding: 0.32rem 0.65rem;">
                <i data-lucide="trash-2" style="width: 12px; height: 12px;"></i>
                <span>Bulk Delete</span>
              </button>
            </div>
          </div>

          <!-- Key Browser Data Grid Card -->
          <div class="grid-card" id="gridCard">
            <div id="emptyWorkspaceState" class="empty-workspace-state" style="display: none;">
              <div class="empty-state-icon">
                <i data-lucide="database" style="width: 36px; height: 36px; color: var(--accent-primary);"></i>
              </div>
              <h3>No Redis Cluster Connected</h3>
              <p>Select a cluster from the left panel to review its configuration and connect.</p>
              <div style="margin-top: 1rem;">
                <button type="button" class="btn btn-secondary" id="btnConnectFirstAvailable" style="font-size: 0.8rem;">
                  <i data-lucide="server" style="width: 14px; height: 14px;"></i>
                  View Available Clusters
                </button>
              </div>
            </div>
            <div id="gridViewerContainer" style="width: 100%; height: 100%;"></div>
          </div>
        </div>
      </main>
    </div>

    <!-- Cluster Configuration & Connect Modal -->
    <div class="modal-backdrop" id="clusterConfigModal">
      <div class="config-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem; min-width: 0;">
            <i data-lucide="server" style="color: var(--accent-primary); width: 20px; height: 20px; flex-shrink: 0;"></i>
            <div>
              <h3 class="modal-title" id="cfgModalTitle">Cluster Configuration</h3>
              <div style="font-size: 0.72rem; color: var(--text-muted);" id="cfgModalSubtitle">Review configuration before connecting</div>
            </div>
          </div>
          <button type="button" class="btn-icon" id="btnCloseConfigModal">
            <i data-lucide="x"></i>
          </button>
        </div>

        <div class="modal-body" id="cfgModalBody">
          <!-- Populated dynamically -->
        </div>

        <div class="modal-footer" id="cfgModalFooter">
          <!-- Populated dynamically -->
        </div>
      </div>
    </div>

    <!-- Connection Modal -->
    <div class="modal-backdrop" id="connectionModal">
      <div class="modal-card">
        <div class="modal-header">
          <h3 class="modal-title" id="connectionModalTitle">
            <i data-lucide="database" style="color: var(--accent-primary);"></i>
            Add Redis Connection
          </h3>
          <button type="button" class="btn-icon" id="btnCloseModal">
            <i data-lucide="x"></i>
          </button>
        </div>

        <form id="connectionForm">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label" for="connName">Connection Name *</label>
              <input class="form-input" type="text" id="connName" name="name" placeholder="e.g. Staging Cluster, Local Redis" required value="New Connection">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="connEnv">Environment *</label>
                <select class="form-input" id="connEnv" name="env">
                  <option value="LOCAL">LOCAL</option>
                  <option value="DEV" selected>DEV</option>
                  <option value="UAT">UAT</option>
                  <option value="PROD">PROD</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="connTypeSelect">Connection Type</label>
                <select class="form-input" id="connTypeSelect" name="conn_type">
                  <option value="standalone" selected>Standalone Redis</option>
                  <option value="cluster">Redis Cluster (Multi-Node)</option>
                  <option value="sentinel">Redis Sentinel (HA)</option>
                </select>
              </div>
            </div>

            <div class="form-row" id="connHostPortRow">
              <div class="form-group">
                <label class="form-label" for="connHost" id="connHostLabel">Host *</label>
                <input class="form-input" type="text" id="connHost" name="host" placeholder="localhost" required value="localhost">
              </div>
              <div class="form-group">
                <label class="form-label" for="connPort" id="connPortLabel">Port *</label>
                <input class="form-input" type="number" id="connPort" name="port" placeholder="6379" required value="6379">
              </div>
            </div>

            <!-- Cluster Multi-Node Builder & Auto-Discovery Panel -->
            <div class="form-group" id="clusterNodesGroup" style="display: none;">
              <div class="cluster-nodes-panel">
                <div class="cluster-discover-header">
                  <div style="display: flex; align-items: center; gap: 0.4rem;">
                    <i data-lucide="network" style="width: 15px; height: 15px; color: #a855f7;"></i>
                    <strong style="font-size: 0.8rem; color: var(--text-primary);">Cluster Nodes & Discovery</strong>
                    <span id="clusterNodeCountBadge" class="cluster-node-count-badge">0 configured</span>
                  </div>
                  <button type="button" class="cluster-discover-btn" id="btnAutoDiscoverCluster" title="Connect to the seed node above to automatically discover all cluster nodes">
                    <i data-lucide="sparkles" style="width: 13px; height: 13px;"></i>
                    <span>Auto-Discover Nodes</span>
                  </button>
                </div>

                <div id="clusterDiscoveryStatus" class="cluster-discovery-status" style="display: none;"></div>

                <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.35rem;">
                  Configured seed nodes for high-availability cluster discovery:
                </div>

                <div id="clusterNodesList" class="cluster-nodes-list"></div>

                <div class="cluster-add-node-bar">
                  <input class="form-input" type="text" id="inputCustomClusterNode" placeholder="Add node e.g. 127.0.0.1:7001" style="font-size: 0.78rem; padding: 0.35rem 0.6rem;">
                  <button type="button" class="btn btn-secondary" id="btnAddCustomClusterNode" style="padding: 0.35rem 0.75rem; font-size: 0.78rem; white-space: nowrap;">
                    <i data-lucide="plus" style="width: 13px; height: 13px;"></i> Add Node
                  </button>
                </div>
              </div>
            </div>

            <div class="form-row" id="connDbRow">
              <div class="form-group" id="connDbGroup">
                <label class="form-label" for="connDb">Database Index</label>
                <input class="form-input" type="number" id="connDb" name="db" min="0" max="15" value="0">
              </div>
              <div class="form-group">
                <label class="form-label" for="connUsername">Username</label>
                <input class="form-input" type="text" id="connUsername" name="username" placeholder="Optional (Redis ACL)">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="connPassword">Password</label>
              <input class="form-input" type="password" id="connPassword" name="password" placeholder="Leave empty if none">
            </div>

            <div style="display: flex; gap: 1.5rem; margin-top: 0.25rem; flex-wrap: wrap;">
              <label class="form-checkbox-group">
                <input type="checkbox" id="connTls" name="use_tls">
                <span>Use TLS/SSL</span>
              </label>
              <label class="form-checkbox-group">
                <input type="checkbox" id="connAutoActivate" name="auto_activate" checked>
                <span>Activate on save</span>
              </label>
              <label class="form-checkbox-group" title="Locks all mutating operations (delete, TTL, client kill, slowlog reset). Automatically enabled for PROD.">
                <input type="checkbox" id="connReadOnly" name="read_only">
                <span style="display: inline-flex; align-items: center; gap: 4px;">Read-Only Mode 🔒</span>
              </label>
            </div>

            <div id="testResultBox" class="test-result-box"></div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="btnTestConnModal">
              <i data-lucide="zap"></i>
              Test Connection
            </button>
            <div style="display: flex; gap: 0.5rem;">
              <button type="button" class="btn btn-secondary" id="btnCancelModal">Cancel</button>
              <button type="submit" class="btn btn-primary" id="btnSaveConn">Save Connection</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Cluster Topology & Node Details Modal -->
    <div class="modal-backdrop" id="clusterTopologyModal">
      <div class="topology-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i data-lucide="layers" style="width: 20px; height: 20px; color: var(--accent-primary);"></i>
            <h3 class="modal-title">Cluster Topology & Nodes</h3>
            <span class="badge-env badge-env-dev" id="topologyEnvBadge">DEV</span>
            <span class="badge-db" id="topologyNodesCountBadge">0 Nodes</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary" id="btnRefreshTopologyModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              Refresh
            </button>
            <button type="button" class="btn-icon" id="btnCloseTopologyModal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <div class="topology-stats-grid" id="topologyStatsGrid">
          <!-- Rendered dynamically: State, Masters, Replicas, Slots, Epoch -->
        </div>

        <div style="padding: 0.75rem 1.5rem; background: rgba(0,0,0,0.15); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
          <div class="search-group" style="flex: 1; min-width: 260px; max-width: 450px;">
            <i data-lucide="search" class="search-icon" style="width: 14px; height: 14px;"></i>
            <input type="text" id="topologySearchInput" class="search-input" placeholder="Filter nodes by IP, port, node ID, or slot..." style="padding: 0.45rem 0.75rem 0.45rem 2rem; font-size: 0.8rem;">
          </div>
          <div class="type-filter-group" id="topologyRoleFilter">
            <button type="button" class="type-tab active" data-role="all">All Nodes</button>
            <button type="button" class="type-tab" data-role="master">Masters</button>
            <button type="button" class="type-tab" data-role="replica">Replicas</button>
          </div>
        </div>

        <div style="flex: 1; overflow-y: auto; padding: 0.75rem 1.25rem;" id="topologyTableContainer">
          <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Fetching cluster nodes...</div>
        </div>
      </div>
    </div>

    <!-- Phase 2: Key Inspector Detail Modal -->
    <div class="modal-backdrop" id="keyDetailModal">
      <div class="detail-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem; min-width: 0;">
            <i data-lucide="database" style="color: var(--accent-primary); flex-shrink: 0;"></i>
            <span class="modal-title" id="detailKeyTitle" style="font-family: var(--font-mono); font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Key Details</span>
            <button type="button" class="btn-icon" id="btnCopyKeyName" title="Copy key name">
              <i data-lucide="copy" style="width: 14px; height: 14px;"></i>
            </button>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary" id="btnDownloadKeyValue" title="Download the full value of this key" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="download" style="width: 13px; height: 13px;"></i>
              Download Value
            </button>
            <button type="button" class="btn btn-danger" id="btnDeleteKeyFromDetail" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
              Delete Key
            </button>
            <button type="button" class="btn-icon" id="btnCloseDetailModal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <div class="detail-header-meta" id="detailHeaderMeta">
          <!-- Populated dynamically -->
        </div>

        <div class="detail-body-content" id="detailBodyContent">
          <!-- Populated dynamically -->
        </div>
      </div>
    </div>

    <!-- Safe Delete Confirmation Modal (Requires typing CONFIRM) -->
    <div class="modal-backdrop" id="deleteKeyConfirmModal">
      <div class="danger-confirm-card">
        <div class="danger-header">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700;">
            <i data-lucide="alert-circle" style="width: 20px; height: 20px;"></i>
            <span>Confirm Key Deletion</span>
          </div>
          <button type="button" class="btn-icon" id="btnCloseDeleteConfirmModal" style="color: #fca5a5;">
            <i data-lucide="x"></i>
          </button>
        </div>

        <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.85rem;">
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
            This operation is <strong style="color: #f87171;">irreversible</strong>. The key and all its associated data will be immediately removed from Redis:
          </p>

          <div class="key-delete-target-badge" id="deleteKeyTargetName">key:name</div>

          <div style="margin-top: 0.25rem;">
            <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 600; color: var(--text-muted); letter-spacing: 0.05em;">
              Type <span style="color: var(--accent-danger); font-family: var(--font-mono);">CONFIRM</span> to enable deletion:
            </label>
            <input type="text" id="inputConfirmDelete" class="confirm-input-field" placeholder="Type CONFIRM here" autocomplete="off">
          </div>
        </div>

        <div style="padding: 1rem 1.5rem; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(239, 68, 68, 0.25); display: flex; justify-content: flex-end; gap: 0.6rem;">
          <button type="button" class="btn btn-secondary" id="btnCancelDeleteConfirm">Cancel</button>
          <button type="button" class="btn-danger-confirm" id="btnSubmitDeleteKey" disabled>
            Delete Permanently
          </button>
        </div>
      </div>
    </div>

    <!-- Keyspace by Node Modal -->
    <div class="modal-backdrop" id="keyspaceNodesModal">
      <div class="clients-modal-card" style="max-width: 820px;">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i data-lucide="database" style="width: 20px; height: 20px; color: var(--accent-primary);"></i>
            <h3 class="modal-title">Keyspace by Node</h3>
            <span class="badge-db" id="keyspaceTotalBadge">0 keys</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary" id="btnKeyspaceOpenTopology" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="layers" style="width: 13px; height: 13px;"></i>
              Topology
            </button>
            <button type="button" class="btn btn-secondary" id="btnRefreshKeyspaceModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              Refresh
            </button>
            <button type="button" class="btn-icon" id="btnCloseKeyspaceModal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>
        <div style="flex: 1; overflow-y: auto; padding: 0.75rem 1.25rem;" id="keyspaceNodesContainer">
          <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Fetching node key counts...</div>
        </div>
      </div>
    </div>

    <!-- Connected Clients Modal -->
    <div class="modal-backdrop" id="clientsListModal">
      <div class="clients-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i data-lucide="users" style="width: 20px; height: 20px; color: var(--accent-primary);"></i>
            <h3 class="modal-title">Connected Clients</h3>
            <span class="badge-db" id="clientsCountBadge" style="margin-left: 4px;">0</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary" id="btnRefreshClientsModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              Refresh
            </button>
            <button type="button" class="btn-icon" id="btnCloseClientsModal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <div style="padding: 0.85rem 1.5rem; background: rgba(0,0,0,0.2); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
          <div class="search-group" style="flex: 1; max-width: 450px;">
            <i data-lucide="search" class="search-icon" style="width: 14px; height: 14px;"></i>
            <input type="text" id="clientsSearchInput" class="search-input" placeholder="Search by IP, port, client name, user, or cmd..." style="padding: 0.45rem 0.75rem 0.45rem 2rem; font-size: 0.8rem;">
          </div>
          <div id="clientsQuickStats" style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
            Loading...
          </div>
        </div>

        <div style="flex: 1; overflow-y: auto; padding: 0.75rem 1.25rem;" id="clientsTableContainer">
          <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Fetching connected clients...</div>
        </div>
      </div>
    </div>

    <!-- Real-Time Slowlog & Latency Profiler Modal -->
    <div class="modal-backdrop" id="slowlogModal">
      <div class="slowlog-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <i data-lucide="activity" style="width: 20px; height: 20px; color: #38bdf8;"></i>
            <h3 class="modal-title">Real-Time Slowlog & Latency Profiler</h3>
            <span class="badge-db" id="slowlogCountBadge">0</span>
            <span class="badge-duration badge-duration-warning" id="slowlogThresholdBadge" style="font-size: 0.7rem; font-weight: 500;">
              Threshold: &gt; 10ms
            </span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary" id="btnRefreshSlowlogModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              Refresh
            </button>
            <button type="button" class="btn btn-danger" id="btnClearSlowlogModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
              Reset Slowlog
            </button>
            <button type="button" class="btn-icon" id="btnCloseSlowlogModal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <div style="padding: 0.75rem 1.5rem; background: rgba(0,0,0,0.2); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
          <div class="search-group" style="flex: 1; min-width: 260px; max-width: 420px;">
            <i data-lucide="search" class="search-icon" style="width: 14px; height: 14px;"></i>
            <input type="text" id="slowlogSearchInput" class="search-input" placeholder="Search by command, arguments, or client IP..." style="padding: 0.45rem 0.75rem 0.45rem 2rem; font-size: 0.8rem;">
          </div>
          <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Min Latency:</span>
            <button type="button" class="env-pill-btn slowlog-filter-btn active" data-min-duration="0">All</button>
            <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="1">&gt; 1ms</button>
            <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="5">&gt; 5ms</button>
            <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="10">&gt; 10ms</button>
            <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="50">&gt; 50ms</button>
            <div id="slowlogNodeFilterContainer" style="display: inline-flex; align-items: center; margin-left: 0.5rem;"></div>
          </div>
        </div>

        <div style="flex: 1; overflow-y: auto; padding: 0.75rem 1.25rem;" id="slowlogTableContainer">
          <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Loading slowlog records...</div>
        </div>

        <div style="padding: 0.6rem 1.25rem; background: rgba(15,23,42,0.6); border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted);">
          <span><i data-lucide="alert-circle" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Slowlog only measures command execution time on Redis CPU, excluding network I/O latency.</span>
          <span id="slowlogFooterStats">Buffer size: 128</span>
        </div>
      </div>
    </div>

    <!-- Memory Analysis & BigKeys Profiler Modal -->
    <div class="modal-backdrop" id="memoryModal">
      <div class="memory-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <i data-lucide="pie-chart" style="width: 20px; height: 20px; color: #a78bfa;"></i>
            <div>
              <h3 class="modal-title" style="margin: 0; line-height: 1.2;">Memory Analysis & BigKeys Profiler</h3>
              <p style="margin: 2px 0 0 0; font-size: 0.72rem; color: var(--text-secondary);">Real-time memory diagnostics, data type allocation, and safe key profiling.</p>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary" id="btnRefreshMemoryModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              Refresh Overview
            </button>
            <button type="button" class="btn-icon" id="btnCloseMemoryModal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <div style="flex: 1; overflow-y: auto; padding: 1.25rem;" id="memoryModalBody">
          <!-- Live High-Level Overview Grid -->
          <div id="memoryOverviewContainer">
            <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Fetching memory metrics...</div>
          </div>

          <!-- Profiling Section (Safeguarded / On-Demand) -->
          <div id="memoryProfilingContainer" style="margin-top: 1rem;">
            <!-- Dynamically populated: either safeguard notice, loading state, or results -->
          </div>
        </div>
      </div>
    </div>

    <!-- Export Keys Modal -->
    <div class="modal-backdrop" id="exportKeysModal">
      <div class="config-modal-card" style="max-width: 480px;">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i data-lucide="download" style="color: var(--accent-primary); width: 20px; height: 20px;"></i>
            <div>
              <h3 class="modal-title">Export Matched Keys</h3>
              <div style="font-size: 0.72rem; color: var(--text-muted);">Export key names, data types, and TTLs</div>
            </div>
          </div>
          <button type="button" class="btn-icon" id="btnCloseExportModal">
            <i data-lucide="x"></i>
          </button>
        </div>
        <div style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem;">
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.75rem 1rem; font-size: 0.8rem;">
            <div style="display: flex; justify-content: space-between;">
              <span>Pattern:</span>
              <code id="exportPatternDisplay" style="color: var(--accent-primary); font-weight: 600;">*</code>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 0.25rem;">
              <span>Type Filter:</span>
              <span id="exportTypeDisplay" style="font-weight: 500;">All Types</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 0.25rem;">
              <span>Loaded in Browser:</span>
              <strong id="exportLoadedCount">0 keys</strong>
            </div>
          </div>

          <div>
            <label style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.4rem; display: block;">Export Format</label>
            <div style="display: flex; gap: 1rem;">
              <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; cursor: pointer;">
                <input type="radio" name="exportFormatRadio" value="csv" checked>
                <span>CSV (Key, Type, TTL)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; cursor: pointer;">
                <input type="radio" name="exportFormatRadio" value="txt">
                <span>TXT (Keys only)</span>
              </label>
            </div>
          </div>

          <div>
            <label style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.4rem; display: block;">Export Scope</label>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; cursor: pointer;">
                <input type="radio" name="exportScopeRadio" value="loaded" checked>
                <span>Currently Loaded Keys (<strong id="exportScopeLoadedText">0</strong>)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; cursor: pointer;">
                <input type="radio" name="exportScopeRadio" value="all">
                <span>All Matched Keys in Database (Scans Redis)</span>
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 0.85rem 1.25rem; background: rgba(0,0,0,0.25); border-top: 1px solid var(--border-color); display: flex; justify-content: flex-end; gap: 0.6rem;">
          <button type="button" class="btn btn-secondary" id="btnCancelExportModal">Cancel</button>
          <button type="button" class="btn btn-primary" id="btnExecuteExport" style="display: flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="download" style="width: 14px; height: 14px;"></i>
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Bulk Delete Modal -->
    <div class="modal-backdrop" id="bulkDeleteModal">
      <div class="config-modal-card" style="max-width: 520px; border-top: 3px solid var(--accent-danger);">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i data-lucide="trash-2" style="color: var(--accent-danger); width: 20px; height: 20px;"></i>
            <div>
              <h3 class="modal-title" style="color: var(--accent-danger);">Bulk Delete (UNLINK)</h3>
              <div style="font-size: 0.72rem; color: var(--text-muted);">Non-blocking key deletion in batches per node</div>
            </div>
          </div>
          <button type="button" class="btn-icon" id="btnCloseBulkDeleteModal">
            <i data-lucide="x"></i>
          </button>
        </div>

        <div style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem;">
          <div id="bulkDeleteProdBanner" style="display: none; background: rgba(239, 68, 68, 0.15); border: 1px solid var(--accent-danger); border-radius: 6px; padding: 0.75rem; color: #fca5a5; font-size: 0.8rem;">
            <div style="font-weight: 700; display: flex; align-items: center; gap: 0.35rem; color: var(--accent-danger);">
              <i data-lucide="alert-triangle" style="width: 15px; height: 15px;"></i>
              CRITICAL: PRODUCTION ENVIRONMENT
            </div>
            <div style="margin-top: 0.25rem; font-size: 0.75rem;">
              You are performing a destructive bulk deletion on a <strong>PROD</strong> connection. Extra confirmation is required.
            </div>
          </div>

          <div id="bulkDeleteDryRunStatus" style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 1.5rem 0;">
            <i data-lucide="refresh-cw" class="spin" style="width: 18px; height: 18px; margin-bottom: 0.4rem; display: inline-block;"></i>
            <div>Calculating dry-run count across Redis cluster...</div>
          </div>

          <div id="bulkDeleteDetails" style="display: none; flex-direction: column; gap: 0.85rem;">
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.75rem 1rem; font-size: 0.8rem;">
              <div style="display: flex; justify-content: space-between;">
                <span>Pattern:</span>
                <code id="bdPatternDisplay" style="font-weight: 600; color: var(--accent-danger);">*</code>
              </div>
              <div style="display: flex; justify-content: space-between; margin-top: 0.25rem;">
                <span>Type Filter:</span>
                <span id="bdTypeDisplay" style="font-weight: 500;">All Types</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-top: 0.25rem; font-weight: 700; font-size: 0.85rem;">
                <span>Total Matched Keys:</span>
                <span id="bdCountDisplay" style="color: var(--accent-danger);">0</span>
              </div>
              <div id="bdPerNodeBreakdown" style="margin-top: 0.5rem; font-size: 0.73rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 0.35rem;"></div>
            </div>

            <!-- Sample keys -->
            <div id="bdSampleKeysSection" style="font-size: 0.75rem;">
              <div style="color: var(--text-muted); margin-bottom: 0.25rem;">Sample keys to be unlinked:</div>
              <div id="bdSampleKeysList" style="font-family: var(--font-mono); font-size: 0.72rem; background: rgba(0,0,0,0.25); padding: 0.5rem; border-radius: 4px; max-height: 80px; overflow-y: auto;"></div>
            </div>

            <!-- Confirmation Input 1: Exact count -->
            <div>
              <label style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); display: block; margin-bottom: 0.25rem;">
                Type <strong id="bdRequiredCountText" style="color: var(--accent-danger); font-family: var(--font-mono);">0</strong> to confirm count:
              </label>
              <input type="text" id="bdCountConfirmInput" class="confirm-input-field" placeholder="Type key count here..." autocomplete="off">
            </div>

            <!-- Confirmation Input 2: PROD environment only -->
            <div id="bdProdConfirmGroup" style="display: none;">
              <label style="font-size: 0.78rem; font-weight: 600; color: var(--accent-danger); display: block; margin-bottom: 0.25rem;">
                Type <strong>PROD</strong> to confirm production deletion:
              </label>
              <input type="text" id="bdProdConfirmInput" class="confirm-input-field" placeholder="Type PROD here..." autocomplete="off" style="border-color: var(--accent-danger);">
            </div>
          </div>
        </div>

        <div style="padding: 0.85rem 1.25rem; background: rgba(0,0,0,0.25); border-top: 1px solid var(--border-color); display: flex; justify-content: flex-end; gap: 0.6rem;">
          <button type="button" class="btn btn-secondary" id="btnCancelBulkDelete">Cancel</button>
          <button type="button" class="btn-danger-confirm" id="btnConfirmBulkDelete" disabled>
            <i data-lucide="trash-2" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i>
            Unlink Keys
          </button>
        </div>
      </div>
    </div>

    <!-- Redis Benchmark & Latency Profiler Studio Modal -->
    <div class="modal-backdrop" id="benchmarkModal">
      <div class="benchmark-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <i data-lucide="zap" style="width: 22px; height: 22px; color: #f59e0b;"></i>
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <h3 class="modal-title">Benchmark & Latency Studio</h3>
                <span id="benchmarkReadOnlyBadge" class="badge-db" style="display: none; background: rgba(239, 68, 68, 0.2); color: #fca5a5; border: 1px solid rgba(239, 68, 68, 0.4);">
                  <i data-lucide="lock" style="width: 11px; height: 11px; vertical-align: middle;"></i> READ ONLY
                </span>
              </div>
              <p class="modal-subtitle" id="benchmarkTargetSubtitle">
                Target: Connecting... | Ephemeral Namespace: __ri_bench__
              </p>
            </div>
          </div>
          <button type="button" class="btn-icon" id="btnCloseBenchmarkModal" title="Close Studio">
            <i data-lucide="x" style="width: 18px; height: 18px;"></i>
          </button>
        </div>

        <div class="benchmark-modal-body">
          <!-- Segmented Navigation Tabs -->
          <div class="benchmark-nav-tabs">
            <button type="button" class="benchmark-tab-btn active" data-tab="probe" id="tabBtnProbe">
              <i data-lucide="activity" style="width: 14px; height: 14px;"></i>
              <span>1. Network & RTT Probe</span>
            </button>
            <button type="button" class="benchmark-tab-btn" data-tab="commands" id="tabBtnCommands">
              <i data-lucide="zap" style="width: 14px; height: 14px;"></i>
              <span>2. Core Command Suite</span>
            </button>
            <button type="button" class="benchmark-tab-btn" data-tab="lua" id="tabBtnLua">
              <i data-lucide="code" style="width: 14px; height: 14px;"></i>
              <span>3. Lua Script Profiler</span>
            </button>
            <button type="button" class="benchmark-tab-btn" data-tab="cluster" id="tabBtnCluster">
              <i data-lucide="network" style="width: 14px; height: 14px;"></i>
              <span>4. Cluster Matrix</span>
            </button>
          </div>

          <!-- Tab 1: Probe Pane -->
          <div class="benchmark-content-pane" id="benchmarkPaneProbe">
            <div class="benchmark-controls-card">
              <div class="benchmark-controls-row">
                <div class="benchmark-control-group">
                  <span class="benchmark-control-label">Probe Count:</span>
                  <select class="benchmark-select" id="selProbeCount">
                    <option value="50">50 Probes (Fast)</option>
                    <option value="100" selected>100 Probes (Recommended)</option>
                    <option value="250">250 Probes (High Precision)</option>
                    <option value="500">500 Probes (Deep Sample)</option>
                  </select>
                </div>
                <button type="button" class="btn btn-primary" id="btnRunProbe" style="padding: 0.4rem 0.9rem; font-size: 0.8rem; font-weight: 600;">
                  <i data-lucide="play" style="width: 14px; height: 14px;"></i>
                  <span>Run Latency Probe</span>
                </button>
                <div style="font-size: 0.74rem; color: var(--text-muted); margin-left: auto;">
                  Isolates client network RTT from server CPU execution using rapid PING sampling.
                </div>
              </div>
            </div>
            <div id="benchmarkProbeResults" style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem; font-size: 0.85rem;">
                Click <strong>Run Latency Probe</strong> to analyze network round-trip time vs Redis server processing delay.
              </div>
            </div>
          </div>

          <!-- Tab 2: Commands Pane -->
          <div class="benchmark-content-pane" id="benchmarkPaneCommands" style="display: none;">
            <div class="benchmark-controls-card">
              <div class="benchmark-controls-row">
                <div class="benchmark-control-group">
                  <span class="benchmark-control-label">Workload Preset:</span>
                  <select class="benchmark-select" id="selCommandPreset">
                    <option value="read" selected>Read-Heavy (100% GET)</option>
                    <option value="write" id="optCommandPresetWrite">Write / Set (100% SET)</option>
                    <option value="balanced">Balanced Mix (80% GET, 20% SET)</option>
                    <option value="structures" id="optCommandPresetStruct">Data Structures (HSET / HGET)</option>
                  </select>
                </div>
                <div class="benchmark-control-group">
                  <span class="benchmark-control-label">Requests:</span>
                  <select class="benchmark-select" id="selCommandRequests">
                    <option value="500">500 ops</option>
                    <option value="1000" selected>1,000 ops</option>
                    <option value="2500">2,500 ops</option>
                    <option value="5000">5,000 ops</option>
                  </select>
                </div>
                <div class="benchmark-control-group">
                  <span class="benchmark-control-label">Concurrency:</span>
                  <select class="benchmark-select" id="selCommandConcurrency">
                    <option value="1">1 Worker (Sequential)</option>
                    <option value="5" selected>5 Workers (Balanced)</option>
                    <option value="10">10 Workers (Concurrent)</option>
                    <option value="20">20 Workers (High Load)</option>
                  </select>
                </div>
                <div class="benchmark-control-group">
                  <span class="benchmark-control-label">Pipeline:</span>
                  <select class="benchmark-select" id="selCommandPipeline">
                    <option value="1" selected>1 (No Pipeline)</option>
                    <option value="5">5 Batch</option>
                    <option value="10">10 Batch</option>
                  </select>
                </div>
                <button type="button" class="btn btn-primary" id="btnRunCommandBench" style="padding: 0.4rem 0.9rem; font-size: 0.8rem; font-weight: 600;">
                  <i data-lucide="play" style="width: 14px; height: 14px;"></i>
                  <span>Start Benchmark</span>
                </button>
              </div>
              <div style="font-size: 0.73rem; color: #6ee7b7; display: flex; align-items: center; gap: 0.35rem;">
                <i data-lucide="shield-check" style="width: 13px; height: 13px;"></i>
                Safe & Ephemeral: Benchmark keys are generated in isolated prefix <code>__ri_bench__:*</code> and automatically cleaned up via <code>UNLINK</code> on completion.
              </div>
            </div>
            <div id="benchmarkCommandResults" style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem; font-size: 0.85rem;">
                Configure parameters and click <strong>Start Benchmark</strong> to evaluate synthetic command throughput & latency distribution.
              </div>
            </div>
          </div>

          <!-- Tab 3: Lua Script Pane -->
          <div class="benchmark-content-pane" id="benchmarkPaneLua" style="display: none;">
            <div class="benchmark-controls-card">
              <div class="benchmark-controls-row">
                <div class="benchmark-control-group">
                  <span class="benchmark-control-label">Sample Preset:</span>
                  <select class="benchmark-select" id="selLuaPreset">
                    <option value="counter" selected>Atomic Counter & Dynamic TTL (INCR + EXPIRE)</option>
                    <option value="hash">Batch Hash Field Lookup (Loop & Filter)</option>
                    <option value="lock">Distributed Lock Simulation (SET NX PX)</option>
                    <option value="custom">Custom Lua Script...</option>
                  </select>
                </div>
                <div class="benchmark-control-group">
                  <span class="benchmark-control-label">Mode:</span>
                  <select class="benchmark-select" id="selLuaMode">
                    <option value="profile" selected>🔍 Single Run Profiler (Deep Inspect)</option>
                    <option value="benchmark">⚡ Concurrency Benchmark (N Runs)</option>
                  </select>
                </div>
                <div class="benchmark-control-group" id="groupLuaBenchmarkControls" style="display: none;">
                  <span class="benchmark-control-label">Iterations:</span>
                  <select class="benchmark-select" id="selLuaIterations">
                    <option value="50">50 runs</option>
                    <option value="100" selected>100 runs</option>
                    <option value="250">250 runs</option>
                    <option value="500">500 runs</option>
                  </select>
                </div>
                <button type="button" class="btn btn-primary" id="btnRunLuaBench" style="padding: 0.4rem 0.9rem; font-size: 0.8rem; font-weight: 600;">
                  <i data-lucide="play" style="width: 14px; height: 14px;"></i>
                  <span>Execute & Profile</span>
                </button>
              </div>
            </div>

            <div class="lua-editor-wrapper">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.74rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase;">Lua Script (Executes on Redis Server)</span>
                <span style="font-size: 0.72rem; color: #38bdf8; font-family: var(--font-mono);">Preloaded via SCRIPT LOAD + EVALSHA</span>
              </div>
              <textarea id="txtLuaScript" class="lua-textarea" spellcheck="false"></textarea>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                <div>
                  <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">KEYS (comma-separated)</label>
                  <input type="text" id="txtLuaKeys" class="benchmark-input" style="width: 100%;" placeholder="e.g. key1, key2" value="bench_counter">
                </div>
                <div>
                  <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">ARGV (comma-separated)</label>
                  <input type="text" id="txtLuaArgs" class="benchmark-input" style="width: 100%;" placeholder="e.g. 60, val1" value="60">
                </div>
              </div>
            </div>

            <div id="benchmarkLuaResults" style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="text-align: center; color: var(--text-muted); padding: 2rem 1rem; font-size: 0.85rem;">
                Click <strong>Execute & Profile</strong> to measure the script's exact server microsecond execution time and check for atomicity bottlenecks.
              </div>
            </div>
          </div>

          <!-- Tab 4: Cluster Matrix Pane -->
          <div class="benchmark-content-pane" id="benchmarkPaneCluster" style="display: none;">
            <div class="benchmark-controls-card">
              <div class="benchmark-controls-row">
                <button type="button" class="btn btn-primary" id="btnRunClusterMatrix" style="padding: 0.4rem 0.9rem; font-size: 0.8rem; font-weight: 600;">
                  <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
                  <span>Evaluate Cluster Latency Matrix</span>
                </button>
                <div style="font-size: 0.74rem; color: var(--text-muted); margin-left: auto;">
                  Probes each cluster master node individually to spot uneven slot distribution or CPU-throttled hot shards.
                </div>
              </div>
            </div>
            <div id="benchmarkClusterResults" style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem; font-size: 0.85rem;">
                Click <strong>Evaluate Cluster Latency Matrix</strong> to probe all primary master nodes side-by-side.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `)}async function N(){de=!1,Ce++;const e=Ce;Q=0,ee=!1,Se=0,z=[],Ee.clear(),_e=!1,q.clear();const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="none"),n&&(n.style.display="block"),Sn(),await Cn(e)}function ce(){const e=document.getElementById("btnToggleAutoRefresh"),t=document.getElementById("autoRefreshStatusText"),n=document.getElementById("autoRefreshIntervalSelect");if(!(!e||!t))if(G){e.classList.add("active");const a=j>=60?`${Math.floor(j/60)}m ${j%60}s`:`${j}s`;e.title=`Auto-refresh active (Pattern: "${D||"*"}"). Refreshing in ${a}. Click to pause.`,t.textContent=`Auto: ${a}`,n&&(n.value=String(H))}else{e.classList.remove("active");const a=H>=60?`${Math.floor(H/60)}m`:`${H}s`;e.title=`Click to watch keys matching pattern "${D||"*"}" every ${a}`,t.textContent="Auto: Off",n&&(n.value=String(H))}}function Me(){j=H,ce()}function En(){G=!0,j=H,ce(),he&&clearInterval(he),he=setInterval(async()=>{if(!G)return;const e=document.querySelector(".modal-backdrop.active");document.hidden||e||(j--,j<=0?(j=H,ce(),M.some(n=>n.is_connected)&&!de&&await N()):ce())},1e3)}function Ka(){G=!1,he&&(clearInterval(he),he=null),j=H,ce()}function ja(){G?Ka():En()}function ut(e){if(e==null)return!0;const t=String(e).trim();if(t===""||t==="0")return!0;if(t.startsWith("{"))try{return Object.values(JSON.parse(t)).every(n=>Number(n)===0)}catch{return!1}return!1}function Ua(e){const t=String(e??"").trim();if(t.startsWith("{"))try{const n=Object.values(JSON.parse(t));return`${n.filter(o=>Number(o)!==0).length} of ${n.length} nodes still scanning`}catch{return"more keys available"}return"more keys available"}function Va(){return!!($&&$.is_cluster)||String(Q??"").trim().startsWith("{")}async function Cn(e=null){if(de||ee)return;const t=e!==null?e:Ce;de=!0,dn();try{const n=`/api/keys?pattern=${encodeURIComponent(D)}&cursor=${encodeURIComponent(String(Q??"0"))}&count=${ze}${O!=="all"?`&type=${encodeURIComponent(O)}`:""}`,a=await fetch(n);if(!a.ok)throw new Error("Failed to scan keys");const o=await a.json();if(t!==Ce)return;Q=o.cursor,ee=ut(Q),mt=o.total_in_db;const r=(o.keys||[]).filter(s=>Ee.has(s.name)?!1:(Ee.add(s.name),!0)).map(s=>({key:s.name,type:s.type,ttl_seconds:s.ttl,status:s.ttl===-1?"Persistent":s.ttl===-2?"Expired":`Expires in ${s.ttl}s`}));r.length>0&&z.push(...r),Sn(),Se=Ee.size}catch(n){console.error("Scan error:",n)}finally{t===Ce&&(de=!1,dn())}}function qa(e,t="auto"){return e?t&&t!=="auto"?e.includes(t)?t:null:e.includes(":")?":":e.includes("/")?"/":e.includes(".")?".":e.includes("-")?"-":null:null}function Ga(e,t="auto"){const n={id:"__root__",name:"Root",fullPrefix:"",delimiter:"",depth:-1,folders:new Map,keys:[],totalKeyCount:0};for(const o of e){const i=o.key||"",r=qa(i,t);if(!r){n.keys.push({...o,leafName:i});continue}let c=i.split(r);if(c.length>1&&c[c.length-1]===""&&(c=c.slice(0,-1)),c.length<=1){n.keys.push({...o,leafName:i});continue}let m=n,v="";for(let E=0;E<c.length-1;E++){const x=c[E];v+=(E>0?r:"")+x;const y=v+r;m.folders.has(x)||m.folders.set(x,{id:y,name:x,fullPrefix:y,delimiter:r,depth:E,folders:new Map,keys:[],totalKeyCount:0}),m=m.folders.get(x)}const k=c[c.length-1]||"(empty)";m.keys.push({...o,leafName:k})}function a(o){let i=o.keys.length;o.keys.sort((s,c)=>(s.leafName||s.key).localeCompare(c.leafName||c.key));const r=new Map([...o.folders.entries()].sort((s,c)=>s[0].localeCompare(c[0])));o.folders=r;for(const s of o.folders.values())a(s),i+=s.totalKeyCount;o.totalKeyCount=i}return a(n),n}function Ln(e,t){if(e.name.toLowerCase().includes(t)||e.fullPrefix.toLowerCase().includes(t))return!0;for(const n of e.keys)if(n.key.toLowerCase().includes(t)||n.leafName&&n.leafName.toLowerCase().includes(t))return!0;for(const n of e.folders.values())if(Ln(n,t))return!0;return!1}function Ja(){const e=document.getElementById("gridViewerContainer");if(e){if(z.length===0){const t=!ee&&ut(Q);e.innerHTML=ee?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${d(D)}</code>".
      </div>
    `:t?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${d(D)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${d(D)}</code>" in the part of the keyspace scanned so far.<br>
        The scan is not finished — click <strong>Load More</strong> to keep scanning.
      </div>
    `;return}e.innerHTML=`
    <div style="overflow-y: auto; height: 100%; width: 100%; padding: 0.5rem;">
      <table class="data-table" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">KEY (CLICK TO VIEW)</th>
            <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">TYPE</th>
            <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">TTL (SEC)</th>
            <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">STATUS</th>
            <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: right;">ACTION</th>
          </tr>
        </thead>
        <tbody>
          ${z.map(t=>`
            <tr class="key-row" data-key="${encodeURIComponent(t.key)}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer;">
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
                <span class="btn-inspect-key" data-key="${encodeURIComponent(t.key)}">${d(t.key)}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase;">
                <span class="badge-db">${t.type}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary);">${t.ttl_seconds}</td>
              <td style="padding: 0.65rem 1rem; font-size: 0.8rem; color: ${t.ttl_seconds===-1?"var(--text-muted)":"var(--accent-warning)"};">${t.status}</td>
              <td style="padding: 0.65rem 1rem; text-align: right;" onclick="event.stopPropagation()">
                ${$?.read_only?`
                  <span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
                    <i data-lucide="lock" style="width: 13px; height: 13px;"></i>
                  </span>
                `:`
                  <button type="button" class="btn-icon danger btn-delete-key-table" data-key="${encodeURIComponent(t.key)}" title="Delete key">
                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                  </button>
                `}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `,p(),e.querySelectorAll(".key-row").forEach(t=>{t.addEventListener("click",()=>{const n=decodeURIComponent(t.getAttribute("data-key"));fe(n)})}),e.querySelectorAll(".btn-delete-key-table").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const a=decodeURIComponent(t.getAttribute("data-key"));Fe(a,()=>{N()})})})}}function re(){const e=document.getElementById("gridViewerContainer");if(!e)return;if(z.length===0){const y=!ee&&ut(Q);e.innerHTML=ee?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${d(D)}</code>".
      </div>
    `:y?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${d(D)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${d(D)}</code>" in the part of the keyspace scanned so far.<br>
        The scan is not finished — click <strong>Load More</strong> to keep scanning.
      </div>
    `;return}const t=Ga(z,te);if(!_e&&q.size===0){for(const y of t.folders.values())q.add(y.id);_e=!0}function n(y){let h=y.folders.size;for(const f of y.folders.values())h+=n(f);return h}const a=n(t),o=!!ue.trim(),i=ue.trim().toLowerCase();function r(y,h){const f=encodeURIComponent(y.key);return`
      <div class="tree-node tree-leaf key-row" data-key="${f}" style="padding-left: ${h*20+26}px;">
        <div class="tree-node-content">
          <div class="tree-key-icon">
            <i data-lucide="key" style="width: 13px; height: 13px;"></i>
          </div>
          <span class="tree-key-name btn-inspect-key" data-key="${f}" title="${d(y.key)}">
            ${d(y.leafName||y.key)}
          </span>
          <span class="badge-db" style="margin-left: 0.35rem; font-size: 0.68rem; text-transform: uppercase;">${d(y.type)}</span>
          <span class="tree-key-ttl" title="TTL in seconds">${y.ttl_seconds}s</span>
          <span class="tree-key-status" style="color: ${y.ttl_seconds===-1?"var(--text-muted)":"var(--accent-warning)"};">${d(y.status)}</span>
          <div class="tree-key-actions" onclick="event.stopPropagation()">
            ${$?.read_only?`
              <span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
                <i data-lucide="lock" style="width: 13px; height: 13px;"></i>
              </span>
            `:`
              <button type="button" class="btn-icon danger btn-delete-key-table" data-key="${f}" title="Delete key">
                <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
              </button>
            `}
          </div>
        </div>
      </div>
    `}function s(y,h){if(o&&!Ln(y,i))return"";const f=o?!0:q.has(y.id),A=encodeURIComponent(y.id);let W="";for(const F of y.folders.values())W+=s(F,h+1);for(const F of y.keys)o&&!F.key.toLowerCase().includes(i)&&!(F.leafName&&F.leafName.toLowerCase().includes(i))||(W+=r(F,h+1));return`
      <div class="tree-folder-group" data-folder-id="${A}">
        <div class="tree-node tree-folder" data-folder-id="${A}" style="padding-left: ${h*20+8}px;">
          <div class="tree-node-content">
            <button type="button" class="tree-toggle-btn" title="${f?"Collapse":"Expand"}">
              <i data-lucide="${f?"chevron-down":"chevron-right"}" style="width: 14px; height: 14px;"></i>
            </button>
            <div class="tree-folder-icon">
              <i data-lucide="${f?"folder-open":"folder"}" style="width: 15px; height: 15px;"></i>
            </div>
            <span class="tree-folder-name" title="${d(y.fullPrefix)}">
              ${d(y.name)}<span class="tree-folder-delim">${d(y.delimiter)}</span>
            </span>
            <span class="tree-count-badge" title="${y.totalKeyCount} keys in this namespace">
              ${y.totalKeyCount.toLocaleString()} ${y.totalKeyCount===1?"key":"keys"}
            </span>
            <button type="button" class="tree-filter-prefix-btn" data-prefix="${d(y.fullPrefix)}" title="Filter keys matching '${d(y.fullPrefix)}*'">
              <i data-lucide="filter" style="width: 11px; height: 11px;"></i>
              <span>Filter</span>
            </button>
          </div>
        </div>
        <div class="tree-children" style="display: ${f?"block":"none"};">
          ${W}
        </div>
      </div>
    `}let c="";if(t.keys.length>0){const y=o?t.keys.filter(h=>h.key.toLowerCase().includes(i)||h.leafName&&h.leafName.toLowerCase().includes(i)):t.keys;y.length>0&&(c=`
        <div class="tree-root-keys-section">
          <div class="tree-root-keys-header" style="padding-left: 10px;">
            <span class="tree-root-keys-title">ROOT KEYS (NO DELIMITER)</span>
            <span class="tree-count-badge">${y.length.toLocaleString()} ${y.length===1?"key":"keys"}</span>
          </div>
          <div class="tree-root-keys-list">
            ${y.map(h=>r(h,0)).join("")}
          </div>
        </div>
      `)}e.innerHTML=`
    <div class="tree-view-wrapper">
      <div class="tree-toolbar">
        <div class="tree-toolbar-left">
          <div class="tree-delimiter-control">
            <label for="treeDelimiterSelect" class="tree-control-label">Delimiter:</label>
            <select id="treeDelimiterSelect" class="tree-select" title="Grouping delimiter convention">
              <option value="auto"${te==="auto"?" selected":""}>Auto (:, /, .)</option>
              <option value=":"${te===":"?" selected":""}>: (Colon)</option>
              <option value="/"${te==="/"?" selected":""}>/ (Slash)</option>
              <option value="."${te==="."?" selected":""}>. (Dot)</option>
              <option value="-"${te==="-"?" selected":""}>- (Dash)</option>
            </select>
          </div>
          <div class="tree-summary-pill" id="treeSummaryPill">
            ${a.toLocaleString()} ${a===1?"Namespace":"Namespaces"} &bull; ${z.length.toLocaleString()} ${z.length===1?"Key":"Keys"}
          </div>
        </div>
        <div class="tree-toolbar-right">
          <div class="tree-filter-box">
            <i data-lucide="search" style="width: 12px; height: 12px; color: var(--text-muted); flex-shrink: 0;"></i>
            <input type="text" id="treeFilterInput" class="tree-filter-input" placeholder="Filter loaded tree..." value="${d(ue)}">
            ${ue?`
              <button type="button" class="btn-clear-tree-filter" id="btnClearTreeFilter" title="Clear filter">
                <i data-lucide="x" style="width: 11px; height: 11px;"></i>
              </button>
            `:""}
          </div>
          <div class="tree-btn-group">
            <button type="button" class="btn btn-secondary tree-btn" id="btnExpandAllTree" title="Expand all namespace folders">
              <i data-lucide="folder-open" style="width: 12px; height: 12px;"></i>
              <span>Expand All</span>
            </button>
            <button type="button" class="btn btn-secondary tree-btn" id="btnCollapseAllTree" title="Collapse all namespace folders">
              <i data-lucide="folder" style="width: 12px; height: 12px;"></i>
              <span>Collapse All</span>
            </button>
          </div>
        </div>
      </div>
      <div class="tree-view-body" id="treeViewBody">
        ${[...t.folders.values()].map(y=>s(y,0)).join("")}
        ${c}
      </div>
    </div>
  `,p(),e.querySelectorAll(".tree-folder").forEach(y=>{y.addEventListener("click",h=>{if(h.target.closest(".tree-filter-prefix-btn"))return;const f=decodeURIComponent(y.getAttribute("data-folder-id"));q.has(f)?q.delete(f):q.add(f),re()})}),e.querySelectorAll(".tree-filter-prefix-btn").forEach(y=>{y.addEventListener("click",h=>{h.stopPropagation();const f=y.getAttribute("data-prefix"),A=document.getElementById("keySearchInput");A&&f&&(A.value=f+"*",D=f+"*",N())})}),e.querySelectorAll(".tree-leaf").forEach(y=>{y.addEventListener("click",()=>{const h=decodeURIComponent(y.getAttribute("data-key"));fe(h)})}),e.querySelectorAll(".btn-delete-key-table").forEach(y=>{y.addEventListener("click",h=>{h.stopPropagation();const f=decodeURIComponent(y.getAttribute("data-key"));Fe(f,()=>{N()})})});const m=document.getElementById("treeDelimiterSelect");m&&m.addEventListener("change",y=>{te=y.target.value,localStorage.setItem("redis_insight_tree_delimiter",te),q.clear(),_e=!1,re()});const v=document.getElementById("btnExpandAllTree");v&&v.addEventListener("click",()=>{function y(h){for(const f of h.folders.values())q.add(f.id),y(f)}y(t),re()});const k=document.getElementById("btnCollapseAllTree");k&&k.addEventListener("click",()=>{q.clear(),re()});const E=document.getElementById("treeFilterInput");E&&E.addEventListener("input",y=>{ue=y.target.value,re();const h=document.getElementById("treeFilterInput");h&&(h.focus(),h.setSelectionRange(h.value.length,h.value.length))});const x=document.getElementById("btnClearTreeFilter");x&&x.addEventListener("click",()=>{ue="",re()})}function lt(){Le==="tree"?re():Ja()}function Sn(){lt()}function rn(){const e=document.getElementById("scanChunkLabel");e&&(e.textContent=`Safe SCAN (Chunk ${ze.toLocaleString()})`)}function dn(){const e=document.getElementById("scanStatusText"),t=document.getElementById("btnScanNext"),n=ee;e&&(e.innerHTML=`
      Loaded <strong>${Se.toLocaleString()}</strong> keys
      ${n?'<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>':`<span style="color: var(--text-muted);">(${d(Ua(Q))})</span>`}
      | ${Va()?"Cluster Total":"DB Total"}: <strong>${Number(mt||0).toLocaleString()}</strong>
    `),t&&(t.disabled=de||n,t.innerHTML=de?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':n?'<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More',p())}async function fe(e){Z=e;const t=document.getElementById("keyDetailModal"),n=document.getElementById("detailKeyTitle"),a=document.getElementById("detailHeaderMeta"),o=document.getElementById("detailBodyContent"),i=document.getElementById("btnDeleteKeyFromDetail");i&&(i.style.display=$?.read_only?"none":""),n.textContent=e,n.title=e,a.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>',o.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>',t.classList.add("active");try{let r=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(r.ok||(r=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!r.ok){let c="Key not found or could not be read";try{const m=await r.json();m&&m.detail&&(c=m.detail)}catch{}throw new Error(c)}const s=await r.json();fn=s,Wa(s),Za(s)}catch(r){a.innerHTML='<span style="color: var(--accent-danger);">Error</span>',o.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Failed to inspect key</h4>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">${d(r.message)}</p>
      </div>
    `,p()}}function Wa(e){const t=document.getElementById("detailHeaderMeta"),n=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",a=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 0.4rem;">
      <span style="color: var(--text-muted);">Type:</span>
      <span class="badge-db" style="color: var(--accent-primary); font-weight: 600;">${e.type.toUpperCase()}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 0.4rem;">
      <span style="color: var(--text-muted);">Size:</span>
      <span style="font-family: var(--font-mono);">${e.length} items / ${n}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 0.4rem;">
      <span style="color: var(--text-muted);">Encoding:</span>
      <span style="font-family: var(--font-mono);">${e.encoding}</span>
    </div>
    ${e.slot!==void 0&&e.slot!==null?`
      <div style="display: flex; align-items: center; gap: 0.35rem;" title="Cluster Hash Slot: slot ${e.slot} of 16384">
        <span style="color: var(--text-muted);">Slot:</span>
        <span class="badge-db" style="color: #c084fc; font-family: var(--font-mono); font-weight: 600;">#${e.slot}</span>
      </div>
    `:""}
    ${e.node?`
      <div style="display: flex; align-items: center; gap: 0.35rem;" title="Owning Cluster Node">
        <span style="color: var(--text-muted);">Node:</span>
        <span class="badge-db" style="color: #38bdf8; font-family: var(--font-mono); font-size: 0.72rem;">${d(e.node)}</span>
      </div>
    `:""}
    <div style="display: flex; align-items: center; gap: 0.4rem; margin-left: auto;">
      <i data-lucide="clock" style="width: 13px; height: 13px; color: ${e.ttl===-1?"var(--text-muted)":"var(--accent-warning)"};"></i>
      <span style="font-family: var(--font-mono); color: ${e.ttl===-1?"var(--text-muted)":"var(--accent-warning)"}; font-weight: 600;">${a}</span>
      ${$?.read_only?`
        <span title="Read-Only Mode: TTL modification locked" style="font-size: 0.72rem; color: var(--text-muted); display: inline-flex; align-items: center; gap: 3px; margin-left: 0.25rem;">
          <i data-lucide="lock" style="width: 11px; height: 11px;"></i>
        </span>
      `:`
        <button type="button" class="btn btn-secondary" id="btnEditTtl" style="padding: 0.2rem 0.5rem; font-size: 0.72rem; margin-left: 0.25rem;">
          Edit TTL
        </button>
      `}
    </div>
  `,p();const o=document.getElementById("btnEditTtl");o&&o.addEventListener("click",()=>{Ya(e.name,e.ttl)})}async function Ya(e,t){if($?.read_only){alert("TTL modification is disabled in Read-Only mode.");return}const n=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,t>0?t:"3600");if(n===null)return;const a=parseInt(n.trim(),10);if(isNaN(a)){alert("Please enter a valid integer.");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:a})})).ok)throw new Error("Failed to update TTL");fe(e)}catch(o){alert("Error updating TTL: "+o.message)}}function Za(e){const t=document.getElementById("detailBodyContent"),n=e.type.toLowerCase();if(n==="hash"){const a=e.fields||[],o=e.has_more_fields?Number(e.fields_cursor||0):0;X={key:e.name,cursor:o,fields:[...a],total:Number(e.length||a.length),match:null,loading:!1},t.innerHTML=`
      <div class="fields-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <input type="text" id="hashFieldSearchInput" class="field-search-input" placeholder="Filter fields (Enter: search all)" title="Filters loaded fields instantly; press Enter to search the whole hash on the server (HSCAN MATCH)">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="hashFieldCountText">${In(a.length)}</span>
        </div>
        ${$?.read_only?"":`
          <button type="button" class="btn btn-secondary" id="btnAddHashField" style="font-size: 0.75rem; padding: 0.35rem 0.65rem;">
            <i data-lucide="plus" style="width: 13px; height: 13px;"></i>
            Add Field
          </button>
        `}
      </div>

      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 35%;">Field</th>
              <th style="width: 53%;">Value</th>
              <th style="width: 12%; text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody id="hashFieldsTableBody">
            ${$n(a)}
          </tbody>
        </table>
      </div>
      <div id="hashFieldsFooter" style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);"></div>
    `,p(),Xa(e.name),yt();return}if(e.is_json||n.includes("json")){const a=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${d(a)}</div>
    `,p(),document.getElementById("btnCopyJsonValue").addEventListener("click",()=>{navigator.clipboard.writeText(a),alert("JSON copied to clipboard!")});return}if(n==="string"){t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${d(e.value||"")}</div>
    `,p(),document.getElementById("btnCopyStringValue").addEventListener("click",()=>{navigator.clipboard.writeText(e.value||""),alert("Value copied to clipboard!")});return}if(Array.isArray(e.value)){const a=n==="zset";t.innerHTML=`
      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 15%;">${a?"Score":"Index"}</th>
              <th style="width: 85%;">Element / Member</th>
            </tr>
          </thead>
          <tbody>
            ${e.value.map((o,i)=>`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
                  ${a?o.score:`[${i}]`}
                </td>
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem;">
                  ${d(a?o.member:String(o))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;return}t.innerHTML=`<div class="json-view-box">${d(String(e.value))}</div>`}function $n(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(t=>`
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
        ${d(t.field)}
      </td>
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
        ${d(t.value)}
      </td>
      <td style="padding: 0.6rem 1rem; text-align: right;">
        ${$?.read_only?`
          <span title="Read-Only Mode: Field deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
            <i data-lucide="lock" style="width: 12px; height: 12px;"></i>
          </span>
        `:`
          <button type="button" class="btn-icon danger btn-delete-hash-field" data-field="${encodeURIComponent(t.field)}" title="Delete field">
            <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
          </button>
        `}
      </td>
    </tr>
  `).join("")}function In(e,t=null){const n=X,a=n?n.total:e,o=n&&n.match?`${e.toLocaleString()} matching fields loaded`:e<a?`${e.toLocaleString()} of ${a.toLocaleString()} fields loaded`:`${e.toLocaleString()} fields`;return t!==null?`${t.toLocaleString()} shown · ${o}`:o}function Qa(e){return`*${e.replace(/[\\*?\[\]]/g,t=>`\\${t}`)}*`}function Tn(){const e=X,t=document.getElementById("hashFieldsTableBody"),n=document.getElementById("hashFieldCountText"),a=document.getElementById("hashFieldSearchInput");if(!e||!t)return;const o=a?a.value.trim().toLowerCase():"",i=o?e.fields.filter(r=>r.field.toLowerCase().includes(o)||r.value.toLowerCase().includes(o)):e.fields;t.innerHTML=$n(i),n&&(n.textContent=In(e.fields.length,o?i.length:null)),p(),Bn(e.key),yt()}function yt(){const e=document.getElementById("hashFieldsFooter"),t=X;if(!e||!t)return;const n=t.cursor!==0,a=t.match?`Server-side filter: <code>${d(t.match)}</code> · <a href="#" id="btnClearHashMatch" style="color: var(--accent-primary);">clear</a>`:n?"Search applies to loaded fields. Press Enter to search all fields on the server.":"";e.innerHTML=`
    <span>${a}</span>
    ${n?`
      <button type="button" class="btn btn-secondary" id="btnLoadMoreHashFields" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" ${t.loading?"disabled":""}>
        <i data-lucide="${t.loading?"refresh-cw":"arrow-down-circle"}" ${t.loading?'class="spin"':""} style="width: 13px; height: 13px;"></i>
        ${t.loading?"Loading...":"Load More Fields"}
      </button>`:""}
  `,p();const o=document.getElementById("btnLoadMoreHashFields");o&&o.addEventListener("click",()=>rt());const i=document.getElementById("btnClearHashMatch");i&&i.addEventListener("click",r=>{r.preventDefault();const s=document.getElementById("hashFieldSearchInput");s&&(s.value=""),rt({reset:!0,match:null})})}async function rt({reset:e=!1,match:t}={}){const n=X;if(!n||n.loading||!e&&n.cursor===0)return;const a=n.key,o=e?t:n.match;n.loading=!0,yt();try{const i=new URLSearchParams({cursor:String(e?0:n.cursor),count:String(Fa)});o&&i.set("match",o);const r=await fetch(`/api/keys/${encodeURIComponent(a)}/hash/fields?${i}`);if(!r.ok){const m=await r.json().catch(()=>({}));throw new Error(m.detail||`Server error: ${r.status}`)}const s=await r.json();if(X!==n||Z!==a)return;e&&(n.fields=[]);const c=new Set(n.fields.map(m=>m.field));for(const m of s.fields||[])c.has(m.field)||(c.add(m.field),n.fields.push(m));n.cursor=Number(s.cursor||0),n.total=Number(s.total??n.total),n.match=o||null}catch(i){alert("Failed to load hash fields: "+i.message)}finally{n.loading=!1,X===n&&Tn()}}function Xa(e){const t=document.getElementById("hashFieldSearchInput");t&&(t.addEventListener("input",()=>Tn()),t.addEventListener("keydown",a=>{if(a.key!=="Enter"||!X)return;const o=t.value.trim(),i=X;i.cursor===0&&!i.match||rt({reset:!0,match:o?Qa(o):null})}));const n=document.getElementById("btnAddHashField");n&&n.addEventListener("click",async()=>{const a=prompt(`Enter field name for hash '${e}':`);if(!a)return;const o=prompt(`Enter value for field '${a}':`);if(o!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:a,value:o})})).ok)throw new Error("Failed to set field");fe(e)}catch(i){alert("Error setting field: "+i.message)}}),Bn(e)}function Bn(e){document.querySelectorAll(".btn-delete-hash-field").forEach(t=>{t.addEventListener("click",async()=>{const n=decodeURIComponent(t.getAttribute("data-field"));if(confirm(`Delete field '${n}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(n)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");fe(e)}catch(a){alert("Error: "+a.message)}})})}function eo(e){if(!e)return null;const t=e.match(/filename\*\s*=\s*([\w-]*)'[^']*'([^;]+)/i);if(t)try{return decodeURIComponent(t[2].trim().replace(/^"|"$/g,""))}catch{}const n=e.match(/filename\s*=\s*"([^"]*)"/i)||e.match(/filename\s*=\s*([^;]+)/i);return n&&n[1].trim()?n[1].trim():null}function Mn(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function _n(e,t,n=null){let a=eo(e.headers.get("content-disposition"))||t;const o=String(e.headers.get("x-export-format")||n||"").toLowerCase();o&&!a.toLowerCase().endsWith(`.${o}`)&&(a=`${a}.${o}`);const i=await e.blob();return Mn(i,a),a}async function to(e,t){if(!e)return;const n=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Downloading...',p());try{const a=await fetch(`/api/keys/${encodeURIComponent(e)}/download`);if(!a.ok){const i=await a.json().catch(()=>({}));throw new Error(i.detail||`Server error: ${a.status}`)}const o=e.replace(/[^A-Za-z0-9._-]+/g,"_")||"redis_key";await _n(a,o),a.headers.get("x-export-truncated")==="true"&&alert(`Download was capped: the key has ${Number(a.headers.get("x-export-total")||0).toLocaleString()} entries, only the first portion was included.`)}catch(a){alert("Download failed: "+a.message)}finally{t&&(t.disabled=!1,t.innerHTML=n,p())}}function d(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Fe(e,t){if($?.read_only){alert("Key deletion is disabled in Read-Only mode.");return}ot=t;const n=document.getElementById("deleteKeyConfirmModal"),a=document.getElementById("deleteKeyTargetName"),o=document.getElementById("inputConfirmDelete"),i=document.getElementById("btnSubmitDeleteKey");a.textContent=e,o.value="",i.disabled=!0,n.classList.add("active"),o.focus(),o.oninput=()=>{const r=o.value.trim().toUpperCase();i.disabled=r!=="CONFIRM"&&o.value.trim()!==e},i.onclick=async()=>{i.disabled=!0,i.textContent="Deleting...";try{const r=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),s=await r.json();if(!r.ok)throw new Error(s.detail||"Failed to delete key");n.classList.remove("active"),ot&&ot()}catch(r){alert("Error deleting key: "+r.message)}finally{i.disabled=!1,i.textContent="Delete Permanently"}}}async function no(){document.getElementById("clientsListModal").classList.add("active"),await gt()}function cn(){document.getElementById("clientsListModal").classList.remove("active")}async function gt(){const e=document.getElementById("clientsTableContainer"),t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats"),a=document.getElementById("clientsSearchInput");e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',p();try{const o=await fetch("/api/clients");if(!o.ok)throw new Error("Failed to load connected clients");ye=await o.json(),t&&(t.textContent=ye.length),n&&(n.textContent=`${ye.length} total connections`),a&&(a.value=""),Rn(ye)}catch(o){e.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
        <h4>Error loading clients</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${o.message}</p>
      </div>
    `,p()}}function Rn(e){const t=document.getElementById("clientsTableContainer");if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="users" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.4;"></i>
        <p>No matching connected clients found.</p>
      </div>
    `,p();return}t.innerHTML=`
    <table class="data-table" style="width: 100%;">
      <thead>
        <tr>
          <th style="width: 7%;">ID</th>
          <th style="width: 25%;">Client Name / Host</th>
          <th style="width: 22%;">Remote Address (IP:Port)</th>
          <th style="width: 8%;">DB</th>
          <th style="width: 12%;">Last CMD</th>
          <th style="width: 10%;">Age</th>
          <th style="width: 10%;">Idle</th>
          <th style="width: 6%; text-align: right;">Action</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(n=>`
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
              #${n.id}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.4rem;">
                <span>${d(n.name)}</span>
                ${n.flags&&n.flags.includes("O")?'<span class="badge-db" style="background: rgba(234, 179, 8, 0.15); color: #fde047; font-size: 0.65rem;">MONITOR</span>':""}
              </div>
              <div class="client-sub-text">User: ${d(n.user)} | Flags: ${d(n.flags||"none")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div class="client-ip-cell">${d(n.addr)}</div>
              <div class="client-sub-text">Target: ${d(n.laddr||"localhost")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem;">
              DB${n.db}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <span class="client-cmd-badge">${d(n.cmd||"idle")}</span>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
              ${n.age_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: ${n.idle>300?"var(--accent-warning)":"var(--accent-success)"};">
              ${n.idle_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; text-align: right;">
              ${$?.read_only?`
                <span title="Read-Only Mode: Disconnecting clients is locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
                  <i data-lucide="lock" style="width: 13px; height: 13px;"></i>
                </span>
              `:`
                <button type="button" class="btn-icon danger btn-kill-client" data-id="${n.id}" data-addr="${d(n.addr)}" title="Disconnect client">
                  <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                </button>
              `}
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,p(),t.querySelectorAll(".btn-kill-client").forEach(n=>{n.addEventListener("click",()=>{const a=n.getAttribute("data-id"),o=n.getAttribute("data-addr");ao(a,o)})})}async function ao(e,t){if($?.read_only){alert("Client disconnection is disabled in Read-Only mode.");return}if(confirm(`Are you sure you want to disconnect client #${e} (${t})?`))try{const n=await fetch(`/api/clients/${e}`,{method:"DELETE"}),a=await n.json();if(!n.ok)throw new Error(a.detail||"Failed to disconnect client");await gt(),await J()}catch(n){alert("Error disconnecting client: "+n.message)}}async function oo(){const e=document.getElementById("slowlogModal");if(!e)return;e.classList.add("active"),Ne=0,De="",ve="all";const t=document.getElementById("btnClearSlowlogModal");t&&(t.style.display=$?.read_only?"none":""),document.querySelectorAll(".slowlog-filter-btn").forEach(a=>{a.classList.toggle("active",a.getAttribute("data-min-duration")==="0")});const n=document.getElementById("slowlogSearchInput");n&&(n.value=""),await vt()}function pn(){const e=document.getElementById("slowlogModal");e&&e.classList.remove("active")}async function vt(){const e=document.getElementById("slowlogTableContainer"),t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),a=document.getElementById("slowlogFooterStats");e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,p());try{const o=await fetch("/api/slowlog?limit=250");if(!o.ok)throw new Error("Failed to fetch slowlog");const i=await o.json();if(ge=i.entries||[],t&&(t.textContent=ge.length),n&&i.slower_than_us!==null&&i.slower_than_us!==void 0){const r=(i.slower_than_us/1e3).toFixed(1);n.textContent=`Threshold: > ${r}ms (${i.slower_than_us} µs)`}a&&(a.textContent=`Total buffer: ${i.total_len||ge.length} entries | Max buffer: ${i.max_len||"N/A"}`),io(ge),He()}catch(o){e&&(e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${d(o.message)}</p>
        </div>
      `,p())}}function io(e){const t=document.getElementById("slowlogNodeFilterContainer");if(!t)return;const n=Array.from(new Set(e.map(o=>o.node).filter(Boolean)));if(n.length<=1){t.innerHTML="";return}t.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${n.length})</option>
      ${n.map(o=>`<option value="${d(o)}" ${ve===o?"selected":""}>${d(o)}</option>`).join("")}
    </select>
  `;const a=document.getElementById("slowlogNodeSelect");a&&a.addEventListener("change",()=>{ve=a.value,He()})}function He(){let e=ge;if(Ne>0&&(e=e.filter(t=>t.duration_ms>=Ne)),ve&&ve!=="all"&&(e=e.filter(t=>t.node===ve)),De){const t=De.toLowerCase();e=e.filter(n=>{const a=(n.command||[]).join(" ").toLowerCase(),o=(n.client_ip||"").toLowerCase(),i=(n.node||"").toLowerCase();return a.includes(t)||o.includes(t)||i.includes(t)||String(n.id).includes(t)})}so(e)}function so(e){const t=document.getElementById("slowlogTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <i data-lucide="check-circle-2" style="width: 28px; height: 28px; color: #4ade80;"></i>
        </div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.35rem;">No Slow Queries Recorded</h4>
        <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.5;">
          ${ge.length===0?"Redis latency is healthy! All commands executed within the threshold.":"No slowlog entries matched the active filters."}
        </p>
      </div>
    `,p();return}t.innerHTML=`
    <table class="keys-table" style="width: 100%;">
      <thead>
        <tr>
          <th style="width: 60px;"># ID</th>
          <th style="width: 155px;">Timestamp</th>
          <th style="width: 110px;">Execution Time</th>
          <th>Command & Arguments</th>
          <th style="width: 150px;">Target Node</th>
          <th style="width: 170px;">Client Caller</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(n=>{let a="badge-duration-fast";n.duration_ms>=50?a="badge-duration-critical":n.duration_ms>=10&&(a="badge-duration-warning");const o=n.command&&n.command.length>0?n.command.join(" "):"(empty)";return`
            <tr>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">#${n.id}</td>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); white-space: nowrap;">
                ${d(n.time_str||"N/A")}
              </td>
              <td>
                <span class="badge-duration ${a}">
                  <i data-lucide="clock" style="width: 11px; height: 11px;"></i>
                  ${n.duration_ms} ms
                </span>
                <span style="font-size: 0.68rem; color: var(--text-muted); display: block; margin-top: 2px; font-family: var(--font-mono);">
                  ${n.duration_us.toLocaleString()} µs
                </span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <span class="slowlog-cmd-code" title="${d(o)}">${d(o)}</span>
                  <button type="button" class="btn-copy-inline btn-copy-slowlog-cmd" data-cmd="${d(o)}" title="Copy full command">
                    <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
                  </button>
                </div>
              </td>
              <td>
                ${n.node?`<span class="slowlog-node-pill">${d(n.node)}</span>`:'<span style="color: var(--text-muted); font-size: 0.75rem;">Default</span>'}
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                ${d(n.client_ip||"Unknown")}
                ${n.client_name?`<span style="color: var(--text-muted); display: block; font-size: 0.7rem;">(${d(n.client_name)})</span>`:""}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,p(),document.querySelectorAll(".btn-copy-slowlog-cmd").forEach(n=>{n.addEventListener("click",a=>{a.stopPropagation();const o=n.getAttribute("data-cmd");o&&navigator.clipboard.writeText(o).then(()=>{n.classList.add("copied"),n.innerHTML='<i data-lucide="check" style="width: 12px; height: 12px;"></i>',p(),setTimeout(()=>{n.classList.remove("copied"),n.innerHTML='<i data-lucide="copy" style="width: 12px; height: 12px;"></i>',p()},1500)})})})}}async function lo(){if($?.read_only){alert("Slowlog reset is disabled in Read-Only mode.");return}if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");await vt()}catch(e){alert("Error resetting slowlog: "+e.message)}}async function An(){const e=document.getElementById("memoryModal");e&&(e.classList.add("active"),await Pn(),ne?ft(ne):ht())}function dt(){const e=document.getElementById("memoryModal");e&&e.classList.remove("active")}async function Pn(){const e=document.getElementById("memoryOverviewContainer");if(e){e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,p();try{const t=await fetch("/api/memory/overview");if(!t.ok)throw new Error("Failed to fetch memory overview");ln=await t.json(),ro(ln)}catch(t){e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${d(t.message)}</p>
      </div>
    `,p()}}}function ro(e){const t=document.getElementById("memoryOverviewContainer");if(!t||!e)return;let n="mem-status-healthy",a="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(n="mem-status-critical",a="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(n="mem-status-warning",a=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),t.innerHTML=`
    <div class="mem-grid">
      <!-- Used Memory -->
      <div class="mem-stat-card" style="--card-border-glow: rgba(56, 189, 248, 0.6);">
        <div class="mem-stat-label">
          <span>Used Memory</span>
          <i data-lucide="database" style="width: 14px; height: 14px; color: #38bdf8;"></i>
        </div>
        <div class="mem-stat-value" style="color: #38bdf8;">${e.used_memory_human}</div>
        <div class="mem-stat-sub">
          Peak: <span style="font-family: var(--font-mono); color: var(--text-primary); font-weight: 600;">${e.used_memory_peak_human}</span>
        </div>
      </div>

      <!-- Fragmentation Ratio -->
      <div class="mem-stat-card" style="--card-border-glow: rgba(245, 158, 11, 0.6);">
        <div class="mem-stat-label">
          <span>Fragmentation</span>
          <span class="mem-status-badge ${n}">${e.fragmentation_status}</span>
        </div>
        <div class="mem-stat-value" style="color: ${e.fragmentation_status==="healthy"?"#4ade80":"#fbbf24"};">
          ${e.fragmentation_ratio}
        </div>
        <div class="mem-stat-sub">
          RSS: <span style="font-family: var(--font-mono); color: var(--text-primary); font-weight: 600;">${e.used_memory_rss_human}</span> (${a})
        </div>
      </div>

      <!-- Cache Hit Ratio -->
      <div class="mem-stat-card" style="--card-border-glow: rgba(34, 197, 94, 0.6);">
        <div class="mem-stat-label">
          <span>Cache Hit Ratio</span>
          <i data-lucide="trending-up" style="width: 14px; height: 14px; color: #4ade80;"></i>
        </div>
        <div class="mem-stat-value" style="color: #4ade80;">${e.hit_ratio_percent}%</div>
        <div class="mem-stat-sub">
          <span style="font-family: var(--font-mono); color: var(--text-primary);">${e.keyspace_hits.toLocaleString()}</span> hits / 
          <span style="font-family: var(--font-mono); color: var(--text-muted);">${e.keyspace_misses.toLocaleString()}</span> misses
        </div>
      </div>

      <!-- Total Keys & Max Memory -->
      <div class="mem-stat-card" style="--card-border-glow: rgba(168, 85, 247, 0.6);">
        <div class="mem-stat-label">
          <span>Keys & Eviction</span>
          <i data-lucide="server" style="width: 14px; height: 14px; color: #c084fc;"></i>
        </div>
        <div class="mem-stat-value" style="color: #c084fc;">${e.dbsize.toLocaleString()}</div>
        <div class="mem-stat-sub">
          Max: <span style="font-family: var(--font-mono); color: var(--text-primary);">${e.maxmemory_human}</span> | Policy: ${d(e.maxmemory_policy)}
        </div>
      </div>
    </div>
  `,p()}function ht(){const e=document.getElementById("memoryProfilingContainer");if(!e)return;e.innerHTML=`
    <!-- Educational Explainer -->
    <div class="mem-info-banner">
      <i data-lucide="info" style="width: 20px; height: 20px; color: #38bdf8; flex-shrink: 0; margin-top: 2px;"></i>
      <div>
        <strong style="color: var(--text-primary); font-size: 0.85rem; display: block; margin-bottom: 3px;">What is BigKeys and how does it work?</strong>
        <p style="margin: 0; font-size: 0.78rem; line-height: 1.5; color: var(--text-secondary);">
          In Redis, <strong>BigKeys</strong> are keys that consume excessive RAM (measured in bytes via <code>MEMORY USAGE</code>) or contain very high element counts (e.g., a hash with 50,000 fields, list with 100,000 items).
          Because Redis is single-threaded, operating on or evicting BigKeys causes latency spikes, blocks other client requests, and creates hot shards in clusters.
          This profiler safely samples your keyspace to identify memory hogs so you can partition or add TTLs to them.
        </p>
      </div>
    </div>

    <div class="mem-safeguard-box">
      <div class="mem-safeguard-header">
        <i data-lucide="alert-triangle" style="width: 22px; height: 22px;"></i>
        <span>Performance Notice: Safe Non-Blocking Key Sampling</span>
      </div>
      <div class="mem-safeguard-body">
        Profiling analyzes data structure allocation and identifies the <strong>Top 50 BigKeys</strong> by running non-blocking <code>SCAN</code> and computing memory footprints with <code>MEMORY USAGE</code>.
        To ensure zero downtime and prevent CPU spikes on high-throughput environments, profiling is only run on-demand with controlled sampling limits.
      </div>
      <div class="mem-safeguard-controls">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary);">Sample Limit:</span>
          <select id="memSampleSizeSelect" class="form-select" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
            <option value="100">100 keys (Fastest)</option>
            <option value="250">250 keys (Balanced)</option>
            <option value="500" selected>500 keys (Recommended)</option>
            <option value="1000">1,000 keys (Deep Scan)</option>
            <option value="2500">2,500 keys (Thorough)</option>
          </select>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary);">Pattern:</span>
          <input type="text" id="memSamplePatternInput" class="form-input" value="*" placeholder="e.g. *, user:*" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; width: 140px; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
        </div>

        <button type="button" class="btn btn-primary" id="btnStartProfilingAction" style="margin-left: auto; padding: 0.45rem 1rem;">
          <i data-lucide="zap" style="width: 14px; height: 14px;"></i>
          Start Memory & BigKeys Profiling
        </button>
      </div>
    </div>
  `,p();const t=document.getElementById("btnStartProfilingAction");t&&t.addEventListener("click",()=>{const n=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,a=document.getElementById("memSamplePatternInput").value||"*";co(n,a)})}async function co(e=500,t="*"){const n=document.getElementById("memoryProfilingContainer");if(n){at=!0,n.innerHTML=`
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: #a78bfa; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">Analyzing Redis Keyspace...</h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
        Scanning sample of up to <strong>${e.toLocaleString()}</strong> keys (pattern <code>${d(t)}</code>) and measuring memory allocations...
      </p>
    </div>
  `,p();try{const a=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:t})});if(!a.ok)throw new Error("Failed to complete memory profiling");ne=await a.json(),at=!1,ft(ne)}catch(a){at=!1,n.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Memory Profiling Failed</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${d(a.message)}</p>
        <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Try Again</button>
      </div>
    `,p();const o=document.getElementById("btnRetryProfiling");o&&o.addEventListener("click",ht)}}}function ft(e){const t=document.getElementById("memoryProfilingContainer");if(!t||!e)return;const n={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};t.innerHTML=`
    <!-- Summary Header Bar -->
    <div style="background: rgba(15,23,42,0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 0.85rem 1.25rem; display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
      <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; font-size: 0.825rem;">
        <div>
          <span style="color: var(--text-muted);">Sampled Keys:</span>
          <strong style="color: var(--text-primary); font-family: var(--font-mono); margin-left: 4px;">${e.sampled_count.toLocaleString()}</strong>
        </div>
        <div style="color: var(--border-subtle);">|</div>
        <div>
          <span style="color: var(--text-muted);">Scan Duration:</span>
          <strong style="color: #4ade80; font-family: var(--font-mono); margin-left: 4px;">${e.scan_duration_ms} ms</strong>
        </div>
        <div style="color: var(--border-subtle);">|</div>
        <div>
          <span style="color: var(--text-muted);">Sampled Memory:</span>
          <strong style="color: #38bdf8; font-family: var(--font-mono); margin-left: 4px;">${e.sampled_memory_human}</strong>
        </div>
      </div>
      <button type="button" class="btn btn-secondary" id="btnReRunProfiling" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;">
        <i data-lucide="refresh-cw" style="width: 12px; height: 12px;"></i>
        Re-Run Profiling
      </button>
    </div>

    <!-- Visual Memory Breakdown by Type -->
    <div class="mem-bar-wrapper">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="pie-chart" style="width: 15px; height: 15px; color: #a78bfa;"></i>
          Memory Allocation by Data Type
        </span>
        <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
          ${e.types_breakdown.length} active types
        </span>
      </div>

      <!-- Stacked Proportion Bar -->
      <div class="mem-stacked-bar">
        ${e.types_breakdown.map(i=>{const r=n[i.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-stacked-segment" style="width: ${i.percentage}%; background: ${r};" title="${i.type.toUpperCase()}: ${i.percentage}% (${i.total_human})"></div>
          `}).join("")}
      </div>

      <!-- Type Cards Grid -->
      <div class="mem-type-cards-grid">
        ${e.types_breakdown.map(i=>{const r=n[i.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-type-card" style="border-left: 3px solid ${r};">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="type-badge ${i.type.toLowerCase()}" style="font-size: 0.68rem; padding: 0.1rem 0.4rem;">${i.type.toUpperCase()}</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--text-primary);">${i.percentage}%</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${r}; margin-top: 2px;">
                ${i.total_human}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-muted);">
                ${i.count.toLocaleString()} keys
              </div>
            </div>
          `}).join("")}
      </div>
    </div>

    <!-- Bottleneck Recommendations -->
    ${e.recommendations&&e.recommendations.length>0?`
      <div class="mem-recommendations-wrapper">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="zap" style="width: 15px; height: 15px; color: #fbbf24;"></i>
          Bottleneck Insights & Recommendations
        </div>
        ${e.recommendations.map(i=>`
          <div class="recommendation-item">
            <span>${d(i)}</span>
          </div>
        `).join("")}
      </div>
    `:""}

    <!-- Top 50 BigKeys Leaderboard -->
    <div style="background: rgba(15,23,42,0.45); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.25rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="bar-chart-2" style="width: 16px; height: 16px; color: #38bdf8;"></i>
            Top 50 BigKeys Leaderboard
          </h4>
          <span style="font-size: 0.72rem; color: var(--text-secondary);">Highest memory consumers discovered in key sample</span>
        </div>
        <div class="search-group" style="max-width: 320px;">
          <i data-lucide="search" class="search-icon" style="width: 13px; height: 13px;"></i>
          <input type="text" id="bigkeysSearchInput" class="search-input" placeholder="Filter big keys..." style="padding: 0.35rem 0.65rem 0.35rem 1.85rem; font-size: 0.78rem;">
        </div>
      </div>

      <div id="bigkeysTableContainer">
        ${mn(e.top_bigkeys)}
      </div>
    </div>
  `,p();const a=document.getElementById("btnReRunProfiling");a&&a.addEventListener("click",ht);const o=document.getElementById("bigkeysSearchInput");o&&o.addEventListener("input",()=>{const i=o.value.trim().toLowerCase(),r=i?e.top_bigkeys.filter(c=>c.key.toLowerCase().includes(i)||c.type.toLowerCase().includes(i)):e.top_bigkeys,s=document.getElementById("bigkeysTableContainer");s&&(s.innerHTML=mn(r),p(),un())}),un()}function mn(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const t=e[0]?e[0].memory_bytes:1;return`
    <table class="keys-table" style="width: 100%;">
      <thead>
        <tr>
          <th style="width: 50px;">Rank</th>
          <th>Key Name</th>
          <th style="width: 90px;">Type</th>
          <th style="width: 180px;">Memory Usage</th>
          <th style="width: 110px;">Items / Length</th>
          <th style="width: 110px;">TTL</th>
          <th style="width: 130px; text-align: right;">Actions</th>
        </tr>
      </thead>
      <tbody>
        ${e.map((n,a)=>{let o="rank-normal";a===0?o="rank-gold":a===1?o="rank-silver":a===2&&(o="rank-bronze");const i=t>0?Math.max(5,Math.round(n.memory_bytes/t*100)):10;let r="No TTL (Persistent)",s="var(--text-muted)";return n.ttl>0&&(r=`${n.ttl.toLocaleString()}s`,s="var(--accent-warning)"),`
            <tr>
              <td>
                <span class="rank-badge ${o}">#${a+1}</span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <a href="javascript:void(0)" class="key-name-link bigkey-inspect-btn" data-key="${d(n.key)}" style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 600; color: #38bdf8; text-decoration: none;" title="Inspect key: ${d(n.key)}">
                    ${d(n.key)}
                  </a>
                  <button type="button" class="btn-copy-inline btn-copy-bigkey" data-key="${d(n.key)}" title="Copy key name">
                    <i data-lucide="copy" style="width: 11px; height: 11px;"></i>
                  </button>
                </div>
              </td>
              <td>
                <span class="type-badge ${n.type.toLowerCase()}" style="font-size: 0.68rem; padding: 0.15rem 0.45rem;">
                  ${n.type.toUpperCase()}
                </span>
              </td>
              <td>
                <div style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--text-primary);">
                  ${n.memory_human}
                </div>
                <div style="width: 100%; height: 5px; background: rgba(255,255,255,0.06); border-radius: 9999px; overflow: hidden; margin-top: 3px;">
                  <div style="width: ${i}%; height: 100%; background: #38bdf8; border-radius: 9999px;"></div>
                </div>
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">
                ${n.length.toLocaleString()}
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: ${s};">
                ${r}
              </td>
              <td style="text-align: right;">
                <div style="display: inline-flex; align-items: center; gap: 0.35rem;">
                  <button type="button" class="btn btn-secondary bigkey-inspect-btn" data-key="${d(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Inspect key detail">
                    <i data-lucide="external-link" style="width: 11px; height: 11px;"></i>
                    Inspect
                  </button>
                  ${$?.read_only?"":`
                    <button type="button" class="btn btn-danger bigkey-delete-btn" data-key="${d(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Delete oversized key">
                      <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
                    </button>
                  `}
                </div>
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function un(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&(dt(),fe(t))})}),document.querySelectorAll(".btn-copy-bigkey").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const n=e.getAttribute("data-key");n&&navigator.clipboard.writeText(n).then(()=>{e.classList.add("copied"),e.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px;"></i>',p(),setTimeout(()=>{e.classList.remove("copied"),e.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',p()},1500)})})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&Fe(t,async()=>{ne&&(ne.top_bigkeys=ne.top_bigkeys.filter(n=>n.key!==t),ft(ne)),await J()})})})}let Nn="probe",K=!1;const Ae={counter:{script:`local k = KEYS[1] or 'bench_counter'
local count = redis.call('INCR', k)
if count == 1 then
  redis.call('EXPIRE', k, 60)
end
return count`,keys:"bench_counter",args:"60"},hash:{script:`local k = KEYS[1] or 'bench_user'
redis.call('HSET', k, 'name', 'benchmark_user', 'role', 'tester', 'ver', ARGV[1] or '1')
return redis.call('HGETALL', k)`,keys:"bench_user",args:"1"},lock:{script:`local k = KEYS[1] or 'bench_lock'
local token = ARGV[1] or 'token_123'
local acquired = redis.call('SET', k, token, 'NX', 'PX', 10000)
return acquired and 'ACQUIRED' or 'BUSY'`,keys:"bench_lock",args:"token_123"},custom:{script:`-- Custom Lua Script
local key = KEYS[1] or 'my_key'
return redis.call('PING')`,keys:"my_key",args:""}};function bt(e){if(!e)return"";const t=Number(e.network_overhead_ms||0).toFixed(3),n=Number(e.server_exec_ms||0).toFixed(3);return`
    <div class="latency-decomp-card">
      <div class="latency-decomp-header">
        <div class="latency-decomp-title">
          <i data-lucide="layers" style="width: 14px; height: 14px; color: #f59e0b;"></i>
          <span>Latency Decomposition (Network Transit vs Redis Server CPU)</span>
        </div>
        <div class="latency-decomp-legend">
          <div class="latency-legend-item">
            <span class="latency-legend-dot" style="background: #38bdf8;"></span>
            <span>Network Overhead: <strong>${e.network_percentage}%</strong> (${t} ms)</span>
          </div>
          <div class="latency-legend-item">
            <span class="latency-legend-dot" style="background: #10b981;"></span>
            <span>Redis Server CPU: <strong>${e.server_percentage}%</strong> (${n} ms)</span>
          </div>
        </div>
      </div>
      <div class="latency-decomp-track">
        <div class="latency-decomp-bar-net" style="width: ${e.network_percentage}%;">
          🌐 Network: ${e.network_percentage}% (${t}ms)
        </div>
        <div class="latency-decomp-bar-srv" style="width: ${e.server_percentage}%;">
          ⚡ Server: ${e.server_percentage}% (${n}ms)
        </div>
      </div>
    </div>
  `}function xt(e){return e?`
    <div class="percentiles-chip-row">
      <span style="font-size: 0.73rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-right: 0.35rem;">Percentiles:</span>
      <div class="percentile-chip"><span class="k">Min:</span> <span class="v">${e.min_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">P50:</span> <span class="v">${e.p50_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">P90:</span> <span class="v">${e.p90_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">P95:</span> <span class="v">${e.p95_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">P99:</span> <span class="v" style="color: #f59e0b;">${e.p99_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">Max:</span> <span class="v">${e.max_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">Jitter:</span> <span class="v">±${e.jitter_ms.toFixed(2)}ms</span></div>
    </div>
  `:""}function wt(e){return!e||!e.length?"":`
    <div class="histogram-card">
      <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-main); display: flex; align-items: center; gap: 0.35rem;">
        <i data-lucide="bar-chart-2" style="width: 14px; height: 14px; color: #f59e0b;"></i>
        <span>Latency Bucket Distribution</span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.45rem;">
        ${e.map(t=>`
          <div class="histogram-row">
            <span class="histogram-label">${d(t.label)}</span>
            <div class="histogram-track">
              <div class="histogram-fill" style="width: ${t.percentage}%;"></div>
            </div>
            <div class="histogram-stats">
              <strong>${t.count.toLocaleString()}</strong> (${t.percentage}%)
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function po(){const e=document.getElementById("benchmarkModal");if(!e)return;e.classList.add("active");const t=document.getElementById("benchmarkTargetSubtitle");t&&$&&(t.textContent=`Active Target: ${$.host}:${$.port} (${$.env||"LOCAL"}) | Engine: AsyncIO Native | Namespace: __ri_bench__`);const n=document.getElementById("benchmarkReadOnlyBadge"),a=document.getElementById("optCommandPresetWrite"),o=document.getElementById("optCommandPresetStruct");if($?.read_only){n&&(n.style.display="inline-flex"),a&&(a.disabled=!0,a.textContent="Write / Set (Disabled - Read-Only)"),o&&(o.disabled=!0,o.textContent="Data Structures (Disabled - Read-Only)");const r=document.getElementById("selCommandPreset");r&&(r.value==="write"||r.value==="structures")&&(r.value="read")}else n&&(n.style.display="none"),a&&(a.disabled=!1,a.textContent="Write / Set (100% SET)"),o&&(o.disabled=!1,o.textContent="Data Structures (HSET / HGET)");const i=document.getElementById("txtLuaScript");if(i&&!i.value.trim()){i.value=Ae.counter.script;const r=document.getElementById("txtLuaKeys"),s=document.getElementById("txtLuaArgs");r&&(r.value=Ae.counter.keys),s&&(s.value=Ae.counter.args)}Dn(Nn||"probe")}function yn(){const e=document.getElementById("benchmarkModal");e&&e.classList.remove("active")}function Dn(e){Nn=e,document.querySelectorAll(".benchmark-tab-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-tab")===e)});const t={probe:document.getElementById("benchmarkPaneProbe"),commands:document.getElementById("benchmarkPaneCommands"),lua:document.getElementById("benchmarkPaneLua"),cluster:document.getElementById("benchmarkPaneCluster")};Object.keys(t).forEach(n=>{t[n]&&(t[n].style.display=n===e?"flex":"none")}),p()}async function mo(){if(K)return;const e=document.getElementById("btnRunProbe"),t=document.getElementById("benchmarkProbeResults"),n=document.getElementById("selProbeCount"),a=parseInt(n?.value||"100",10);K=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Running Probe (${a})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Executing ${a} baseline probes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring network round-trip time vs Redis event-loop CPU duration</div>
      </div>
    `,p());try{const o=await fetch("/api/benchmark/probe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({count:a})});if(!o.ok){const r=await o.json().catch(()=>({detail:"Probe request failed"}));throw new Error(r.detail||"Probe failed")}const i=await o.json();uo(i)}catch(o){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Latency Probe Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${d(o.message)}</div>
        </div>
      `,p())}finally{K=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Run Latency Probe</span>',p())}}function uo(e){const t=document.getElementById("benchmarkProbeResults");if(!t||!e)return;const n=Number(e.avg_rtt_ms||0).toFixed(3),a=Number(e.breakdown?.server_exec_ms||0).toFixed(3),o=Number(e.breakdown?.network_overhead_ms||0).toFixed(3),i=Number(e.ops_per_sec||0).toLocaleString();t.innerHTML=`
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #38bdf8;"></i> Total Round-Trip (RTT)</div>
        <div class="val">${n} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Average client observed latency</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="cpu" style="width: 12px; height: 12px; color: #10b981;"></i> Redis Server CPU Time</div>
        <div class="val" style="color: #6ee7b7;">${a} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Isolated server execution delay</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="network" style="width: 12px; height: 12px; color: #38bdf8;"></i> Network Overhead</div>
        <div class="val" style="color: #38bdf8;">${o} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Transit & TCP stack overhead</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Probe Throughput</div>
        <div class="val" style="color: #fbbf24;">${i} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        <div class="sub">${e.count} probes in ${e.duration_ms}ms</div>
      </div>
    </div>

    ${bt(e.breakdown)}
    ${xt(e.percentiles)}
    ${wt(e.histogram)}
  `,p()}async function yo(){if(K)return;const e=document.getElementById("btnRunCommandBench"),t=document.getElementById("benchmarkCommandResults"),n=document.getElementById("selCommandPreset")?.value||"read",a=parseInt(document.getElementById("selCommandRequests")?.value||"1000",10),o=parseInt(document.getElementById("selCommandConcurrency")?.value||"5",10),i=parseInt(document.getElementById("selCommandPipeline")?.value||"1",10);K=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Benchmarking (${a})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #f59e0b; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Running synthetic workload (${n})...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">
          Executing ${a.toLocaleString()} requests across ${o} workers (pipeline: ${i})
        </div>
      </div>
    `,p());try{const r=await fetch("/api/benchmark/commands",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset:n,requests:a,concurrency:o,pipeline:i})});if(!r.ok){const c=await r.json().catch(()=>({detail:"Benchmark request failed"}));throw new Error(c.detail||"Benchmark failed")}const s=await r.json();go(s)}catch(r){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Benchmark Execution Blocked</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${d(r.message)}</div>
        </div>
      `,p())}finally{K=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Start Benchmark</span>',p())}}function go(e){const t=document.getElementById("benchmarkCommandResults");if(!t||!e)return;const n=Number(e.ops_per_sec||0).toLocaleString(),a=Number(e.avg_latency_ms||0).toFixed(3),o=Number(e.percentiles?.p99_ms||0).toFixed(3),i=Number(e.cleaned_keys_count||0).toLocaleString();t.innerHTML=`
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Throughput</div>
        <div class="val" style="color: #fbbf24;">${n} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        <div class="sub">${e.total_requests.toLocaleString()} ops in ${e.duration_ms}ms</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="clock" style="width: 12px; height: 12px; color: #38bdf8;"></i> Avg Latency</div>
        <div class="val">${a} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Mean per-operation latency</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #ec4899;"></i> P99 Tail Latency</div>
        <div class="val" style="color: #f472b6;">${o} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">99% of requests below this</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="shield-check" style="width: 12px; height: 12px; color: #10b981;"></i> Cleaned Ephemeral Keys</div>
        <div class="val" style="color: #6ee7b7;">${i}</div>
        <div class="sub">Auto-unlinked via UNLINK</div>
      </div>
    </div>

    ${bt(e.breakdown)}
    ${xt(e.percentiles)}
    ${wt(e.histogram)}
  `,p()}async function vo(){if(K)return;const e=document.getElementById("btnRunLuaBench"),t=document.getElementById("benchmarkLuaResults"),n=document.getElementById("txtLuaScript")?.value||"",a=document.getElementById("txtLuaKeys")?.value||"",o=document.getElementById("txtLuaArgs")?.value||"",i=document.getElementById("selLuaMode")?.value||"profile",r=parseInt(document.getElementById("selLuaIterations")?.value||"100",10),s=a.split(",").map(m=>m.trim()).filter(Boolean),c=o.split(",").map(m=>m.trim()).filter(Boolean);if(!n.trim()){alert("Please enter a Lua script to execute and profile.");return}K=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Executing Script...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Pre-loading and running Lua script on Redis server...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring precise microsecond server execution time</div>
      </div>
    `,p());try{const m=await fetch("/api/benchmark/lua",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({script:n,keys:s,args:c,mode:i,iterations:r,concurrency:5})});if(!m.ok){const k=await m.json().catch(()=>({detail:"Lua benchmark failed"}));throw new Error(k.detail||"Lua benchmark failed")}const v=await m.json();ho(v)}catch(m){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Lua Script Execution Error</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${d(m.message)}</div>
        </div>
      `,p())}finally{K=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Execute & Profile</span>',p())}}function ho(e){const t=document.getElementById("benchmarkLuaResults");if(!t||!e)return;const n=Number(e.server_duration_ms||0).toFixed(3),a=Number(e.duration_ms||0).toFixed(3);let o="";e.atomicity_warning?o=`
      <div class="atomicity-alert warning">
        <i data-lucide="alert-triangle" style="width: 20px; height: 20px; color: #ef4444; flex-shrink: 0;"></i>
        <div>
          <strong>High Atomicity Warning:</strong> Script spent <strong>${n} ms</strong> executing on the Redis server (> 5ms).
          In Redis, Lua scripts execute atomically and block all other incoming client connections for the entire duration! Consider optimizing loops or moving logic out of Lua.
        </div>
      </div>
    `:o=`
      <div class="atomicity-alert safe">
        <i data-lucide="check-circle-2" style="width: 20px; height: 20px; color: #10b981; flex-shrink: 0;"></i>
        <div>
          <strong>Atomicity Safe:</strong> Server execution took <strong>${n} ms</strong>, well within non-blocking safety thresholds (&lt; 5ms).
        </div>
      </div>
    `;let i="";e.mode==="benchmark"&&e.ops_per_sec&&(i=`
      <div class="benchmark-metrics-grid">
        <div class="benchmark-metric-card">
          <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Script Throughput</div>
          <div class="val" style="color: #fbbf24;">${Number(e.ops_per_sec).toLocaleString()} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        </div>
        <div class="benchmark-metric-card">
          <div class="label"><i data-lucide="clock" style="width: 12px; height: 12px; color: #38bdf8;"></i> Total Duration</div>
          <div class="val">${a} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        </div>
      </div>
      ${xt(e.percentiles)}
      ${wt(e.histogram)}
    `),t.innerHTML=`
    ${o}

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem;">
      <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.35rem;">
        Script Return Value (Evaluated on Server)
      </div>
      <pre style="margin: 0; background: #090d16; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: #38bdf8; font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto;">${d(String(e.result))}</pre>
    </div>

    ${bt(e.breakdown)}
    ${i}
  `,p()}async function fo(){if(K)return;const e=document.getElementById("btnRunClusterMatrix"),t=document.getElementById("benchmarkClusterResults");K=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Evaluating Matrix...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Probing primary cluster nodes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring cross-node latency and throughput matrix</div>
      </div>
    `,p());try{const n=await fetch("/api/benchmark/cluster-matrix");if(!n.ok){const o=await n.json().catch(()=>({detail:"Cluster matrix request failed"}));throw new Error(o.detail||"Cluster matrix failed")}const a=await n.json();bo(a)}catch(n){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Cluster Matrix Evaluation Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${d(n.message)}</div>
        </div>
      `,p())}finally{K=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i><span>Evaluate Cluster Latency Matrix</span>',p())}}function bo(e){const t=document.getElementById("benchmarkClusterResults");if(!t||!e)return;const n=Number(e.cluster_avg_latency_ms||0).toFixed(3),a=e.nodes||[];t.innerHTML=`
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #38bdf8;"></i> Cluster Avg Latency</div>
        <div class="val">${n} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Across ${a.length} primary node(s)</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #10b981;"></i> Fastest Node</div>
        <div class="val" style="font-size: 1.1rem; color: #6ee7b7;">${d(e.fastest_node||"N/A")}</div>
        <div class="sub">Lowest latency probe</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="alert-triangle" style="width: 12px; height: 12px; color: #f59e0b;"></i> Slowest Node</div>
        <div class="val" style="font-size: 1.1rem; color: #fbbf24;">${d(e.slowest_node||"N/A")}</div>
        <div class="sub">Highest latency probe</div>
      </div>
    </div>

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
      <table class="cluster-matrix-table">
        <thead>
          <tr>
            <th>Primary Node</th>
            <th>Role & Slots</th>
            <th>Avg Latency</th>
            <th>P99 Latency</th>
            <th>Throughput</th>
            <th>Health Status</th>
          </tr>
        </thead>
        <tbody>
          ${a.map(o=>`
            <tr class="${o.outlier?"outlier":""}">
              <td>
                <div style="font-family: var(--font-mono); font-weight: 700; color: #38bdf8;">${d(o.node)}</div>
              </td>
              <td>
                <span class="badge-db" style="text-transform: capitalize;">${d(o.role)}</span>
                <span style="font-size: 0.72rem; color: var(--text-muted); margin-left: 0.35rem;">${d(o.slots||"N/A")}</span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.45rem;">
                  <strong style="font-family: var(--font-mono);">${Number(o.avg_latency_ms).toFixed(3)} ms</strong>
                </div>
              </td>
              <td style="font-family: var(--font-mono);">${Number(o.p99_latency_ms).toFixed(3)} ms</td>
              <td style="font-family: var(--font-mono); color: #fbbf24;">${Number(o.ops_per_sec).toLocaleString()} ops/s</td>
              <td>
                ${o.outlier?'<span class="badge-duration badge-duration-danger" style="font-size: 0.7rem; font-weight: 600;">⚠️ Latency Outlier (&gt;1.75x)</span>':'<span class="badge-duration badge-duration-normal" style="font-size: 0.7rem; font-weight: 600; color: #6ee7b7;">Balanced</span>'}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `,p()}async function oe(){const e=document.getElementById("connectionsList");try{const[t,n]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]);M=await t.json()||[],n.ok&&(ae=(await n.json()).limit||2),Pe()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function zn(e,t){const n=document.getElementById("connectedCountDisplay"),a=document.getElementById("connLimitDisplay"),o=document.getElementById("connLimitSelect"),i=document.getElementById("limitProgressDots"),r=document.getElementById("limitCountPill");if(n&&(n.textContent=e),a&&(a.textContent=t),o&&String(o.value)!==String(t)&&(o.value=String(t)),r&&(e>=t&&t>0?(r.classList.add("at-limit"),r.title="Connection limit reached"):(r.classList.remove("at-limit"),r.title=`${e} of ${t} connections in use`)),i){let s="";for(let c=0;c<t;c++){const m=c<e;s+=`<span class="limit-slot-dot ${m?"filled":"empty"}" title="Slot ${c+1}: ${m?"Connected":"Available"}"></span>`}i.innerHTML=s}}function Pe(){const e=document.getElementById("connectionsList");if(!e)return;const t=document.getElementById("totalConnCountBadge");t&&(t.textContent=M.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(s=>{const c=s.getAttribute("data-env");let m=0;c==="ALL"?m=M.length:m=M.filter(v=>(v.env||"LOCAL").toUpperCase()===c).length,s.textContent=`${c} (${m})`});const a=(Re||"").trim().toLowerCase(),o=bn,i=M.filter(s=>{if(o!=="ALL"&&(s.env||"LOCAL").toUpperCase()!==o)return!1;if(a){const c=(s.name||"").toLowerCase().includes(a),m=(s.host||"").toLowerCase().includes(a),v=(s.env||"").toLowerCase().includes(a),k=(s.conn_type||"").toLowerCase().includes(a);if(!c&&!m&&!v&&!k)return!1}return!0});i.sort((s,c)=>{const m=s.is_connected?1:0,v=c.is_connected?1:0;if(v!==m)return v-m;const k=s.is_selected?1:0,E=c.is_selected?1:0;return E!==k?E-k:(s.name||"").localeCompare(c.name||"")});const r=M.filter(s=>s.is_connected).length;if(zn(r,ae),i.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${a?`No results found for "${d(a)}"`:`No connections configured in ${d(o)}`}
        </span>
      </div>
    `,p();return}e.innerHTML=i.map(s=>{const c=(s.env||"LOCAL").toUpperCase(),m=`badge-env-${c.toLowerCase()}`,v=s.conn_type==="cluster",k=s.conn_type==="sentinel",E=s.source==="config",x=!!s.is_connected,y=!!s.is_selected;return`
      <div class="conn-card ${x?"is-connected":""} ${y?"selected active":""}" data-id="${s.id}" title="Click to review config & connection options">
        
        <!-- Header: Lead Indicator + Name + Status Pill -->
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${y?`
              <span class="conn-status-indicator active" title="Active Cluster (Browsing Keys)">
                <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
              </span>
            `:x?`
              <span class="conn-status-indicator connected" title="Connected Cluster">
                <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
              </span>
            `:`
              <span class="conn-status-dot idle" title="Disconnected"></span>
            `}
          </div>

          <div class="conn-title-wrap">
            <span class="conn-name" title="${d(s.name)}">${d(s.name)}</span>
          </div>

          <div class="conn-status-badge-wrap">
            ${y?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:x?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <!-- Sub-row: Endpoint on left, Badges on right -->
        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${d(s.host)}:${s.port}">
            <i data-lucide="${v?"network":k?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${d(s.host)}:${s.port}</span>
          </div>

          <div class="conn-tags">
            <span class="badge-env ${m}">${c}</span>
            ${s.read_only?'<span class="badge-readonly" title="Read-Only Mode: Mutating operations locked">🔒 RO</span>':""}
            ${v?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${k?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!v&&!k?`<span class="badge-db">DB${s.db}</span>`:""}
            ${s.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${s.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${E?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <!-- Floating Quick Action Toolbar on Hover -->
        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${x?`
            ${y?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${s.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${s.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${v||x?`
              <button type="button" class="btn-hover-action btn-view-topology-card" data-id="${s.id}" title="View topology & nodes">
                <i data-lucide="layers" style="width: 11px; height: 11px;"></i>
              </button>
            `:""}
          `:`
            <button type="button" class="btn-hover-action btn-hover-connect btn-card-open-config" data-id="${s.id}" title="Review config & Connect">
              <i data-lucide="play" style="width: 11px; height: 11px;"></i>
              <span>Connect</span>
            </button>
            ${E?"":`
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${s.id}" data-name="${d(s.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>

      </div>
    `}).join(""),p(),e.querySelectorAll(".conn-card").forEach(s=>{s.addEventListener("click",c=>{if(c.target.closest(".btn-delete-conn")||c.target.closest(".btn-view-topology-card")||c.target.closest(".btn-card-disconnect")||c.target.closest(".btn-card-select")||c.target.closest(".btn-card-open-config"))return;const m=s.getAttribute("data-id"),v=M.find(k=>k.id===m);v&&ct(v)})}),e.querySelectorAll(".btn-card-disconnect").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const m=s.getAttribute("data-id");await kt(m)})}),e.querySelectorAll(".btn-card-select").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const m=s.getAttribute("data-id");await Fn(m)})}),e.querySelectorAll(".btn-card-open-config").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation();const m=s.getAttribute("data-id"),v=M.find(k=>k.id===m);v&&ct(v)})}),e.querySelectorAll(".btn-view-topology-card").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const m=s.getAttribute("data-id");await Oe(m)})}),e.querySelectorAll(".btn-delete-conn").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const m=s.getAttribute("data-id"),v=s.getAttribute("data-name");confirm(`Are you sure you want to delete '${v}'?`)&&await ko(m)})})}function xo(e){if(!e)return[];if(Array.isArray(e))return e.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t));if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n))}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}return[]}function ct(e){const t=document.getElementById("clusterConfigModal"),n=document.getElementById("cfgModalTitle"),a=document.getElementById("cfgModalSubtitle"),o=document.getElementById("cfgModalBody"),i=document.getElementById("cfgModalFooter");n.textContent=e.name||"Cluster Configuration",a.textContent="Review configuration before connecting";const r=!!e.is_connected,s=!!e.is_selected,c=e.conn_type==="cluster",m=xo(e.cluster_nodes),v=M.filter(F=>F.is_connected).length,k=!r&&v>=ae;o.innerHTML=`
    <div class="config-status-banner ${r?"connected":"disconnected"}">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="${r?"check-circle-2":"alert-circle"}" style="width: 18px; height: 18px;"></i>
        <span>${r?"Connected & Live":"Not Connected"}</span>
      </div>
      <div>
        ${s?'<span class="badge-selected-cluster">ACTIVE / VIEWING KEYS</span>':r?'<span class="badge-connected-cluster">CONNECTED</span>':'<span style="font-size: 0.75rem; color: var(--text-muted);">Ready to connect</span>'}
      </div>
    </div>

    <div class="config-grid">
      <div class="config-grid-row">
        <span class="config-label">Cluster / Instance Name</span>
        <span class="config-value">${d(e.name)}</span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Environment</span>
        <span class="config-value">
          <span class="badge-env badge-env-${(e.env||"LOCAL").toLowerCase()}">${(e.env||"LOCAL").toUpperCase()}</span>
        </span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Connection Type</span>
        <span class="config-value" style="text-transform: capitalize;">${d(e.conn_type||"standalone")}</span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Host / Seed Node</span>
        <span class="config-value" style="color: var(--accent-primary);">${d(e.host)}:${e.port}</span>
      </div>
      ${c&&(m.length>0||e.cluster_nodes)?`
        <div class="config-grid-row config-grid-seeds-row">
          <span class="config-label" style="padding-top: 2px;">
            Seed Endpoints ${m.length>0?`(${m.length})`:""}
          </span>
          <div class="config-seeds-container">
            ${m.length>0?m.map(F=>`
                  <span class="seed-node-pill" title="${d(F)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${d(F)}
                  </span>
                `).join(""):`<span class="seed-node-pill">${d(e.cluster_nodes)}</span>`}
          </div>
        </div>
      `:""}
      ${c?"":`
        <div class="config-grid-row">
          <span class="config-label">Database Index</span>
          <span class="config-value">DB ${e.db||0}</span>
        </div>
      `}
      <div class="config-grid-row">
        <span class="config-label">Authentication</span>
        <span class="config-value">
          ${e.username?d(e.username):"default"} / ${e.has_password?"•••••••• (Encrypted)":"None"}
        </span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">TLS / SSL Encryption</span>
        <span class="config-value">
          ${e.use_tls?'<span style="color: var(--accent-success);">Enabled</span>':'<span style="color: var(--text-muted);">Disabled</span>'}
        </span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Configuration Source</span>
        <span class="config-value" style="font-size: 0.72rem; color: var(--text-muted);">
          ${e.source==="config"?"config/connections.yaml":"Local SQLite DB"}
        </span>
      </div>
    </div>

    <div class="config-limit-info">
      <i data-lucide="shield-check" style="width: 14px; height: 14px; color: var(--accent-primary); flex-shrink: 0;"></i>
      <span>Connected Limit: <strong>${v} of ${ae}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${k?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${ae} maximum). Please disconnect a connected cluster first or increase the limit.</span>
      </div>
    `:""}

    <div id="cfgTestResultBox" class="test-result-box" style="margin-top: 0.65rem;"></div>
  `,r?i.innerHTML=`
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="btn btn-secondary" id="btnTopologyFromConfig">
          <i data-lucide="layers" style="width: 13px; height: 13px;"></i>
          Topology & Nodes
        </button>
        <button type="button" class="btn btn-secondary" id="btnEditFromConfig">
          <i data-lucide="edit" style="width: 13px; height: 13px;"></i>
          Edit
        </button>
        <button type="button" class="btn btn-danger" id="btnDisconnectFromConfig">
          <i data-lucide="x" style="width: 13px; height: 13px;"></i>
          Disconnect Cluster
        </button>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="btn btn-secondary" id="btnCloseConfigModal">Close</button>
        ${s?`
          <button type="button" class="btn btn-secondary" id="btnSelectFromConfig">
            <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
            Refresh Keys
          </button>
        `:`
          <button type="button" class="btn btn-primary" id="btnSelectFromConfig">
            <i data-lucide="database" style="width: 13px; height: 13px;"></i>
            Switch & View Keys
          </button>
        `}
      </div>
    `:i.innerHTML=`
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="btn btn-secondary" id="btnTestFromConfig">
          <i data-lucide="zap" style="width: 13px; height: 13px;"></i>
          Test Connection
        </button>
        <button type="button" class="btn btn-secondary" id="btnEditFromConfig">
          <i data-lucide="edit" style="width: 13px; height: 13px;"></i>
          Edit
        </button>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="btn btn-secondary" id="btnCloseConfigModal">Cancel</button>
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${k?"disabled":""}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `,p(),t.classList.add("active");const E=document.getElementById("btnCloseConfigModal");E&&(E.onclick=()=>t.classList.remove("active"));const x=document.getElementById("btnEditFromConfig");x&&(x.onclick=()=>{t.classList.remove("active"),openEditConnectionModal(e)});const y=document.getElementById("btnConnectFromConfig");y&&(y.onclick=async()=>{await Hn(e.id),t.classList.remove("active")});const h=document.getElementById("btnDisconnectFromConfig");h&&(h.onclick=async()=>{await kt(e.id),t.classList.remove("active")});const f=document.getElementById("btnSelectFromConfig");f&&(f.onclick=async()=>{await Fn(e.id),t.classList.remove("active")});const A=document.getElementById("btnTopologyFromConfig");A&&(A.onclick=async()=>{t.classList.remove("active"),await Oe(e.id)});const W=document.getElementById("btnTestFromConfig");W&&(W.onclick=async()=>{await wo(e)})}async function wo(e){const t=document.getElementById("cfgTestResultBox"),n=document.getElementById("btnTestFromConfig");n&&(n.disabled=!0,n.innerHTML="Testing..."),t&&(t.className="test-result-box",t.innerHTML="");try{const o=await(await fetch(`/api/connections/${e.id}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();o.success?(t.className="test-result-box success",t.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${o.latency_ms} ms</strong> (Redis v${o.redis_version})</span>
      `):(t.className="test-result-box error",t.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${d(o.error||"Connection refused")}</span>
      `)}catch(a){t&&(t.className="test-result-box error",t.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${d(a.message)}</span>`)}finally{n&&(n.disabled=!1,n.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),p()}}async function Hn(e){if(M.find(n=>n.id===e),M.filter(n=>n.is_connected&&n.id!==e).length>=ae){alert(`Connection limit reached: Maximum ${ae} connected cluster(s) allowed at a time.
Please disconnect an existing cluster first or increase the limit in the sidebar.`);return}try{const n=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),a=await n.json();if(!n.ok)throw new Error(a.detail||"Failed to connect to cluster");await oe(),await J(),await N()}catch(n){alert("Connection error: "+n.message)}}async function kt(e){try{const t=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to disconnect cluster");await oe(),await J(),M.some(o=>o.is_connected&&o.id!==e)?await N():(z=[],Ee.clear(),Se=0,Q=0,ee=!1,mt=0,Et())}catch(t){alert("Disconnect error: "+t.message)}}async function Fn(e){try{const t=await fetch(`/api/connections/${e}/select`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to switch cluster");const a=document.getElementById("keyDetailModal");a&&a.classList.remove("active"),Z=null,fn=null,await oe(),await J(),await N()}catch(t){alert("Switch error: "+t.message)}}function Et(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="flex"),n&&(n.style.display="none");const a=document.getElementById("btnConnectFirstAvailable");a&&(a.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${M.length})`,M.length>0&&(a.onclick=()=>ct(M[0]))),p()}async function ko(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");await oe(),await J(),await N()}catch(t){alert("Delete error: "+t.message)}}async function Eo(){const e=document.getElementById("keyspaceNodesModal");e&&(e.classList.add("active"),Kn($),await On())}function it(){const e=document.getElementById("keyspaceNodesModal");e&&e.classList.remove("active")}async function On(){try{const e=await fetch("/api/status");if(!e.ok)throw new Error("Failed to load node stats");$=await e.json(),Kn($)}catch(e){const t=document.getElementById("keyspaceNodesContainer");t&&(t.innerHTML=`<div style="padding: 2rem; text-align: center; color: var(--accent-danger);">${d(e.message)}</div>`)}}function Kn(e){const t=document.getElementById("keyspaceNodesContainer"),n=document.getElementById("keyspaceTotalBadge");if(!t||!e)return;const a=e.node_stats||[],o=a.filter(v=>v.role==="master"),i=o.reduce((v,k)=>v+(k.keys||0),0);if(n&&(n.textContent=`${i.toLocaleString()} keys`),o.length===0){t.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Per-node breakdown is only available for cluster connections.</div>';return}const r=v=>v==null?"—":Number(v).toLocaleString(),s=(v,k="left")=>`<th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: ${k};">${v}</th>`,c=(v,k="")=>`<td style="padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; ${k}">${v}</td>`,m=o.map(v=>{const k=i>0&&v.keys!==null?(v.keys/i*100).toFixed(1):"0.0",E=a.filter(h=>h.role==="replica"&&h.master===v.node),x=`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        ${c(`<span class="role-badge-master">MASTER</span> <span style="color: var(--text-primary); font-weight: 600; margin-left: 6px;">${d(v.node)}</span>`)}
        ${c(v.error?`<span style="color: var(--accent-danger);" title="${d(v.error)}">unreachable</span>`:r(v.keys),"text-align: right; color: var(--text-primary); font-weight: 600;")}
        ${c(`${k}%`,"text-align: right; color: var(--text-secondary);")}
        ${c(d(v.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
        ${c(r(v.connected_clients),"text-align: right; color: #38bdf8;")}
      </tr>`,y=E.map(h=>{const f=h.keys!==null&&v.keys!==null?h.keys-v.keys:null,A=f===null?"":f===0?'<span style="color: var(--accent-success); margin-left: 6px;">in sync</span>':`<span style="color: var(--accent-warning); margin-left: 6px;" title="Replica key count differs from its master (replication lag or expiring keys)">${f>0?"+":""}${f.toLocaleString()}</span>`;return`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(0,0,0,0.12);">
        ${c(`<span style="color: var(--text-muted); margin-left: 0.75rem;">↳</span> <span class="role-badge-replica">REPLICA</span> <span style="color: var(--text-secondary); margin-left: 6px;">${d(h.node)}</span>`)}
        ${c(h.error?`<span style="color: var(--accent-danger);" title="${d(h.error)}">unreachable</span>`:`${r(h.keys)}${A}`,"text-align: right; color: var(--text-secondary);")}
        ${c("","")}
        ${c(d(h.used_memory_human||"—"),"text-align: right; color: var(--text-muted);")}
        ${c(r(h.connected_clients),"text-align: right; color: var(--text-muted);")}
      </tr>`}).join("");return x+y}).join("");t.innerHTML=`
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${s("NODE")}${s("KEYS","right")}${s("SHARE","right")}${s("MEMORY","right")}${s("CLIENTS","right")}</tr>
      </thead>
      <tbody>${m}</tbody>
      <tfoot>
        <tr>
          ${c("Cluster total (masters)","color: var(--text-muted); font-family: inherit;")}
          ${c(i.toLocaleString(),"text-align: right; color: var(--accent-primary); font-weight: 700;")}
          ${c("100%","text-align: right; color: var(--text-muted);")}
          ${c(d(e.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
          ${c("","")}
        </tr>
      </tfoot>
    </table>
  `,p()}async function Oe(e=null){const t=document.getElementById("clusterTopologyModal");if(t){if(t.classList.add("active"),e){const n=document.querySelector(`.conn-card[data-id="${e}"]`);n&&!n.classList.contains("active")&&await Hn(e)}await jn()}}function gn(){const e=document.getElementById("clusterTopologyModal");e&&e.classList.remove("active")}async function jn(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),t=document.getElementById("topologyNodesCountBadge"),n=document.getElementById("topologyEnvBadge"),a=M.find(o=>o.is_active);if(a&&n){const o=(a.env||"LOCAL").toUpperCase();n.textContent=o,n.className=`badge-env badge-env-${o.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,p());try{const o=await fetch("/api/topology");if(!o.ok)throw new Error("Failed to load cluster topology");const i=await o.json();st=i,t&&(t.textContent=`${i.total_nodes} Node${i.total_nodes!==1?"s":""}`),Co(i),pt()}catch(o){e&&(e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${o.message}</p>
        </div>
      `,p())}}function Co(e){const t=document.getElementById("topologyStatsGrid");if(!t)return;const n=e.is_cluster,a=(e.cluster_state||"").toLowerCase()==="ok"||!n;t.innerHTML=`
    <div class="topology-stat-card">
      <span class="topology-stat-label">Cluster State</span>
      <span class="topology-stat-value" style="color: ${a?"var(--accent-success)":"var(--accent-danger)"}; display: flex; align-items: center; gap: 0.4rem;">
        <span class="link-dot ${a?"connected":"disconnected"}"></span>
        ${(e.cluster_state||(n?"OK":"Standalone")).toUpperCase()}
      </span>
    </div>

    <div class="topology-stat-card">
      <span class="topology-stat-label">Total Nodes</span>
      <span class="topology-stat-value" style="color: var(--accent-primary);">
        ${e.total_nodes}
      </span>
    </div>

    <div class="topology-stat-card">
      <span class="topology-stat-label">Masters / Replicas</span>
      <span class="topology-stat-value">
        <span style="color: #38bdf8;">${e.masters_count}M</span>
        <span style="color: var(--text-muted); font-size: 0.9rem; margin: 0 4px;">/</span>
        <span style="color: #fbbf24;">${e.replicas_count}R</span>
      </span>
    </div>

    <div class="topology-stat-card">
      <span class="topology-stat-label">Assigned Slots</span>
      <span class="topology-stat-value" style="color: ${e.slots_assigned>=16384?"var(--accent-success)":"var(--accent-warning)"};">
        ${e.slots_assigned} / 16384
      </span>
    </div>
  `}function pt(){const e=document.getElementById("topologyTableContainer");if(!e||!st)return;const t=st.nodes||[],n=(wn||"").trim().toLowerCase(),a=xn,o=t.filter(i=>{if(a!=="all"&&i.role.toLowerCase()!==a)return!1;if(n){const r=(i.addr||"").toLowerCase().includes(n),s=(i.id||"").toLowerCase().includes(n),c=(i.ip||"").toLowerCase().includes(n),m=(i.slots||"").toLowerCase().includes(n);if(!r&&!s&&!c&&!m)return!1}return!0});if(o.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">NODE ID</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">ROLE</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">ENDPOINT (IP:PORT)</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: right;">KEYS</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">LINK STATE</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">ASSIGNED SLOTS</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">MASTER / REPLICA OF</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: right;">FLAGS</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(i=>{const r=i.role==="master",s=(i.link_state||"connected").toLowerCase()==="connected",c=i.id?i.id.length>12?`${i.id.substring(0,10)}...`:i.id:"N/A",m=i.slots?`${i.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${i.slot_count||0} slots)</span>`:r?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${d(i.id||"")}">${d(c)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${r?"role-badge-master":"role-badge-replica"}">${i.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${d(i.addr||`${i.ip}:${i.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem; text-align: right; color: ${r?"var(--text-primary)":"var(--text-secondary)"};">
                ${i.keys===null||i.keys===void 0?"—":Number(i.keys).toLocaleString()}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${s?"connected":"disconnected"}"></span>
                <span style="color: ${s?"var(--accent-success)":"var(--accent-danger)"};">${i.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${m}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                ${i.master_id?`<span title="${d(i.master_id)}">↳ ${d(i.master_id.substring(0,8))}...</span>`:"—"}
              </td>
              <td style="padding: 0.65rem 0.85rem; text-align: right; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
                ${(i.flags||[]).join(", ")||"none"}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,p()}function Lo(){const e=document.getElementById("btnOpenBulkDeleteModal");e&&($?.read_only?(e.disabled=!0,e.style.opacity="0.4",e.style.cursor="not-allowed",e.title="🔒 Bulk Delete is disabled in Read-Only mode"):(e.disabled=!1,e.style.opacity="1",e.style.cursor="pointer",e.title="Bulk delete matched keys (Dry-run & confirmation required)"))}async function J(){const e=document.getElementById("topConnContainer"),t=document.getElementById("topVitalsContainer");try{const a=await(await fetch("/api/status")).json();if(a.connected){const o=M.find(x=>x.is_selected)||M.find(x=>x.id===a.connection_id)||M.find(x=>x.is_connected),i=o&&o.conn_type==="cluster"||a.cluster_nodes&&a.cluster_nodes.length>0||a.is_cluster,r=a.cluster_nodes_count||(a.node_stats&&a.node_stats.length>0?a.node_stats.length:1),s=(a.node_stats||[]).filter(x=>x.role==="master");if($=a,Lo(),e){const x=(a.env||o?.env||"LOCAL").toUpperCase();e.innerHTML=`
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${d(a.connection_name||"Connected")}">${d(a.connection_name||"Connected")}</span>
            <span class="badge-env badge-env-${x.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem; margin-right: 0.25rem;">${x}</span>
            ${a.read_only?'<span class="badge-readonly" title="Read-Only Mode: All write, update, and delete actions are locked" style="margin-right: 0.25rem;"><i data-lucide="lock"></i> READ ONLY</span>':""}
            <span class="top-conn-endpoint">${a.host}:${a.port}</span>
            <span class="top-conn-tag">${i?"CLUSTER":`DB${a.db}`}</span>
            <button type="button" class="top-conn-disconnect" id="btnTopDisconnect" title="Disconnect ${d(a.connection_name||"instance")}">
              <i data-lucide="power" style="width: 12px; height: 12px;"></i>
            </button>
          </div>
        `}t&&(t.innerHTML=`
          <div class="top-vitals-capsule">
            <div class="vital-item clickable" id="btnOpenTopologyTop" title="View Cluster Topology & Node Health">
              <i data-lucide="layers" style="width: 12px; height: 12px; color: ${i?"#a78bfa":"var(--accent-primary)"};"></i>
              <span class="vital-val" style="color: ${i?"#c084fc":"var(--accent-primary)"};">
                ${i?`${r} ${r===1?"Node":"Nodes"}`:"1 Node"}
              </span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="PING round-trip latency">
              <i data-lucide="zap" style="width: 11px; height: 11px; color: var(--accent-success);"></i>
              <span class="vital-val" style="color: var(--accent-success);">${a.latency_ms} ms</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item${s.length?" clickable":""}" id="btnOpenKeyspaceTop" title="${s.length?`Total keys across ${s.length} master nodes. Click for per-node breakdown`:"Total keys in active keyspace"}">
              <span class="vital-label">Keys:</span>
              <span class="vital-val">${(a.dbsize||0).toLocaleString()}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item clickable" id="btnOpenMemoryTop" title="Memory usage. Click to open Memory Analysis & BigKeys Profiler">
              <i data-lucide="pie-chart" style="width: 12px; height: 12px; color: #a78bfa;"></i>
              <span class="vital-val" style="color: #c084fc;">${a.used_memory_human||"N/A"}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item clickable" id="btnOpenClientsModal" title="Connected clients. Click to view clients list">
              <i data-lucide="users" style="width: 12px; height: 12px; color: #38bdf8;"></i>
              <span class="vital-val" style="color: #38bdf8;">${a.connected_clients||1}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="Redis server version">
              <span class="vital-label">v${a.redis_version}</span>
            </div>
          </div>
        `),p();const c=document.getElementById("btnTopDisconnect");c&&c.addEventListener("click",()=>{a.connection_id&&kt(a.connection_id)});const m=document.getElementById("btnOpenClientsModal");m&&m.addEventListener("click",no);const v=document.getElementById("btnOpenTopologyTop");v&&v.addEventListener("click",()=>Oe());const k=document.getElementById("btnOpenKeyspaceTop");k&&s.length&&k.addEventListener("click",Eo);const E=document.getElementById("btnOpenMemoryTop");E&&E.addEventListener("click",An)}else e&&(e.innerHTML=`
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${a.error?`<span class="top-conn-error" title="${d(a.error)}">${d(a.error)}</span>`:""}
          </div>
        `),t&&(t.innerHTML=`
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `),p(),Se===0&&z.length===0&&Et()}catch{e&&(e.innerHTML=`
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `),t&&(t.innerHTML=""),p()}}function So(){const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const l=parseInt(e.value,10)||2;try{const u=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:l})});if(u.ok){const g=await u.json();ae=g.limit,zn(g.connected_count,g.limit)}}catch(u){console.error("Failed to update limit:",u)}});const t=document.getElementById("clusterConfigModal");t&&t.addEventListener("click",l=>{l.target===t&&t.classList.remove("active")});const n=document.getElementById("connSearchInput"),a=document.getElementById("btnClearConnSearch");n&&n.addEventListener("input",()=>{Re=n.value,a&&(a.style.display=Re?"flex":"none"),Pe()}),a&&a.addEventListener("click",()=>{n&&(n.value="",n.focus()),Re="",a.style.display="none",Pe()});const o=document.querySelectorAll("#envFilterPills .env-pill-btn");o.forEach(l=>{l.addEventListener("click",()=>{o.forEach(u=>u.classList.remove("active")),l.classList.add("active"),bn=l.getAttribute("data-env")||"ALL",Pe()})});const i=document.getElementById("btnReloadConfig");i&&i.addEventListener("click",async()=>{i.disabled=!0;try{const u=await(await fetch("/api/connections/reload-config",{method:"POST"})).json(),g=u.loaded??u.total_in_file??0;alert(`Config reloaded successfully! Synced ${g} connection(s) from config.`),await oe()}catch(l){alert("Failed to reload config: "+l.message)}finally{i.disabled=!1}}),window.addEventListener("focus",()=>{oe().catch(()=>{})});let r=[];function s(){const l=document.getElementById("clusterNodesList"),u=document.getElementById("clusterNodeCountBadge");if(l){if(u&&(u.textContent=`${r.length} configured`),r.length===0){l.innerHTML=`
        <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
          No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
        </div>
      `;return}l.innerHTML=r.map((g,C)=>{const b=g.role==="master",B=g.role==="replica",L=g.role==="seed",_=b?"master":B?"replica":"",S=b?"master":B?"replica":L?"seed":"manual",R=b?"Master":B?"Replica":L?"Seed":"Node";return`
        <span class="cluster-node-chip ${_}">
          <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
          <span>${d(g.host)}:${g.port}</span>
          <span class="cluster-node-role-badge ${S}">${R}</span>
          <button type="button" class="cluster-node-chip-remove" data-idx="${C}" title="Remove node">
            <i data-lucide="x" style="width: 11px; height: 11px;"></i>
          </button>
        </span>
      `}).join(""),l.querySelectorAll(".cluster-node-chip-remove").forEach(g=>{g.addEventListener("click",C=>{C.stopPropagation();const b=parseInt(g.getAttribute("data-idx"),10);!isNaN(b)&&b>=0&&b<r.length&&(r.splice(b,1),s())})}),p()}}const c=document.getElementById("connTypeSelect"),m=document.getElementById("clusterNodesGroup"),v=document.getElementById("connHostLabel"),k=document.getElementById("connPortLabel"),E=document.getElementById("connHost"),x=document.getElementById("connPort"),y=document.getElementById("connDbGroup");c&&m&&c.addEventListener("change",()=>{const l=c.value==="cluster";m.style.display=l?"block":"none",y&&(y.style.display=l?"none":"block"),l?(v&&(v.textContent="Primary Seed Host *"),k&&(k.textContent="Seed Port *"),E&&(E.value==="localhost"||!E.value)&&(E.value="127.0.0.1"),x&&(x.value==="6379"||!x.value)&&(x.value="7000"),r.length===0&&E&&E.value&&x&&x.value&&r.push({host:E.value.trim(),port:parseInt(x.value,10)||7e3,role:"seed"}),s()):(v&&(v.textContent="Host *"),k&&(k.textContent="Port *"),x&&x.value==="7000"&&(x.value="6379"))});const h=document.getElementById("btnAutoDiscoverCluster"),f=document.getElementById("clusterDiscoveryStatus");h&&h.addEventListener("click",async()=>{const l=E?E.value.trim():"127.0.0.1",u=x&&parseInt(x.value,10)||7e3,g=document.getElementById("connUsername").value.trim()||null,C=document.getElementById("connPassword").value||null,b=document.getElementById("connTls").checked;if(!l){f&&(f.className="cluster-discovery-status error",f.style.display="flex",f.innerHTML='<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>',p());return}h.disabled=!0,h.innerHTML='<i class="lucide-spin" data-lucide="loader-2" style="width: 13px; height: 13px;"></i> Discovering...',p(),f&&(f.className="cluster-discovery-status",f.style.display="none");try{const L=await(await fetch("/api/connections/discover-cluster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:l,port:u,username:g,password:C,use_tls:b})})).json();L.success&&L.nodes&&L.nodes.length>0?(r=L.nodes.map(_=>({host:_.host,port:_.port,role:_.role,is_myself:_.is_myself,slots:_.slots})),s(),f&&(f.className="cluster-discovery-status success",f.style.display="flex",f.innerHTML=`
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${L.total_nodes} nodes</strong> (${L.masters_count} masters, ${L.replicas_count} replicas) • Cluster state: <strong>${L.cluster_state.toUpperCase()}</strong></span>
            `)):f&&(f.className="cluster-discovery-status error",f.style.display="flex",f.innerHTML=`
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${d(L.error||"Cluster discovery failed. Ensure seed node is part of a cluster.")}</span>
            `)}catch(B){f&&(f.className="cluster-discovery-status error",f.style.display="flex",f.innerHTML=`
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${d(B.message)}</span>
          `)}finally{h.disabled=!1,h.innerHTML='<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes',p()}});const A=document.getElementById("inputCustomClusterNode"),W=document.getElementById("btnAddCustomClusterNode");function F(){if(!A)return;const l=A.value.trim();if(!l)return;let u="127.0.0.1",g=7e3;if(l.includes(":")){const b=l.split(":");u=b[0].trim()||"127.0.0.1",g=parseInt(b[1].trim(),10)||7e3}else isNaN(parseInt(l,10))?u=l:(g=parseInt(l,10),u=E?E.value.trim():"127.0.0.1");r.some(b=>b.host===u&&b.port===g)||(r.push({host:u,port:g,role:"manual"}),s()),A.value=""}W&&W.addEventListener("click",F),A&&A.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),F())});const Ke=document.getElementById("clusterTopologyModal"),Ct=document.getElementById("btnCloseTopologyModal");Ct&&Ct.addEventListener("click",gn);const Lt=document.getElementById("btnRefreshTopologyModal");Lt&&Lt.addEventListener("click",jn),Ke&&Ke.addEventListener("click",l=>{l.target===Ke&&gn()});const je=document.getElementById("topologySearchInput");je&&je.addEventListener("input",()=>{wn=je.value,pt()}),document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(u=>u.classList.remove("active")),l.classList.add("active"),xn=l.getAttribute("data-role")||"all",pt()})});const St=document.getElementById("keyspaceNodesModal");document.getElementById("btnCloseKeyspaceModal").addEventListener("click",it),document.getElementById("btnRefreshKeyspaceModal").addEventListener("click",On),document.getElementById("btnKeyspaceOpenTopology").addEventListener("click",()=>{it(),Oe()}),St.addEventListener("click",l=>{l.target===St&&it()});const $t=document.getElementById("clientsListModal");document.getElementById("btnCloseClientsModal").addEventListener("click",cn),document.getElementById("btnRefreshClientsModal").addEventListener("click",gt),$t.addEventListener("click",l=>{l.target===$t&&cn()});const Ue=document.getElementById("clientsSearchInput");Ue&&Ue.addEventListener("input",()=>{const l=Ue.value.trim().toLowerCase(),u=l?ye.filter(g=>g.addr&&g.addr.toLowerCase().includes(l)||g.ip&&g.ip.toLowerCase().includes(l)||g.name&&g.name.toLowerCase().includes(l)||g.cmd&&g.cmd.toLowerCase().includes(l)||g.user&&g.user.toLowerCase().includes(l)||g.id&&String(g.id).includes(l)):ye;Rn(u)});const It=document.getElementById("btnOpenBenchmarkModal");It&&It.addEventListener("click",po);const Ve=document.getElementById("benchmarkModal"),Tt=document.getElementById("btnCloseBenchmarkModal");Tt&&Tt.addEventListener("click",yn),Ve&&Ve.addEventListener("click",l=>{l.target===Ve&&yn()}),document.querySelectorAll(".benchmark-tab-btn").forEach(l=>{l.addEventListener("click",()=>{const u=l.getAttribute("data-tab");u&&Dn(u)})});const Bt=document.getElementById("btnRunProbe");Bt&&Bt.addEventListener("click",mo);const Mt=document.getElementById("btnRunCommandBench");Mt&&Mt.addEventListener("click",yo);const qe=document.getElementById("selLuaPreset");qe&&qe.addEventListener("change",()=>{const l=qe.value,u=Ae[l];if(u){const g=document.getElementById("txtLuaScript"),C=document.getElementById("txtLuaKeys"),b=document.getElementById("txtLuaArgs");g&&(g.value=u.script),C&&(C.value=u.keys),b&&(b.value=u.args)}});const Ge=document.getElementById("selLuaMode"),_t=document.getElementById("groupLuaBenchmarkControls");Ge&&_t&&Ge.addEventListener("change",()=>{_t.style.display=Ge.value==="benchmark"?"flex":"none"});const Rt=document.getElementById("btnRunLuaBench");Rt&&Rt.addEventListener("click",vo);const At=document.getElementById("btnRunClusterMatrix");At&&At.addEventListener("click",fo);const Pt=document.getElementById("btnOpenSlowlog");Pt&&Pt.addEventListener("click",oo);const Nt=document.getElementById("btnOpenMemoryModal");Nt&&Nt.addEventListener("click",An);const Je=document.getElementById("slowlogModal"),Dt=document.getElementById("btnCloseSlowlogModal");Dt&&Dt.addEventListener("click",pn);const zt=document.getElementById("btnRefreshSlowlogModal");zt&&zt.addEventListener("click",vt);const Ht=document.getElementById("btnClearSlowlogModal");Ht&&Ht.addEventListener("click",lo),Je&&Je.addEventListener("click",l=>{l.target===Je&&pn()});const We=document.getElementById("slowlogSearchInput");We&&We.addEventListener("input",()=>{De=We.value.trim(),He()}),document.querySelectorAll(".slowlog-filter-btn").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(u=>u.classList.remove("active")),l.classList.add("active"),Ne=parseFloat(l.getAttribute("data-min-duration")||"0"),He()})});const Ye=document.getElementById("memoryModal"),Ft=document.getElementById("btnCloseMemoryModal");Ft&&Ft.addEventListener("click",dt);const Ot=document.getElementById("btnRefreshMemoryModal");Ot&&Ot.addEventListener("click",Pn),Ye&&Ye.addEventListener("click",l=>{l.target===Ye&&dt()});let ie=null;window.openEditConnectionModal=function(l){ie=l.id;const u=document.getElementById("connectionModal"),g=document.getElementById("connectionModalTitle"),C=document.getElementById("btnSaveConnModal"),b=document.getElementById("connPassword");g&&(g.innerHTML='<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection'),C&&(C.textContent="Update Connection"),document.getElementById("connName").value=l.name||"",document.getElementById("connEnv").value=(l.env||"DEV").toUpperCase();const B=document.getElementById("connTypeSelect");B.value=l.conn_type||"standalone",document.getElementById("connHost").value=l.host||"localhost",document.getElementById("connPort").value=l.port||6379,document.getElementById("connDb").value=l.db||0,document.getElementById("connUsername").value=l.username||"",document.getElementById("connTls").checked=!!l.use_tls,document.getElementById("connReadOnly").checked=!!l.read_only,b.value="",l.has_password?b.placeholder="•••••••• (Leave blank to keep saved password)":b.placeholder="Enter password (or leave empty)";const L=document.getElementById("clusterNodesGroup"),_=document.getElementById("connHostLabel"),S=document.getElementById("connDbRow");if(r=[],l.conn_type==="cluster"){if(L.style.display="block",_.textContent="Seed Node Host *",S.style.display="none",l.cluster_nodes)try{const T=typeof l.cluster_nodes=="string"?JSON.parse(l.cluster_nodes):l.cluster_nodes;Array.isArray(T)&&(r=T.map(I=>{if(typeof I=="string"&&I.includes(":")){const P=I.split(":");return{host:P[0].trim(),port:parseInt(P[1],10)||6379}}return{host:I.host||"127.0.0.1",port:parseInt(I.port,10)||6379}}))}catch{}}else L.style.display="none",_.textContent="Host *",S.style.display="flex";s();const R=document.getElementById("testResultBox");R&&(R.className="test-result-box",R.innerHTML=""),p(),u.classList.add("active")};const Kt=document.getElementById("connEnv");Kt&&Kt.addEventListener("change",l=>{if(l.target.value==="PROD"){const u=document.getElementById("connReadOnly");u&&(u.checked=!0)}});const se=document.getElementById("connectionModal");document.getElementById("btnAddConn").addEventListener("click",()=>{ie=null,document.getElementById("connectionForm").reset();const l=document.getElementById("connectionModalTitle"),u=document.getElementById("btnSaveConnModal"),g=document.getElementById("connPassword");l&&(l.innerHTML='<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection'),u&&(u.textContent="Save Connection"),g&&(g.placeholder="Leave empty if none");const C=document.getElementById("connEnv").value;document.getElementById("connReadOnly").checked=C==="PROD",document.getElementById("clusterNodesGroup").style.display="none",document.getElementById("connHostLabel").textContent="Host *",document.getElementById("connDbRow").style.display="flex",r=[],s();const b=document.getElementById("testResultBox");b&&(b.className="test-result-box",b.innerHTML=""),p(),se.classList.add("active")}),document.getElementById("btnCloseModal").addEventListener("click",()=>{se.classList.remove("active")}),document.getElementById("btnCancelModal").addEventListener("click",()=>{se.classList.remove("active")}),se.addEventListener("click",l=>{l.target===se&&se.classList.remove("active")});const be=document.getElementById("keyDetailModal");document.getElementById("btnCloseDetailModal").addEventListener("click",()=>{be.classList.remove("active")}),be.addEventListener("click",l=>{l.target===be&&be.classList.remove("active")});const Ze=document.getElementById("btnDownloadKeyValue");Ze&&Ze.addEventListener("click",()=>to(Z,Ze)),document.getElementById("btnCopyKeyName").addEventListener("click",()=>{Z&&(navigator.clipboard.writeText(Z),alert(`Copied '${Z}' to clipboard!`))}),document.getElementById("btnDeleteKeyFromDetail").addEventListener("click",()=>{Z&&Fe(Z,()=>{be.classList.remove("active"),N()})});const jt=document.getElementById("deleteKeyConfirmModal");document.getElementById("btnCloseDeleteConfirmModal").addEventListener("click",()=>{jt.classList.remove("active")}),document.getElementById("btnCancelDeleteConfirm").addEventListener("click",()=>{jt.classList.remove("active")}),document.getElementById("btnTestConnModal").addEventListener("click",async()=>{const l=document.getElementById("connTypeSelect").value,u=document.getElementById("connHost").value.trim()||"localhost",g=parseInt(document.getElementById("connPort").value,10)||6379,C=parseInt(document.getElementById("connDb").value,10)||0,b=document.getElementById("connUsername").value.trim()||null,B=document.getElementById("connPassword").value,L=document.getElementById("connTls").checked;let _=null;l==="cluster"&&r.length>0&&(_=JSON.stringify(r.map(T=>({host:T.host,port:T.port}))));const S=document.getElementById("testResultBox"),R=document.getElementById("btnTestConnModal");R.disabled=!0,R.innerHTML="Testing...",S.className="test-result-box",S.innerHTML="";try{let T;ie&&!B?T=await fetch(`/api/connections/${ie}/test`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:u,port:g,db:C,username:b,use_tls:L,conn_type:l,cluster_nodes:_})}):T=await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:u,port:g,db:C,username:b,password:B||null,use_tls:L,conn_type:l,cluster_nodes:_})});const I=await T.json();if(I.success){S.className="test-result-box success";const P=I.is_cluster?` • Cluster Mode (${I.cluster_nodes_count||r.length} nodes reachable)`:"";S.innerHTML=`
          <i data-lucide="check-circle-2"></i>
          <span>Connected! Latency: <strong>${I.latency_ms} ms</strong>${P} (Redis v${I.redis_version})</span>
        `}else S.className="test-result-box error",S.innerHTML=`
          <i data-lucide="alert-circle"></i>
          <span>Failed: ${d(I.error||"Connection refused")}</span>
        `}catch(T){S.className="test-result-box error",S.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Error: ${d(T.message)}</span>
      `}finally{R.disabled=!1,R.innerHTML='<i data-lucide="zap"></i> Test Connection',p()}}),document.getElementById("connectionForm").addEventListener("submit",async l=>{l.preventDefault();const u=document.getElementById("connName").value.trim(),g=document.getElementById("connEnv").value,C=document.getElementById("connTypeSelect").value;let b=document.getElementById("connHost").value.trim()||"localhost",B=parseInt(document.getElementById("connPort").value,10)||6379;const L=parseInt(document.getElementById("connDb").value,10)||0,_=document.getElementById("connUsername").value.trim()||null,S=document.getElementById("connPassword").value,R=document.getElementById("connTls").checked,T=document.getElementById("connAutoActivate").checked,I=document.getElementById("connReadOnly")?.checked||!1;let P=null;C==="cluster"&&(r.length>0?(P=JSON.stringify(r.map(Y=>({host:Y.host,port:Y.port}))),b=r[0].host,B=r[0].port):P=JSON.stringify([{host:b,port:B}]));try{if(ie){const Y={name:u,env:g,conn_type:C,host:b,port:B,cluster_nodes:P,db:L,username:_,use_tls:R,read_only:I};S&&(Y.password=S);const ke=await fetch(`/api/connections/${ie}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y)});if(!ke.ok){const nt=await ke.json().catch(()=>({}));throw new Error(nt.detail||"Failed to update connection")}}else{const Y={name:u,env:g,conn_type:C,host:b,port:B,cluster_nodes:P,db:L,username:_,password:S||null,use_tls:R,read_only:I},ke=await fetch(`/api/connections?auto_activate=${T}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y)});if(!ke.ok){const nt=await ke.json().catch(()=>({}));throw new Error(nt.detail||"Failed to save connection")}}se.classList.remove("active"),ie=null,document.getElementById("connectionForm").reset(),r=[],s(),await oe(),await J(),await N()}catch(Y){alert("Error saving: "+Y.message)}}),document.getElementById("btnRefreshStats").addEventListener("click",J);const $e=document.getElementById("keySearchInput");let Qe=null;$e.addEventListener("input",()=>{clearTimeout(Qe),Qe=setTimeout(()=>{D=$e.value.trim()||"*",N(),G&&Me()},400)}),$e.addEventListener("keydown",l=>{l.key==="Enter"&&(clearTimeout(Qe),D=$e.value.trim()||"*",N(),G&&Me())}),document.querySelectorAll(".type-tab").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll(".type-tab").forEach(u=>u.classList.remove("active")),l.classList.add("active"),O=l.getAttribute("data-type"),N(),G&&Me()})});const xe=document.getElementById("btnViewTable"),we=document.getElementById("btnViewTree");xe&&xe.addEventListener("click",()=>{Le="table",localStorage.setItem("redis_insight_view_mode","table"),xe.classList.add("active"),we&&we.classList.remove("active"),lt()}),we&&we.addEventListener("click",()=>{Le="tree",localStorage.setItem("redis_insight_view_mode","tree"),we.classList.add("active"),xe&&xe.classList.remove("active"),lt()});const Ie=document.getElementById("scanBatchSizeSelect");Ie&&(Ie.value=String(ze),Ie.addEventListener("change",()=>{const l=parseInt(Ie.value,10);ze=kn.includes(l)?l:50,rn()})),rn();const Ut=document.getElementById("btnScanNext");Ut&&Ut.addEventListener("click",()=>Cn());const Vt=document.getElementById("btnResetScan");Vt&&Vt.addEventListener("click",()=>{N(),G&&Me()});const qt=document.getElementById("btnToggleAutoRefresh"),Te=document.getElementById("autoRefreshIntervalSelect");Te&&(Te.value=String(H),Te.addEventListener("change",()=>{const l=Math.max(5,parseInt(Te.value,10)||10);H=l,j=l,localStorage.setItem("redis_insight_auto_refresh_sec",String(l)),G?En():ce()})),qt&&qt.addEventListener("click",()=>{ja()}),ce();const Xe=document.getElementById("exportKeysModal"),Gt=document.getElementById("btnOpenExportModal"),Jt=document.getElementById("btnCloseExportModal"),Wt=document.getElementById("btnCancelExportModal"),pe=document.getElementById("btnExecuteExport");if(Gt&&Xe){Gt.addEventListener("click",()=>{document.getElementById("exportPatternDisplay").textContent=D||"*",document.getElementById("exportTypeDisplay").textContent=O&&O!=="all"?O.toUpperCase():"All Types",document.getElementById("exportLoadedCount").textContent=`${z.length} keys`,document.getElementById("exportScopeLoadedText").textContent=`${z.length} keys`,Xe.classList.add("active"),p()});const l=()=>Xe.classList.remove("active");Jt&&Jt.addEventListener("click",l),Wt&&Wt.addEventListener("click",l),pe&&pe.addEventListener("click",async()=>{const u=document.querySelector('input[name="exportFormatRadio"]:checked'),g=document.querySelector('input[name="exportScopeRadio"]:checked'),C=(u?u.value:"csv").toLowerCase(),b=g?g.value:"loaded",B=D||"*",L=O&&O!=="all"?O:"",S=`redis_keys_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.${C}`;if(b==="all"){pe.disabled=!0,pe.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Exporting...',p();try{let T=`/api/keys/export?pattern=${encodeURIComponent(B)}&format=${C}`;L&&(T+=`&type=${encodeURIComponent(L)}`);const I=await fetch(T);if(!I.ok){const P=await I.json().catch(()=>({detail:"Export failed"}));throw new Error(P.detail||`Server error: ${I.status}`)}await _n(I,S,C),l()}catch(T){alert(`Export failed: ${T.message}`)}finally{pe.disabled=!1,pe.innerHTML='<i data-lucide="download" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Download',p()}return}if(z.length===0){alert("No keys loaded in browser to export.");return}let R;if(C==="csv"){const T=`Key,Type,TTL_Seconds
`,I=z.map(P=>`"${(P.key||"").replace(/"/g,'""')}",${P.type||""},${P.ttl_seconds!==void 0?P.ttl_seconds:-1}`);R=new Blob([T+I.join(`
`)],{type:"text/csv;charset=utf-8;"})}else{const T=z.map(I=>I.key);R=new Blob([T.join(`
`)+`
`],{type:"text/plain;charset=utf-8;"})}Mn(R,S),l()})}const et=document.getElementById("bulkDeleteModal"),Yt=document.getElementById("btnOpenBulkDeleteModal"),Zt=document.getElementById("btnCloseBulkDeleteModal"),Qt=document.getElementById("btnCancelBulkDelete"),U=document.getElementById("btnConfirmBulkDelete"),me=document.getElementById("bdCountConfirmInput"),le=document.getElementById("bdProdConfirmInput"),Xt=document.getElementById("bdProdConfirmGroup"),en=document.getElementById("bulkDeleteProdBanner"),tt=document.getElementById("bulkDeleteDryRunStatus"),tn=document.getElementById("bulkDeleteDetails");let V=null;function nn(){if(!V||!U)return;const l=String(V.matched_count),g=(me?.value||"").trim()===l&&V.matched_count>0;let C=!0;V.is_prod&&(C=(le?.value||"").trim().toUpperCase()==="PROD"),U.disabled=!(g&&C)}if(me&&me.addEventListener("input",nn),le&&le.addEventListener("input",nn),Yt&&et){Yt.addEventListener("click",async()=>{if($?.read_only){alert("Bulk Delete is disabled in Read-Only mode.");return}const u=D||"*",g=O&&O!=="all"?O:null;V=null,me&&(me.value=""),le&&(le.value=""),U&&(U.disabled=!0),tt.style.display="block",tn.style.display="none",et.classList.add("active"),p();try{const C=await fetch("/api/keys/bulk-delete/dry-run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:u,type_filter:g})});if(!C.ok){const S=await C.json().catch(()=>({detail:"Dry run failed"}));throw new Error(S.detail||"Dry run failed")}const b=await C.json();V=b,document.getElementById("bdPatternDisplay").textContent=b.pattern,document.getElementById("bdTypeDisplay").textContent=b.type_filter?b.type_filter.toUpperCase():"All Types",document.getElementById("bdCountDisplay").textContent=b.matched_count.toLocaleString(),document.getElementById("bdRequiredCountText").textContent=String(b.matched_count),b.is_prod?(en.style.display="block",Xt.style.display="block"):(en.style.display="none",Xt.style.display="none");const B=document.getElementById("bdPerNodeBreakdown"),L=Object.entries(b.per_node_counts||{});L.length>1?(B.innerHTML="<strong>Per-node breakdown:</strong> "+L.map(([S,R])=>`${d(S)}: ${R.toLocaleString()}`).join(" &bull; "),B.style.display="block"):B.style.display="none";const _=document.getElementById("bdSampleKeysList");b.sample_keys&&b.sample_keys.length>0?(_.innerHTML=b.sample_keys.map(S=>`<div>${d(S)}</div>`).join(""),document.getElementById("bdSampleKeysSection").style.display="block"):document.getElementById("bdSampleKeysSection").style.display="none",tt.style.display="none",tn.style.display="flex",p()}catch(C){tt.innerHTML=`
          <div style="color: var(--accent-danger);">
            <i data-lucide="alert-circle" style="width: 20px; height: 20px; margin-bottom: 0.35rem; display: inline-block;"></i>
            <div>Failed to calculate dry-run: ${d(C.message)}</div>
          </div>
        `,p()}});const l=()=>et.classList.remove("active");Zt&&Zt.addEventListener("click",l),Qt&&Qt.addEventListener("click",l),U&&U.addEventListener("click",async()=>{if(V){U.disabled=!0,U.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlinking...',p();try{const u=await fetch("/api/keys/bulk-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:V.pattern,type_filter:V.type_filter,expected_count:V.matched_count,confirmed_count:parseInt(me.value.trim(),10),confirmed_env:le?le.value.trim():null})});if(!u.ok){const C=await u.json().catch(()=>({detail:"Bulk delete failed"}));throw new Error(C.detail||"Bulk delete failed")}const g=await u.json();alert(`Bulk delete complete!
${g.message} (Duration: ${g.duration_ms}ms)`),l(),N()}catch(u){alert(`Bulk delete error: ${u.message}`),U.disabled=!1,U.innerHTML='<i data-lucide="trash-2" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlink Keys',p()}}})}function Be(l){const u=document.querySelector(".sidebar"),g=document.getElementById("btnShowSidebar");u&&(l?(u.classList.add("collapsed"),g&&(g.style.display="inline-flex"),localStorage.setItem("redis_insight_sidebar_collapsed","true")):(u.classList.remove("collapsed"),g&&(g.style.display="none"),localStorage.setItem("redis_insight_sidebar_collapsed","false")),p())}const an=document.getElementById("btnToggleSidebar");an&&an.addEventListener("click",()=>Be(!0));const on=document.getElementById("btnShowSidebar");on&&on.addEventListener("click",()=>Be(!1)),localStorage.getItem("redis_insight_sidebar_collapsed")==="true"&&Be(!0),document.addEventListener("keydown",l=>{if((l.ctrlKey||l.metaKey)&&l.key.toLowerCase()==="b"){const u=document.querySelector(".sidebar"),g=u&&u.classList.contains("collapsed");Be(!g),l.preventDefault()}}),document.addEventListener("keydown",l=>{l.key==="Escape"&&document.querySelectorAll(".modal-backdrop.active").forEach(g=>g.classList.remove("active"))}),document.querySelectorAll(".modal-backdrop").forEach(l=>{l.addEventListener("click",u=>{u.target===l&&l.classList.remove("active")})}),setInterval(J,15e3)}async function vn(){Oa(),p(),So();try{await oe(),await J()}catch(t){console.error("Failed to load initial status:",t)}M.find(t=>t.is_connected&&t.is_selected)||M.find(t=>t.is_connected)?await N():Et()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",vn):vn();
