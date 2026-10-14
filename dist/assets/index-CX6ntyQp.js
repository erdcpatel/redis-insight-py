(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const Nt=[50,100,200,500,1e3,2e3,5e3,1e4],zt=200,i={activeWorkspaceTab:"keys",allConnectedClients:[],allSlowlogEntries:[],currentSlowlogMinDuration:0,currentSlowlogSearch:"",currentSlowlogNode:"all",currentViewMode:localStorage.getItem("redis_insight_view_mode")||"table",activeTreeDelimiters:(()=>{try{const t=localStorage.getItem("redis_insight_tree_delimiters_global");if(t){const n=JSON.parse(t);if(Array.isArray(n)&&n.length>0)return n}}catch{}const e=localStorage.getItem("redis_insight_tree_delimiter");return e&&e!=="auto"?[e]:[":","/","."]})(),customTreeDelimiters:(()=>{try{const e=localStorage.getItem("redis_insight_custom_delimiters");if(e){const t=JSON.parse(e);if(Array.isArray(t))return t}}catch{}return[]})(),treeDelimiterPreset:localStorage.getItem("redis_insight_tree_delimiter_preset")||"auto",get currentTreeDelimiter(){return this.treeDelimiterPreset||this.activeTreeDelimiters&&this.activeTreeDelimiters[0]||"auto"},set currentTreeDelimiter(e){this.treeDelimiterPreset=e},treeExpandedPaths:new Set,treeInitialized:!1,currentTreeFilterQuery:"",currentMemoryOverview:null,currentMemoryAnalysis:null,isMemoryProfilingRunning:!1,memoryLoadedForConnId:null,bigkeysSearchQuery:"",slowlogLoadedForConnId:null,clientsLoadedForConnId:null,topologyLoadedForConnId:null,currentCursor:0,currentPattern:"*",currentType:"all",currentTtlFilter:"all",isScanning:!1,totalScanned:0,scanComplete:!1,dbTotalKeys:0,lastStatus:null,keysTableRows:[],loadedKeysSet:new Set,isAutoRefreshActive:!1,autoRefreshIntervalSec:(()=>{let e=parseInt(localStorage.getItem("redis_insight_auto_refresh_sec")||"10",10);return isNaN(e)||e<5?10:e})(),autoRefreshRemainingSec:10,autoRefreshTimer:null,activeDetailKey:null,activeDetailData:null,hashFieldsState:null,pendingDeleteKey:null,pendingDeleteCallback:null,selectedConnectionId:(()=>{const e=localStorage.getItem("redis_insight_selected_conn_id");if(!e)return null;const t=Number(e);return!isNaN(t)&&String(t)===e.trim()?t:e})(),cachedConnections:[],currentEnvFilter:"ALL",currentConnSearch:"",currentTopologyData:null,currentTopologyRole:"all",currentTopologySearch:"",currentLimit:2,activeConfigConn:null,currentScanEpoch:0,scanBatchSize:50};function p(e){return e==null?"":String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(e,t,n=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(s=>{o.setAttribute(s,String(t[s]))}),n.length&&n.forEach(s=>{const a=dt(...s);o.appendChild(a)}),o};var Ft=([e,t,n])=>dt(e,t,n);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),Ot=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Kt=e=>e.flatMap(Ot).map(n=>n.trim()).filter(Boolean).filter((n,o,s)=>s.indexOf(n)===o).join(" "),jt=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,o)=>n.toUpperCase()+o.toLowerCase()),Ze=(e,{nameAttr:t,icons:n,attrs:o})=>{const s=e.getAttribute(t);if(s==null)return;const a=jt(s),l=n[a];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const r=Ht(e),[d,c,y]=l,u={...c,"data-lucide":s,...o,...r},f=Kt(["lucide",`lucide-${s}`,r,o]);f&&Object.assign(u,{class:f});const v=Ft([d,u,y]);return e.parentNode?.replaceChild(v,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=["svg",k,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=["svg",k,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=["svg",k,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=["svg",k,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=["svg",k,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=["svg",k,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=["svg",k,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=["svg",k,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=["svg",k,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=["svg",k,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",k,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",k,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",k,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",k,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",k,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",k,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",k,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",k,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",k,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",k,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",k,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",k,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",k,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",k,[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",k,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",k,[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",k,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",k,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",k,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",k,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",k,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",k,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",k,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",k,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",k,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",k,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",k,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",k,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",k,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",k,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",k,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",k,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",k,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",k,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",k,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",k,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(s=>Ze(s,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const s=document.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(a=>Ze(a,{nameAttr:"icon-name",icons:e,attrs:n})))}};function g(){Nn({icons:{Layers:gn,Plus:wn,RefreshCw:kn,Search:En,Cpu:on,Trash2:_n,Zap:Pn,CheckCircle2:Zt,AlertCircle:Qt,Database:sn,ShieldCheck:Ln,Lock:hn,ArrowDownCircle:Xt,X:Dn,Play:xn,Copy:nn,Clock:en,Edit:$n,ExternalLink:ln,Code:tn,Users:An,Server:Sn,Network:vn,GitBranch:un,ArrowRightLeft:Vt,Activity:Ut,PieChart:Gt,AlertTriangle:Rn,TrendingUp:Mn,BarChart2:qt,Power:Cn,ChevronLeft:Jt,ChevronRight:Yt,PanelLeft:bn,Download:an,FileText:rn,Folder:mn,FolderOpen:cn,FolderTree:pn,Table:In,List:fn,ChevronDown:Wt,Key:yn,Filter:dn,Timer:Bn,Sparkles:Tn}})}const Ee={};function ce(e,t){Ee[e]=t}let xe=!1;function H(e,t=!0){if(!xe){xe=!0;try{["keys","benchmark","memory","slowlog","topology","clients"].includes(e)||(e="keys"),i.activeWorkspaceTab=e,document.querySelectorAll(".ws-tab-btn").forEach(l=>{const r=l.dataset.tab===e;l.classList.toggle("active",r),l.setAttribute("aria-selected",r?"true":"false")}),document.querySelectorAll(".ws-tab-pane").forEach(l=>{l.classList.remove("active")});const o=document.getElementById(`paneWorkspace${zn(e)}`);if(o&&o.classList.add("active"),Object.entries({benchmark:"benchmarkModal",memory:"memoryModal",slowlog:"slowlogModal",topology:"clusterTopologyModal",clients:"clientsListModal"}).forEach(([l,r])=>{const d=document.getElementById(r);d&&(l===e?d.classList.add("active"):d.classList.remove("active"))}),Object.entries({benchmark:"btnOpenBenchmarkModal",slowlog:"btnOpenSlowlog",memory:"btnOpenMemoryModal",topology:"btnOpenTopologyTop",clients:"btnOpenClientsModal"}).forEach(([l,r])=>{const d=document.getElementById(r);d&&d.classList.toggle("active",l===e)}),t&&history.replaceState(null,"",`#/${e}`),Ee[e])try{Ee[e]()}catch(l){console.warn(`Error loading data for tab ${e}:`,l)}g()}finally{xe=!1}}}function zn(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Fn(){const e=document.getElementById("workspaceTabsBar");e&&e.addEventListener("click",t=>{const n=t.target.closest(".ws-tab-btn");n&&n.dataset.tab&&H(n.dataset.tab)}),window.addEventListener("hashchange",()=>{et()}),window.addEventListener("keydown",t=>{const n=document.activeElement?document.activeElement.tagName.toLowerCase():"";if(!(n==="input"||n==="textarea"||n==="select")&&(t.ctrlKey||t.metaKey)&&!t.shiftKey&&!t.altKey){const o={1:"keys",2:"benchmark",3:"memory",4:"slowlog",5:"topology",6:"clients"};o[t.key]&&(t.preventDefault(),H(o[t.key]))}}),et()}function et(){const t=(window.location.hash||"").match(/^#\/([a-z0-9_-]+)/i);if(t){const n=t[1].toLowerCase();if(["keys","benchmark","memory","slowlog","topology","clients"].includes(n)){H(n,!1);return}}H("keys",!1)}let Q=null;function Hn(){return(!Q||!document.body.contains(Q))&&(Q=document.createElement("div"),Q.id="appToastContainer",Q.className="toast-container",document.body.appendChild(Q)),Q}function E(e,t="info",n=2500){if(!e)return;const o=Hn(),s=document.createElement("div");s.className=`toast-pill toast-${t}`;const a=t==="success"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>':t==="error"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>':t==="warning"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>':'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';s.innerHTML=`
    <span class="toast-icon-wrapper">${a}</span>
    <span class="toast-message">${On(e)}</span>
    <button type="button" class="toast-close" title="Dismiss">&times;</button>
  `;const l=s.querySelector(".toast-close");if(l&&l.addEventListener("click",()=>we(s)),o.appendChild(s),requestAnimationFrame(()=>{s.classList.add("toast-show")}),n>0){const r=setTimeout(()=>{we(s)},n);s.addEventListener("mouseenter",()=>clearTimeout(r)),s.addEventListener("mouseleave",()=>{setTimeout(()=>we(s),1e3)})}return s}function we(e){!e||e.classList.contains("toast-exit")||(e.classList.remove("toast-show"),e.classList.add("toast-exit"),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},250))}function On(e){return typeof e!="string"?String(e??""):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}async function ee(e){typeof e!="string"&&(e=String(e??""));try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",t.setAttribute("readonly",""),document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}let ct="probe",j=!1;const ue={counter:{script:`local k = KEYS[1] or 'bench_counter'
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
return redis.call('PING')`,keys:"my_key",args:""}};function ze(e){if(!e)return"";const t=Number(e.network_overhead_ms||0).toFixed(3),n=Number(e.server_exec_ms||0).toFixed(3);return`
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
  `}function Fe(e){return e?`
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
  `:""}function He(e){return!e||!e.length?"":`
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
  `}function Kn(e){j=!1;const t=e||i.cachedConnections.find(u=>u.id===i.selectedConnectionId||u.is_selected),n=t?t.name:"Active Cluster",o=t?t.host:i.lastStatus?.host||"",s=t?t.port:i.lastStatus?.port||"",a=t?(t.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase(),l=document.getElementById("benchmarkTargetSubtitle");l&&(l.textContent=`Active Target: ${n} (${o}:${s}) [${a}] | Engine: AsyncIO Native | Namespace: __ri_bench__`);const r=document.getElementById("benchmarkProbeResults");r&&(r.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="activity" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem; opacity: 0.85;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Ready to probe latency on ${p(n)}</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Select probe count and click 'Run Latency Probe' to measure network transit vs Redis CPU</div>
      </div>
    `);const d=document.getElementById("benchmarkCommandResults");d&&(d.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="zap" style="width: 28px; height: 28px; color: #10b981; margin-bottom: 0.75rem; opacity: 0.85;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Ready to benchmark synthetic commands on ${p(n)}</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Select command preset, concurrency, and pipeline depth, then click 'Run Commands Benchmark'</div>
      </div>
    `);const c=document.getElementById("benchmarkLuaResults");c&&(c.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="code" style="width: 28px; height: 28px; color: #f59e0b; margin-bottom: 0.75rem; opacity: 0.85;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Ready to profile Lua script on ${p(n)}</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Select preset script or type custom script, then click 'Execute & Profile Lua'</div>
      </div>
    `);const y=document.getElementById("benchmarkClusterResults");y&&(y.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="layers" style="width: 28px; height: 28px; color: #c084fc; margin-bottom: 0.75rem; opacity: 0.85;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Ready to benchmark multi-node cluster matrix on ${p(n)}</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Probes every cluster master node simultaneously to measure node-by-node latency distribution</div>
      </div>
    `),Oe(),g()}function Oe(){const e=document.getElementById("benchmarkTargetSubtitle");if(e){const a=i.cachedConnections.find(y=>y.id===i.selectedConnectionId||y.is_selected),l=a?a.name:i.lastStatus?.host?`${i.lastStatus.host}:${i.lastStatus.port}`:"Active Target",r=a?a.host:i.lastStatus?.host||"",d=a?a.port:i.lastStatus?.port||"",c=a?(a.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();e.textContent=`Active Target: ${l} (${r}:${d}) [${c}] | Engine: AsyncIO Native | Namespace: __ri_bench__`}const t=document.getElementById("benchmarkReadOnlyBadge"),n=document.getElementById("optCommandPresetWrite"),o=document.getElementById("optCommandPresetStruct");if(i.lastStatus?.read_only){t&&(t.style.display="inline-flex"),n&&(n.disabled=!0,n.textContent="Write / Set (Disabled - Read-Only)"),o&&(o.disabled=!0,o.textContent="Data Structures (Disabled - Read-Only)");const a=document.getElementById("selCommandPreset");a&&(a.value==="write"||a.value==="structures")&&(a.value="read")}else t&&(t.style.display="none"),n&&(n.disabled=!1,n.textContent="Write / Set (100% SET)"),o&&(o.disabled=!1,o.textContent="Data Structures (HSET / HGET)");const s=document.getElementById("txtLuaScript");if(s&&!s.value.trim()){s.value=ue.counter.script;const a=document.getElementById("txtLuaKeys"),l=document.getElementById("txtLuaArgs");a&&(a.value=ue.counter.keys),l&&(l.value=ue.counter.args)}pt(ct||"probe")}function jn(){H("benchmark"),Oe()}function Un(){H("keys")}function pt(e){ct=e,document.querySelectorAll(".benchmark-tab-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-tab")===e)});const t={probe:document.getElementById("benchmarkPaneProbe"),commands:document.getElementById("benchmarkPaneCommands"),lua:document.getElementById("benchmarkPaneLua"),cluster:document.getElementById("benchmarkPaneCluster")};Object.keys(t).forEach(n=>{t[n]&&(t[n].style.display=n===e?"flex":"none")}),g()}async function Vn(){if(j)return;const e=document.getElementById("btnRunProbe"),t=document.getElementById("benchmarkProbeResults"),n=document.getElementById("selProbeCount"),o=parseInt(n?.value||"100",10);j=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Running Probe (${o})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Executing ${o} baseline probes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring network round-trip time vs Redis event-loop CPU duration</div>
      </div>
    `,g());try{const s=await fetch("/api/benchmark/probe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({count:o})});if(!s.ok){const l=await s.json().catch(()=>({detail:"Probe request failed"}));throw new Error(l.detail||"Probe failed")}const a=await s.json();qn(a)}catch(s){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Latency Probe Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(s.message)}</div>
        </div>
      `,g())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Run Latency Probe</span>',g())}}function qn(e){const t=document.getElementById("benchmarkProbeResults");if(!t||!e)return;const n=Number(e.avg_rtt_ms||0).toFixed(3),o=Number(e.breakdown?.server_exec_ms||0).toFixed(3),s=Number(e.breakdown?.network_overhead_ms||0).toFixed(3),a=Number(e.ops_per_sec||0).toLocaleString();t.innerHTML=`
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

    ${ze(e.breakdown)}
    ${Fe(e.percentiles)}
    ${He(e.histogram)}
  `,g()}async function Gn(){if(j)return;const e=document.getElementById("btnRunCommandBench"),t=document.getElementById("benchmarkCommandResults"),n=document.getElementById("selCommandPreset")?.value||"read",o=parseInt(document.getElementById("selCommandRequests")?.value||"1000",10),s=parseInt(document.getElementById("selCommandConcurrency")?.value||"5",10),a=parseInt(document.getElementById("selCommandPipeline")?.value||"1",10);j=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Benchmarking (${o})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #f59e0b; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Running synthetic workload (${n})...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">
          Executing ${o.toLocaleString()} requests across ${s} workers (pipeline: ${a})
        </div>
      </div>
    `,g());try{const l=await fetch("/api/benchmark/commands",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset:n,requests:o,concurrency:s,pipeline:a})});if(!l.ok){const d=await l.json().catch(()=>({detail:"Benchmark request failed"}));throw new Error(d.detail||"Benchmark failed")}const r=await l.json();Wn(r)}catch(l){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Benchmark Execution Blocked</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(l.message)}</div>
        </div>
      `,g())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Start Benchmark</span>',g())}}function Wn(e){const t=document.getElementById("benchmarkCommandResults");if(!t||!e)return;const n=Number(e.ops_per_sec||0).toLocaleString(),o=Number(e.avg_latency_ms||0).toFixed(3),s=Number(e.percentiles?.p99_ms||0).toFixed(3),a=Number(e.cleaned_keys_count||0).toLocaleString();t.innerHTML=`
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

    ${ze(e.breakdown)}
    ${Fe(e.percentiles)}
    ${He(e.histogram)}
  `,g()}async function Jn(){if(j)return;const e=document.getElementById("btnRunLuaBench"),t=document.getElementById("benchmarkLuaResults"),n=document.getElementById("txtLuaScript")?.value||"",o=document.getElementById("txtLuaKeys")?.value||"",s=document.getElementById("txtLuaArgs")?.value||"",a=document.getElementById("selLuaMode")?.value||"profile",l=parseInt(document.getElementById("selLuaIterations")?.value||"100",10),r=o.split(",").map(c=>c.trim()).filter(Boolean),d=s.split(",").map(c=>c.trim()).filter(Boolean);if(!n.trim()){E("Please enter a Lua script to execute and profile.","warning");return}j=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Executing Script...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Pre-loading and running Lua script on Redis server...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring precise microsecond server execution time</div>
      </div>
    `,g());try{const c=await fetch("/api/benchmark/lua",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({script:n,keys:r,args:d,mode:a,iterations:l,concurrency:5})});if(!c.ok){const u=await c.json().catch(()=>({detail:"Lua benchmark failed"}));throw new Error(u.detail||"Lua benchmark failed")}const y=await c.json();Yn(y)}catch(c){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Lua Script Execution Error</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(c.message)}</div>
        </div>
      `,g())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Execute & Profile</span>',g())}}function Yn(e){const t=document.getElementById("benchmarkLuaResults");if(!t||!e)return;const n=Number(e.server_duration_ms||0).toFixed(3),o=Number(e.duration_ms||0).toFixed(3);let s="";e.atomicity_warning?s=`
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
      ${Fe(e.percentiles)}
      ${He(e.histogram)}
    `),t.innerHTML=`
    ${s}

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem;">
      <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.35rem;">
        Script Return Value (Evaluated on Server)
      </div>
      <pre style="margin: 0; background: #090d16; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: #38bdf8; font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto;">${p(String(e.result))}</pre>
    </div>

    ${ze(e.breakdown)}
    ${a}
  `,g()}async function Qn(){if(j)return;const e=document.getElementById("btnRunClusterMatrix"),t=document.getElementById("benchmarkClusterResults");j=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Evaluating Matrix...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Probing primary cluster nodes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring cross-node latency and throughput matrix</div>
      </div>
    `,g());try{const n=await fetch("/api/benchmark/cluster-matrix");if(!n.ok){const s=await n.json().catch(()=>({detail:"Cluster matrix request failed"}));throw new Error(s.detail||"Cluster matrix failed")}const o=await n.json();Xn(o)}catch(n){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Cluster Matrix Evaluation Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(n.message)}</div>
        </div>
      `,g())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i><span>Evaluate Cluster Latency Matrix</span>',g())}}function Xn(e){const t=document.getElementById("benchmarkClusterResults");if(!t||!e)return;const n=Number(e.cluster_avg_latency_ms||0).toFixed(3),o=e.nodes||[];t.innerHTML=`
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
  `,g()}function Zn(){const e=document.getElementById("btnCloseBenchmarkModal");e&&e.addEventListener("click",Un);const t=document.getElementById("btnOpenBenchmarkModal");t&&t.addEventListener("click",jn),document.querySelectorAll(".benchmark-tab-btn").forEach(c=>{c.addEventListener("click",()=>{const y=c.getAttribute("data-tab");y&&pt(y)})});const n=document.getElementById("btnRunProbe");n&&n.addEventListener("click",Vn);const o=document.getElementById("btnRunCommandBench");o&&o.addEventListener("click",Gn);const s=document.getElementById("selLuaPreset");s&&s.addEventListener("change",()=>{const c=s.value,y=ue[c];if(y){const u=document.getElementById("txtLuaScript"),f=document.getElementById("txtLuaKeys"),v=document.getElementById("txtLuaArgs");u&&(u.value=y.script),f&&(f.value=y.keys),v&&(v.value=y.args)}});const a=document.getElementById("selLuaMode"),l=document.getElementById("groupLuaBenchmarkControls");a&&l&&a.addEventListener("change",()=>{l.style.display=a.value==="benchmark"?"flex":"none"});const r=document.getElementById("btnRunLuaBench");r&&r.addEventListener("click",Jn);const d=document.getElementById("btnRunClusterMatrix");d&&d.addEventListener("click",Qn)}let Se=null;function Le(e,t="Copied!",n=1500){if(!e)return;const o=e.innerHTML;e.classList.add("btn-copy-feedback","copied"),e.innerHTML=`<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><polyline points="20 6 9 17 4 12"></polyline></svg>${t}`,setTimeout(()=>{e.classList.remove("copied"),e.innerHTML=o},n)}function ei(e){Se=e}async function ne(e){i.activeDetailKey=e;const t=document.getElementById("keyDetailModal"),n=document.getElementById("detailKeyTitle"),o=document.getElementById("detailHeaderMeta"),s=document.getElementById("detailBodyContent"),a=document.getElementById("btnDeleteKeyFromDetail");a&&(a.style.display=i.lastStatus?.read_only?"none":""),n&&(n.textContent=e,n.title=e),o&&(o.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>'),s&&(s.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>'),t&&t.classList.add("active");try{let l=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(l.ok||(l=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!l.ok){let d="Key not found or could not be read";try{const c=await l.json();c&&c.detail&&(d=c.detail)}catch{}throw new Error(d)}const r=await l.json();i.activeDetailData=r,ti(r),ii(r)}catch(l){o&&(o.innerHTML='<span style="color: var(--accent-danger);">Error</span>'),s&&(s.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Failed to inspect key</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">${p(l.message)}</p>
        </div>
      `,g())}}function Ce(){const e=document.getElementById("keyDetailModal");e&&e.classList.remove("active")}function ti(e){const t=document.getElementById("detailHeaderMeta");if(!t)return;const n=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",o=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;t.innerHTML=`
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
  `,g();const s=document.getElementById("btnEditTtl");s&&s.addEventListener("click",()=>{ni(e.name,e.ttl)})}async function ni(e,t){if(i.lastStatus?.read_only){E("TTL modification is disabled in Read-Only mode.","warning");return}const n=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,t>0?t:"3600");if(n===null)return;const o=parseInt(n.trim(),10);if(isNaN(o)){E("Please enter a valid integer for TTL.","warning");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:o})})).ok)throw new Error("Failed to update TTL");E(`Updated TTL for "${e}"`,"success"),ne(e)}catch(s){E("Error updating TTL: "+s.message,"error")}}function ii(e){const t=document.getElementById("detailBodyContent");if(!t)return;const n=e.type.toLowerCase();if(n==="hash"){const o=e.fields||[],s=e.has_more_fields?Number(e.fields_cursor||0):0;i.hashFieldsState={key:e.name,cursor:s,fields:[...o],total:Number(e.length||o.length),match:null,loading:!1},t.innerHTML=`
      <div class="fields-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <input type="text" id="hashFieldSearchInput" class="field-search-input" placeholder="Filter fields (Enter: search all)" title="Filters loaded fields instantly; press Enter to search the whole hash on the server (HSCAN MATCH)">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="hashFieldCountText">${ut(o.length)}</span>
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
            ${mt(o)}
          </tbody>
        </table>
      </div>
      <div id="hashFieldsFooter" style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);"></div>
    `,g(),si(e.name),Ke();return}if(e.is_json||n.includes("json")){const o=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${p(o)}</div>
    `,g();const s=document.getElementById("btnCopyJsonValue");s&&s.addEventListener("click",async()=>{await ee(o)?(E("JSON copied to clipboard","success"),Le(s,"Copied!")):E("Failed to copy JSON to clipboard","error")});return}if(n==="string"){t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${p(e.value||"")}</div>
    `,g();const o=document.getElementById("btnCopyStringValue");o&&o.addEventListener("click",async()=>{await ee(e.value||"")?(E("Value copied to clipboard","success"),Le(o,"Copied!")):E("Failed to copy value to clipboard","error")});return}if(n==="stream"){const o=Array.isArray(e.value)?e.value:[],s=r=>{if(!r||isNaN(r))return"";const d=Math.floor((Date.now()-r)/1e3);if(d<0)return"just now";if(d<60)return`${d}s ago`;const c=Math.floor(d/60);if(c<60)return`${c}m ago`;const y=Math.floor(c/60);return y<24?`${y}h ago`:`${Math.floor(y/24)}d ago`};t.innerHTML=`
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
            `:o.map((r,d)=>{const c=r.id||"",y=String(c).match(/^(\d{10,13})-/);let u="",f="";if(y)try{const I=parseInt(y[1],10);u=new Date(I).toLocaleString(),f=s(I)}catch{}const v=r.fields||{},x=Object.entries(v),w=x.map(([I,R])=>`
                <div class="stream-entry-pill" title="${p(I)}: ${p(String(R))}">
                  <span class="pill-key">${p(I)}:</span>
                  <span class="pill-val">${p(String(R))}</span>
                </div>
              `).join(""),C=`${c} ${x.map(([I,R])=>`${I} ${R}`).join(" ")}`.toLowerCase();return`
                <tr class="stream-entry-row" data-search="${p(C)}" style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                  <td style="padding: 0.65rem 1rem; vertical-align: top;">
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                      <span style="font-family: var(--font-mono); font-size: 0.82rem; color: #06b6d4; font-weight: 600;">${p(c)}</span>
                      <button type="button" class="stream-action-icon-btn btn-copy-stream-id" data-copy="${p(c)}" title="Copy Entry ID">
                        <i data-lucide="copy" style="width: 11px; height: 11px;"></i>
                      </button>
                      <button type="button" class="stream-action-icon-btn btn-copy-stream-json" data-idx="${d}" title="Copy entry JSON">
                        <i data-lucide="code" style="width: 11px; height: 11px;"></i>
                      </button>
                    </div>
                    ${u?`
                      <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-sans); margin-top: 3px; display: flex; align-items: center; gap: 0.35rem;">
                        <span>${p(u)}</span>
                        ${f?`<span class="badge-env" style="font-size: 0.62rem; padding: 0.05rem 0.3rem;">${p(f)}</span>`:""}
                      </div>
                    `:""}
                  </td>
                  <td style="padding: 0.65rem 1rem; vertical-align: top;">
                    <div style="display: flex; flex-wrap: wrap; gap: 2px;">
                      ${w||'<span style="color: var(--text-muted); font-size: 0.78rem;">(no fields)</span>'}
                    </div>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `,g(),t.querySelectorAll(".btn-copy-stream-id").forEach(r=>{r.addEventListener("click",async()=>{const d=r.getAttribute("data-copy")||"";await ee(d)&&(r.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px; color: #10b981;"></i>',g(),setTimeout(()=>{r.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',g()},1500))})}),t.querySelectorAll(".btn-copy-stream-json").forEach(r=>{r.addEventListener("click",async()=>{const d=parseInt(r.getAttribute("data-idx")||"-1",10);d>=0&&o[d]&&await ee(JSON.stringify(o[d],null,2))&&(r.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px; color: #10b981;"></i>',g(),setTimeout(()=>{r.innerHTML='<i data-lucide="code" style="width: 11px; height: 11px;"></i>',g()},1500))})});const a=document.getElementById("streamFilterInput"),l=document.getElementById("streamFilterCountText");a&&a.addEventListener("input",()=>{const r=a.value.trim().toLowerCase(),d=t.querySelectorAll(".stream-entry-row");let c=0;d.forEach(y=>{const u=y.getAttribute("data-search")||"";!r||u.includes(r)?(y.style.display="",c++):y.style.display="none"}),l&&(l.textContent=`Showing ${c} of ${o.length} entries`)});return}if(Array.isArray(e.value)){const o=n==="zset";t.innerHTML=`
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
    `;return}t.innerHTML=`<div class="json-view-box">${p(String(e.value))}</div>`}function mt(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(t=>`
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
  `).join("")}function ut(e,t=null){const n=i.hashFieldsState,o=n?n.total:e,s=n&&n.match?`${e.toLocaleString()} matching fields loaded`:e<o?`${e.toLocaleString()} of ${o.toLocaleString()} fields loaded`:`${e.toLocaleString()} fields`;return t!==null?`${t.toLocaleString()} shown · ${s}`:s}function oi(e){return`*${e.replace(/[\\*?\[\]]/g,t=>`\\${t}`)}*`}function yt(){const e=i.hashFieldsState,t=document.getElementById("hashFieldsTableBody"),n=document.getElementById("hashFieldCountText"),o=document.getElementById("hashFieldSearchInput");if(!e||!t)return;const s=o?o.value.trim().toLowerCase():"",a=s?e.fields.filter(l=>l.field.toLowerCase().includes(s)||l.value.toLowerCase().includes(s)):e.fields;t.innerHTML=mt(a),n&&(n.textContent=ut(e.fields.length,s?a.length:null)),g(),gt(e.key),Ke()}function Ke(){const e=document.getElementById("hashFieldsFooter"),t=i.hashFieldsState;if(!e||!t)return;const n=t.cursor!==0,o=t.match?`Server-side filter: <code>${p(t.match)}</code> · <a href="#" id="btnClearHashMatch" style="color: var(--accent-primary);">clear</a>`:n?"Search applies to loaded fields. Press Enter to search all fields on the server.":"";e.innerHTML=`
    <span>${o}</span>
    ${n?`
      <button type="button" class="btn btn-secondary" id="btnLoadMoreHashFields" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" ${t.loading?"disabled":""}>
        <i data-lucide="${t.loading?"refresh-cw":"arrow-down-circle"}" ${t.loading?'class="spin"':""} style="width: 13px; height: 13px;"></i>
        ${t.loading?"Loading...":"Load More Fields"}
      </button>`:""}
  `,g();const s=document.getElementById("btnLoadMoreHashFields");s&&s.addEventListener("click",()=>Te());const a=document.getElementById("btnClearHashMatch");a&&a.addEventListener("click",l=>{l.preventDefault();const r=document.getElementById("hashFieldSearchInput");r&&(r.value=""),Te({reset:!0,match:null})})}async function Te({reset:e=!1,match:t}={}){const n=i.hashFieldsState;if(!n||n.loading||!e&&n.cursor===0)return;const o=n.key,s=e?t:n.match;n.loading=!0,Ke();try{const a=new URLSearchParams({cursor:String(e?0:n.cursor),count:String(zt)});s&&a.set("match",s);const l=await fetch(`/api/keys/${encodeURIComponent(o)}/hash/fields?${a}`);if(!l.ok){const c=await l.json().catch(()=>({}));throw new Error(c.detail||`Server error: ${l.status}`)}const r=await l.json();if(i.hashFieldsState!==n||i.activeDetailKey!==o)return;e&&(n.fields=[]);const d=new Set(n.fields.map(c=>c.field));for(const c of r.fields||[])d.has(c.field)||(d.add(c.field),n.fields.push(c));n.cursor=Number(r.cursor||0),n.total=Number(r.total??n.total),n.match=s||null}catch(a){E("Failed to load hash fields: "+a.message,"error")}finally{n.loading=!1,i.hashFieldsState===n&&yt()}}function si(e){const t=document.getElementById("hashFieldSearchInput");t&&(t.addEventListener("input",()=>yt()),t.addEventListener("keydown",o=>{if(o.key!=="Enter"||!i.hashFieldsState)return;const s=t.value.trim(),a=i.hashFieldsState;a.cursor===0&&!a.match||Te({reset:!0,match:s?oi(s):null})}));const n=document.getElementById("btnAddHashField");n&&n.addEventListener("click",async()=>{const o=prompt(`Enter field name for hash '${e}':`);if(!o)return;const s=prompt(`Enter value for field '${o}':`);if(s!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:o,value:s})})).ok)throw new Error("Failed to set field");E(`Added field "${o}" to hash`,"success"),ne(e)}catch(a){E("Error setting field: "+a.message,"error")}}),gt(e)}function gt(e){document.querySelectorAll(".btn-delete-hash-field").forEach(t=>{t.addEventListener("click",async()=>{const n=decodeURIComponent(t.getAttribute("data-field"));if(confirm(`Delete field '${n}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(n)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");E(`Deleted field "${n}"`,"success"),ne(e)}catch(o){E("Error: "+o.message,"error")}})})}function ai(e){if(!e)return null;const t=e.match(/filename\*\s*=\s*([\w-]*)'[^']*'([^;]+)/i);if(t)try{return decodeURIComponent(t[2].trim().replace(/^"|"$/g,""))}catch{}const n=e.match(/filename\s*=\s*"([^"]*)"/i)||e.match(/filename\s*=\s*([^;]+)/i);return n&&n[1].trim()?n[1].trim():null}function ft(e,t){const n=URL.createObjectURL(e),o=document.createElement("a");o.href=n,o.download=t,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function ht(e,t,n=null){let o=ai(e.headers.get("content-disposition"))||t;const s=String(e.headers.get("x-export-format")||n||"").toLowerCase();s&&!o.toLowerCase().endsWith(`.${s}`)&&(o=`${o}.${s}`);const a=await e.blob();return ft(a,o),o}async function li(e,t){if(!e)return;const n=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Downloading...',g());try{const o=await fetch(`/api/keys/${encodeURIComponent(e)}/download`);if(!o.ok){const a=await o.json().catch(()=>({}));throw new Error(a.detail||`Server error: ${o.status}`)}const s=e.replace(/[^A-Za-z0-9._-]+/g,"_")||"redis_key";await ht(o,s),o.headers.get("x-export-truncated")==="true"?E("Download was capped: only the first portion was included.","warning"):E(`Downloaded value for "${e}"`,"success")}catch(o){E("Download failed: "+o.message,"error")}finally{t&&(t.disabled=!1,t.innerHTML=n,g())}}function ri(){const e=document.getElementById("btnCloseDetailModal");e&&e.addEventListener("click",Ce);const t=document.getElementById("keyDetailModal");t&&t.addEventListener("click",a=>{a.target===t&&Ce()});const n=document.getElementById("btnCopyKeyName");n&&n.addEventListener("click",async()=>{i.activeDetailKey&&(await ee(i.activeDetailKey)?(E(`Copied key "${i.activeDetailKey}" to clipboard`,"success"),Le(n,"Key Copied!")):E("Failed to copy key to clipboard","error"))});const o=document.getElementById("btnDownloadKeyValue");o&&o.addEventListener("click",()=>{li(i.activeDetailKey,o)});const s=document.getElementById("btnDeleteKeyFromDetail");s&&s.addEventListener("click",()=>{i.activeDetailKey&&Se&&Se(i.activeDetailKey,()=>{Ce()})})}let $e=null;function di(e){$e=e}function je(e,t){if(i.lastStatus?.read_only){E("Key deletion is disabled in Read-Only mode.","warning");return}i.pendingDeleteKey=e,i.pendingDeleteCallback=t;const n=document.getElementById("deleteKeyConfirmModal"),o=document.getElementById("deleteKeyTargetName"),s=document.getElementById("inputConfirmDelete"),a=document.getElementById("btnSubmitDeleteKey");o&&(o.textContent=e),s&&(s.value=""),a&&(a.disabled=!0),n&&n.classList.add("active"),s&&s.focus(),s&&(s.oninput=()=>{const l=s.value.trim().toUpperCase();a&&(a.disabled=l!=="CONFIRM"&&s.value.trim()!==e)}),a&&(a.onclick=async()=>{a.disabled=!0,a.textContent="Deleting...";try{const l=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),r=await l.json();if(!l.ok)throw new Error(r.detail||"Failed to delete key");E(`Key "${e}" deleted permanently`,"success"),n&&n.classList.remove("active"),i.pendingDeleteCallback&&i.pendingDeleteCallback()}catch(l){E("Error deleting key: "+l.message,"error")}finally{a.disabled=!1,a.textContent="Delete Permanently"}})}function ci(){const e=document.getElementById("deleteKeyConfirmModal"),t=document.getElementById("btnCloseDeleteConfirmModal"),n=document.getElementById("btnCancelDeleteConfirm"),o=()=>e&&e.classList.remove("active");t&&t.addEventListener("click",o),n&&n.addEventListener("click",o);const s=document.getElementById("exportKeysModal"),a=document.getElementById("btnOpenExportModal"),l=document.getElementById("btnCloseExportModal"),r=document.getElementById("btnCancelExportModal"),d=document.getElementById("btnExecuteExport");if(a&&s){a.addEventListener("click",()=>{const m=document.getElementById("exportPatternDisplay"),h=document.getElementById("exportTypeDisplay"),b=document.getElementById("exportTtlDisplay"),S=document.getElementById("exportLoadedCount"),L=document.getElementById("exportScopeLoadedText"),T=i.currentTtlFilter||"all",B=T==="persistent"?"∞ No TTL (Persistent)":T==="expiring"?"⏳ Expiring Only":"All TTLs",A=T==="persistent"?i.keysTableRows.filter($=>$.ttl_seconds===-1):T==="expiring"?i.keysTableRows.filter($=>$.ttl_seconds>0):i.keysTableRows;m&&(m.textContent=i.currentPattern||"*"),h&&(h.textContent=i.currentType&&i.currentType!=="all"?i.currentType.toUpperCase():"All Types"),b&&(b.textContent=B),S&&(S.textContent=`${A.length} keys`),L&&(L.textContent=`${A.length} keys`),s.classList.add("active"),g()});const z=()=>s.classList.remove("active");l&&l.addEventListener("click",z),r&&r.addEventListener("click",z),d&&d.addEventListener("click",async()=>{const m=document.querySelector('input[name="exportFormatRadio"]:checked'),h=document.querySelector('input[name="exportScopeRadio"]:checked'),b=(m?m.value:"csv").toLowerCase(),S=h?h.value:"loaded",L=i.currentPattern||"*",T=i.currentType&&i.currentType!=="all"?i.currentType:"",B=i.currentTtlFilter&&i.currentTtlFilter!=="all"?i.currentTtlFilter:"",$=`redis_keys_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.${b}`;if(S==="all"){d.disabled=!0,d.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Exporting...',g();try{let _=`/api/keys/export?pattern=${encodeURIComponent(L)}&format=${b}`;T&&(_+=`&type=${encodeURIComponent(T)}`),B&&(_+=`&ttl_filter=${encodeURIComponent(B)}`);const D=await fetch(_);if(!D.ok){const N=await D.json().catch(()=>({detail:"Export failed"}));throw new Error(N.detail||`Server error: ${D.status}`)}await ht(D,$,b),E(`Exported keys matching "${i.currentPattern||"*"}"`,"success"),z()}catch(_){E(`Export failed: ${_.message}`,"error")}finally{d.disabled=!1,d.innerHTML='<i data-lucide="download" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Download',g()}return}const P=i.currentTtlFilter==="persistent"?i.keysTableRows.filter(_=>_.ttl_seconds===-1):i.currentTtlFilter==="expiring"?i.keysTableRows.filter(_=>_.ttl_seconds>0):i.keysTableRows;if(P.length===0){E("No keys matching filters loaded in browser to export.","warning");return}let K;if(b==="csv"){const _=`Key,Type,TTL_Seconds
`,D=P.map(N=>`"${(N.key||"").replace(/"/g,'""')}",${N.type||""},${N.ttl_seconds!==void 0?N.ttl_seconds:-1}`);K=new Blob([_+D.join(`
`)],{type:"text/csv;charset=utf-8;"})}else{const _=P.map(D=>D.key);K=new Blob([_.join(`
`)+`
`],{type:"text/plain;charset=utf-8;"})}ft(K,$),z()})}const c=document.getElementById("bulkDeleteModal"),y=document.getElementById("btnOpenBulkDeleteModal"),u=document.getElementById("btnCloseBulkDeleteModal"),f=document.getElementById("btnCancelBulkDelete"),v=document.getElementById("btnConfirmBulkDelete"),x=document.getElementById("bdCountConfirmInput"),w=document.getElementById("bdProdConfirmInput"),C=document.getElementById("bdProdConfirmGroup"),I=document.getElementById("bulkDeleteProdBanner"),R=document.getElementById("bulkDeleteDryRunStatus"),O=document.getElementById("bulkDeleteDetails");let F=null;function U(){if(!F||!v)return;const z=String(F.matched_count),h=(x?.value||"").trim()===z&&F.matched_count>0;let b=!0;F.is_prod&&(b=(w?.value||"").trim().toUpperCase()==="PROD"),v.disabled=!(h&&b)}if(x&&x.addEventListener("input",U),w&&w.addEventListener("input",U),y&&c){y.addEventListener("click",async()=>{if(i.lastStatus?.read_only){E("Bulk Delete is disabled in Read-Only mode.","warning");return}const m=i.currentPattern||"*",h=i.currentType&&i.currentType!=="all"?i.currentType:null;F=null,x&&(x.value=""),w&&(w.value=""),v&&(v.disabled=!0),R&&(R.style.display="block"),O&&(O.style.display="none"),c.classList.add("active"),g();try{const b=await fetch("/api/keys/bulk-delete/dry-run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:m,type_filter:h})});if(!b.ok){const D=await b.json().catch(()=>({detail:"Dry run failed"}));throw new Error(D.detail||"Dry run failed")}const S=await b.json();F=S;const L=document.getElementById("bdPatternDisplay"),T=document.getElementById("bdTypeDisplay"),B=document.getElementById("bdCountDisplay"),A=document.getElementById("bdRequiredCountText");L&&(L.textContent=S.pattern),T&&(T.textContent=S.type_filter?S.type_filter.toUpperCase():"All Types"),B&&(B.textContent=S.matched_count.toLocaleString()),A&&(A.textContent=String(S.matched_count)),S.is_prod?(I&&(I.style.display="block"),C&&(C.style.display="block")):(I&&(I.style.display="none"),C&&(C.style.display="none"));const $=document.getElementById("bdPerNodeBreakdown"),P=Object.entries(S.per_node_counts||{});$&&(P.length>1?($.innerHTML="<strong>Per-node breakdown:</strong> "+P.map(([D,N])=>`${p(D)}: ${N.toLocaleString()}`).join(" &bull; "),$.style.display="block"):$.style.display="none");const K=document.getElementById("bdSampleKeysList"),_=document.getElementById("bdSampleKeysSection");K&&_&&(S.sample_keys&&S.sample_keys.length>0?(K.innerHTML=S.sample_keys.map(D=>`<div>${p(D)}</div>`).join(""),_.style.display="block"):_.style.display="none"),R&&(R.style.display="none"),O&&(O.style.display="flex"),g()}catch(b){R&&(R.innerHTML=`
            <div style="color: var(--accent-danger);">
              <i data-lucide="alert-circle" style="width: 20px; height: 20px; margin-bottom: 0.35rem; display: inline-block;"></i>
              <div>Failed to calculate dry-run: ${p(b.message)}</div>
            </div>
          `,g())}});const z=()=>c.classList.remove("active");u&&u.addEventListener("click",z),f&&f.addEventListener("click",z),v&&v.addEventListener("click",async()=>{if(F){v.disabled=!0,v.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlinking...',g();try{const m=await fetch("/api/keys/bulk-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:F.pattern,type_filter:F.type_filter,expected_count:F.matched_count,confirmed_count:parseInt(x.value.trim(),10),confirmed_env:w?w.value.trim():null})});if(!m.ok){const b=await m.json().catch(()=>({detail:"Bulk delete failed"}));throw new Error(b.detail||"Bulk delete failed")}const h=await m.json();E(`Bulk delete complete: ${h.message} (${h.duration_ms}ms)`,"success",4e3),z(),$e&&$e()}catch(m){E(`Bulk delete error: ${m.message}`,"error"),v.disabled=!1,v.innerHTML='<i data-lucide="trash-2" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlink Keys',g()}}})}}async function q(){i.isScanning=!1,i.currentScanEpoch++;const e=i.currentScanEpoch;i.currentCursor=0,i.scanComplete=!1,i.totalScanned=0,i.keysTableRows=[],i.loadedKeysSet.clear(),i.treeInitialized=!1,i.treeExpandedPaths.clear();const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="none"),n&&(n.style.display="block"),Ct(),await vt(e)}function te(){const e=document.getElementById("btnToggleAutoRefresh"),t=document.getElementById("autoRefreshStatusText"),n=document.getElementById("autoRefreshIntervalSelect");if(!(!e||!t))if(i.isAutoRefreshActive){e.classList.add("active");const o=i.autoRefreshRemainingSec>=60?`${Math.floor(i.autoRefreshRemainingSec/60)}m ${i.autoRefreshRemainingSec%60}s`:`${i.autoRefreshRemainingSec}s`;e.title=`Auto-refresh active (Pattern: "${i.currentPattern||"*"}"). Refreshing in ${o}. Click to pause.`,t.textContent=`Auto: ${o}`,n&&(n.value=String(i.autoRefreshIntervalSec))}else{e.classList.remove("active");const o=i.autoRefreshIntervalSec>=60?`${Math.floor(i.autoRefreshIntervalSec/60)}m`:`${i.autoRefreshIntervalSec}s`;e.title=`Click to watch keys matching pattern "${i.currentPattern||"*"}" every ${o}`,t.textContent="Auto: Off",n&&(n.value=String(i.autoRefreshIntervalSec))}}function ae(){i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,te()}function pi(){i.isAutoRefreshActive=!0,i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,te(),i.autoRefreshTimer&&clearInterval(i.autoRefreshTimer),i.autoRefreshTimer=setInterval(async()=>{if(!i.isAutoRefreshActive)return;const e=document.querySelector(".modal-backdrop.active");document.hidden||e||(i.autoRefreshRemainingSec--,i.autoRefreshRemainingSec<=0?(i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,te(),i.cachedConnections.some(n=>n.is_connected)&&!i.isScanning&&await q()):te())},1e3)}function mi(){i.isAutoRefreshActive=!1,i.autoRefreshTimer&&(clearInterval(i.autoRefreshTimer),i.autoRefreshTimer=null),i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,te()}function ui(){i.isAutoRefreshActive?mi():pi()}function Ue(e){if(e==null)return!0;const t=String(e).trim();if(t===""||t==="0")return!0;if(t.startsWith("{"))try{return Object.values(JSON.parse(t)).every(n=>Number(n)===0)}catch{return!1}return!1}function yi(e){const t=String(e??"").trim();if(t.startsWith("{"))try{const n=Object.values(JSON.parse(t));return`${n.filter(s=>Number(s)!==0).length} of ${n.length} nodes still scanning`}catch{return"more keys available"}return"more keys available"}function gi(){return!!(i.lastStatus&&i.lastStatus.is_cluster)||String(i.currentCursor??"").trim().startsWith("{")}async function vt(e=null){if(i.isScanning||i.scanComplete)return;const t=e!==null?e:i.currentScanEpoch;i.isScanning=!0,it();try{const n=`/api/keys?pattern=${encodeURIComponent(i.currentPattern)}&cursor=${encodeURIComponent(String(i.currentCursor??"0"))}&count=${i.scanBatchSize}${i.currentType!=="all"?`&type=${encodeURIComponent(i.currentType)}`:""}`,o=await fetch(n);if(!o.ok)throw new Error("Failed to scan keys");const s=await o.json();if(t!==i.currentScanEpoch)return;i.currentCursor=s.cursor,i.scanComplete=Ue(i.currentCursor),i.dbTotalKeys=s.total_in_db;const l=(s.keys||[]).filter(d=>i.loadedKeysSet.has(d.name)?!1:(i.loadedKeysSet.add(d.name),!0)).map(d=>({key:d.name,type:d.type,ttl_seconds:d.ttl,status:d.ttl===-1?"Persistent":d.ttl===-2?"Expired":`Expires in ${d.ttl}s`}));l.length>0&&i.keysTableRows.push(...l),Ct(),i.totalScanned=i.loadedKeysSet.size;const r=document.getElementById("tabBadgeKeys");r&&(r.textContent=i.totalScanned.toLocaleString())}catch(n){console.error("Scan error:",n)}finally{t===i.currentScanEpoch&&(i.isScanning=!1,it())}}const pe=[":","/",".","-","_"],tt={auto:[":","/","."],":":[":"],"/":["/"],".":["."],"-":["-"],_:["_"]};function bt(){if(i.lastStatus?.connection_id)return i.lastStatus.connection_id;const e=i.cachedConnections?.find(n=>n.is_selected);if(e)return e.id;const t=i.cachedConnections?.find(n=>n.is_connected);return t?t.id:null}function ye(e){if(!Array.isArray(e)||e.length===0)return"custom";const t=new Set(e);if(t.size===3&&t.has(":")&&t.has("/")&&t.has("."))return"auto";if(t.size===1){if(t.has(":"))return":";if(t.has("/"))return"/";if(t.has("."))return".";if(t.has("-"))return"-";if(t.has("_"))return"_"}return"custom"}function me(e=null){const t=e||bt();t&&localStorage.setItem(`redis_insight_tree_delimiters_${t}`,JSON.stringify(i.activeTreeDelimiters)),localStorage.setItem("redis_insight_tree_delimiters_global",JSON.stringify(i.activeTreeDelimiters)),localStorage.setItem("redis_insight_tree_delimiter_preset",i.treeDelimiterPreset),localStorage.setItem("redis_insight_custom_delimiters",JSON.stringify(i.customTreeDelimiters))}function fi(e=null){const t=e||bt();let n=null;if(t){const s=localStorage.getItem(`redis_insight_tree_delimiters_${t}`);if(s)try{const a=JSON.parse(s);Array.isArray(a)&&a.length>0&&(n=a)}catch{}}if(!n){const s=localStorage.getItem("redis_insight_tree_delimiters_global");if(s)try{const a=JSON.parse(s);Array.isArray(a)&&a.length>0&&(n=a)}catch{}}Array.isArray(n)&&n.length>0?i.activeTreeDelimiters=n:i.activeTreeDelimiters=[":","/","."];const o=localStorage.getItem("redis_insight_custom_delimiters");if(o)try{const s=JSON.parse(o);Array.isArray(s)&&(i.customTreeDelimiters=s)}catch{}i.treeDelimiterPreset=ye(i.activeTreeDelimiters)}function hi(e,t=i.activeTreeDelimiters){if(!e||!t||t.length===0)return{segments:[],leafName:e||""};const n=[...t].filter(l=>typeof l=="string"&&l.length>0).sort((l,r)=>r.length-l.length);if(n.length===0)return{segments:[],leafName:e};const o=[];let s=0;for(;s<e.length;){let l=-1,r=null;for(const c of n){const y=e.indexOf(c,s);y!==-1&&(l===-1||y<l?(l=y,r=c):y===l&&c.length>(r?r.length:0)&&(r=c))}if(l===-1)break;const d=e.slice(s,l);(d!==""||o.length>0)&&o.push({name:d,delim:r}),s=l+r.length}const a=e.slice(s);return o.length===0?{segments:[],leafName:e}:{segments:o,leafName:a||"(empty)"}}function vi(e,t=i.activeTreeDelimiters){const n={id:"__root__",name:"Root",fullPrefix:"",delimiter:"",depth:-1,folders:new Map,keys:[],totalKeyCount:0},o=Array.isArray(t)?t:typeof t=="string"&&t!=="auto"?[t]:i.activeTreeDelimiters||[":","/","."];for(const a of e){const l=a.key||"",{segments:r,leafName:d}=hi(l,o);if(r.length===0){n.keys.push({...a,leafName:l});continue}let c=n,y="";for(let u=0;u<r.length;u++){const{name:f,delim:v}=r[u];y+=f+v;const x=y;c.folders.has(f)||c.folders.set(f,{id:x,name:f,fullPrefix:x,delimiter:v,depth:u,folders:new Map,keys:[],totalKeyCount:0}),c=c.folders.get(f)}c.keys.push({...a,leafName:d||"(empty)"})}function s(a){let l=a.keys.length;a.keys.sort((d,c)=>(d.leafName||d.key).localeCompare(c.leafName||c.key));const r=new Map([...a.folders.entries()].sort((d,c)=>d[0].localeCompare(c[0])));a.folders=r;for(const d of a.folders.values())s(d),l+=d.totalKeyCount;a.totalKeyCount=l}return s(n),n}function xt(e,t){if(e.name.toLowerCase().includes(t)||e.fullPrefix.toLowerCase().includes(t))return!0;for(const n of e.keys)if(n.key.toLowerCase().includes(t)||n.leafName&&n.leafName.toLowerCase().includes(t))return!0;for(const n of e.folders.values())if(xt(n,t))return!0;return!1}function wt(){const e=(i.currentTtlFilter||"all").toLowerCase();return e==="expiring"?i.keysTableRows.filter(t=>t.ttl_seconds>0):e==="persistent"||e==="no-ttl"?i.keysTableRows.filter(t=>t.ttl_seconds===-1):i.keysTableRows}const le=44,nt=20;function ke(e){const t=encodeURIComponent(e.key),o=!!i.lastStatus?.read_only?`<span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
         <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
       </span>`:`<button type="button" class="btn-icon danger btn-delete-key-table" data-key="${t}" title="Delete key">
         <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
       </button>`,s=e.ttl_seconds===-1?'<span class="badge-persistent" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.72rem; font-weight: 600;">∞ No TTL</span>':`<span class="badge-expiring" style="color: var(--accent-warning); font-size: 0.78rem;">⏳ ${p(e.status)}</span>`;return`
    <tr class="key-row" data-key="${t}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer; height: ${le}px;">
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 380px;">
        <span class="btn-inspect-key" data-key="${t}" title="${p(e.key)}">${p(e.key)}</span>
      </td>
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase;">
        <span class="badge-db">${p(e.type)}</span>
      </td>
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary);">
        ${e.ttl_seconds===-1?'<span style="color: var(--text-muted);">None</span>':`${e.ttl_seconds}s`}
      </td>
      <td style="padding: 0.65rem 1rem; font-size: 0.8rem;">
        ${s}
      </td>
      <td style="padding: 0.65rem 1rem; text-align: right;" onclick="event.stopPropagation()">
        ${o}
      </td>
    </tr>
  `}function bi(){const e=document.getElementById("gridViewerContainer");if(!e)return;const t=wt();if(t.length===0){if(i.isScanning&&i.keysTableRows.length===0){e.innerHTML=`
        <div class="table-loading-card">
          <div class="spinner-ring"></div>
          <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">Scanning Keyspace...</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">Fetching keys matching "<code>${p(i.currentPattern)}</code>" from Redis</div>
        </div>
      `;return}if(i.keysTableRows.length>0){e.innerHTML=`
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${p(i.currentTtlFilter)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${i.keysTableRows.length.toLocaleString()} total keys scanned so far)</span>
        </div>
      `;return}const u=!i.scanComplete&&Ue(i.currentCursor);e.innerHTML=i.scanComplete?`
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
    `;return}const n=t.length;if(!(n>100)){e.innerHTML=`
      <div style="overflow-y: auto; height: 100%; width: 100%; padding: 0.5rem;" id="keysTableViewport">
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
          <tbody id="keysTableBody">
            ${t.map(ke).join("")}
          </tbody>
        </table>
      </div>
    `;return}const s=n*le,a=Math.min(n,60);e.innerHTML=`
    <div class="virtual-scroll-viewport" id="keysTableViewport" style="overflow-y: auto; height: 100%; width: 100%; padding: 0.5rem; position: relative;">
      <div class="virtual-scroll-spacer" style="height: ${s}px; width: 100%; position: relative;">
        <div class="virtual-scroll-content" id="virtualScrollContent" style="position: absolute; top: 0px; left: 0; right: 0;">
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
            <tbody id="keysTableBody">
              ${t.slice(0,a).map(ke).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;const l=document.getElementById("keysTableViewport"),r=document.getElementById("virtualScrollContent"),d=document.getElementById("keysTableBody");let c=0,y=a;l&&r&&d&&l.addEventListener("scroll",()=>{const u=l.scrollTop,f=l.clientHeight||600,v=Math.max(0,Math.floor(u/le)-nt),x=Math.ceil(f/le),w=Math.min(n,v+x+nt*2);if(v!==c||w!==y){c=v,y=w;const C=v*le;r.style.top=`${C}px`,d.innerHTML=t.slice(v,w).map(ke).join("")}},{passive:!0})}function J(){const e=document.getElementById("gridViewerContainer");if(!e)return;const t=wt();if(t.length===0){if(i.keysTableRows.length>0){e.innerHTML=`
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${p(i.currentTtlFilter)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${i.keysTableRows.length.toLocaleString()} total keys scanned so far)</span>
        </div>
      `;return}const m=!i.scanComplete&&Ue(i.currentCursor);e.innerHTML=i.scanComplete?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${p(i.currentPattern)}</code>".
      </div>
    `:m?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${p(i.currentPattern)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${p(i.currentPattern)}</code>" in the part of the keyspace scanned so far.<br>
        The scan is not finished — click <strong>Load More</strong> to keep scanning.
      </div>
    `;return}const n=vi(t,i.activeTreeDelimiters);if(!i.treeInitialized&&i.treeExpandedPaths.size===0){for(const m of n.folders.values())i.treeExpandedPaths.add(m.id);i.treeInitialized=!0}function o(m){let h=m.folders.size;for(const b of m.folders.values())h+=o(b);return h}const s=o(n),a=!!i.currentTreeFilterQuery.trim(),l=i.currentTreeFilterQuery.trim().toLowerCase();function r(m,h){const b=encodeURIComponent(m.key);return`
      <div class="tree-node tree-leaf key-row" data-key="${b}" style="padding-left: ${h*20+26}px;">
        <div class="tree-node-content">
          <div class="tree-key-icon">
            <i data-lucide="key" style="width: 13px; height: 13px;"></i>
          </div>
          <span class="tree-key-name btn-inspect-key" data-key="${b}" title="${p(m.key)}">
            ${p(m.leafName||m.key)}
          </span>
          <span class="badge-db" style="margin-left: 0.35rem; font-size: 0.68rem; text-transform: uppercase;">${p(m.type)}</span>
          ${m.ttl_seconds===-1?'<span class="badge-persistent" style="margin-left: 0.35rem; font-size: 0.65rem; padding: 0.08rem 0.35rem; border-radius: 4px; background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); font-weight: 600;">∞ No TTL</span>':`<span class="tree-key-ttl" title="Expires in ${m.ttl_seconds}s">⏳ ${m.ttl_seconds}s</span>`}
          <span class="tree-key-status" style="color: ${m.ttl_seconds===-1?"var(--text-muted)":"var(--accent-warning)"};">${p(m.status)}</span>
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
    `}function d(m,h){if(a&&!xt(m,l))return"";const b=a?!0:i.treeExpandedPaths.has(m.id),S=encodeURIComponent(m.id);let L="";if(b){for(const T of m.folders.values())L+=d(T,h+1);for(const T of m.keys)a&&!T.key.toLowerCase().includes(l)&&!(T.leafName&&T.leafName.toLowerCase().includes(l))||(L+=r(T,h+1))}return`
      <div class="tree-folder-group" data-folder-id="${S}">
        <div class="tree-node tree-folder" data-folder-id="${S}" style="padding-left: ${h*20+8}px;">
          <div class="tree-node-content">
            <button type="button" class="tree-toggle-btn" title="${b?"Collapse":"Expand"}">
              <i data-lucide="${b?"chevron-down":"chevron-right"}" style="width: 14px; height: 14px;"></i>
            </button>
            <div class="tree-folder-icon">
              <i data-lucide="${b?"folder-open":"folder"}" style="width: 15px; height: 15px;"></i>
            </div>
            <span class="tree-folder-name" title="${p(m.fullPrefix)}">
              ${p(m.name)}<span class="tree-folder-delim">${p(m.delimiter)}</span>
            </span>
            <span class="tree-count-badge" title="${m.totalKeyCount} keys in this namespace">
              ${m.totalKeyCount.toLocaleString()} ${m.totalKeyCount===1?"key":"keys"}
            </span>
            <button type="button" class="tree-filter-prefix-btn" data-prefix="${p(m.fullPrefix)}" title="Filter keys matching '${p(m.fullPrefix)}*'">
              <i data-lucide="filter" style="width: 11px; height: 11px;"></i>
              <span>Filter</span>
            </button>
          </div>
        </div>
        <div class="tree-children" style="display: ${b?"block":"none"};">
          ${L}
        </div>
      </div>
    `}let c="";if(n.keys.length>0){const m=a?n.keys.filter(h=>h.key.toLowerCase().includes(l)||h.leafName&&h.leafName.toLowerCase().includes(l)):n.keys;m.length>0&&(c=`
        <div class="tree-root-keys-section">
          <div class="tree-root-keys-header" style="padding-left: 10px;">
            <span class="tree-root-keys-title">ROOT KEYS (NO DELIMITER)</span>
            <span class="tree-count-badge">${m.length.toLocaleString()} ${m.length===1?"key":"keys"}</span>
          </div>
          <div class="tree-root-keys-list">
            ${m.map(h=>r(h,0)).join("")}
          </div>
        </div>
      `)}const u=[...pe,...(i.customTreeDelimiters||[]).filter(m=>!pe.includes(m))].map(m=>{const h=(i.activeTreeDelimiters||[]).includes(m),b=!pe.includes(m);return`
      <span class="tree-delim-chip ${h?"active":""} ${b?"custom":""}" data-delim="${p(m)}" title="${h?"Click to disable":"Click to enable"} delimiter '${p(m)}'">
        <span class="delim-char">${p(m)}</span>
        ${b?`<button type="button" class="tree-delim-chip-remove" data-remove-delim="${p(m)}" title="Remove custom delimiter">&times;</button>`:""}
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
              ${u}
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
        ${[...n.folders.values()].map(m=>d(m,0)).join("")}
        ${c}
      </div>
    </div>
  `,g(),e.querySelectorAll(".tree-folder").forEach(m=>{m.addEventListener("click",h=>{if(h.target.closest(".tree-filter-prefix-btn"))return;const b=decodeURIComponent(m.getAttribute("data-folder-id"));i.treeExpandedPaths.has(b)?i.treeExpandedPaths.delete(b):i.treeExpandedPaths.add(b),J()})}),e.querySelectorAll(".tree-filter-prefix-btn").forEach(m=>{m.addEventListener("click",h=>{h.stopPropagation();const b=m.getAttribute("data-prefix"),S=document.getElementById("keySearchInput");S&&b&&(S.value=b+"*",i.currentPattern=b+"*",q())})});const f=document.getElementById("treeDelimiterSelect");f&&f.addEventListener("change",m=>{const h=m.target.value;h==="custom"?i.treeDelimiterPreset="custom":tt[h]&&(i.activeTreeDelimiters=[...tt[h]],i.treeDelimiterPreset=h),me(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J()}),e.querySelectorAll(".tree-delim-chip").forEach(m=>{m.addEventListener("click",h=>{if(h.target.closest(".tree-delim-chip-remove"))return;const b=m.getAttribute("data-delim");b&&(i.activeTreeDelimiters.includes(b)?i.activeTreeDelimiters=i.activeTreeDelimiters.filter(S=>S!==b):i.activeTreeDelimiters.push(b),i.treeDelimiterPreset=ye(i.activeTreeDelimiters),me(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J())})}),e.querySelectorAll(".tree-delim-chip-remove").forEach(m=>{m.addEventListener("click",h=>{h.stopPropagation();const b=m.getAttribute("data-remove-delim");b&&(i.customTreeDelimiters=(i.customTreeDelimiters||[]).filter(S=>S!==b),i.activeTreeDelimiters=(i.activeTreeDelimiters||[]).filter(S=>S!==b),i.treeDelimiterPreset=ye(i.activeTreeDelimiters),me(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J())})});const v=document.getElementById("btnAddDelimToggle"),x=document.getElementById("treeCustomDelimPopover"),w=document.getElementById("customDelimInput"),C=document.getElementById("btnConfirmAddDelim"),I=document.getElementById("btnCancelAddDelim");v&&x&&v.addEventListener("click",m=>{m.stopPropagation();const h=x.style.display!=="none";x.style.display=h?"none":"flex",!h&&w&&(w.value="",w.focus())});function R(){if(!w)return;const m=w.value.trim();m&&(!i.customTreeDelimiters.includes(m)&&!pe.includes(m)&&i.customTreeDelimiters.push(m),i.activeTreeDelimiters.includes(m)||i.activeTreeDelimiters.push(m),i.treeDelimiterPreset=ye(i.activeTreeDelimiters),me(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J())}C&&C.addEventListener("click",m=>{m.stopPropagation(),R()}),w&&w.addEventListener("keydown",m=>{m.key==="Enter"?(m.preventDefault(),R()):m.key==="Escape"&&x&&(x.style.display="none")}),I&&I.addEventListener("click",m=>{m.stopPropagation(),x&&(x.style.display="none")});const O=document.getElementById("btnExpandAllTree");O&&O.addEventListener("click",()=>{function m(h){for(const b of h.folders.values())i.treeExpandedPaths.add(b.id),m(b)}m(n),J()});const F=document.getElementById("btnCollapseAllTree");F&&F.addEventListener("click",()=>{i.treeExpandedPaths.clear(),J()});const U=document.getElementById("treeFilterInput");U&&U.addEventListener("input",m=>{i.currentTreeFilterQuery=m.target.value,J();const h=document.getElementById("treeFilterInput");h&&(h.focus(),h.setSelectionRange(h.value.length,h.value.length))});const z=document.getElementById("btnClearTreeFilter");z&&z.addEventListener("click",()=>{i.currentTreeFilterQuery="",J()})}function ge(){i.currentViewMode==="tree"?J():bi()}function Ct(){ge()}function xi(){const e=document.getElementById("scanChunkLabel");e&&(e.textContent=`Safe SCAN (Chunk ${i.scanBatchSize.toLocaleString()})`)}function it(){const e=document.getElementById("scanStatusText"),t=document.getElementById("btnScanNext"),n=document.getElementById("keysLoadingShimmer"),o=!!i.isScanning,s=i.scanComplete;n&&n.classList.toggle("active",o),e&&(e.innerHTML=`
      ${o?'<span style="color: var(--accent-primary); display: inline-flex; align-items: center; gap: 5px; margin-right: 6px;"><span class="spin" style="display: inline-block;">↻</span> Scanning chunk...</span>':""}
      Loaded <strong>${i.totalScanned.toLocaleString()}</strong> keys
      ${s?'<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>':`<span style="color: var(--text-muted);">(${p(yi(i.currentCursor))})</span>`}
      | ${gi()?"Cluster Total":"DB Total"}: <strong>${Number(i.dbTotalKeys||0).toLocaleString()}</strong>
    `),t&&(t.disabled=o||s,t.innerHTML=o?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':s?'<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More',g())}function wi(){const e=document.getElementById("gridViewerContainer");e&&e.addEventListener("click",f=>{const v=f.target.closest(".btn-delete-key-table");if(v){f.stopPropagation();const C=decodeURIComponent(v.getAttribute("data-key"));je(C,()=>{q()});return}const x=f.target.closest(".btn-inspect-key");if(x){f.stopPropagation();const C=decodeURIComponent(x.getAttribute("data-key"));ne(C);return}const w=f.target.closest(".key-row");if(w){const C=decodeURIComponent(w.getAttribute("data-key"));ne(C);return}});const t=document.getElementById("keySearchInput");let n=null;t&&(t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>{i.currentPattern=t.value.trim()||"*",ae(),q()},500)}),t.addEventListener("keydown",f=>{f.key==="Enter"&&(clearTimeout(n),i.currentPattern=t.value.trim()||"*",ae(),q())}));const o=document.getElementById("typeFilterGroup");o&&o.addEventListener("click",f=>{const v=f.target.closest(".type-tab");v&&v.dataset.type&&(o.querySelectorAll(".type-tab").forEach(x=>x.classList.remove("active")),v.classList.add("active"),i.currentType=v.dataset.type,ae(),q())});const s=document.getElementById("ttlFilterSelect");s&&s.addEventListener("change",f=>{i.currentTtlFilter=f.target.value,ge()});const a=document.getElementById("btnScanNext");a&&a.addEventListener("click",()=>vt());const l=document.getElementById("btnResetScan");l&&l.addEventListener("click",()=>{ae(),q()});const r=document.getElementById("scanBatchSizeSelect");r&&r.addEventListener("change",f=>{i.scanBatchSize=parseInt(f.target.value,10)||50,xi()});const d=document.getElementById("btnViewTable"),c=document.getElementById("btnViewTree");d&&d.addEventListener("click",()=>{i.currentViewMode!=="table"&&(i.currentViewMode="table",localStorage.setItem("redis_insight_view_mode","table"),d.classList.add("active"),c&&c.classList.remove("active"),ge())}),c&&c.addEventListener("click",()=>{i.currentViewMode!=="tree"&&(i.currentViewMode="tree",localStorage.setItem("redis_insight_view_mode","tree"),c.classList.add("active"),d&&d.classList.remove("active"),ge())});const y=document.getElementById("btnToggleAutoRefresh");y&&y.addEventListener("click",()=>{ui()});const u=document.getElementById("autoRefreshIntervalSelect");u&&u.addEventListener("change",f=>{const v=parseInt(f.target.value,10);!isNaN(v)&&v>=5&&(i.autoRefreshIntervalSec=v,localStorage.setItem("redis_insight_auto_refresh_sec",String(v)),ae())}),te()}let Ie=null,Be=null,_e=null,V=null;function Ci(e,t,n){Ie=e,Be=t,_e=n}function ki(e){if(V){try{V.abort()}catch{}V=null}i.isMemoryProfilingRunning=!1,i.currentMemoryOverview=null,i.currentMemoryAnalysis=null,i.memoryLoadedForConnId=null,Me(e),re({notice:"Cluster switched. Diagnostic caches cleared. Click below to profile the active cluster."})}function Me(e){const t=document.getElementById("memoryOverviewContainer");if(!t)return;const n=e||i.cachedConnections.find(d=>String(d.id)===String(i.selectedConnectionId)||d.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",s=n?n.host:i.lastStatus?.host||"127.0.0.1",a=n?n.port:i.lastStatus?.port||6379,l=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div class="mem-cluster-prompt-card" style="padding: 1.5rem; text-align: center; background: rgba(15,23,42,0.6); border: 1px dashed var(--border-subtle); border-radius: 8px;">
      <div style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; flex-wrap: wrap; justify-content: center;">
        <i data-lucide="server" style="width: 16px; height: 16px; color: #a78bfa;"></i>
        <strong style="color: var(--text-primary); font-size: 0.95rem;">${p(o)}</strong>
        <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">(${p(s)}:${a})</span>
        <span class="badge-env badge-env-${l.toLowerCase()}">${l}</span>
      </div>
      <p style="margin: 0.25rem 0 1rem; font-size: 0.8rem; color: var(--text-muted); max-width: 460px; margin-left: auto; margin-right: auto;">
        Cluster metrics ready. Click below to query live used memory, fragmentation ratio, and cache hit metrics.
      </p>
      <button type="button" class="btn btn-primary" id="btnLoadMemoryOverviewExplicit" style="padding: 0.45rem 1.15rem; font-size: 0.82rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        <span>Load Memory Overview</span>
      </button>
    </div>
  `,g();const r=document.getElementById("btnLoadMemoryOverviewExplicit");r&&r.addEventListener("click",()=>{qe()})}async function Ve(){H("memory"),i.memoryLoadedForConnId!==i.selectedConnectionId?Me():i.currentMemoryOverview?kt(i.currentMemoryOverview):Me(),i.currentMemoryAnalysis&&i.currentMemoryAnalysis._target_conn_id===i.selectedConnectionId?Ge(i.currentMemoryAnalysis):re()}function Ei(){H("keys")}async function qe(){const e=document.getElementById("memoryOverviewContainer");if(!e)return;const t=i.selectedConnectionId;e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,g();try{const n=await fetch("/api/memory/overview");if(!n.ok)throw new Error("Failed to fetch memory overview");const o=await n.json();if(i.selectedConnectionId!==t)return;i.currentMemoryOverview=o,i.memoryLoadedForConnId=t,kt(i.currentMemoryOverview)}catch(n){if(i.selectedConnectionId!==t)return;e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${p(n.message)}</p>
        <button type="button" class="btn btn-secondary btn-sm" id="btnRetryMemOverview" style="margin-top: 0.5rem;">Retry</button>
      </div>
    `,g();const o=document.getElementById("btnRetryMemOverview");o&&(o.onclick=()=>qe())}}function kt(e){const t=document.getElementById("memoryOverviewContainer");if(!t||!e)return;let n="mem-status-healthy",o="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(n="mem-status-critical",o="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(n="mem-status-warning",o=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),t.innerHTML=`
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
  `,g()}function re(e={}){const t=document.getElementById("memoryProfilingContainer");if(!t)return;const n=i.cachedConnections.find(c=>String(c.id)===String(i.selectedConnectionId)||c.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",s=n?n.host:i.lastStatus?.host||"127.0.0.1",a=n?n.port:i.lastStatus?.port||6379,l=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase(),r=e?.notice;t.innerHTML=`
    ${r?`
      <div style="background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--radius-md); padding: 0.65rem 1rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #38bdf8;">
        <i data-lucide="info" style="width: 15px; height: 15px; flex-shrink: 0;"></i>
        <span>${p(r)}</span>
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
          <span class="badge-env badge-env-${l.toLowerCase()}">${l}</span>
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
  `,g();const d=document.getElementById("btnStartProfilingAction");d&&d.addEventListener("click",()=>{const c=document.getElementById("memScanModeSelect")?.value||"sample",y=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,u=document.getElementById("memSamplePatternInput").value||"*";if(c==="full"){const f=document.getElementById("deepScanSafetyModal");if(f){f.classList.add("active"),g();const v=()=>f.classList.remove("active"),x=document.getElementById("btnCancelDeepScan"),w=document.getElementById("btnCloseDeepScanModal"),C=document.getElementById("btnConfirmDeepScan");x&&(x.onclick=v),w&&(w.onclick=v),C&&(C.onclick=()=>{v(),ot(y,u,"full")});return}}ot(y,u,c)})}async function ot(e=500,t="*",n="sample"){const o=document.getElementById("memoryProfilingContainer");if(!o)return;if(V)try{V.abort()}catch{}V=new AbortController;const s=V.signal,a=i.selectedConnectionId;i.isMemoryProfilingRunning=!0;const l=n==="full";o.innerHTML=`
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: ${l?"#f59e0b":"#a78bfa"}; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">
        ${l?"Running Deep Non-Blocking Cluster Scan...":"Analyzing Redis Keyspace..."}
      </h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 520px; margin: 0 auto 1.25rem; line-height: 1.5;">
        ${l?"Scanning across cluster primary nodes using non-blocking cursors with bounded concurrency pool and calculating TTL space reclaim forecast...":`Scanning sample of up to <strong>${e.toLocaleString()}</strong> keys (pattern <code>${p(t)}</code>) and measuring memory allocations...`}
      </p>
      <button type="button" class="btn btn-secondary" id="btnCancelMemoryProfiling" style="padding: 0.4rem 1rem; font-size: 0.8rem; border-color: rgba(239, 68, 68, 0.4); color: #f87171;">
        <i data-lucide="x-circle" style="width: 14px; height: 14px;"></i>
        Cancel Scan
      </button>
    </div>
  `,g();const r=document.getElementById("btnCancelMemoryProfiling");r&&(r.onclick=()=>{if(V)try{V.abort()}catch{}});try{const d=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:t,scan_mode:n}),signal:s});if(!d.ok)throw new Error("Failed to complete memory profiling");const c=await d.json();if(i.selectedConnectionId!==a){console.warn("Discarding memory profiling response for switched cluster:",a);return}c._target_conn_id=a,c._analyzed_at=new Date().toISOString(),i.currentMemoryAnalysis=c,i.isMemoryProfilingRunning=!1,Ge(i.currentMemoryAnalysis)}catch(d){if(i.isMemoryProfilingRunning=!1,d.name==="AbortError"){re({notice:"Memory scan was cancelled."});return}if(i.selectedConnectionId===a){o.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Memory Profiling Failed</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(d.message)}</p>
          <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Back to Profiling Safeguards</button>
        </div>
      `,g();const c=document.getElementById("btnRetryProfiling");c&&(c.onclick=()=>re())}}finally{V&&V.signal===s&&(V=null)}}function Ge(e){const t=document.getElementById("memoryProfilingContainer");if(!t||!e)return;const n=i.cachedConnections.find(u=>String(u.id)===String(e._target_conn_id||i.selectedConnectionId)||u.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",s=n?n.host:i.lastStatus?.host||"127.0.0.1",a=n?n.port:i.lastStatus?.port||6379,l=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase(),r=e._analyzed_at?new Date(e._analyzed_at).toLocaleTimeString():new Date().toLocaleTimeString(),d={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};t.innerHTML=`
    <!-- Cluster Target Banner -->
    <div class="mem-target-cluster-banner" style="display: flex; align-items: center; justify-content: space-between; background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: var(--radius-md); padding: 0.6rem 1rem; margin-bottom: 0.85rem; font-size: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
      <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
        <span style="display: inline-flex; align-items: center; gap: 0.35rem; color: #38bdf8; font-weight: 600;">
          <i data-lucide="server" style="width: 14px; height: 14px;"></i>
          ${p(o)}
        </span>
        <span style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.75rem;">(${p(s)}:${a})</span>
        <span class="badge-env badge-env-${l.toLowerCase()}">${l}</span>
        <span style="color: var(--border-subtle);">|</span>
        <span style="color: var(--text-secondary); font-size: 0.75rem;">Analyzed at ${p(r)}</span>
      </div>
      <span class="badge-db" style="font-size: 0.7rem; color: #4ade80; border-color: rgba(74, 222, 128, 0.3);">
        <i data-lucide="shield-check" style="width: 11px; height: 11px; margin-right: 3px;"></i> Verified
      </span>
    </div>
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
            ${(e.ttl_forecast.horizons||[]).map(u=>{const v={"< 1 Hour":"#10b981","1 - 24 Hours":"#06b6d4","1 - 7 Days":"#3b82f6","> 7 Days":"#8b5cf6","No Expiration (Persistent)":"#f43f5e"}[u.label]||"#94a3b8";return`
                <div class="mem-stacked-segment" style="width: ${u.memory_percentage}%; background: ${v};" title="${p(u.label)}: ${u.memory_percentage}% (${u.total_memory_human}, ${u.key_count.toLocaleString()} keys)"></div>
              `}).join("")}
          </div>

          <!-- Horizon Pills Legend -->
          <div class="mem-horizon-pills-row">
            ${(e.ttl_forecast.horizons||[]).map(u=>{const v={"< 1 Hour":"#10b981","1 - 24 Hours":"#06b6d4","1 - 7 Days":"#3b82f6","> 7 Days":"#8b5cf6","No Expiration (Persistent)":"#f43f5e"}[u.label]||"#94a3b8";return`
                <div class="mem-horizon-pill" style="border-left: 3px solid ${v};">
                  <div class="pill-title">${p(u.label)}</div>
                  <div class="pill-val" style="color: ${v};">${u.total_memory_human}</div>
                  <div class="pill-meta">${u.key_count.toLocaleString()} keys (${u.memory_percentage}%)</div>
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
              ${e.ttl_forecast.top_leak_namespaces.map(u=>`
                <tr>
                  <td>
                    <code style="font-family: var(--font-mono); font-weight: 600; color: #38bdf8; background: rgba(56,189,248,0.1); padding: 0.15rem 0.4rem; border-radius: 4px;">
                      ${p(u.namespace)}
                    </code>
                  </td>
                  <td style="font-family: var(--font-mono); color: var(--text-primary); font-weight: 600;">
                    ${u.key_count.toLocaleString()}
                  </td>
                  <td style="font-family: var(--font-mono); color: #f87171; font-weight: 700;">
                    ${u.total_memory_human}
                  </td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                      <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">${u.percentage_of_leaks}%</span>
                      <div style="width: 45px; height: 4px; background: rgba(255,255,255,0.06); border-radius: 9999px; overflow: hidden;">
                        <div style="width: ${Math.min(100,u.percentage_of_leaks)}%; height: 100%; background: #f43f5e; border-radius: 9999px;"></div>
                      </div>
                    </div>
                  </td>
                  <td style="text-align: right;">
                    <button type="button" class="btn btn-secondary btn-inspect-leak" data-namespace="${p(u.namespace)}" title="Filter keys in Keys Browser matching ${p(u.namespace)} with No TTL" style="padding: 0.25rem 0.55rem; font-size: 0.72rem;">
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
        ${e.types_breakdown.map(u=>{const f=d[u.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-stacked-segment" style="width: ${u.percentage}%; background: ${f};" title="${u.type.toUpperCase()}: ${u.percentage}% (${u.total_human})"></div>
          `}).join("")}
      </div>

      <!-- Type Cards Grid -->
      <div class="mem-type-cards-grid">
        ${e.types_breakdown.map(u=>{const f=d[u.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-type-card" style="border-left: 3px solid ${f};">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="type-badge ${u.type.toLowerCase()}" style="font-size: 0.68rem; padding: 0.1rem 0.4rem;">${u.type.toUpperCase()}</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--text-primary);">${u.percentage}%</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${f}; margin-top: 2px;">
                ${u.total_human}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-muted);">
                ${u.count.toLocaleString()} keys
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
        ${e.recommendations.map(u=>`
          <div class="recommendation-item">
            <span>${p(u)}</span>
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
        ${st(e.top_bigkeys)}
      </div>
    </div>
  `,g();const c=document.getElementById("btnReRunProfiling");c&&c.addEventListener("click",re);const y=document.getElementById("bigkeysSearchInput");y&&y.addEventListener("input",()=>{const u=y.value.trim().toLowerCase(),f=u?e.top_bigkeys.filter(x=>x.key.toLowerCase().includes(u)||x.type.toLowerCase().includes(u)):e.top_bigkeys,v=document.getElementById("bigkeysTableContainer");v&&(v.innerHTML=st(f),g(),at())}),at()}function st(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const t=e[0]?e[0].memory_bytes:1;return`
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
        ${e.map((n,o)=>{let s="rank-normal";o===0?s="rank-gold":o===1?s="rank-silver":o===2&&(s="rank-bronze");const a=t>0?Math.max(5,Math.round(n.memory_bytes/t*100)):10;let l="No TTL (Persistent)",r="var(--text-muted)";return n.ttl>0&&(l=`${n.ttl.toLocaleString()}s`,r="var(--accent-warning)"),`
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
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: ${r};">
                ${l}
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
  `}function at(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&Ie&&Ie(t)})}),document.querySelectorAll(".btn-copy-bigkey").forEach(e=>{e.addEventListener("click",async t=>{t.stopPropagation();const n=e.getAttribute("data-key");n&&await ee(n)&&(e.classList.add("copied"),e.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px;"></i>',g(),setTimeout(()=>{e.classList.remove("copied"),e.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',g()},1500))})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&Be&&Be(t,async()=>{i.currentMemoryAnalysis&&(i.currentMemoryAnalysis.top_bigkeys=i.currentMemoryAnalysis.top_bigkeys.filter(n=>n.key!==t),Ge(i.currentMemoryAnalysis)),_e&&await _e()})})}),document.querySelectorAll(".btn-inspect-leak").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-namespace");if(t){i.currentPattern=t,i.currentTtlFilter="persistent";const n=document.getElementById("keySearchInput");n&&(n.value=t);const o=document.getElementById("ttlFilterSelect");o&&(o.value="persistent"),H("keys"),q()}})})}function Si(){const e=document.getElementById("btnCloseMemoryModal");e&&e.addEventListener("click",Ei);const t=document.getElementById("btnOpenMemoryModal");t&&t.addEventListener("click",Ve);const n=document.getElementById("btnRefreshMemoryModal");n&&n.addEventListener("click",qe)}function Li(e){i.allSlowlogEntries=[],i.slowlogLoadedForConnId=null;const t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),o=document.getElementById("slowlogFooterStats"),s=document.getElementById("slowlogNodeFilterContainer");t&&(t.textContent="0"),n&&(n.textContent="-"),o&&(o.textContent=""),s&&(s.innerHTML=""),Et(e)}function Et(e){const t=document.getElementById("slowlogTableContainer");if(!t)return;const n=e||i.cachedConnections.find(d=>String(d.id)===String(i.selectedConnectionId)||d.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",s=n?n.host:i.lastStatus?.host||"127.0.0.1",a=n?n.port:i.lastStatus?.port||6379,l=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 1rem;">
        <i data-lucide="clock" style="width: 24px; height: 24px; color: #38bdf8;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Slowlog for ${p(o)} (${p(s)}:${a})
        <span class="badge-env badge-env-${l.toLowerCase()}" style="margin-left: 0.4rem; vertical-align: middle;">${l}</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 1.25rem; line-height: 1.5;">
        Cluster switched. Diagnostics cache cleared. Click below to inspect query latency logs across this Redis instance/cluster.
      </p>
      <button type="button" class="btn btn-primary" id="btnFetchSlowlogExplicit" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        Fetch Slowlog Entries
      </button>
    </div>
  `,g();const r=document.getElementById("btnFetchSlowlogExplicit");r&&(r.onclick=()=>he())}async function St(){H("slowlog"),i.currentSlowlogMinDuration=0,i.currentSlowlogSearch="",i.currentSlowlogNode="all";const e=document.getElementById("btnClearSlowlogModal");e&&(e.style.display=i.lastStatus?.read_only?"none":""),document.querySelectorAll(".slowlog-filter-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-min-duration")==="0")});const t=document.getElementById("slowlogSearchInput");t&&(t.value=""),i.slowlogLoadedForConnId!==i.selectedConnectionId?Et():de()}function Ti(){H("keys")}async function he(){const e=document.getElementById("slowlogTableContainer"),t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),o=document.getElementById("slowlogFooterStats"),s=i.selectedConnectionId;e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,g());try{const a=await fetch("/api/slowlog?limit=250");if(!a.ok)throw new Error("Failed to fetch slowlog");const l=await a.json();if(i.selectedConnectionId!==s)return;if(i.allSlowlogEntries=l.entries||[],i.slowlogLoadedForConnId=s,t&&(t.textContent=i.allSlowlogEntries.length),n&&l.slower_than_us!==null&&l.slower_than_us!==void 0){const r=(l.slower_than_us/1e3).toFixed(1);n.textContent=`Threshold: > ${r}ms (${l.slower_than_us} µs)`}o&&(o.textContent=`Total buffer: ${l.total_len||i.allSlowlogEntries.length} entries | Max buffer: ${l.max_len||"N/A"}`),$i(i.allSlowlogEntries),de()}catch(a){if(i.selectedConnectionId!==s)return;if(e){e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(a.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetrySlowlog" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,g();const l=document.getElementById("btnRetrySlowlog");l&&(l.onclick=()=>he())}}}function $i(e){const t=document.getElementById("slowlogNodeFilterContainer");if(!t)return;const n=Array.from(new Set(e.map(s=>s.node).filter(Boolean)));if(n.length<=1){t.innerHTML="";return}t.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${n.length})</option>
      ${n.map(s=>`<option value="${p(s)}" ${i.currentSlowlogNode===s?"selected":""}>${p(s)}</option>`).join("")}
    </select>
  `;const o=document.getElementById("slowlogNodeSelect");o&&o.addEventListener("change",()=>{i.currentSlowlogNode=o.value,de()})}function de(){let e=i.allSlowlogEntries;if(i.currentSlowlogMinDuration>0&&(e=e.filter(t=>t.duration_ms>=i.currentSlowlogMinDuration)),i.currentSlowlogNode&&i.currentSlowlogNode!=="all"&&(e=e.filter(t=>t.node===i.currentSlowlogNode)),i.currentSlowlogSearch){const t=i.currentSlowlogSearch.toLowerCase();e=e.filter(n=>{const o=(n.command||[]).join(" ").toLowerCase(),s=(n.client_ip||"").toLowerCase(),a=(n.node||"").toLowerCase();return o.includes(t)||s.includes(t)||a.includes(t)||String(n.id).includes(t)})}Ii(e)}function Ii(e){const t=document.getElementById("slowlogTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
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
  `,g(),document.querySelectorAll(".btn-copy-slowlog-cmd").forEach(n=>{n.addEventListener("click",async o=>{o.stopPropagation();const s=n.getAttribute("data-cmd");s&&await ee(s)&&(n.classList.add("copied"),n.innerHTML='<i data-lucide="check" style="width: 12px; height: 12px;"></i>',g(),setTimeout(()=>{n.classList.remove("copied"),n.innerHTML='<i data-lucide="copy" style="width: 12px; height: 12px;"></i>',g()},1500))})})}}async function Bi(){if(i.lastStatus?.read_only){E("Slowlog reset is disabled in Read-Only mode.","warning");return}if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");E("Slowlog buffer reset successfully","success"),await he()}catch(e){E("Error resetting slowlog: "+e.message,"error")}}function _i(){const e=document.getElementById("btnCloseSlowlogModal");e&&e.addEventListener("click",Ti);const t=document.getElementById("btnOpenSlowlog");t&&t.addEventListener("click",St);const n=document.getElementById("btnRefreshSlowlogModal");n&&n.addEventListener("click",he);const o=document.getElementById("btnClearSlowlogModal");o&&o.addEventListener("click",Bi);const s=document.getElementById("slowlogSearchInput");s&&s.addEventListener("input",()=>{i.currentSlowlogSearch=s.value.trim(),de()}),document.querySelectorAll(".slowlog-filter-btn").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(l=>l.classList.remove("active")),a.classList.add("active"),i.currentSlowlogMinDuration=parseInt(a.getAttribute("data-min-duration")||"0",10),de()})})}let Re=null;function Mi(e){Re=e}async function Ri(){const e=document.getElementById("keyspaceNodesModal");e&&(e.classList.add("active"),Tt(i.lastStatus),await Lt())}function lt(){const e=document.getElementById("keyspaceNodesModal");e&&e.classList.remove("active")}async function Lt(){try{const e=await fetch("/api/status");if(!e.ok)throw new Error("Failed to load node stats");i.lastStatus=await e.json(),Tt(i.lastStatus)}catch(e){const t=document.getElementById("keyspaceNodesContainer");t&&(t.innerHTML=`<div style="padding: 2rem; text-align: center; color: var(--accent-danger);">${p(e.message)}</div>`)}}function Tt(e){const t=document.getElementById("keyspaceNodesContainer"),n=document.getElementById("keyspaceTotalBadge");if(!t||!e)return;const o=e.node_stats||[],s=o.filter(y=>y.role==="master"),a=s.reduce((y,u)=>y+(u.keys||0),0);if(n&&(n.textContent=`${a.toLocaleString()} keys`),s.length===0){t.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Per-node breakdown is only available for cluster connections.</div>';return}const l=y=>y==null?"—":Number(y).toLocaleString(),r=(y,u="left")=>`<th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: ${u};">${y}</th>`,d=(y,u="")=>`<td style="padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; ${u}">${y}</td>`,c=s.map(y=>{const u=a>0&&y.keys!==null?(y.keys/a*100).toFixed(1):"0.0",f=o.filter(w=>w.role==="replica"&&w.master===y.node),v=`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        ${d(`<span class="role-badge-master">MASTER</span> <span style="color: var(--text-primary); font-weight: 600; margin-left: 6px;">${p(y.node)}</span>`)}
        ${d(y.error?`<span style="color: var(--accent-danger);" title="${p(y.error)}">unreachable</span>`:l(y.keys),"text-align: right; color: var(--text-primary); font-weight: 600;")}
        ${d(`${u}%`,"text-align: right; color: var(--text-secondary);")}
        ${d(p(y.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
        ${d(l(y.connected_clients),"text-align: right; color: #38bdf8;")}
      </tr>`,x=f.map(w=>{const C=w.keys!==null&&y.keys!==null?w.keys-y.keys:null,I=C===null?"":C===0?'<span style="color: var(--accent-success); margin-left: 6px;">in sync</span>':`<span style="color: var(--accent-warning); margin-left: 6px;" title="Replica key count differs from its master (replication lag or expiring keys)">${C>0?"+":""}${C.toLocaleString()}</span>`;return`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(0,0,0,0.12);">
        ${d(`<span style="color: var(--text-muted); margin-left: 0.75rem;">↳</span> <span class="role-badge-replica">REPLICA</span> <span style="color: var(--text-secondary); margin-left: 6px;">${p(w.node)}</span>`)}
        ${d(w.error?`<span style="color: var(--accent-danger);" title="${p(w.error)}">unreachable</span>`:`${l(w.keys)}${I}`,"text-align: right; color: var(--text-secondary);")}
        ${d("","")}
        ${d(p(w.used_memory_human||"—"),"text-align: right; color: var(--text-muted);")}
        ${d(l(w.connected_clients),"text-align: right; color: var(--text-muted);")}
      </tr>`}).join("");return v+x}).join("");t.innerHTML=`
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${r("NODE")}${r("KEYS","right")}${r("SHARE","right")}${r("MEMORY","right")}${r("CLIENTS","right")}</tr>
      </thead>
      <tbody>${c}</tbody>
      <tfoot>
        <tr>
          ${d("Cluster total (masters)","color: var(--text-muted); font-family: inherit;")}
          ${d(a.toLocaleString(),"text-align: right; color: var(--accent-primary); font-weight: 700;")}
          ${d("100%","text-align: right; color: var(--text-muted);")}
          ${d(p(e.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
          ${d("","")}
        </tr>
      </tfoot>
    </table>
  `,g()}function Ai(e){i.currentTopologyData=null,i.topologyLoadedForConnId=null;const t=document.getElementById("topologyStatsGrid"),n=document.getElementById("topologyNodesCountBadge"),o=document.getElementById("tabBadgeTopology");t&&(t.innerHTML=""),n&&(n.textContent="-"),o&&(o.textContent="-"),Ae(e)}function Ae(e){const t=document.getElementById("topologyTableContainer"),n=document.getElementById("topologyEnvBadge");if(!t)return;const o=e||i.cachedConnections.find(c=>String(c.id)===String(i.selectedConnectionId)||c.is_selected)||null,s=o?o.name:i.lastStatus?.connection_name||"Active Cluster",a=o?o.host:i.lastStatus?.host||"127.0.0.1",l=o?o.port:i.lastStatus?.port||6379,r=o?(o.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();n&&(n.textContent=r,n.className=`badge-env badge-env-${r.toLowerCase()}`),t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); margin-bottom: 1rem;">
        <i data-lucide="network" style="width: 24px; height: 24px; color: #c084fc;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Topology Map for ${p(s)} (${p(a)}:${l})
        <span class="badge-env badge-env-${r.toLowerCase()}" style="margin-left: 0.4rem; vertical-align: middle;">${r}</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 1.25rem; line-height: 1.5;">
        Cluster switched. Diagnostics cache cleared. Click below to inspect cluster nodes, primary/replica roles, and hash slot distribution.
      </p>
      <button type="button" class="btn btn-primary" id="btnFetchTopologyExplicit" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        Load Cluster Topology
      </button>
    </div>
  `,g();const d=document.getElementById("btnFetchTopologyExplicit");d&&(d.onclick=()=>We())}async function ie(e=null){if(H("topology"),e&&Re){const t=document.querySelector(`.conn-card[data-id="${e}"]`);t&&!t.classList.contains("active")&&await Re(e)}i.topologyLoadedForConnId!==i.selectedConnectionId?Ae():i.currentTopologyData?($t(i.currentTopologyData),fe()):Ae()}function Di(){H("keys")}async function We(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),t=document.getElementById("topologyNodesCountBadge"),n=document.getElementById("tabBadgeTopology"),o=document.getElementById("topologyEnvBadge"),s=i.selectedConnectionId,a=i.cachedConnections.find(l=>l.id===s||l.is_selected);if(a&&o){const l=(a.env||"LOCAL").toUpperCase();o.textContent=l,o.className=`badge-env badge-env-${l.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,g());try{const l=await fetch("/api/topology");if(!l.ok)throw new Error("Failed to load cluster topology");const r=await l.json();if(i.selectedConnectionId!==s)return;i.currentTopologyData=r,i.topologyLoadedForConnId=s;const d=`${r.total_nodes} Node${r.total_nodes!==1?"s":""}`;t&&(t.textContent=d),n&&(n.textContent=d),$t(r),fe()}catch(l){if(i.selectedConnectionId!==s)return;if(e){e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${p(l.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetryTopology" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,g();const r=document.getElementById("btnRetryTopology");r&&(r.onclick=()=>We())}}}function $t(e){const t=document.getElementById("topologyStatsGrid");if(!t)return;const n=e.is_cluster,o=(e.cluster_state||"").toLowerCase()==="ok"||!n;t.innerHTML=`
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
  `}function fe(){const e=document.getElementById("topologyTableContainer");if(!e||!i.currentTopologyData)return;const t=i.currentTopologyData.nodes||[],n=(i.currentTopologySearch||"").trim().toLowerCase(),o=i.currentTopologyRole,s=t.filter(a=>{if(o!=="all"&&a.role.toLowerCase()!==o)return!1;if(n){const l=(a.addr||"").toLowerCase().includes(n),r=(a.id||"").toLowerCase().includes(n),d=(a.ip||"").toLowerCase().includes(n),c=(a.slots||"").toLowerCase().includes(n);if(!l&&!r&&!d&&!c)return!1}return!0});if(s.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
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
        ${s.map(a=>{const l=a.role==="master",r=(a.link_state||"connected").toLowerCase()==="connected",d=a.id?a.id.length>12?`${a.id.substring(0,10)}...`:a.id:"N/A",c=a.slots?`${a.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${a.slot_count||0} slots)</span>`:l?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${p(a.id||"")}">${p(d)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${l?"role-badge-master":"role-badge-replica"}">${a.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${p(a.addr||`${a.ip}:${a.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem; text-align: right; color: ${l?"var(--text-primary)":"var(--text-secondary)"};">
                ${a.keys===null||a.keys===void 0?"—":Number(a.keys).toLocaleString()}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${r?"connected":"disconnected"}"></span>
                <span style="color: ${r?"var(--accent-success)":"var(--accent-danger)"};">${a.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${c}
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
  `,g()}function Pi(){const e=document.getElementById("btnOpenBulkDeleteModal");e&&(i.lastStatus?.read_only?(e.disabled=!0,e.style.opacity="0.4",e.style.cursor="not-allowed",e.title="🔒 Bulk Delete is disabled in Read-Only mode"):(e.disabled=!1,e.style.opacity="1",e.style.cursor="pointer",e.title="Bulk delete matched keys (Dry-run & confirmation required)"))}function Ni(){const e=document.getElementById("btnCloseTopologyModal");e&&e.addEventListener("click",Di);const t=document.getElementById("btnOpenTopologyTop");t&&t.addEventListener("click",()=>ie());const n=document.getElementById("btnRefreshTopologyModal");n&&n.addEventListener("click",We);const o=document.getElementById("topologySearchInput");o&&o.addEventListener("input",()=>{i.currentTopologySearch=o.value.trim(),fe()});const s=document.getElementById("topologyRoleFilter");s&&s.addEventListener("click",d=>{const c=d.target.closest(".type-tab");c&&c.dataset.role&&(s.querySelectorAll(".type-tab").forEach(y=>y.classList.remove("active")),c.classList.add("active"),i.currentTopologyRole=c.dataset.role,fe())});const a=document.getElementById("btnCloseKeyspaceModal");a&&a.addEventListener("click",lt);const l=document.getElementById("btnRefreshKeyspaceModal");l&&l.addEventListener("click",Lt);const r=document.getElementById("btnKeyspaceOpenTopology");r&&r.addEventListener("click",()=>{lt(),ie()})}let De=null;function zi(e){De=e}function Fi(e){i.allConnectedClients=[],i.clientsLoadedForConnId=null;const t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats");t&&(t.textContent="0"),n&&(n.textContent=""),It(e)}function It(e){const t=document.getElementById("clientsTableContainer");if(!t)return;const n=e||i.cachedConnections.find(d=>String(d.id)===String(i.selectedConnectionId)||d.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",s=n?n.host:i.lastStatus?.host||"127.0.0.1",a=n?n.port:i.lastStatus?.port||6379,l=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 1rem;">
        <i data-lucide="users" style="width: 24px; height: 24px; color: #38bdf8;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Connected Clients for ${p(o)} (${p(s)}:${a})
        <span class="badge-env badge-env-${l.toLowerCase()}" style="margin-left: 0.4rem; vertical-align: middle;">${l}</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 1.25rem; line-height: 1.5;">
        Cluster switched. Diagnostics cache cleared. Click below to inspect active connected clients, query states, and ident flags.
      </p>
      <button type="button" class="btn btn-primary" id="btnFetchClientsExplicit" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        Fetch Connected Clients
      </button>
    </div>
  `,g();const r=document.getElementById("btnFetchClientsExplicit");r&&(r.onclick=()=>ve())}async function Je(){H("clients"),i.clientsLoadedForConnId!==i.selectedConnectionId?It():Ye(i.allConnectedClients)}function Hi(){H("keys")}async function ve(){const e=document.getElementById("clientsTableContainer"),t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats"),o=document.getElementById("clientsSearchInput"),s=i.selectedConnectionId;e&&(e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',g());try{const a=await fetch("/api/clients");if(!a.ok)throw new Error("Failed to load connected clients");const l=await a.json();if(i.selectedConnectionId!==s)return;i.allConnectedClients=l,i.clientsLoadedForConnId=s,t&&(t.textContent=i.allConnectedClients.length),n&&(n.textContent=`${i.allConnectedClients.length} total connections`),o&&(o.value=""),Ye(i.allConnectedClients)}catch(a){if(i.selectedConnectionId!==s)return;if(e){e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error loading clients</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(a.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetryClients" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,g();const l=document.getElementById("btnRetryClients");l&&(l.onclick=()=>ve())}}}function Ye(e){const t=document.getElementById("clientsTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
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
              <div class="client-sub-text">Target: ${p(n.laddr||"localhost")}</div>
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
  `,g(),t.querySelectorAll(".btn-kill-client").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-id"),s=n.getAttribute("data-addr");Oi(o,s)})})}}async function Oi(e,t){if(i.lastStatus?.read_only){E("Client disconnection is disabled in Read-Only mode.","warning");return}if(confirm(`Are you sure you want to disconnect client #${e} (${t})?`))try{const n=await fetch(`/api/clients/${e}`,{method:"DELETE"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to disconnect client");E(`Disconnected client #${e}`,"success"),await ve(),De&&await De()}catch(n){E("Error disconnecting client: "+n.message,"error")}}function Ki(){const e=document.getElementById("btnCloseClientsModal");e&&e.addEventListener("click",Hi);const t=document.getElementById("btnOpenClientsModal");t&&t.addEventListener("click",Je);const n=document.getElementById("btnRefreshClientsModal");n&&n.addEventListener("click",ve);const o=document.getElementById("clientsSearchInput");o&&o.addEventListener("input",()=>{const s=o.value.trim().toLowerCase(),a=s?i.allConnectedClients.filter(l=>(l.addr||"").toLowerCase().includes(s)||(l.name||"").toLowerCase().includes(s)||(l.user||"").toLowerCase().includes(s)||(l.cmd||"").toLowerCase().includes(s)||String(l.id).includes(s)):i.allConnectedClients;Ye(a)})}let X=null,M=[],G=null,W=null,Bt=[];function ji(e,t){G=e,W=t}function Ui(e){typeof e=="function"&&Bt.push(e)}function _t(e){const t=e||i.cachedConnections.find(C=>C.id===i.selectedConnectionId||C.is_selected)||null,n=t?t.name:i.lastStatus?.connection_name||"Active Target",o=t?t.host:i.lastStatus?.host||"127.0.0.1",s=t?t.port:i.lastStatus?.port||6379,a=(t?t.env||"LOCAL":i.lastStatus?.env||"LOCAL").toUpperCase(),r=(t?t.conn_type||"standalone":i.lastStatus?.is_cluster?"cluster":"standalone")==="cluster"||i.lastStatus?.is_cluster,d=i.lastStatus?.read_only,c=`
    <span>Target:</span>
    <strong class="context-conn-name" style="color: var(--text-primary); font-weight: 600;">${p(n)}</strong>
    <span class="context-conn-endpoint" style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.72rem;">(${p(o)}:${s})</span>
    <span class="badge-env badge-env-${a.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">${a}</span>
    <span class="top-conn-tag" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">${r?"CLUSTER":"STANDALONE"}</span>
    ${d?'<span class="badge-readonly" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;"><i data-lucide="lock" style="width: 10px; height: 10px; vertical-align: middle;"></i> READ ONLY</span>':""}
  `,y=document.getElementById("benchmarkTargetSubtitle");y&&(y.innerHTML=c+' <span style="color: var(--text-muted); font-size: 0.7rem;">| Namespace: __ri_bench__</span>');const u=document.getElementById("memoryTargetSubtitle");u&&(u.innerHTML=c);const f=document.getElementById("slowlogTargetSubtitle");f&&(f.innerHTML=c);const v=document.getElementById("topologyTargetSubtitle");v&&(v.innerHTML=c);const x=document.getElementById("clientsTargetSubtitle");x&&(x.innerHTML=c);const w=document.getElementById("keysTargetText");w&&(w.innerHTML=`
      <span class="target-conn-name">${p(n)}</span>
      <span class="target-endpoint">(${p(o)}:${s})</span>
    `),g()}function Qe(e){const t=i.cachedConnections.find(n=>n.id===e)||null;_t(t);for(const n of Bt)try{n(t)}catch(o){console.warn("Error running cluster-switched callback:",o)}}async function Y(){const e=document.getElementById("connectionsList");try{const[t,n]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]),o=await t.json();if(i.cachedConnections=o||[],i.selectedConnectionId){const s=i.cachedConnections.find(a=>a.id===i.selectedConnectionId);if(s&&s.is_connected)i.cachedConnections.forEach(a=>{a.is_selected=a.id===i.selectedConnectionId});else{const a=i.cachedConnections.find(l=>l.is_selected&&l.is_connected)||i.cachedConnections.find(l=>l.is_connected);a&&(i.selectedConnectionId=a.id,localStorage.setItem("redis_insight_selected_conn_id",a.id),i.cachedConnections.forEach(l=>{l.is_selected=l.id===a.id}))}}else{const s=i.cachedConnections.find(a=>a.is_selected&&a.is_connected)||i.cachedConnections.find(a=>a.is_connected);s&&(i.selectedConnectionId=s.id,localStorage.setItem("redis_insight_selected_conn_id",s.id))}if(n.ok){const s=await n.json();i.currentLimit=s.limit||2}Pe()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function Mt(e,t){const n=document.getElementById("connectedCountDisplay"),o=document.getElementById("connLimitDisplay"),s=document.getElementById("connLimitSelect"),a=document.getElementById("limitProgressDots"),l=document.getElementById("limitCountPill");if(n&&(n.textContent=e),o&&(o.textContent=t),s&&String(s.value)!==String(t)&&(s.value=String(t)),l&&(e>=t&&t>0?(l.classList.add("at-limit"),l.title="Connection limit reached"):(l.classList.remove("at-limit"),l.title=`${e} of ${t} connections in use`)),a){let r="";for(let d=0;d<t;d++){const c=d<e;r+=`<span class="limit-slot-dot ${c?"filled":"empty"}" title="Slot ${d+1}: ${c?"Connected":"Available"}"></span>`}a.innerHTML=r}}function Pe(){const e=document.getElementById("connectionsList");if(!e)return;const t=document.getElementById("totalConnCountBadge");t&&(t.textContent=i.cachedConnections.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(r=>{const d=r.getAttribute("data-env");let c=0;d==="ALL"?c=i.cachedConnections.length:c=i.cachedConnections.filter(y=>(y.env||"LOCAL").toUpperCase()===d).length,r.textContent=`${d} (${c})`});const o=(i.currentConnSearch||"").trim().toLowerCase(),s=i.currentEnvFilter,a=i.cachedConnections.filter(r=>{if(s!=="ALL"&&(r.env||"LOCAL").toUpperCase()!==s)return!1;if(o){const d=(r.name||"").toLowerCase().includes(o),c=(r.host||"").toLowerCase().includes(o),y=(r.env||"").toLowerCase().includes(o),u=(r.conn_type||"").toLowerCase().includes(o);if(!d&&!c&&!y&&!u)return!1}return!0});a.sort((r,d)=>{const c=r.is_connected?1:0,y=d.is_connected?1:0;if(y!==c)return y-c;const u=r.is_selected?1:0,f=d.is_selected?1:0;return f!==u?f-u:(r.name||"").localeCompare(d.name||"")});const l=i.cachedConnections.filter(r=>r.is_connected).length;if(Mt(l,i.currentLimit),a.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${o?`No results found for "${p(o)}"`:`No connections configured in ${p(s)}`}
        </span>
      </div>
    `,g();return}e.innerHTML=a.map(r=>{const d=(r.env||"LOCAL").toUpperCase(),c=`badge-env-${d.toLowerCase()}`,y=r.conn_type==="cluster",u=r.conn_type==="sentinel",f=r.source==="config",v=!!r.is_connected,x=!!r.is_selected;return`
      <div class="conn-card ${v?"is-connected":""} ${x?"selected active":""}" data-id="${r.id}" title="Click to review config & connection options">
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${x?`
              <span class="conn-status-indicator active" title="Active Cluster (Browsing Keys)">
                <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
              </span>
            `:v?`
              <span class="conn-status-indicator connected" title="Connected Cluster">
                <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
              </span>
            `:`
              <span class="conn-status-dot idle" title="Disconnected"></span>
            `}
          </div>

          <div class="conn-title-wrap">
            <span class="conn-name" title="${p(r.name)}">${p(r.name)}</span>
          </div>

          <div class="conn-status-badge-wrap">
            ${x?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:v?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${p(r.host)}:${r.port}">
            <i data-lucide="${y?"network":u?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${p(r.host)}:${r.port}</span>
          </div>

          <div class="conn-tags">
            <span class="badge-env ${c}">${d}</span>
            ${r.read_only?'<span class="badge-readonly" title="Read-Only Mode: Mutating operations locked">🔒 RO</span>':""}
            ${y?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${u?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!y&&!u?`<span class="badge-db">DB${r.db}</span>`:""}
            ${r.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${r.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${f?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${v?`
            ${x?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${r.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${r.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${y||v?`
              <button type="button" class="btn-hover-action btn-view-topology-card" data-id="${r.id}" title="View topology & nodes">
                <i data-lucide="layers" style="width: 11px; height: 11px;"></i>
              </button>
            `:""}
          `:`
            <button type="button" class="btn-hover-action btn-hover-connect btn-card-open-config" data-id="${r.id}" title="Review config & Connect">
              <i data-lucide="play" style="width: 11px; height: 11px;"></i>
              <span>Connect</span>
            </button>
            ${f?"":`
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${r.id}" data-name="${p(r.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>
      </div>
    `}).join(""),g(),e.querySelectorAll(".conn-card").forEach(r=>{r.addEventListener("click",d=>{if(d.target.closest(".btn-delete-conn")||d.target.closest(".btn-view-topology-card")||d.target.closest(".btn-card-disconnect")||d.target.closest(".btn-card-select")||d.target.closest(".btn-card-open-config"))return;const c=r.getAttribute("data-id"),y=i.cachedConnections.find(u=>u.id===c);y&&Ne(y)})}),e.querySelectorAll(".btn-card-disconnect").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const c=r.getAttribute("data-id");await Xe(c)})}),e.querySelectorAll(".btn-card-select").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const c=r.getAttribute("data-id");await At(c)})}),e.querySelectorAll(".btn-card-open-config").forEach(r=>{r.addEventListener("click",d=>{d.stopPropagation();const c=r.getAttribute("data-id"),y=i.cachedConnections.find(u=>u.id===c);y&&Ne(y)})}),e.querySelectorAll(".btn-view-topology-card").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const c=r.getAttribute("data-id");await ie(c)})}),e.querySelectorAll(".btn-delete-conn").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const c=r.getAttribute("data-id"),y=r.getAttribute("data-name");confirm(`Are you sure you want to delete '${y}'?`)&&await Gi(c)})})}function Vi(e){if(!e)return[];if(Array.isArray(e))return e.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t));if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n))}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}return[]}function Ne(e){i.activeConfigConn=e;const t=document.getElementById("clusterConfigModal"),n=document.getElementById("cfgModalTitle"),o=document.getElementById("cfgModalSubtitle"),s=document.getElementById("cfgModalBody"),a=document.getElementById("cfgModalFooter");if(!t||!s||!a)return;n&&(n.textContent=e.name||"Cluster Configuration"),o&&(o.textContent="Review configuration before connecting");const l=!!e.is_connected,r=!!e.is_selected,d=e.conn_type==="cluster",c=Vi(e.cluster_nodes),y=i.cachedConnections.filter(O=>O.is_connected).length,u=!l&&y>=i.currentLimit;s.innerHTML=`
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
      ${d&&(c.length>0||e.cluster_nodes)?`
        <div class="config-grid-row config-grid-seeds-row">
          <span class="config-label" style="padding-top: 2px;">
            Seed Endpoints ${c.length>0?`(${c.length})`:""}
          </span>
          <div class="config-seeds-container">
            ${c.length>0?c.map(O=>`
                  <span class="seed-node-pill" title="${p(O)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${p(O)}
                  </span>
                `).join(""):`<span class="seed-node-pill">${p(e.cluster_nodes)}</span>`}
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
      <span>Connected Limit: <strong>${y} of ${i.currentLimit}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${u?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${i.currentLimit} maximum). Please disconnect a connected cluster first or increase the limit.</span>
      </div>
    `:""}

    <div id="cfgTestResultBox" class="test-result-box" style="margin-top: 0.65rem;"></div>
  `,l?a.innerHTML=`
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
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${u?"disabled":""}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `,g(),t.classList.add("active");const f=document.getElementById("btnCloseConfigModal");f&&(f.onclick=()=>t.classList.remove("active"));const v=document.getElementById("btnEditFromConfig");v&&(v.onclick=()=>{t.classList.remove("active"),Pt(e)});const x=document.getElementById("btnConnectFromConfig");x&&(x.onclick=async()=>{await Rt(e.id),t.classList.remove("active")});const w=document.getElementById("btnDisconnectFromConfig");w&&(w.onclick=async()=>{await Xe(e.id),t.classList.remove("active")});const C=document.getElementById("btnSelectFromConfig");C&&(C.onclick=async()=>{await At(e.id),t.classList.remove("active")});const I=document.getElementById("btnTopologyFromConfig");I&&(I.onclick=async()=>{t.classList.remove("active"),await ie(e.id)});const R=document.getElementById("btnTestFromConfig");R&&(R.onclick=async()=>{await qi(e)})}async function qi(e){const t=document.getElementById("cfgTestResultBox"),n=document.getElementById("btnTestFromConfig");n&&(n.disabled=!0,n.innerHTML="Testing..."),t&&(t.className="test-result-box",t.innerHTML="");try{const s=await(await fetch(`/api/connections/${e.id}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();s.success?(t.className="test-result-box success",t.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${s.latency_ms} ms</strong> (Redis v${s.redis_version})</span>
      `):(t.className="test-result-box error",t.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${p(s.error||"Connection refused")}</span>
      `)}catch(o){t&&(t.className="test-result-box error",t.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${p(o.message)}</span>`)}finally{n&&(n.disabled=!1,n.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),g()}}async function Rt(e){if(i.cachedConnections.filter(n=>n.is_connected&&n.id!==e).length>=i.currentLimit){E(`Connection limit reached: Maximum ${i.currentLimit} connected cluster(s) allowed. Please disconnect an existing cluster first.`,"warning",4500);return}try{const n=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to connect to cluster");i.selectedConnectionId=e,localStorage.setItem("redis_insight_selected_conn_id",e),await Y(),Qe(e),E("Connected to cluster successfully","success"),G&&await G(),W&&await W()}catch(n){E("Connection error: "+n.message,"error")}}async function Xe(e){try{const t=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to disconnect cluster");if(i.selectedConnectionId===e){const s=i.cachedConnections.find(a=>a.is_connected&&a.id!==e);s?(i.selectedConnectionId=s.id,localStorage.setItem("redis_insight_selected_conn_id",s.id)):(i.selectedConnectionId=null,localStorage.removeItem("redis_insight_selected_conn_id"))}await Y(),Qe(i.selectedConnectionId),G&&await G(),i.cachedConnections.some(s=>s.is_connected&&s.id!==e)?W&&await W():(i.keysTableRows=[],i.loadedKeysSet.clear(),i.totalScanned=0,i.currentCursor=0,i.scanComplete=!1,i.dbTotalKeys=0,Dt())}catch(t){E("Disconnect error: "+t.message,"error")}}async function At(e){try{i.selectedConnectionId=e,localStorage.setItem("redis_insight_selected_conn_id",e);const t=await fetch(`/api/connections/${e}/select`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to switch cluster");const o=document.getElementById("keyDetailModal");o&&o.classList.remove("active"),i.activeDetailKey=null,i.activeDetailData=null,await Y(),Qe(e),G&&await G(),W&&await W()}catch(t){E("Switch error: "+t.message,"error")}}function Dt(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="flex"),n&&(n.style.display="none");const o=document.getElementById("btnConnectFirstAvailable");o&&(o.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${i.cachedConnections.length})`,i.cachedConnections.length>0&&(o.onclick=()=>Ne(i.cachedConnections[0]))),g()}async function Gi(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");E("Connection deleted","success"),await Y(),G&&await G(),W&&await W()}catch(t){E("Delete error: "+t.message,"error")}}function Z(){const e=document.getElementById("clusterNodesList"),t=document.getElementById("clusterNodeCountBadge");if(e){if(t&&(t.textContent=`${M.length} configured`),M.length===0){e.innerHTML=`
      <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
        No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
      </div>
    `;return}e.innerHTML=M.map((n,o)=>{const s=n.role==="master",a=n.role==="replica",l=n.role==="seed",r=s?"master":a?"replica":"",d=s?"master":a?"replica":l?"seed":"manual",c=s?"Master":a?"Replica":l?"Seed":"Node";return`
      <span class="cluster-node-chip ${r}">
        <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
        <span>${p(n.host)}:${n.port}</span>
        <span class="cluster-node-role-badge ${d}">${c}</span>
        <button type="button" class="cluster-node-chip-remove" data-idx="${o}" title="Remove node">
          <i data-lucide="x" style="width: 11px; height: 11px;"></i>
        </button>
      </span>
    `}).join(""),e.querySelectorAll(".cluster-node-chip-remove").forEach(n=>{n.addEventListener("click",o=>{o.stopPropagation();const s=parseInt(n.getAttribute("data-idx"),10);!isNaN(s)&&s>=0&&s<M.length&&(M.splice(s,1),Z())})}),g()}}function Pt(e){X=e.id;const t=document.getElementById("connectionModal"),n=document.getElementById("connectionModalTitle"),o=document.getElementById("btnSaveConn"),s=document.getElementById("connPassword");n&&(n.innerHTML='<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection'),o&&(o.textContent="Update Connection"),document.getElementById("connName").value=e.name||"",document.getElementById("connEnv").value=(e.env||"DEV").toUpperCase();const a=document.getElementById("connTypeSelect");a.value=e.conn_type||"standalone",document.getElementById("connHost").value=e.host||"localhost",document.getElementById("connPort").value=e.port||6379,document.getElementById("connDb").value=e.db||0,document.getElementById("connUsername").value=e.username||"",document.getElementById("connTls").checked=!!e.use_tls,document.getElementById("connReadOnly").checked=!!e.read_only,s&&(s.value="",e.has_password?s.placeholder="•••••••• (Leave blank to keep saved password)":s.placeholder="Enter password (or leave empty)");const l=document.getElementById("clusterNodesGroup"),r=document.getElementById("connHostLabel"),d=document.getElementById("connDbRow");if(M=[],e.conn_type==="cluster"){if(l&&(l.style.display="block"),r&&(r.textContent="Seed Node Host *"),d&&(d.style.display="none"),e.cluster_nodes)try{const y=typeof e.cluster_nodes=="string"?JSON.parse(e.cluster_nodes):e.cluster_nodes;Array.isArray(y)&&(M=y.map(u=>{if(typeof u=="string"&&u.includes(":")){const f=u.split(":");return{host:f[0].trim(),port:parseInt(f[1],10)||6379}}return{host:u.host||"127.0.0.1",port:parseInt(u.port,10)||6379}}))}catch{}}else l&&(l.style.display="none"),r&&(r.textContent="Host *"),d&&(d.style.display="flex");Z();const c=document.getElementById("testResultBox");c&&(c.className="test-result-box",c.innerHTML=""),g(),t&&t.classList.add("active")}function Wi(){window.openEditConnectionModal=Pt;const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const m=parseInt(e.value,10);try{const h=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:m})});if(h.ok){const b=await h.json();i.currentLimit=b.limit,Mt(b.connected_count,b.limit)}}catch(h){console.warn("Failed to update limit:",h)}});const t=document.getElementById("connSearchInput");t&&t.addEventListener("input",()=>{i.currentConnSearch=t.value.trim(),Pe()});const n=document.getElementById("envFilterPills");n&&n.addEventListener("click",m=>{const h=m.target.closest(".env-pill-btn");h&&h.dataset.env&&(n.querySelectorAll(".env-pill-btn").forEach(b=>b.classList.remove("active")),h.classList.add("active"),i.currentEnvFilter=h.dataset.env,Pe())});const o=document.getElementById("btnReloadConfigStatic");o&&o.addEventListener("click",async()=>{o.disabled=!0;try{await fetch("/api/connections/reload-config",{method:"POST"}),await Y()}catch(m){console.warn("Reload config failed:",m)}finally{o.disabled=!1}});const s=document.getElementById("connTypeSelect"),a=document.getElementById("clusterNodesGroup"),l=document.getElementById("connHostLabel"),r=document.getElementById("connPortLabel"),d=document.getElementById("connHost"),c=document.getElementById("connPort"),y=document.getElementById("connDbGroup");s&&a&&s.addEventListener("change",()=>{const m=s.value==="cluster";a.style.display=m?"block":"none",y&&(y.style.display=m?"none":"block"),m?(l&&(l.textContent="Primary Seed Host *"),r&&(r.textContent="Seed Port *"),d&&(d.value==="localhost"||!d.value)&&(d.value="127.0.0.1"),c&&(c.value==="6379"||!c.value)&&(c.value="7000"),M.length===0&&d&&d.value&&c&&c.value&&M.push({host:d.value.trim(),port:parseInt(c.value,10)||7e3,role:"seed"}),Z()):(l&&(l.textContent="Host *"),r&&(r.textContent="Port *"),c&&c.value==="7000"&&(c.value="6379"))});const u=document.getElementById("btnAutoDiscoverCluster"),f=document.getElementById("clusterDiscoveryStatus");u&&u.addEventListener("click",async()=>{const m=d?d.value.trim():"127.0.0.1",h=c&&parseInt(c.value,10)||7e3,b=document.getElementById("connUsername").value.trim()||null,S=document.getElementById("connPassword").value||null,L=document.getElementById("connTls").checked;if(!m){f&&(f.className="cluster-discovery-status error",f.style.display="flex",f.innerHTML='<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>',g());return}u.disabled=!0,u.innerHTML="Discovering...";try{const B=await(await fetch("/api/connections/discover-cluster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:m,port:h,username:b,password:S,use_tls:L})})).json();B.success&&B.nodes&&B.nodes.length>0?(M=B.nodes.map(A=>({host:A.host,port:A.port,role:A.role,is_myself:A.is_myself,slots:A.slots})),Z(),f&&(f.className="cluster-discovery-status success",f.style.display="flex",f.innerHTML=`
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${B.total_nodes} nodes</strong> (${B.masters_count} masters, ${B.replicas_count} replicas)</span>
            `,g())):f&&(f.className="cluster-discovery-status error",f.style.display="flex",f.innerHTML=`
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${p(B.error||"Cluster discovery failed.")}</span>
            `,g())}catch(T){f&&(f.className="cluster-discovery-status error",f.style.display="flex",f.innerHTML=`
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${p(T.message)}</span>
          `,g())}finally{u.disabled=!1,u.innerHTML='<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes',g()}});const v=document.getElementById("inputCustomClusterNode"),x=document.getElementById("btnAddCustomClusterNode");function w(){if(!v)return;const m=v.value.trim();if(!m)return;let h="127.0.0.1",b=7e3;if(m.includes(":")){const L=m.split(":");h=L[0].trim()||"127.0.0.1",b=parseInt(L[1].trim(),10)||7e3}else isNaN(parseInt(m,10))?h=m:(b=parseInt(m,10),h=d?d.value.trim():"127.0.0.1");M.some(L=>L.host===h&&L.port===b)||(M.push({host:h,port:b,role:"manual"}),Z()),v.value=""}x&&x.addEventListener("click",w),v&&v.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),w())});const C=document.getElementById("connectionModal"),I=document.getElementById("btnAddConn");I&&C&&I.addEventListener("click",()=>{X=null,document.getElementById("connectionForm").reset();const m=document.getElementById("connectionModalTitle"),h=document.getElementById("btnSaveConn"),b=document.getElementById("connPassword");m&&(m.innerHTML='<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection'),h&&(h.textContent="Save Connection"),b&&(b.placeholder="Leave empty if none");const S=document.getElementById("connEnv").value;document.getElementById("connReadOnly").checked=S==="PROD",document.getElementById("clusterNodesGroup").style.display="none",document.getElementById("connHostLabel").textContent="Host *",document.getElementById("connDbRow").style.display="flex",M=[],Z();const L=document.getElementById("testResultBox");L&&(L.className="test-result-box",L.innerHTML=""),g(),C.classList.add("active")});const R=document.getElementById("btnCloseModal");R&&C&&R.addEventListener("click",()=>C.classList.remove("active"));const O=document.getElementById("btnCancelModal");O&&C&&O.addEventListener("click",()=>C.classList.remove("active"));const F=document.getElementById("connEnv");F&&F.addEventListener("change",m=>{if(m.target.value==="PROD"){const h=document.getElementById("connReadOnly");h&&(h.checked=!0)}});const U=document.getElementById("btnTestConnModal");U&&U.addEventListener("click",async()=>{const m=document.getElementById("connTypeSelect").value,h=document.getElementById("connHost").value.trim()||"localhost",b=parseInt(document.getElementById("connPort").value,10)||6379,S=parseInt(document.getElementById("connDb").value,10)||0,L=document.getElementById("connUsername").value.trim()||null,T=document.getElementById("connPassword").value,B=document.getElementById("connTls").checked;let A=null;m==="cluster"&&M.length>0&&(A=JSON.stringify(M.map(P=>({host:P.host,port:P.port}))));const $=document.getElementById("testResultBox");U.disabled=!0,U.innerHTML="Testing...",$&&($.className="test-result-box",$.innerHTML="");try{let P;X&&!T?P=await fetch(`/api/connections/${X}/test`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:h,port:b,db:S,username:L,use_tls:B,conn_type:m,cluster_nodes:A})}):P=await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:h,port:b,db:S,username:L,password:T||null,use_tls:B,conn_type:m,cluster_nodes:A})});const K=await P.json();if(K.success){$.className="test-result-box success";const _=K.is_cluster?` • Cluster Mode (${K.cluster_nodes_count||M.length} nodes reachable)`:"";$.innerHTML=`
            <i data-lucide="check-circle-2"></i>
            <span>Connected! Latency: <strong>${K.latency_ms} ms</strong>${_} (Redis v${K.redis_version})</span>
          `}else $.className="test-result-box error",$.innerHTML=`
            <i data-lucide="alert-circle"></i>
            <span>Failed: ${p(K.error||"Connection refused")}</span>
          `}catch(P){$&&($.className="test-result-box error",$.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${p(P.message)}</span>`)}finally{U.disabled=!1,U.innerHTML='<i data-lucide="zap"></i> Test Connection',g()}});const z=document.getElementById("connectionForm");z&&z.addEventListener("submit",async m=>{m.preventDefault();const h=document.getElementById("connName").value.trim(),b=document.getElementById("connEnv").value,S=document.getElementById("connTypeSelect").value;let L=document.getElementById("connHost").value.trim()||"localhost",T=parseInt(document.getElementById("connPort").value,10)||6379;const B=parseInt(document.getElementById("connDb").value,10)||0,A=document.getElementById("connUsername").value.trim()||null,$=document.getElementById("connPassword").value,P=document.getElementById("connTls").checked,K=document.getElementById("connAutoActivate").checked,_=document.getElementById("connReadOnly")?.checked||!1;let D=null;S==="cluster"&&(M.length>0?(D=JSON.stringify(M.map(N=>({host:N.host,port:N.port}))),L=M[0].host,T=M[0].port):D=JSON.stringify([{host:L,port:T}]));try{if(X){const N={name:h,env:b,conn_type:S,host:L,port:T,cluster_nodes:D,db:B,username:A,use_tls:P,read_only:_};$&&(N.password=$);const se=await fetch(`/api/connections/${X}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)});if(!se.ok){const be=await se.json().catch(()=>({}));throw new Error(be.detail||"Failed to update connection")}}else{const N={name:h,env:b,conn_type:S,host:L,port:T,cluster_nodes:D,db:B,username:A,password:$||null,use_tls:P,read_only:_},se=await fetch(`/api/connections?auto_activate=${K}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)});if(!se.ok){const be=await se.json().catch(()=>({}));throw new Error(be.detail||"Failed to save connection")}}C.classList.remove("active"),X=null,z.reset(),M=[],Z(),await Y(),E("Connection saved successfully","success"),G&&await G(),W&&await W()}catch(N){E("Error saving: "+N.message,"error")}})}const Ji=window.fetch;window.fetch=function(e,t){let n="";if(typeof e=="string"?n=e:e instanceof URL?n=e.toString():e&&typeof e.url=="string"&&(n=e.url),n.startsWith("/api/")||n.includes("/api/")){const o=i.selectedConnectionId||localStorage.getItem("redis_insight_selected_conn_id");if(o)if(e instanceof Request)try{e.headers.set("X-Connection-ID",o)}catch{}else{t=t||{};const s=new Headers(t.headers||{});s.has("X-Connection-ID")||s.set("X-Connection-ID",o),t={...t,headers:s}}}return Ji.call(this,e,t)};ji(oe,q);di(q);ei(je);Ci(ne,je,oe);zi(oe);Mi(Rt);Ui(e=>{ki(e),Kn(e),Li(e),Fi(e),Ai(e)});ce("benchmark",()=>Oe());ce("memory",()=>Ve());ce("slowlog",()=>St());ce("topology",()=>ie());ce("clients",()=>Je());function Yi(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
                  <span class="keys-target-capsule" id="keysTargetCapsule" title="Current Active Redis Target">
                    <i data-lucide="server" style="width: 12px; height: 12px; color: #a78bfa;"></i>
                    <span id="keysTargetText">Connecting...</span>
                  </span>
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
                    ${Nt.map(t=>`<option value="${t}"${t===50?" selected":""}>${t.toLocaleString()}</option>`).join("")}
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
                    <p class="modal-subtitle" id="memoryTargetSubtitle" style="margin: 2px 0 0 0; font-size: 0.72rem; color: var(--text-secondary);">Connecting to Redis...</p>
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
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <h3 class="modal-title">Real-Time Slowlog & Latency Profiler</h3>
                      <span class="badge-db" id="slowlogCountBadge">0</span>
                      <span class="badge-duration badge-duration-warning" id="slowlogThresholdBadge" style="font-size: 0.7rem; font-weight: 500;">
                        Threshold: &gt; 10ms
                      </span>
                    </div>
                    <p class="modal-subtitle" id="slowlogTargetSubtitle" style="margin: 2px 0 0 0; font-size: 0.72rem; color: var(--text-secondary);">Connecting to Redis...</p>
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
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <h3 class="modal-title">Cluster Topology & Nodes</h3>
                      <span class="badge-env badge-env-dev" id="topologyEnvBadge">DEV</span>
                      <span class="badge-db" id="topologyNodesCountBadge">0 Nodes</span>
                    </div>
                    <p class="modal-subtitle" id="topologyTargetSubtitle" style="margin: 2px 0 0 0; font-size: 0.72rem; color: var(--text-secondary);">Connecting to Redis...</p>
                  </div>
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
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <h3 class="modal-title">Connected Clients</h3>
                      <span class="badge-db" id="clientsCountBadge" style="margin-left: 4px;">0</span>
                    </div>
                    <p class="modal-subtitle" id="clientsTargetSubtitle" style="margin: 2px 0 0 0; font-size: 0.72rem; color: var(--text-secondary);">Connecting to Redis...</p>
                  </div>
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
  `)}async function oe(){const e=document.getElementById("topConnContainer"),t=document.getElementById("topVitalsContainer");try{const o=await(await fetch("/api/status")).json();if(o.connected){const s=i.cachedConnections.find(C=>C.is_selected)||i.cachedConnections.find(C=>C.id===o.connection_id)||i.cachedConnections.find(C=>C.is_connected),a=s&&s.conn_type==="cluster"||o.cluster_nodes&&o.cluster_nodes.length>0||o.is_cluster,l=o.cluster_nodes_count||(o.node_stats&&o.node_stats.length>0?o.node_stats.length:1),r=(o.node_stats||[]).filter(C=>C.role==="master");if(i.lastStatus=o,fi(o.connection_id||s?.id),Pi(),_t(s),e){const C=(o.env||s?.env||"LOCAL").toUpperCase();e.innerHTML=`
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${p(o.connection_name||"Connected")}">${p(o.connection_name||"Connected")}</span>
            <span class="badge-env badge-env-${C.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem; margin-right: 0.25rem;">${C}</span>
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
                ${a?`${l} ${l===1?"Node":"Nodes"}`:"1 Node"}
              </span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="PING round-trip latency">
              <i data-lucide="zap" style="width: 11px; height: 11px; color: var(--accent-success);"></i>
              <span class="vital-val" style="color: var(--accent-success);">${o.latency_ms} ms</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item${r.length?" clickable":""}" id="btnOpenKeyspaceTop" title="${r.length?`Total keys across ${r.length} master nodes. Click for per-node breakdown`:"Total keys in active keyspace"}">
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
        `);const d=document.getElementById("tabBadgeKeys");d&&(d.textContent=(o.dbsize||0).toLocaleString());const c=document.getElementById("tabBadgeTopology");c&&(c.textContent=a?`${l} Nodes`:"1 Node");const y=document.getElementById("tabBadgeClients");y&&(y.textContent=String(o.connected_clients||1)),g();const u=document.getElementById("btnTopDisconnect");u&&u.addEventListener("click",()=>{o.connection_id&&Xe(o.connection_id)});const f=document.getElementById("btnOpenClientsModal");f&&f.addEventListener("click",Je);const v=document.getElementById("btnOpenTopologyTop");v&&v.addEventListener("click",()=>ie());const x=document.getElementById("btnOpenKeyspaceTop");x&&r.length&&x.addEventListener("click",Ri);const w=document.getElementById("btnOpenMemoryTop");w&&w.addEventListener("click",Ve)}else e&&(e.innerHTML=`
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${o.error?`<span class="top-conn-error" title="${p(o.error)}">${p(o.error)}</span>`:""}
          </div>
        `),t&&(t.innerHTML=`
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `),g(),i.totalScanned===0&&i.keysTableRows.length===0&&Dt()}catch{e&&(e.innerHTML=`
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `),t&&(t.innerHTML=""),g()}}function Qi(){const e=document.getElementById("btnRefreshStats");e&&e.addEventListener("click",oe);const t=document.getElementById("clusterConfigModal"),n=document.getElementById("btnCloseConfigModalHeader");n&&t&&n.addEventListener("click",()=>t.classList.remove("active")),t&&t.addEventListener("click",d=>{d.target===t&&t.classList.remove("active")});const o=document.querySelector(".sidebar"),s=document.getElementById("btnToggleSidebar"),a=document.getElementById("btnShowSidebar"),l=d=>{if(!o)return;const c=d!==void 0?d:!o.classList.contains("collapsed");o.classList.toggle("collapsed",c),a&&(a.style.display=c?"inline-flex":"none"),localStorage.setItem("redis_insight_sidebar_collapsed",c?"true":"false"),g()};s&&s.addEventListener("click",()=>l(!0)),a&&a.addEventListener("click",()=>l(!1)),localStorage.getItem("redis_insight_sidebar_collapsed")==="true"&&l(!0),window.addEventListener("keydown",d=>{(d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="b"&&(d.preventDefault(),l())}),window.addEventListener("keydown",d=>{if(d.key==="Escape"){const c=document.querySelector(".modal-backdrop:not(.ws-dashboard-pane).active");if(c){c.classList.remove("active");return}i.activeWorkspaceTab&&i.activeWorkspaceTab!=="keys"&&H("keys")}}),window.addEventListener("focus",()=>{Y()}),setInterval(oe,15e3)}async function rt(){Yi(),g(),Fn(),Wi(),wi(),Zn(),Si(),_i(),Ni(),Ki(),ri(),ci(),Qi(),await Y(),await oe(),await q()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rt):rt();
