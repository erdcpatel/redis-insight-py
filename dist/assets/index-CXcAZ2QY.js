(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const vt=[50,100,200,500,1e3,2e3,5e3,1e4],bt=200,i={activeWorkspaceTab:"keys",allConnectedClients:[],allSlowlogEntries:[],currentSlowlogMinDuration:0,currentSlowlogSearch:"",currentSlowlogNode:"all",currentViewMode:localStorage.getItem("redis_insight_view_mode")||"table",activeTreeDelimiters:(()=>{try{const t=localStorage.getItem("redis_insight_tree_delimiters_global");if(t){const n=JSON.parse(t);if(Array.isArray(n)&&n.length>0)return n}}catch{}const e=localStorage.getItem("redis_insight_tree_delimiter");return e&&e!=="auto"?[e]:[":","/","."]})(),customTreeDelimiters:(()=>{try{const e=localStorage.getItem("redis_insight_custom_delimiters");if(e){const t=JSON.parse(e);if(Array.isArray(t))return t}}catch{}return[]})(),treeDelimiterPreset:localStorage.getItem("redis_insight_tree_delimiter_preset")||"auto",get currentTreeDelimiter(){return this.treeDelimiterPreset||this.activeTreeDelimiters&&this.activeTreeDelimiters[0]||"auto"},set currentTreeDelimiter(e){this.treeDelimiterPreset=e},treeExpandedPaths:new Set,treeInitialized:!1,currentTreeFilterQuery:"",currentMemoryOverview:null,currentMemoryAnalysis:null,isMemoryProfilingRunning:!1,bigkeysSearchQuery:"",currentCursor:0,currentPattern:"*",currentType:"all",currentTtlFilter:"all",isScanning:!1,totalScanned:0,scanComplete:!1,dbTotalKeys:0,lastStatus:null,keysTableRows:[],loadedKeysSet:new Set,isAutoRefreshActive:!1,autoRefreshIntervalSec:(()=>{let e=parseInt(localStorage.getItem("redis_insight_auto_refresh_sec")||"10",10);return isNaN(e)||e<5?10:e})(),autoRefreshRemainingSec:10,autoRefreshTimer:null,activeDetailKey:null,activeDetailData:null,hashFieldsState:null,pendingDeleteKey:null,pendingDeleteCallback:null,cachedConnections:[],currentEnvFilter:"ALL",currentConnSearch:"",currentTopologyData:null,currentTopologyRole:"all",currentTopologySearch:"",currentLimit:2,activeConfigConn:null,currentScanEpoch:0,scanBatchSize:50};function m(e){return e==null?"":String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(e,t,n=[])=>{const a=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{a.setAttribute(o,String(t[o]))}),n.length&&n.forEach(o=>{const s=Ge(...o);a.appendChild(s)}),a};var xt=([e,t,n])=>Ge(e,t,n);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),kt=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Ct=e=>e.flatMap(kt).map(n=>n.trim()).filter(Boolean).filter((n,a,o)=>o.indexOf(n)===a).join(" "),Et=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,a)=>n.toUpperCase()+a.toLowerCase()),ze=(e,{nameAttr:t,icons:n,attrs:a})=>{const o=e.getAttribute(t);if(o==null)return;const s=Et(o),l=n[s];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const r=wt(e),[d,p,y]=l,h={...p,"data-lucide":o,...a,...r},v=Ct(["lucide",`lucide-${o}`,r,a]);v&&Object.assign(h,{class:v});const x=xt([d,h,y]);return e.parentNode?.replaceChild(x,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=["svg",b,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=["svg",b,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=["svg",b,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=["svg",b,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=["svg",b,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=["svg",b,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=["svg",b,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=["svg",b,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=["svg",b,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=["svg",b,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=["svg",b,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=["svg",b,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=["svg",b,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=["svg",b,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=["svg",b,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=["svg",b,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=["svg",b,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=["svg",b,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=["svg",b,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=["svg",b,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=["svg",b,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=["svg",b,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=["svg",b,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=["svg",b,[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=["svg",b,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=["svg",b,[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=["svg",b,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=["svg",b,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=["svg",b,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",b,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",b,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",b,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",b,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",b,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",b,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",b,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",b,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",b,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",b,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",b,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",b,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",b,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",b,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",b,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",b,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",b,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const a=document.querySelectorAll(`[${t}]`);if(Array.from(a).forEach(o=>ze(o,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(s=>ze(s,{nameAttr:"icon-name",icons:e,attrs:n})))}};function g(){vn({icons:{Layers:Jt,Plus:tn,RefreshCw:an,Search:on,Cpu:zt,Trash2:mn,Zap:hn,CheckCircle2:Dt,AlertCircle:_t,Database:Ft,ShieldCheck:ln,Lock:Qt,ArrowDownCircle:Rt,X:fn,Play:en,Copy:Nt,Clock:At,Edit:dn,ExternalLink:Ot,Code:Pt,Users:gn,Server:sn,Network:Zt,GitBranch:Gt,ArrowRightLeft:Lt,Activity:St,PieChart:$t,AlertTriangle:yn,TrendingUp:un,BarChart2:Tt,Power:nn,ChevronLeft:Bt,ChevronRight:Mt,PanelLeft:Xt,Download:Ht,FileText:Kt,Folder:qt,FolderOpen:Ut,FolderTree:Vt,Table:cn,List:Yt,ChevronDown:It,Key:Wt,Filter:jt,Timer:pn,Sparkles:rn}})}const fe={};function ie(e,t){fe[e]=t}let ye=!1;function N(e,t=!0){if(!ye){ye=!0;try{["keys","benchmark","memory","slowlog","topology","clients"].includes(e)||(e="keys"),i.activeWorkspaceTab=e,document.querySelectorAll(".ws-tab-btn").forEach(l=>{const r=l.dataset.tab===e;l.classList.toggle("active",r),l.setAttribute("aria-selected",r?"true":"false")}),document.querySelectorAll(".ws-tab-pane").forEach(l=>{l.classList.remove("active")});const a=document.getElementById(`paneWorkspace${bn(e)}`);if(a&&a.classList.add("active"),Object.entries({benchmark:"benchmarkModal",memory:"memoryModal",slowlog:"slowlogModal",topology:"clusterTopologyModal",clients:"clientsListModal"}).forEach(([l,r])=>{const d=document.getElementById(r);d&&(l===e?d.classList.add("active"):d.classList.remove("active"))}),Object.entries({benchmark:"btnOpenBenchmarkModal",slowlog:"btnOpenSlowlog",memory:"btnOpenMemoryModal",topology:"btnOpenTopologyTop",clients:"btnOpenClientsModal"}).forEach(([l,r])=>{const d=document.getElementById(r);d&&d.classList.toggle("active",l===e)}),t&&history.replaceState(null,"",`#/${e}`),fe[e])try{fe[e]()}catch(l){console.warn(`Error loading data for tab ${e}:`,l)}g()}finally{ye=!1}}}function bn(e){return e.charAt(0).toUpperCase()+e.slice(1)}function xn(){const e=document.getElementById("workspaceTabsBar");e&&e.addEventListener("click",t=>{const n=t.target.closest(".ws-tab-btn");n&&n.dataset.tab&&N(n.dataset.tab)}),window.addEventListener("hashchange",()=>{Fe()}),window.addEventListener("keydown",t=>{const n=document.activeElement?document.activeElement.tagName.toLowerCase():"";if(!(n==="input"||n==="textarea"||n==="select")&&(t.ctrlKey||t.metaKey)&&!t.shiftKey&&!t.altKey){const a={1:"keys",2:"benchmark",3:"memory",4:"slowlog",5:"topology",6:"clients"};a[t.key]&&(t.preventDefault(),N(a[t.key]))}}),Fe()}function Fe(){const t=(window.location.hash||"").match(/^#\/([a-z0-9_-]+)/i);if(t){const n=t[1].toLowerCase();if(["keys","benchmark","memory","slowlog","topology","clients"].includes(n)){N(n,!1);return}}N("keys",!1)}let We="probe",U=!1;const se={counter:{script:`local k = KEYS[1] or 'bench_counter'
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
return redis.call('PING')`,keys:"my_key",args:""}};function $e(e){if(!e)return"";const t=Number(e.network_overhead_ms||0).toFixed(3),n=Number(e.server_exec_ms||0).toFixed(3);return`
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
  `}function Ie(e){return e?`
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
  `:""}function Be(e){return!e||!e.length?"":`
    <div class="histogram-card">
      <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-main); display: flex; align-items: center; gap: 0.35rem;">
        <i data-lucide="bar-chart-2" style="width: 14px; height: 14px; color: #f59e0b;"></i>
        <span>Latency Bucket Distribution</span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.45rem;">
        ${e.map(t=>`
          <div class="histogram-row">
            <span class="histogram-label">${m(t.label)}</span>
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
  `}function Je(){const e=document.getElementById("benchmarkTargetSubtitle");e&&i.lastStatus&&(e.textContent=`Active Target: ${i.lastStatus.host}:${i.lastStatus.port} (${i.lastStatus.env||"LOCAL"}) | Engine: AsyncIO Native | Namespace: __ri_bench__`);const t=document.getElementById("benchmarkReadOnlyBadge"),n=document.getElementById("optCommandPresetWrite"),a=document.getElementById("optCommandPresetStruct");if(i.lastStatus?.read_only){t&&(t.style.display="inline-flex"),n&&(n.disabled=!0,n.textContent="Write / Set (Disabled - Read-Only)"),a&&(a.disabled=!0,a.textContent="Data Structures (Disabled - Read-Only)");const s=document.getElementById("selCommandPreset");s&&(s.value==="write"||s.value==="structures")&&(s.value="read")}else t&&(t.style.display="none"),n&&(n.disabled=!1,n.textContent="Write / Set (100% SET)"),a&&(a.disabled=!1,a.textContent="Data Structures (HSET / HGET)");const o=document.getElementById("txtLuaScript");if(o&&!o.value.trim()){o.value=se.counter.script;const s=document.getElementById("txtLuaKeys"),l=document.getElementById("txtLuaArgs");s&&(s.value=se.counter.keys),l&&(l.value=se.counter.args)}Ye(We||"probe")}function wn(){N("benchmark"),Je()}function kn(){N("keys")}function Ye(e){We=e,document.querySelectorAll(".benchmark-tab-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-tab")===e)});const t={probe:document.getElementById("benchmarkPaneProbe"),commands:document.getElementById("benchmarkPaneCommands"),lua:document.getElementById("benchmarkPaneLua"),cluster:document.getElementById("benchmarkPaneCluster")};Object.keys(t).forEach(n=>{t[n]&&(t[n].style.display=n===e?"flex":"none")}),g()}async function Cn(){if(U)return;const e=document.getElementById("btnRunProbe"),t=document.getElementById("benchmarkProbeResults"),n=document.getElementById("selProbeCount"),a=parseInt(n?.value||"100",10);U=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Running Probe (${a})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Executing ${a} baseline probes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring network round-trip time vs Redis event-loop CPU duration</div>
      </div>
    `,g());try{const o=await fetch("/api/benchmark/probe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({count:a})});if(!o.ok){const l=await o.json().catch(()=>({detail:"Probe request failed"}));throw new Error(l.detail||"Probe failed")}const s=await o.json();En(s)}catch(o){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Latency Probe Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${m(o.message)}</div>
        </div>
      `,g())}finally{U=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Run Latency Probe</span>',g())}}function En(e){const t=document.getElementById("benchmarkProbeResults");if(!t||!e)return;const n=Number(e.avg_rtt_ms||0).toFixed(3),a=Number(e.breakdown?.server_exec_ms||0).toFixed(3),o=Number(e.breakdown?.network_overhead_ms||0).toFixed(3),s=Number(e.ops_per_sec||0).toLocaleString();t.innerHTML=`
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
        <div class="val" style="color: #fbbf24;">${s} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        <div class="sub">${e.count} probes in ${e.duration_ms}ms</div>
      </div>
    </div>

    ${$e(e.breakdown)}
    ${Ie(e.percentiles)}
    ${Be(e.histogram)}
  `,g()}async function Sn(){if(U)return;const e=document.getElementById("btnRunCommandBench"),t=document.getElementById("benchmarkCommandResults"),n=document.getElementById("selCommandPreset")?.value||"read",a=parseInt(document.getElementById("selCommandRequests")?.value||"1000",10),o=parseInt(document.getElementById("selCommandConcurrency")?.value||"5",10),s=parseInt(document.getElementById("selCommandPipeline")?.value||"1",10);U=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Benchmarking (${a})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #f59e0b; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Running synthetic workload (${n})...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">
          Executing ${a.toLocaleString()} requests across ${o} workers (pipeline: ${s})
        </div>
      </div>
    `,g());try{const l=await fetch("/api/benchmark/commands",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset:n,requests:a,concurrency:o,pipeline:s})});if(!l.ok){const d=await l.json().catch(()=>({detail:"Benchmark request failed"}));throw new Error(d.detail||"Benchmark failed")}const r=await l.json();Ln(r)}catch(l){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Benchmark Execution Blocked</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${m(l.message)}</div>
        </div>
      `,g())}finally{U=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Start Benchmark</span>',g())}}function Ln(e){const t=document.getElementById("benchmarkCommandResults");if(!t||!e)return;const n=Number(e.ops_per_sec||0).toLocaleString(),a=Number(e.avg_latency_ms||0).toFixed(3),o=Number(e.percentiles?.p99_ms||0).toFixed(3),s=Number(e.cleaned_keys_count||0).toLocaleString();t.innerHTML=`
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
        <div class="val" style="color: #6ee7b7;">${s}</div>
        <div class="sub">Auto-unlinked via UNLINK</div>
      </div>
    </div>

    ${$e(e.breakdown)}
    ${Ie(e.percentiles)}
    ${Be(e.histogram)}
  `,g()}async function Tn(){if(U)return;const e=document.getElementById("btnRunLuaBench"),t=document.getElementById("benchmarkLuaResults"),n=document.getElementById("txtLuaScript")?.value||"",a=document.getElementById("txtLuaKeys")?.value||"",o=document.getElementById("txtLuaArgs")?.value||"",s=document.getElementById("selLuaMode")?.value||"profile",l=parseInt(document.getElementById("selLuaIterations")?.value||"100",10),r=a.split(",").map(p=>p.trim()).filter(Boolean),d=o.split(",").map(p=>p.trim()).filter(Boolean);if(!n.trim()){alert("Please enter a Lua script to execute and profile.");return}U=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Executing Script...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Pre-loading and running Lua script on Redis server...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring precise microsecond server execution time</div>
      </div>
    `,g());try{const p=await fetch("/api/benchmark/lua",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({script:n,keys:r,args:d,mode:s,iterations:l,concurrency:5})});if(!p.ok){const h=await p.json().catch(()=>({detail:"Lua benchmark failed"}));throw new Error(h.detail||"Lua benchmark failed")}const y=await p.json();$n(y)}catch(p){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Lua Script Execution Error</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${m(p.message)}</div>
        </div>
      `,g())}finally{U=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Execute & Profile</span>',g())}}function $n(e){const t=document.getElementById("benchmarkLuaResults");if(!t||!e)return;const n=Number(e.server_duration_ms||0).toFixed(3),a=Number(e.duration_ms||0).toFixed(3);let o="";e.atomicity_warning?o=`
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
    `;let s="";e.mode==="benchmark"&&e.ops_per_sec&&(s=`
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
      ${Ie(e.percentiles)}
      ${Be(e.histogram)}
    `),t.innerHTML=`
    ${o}

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem;">
      <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.35rem;">
        Script Return Value (Evaluated on Server)
      </div>
      <pre style="margin: 0; background: #090d16; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: #38bdf8; font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto;">${m(String(e.result))}</pre>
    </div>

    ${$e(e.breakdown)}
    ${s}
  `,g()}async function In(){if(U)return;const e=document.getElementById("btnRunClusterMatrix"),t=document.getElementById("benchmarkClusterResults");U=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Evaluating Matrix...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Probing primary cluster nodes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring cross-node latency and throughput matrix</div>
      </div>
    `,g());try{const n=await fetch("/api/benchmark/cluster-matrix");if(!n.ok){const o=await n.json().catch(()=>({detail:"Cluster matrix request failed"}));throw new Error(o.detail||"Cluster matrix failed")}const a=await n.json();Bn(a)}catch(n){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Cluster Matrix Evaluation Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${m(n.message)}</div>
        </div>
      `,g())}finally{U=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i><span>Evaluate Cluster Latency Matrix</span>',g())}}function Bn(e){const t=document.getElementById("benchmarkClusterResults");if(!t||!e)return;const n=Number(e.cluster_avg_latency_ms||0).toFixed(3),a=e.nodes||[];t.innerHTML=`
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #38bdf8;"></i> Cluster Avg Latency</div>
        <div class="val">${n} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Across ${a.length} primary node(s)</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #10b981;"></i> Fastest Node</div>
        <div class="val" style="font-size: 1.1rem; color: #6ee7b7;">${m(e.fastest_node||"N/A")}</div>
        <div class="sub">Lowest latency probe</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="alert-triangle" style="width: 12px; height: 12px; color: #f59e0b;"></i> Slowest Node</div>
        <div class="val" style="font-size: 1.1rem; color: #fbbf24;">${m(e.slowest_node||"N/A")}</div>
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
                <div style="font-family: var(--font-mono); font-weight: 700; color: #38bdf8;">${m(o.node)}</div>
              </td>
              <td>
                <span class="badge-db" style="text-transform: capitalize;">${m(o.role)}</span>
                <span style="font-size: 0.72rem; color: var(--text-muted); margin-left: 0.35rem;">${m(o.slots||"N/A")}</span>
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
  `,g()}function Mn(){const e=document.getElementById("btnCloseBenchmarkModal");e&&e.addEventListener("click",kn);const t=document.getElementById("btnOpenBenchmarkModal");t&&t.addEventListener("click",wn),document.querySelectorAll(".benchmark-tab-btn").forEach(p=>{p.addEventListener("click",()=>{const y=p.getAttribute("data-tab");y&&Ye(y)})});const n=document.getElementById("btnRunProbe");n&&n.addEventListener("click",Cn);const a=document.getElementById("btnRunCommandBench");a&&a.addEventListener("click",Sn);const o=document.getElementById("selLuaPreset");o&&o.addEventListener("change",()=>{const p=o.value,y=se[p];if(y){const h=document.getElementById("txtLuaScript"),v=document.getElementById("txtLuaKeys"),x=document.getElementById("txtLuaArgs");h&&(h.value=y.script),v&&(v.value=y.keys),x&&(x.value=y.args)}});const s=document.getElementById("selLuaMode"),l=document.getElementById("groupLuaBenchmarkControls");s&&l&&s.addEventListener("change",()=>{l.style.display=s.value==="benchmark"?"flex":"none"});const r=document.getElementById("btnRunLuaBench");r&&r.addEventListener("click",Tn);const d=document.getElementById("btnRunClusterMatrix");d&&d.addEventListener("click",In)}let he=null;function _n(e){he=e}async function X(e){i.activeDetailKey=e;const t=document.getElementById("keyDetailModal"),n=document.getElementById("detailKeyTitle"),a=document.getElementById("detailHeaderMeta"),o=document.getElementById("detailBodyContent"),s=document.getElementById("btnDeleteKeyFromDetail");s&&(s.style.display=i.lastStatus?.read_only?"none":""),n&&(n.textContent=e,n.title=e),a&&(a.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>'),o&&(o.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>'),t&&t.classList.add("active");try{let l=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(l.ok||(l=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!l.ok){let d="Key not found or could not be read";try{const p=await l.json();p&&p.detail&&(d=p.detail)}catch{}throw new Error(d)}const r=await l.json();i.activeDetailData=r,Rn(r),An(r)}catch(l){a&&(a.innerHTML='<span style="color: var(--accent-danger);">Error</span>'),o&&(o.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Failed to inspect key</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">${m(l.message)}</p>
        </div>
      `,g())}}function ge(){const e=document.getElementById("keyDetailModal");e&&e.classList.remove("active")}function Rn(e){const t=document.getElementById("detailHeaderMeta");if(!t)return;const n=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",a=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;t.innerHTML=`
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
        <span class="badge-db" style="color: #38bdf8; font-family: var(--font-mono); font-size: 0.72rem;">${m(e.node)}</span>
      </div>
    `:""}
    <div style="display: flex; align-items: center; gap: 0.4rem; margin-left: auto;">
      <i data-lucide="clock" style="width: 13px; height: 13px; color: ${e.ttl===-1?"var(--text-muted)":"var(--accent-warning)"};"></i>
      <span style="font-family: var(--font-mono); color: ${e.ttl===-1?"var(--text-muted)":"var(--accent-warning)"}; font-weight: 600;">${a}</span>
      ${i.lastStatus?.read_only?`
        <span title="Read-Only Mode: TTL modification locked" style="font-size: 0.72rem; color: var(--text-muted); display: inline-flex; align-items: center; gap: 3px; margin-left: 0.25rem;">
          <i data-lucide="lock" style="width: 11px; height: 11px;"></i>
        </span>
      `:`
        <button type="button" class="btn btn-secondary" id="btnEditTtl" style="padding: 0.2rem 0.5rem; font-size: 0.72rem; margin-left: 0.25rem;">
          Edit TTL
        </button>
      `}
    </div>
  `,g();const o=document.getElementById("btnEditTtl");o&&o.addEventListener("click",()=>{Dn(e.name,e.ttl)})}async function Dn(e,t){if(i.lastStatus?.read_only){alert("TTL modification is disabled in Read-Only mode.");return}const n=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,t>0?t:"3600");if(n===null)return;const a=parseInt(n.trim(),10);if(isNaN(a)){alert("Please enter a valid integer.");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:a})})).ok)throw new Error("Failed to update TTL");X(e)}catch(o){alert("Error updating TTL: "+o.message)}}function An(e){const t=document.getElementById("detailBodyContent");if(!t)return;const n=e.type.toLowerCase();if(n==="hash"){const a=e.fields||[],o=e.has_more_fields?Number(e.fields_cursor||0):0;i.hashFieldsState={key:e.name,cursor:o,fields:[...a],total:Number(e.length||a.length),match:null,loading:!1},t.innerHTML=`
      <div class="fields-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <input type="text" id="hashFieldSearchInput" class="field-search-input" placeholder="Filter fields (Enter: search all)" title="Filters loaded fields instantly; press Enter to search the whole hash on the server (HSCAN MATCH)">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="hashFieldCountText">${Ze(a.length)}</span>
        </div>
        ${i.lastStatus?.read_only?"":`
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
            ${Qe(a)}
          </tbody>
        </table>
      </div>
      <div id="hashFieldsFooter" style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);"></div>
    `,g(),Nn(e.name),Me();return}if(e.is_json||n.includes("json")){const a=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${m(a)}</div>
    `,g();const o=document.getElementById("btnCopyJsonValue");o&&o.addEventListener("click",()=>{navigator.clipboard.writeText(a),alert("JSON copied to clipboard!")});return}if(n==="string"){t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${m(e.value||"")}</div>
    `,g();const a=document.getElementById("btnCopyStringValue");a&&a.addEventListener("click",()=>{navigator.clipboard.writeText(e.value||""),alert("Value copied to clipboard!")});return}if(Array.isArray(e.value)){const a=n==="zset";t.innerHTML=`
      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 15%;">${a?"Score":"Index"}</th>
              <th style="width: 85%;">Element / Member</th>
            </tr>
          </thead>
          <tbody>
            ${e.value.map((o,s)=>`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
                  ${a?o.score:`[${s}]`}
                </td>
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem;">
                  ${m(a?o.member:String(o))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;return}t.innerHTML=`<div class="json-view-box">${m(String(e.value))}</div>`}function Qe(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(t=>`
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
        ${m(t.field)}
      </td>
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
        ${m(t.value)}
      </td>
      <td style="padding: 0.6rem 1rem; text-align: right;">
        ${i.lastStatus?.read_only?`
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
  `).join("")}function Ze(e,t=null){const n=i.hashFieldsState,a=n?n.total:e,o=n&&n.match?`${e.toLocaleString()} matching fields loaded`:e<a?`${e.toLocaleString()} of ${a.toLocaleString()} fields loaded`:`${e.toLocaleString()} fields`;return t!==null?`${t.toLocaleString()} shown · ${o}`:o}function Pn(e){return`*${e.replace(/[\\*?\[\]]/g,t=>`\\${t}`)}*`}function Xe(){const e=i.hashFieldsState,t=document.getElementById("hashFieldsTableBody"),n=document.getElementById("hashFieldCountText"),a=document.getElementById("hashFieldSearchInput");if(!e||!t)return;const o=a?a.value.trim().toLowerCase():"",s=o?e.fields.filter(l=>l.field.toLowerCase().includes(o)||l.value.toLowerCase().includes(o)):e.fields;t.innerHTML=Qe(s),n&&(n.textContent=Ze(e.fields.length,o?s.length:null)),g(),et(e.key),Me()}function Me(){const e=document.getElementById("hashFieldsFooter"),t=i.hashFieldsState;if(!e||!t)return;const n=t.cursor!==0,a=t.match?`Server-side filter: <code>${m(t.match)}</code> · <a href="#" id="btnClearHashMatch" style="color: var(--accent-primary);">clear</a>`:n?"Search applies to loaded fields. Press Enter to search all fields on the server.":"";e.innerHTML=`
    <span>${a}</span>
    ${n?`
      <button type="button" class="btn btn-secondary" id="btnLoadMoreHashFields" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" ${t.loading?"disabled":""}>
        <i data-lucide="${t.loading?"refresh-cw":"arrow-down-circle"}" ${t.loading?'class="spin"':""} style="width: 13px; height: 13px;"></i>
        ${t.loading?"Loading...":"Load More Fields"}
      </button>`:""}
  `,g();const o=document.getElementById("btnLoadMoreHashFields");o&&o.addEventListener("click",()=>ve());const s=document.getElementById("btnClearHashMatch");s&&s.addEventListener("click",l=>{l.preventDefault();const r=document.getElementById("hashFieldSearchInput");r&&(r.value=""),ve({reset:!0,match:null})})}async function ve({reset:e=!1,match:t}={}){const n=i.hashFieldsState;if(!n||n.loading||!e&&n.cursor===0)return;const a=n.key,o=e?t:n.match;n.loading=!0,Me();try{const s=new URLSearchParams({cursor:String(e?0:n.cursor),count:String(bt)});o&&s.set("match",o);const l=await fetch(`/api/keys/${encodeURIComponent(a)}/hash/fields?${s}`);if(!l.ok){const p=await l.json().catch(()=>({}));throw new Error(p.detail||`Server error: ${l.status}`)}const r=await l.json();if(i.hashFieldsState!==n||i.activeDetailKey!==a)return;e&&(n.fields=[]);const d=new Set(n.fields.map(p=>p.field));for(const p of r.fields||[])d.has(p.field)||(d.add(p.field),n.fields.push(p));n.cursor=Number(r.cursor||0),n.total=Number(r.total??n.total),n.match=o||null}catch(s){alert("Failed to load hash fields: "+s.message)}finally{n.loading=!1,i.hashFieldsState===n&&Xe()}}function Nn(e){const t=document.getElementById("hashFieldSearchInput");t&&(t.addEventListener("input",()=>Xe()),t.addEventListener("keydown",a=>{if(a.key!=="Enter"||!i.hashFieldsState)return;const o=t.value.trim(),s=i.hashFieldsState;s.cursor===0&&!s.match||ve({reset:!0,match:o?Pn(o):null})}));const n=document.getElementById("btnAddHashField");n&&n.addEventListener("click",async()=>{const a=prompt(`Enter field name for hash '${e}':`);if(!a)return;const o=prompt(`Enter value for field '${a}':`);if(o!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:a,value:o})})).ok)throw new Error("Failed to set field");X(e)}catch(s){alert("Error setting field: "+s.message)}}),et(e)}function et(e){document.querySelectorAll(".btn-delete-hash-field").forEach(t=>{t.addEventListener("click",async()=>{const n=decodeURIComponent(t.getAttribute("data-field"));if(confirm(`Delete field '${n}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(n)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");X(e)}catch(a){alert("Error: "+a.message)}})})}function zn(e){if(!e)return null;const t=e.match(/filename\*\s*=\s*([\w-]*)'[^']*'([^;]+)/i);if(t)try{return decodeURIComponent(t[2].trim().replace(/^"|"$/g,""))}catch{}const n=e.match(/filename\s*=\s*"([^"]*)"/i)||e.match(/filename\s*=\s*([^;]+)/i);return n&&n[1].trim()?n[1].trim():null}function tt(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function nt(e,t,n=null){let a=zn(e.headers.get("content-disposition"))||t;const o=String(e.headers.get("x-export-format")||n||"").toLowerCase();o&&!a.toLowerCase().endsWith(`.${o}`)&&(a=`${a}.${o}`);const s=await e.blob();return tt(s,a),a}async function Fn(e,t){if(!e)return;const n=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Downloading...',g());try{const a=await fetch(`/api/keys/${encodeURIComponent(e)}/download`);if(!a.ok){const s=await a.json().catch(()=>({}));throw new Error(s.detail||`Server error: ${a.status}`)}const o=e.replace(/[^A-Za-z0-9._-]+/g,"_")||"redis_key";await nt(a,o),a.headers.get("x-export-truncated")==="true"&&alert(`Download was capped: the key has ${Number(a.headers.get("x-export-total")||0).toLocaleString()} entries, only the first portion was included.`)}catch(a){alert("Download failed: "+a.message)}finally{t&&(t.disabled=!1,t.innerHTML=n,g())}}function Hn(){const e=document.getElementById("btnCloseDetailModal");e&&e.addEventListener("click",ge);const t=document.getElementById("keyDetailModal");t&&t.addEventListener("click",s=>{s.target===t&&ge()});const n=document.getElementById("btnCopyKeyName");n&&n.addEventListener("click",()=>{i.activeDetailKey&&(navigator.clipboard.writeText(i.activeDetailKey),alert(`Copied '${i.activeDetailKey}' to clipboard!`))});const a=document.getElementById("btnDownloadKeyValue");a&&a.addEventListener("click",()=>{Fn(i.activeDetailKey,a)});const o=document.getElementById("btnDeleteKeyFromDetail");o&&o.addEventListener("click",()=>{i.activeDetailKey&&he&&he(i.activeDetailKey,()=>{ge()})})}let be=null;function On(e){be=e}function ce(e,t){if(i.lastStatus?.read_only){alert("Key deletion is disabled in Read-Only mode.");return}i.pendingDeleteKey=e,i.pendingDeleteCallback=t;const n=document.getElementById("deleteKeyConfirmModal"),a=document.getElementById("deleteKeyTargetName"),o=document.getElementById("inputConfirmDelete"),s=document.getElementById("btnSubmitDeleteKey");a&&(a.textContent=e),o&&(o.value=""),s&&(s.disabled=!0),n&&n.classList.add("active"),o&&o.focus(),o&&(o.oninput=()=>{const l=o.value.trim().toUpperCase();s&&(s.disabled=l!=="CONFIRM"&&o.value.trim()!==e)}),s&&(s.onclick=async()=>{s.disabled=!0,s.textContent="Deleting...";try{const l=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),r=await l.json();if(!l.ok)throw new Error(r.detail||"Failed to delete key");n&&n.classList.remove("active"),i.pendingDeleteCallback&&i.pendingDeleteCallback()}catch(l){alert("Error deleting key: "+l.message)}finally{s.disabled=!1,s.textContent="Delete Permanently"}})}function Kn(){const e=document.getElementById("deleteKeyConfirmModal"),t=document.getElementById("btnCloseDeleteConfirmModal"),n=document.getElementById("btnCancelDeleteConfirm"),a=()=>e&&e.classList.remove("active");t&&t.addEventListener("click",a),n&&n.addEventListener("click",a);const o=document.getElementById("exportKeysModal"),s=document.getElementById("btnOpenExportModal"),l=document.getElementById("btnCloseExportModal"),r=document.getElementById("btnCancelExportModal"),d=document.getElementById("btnExecuteExport");if(s&&o){s.addEventListener("click",()=>{const c=document.getElementById("exportPatternDisplay"),u=document.getElementById("exportTypeDisplay"),f=document.getElementById("exportTtlDisplay"),w=document.getElementById("exportLoadedCount"),S=document.getElementById("exportScopeLoadedText"),L=i.currentTtlFilter||"all",$=L==="persistent"?"∞ No TTL (Persistent)":L==="expiring"?"⏳ Expiring Only":"All TTLs",M=L==="persistent"?i.keysTableRows.filter(T=>T.ttl_seconds===-1):L==="expiring"?i.keysTableRows.filter(T=>T.ttl_seconds>0):i.keysTableRows;c&&(c.textContent=i.currentPattern||"*"),u&&(u.textContent=i.currentType&&i.currentType!=="all"?i.currentType.toUpperCase():"All Types"),f&&(f.textContent=$),w&&(w.textContent=`${M.length} keys`),S&&(S.textContent=`${M.length} keys`),o.classList.add("active"),g()});const A=()=>o.classList.remove("active");l&&l.addEventListener("click",A),r&&r.addEventListener("click",A),d&&d.addEventListener("click",async()=>{const c=document.querySelector('input[name="exportFormatRadio"]:checked'),u=document.querySelector('input[name="exportScopeRadio"]:checked'),f=(c?c.value:"csv").toLowerCase(),w=u?u.value:"loaded",S=i.currentPattern||"*",L=i.currentType&&i.currentType!=="all"?i.currentType:"",$=i.currentTtlFilter&&i.currentTtlFilter!=="all"?i.currentTtlFilter:"",T=`redis_keys_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.${f}`;if(w==="all"){d.disabled=!0,d.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Exporting...',g();try{let I=`/api/keys/export?pattern=${encodeURIComponent(S)}&format=${f}`;L&&(I+=`&type=${encodeURIComponent(L)}`),$&&(I+=`&ttl_filter=${encodeURIComponent($)}`);const _=await fetch(I);if(!_.ok){const D=await _.json().catch(()=>({detail:"Export failed"}));throw new Error(D.detail||`Server error: ${_.status}`)}await nt(_,T,f),A()}catch(I){alert(`Export failed: ${I.message}`)}finally{d.disabled=!1,d.innerHTML='<i data-lucide="download" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Download',g()}return}const R=i.currentTtlFilter==="persistent"?i.keysTableRows.filter(I=>I.ttl_seconds===-1):i.currentTtlFilter==="expiring"?i.keysTableRows.filter(I=>I.ttl_seconds>0):i.keysTableRows;if(R.length===0){alert("No keys matching filters loaded in browser to export.");return}let O;if(f==="csv"){const I=`Key,Type,TTL_Seconds
`,_=R.map(D=>`"${(D.key||"").replace(/"/g,'""')}",${D.type||""},${D.ttl_seconds!==void 0?D.ttl_seconds:-1}`);O=new Blob([I+_.join(`
`)],{type:"text/csv;charset=utf-8;"})}else{const I=R.map(_=>_.key);O=new Blob([I.join(`
`)+`
`],{type:"text/plain;charset=utf-8;"})}tt(O,T),A()})}const p=document.getElementById("bulkDeleteModal"),y=document.getElementById("btnOpenBulkDeleteModal"),h=document.getElementById("btnCloseBulkDeleteModal"),v=document.getElementById("btnCancelBulkDelete"),x=document.getElementById("btnConfirmBulkDelete"),E=document.getElementById("bdCountConfirmInput"),k=document.getElementById("bdProdConfirmInput"),C=document.getElementById("bdProdConfirmGroup"),z=document.getElementById("bulkDeleteProdBanner"),F=document.getElementById("bulkDeleteDryRunStatus"),H=document.getElementById("bulkDeleteDetails");let P=null;function K(){if(!P||!x)return;const A=String(P.matched_count),u=(E?.value||"").trim()===A&&P.matched_count>0;let f=!0;P.is_prod&&(f=(k?.value||"").trim().toUpperCase()==="PROD"),x.disabled=!(u&&f)}if(E&&E.addEventListener("input",K),k&&k.addEventListener("input",K),y&&p){y.addEventListener("click",async()=>{if(i.lastStatus?.read_only){alert("Bulk Delete is disabled in Read-Only mode.");return}const c=i.currentPattern||"*",u=i.currentType&&i.currentType!=="all"?i.currentType:null;P=null,E&&(E.value=""),k&&(k.value=""),x&&(x.disabled=!0),F&&(F.style.display="block"),H&&(H.style.display="none"),p.classList.add("active"),g();try{const f=await fetch("/api/keys/bulk-delete/dry-run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:c,type_filter:u})});if(!f.ok){const _=await f.json().catch(()=>({detail:"Dry run failed"}));throw new Error(_.detail||"Dry run failed")}const w=await f.json();P=w;const S=document.getElementById("bdPatternDisplay"),L=document.getElementById("bdTypeDisplay"),$=document.getElementById("bdCountDisplay"),M=document.getElementById("bdRequiredCountText");S&&(S.textContent=w.pattern),L&&(L.textContent=w.type_filter?w.type_filter.toUpperCase():"All Types"),$&&($.textContent=w.matched_count.toLocaleString()),M&&(M.textContent=String(w.matched_count)),w.is_prod?(z&&(z.style.display="block"),C&&(C.style.display="block")):(z&&(z.style.display="none"),C&&(C.style.display="none"));const T=document.getElementById("bdPerNodeBreakdown"),R=Object.entries(w.per_node_counts||{});T&&(R.length>1?(T.innerHTML="<strong>Per-node breakdown:</strong> "+R.map(([_,D])=>`${m(_)}: ${D.toLocaleString()}`).join(" &bull; "),T.style.display="block"):T.style.display="none");const O=document.getElementById("bdSampleKeysList"),I=document.getElementById("bdSampleKeysSection");O&&I&&(w.sample_keys&&w.sample_keys.length>0?(O.innerHTML=w.sample_keys.map(_=>`<div>${m(_)}</div>`).join(""),I.style.display="block"):I.style.display="none"),F&&(F.style.display="none"),H&&(H.style.display="flex"),g()}catch(f){F&&(F.innerHTML=`
            <div style="color: var(--accent-danger);">
              <i data-lucide="alert-circle" style="width: 20px; height: 20px; margin-bottom: 0.35rem; display: inline-block;"></i>
              <div>Failed to calculate dry-run: ${m(f.message)}</div>
            </div>
          `,g())}});const A=()=>p.classList.remove("active");h&&h.addEventListener("click",A),v&&v.addEventListener("click",A),x&&x.addEventListener("click",async()=>{if(P){x.disabled=!0,x.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlinking...',g();try{const c=await fetch("/api/keys/bulk-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:P.pattern,type_filter:P.type_filter,expected_count:P.matched_count,confirmed_count:parseInt(E.value.trim(),10),confirmed_env:k?k.value.trim():null})});if(!c.ok){const f=await c.json().catch(()=>({detail:"Bulk delete failed"}));throw new Error(f.detail||"Bulk delete failed")}const u=await c.json();alert(`Bulk delete complete!
${u.message} (Duration: ${u.duration_ms}ms)`),A(),be&&be()}catch(c){alert(`Bulk delete error: ${c.message}`),x.disabled=!1,x.innerHTML='<i data-lucide="trash-2" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlink Keys',g()}}})}}async function j(){i.isScanning=!1,i.currentScanEpoch++;const e=i.currentScanEpoch;i.currentCursor=0,i.scanComplete=!1,i.totalScanned=0,i.keysTableRows=[],i.loadedKeysSet.clear(),i.treeInitialized=!1,i.treeExpandedPaths.clear();const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="none"),n&&(n.style.display="block"),lt(),await it(e)}function Q(){const e=document.getElementById("btnToggleAutoRefresh"),t=document.getElementById("autoRefreshStatusText"),n=document.getElementById("autoRefreshIntervalSelect");if(!(!e||!t))if(i.isAutoRefreshActive){e.classList.add("active");const a=i.autoRefreshRemainingSec>=60?`${Math.floor(i.autoRefreshRemainingSec/60)}m ${i.autoRefreshRemainingSec%60}s`:`${i.autoRefreshRemainingSec}s`;e.title=`Auto-refresh active (Pattern: "${i.currentPattern||"*"}"). Refreshing in ${a}. Click to pause.`,t.textContent=`Auto: ${a}`,n&&(n.value=String(i.autoRefreshIntervalSec))}else{e.classList.remove("active");const a=i.autoRefreshIntervalSec>=60?`${Math.floor(i.autoRefreshIntervalSec/60)}m`:`${i.autoRefreshIntervalSec}s`;e.title=`Click to watch keys matching pattern "${i.currentPattern||"*"}" every ${a}`,t.textContent="Auto: Off",n&&(n.value=String(i.autoRefreshIntervalSec))}}function te(){i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,Q()}function jn(){i.isAutoRefreshActive=!0,i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,Q(),i.autoRefreshTimer&&clearInterval(i.autoRefreshTimer),i.autoRefreshTimer=setInterval(async()=>{if(!i.isAutoRefreshActive)return;const e=document.querySelector(".modal-backdrop.active");document.hidden||e||(i.autoRefreshRemainingSec--,i.autoRefreshRemainingSec<=0?(i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,Q(),i.cachedConnections.some(n=>n.is_connected)&&!i.isScanning&&await j()):Q())},1e3)}function Un(){i.isAutoRefreshActive=!1,i.autoRefreshTimer&&(clearInterval(i.autoRefreshTimer),i.autoRefreshTimer=null),i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,Q()}function Vn(){i.isAutoRefreshActive?Un():jn()}function _e(e){if(e==null)return!0;const t=String(e).trim();if(t===""||t==="0")return!0;if(t.startsWith("{"))try{return Object.values(JSON.parse(t)).every(n=>Number(n)===0)}catch{return!1}return!1}function qn(e){const t=String(e??"").trim();if(t.startsWith("{"))try{const n=Object.values(JSON.parse(t));return`${n.filter(o=>Number(o)!==0).length} of ${n.length} nodes still scanning`}catch{return"more keys available"}return"more keys available"}function Gn(){return!!(i.lastStatus&&i.lastStatus.is_cluster)||String(i.currentCursor??"").trim().startsWith("{")}async function it(e=null){if(i.isScanning||i.scanComplete)return;const t=e!==null?e:i.currentScanEpoch;i.isScanning=!0,Oe();try{const n=`/api/keys?pattern=${encodeURIComponent(i.currentPattern)}&cursor=${encodeURIComponent(String(i.currentCursor??"0"))}&count=${i.scanBatchSize}${i.currentType!=="all"?`&type=${encodeURIComponent(i.currentType)}`:""}`,a=await fetch(n);if(!a.ok)throw new Error("Failed to scan keys");const o=await a.json();if(t!==i.currentScanEpoch)return;i.currentCursor=o.cursor,i.scanComplete=_e(i.currentCursor),i.dbTotalKeys=o.total_in_db;const l=(o.keys||[]).filter(d=>i.loadedKeysSet.has(d.name)?!1:(i.loadedKeysSet.add(d.name),!0)).map(d=>({key:d.name,type:d.type,ttl_seconds:d.ttl,status:d.ttl===-1?"Persistent":d.ttl===-2?"Expired":`Expires in ${d.ttl}s`}));l.length>0&&i.keysTableRows.push(...l),lt(),i.totalScanned=i.loadedKeysSet.size;const r=document.getElementById("tabBadgeKeys");r&&(r.textContent=i.totalScanned.toLocaleString())}catch(n){console.error("Scan error:",n)}finally{t===i.currentScanEpoch&&(i.isScanning=!1,Oe())}}const ae=[":","/",".","-","_"],He={auto:[":","/","."],":":[":"],"/":["/"],".":["."],"-":["-"],_:["_"]};function at(){if(i.lastStatus?.connection_id)return i.lastStatus.connection_id;const e=i.cachedConnections?.find(n=>n.is_selected);if(e)return e.id;const t=i.cachedConnections?.find(n=>n.is_connected);return t?t.id:null}function le(e){if(!Array.isArray(e)||e.length===0)return"custom";const t=new Set(e);if(t.size===3&&t.has(":")&&t.has("/")&&t.has("."))return"auto";if(t.size===1){if(t.has(":"))return":";if(t.has("/"))return"/";if(t.has("."))return".";if(t.has("-"))return"-";if(t.has("_"))return"_"}return"custom"}function oe(e=null){const t=e||at();t&&localStorage.setItem(`redis_insight_tree_delimiters_${t}`,JSON.stringify(i.activeTreeDelimiters)),localStorage.setItem("redis_insight_tree_delimiters_global",JSON.stringify(i.activeTreeDelimiters)),localStorage.setItem("redis_insight_tree_delimiter_preset",i.treeDelimiterPreset),localStorage.setItem("redis_insight_custom_delimiters",JSON.stringify(i.customTreeDelimiters))}function Wn(e=null){const t=e||at();let n=null;if(t){const o=localStorage.getItem(`redis_insight_tree_delimiters_${t}`);if(o)try{const s=JSON.parse(o);Array.isArray(s)&&s.length>0&&(n=s)}catch{}}if(!n){const o=localStorage.getItem("redis_insight_tree_delimiters_global");if(o)try{const s=JSON.parse(o);Array.isArray(s)&&s.length>0&&(n=s)}catch{}}Array.isArray(n)&&n.length>0?i.activeTreeDelimiters=n:i.activeTreeDelimiters=[":","/","."];const a=localStorage.getItem("redis_insight_custom_delimiters");if(a)try{const o=JSON.parse(a);Array.isArray(o)&&(i.customTreeDelimiters=o)}catch{}i.treeDelimiterPreset=le(i.activeTreeDelimiters)}function Jn(e,t=i.activeTreeDelimiters){if(!e||!t||t.length===0)return{segments:[],leafName:e||""};const n=[...t].filter(l=>typeof l=="string"&&l.length>0).sort((l,r)=>r.length-l.length);if(n.length===0)return{segments:[],leafName:e};const a=[];let o=0;for(;o<e.length;){let l=-1,r=null;for(const p of n){const y=e.indexOf(p,o);y!==-1&&(l===-1||y<l?(l=y,r=p):y===l&&p.length>(r?r.length:0)&&(r=p))}if(l===-1)break;const d=e.slice(o,l);(d!==""||a.length>0)&&a.push({name:d,delim:r}),o=l+r.length}const s=e.slice(o);return a.length===0?{segments:[],leafName:e}:{segments:a,leafName:s||"(empty)"}}function Yn(e,t=i.activeTreeDelimiters){const n={id:"__root__",name:"Root",fullPrefix:"",delimiter:"",depth:-1,folders:new Map,keys:[],totalKeyCount:0},a=Array.isArray(t)?t:typeof t=="string"&&t!=="auto"?[t]:i.activeTreeDelimiters||[":","/","."];for(const s of e){const l=s.key||"",{segments:r,leafName:d}=Jn(l,a);if(r.length===0){n.keys.push({...s,leafName:l});continue}let p=n,y="";for(let h=0;h<r.length;h++){const{name:v,delim:x}=r[h];y+=v+x;const E=y;p.folders.has(v)||p.folders.set(v,{id:E,name:v,fullPrefix:E,delimiter:x,depth:h,folders:new Map,keys:[],totalKeyCount:0}),p=p.folders.get(v)}p.keys.push({...s,leafName:d||"(empty)"})}function o(s){let l=s.keys.length;s.keys.sort((d,p)=>(d.leafName||d.key).localeCompare(p.leafName||p.key));const r=new Map([...s.folders.entries()].sort((d,p)=>d[0].localeCompare(p[0])));s.folders=r;for(const d of s.folders.values())o(d),l+=d.totalKeyCount;s.totalKeyCount=l}return o(n),n}function ot(e,t){if(e.name.toLowerCase().includes(t)||e.fullPrefix.toLowerCase().includes(t))return!0;for(const n of e.keys)if(n.key.toLowerCase().includes(t)||n.leafName&&n.leafName.toLowerCase().includes(t))return!0;for(const n of e.folders.values())if(ot(n,t))return!0;return!1}function st(){const e=(i.currentTtlFilter||"all").toLowerCase();return e==="expiring"?i.keysTableRows.filter(t=>t.ttl_seconds>0):e==="persistent"||e==="no-ttl"?i.keysTableRows.filter(t=>t.ttl_seconds===-1):i.keysTableRows}function Qn(){const e=document.getElementById("gridViewerContainer");if(!e)return;const t=st();if(t.length===0){if(i.keysTableRows.length>0){e.innerHTML=`
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${m(i.currentTtlFilter)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${i.keysTableRows.length.toLocaleString()} total keys scanned so far)</span>
        </div>
      `;return}const n=!i.scanComplete&&_e(i.currentCursor);e.innerHTML=i.scanComplete?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${m(i.currentPattern)}</code>".
      </div>
    `:n?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${m(i.currentPattern)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${m(i.currentPattern)}</code>" in the part of the keyspace scanned so far.<br>
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
          ${t.map(n=>`
            <tr class="key-row" data-key="${encodeURIComponent(n.key)}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer;">
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
                <span class="btn-inspect-key" data-key="${encodeURIComponent(n.key)}">${m(n.key)}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase;">
                <span class="badge-db">${n.type}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary);">
                ${n.ttl_seconds===-1?'<span style="color: var(--text-muted);">None</span>':`${n.ttl_seconds}s`}
              </td>
              <td style="padding: 0.65rem 1rem; font-size: 0.8rem;">
                ${n.ttl_seconds===-1?'<span class="badge-persistent" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.72rem; font-weight: 600;">∞ No TTL</span>':`<span class="badge-expiring" style="color: var(--accent-warning); font-size: 0.78rem;">⏳ ${n.status}</span>`}
              </td>
              <td style="padding: 0.65rem 1rem; text-align: right;" onclick="event.stopPropagation()">
                ${i.lastStatus?.read_only?`
                  <span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
                    <i data-lucide="lock" style="width: 13px; height: 13px;"></i>
                  </span>
                `:`
                  <button type="button" class="btn-icon danger btn-delete-key-table" data-key="${encodeURIComponent(n.key)}" title="Delete key">
                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                  </button>
                `}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `,g(),e.querySelectorAll(".key-row").forEach(n=>{n.addEventListener("click",()=>{const a=decodeURIComponent(n.getAttribute("data-key"));X(a)})}),e.querySelectorAll(".btn-delete-key-table").forEach(n=>{n.addEventListener("click",a=>{a.stopPropagation();const o=decodeURIComponent(n.getAttribute("data-key"));ce(o,()=>{j()})})})}function G(){const e=document.getElementById("gridViewerContainer");if(!e)return;const t=st();if(t.length===0){if(i.keysTableRows.length>0){e.innerHTML=`
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${m(i.currentTtlFilter)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${i.keysTableRows.length.toLocaleString()} total keys scanned so far)</span>
        </div>
      `;return}const c=!i.scanComplete&&_e(i.currentCursor);e.innerHTML=i.scanComplete?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${m(i.currentPattern)}</code>".
      </div>
    `:c?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${m(i.currentPattern)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${m(i.currentPattern)}</code>" in the part of the keyspace scanned so far.<br>
        The scan is not finished — click <strong>Load More</strong> to keep scanning.
      </div>
    `;return}const n=Yn(t,i.activeTreeDelimiters);if(!i.treeInitialized&&i.treeExpandedPaths.size===0){for(const c of n.folders.values())i.treeExpandedPaths.add(c.id);i.treeInitialized=!0}function a(c){let u=c.folders.size;for(const f of c.folders.values())u+=a(f);return u}const o=a(n),s=!!i.currentTreeFilterQuery.trim(),l=i.currentTreeFilterQuery.trim().toLowerCase();function r(c,u){const f=encodeURIComponent(c.key);return`
      <div class="tree-node tree-leaf key-row" data-key="${f}" style="padding-left: ${u*20+26}px;">
        <div class="tree-node-content">
          <div class="tree-key-icon">
            <i data-lucide="key" style="width: 13px; height: 13px;"></i>
          </div>
          <span class="tree-key-name btn-inspect-key" data-key="${f}" title="${m(c.key)}">
            ${m(c.leafName||c.key)}
          </span>
          <span class="badge-db" style="margin-left: 0.35rem; font-size: 0.68rem; text-transform: uppercase;">${m(c.type)}</span>
          ${c.ttl_seconds===-1?'<span class="badge-persistent" style="margin-left: 0.35rem; font-size: 0.65rem; padding: 0.08rem 0.35rem; border-radius: 4px; background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); font-weight: 600;">∞ No TTL</span>':`<span class="tree-key-ttl" title="Expires in ${c.ttl_seconds}s">⏳ ${c.ttl_seconds}s</span>`}
          <span class="tree-key-status" style="color: ${c.ttl_seconds===-1?"var(--text-muted)":"var(--accent-warning)"};">${m(c.status)}</span>
          <div class="tree-key-actions" onclick="event.stopPropagation()">
            ${i.lastStatus?.read_only?`
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
    `}function d(c,u){if(s&&!ot(c,l))return"";const f=s?!0:i.treeExpandedPaths.has(c.id),w=encodeURIComponent(c.id);let S="";for(const L of c.folders.values())S+=d(L,u+1);for(const L of c.keys)s&&!L.key.toLowerCase().includes(l)&&!(L.leafName&&L.leafName.toLowerCase().includes(l))||(S+=r(L,u+1));return`
      <div class="tree-folder-group" data-folder-id="${w}">
        <div class="tree-node tree-folder" data-folder-id="${w}" style="padding-left: ${u*20+8}px;">
          <div class="tree-node-content">
            <button type="button" class="tree-toggle-btn" title="${f?"Collapse":"Expand"}">
              <i data-lucide="${f?"chevron-down":"chevron-right"}" style="width: 14px; height: 14px;"></i>
            </button>
            <div class="tree-folder-icon">
              <i data-lucide="${f?"folder-open":"folder"}" style="width: 15px; height: 15px;"></i>
            </div>
            <span class="tree-folder-name" title="${m(c.fullPrefix)}">
              ${m(c.name)}<span class="tree-folder-delim">${m(c.delimiter)}</span>
            </span>
            <span class="tree-count-badge" title="${c.totalKeyCount} keys in this namespace">
              ${c.totalKeyCount.toLocaleString()} ${c.totalKeyCount===1?"key":"keys"}
            </span>
            <button type="button" class="tree-filter-prefix-btn" data-prefix="${m(c.fullPrefix)}" title="Filter keys matching '${m(c.fullPrefix)}*'">
              <i data-lucide="filter" style="width: 11px; height: 11px;"></i>
              <span>Filter</span>
            </button>
          </div>
        </div>
        <div class="tree-children" style="display: ${f?"block":"none"};">
          ${S}
        </div>
      </div>
    `}let p="";if(n.keys.length>0){const c=s?n.keys.filter(u=>u.key.toLowerCase().includes(l)||u.leafName&&u.leafName.toLowerCase().includes(l)):n.keys;c.length>0&&(p=`
        <div class="tree-root-keys-section">
          <div class="tree-root-keys-header" style="padding-left: 10px;">
            <span class="tree-root-keys-title">ROOT KEYS (NO DELIMITER)</span>
            <span class="tree-count-badge">${c.length.toLocaleString()} ${c.length===1?"key":"keys"}</span>
          </div>
          <div class="tree-root-keys-list">
            ${c.map(u=>r(u,0)).join("")}
          </div>
        </div>
      `)}const h=[...ae,...(i.customTreeDelimiters||[]).filter(c=>!ae.includes(c))].map(c=>{const u=(i.activeTreeDelimiters||[]).includes(c),f=!ae.includes(c);return`
      <span class="tree-delim-chip ${u?"active":""} ${f?"custom":""}" data-delim="${m(c)}" title="${u?"Click to disable":"Click to enable"} delimiter '${m(c)}'">
        <span class="delim-char">${m(c)}</span>
        ${f?`<button type="button" class="tree-delim-chip-remove" data-remove-delim="${m(c)}" title="Remove custom delimiter">&times;</button>`:""}
      </span>
    `}).join("");e.innerHTML=`
    <div class="tree-view-wrapper">
      <div class="tree-toolbar">
        <div class="tree-toolbar-left">
          <div class="tree-delimiter-control">
            <label for="treeDelimiterSelect" class="tree-control-label">Delimiters:</label>
            <select id="treeDelimiterSelect" class="tree-select" title="Grouping delimiter convention">
              <option value="auto"${i.treeDelimiterPreset==="auto"?" selected":""}>Auto (:, /, .)</option>
              <option value=":"${i.treeDelimiterPreset===":"?" selected":""}>: (Colon)</option>
              <option value="/"${i.treeDelimiterPreset==="/"?" selected":""}>/ (Slash)</option>
              <option value="."${i.treeDelimiterPreset==="."?" selected":""}>. (Dot)</option>
              <option value="-"${i.treeDelimiterPreset==="-"?" selected":""}>- (Dash)</option>
              <option value="_"${i.treeDelimiterPreset==="_"?" selected":""}>_ (Underscore)</option>
              <option value="custom"${i.treeDelimiterPreset==="custom"?" selected":""}>Custom (${(i.activeTreeDelimiters||[]).length} active)</option>
            </select>
            <div class="tree-delim-chips" id="treeDelimChips">
              ${h}
            </div>
            <div class="tree-add-delim-wrapper">
              <button type="button" class="btn-add-delim-chip" id="btnAddDelimToggle" title="Add custom delimiter">
                <i data-lucide="plus" style="width: 10px; height: 10px;"></i>
                <span>Add</span>
              </button>
              <div class="tree-custom-delim-popover" id="treeCustomDelimPopover" style="display: none;">
                <input type="text" id="customDelimInput" class="custom-delim-input" placeholder="e.g. #, ::, |" maxlength="12" />
                <button type="button" class="btn-confirm-add-delim" id="btnConfirmAddDelim">Add</button>
                <button type="button" class="btn-cancel-add-delim" id="btnCancelAddDelim" title="Cancel">&times;</button>
              </div>
            </div>
          </div>
          <div class="tree-summary-pill" id="treeSummaryPill">
            ${o.toLocaleString()} ${o===1?"Namespace":"Namespaces"} &bull; ${i.keysTableRows.length.toLocaleString()} ${i.keysTableRows.length===1?"Key":"Keys"}
          </div>
        </div>
        <div class="tree-toolbar-right">
          <div class="tree-filter-box">
            <i data-lucide="search" style="width: 12px; height: 12px; color: var(--text-muted); flex-shrink: 0;"></i>
            <input type="text" id="treeFilterInput" class="tree-filter-input" placeholder="Filter loaded tree..." value="${m(i.currentTreeFilterQuery)}">
            ${i.currentTreeFilterQuery?`
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
        ${[...n.folders.values()].map(c=>d(c,0)).join("")}
        ${p}
      </div>
    </div>
  `,g(),e.querySelectorAll(".tree-folder").forEach(c=>{c.addEventListener("click",u=>{if(u.target.closest(".tree-filter-prefix-btn"))return;const f=decodeURIComponent(c.getAttribute("data-folder-id"));i.treeExpandedPaths.has(f)?i.treeExpandedPaths.delete(f):i.treeExpandedPaths.add(f),G()})}),e.querySelectorAll(".tree-filter-prefix-btn").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const f=c.getAttribute("data-prefix"),w=document.getElementById("keySearchInput");w&&f&&(w.value=f+"*",i.currentPattern=f+"*",j())})}),e.querySelectorAll(".tree-leaf").forEach(c=>{c.addEventListener("click",()=>{const u=decodeURIComponent(c.getAttribute("data-key"));X(u)})}),e.querySelectorAll(".btn-delete-key-table").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const f=decodeURIComponent(c.getAttribute("data-key"));ce(f,()=>{j()})})});const v=document.getElementById("treeDelimiterSelect");v&&v.addEventListener("change",c=>{const u=c.target.value;u==="custom"?i.treeDelimiterPreset="custom":He[u]&&(i.activeTreeDelimiters=[...He[u]],i.treeDelimiterPreset=u),oe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,G()}),e.querySelectorAll(".tree-delim-chip").forEach(c=>{c.addEventListener("click",u=>{if(u.target.closest(".tree-delim-chip-remove"))return;const f=c.getAttribute("data-delim");f&&(i.activeTreeDelimiters.includes(f)?i.activeTreeDelimiters=i.activeTreeDelimiters.filter(w=>w!==f):i.activeTreeDelimiters.push(f),i.treeDelimiterPreset=le(i.activeTreeDelimiters),oe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,G())})}),e.querySelectorAll(".tree-delim-chip-remove").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const f=c.getAttribute("data-remove-delim");f&&(i.customTreeDelimiters=(i.customTreeDelimiters||[]).filter(w=>w!==f),i.activeTreeDelimiters=(i.activeTreeDelimiters||[]).filter(w=>w!==f),i.treeDelimiterPreset=le(i.activeTreeDelimiters),oe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,G())})});const x=document.getElementById("btnAddDelimToggle"),E=document.getElementById("treeCustomDelimPopover"),k=document.getElementById("customDelimInput"),C=document.getElementById("btnConfirmAddDelim"),z=document.getElementById("btnCancelAddDelim");x&&E&&x.addEventListener("click",c=>{c.stopPropagation();const u=E.style.display!=="none";E.style.display=u?"none":"flex",!u&&k&&(k.value="",k.focus())});function F(){if(!k)return;const c=k.value.trim();c&&(!i.customTreeDelimiters.includes(c)&&!ae.includes(c)&&i.customTreeDelimiters.push(c),i.activeTreeDelimiters.includes(c)||i.activeTreeDelimiters.push(c),i.treeDelimiterPreset=le(i.activeTreeDelimiters),oe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,G())}C&&C.addEventListener("click",c=>{c.stopPropagation(),F()}),k&&k.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),F()):c.key==="Escape"&&E&&(E.style.display="none")}),z&&z.addEventListener("click",c=>{c.stopPropagation(),E&&(E.style.display="none")});const H=document.getElementById("btnExpandAllTree");H&&H.addEventListener("click",()=>{function c(u){for(const f of u.folders.values())i.treeExpandedPaths.add(f.id),c(f)}c(n),G()});const P=document.getElementById("btnCollapseAllTree");P&&P.addEventListener("click",()=>{i.treeExpandedPaths.clear(),G()});const K=document.getElementById("treeFilterInput");K&&K.addEventListener("input",c=>{i.currentTreeFilterQuery=c.target.value,G();const u=document.getElementById("treeFilterInput");u&&(u.focus(),u.setSelectionRange(u.value.length,u.value.length))});const A=document.getElementById("btnClearTreeFilter");A&&A.addEventListener("click",()=>{i.currentTreeFilterQuery="",G()})}function re(){i.currentViewMode==="tree"?G():Qn()}function lt(){re()}function Zn(){const e=document.getElementById("scanChunkLabel");e&&(e.textContent=`Safe SCAN (Chunk ${i.scanBatchSize.toLocaleString()})`)}function Oe(){const e=document.getElementById("scanStatusText"),t=document.getElementById("btnScanNext"),n=i.scanComplete;e&&(e.innerHTML=`
      Loaded <strong>${i.totalScanned.toLocaleString()}</strong> keys
      ${n?'<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>':`<span style="color: var(--text-muted);">(${m(qn(i.currentCursor))})</span>`}
      | ${Gn()?"Cluster Total":"DB Total"}: <strong>${Number(i.dbTotalKeys||0).toLocaleString()}</strong>
    `),t&&(t.disabled=i.isScanning||n,t.innerHTML=i.isScanning?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':n?'<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More',g())}function Xn(){const e=document.getElementById("keySearchInput");let t=null;e&&(e.addEventListener("input",()=>{clearTimeout(t),t=setTimeout(()=>{i.currentPattern=e.value.trim()||"*",te(),j()},500)}),e.addEventListener("keydown",h=>{h.key==="Enter"&&(clearTimeout(t),i.currentPattern=e.value.trim()||"*",te(),j())}));const n=document.getElementById("typeFilterGroup");n&&n.addEventListener("click",h=>{const v=h.target.closest(".type-tab");v&&v.dataset.type&&(n.querySelectorAll(".type-tab").forEach(x=>x.classList.remove("active")),v.classList.add("active"),i.currentType=v.dataset.type,te(),j())});const a=document.getElementById("ttlFilterSelect");a&&a.addEventListener("change",h=>{i.currentTtlFilter=h.target.value,re()});const o=document.getElementById("btnScanNext");o&&o.addEventListener("click",()=>it());const s=document.getElementById("btnResetScan");s&&s.addEventListener("click",()=>{te(),j()});const l=document.getElementById("scanBatchSizeSelect");l&&l.addEventListener("change",h=>{i.scanBatchSize=parseInt(h.target.value,10)||50,Zn()});const r=document.getElementById("btnViewTable"),d=document.getElementById("btnViewTree");r&&r.addEventListener("click",()=>{i.currentViewMode!=="table"&&(i.currentViewMode="table",localStorage.setItem("redis_insight_view_mode","table"),r.classList.add("active"),d&&d.classList.remove("active"),re())}),d&&d.addEventListener("click",()=>{i.currentViewMode!=="tree"&&(i.currentViewMode="tree",localStorage.setItem("redis_insight_view_mode","tree"),d.classList.add("active"),r&&r.classList.remove("active"),re())});const p=document.getElementById("btnToggleAutoRefresh");p&&p.addEventListener("click",()=>{Vn()});const y=document.getElementById("autoRefreshIntervalSelect");y&&y.addEventListener("change",h=>{const v=parseInt(h.target.value,10);!isNaN(v)&&v>=5&&(i.autoRefreshIntervalSec=v,localStorage.setItem("redis_insight_auto_refresh_sec",String(v)),te())}),Q()}let xe=null,we=null,ke=null;function ei(e,t,n){xe=e,we=t,ke=n}async function rt(){N("memory"),await Re(),i.currentMemoryAnalysis?Ae(i.currentMemoryAnalysis):De()}function ti(){N("keys")}async function Re(){const e=document.getElementById("memoryOverviewContainer");if(e){e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,g();try{const t=await fetch("/api/memory/overview");if(!t.ok)throw new Error("Failed to fetch memory overview");i.currentMemoryOverview=await t.json(),ni(i.currentMemoryOverview)}catch(t){e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${m(t.message)}</p>
      </div>
    `,g()}}}function ni(e){const t=document.getElementById("memoryOverviewContainer");if(!t||!e)return;let n="mem-status-healthy",a="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(n="mem-status-critical",a="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(n="mem-status-warning",a=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),t.innerHTML=`
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
          Max: <span style="font-family: var(--font-mono); color: var(--text-primary);">${e.maxmemory_human}</span> | Policy: ${m(e.maxmemory_policy)}
        </div>
      </div>
    </div>
  `,g()}function De(){const e=document.getElementById("memoryProfilingContainer");if(!e)return;e.innerHTML=`
    <!-- Educational Explainer -->
    <div class="mem-info-banner">
      <i data-lucide="info" style="width: 20px; height: 20px; color: #38bdf8; flex-shrink: 0; margin-top: 2px;"></i>
      <div>
        <strong style="color: var(--text-primary); font-size: 0.85rem; display: block; margin-bottom: 3px;">What is Memory & BigKeys Profiling?</strong>
        <p style="margin: 0; font-size: 0.78rem; line-height: 1.5; color: var(--text-secondary);">
          In Redis, <strong>BigKeys</strong> consume excessive RAM or contain very high element counts. In addition, keys missing TTLs lead to silent persistent memory leaks.
          This profiler runs non-blocking <code>SCAN</code> across your instance or cluster to identify top memory hogs, project <strong>TTL Space Reclaims</strong>, and audit persistent key leaks.
        </p>
      </div>
    </div>

    <div class="mem-safeguard-box">
      <div class="mem-safeguard-header">
        <i data-lucide="shield-check" style="width: 22px; height: 22px; color: #38bdf8;"></i>
        <span>Non-Blocking Keyspace Profiling & TTL Forecast</span>
      </div>
      <div class="mem-safeguard-body">
        Profiling samples keys using cursor-based <code>SCAN</code>, reads byte footprints with <code>MEMORY USAGE</code>, and projects when RAM will be freed based on expiration horizons.
        Redis is never blocked — all commands execute with bounded concurrency.
      </div>
      <div class="mem-safeguard-controls">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary);">Scan Mode:</span>
          <select id="memScanModeSelect" class="form-select" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
            <option value="sample" selected>Standard Sample (Fast)</option>
            <option value="full">Deep Cluster Scan (Full Keyspace)</option>
          </select>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary);">Sample Limit:</span>
          <select id="memSampleSizeSelect" class="form-select" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
            <option value="100">100 keys (Fastest)</option>
            <option value="250">250 keys (Balanced)</option>
            <option value="500" selected>500 keys (Recommended)</option>
            <option value="1000">1,000 keys (Thorough)</option>
            <option value="5000">5,000 keys (Deep Scan)</option>
            <option value="25000">25,000 keys (Max Cluster Scan)</option>
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
  `,g();const t=document.getElementById("btnStartProfilingAction");t&&t.addEventListener("click",()=>{const n=document.getElementById("memScanModeSelect")?.value||"sample",a=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,o=document.getElementById("memSamplePatternInput").value||"*";if(n==="full"){const s=document.getElementById("deepScanSafetyModal");if(s){s.classList.add("active"),g();const l=()=>s.classList.remove("active"),r=document.getElementById("btnCancelDeepScan"),d=document.getElementById("btnCloseDeepScanModal"),p=document.getElementById("btnConfirmDeepScan");r&&(r.onclick=l),d&&(d.onclick=l),p&&(p.onclick=()=>{l(),Ke(a,o,"full")});return}}Ke(a,o,n)})}async function Ke(e=500,t="*",n="sample"){const a=document.getElementById("memoryProfilingContainer");if(!a)return;i.isMemoryProfilingRunning=!0;const o=n==="full";a.innerHTML=`
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: ${o?"#f59e0b":"#a78bfa"}; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">
        ${o?"Running Deep Non-Blocking Cluster Scan...":"Analyzing Redis Keyspace..."}
      </h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 520px; margin: 0 auto; line-height: 1.5;">
        ${o?"Scanning across cluster primary nodes using non-blocking cursors with bounded concurrency pool and calculating TTL space reclaim forecast...":`Scanning sample of up to <strong>${e.toLocaleString()}</strong> keys (pattern <code>${m(t)}</code>) and measuring memory allocations...`}
      </p>
    </div>
  `,g();try{const s=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:t,scan_mode:n})});if(!s.ok)throw new Error("Failed to complete memory profiling");i.currentMemoryAnalysis=await s.json(),i.isMemoryProfilingRunning=!1,Ae(i.currentMemoryAnalysis)}catch(s){i.isMemoryProfilingRunning=!1,a.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Memory Profiling Failed</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${m(s.message)}</p>
        <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Try Again</button>
      </div>
    `,g();const l=document.getElementById("btnRetryProfiling");l&&l.addEventListener("click",De)}}function Ae(e){const t=document.getElementById("memoryProfilingContainer");if(!t||!e)return;const n={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};t.innerHTML=`
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

    <!-- TTL Space Reclaim Forecast Card -->
    ${e.ttl_forecast?`
      <div class="mem-ttl-forecast-card">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="clock" style="width: 16px; height: 16px; color: #38bdf8;"></i>
              TTL Expiry & Cluster Space Reclaim Forecast
            </span>
            <span style="font-size: 0.73rem; color: var(--text-muted); margin-top: 2px; display: block;">
              Non-blocking projection of automatic memory recovery based on key expiration horizons (${e.ttl_forecast.total_keys_profiled.toLocaleString()} profiled keys, ${e.ttl_forecast.total_memory_profiled_human}).
            </span>
          </div>
          <span class="badge-db" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3);">
            Live Projection
          </span>
        </div>

        <!-- 4 KPI Metrics -->
        <div class="mem-ttl-kpi-grid">
          <!-- Immediate 1h -->
          <div class="mem-ttl-kpi-item" style="border-top: 2px solid #10b981;">
            <div class="kpi-label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #10b981;"></i> &lt; 1 Hour Relief</div>
            <div class="kpi-val" style="color: #10b981;">${e.ttl_forecast.reclaim_1h_human}</div>
            <div class="kpi-sub">${e.ttl_forecast.reclaim_1h_percent}% of memory reclaimed</div>
          </div>
          <!-- 24h -->
          <div class="mem-ttl-kpi-item" style="border-top: 2px solid #06b6d4;">
            <div class="kpi-label"><i data-lucide="calendar" style="width: 12px; height: 12px; color: #06b6d4;"></i> 24-Hour Recovery</div>
            <div class="kpi-val" style="color: #06b6d4;">${e.ttl_forecast.reclaim_24h_human}</div>
            <div class="kpi-sub">${e.ttl_forecast.reclaim_24h_percent}% of memory reclaimed</div>
          </div>
          <!-- 7d -->
          <div class="mem-ttl-kpi-item" style="border-top: 2px solid #3b82f6;">
            <div class="kpi-label"><i data-lucide="trending-down" style="width: 12px; height: 12px; color: #3b82f6;"></i> 7-Day Recovery</div>
            <div class="kpi-val" style="color: #3b82f6;">${e.ttl_forecast.reclaim_7d_human}</div>
            <div class="kpi-sub">${e.ttl_forecast.reclaim_7d_percent}% of memory reclaimed</div>
          </div>
          <!-- Persistent -->
          <div class="mem-ttl-kpi-item" style="border-top: 2px solid ${e.ttl_forecast.persistent_memory_percent>30?"#f43f5e":"#fbbf24"};">
            <div class="kpi-label"><i data-lucide="alert-octagon" style="width: 12px; height: 12px; color: #f43f5e;"></i> No TTL (Persistent)</div>
            <div class="kpi-val" style="color: ${e.ttl_forecast.persistent_memory_percent>30?"#f43f5e":"#fbbf24"};">${e.ttl_forecast.persistent_memory_human}</div>
            <div class="kpi-sub">${e.ttl_forecast.persistent_keys_percent}% of keys (${e.ttl_forecast.persistent_keys_count.toLocaleString()})</div>
          </div>
        </div>

        <!-- Stacked Horizon Progress Bar -->
        <div style="margin-top: 1.1rem;">
          <div style="display: flex; justify-content: space-between; font-size: 0.74rem; color: var(--text-muted); margin-bottom: 0.35rem;">
            <span>Expiration Horizon Distribution (by RAM Footprint)</span>
            <span>Total Profiled: ${e.ttl_forecast.total_memory_profiled_human}</span>
          </div>
          <div class="mem-stacked-bar" style="height: 14px; border-radius: 6px;">
            ${(e.ttl_forecast.horizons||[]).map(s=>{const r={"< 1 Hour":"#10b981","1 - 24 Hours":"#06b6d4","1 - 7 Days":"#3b82f6","> 7 Days":"#8b5cf6","No Expiration (Persistent)":"#f43f5e"}[s.label]||"#94a3b8";return`
                <div class="mem-stacked-segment" style="width: ${s.memory_percentage}%; background: ${r};" title="${m(s.label)}: ${s.memory_percentage}% (${s.total_memory_human}, ${s.key_count.toLocaleString()} keys)"></div>
              `}).join("")}
          </div>

          <!-- Horizon Pills Legend -->
          <div class="mem-horizon-pills-row">
            ${(e.ttl_forecast.horizons||[]).map(s=>{const r={"< 1 Hour":"#10b981","1 - 24 Hours":"#06b6d4","1 - 7 Days":"#3b82f6","> 7 Days":"#8b5cf6","No Expiration (Persistent)":"#f43f5e"}[s.label]||"#94a3b8";return`
                <div class="mem-horizon-pill" style="border-left: 3px solid ${r};">
                  <div class="pill-title">${m(s.label)}</div>
                  <div class="pill-val" style="color: ${r};">${s.total_memory_human}</div>
                  <div class="pill-meta">${s.key_count.toLocaleString()} keys (${s.memory_percentage}%)</div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    `:""}

    <!-- Persistent Keys (No TTL) Leak Audit Card -->
    ${e.ttl_forecast&&e.ttl_forecast.top_leak_namespaces&&e.ttl_forecast.top_leak_namespaces.length>0?`
      <div class="mem-leak-audit-card">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span style="font-size: 0.95rem; font-weight: 700; color: #fca5a5; display: flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="alert-triangle" style="width: 16px; height: 16px; color: #f43f5e;"></i>
              Persistent Keys Leak Audit (Missing Expiration TTL)
            </span>
            <span style="font-size: 0.73rem; color: var(--text-secondary); margin-top: 2px; display: block;">
              Keys in these namespaces have no TTL and accumulate in RAM indefinitely. Filter directly in Keys Browser to inspect or add TTL policies.
            </span>
          </div>
          <span style="font-size: 0.73rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${e.ttl_forecast.top_leak_namespaces.length} leak sources detected
          </span>
        </div>

        <div style="overflow-x: auto;">
          <table class="keys-table" style="width: 100%; font-size: 0.8rem;">
            <thead>
              <tr>
                <th>Offending Namespace / Pattern</th>
                <th style="width: 130px;">Key Count</th>
                <th style="width: 160px;">Unreclaimed RAM</th>
                <th style="width: 120px;">% of Leaks</th>
                <th style="width: 140px; text-align: right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${e.ttl_forecast.top_leak_namespaces.map(s=>`
                <tr>
                  <td>
                    <code style="font-family: var(--font-mono); font-weight: 600; color: #38bdf8; background: rgba(56,189,248,0.1); padding: 0.15rem 0.4rem; border-radius: 4px;">
                      ${m(s.namespace)}
                    </code>
                  </td>
                  <td style="font-family: var(--font-mono); color: var(--text-primary); font-weight: 600;">
                    ${s.key_count.toLocaleString()}
                  </td>
                  <td style="font-family: var(--font-mono); color: #f87171; font-weight: 700;">
                    ${s.total_memory_human}
                  </td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                      <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">${s.percentage_of_leaks}%</span>
                      <div style="width: 45px; height: 4px; background: rgba(255,255,255,0.06); border-radius: 9999px; overflow: hidden;">
                        <div style="width: ${Math.min(100,s.percentage_of_leaks)}%; height: 100%; background: #f43f5e; border-radius: 9999px;"></div>
                      </div>
                    </div>
                  </td>
                  <td style="text-align: right;">
                    <button type="button" class="btn btn-secondary btn-inspect-leak" data-namespace="${m(s.namespace)}" title="Filter keys in Keys Browser matching ${m(s.namespace)} with No TTL" style="padding: 0.25rem 0.55rem; font-size: 0.72rem;">
                      <i data-lucide="filter" style="width: 11px; height: 11px; margin-right: 3px;"></i>
                      Filter in Keys
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `:""}

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
        ${e.types_breakdown.map(s=>{const l=n[s.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-stacked-segment" style="width: ${s.percentage}%; background: ${l};" title="${s.type.toUpperCase()}: ${s.percentage}% (${s.total_human})"></div>
          `}).join("")}
      </div>

      <!-- Type Cards Grid -->
      <div class="mem-type-cards-grid">
        ${e.types_breakdown.map(s=>{const l=n[s.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-type-card" style="border-left: 3px solid ${l};">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="type-badge ${s.type.toLowerCase()}" style="font-size: 0.68rem; padding: 0.1rem 0.4rem;">${s.type.toUpperCase()}</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--text-primary);">${s.percentage}%</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${l}; margin-top: 2px;">
                ${s.total_human}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-muted);">
                ${s.count.toLocaleString()} keys
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
        ${e.recommendations.map(s=>`
          <div class="recommendation-item">
            <span>${m(s)}</span>
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
        ${je(e.top_bigkeys)}
      </div>
    </div>
  `,g();const a=document.getElementById("btnReRunProfiling");a&&a.addEventListener("click",De);const o=document.getElementById("bigkeysSearchInput");o&&o.addEventListener("input",()=>{const s=o.value.trim().toLowerCase(),l=s?e.top_bigkeys.filter(d=>d.key.toLowerCase().includes(s)||d.type.toLowerCase().includes(s)):e.top_bigkeys,r=document.getElementById("bigkeysTableContainer");r&&(r.innerHTML=je(l),g(),Ue())}),Ue()}function je(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const t=e[0]?e[0].memory_bytes:1;return`
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
        ${e.map((n,a)=>{let o="rank-normal";a===0?o="rank-gold":a===1?o="rank-silver":a===2&&(o="rank-bronze");const s=t>0?Math.max(5,Math.round(n.memory_bytes/t*100)):10;let l="No TTL (Persistent)",r="var(--text-muted)";return n.ttl>0&&(l=`${n.ttl.toLocaleString()}s`,r="var(--accent-warning)"),`
            <tr>
              <td>
                <span class="rank-badge ${o}">#${a+1}</span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <a href="javascript:void(0)" class="key-name-link bigkey-inspect-btn" data-key="${m(n.key)}" style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 600; color: #38bdf8; text-decoration: none;" title="Inspect key: ${m(n.key)}">
                    ${m(n.key)}
                  </a>
                  <button type="button" class="btn-copy-inline btn-copy-bigkey" data-key="${m(n.key)}" title="Copy key name">
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
                  <div style="width: ${s}%; height: 100%; background: #38bdf8; border-radius: 9999px;"></div>
                </div>
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">
                ${n.length.toLocaleString()}
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: ${r};">
                ${l}
              </td>
              <td style="text-align: right;">
                <div style="display: inline-flex; align-items: center; gap: 0.35rem;">
                  <button type="button" class="btn btn-secondary bigkey-inspect-btn" data-key="${m(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Inspect key detail">
                    <i data-lucide="external-link" style="width: 11px; height: 11px;"></i>
                    Inspect
                  </button>
                  ${i.lastStatus?.read_only?"":`
                    <button type="button" class="btn btn-danger bigkey-delete-btn" data-key="${m(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Delete oversized key">
                      <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
                    </button>
                  `}
                </div>
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function Ue(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&xe&&xe(t)})}),document.querySelectorAll(".btn-copy-bigkey").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const n=e.getAttribute("data-key");n&&navigator.clipboard.writeText(n).then(()=>{e.classList.add("copied"),e.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px;"></i>',g(),setTimeout(()=>{e.classList.remove("copied"),e.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',g()},1500)})})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&we&&we(t,async()=>{i.currentMemoryAnalysis&&(i.currentMemoryAnalysis.top_bigkeys=i.currentMemoryAnalysis.top_bigkeys.filter(n=>n.key!==t),Ae(i.currentMemoryAnalysis)),ke&&await ke()})})}),document.querySelectorAll(".btn-inspect-leak").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-namespace");if(t){i.currentPattern=t,i.currentTtlFilter="persistent";const n=document.getElementById("keySearchInput");n&&(n.value=t);const a=document.getElementById("ttlFilterSelect");a&&(a.value="persistent"),N("keys"),j()}})})}function ii(){const e=document.getElementById("btnCloseMemoryModal");e&&e.addEventListener("click",ti);const t=document.getElementById("btnOpenMemoryModal");t&&t.addEventListener("click",rt);const n=document.getElementById("btnRefreshMemoryModal");n&&n.addEventListener("click",Re)}async function ai(){N("slowlog"),i.currentSlowlogMinDuration=0,i.currentSlowlogSearch="",i.currentSlowlogNode="all";const e=document.getElementById("btnClearSlowlogModal");e&&(e.style.display=i.lastStatus?.read_only?"none":""),document.querySelectorAll(".slowlog-filter-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-min-duration")==="0")});const t=document.getElementById("slowlogSearchInput");t&&(t.value=""),await pe()}function oi(){N("keys")}async function pe(){const e=document.getElementById("slowlogTableContainer"),t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),a=document.getElementById("slowlogFooterStats");e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,g());try{const o=await fetch("/api/slowlog?limit=250");if(!o.ok)throw new Error("Failed to fetch slowlog");const s=await o.json();if(i.allSlowlogEntries=s.entries||[],t&&(t.textContent=i.allSlowlogEntries.length),n&&s.slower_than_us!==null&&s.slower_than_us!==void 0){const l=(s.slower_than_us/1e3).toFixed(1);n.textContent=`Threshold: > ${l}ms (${s.slower_than_us} µs)`}a&&(a.textContent=`Total buffer: ${s.total_len||i.allSlowlogEntries.length} entries | Max buffer: ${s.max_len||"N/A"}`),si(i.allSlowlogEntries),de()}catch(o){e&&(e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${m(o.message)}</p>
        </div>
      `,g())}}function si(e){const t=document.getElementById("slowlogNodeFilterContainer");if(!t)return;const n=Array.from(new Set(e.map(o=>o.node).filter(Boolean)));if(n.length<=1){t.innerHTML="";return}t.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${n.length})</option>
      ${n.map(o=>`<option value="${m(o)}" ${i.currentSlowlogNode===o?"selected":""}>${m(o)}</option>`).join("")}
    </select>
  `;const a=document.getElementById("slowlogNodeSelect");a&&a.addEventListener("change",()=>{i.currentSlowlogNode=a.value,de()})}function de(){let e=i.allSlowlogEntries;if(i.currentSlowlogMinDuration>0&&(e=e.filter(t=>t.duration_ms>=i.currentSlowlogMinDuration)),i.currentSlowlogNode&&i.currentSlowlogNode!=="all"&&(e=e.filter(t=>t.node===i.currentSlowlogNode)),i.currentSlowlogSearch){const t=i.currentSlowlogSearch.toLowerCase();e=e.filter(n=>{const a=(n.command||[]).join(" ").toLowerCase(),o=(n.client_ip||"").toLowerCase(),s=(n.node||"").toLowerCase();return a.includes(t)||o.includes(t)||s.includes(t)||String(n.id).includes(t)})}li(e)}function li(e){const t=document.getElementById("slowlogTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <i data-lucide="check-circle-2" style="width: 28px; height: 28px; color: #4ade80;"></i>
        </div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.35rem;">No Slow Queries Recorded</h4>
        <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.5;">
          ${i.allSlowlogEntries.length===0?"Redis latency is healthy! All commands executed within the threshold.":"No slowlog entries matched the active filters."}
        </p>
      </div>
    `,g();return}t.innerHTML=`
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
                ${m(n.time_str||"N/A")}
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
                  <span class="slowlog-cmd-code" title="${m(o)}">${m(o)}</span>
                  <button type="button" class="btn-copy-inline btn-copy-slowlog-cmd" data-cmd="${m(o)}" title="Copy full command">
                    <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
                  </button>
                </div>
              </td>
              <td>
                ${n.node?`<span class="slowlog-node-pill">${m(n.node)}</span>`:'<span style="color: var(--text-muted); font-size: 0.75rem;">Default</span>'}
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                ${m(n.client_ip||"Unknown")}
                ${n.client_name?`<span style="color: var(--text-muted); display: block; font-size: 0.7rem;">(${m(n.client_name)})</span>`:""}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,g(),document.querySelectorAll(".btn-copy-slowlog-cmd").forEach(n=>{n.addEventListener("click",a=>{a.stopPropagation();const o=n.getAttribute("data-cmd");o&&navigator.clipboard.writeText(o).then(()=>{n.classList.add("copied"),n.innerHTML='<i data-lucide="check" style="width: 12px; height: 12px;"></i>',g(),setTimeout(()=>{n.classList.remove("copied"),n.innerHTML='<i data-lucide="copy" style="width: 12px; height: 12px;"></i>',g()},1500)})})})}}async function ri(){if(i.lastStatus?.read_only){alert("Slowlog reset is disabled in Read-Only mode.");return}if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");await pe()}catch(e){alert("Error resetting slowlog: "+e.message)}}function di(){const e=document.getElementById("btnCloseSlowlogModal");e&&e.addEventListener("click",oi);const t=document.getElementById("btnOpenSlowlog");t&&t.addEventListener("click",ai);const n=document.getElementById("btnRefreshSlowlogModal");n&&n.addEventListener("click",pe);const a=document.getElementById("btnClearSlowlogModal");a&&a.addEventListener("click",ri);const o=document.getElementById("slowlogSearchInput");o&&o.addEventListener("input",()=>{i.currentSlowlogSearch=o.value.trim(),de()}),document.querySelectorAll(".slowlog-filter-btn").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(l=>l.classList.remove("active")),s.classList.add("active"),i.currentSlowlogMinDuration=parseInt(s.getAttribute("data-min-duration")||"0",10),de()})})}let Ce=null;function ci(e){Ce=e}async function pi(){const e=document.getElementById("keyspaceNodesModal");e&&(e.classList.add("active"),ct(i.lastStatus),await dt())}function Ve(){const e=document.getElementById("keyspaceNodesModal");e&&e.classList.remove("active")}async function dt(){try{const e=await fetch("/api/status");if(!e.ok)throw new Error("Failed to load node stats");i.lastStatus=await e.json(),ct(i.lastStatus)}catch(e){const t=document.getElementById("keyspaceNodesContainer");t&&(t.innerHTML=`<div style="padding: 2rem; text-align: center; color: var(--accent-danger);">${m(e.message)}</div>`)}}function ct(e){const t=document.getElementById("keyspaceNodesContainer"),n=document.getElementById("keyspaceTotalBadge");if(!t||!e)return;const a=e.node_stats||[],o=a.filter(y=>y.role==="master"),s=o.reduce((y,h)=>y+(h.keys||0),0);if(n&&(n.textContent=`${s.toLocaleString()} keys`),o.length===0){t.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Per-node breakdown is only available for cluster connections.</div>';return}const l=y=>y==null?"—":Number(y).toLocaleString(),r=(y,h="left")=>`<th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: ${h};">${y}</th>`,d=(y,h="")=>`<td style="padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; ${h}">${y}</td>`,p=o.map(y=>{const h=s>0&&y.keys!==null?(y.keys/s*100).toFixed(1):"0.0",v=a.filter(k=>k.role==="replica"&&k.master===y.node),x=`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        ${d(`<span class="role-badge-master">MASTER</span> <span style="color: var(--text-primary); font-weight: 600; margin-left: 6px;">${m(y.node)}</span>`)}
        ${d(y.error?`<span style="color: var(--accent-danger);" title="${m(y.error)}">unreachable</span>`:l(y.keys),"text-align: right; color: var(--text-primary); font-weight: 600;")}
        ${d(`${h}%`,"text-align: right; color: var(--text-secondary);")}
        ${d(m(y.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
        ${d(l(y.connected_clients),"text-align: right; color: #38bdf8;")}
      </tr>`,E=v.map(k=>{const C=k.keys!==null&&y.keys!==null?k.keys-y.keys:null,z=C===null?"":C===0?'<span style="color: var(--accent-success); margin-left: 6px;">in sync</span>':`<span style="color: var(--accent-warning); margin-left: 6px;" title="Replica key count differs from its master (replication lag or expiring keys)">${C>0?"+":""}${C.toLocaleString()}</span>`;return`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(0,0,0,0.12);">
        ${d(`<span style="color: var(--text-muted); margin-left: 0.75rem;">↳</span> <span class="role-badge-replica">REPLICA</span> <span style="color: var(--text-secondary); margin-left: 6px;">${m(k.node)}</span>`)}
        ${d(k.error?`<span style="color: var(--accent-danger);" title="${m(k.error)}">unreachable</span>`:`${l(k.keys)}${z}`,"text-align: right; color: var(--text-secondary);")}
        ${d("","")}
        ${d(m(k.used_memory_human||"—"),"text-align: right; color: var(--text-muted);")}
        ${d(l(k.connected_clients),"text-align: right; color: var(--text-muted);")}
      </tr>`}).join("");return x+E}).join("");t.innerHTML=`
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${r("NODE")}${r("KEYS","right")}${r("SHARE","right")}${r("MEMORY","right")}${r("CLIENTS","right")}</tr>
      </thead>
      <tbody>${p}</tbody>
      <tfoot>
        <tr>
          ${d("Cluster total (masters)","color: var(--text-muted); font-family: inherit;")}
          ${d(s.toLocaleString(),"text-align: right; color: var(--accent-primary); font-weight: 700;")}
          ${d("100%","text-align: right; color: var(--text-muted);")}
          ${d(m(e.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
          ${d("","")}
        </tr>
      </tfoot>
    </table>
  `,g()}async function ne(e=null){if(N("topology"),e&&Ce){const t=document.querySelector(`.conn-card[data-id="${e}"]`);t&&!t.classList.contains("active")&&await Ce(e)}await Pe()}function mi(){N("keys")}async function Pe(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),t=document.getElementById("topologyNodesCountBadge"),n=document.getElementById("tabBadgeTopology"),a=document.getElementById("topologyEnvBadge"),o=i.cachedConnections.find(s=>s.is_active);if(o&&a){const s=(o.env||"LOCAL").toUpperCase();a.textContent=s,a.className=`badge-env badge-env-${s.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,g());try{const s=await fetch("/api/topology");if(!s.ok)throw new Error("Failed to load cluster topology");const l=await s.json();i.currentTopologyData=l;const r=`${l.total_nodes} Node${l.total_nodes!==1?"s":""}`;t&&(t.textContent=r),n&&(n.textContent=r),ui(l),Ee()}catch(s){e&&(e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${m(s.message)}</p>
        </div>
      `,g())}}function ui(e){const t=document.getElementById("topologyStatsGrid");if(!t)return;const n=e.is_cluster,a=(e.cluster_state||"").toLowerCase()==="ok"||!n;t.innerHTML=`
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
  `}function Ee(){const e=document.getElementById("topologyTableContainer");if(!e||!i.currentTopologyData)return;const t=i.currentTopologyData.nodes||[],n=(i.currentTopologySearch||"").trim().toLowerCase(),a=i.currentTopologyRole,o=t.filter(s=>{if(a!=="all"&&s.role.toLowerCase()!==a)return!1;if(n){const l=(s.addr||"").toLowerCase().includes(n),r=(s.id||"").toLowerCase().includes(n),d=(s.ip||"").toLowerCase().includes(n),p=(s.slots||"").toLowerCase().includes(n);if(!l&&!r&&!d&&!p)return!1}return!0});if(o.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
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
        ${o.map(s=>{const l=s.role==="master",r=(s.link_state||"connected").toLowerCase()==="connected",d=s.id?s.id.length>12?`${s.id.substring(0,10)}...`:s.id:"N/A",p=s.slots?`${s.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${s.slot_count||0} slots)</span>`:l?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${m(s.id||"")}">${m(d)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${l?"role-badge-master":"role-badge-replica"}">${s.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${m(s.addr||`${s.ip}:${s.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem; text-align: right; color: ${l?"var(--text-primary)":"var(--text-secondary)"};">
                ${s.keys===null||s.keys===void 0?"—":Number(s.keys).toLocaleString()}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${r?"connected":"disconnected"}"></span>
                <span style="color: ${r?"var(--accent-success)":"var(--accent-danger)"};">${s.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${p}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                ${s.master_id?`<span title="${m(s.master_id)}">↳ ${m(s.master_id.substring(0,8))}...</span>`:"—"}
              </td>
              <td style="padding: 0.65rem 0.85rem; text-align: right; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
                ${(s.flags||[]).join(", ")||"none"}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,g()}function yi(){const e=document.getElementById("btnOpenBulkDeleteModal");e&&(i.lastStatus?.read_only?(e.disabled=!0,e.style.opacity="0.4",e.style.cursor="not-allowed",e.title="🔒 Bulk Delete is disabled in Read-Only mode"):(e.disabled=!1,e.style.opacity="1",e.style.cursor="pointer",e.title="Bulk delete matched keys (Dry-run & confirmation required)"))}function gi(){const e=document.getElementById("btnCloseTopologyModal");e&&e.addEventListener("click",mi);const t=document.getElementById("btnOpenTopologyTop");t&&t.addEventListener("click",()=>ne());const n=document.getElementById("btnRefreshTopologyModal");n&&n.addEventListener("click",Pe);const a=document.getElementById("topologySearchInput");a&&a.addEventListener("input",()=>{i.currentTopologySearch=a.value.trim(),Ee()});const o=document.getElementById("topologyRoleFilter");o&&o.addEventListener("click",d=>{const p=d.target.closest(".type-tab");p&&p.dataset.role&&(o.querySelectorAll(".type-tab").forEach(y=>y.classList.remove("active")),p.classList.add("active"),i.currentTopologyRole=p.dataset.role,Ee())});const s=document.getElementById("btnCloseKeyspaceModal");s&&s.addEventListener("click",Ve);const l=document.getElementById("btnRefreshKeyspaceModal");l&&l.addEventListener("click",dt);const r=document.getElementById("btnKeyspaceOpenTopology");r&&r.addEventListener("click",()=>{Ve(),ne()})}let Se=null;function fi(e){Se=e}async function pt(){N("clients"),await me()}function hi(){N("keys")}async function me(){const e=document.getElementById("clientsTableContainer"),t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats"),a=document.getElementById("clientsSearchInput");e&&(e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',g());try{const o=await fetch("/api/clients");if(!o.ok)throw new Error("Failed to load connected clients");i.allConnectedClients=await o.json(),t&&(t.textContent=i.allConnectedClients.length),n&&(n.textContent=`${i.allConnectedClients.length} total connections`),a&&(a.value=""),mt(i.allConnectedClients)}catch(o){e&&(e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error loading clients</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${m(o.message)}</p>
        </div>
      `,g())}}function mt(e){const t=document.getElementById("clientsTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="users" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.4;"></i>
        <p>No matching connected clients found.</p>
      </div>
    `,g();return}t.innerHTML=`
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
                <span style="${n.is_current_app?"color: #38bdf8;":""}">${m(n.name)}</span>
                ${n.is_current_app?'<span class="badge-db" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); font-size: 0.65rem; font-weight: 600;">THIS APP</span>':""}
                ${n.flags&&n.flags.includes("O")?'<span class="badge-db" style="background: rgba(234, 179, 8, 0.15); color: #fde047; font-size: 0.65rem;">MONITOR</span>':""}
              </div>
              <div class="client-sub-text">User: ${m(n.user)} | Flags: ${m(n.flags||"none")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div class="client-ip-cell">${m(n.addr)}</div>
              <div class="client-sub-text">Target: ${m(n.laddr||"localhost")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem;">
              DB${n.db}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <span class="client-cmd-badge">${m(n.cmd||"idle")}</span>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
              ${n.age_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: ${n.idle>300?"var(--accent-warning)":"var(--accent-success)"};">
              ${n.idle_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; text-align: right;">
              ${i.lastStatus?.read_only?`
                <span title="Read-Only Mode: Disconnecting clients is locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
                  <i data-lucide="lock" style="width: 13px; height: 13px;"></i>
                </span>
              `:`
                <button type="button" class="btn-icon danger btn-kill-client" data-id="${n.id}" data-addr="${m(n.addr)}" title="Disconnect client">
                  <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                </button>
              `}
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,g(),t.querySelectorAll(".btn-kill-client").forEach(n=>{n.addEventListener("click",()=>{const a=n.getAttribute("data-id"),o=n.getAttribute("data-addr");vi(a,o)})})}}async function vi(e,t){if(i.lastStatus?.read_only){alert("Client disconnection is disabled in Read-Only mode.");return}if(confirm(`Are you sure you want to disconnect client #${e} (${t})?`))try{const n=await fetch(`/api/clients/${e}`,{method:"DELETE"}),a=await n.json();if(!n.ok)throw new Error(a.detail||"Failed to disconnect client");await me(),Se&&await Se()}catch(n){alert("Error disconnecting client: "+n.message)}}function bi(){const e=document.getElementById("btnCloseClientsModal");e&&e.addEventListener("click",hi);const t=document.getElementById("btnOpenClientsModal");t&&t.addEventListener("click",pt);const n=document.getElementById("btnRefreshClientsModal");n&&n.addEventListener("click",me);const a=document.getElementById("clientsSearchInput");a&&a.addEventListener("input",()=>{const o=a.value.trim().toLowerCase(),s=o?i.allConnectedClients.filter(l=>(l.addr||"").toLowerCase().includes(o)||(l.name||"").toLowerCase().includes(o)||(l.user||"").toLowerCase().includes(o)||(l.cmd||"").toLowerCase().includes(o)||String(l.id).includes(o)):i.allConnectedClients;mt(s)})}let J=null,B=[],V=null,q=null;function xi(e,t){V=e,q=t}async function W(){const e=document.getElementById("connectionsList");try{const[t,n]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]),a=await t.json();if(i.cachedConnections=a||[],n.ok){const o=await n.json();i.currentLimit=o.limit||2}Le()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function ut(e,t){const n=document.getElementById("connectedCountDisplay"),a=document.getElementById("connLimitDisplay"),o=document.getElementById("connLimitSelect"),s=document.getElementById("limitProgressDots"),l=document.getElementById("limitCountPill");if(n&&(n.textContent=e),a&&(a.textContent=t),o&&String(o.value)!==String(t)&&(o.value=String(t)),l&&(e>=t&&t>0?(l.classList.add("at-limit"),l.title="Connection limit reached"):(l.classList.remove("at-limit"),l.title=`${e} of ${t} connections in use`)),s){let r="";for(let d=0;d<t;d++){const p=d<e;r+=`<span class="limit-slot-dot ${p?"filled":"empty"}" title="Slot ${d+1}: ${p?"Connected":"Available"}"></span>`}s.innerHTML=r}}function Le(){const e=document.getElementById("connectionsList");if(!e)return;const t=document.getElementById("totalConnCountBadge");t&&(t.textContent=i.cachedConnections.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(r=>{const d=r.getAttribute("data-env");let p=0;d==="ALL"?p=i.cachedConnections.length:p=i.cachedConnections.filter(y=>(y.env||"LOCAL").toUpperCase()===d).length,r.textContent=`${d} (${p})`});const a=(i.currentConnSearch||"").trim().toLowerCase(),o=i.currentEnvFilter,s=i.cachedConnections.filter(r=>{if(o!=="ALL"&&(r.env||"LOCAL").toUpperCase()!==o)return!1;if(a){const d=(r.name||"").toLowerCase().includes(a),p=(r.host||"").toLowerCase().includes(a),y=(r.env||"").toLowerCase().includes(a),h=(r.conn_type||"").toLowerCase().includes(a);if(!d&&!p&&!y&&!h)return!1}return!0});s.sort((r,d)=>{const p=r.is_connected?1:0,y=d.is_connected?1:0;if(y!==p)return y-p;const h=r.is_selected?1:0,v=d.is_selected?1:0;return v!==h?v-h:(r.name||"").localeCompare(d.name||"")});const l=i.cachedConnections.filter(r=>r.is_connected).length;if(ut(l,i.currentLimit),s.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${a?`No results found for "${m(a)}"`:`No connections configured in ${m(o)}`}
        </span>
      </div>
    `,g();return}e.innerHTML=s.map(r=>{const d=(r.env||"LOCAL").toUpperCase(),p=`badge-env-${d.toLowerCase()}`,y=r.conn_type==="cluster",h=r.conn_type==="sentinel",v=r.source==="config",x=!!r.is_connected,E=!!r.is_selected;return`
      <div class="conn-card ${x?"is-connected":""} ${E?"selected active":""}" data-id="${r.id}" title="Click to review config & connection options">
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${E?`
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
            <span class="conn-name" title="${m(r.name)}">${m(r.name)}</span>
          </div>

          <div class="conn-status-badge-wrap">
            ${E?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:x?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${m(r.host)}:${r.port}">
            <i data-lucide="${y?"network":h?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${m(r.host)}:${r.port}</span>
          </div>

          <div class="conn-tags">
            <span class="badge-env ${p}">${d}</span>
            ${r.read_only?'<span class="badge-readonly" title="Read-Only Mode: Mutating operations locked">🔒 RO</span>':""}
            ${y?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${h?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!y&&!h?`<span class="badge-db">DB${r.db}</span>`:""}
            ${r.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${r.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${v?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${x?`
            ${E?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${r.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${r.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${y||x?`
              <button type="button" class="btn-hover-action btn-view-topology-card" data-id="${r.id}" title="View topology & nodes">
                <i data-lucide="layers" style="width: 11px; height: 11px;"></i>
              </button>
            `:""}
          `:`
            <button type="button" class="btn-hover-action btn-hover-connect btn-card-open-config" data-id="${r.id}" title="Review config & Connect">
              <i data-lucide="play" style="width: 11px; height: 11px;"></i>
              <span>Connect</span>
            </button>
            ${v?"":`
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${r.id}" data-name="${m(r.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>
      </div>
    `}).join(""),g(),e.querySelectorAll(".conn-card").forEach(r=>{r.addEventListener("click",d=>{if(d.target.closest(".btn-delete-conn")||d.target.closest(".btn-view-topology-card")||d.target.closest(".btn-card-disconnect")||d.target.closest(".btn-card-select")||d.target.closest(".btn-card-open-config"))return;const p=r.getAttribute("data-id"),y=i.cachedConnections.find(h=>h.id===p);y&&Te(y)})}),e.querySelectorAll(".btn-card-disconnect").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const p=r.getAttribute("data-id");await Ne(p)})}),e.querySelectorAll(".btn-card-select").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const p=r.getAttribute("data-id");await gt(p)})}),e.querySelectorAll(".btn-card-open-config").forEach(r=>{r.addEventListener("click",d=>{d.stopPropagation();const p=r.getAttribute("data-id"),y=i.cachedConnections.find(h=>h.id===p);y&&Te(y)})}),e.querySelectorAll(".btn-view-topology-card").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const p=r.getAttribute("data-id");await ne(p)})}),e.querySelectorAll(".btn-delete-conn").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const p=r.getAttribute("data-id"),y=r.getAttribute("data-name");confirm(`Are you sure you want to delete '${y}'?`)&&await Ci(p)})})}function wi(e){if(!e)return[];if(Array.isArray(e))return e.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t));if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n))}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}return[]}function Te(e){i.activeConfigConn=e;const t=document.getElementById("clusterConfigModal"),n=document.getElementById("cfgModalTitle"),a=document.getElementById("cfgModalSubtitle"),o=document.getElementById("cfgModalBody"),s=document.getElementById("cfgModalFooter");if(!t||!o||!s)return;n&&(n.textContent=e.name||"Cluster Configuration"),a&&(a.textContent="Review configuration before connecting");const l=!!e.is_connected,r=!!e.is_selected,d=e.conn_type==="cluster",p=wi(e.cluster_nodes),y=i.cachedConnections.filter(H=>H.is_connected).length,h=!l&&y>=i.currentLimit;o.innerHTML=`
    <div class="config-status-banner ${l?"connected":"disconnected"}">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="${l?"check-circle-2":"alert-circle"}" style="width: 18px; height: 18px;"></i>
        <span>${l?"Connected & Live":"Not Connected"}</span>
      </div>
      <div>
        ${r?'<span class="badge-selected-cluster">ACTIVE / VIEWING KEYS</span>':l?'<span class="badge-connected-cluster">CONNECTED</span>':'<span style="font-size: 0.75rem; color: var(--text-muted);">Ready to connect</span>'}
      </div>
    </div>

    <div class="config-grid">
      <div class="config-grid-row">
        <span class="config-label">Cluster / Instance Name</span>
        <span class="config-value">${m(e.name)}</span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Environment</span>
        <span class="config-value">
          <span class="badge-env badge-env-${(e.env||"LOCAL").toLowerCase()}">${(e.env||"LOCAL").toUpperCase()}</span>
        </span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Connection Type</span>
        <span class="config-value" style="text-transform: capitalize;">${m(e.conn_type||"standalone")}</span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Host / Seed Node</span>
        <span class="config-value" style="color: var(--accent-primary);">${m(e.host)}:${e.port}</span>
      </div>
      ${d&&(p.length>0||e.cluster_nodes)?`
        <div class="config-grid-row config-grid-seeds-row">
          <span class="config-label" style="padding-top: 2px;">
            Seed Endpoints ${p.length>0?`(${p.length})`:""}
          </span>
          <div class="config-seeds-container">
            ${p.length>0?p.map(H=>`
                  <span class="seed-node-pill" title="${m(H)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${m(H)}
                  </span>
                `).join(""):`<span class="seed-node-pill">${m(e.cluster_nodes)}</span>`}
          </div>
        </div>
      `:""}
      ${d?"":`
        <div class="config-grid-row">
          <span class="config-label">Database Index</span>
          <span class="config-value">DB ${e.db||0}</span>
        </div>
      `}
      <div class="config-grid-row">
        <span class="config-label">Authentication</span>
        <span class="config-value">
          ${e.username?m(e.username):"default"} / ${e.has_password?"•••••••• (Encrypted)":"None"}
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
      <span>Connected Limit: <strong>${y} of ${i.currentLimit}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${h?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${i.currentLimit} maximum). Please disconnect a connected cluster first or increase the limit.</span>
      </div>
    `:""}

    <div id="cfgTestResultBox" class="test-result-box" style="margin-top: 0.65rem;"></div>
  `,l?s.innerHTML=`
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
        ${r?`
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
    `:s.innerHTML=`
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
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${h?"disabled":""}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `,g(),t.classList.add("active");const v=document.getElementById("btnCloseConfigModal");v&&(v.onclick=()=>t.classList.remove("active"));const x=document.getElementById("btnEditFromConfig");x&&(x.onclick=()=>{t.classList.remove("active"),ht(e)});const E=document.getElementById("btnConnectFromConfig");E&&(E.onclick=async()=>{await yt(e.id),t.classList.remove("active")});const k=document.getElementById("btnDisconnectFromConfig");k&&(k.onclick=async()=>{await Ne(e.id),t.classList.remove("active")});const C=document.getElementById("btnSelectFromConfig");C&&(C.onclick=async()=>{await gt(e.id),t.classList.remove("active")});const z=document.getElementById("btnTopologyFromConfig");z&&(z.onclick=async()=>{t.classList.remove("active"),await ne(e.id)});const F=document.getElementById("btnTestFromConfig");F&&(F.onclick=async()=>{await ki(e)})}async function ki(e){const t=document.getElementById("cfgTestResultBox"),n=document.getElementById("btnTestFromConfig");n&&(n.disabled=!0,n.innerHTML="Testing..."),t&&(t.className="test-result-box",t.innerHTML="");try{const o=await(await fetch(`/api/connections/${e.id}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();o.success?(t.className="test-result-box success",t.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${o.latency_ms} ms</strong> (Redis v${o.redis_version})</span>
      `):(t.className="test-result-box error",t.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${m(o.error||"Connection refused")}</span>
      `)}catch(a){t&&(t.className="test-result-box error",t.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${m(a.message)}</span>`)}finally{n&&(n.disabled=!1,n.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),g()}}async function yt(e){if(i.cachedConnections.filter(n=>n.is_connected&&n.id!==e).length>=i.currentLimit){alert(`Connection limit reached: Maximum ${i.currentLimit} connected cluster(s) allowed at a time.
Please disconnect an existing cluster first or increase the limit in the sidebar.`);return}try{const n=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),a=await n.json();if(!n.ok)throw new Error(a.detail||"Failed to connect to cluster");await W(),V&&await V(),q&&await q()}catch(n){alert("Connection error: "+n.message)}}async function Ne(e){try{const t=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to disconnect cluster");await W(),V&&await V(),i.cachedConnections.some(o=>o.is_connected&&o.id!==e)?q&&await q():(i.keysTableRows=[],i.loadedKeysSet.clear(),i.totalScanned=0,i.currentCursor=0,i.scanComplete=!1,i.dbTotalKeys=0,ft())}catch(t){alert("Disconnect error: "+t.message)}}async function gt(e){try{const t=await fetch(`/api/connections/${e}/select`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to switch cluster");const a=document.getElementById("keyDetailModal");a&&a.classList.remove("active"),i.activeDetailKey=null,i.activeDetailData=null,await W(),V&&await V(),q&&await q()}catch(t){alert("Switch error: "+t.message)}}function ft(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="flex"),n&&(n.style.display="none");const a=document.getElementById("btnConnectFirstAvailable");a&&(a.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${i.cachedConnections.length})`,i.cachedConnections.length>0&&(a.onclick=()=>Te(i.cachedConnections[0]))),g()}async function Ci(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");await W(),V&&await V(),q&&await q()}catch(t){alert("Delete error: "+t.message)}}function Y(){const e=document.getElementById("clusterNodesList"),t=document.getElementById("clusterNodeCountBadge");if(e){if(t&&(t.textContent=`${B.length} configured`),B.length===0){e.innerHTML=`
      <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
        No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
      </div>
    `;return}e.innerHTML=B.map((n,a)=>{const o=n.role==="master",s=n.role==="replica",l=n.role==="seed",r=o?"master":s?"replica":"",d=o?"master":s?"replica":l?"seed":"manual",p=o?"Master":s?"Replica":l?"Seed":"Node";return`
      <span class="cluster-node-chip ${r}">
        <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
        <span>${m(n.host)}:${n.port}</span>
        <span class="cluster-node-role-badge ${d}">${p}</span>
        <button type="button" class="cluster-node-chip-remove" data-idx="${a}" title="Remove node">
          <i data-lucide="x" style="width: 11px; height: 11px;"></i>
        </button>
      </span>
    `}).join(""),e.querySelectorAll(".cluster-node-chip-remove").forEach(n=>{n.addEventListener("click",a=>{a.stopPropagation();const o=parseInt(n.getAttribute("data-idx"),10);!isNaN(o)&&o>=0&&o<B.length&&(B.splice(o,1),Y())})}),g()}}function ht(e){J=e.id;const t=document.getElementById("connectionModal"),n=document.getElementById("connectionModalTitle"),a=document.getElementById("btnSaveConn"),o=document.getElementById("connPassword");n&&(n.innerHTML='<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection'),a&&(a.textContent="Update Connection"),document.getElementById("connName").value=e.name||"",document.getElementById("connEnv").value=(e.env||"DEV").toUpperCase();const s=document.getElementById("connTypeSelect");s.value=e.conn_type||"standalone",document.getElementById("connHost").value=e.host||"localhost",document.getElementById("connPort").value=e.port||6379,document.getElementById("connDb").value=e.db||0,document.getElementById("connUsername").value=e.username||"",document.getElementById("connTls").checked=!!e.use_tls,document.getElementById("connReadOnly").checked=!!e.read_only,o&&(o.value="",e.has_password?o.placeholder="•••••••• (Leave blank to keep saved password)":o.placeholder="Enter password (or leave empty)");const l=document.getElementById("clusterNodesGroup"),r=document.getElementById("connHostLabel"),d=document.getElementById("connDbRow");if(B=[],e.conn_type==="cluster"){if(l&&(l.style.display="block"),r&&(r.textContent="Seed Node Host *"),d&&(d.style.display="none"),e.cluster_nodes)try{const y=typeof e.cluster_nodes=="string"?JSON.parse(e.cluster_nodes):e.cluster_nodes;Array.isArray(y)&&(B=y.map(h=>{if(typeof h=="string"&&h.includes(":")){const v=h.split(":");return{host:v[0].trim(),port:parseInt(v[1],10)||6379}}return{host:h.host||"127.0.0.1",port:parseInt(h.port,10)||6379}}))}catch{}}else l&&(l.style.display="none"),r&&(r.textContent="Host *"),d&&(d.style.display="flex");Y();const p=document.getElementById("testResultBox");p&&(p.className="test-result-box",p.innerHTML=""),g(),t&&t.classList.add("active")}function Ei(){window.openEditConnectionModal=ht;const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const c=parseInt(e.value,10);try{const u=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:c})});if(u.ok){const f=await u.json();i.currentLimit=f.limit,ut(f.connected_count,f.limit)}}catch(u){console.warn("Failed to update limit:",u)}});const t=document.getElementById("connSearchInput");t&&t.addEventListener("input",()=>{i.currentConnSearch=t.value.trim(),Le()});const n=document.getElementById("envFilterPills");n&&n.addEventListener("click",c=>{const u=c.target.closest(".env-pill-btn");u&&u.dataset.env&&(n.querySelectorAll(".env-pill-btn").forEach(f=>f.classList.remove("active")),u.classList.add("active"),i.currentEnvFilter=u.dataset.env,Le())});const a=document.getElementById("btnReloadConfigStatic");a&&a.addEventListener("click",async()=>{a.disabled=!0;try{await fetch("/api/connections/reload-config",{method:"POST"}),await W()}catch(c){console.warn("Reload config failed:",c)}finally{a.disabled=!1}});const o=document.getElementById("connTypeSelect"),s=document.getElementById("clusterNodesGroup"),l=document.getElementById("connHostLabel"),r=document.getElementById("connPortLabel"),d=document.getElementById("connHost"),p=document.getElementById("connPort"),y=document.getElementById("connDbGroup");o&&s&&o.addEventListener("change",()=>{const c=o.value==="cluster";s.style.display=c?"block":"none",y&&(y.style.display=c?"none":"block"),c?(l&&(l.textContent="Primary Seed Host *"),r&&(r.textContent="Seed Port *"),d&&(d.value==="localhost"||!d.value)&&(d.value="127.0.0.1"),p&&(p.value==="6379"||!p.value)&&(p.value="7000"),B.length===0&&d&&d.value&&p&&p.value&&B.push({host:d.value.trim(),port:parseInt(p.value,10)||7e3,role:"seed"}),Y()):(l&&(l.textContent="Host *"),r&&(r.textContent="Port *"),p&&p.value==="7000"&&(p.value="6379"))});const h=document.getElementById("btnAutoDiscoverCluster"),v=document.getElementById("clusterDiscoveryStatus");h&&h.addEventListener("click",async()=>{const c=d?d.value.trim():"127.0.0.1",u=p&&parseInt(p.value,10)||7e3,f=document.getElementById("connUsername").value.trim()||null,w=document.getElementById("connPassword").value||null,S=document.getElementById("connTls").checked;if(!c){v&&(v.className="cluster-discovery-status error",v.style.display="flex",v.innerHTML='<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>',g());return}h.disabled=!0,h.innerHTML="Discovering...";try{const $=await(await fetch("/api/connections/discover-cluster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:c,port:u,username:f,password:w,use_tls:S})})).json();$.success&&$.nodes&&$.nodes.length>0?(B=$.nodes.map(M=>({host:M.host,port:M.port,role:M.role,is_myself:M.is_myself,slots:M.slots})),Y(),v&&(v.className="cluster-discovery-status success",v.style.display="flex",v.innerHTML=`
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${$.total_nodes} nodes</strong> (${$.masters_count} masters, ${$.replicas_count} replicas)</span>
            `,g())):v&&(v.className="cluster-discovery-status error",v.style.display="flex",v.innerHTML=`
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${m($.error||"Cluster discovery failed.")}</span>
            `,g())}catch(L){v&&(v.className="cluster-discovery-status error",v.style.display="flex",v.innerHTML=`
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${m(L.message)}</span>
          `,g())}finally{h.disabled=!1,h.innerHTML='<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes',g()}});const x=document.getElementById("inputCustomClusterNode"),E=document.getElementById("btnAddCustomClusterNode");function k(){if(!x)return;const c=x.value.trim();if(!c)return;let u="127.0.0.1",f=7e3;if(c.includes(":")){const S=c.split(":");u=S[0].trim()||"127.0.0.1",f=parseInt(S[1].trim(),10)||7e3}else isNaN(parseInt(c,10))?u=c:(f=parseInt(c,10),u=d?d.value.trim():"127.0.0.1");B.some(S=>S.host===u&&S.port===f)||(B.push({host:u,port:f,role:"manual"}),Y()),x.value=""}E&&E.addEventListener("click",k),x&&x.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),k())});const C=document.getElementById("connectionModal"),z=document.getElementById("btnAddConn");z&&C&&z.addEventListener("click",()=>{J=null,document.getElementById("connectionForm").reset();const c=document.getElementById("connectionModalTitle"),u=document.getElementById("btnSaveConn"),f=document.getElementById("connPassword");c&&(c.innerHTML='<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection'),u&&(u.textContent="Save Connection"),f&&(f.placeholder="Leave empty if none");const w=document.getElementById("connEnv").value;document.getElementById("connReadOnly").checked=w==="PROD",document.getElementById("clusterNodesGroup").style.display="none",document.getElementById("connHostLabel").textContent="Host *",document.getElementById("connDbRow").style.display="flex",B=[],Y();const S=document.getElementById("testResultBox");S&&(S.className="test-result-box",S.innerHTML=""),g(),C.classList.add("active")});const F=document.getElementById("btnCloseModal");F&&C&&F.addEventListener("click",()=>C.classList.remove("active"));const H=document.getElementById("btnCancelModal");H&&C&&H.addEventListener("click",()=>C.classList.remove("active"));const P=document.getElementById("connEnv");P&&P.addEventListener("change",c=>{if(c.target.value==="PROD"){const u=document.getElementById("connReadOnly");u&&(u.checked=!0)}});const K=document.getElementById("btnTestConnModal");K&&K.addEventListener("click",async()=>{const c=document.getElementById("connTypeSelect").value,u=document.getElementById("connHost").value.trim()||"localhost",f=parseInt(document.getElementById("connPort").value,10)||6379,w=parseInt(document.getElementById("connDb").value,10)||0,S=document.getElementById("connUsername").value.trim()||null,L=document.getElementById("connPassword").value,$=document.getElementById("connTls").checked;let M=null;c==="cluster"&&B.length>0&&(M=JSON.stringify(B.map(R=>({host:R.host,port:R.port}))));const T=document.getElementById("testResultBox");K.disabled=!0,K.innerHTML="Testing...",T&&(T.className="test-result-box",T.innerHTML="");try{let R;J&&!L?R=await fetch(`/api/connections/${J}/test`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:u,port:f,db:w,username:S,use_tls:$,conn_type:c,cluster_nodes:M})}):R=await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:u,port:f,db:w,username:S,password:L||null,use_tls:$,conn_type:c,cluster_nodes:M})});const O=await R.json();if(O.success){T.className="test-result-box success";const I=O.is_cluster?` • Cluster Mode (${O.cluster_nodes_count||B.length} nodes reachable)`:"";T.innerHTML=`
            <i data-lucide="check-circle-2"></i>
            <span>Connected! Latency: <strong>${O.latency_ms} ms</strong>${I} (Redis v${O.redis_version})</span>
          `}else T.className="test-result-box error",T.innerHTML=`
            <i data-lucide="alert-circle"></i>
            <span>Failed: ${m(O.error||"Connection refused")}</span>
          `}catch(R){T&&(T.className="test-result-box error",T.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${m(R.message)}</span>`)}finally{K.disabled=!1,K.innerHTML='<i data-lucide="zap"></i> Test Connection',g()}});const A=document.getElementById("connectionForm");A&&A.addEventListener("submit",async c=>{c.preventDefault();const u=document.getElementById("connName").value.trim(),f=document.getElementById("connEnv").value,w=document.getElementById("connTypeSelect").value;let S=document.getElementById("connHost").value.trim()||"localhost",L=parseInt(document.getElementById("connPort").value,10)||6379;const $=parseInt(document.getElementById("connDb").value,10)||0,M=document.getElementById("connUsername").value.trim()||null,T=document.getElementById("connPassword").value,R=document.getElementById("connTls").checked,O=document.getElementById("connAutoActivate").checked,I=document.getElementById("connReadOnly")?.checked||!1;let _=null;w==="cluster"&&(B.length>0?(_=JSON.stringify(B.map(D=>({host:D.host,port:D.port}))),S=B[0].host,L=B[0].port):_=JSON.stringify([{host:S,port:L}]));try{if(J){const D={name:u,env:f,conn_type:w,host:S,port:L,cluster_nodes:_,db:$,username:M,use_tls:R,read_only:I};T&&(D.password=T);const ee=await fetch(`/api/connections/${J}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)});if(!ee.ok){const ue=await ee.json().catch(()=>({}));throw new Error(ue.detail||"Failed to update connection")}}else{const D={name:u,env:f,conn_type:w,host:S,port:L,cluster_nodes:_,db:$,username:M,password:T||null,use_tls:R,read_only:I},ee=await fetch(`/api/connections?auto_activate=${O}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)});if(!ee.ok){const ue=await ee.json().catch(()=>({}));throw new Error(ue.detail||"Failed to save connection")}}C.classList.remove("active"),J=null,A.reset(),B=[],Y(),await W(),V&&await V(),q&&await q()}catch(D){alert("Error saving: "+D.message)}})}xi(Z,j);On(j);_n(ce);ei(X,ce,Z);fi(Z);ci(yt);ie("benchmark",()=>Je());ie("memory",()=>Re());ie("slowlog",()=>pe());ie("topology",()=>Pe());ie("clients",()=>me());function Si(){const e=document.getElementById("app");e&&(e.innerHTML=`
    <div class="app-container">
      <!-- Left Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="brand">
            <div class="brand-icon">
              <i data-lucide="layers" style="width: 18px; height: 18px;"></i>
            </div>
            <div class="brand-title">
              <h2>RedisInsight</h2>
            </div>
          </div>
          <button type="button" class="sidebar-toggle-btn" id="btnToggleSidebar" title="Toggle Sidebar (Ctrl+B)">
            <i data-lucide="panel-left" style="width: 14px; height: 14px;"></i>
          </button>
        </div>

        <div class="sidebar-action-bar">
          <div class="action-bar-title">
            <span>Connections</span>
            <span class="conn-count-badge" id="totalConnCountBadge">0</span>
          </div>
          <div style="display: flex; gap: 0.35rem;">
            <button type="button" class="btn btn-secondary btn-icon-only" id="btnReloadConfigStatic" title="Sync & reload connections from config/connections.yaml">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
            </button>
            <button type="button" class="btn btn-primary btn-add-conn" id="btnAddConn" title="Add new Redis connection">
              <i data-lucide="plus" style="width: 13px; height: 13px;"></i>
              <span>Add</span>
            </button>
          </div>
        </div>

        <div class="sidebar-filter-section">
          <div class="sidebar-search-box">
            <i data-lucide="search" class="sidebar-search-icon" style="width: 13px; height: 13px;"></i>
            <input type="text" id="connSearchInput" class="sidebar-search-input" placeholder="Filter clusters...">
          </div>
          <div class="sidebar-env-tabs" id="envFilterPills">
            <button type="button" class="env-pill-btn active" data-env="ALL">ALL (0)</button>
            <button type="button" class="env-pill-btn" data-env="DEV">DEV (0)</button>
            <button type="button" class="env-pill-btn" data-env="UAT">UAT (0)</button>
            <button type="button" class="env-pill-btn" data-env="PROD">PROD (0)</button>
          </div>
        </div>

        <div class="sidebar-limit-bar" id="sidebarLimitBar">
          <div class="limit-bar-top">
            <div class="limit-status-label">
              <i data-lucide="shield-check" style="width: 13px; height: 13px; color: var(--accent-primary);"></i>
              <span class="limit-title">Active Capacity</span>
              <span class="limit-count-pill" id="limitCountPill">
                <span id="connectedCountDisplay">0</span>/<span id="connLimitDisplay">2</span>
              </span>
            </div>
            <div class="limit-select-wrap">
              <label for="connLimitSelect" class="limit-select-label">Max:</label>
              <select id="connLimitSelect" class="conn-limit-select" title="Simultaneous connection limit (1-5)">
                <option value="1">1</option>
                <option value="2" selected>2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div class="limit-progress-dots" id="limitProgressDots">
            <span class="limit-slot-dot empty"></span>
            <span class="limit-slot-dot empty"></span>
          </div>
        </div>

        <div class="connections-list-wrapper" id="connectionsList">
          <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
            <i data-lucide="refresh-cw" class="spin" style="width: 18px; height: 18px; margin-bottom: 0.5rem; display: inline-block;"></i>
            <div>Loading connections...</div>
          </div>
        </div>

        <div class="sidebar-footer">
          <div class="footer-meta">
            <span class="status-indicator-dot online"></span>
            <span>FastAPI Backend Ready</span>
          </div>
          <span class="version-tag">v0.1.0</span>
        </div>
      </aside>

      <!-- Main Workspace Wrapper -->
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
            <button type="button" class="tool-icon-btn" id="btnRefreshStats" title="Ping active instance & refresh vitals">
              <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
            </button>
          </div>
        </header>

        <!-- Modern Workspace Tabs Bar -->
        <nav class="workspace-tabs-bar" id="workspaceTabsBar" role="tablist">
          <button type="button" class="ws-tab-btn active" id="tabBtnWorkspaceKeys" data-tab="keys" role="tab" aria-selected="true" title="Key Browser & Virtual Namespace Tree (Ctrl+1)">
            <i data-lucide="key" style="width: 13px; height: 13px;"></i>
            <span>Keys</span>
            <span class="ws-tab-badge" id="tabBadgeKeys">0</span>
          </button>
          <button type="button" class="ws-tab-btn" id="btnOpenBenchmarkModal" data-tab="benchmark" role="tab" aria-selected="false" title="Redis Benchmark & Latency Studio (Ctrl+2)">
            <i data-lucide="zap" style="width: 13px; height: 13px; color: #f59e0b;"></i>
            <span>Benchmark Studio</span>
          </button>
          <button type="button" class="ws-tab-btn" id="btnOpenMemoryModal" data-tab="memory" role="tab" aria-selected="false" title="Memory Diagnostics & BigKeys Profiler (Ctrl+3)">
            <i data-lucide="pie-chart" style="width: 13px; height: 13px; color: #a78bfa;"></i>
            <span>Memory & BigKeys</span>
          </button>
          <button type="button" class="ws-tab-btn" id="btnOpenSlowlog" data-tab="slowlog" role="tab" aria-selected="false" title="Real-Time Slowlog & Latency Profiler (Ctrl+4)">
            <i data-lucide="activity" style="width: 13px; height: 13px; color: #38bdf8;"></i>
            <span>Slowlog</span>
          </button>
          <button type="button" class="ws-tab-btn" id="tabBtnWorkspaceTopology" data-tab="topology" role="tab" aria-selected="false" title="Cluster Topology & Node Health (Ctrl+5)">
            <i data-lucide="layers" style="width: 13px; height: 13px; color: var(--accent-primary);"></i>
            <span>Cluster Topology</span>
            <span class="ws-tab-badge" id="tabBadgeTopology">1 Node</span>
          </button>
          <button type="button" class="ws-tab-btn" id="tabBtnWorkspaceClients" data-tab="clients" role="tab" aria-selected="false" title="Connected Client Sessions (Ctrl+6)">
            <i data-lucide="users" style="width: 13px; height: 13px; color: #38bdf8;"></i>
            <span>Clients</span>
            <span class="ws-tab-badge" id="tabBadgeClients">0</span>
          </button>
        </nav>

        <!-- Workspace Panes Container -->
        <div class="workspace-container">
          <!-- 1. Keys Tab Pane (Default) -->
          <div class="ws-tab-pane active" id="paneWorkspaceKeys">
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

                <div class="ttl-filter-control-wrap" id="ttlFilterControlWrap" title="Filter keys by TTL expiration status">
                  <i data-lucide="clock" style="width: 12px; height: 12px; color: var(--accent-warning);"></i>
                  <span class="ttl-filter-label">TTL:</span>
                  <select id="ttlFilterSelect" class="ttl-filter-select">
                    <option value="all" selected>All TTLs</option>
                    <option value="expiring">⏳ Expiring Only</option>
                    <option value="persistent">∞ No TTL (Persistent)</option>
                  </select>
                </div>
              </div>

              <!-- Unified Controls Bar: Mode Toggle, Scan Health, Refresh & Bulk Actions -->
              <div class="keys-actions-bar">
                <div class="actions-left" id="scanActionsGroup">
                  <div class="view-mode-toggle-group" id="viewModeToggleGroup">
                    <button type="button" class="view-mode-tab ${i.currentViewMode==="table"?"active":""}" id="btnViewTable" data-mode="table" title="Flat Table View">
                      <i data-lucide="table" style="width: 13px; height: 13px;"></i>
                      <span>Table</span>
                    </button>
                    <button type="button" class="view-mode-tab ${i.currentViewMode==="tree"?"active":""}" id="btnViewTree" data-mode="tree" title="Virtual Tree / Namespace Folder View">
                      <i data-lucide="folder-tree" style="width: 13px; height: 13px;"></i>
                      <span>Tree</span>
                    </button>
                  </div>
                  <div class="actions-divider"></div>
                  <span class="safety-badge">
                    <i data-lucide="shield-check" style="width: 13px; height: 13px;"></i>
                    <span id="scanChunkLabel">Safe SCAN (50)</span>
                  </span>
                  <span id="scanStatusText" class="scan-status-text">Scanning keys...</span>
                </div>

                <div class="actions-right">
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

                  <div class="actions-divider"></div>

                  <label for="scanBatchSizeSelect" class="batch-size-label">Batch:</label>
                  <select id="scanBatchSizeSelect" class="batch-size-select" title="Keys requested per SCAN batch (applies to the next Load More)">
                    ${vt.map(t=>`<option value="${t}"${t===50?" selected":""}>${t.toLocaleString()}</option>`).join("")}
                  </select>
                  <button type="button" class="btn btn-primary btn-toolbar-action" id="btnScanNext" style="font-size: 0.75rem; padding: 0.32rem 0.75rem;">
                    <i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i>
                    <span>Load More</span>
                  </button>

                  <div class="actions-divider"></div>

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
          </div>

          <!-- 2. Benchmark Studio Tab Pane (Full Width) -->
          <div class="ws-tab-pane ws-dashboard-pane modal-backdrop" id="benchmarkModal">
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
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <button type="button" class="ws-tab-return-btn" id="btnCloseBenchmarkModal" title="Close view & return to Keys (Esc)">
                    <i data-lucide="x" style="width: 13px; height: 13px;"></i>
                    <kbd class="kbd-esc">Esc</kbd>
                  </button>
                </div>
              </div>

              <div class="benchmark-modal-body">
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
                    <div class="benchmark-controls-row" style="display: flex; align-items: center; gap: 0.85rem; flex-wrap: wrap;">
                      <button type="button" class="btn btn-primary" id="btnRunClusterMatrix" style="padding: 0.42rem 0.95rem; font-size: 0.8rem; font-weight: 600;">
                        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
                        <span>Evaluate Cluster Latency Matrix</span>
                      </button>
                      <span style="font-size: 0.76rem; color: var(--text-secondary); display: inline-flex; align-items: center; gap: 0.35rem;">
                        <i data-lucide="info" style="width: 13px; height: 13px; color: #38bdf8; flex-shrink: 0;"></i>
                        Probes each cluster master node individually to spot uneven slot distribution or CPU-throttled hot shards.
                      </span>
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

          <!-- 3. Memory & BigKeys Tab Pane (Full Width) -->
          <div class="ws-tab-pane ws-dashboard-pane modal-backdrop" id="memoryModal">
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
                  <button type="button" class="ws-tab-return-btn" id="btnCloseMemoryModal" title="Close view & return to Keys (Esc)">
                    <i data-lucide="x" style="width: 13px; height: 13px;"></i>
                    <kbd class="kbd-esc">Esc</kbd>
                  </button>
                </div>
              </div>

              <div style="flex: 1; overflow-y: auto; padding: 1.25rem;" id="memoryModalBody">
                <div id="memoryOverviewContainer">
                  <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Fetching memory metrics...</div>
                </div>
                <div id="memoryProfilingContainer" style="margin-top: 1rem;"></div>
              </div>
            </div>
          </div>

          <!-- 4. Slowlog Tab Pane (Full Width) -->
          <div class="ws-tab-pane ws-dashboard-pane modal-backdrop" id="slowlogModal">
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
                  <button type="button" class="ws-tab-return-btn" id="btnCloseSlowlogModal" title="Close view & return to Keys (Esc)">
                    <i data-lucide="x" style="width: 13px; height: 13px;"></i>
                    <kbd class="kbd-esc">Esc</kbd>
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

          <!-- 5. Cluster Topology Tab Pane (Full Width) -->
          <div class="ws-tab-pane ws-dashboard-pane modal-backdrop" id="clusterTopologyModal">
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
                  <button type="button" class="ws-tab-return-btn" id="btnCloseTopologyModal" title="Close view & return to Keys (Esc)">
                    <i data-lucide="x" style="width: 13px; height: 13px;"></i>
                    <kbd class="kbd-esc">Esc</kbd>
                  </button>
                </div>
              </div>

              <div class="topology-stats-grid" id="topologyStatsGrid"></div>

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

          <!-- 6. Connected Clients Tab Pane (Full Width) -->
          <div class="ws-tab-pane ws-dashboard-pane modal-backdrop" id="clientsListModal">
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
                  <button type="button" class="ws-tab-return-btn" id="btnCloseClientsModal" title="Close view & return to Keys (Esc)">
                    <i data-lucide="x" style="width: 13px; height: 13px;"></i>
                    <kbd class="kbd-esc">Esc</kbd>
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
        </div>
      </main>
    </div>

    <!-- Cluster Configuration & Connect Modal (Dialog) -->
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
          <button type="button" class="btn-icon" id="btnCloseConfigModalHeader">
            <i data-lucide="x"></i>
          </button>
        </div>

        <div class="modal-body" id="cfgModalBody"></div>
        <div class="modal-footer" id="cfgModalFooter"></div>
      </div>
    </div>

    <!-- Connection Modal (Dialog) -->
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

    <!-- Phase 2: Key Inspector Detail Modal (Dialog) -->
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

        <div class="detail-header-meta" id="detailHeaderMeta"></div>
        <div class="detail-body-content" id="detailBodyContent"></div>
      </div>
    </div>

    <!-- Safe Delete Confirmation Modal (Dialog) -->
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

    <!-- Keyspace by Node Modal (Dialog) -->
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

    <!-- Export Keys Modal (Dialog) -->
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
              <span>TTL Filter:</span>
              <span id="exportTtlDisplay" style="font-weight: 500;">All TTLs</span>
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

    <!-- Bulk Delete Modal (Dialog) -->
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

            <div id="bdSampleKeysSection" style="font-size: 0.75rem;">
              <div style="color: var(--text-muted); margin-bottom: 0.25rem;">Sample keys to be unlinked:</div>
              <div id="bdSampleKeysList" style="font-family: var(--font-mono); font-size: 0.72rem; background: rgba(0,0,0,0.25); padding: 0.5rem; border-radius: 4px; max-height: 80px; overflow-y: auto;"></div>
            </div>

            <div>
              <label style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); display: block; margin-bottom: 0.25rem;">
                Type <strong id="bdRequiredCountText" style="color: var(--accent-danger); font-family: var(--font-mono);">0</strong> to confirm count:
              </label>
              <input type="text" id="bdCountConfirmInput" class="confirm-input-field" placeholder="Type key count here..." autocomplete="off">
            </div>

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

    <!-- Deep Cluster Scan Safety Confirmation Modal -->
    <div class="modal-backdrop" id="deepScanSafetyModal">
      <div class="config-modal-card" style="max-width: 500px;">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i data-lucide="shield-alert" style="color: #fbbf24; width: 22px; height: 22px;"></i>
            <div>
              <h3 class="modal-title">Deep Cluster Keyspace Scan</h3>
              <div style="font-size: 0.72rem; color: var(--text-muted);">Non-blocking cluster memory & TTL audit</div>
            </div>
          </div>
          <button type="button" class="btn-icon" id="btnCloseDeepScanModal">
            <i data-lucide="x"></i>
          </button>
        </div>
        <div style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem;">
          <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 6px; padding: 0.85rem 1rem; font-size: 0.8rem; line-height: 1.5; color: var(--text-secondary);">
            <div style="display: flex; gap: 0.5rem; align-items: flex-start; margin-bottom: 0.4rem;">
              <i data-lucide="info" style="color: #fbbf24; width: 16px; height: 16px; flex-shrink: 0; margin-top: 2px;"></i>
              <strong style="color: var(--text-primary);">Zero-Downtime Safe Execution</strong>
            </div>
            This scan uses cursor-based <code>SCAN</code> across primary nodes with a bounded concurrency pool (25 workers) and event loop yielding. Redis single-threaded execution will <strong>NOT</strong> be blocked.
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.45;">
            Expected behavior during deep profiling:
            <ul style="margin: 0.4rem 0 0 1.2rem; padding: 0;">
              <li>Keys analyzed: up to <strong>25,000 keys</strong> (or custom limit)</li>
              <li>TTL expiry horizon buckets & space reclaim forecast</li>
              <li>Full audit of persistent keys leaking RAM without TTL</li>
            </ul>
          </div>
        </div>
        <div class="modal-actions" style="padding: 1rem 1.25rem; background: var(--bg-secondary); border-top: 1px solid var(--border-color); display: flex; justify-content: flex-end; gap: 0.75rem;">
          <button type="button" class="btn btn-secondary" id="btnCancelDeepScan">Cancel</button>
          <button type="button" class="btn btn-primary" id="btnConfirmDeepScan" style="background: #f59e0b; border-color: #f59e0b; color: #000; font-weight: 600;">
            <i data-lucide="zap" style="width: 14px; height: 14px;"></i>
            Run Deep Scan
          </button>
        </div>
      </div>
    </div>
  `)}async function Z(){const e=document.getElementById("topConnContainer"),t=document.getElementById("topVitalsContainer");try{const a=await(await fetch("/api/status")).json();if(a.connected){const o=i.cachedConnections.find(C=>C.is_selected)||i.cachedConnections.find(C=>C.id===a.connection_id)||i.cachedConnections.find(C=>C.is_connected),s=o&&o.conn_type==="cluster"||a.cluster_nodes&&a.cluster_nodes.length>0||a.is_cluster,l=a.cluster_nodes_count||(a.node_stats&&a.node_stats.length>0?a.node_stats.length:1),r=(a.node_stats||[]).filter(C=>C.role==="master");if(i.lastStatus=a,Wn(a.connection_id||o?.id),yi(),e){const C=(a.env||o?.env||"LOCAL").toUpperCase();e.innerHTML=`
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${m(a.connection_name||"Connected")}">${m(a.connection_name||"Connected")}</span>
            <span class="badge-env badge-env-${C.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem; margin-right: 0.25rem;">${C}</span>
            ${a.read_only?'<span class="badge-readonly" title="Read-Only Mode: All write, update, and delete actions are locked" style="margin-right: 0.25rem;"><i data-lucide="lock"></i> READ ONLY</span>':""}
            <span class="top-conn-endpoint">${a.host}:${a.port}</span>
            <span class="top-conn-tag">${s?"CLUSTER":`DB${a.db}`}</span>
            <button type="button" class="top-conn-disconnect" id="btnTopDisconnect" title="Disconnect ${m(a.connection_name||"instance")}">
              <i data-lucide="power" style="width: 12px; height: 12px;"></i>
            </button>
          </div>
        `}t&&(t.innerHTML=`
          <div class="top-vitals-capsule">
            <div class="vital-item clickable" id="btnOpenTopologyTop" title="View Cluster Topology & Node Health">
              <i data-lucide="layers" style="width: 12px; height: 12px; color: ${s?"#a78bfa":"var(--accent-primary)"};"></i>
              <span class="vital-val" style="color: ${s?"#c084fc":"var(--accent-primary)"};">
                ${s?`${l} ${l===1?"Node":"Nodes"}`:"1 Node"}
              </span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="PING round-trip latency">
              <i data-lucide="zap" style="width: 11px; height: 11px; color: var(--accent-success);"></i>
              <span class="vital-val" style="color: var(--accent-success);">${a.latency_ms} ms</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item${r.length?" clickable":""}" id="btnOpenKeyspaceTop" title="${r.length?`Total keys across ${r.length} master nodes. Click for per-node breakdown`:"Total keys in active keyspace"}">
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
        `);const d=document.getElementById("tabBadgeKeys");d&&(d.textContent=(a.dbsize||0).toLocaleString());const p=document.getElementById("tabBadgeTopology");p&&(p.textContent=s?`${l} Nodes`:"1 Node");const y=document.getElementById("tabBadgeClients");y&&(y.textContent=String(a.connected_clients||1)),g();const h=document.getElementById("btnTopDisconnect");h&&h.addEventListener("click",()=>{a.connection_id&&Ne(a.connection_id)});const v=document.getElementById("btnOpenClientsModal");v&&v.addEventListener("click",pt);const x=document.getElementById("btnOpenTopologyTop");x&&x.addEventListener("click",()=>ne());const E=document.getElementById("btnOpenKeyspaceTop");E&&r.length&&E.addEventListener("click",pi);const k=document.getElementById("btnOpenMemoryTop");k&&k.addEventListener("click",rt)}else e&&(e.innerHTML=`
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${a.error?`<span class="top-conn-error" title="${m(a.error)}">${m(a.error)}</span>`:""}
          </div>
        `),t&&(t.innerHTML=`
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `),g(),i.totalScanned===0&&i.keysTableRows.length===0&&ft()}catch{e&&(e.innerHTML=`
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `),t&&(t.innerHTML=""),g()}}function Li(){const e=document.getElementById("btnRefreshStats");e&&e.addEventListener("click",Z);const t=document.getElementById("clusterConfigModal"),n=document.getElementById("btnCloseConfigModalHeader");n&&t&&n.addEventListener("click",()=>t.classList.remove("active")),t&&t.addEventListener("click",d=>{d.target===t&&t.classList.remove("active")});const a=document.querySelector(".sidebar"),o=document.getElementById("btnToggleSidebar"),s=document.getElementById("btnShowSidebar"),l=d=>{if(!a)return;const p=d!==void 0?d:!a.classList.contains("collapsed");a.classList.toggle("collapsed",p),s&&(s.style.display=p?"inline-flex":"none"),localStorage.setItem("redis_insight_sidebar_collapsed",p?"true":"false"),g()};o&&o.addEventListener("click",()=>l(!0)),s&&s.addEventListener("click",()=>l(!1)),localStorage.getItem("redis_insight_sidebar_collapsed")==="true"&&l(!0),window.addEventListener("keydown",d=>{(d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="b"&&(d.preventDefault(),l())}),window.addEventListener("keydown",d=>{if(d.key==="Escape"){const p=document.querySelector(".modal-backdrop:not(.ws-dashboard-pane).active");if(p){p.classList.remove("active");return}i.activeWorkspaceTab&&i.activeWorkspaceTab!=="keys"&&N("keys")}}),window.addEventListener("focus",()=>{W()}),setInterval(Z,15e3)}async function qe(){Si(),g(),xn(),Ei(),Xn(),Mn(),ii(),di(),gi(),bi(),Hn(),Kn(),Li(),await W(),await Z(),await j()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",qe):qe();
