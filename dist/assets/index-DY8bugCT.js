(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const Zt=[50,100,200,500,1e3,2e3,5e3,1e4],en=200,i={activeWorkspaceTab:"keys",allConnectedClients:[],allSlowlogEntries:[],currentSlowlogMinDuration:0,currentSlowlogSearch:"",currentSlowlogNode:"all",currentViewMode:localStorage.getItem("redis_insight_view_mode")||"table",activeTreeDelimiters:(()=>{try{const t=localStorage.getItem("redis_insight_tree_delimiters_global");if(t){const n=JSON.parse(t);if(Array.isArray(n)&&n.length>0)return n}}catch{}const e=localStorage.getItem("redis_insight_tree_delimiter");return e&&e!=="auto"?[e]:[":","/","."]})(),customTreeDelimiters:(()=>{try{const e=localStorage.getItem("redis_insight_custom_delimiters");if(e){const t=JSON.parse(e);if(Array.isArray(t))return t}}catch{}return[]})(),treeDelimiterPreset:localStorage.getItem("redis_insight_tree_delimiter_preset")||"auto",get currentTreeDelimiter(){return this.treeDelimiterPreset||this.activeTreeDelimiters&&this.activeTreeDelimiters[0]||"auto"},set currentTreeDelimiter(e){this.treeDelimiterPreset=e},treeExpandedPaths:new Set,treeInitialized:!1,currentTreeFilterQuery:"",currentMemoryOverview:null,currentMemoryAnalysis:null,isMemoryProfilingRunning:!1,memoryLoadedForConnId:null,bigkeysSearchQuery:"",slowlogLoadedForConnId:null,clientsLoadedForConnId:null,topologyLoadedForConnId:null,currentCursor:0,currentPattern:"*",currentType:"all",currentTtlFilter:"all",isScanning:!1,totalScanned:0,scanComplete:!1,dbTotalKeys:0,lastStatus:null,keysTableRows:[],loadedKeysSet:new Set,searchScope:"local",localFilterQuery:"",localMatchCount:0,localMatchDurationMs:0,maxLoadedKeysLimit:1e5,isMemoryCeilingReached:!1,isAutoRefreshActive:!1,autoRefreshIntervalSec:(()=>{let e=parseInt(localStorage.getItem("redis_insight_auto_refresh_sec")||"10",10);return isNaN(e)||e<5?10:e})(),autoRefreshRemainingSec:10,autoRefreshTimer:null,activeDetailKey:null,activeDetailData:null,hashFieldsState:null,pendingDeleteKey:null,pendingDeleteCallback:null,selectedConnectionId:(()=>{const e=localStorage.getItem("redis_insight_selected_conn_id");if(!e)return null;const t=Number(e);return!isNaN(t)&&String(t)===e.trim()?t:e})(),cachedConnections:[],currentEnvFilter:"ALL",currentConnSearch:"",currentTopologyData:null,currentTopologyRole:"all",currentTopologySearch:"",currentLimit:2,activeConfigConn:null,currentScanEpoch:0,scanBatchSize:50};function p(e){return e==null?"":String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=(e,t,n=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(s=>{o.setAttribute(s,String(t[s]))}),n.length&&n.forEach(s=>{const a=Ct(...s);o.appendChild(a)}),o};var tn=([e,t,n])=>Ct(e,t,n);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),on=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",sn=e=>e.flatMap(on).map(n=>n.trim()).filter(Boolean).filter((n,o,s)=>s.indexOf(n)===o).join(" "),an=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,o)=>n.toUpperCase()+o.toLowerCase()),mt=(e,{nameAttr:t,icons:n,attrs:o})=>{const s=e.getAttribute(t);if(s==null)return;const a=an(s),r=n[a];if(!r)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const l=nn(e),[c,d,m]=r,y={...d,"data-lucide":s,...o,...l},f=sn(["lucide",`lucide-${s}`,l,o]);f&&Object.assign(y,{class:f});const x=tn([c,y,m]);return e.parentNode?.replaceChild(x,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",E,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",E,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",E,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",E,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",E,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",E,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",E,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",E,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",E,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",E,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",E,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",E,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",E,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",E,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",E,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",E,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",E,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",E,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",E,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",E,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",E,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",E,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",E,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",E,[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",E,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",E,[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",E,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",E,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",E,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",E,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=["svg",E,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=["svg",E,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=["svg",E,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=["svg",E,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=["svg",E,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=["svg",E,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=["svg",E,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=["svg",E,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=["svg",E,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=["svg",E,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=["svg",E,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=["svg",E,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=["svg",E,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=["svg",E,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=["svg",E,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=["svg",E,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(s=>mt(s,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const s=document.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(a=>mt(a,{nameAttr:"icon-name",icons:e,attrs:n})))}};function g(){Zn({icons:{Layers:Mn,Plus:Nn,RefreshCw:Fn,Search:Hn,Cpu:xn,Trash2:Wn,Zap:Xn,CheckCircle2:fn,AlertCircle:yn,Database:wn,ShieldCheck:Kn,Lock:Rn,ArrowDownCircle:gn,X:Yn,Play:Pn,Copy:bn,Clock:hn,Edit:Un,ExternalLink:kn,Code:vn,Users:Qn,Server:On,Network:An,GitBranch:$n,ArrowRightLeft:rn,Activity:ln,PieChart:dn,AlertTriangle:Jn,TrendingUp:Gn,BarChart2:cn,Power:zn,ChevronLeft:mn,ChevronRight:un,PanelLeft:Dn,Download:Cn,FileText:En,Folder:In,FolderOpen:Ln,FolderTree:Tn,Table:Vn,List:_n,ChevronDown:pn,Key:Bn,Filter:Sn,Timer:qn,Sparkles:jn}})}const De={};function ye(e,t){De[e]=t}let Be=!1;function O(e,t=!0){if(!Be){Be=!0;try{["keys","benchmark","memory","slowlog","topology","clients"].includes(e)||(e="keys"),i.activeWorkspaceTab=e,document.querySelectorAll(".ws-tab-btn").forEach(r=>{const l=r.dataset.tab===e;r.classList.toggle("active",l),r.setAttribute("aria-selected",l?"true":"false")}),document.querySelectorAll(".ws-tab-pane").forEach(r=>{r.classList.remove("active")});const o=document.getElementById(`paneWorkspace${ei(e)}`);if(o&&o.classList.add("active"),Object.entries({benchmark:"benchmarkModal",memory:"memoryModal",slowlog:"slowlogModal",topology:"clusterTopologyModal",clients:"clientsListModal"}).forEach(([r,l])=>{const c=document.getElementById(l);c&&(r===e?c.classList.add("active"):c.classList.remove("active"))}),Object.entries({benchmark:"btnOpenBenchmarkModal",slowlog:"btnOpenSlowlog",memory:"btnOpenMemoryModal",topology:"btnOpenTopologyTop",clients:"btnOpenClientsModal"}).forEach(([r,l])=>{const c=document.getElementById(l);c&&c.classList.toggle("active",r===e)}),t&&history.replaceState(null,"",`#/${e}`),De[e])try{De[e]()}catch(r){console.warn(`Error loading data for tab ${e}:`,r)}g()}finally{Be=!1}}}function ei(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ti(){const e=document.getElementById("workspaceTabsBar");e&&e.addEventListener("click",t=>{const n=t.target.closest(".ws-tab-btn");n&&n.dataset.tab&&O(n.dataset.tab)}),window.addEventListener("hashchange",()=>{ut()}),window.addEventListener("keydown",t=>{const n=document.activeElement?document.activeElement.tagName.toLowerCase():"";if(!(n==="input"||n==="textarea"||n==="select")&&(t.ctrlKey||t.metaKey)&&!t.shiftKey&&!t.altKey){const o={1:"keys",2:"benchmark",3:"memory",4:"slowlog",5:"topology",6:"clients"};o[t.key]&&(t.preventDefault(),O(o[t.key]))}}),ut()}function ut(){const t=(window.location.hash||"").match(/^#\/([a-z0-9_-]+)/i);if(t){const n=t[1].toLowerCase();if(["keys","benchmark","memory","slowlog","topology","clients"].includes(n)){O(n,!1);return}}O("keys",!1)}let Z=null;function ni(){return(!Z||!document.body.contains(Z))&&(Z=document.createElement("div"),Z.id="appToastContainer",Z.className="toast-container",document.body.appendChild(Z)),Z}function S(e,t="info",n=2500){if(!e)return;const o=ni(),s=document.createElement("div");s.className=`toast-pill toast-${t}`;const a=t==="success"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>':t==="error"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>':t==="warning"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>':'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';s.innerHTML=`
    <span class="toast-icon-wrapper">${a}</span>
    <span class="toast-message">${ii(e)}</span>
    <button type="button" class="toast-close" title="Dismiss">&times;</button>
  `;const r=s.querySelector(".toast-close");if(r&&r.addEventListener("click",()=>Me(s)),o.appendChild(s),requestAnimationFrame(()=>{s.classList.add("toast-show")}),n>0){const l=setTimeout(()=>{Me(s)},n);s.addEventListener("mouseenter",()=>clearTimeout(l)),s.addEventListener("mouseleave",()=>{setTimeout(()=>Me(s),1e3)})}return s}function Me(e){!e||e.classList.contains("toast-exit")||(e.classList.remove("toast-show"),e.classList.add("toast-exit"),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},250))}function ii(e){return typeof e!="string"?String(e??""):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}async function ie(e){typeof e!="string"&&(e=String(e??""));try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",t.setAttribute("readonly",""),document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}let kt="probe",j=!1;const we={counter:{script:`local k = KEYS[1] or 'bench_counter'
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
return redis.call('PING')`,keys:"my_key",args:""}};function Xe(e){if(!e)return"";const t=Number(e.network_overhead_ms||0).toFixed(3),n=Number(e.server_exec_ms||0).toFixed(3);return`
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
  `}function Ze(e){return e?`
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
  `:""}function et(e){return!e||!e.length?"":`
    <div class="histogram-card">
      <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-main); display: flex; align-items: center; gap: 0.35rem;">
        <i data-lucide="bar-chart-2" style="width: 14px; height: 14px; color: #f59e0b;"></i>
        <span>Latency Bucket Distribution</span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.45rem;">
        ${e.map(t=>`
          <div class="histogram-row">
            <span class="histogram-label">${p(t.label)}</span>
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
  `}function oi(e){j=!1;const t=e||i.cachedConnections.find(y=>y.id===i.selectedConnectionId||y.is_selected),n=t?t.name:"Active Cluster",o=t?t.host:i.lastStatus?.host||"",s=t?t.port:i.lastStatus?.port||"",a=t?(t.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase(),r=document.getElementById("benchmarkTargetSubtitle");r&&(r.textContent=`Active Target: ${n} (${o}:${s}) [${a}] | Engine: AsyncIO Native | Namespace: __ri_bench__`);const l=document.getElementById("benchmarkProbeResults");l&&(l.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="activity" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem; opacity: 0.85;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Ready to probe latency on ${p(n)}</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Select probe count and click 'Run Latency Probe' to measure network transit vs Redis CPU</div>
      </div>
    `);const c=document.getElementById("benchmarkCommandResults");c&&(c.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="zap" style="width: 28px; height: 28px; color: #10b981; margin-bottom: 0.75rem; opacity: 0.85;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Ready to benchmark synthetic commands on ${p(n)}</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Select command preset, concurrency, and pipeline depth, then click 'Run Commands Benchmark'</div>
      </div>
    `);const d=document.getElementById("benchmarkLuaResults");d&&(d.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="code" style="width: 28px; height: 28px; color: #f59e0b; margin-bottom: 0.75rem; opacity: 0.85;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Ready to profile Lua script on ${p(n)}</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Select preset script or type custom script, then click 'Execute & Profile Lua'</div>
      </div>
    `);const m=document.getElementById("benchmarkClusterResults");m&&(m.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="layers" style="width: 28px; height: 28px; color: #c084fc; margin-bottom: 0.75rem; opacity: 0.85;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Ready to benchmark multi-node cluster matrix on ${p(n)}</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Probes every cluster master node simultaneously to measure node-by-node latency distribution</div>
      </div>
    `),tt(),g()}function tt(){const e=document.getElementById("benchmarkTargetSubtitle");if(e){const a=i.cachedConnections.find(m=>m.id===i.selectedConnectionId||m.is_selected),r=a?a.name:i.lastStatus?.host?`${i.lastStatus.host}:${i.lastStatus.port}`:"Active Target",l=a?a.host:i.lastStatus?.host||"",c=a?a.port:i.lastStatus?.port||"",d=a?(a.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();e.textContent=`Active Target: ${r} (${l}:${c}) [${d}] | Engine: AsyncIO Native | Namespace: __ri_bench__`}const t=document.getElementById("benchmarkReadOnlyBadge"),n=document.getElementById("optCommandPresetWrite"),o=document.getElementById("optCommandPresetStruct");if(i.lastStatus?.read_only){t&&(t.style.display="inline-flex"),n&&(n.disabled=!0,n.textContent="Write / Set (Disabled - Read-Only)"),o&&(o.disabled=!0,o.textContent="Data Structures (Disabled - Read-Only)");const a=document.getElementById("selCommandPreset");a&&(a.value==="write"||a.value==="structures")&&(a.value="read")}else t&&(t.style.display="none"),n&&(n.disabled=!1,n.textContent="Write / Set (100% SET)"),o&&(o.disabled=!1,o.textContent="Data Structures (HSET / HGET)");const s=document.getElementById("txtLuaScript");if(s&&!s.value.trim()){s.value=we.counter.script;const a=document.getElementById("txtLuaKeys"),r=document.getElementById("txtLuaArgs");a&&(a.value=we.counter.keys),r&&(r.value=we.counter.args)}Et(kt||"probe")}function si(){O("benchmark"),tt()}function ai(){O("keys")}function Et(e){kt=e,document.querySelectorAll(".benchmark-tab-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-tab")===e)});const t={probe:document.getElementById("benchmarkPaneProbe"),commands:document.getElementById("benchmarkPaneCommands"),lua:document.getElementById("benchmarkPaneLua"),cluster:document.getElementById("benchmarkPaneCluster")};Object.keys(t).forEach(n=>{t[n]&&(t[n].style.display=n===e?"flex":"none")}),g()}async function li(){if(j)return;const e=document.getElementById("btnRunProbe"),t=document.getElementById("benchmarkProbeResults"),n=document.getElementById("selProbeCount"),o=parseInt(n?.value||"100",10);j=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Running Probe (${o})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Executing ${o} baseline probes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring network round-trip time vs Redis event-loop CPU duration</div>
      </div>
    `,g());try{const s=await fetch("/api/benchmark/probe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({count:o})});if(!s.ok){const r=await s.json().catch(()=>({detail:"Probe request failed"}));throw new Error(r.detail||"Probe failed")}const a=await s.json();ri(a)}catch(s){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Latency Probe Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(s.message)}</div>
        </div>
      `,g())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Run Latency Probe</span>',g())}}function ri(e){const t=document.getElementById("benchmarkProbeResults");if(!t||!e)return;const n=Number(e.avg_rtt_ms||0).toFixed(3),o=Number(e.breakdown?.server_exec_ms||0).toFixed(3),s=Number(e.breakdown?.network_overhead_ms||0).toFixed(3),a=Number(e.ops_per_sec||0).toLocaleString();t.innerHTML=`
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #38bdf8;"></i> Total Round-Trip (RTT)</div>
        <div class="val">${n} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Average client observed latency</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="cpu" style="width: 12px; height: 12px; color: #10b981;"></i> Redis Server CPU Time</div>
        <div class="val" style="color: #6ee7b7;">${o} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Isolated server execution delay</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="network" style="width: 12px; height: 12px; color: #38bdf8;"></i> Network Overhead</div>
        <div class="val" style="color: #38bdf8;">${s} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Transit & TCP stack overhead</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Probe Throughput</div>
        <div class="val" style="color: #fbbf24;">${a} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        <div class="sub">${e.count} probes in ${e.duration_ms}ms</div>
      </div>
    </div>

    ${Xe(e.breakdown)}
    ${Ze(e.percentiles)}
    ${et(e.histogram)}
  `,g()}async function ci(){if(j)return;const e=document.getElementById("btnRunCommandBench"),t=document.getElementById("benchmarkCommandResults"),n=document.getElementById("selCommandPreset")?.value||"read",o=parseInt(document.getElementById("selCommandRequests")?.value||"1000",10),s=parseInt(document.getElementById("selCommandConcurrency")?.value||"5",10),a=parseInt(document.getElementById("selCommandPipeline")?.value||"1",10);j=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Benchmarking (${o})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #f59e0b; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Running synthetic workload (${n})...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">
          Executing ${o.toLocaleString()} requests across ${s} workers (pipeline: ${a})
        </div>
      </div>
    `,g());try{const r=await fetch("/api/benchmark/commands",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset:n,requests:o,concurrency:s,pipeline:a})});if(!r.ok){const c=await r.json().catch(()=>({detail:"Benchmark request failed"}));throw new Error(c.detail||"Benchmark failed")}const l=await r.json();di(l)}catch(r){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Benchmark Execution Blocked</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(r.message)}</div>
        </div>
      `,g())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Start Benchmark</span>',g())}}function di(e){const t=document.getElementById("benchmarkCommandResults");if(!t||!e)return;const n=Number(e.ops_per_sec||0).toLocaleString(),o=Number(e.avg_latency_ms||0).toFixed(3),s=Number(e.percentiles?.p99_ms||0).toFixed(3),a=Number(e.cleaned_keys_count||0).toLocaleString();t.innerHTML=`
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Throughput</div>
        <div class="val" style="color: #fbbf24;">${n} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        <div class="sub">${e.total_requests.toLocaleString()} ops in ${e.duration_ms}ms</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="clock" style="width: 12px; height: 12px; color: #38bdf8;"></i> Avg Latency</div>
        <div class="val">${o} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Mean per-operation latency</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #ec4899;"></i> P99 Tail Latency</div>
        <div class="val" style="color: #f472b6;">${s} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">99% of requests below this</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="shield-check" style="width: 12px; height: 12px; color: #10b981;"></i> Cleaned Ephemeral Keys</div>
        <div class="val" style="color: #6ee7b7;">${a}</div>
        <div class="sub">Auto-unlinked via UNLINK</div>
      </div>
    </div>

    ${Xe(e.breakdown)}
    ${Ze(e.percentiles)}
    ${et(e.histogram)}
  `,g()}async function pi(){if(j)return;const e=document.getElementById("btnRunLuaBench"),t=document.getElementById("benchmarkLuaResults"),n=document.getElementById("txtLuaScript")?.value||"",o=document.getElementById("txtLuaKeys")?.value||"",s=document.getElementById("txtLuaArgs")?.value||"",a=document.getElementById("selLuaMode")?.value||"profile",r=parseInt(document.getElementById("selLuaIterations")?.value||"100",10),l=o.split(",").map(d=>d.trim()).filter(Boolean),c=s.split(",").map(d=>d.trim()).filter(Boolean);if(!n.trim()){S("Please enter a Lua script to execute and profile.","warning");return}j=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Executing Script...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Pre-loading and running Lua script on Redis server...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring precise microsecond server execution time</div>
      </div>
    `,g());try{const d=await fetch("/api/benchmark/lua",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({script:n,keys:l,args:c,mode:a,iterations:r,concurrency:5})});if(!d.ok){const y=await d.json().catch(()=>({detail:"Lua benchmark failed"}));throw new Error(y.detail||"Lua benchmark failed")}const m=await d.json();mi(m)}catch(d){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Lua Script Execution Error</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(d.message)}</div>
        </div>
      `,g())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Execute & Profile</span>',g())}}function mi(e){const t=document.getElementById("benchmarkLuaResults");if(!t||!e)return;const n=Number(e.server_duration_ms||0).toFixed(3),o=Number(e.duration_ms||0).toFixed(3);let s="";e.atomicity_warning?s=`
      <div class="atomicity-alert warning">
        <i data-lucide="alert-triangle" style="width: 20px; height: 20px; color: #ef4444; flex-shrink: 0;"></i>
        <div>
          <strong>High Atomicity Warning:</strong> Script spent <strong>${n} ms</strong> executing on the Redis server (> 5ms).
          In Redis, Lua scripts execute atomically and block all other incoming client connections for the entire duration! Consider optimizing loops or moving logic out of Lua.
        </div>
      </div>
    `:s=`
      <div class="atomicity-alert safe">
        <i data-lucide="check-circle-2" style="width: 20px; height: 20px; color: #10b981; flex-shrink: 0;"></i>
        <div>
          <strong>Atomicity Safe:</strong> Server execution took <strong>${n} ms</strong>, well within non-blocking safety thresholds (&lt; 5ms).
        </div>
      </div>
    `;let a="";e.mode==="benchmark"&&e.ops_per_sec&&(a=`
      <div class="benchmark-metrics-grid">
        <div class="benchmark-metric-card">
          <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Script Throughput</div>
          <div class="val" style="color: #fbbf24;">${Number(e.ops_per_sec).toLocaleString()} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        </div>
        <div class="benchmark-metric-card">
          <div class="label"><i data-lucide="clock" style="width: 12px; height: 12px; color: #38bdf8;"></i> Total Duration</div>
          <div class="val">${o} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        </div>
      </div>
      ${Ze(e.percentiles)}
      ${et(e.histogram)}
    `),t.innerHTML=`
    ${s}

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem;">
      <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.35rem;">
        Script Return Value (Evaluated on Server)
      </div>
      <pre style="margin: 0; background: #090d16; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: #38bdf8; font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto;">${p(String(e.result))}</pre>
    </div>

    ${Xe(e.breakdown)}
    ${a}
  `,g()}async function ui(){if(j)return;const e=document.getElementById("btnRunClusterMatrix"),t=document.getElementById("benchmarkClusterResults");j=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Evaluating Matrix...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Probing primary cluster nodes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring cross-node latency and throughput matrix</div>
      </div>
    `,g());try{const n=await fetch("/api/benchmark/cluster-matrix");if(!n.ok){const s=await n.json().catch(()=>({detail:"Cluster matrix request failed"}));throw new Error(s.detail||"Cluster matrix failed")}const o=await n.json();yi(o)}catch(n){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Cluster Matrix Evaluation Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(n.message)}</div>
        </div>
      `,g())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i><span>Evaluate Cluster Latency Matrix</span>',g())}}function yi(e){const t=document.getElementById("benchmarkClusterResults");if(!t||!e)return;const n=Number(e.cluster_avg_latency_ms||0).toFixed(3),o=e.nodes||[];t.innerHTML=`
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #38bdf8;"></i> Cluster Avg Latency</div>
        <div class="val">${n} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Across ${o.length} primary node(s)</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #10b981;"></i> Fastest Node</div>
        <div class="val" style="font-size: 1.1rem; color: #6ee7b7;">${p(e.fastest_node||"N/A")}</div>
        <div class="sub">Lowest latency probe</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="alert-triangle" style="width: 12px; height: 12px; color: #f59e0b;"></i> Slowest Node</div>
        <div class="val" style="font-size: 1.1rem; color: #fbbf24;">${p(e.slowest_node||"N/A")}</div>
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
          ${o.map(s=>`
            <tr class="${s.outlier?"outlier":""}">
              <td>
                <div style="font-family: var(--font-mono); font-weight: 700; color: #38bdf8;">${p(s.node)}</div>
              </td>
              <td>
                <span class="badge-db" style="text-transform: capitalize;">${p(s.role)}</span>
                <span style="font-size: 0.72rem; color: var(--text-muted); margin-left: 0.35rem;">${p(s.slots||"N/A")}</span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.45rem;">
                  <strong style="font-family: var(--font-mono);">${Number(s.avg_latency_ms).toFixed(3)} ms</strong>
                </div>
              </td>
              <td style="font-family: var(--font-mono);">${Number(s.p99_latency_ms).toFixed(3)} ms</td>
              <td style="font-family: var(--font-mono); color: #fbbf24;">${Number(s.ops_per_sec).toLocaleString()} ops/s</td>
              <td>
                ${s.outlier?'<span class="badge-duration badge-duration-danger" style="font-size: 0.7rem; font-weight: 600;">⚠️ Latency Outlier (&gt;1.75x)</span>':'<span class="badge-duration badge-duration-normal" style="font-size: 0.7rem; font-weight: 600; color: #6ee7b7;">Balanced</span>'}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `,g()}function gi(){const e=document.getElementById("btnCloseBenchmarkModal");e&&e.addEventListener("click",ai);const t=document.getElementById("btnOpenBenchmarkModal");t&&t.addEventListener("click",si),document.querySelectorAll(".benchmark-tab-btn").forEach(d=>{d.addEventListener("click",()=>{const m=d.getAttribute("data-tab");m&&Et(m)})});const n=document.getElementById("btnRunProbe");n&&n.addEventListener("click",li);const o=document.getElementById("btnRunCommandBench");o&&o.addEventListener("click",ci);const s=document.getElementById("selLuaPreset");s&&s.addEventListener("change",()=>{const d=s.value,m=we[d];if(m){const y=document.getElementById("txtLuaScript"),f=document.getElementById("txtLuaKeys"),x=document.getElementById("txtLuaArgs");y&&(y.value=m.script),f&&(f.value=m.keys),x&&(x.value=m.args)}});const a=document.getElementById("selLuaMode"),r=document.getElementById("groupLuaBenchmarkControls");a&&r&&a.addEventListener("change",()=>{r.style.display=a.value==="benchmark"?"flex":"none"});const l=document.getElementById("btnRunLuaBench");l&&l.addEventListener("click",pi);const c=document.getElementById("btnRunClusterMatrix");c&&c.addEventListener("click",ui)}let Pe=null;function Ne(e,t="Copied!",n=1500){if(!e)return;const o=e.innerHTML;e.classList.add("btn-copy-feedback","copied"),e.innerHTML=`<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><polyline points="20 6 9 17 4 12"></polyline></svg>${t}`,setTimeout(()=>{e.classList.remove("copied"),e.innerHTML=o},n)}function fi(e){Pe=e}async function oe(e){i.activeDetailKey=e;const t=document.getElementById("keyDetailModal"),n=document.getElementById("detailKeyTitle"),o=document.getElementById("detailHeaderMeta"),s=document.getElementById("detailBodyContent"),a=document.getElementById("btnDeleteKeyFromDetail");a&&(a.style.display=i.lastStatus?.read_only?"none":""),n&&(n.textContent=e,n.title=e),o&&(o.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>'),s&&(s.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>'),t&&t.classList.add("active");try{let r=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(r.ok||(r=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!r.ok){let c="Key not found or could not be read";try{const d=await r.json();d&&d.detail&&(c=d.detail)}catch{}throw new Error(c)}const l=await r.json();i.activeDetailData=l,hi(l),bi(l)}catch(r){o&&(o.innerHTML='<span style="color: var(--accent-danger);">Error</span>'),s&&(s.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Failed to inspect key</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">${p(r.message)}</p>
        </div>
      `,g())}}function _e(){const e=document.getElementById("keyDetailModal");e&&e.classList.remove("active")}function hi(e){const t=document.getElementById("detailHeaderMeta");if(!t)return;const n=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",o=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;t.innerHTML=`
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
        <span class="badge-db" style="color: #38bdf8; font-family: var(--font-mono); font-size: 0.72rem;">${p(e.node)}</span>
      </div>
    `:""}
    <div style="display: flex; align-items: center; gap: 0.4rem; margin-left: auto;">
      <i data-lucide="clock" style="width: 13px; height: 13px; color: ${e.ttl===-1?"var(--text-muted)":"var(--accent-warning)"};"></i>
      <span style="font-family: var(--font-mono); color: ${e.ttl===-1?"var(--text-muted)":"var(--accent-warning)"}; font-weight: 600;">${o}</span>
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
  `,g();const s=document.getElementById("btnEditTtl");s&&s.addEventListener("click",()=>{vi(e.name,e.ttl)})}async function vi(e,t){if(i.lastStatus?.read_only){S("TTL modification is disabled in Read-Only mode.","warning");return}const n=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,t>0?t:"3600");if(n===null)return;const o=parseInt(n.trim(),10);if(isNaN(o)){S("Please enter a valid integer for TTL.","warning");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:o})})).ok)throw new Error("Failed to update TTL");S(`Updated TTL for "${e}"`,"success"),oe(e)}catch(s){S("Error updating TTL: "+s.message,"error")}}function bi(e){const t=document.getElementById("detailBodyContent");if(!t)return;const n=e.type.toLowerCase();if(n==="hash"){const o=e.fields||[],s=e.has_more_fields?Number(e.fields_cursor||0):0;i.hashFieldsState={key:e.name,cursor:s,fields:[...o],total:Number(e.length||o.length),match:null,loading:!1},t.innerHTML=`
      <div class="fields-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <input type="text" id="hashFieldSearchInput" class="field-search-input" placeholder="Filter fields (Enter: search all)" title="Filters loaded fields instantly; press Enter to search the whole hash on the server (HSCAN MATCH)">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="hashFieldCountText">${Lt(o.length)}</span>
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
            ${St(o)}
          </tbody>
        </table>
      </div>
      <div id="hashFieldsFooter" style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);"></div>
    `,g(),wi(e.name),nt();return}if(e.is_json||n.includes("json")){const o=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${p(o)}</div>
    `,g();const s=document.getElementById("btnCopyJsonValue");s&&s.addEventListener("click",async()=>{await ie(o)?(S("JSON copied to clipboard","success"),Ne(s,"Copied!")):S("Failed to copy JSON to clipboard","error")});return}if(n==="string"){t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${p(e.value||"")}</div>
    `,g();const o=document.getElementById("btnCopyStringValue");o&&o.addEventListener("click",async()=>{await ie(e.value||"")?(S("Value copied to clipboard","success"),Ne(o,"Copied!")):S("Failed to copy value to clipboard","error")});return}if(n==="stream"){const o=Array.isArray(e.value)?e.value:[],s=l=>{if(!l||isNaN(l))return"";const c=Math.floor((Date.now()-l)/1e3);if(c<0)return"just now";if(c<60)return`${c}s ago`;const d=Math.floor(c/60);if(d<60)return`${d}m ago`;const m=Math.floor(d/60);return m<24?`${m}h ago`:`${Math.floor(m/24)}d ago`};t.innerHTML=`
      <div class="stream-meta-bar">
        <div class="stream-filter-box">
          <i data-lucide="search" style="width: 13px; height: 13px; color: var(--text-muted); flex-shrink: 0;"></i>
          <input type="text" id="streamFilterInput" placeholder="Filter stream entries by field name, value, or entry ID...">
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="streamFilterCountText">
            Showing ${o.length} of ${(e.length||o.length).toLocaleString()} entries
          </span>
          <span class="badge-db" style="color: #06b6d4; font-size: 0.7rem; display: inline-flex; align-items: center; gap: 3px;">
            <i data-lucide="activity" style="width: 11px; height: 11px;"></i> XREVRANGE (latest 50)
          </span>
        </div>
      </div>

      <div class="fields-table-container">
        <table class="data-table" id="streamEntriesTable" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 32%;">Entry ID & Timestamp</th>
              <th style="width: 68%;">Fields & Values</th>
            </tr>
          </thead>
          <tbody id="streamEntriesTbody">
            ${o.length===0?`
              <tr><td colspan="2" style="text-align: center; color: var(--text-muted); padding: 2rem;">
                <i data-lucide="git-commit" style="width: 24px; height: 24px; color: var(--text-muted); margin-bottom: 0.5rem; display: inline-block;"></i>
                <div>Stream is empty (0 entries)</div>
              </td></tr>
            `:o.map((l,c)=>{const d=l.id||"",m=String(d).match(/^(\d{10,13})-/);let y="",f="";if(m)try{const k=parseInt(m[1],10);y=new Date(k).toLocaleString(),f=s(k)}catch{}const x=l.fields||{},w=Object.entries(x),C=w.map(([k,$])=>`
                <div class="stream-entry-pill" title="${p(k)}: ${p(String($))}">
                  <span class="pill-key">${p(k)}:</span>
                  <span class="pill-val">${p(String($))}</span>
                </div>
              `).join(""),v=`${d} ${w.map(([k,$])=>`${k} ${$}`).join(" ")}`.toLowerCase();return`
                <tr class="stream-entry-row" data-search="${p(v)}" style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                  <td style="padding: 0.65rem 1rem; vertical-align: top;">
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                      <span style="font-family: var(--font-mono); font-size: 0.82rem; color: #06b6d4; font-weight: 600;">${p(d)}</span>
                      <button type="button" class="stream-action-icon-btn btn-copy-stream-id" data-copy="${p(d)}" title="Copy Entry ID">
                        <i data-lucide="copy" style="width: 11px; height: 11px;"></i>
                      </button>
                      <button type="button" class="stream-action-icon-btn btn-copy-stream-json" data-idx="${c}" title="Copy entry JSON">
                        <i data-lucide="code" style="width: 11px; height: 11px;"></i>
                      </button>
                    </div>
                    ${y?`
                      <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-sans); margin-top: 3px; display: flex; align-items: center; gap: 0.35rem;">
                        <span>${p(y)}</span>
                        ${f?`<span class="badge-env" style="font-size: 0.62rem; padding: 0.05rem 0.3rem;">${p(f)}</span>`:""}
                      </div>
                    `:""}
                  </td>
                  <td style="padding: 0.65rem 1rem; vertical-align: top;">
                    <div style="display: flex; flex-wrap: wrap; gap: 2px;">
                      ${C||'<span style="color: var(--text-muted); font-size: 0.78rem;">(no fields)</span>'}
                    </div>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `,g(),t.querySelectorAll(".btn-copy-stream-id").forEach(l=>{l.addEventListener("click",async()=>{const c=l.getAttribute("data-copy")||"";await ie(c)&&(l.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px; color: #10b981;"></i>',g(),setTimeout(()=>{l.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',g()},1500))})}),t.querySelectorAll(".btn-copy-stream-json").forEach(l=>{l.addEventListener("click",async()=>{const c=parseInt(l.getAttribute("data-idx")||"-1",10);c>=0&&o[c]&&await ie(JSON.stringify(o[c],null,2))&&(l.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px; color: #10b981;"></i>',g(),setTimeout(()=>{l.innerHTML='<i data-lucide="code" style="width: 11px; height: 11px;"></i>',g()},1500))})});const a=document.getElementById("streamFilterInput"),r=document.getElementById("streamFilterCountText");a&&a.addEventListener("input",()=>{const l=a.value.trim().toLowerCase(),c=t.querySelectorAll(".stream-entry-row");let d=0;c.forEach(m=>{const y=m.getAttribute("data-search")||"";!l||y.includes(l)?(m.style.display="",d++):m.style.display="none"}),r&&(r.textContent=`Showing ${d} of ${o.length} entries`)});return}if(Array.isArray(e.value)){const o=n==="zset";t.innerHTML=`
      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 15%;">${o?"Score":"Index"}</th>
              <th style="width: 85%;">Element / Member</th>
            </tr>
          </thead>
          <tbody>
            ${e.value.map((s,a)=>`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
                  ${o?s.score:`[${a}]`}
                </td>
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem;">
                  ${p(o?s.member:String(s))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;return}t.innerHTML=`<div class="json-view-box">${p(String(e.value))}</div>`}function St(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(t=>`
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
        ${p(t.field)}
      </td>
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
        ${p(t.value)}
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
  `).join("")}function Lt(e,t=null){const n=i.hashFieldsState,o=n?n.total:e,s=n&&n.match?`${e.toLocaleString()} matching fields loaded`:e<o?`${e.toLocaleString()} of ${o.toLocaleString()} fields loaded`:`${e.toLocaleString()} fields`;return t!==null?`${t.toLocaleString()} shown · ${s}`:s}function xi(e){return`*${e.replace(/[\\*?\[\]]/g,t=>`\\${t}`)}*`}function Tt(){const e=i.hashFieldsState,t=document.getElementById("hashFieldsTableBody"),n=document.getElementById("hashFieldCountText"),o=document.getElementById("hashFieldSearchInput");if(!e||!t)return;const s=o?o.value.trim().toLowerCase():"",a=s?e.fields.filter(r=>r.field.toLowerCase().includes(s)||r.value.toLowerCase().includes(s)):e.fields;t.innerHTML=St(a),n&&(n.textContent=Lt(e.fields.length,s?a.length:null)),g(),It(e.key),nt()}function nt(){const e=document.getElementById("hashFieldsFooter"),t=i.hashFieldsState;if(!e||!t)return;const n=t.cursor!==0,o=t.match?`Server-side filter: <code>${p(t.match)}</code> · <a href="#" id="btnClearHashMatch" style="color: var(--accent-primary);">clear</a>`:n?"Search applies to loaded fields. Press Enter to search all fields on the server.":"";e.innerHTML=`
    <span>${o}</span>
    ${n?`
      <button type="button" class="btn btn-secondary" id="btnLoadMoreHashFields" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" ${t.loading?"disabled":""}>
        <i data-lucide="${t.loading?"refresh-cw":"arrow-down-circle"}" ${t.loading?'class="spin"':""} style="width: 13px; height: 13px;"></i>
        ${t.loading?"Loading...":"Load More Fields"}
      </button>`:""}
  `,g();const s=document.getElementById("btnLoadMoreHashFields");s&&s.addEventListener("click",()=>ze());const a=document.getElementById("btnClearHashMatch");a&&a.addEventListener("click",r=>{r.preventDefault();const l=document.getElementById("hashFieldSearchInput");l&&(l.value=""),ze({reset:!0,match:null})})}async function ze({reset:e=!1,match:t}={}){const n=i.hashFieldsState;if(!n||n.loading||!e&&n.cursor===0)return;const o=n.key,s=e?t:n.match;n.loading=!0,nt();try{const a=new URLSearchParams({cursor:String(e?0:n.cursor),count:String(en)});s&&a.set("match",s);const r=await fetch(`/api/keys/${encodeURIComponent(o)}/hash/fields?${a}`);if(!r.ok){const d=await r.json().catch(()=>({}));throw new Error(d.detail||`Server error: ${r.status}`)}const l=await r.json();if(i.hashFieldsState!==n||i.activeDetailKey!==o)return;e&&(n.fields=[]);const c=new Set(n.fields.map(d=>d.field));for(const d of l.fields||[])c.has(d.field)||(c.add(d.field),n.fields.push(d));n.cursor=Number(l.cursor||0),n.total=Number(l.total??n.total),n.match=s||null}catch(a){S("Failed to load hash fields: "+a.message,"error")}finally{n.loading=!1,i.hashFieldsState===n&&Tt()}}function wi(e){const t=document.getElementById("hashFieldSearchInput");t&&(t.addEventListener("input",()=>Tt()),t.addEventListener("keydown",o=>{if(o.key!=="Enter"||!i.hashFieldsState)return;const s=t.value.trim(),a=i.hashFieldsState;a.cursor===0&&!a.match||ze({reset:!0,match:s?xi(s):null})}));const n=document.getElementById("btnAddHashField");n&&n.addEventListener("click",async()=>{const o=prompt(`Enter field name for hash '${e}':`);if(!o)return;const s=prompt(`Enter value for field '${o}':`);if(s!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:o,value:s})})).ok)throw new Error("Failed to set field");S(`Added field "${o}" to hash`,"success"),oe(e)}catch(a){S("Error setting field: "+a.message,"error")}}),It(e)}function It(e){document.querySelectorAll(".btn-delete-hash-field").forEach(t=>{t.addEventListener("click",async()=>{const n=decodeURIComponent(t.getAttribute("data-field"));if(confirm(`Delete field '${n}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(n)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");S(`Deleted field "${n}"`,"success"),oe(e)}catch(o){S("Error: "+o.message,"error")}})})}function Ci(e){if(!e)return null;const t=e.match(/filename\*\s*=\s*([\w-]*)'[^']*'([^;]+)/i);if(t)try{return decodeURIComponent(t[2].trim().replace(/^"|"$/g,""))}catch{}const n=e.match(/filename\s*=\s*"([^"]*)"/i)||e.match(/filename\s*=\s*([^;]+)/i);return n&&n[1].trim()?n[1].trim():null}function $t(e,t){const n=URL.createObjectURL(e),o=document.createElement("a");o.href=n,o.download=t,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function Bt(e,t,n=null){let o=Ci(e.headers.get("content-disposition"))||t;const s=String(e.headers.get("x-export-format")||n||"").toLowerCase();s&&!o.toLowerCase().endsWith(`.${s}`)&&(o=`${o}.${s}`);const a=await e.blob();return $t(a,o),o}async function ki(e,t){if(!e)return;const n=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Downloading...',g());try{const o=await fetch(`/api/keys/${encodeURIComponent(e)}/download`);if(!o.ok){const a=await o.json().catch(()=>({}));throw new Error(a.detail||`Server error: ${o.status}`)}const s=e.replace(/[^A-Za-z0-9._-]+/g,"_")||"redis_key";await Bt(o,s),o.headers.get("x-export-truncated")==="true"?S("Download was capped: only the first portion was included.","warning"):S(`Downloaded value for "${e}"`,"success")}catch(o){S("Download failed: "+o.message,"error")}finally{t&&(t.disabled=!1,t.innerHTML=n,g())}}function Ei(){const e=document.getElementById("btnCloseDetailModal");e&&e.addEventListener("click",_e);const t=document.getElementById("keyDetailModal");t&&t.addEventListener("click",a=>{a.target===t&&_e()});const n=document.getElementById("btnCopyKeyName");n&&n.addEventListener("click",async()=>{i.activeDetailKey&&(await ie(i.activeDetailKey)?(S(`Copied key "${i.activeDetailKey}" to clipboard`,"success"),Ne(n,"Key Copied!")):S("Failed to copy key to clipboard","error"))});const o=document.getElementById("btnDownloadKeyValue");o&&o.addEventListener("click",()=>{ki(i.activeDetailKey,o)});const s=document.getElementById("btnDeleteKeyFromDetail");s&&s.addEventListener("click",()=>{i.activeDetailKey&&Pe&&Pe(i.activeDetailKey,()=>{_e()})})}let Fe=null;function Si(e){Fe=e}function it(e,t){if(i.lastStatus?.read_only){S("Key deletion is disabled in Read-Only mode.","warning");return}i.pendingDeleteKey=e,i.pendingDeleteCallback=t;const n=document.getElementById("deleteKeyConfirmModal"),o=document.getElementById("deleteKeyTargetName"),s=document.getElementById("inputConfirmDelete"),a=document.getElementById("btnSubmitDeleteKey");o&&(o.textContent=e),s&&(s.value=""),a&&(a.disabled=!0),n&&n.classList.add("active"),s&&s.focus(),s&&(s.oninput=()=>{const r=s.value.trim().toUpperCase();a&&(a.disabled=r!=="CONFIRM"&&s.value.trim()!==e)}),a&&(a.onclick=async()=>{a.disabled=!0,a.textContent="Deleting...";try{const r=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),l=await r.json();if(!r.ok)throw new Error(l.detail||"Failed to delete key");S(`Key "${e}" deleted permanently`,"success"),n&&n.classList.remove("active"),i.pendingDeleteCallback&&i.pendingDeleteCallback()}catch(r){S("Error deleting key: "+r.message,"error")}finally{a.disabled=!1,a.textContent="Delete Permanently"}})}function Li(){const e=document.getElementById("deleteKeyConfirmModal"),t=document.getElementById("btnCloseDeleteConfirmModal"),n=document.getElementById("btnCancelDeleteConfirm"),o=()=>e&&e.classList.remove("active");t&&t.addEventListener("click",o),n&&n.addEventListener("click",o);const s=document.getElementById("exportKeysModal"),a=document.getElementById("btnOpenExportModal"),r=document.getElementById("btnCloseExportModal"),l=document.getElementById("btnCancelExportModal"),c=document.getElementById("btnExecuteExport");if(a&&s){a.addEventListener("click",()=>{const u=document.getElementById("exportPatternDisplay"),h=document.getElementById("exportTypeDisplay"),b=document.getElementById("exportTtlDisplay"),L=document.getElementById("exportLoadedCount"),T=document.getElementById("exportScopeLoadedText"),I=i.currentTtlFilter||"all",_=I==="persistent"?"∞ No TTL (Persistent)":I==="expiring"?"⏳ Expiring Only":"All TTLs",P=I==="persistent"?i.keysTableRows.filter(B=>B.ttl_seconds===-1):I==="expiring"?i.keysTableRows.filter(B=>B.ttl_seconds>0):i.keysTableRows;u&&(u.textContent=i.currentPattern||"*"),h&&(h.textContent=i.currentType&&i.currentType!=="all"?i.currentType.toUpperCase():"All Types"),b&&(b.textContent=_),L&&(L.textContent=`${P.length} keys`),T&&(T.textContent=`${P.length} keys`),s.classList.add("active"),g()});const H=()=>s.classList.remove("active");r&&r.addEventListener("click",H),l&&l.addEventListener("click",H),c&&c.addEventListener("click",async()=>{const u=document.querySelector('input[name="exportFormatRadio"]:checked'),h=document.querySelector('input[name="exportScopeRadio"]:checked'),b=(u?u.value:"csv").toLowerCase(),L=h?h.value:"loaded",T=i.currentPattern||"*",I=i.currentType&&i.currentType!=="all"?i.currentType:"",_=i.currentTtlFilter&&i.currentTtlFilter!=="all"?i.currentTtlFilter:"",B=`redis_keys_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.${b}`;if(L==="all"){c.disabled=!0,c.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Exporting...',g();try{let R=`/api/keys/export?pattern=${encodeURIComponent(T)}&format=${b}`;I&&(R+=`&type=${encodeURIComponent(I)}`),_&&(R+=`&ttl_filter=${encodeURIComponent(_)}`);const N=await fetch(R);if(!N.ok){const F=await N.json().catch(()=>({detail:"Export failed"}));throw new Error(F.detail||`Server error: ${N.status}`)}await Bt(N,B,b),S(`Exported keys matching "${i.currentPattern||"*"}"`,"success"),H()}catch(R){S(`Export failed: ${R.message}`,"error")}finally{c.disabled=!1,c.innerHTML='<i data-lucide="download" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Download',g()}return}const z=i.currentTtlFilter==="persistent"?i.keysTableRows.filter(R=>R.ttl_seconds===-1):i.currentTtlFilter==="expiring"?i.keysTableRows.filter(R=>R.ttl_seconds>0):i.keysTableRows;if(z.length===0){S("No keys matching filters loaded in browser to export.","warning");return}let K;if(b==="csv"){const R=`Key,Type,TTL_Seconds
`,N=z.map(F=>`"${(F.key||"").replace(/"/g,'""')}",${F.type||""},${F.ttl_seconds!==void 0?F.ttl_seconds:-1}`);K=new Blob([R+N.join(`
`)],{type:"text/csv;charset=utf-8;"})}else{const R=z.map(N=>N.key);K=new Blob([R.join(`
`)+`
`],{type:"text/plain;charset=utf-8;"})}$t(K,B),H()})}const d=document.getElementById("bulkDeleteModal"),m=document.getElementById("btnOpenBulkDeleteModal"),y=document.getElementById("btnCloseBulkDeleteModal"),f=document.getElementById("btnCancelBulkDelete"),x=document.getElementById("btnConfirmBulkDelete"),w=document.getElementById("bdCountConfirmInput"),C=document.getElementById("bdProdConfirmInput"),v=document.getElementById("bdProdConfirmGroup"),k=document.getElementById("bulkDeleteProdBanner"),$=document.getElementById("bulkDeleteDryRunStatus"),D=document.getElementById("bulkDeleteDetails");let M=null;function U(){if(!M||!x)return;const H=String(M.matched_count),h=(w?.value||"").trim()===H&&M.matched_count>0;let b=!0;M.is_prod&&(b=(C?.value||"").trim().toUpperCase()==="PROD"),x.disabled=!(h&&b)}if(w&&w.addEventListener("input",U),C&&C.addEventListener("input",U),m&&d){m.addEventListener("click",async()=>{if(i.lastStatus?.read_only){S("Bulk Delete is disabled in Read-Only mode.","warning");return}const u=i.currentPattern||"*",h=i.currentType&&i.currentType!=="all"?i.currentType:null;M=null,w&&(w.value=""),C&&(C.value=""),x&&(x.disabled=!0),$&&($.style.display="block"),D&&(D.style.display="none"),d.classList.add("active"),g();try{const b=await fetch("/api/keys/bulk-delete/dry-run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:u,type_filter:h})});if(!b.ok){const N=await b.json().catch(()=>({detail:"Dry run failed"}));throw new Error(N.detail||"Dry run failed")}const L=await b.json();M=L;const T=document.getElementById("bdPatternDisplay"),I=document.getElementById("bdTypeDisplay"),_=document.getElementById("bdCountDisplay"),P=document.getElementById("bdRequiredCountText");T&&(T.textContent=L.pattern),I&&(I.textContent=L.type_filter?L.type_filter.toUpperCase():"All Types"),_&&(_.textContent=L.matched_count.toLocaleString()),P&&(P.textContent=String(L.matched_count)),L.is_prod?(k&&(k.style.display="block"),v&&(v.style.display="block")):(k&&(k.style.display="none"),v&&(v.style.display="none"));const B=document.getElementById("bdPerNodeBreakdown"),z=Object.entries(L.per_node_counts||{});B&&(z.length>1?(B.innerHTML="<strong>Per-node breakdown:</strong> "+z.map(([N,F])=>`${p(N)}: ${F.toLocaleString()}`).join(" &bull; "),B.style.display="block"):B.style.display="none");const K=document.getElementById("bdSampleKeysList"),R=document.getElementById("bdSampleKeysSection");K&&R&&(L.sample_keys&&L.sample_keys.length>0?(K.innerHTML=L.sample_keys.map(N=>`<div>${p(N)}</div>`).join(""),R.style.display="block"):R.style.display="none"),$&&($.style.display="none"),D&&(D.style.display="flex"),g()}catch(b){$&&($.innerHTML=`
            <div style="color: var(--accent-danger);">
              <i data-lucide="alert-circle" style="width: 20px; height: 20px; margin-bottom: 0.35rem; display: inline-block;"></i>
              <div>Failed to calculate dry-run: ${p(b.message)}</div>
            </div>
          `,g())}});const H=()=>d.classList.remove("active");y&&y.addEventListener("click",H),f&&f.addEventListener("click",H),x&&x.addEventListener("click",async()=>{if(M){x.disabled=!0,x.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlinking...',g();try{const u=await fetch("/api/keys/bulk-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:M.pattern,type_filter:M.type_filter,expected_count:M.matched_count,confirmed_count:parseInt(w.value.trim(),10),confirmed_env:C?C.value.trim():null})});if(!u.ok){const b=await u.json().catch(()=>({detail:"Bulk delete failed"}));throw new Error(b.detail||"Bulk delete failed")}const h=await u.json();S(`Bulk delete complete: ${h.message} (${h.duration_ms}ms)`,"success",4e3),H(),Fe&&Fe()}catch(u){S(`Bulk delete error: ${u.message}`,"error"),x.disabled=!1,x.innerHTML='<i data-lucide="trash-2" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlink Keys',g()}}})}}const Ti="redis_insight_keys_cache",Ii=1,Y="keyspace_snapshots";let fe=null;function ot(){return fe||(fe=new Promise((e,t)=>{if(typeof window>"u"||!window.indexedDB){e(null);return}try{const n=window.indexedDB.open(Ti,Ii);n.onupgradeneeded=o=>{const s=o.target.result;s.objectStoreNames.contains(Y)||s.createObjectStore(Y,{keyPath:"id"})},n.onsuccess=o=>{e(o.target.result)},n.onerror=o=>{console.warn("IndexedDB open error:",o.target.error),e(null)}}catch(n){console.warn("IndexedDB initialization skipped:",n),e(null)}}),fe)}function st(e,t=0){return`${e}:${t}`}async function $i(e,t,n){if(!e||!n||!n.keys||n.keys.length===0)return!1;try{const o=await ot();return o?new Promise(s=>{const r=o.transaction(Y,"readwrite").objectStore(Y),l={id:st(e,t),connId:e,db:t||0,keys:n.keys,totalInDb:n.totalInDb||n.keys.length,cursor:n.cursor||0,pattern:n.pattern||"*",timestamp:Date.now()},c=r.put(l);c.onsuccess=()=>s(!0),c.onerror=()=>s(!1)}):!1}catch(o){return console.warn("Failed to persist keyspace to IndexedDB:",o),!1}}async function Bi(e,t=0){if(!e)return null;try{const n=await ot();return n?new Promise(o=>{const r=n.transaction(Y,"readonly").objectStore(Y).get(st(e,t));r.onsuccess=l=>{const c=l.target.result;o(c||null)},r.onerror=()=>o(null)}):null}catch(n){return console.warn("Failed to read keyspace from IndexedDB:",n),null}}async function Mi(e,t=0){if(!e)return!1;try{const n=await ot();return n?new Promise(o=>{const r=n.transaction(Y,"readwrite").objectStore(Y).delete(st(e,t));r.onsuccess=()=>o(!0),r.onerror=()=>o(!1)}):!1}catch{return!1}}let He=null,Oe="all";function Re(e,t=[":","/","."]){const n=[...t].sort((l,c)=>c.length-l.length),o=new Map,s=[];let a=0;for(let l=0;l<e.length;l++){const c=e[l],d=c.key||"";a+=d.length;let m=null;for(const x of n){const w=d.indexOf(x);if(w!==-1){m=d.slice(0,w+x.length);break}}const y=m||"(root)";o.has(y)||o.set(y,{prefix:y,count:0,types:new Set,sampleKeys:[],memoryEstimate:0});const f=o.get(y);f.count++,c.type&&f.types.add(c.type),f.sampleKeys.length<3&&f.sampleKeys.push(d),c.memory&&(f.memoryEstimate+=c.memory),/\s/.test(d)&&s.push({key:d,type:c.type,issue:"Whitespace in Key",severity:"warning",desc:"Key contains space or whitespace characters that complicate shell scripting"});for(const x of n)if(d.endsWith(x)){s.push({key:d,type:c.type,issue:"Trailing Delimiter",severity:"warning",desc:`Key ends with delimiter '${x}' leaving an empty child token`});break}(d.includes("::")||d.includes("//"))&&s.push({key:d,type:c.type,issue:"Double Delimiter",severity:"info",desc:"Key has repeated delimiters ('::' or '//') which may cause empty tree nodes"}),/[^\x20-\x7E]/.test(d)&&s.push({key:d,type:c.type,issue:"Non-ASCII Characters",severity:"warning",desc:"Key contains non-printable or binary bytes"}),d.length>128&&s.push({key:d,type:c.type,issue:"Long Key (>128 chars)",severity:"info",desc:`Key length is ${d.length} characters; long keys consume extra Redis dictionary RAM`}),!m&&e.length>20&&s.push({key:d,type:c.type,issue:"Missing Namespace",severity:"info",desc:"Key has no delimiter prefix and sits directly in the root namespace"})}const r=Array.from(o.values()).map(l=>({prefix:l.prefix,count:l.count,percentage:e.length>0?(l.count/e.length*100).toFixed(1):0,types:Array.from(l.types),sampleKeys:l.sampleKeys,memoryEstimate:l.memoryEstimate})).sort((l,c)=>c.count-l.count);return{totalAnalyzed:e.length,avgKeyLength:e.length>0?(a/e.length).toFixed(1):0,distinctNamespacesCount:r.length,topNamespace:r[0]||null,namespaces:r,anomalies:s.slice(0,100),totalAnomaliesCount:s.length,durationMs:.5}}function _i(e){const t=document.getElementById("namespaceModal");if(!t)return;const n=document.getElementById("btnCloseNamespaceModal");n&&n.addEventListener("click",he),t.addEventListener("click",l=>{l.target===t&&he()});const o=document.getElementById("tabBtnNsDistribution"),s=document.getElementById("tabBtnNsHygiene"),a=document.getElementById("paneNsDistribution"),r=document.getElementById("paneNsHygiene");o&&s&&a&&r&&(o.addEventListener("click",()=>{o.classList.add("active"),s.classList.remove("active"),a.style.display="block",r.style.display="none"}),s.addEventListener("click",()=>{s.classList.add("active"),o.classList.remove("active"),r.style.display="block",a.style.display="none"})),t.addEventListener("click",l=>{const c=l.target.closest(".btn-ns-filter");if(c){const y=c.getAttribute("data-prefix");y&&(he(),Pi(y));return}const d=l.target.closest(".btn-inspect-hygiene-key");if(d){const y=d.getAttribute("data-key");y&&(he(),oe(y));return}const m=l.target.closest(".hygiene-cat-pill");m&&(Oe=m.getAttribute("data-cat")||"all",document.querySelectorAll(".hygiene-cat-pill").forEach(f=>f.classList.remove("active")),m.classList.add("active"),Mt())})}function he(){const e=document.getElementById("namespaceModal");e&&(e.style.display="none")}async function Ri(e){const t=document.getElementById("namespaceModal");if(!t)return;t.style.display="flex";const n=document.getElementById("nsEmptyState"),o=document.getElementById("nsContentWrapper");if(!i.keysTableRows||i.keysTableRows.length===0){n&&(n.style.display="block"),o&&(o.style.display="none");return}n&&(n.style.display="none"),o&&(o.style.display="flex");const s=performance.now();let a=null;if(e)try{a=await new Promise((r,l)=>{const c="ns_"+Date.now(),d=m=>{m.data&&m.data.id===c&&(e.removeEventListener("message",d),m.data.success?r(m.data.data):l(new Error(m.data.error)))};e.addEventListener("message",d),e.postMessage({id:c,type:"ANALYZE_NAMESPACES_AND_HYGIENE",payload:{keys:i.keysTableRows,delimiters:i.activeTreeDelimiters||[":","/","."]}}),setTimeout(()=>{e.removeEventListener("message",d),r(Re(i.keysTableRows,i.activeTreeDelimiters))},1500)})}catch{a=Re(i.keysTableRows,i.activeTreeDelimiters)}else a=Re(i.keysTableRows,i.activeTreeDelimiters);a.durationMs||(a.durationMs=performance.now()-s),He=a,Ai(a),Di(a),Mt()}function Ai(e){const t=e.durationMs<1?"< 1ms":`${e.durationMs.toFixed(1)}ms`,n=document.getElementById("nsStudioSubtitle");n&&(n.textContent=`Analyzed ${e.totalAnalyzed.toLocaleString()} loaded keys • 0 Redis operations (${t})`);const o=document.getElementById("kpiNsTotalKeys");o&&(o.textContent=e.totalAnalyzed.toLocaleString());const s=document.getElementById("kpiNsCount");s&&(s.textContent=e.distinctNamespacesCount.toLocaleString());const a=document.getElementById("kpiNsTop");a&&(e.topNamespace?a.innerHTML=`<span style="color: var(--accent-primary); font-family: var(--font-mono);">${p(e.topNamespace.prefix)}</span> <span style="font-size: 0.72rem; color: var(--text-muted);">(${e.topNamespace.percentage}%)</span>`:a.textContent="—");const r=document.getElementById("kpiNsHygiene");r&&(e.totalAnomaliesCount===0?r.innerHTML='<span style="color: #10b981;">0 Issues (Clean)</span>':r.innerHTML=`<span style="color: var(--accent-warning);">${e.totalAnomaliesCount.toLocaleString()} Flags</span>`);const l=document.getElementById("badgeNsDistCount");l&&(l.textContent=e.distinctNamespacesCount);const c=document.getElementById("badgeNsHygCount");c&&(c.textContent=e.totalAnomaliesCount,c.style.background=e.totalAnomaliesCount>0?"rgba(245, 158, 11, 0.2)":"rgba(16, 185, 129, 0.2)",c.style.color=e.totalAnomaliesCount>0?"var(--accent-warning)":"#10b981")}function Di(e){const t=document.getElementById("tbodyNsDistribution");if(!t)return;if(!e.namespaces||e.namespaces.length===0){t.innerHTML='<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">No namespaces found</td></tr>';return}const n=e.namespaces[0]?.count||1;t.innerHTML=e.namespaces.map(o=>{const s=Math.max(4,Math.round(o.count/n*100)),a=(o.types||[]).map(r=>`<span class="type-badge ${r}">${p(r)}</span>`).join(" ");return`
      <tr>
        <td style="font-family: var(--font-mono); font-weight: 600; color: #38bdf8;">
          ${p(o.prefix)}
        </td>
        <td style="font-weight: 700;">${o.count.toLocaleString()}</td>
        <td style="width: 28%;">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <div style="flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;">
              <div style="width: ${s}%; height: 100%; background: linear-gradient(90deg, #38bdf8, #818cf8); border-radius: 3px;"></div>
            </div>
            <span style="font-size: 0.75rem; font-weight: 600; min-width: 42px; text-align: right;">${o.percentage}%</span>
          </div>
        </td>
        <td>${a||'<span style="color: var(--text-muted);">—</span>'}</td>
        <td style="text-align: right;">
          <button type="button" class="btn btn-secondary btn-ns-filter" data-prefix="${p(o.prefix)}" title="Filter table by this namespace" style="padding: 0.25rem 0.6rem; font-size: 0.72rem;">
            🔍 Filter
          </button>
        </td>
      </tr>
    `}).join("")}function Mt(){const e=document.getElementById("tbodyNsHygiene");if(!e||!He)return;let t=He.anomalies||[];if(Oe!=="all"&&(t=t.filter(n=>n.issue.toLowerCase().includes(Oe.toLowerCase()))),t.length===0){e.innerHTML=`
      <tr>
        <td colspan="4" style="text-align: center; color: #10b981; padding: 2.5rem 1rem;">
          <div style="font-weight: 600; font-size: 0.9rem;">✨ Clean Keyspace! No hygiene anomalies detected.</div>
          <div style="color: var(--text-muted); font-size: 0.75rem; margin-top: 0.25rem;">
            All loaded keys follow standard naming conventions without illegal spaces, trailing separators, or excessive length.
          </div>
        </td>
      </tr>
    `;return}e.innerHTML=t.map(n=>{const s=n.severity==="warning"?"background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3);":"background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3);";return`
      <tr>
        <td style="font-family: var(--font-mono); font-size: 0.76rem; max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${p(n.key)}">
          ${p(n.key)}
        </td>
        <td>
          <span style="font-size: 0.7rem; font-weight: 600; padding: 0.15rem 0.45rem; border-radius: 4px; ${s}">
            ${p(n.issue)}
          </span>
        </td>
        <td style="font-size: 0.74rem; color: var(--text-muted);">${p(n.desc)}</td>
        <td style="text-align: right;">
          <button type="button" class="btn btn-secondary btn-inspect-hygiene-key" data-key="${p(n.key)}" title="Inspect this key in Slide-Over drawer" style="padding: 0.25rem 0.55rem; font-size: 0.72rem;">
            Inspect
          </button>
        </td>
      </tr>
    `}).join("")}function Pi(e){const t=document.getElementById("keySearchInput");if(!t)return;const n=e==="(root)"?"":e;t.value=n?`${n}*`:"*",t.dispatchEvent(new Event("input",{bubbles:!0}))}let _t=null;try{_t=new Worker(new URL("/assets/keys-worker-CCRILazq.js",import.meta.url),{type:"module"})}catch(e){console.warn("Keys Web Worker fallback to main thread:",e)}function ke(e=null){const t=document.getElementById("keysCacheStatusPill");if(!t)return;if(!e||!e.keys||e.keys.length===0){t.style.display="none",t.innerHTML="";return}const n=e.keys.length;t.style.display="inline-flex",t.innerHTML=`
    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    <span>Cached (${n.toLocaleString()})</span>
    <span class="cache-clear-link" id="btnClearCacheSnapshot" title="Clear IndexedDB cache snapshot">Clear</span>
  `}async function q(e=!1){i.isScanning=!1,i.currentScanEpoch++;const t=i.currentScanEpoch;i.currentCursor=0,i.scanComplete=!1,i.totalScanned=0,i.keysTableRows=[],i.loadedKeysSet.clear(),i.treeInitialized=!1,i.treeExpandedPaths.clear(),i.isMemoryCeilingReached=!1;const n=document.getElementById("memoryLimitBanner");n&&(n.style.display="none");const o=document.getElementById("emptyWorkspaceState"),s=document.getElementById("gridViewerContainer");if(o&&(o.style.display="none"),s&&(s.style.display="block"),!e&&i.searchScope==="local"&&(!i.currentPattern||i.currentPattern==="*")){const a=ge();if(a)try{const r=await Bi(a,i.lastStatus?.db||0);if(r&&Array.isArray(r.keys)&&r.keys.length>0){i.keysTableRows=r.keys,i.loadedKeysSet=new Set(r.keys.map(l=>l.key)),i.dbTotalKeys=r.totalInDb||r.keys.length,i.currentCursor=r.cursor||0,i.totalScanned=i.keysTableRows.length,i.scanComplete=Se(i.currentCursor),Ke(),ae(),ke(r);return}}catch(r){console.warn("Keyspace cache restoration bypassed:",r)}}ke(null),Ke(),await Rt(t)}function se(){const e=document.getElementById("btnToggleAutoRefresh"),t=document.getElementById("autoRefreshStatusText"),n=document.getElementById("autoRefreshIntervalSelect");if(!(!e||!t))if(i.isAutoRefreshActive){e.classList.add("active");const o=i.autoRefreshRemainingSec>=60?`${Math.floor(i.autoRefreshRemainingSec/60)}m ${i.autoRefreshRemainingSec%60}s`:`${i.autoRefreshRemainingSec}s`;e.title=`Auto-refresh active (Pattern: "${i.currentPattern||"*"}"). Refreshing in ${o}. Click to pause.`,t.textContent=`Auto: ${o}`,n&&(n.value=String(i.autoRefreshIntervalSec))}else{e.classList.remove("active");const o=i.autoRefreshIntervalSec>=60?`${Math.floor(i.autoRefreshIntervalSec/60)}m`:`${i.autoRefreshIntervalSec}s`;e.title=`Click to watch keys matching pattern "${i.currentPattern||"*"}" every ${o}`,t.textContent="Auto: Off",n&&(n.value=String(i.autoRefreshIntervalSec))}}function ve(){i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,se()}function Ni(){i.isAutoRefreshActive=!0,i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,se(),i.autoRefreshTimer&&clearInterval(i.autoRefreshTimer),i.autoRefreshTimer=setInterval(async()=>{if(!i.isAutoRefreshActive)return;const e=document.querySelector(".modal-backdrop.active");document.hidden||e||(i.autoRefreshRemainingSec--,i.autoRefreshRemainingSec<=0?(i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,se(),i.cachedConnections.some(n=>n.is_connected)&&!i.isScanning&&await q()):se())},1e3)}function zi(){i.isAutoRefreshActive=!1,i.autoRefreshTimer&&(clearInterval(i.autoRefreshTimer),i.autoRefreshTimer=null),i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,se()}function Fi(){i.isAutoRefreshActive?zi():Ni()}function Se(e){if(e==null)return!0;const t=String(e).trim();if(t===""||t==="0")return!0;if(t.startsWith("{"))try{return Object.values(JSON.parse(t)).every(n=>Number(n)===0)}catch{return!1}return!1}function yt(e){const t=String(e??"").trim();if(t.startsWith("{"))try{const n=Object.values(JSON.parse(t));return`${n.filter(s=>Number(s)!==0).length}/${n.length} nodes scanning`}catch{return""}return""}async function Rt(e=null){if(i.isScanning||i.scanComplete)return;const t=i.maxLoadedKeysLimit||1e5;if(i.keysTableRows.length>=t){i.isMemoryCeilingReached=!0,ae();return}const n=e!==null?e:i.currentScanEpoch;i.isScanning=!0,ae();try{const o=`/api/keys?pattern=${encodeURIComponent(i.currentPattern)}&cursor=${encodeURIComponent(String(i.currentCursor??"0"))}&count=${i.scanBatchSize}${i.currentType!=="all"?`&type=${encodeURIComponent(i.currentType)}`:""}`,s=await fetch(o);if(!s.ok)throw new Error("Failed to scan keys");const a=await s.json();if(n!==i.currentScanEpoch)return;i.currentCursor=a.cursor,i.scanComplete=Se(i.currentCursor),i.dbTotalKeys=a.total_in_db;const r=Math.max(0,t-i.keysTableRows.length),c=(a.keys||[]).filter(m=>i.loadedKeysSet.has(m.name)?!1:(i.loadedKeysSet.add(m.name),!0)).slice(0,r).map(m=>({key:m.name,type:m.type,ttl_seconds:m.ttl,status:m.ttl===-1?"Persistent":m.ttl===-2?"Expired":`Expires in ${m.ttl}s`}));if(c.length>0){i.keysTableRows.push(...c);const m=ge();m&&$i(m,i.lastStatus?.db||0,{keys:i.keysTableRows,totalInDb:i.dbTotalKeys,cursor:i.currentCursor,pattern:i.currentPattern}).then(()=>{ke({keys:i.keysTableRows,timestamp:Date.now()})}).catch(()=>{})}i.keysTableRows.length>=t&&(i.isMemoryCeilingReached=!0),Ke(),i.totalScanned=i.loadedKeysSet.size;const d=document.getElementById("tabBadgeKeys");d&&(d.textContent=i.totalScanned.toLocaleString())}catch(o){console.error("Scan error:",o)}finally{n===i.currentScanEpoch&&(i.isScanning=!1,ae())}}const be=[":","/",".","-","_"],gt={auto:[":","/","."],":":[":"],"/":["/"],".":["."],"-":["-"],_:["_"]};function ge(){if(i.lastStatus?.connection_id)return i.lastStatus.connection_id;const e=i.cachedConnections?.find(n=>n.is_selected);if(e)return e.id;const t=i.cachedConnections?.find(n=>n.is_connected);return t?t.id:null}function Ce(e){if(!Array.isArray(e)||e.length===0)return"custom";const t=new Set(e);if(t.size===3&&t.has(":")&&t.has("/")&&t.has("."))return"auto";if(t.size===1){if(t.has(":"))return":";if(t.has("/"))return"/";if(t.has("."))return".";if(t.has("-"))return"-";if(t.has("_"))return"_"}return"custom"}function xe(e=null){const t=e||ge();t&&localStorage.setItem(`redis_insight_tree_delimiters_${t}`,JSON.stringify(i.activeTreeDelimiters)),localStorage.setItem("redis_insight_tree_delimiters_global",JSON.stringify(i.activeTreeDelimiters)),localStorage.setItem("redis_insight_tree_delimiter_preset",i.treeDelimiterPreset),localStorage.setItem("redis_insight_custom_delimiters",JSON.stringify(i.customTreeDelimiters))}function Hi(e=null){const t=e||ge();let n=null;if(t){const s=localStorage.getItem(`redis_insight_tree_delimiters_${t}`);if(s)try{const a=JSON.parse(s);Array.isArray(a)&&a.length>0&&(n=a)}catch{}}if(!n){const s=localStorage.getItem("redis_insight_tree_delimiters_global");if(s)try{const a=JSON.parse(s);Array.isArray(a)&&a.length>0&&(n=a)}catch{}}Array.isArray(n)&&n.length>0?i.activeTreeDelimiters=n:i.activeTreeDelimiters=[":","/","."];const o=localStorage.getItem("redis_insight_custom_delimiters");if(o)try{const s=JSON.parse(o);Array.isArray(s)&&(i.customTreeDelimiters=s)}catch{}i.treeDelimiterPreset=Ce(i.activeTreeDelimiters)}function Oi(e,t=i.activeTreeDelimiters){if(!e||!t||t.length===0)return{segments:[],leafName:e||""};const n=[...t].filter(r=>typeof r=="string"&&r.length>0).sort((r,l)=>l.length-r.length);if(n.length===0)return{segments:[],leafName:e};const o=[];let s=0;for(;s<e.length;){let r=-1,l=null;for(const d of n){const m=e.indexOf(d,s);m!==-1&&(r===-1||m<r?(r=m,l=d):m===r&&d.length>(l?l.length:0)&&(l=d))}if(r===-1)break;const c=e.slice(s,r);(c!==""||o.length>0)&&o.push({name:c,delim:l}),s=r+l.length}const a=e.slice(s);return o.length===0?{segments:[],leafName:e}:{segments:o,leafName:a||"(empty)"}}function Ki(e,t=i.activeTreeDelimiters){const n={id:"__root__",name:"Root",fullPrefix:"",delimiter:"",depth:-1,folders:new Map,keys:[],totalKeyCount:0},o=Array.isArray(t)?t:typeof t=="string"&&t!=="auto"?[t]:i.activeTreeDelimiters||[":","/","."];for(const a of e){const r=a.key||"",{segments:l,leafName:c}=Oi(r,o);if(l.length===0){n.keys.push({...a,leafName:r});continue}let d=n,m="";for(let y=0;y<l.length;y++){const{name:f,delim:x}=l[y];m+=f+x;const w=m;d.folders.has(f)||d.folders.set(f,{id:w,name:f,fullPrefix:w,delimiter:x,depth:y,folders:new Map,keys:[],totalKeyCount:0}),d=d.folders.get(f)}d.keys.push({...a,leafName:c||"(empty)"})}function s(a){let r=a.keys.length;a.keys.sort((c,d)=>(c.leafName||c.key).localeCompare(d.leafName||d.key));const l=new Map([...a.folders.entries()].sort((c,d)=>c[0].localeCompare(d[0])));a.folders=l;for(const c of a.folders.values())s(c),r+=c.totalKeyCount;a.totalKeyCount=r}return s(n),n}function At(e,t){if(e.name.toLowerCase().includes(t)||e.fullPrefix.toLowerCase().includes(t))return!0;for(const n of e.keys)if(n.key.toLowerCase().includes(t)||n.leafName&&n.leafName.toLowerCase().includes(t))return!0;for(const n of e.folders.values())if(At(n,t))return!0;return!1}function ji(e,t="i"){let n="^";for(let o=0;o<e.length;o++){const s=e[o];s==="*"?n+=".*":s==="?"?n+=".":/[.\\+*?[^\]$(){}=!<>|:-]/.test(s)?n+="\\"+s:n+=s}return n+="$",new RegExp(n,t)}function Dt(e){const t=(e||"").trim();if(!t||t==="*")return()=>!0;if(t.startsWith("/")&&t.lastIndexOf("/")>0)try{const o=t.lastIndexOf("/"),s=t.slice(1,o),a=t.slice(o+1)||"i",r=new RegExp(s,a);return l=>r.test(l)}catch{}if(t.includes("*")||t.includes("?"))try{const o=ji(t,"i");return s=>o.test(s)}catch{}if(/[\^$|()\\[\\]{}]/.test(t))try{const o=new RegExp(t,"i");return s=>o.test(s)}catch{}const n=t.toLowerCase();return o=>o.toLowerCase().includes(n)}function Pt(){const e=performance.now();let t=i.keysTableRows||[];const n=(i.localFilterQuery||"").trim();if(n&&n!=="*"){const a=Dt(n);t=t.filter(r=>a(r.key))}if(i.currentType&&i.currentType!=="all"){const a=i.currentType.toLowerCase();t=t.filter(r=>(r.type||"").toLowerCase()===a)}const o=(i.currentTtlFilter||"all").toLowerCase();o==="expiring"?t=t.filter(a=>a.ttl_seconds>0):(o==="persistent"||o==="no-ttl")&&(t=t.filter(a=>a.ttl_seconds===-1));const s=(performance.now()-e).toFixed(1);return i.localMatchCount=t.length,i.localMatchDurationMs=s,t}const de=44,ft=20;function Ae(e){const t=encodeURIComponent(e.key),o=!!i.lastStatus?.read_only?`<span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
         <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
       </span>`:`<button type="button" class="btn-icon danger btn-delete-key-table" data-key="${t}" title="Delete key">
         <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
       </button>`,s=e.ttl_seconds===-1?`<span class="badge-persistent" style="background: rgba(148, 163, 184, 0.12); color: #94a3b8; border: 1px solid rgba(148, 163, 184, 0.25); padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">
         <span style="font-size: 0.82rem;">∞</span> Persistent
       </span>`:`<span class="badge-expiring" style="background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25); padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
         <span>⏳</span> ${e.ttl_seconds}s
       </span>`;return`
    <tr class="key-row" data-key="${t}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer; height: ${de}px;">
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 380px;">
        <span class="btn-inspect-key" data-key="${t}" title="${p(e.key)}">${p(e.key)}</span>
      </td>
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase;">
        <span class="badge-db">${p(e.type)}</span>
      </td>
      <td style="padding: 0.65rem 1rem; font-size: 0.8rem;">
        ${s}
      </td>
      <td style="padding: 0.65rem 1rem; text-align: right;" onclick="event.stopPropagation()">
        ${o}
      </td>
    </tr>
  `}function Ui(){const e=document.getElementById("gridViewerContainer");if(!e)return;const t=Pt();if(t.length===0){if(i.isScanning&&i.keysTableRows.length===0){e.innerHTML=`
        <div class="table-loading-card">
          <div class="spinner-ring"></div>
          <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">Scanning Keyspace...</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">Fetching keys matching "<code>${p(i.currentPattern)}</code>" from Redis</div>
        </div>
      `;return}if(i.keysTableRows.length>0){const f=(i.localFilterQuery||"").trim();if(f&&f!=="*"){e.innerHTML=`
          <div style="padding: 3.5rem 1.5rem; text-align: center; color: var(--text-muted);">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 0.85rem;">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--accent-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </div>
            <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem; margin-bottom: 0.35rem;">
              No loaded keys match "<code>${p(f)}</code>"
            </div>
            <p style="font-size: 0.8rem; color: var(--text-muted); max-width: 480px; margin: 0 auto 1.25rem; line-height: 1.5;">
              Searched across all <strong>${i.keysTableRows.length.toLocaleString()}</strong> keys currently loaded in browser memory.
              The key may exist in the Redis cluster but has not been loaded yet.
            </p>
            <button type="button" class="btn btn-primary" id="btnFallbackRemoteScan" style="padding: 0.45rem 1.15rem; font-size: 0.82rem;">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 5px;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span>Scan Redis Cluster for "${p(f)}"</span>
            </button>
          </div>
        `;const x=document.getElementById("btnFallbackRemoteScan");x&&x.addEventListener("click",()=>{i.searchScope="remote",i.currentPattern=f.includes("*")?f:`${f}*`;const w=document.getElementById("keySearchInput");w&&(w.value=i.currentPattern),q(!0)});return}e.innerHTML=`
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${p(i.currentTtlFilter)}</strong>" or Type filter "<strong>${p(i.currentType)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${i.keysTableRows.length.toLocaleString()} total keys loaded in browser memory)</span>
        </div>
      `;return}const y=!i.scanComplete&&Se(i.currentCursor);e.innerHTML=i.scanComplete?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${p(i.currentPattern)}</code>".
      </div>
    `:y?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${p(i.currentPattern)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${p(i.currentPattern)}</code>" in the part of the keyspace scanned so far.<br>
        The scan is not finished — click <strong>Load More</strong> to keep scanning.
      </div>
    `;return}const n=t.length;if(!(n>100)){e.innerHTML=`
      <div style="overflow-y: auto; height: 100%; width: 100%; padding: 0.5rem;" id="keysTableViewport">
        <table class="data-table" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">KEY (CLICK TO VIEW)</th>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">TYPE</th>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">TTL / EXPIRATION</th>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: right;">ACTION</th>
            </tr>
          </thead>
          <tbody id="keysTableBody">
            ${t.map(Ae).join("")}
          </tbody>
        </table>
      </div>
    `;return}const s=n*de,a=Math.min(n,60);e.innerHTML=`
    <div class="virtual-scroll-viewport" id="keysTableViewport" style="overflow-y: auto; height: 100%; width: 100%; padding: 0.5rem; position: relative;">
      <div class="virtual-scroll-spacer" style="height: ${s}px; width: 100%; pointer-events: none;"></div>
      <div class="virtual-scroll-content" id="virtualScrollContent" style="position: absolute; top: 0px; left: 0; right: 0; visibility: visible; pointer-events: auto;">
        <table class="data-table" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">KEY (CLICK TO VIEW)</th>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">TYPE</th>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">TTL / EXPIRATION</th>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: right;">ACTION</th>
            </tr>
          </thead>
          <tbody id="keysTableBody">
            ${t.slice(0,a).map(Ae).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;const r=document.getElementById("keysTableViewport"),l=document.getElementById("virtualScrollContent"),c=document.getElementById("keysTableBody");let d=0,m=a;r&&l&&c&&r.addEventListener("scroll",()=>{const y=r.scrollTop,f=r.clientHeight||600,x=Math.max(0,Math.floor(y/de)-ft),w=Math.ceil(f/de),C=Math.min(n,x+w+ft*2);if(x!==d||C!==m){d=x,m=C;const v=x*de;l.style.top=`${v}px`,c.innerHTML=t.slice(x,C).map(Ae).join("")}},{passive:!0})}function J(){const e=document.getElementById("gridViewerContainer");if(!e)return;const t=Pt();if(t.length===0){if(i.keysTableRows.length>0){e.innerHTML=`
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${p(i.currentTtlFilter)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${i.keysTableRows.length.toLocaleString()} total keys scanned so far)</span>
        </div>
      `;return}const u=!i.scanComplete&&Se(i.currentCursor);e.innerHTML=i.scanComplete?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${p(i.currentPattern)}</code>".
      </div>
    `:u?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${p(i.currentPattern)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${p(i.currentPattern)}</code>" in the part of the keyspace scanned so far.<br>
        The scan is not finished — click <strong>Load More</strong> to keep scanning.
      </div>
    `;return}const n=Ki(t,i.activeTreeDelimiters);if(!i.treeInitialized&&i.treeExpandedPaths.size===0){for(const u of n.folders.values())i.treeExpandedPaths.add(u.id);i.treeInitialized=!0}function o(u){let h=u.folders.size;for(const b of u.folders.values())h+=o(b);return h}const s=o(n),a=!!i.currentTreeFilterQuery.trim(),r=i.currentTreeFilterQuery.trim().toLowerCase();function l(u,h){const b=encodeURIComponent(u.key);return`
      <div class="tree-node tree-leaf key-row" data-key="${b}" style="padding-left: ${h*20+26}px;">
        <div class="tree-node-content">
          <div class="tree-key-icon">
            <i data-lucide="key" style="width: 13px; height: 13px;"></i>
          </div>
          <span class="tree-key-name btn-inspect-key" data-key="${b}" title="${p(u.key)}">
            ${p(u.leafName||u.key)}
          </span>
          <span class="badge-db" style="margin-left: 0.35rem; font-size: 0.68rem; text-transform: uppercase;">${p(u.type)}</span>
          ${u.ttl_seconds===-1?'<span class="badge-persistent" style="margin-left: 0.35rem; font-size: 0.65rem; padding: 0.08rem 0.35rem; border-radius: 4px; background: rgba(148, 163, 184, 0.12); color: #94a3b8; border: 1px solid rgba(148, 163, 184, 0.25); font-weight: 500;">∞ Persistent</span>':`<span class="tree-key-ttl" style="margin-left: 0.35rem; background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 4px; padding: 0.08rem 0.35rem; font-size: 0.65rem; font-weight: 600;" title="Expires in ${u.ttl_seconds}s">⏳ ${u.ttl_seconds}s</span>`}
          <div class="tree-key-actions" onclick="event.stopPropagation()">
            ${i.lastStatus?.read_only?`
              <span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
                <i data-lucide="lock" style="width: 13px; height: 13px;"></i>
              </span>
            `:`
              <button type="button" class="btn-icon danger btn-delete-key-table" data-key="${b}" title="Delete key">
                <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
              </button>
            `}
          </div>
        </div>
      </div>
    `}function c(u,h){if(a&&!At(u,r))return"";const b=a?!0:i.treeExpandedPaths.has(u.id),L=encodeURIComponent(u.id);let T="";if(b){for(const I of u.folders.values())T+=c(I,h+1);for(const I of u.keys)a&&!I.key.toLowerCase().includes(r)&&!(I.leafName&&I.leafName.toLowerCase().includes(r))||(T+=l(I,h+1))}return`
      <div class="tree-folder-group" data-folder-id="${L}">
        <div class="tree-node tree-folder" data-folder-id="${L}" style="padding-left: ${h*20+8}px;">
          <div class="tree-node-content">
            <button type="button" class="tree-toggle-btn" title="${b?"Collapse":"Expand"}">
              <i data-lucide="${b?"chevron-down":"chevron-right"}" style="width: 14px; height: 14px;"></i>
            </button>
            <div class="tree-folder-icon">
              <i data-lucide="${b?"folder-open":"folder"}" style="width: 15px; height: 15px;"></i>
            </div>
            <span class="tree-folder-name" title="${p(u.fullPrefix)}">
              ${p(u.name)}<span class="tree-folder-delim">${p(u.delimiter)}</span>
            </span>
            <span class="tree-count-badge" title="${u.totalKeyCount} keys in this namespace">
              ${u.totalKeyCount.toLocaleString()} ${u.totalKeyCount===1?"key":"keys"}
            </span>
            <button type="button" class="tree-filter-prefix-btn" data-prefix="${p(u.fullPrefix)}" title="Filter keys matching '${p(u.fullPrefix)}*'">
              <i data-lucide="filter" style="width: 11px; height: 11px;"></i>
              <span>Filter</span>
            </button>
          </div>
        </div>
        <div class="tree-children" style="display: ${b?"block":"none"};">
          ${T}
        </div>
      </div>
    `}let d="";if(n.keys.length>0){const u=a?n.keys.filter(h=>h.key.toLowerCase().includes(r)||h.leafName&&h.leafName.toLowerCase().includes(r)):n.keys;u.length>0&&(d=`
        <div class="tree-root-keys-section">
          <div class="tree-root-keys-header" style="padding-left: 10px;">
            <span class="tree-root-keys-title">ROOT KEYS (NO DELIMITER)</span>
            <span class="tree-count-badge">${u.length.toLocaleString()} ${u.length===1?"key":"keys"}</span>
          </div>
          <div class="tree-root-keys-list">
            ${u.map(h=>l(h,0)).join("")}
          </div>
        </div>
      `)}const y=[...be,...(i.customTreeDelimiters||[]).filter(u=>!be.includes(u))].map(u=>{const h=(i.activeTreeDelimiters||[]).includes(u),b=!be.includes(u);return`
      <span class="tree-delim-chip ${h?"active":""} ${b?"custom":""}" data-delim="${p(u)}" title="${h?"Click to disable":"Click to enable"} delimiter '${p(u)}'">
        <span class="delim-char">${p(u)}</span>
        ${b?`<button type="button" class="tree-delim-chip-remove" data-remove-delim="${p(u)}" title="Remove custom delimiter">&times;</button>`:""}
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
              ${y}
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
          <div class="tree-summary-pill" id="treeSummaryPill" title="${s.toLocaleString()} total namespaces parsed">
            ${s.toLocaleString()} ${s===1?"Namespace":"Namespaces"}
          </div>
        </div>
        <div class="tree-toolbar-right">
          <div class="tree-filter-box">
            <i data-lucide="search" style="width: 12px; height: 12px; color: var(--text-muted); flex-shrink: 0;"></i>
            <input type="text" id="treeFilterInput" class="tree-filter-input" placeholder="Filter loaded tree..." value="${p(i.currentTreeFilterQuery)}">
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
        ${[...n.folders.values()].map(u=>c(u,0)).join("")}
        ${d}
      </div>
    </div>
  `,g(),e.querySelectorAll(".tree-folder").forEach(u=>{u.addEventListener("click",h=>{if(h.target.closest(".tree-filter-prefix-btn"))return;const b=decodeURIComponent(u.getAttribute("data-folder-id"));i.treeExpandedPaths.has(b)?i.treeExpandedPaths.delete(b):i.treeExpandedPaths.add(b),J()})}),e.querySelectorAll(".tree-filter-prefix-btn").forEach(u=>{u.addEventListener("click",h=>{h.stopPropagation();const b=u.getAttribute("data-prefix"),L=document.getElementById("keySearchInput");L&&b&&(L.value=b+"*",i.currentPattern=b+"*",q())})});const f=document.getElementById("treeDelimiterSelect");f&&f.addEventListener("change",u=>{const h=u.target.value;h==="custom"?i.treeDelimiterPreset="custom":gt[h]&&(i.activeTreeDelimiters=[...gt[h]],i.treeDelimiterPreset=h),xe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J()}),e.querySelectorAll(".tree-delim-chip").forEach(u=>{u.addEventListener("click",h=>{if(h.target.closest(".tree-delim-chip-remove"))return;const b=u.getAttribute("data-delim");b&&(i.activeTreeDelimiters.includes(b)?i.activeTreeDelimiters=i.activeTreeDelimiters.filter(L=>L!==b):i.activeTreeDelimiters.push(b),i.treeDelimiterPreset=Ce(i.activeTreeDelimiters),xe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J())})}),e.querySelectorAll(".tree-delim-chip-remove").forEach(u=>{u.addEventListener("click",h=>{h.stopPropagation();const b=u.getAttribute("data-remove-delim");b&&(i.customTreeDelimiters=(i.customTreeDelimiters||[]).filter(L=>L!==b),i.activeTreeDelimiters=(i.activeTreeDelimiters||[]).filter(L=>L!==b),i.treeDelimiterPreset=Ce(i.activeTreeDelimiters),xe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J())})});const x=document.getElementById("btnAddDelimToggle"),w=document.getElementById("treeCustomDelimPopover"),C=document.getElementById("customDelimInput"),v=document.getElementById("btnConfirmAddDelim"),k=document.getElementById("btnCancelAddDelim");x&&w&&x.addEventListener("click",u=>{u.stopPropagation();const h=w.style.display!=="none";w.style.display=h?"none":"flex",!h&&C&&(C.value="",C.focus())});function $(){if(!C)return;const u=C.value.trim();u&&(!i.customTreeDelimiters.includes(u)&&!be.includes(u)&&i.customTreeDelimiters.push(u),i.activeTreeDelimiters.includes(u)||i.activeTreeDelimiters.push(u),i.treeDelimiterPreset=Ce(i.activeTreeDelimiters),xe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J())}v&&v.addEventListener("click",u=>{u.stopPropagation(),$()}),C&&C.addEventListener("keydown",u=>{u.key==="Enter"?(u.preventDefault(),$()):u.key==="Escape"&&w&&(w.style.display="none")}),k&&k.addEventListener("click",u=>{u.stopPropagation(),w&&(w.style.display="none")});const D=document.getElementById("btnExpandAllTree");D&&D.addEventListener("click",()=>{function u(h){for(const b of h.folders.values())i.treeExpandedPaths.add(b.id),u(b)}u(n),J()});const M=document.getElementById("btnCollapseAllTree");M&&M.addEventListener("click",()=>{i.treeExpandedPaths.clear(),J()});const U=document.getElementById("treeFilterInput");U&&U.addEventListener("input",u=>{i.currentTreeFilterQuery=u.target.value,J();const h=document.getElementById("treeFilterInput");h&&(h.focus(),h.setSelectionRange(h.value.length,h.value.length))});const H=document.getElementById("btnClearTreeFilter");H&&H.addEventListener("click",()=>{i.currentTreeFilterQuery="",J()})}function Q(){i.currentViewMode==="tree"?J():Ui()}function Ke(){Q()}function Vi(){const e=document.getElementById("scanChunkLabel");e&&(e.textContent=`Safe (${i.scanBatchSize.toLocaleString()})`)}function ee(){const e=document.getElementById("scopeBtnLocal"),t=document.getElementById("scopeBtnRemote"),n=document.getElementById("keySearchInput"),o=document.getElementById("searchMatchCountBadge"),s=document.getElementById("btnClearSearchQuery"),a=i.searchScope==="local";if(e&&e.classList.toggle("active",a),t&&t.classList.toggle("active",!a),n&&(a?(n.placeholder="Filter loaded keys by regex, glob (*), or text (instant)...",n.title="Instant in-memory filter across loaded keys (~5ms). Press Enter or click Cluster SCAN to query Redis."):(n.placeholder="Scan Redis cluster by pattern (e.g. *, users:*, order:*) - Press Enter",n.title="Query Redis Cluster directly with pattern. Clears local cache and scans Redis.")),s){const r=n?n.value.trim():"";s.style.display=r&&r!=="*"?"inline-flex":"none"}if(o){const r=i.keysTableRows.length;if(r>0&&a){const l=(i.localFilterQuery||"").trim();l&&l!=="*"?(o.textContent=`${i.localMatchCount.toLocaleString()} / ${r.toLocaleString()} (${i.localMatchDurationMs}ms)`,o.title=`Filtered ${i.localMatchCount.toLocaleString()} of ${r.toLocaleString()} loaded keys in ${i.localMatchDurationMs}ms`):(o.textContent=`${r.toLocaleString()} loaded`,o.title=`${r.toLocaleString()} keys loaded in browser memory`),o.style.display="inline-flex"}else o.style.display="none"}}function qi(){const e=document.getElementById("memoryLimitBanner");if(!e)return;const t=i.keysTableRows.length,n=i.maxLoadedKeysLimit||1e5;if(t>=n){i.isMemoryCeilingReached=!0;const o=n+1e5;e.innerHTML=`
      <div class="memory-limit-left">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        <span>
          <strong>Memory Safety Ceiling Reached:</strong>
          <strong>${t.toLocaleString()}</strong> keys loaded in browser memory. Further key accumulation paused to preserve 60fps rendering and prevent browser crashes.
        </span>
      </div>
      <div class="memory-limit-actions">
        <button type="button" class="btn btn-secondary btn-sm" id="btnRaiseMemoryCeiling" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; color: #fbbf24; border-color: rgba(245, 158, 11, 0.4); white-space: nowrap;">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
          <span>Raise Ceiling (${o.toLocaleString()})</span>
        </button>
      </div>
    `,e.style.display="flex";const s=document.getElementById("btnRaiseMemoryCeiling");s&&s.addEventListener("click",()=>{i.maxLoadedKeysLimit=o,i.isMemoryCeilingReached=!1,e.style.display="none",ae()})}else i.isMemoryCeilingReached=!1,e.style.display="none"}function ae(){const e=document.getElementById("scanStatusText"),t=document.getElementById("btnScanNext"),n=document.getElementById("keysLoadingShimmer"),o=!!i.isScanning,s=i.scanComplete,a=i.isMemoryCeilingReached||i.keysTableRows.length>=(i.maxLoadedKeysLimit||1e5);n&&n.classList.toggle("active",o),e&&(e.innerHTML=`
      ${o?'<span style="color: var(--accent-primary); display: inline-flex; align-items: center; gap: 4px; margin-right: 4px;"><span class="spin" style="display: inline-block;">↻</span> Scanning...</span>':""}
      Loaded <strong>${i.totalScanned.toLocaleString()}</strong> / <strong>${Number(i.dbTotalKeys||0).toLocaleString()}</strong> keys
      ${a?'<span style="color: #fbbf24; margin-left: 4px; font-weight: 500;">(Ceiling)</span>':s?'<span style="color: var(--text-muted); margin-left: 4px; font-weight: 400;">(All)</span>':yt(i.currentCursor)?`<span style="color: var(--text-muted); margin-left: 4px;">(${p(yt(i.currentCursor))})</span>`:""}
    `),t&&(a?(t.disabled=!0,t.style.display="inline-flex",t.style.opacity="0.75",t.innerHTML=`<i data-lucide="shield-alert" style="width: 13px; height: 13px; color: #fbbf24;"></i> Memory Ceiling (${i.maxLoadedKeysLimit.toLocaleString()})`):(t.disabled=o||s,t.style.opacity="",t.style.display=s?"none":"inline-flex",t.innerHTML=o?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More'),g()),qi(),ee()}function Wi(){const e=document.getElementById("gridViewerContainer");e&&e.addEventListener("click",v=>{const k=v.target.closest(".btn-delete-key-table");if(k){v.stopPropagation();const M=decodeURIComponent(k.getAttribute("data-key"));it(M,()=>{q()});return}const $=v.target.closest(".btn-inspect-key");if($){v.stopPropagation();const M=decodeURIComponent($.getAttribute("data-key"));oe(M);return}const D=v.target.closest(".key-row");if(D){const M=decodeURIComponent(D.getAttribute("data-key"));oe(M);return}});const t=document.getElementById("keySearchInput");let n=null;t&&(t.addEventListener("input",()=>{const v=t.value,k=document.getElementById("btnClearSearchQuery");k&&(k.style.display=v.trim()&&v.trim()!=="*"?"inline-flex":"none"),i.searchScope==="local"?(i.localFilterQuery=v.trim(),Q(),ee()):(clearTimeout(n),n=setTimeout(()=>{i.currentPattern=v.trim()||"*"},300))}),t.addEventListener("keydown",v=>{if(v.key==="Enter"){clearTimeout(n);const k=t.value.trim()||"*";i.localFilterQuery=k;const $=Dt(k),D=k==="*"?(i.keysTableRows||[]).length:(i.keysTableRows||[]).filter(M=>$(M.key)).length;i.searchScope==="remote"||v.shiftKey||i.keysTableRows.length===0||i.searchScope==="local"&&D===0?(i.currentPattern=k,ve(),q()):(Q(),ee())}}));const o=document.getElementById("scopeBtnLocal"),s=document.getElementById("scopeBtnRemote");o&&o.addEventListener("click",()=>{i.searchScope="local";const v=document.getElementById("keySearchInput");v&&(i.localFilterQuery=v.value.trim()),Q(),ee()}),s&&s.addEventListener("click",()=>{i.searchScope="remote";const v=document.getElementById("keySearchInput");v&&(i.currentPattern=v.value.trim()||"*"),ee()});const a=document.getElementById("btnClearSearchQuery");a&&a.addEventListener("click",()=>{t&&(t.value="*",i.localFilterQuery="*",i.searchScope==="remote"&&(i.currentPattern="*"),Q(),ee(),t.focus())});const r=document.getElementById("typeFilterGroup");r&&r.addEventListener("click",v=>{const k=v.target.closest(".type-tab");k&&k.dataset.type&&(r.querySelectorAll(".type-tab").forEach($=>$.classList.remove("active")),k.classList.add("active"),i.currentType=k.dataset.type,i.searchScope==="local"&&i.keysTableRows.length>0?(Q(),ee()):(ve(),q()))});const l=document.getElementById("ttlFilterSelect");l&&l.addEventListener("change",v=>{i.currentTtlFilter=v.target.value,Q()});const c=document.getElementById("btnScanNext");c&&c.addEventListener("click",()=>Rt());const d=document.getElementById("btnResetScan");d&&d.addEventListener("click",()=>{ve(),q(!0)}),_i();const m=document.getElementById("btnOpenNamespaceModal");m&&m.addEventListener("click",()=>{Ri(_t)}),document.addEventListener("click",v=>{if(v.target&&v.target.id==="btnClearCacheSnapshot"){const k=ge();k&&Mi(k,i.lastStatus?.db||0).then(()=>{ke(null)})}});const y=document.getElementById("scanBatchSizeSelect");y&&y.addEventListener("change",v=>{i.scanBatchSize=parseInt(v.target.value,10)||50,Vi()});const f=document.getElementById("btnViewTable"),x=document.getElementById("btnViewTree");f&&f.addEventListener("click",()=>{i.currentViewMode!=="table"&&(i.currentViewMode="table",localStorage.setItem("redis_insight_view_mode","table"),f.classList.add("active"),x&&x.classList.remove("active"),Q())}),x&&x.addEventListener("click",()=>{i.currentViewMode!=="tree"&&(i.currentViewMode="tree",localStorage.setItem("redis_insight_view_mode","tree"),x.classList.add("active"),f&&f.classList.remove("active"),Q())});const w=document.getElementById("btnToggleAutoRefresh");w&&w.addEventListener("click",()=>{Fi()});const C=document.getElementById("autoRefreshIntervalSelect");C&&C.addEventListener("change",v=>{const k=parseInt(v.target.value,10);!isNaN(k)&&k>=5&&(i.autoRefreshIntervalSec=k,localStorage.setItem("redis_insight_auto_refresh_sec",String(k)),ve())}),se()}let je=null,Ue=null,Ve=null,V=null;function Gi(e,t,n){je=e,Ue=t,Ve=n}function Ji(e){if(V){try{V.abort()}catch{}V=null}i.isMemoryProfilingRunning=!1,i.currentMemoryOverview=null,i.currentMemoryAnalysis=null,i.memoryLoadedForConnId=null,qe(e),me({notice:"Cluster switched. Diagnostic caches cleared. Click below to profile the active cluster."})}function qe(e){const t=document.getElementById("memoryOverviewContainer");if(!t)return;const n=e||i.cachedConnections.find(c=>String(c.id)===String(i.selectedConnectionId)||c.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",s=n?n.host:i.lastStatus?.host||"127.0.0.1",a=n?n.port:i.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div class="mem-cluster-prompt-card" style="padding: 1.5rem; text-align: center; background: rgba(15,23,42,0.6); border: 1px dashed var(--border-subtle); border-radius: 8px;">
      <div style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; flex-wrap: wrap; justify-content: center;">
        <i data-lucide="server" style="width: 16px; height: 16px; color: #a78bfa;"></i>
        <strong style="color: var(--text-primary); font-size: 0.95rem;">${p(o)}</strong>
        <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">(${p(s)}:${a})</span>
        <span class="badge-env badge-env-${r.toLowerCase()}">${r}</span>
      </div>
      <p style="margin: 0.25rem 0 1rem; font-size: 0.8rem; color: var(--text-muted); max-width: 460px; margin-left: auto; margin-right: auto;">
        Cluster metrics ready. Click below to query live used memory, fragmentation ratio, and cache hit metrics.
      </p>
      <button type="button" class="btn btn-primary" id="btnLoadMemoryOverviewExplicit" style="padding: 0.45rem 1.15rem; font-size: 0.82rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        <span>Load Memory Overview</span>
      </button>
    </div>
  `,g();const l=document.getElementById("btnLoadMemoryOverviewExplicit");l&&l.addEventListener("click",()=>{lt()})}async function at(){O("memory"),i.memoryLoadedForConnId!==i.selectedConnectionId?qe():i.currentMemoryOverview?Nt(i.currentMemoryOverview):qe(),i.currentMemoryAnalysis&&i.currentMemoryAnalysis._target_conn_id===i.selectedConnectionId?rt(i.currentMemoryAnalysis):me()}function Qi(){O("keys")}async function lt(){const e=document.getElementById("memoryOverviewContainer");if(!e)return;const t=i.selectedConnectionId;e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,g();try{const n=await fetch("/api/memory/overview");if(!n.ok)throw new Error("Failed to fetch memory overview");const o=await n.json();if(i.selectedConnectionId!==t)return;i.currentMemoryOverview=o,i.memoryLoadedForConnId=t,Nt(i.currentMemoryOverview)}catch(n){if(i.selectedConnectionId!==t)return;e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${p(n.message)}</p>
        <button type="button" class="btn btn-secondary btn-sm" id="btnRetryMemOverview" style="margin-top: 0.5rem;">Retry</button>
      </div>
    `,g();const o=document.getElementById("btnRetryMemOverview");o&&(o.onclick=()=>lt())}}function Nt(e){const t=document.getElementById("memoryOverviewContainer");if(!t||!e)return;let n="mem-status-healthy",o="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(n="mem-status-critical",o="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(n="mem-status-warning",o=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),t.innerHTML=`
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
          RSS: <span style="font-family: var(--font-mono); color: var(--text-primary); font-weight: 600;">${e.used_memory_rss_human}</span> (${o})
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
          Max: <span style="font-family: var(--font-mono); color: var(--text-primary);">${e.maxmemory_human}</span> | Policy: ${p(e.maxmemory_policy)}
        </div>
      </div>
    </div>
  `,g()}function me(e={}){const t=document.getElementById("memoryProfilingContainer");if(!t)return;const n=i.cachedConnections.find(d=>String(d.id)===String(i.selectedConnectionId)||d.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",s=n?n.host:i.lastStatus?.host||"127.0.0.1",a=n?n.port:i.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase(),l=e?.notice;t.innerHTML=`
    ${l?`
      <div style="background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--radius-md); padding: 0.65rem 1rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #38bdf8;">
        <i data-lucide="info" style="width: 15px; height: 15px; flex-shrink: 0;"></i>
        <span>${p(l)}</span>
      </div>
    `:""}

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
      <div class="mem-safeguard-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="shield-check" style="width: 22px; height: 22px; color: #38bdf8;"></i>
          <span>Non-Blocking Keyspace Profiling & TTL Forecast</span>
        </div>
        <div style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.75rem; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); padding: 0.2rem 0.6rem; border-radius: 4px;">
          <span style="color: var(--text-muted);">Target:</span>
          <strong style="color: var(--accent-primary);">${p(o)}</strong>
          <span style="color: var(--text-muted); font-family: var(--font-mono);">(${p(s)}:${a})</span>
          <span class="badge-env badge-env-${r.toLowerCase()}">${r}</span>
        </div>
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
  `,g();const c=document.getElementById("btnStartProfilingAction");c&&c.addEventListener("click",()=>{const d=document.getElementById("memScanModeSelect")?.value||"sample",m=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,y=document.getElementById("memSamplePatternInput").value||"*";if(d==="full"){const f=document.getElementById("deepScanSafetyModal");if(f){f.classList.add("active"),g();const x=()=>f.classList.remove("active"),w=document.getElementById("btnCancelDeepScan"),C=document.getElementById("btnCloseDeepScanModal"),v=document.getElementById("btnConfirmDeepScan");w&&(w.onclick=x),C&&(C.onclick=x),v&&(v.onclick=()=>{x(),ht(m,y,"full")});return}}ht(m,y,d)})}async function ht(e=500,t="*",n="sample"){const o=document.getElementById("memoryProfilingContainer");if(!o)return;if(V)try{V.abort()}catch{}V=new AbortController;const s=V.signal,a=i.selectedConnectionId;i.isMemoryProfilingRunning=!0;const r=n==="full";o.innerHTML=`
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: ${r?"#f59e0b":"#a78bfa"}; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">
        ${r?"Running Deep Non-Blocking Cluster Scan...":"Analyzing Redis Keyspace..."}
      </h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 520px; margin: 0 auto 1.25rem; line-height: 1.5;">
        ${r?"Scanning across cluster primary nodes using non-blocking cursors with bounded concurrency pool and calculating TTL space reclaim forecast...":`Scanning sample of up to <strong>${e.toLocaleString()}</strong> keys (pattern <code>${p(t)}</code>) and measuring memory allocations...`}
      </p>
      <button type="button" class="btn btn-secondary" id="btnCancelMemoryProfiling" style="padding: 0.4rem 1rem; font-size: 0.8rem; border-color: rgba(239, 68, 68, 0.4); color: #f87171;">
        <i data-lucide="x-circle" style="width: 14px; height: 14px;"></i>
        Cancel Scan
      </button>
    </div>
  `,g();const l=document.getElementById("btnCancelMemoryProfiling");l&&(l.onclick=()=>{if(V)try{V.abort()}catch{}});try{const c=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:t,scan_mode:n}),signal:s});if(!c.ok)throw new Error("Failed to complete memory profiling");const d=await c.json();if(i.selectedConnectionId!==a){console.warn("Discarding memory profiling response for switched cluster:",a);return}d._target_conn_id=a,d._analyzed_at=new Date().toISOString(),i.currentMemoryAnalysis=d,i.isMemoryProfilingRunning=!1,rt(i.currentMemoryAnalysis)}catch(c){if(i.isMemoryProfilingRunning=!1,c.name==="AbortError"){me({notice:"Memory scan was cancelled."});return}if(i.selectedConnectionId===a){o.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Memory Profiling Failed</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(c.message)}</p>
          <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Back to Profiling Safeguards</button>
        </div>
      `,g();const d=document.getElementById("btnRetryProfiling");d&&(d.onclick=()=>me())}}finally{V&&V.signal===s&&(V=null)}}function rt(e){const t=document.getElementById("memoryProfilingContainer");if(!t||!e)return;const n=i.cachedConnections.find(l=>String(l.id)===String(e._target_conn_id||i.selectedConnectionId)||l.is_selected)||null;n?n.name:i.lastStatus?.connection_name,n?n.host:i.lastStatus?.host,n?n.port:i.lastStatus?.port,n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();const o=e._analyzed_at?new Date(e._analyzed_at).toLocaleTimeString():new Date().toLocaleTimeString(),s={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};t.innerHTML=`
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
        <div style="color: var(--border-subtle);">|</div>
        <div>
          <span style="color: var(--text-muted);">Analyzed:</span>
          <span style="color: var(--text-secondary); margin-left: 4px;">${p(o)}</span>
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
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.75rem;">
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

        <!-- Stacked Horizon Progress Bar -->
        <div style="margin-bottom: 1rem;">
          <div style="display: flex; justify-content: space-between; font-size: 0.74rem; color: var(--text-muted); margin-bottom: 0.35rem;">
            <span>Expiration Horizon Distribution (by RAM Footprint)</span>
            <span>Total Profiled: ${e.ttl_forecast.total_memory_profiled_human}</span>
          </div>
          <div class="mem-stacked-bar" style="height: 14px; border-radius: 6px;">
            ${(e.ttl_forecast.horizons||[]).map(l=>{const d={"< 1 Hour":"#10b981","1 - 24 Hours":"#06b6d4","1 - 7 Days":"#3b82f6","> 7 Days":"#8b5cf6","No Expiration (Persistent)":"#f43f5e"}[l.label]||"#94a3b8";return`
                <div class="mem-stacked-segment" style="width: ${l.memory_percentage}%; background: ${d};" title="${p(l.label)}: ${l.memory_percentage}% (${l.total_memory_human}, ${l.key_count.toLocaleString()} keys)"></div>
              `}).join("")}
          </div>
        </div>

        <!-- 5 Horizon Breakdown Cards (Single Unified Row) -->
        <div class="mem-ttl-kpi-grid" style="grid-template-columns: repeat(5, minmax(0, 1fr));">
          ${(e.ttl_forecast.horizons||[]).map(l=>{const d={"< 1 Hour":"#10b981","1 - 24 Hours":"#06b6d4","1 - 7 Days":"#3b82f6","> 7 Days":"#8b5cf6","No Expiration (Persistent)":"#f43f5e"}[l.label]||"#94a3b8";return`
              <div class="mem-ttl-kpi-item" style="border-top: 2px solid ${d};">
                <div class="kpi-label">${p(l.label)}</div>
                <div class="kpi-val" style="color: ${d};">${l.total_memory_human}</div>
                <div class="kpi-sub">${l.key_count.toLocaleString()} keys (${l.memory_percentage}%)</div>
              </div>
            `}).join("")}
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
              ${e.ttl_forecast.top_leak_namespaces.map(l=>`
                <tr>
                  <td>
                    <code style="font-family: var(--font-mono); font-weight: 600; color: #38bdf8; background: rgba(56,189,248,0.1); padding: 0.15rem 0.4rem; border-radius: 4px;">
                      ${p(l.namespace)}
                    </code>
                  </td>
                  <td style="font-family: var(--font-mono); color: var(--text-primary); font-weight: 600;">
                    ${l.key_count.toLocaleString()}
                  </td>
                  <td style="font-family: var(--font-mono); color: #f87171; font-weight: 700;">
                    ${l.total_memory_human}
                  </td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                      <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">${l.percentage_of_leaks}%</span>
                      <div style="width: 45px; height: 4px; background: rgba(255,255,255,0.06); border-radius: 9999px; overflow: hidden;">
                        <div style="width: ${Math.min(100,l.percentage_of_leaks)}%; height: 100%; background: #f43f5e; border-radius: 9999px;"></div>
                      </div>
                    </div>
                  </td>
                  <td style="text-align: right;">
                    <button type="button" class="btn btn-secondary btn-inspect-leak" data-namespace="${p(l.namespace)}" title="Filter keys in Keys Browser matching ${p(l.namespace)} with No TTL" style="padding: 0.25rem 0.55rem; font-size: 0.72rem;">
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
        ${e.types_breakdown.map(l=>{const c=s[l.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-stacked-segment" style="width: ${l.percentage}%; background: ${c};" title="${l.type.toUpperCase()}: ${l.percentage}% (${l.total_human})"></div>
          `}).join("")}
      </div>

      <!-- Type Cards Grid -->
      <div class="mem-type-cards-grid">
        ${e.types_breakdown.map(l=>{const c=s[l.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-type-card" style="border-left: 3px solid ${c};">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="type-badge ${l.type.toLowerCase()}" style="font-size: 0.68rem; padding: 0.1rem 0.4rem;">${l.type.toUpperCase()}</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--text-primary);">${l.percentage}%</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${c}; margin-top: 2px;">
                ${l.total_human}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-muted);">
                ${l.count.toLocaleString()} keys
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
        ${e.recommendations.map(l=>`
          <div class="recommendation-item">
            <span>${p(l)}</span>
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
        ${vt(e.top_bigkeys)}
      </div>
    </div>
  `,g();const a=document.getElementById("btnReRunProfiling");a&&a.addEventListener("click",me);const r=document.getElementById("bigkeysSearchInput");r&&r.addEventListener("input",()=>{const l=r.value.trim().toLowerCase(),c=l?e.top_bigkeys.filter(m=>m.key.toLowerCase().includes(l)||m.type.toLowerCase().includes(l)):e.top_bigkeys,d=document.getElementById("bigkeysTableContainer");d&&(d.innerHTML=vt(c),g(),bt())}),bt()}function vt(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const t=e[0]?e[0].memory_bytes:1;return`
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
        ${e.map((n,o)=>{let s="rank-normal";o===0?s="rank-gold":o===1?s="rank-silver":o===2&&(s="rank-bronze");const a=t>0?Math.max(5,Math.round(n.memory_bytes/t*100)):10;let r="No TTL (Persistent)",l="var(--text-muted)";return n.ttl>0&&(r=`${n.ttl.toLocaleString()}s`,l="var(--accent-warning)"),`
            <tr>
              <td>
                <span class="rank-badge ${s}">#${o+1}</span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <a href="javascript:void(0)" class="key-name-link bigkey-inspect-btn" data-key="${p(n.key)}" style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 600; color: #38bdf8; text-decoration: none;" title="Inspect key: ${p(n.key)}">
                    ${p(n.key)}
                  </a>
                  <button type="button" class="btn-copy-inline btn-copy-bigkey" data-key="${p(n.key)}" title="Copy key name">
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
                  <div style="width: ${a}%; height: 100%; background: #38bdf8; border-radius: 9999px;"></div>
                </div>
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">
                ${n.length.toLocaleString()}
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: ${l};">
                ${r}
              </td>
              <td style="text-align: right;">
                <div style="display: inline-flex; align-items: center; gap: 0.35rem;">
                  <button type="button" class="btn btn-secondary bigkey-inspect-btn" data-key="${p(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Inspect key detail">
                    <i data-lucide="external-link" style="width: 11px; height: 11px;"></i>
                    Inspect
                  </button>
                  ${i.lastStatus?.read_only?"":`
                    <button type="button" class="btn btn-danger bigkey-delete-btn" data-key="${p(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Delete oversized key">
                      <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
                    </button>
                  `}
                </div>
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function bt(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&je&&je(t)})}),document.querySelectorAll(".btn-copy-bigkey").forEach(e=>{e.addEventListener("click",async t=>{t.stopPropagation();const n=e.getAttribute("data-key");n&&await ie(n)&&(e.classList.add("copied"),e.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px;"></i>',g(),setTimeout(()=>{e.classList.remove("copied"),e.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',g()},1500))})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&Ue&&Ue(t,async()=>{i.currentMemoryAnalysis&&(i.currentMemoryAnalysis.top_bigkeys=i.currentMemoryAnalysis.top_bigkeys.filter(n=>n.key!==t),rt(i.currentMemoryAnalysis)),Ve&&await Ve()})})}),document.querySelectorAll(".btn-inspect-leak").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-namespace");if(t){i.currentPattern=t,i.currentTtlFilter="persistent";const n=document.getElementById("keySearchInput");n&&(n.value=t);const o=document.getElementById("ttlFilterSelect");o&&(o.value="persistent"),O("keys"),q()}})})}function Yi(){const e=document.getElementById("btnCloseMemoryModal");e&&e.addEventListener("click",Qi);const t=document.getElementById("btnOpenMemoryModal");t&&t.addEventListener("click",at);const n=document.getElementById("btnRefreshMemoryModal");n&&n.addEventListener("click",lt)}function Xi(e){i.allSlowlogEntries=[],i.slowlogLoadedForConnId=null;const t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),o=document.getElementById("slowlogFooterStats"),s=document.getElementById("slowlogNodeFilterContainer");t&&(t.textContent="0"),n&&(n.textContent="-"),o&&(o.textContent=""),s&&(s.innerHTML=""),zt(e)}function zt(e){const t=document.getElementById("slowlogTableContainer");if(!t)return;const n=e||i.cachedConnections.find(c=>String(c.id)===String(i.selectedConnectionId)||c.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",s=n?n.host:i.lastStatus?.host||"127.0.0.1",a=n?n.port:i.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 1rem;">
        <i data-lucide="clock" style="width: 24px; height: 24px; color: #38bdf8;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Slowlog for ${p(o)} (${p(s)}:${a})
        <span class="badge-env badge-env-${r.toLowerCase()}" style="margin-left: 0.4rem; vertical-align: middle;">${r}</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 1.25rem; line-height: 1.5;">
        Cluster switched. Diagnostics cache cleared. Click below to inspect query latency logs across this Redis instance/cluster.
      </p>
      <button type="button" class="btn btn-primary" id="btnFetchSlowlogExplicit" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        Fetch Slowlog Entries
      </button>
    </div>
  `,g();const l=document.getElementById("btnFetchSlowlogExplicit");l&&(l.onclick=()=>Le())}async function Ft(){O("slowlog"),i.currentSlowlogMinDuration=0,i.currentSlowlogSearch="",i.currentSlowlogNode="all";const e=document.getElementById("btnClearSlowlogModal");e&&(e.style.display=i.lastStatus?.read_only?"none":""),document.querySelectorAll(".slowlog-filter-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-min-duration")==="0")});const t=document.getElementById("slowlogSearchInput");t&&(t.value=""),i.slowlogLoadedForConnId!==i.selectedConnectionId?zt():ue()}function Zi(){O("keys")}async function Le(){const e=document.getElementById("slowlogTableContainer"),t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),o=document.getElementById("slowlogFooterStats"),s=i.selectedConnectionId;e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,g());try{const a=await fetch("/api/slowlog?limit=250");if(!a.ok)throw new Error("Failed to fetch slowlog");const r=await a.json();if(i.selectedConnectionId!==s)return;if(i.allSlowlogEntries=r.entries||[],i.slowlogLoadedForConnId=s,t&&(t.textContent=i.allSlowlogEntries.length),n&&r.slower_than_us!==null&&r.slower_than_us!==void 0){const l=(r.slower_than_us/1e3).toFixed(1);n.textContent=`Threshold: > ${l}ms (${r.slower_than_us} µs)`}o&&(o.textContent=`Total buffer: ${r.total_len||i.allSlowlogEntries.length} entries | Max buffer: ${r.max_len||"N/A"}`),eo(i.allSlowlogEntries),ue()}catch(a){if(i.selectedConnectionId!==s)return;if(e){e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(a.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetrySlowlog" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,g();const r=document.getElementById("btnRetrySlowlog");r&&(r.onclick=()=>Le())}}}function eo(e){const t=document.getElementById("slowlogNodeFilterContainer");if(!t)return;const n=Array.from(new Set(e.map(s=>s.node).filter(Boolean)));if(n.length<=1){t.innerHTML="";return}t.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${n.length})</option>
      ${n.map(s=>`<option value="${p(s)}" ${i.currentSlowlogNode===s?"selected":""}>${p(s)}</option>`).join("")}
    </select>
  `;const o=document.getElementById("slowlogNodeSelect");o&&o.addEventListener("change",()=>{i.currentSlowlogNode=o.value,ue()})}function ue(){let e=i.allSlowlogEntries;if(i.currentSlowlogMinDuration>0&&(e=e.filter(t=>t.duration_ms>=i.currentSlowlogMinDuration)),i.currentSlowlogNode&&i.currentSlowlogNode!=="all"&&(e=e.filter(t=>t.node===i.currentSlowlogNode)),i.currentSlowlogSearch){const t=i.currentSlowlogSearch.toLowerCase();e=e.filter(n=>{const o=(n.command||[]).join(" ").toLowerCase(),s=(n.client_ip||"").toLowerCase(),a=(n.node||"").toLowerCase();return o.includes(t)||s.includes(t)||a.includes(t)||String(n.id).includes(t)})}to(e)}function to(e){const t=document.getElementById("slowlogTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
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
        ${e.map(n=>{let o="badge-duration-fast";n.duration_ms>=50?o="badge-duration-critical":n.duration_ms>=10&&(o="badge-duration-warning");const s=n.command&&n.command.length>0?n.command.join(" "):"(empty)";return`
            <tr>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">#${n.id}</td>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); white-space: nowrap;">
                ${p(n.time_str||"N/A")}
              </td>
              <td>
                <span class="badge-duration ${o}">
                  <i data-lucide="clock" style="width: 11px; height: 11px;"></i>
                  ${n.duration_ms} ms
                </span>
                <span style="font-size: 0.68rem; color: var(--text-muted); display: block; margin-top: 2px; font-family: var(--font-mono);">
                  ${n.duration_us.toLocaleString()} µs
                </span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <span class="slowlog-cmd-code" title="${p(s)}">${p(s)}</span>
                  <button type="button" class="btn-copy-inline btn-copy-slowlog-cmd" data-cmd="${p(s)}" title="Copy full command">
                    <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
                  </button>
                </div>
              </td>
              <td>
                ${n.node?`<span class="slowlog-node-pill">${p(n.node)}</span>`:'<span style="color: var(--text-muted); font-size: 0.75rem;">Default</span>'}
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                ${p(n.client_ip||"Unknown")}
                ${n.client_name?`<span style="color: var(--text-muted); display: block; font-size: 0.7rem;">(${p(n.client_name)})</span>`:""}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,g(),document.querySelectorAll(".btn-copy-slowlog-cmd").forEach(n=>{n.addEventListener("click",async o=>{o.stopPropagation();const s=n.getAttribute("data-cmd");s&&await ie(s)&&(n.classList.add("copied"),n.innerHTML='<i data-lucide="check" style="width: 12px; height: 12px;"></i>',g(),setTimeout(()=>{n.classList.remove("copied"),n.innerHTML='<i data-lucide="copy" style="width: 12px; height: 12px;"></i>',g()},1500))})})}}async function no(){if(i.lastStatus?.read_only){S("Slowlog reset is disabled in Read-Only mode.","warning");return}if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");S("Slowlog buffer reset successfully","success"),await Le()}catch(e){S("Error resetting slowlog: "+e.message,"error")}}function io(){const e=document.getElementById("btnCloseSlowlogModal");e&&e.addEventListener("click",Zi);const t=document.getElementById("btnOpenSlowlog");t&&t.addEventListener("click",Ft);const n=document.getElementById("btnRefreshSlowlogModal");n&&n.addEventListener("click",Le);const o=document.getElementById("btnClearSlowlogModal");o&&o.addEventListener("click",no);const s=document.getElementById("slowlogSearchInput");s&&s.addEventListener("input",()=>{i.currentSlowlogSearch=s.value.trim(),ue()}),document.querySelectorAll(".slowlog-filter-btn").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(r=>r.classList.remove("active")),a.classList.add("active"),i.currentSlowlogMinDuration=parseInt(a.getAttribute("data-min-duration")||"0",10),ue()})})}let We=null;function oo(e){We=e}async function so(){const e=document.getElementById("keyspaceNodesModal");e&&(e.classList.add("active"),Ot(i.lastStatus),await Ht())}function xt(){const e=document.getElementById("keyspaceNodesModal");e&&e.classList.remove("active")}async function Ht(){try{const e=await fetch("/api/status");if(!e.ok)throw new Error("Failed to load node stats");i.lastStatus=await e.json(),Ot(i.lastStatus)}catch(e){const t=document.getElementById("keyspaceNodesContainer");t&&(t.innerHTML=`<div style="padding: 2rem; text-align: center; color: var(--accent-danger);">${p(e.message)}</div>`)}}function Ot(e){const t=document.getElementById("keyspaceNodesContainer"),n=document.getElementById("keyspaceTotalBadge");if(!t||!e)return;const o=e.node_stats||[],s=o.filter(m=>m.role==="master"),a=s.reduce((m,y)=>m+(y.keys||0),0);if(n&&(n.textContent=`${a.toLocaleString()} keys`),s.length===0){t.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Per-node breakdown is only available for cluster connections.</div>';return}const r=m=>m==null?"—":Number(m).toLocaleString(),l=(m,y="left")=>`<th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: ${y};">${m}</th>`,c=(m,y="")=>`<td style="padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; ${y}">${m}</td>`,d=s.map(m=>{const y=a>0&&m.keys!==null?(m.keys/a*100).toFixed(1):"0.0",f=o.filter(C=>C.role==="replica"&&C.master===m.node),x=`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        ${c(`<span class="role-badge-master">MASTER</span> <span style="color: var(--text-primary); font-weight: 600; margin-left: 6px;">${p(m.node)}</span>`)}
        ${c(m.error?`<span style="color: var(--accent-danger);" title="${p(m.error)}">unreachable</span>`:r(m.keys),"text-align: right; color: var(--text-primary); font-weight: 600;")}
        ${c(`${y}%`,"text-align: right; color: var(--text-secondary);")}
        ${c(p(m.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
        ${c(r(m.connected_clients),"text-align: right; color: #38bdf8;")}
      </tr>`,w=f.map(C=>{const v=C.keys!==null&&m.keys!==null?C.keys-m.keys:null,k=v===null?"":v===0?'<span style="color: var(--accent-success); margin-left: 6px;">in sync</span>':`<span style="color: var(--accent-warning); margin-left: 6px;" title="Replica key count differs from its master (replication lag or expiring keys)">${v>0?"+":""}${v.toLocaleString()}</span>`;return`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(0,0,0,0.12);">
        ${c(`<span style="color: var(--text-muted); margin-left: 0.75rem;">↳</span> <span class="role-badge-replica">REPLICA</span> <span style="color: var(--text-secondary); margin-left: 6px;">${p(C.node)}</span>`)}
        ${c(C.error?`<span style="color: var(--accent-danger);" title="${p(C.error)}">unreachable</span>`:`${r(C.keys)}${k}`,"text-align: right; color: var(--text-secondary);")}
        ${c("","")}
        ${c(p(C.used_memory_human||"—"),"text-align: right; color: var(--text-muted);")}
        ${c(r(C.connected_clients),"text-align: right; color: var(--text-muted);")}
      </tr>`}).join("");return x+w}).join("");t.innerHTML=`
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${l("NODE")}${l("KEYS","right")}${l("SHARE","right")}${l("MEMORY","right")}${l("CLIENTS","right")}</tr>
      </thead>
      <tbody>${d}</tbody>
      <tfoot>
        <tr>
          ${c("Cluster total (masters)","color: var(--text-muted); font-family: inherit;")}
          ${c(a.toLocaleString(),"text-align: right; color: var(--accent-primary); font-weight: 700;")}
          ${c("100%","text-align: right; color: var(--text-muted);")}
          ${c(p(e.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
          ${c("","")}
        </tr>
      </tfoot>
    </table>
  `,g()}function ao(e){i.currentTopologyData=null,i.topologyLoadedForConnId=null;const t=document.getElementById("topologyStatsGrid"),n=document.getElementById("topologyNodesCountBadge"),o=document.getElementById("tabBadgeTopology");t&&(t.innerHTML=""),n&&(n.textContent="-"),o&&(o.textContent="-"),Kt(e)}function Kt(e){const t=document.getElementById("topologyTableContainer"),n=document.getElementById("topologyEnvBadge");if(!t)return;const o=e||i.cachedConnections.find(m=>String(m.id)===String(i.selectedConnectionId)||m.is_selected)||null,s=o?o.name:i.lastStatus?.connection_name||"Active Cluster",a=o?o.host:i.lastStatus?.host||"127.0.0.1",r=o?o.port:i.lastStatus?.port||6379,l=o?(o.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();n&&(n.textContent=l,n.className=`badge-env badge-env-${l.toLowerCase()}`);const c=document.getElementById("topologySearchInput");c&&(c.disabled=!0,c.placeholder="Load cluster topology to filter nodes..."),t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); margin-bottom: 1rem;">
        <i data-lucide="network" style="width: 24px; height: 24px; color: #c084fc;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Topology Map for ${p(s)} (${p(a)}:${r})
        <span class="badge-env badge-env-${l.toLowerCase()}" style="margin-left: 0.4rem; vertical-align: middle;">${l}</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 1.25rem; line-height: 1.5;">
        Cluster switched. Diagnostics cache cleared. Click below to inspect cluster nodes, primary/replica roles, and hash slot distribution.
      </p>
      <button type="button" class="btn btn-primary" id="btnFetchTopologyExplicit" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        Load Cluster Topology
      </button>
    </div>
  `,g();const d=document.getElementById("btnFetchTopologyExplicit");d&&(d.onclick=()=>Te())}async function le(e=null,t=!1){if(O("topology"),e&&We){const n=document.querySelector(`.conn-card[data-id="${e}"]`);n&&!n.classList.contains("active")&&await We(e)}i.topologyLoadedForConnId!==i.selectedConnectionId||!i.currentTopologyData?t?Te():Kt():(jt(i.currentTopologyData),Ee())}function lo(){O("keys")}async function Te(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),t=document.getElementById("topologyNodesCountBadge"),n=document.getElementById("tabBadgeTopology"),o=document.getElementById("topologyEnvBadge"),s=i.selectedConnectionId,a=i.cachedConnections.find(r=>r.id===s||r.is_selected);if(a&&o){const r=(a.env||"LOCAL").toUpperCase();o.textContent=r,o.className=`badge-env badge-env-${r.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,g());try{const r=await fetch("/api/topology");if(!r.ok)throw new Error("Failed to load cluster topology");const l=await r.json();if(i.selectedConnectionId!==s)return;i.currentTopologyData=l,i.topologyLoadedForConnId=s;const c=`${l.total_nodes} Node${l.total_nodes!==1?"s":""}`;t&&(t.textContent=c),n&&(n.textContent=c);const d=document.getElementById("topologySearchInput");d&&(d.disabled=!1,d.placeholder="Filter nodes by IP, port, node ID, or slot..."),jt(l),Ee()}catch(r){if(i.selectedConnectionId!==s)return;if(e){e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${p(r.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetryTopology" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,g();const l=document.getElementById("btnRetryTopology");l&&(l.onclick=()=>Te())}}}function jt(e){const t=document.getElementById("topologyStatsGrid");if(!t)return;const n=e.is_cluster,o=(e.cluster_state||"").toLowerCase()==="ok"||!n;t.innerHTML=`
    <div class="topology-stat-card">
      <span class="topology-stat-label">Cluster State</span>
      <span class="topology-stat-value" style="color: ${o?"var(--accent-success)":"var(--accent-danger)"}; display: flex; align-items: center; gap: 0.4rem;">
        <span class="link-dot ${o?"connected":"disconnected"}"></span>
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
  `}function Ee(){const e=document.getElementById("topologyTableContainer");if(!e||!i.currentTopologyData)return;const t=i.currentTopologyData.nodes||[],n=(i.currentTopologySearch||"").trim().toLowerCase(),o=i.currentTopologyRole,s=t.filter(a=>{if(o!=="all"&&a.role.toLowerCase()!==o)return!1;if(n){const r=(a.addr||"").toLowerCase().includes(n),l=(a.id||"").toLowerCase().includes(n),c=(a.ip||"").toLowerCase().includes(n),d=(a.slots||"").toLowerCase().includes(n);if(!r&&!l&&!c&&!d)return!1}return!0});if(s.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
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
        ${s.map(a=>{const r=a.role==="master",l=(a.link_state||"connected").toLowerCase()==="connected",c=a.id?a.id.length>12?`${a.id.substring(0,10)}...`:a.id:"N/A",d=a.slots?`${a.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${a.slot_count||0} slots)</span>`:r?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${p(a.id||"")}">${p(c)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${r?"role-badge-master":"role-badge-replica"}">${a.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${p(a.addr||`${a.ip}:${a.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem; text-align: right; color: ${r?"var(--text-primary)":"var(--text-secondary)"};">
                ${a.keys===null||a.keys===void 0?"—":Number(a.keys).toLocaleString()}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${l?"connected":"disconnected"}"></span>
                <span style="color: ${l?"var(--accent-success)":"var(--accent-danger)"};">${a.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${d}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                ${a.master_id?`<span title="${p(a.master_id)}">↳ ${p(a.master_id.substring(0,8))}...</span>`:"—"}
              </td>
              <td style="padding: 0.65rem 0.85rem; text-align: right; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
                ${(a.flags||[]).join(", ")||"none"}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,g()}function ro(){const e=document.getElementById("btnOpenBulkDeleteModal");e&&(i.lastStatus?.read_only?(e.disabled=!0,e.style.opacity="0.4",e.style.cursor="not-allowed",e.title="🔒 Bulk Delete is disabled in Read-Only mode"):(e.disabled=!1,e.style.opacity="1",e.style.cursor="pointer",e.title="Bulk delete matched keys (Dry-run & confirmation required)"))}function co(){const e=document.getElementById("btnCloseTopologyModal");e&&e.addEventListener("click",lo);const t=document.getElementById("btnOpenTopologyTop");t&&t.addEventListener("click",()=>le(null,!0));const n=document.getElementById("btnRefreshTopologyModal");n&&n.addEventListener("click",Te);const o=document.getElementById("topologySearchInput");o&&o.addEventListener("input",()=>{i.currentTopologySearch=o.value.trim(),Ee()});const s=document.getElementById("topologyRoleFilter");s&&s.addEventListener("click",c=>{const d=c.target.closest(".type-tab");d&&d.dataset.role&&(s.querySelectorAll(".type-tab").forEach(m=>m.classList.remove("active")),d.classList.add("active"),i.currentTopologyRole=d.dataset.role,Ee())});const a=document.getElementById("btnCloseKeyspaceModal");a&&a.addEventListener("click",xt);const r=document.getElementById("btnRefreshKeyspaceModal");r&&r.addEventListener("click",Ht);const l=document.getElementById("btnKeyspaceOpenTopology");l&&l.addEventListener("click",()=>{xt(),le()})}let Ge=null;function po(e){Ge=e}function mo(e){i.allConnectedClients=[],i.clientsLoadedForConnId=null;const t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats");t&&(t.textContent="0"),n&&(n.textContent=""),Ut(e)}function Ut(e){const t=document.getElementById("clientsTableContainer");if(!t)return;const n=e||i.cachedConnections.find(c=>String(c.id)===String(i.selectedConnectionId)||c.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",s=n?n.host:i.lastStatus?.host||"127.0.0.1",a=n?n.port:i.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 1rem;">
        <i data-lucide="users" style="width: 24px; height: 24px; color: #38bdf8;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Connected Clients for ${p(o)} (${p(s)}:${a})
        <span class="badge-env badge-env-${r.toLowerCase()}" style="margin-left: 0.4rem; vertical-align: middle;">${r}</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 1.25rem; line-height: 1.5;">
        Cluster switched. Diagnostics cache cleared. Click below to inspect active connected clients, query states, and ident flags.
      </p>
      <button type="button" class="btn btn-primary" id="btnFetchClientsExplicit" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        Fetch Connected Clients
      </button>
    </div>
  `,g();const l=document.getElementById("btnFetchClientsExplicit");l&&(l.onclick=()=>Ie())}async function ct(){O("clients"),i.clientsLoadedForConnId!==i.selectedConnectionId?Ut():Vt(i.allConnectedClients)}function uo(){O("keys")}async function Ie(){const e=document.getElementById("clientsTableContainer"),t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats"),o=document.getElementById("clientsSearchInput"),s=i.selectedConnectionId;e&&(e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',g());try{const a=await fetch("/api/clients");if(!a.ok)throw new Error("Failed to load connected clients");const r=await a.json();if(i.selectedConnectionId!==s)return;i.allConnectedClients=r,i.clientsLoadedForConnId=s,t&&(t.textContent=i.allConnectedClients.length),n&&(n.textContent=`${i.allConnectedClients.length} total connections`),o&&(o.value=""),Je()}catch(a){if(i.selectedConnectionId!==s)return;if(e){e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error loading clients</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(a.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetryClients" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,g();const r=document.getElementById("btnRetryClients");r&&(r.onclick=()=>Ie())}}}let pe=!1;function Je(){const e=document.getElementById("clientsSearchInput"),t=e?e.value.trim().toLowerCase():"";let n=i.allConnectedClients||[];pe&&(n=n.filter(o=>!o.is_current_app)),t&&(n=n.filter(o=>(o.addr||"").toLowerCase().includes(t)||(o.name||"").toLowerCase().includes(t)||(o.user||"").toLowerCase().includes(t)||(o.cmd||"").toLowerCase().includes(t)||String(o.id).includes(t))),Vt(n)}function Vt(e){const t=document.getElementById("clientsTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
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
                <span style="${n.is_current_app?"color: #38bdf8;":""}">${p(n.name)}</span>
                ${n.is_current_app?'<span class="badge-db" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); font-size: 0.65rem; font-weight: 600;">THIS APP</span>':""}
                ${n.flags&&n.flags.includes("O")?'<span class="badge-db" style="background: rgba(234, 179, 8, 0.15); color: #fde047; font-size: 0.65rem;">MONITOR</span>':""}
              </div>
              <div class="client-sub-text">User: ${p(n.user)} | Flags: ${p(n.flags||"none")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div class="client-ip-cell">${p(n.addr)}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem;">
              DB${n.db}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <span class="client-cmd-badge">${p(n.cmd||"idle")}</span>
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
                <button type="button" class="btn-icon danger btn-kill-client" data-id="${n.id}" data-addr="${p(n.addr)}" title="Disconnect client">
                  <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                </button>
              `}
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,g(),t.querySelectorAll(".btn-kill-client").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-id"),s=n.getAttribute("data-addr");yo(o,s)})})}}async function yo(e,t){if(i.lastStatus?.read_only){S("Client disconnection is disabled in Read-Only mode.","warning");return}if(confirm(`Are you sure you want to disconnect client #${e} (${t})?`))try{const n=await fetch(`/api/clients/${e}`,{method:"DELETE"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to disconnect client");S(`Disconnected client #${e}`,"success"),await Ie(),Ge&&await Ge()}catch(n){S("Error disconnecting client: "+n.message,"error")}}function go(){const e=document.getElementById("btnCloseClientsModal");e&&e.addEventListener("click",uo);const t=document.getElementById("btnOpenClientsModal");t&&t.addEventListener("click",ct);const n=document.getElementById("btnRefreshClientsModal");n&&n.addEventListener("click",Ie);const o=document.getElementById("clientsSearchInput");o&&o.addEventListener("input",()=>{Je()});const s=document.getElementById("btnToggleHideInternalClients");s&&s.addEventListener("click",()=>{pe=!pe,s.classList.toggle("active",pe),pe?(s.style.borderColor="var(--accent-primary)",s.style.color="var(--accent-primary)"):(s.style.borderColor="",s.style.color=""),Je()})}let te=null,A=[],W=null,G=null,qt=[];function fo(e,t){W=e,G=t}function ho(e){typeof e=="function"&&qt.push(e)}function Wt(e){const t=e||i.cachedConnections.find(v=>v.id===i.selectedConnectionId||v.is_selected)||null,n=t?t.name:i.lastStatus?.connection_name||"Active Target",o=t?t.host:i.lastStatus?.host||"127.0.0.1",s=t?t.port:i.lastStatus?.port||6379,a=(t?t.env||"LOCAL":i.lastStatus?.env||"LOCAL").toUpperCase(),l=(t?t.conn_type||"standalone":i.lastStatus?.is_cluster?"cluster":"standalone")==="cluster"||i.lastStatus?.is_cluster,c=i.lastStatus?.read_only,d=`
    <span>Target:</span>
    <strong class="context-conn-name" style="color: var(--text-primary); font-weight: 600;">${p(n)}</strong>
    <span class="context-conn-endpoint" style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.72rem;">(${p(o)}:${s})</span>
    <span class="badge-env badge-env-${a.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">${a}</span>
    <span class="top-conn-tag" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">${l?"CLUSTER":"STANDALONE"}</span>
    ${c?'<span class="badge-readonly" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;"><i data-lucide="lock" style="width: 10px; height: 10px; vertical-align: middle;"></i> READ ONLY</span>':""}
  `,m=document.getElementById("benchmarkTargetSubtitle");m&&(m.innerHTML=d+' <span style="color: var(--text-muted); font-size: 0.7rem;">| Namespace: __ri_bench__</span>');const y=document.getElementById("memoryTargetSubtitle");y&&(y.innerHTML=d);const f=document.getElementById("slowlogTargetSubtitle");f&&(f.innerHTML=d);const x=document.getElementById("topologyTargetSubtitle");x&&(x.innerHTML=d);const w=document.getElementById("clientsTargetSubtitle");w&&(w.innerHTML=d);const C=document.getElementById("keysTargetText");C&&(C.innerHTML=`
      <span class="target-conn-name">${p(n)}</span>
      <span class="target-endpoint">(${p(o)}:${s})</span>
    `),g()}function dt(e){const t=i.cachedConnections.find(n=>n.id===e)||null;Wt(t);for(const n of qt)try{n(t)}catch(o){console.warn("Error running cluster-switched callback:",o)}}async function X(){const e=document.getElementById("connectionsList");try{const[t,n]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]),o=await t.json();if(i.cachedConnections=o||[],i.selectedConnectionId){const s=i.cachedConnections.find(a=>a.id===i.selectedConnectionId);if(s&&s.is_connected)i.cachedConnections.forEach(a=>{a.is_selected=a.id===i.selectedConnectionId});else{const a=i.cachedConnections.find(r=>r.is_selected&&r.is_connected)||i.cachedConnections.find(r=>r.is_connected);a&&(i.selectedConnectionId=a.id,localStorage.setItem("redis_insight_selected_conn_id",a.id),i.cachedConnections.forEach(r=>{r.is_selected=r.id===a.id}))}}else{const s=i.cachedConnections.find(a=>a.is_selected&&a.is_connected)||i.cachedConnections.find(a=>a.is_connected);s&&(i.selectedConnectionId=s.id,localStorage.setItem("redis_insight_selected_conn_id",s.id))}if(n.ok){const s=await n.json();i.currentLimit=s.limit||2}Qe()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function Gt(e,t){const n=document.getElementById("connectedCountDisplay"),o=document.getElementById("connLimitDisplay"),s=document.getElementById("connLimitSelect"),a=document.getElementById("limitProgressDots"),r=document.getElementById("limitCountPill");if(n&&(n.textContent=e),o&&(o.textContent=t),s&&String(s.value)!==String(t)&&(s.value=String(t)),r&&(e>=t&&t>0?(r.classList.add("at-limit"),r.title="Connection limit reached"):(r.classList.remove("at-limit"),r.title=`${e} of ${t} connections in use`)),a){let l="";for(let c=0;c<t;c++){const d=c<e;l+=`<span class="limit-slot-dot ${d?"filled":"empty"}" title="Slot ${c+1}: ${d?"Connected":"Available"}"></span>`}a.innerHTML=l}}function Qe(){const e=document.getElementById("connectionsList");if(!e)return;const t=document.getElementById("totalConnCountBadge");t&&(t.textContent=i.cachedConnections.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(l=>{const c=l.getAttribute("data-env");let d=0;c==="ALL"?d=i.cachedConnections.length:d=i.cachedConnections.filter(m=>(m.env||"LOCAL").toUpperCase()===c).length,l.textContent=`${c} (${d})`});const o=(i.currentConnSearch||"").trim().toLowerCase(),s=i.currentEnvFilter,a=i.cachedConnections.filter(l=>{if(s!=="ALL"&&(l.env||"LOCAL").toUpperCase()!==s)return!1;if(o){const c=(l.name||"").toLowerCase().includes(o),d=(l.host||"").toLowerCase().includes(o),m=(l.env||"").toLowerCase().includes(o),y=(l.conn_type||"").toLowerCase().includes(o);if(!c&&!d&&!m&&!y)return!1}return!0});a.sort((l,c)=>{const d=l.is_connected?1:0,m=c.is_connected?1:0;if(m!==d)return m-d;const y=l.is_selected?1:0,f=c.is_selected?1:0;return f!==y?f-y:(l.name||"").localeCompare(c.name||"")});const r=i.cachedConnections.filter(l=>l.is_connected).length;if(Gt(r,i.currentLimit),a.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${o?`No results found for "${p(o)}"`:`No connections configured in ${p(s)}`}
        </span>
      </div>
    `,g();return}e.innerHTML=a.map(l=>{const c=(l.env||"LOCAL").toUpperCase(),d=`badge-env-${c.toLowerCase()}`,m=l.conn_type==="cluster",y=l.conn_type==="sentinel",f=l.source==="config",x=!!l.is_connected,w=!!l.is_selected;return`
      <div class="conn-card ${x?"is-connected":""} ${w?"selected active":""}" data-id="${l.id}" title="Click to review config & connection options">
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${w?`
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

          <div class="conn-title-wrap" style="display: flex; align-items: center; gap: 0.35rem; min-width: 0; flex: 1;">
            <span class="conn-name" title="${p(l.name)}">${p(l.name)}</span>
            <span class="badge-env ${d}" style="font-size: 0.62rem; padding: 0.05rem 0.35rem; flex-shrink: 0;">${c}</span>
          </div>

          <div class="conn-status-badge-wrap">
            ${w?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:x?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${p(l.host)}:${l.port}">
            <i data-lucide="${m?"network":y?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${p(l.host)}:${l.port}</span>
          </div>

          <div class="conn-tags">
            ${l.read_only?'<span class="badge-readonly" title="Read-Only Mode: Mutating operations locked">🔒 RO</span>':""}
            ${m?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${y?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!m&&!y?`<span class="badge-db">DB${l.db}</span>`:""}
            ${l.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${l.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${f?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${x?`
            ${w?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${l.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${l.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${m||x?`
              <button type="button" class="btn-hover-action btn-view-topology-card" data-id="${l.id}" title="View topology & nodes">
                <i data-lucide="layers" style="width: 11px; height: 11px;"></i>
              </button>
            `:""}
          `:`
            <button type="button" class="btn-hover-action btn-hover-connect btn-card-open-config" data-id="${l.id}" title="Review config & Connect">
              <i data-lucide="play" style="width: 11px; height: 11px;"></i>
              <span>Connect</span>
            </button>
            ${f?"":`
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${l.id}" data-name="${p(l.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>
      </div>
    `}).join(""),g(),e.querySelectorAll(".conn-card").forEach(l=>{l.addEventListener("click",c=>{if(c.target.closest(".btn-delete-conn")||c.target.closest(".btn-view-topology-card")||c.target.closest(".btn-card-disconnect")||c.target.closest(".btn-card-select")||c.target.closest(".btn-card-open-config"))return;const d=l.getAttribute("data-id"),m=i.cachedConnections.find(y=>y.id===d);m&&Ye(m)})}),e.querySelectorAll(".btn-card-disconnect").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const d=l.getAttribute("data-id");await pt(d)})}),e.querySelectorAll(".btn-card-select").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const d=l.getAttribute("data-id");await Qt(d)})}),e.querySelectorAll(".btn-card-open-config").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const d=l.getAttribute("data-id"),m=i.cachedConnections.find(y=>y.id===d);m&&Ye(m)})}),e.querySelectorAll(".btn-view-topology-card").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const d=l.getAttribute("data-id");await le(d)})}),e.querySelectorAll(".btn-delete-conn").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const d=l.getAttribute("data-id"),m=l.getAttribute("data-name");confirm(`Are you sure you want to delete '${m}'?`)&&await xo(d)})})}function vo(e){if(!e)return[];if(Array.isArray(e))return e.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t));if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n))}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}return[]}function Ye(e){i.activeConfigConn=e;const t=document.getElementById("clusterConfigModal"),n=document.getElementById("cfgModalTitle"),o=document.getElementById("cfgModalSubtitle"),s=document.getElementById("cfgModalBody"),a=document.getElementById("cfgModalFooter");if(!t||!s||!a)return;n&&(n.textContent=e.name||"Cluster Configuration"),o&&(o.textContent="Review configuration before connecting");const r=!!e.is_connected,l=!!e.is_selected,c=e.conn_type==="cluster",d=vo(e.cluster_nodes),m=i.cachedConnections.filter(D=>D.is_connected).length,y=!r&&m>=i.currentLimit;s.innerHTML=`
    <div class="config-status-banner ${r?"connected":"disconnected"}">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="${r?"check-circle-2":"alert-circle"}" style="width: 18px; height: 18px;"></i>
        <span>${r?"Connected & Live":"Not Connected"}</span>
      </div>
      <div>
        ${l?'<span class="badge-selected-cluster">ACTIVE / VIEWING KEYS</span>':r?'<span class="badge-connected-cluster">CONNECTED</span>':'<span style="font-size: 0.75rem; color: var(--text-muted);">Ready to connect</span>'}
      </div>
    </div>

    <div class="config-grid">
      <div class="config-grid-row">
        <span class="config-label">Cluster / Instance Name</span>
        <span class="config-value">${p(e.name)}</span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Environment</span>
        <span class="config-value">
          <span class="badge-env badge-env-${(e.env||"LOCAL").toLowerCase()}">${(e.env||"LOCAL").toUpperCase()}</span>
        </span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Connection Type</span>
        <span class="config-value" style="text-transform: capitalize;">${p(e.conn_type||"standalone")}</span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Host / Seed Node</span>
        <span class="config-value" style="color: var(--accent-primary);">${p(e.host)}:${e.port}</span>
      </div>
      ${c&&(d.length>0||e.cluster_nodes)?`
        <div class="config-grid-row config-grid-seeds-row">
          <span class="config-label" style="padding-top: 2px;">
            Seed Endpoints ${d.length>0?`(${d.length})`:""}
          </span>
          <div class="config-seeds-container">
            ${d.length>0?d.map(D=>`
                  <span class="seed-node-pill" title="${p(D)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${p(D)}
                  </span>
                `).join(""):`<span class="seed-node-pill">${p(e.cluster_nodes)}</span>`}
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
          ${e.username?p(e.username):"default"} / ${e.has_password?"•••••••• (Encrypted)":"None"}
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
      <span>Connected Limit: <strong>${m} of ${i.currentLimit}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${y?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${i.currentLimit} maximum). Please disconnect a connected cluster first or increase the limit.</span>
      </div>
    `:""}

    <div id="cfgTestResultBox" class="test-result-box" style="margin-top: 0.65rem;"></div>
  `,r?a.innerHTML=`
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
        ${l?`
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
    `:a.innerHTML=`
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
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${y?"disabled":""}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `,g(),t.classList.add("active");const f=document.getElementById("btnCloseConfigModal");f&&(f.onclick=()=>t.classList.remove("active"));const x=document.getElementById("btnEditFromConfig");x&&(x.onclick=()=>{t.classList.remove("active"),Xt(e)});const w=document.getElementById("btnConnectFromConfig");w&&(w.onclick=async()=>{await Jt(e.id),t.classList.remove("active")});const C=document.getElementById("btnDisconnectFromConfig");C&&(C.onclick=async()=>{await pt(e.id),t.classList.remove("active")});const v=document.getElementById("btnSelectFromConfig");v&&(v.onclick=async()=>{await Qt(e.id),t.classList.remove("active")});const k=document.getElementById("btnTopologyFromConfig");k&&(k.onclick=async()=>{t.classList.remove("active"),await le(e.id)});const $=document.getElementById("btnTestFromConfig");$&&($.onclick=async()=>{await bo(e)})}async function bo(e){const t=document.getElementById("cfgTestResultBox"),n=document.getElementById("btnTestFromConfig");n&&(n.disabled=!0,n.innerHTML="Testing..."),t&&(t.className="test-result-box",t.innerHTML="");try{const s=await(await fetch(`/api/connections/${e.id}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();s.success?(t.className="test-result-box success",t.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${s.latency_ms} ms</strong> (Redis v${s.redis_version})</span>
      `):(t.className="test-result-box error",t.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${p(s.error||"Connection refused")}</span>
      `)}catch(o){t&&(t.className="test-result-box error",t.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${p(o.message)}</span>`)}finally{n&&(n.disabled=!1,n.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),g()}}async function Jt(e){if(i.cachedConnections.filter(n=>n.is_connected&&n.id!==e).length>=i.currentLimit){S(`Connection limit reached: Maximum ${i.currentLimit} connected cluster(s) allowed. Please disconnect an existing cluster first.`,"warning",4500);return}try{const n=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to connect to cluster");i.selectedConnectionId=e,localStorage.setItem("redis_insight_selected_conn_id",e),await X(),dt(e),S("Connected to cluster successfully","success"),W&&await W(),G&&await G()}catch(n){S("Connection error: "+n.message,"error")}}async function pt(e){try{const t=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to disconnect cluster");if(i.selectedConnectionId===e){const s=i.cachedConnections.find(a=>a.is_connected&&a.id!==e);s?(i.selectedConnectionId=s.id,localStorage.setItem("redis_insight_selected_conn_id",s.id)):(i.selectedConnectionId=null,localStorage.removeItem("redis_insight_selected_conn_id"))}await X(),dt(i.selectedConnectionId),W&&await W(),i.cachedConnections.some(s=>s.is_connected&&s.id!==e)?G&&await G():(i.keysTableRows=[],i.loadedKeysSet.clear(),i.totalScanned=0,i.currentCursor=0,i.scanComplete=!1,i.dbTotalKeys=0,Yt())}catch(t){S("Disconnect error: "+t.message,"error")}}async function Qt(e){try{i.selectedConnectionId=e,localStorage.setItem("redis_insight_selected_conn_id",e);const t=await fetch(`/api/connections/${e}/select`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to switch cluster");const o=document.getElementById("keyDetailModal");o&&o.classList.remove("active"),i.activeDetailKey=null,i.activeDetailData=null,await X(),dt(e),W&&await W(),G&&await G()}catch(t){S("Switch error: "+t.message,"error")}}function Yt(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="flex"),n&&(n.style.display="none");const o=document.getElementById("btnConnectFirstAvailable");o&&(o.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${i.cachedConnections.length})`,i.cachedConnections.length>0&&(o.onclick=()=>Ye(i.cachedConnections[0]))),g()}async function xo(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");S("Connection deleted","success"),await X(),W&&await W(),G&&await G()}catch(t){S("Delete error: "+t.message,"error")}}function ne(){const e=document.getElementById("clusterNodesList"),t=document.getElementById("clusterNodeCountBadge");if(e){if(t&&(t.textContent=`${A.length} configured`),A.length===0){e.innerHTML=`
      <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
        No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
      </div>
    `;return}e.innerHTML=A.map((n,o)=>{const s=n.role==="master",a=n.role==="replica",r=n.role==="seed",l=s?"master":a?"replica":"",c=s?"master":a?"replica":r?"seed":"manual",d=s?"Master":a?"Replica":r?"Seed":"Node";return`
      <span class="cluster-node-chip ${l}">
        <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
        <span>${p(n.host)}:${n.port}</span>
        <span class="cluster-node-role-badge ${c}">${d}</span>
        <button type="button" class="cluster-node-chip-remove" data-idx="${o}" title="Remove node">
          <i data-lucide="x" style="width: 11px; height: 11px;"></i>
        </button>
      </span>
    `}).join(""),e.querySelectorAll(".cluster-node-chip-remove").forEach(n=>{n.addEventListener("click",o=>{o.stopPropagation();const s=parseInt(n.getAttribute("data-idx"),10);!isNaN(s)&&s>=0&&s<A.length&&(A.splice(s,1),ne())})}),g()}}function Xt(e){te=e.id;const t=document.getElementById("connectionModal"),n=document.getElementById("connectionModalTitle"),o=document.getElementById("btnSaveConn"),s=document.getElementById("connPassword");n&&(n.innerHTML='<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection'),o&&(o.textContent="Update Connection"),document.getElementById("connName").value=e.name||"",document.getElementById("connEnv").value=(e.env||"DEV").toUpperCase();const a=document.getElementById("connTypeSelect");a.value=e.conn_type||"standalone",document.getElementById("connHost").value=e.host||"localhost",document.getElementById("connPort").value=e.port||6379,document.getElementById("connDb").value=e.db||0,document.getElementById("connUsername").value=e.username||"",document.getElementById("connTls").checked=!!e.use_tls,document.getElementById("connReadOnly").checked=!!e.read_only,s&&(s.value="",e.has_password?s.placeholder="•••••••• (Leave blank to keep saved password)":s.placeholder="Enter password (or leave empty)");const r=document.getElementById("clusterNodesGroup"),l=document.getElementById("connHostLabel"),c=document.getElementById("connDbRow");if(A=[],e.conn_type==="cluster"){if(r&&(r.style.display="block"),l&&(l.textContent="Seed Node Host *"),c&&(c.style.display="none"),e.cluster_nodes)try{const m=typeof e.cluster_nodes=="string"?JSON.parse(e.cluster_nodes):e.cluster_nodes;Array.isArray(m)&&(A=m.map(y=>{if(typeof y=="string"&&y.includes(":")){const f=y.split(":");return{host:f[0].trim(),port:parseInt(f[1],10)||6379}}return{host:y.host||"127.0.0.1",port:parseInt(y.port,10)||6379}}))}catch{}}else r&&(r.style.display="none"),l&&(l.textContent="Host *"),c&&(c.style.display="flex");ne();const d=document.getElementById("testResultBox");d&&(d.className="test-result-box",d.innerHTML=""),g(),t&&t.classList.add("active")}function wo(){window.openEditConnectionModal=Xt;const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const u=parseInt(e.value,10);try{const h=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:u})});if(h.ok){const b=await h.json();i.currentLimit=b.limit,Gt(b.connected_count,b.limit)}}catch(h){console.warn("Failed to update limit:",h)}});const t=document.getElementById("connSearchInput");t&&t.addEventListener("input",()=>{i.currentConnSearch=t.value.trim(),Qe()});const n=document.getElementById("envFilterPills");n&&n.addEventListener("click",u=>{const h=u.target.closest(".env-pill-btn");h&&h.dataset.env&&(n.querySelectorAll(".env-pill-btn").forEach(b=>b.classList.remove("active")),h.classList.add("active"),i.currentEnvFilter=h.dataset.env,Qe())});const o=document.getElementById("btnReloadConfigStatic");o&&o.addEventListener("click",async()=>{o.disabled=!0;try{await fetch("/api/connections/reload-config",{method:"POST"}),await X()}catch(u){console.warn("Reload config failed:",u)}finally{o.disabled=!1}});const s=document.getElementById("connTypeSelect"),a=document.getElementById("clusterNodesGroup"),r=document.getElementById("connHostLabel"),l=document.getElementById("connPortLabel"),c=document.getElementById("connHost"),d=document.getElementById("connPort"),m=document.getElementById("connDbGroup");s&&a&&s.addEventListener("change",()=>{const u=s.value==="cluster";a.style.display=u?"block":"none",m&&(m.style.display=u?"none":"block"),u?(r&&(r.textContent="Primary Seed Host *"),l&&(l.textContent="Seed Port *"),c&&(c.value==="localhost"||!c.value)&&(c.value="127.0.0.1"),d&&(d.value==="6379"||!d.value)&&(d.value="7000"),A.length===0&&c&&c.value&&d&&d.value&&A.push({host:c.value.trim(),port:parseInt(d.value,10)||7e3,role:"seed"}),ne()):(r&&(r.textContent="Host *"),l&&(l.textContent="Port *"),d&&d.value==="7000"&&(d.value="6379"))});const y=document.getElementById("btnAutoDiscoverCluster"),f=document.getElementById("clusterDiscoveryStatus");y&&y.addEventListener("click",async()=>{const u=c?c.value.trim():"127.0.0.1",h=d&&parseInt(d.value,10)||7e3,b=document.getElementById("connUsername").value.trim()||null,L=document.getElementById("connPassword").value||null,T=document.getElementById("connTls").checked;if(!u){f&&(f.className="cluster-discovery-status error",f.style.display="flex",f.innerHTML='<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>',g());return}y.disabled=!0,y.innerHTML="Discovering...";try{const _=await(await fetch("/api/connections/discover-cluster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:u,port:h,username:b,password:L,use_tls:T})})).json();_.success&&_.nodes&&_.nodes.length>0?(A=_.nodes.map(P=>({host:P.host,port:P.port,role:P.role,is_myself:P.is_myself,slots:P.slots})),ne(),f&&(f.className="cluster-discovery-status success",f.style.display="flex",f.innerHTML=`
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${_.total_nodes} nodes</strong> (${_.masters_count} masters, ${_.replicas_count} replicas)</span>
            `,g())):f&&(f.className="cluster-discovery-status error",f.style.display="flex",f.innerHTML=`
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${p(_.error||"Cluster discovery failed.")}</span>
            `,g())}catch(I){f&&(f.className="cluster-discovery-status error",f.style.display="flex",f.innerHTML=`
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${p(I.message)}</span>
          `,g())}finally{y.disabled=!1,y.innerHTML='<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes',g()}});const x=document.getElementById("inputCustomClusterNode"),w=document.getElementById("btnAddCustomClusterNode");function C(){if(!x)return;const u=x.value.trim();if(!u)return;let h="127.0.0.1",b=7e3;if(u.includes(":")){const T=u.split(":");h=T[0].trim()||"127.0.0.1",b=parseInt(T[1].trim(),10)||7e3}else isNaN(parseInt(u,10))?h=u:(b=parseInt(u,10),h=c?c.value.trim():"127.0.0.1");A.some(T=>T.host===h&&T.port===b)||(A.push({host:h,port:b,role:"manual"}),ne()),x.value=""}w&&w.addEventListener("click",C),x&&x.addEventListener("keydown",u=>{u.key==="Enter"&&(u.preventDefault(),C())});const v=document.getElementById("connectionModal"),k=document.getElementById("btnAddConn");k&&v&&k.addEventListener("click",()=>{te=null,document.getElementById("connectionForm").reset();const u=document.getElementById("connectionModalTitle"),h=document.getElementById("btnSaveConn"),b=document.getElementById("connPassword");u&&(u.innerHTML='<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection'),h&&(h.textContent="Save Connection"),b&&(b.placeholder="Leave empty if none");const L=document.getElementById("connEnv").value;document.getElementById("connReadOnly").checked=L==="PROD",document.getElementById("clusterNodesGroup").style.display="none",document.getElementById("connHostLabel").textContent="Host *",document.getElementById("connDbRow").style.display="flex",A=[],ne();const T=document.getElementById("testResultBox");T&&(T.className="test-result-box",T.innerHTML=""),g(),v.classList.add("active")});const $=document.getElementById("btnCloseModal");$&&v&&$.addEventListener("click",()=>v.classList.remove("active"));const D=document.getElementById("btnCancelModal");D&&v&&D.addEventListener("click",()=>v.classList.remove("active"));const M=document.getElementById("connEnv");M&&M.addEventListener("change",u=>{if(u.target.value==="PROD"){const h=document.getElementById("connReadOnly");h&&(h.checked=!0)}});const U=document.getElementById("btnTestConnModal");U&&U.addEventListener("click",async()=>{const u=document.getElementById("connTypeSelect").value,h=document.getElementById("connHost").value.trim()||"localhost",b=parseInt(document.getElementById("connPort").value,10)||6379,L=parseInt(document.getElementById("connDb").value,10)||0,T=document.getElementById("connUsername").value.trim()||null,I=document.getElementById("connPassword").value,_=document.getElementById("connTls").checked;let P=null;u==="cluster"&&A.length>0&&(P=JSON.stringify(A.map(z=>({host:z.host,port:z.port}))));const B=document.getElementById("testResultBox");U.disabled=!0,U.innerHTML="Testing...",B&&(B.className="test-result-box",B.innerHTML="");try{let z;te&&!I?z=await fetch(`/api/connections/${te}/test`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:h,port:b,db:L,username:T,use_tls:_,conn_type:u,cluster_nodes:P})}):z=await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:h,port:b,db:L,username:T,password:I||null,use_tls:_,conn_type:u,cluster_nodes:P})});const K=await z.json();if(K.success){B.className="test-result-box success";const R=K.is_cluster?` • Cluster Mode (${K.cluster_nodes_count||A.length} nodes reachable)`:"";B.innerHTML=`
            <i data-lucide="check-circle-2"></i>
            <span>Connected! Latency: <strong>${K.latency_ms} ms</strong>${R} (Redis v${K.redis_version})</span>
          `}else B.className="test-result-box error",B.innerHTML=`
            <i data-lucide="alert-circle"></i>
            <span>Failed: ${p(K.error||"Connection refused")}</span>
          `}catch(z){B&&(B.className="test-result-box error",B.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${p(z.message)}</span>`)}finally{U.disabled=!1,U.innerHTML='<i data-lucide="zap"></i> Test Connection',g()}});const H=document.getElementById("connectionForm");H&&H.addEventListener("submit",async u=>{u.preventDefault();const h=document.getElementById("connName").value.trim(),b=document.getElementById("connEnv").value,L=document.getElementById("connTypeSelect").value;let T=document.getElementById("connHost").value.trim()||"localhost",I=parseInt(document.getElementById("connPort").value,10)||6379;const _=parseInt(document.getElementById("connDb").value,10)||0,P=document.getElementById("connUsername").value.trim()||null,B=document.getElementById("connPassword").value,z=document.getElementById("connTls").checked,K=document.getElementById("connAutoActivate").checked,R=document.getElementById("connReadOnly")?.checked||!1;let N=null;L==="cluster"&&(A.length>0?(N=JSON.stringify(A.map(F=>({host:F.host,port:F.port}))),T=A[0].host,I=A[0].port):N=JSON.stringify([{host:T,port:I}]));try{if(te){const F={name:h,env:b,conn_type:L,host:T,port:I,cluster_nodes:N,db:_,username:P,use_tls:z,read_only:R};B&&(F.password=B);const ce=await fetch(`/api/connections/${te}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)});if(!ce.ok){const $e=await ce.json().catch(()=>({}));throw new Error($e.detail||"Failed to update connection")}}else{const F={name:h,env:b,conn_type:L,host:T,port:I,cluster_nodes:N,db:_,username:P,password:B||null,use_tls:z,read_only:R},ce=await fetch(`/api/connections?auto_activate=${K}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)});if(!ce.ok){const $e=await ce.json().catch(()=>({}));throw new Error($e.detail||"Failed to save connection")}}v.classList.remove("active"),te=null,H.reset(),A=[],ne(),await X(),S("Connection saved successfully","success"),W&&await W(),G&&await G()}catch(F){S("Error saving: "+F.message,"error")}})}typeof window<"u"&&(window.__redisState=i,window.__redisKeys={updateScanUI:ae,resetAndScan:q});const Co=window.fetch;window.fetch=function(e,t){let n="";if(typeof e=="string"?n=e:e instanceof URL?n=e.toString():e&&typeof e.url=="string"&&(n=e.url),n.startsWith("/api/")||n.includes("/api/")){const o=i.selectedConnectionId||localStorage.getItem("redis_insight_selected_conn_id");if(o)if(e instanceof Request)try{e.headers.set("X-Connection-ID",o)}catch{}else{t=t||{};const s=new Headers(t.headers||{});s.has("X-Connection-ID")||s.set("X-Connection-ID",o),t={...t,headers:s}}}return Co.call(this,e,t)};fo(re,q);Si(q);fi(it);Gi(oe,it,re);po(re);oo(Jt);ho(e=>{Ji(e),oi(e),Xi(e),mo(e),ao(e)});ye("benchmark",()=>tt());ye("memory",()=>at());ye("slowlog",()=>Ft());ye("topology",()=>le());ye("clients",()=>ct());function ko(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
            <div class="limit-select-wrapper">
              <label for="connLimitSelect" class="limit-select-label">Max:</label>
              <select id="connLimitSelect" class="limit-select conn-limit-select" title="Simultaneous connection limit (1-10)">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10" selected>10</option>
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
          </button>
          <button type="button" class="ws-tab-btn" id="tabBtnWorkspaceClients" data-tab="clients" role="tab" aria-selected="false" title="Connected Client Sessions (Ctrl+6)">
            <i data-lucide="users" style="width: 13px; height: 13px; color: #38bdf8;"></i>
            <span>Clients</span>
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
                  <div class="search-input-wrapper">
                    <i data-lucide="search" class="search-icon" style="width: 15px; height: 15px;"></i>
                    <input type="text" id="keySearchInput" class="search-input" placeholder="Filter loaded keys by regex, glob (*), or text (instant)..." value="*">
                    <button type="button" id="btnClearSearchQuery" class="search-clear-btn" title="Clear query" style="display: none;">
                      <i data-lucide="x" style="width: 12px; height: 12px;"></i>
                    </button>
                  </div>
                  <span id="searchMatchCountBadge" class="search-match-badge" title="Matching keys in browser memory" style="display: none;"></span>

                  <div class="search-scope-toggle" id="searchScopeToggle" title="Toggle Search Scope">
                    <button type="button" class="scope-tab active" data-scope="local" id="scopeBtnLocal" title="Filter already-loaded keys instantly (~5ms) using Regex, Glob (*), or Substring">
                      <i data-lucide="zap" style="width: 11px; height: 11px; color: var(--accent-warning);"></i>
                      <span>In-Memory Filter</span>
                    </button>
                    <button type="button" class="scope-tab" data-scope="remote" id="scopeBtnRemote" title="Query Redis Cluster directly with this pattern (clears local cache and fetches fresh keys)">
                      <i data-lucide="globe" style="width: 11px; height: 11px; color: var(--accent-primary);"></i>
                      <span>Cluster SCAN</span>
                    </button>
                  </div>
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

              <!-- Browser Memory Safety Ceiling Guard Banner (Conditional) -->
              <div id="memoryLimitBanner" class="memory-limit-banner" style="display: none;"></div>

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
                    <i data-lucide="shield-check" style="width: 12px; height: 12px;"></i>
                    <span id="scanChunkLabel">Safe (50)</span>
                  </span>
                  <span id="scanStatusText" class="scan-status-text">Scanning keys...</span>
                  <span id="keysCacheStatusPill" class="cache-status-pill" style="display: none;"></span>
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

                  <button type="button" class="btn btn-secondary btn-toolbar-action" id="btnResetScan" title="Reload keys matching pattern immediately">
                    <i data-lucide="refresh-cw" style="width: 12px; height: 12px;"></i>
                    <span>Refresh</span>
                  </button>

                  <div class="actions-divider"></div>

                  <label for="scanBatchSizeSelect" class="batch-size-label">Batch:</label>
                  <select id="scanBatchSizeSelect" class="batch-size-select" title="Keys requested per SCAN batch (applies to the next Load More)">
                    ${Zt.map(t=>`<option value="${t}"${t===50?" selected":""}>${t.toLocaleString()}</option>`).join("")}
                  </select>
                  <button type="button" class="btn btn-primary btn-toolbar-action" id="btnScanNext">
                    <i data-lucide="arrow-down-circle" style="width: 12px; height: 12px;"></i>
                    <span>Load More</span>
                  </button>

                  <div class="actions-divider"></div>

                  <button type="button" class="btn btn-secondary btn-toolbar-action" id="btnOpenNamespaceModal" title="Analyze namespace distribution & key hygiene on loaded keys (0 Redis calls)">
                    <i data-lucide="pie-chart" style="width: 12px; height: 12px; color: #a78bfa;"></i>
                    <span>Namespaces</span>
                  </button>

                  <button type="button" class="btn btn-secondary btn-toolbar-action" id="btnOpenExportModal" title="Export matched key names (CSV/TXT)">
                    <i data-lucide="download" style="width: 12px; height: 12px;"></i>
                    <span>Export</span>
                  </button>
                  <button type="button" class="btn btn-secondary btn-toolbar-action btn-danger-action" id="btnOpenBulkDeleteModal" title="Bulk delete matched keys (Dry-run & confirmation required)">
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
                <div class="keys-grid-wrapper" style="width: 100%; height: 100%; position: relative;">
                  <div class="scan-progress-shimmer" id="keysLoadingShimmer"></div>
                  <div id="gridViewerContainer" style="width: 100%; height: 100%;"></div>
                </div>
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
                  </div>
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
                    <div class="benchmark-metrics-grid" style="opacity: 0.65;">
                      <div class="benchmark-metric-card">
                        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #38bdf8;"></i> Total Round-Trip (RTT)</div>
                        <div class="val">-- <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
                        <div class="sub">Average client observed latency</div>
                      </div>
                      <div class="benchmark-metric-card">
                        <div class="label"><i data-lucide="cpu" style="width: 12px; height: 12px; color: #10b981;"></i> Redis Server CPU Time</div>
                        <div class="val" style="color: #6ee7b7;">-- <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
                        <div class="sub">Isolated server execution delay</div>
                      </div>
                      <div class="benchmark-metric-card">
                        <div class="label"><i data-lucide="network" style="width: 12px; height: 12px; color: #38bdf8;"></i> Network Overhead</div>
                        <div class="val" style="color: #38bdf8;">-- <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
                        <div class="sub">Transit & TCP stack overhead</div>
                      </div>
                      <div class="benchmark-metric-card">
                        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Probe Throughput</div>
                        <div class="val" style="color: #fbbf24;">-- <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
                        <div class="sub">Click "Run Latency Probe" above to benchmark</div>
                      </div>
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
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <button type="button" class="btn btn-secondary" id="btnRefreshMemoryModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
                    <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
                    Refresh Overview
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
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <h3 class="modal-title">Real-Time Slowlog & Latency Profiler</h3>
                      <span class="badge-duration badge-duration-warning" id="slowlogThresholdBadge" style="font-size: 0.7rem; font-weight: 500;">
                        Threshold: &gt; 10ms
                      </span>
                    </div>
                  </div>
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
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <h3 class="modal-title">Cluster Topology & Nodes</h3>
                    </div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <button type="button" class="btn btn-secondary" id="btnRefreshTopologyModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
                    <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
                    Refresh
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
                <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
                  <i data-lucide="network" style="width: 28px; height: 28px; opacity: 0.35; margin-bottom: 0.5rem;"></i>
                  <div>Click <strong>Load Cluster Topology</strong> or refresh to inspect nodes</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. Connected Clients Tab Pane (Full Width) -->
          <div class="ws-tab-pane ws-dashboard-pane modal-backdrop" id="clientsListModal">
            <div class="clients-modal-card">
              <div class="modal-header">
                <div style="display: flex; align-items: center; gap: 0.6rem;">
                  <i data-lucide="users" style="width: 20px; height: 20px; color: var(--accent-primary);"></i>
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <h3 class="modal-title">Connected Clients</h3>
                    </div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <button type="button" class="btn btn-secondary" id="btnRefreshClientsModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
                    <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
                    Refresh
                  </button>
                </div>
              </div>

              <div style="padding: 0.85rem 1.5rem; background: rgba(0,0,0,0.2); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
                <div style="display: flex; align-items: center; gap: 0.75rem; flex: 1; min-width: 280px; max-width: 600px;">
                  <div class="search-group" style="flex: 1;">
                    <i data-lucide="search" class="search-icon" style="width: 14px; height: 14px;"></i>
                    <input type="text" id="clientsSearchInput" class="search-input" placeholder="Search by IP, port, client name, user, or cmd..." style="padding: 0.45rem 0.75rem 0.45rem 2rem; font-size: 0.8rem;">
                  </div>
                  <button type="button" class="btn btn-secondary btn-sm" id="btnToggleHideInternalClients" style="font-size: 0.72rem; padding: 0.35rem 0.65rem; white-space: nowrap;" title="Filter out background and internal connections initiated by this tool">
                    <i data-lucide="eye-off" style="width: 12px; height: 12px;"></i>
                    <span>Hide Internal (This App)</span>
                  </button>
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

    <!-- Namespace & Key Hygiene Studio Modal (Phase 3) -->
    <div class="modal-backdrop" id="namespaceModal" style="display: none;">
      <div class="config-modal-card" style="max-width: 820px; border-top: 3px solid #a78bfa;">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i data-lucide="pie-chart" style="color: #a78bfa; width: 20px; height: 20px;"></i>
            <div>
              <h3 class="modal-title" style="color: #c4b5fd;">Namespace & Key Hygiene Studio</h3>
              <div id="nsStudioSubtitle" style="font-size: 0.72rem; color: var(--text-muted);">
                Analyzed from Browser In-Memory Keyspace • Zero Redis Load
              </div>
            </div>
          </div>
          <button type="button" class="btn-icon" id="btnCloseNamespaceModal">
            <i data-lucide="x"></i>
          </button>
        </div>

        <div style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem;">
          <!-- Empty State if no keys loaded -->
          <div id="nsEmptyState" style="display: none; text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
            <i data-lucide="database" style="width: 32px; height: 32px; color: var(--text-muted); margin-bottom: 0.5rem; display: inline-block;"></i>
            <div style="font-weight: 600; font-size: 0.9rem;">No Keys Loaded in Memory</div>
            <div style="font-size: 0.75rem; margin-top: 0.25rem;">
              Load keys in the Keys Browser first to run zero-Redis namespace tokenization and hygiene linting.
            </div>
          </div>

          <!-- Content Wrapper -->
          <div id="nsContentWrapper" style="display: flex; flex-direction: column; gap: 1rem;">
            <!-- KPI Summary Cards -->
            <div class="ns-kpi-grid">
              <div class="ns-kpi-card">
                <span class="ns-kpi-label">Analyzed Keys</span>
                <span class="ns-kpi-value" id="kpiNsTotalKeys">0</span>
              </div>
              <div class="ns-kpi-card">
                <span class="ns-kpi-label">Distinct Namespaces</span>
                <span class="ns-kpi-value" id="kpiNsCount">0</span>
              </div>
              <div class="ns-kpi-card">
                <span class="ns-kpi-label">Top Namespace</span>
                <span class="ns-kpi-value" id="kpiNsTop">—</span>
              </div>
              <div class="ns-kpi-card">
                <span class="ns-kpi-label">Key Hygiene Status</span>
                <span class="ns-kpi-value" id="kpiNsHygiene">0 Flags</span>
              </div>
            </div>

            <!-- Sub Navigation Tabs -->
            <div class="ns-tab-bar">
              <button type="button" class="ns-tab-btn active" id="tabBtnNsDistribution">
                <i data-lucide="folder-tree" style="width: 13px; height: 13px;"></i>
                <span>Namespace Distribution</span>
                <span class="ns-tab-badge" id="badgeNsDistCount">0</span>
              </button>
              <button type="button" class="ns-tab-btn" id="tabBtnNsHygiene">
                <i data-lucide="shield-alert" style="width: 13px; height: 13px;"></i>
                <span>Key Hygiene & Linting</span>
                <span class="ns-tab-badge" id="badgeNsHygCount">0</span>
              </button>
            </div>

            <!-- Tab 1: Namespace Distribution Pane -->
            <div class="ns-pane" id="paneNsDistribution">
              <div class="ns-table-container">
                <table class="ns-table">
                  <thead>
                    <tr>
                      <th>Prefix / Namespace</th>
                      <th>Key Count</th>
                      <th>Share (% of Keys)</th>
                      <th>Data Types</th>
                      <th style="text-align: right;">Action</th>
                    </tr>
                  </thead>
                  <tbody id="tbodyNsDistribution">
                    <!-- Populated dynamically -->
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Tab 2: Key Hygiene & Linting Pane -->
            <div class="ns-pane" id="paneNsHygiene" style="display: none;">
              <div class="hygiene-filter-bar">
                <span style="font-size: 0.74rem; color: var(--text-muted); font-weight: 600;">FILTER ANOMALIES:</span>
                <button type="button" class="hygiene-cat-pill active" data-cat="all">All</button>
                <button type="button" class="hygiene-cat-pill" data-cat="delimiter">Delimiters</button>
                <button type="button" class="hygiene-cat-pill" data-cat="whitespace">Whitespace</button>
                <button type="button" class="hygiene-cat-pill" data-cat="non-ascii">Non-ASCII</button>
                <button type="button" class="hygiene-cat-pill" data-cat="long">Length</button>
                <button type="button" class="hygiene-cat-pill" data-cat="missing">Root</button>
              </div>

              <div class="ns-table-container">
                <table class="ns-table">
                  <thead>
                    <tr>
                      <th>Offending Key</th>
                      <th>Hygiene Issue</th>
                      <th>Diagnostic Description</th>
                      <th style="text-align: right;">Action</th>
                    </tr>
                  </thead>
                  <tbody id="tbodyNsHygiene">
                    <!-- Populated dynamically -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
  `)}async function re(){const e=document.getElementById("topConnContainer"),t=document.getElementById("topVitalsContainer");try{const o=await(await fetch("/api/status")).json();if(o.connected){const s=i.cachedConnections.find(v=>v.is_selected)||i.cachedConnections.find(v=>v.id===o.connection_id)||i.cachedConnections.find(v=>v.is_connected),a=s&&s.conn_type==="cluster"||o.cluster_nodes&&o.cluster_nodes.length>0||o.is_cluster,r=o.cluster_nodes_count||(o.node_stats&&o.node_stats.length>0?o.node_stats.length:1),l=(o.node_stats||[]).filter(v=>v.role==="master");if(i.lastStatus=o,Hi(o.connection_id||s?.id),ro(),Wt(s),e){const v=(o.env||s?.env||"LOCAL").toUpperCase();e.innerHTML=`
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${p(o.connection_name||"Connected")}">${p(o.connection_name||"Connected")}</span>
            <span class="badge-env badge-env-${v.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem; margin-right: 0.25rem;">${v}</span>
            ${o.read_only?'<span class="badge-readonly" title="Read-Only Mode: All write, update, and delete actions are locked" style="margin-right: 0.25rem;"><i data-lucide="lock"></i> READ ONLY</span>':""}
            <span class="top-conn-endpoint">${o.host}:${o.port}</span>
            <span class="top-conn-tag">${a?"CLUSTER":`DB${o.db}`}</span>
            <button type="button" class="top-conn-disconnect" id="btnTopDisconnect" title="Disconnect ${p(o.connection_name||"instance")}">
              <i data-lucide="power" style="width: 12px; height: 12px;"></i>
            </button>
          </div>
        `}t&&(t.innerHTML=`
          <div class="top-vitals-capsule">
            <div class="vital-item clickable" id="btnOpenTopologyTop" title="View Cluster Topology & Node Health">
              <i data-lucide="layers" style="width: 12px; height: 12px; color: ${a?"#a78bfa":"var(--accent-primary)"};"></i>
              <span class="vital-val" style="color: ${a?"#c084fc":"var(--accent-primary)"};">
                ${a?`${r} ${r===1?"Node":"Nodes"}`:"1 Node"}
              </span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="PING round-trip latency">
              <i data-lucide="zap" style="width: 11px; height: 11px; color: var(--accent-success);"></i>
              <span class="vital-val" style="color: var(--accent-success);">${o.latency_ms} ms</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item${l.length?" clickable":""}" id="btnOpenKeyspaceTop" title="${l.length?`Total keys across ${l.length} master nodes. Click for per-node breakdown`:"Total keys in active keyspace"}">
              <span class="vital-label">Keys:</span>
              <span class="vital-val">${(o.dbsize||0).toLocaleString()}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item clickable" id="btnOpenMemoryTop" title="Memory usage. Click to open Memory Analysis & BigKeys Profiler">
              <i data-lucide="pie-chart" style="width: 12px; height: 12px; color: #a78bfa;"></i>
              <span class="vital-val" style="color: #c084fc;">${o.used_memory_human||"N/A"}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item clickable" id="btnOpenClientsModal" title="Connected clients. Click to view clients list">
              <i data-lucide="users" style="width: 12px; height: 12px; color: #38bdf8;"></i>
              <span class="vital-val" style="color: #38bdf8;">${o.connected_clients||1}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="Redis server version">
              <span class="vital-label">v${o.redis_version}</span>
            </div>
          </div>
        `);const c=document.getElementById("tabBadgeKeys");c&&(c.textContent=(o.dbsize||0).toLocaleString());const d=document.getElementById("tabBadgeTopology");d&&(d.textContent=a?`${r} Nodes`:"1 Node");const m=document.getElementById("tabBadgeClients");m&&(m.textContent=String(o.connected_clients||1)),g();const y=document.getElementById("btnTopDisconnect");y&&y.addEventListener("click",()=>{o.connection_id&&pt(o.connection_id)});const f=document.getElementById("btnOpenClientsModal");f&&f.addEventListener("click",ct);const x=document.getElementById("btnOpenTopologyTop");x&&x.addEventListener("click",()=>le());const w=document.getElementById("btnOpenKeyspaceTop");w&&l.length&&w.addEventListener("click",so);const C=document.getElementById("btnOpenMemoryTop");C&&C.addEventListener("click",at)}else e&&(e.innerHTML=`
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${o.error?`<span class="top-conn-error" title="${p(o.error)}">${p(o.error)}</span>`:""}
          </div>
        `),t&&(t.innerHTML=`
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `),g(),i.totalScanned===0&&i.keysTableRows.length===0&&Yt()}catch{e&&(e.innerHTML=`
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `),t&&(t.innerHTML=""),g()}}function Eo(){const e=document.getElementById("btnRefreshStats");e&&e.addEventListener("click",re);const t=document.getElementById("clusterConfigModal"),n=document.getElementById("btnCloseConfigModalHeader");n&&t&&n.addEventListener("click",()=>t.classList.remove("active")),t&&t.addEventListener("click",c=>{c.target===t&&t.classList.remove("active")});const o=document.querySelector(".sidebar"),s=document.getElementById("btnToggleSidebar"),a=document.getElementById("btnShowSidebar"),r=c=>{if(!o)return;const d=c!==void 0?c:!o.classList.contains("collapsed");o.classList.toggle("collapsed",d),a&&(a.style.display=d?"inline-flex":"none"),localStorage.setItem("redis_insight_sidebar_collapsed",d?"true":"false"),g()};s&&s.addEventListener("click",()=>r(!0)),a&&a.addEventListener("click",()=>r(!1)),localStorage.getItem("redis_insight_sidebar_collapsed")==="true"&&r(!0),window.addEventListener("keydown",c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="b"&&(c.preventDefault(),r())}),window.addEventListener("keydown",c=>{if(c.key==="Escape"){const d=document.querySelector(".modal-backdrop:not(.ws-dashboard-pane).active");if(d){d.classList.remove("active");return}i.activeWorkspaceTab&&i.activeWorkspaceTab!=="keys"&&O("keys")}}),window.addEventListener("focus",()=>{X()}),setInterval(re,15e3)}async function wt(){ko(),g(),ti(),wo(),Wi(),gi(),Yi(),io(),co(),go(),Ei(),Li(),Eo(),await X(),await re(),await q()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",wt):wt();
