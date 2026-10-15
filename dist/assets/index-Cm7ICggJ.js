(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const Ot=[50,100,200,500,1e3,2e3,5e3,1e4],Kt=200,i={activeWorkspaceTab:"keys",allConnectedClients:[],allSlowlogEntries:[],currentSlowlogMinDuration:0,currentSlowlogSearch:"",currentSlowlogNode:"all",currentViewMode:localStorage.getItem("redis_insight_view_mode")||"table",activeTreeDelimiters:(()=>{try{const t=localStorage.getItem("redis_insight_tree_delimiters_global");if(t){const n=JSON.parse(t);if(Array.isArray(n)&&n.length>0)return n}}catch{}const e=localStorage.getItem("redis_insight_tree_delimiter");return e&&e!=="auto"?[e]:[":","/","."]})(),customTreeDelimiters:(()=>{try{const e=localStorage.getItem("redis_insight_custom_delimiters");if(e){const t=JSON.parse(e);if(Array.isArray(t))return t}}catch{}return[]})(),treeDelimiterPreset:localStorage.getItem("redis_insight_tree_delimiter_preset")||"auto",get currentTreeDelimiter(){return this.treeDelimiterPreset||this.activeTreeDelimiters&&this.activeTreeDelimiters[0]||"auto"},set currentTreeDelimiter(e){this.treeDelimiterPreset=e},treeExpandedPaths:new Set,treeInitialized:!1,currentTreeFilterQuery:"",currentMemoryOverview:null,currentMemoryAnalysis:null,isMemoryProfilingRunning:!1,memoryLoadedForConnId:null,bigkeysSearchQuery:"",slowlogLoadedForConnId:null,clientsLoadedForConnId:null,topologyLoadedForConnId:null,currentCursor:0,currentPattern:"*",currentType:"all",currentTtlFilter:"all",isScanning:!1,totalScanned:0,scanComplete:!1,dbTotalKeys:0,lastStatus:null,keysTableRows:[],loadedKeysSet:new Set,searchScope:"local",localFilterQuery:"",localMatchCount:0,localMatchDurationMs:0,maxLoadedKeysLimit:1e5,isMemoryCeilingReached:!1,isAutoRefreshActive:!1,autoRefreshIntervalSec:(()=>{let e=parseInt(localStorage.getItem("redis_insight_auto_refresh_sec")||"10",10);return isNaN(e)||e<5?10:e})(),autoRefreshRemainingSec:10,autoRefreshTimer:null,activeDetailKey:null,activeDetailData:null,hashFieldsState:null,pendingDeleteKey:null,pendingDeleteCallback:null,selectedConnectionId:(()=>{const e=localStorage.getItem("redis_insight_selected_conn_id");if(!e)return null;const t=Number(e);return!isNaN(t)&&String(t)===e.trim()?t:e})(),cachedConnections:[],currentEnvFilter:"ALL",currentConnSearch:"",currentTopologyData:null,currentTopologyRole:"all",currentTopologySearch:"",currentLimit:2,activeConfigConn:null,currentScanEpoch:0,scanBatchSize:50};function p(e){return e==null?"":String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(e,t,n=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{o.setAttribute(a,String(t[a]))}),n.length&&n.forEach(a=>{const s=dt(...a);o.appendChild(s)}),o};var jt=([e,t,n])=>dt(e,t,n);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),Vt=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",qt=e=>e.flatMap(Vt).map(n=>n.trim()).filter(Boolean).filter((n,o,a)=>a.indexOf(n)===o).join(" "),Gt=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,o)=>n.toUpperCase()+o.toLowerCase()),tt=(e,{nameAttr:t,icons:n,attrs:o})=>{const a=e.getAttribute(t);if(a==null)return;const s=Gt(a),r=n[s];if(!r)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const l=Ut(e),[c,d,u]=r,f={...d,"data-lucide":a,...o,...l},h=qt(["lucide",`lucide-${a}`,l,o]);h&&Object.assign(f,{class:h});const w=jt([c,f,u]);return e.parentNode?.replaceChild(w,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=["svg",k,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=["svg",k,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=["svg",k,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=["svg",k,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=["svg",k,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=["svg",k,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",k,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",k,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",k,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",k,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",k,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",k,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",k,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",k,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",k,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",k,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",k,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",k,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",k,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",k,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",k,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",k,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",k,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",k,[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",k,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",k,[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",k,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",k,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",k,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",k,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",k,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",k,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",k,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",k,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",k,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",k,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",k,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",k,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",k,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",k,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",k,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",k,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=["svg",k,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=["svg",k,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=["svg",k,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=["svg",k,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(a=>tt(a,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(s=>tt(s,{nameAttr:"icon-name",icons:e,attrs:n})))}};function y(){On({icons:{Layers:bn,Plus:Sn,RefreshCw:Tn,Search:In,Cpu:rn,Trash2:Dn,Zap:Hn,CheckCircle2:on,AlertCircle:tn,Database:cn,ShieldCheck:Bn,Lock:wn,ArrowDownCircle:nn,X:Fn,Play:En,Copy:ln,Clock:an,Edit:_n,ExternalLink:pn,Code:sn,Users:Nn,Server:$n,Network:Cn,GitBranch:hn,ArrowRightLeft:Jt,Activity:Wt,PieChart:Yt,AlertTriangle:zn,TrendingUp:Pn,BarChart2:Qt,Power:Ln,ChevronLeft:Zt,ChevronRight:en,PanelLeft:kn,Download:dn,FileText:mn,Folder:fn,FolderOpen:yn,FolderTree:gn,Table:Rn,List:xn,ChevronDown:Xt,Key:vn,Filter:un,Timer:An,Sparkles:Mn}})}const Ie={};function ue(e,t){Ie[e]=t}let Ee=!1;function O(e,t=!0){if(!Ee){Ee=!0;try{["keys","benchmark","memory","slowlog","topology","clients"].includes(e)||(e="keys"),i.activeWorkspaceTab=e,document.querySelectorAll(".ws-tab-btn").forEach(r=>{const l=r.dataset.tab===e;r.classList.toggle("active",l),r.setAttribute("aria-selected",l?"true":"false")}),document.querySelectorAll(".ws-tab-pane").forEach(r=>{r.classList.remove("active")});const o=document.getElementById(`paneWorkspace${Kn(e)}`);if(o&&o.classList.add("active"),Object.entries({benchmark:"benchmarkModal",memory:"memoryModal",slowlog:"slowlogModal",topology:"clusterTopologyModal",clients:"clientsListModal"}).forEach(([r,l])=>{const c=document.getElementById(l);c&&(r===e?c.classList.add("active"):c.classList.remove("active"))}),Object.entries({benchmark:"btnOpenBenchmarkModal",slowlog:"btnOpenSlowlog",memory:"btnOpenMemoryModal",topology:"btnOpenTopologyTop",clients:"btnOpenClientsModal"}).forEach(([r,l])=>{const c=document.getElementById(l);c&&c.classList.toggle("active",r===e)}),t&&history.replaceState(null,"",`#/${e}`),Ie[e])try{Ie[e]()}catch(r){console.warn(`Error loading data for tab ${e}:`,r)}y()}finally{Ee=!1}}}function Kn(e){return e.charAt(0).toUpperCase()+e.slice(1)}function jn(){const e=document.getElementById("workspaceTabsBar");e&&e.addEventListener("click",t=>{const n=t.target.closest(".ws-tab-btn");n&&n.dataset.tab&&O(n.dataset.tab)}),window.addEventListener("hashchange",()=>{nt()}),window.addEventListener("keydown",t=>{const n=document.activeElement?document.activeElement.tagName.toLowerCase():"";if(!(n==="input"||n==="textarea"||n==="select")&&(t.ctrlKey||t.metaKey)&&!t.shiftKey&&!t.altKey){const o={1:"keys",2:"benchmark",3:"memory",4:"slowlog",5:"topology",6:"clients"};o[t.key]&&(t.preventDefault(),O(o[t.key]))}}),nt()}function nt(){const t=(window.location.hash||"").match(/^#\/([a-z0-9_-]+)/i);if(t){const n=t[1].toLowerCase();if(["keys","benchmark","memory","slowlog","topology","clients"].includes(n)){O(n,!1);return}}O("keys",!1)}let X=null;function Un(){return(!X||!document.body.contains(X))&&(X=document.createElement("div"),X.id="appToastContainer",X.className="toast-container",document.body.appendChild(X)),X}function E(e,t="info",n=2500){if(!e)return;const o=Un(),a=document.createElement("div");a.className=`toast-pill toast-${t}`;const s=t==="success"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>':t==="error"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>':t==="warning"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>':'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';a.innerHTML=`
    <span class="toast-icon-wrapper">${s}</span>
    <span class="toast-message">${Vn(e)}</span>
    <button type="button" class="toast-close" title="Dismiss">&times;</button>
  `;const r=a.querySelector(".toast-close");if(r&&r.addEventListener("click",()=>Se(a)),o.appendChild(a),requestAnimationFrame(()=>{a.classList.add("toast-show")}),n>0){const l=setTimeout(()=>{Se(a)},n);a.addEventListener("mouseenter",()=>clearTimeout(l)),a.addEventListener("mouseleave",()=>{setTimeout(()=>Se(a),1e3)})}return a}function Se(e){!e||e.classList.contains("toast-exit")||(e.classList.remove("toast-show"),e.classList.add("toast-exit"),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},250))}function Vn(e){return typeof e!="string"?String(e??""):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}async function ne(e){typeof e!="string"&&(e=String(e??""));try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",t.setAttribute("readonly",""),document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}let pt="probe",j=!1;const he={counter:{script:`local k = KEYS[1] or 'bench_counter'
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
return redis.call('PING')`,keys:"my_key",args:""}};function Ke(e){if(!e)return"";const t=Number(e.network_overhead_ms||0).toFixed(3),n=Number(e.server_exec_ms||0).toFixed(3);return`
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
  `}function je(e){return e?`
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
  `:""}function Ue(e){return!e||!e.length?"":`
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
  `}function qn(e){j=!1;const t=e||i.cachedConnections.find(f=>f.id===i.selectedConnectionId||f.is_selected),n=t?t.name:"Active Cluster",o=t?t.host:i.lastStatus?.host||"",a=t?t.port:i.lastStatus?.port||"",s=t?(t.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase(),r=document.getElementById("benchmarkTargetSubtitle");r&&(r.textContent=`Active Target: ${n} (${o}:${a}) [${s}] | Engine: AsyncIO Native | Namespace: __ri_bench__`);const l=document.getElementById("benchmarkProbeResults");l&&(l.innerHTML=`
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
    `);const u=document.getElementById("benchmarkClusterResults");u&&(u.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="layers" style="width: 28px; height: 28px; color: #c084fc; margin-bottom: 0.75rem; opacity: 0.85;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Ready to benchmark multi-node cluster matrix on ${p(n)}</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Probes every cluster master node simultaneously to measure node-by-node latency distribution</div>
      </div>
    `),Ve(),y()}function Ve(){const e=document.getElementById("benchmarkTargetSubtitle");if(e){const s=i.cachedConnections.find(u=>u.id===i.selectedConnectionId||u.is_selected),r=s?s.name:i.lastStatus?.host?`${i.lastStatus.host}:${i.lastStatus.port}`:"Active Target",l=s?s.host:i.lastStatus?.host||"",c=s?s.port:i.lastStatus?.port||"",d=s?(s.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();e.textContent=`Active Target: ${r} (${l}:${c}) [${d}] | Engine: AsyncIO Native | Namespace: __ri_bench__`}const t=document.getElementById("benchmarkReadOnlyBadge"),n=document.getElementById("optCommandPresetWrite"),o=document.getElementById("optCommandPresetStruct");if(i.lastStatus?.read_only){t&&(t.style.display="inline-flex"),n&&(n.disabled=!0,n.textContent="Write / Set (Disabled - Read-Only)"),o&&(o.disabled=!0,o.textContent="Data Structures (Disabled - Read-Only)");const s=document.getElementById("selCommandPreset");s&&(s.value==="write"||s.value==="structures")&&(s.value="read")}else t&&(t.style.display="none"),n&&(n.disabled=!1,n.textContent="Write / Set (100% SET)"),o&&(o.disabled=!1,o.textContent="Data Structures (HSET / HGET)");const a=document.getElementById("txtLuaScript");if(a&&!a.value.trim()){a.value=he.counter.script;const s=document.getElementById("txtLuaKeys"),r=document.getElementById("txtLuaArgs");s&&(s.value=he.counter.keys),r&&(r.value=he.counter.args)}mt(pt||"probe")}function Gn(){O("benchmark"),Ve()}function Wn(){O("keys")}function mt(e){pt=e,document.querySelectorAll(".benchmark-tab-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-tab")===e)});const t={probe:document.getElementById("benchmarkPaneProbe"),commands:document.getElementById("benchmarkPaneCommands"),lua:document.getElementById("benchmarkPaneLua"),cluster:document.getElementById("benchmarkPaneCluster")};Object.keys(t).forEach(n=>{t[n]&&(t[n].style.display=n===e?"flex":"none")}),y()}async function Jn(){if(j)return;const e=document.getElementById("btnRunProbe"),t=document.getElementById("benchmarkProbeResults"),n=document.getElementById("selProbeCount"),o=parseInt(n?.value||"100",10);j=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Running Probe (${o})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Executing ${o} baseline probes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring network round-trip time vs Redis event-loop CPU duration</div>
      </div>
    `,y());try{const a=await fetch("/api/benchmark/probe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({count:o})});if(!a.ok){const r=await a.json().catch(()=>({detail:"Probe request failed"}));throw new Error(r.detail||"Probe failed")}const s=await a.json();Qn(s)}catch(a){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Latency Probe Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(a.message)}</div>
        </div>
      `,y())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Run Latency Probe</span>',y())}}function Qn(e){const t=document.getElementById("benchmarkProbeResults");if(!t||!e)return;const n=Number(e.avg_rtt_ms||0).toFixed(3),o=Number(e.breakdown?.server_exec_ms||0).toFixed(3),a=Number(e.breakdown?.network_overhead_ms||0).toFixed(3),s=Number(e.ops_per_sec||0).toLocaleString();t.innerHTML=`
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
        <div class="val" style="color: #38bdf8;">${a} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Transit & TCP stack overhead</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Probe Throughput</div>
        <div class="val" style="color: #fbbf24;">${s} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        <div class="sub">${e.count} probes in ${e.duration_ms}ms</div>
      </div>
    </div>

    ${Ke(e.breakdown)}
    ${je(e.percentiles)}
    ${Ue(e.histogram)}
  `,y()}async function Yn(){if(j)return;const e=document.getElementById("btnRunCommandBench"),t=document.getElementById("benchmarkCommandResults"),n=document.getElementById("selCommandPreset")?.value||"read",o=parseInt(document.getElementById("selCommandRequests")?.value||"1000",10),a=parseInt(document.getElementById("selCommandConcurrency")?.value||"5",10),s=parseInt(document.getElementById("selCommandPipeline")?.value||"1",10);j=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Benchmarking (${o})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #f59e0b; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Running synthetic workload (${n})...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">
          Executing ${o.toLocaleString()} requests across ${a} workers (pipeline: ${s})
        </div>
      </div>
    `,y());try{const r=await fetch("/api/benchmark/commands",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset:n,requests:o,concurrency:a,pipeline:s})});if(!r.ok){const c=await r.json().catch(()=>({detail:"Benchmark request failed"}));throw new Error(c.detail||"Benchmark failed")}const l=await r.json();Xn(l)}catch(r){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Benchmark Execution Blocked</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(r.message)}</div>
        </div>
      `,y())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Start Benchmark</span>',y())}}function Xn(e){const t=document.getElementById("benchmarkCommandResults");if(!t||!e)return;const n=Number(e.ops_per_sec||0).toLocaleString(),o=Number(e.avg_latency_ms||0).toFixed(3),a=Number(e.percentiles?.p99_ms||0).toFixed(3),s=Number(e.cleaned_keys_count||0).toLocaleString();t.innerHTML=`
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
        <div class="val" style="color: #f472b6;">${a} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">99% of requests below this</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="shield-check" style="width: 12px; height: 12px; color: #10b981;"></i> Cleaned Ephemeral Keys</div>
        <div class="val" style="color: #6ee7b7;">${s}</div>
        <div class="sub">Auto-unlinked via UNLINK</div>
      </div>
    </div>

    ${Ke(e.breakdown)}
    ${je(e.percentiles)}
    ${Ue(e.histogram)}
  `,y()}async function Zn(){if(j)return;const e=document.getElementById("btnRunLuaBench"),t=document.getElementById("benchmarkLuaResults"),n=document.getElementById("txtLuaScript")?.value||"",o=document.getElementById("txtLuaKeys")?.value||"",a=document.getElementById("txtLuaArgs")?.value||"",s=document.getElementById("selLuaMode")?.value||"profile",r=parseInt(document.getElementById("selLuaIterations")?.value||"100",10),l=o.split(",").map(d=>d.trim()).filter(Boolean),c=a.split(",").map(d=>d.trim()).filter(Boolean);if(!n.trim()){E("Please enter a Lua script to execute and profile.","warning");return}j=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Executing Script...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Pre-loading and running Lua script on Redis server...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring precise microsecond server execution time</div>
      </div>
    `,y());try{const d=await fetch("/api/benchmark/lua",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({script:n,keys:l,args:c,mode:s,iterations:r,concurrency:5})});if(!d.ok){const f=await d.json().catch(()=>({detail:"Lua benchmark failed"}));throw new Error(f.detail||"Lua benchmark failed")}const u=await d.json();ei(u)}catch(d){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Lua Script Execution Error</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(d.message)}</div>
        </div>
      `,y())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Execute & Profile</span>',y())}}function ei(e){const t=document.getElementById("benchmarkLuaResults");if(!t||!e)return;const n=Number(e.server_duration_ms||0).toFixed(3),o=Number(e.duration_ms||0).toFixed(3);let a="";e.atomicity_warning?a=`
      <div class="atomicity-alert warning">
        <i data-lucide="alert-triangle" style="width: 20px; height: 20px; color: #ef4444; flex-shrink: 0;"></i>
        <div>
          <strong>High Atomicity Warning:</strong> Script spent <strong>${n} ms</strong> executing on the Redis server (> 5ms).
          In Redis, Lua scripts execute atomically and block all other incoming client connections for the entire duration! Consider optimizing loops or moving logic out of Lua.
        </div>
      </div>
    `:a=`
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
          <div class="val">${o} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        </div>
      </div>
      ${je(e.percentiles)}
      ${Ue(e.histogram)}
    `),t.innerHTML=`
    ${a}

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem;">
      <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.35rem;">
        Script Return Value (Evaluated on Server)
      </div>
      <pre style="margin: 0; background: #090d16; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: #38bdf8; font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto;">${p(String(e.result))}</pre>
    </div>

    ${Ke(e.breakdown)}
    ${s}
  `,y()}async function ti(){if(j)return;const e=document.getElementById("btnRunClusterMatrix"),t=document.getElementById("benchmarkClusterResults");j=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Evaluating Matrix...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Probing primary cluster nodes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring cross-node latency and throughput matrix</div>
      </div>
    `,y());try{const n=await fetch("/api/benchmark/cluster-matrix");if(!n.ok){const a=await n.json().catch(()=>({detail:"Cluster matrix request failed"}));throw new Error(a.detail||"Cluster matrix failed")}const o=await n.json();ni(o)}catch(n){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Cluster Matrix Evaluation Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(n.message)}</div>
        </div>
      `,y())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i><span>Evaluate Cluster Latency Matrix</span>',y())}}function ni(e){const t=document.getElementById("benchmarkClusterResults");if(!t||!e)return;const n=Number(e.cluster_avg_latency_ms||0).toFixed(3),o=e.nodes||[];t.innerHTML=`
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
          ${o.map(a=>`
            <tr class="${a.outlier?"outlier":""}">
              <td>
                <div style="font-family: var(--font-mono); font-weight: 700; color: #38bdf8;">${p(a.node)}</div>
              </td>
              <td>
                <span class="badge-db" style="text-transform: capitalize;">${p(a.role)}</span>
                <span style="font-size: 0.72rem; color: var(--text-muted); margin-left: 0.35rem;">${p(a.slots||"N/A")}</span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.45rem;">
                  <strong style="font-family: var(--font-mono);">${Number(a.avg_latency_ms).toFixed(3)} ms</strong>
                </div>
              </td>
              <td style="font-family: var(--font-mono);">${Number(a.p99_latency_ms).toFixed(3)} ms</td>
              <td style="font-family: var(--font-mono); color: #fbbf24;">${Number(a.ops_per_sec).toLocaleString()} ops/s</td>
              <td>
                ${a.outlier?'<span class="badge-duration badge-duration-danger" style="font-size: 0.7rem; font-weight: 600;">⚠️ Latency Outlier (&gt;1.75x)</span>':'<span class="badge-duration badge-duration-normal" style="font-size: 0.7rem; font-weight: 600; color: #6ee7b7;">Balanced</span>'}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `,y()}function ii(){const e=document.getElementById("btnCloseBenchmarkModal");e&&e.addEventListener("click",Wn);const t=document.getElementById("btnOpenBenchmarkModal");t&&t.addEventListener("click",Gn),document.querySelectorAll(".benchmark-tab-btn").forEach(d=>{d.addEventListener("click",()=>{const u=d.getAttribute("data-tab");u&&mt(u)})});const n=document.getElementById("btnRunProbe");n&&n.addEventListener("click",Jn);const o=document.getElementById("btnRunCommandBench");o&&o.addEventListener("click",Yn);const a=document.getElementById("selLuaPreset");a&&a.addEventListener("change",()=>{const d=a.value,u=he[d];if(u){const f=document.getElementById("txtLuaScript"),h=document.getElementById("txtLuaKeys"),w=document.getElementById("txtLuaArgs");f&&(f.value=u.script),h&&(h.value=u.keys),w&&(w.value=u.args)}});const s=document.getElementById("selLuaMode"),r=document.getElementById("groupLuaBenchmarkControls");s&&r&&s.addEventListener("change",()=>{r.style.display=s.value==="benchmark"?"flex":"none"});const l=document.getElementById("btnRunLuaBench");l&&l.addEventListener("click",Zn);const c=document.getElementById("btnRunClusterMatrix");c&&c.addEventListener("click",ti)}let $e=null;function Be(e,t="Copied!",n=1500){if(!e)return;const o=e.innerHTML;e.classList.add("btn-copy-feedback","copied"),e.innerHTML=`<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><polyline points="20 6 9 17 4 12"></polyline></svg>${t}`,setTimeout(()=>{e.classList.remove("copied"),e.innerHTML=o},n)}function oi(e){$e=e}async function oe(e){i.activeDetailKey=e;const t=document.getElementById("keyDetailModal"),n=document.getElementById("detailKeyTitle"),o=document.getElementById("detailHeaderMeta"),a=document.getElementById("detailBodyContent"),s=document.getElementById("btnDeleteKeyFromDetail");s&&(s.style.display=i.lastStatus?.read_only?"none":""),n&&(n.textContent=e,n.title=e),o&&(o.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>'),a&&(a.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>'),t&&t.classList.add("active");try{let r=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(r.ok||(r=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!r.ok){let c="Key not found or could not be read";try{const d=await r.json();d&&d.detail&&(c=d.detail)}catch{}throw new Error(c)}const l=await r.json();i.activeDetailData=l,ai(l),li(l)}catch(r){o&&(o.innerHTML='<span style="color: var(--accent-danger);">Error</span>'),a&&(a.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Failed to inspect key</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">${p(r.message)}</p>
        </div>
      `,y())}}function Le(){const e=document.getElementById("keyDetailModal");e&&e.classList.remove("active")}function ai(e){const t=document.getElementById("detailHeaderMeta");if(!t)return;const n=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",o=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;t.innerHTML=`
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
  `,y();const a=document.getElementById("btnEditTtl");a&&a.addEventListener("click",()=>{si(e.name,e.ttl)})}async function si(e,t){if(i.lastStatus?.read_only){E("TTL modification is disabled in Read-Only mode.","warning");return}const n=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,t>0?t:"3600");if(n===null)return;const o=parseInt(n.trim(),10);if(isNaN(o)){E("Please enter a valid integer for TTL.","warning");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:o})})).ok)throw new Error("Failed to update TTL");E(`Updated TTL for "${e}"`,"success"),oe(e)}catch(a){E("Error updating TTL: "+a.message,"error")}}function li(e){const t=document.getElementById("detailBodyContent");if(!t)return;const n=e.type.toLowerCase();if(n==="hash"){const o=e.fields||[],a=e.has_more_fields?Number(e.fields_cursor||0):0;i.hashFieldsState={key:e.name,cursor:a,fields:[...o],total:Number(e.length||o.length),match:null,loading:!1},t.innerHTML=`
      <div class="fields-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <input type="text" id="hashFieldSearchInput" class="field-search-input" placeholder="Filter fields (Enter: search all)" title="Filters loaded fields instantly; press Enter to search the whole hash on the server (HSCAN MATCH)">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="hashFieldCountText">${yt(o.length)}</span>
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
            ${ut(o)}
          </tbody>
        </table>
      </div>
      <div id="hashFieldsFooter" style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);"></div>
    `,y(),ci(e.name),qe();return}if(e.is_json||n.includes("json")){const o=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${p(o)}</div>
    `,y();const a=document.getElementById("btnCopyJsonValue");a&&a.addEventListener("click",async()=>{await ne(o)?(E("JSON copied to clipboard","success"),Be(a,"Copied!")):E("Failed to copy JSON to clipboard","error")});return}if(n==="string"){t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${p(e.value||"")}</div>
    `,y();const o=document.getElementById("btnCopyStringValue");o&&o.addEventListener("click",async()=>{await ne(e.value||"")?(E("Value copied to clipboard","success"),Be(o,"Copied!")):E("Failed to copy value to clipboard","error")});return}if(n==="stream"){const o=Array.isArray(e.value)?e.value:[],a=l=>{if(!l||isNaN(l))return"";const c=Math.floor((Date.now()-l)/1e3);if(c<0)return"just now";if(c<60)return`${c}s ago`;const d=Math.floor(c/60);if(d<60)return`${d}m ago`;const u=Math.floor(d/60);return u<24?`${u}h ago`:`${Math.floor(u/24)}d ago`};t.innerHTML=`
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
            `:o.map((l,c)=>{const d=l.id||"",u=String(d).match(/^(\d{10,13})-/);let f="",h="";if(u)try{const L=parseInt(u[1],10);f=new Date(L).toLocaleString(),h=a(L)}catch{}const w=l.fields||{},C=Object.entries(w),v=C.map(([L,B])=>`
                <div class="stream-entry-pill" title="${p(L)}: ${p(String(B))}">
                  <span class="pill-key">${p(L)}:</span>
                  <span class="pill-val">${p(String(B))}</span>
                </div>
              `).join(""),x=`${d} ${C.map(([L,B])=>`${L} ${B}`).join(" ")}`.toLowerCase();return`
                <tr class="stream-entry-row" data-search="${p(x)}" style="border-bottom: 1px solid rgba(255,255,255,0.04);">
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
                    ${f?`
                      <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-sans); margin-top: 3px; display: flex; align-items: center; gap: 0.35rem;">
                        <span>${p(f)}</span>
                        ${h?`<span class="badge-env" style="font-size: 0.62rem; padding: 0.05rem 0.3rem;">${p(h)}</span>`:""}
                      </div>
                    `:""}
                  </td>
                  <td style="padding: 0.65rem 1rem; vertical-align: top;">
                    <div style="display: flex; flex-wrap: wrap; gap: 2px;">
                      ${v||'<span style="color: var(--text-muted); font-size: 0.78rem;">(no fields)</span>'}
                    </div>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `,y(),t.querySelectorAll(".btn-copy-stream-id").forEach(l=>{l.addEventListener("click",async()=>{const c=l.getAttribute("data-copy")||"";await ne(c)&&(l.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px; color: #10b981;"></i>',y(),setTimeout(()=>{l.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',y()},1500))})}),t.querySelectorAll(".btn-copy-stream-json").forEach(l=>{l.addEventListener("click",async()=>{const c=parseInt(l.getAttribute("data-idx")||"-1",10);c>=0&&o[c]&&await ne(JSON.stringify(o[c],null,2))&&(l.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px; color: #10b981;"></i>',y(),setTimeout(()=>{l.innerHTML='<i data-lucide="code" style="width: 11px; height: 11px;"></i>',y()},1500))})});const s=document.getElementById("streamFilterInput"),r=document.getElementById("streamFilterCountText");s&&s.addEventListener("input",()=>{const l=s.value.trim().toLowerCase(),c=t.querySelectorAll(".stream-entry-row");let d=0;c.forEach(u=>{const f=u.getAttribute("data-search")||"";!l||f.includes(l)?(u.style.display="",d++):u.style.display="none"}),r&&(r.textContent=`Showing ${d} of ${o.length} entries`)});return}if(Array.isArray(e.value)){const o=n==="zset";t.innerHTML=`
      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 15%;">${o?"Score":"Index"}</th>
              <th style="width: 85%;">Element / Member</th>
            </tr>
          </thead>
          <tbody>
            ${e.value.map((a,s)=>`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
                  ${o?a.score:`[${s}]`}
                </td>
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem;">
                  ${p(o?a.member:String(a))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;return}t.innerHTML=`<div class="json-view-box">${p(String(e.value))}</div>`}function ut(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(t=>`
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
  `).join("")}function yt(e,t=null){const n=i.hashFieldsState,o=n?n.total:e,a=n&&n.match?`${e.toLocaleString()} matching fields loaded`:e<o?`${e.toLocaleString()} of ${o.toLocaleString()} fields loaded`:`${e.toLocaleString()} fields`;return t!==null?`${t.toLocaleString()} shown · ${a}`:a}function ri(e){return`*${e.replace(/[\\*?\[\]]/g,t=>`\\${t}`)}*`}function gt(){const e=i.hashFieldsState,t=document.getElementById("hashFieldsTableBody"),n=document.getElementById("hashFieldCountText"),o=document.getElementById("hashFieldSearchInput");if(!e||!t)return;const a=o?o.value.trim().toLowerCase():"",s=a?e.fields.filter(r=>r.field.toLowerCase().includes(a)||r.value.toLowerCase().includes(a)):e.fields;t.innerHTML=ut(s),n&&(n.textContent=yt(e.fields.length,a?s.length:null)),y(),ft(e.key),qe()}function qe(){const e=document.getElementById("hashFieldsFooter"),t=i.hashFieldsState;if(!e||!t)return;const n=t.cursor!==0,o=t.match?`Server-side filter: <code>${p(t.match)}</code> · <a href="#" id="btnClearHashMatch" style="color: var(--accent-primary);">clear</a>`:n?"Search applies to loaded fields. Press Enter to search all fields on the server.":"";e.innerHTML=`
    <span>${o}</span>
    ${n?`
      <button type="button" class="btn btn-secondary" id="btnLoadMoreHashFields" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" ${t.loading?"disabled":""}>
        <i data-lucide="${t.loading?"refresh-cw":"arrow-down-circle"}" ${t.loading?'class="spin"':""} style="width: 13px; height: 13px;"></i>
        ${t.loading?"Loading...":"Load More Fields"}
      </button>`:""}
  `,y();const a=document.getElementById("btnLoadMoreHashFields");a&&a.addEventListener("click",()=>Me());const s=document.getElementById("btnClearHashMatch");s&&s.addEventListener("click",r=>{r.preventDefault();const l=document.getElementById("hashFieldSearchInput");l&&(l.value=""),Me({reset:!0,match:null})})}async function Me({reset:e=!1,match:t}={}){const n=i.hashFieldsState;if(!n||n.loading||!e&&n.cursor===0)return;const o=n.key,a=e?t:n.match;n.loading=!0,qe();try{const s=new URLSearchParams({cursor:String(e?0:n.cursor),count:String(Kt)});a&&s.set("match",a);const r=await fetch(`/api/keys/${encodeURIComponent(o)}/hash/fields?${s}`);if(!r.ok){const d=await r.json().catch(()=>({}));throw new Error(d.detail||`Server error: ${r.status}`)}const l=await r.json();if(i.hashFieldsState!==n||i.activeDetailKey!==o)return;e&&(n.fields=[]);const c=new Set(n.fields.map(d=>d.field));for(const d of l.fields||[])c.has(d.field)||(c.add(d.field),n.fields.push(d));n.cursor=Number(l.cursor||0),n.total=Number(l.total??n.total),n.match=a||null}catch(s){E("Failed to load hash fields: "+s.message,"error")}finally{n.loading=!1,i.hashFieldsState===n&&gt()}}function ci(e){const t=document.getElementById("hashFieldSearchInput");t&&(t.addEventListener("input",()=>gt()),t.addEventListener("keydown",o=>{if(o.key!=="Enter"||!i.hashFieldsState)return;const a=t.value.trim(),s=i.hashFieldsState;s.cursor===0&&!s.match||Me({reset:!0,match:a?ri(a):null})}));const n=document.getElementById("btnAddHashField");n&&n.addEventListener("click",async()=>{const o=prompt(`Enter field name for hash '${e}':`);if(!o)return;const a=prompt(`Enter value for field '${o}':`);if(a!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:o,value:a})})).ok)throw new Error("Failed to set field");E(`Added field "${o}" to hash`,"success"),oe(e)}catch(s){E("Error setting field: "+s.message,"error")}}),ft(e)}function ft(e){document.querySelectorAll(".btn-delete-hash-field").forEach(t=>{t.addEventListener("click",async()=>{const n=decodeURIComponent(t.getAttribute("data-field"));if(confirm(`Delete field '${n}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(n)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");E(`Deleted field "${n}"`,"success"),oe(e)}catch(o){E("Error: "+o.message,"error")}})})}function di(e){if(!e)return null;const t=e.match(/filename\*\s*=\s*([\w-]*)'[^']*'([^;]+)/i);if(t)try{return decodeURIComponent(t[2].trim().replace(/^"|"$/g,""))}catch{}const n=e.match(/filename\s*=\s*"([^"]*)"/i)||e.match(/filename\s*=\s*([^;]+)/i);return n&&n[1].trim()?n[1].trim():null}function ht(e,t){const n=URL.createObjectURL(e),o=document.createElement("a");o.href=n,o.download=t,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function vt(e,t,n=null){let o=di(e.headers.get("content-disposition"))||t;const a=String(e.headers.get("x-export-format")||n||"").toLowerCase();a&&!o.toLowerCase().endsWith(`.${a}`)&&(o=`${o}.${a}`);const s=await e.blob();return ht(s,o),o}async function pi(e,t){if(!e)return;const n=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Downloading...',y());try{const o=await fetch(`/api/keys/${encodeURIComponent(e)}/download`);if(!o.ok){const s=await o.json().catch(()=>({}));throw new Error(s.detail||`Server error: ${o.status}`)}const a=e.replace(/[^A-Za-z0-9._-]+/g,"_")||"redis_key";await vt(o,a),o.headers.get("x-export-truncated")==="true"?E("Download was capped: only the first portion was included.","warning"):E(`Downloaded value for "${e}"`,"success")}catch(o){E("Download failed: "+o.message,"error")}finally{t&&(t.disabled=!1,t.innerHTML=n,y())}}function mi(){const e=document.getElementById("btnCloseDetailModal");e&&e.addEventListener("click",Le);const t=document.getElementById("keyDetailModal");t&&t.addEventListener("click",s=>{s.target===t&&Le()});const n=document.getElementById("btnCopyKeyName");n&&n.addEventListener("click",async()=>{i.activeDetailKey&&(await ne(i.activeDetailKey)?(E(`Copied key "${i.activeDetailKey}" to clipboard`,"success"),Be(n,"Key Copied!")):E("Failed to copy key to clipboard","error"))});const o=document.getElementById("btnDownloadKeyValue");o&&o.addEventListener("click",()=>{pi(i.activeDetailKey,o)});const a=document.getElementById("btnDeleteKeyFromDetail");a&&a.addEventListener("click",()=>{i.activeDetailKey&&$e&&$e(i.activeDetailKey,()=>{Le()})})}let _e=null;function ui(e){_e=e}function Ge(e,t){if(i.lastStatus?.read_only){E("Key deletion is disabled in Read-Only mode.","warning");return}i.pendingDeleteKey=e,i.pendingDeleteCallback=t;const n=document.getElementById("deleteKeyConfirmModal"),o=document.getElementById("deleteKeyTargetName"),a=document.getElementById("inputConfirmDelete"),s=document.getElementById("btnSubmitDeleteKey");o&&(o.textContent=e),a&&(a.value=""),s&&(s.disabled=!0),n&&n.classList.add("active"),a&&a.focus(),a&&(a.oninput=()=>{const r=a.value.trim().toUpperCase();s&&(s.disabled=r!=="CONFIRM"&&a.value.trim()!==e)}),s&&(s.onclick=async()=>{s.disabled=!0,s.textContent="Deleting...";try{const r=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),l=await r.json();if(!r.ok)throw new Error(l.detail||"Failed to delete key");E(`Key "${e}" deleted permanently`,"success"),n&&n.classList.remove("active"),i.pendingDeleteCallback&&i.pendingDeleteCallback()}catch(r){E("Error deleting key: "+r.message,"error")}finally{s.disabled=!1,s.textContent="Delete Permanently"}})}function yi(){const e=document.getElementById("deleteKeyConfirmModal"),t=document.getElementById("btnCloseDeleteConfirmModal"),n=document.getElementById("btnCancelDeleteConfirm"),o=()=>e&&e.classList.remove("active");t&&t.addEventListener("click",o),n&&n.addEventListener("click",o);const a=document.getElementById("exportKeysModal"),s=document.getElementById("btnOpenExportModal"),r=document.getElementById("btnCloseExportModal"),l=document.getElementById("btnCancelExportModal"),c=document.getElementById("btnExecuteExport");if(s&&a){s.addEventListener("click",()=>{const m=document.getElementById("exportPatternDisplay"),g=document.getElementById("exportTypeDisplay"),b=document.getElementById("exportTtlDisplay"),S=document.getElementById("exportLoadedCount"),T=document.getElementById("exportScopeLoadedText"),I=i.currentTtlFilter||"all",_=I==="persistent"?"∞ No TTL (Persistent)":I==="expiring"?"⏳ Expiring Only":"All TTLs",D=I==="persistent"?i.keysTableRows.filter($=>$.ttl_seconds===-1):I==="expiring"?i.keysTableRows.filter($=>$.ttl_seconds>0):i.keysTableRows;m&&(m.textContent=i.currentPattern||"*"),g&&(g.textContent=i.currentType&&i.currentType!=="all"?i.currentType.toUpperCase():"All Types"),b&&(b.textContent=_),S&&(S.textContent=`${D.length} keys`),T&&(T.textContent=`${D.length} keys`),a.classList.add("active"),y()});const F=()=>a.classList.remove("active");r&&r.addEventListener("click",F),l&&l.addEventListener("click",F),c&&c.addEventListener("click",async()=>{const m=document.querySelector('input[name="exportFormatRadio"]:checked'),g=document.querySelector('input[name="exportScopeRadio"]:checked'),b=(m?m.value:"csv").toLowerCase(),S=g?g.value:"loaded",T=i.currentPattern||"*",I=i.currentType&&i.currentType!=="all"?i.currentType:"",_=i.currentTtlFilter&&i.currentTtlFilter!=="all"?i.currentTtlFilter:"",$=`redis_keys_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.${b}`;if(S==="all"){c.disabled=!0,c.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Exporting...',y();try{let R=`/api/keys/export?pattern=${encodeURIComponent(T)}&format=${b}`;I&&(R+=`&type=${encodeURIComponent(I)}`),_&&(R+=`&ttl_filter=${encodeURIComponent(_)}`);const P=await fetch(R);if(!P.ok){const N=await P.json().catch(()=>({detail:"Export failed"}));throw new Error(N.detail||`Server error: ${P.status}`)}await vt(P,$,b),E(`Exported keys matching "${i.currentPattern||"*"}"`,"success"),F()}catch(R){E(`Export failed: ${R.message}`,"error")}finally{c.disabled=!1,c.innerHTML='<i data-lucide="download" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Download',y()}return}const z=i.currentTtlFilter==="persistent"?i.keysTableRows.filter(R=>R.ttl_seconds===-1):i.currentTtlFilter==="expiring"?i.keysTableRows.filter(R=>R.ttl_seconds>0):i.keysTableRows;if(z.length===0){E("No keys matching filters loaded in browser to export.","warning");return}let K;if(b==="csv"){const R=`Key,Type,TTL_Seconds
`,P=z.map(N=>`"${(N.key||"").replace(/"/g,'""')}",${N.type||""},${N.ttl_seconds!==void 0?N.ttl_seconds:-1}`);K=new Blob([R+P.join(`
`)],{type:"text/csv;charset=utf-8;"})}else{const R=z.map(P=>P.key);K=new Blob([R.join(`
`)+`
`],{type:"text/plain;charset=utf-8;"})}ht(K,$),F()})}const d=document.getElementById("bulkDeleteModal"),u=document.getElementById("btnOpenBulkDeleteModal"),f=document.getElementById("btnCloseBulkDeleteModal"),h=document.getElementById("btnCancelBulkDelete"),w=document.getElementById("btnConfirmBulkDelete"),C=document.getElementById("bdCountConfirmInput"),v=document.getElementById("bdProdConfirmInput"),x=document.getElementById("bdProdConfirmGroup"),L=document.getElementById("bulkDeleteProdBanner"),B=document.getElementById("bulkDeleteDryRunStatus"),M=document.getElementById("bulkDeleteDetails");let H=null;function U(){if(!H||!w)return;const F=String(H.matched_count),g=(C?.value||"").trim()===F&&H.matched_count>0;let b=!0;H.is_prod&&(b=(v?.value||"").trim().toUpperCase()==="PROD"),w.disabled=!(g&&b)}if(C&&C.addEventListener("input",U),v&&v.addEventListener("input",U),u&&d){u.addEventListener("click",async()=>{if(i.lastStatus?.read_only){E("Bulk Delete is disabled in Read-Only mode.","warning");return}const m=i.currentPattern||"*",g=i.currentType&&i.currentType!=="all"?i.currentType:null;H=null,C&&(C.value=""),v&&(v.value=""),w&&(w.disabled=!0),B&&(B.style.display="block"),M&&(M.style.display="none"),d.classList.add("active"),y();try{const b=await fetch("/api/keys/bulk-delete/dry-run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:m,type_filter:g})});if(!b.ok){const P=await b.json().catch(()=>({detail:"Dry run failed"}));throw new Error(P.detail||"Dry run failed")}const S=await b.json();H=S;const T=document.getElementById("bdPatternDisplay"),I=document.getElementById("bdTypeDisplay"),_=document.getElementById("bdCountDisplay"),D=document.getElementById("bdRequiredCountText");T&&(T.textContent=S.pattern),I&&(I.textContent=S.type_filter?S.type_filter.toUpperCase():"All Types"),_&&(_.textContent=S.matched_count.toLocaleString()),D&&(D.textContent=String(S.matched_count)),S.is_prod?(L&&(L.style.display="block"),x&&(x.style.display="block")):(L&&(L.style.display="none"),x&&(x.style.display="none"));const $=document.getElementById("bdPerNodeBreakdown"),z=Object.entries(S.per_node_counts||{});$&&(z.length>1?($.innerHTML="<strong>Per-node breakdown:</strong> "+z.map(([P,N])=>`${p(P)}: ${N.toLocaleString()}`).join(" &bull; "),$.style.display="block"):$.style.display="none");const K=document.getElementById("bdSampleKeysList"),R=document.getElementById("bdSampleKeysSection");K&&R&&(S.sample_keys&&S.sample_keys.length>0?(K.innerHTML=S.sample_keys.map(P=>`<div>${p(P)}</div>`).join(""),R.style.display="block"):R.style.display="none"),B&&(B.style.display="none"),M&&(M.style.display="flex"),y()}catch(b){B&&(B.innerHTML=`
            <div style="color: var(--accent-danger);">
              <i data-lucide="alert-circle" style="width: 20px; height: 20px; margin-bottom: 0.35rem; display: inline-block;"></i>
              <div>Failed to calculate dry-run: ${p(b.message)}</div>
            </div>
          `,y())}});const F=()=>d.classList.remove("active");f&&f.addEventListener("click",F),h&&h.addEventListener("click",F),w&&w.addEventListener("click",async()=>{if(H){w.disabled=!0,w.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlinking...',y();try{const m=await fetch("/api/keys/bulk-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:H.pattern,type_filter:H.type_filter,expected_count:H.matched_count,confirmed_count:parseInt(C.value.trim(),10),confirmed_env:v?v.value.trim():null})});if(!m.ok){const b=await m.json().catch(()=>({detail:"Bulk delete failed"}));throw new Error(b.detail||"Bulk delete failed")}const g=await m.json();E(`Bulk delete complete: ${g.message} (${g.duration_ms}ms)`,"success",4e3),F(),_e&&_e()}catch(m){E(`Bulk delete error: ${m.message}`,"error"),w.disabled=!1,w.innerHTML='<i data-lucide="trash-2" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlink Keys',y()}}})}}async function q(){i.isScanning=!1,i.currentScanEpoch++;const e=i.currentScanEpoch;i.currentCursor=0,i.scanComplete=!1,i.totalScanned=0,i.keysTableRows=[],i.loadedKeysSet.clear(),i.treeInitialized=!1,i.treeExpandedPaths.clear(),i.isMemoryCeilingReached=!1;const t=document.getElementById("memoryLimitBanner");t&&(t.style.display="none");const n=document.getElementById("emptyWorkspaceState"),o=document.getElementById("gridViewerContainer");n&&(n.style.display="none"),o&&(o.style.display="block"),Et(),await bt(e)}function ie(){const e=document.getElementById("btnToggleAutoRefresh"),t=document.getElementById("autoRefreshStatusText"),n=document.getElementById("autoRefreshIntervalSelect");if(!(!e||!t))if(i.isAutoRefreshActive){e.classList.add("active");const o=i.autoRefreshRemainingSec>=60?`${Math.floor(i.autoRefreshRemainingSec/60)}m ${i.autoRefreshRemainingSec%60}s`:`${i.autoRefreshRemainingSec}s`;e.title=`Auto-refresh active (Pattern: "${i.currentPattern||"*"}"). Refreshing in ${o}. Click to pause.`,t.textContent=`Auto: ${o}`,n&&(n.value=String(i.autoRefreshIntervalSec))}else{e.classList.remove("active");const o=i.autoRefreshIntervalSec>=60?`${Math.floor(i.autoRefreshIntervalSec/60)}m`:`${i.autoRefreshIntervalSec}s`;e.title=`Click to watch keys matching pattern "${i.currentPattern||"*"}" every ${o}`,t.textContent="Auto: Off",n&&(n.value=String(i.autoRefreshIntervalSec))}}function ye(){i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,ie()}function gi(){i.isAutoRefreshActive=!0,i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,ie(),i.autoRefreshTimer&&clearInterval(i.autoRefreshTimer),i.autoRefreshTimer=setInterval(async()=>{if(!i.isAutoRefreshActive)return;const e=document.querySelector(".modal-backdrop.active");document.hidden||e||(i.autoRefreshRemainingSec--,i.autoRefreshRemainingSec<=0?(i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,ie(),i.cachedConnections.some(n=>n.is_connected)&&!i.isScanning&&await q()):ie())},1e3)}function fi(){i.isAutoRefreshActive=!1,i.autoRefreshTimer&&(clearInterval(i.autoRefreshTimer),i.autoRefreshTimer=null),i.autoRefreshRemainingSec=i.autoRefreshIntervalSec,ie()}function hi(){i.isAutoRefreshActive?fi():gi()}function We(e){if(e==null)return!0;const t=String(e).trim();if(t===""||t==="0")return!0;if(t.startsWith("{"))try{return Object.values(JSON.parse(t)).every(n=>Number(n)===0)}catch{return!1}return!1}function vi(e){const t=String(e??"").trim();if(t.startsWith("{"))try{const n=Object.values(JSON.parse(t));return`${n.filter(a=>Number(a)!==0).length} of ${n.length} nodes still scanning`}catch{return"more keys available"}return"more keys available"}function bi(){return!!(i.lastStatus&&i.lastStatus.is_cluster)||String(i.currentCursor??"").trim().startsWith("{")}async function bt(e=null){if(i.isScanning||i.scanComplete)return;const t=i.maxLoadedKeysLimit||1e5;if(i.keysTableRows.length>=t){i.isMemoryCeilingReached=!0,de();return}const n=e!==null?e:i.currentScanEpoch;i.isScanning=!0,de();try{const o=`/api/keys?pattern=${encodeURIComponent(i.currentPattern)}&cursor=${encodeURIComponent(String(i.currentCursor??"0"))}&count=${i.scanBatchSize}${i.currentType!=="all"?`&type=${encodeURIComponent(i.currentType)}`:""}`,a=await fetch(o);if(!a.ok)throw new Error("Failed to scan keys");const s=await a.json();if(n!==i.currentScanEpoch)return;i.currentCursor=s.cursor,i.scanComplete=We(i.currentCursor),i.dbTotalKeys=s.total_in_db;const r=Math.max(0,t-i.keysTableRows.length),c=(s.keys||[]).filter(u=>i.loadedKeysSet.has(u.name)?!1:(i.loadedKeysSet.add(u.name),!0)).slice(0,r).map(u=>({key:u.name,type:u.type,ttl_seconds:u.ttl,status:u.ttl===-1?"Persistent":u.ttl===-2?"Expired":`Expires in ${u.ttl}s`}));c.length>0&&i.keysTableRows.push(...c),i.keysTableRows.length>=t&&(i.isMemoryCeilingReached=!0),Et(),i.totalScanned=i.loadedKeysSet.size;const d=document.getElementById("tabBadgeKeys");d&&(d.textContent=i.totalScanned.toLocaleString())}catch(o){console.error("Scan error:",o)}finally{n===i.currentScanEpoch&&(i.isScanning=!1,de())}}const ge=[":","/",".","-","_"],it={auto:[":","/","."],":":[":"],"/":["/"],".":["."],"-":["-"],_:["_"]};function xt(){if(i.lastStatus?.connection_id)return i.lastStatus.connection_id;const e=i.cachedConnections?.find(n=>n.is_selected);if(e)return e.id;const t=i.cachedConnections?.find(n=>n.is_connected);return t?t.id:null}function ve(e){if(!Array.isArray(e)||e.length===0)return"custom";const t=new Set(e);if(t.size===3&&t.has(":")&&t.has("/")&&t.has("."))return"auto";if(t.size===1){if(t.has(":"))return":";if(t.has("/"))return"/";if(t.has("."))return".";if(t.has("-"))return"-";if(t.has("_"))return"_"}return"custom"}function fe(e=null){const t=e||xt();t&&localStorage.setItem(`redis_insight_tree_delimiters_${t}`,JSON.stringify(i.activeTreeDelimiters)),localStorage.setItem("redis_insight_tree_delimiters_global",JSON.stringify(i.activeTreeDelimiters)),localStorage.setItem("redis_insight_tree_delimiter_preset",i.treeDelimiterPreset),localStorage.setItem("redis_insight_custom_delimiters",JSON.stringify(i.customTreeDelimiters))}function xi(e=null){const t=e||xt();let n=null;if(t){const a=localStorage.getItem(`redis_insight_tree_delimiters_${t}`);if(a)try{const s=JSON.parse(a);Array.isArray(s)&&s.length>0&&(n=s)}catch{}}if(!n){const a=localStorage.getItem("redis_insight_tree_delimiters_global");if(a)try{const s=JSON.parse(a);Array.isArray(s)&&s.length>0&&(n=s)}catch{}}Array.isArray(n)&&n.length>0?i.activeTreeDelimiters=n:i.activeTreeDelimiters=[":","/","."];const o=localStorage.getItem("redis_insight_custom_delimiters");if(o)try{const a=JSON.parse(o);Array.isArray(a)&&(i.customTreeDelimiters=a)}catch{}i.treeDelimiterPreset=ve(i.activeTreeDelimiters)}function wi(e,t=i.activeTreeDelimiters){if(!e||!t||t.length===0)return{segments:[],leafName:e||""};const n=[...t].filter(r=>typeof r=="string"&&r.length>0).sort((r,l)=>l.length-r.length);if(n.length===0)return{segments:[],leafName:e};const o=[];let a=0;for(;a<e.length;){let r=-1,l=null;for(const d of n){const u=e.indexOf(d,a);u!==-1&&(r===-1||u<r?(r=u,l=d):u===r&&d.length>(l?l.length:0)&&(l=d))}if(r===-1)break;const c=e.slice(a,r);(c!==""||o.length>0)&&o.push({name:c,delim:l}),a=r+l.length}const s=e.slice(a);return o.length===0?{segments:[],leafName:e}:{segments:o,leafName:s||"(empty)"}}function Ci(e,t=i.activeTreeDelimiters){const n={id:"__root__",name:"Root",fullPrefix:"",delimiter:"",depth:-1,folders:new Map,keys:[],totalKeyCount:0},o=Array.isArray(t)?t:typeof t=="string"&&t!=="auto"?[t]:i.activeTreeDelimiters||[":","/","."];for(const s of e){const r=s.key||"",{segments:l,leafName:c}=wi(r,o);if(l.length===0){n.keys.push({...s,leafName:r});continue}let d=n,u="";for(let f=0;f<l.length;f++){const{name:h,delim:w}=l[f];u+=h+w;const C=u;d.folders.has(h)||d.folders.set(h,{id:C,name:h,fullPrefix:C,delimiter:w,depth:f,folders:new Map,keys:[],totalKeyCount:0}),d=d.folders.get(h)}d.keys.push({...s,leafName:c||"(empty)"})}function a(s){let r=s.keys.length;s.keys.sort((c,d)=>(c.leafName||c.key).localeCompare(d.leafName||d.key));const l=new Map([...s.folders.entries()].sort((c,d)=>c[0].localeCompare(d[0])));s.folders=l;for(const c of s.folders.values())a(c),r+=c.totalKeyCount;s.totalKeyCount=r}return a(n),n}function wt(e,t){if(e.name.toLowerCase().includes(t)||e.fullPrefix.toLowerCase().includes(t))return!0;for(const n of e.keys)if(n.key.toLowerCase().includes(t)||n.leafName&&n.leafName.toLowerCase().includes(t))return!0;for(const n of e.folders.values())if(wt(n,t))return!0;return!1}function ki(e,t="i"){let n="^";for(let o=0;o<e.length;o++){const a=e[o];a==="*"?n+=".*":a==="?"?n+=".":/[.\\+*?[^\]$(){}=!<>|:-]/.test(a)?n+="\\"+a:n+=a}return n+="$",new RegExp(n,t)}function Ct(e){const t=(e||"").trim();if(!t||t==="*")return()=>!0;if(t.startsWith("/")&&t.lastIndexOf("/")>0)try{const o=t.lastIndexOf("/"),a=t.slice(1,o),s=t.slice(o+1)||"i",r=new RegExp(a,s);return l=>r.test(l)}catch{}if(t.includes("*")||t.includes("?"))try{const o=ki(t,"i");return a=>o.test(a)}catch{}if(/[\^$|()\\[\\]{}]/.test(t))try{const o=new RegExp(t,"i");return a=>o.test(a)}catch{}const n=t.toLowerCase();return o=>o.toLowerCase().includes(n)}function kt(){const e=performance.now();let t=i.keysTableRows||[];const n=(i.localFilterQuery||"").trim();if(n&&n!=="*"){const s=Ct(n);t=t.filter(r=>s(r.key))}if(i.currentType&&i.currentType!=="all"){const s=i.currentType.toLowerCase();t=t.filter(r=>(r.type||"").toLowerCase()===s)}const o=(i.currentTtlFilter||"all").toLowerCase();o==="expiring"?t=t.filter(s=>s.ttl_seconds>0):(o==="persistent"||o==="no-ttl")&&(t=t.filter(s=>s.ttl_seconds===-1));const a=(performance.now()-e).toFixed(1);return i.localMatchCount=t.length,i.localMatchDurationMs=a,t}const re=44,ot=20;function Te(e){const t=encodeURIComponent(e.key),o=!!i.lastStatus?.read_only?`<span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
         <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
       </span>`:`<button type="button" class="btn-icon danger btn-delete-key-table" data-key="${t}" title="Delete key">
         <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
       </button>`,a=e.ttl_seconds===-1?`<span class="badge-persistent" style="background: rgba(148, 163, 184, 0.12); color: #94a3b8; border: 1px solid rgba(148, 163, 184, 0.25); padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">
         <span style="font-size: 0.82rem;">∞</span> Persistent
       </span>`:`<span class="badge-expiring" style="background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25); padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
         <span>⏳</span> ${e.ttl_seconds}s
       </span>`;return`
    <tr class="key-row" data-key="${t}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer; height: ${re}px;">
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 380px;">
        <span class="btn-inspect-key" data-key="${t}" title="${p(e.key)}">${p(e.key)}</span>
      </td>
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase;">
        <span class="badge-db">${p(e.type)}</span>
      </td>
      <td style="padding: 0.65rem 1rem; font-size: 0.8rem;">
        ${a}
      </td>
      <td style="padding: 0.65rem 1rem; text-align: right;" onclick="event.stopPropagation()">
        ${o}
      </td>
    </tr>
  `}function Ei(){const e=document.getElementById("gridViewerContainer");if(!e)return;const t=kt();if(t.length===0){if(i.isScanning&&i.keysTableRows.length===0){e.innerHTML=`
        <div class="table-loading-card">
          <div class="spinner-ring"></div>
          <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">Scanning Keyspace...</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">Fetching keys matching "<code>${p(i.currentPattern)}</code>" from Redis</div>
        </div>
      `;return}if(i.keysTableRows.length>0){const h=(i.localFilterQuery||"").trim();if(h&&h!=="*"){e.innerHTML=`
          <div style="padding: 3.5rem 1.5rem; text-align: center; color: var(--text-muted);">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 0.85rem;">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--accent-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </div>
            <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem; margin-bottom: 0.35rem;">
              No loaded keys match "<code>${p(h)}</code>"
            </div>
            <p style="font-size: 0.8rem; color: var(--text-muted); max-width: 480px; margin: 0 auto 1.25rem; line-height: 1.5;">
              Searched across all <strong>${i.keysTableRows.length.toLocaleString()}</strong> keys currently loaded in browser memory.
              The key may exist in the Redis cluster but has not been loaded yet.
            </p>
            <button type="button" class="btn btn-primary" id="btnFallbackRemoteScan" style="padding: 0.45rem 1.15rem; font-size: 0.82rem;">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 5px;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span>Scan Redis Cluster for "${p(h)}"</span>
            </button>
          </div>
        `;const w=document.getElementById("btnFallbackRemoteScan");w&&w.addEventListener("click",()=>{i.searchScope="remote",i.currentPattern=h.includes("*")?h:`${h}*`;const C=document.getElementById("keySearchInput");C&&(C.value=i.currentPattern),q()});return}e.innerHTML=`
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${p(i.currentTtlFilter)}</strong>" or Type filter "<strong>${p(i.currentType)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${i.keysTableRows.length.toLocaleString()} total keys loaded in browser memory)</span>
        </div>
      `;return}const f=!i.scanComplete&&We(i.currentCursor);e.innerHTML=i.scanComplete?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${p(i.currentPattern)}</code>".
      </div>
    `:f?`
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
            ${t.map(Te).join("")}
          </tbody>
        </table>
      </div>
    `;return}const a=n*re,s=Math.min(n,60);e.innerHTML=`
    <div class="virtual-scroll-viewport" id="keysTableViewport" style="overflow-y: auto; height: 100%; width: 100%; padding: 0.5rem; position: relative;">
      <div class="virtual-scroll-spacer" style="height: ${a}px; width: 100%; pointer-events: none;"></div>
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
            ${t.slice(0,s).map(Te).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;const r=document.getElementById("keysTableViewport"),l=document.getElementById("virtualScrollContent"),c=document.getElementById("keysTableBody");let d=0,u=s;r&&l&&c&&r.addEventListener("scroll",()=>{const f=r.scrollTop,h=r.clientHeight||600,w=Math.max(0,Math.floor(f/re)-ot),C=Math.ceil(h/re),v=Math.min(n,w+C+ot*2);if(w!==d||v!==u){d=w,u=v;const x=w*re;l.style.top=`${x}px`,c.innerHTML=t.slice(w,v).map(Te).join("")}},{passive:!0})}function J(){const e=document.getElementById("gridViewerContainer");if(!e)return;const t=kt();if(t.length===0){if(i.keysTableRows.length>0){e.innerHTML=`
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${p(i.currentTtlFilter)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${i.keysTableRows.length.toLocaleString()} total keys scanned so far)</span>
        </div>
      `;return}const m=!i.scanComplete&&We(i.currentCursor);e.innerHTML=i.scanComplete?`
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
    `;return}const n=Ci(t,i.activeTreeDelimiters);if(!i.treeInitialized&&i.treeExpandedPaths.size===0){for(const m of n.folders.values())i.treeExpandedPaths.add(m.id);i.treeInitialized=!0}function o(m){let g=m.folders.size;for(const b of m.folders.values())g+=o(b);return g}const a=o(n),s=!!i.currentTreeFilterQuery.trim(),r=i.currentTreeFilterQuery.trim().toLowerCase();function l(m,g){const b=encodeURIComponent(m.key);return`
      <div class="tree-node tree-leaf key-row" data-key="${b}" style="padding-left: ${g*20+26}px;">
        <div class="tree-node-content">
          <div class="tree-key-icon">
            <i data-lucide="key" style="width: 13px; height: 13px;"></i>
          </div>
          <span class="tree-key-name btn-inspect-key" data-key="${b}" title="${p(m.key)}">
            ${p(m.leafName||m.key)}
          </span>
          <span class="badge-db" style="margin-left: 0.35rem; font-size: 0.68rem; text-transform: uppercase;">${p(m.type)}</span>
          ${m.ttl_seconds===-1?'<span class="badge-persistent" style="margin-left: 0.35rem; font-size: 0.65rem; padding: 0.08rem 0.35rem; border-radius: 4px; background: rgba(148, 163, 184, 0.12); color: #94a3b8; border: 1px solid rgba(148, 163, 184, 0.25); font-weight: 500;">∞ Persistent</span>':`<span class="tree-key-ttl" style="margin-left: 0.35rem; background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 4px; padding: 0.08rem 0.35rem; font-size: 0.65rem; font-weight: 600;" title="Expires in ${m.ttl_seconds}s">⏳ ${m.ttl_seconds}s</span>`}
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
    `}function c(m,g){if(s&&!wt(m,r))return"";const b=s?!0:i.treeExpandedPaths.has(m.id),S=encodeURIComponent(m.id);let T="";if(b){for(const I of m.folders.values())T+=c(I,g+1);for(const I of m.keys)s&&!I.key.toLowerCase().includes(r)&&!(I.leafName&&I.leafName.toLowerCase().includes(r))||(T+=l(I,g+1))}return`
      <div class="tree-folder-group" data-folder-id="${S}">
        <div class="tree-node tree-folder" data-folder-id="${S}" style="padding-left: ${g*20+8}px;">
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
          ${T}
        </div>
      </div>
    `}let d="";if(n.keys.length>0){const m=s?n.keys.filter(g=>g.key.toLowerCase().includes(r)||g.leafName&&g.leafName.toLowerCase().includes(r)):n.keys;m.length>0&&(d=`
        <div class="tree-root-keys-section">
          <div class="tree-root-keys-header" style="padding-left: 10px;">
            <span class="tree-root-keys-title">ROOT KEYS (NO DELIMITER)</span>
            <span class="tree-count-badge">${m.length.toLocaleString()} ${m.length===1?"key":"keys"}</span>
          </div>
          <div class="tree-root-keys-list">
            ${m.map(g=>l(g,0)).join("")}
          </div>
        </div>
      `)}const f=[...ge,...(i.customTreeDelimiters||[]).filter(m=>!ge.includes(m))].map(m=>{const g=(i.activeTreeDelimiters||[]).includes(m),b=!ge.includes(m);return`
      <span class="tree-delim-chip ${g?"active":""} ${b?"custom":""}" data-delim="${p(m)}" title="${g?"Click to disable":"Click to enable"} delimiter '${p(m)}'">
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
              ${f}
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
          <div class="tree-summary-pill" id="treeSummaryPill" title="${a.toLocaleString()} total namespaces parsed">
            ${a.toLocaleString()} ${a===1?"Namespace":"Namespaces"}
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
        ${[...n.folders.values()].map(m=>c(m,0)).join("")}
        ${d}
      </div>
    </div>
  `,y(),e.querySelectorAll(".tree-folder").forEach(m=>{m.addEventListener("click",g=>{if(g.target.closest(".tree-filter-prefix-btn"))return;const b=decodeURIComponent(m.getAttribute("data-folder-id"));i.treeExpandedPaths.has(b)?i.treeExpandedPaths.delete(b):i.treeExpandedPaths.add(b),J()})}),e.querySelectorAll(".tree-filter-prefix-btn").forEach(m=>{m.addEventListener("click",g=>{g.stopPropagation();const b=m.getAttribute("data-prefix"),S=document.getElementById("keySearchInput");S&&b&&(S.value=b+"*",i.currentPattern=b+"*",q())})});const h=document.getElementById("treeDelimiterSelect");h&&h.addEventListener("change",m=>{const g=m.target.value;g==="custom"?i.treeDelimiterPreset="custom":it[g]&&(i.activeTreeDelimiters=[...it[g]],i.treeDelimiterPreset=g),fe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J()}),e.querySelectorAll(".tree-delim-chip").forEach(m=>{m.addEventListener("click",g=>{if(g.target.closest(".tree-delim-chip-remove"))return;const b=m.getAttribute("data-delim");b&&(i.activeTreeDelimiters.includes(b)?i.activeTreeDelimiters=i.activeTreeDelimiters.filter(S=>S!==b):i.activeTreeDelimiters.push(b),i.treeDelimiterPreset=ve(i.activeTreeDelimiters),fe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J())})}),e.querySelectorAll(".tree-delim-chip-remove").forEach(m=>{m.addEventListener("click",g=>{g.stopPropagation();const b=m.getAttribute("data-remove-delim");b&&(i.customTreeDelimiters=(i.customTreeDelimiters||[]).filter(S=>S!==b),i.activeTreeDelimiters=(i.activeTreeDelimiters||[]).filter(S=>S!==b),i.treeDelimiterPreset=ve(i.activeTreeDelimiters),fe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J())})});const w=document.getElementById("btnAddDelimToggle"),C=document.getElementById("treeCustomDelimPopover"),v=document.getElementById("customDelimInput"),x=document.getElementById("btnConfirmAddDelim"),L=document.getElementById("btnCancelAddDelim");w&&C&&w.addEventListener("click",m=>{m.stopPropagation();const g=C.style.display!=="none";C.style.display=g?"none":"flex",!g&&v&&(v.value="",v.focus())});function B(){if(!v)return;const m=v.value.trim();m&&(!i.customTreeDelimiters.includes(m)&&!ge.includes(m)&&i.customTreeDelimiters.push(m),i.activeTreeDelimiters.includes(m)||i.activeTreeDelimiters.push(m),i.treeDelimiterPreset=ve(i.activeTreeDelimiters),fe(),i.treeExpandedPaths.clear(),i.treeInitialized=!1,J())}x&&x.addEventListener("click",m=>{m.stopPropagation(),B()}),v&&v.addEventListener("keydown",m=>{m.key==="Enter"?(m.preventDefault(),B()):m.key==="Escape"&&C&&(C.style.display="none")}),L&&L.addEventListener("click",m=>{m.stopPropagation(),C&&(C.style.display="none")});const M=document.getElementById("btnExpandAllTree");M&&M.addEventListener("click",()=>{function m(g){for(const b of g.folders.values())i.treeExpandedPaths.add(b.id),m(b)}m(n),J()});const H=document.getElementById("btnCollapseAllTree");H&&H.addEventListener("click",()=>{i.treeExpandedPaths.clear(),J()});const U=document.getElementById("treeFilterInput");U&&U.addEventListener("input",m=>{i.currentTreeFilterQuery=m.target.value,J();const g=document.getElementById("treeFilterInput");g&&(g.focus(),g.setSelectionRange(g.value.length,g.value.length))});const F=document.getElementById("btnClearTreeFilter");F&&F.addEventListener("click",()=>{i.currentTreeFilterQuery="",J()})}function Q(){i.currentViewMode==="tree"?J():Ei()}function Et(){Q()}function Si(){const e=document.getElementById("scanChunkLabel");e&&(e.textContent=`Safe SCAN (Chunk ${i.scanBatchSize.toLocaleString()})`)}function Z(){const e=document.getElementById("scopeBtnLocal"),t=document.getElementById("scopeBtnRemote"),n=document.getElementById("keySearchInput"),o=document.getElementById("searchMatchCountBadge"),a=document.getElementById("btnClearSearchQuery"),s=i.searchScope==="local";if(e&&e.classList.toggle("active",s),t&&t.classList.toggle("active",!s),n&&(s?(n.placeholder="Filter loaded keys by regex, glob (*), or text (instant)...",n.title="Instant in-memory filter across loaded keys (~5ms). Press Enter or click Cluster SCAN to query Redis."):(n.placeholder="Scan Redis cluster by pattern (e.g. *, users:*, order:*) - Press Enter",n.title="Query Redis Cluster directly with pattern. Clears local cache and scans Redis.")),a){const r=n?n.value.trim():"";a.style.display=r&&r!=="*"?"inline-flex":"none"}if(o){const r=i.keysTableRows.length;if(r>0&&s){const l=(i.localFilterQuery||"").trim();l&&l!=="*"?(o.textContent=`${i.localMatchCount.toLocaleString()} / ${r.toLocaleString()} (${i.localMatchDurationMs}ms)`,o.title=`Filtered ${i.localMatchCount.toLocaleString()} of ${r.toLocaleString()} loaded keys in ${i.localMatchDurationMs}ms`):(o.textContent=`${r.toLocaleString()} loaded`,o.title=`${r.toLocaleString()} keys loaded in browser memory`),o.style.display="inline-flex"}else o.style.display="none"}}function Li(){const e=document.getElementById("memoryLimitBanner");if(!e)return;const t=i.keysTableRows.length,n=i.maxLoadedKeysLimit||1e5;if(t>=n){i.isMemoryCeilingReached=!0;const o=n+1e5;e.innerHTML=`
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
    `,e.style.display="flex";const a=document.getElementById("btnRaiseMemoryCeiling");a&&a.addEventListener("click",()=>{i.maxLoadedKeysLimit=o,i.isMemoryCeilingReached=!1,e.style.display="none",de()})}else i.isMemoryCeilingReached=!1,e.style.display="none"}function de(){const e=document.getElementById("scanStatusText"),t=document.getElementById("btnScanNext"),n=document.getElementById("keysLoadingShimmer"),o=!!i.isScanning,a=i.scanComplete,s=i.isMemoryCeilingReached||i.keysTableRows.length>=(i.maxLoadedKeysLimit||1e5);n&&n.classList.toggle("active",o),e&&(e.innerHTML=`
      ${o?'<span style="color: var(--accent-primary); display: inline-flex; align-items: center; gap: 5px; margin-right: 6px;"><span class="spin" style="display: inline-block;">↻</span> Scanning chunk...</span>':""}
      Loaded <strong>${i.totalScanned.toLocaleString()}</strong> keys
      ${s?'<span style="color: #fbbf24; margin-left: 6px; font-weight: 500;">(Ceiling Reached)</span>':a?'<span style="color: var(--text-muted); margin-left: 6px; font-weight: 400;">(All Keys Loaded)</span>':`<span style="color: var(--text-muted);">(${p(vi(i.currentCursor))})</span>`}
      | ${bi()?"Cluster Total":"DB Total"}: <strong>${Number(i.dbTotalKeys||0).toLocaleString()}</strong>
    `),t&&(s?(t.disabled=!0,t.style.display="inline-flex",t.style.opacity="0.75",t.innerHTML=`<i data-lucide="shield-alert" style="width: 13px; height: 13px; color: #fbbf24;"></i> Memory Ceiling (${i.maxLoadedKeysLimit.toLocaleString()})`):(t.disabled=o||a,t.style.opacity="",t.style.display=a?"none":"inline-flex",t.innerHTML=o?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More'),y()),Li(),Z()}function Ti(){const e=document.getElementById("gridViewerContainer");e&&e.addEventListener("click",v=>{const x=v.target.closest(".btn-delete-key-table");if(x){v.stopPropagation();const M=decodeURIComponent(x.getAttribute("data-key"));Ge(M,()=>{q()});return}const L=v.target.closest(".btn-inspect-key");if(L){v.stopPropagation();const M=decodeURIComponent(L.getAttribute("data-key"));oe(M);return}const B=v.target.closest(".key-row");if(B){const M=decodeURIComponent(B.getAttribute("data-key"));oe(M);return}});const t=document.getElementById("keySearchInput");let n=null;t&&(t.addEventListener("input",()=>{const v=t.value,x=document.getElementById("btnClearSearchQuery");x&&(x.style.display=v.trim()&&v.trim()!=="*"?"inline-flex":"none"),i.searchScope==="local"?(i.localFilterQuery=v.trim(),Q(),Z()):(clearTimeout(n),n=setTimeout(()=>{i.currentPattern=v.trim()||"*"},300))}),t.addEventListener("keydown",v=>{if(v.key==="Enter"){clearTimeout(n);const x=t.value.trim()||"*";i.localFilterQuery=x;const L=Ct(x),B=x==="*"?(i.keysTableRows||[]).length:(i.keysTableRows||[]).filter(M=>L(M.key)).length;i.searchScope==="remote"||v.shiftKey||i.keysTableRows.length===0||i.searchScope==="local"&&B===0?(i.currentPattern=x,ye(),q()):(Q(),Z())}}));const o=document.getElementById("scopeBtnLocal"),a=document.getElementById("scopeBtnRemote");o&&o.addEventListener("click",()=>{i.searchScope="local";const v=document.getElementById("keySearchInput");v&&(i.localFilterQuery=v.value.trim()),Q(),Z()}),a&&a.addEventListener("click",()=>{i.searchScope="remote";const v=document.getElementById("keySearchInput");v&&(i.currentPattern=v.value.trim()||"*"),Z()});const s=document.getElementById("btnClearSearchQuery");s&&s.addEventListener("click",()=>{t&&(t.value="*",i.localFilterQuery="*",i.searchScope==="remote"&&(i.currentPattern="*"),Q(),Z(),t.focus())});const r=document.getElementById("typeFilterGroup");r&&r.addEventListener("click",v=>{const x=v.target.closest(".type-tab");x&&x.dataset.type&&(r.querySelectorAll(".type-tab").forEach(L=>L.classList.remove("active")),x.classList.add("active"),i.currentType=x.dataset.type,i.searchScope==="local"&&i.keysTableRows.length>0?(Q(),Z()):(ye(),q()))});const l=document.getElementById("ttlFilterSelect");l&&l.addEventListener("change",v=>{i.currentTtlFilter=v.target.value,Q()});const c=document.getElementById("btnScanNext");c&&c.addEventListener("click",()=>bt());const d=document.getElementById("btnResetScan");d&&d.addEventListener("click",()=>{ye(),q()});const u=document.getElementById("scanBatchSizeSelect");u&&u.addEventListener("change",v=>{i.scanBatchSize=parseInt(v.target.value,10)||50,Si()});const f=document.getElementById("btnViewTable"),h=document.getElementById("btnViewTree");f&&f.addEventListener("click",()=>{i.currentViewMode!=="table"&&(i.currentViewMode="table",localStorage.setItem("redis_insight_view_mode","table"),f.classList.add("active"),h&&h.classList.remove("active"),Q())}),h&&h.addEventListener("click",()=>{i.currentViewMode!=="tree"&&(i.currentViewMode="tree",localStorage.setItem("redis_insight_view_mode","tree"),h.classList.add("active"),f&&f.classList.remove("active"),Q())});const w=document.getElementById("btnToggleAutoRefresh");w&&w.addEventListener("click",()=>{hi()});const C=document.getElementById("autoRefreshIntervalSelect");C&&C.addEventListener("change",v=>{const x=parseInt(v.target.value,10);!isNaN(x)&&x>=5&&(i.autoRefreshIntervalSec=x,localStorage.setItem("redis_insight_auto_refresh_sec",String(x)),ye())}),ie()}let Re=null,Ae=null,De=null,V=null;function Ii(e,t,n){Re=e,Ae=t,De=n}function $i(e){if(V){try{V.abort()}catch{}V=null}i.isMemoryProfilingRunning=!1,i.currentMemoryOverview=null,i.currentMemoryAnalysis=null,i.memoryLoadedForConnId=null,Pe(e),pe({notice:"Cluster switched. Diagnostic caches cleared. Click below to profile the active cluster."})}function Pe(e){const t=document.getElementById("memoryOverviewContainer");if(!t)return;const n=e||i.cachedConnections.find(c=>String(c.id)===String(i.selectedConnectionId)||c.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",a=n?n.host:i.lastStatus?.host||"127.0.0.1",s=n?n.port:i.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div class="mem-cluster-prompt-card" style="padding: 1.5rem; text-align: center; background: rgba(15,23,42,0.6); border: 1px dashed var(--border-subtle); border-radius: 8px;">
      <div style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; flex-wrap: wrap; justify-content: center;">
        <i data-lucide="server" style="width: 16px; height: 16px; color: #a78bfa;"></i>
        <strong style="color: var(--text-primary); font-size: 0.95rem;">${p(o)}</strong>
        <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">(${p(a)}:${s})</span>
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
  `,y();const l=document.getElementById("btnLoadMemoryOverviewExplicit");l&&l.addEventListener("click",()=>{Qe()})}async function Je(){O("memory"),i.memoryLoadedForConnId!==i.selectedConnectionId?Pe():i.currentMemoryOverview?St(i.currentMemoryOverview):Pe(),i.currentMemoryAnalysis&&i.currentMemoryAnalysis._target_conn_id===i.selectedConnectionId?Ye(i.currentMemoryAnalysis):pe()}function Bi(){O("keys")}async function Qe(){const e=document.getElementById("memoryOverviewContainer");if(!e)return;const t=i.selectedConnectionId;e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,y();try{const n=await fetch("/api/memory/overview");if(!n.ok)throw new Error("Failed to fetch memory overview");const o=await n.json();if(i.selectedConnectionId!==t)return;i.currentMemoryOverview=o,i.memoryLoadedForConnId=t,St(i.currentMemoryOverview)}catch(n){if(i.selectedConnectionId!==t)return;e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${p(n.message)}</p>
        <button type="button" class="btn btn-secondary btn-sm" id="btnRetryMemOverview" style="margin-top: 0.5rem;">Retry</button>
      </div>
    `,y();const o=document.getElementById("btnRetryMemOverview");o&&(o.onclick=()=>Qe())}}function St(e){const t=document.getElementById("memoryOverviewContainer");if(!t||!e)return;let n="mem-status-healthy",o="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(n="mem-status-critical",o="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(n="mem-status-warning",o=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),t.innerHTML=`
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
  `,y()}function pe(e={}){const t=document.getElementById("memoryProfilingContainer");if(!t)return;const n=i.cachedConnections.find(d=>String(d.id)===String(i.selectedConnectionId)||d.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",a=n?n.host:i.lastStatus?.host||"127.0.0.1",s=n?n.port:i.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase(),l=e?.notice;t.innerHTML=`
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
          <span style="color: var(--text-muted); font-family: var(--font-mono);">(${p(a)}:${s})</span>
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
  `,y();const c=document.getElementById("btnStartProfilingAction");c&&c.addEventListener("click",()=>{const d=document.getElementById("memScanModeSelect")?.value||"sample",u=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,f=document.getElementById("memSamplePatternInput").value||"*";if(d==="full"){const h=document.getElementById("deepScanSafetyModal");if(h){h.classList.add("active"),y();const w=()=>h.classList.remove("active"),C=document.getElementById("btnCancelDeepScan"),v=document.getElementById("btnCloseDeepScanModal"),x=document.getElementById("btnConfirmDeepScan");C&&(C.onclick=w),v&&(v.onclick=w),x&&(x.onclick=()=>{w(),at(u,f,"full")});return}}at(u,f,d)})}async function at(e=500,t="*",n="sample"){const o=document.getElementById("memoryProfilingContainer");if(!o)return;if(V)try{V.abort()}catch{}V=new AbortController;const a=V.signal,s=i.selectedConnectionId;i.isMemoryProfilingRunning=!0;const r=n==="full";o.innerHTML=`
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
  `,y();const l=document.getElementById("btnCancelMemoryProfiling");l&&(l.onclick=()=>{if(V)try{V.abort()}catch{}});try{const c=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:t,scan_mode:n}),signal:a});if(!c.ok)throw new Error("Failed to complete memory profiling");const d=await c.json();if(i.selectedConnectionId!==s){console.warn("Discarding memory profiling response for switched cluster:",s);return}d._target_conn_id=s,d._analyzed_at=new Date().toISOString(),i.currentMemoryAnalysis=d,i.isMemoryProfilingRunning=!1,Ye(i.currentMemoryAnalysis)}catch(c){if(i.isMemoryProfilingRunning=!1,c.name==="AbortError"){pe({notice:"Memory scan was cancelled."});return}if(i.selectedConnectionId===s){o.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Memory Profiling Failed</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(c.message)}</p>
          <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Back to Profiling Safeguards</button>
        </div>
      `,y();const d=document.getElementById("btnRetryProfiling");d&&(d.onclick=()=>pe())}}finally{V&&V.signal===a&&(V=null)}}function Ye(e){const t=document.getElementById("memoryProfilingContainer");if(!t||!e)return;const n=i.cachedConnections.find(l=>String(l.id)===String(e._target_conn_id||i.selectedConnectionId)||l.is_selected)||null;n?n.name:i.lastStatus?.connection_name,n?n.host:i.lastStatus?.host,n?n.port:i.lastStatus?.port,n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();const o=e._analyzed_at?new Date(e._analyzed_at).toLocaleTimeString():new Date().toLocaleTimeString(),a={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};t.innerHTML=`
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
        ${e.types_breakdown.map(l=>{const c=a[l.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-stacked-segment" style="width: ${l.percentage}%; background: ${c};" title="${l.type.toUpperCase()}: ${l.percentage}% (${l.total_human})"></div>
          `}).join("")}
      </div>

      <!-- Type Cards Grid -->
      <div class="mem-type-cards-grid">
        ${e.types_breakdown.map(l=>{const c=a[l.type.toLowerCase()]||"#94a3b8";return`
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
        ${st(e.top_bigkeys)}
      </div>
    </div>
  `,y();const s=document.getElementById("btnReRunProfiling");s&&s.addEventListener("click",pe);const r=document.getElementById("bigkeysSearchInput");r&&r.addEventListener("input",()=>{const l=r.value.trim().toLowerCase(),c=l?e.top_bigkeys.filter(u=>u.key.toLowerCase().includes(l)||u.type.toLowerCase().includes(l)):e.top_bigkeys,d=document.getElementById("bigkeysTableContainer");d&&(d.innerHTML=st(c),y(),lt())}),lt()}function st(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const t=e[0]?e[0].memory_bytes:1;return`
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
        ${e.map((n,o)=>{let a="rank-normal";o===0?a="rank-gold":o===1?a="rank-silver":o===2&&(a="rank-bronze");const s=t>0?Math.max(5,Math.round(n.memory_bytes/t*100)):10;let r="No TTL (Persistent)",l="var(--text-muted)";return n.ttl>0&&(r=`${n.ttl.toLocaleString()}s`,l="var(--accent-warning)"),`
            <tr>
              <td>
                <span class="rank-badge ${a}">#${o+1}</span>
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
                  <div style="width: ${s}%; height: 100%; background: #38bdf8; border-radius: 9999px;"></div>
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
  `}function lt(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&Re&&Re(t)})}),document.querySelectorAll(".btn-copy-bigkey").forEach(e=>{e.addEventListener("click",async t=>{t.stopPropagation();const n=e.getAttribute("data-key");n&&await ne(n)&&(e.classList.add("copied"),e.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px;"></i>',y(),setTimeout(()=>{e.classList.remove("copied"),e.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',y()},1500))})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&Ae&&Ae(t,async()=>{i.currentMemoryAnalysis&&(i.currentMemoryAnalysis.top_bigkeys=i.currentMemoryAnalysis.top_bigkeys.filter(n=>n.key!==t),Ye(i.currentMemoryAnalysis)),De&&await De()})})}),document.querySelectorAll(".btn-inspect-leak").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-namespace");if(t){i.currentPattern=t,i.currentTtlFilter="persistent";const n=document.getElementById("keySearchInput");n&&(n.value=t);const o=document.getElementById("ttlFilterSelect");o&&(o.value="persistent"),O("keys"),q()}})})}function Mi(){const e=document.getElementById("btnCloseMemoryModal");e&&e.addEventListener("click",Bi);const t=document.getElementById("btnOpenMemoryModal");t&&t.addEventListener("click",Je);const n=document.getElementById("btnRefreshMemoryModal");n&&n.addEventListener("click",Qe)}function _i(e){i.allSlowlogEntries=[],i.slowlogLoadedForConnId=null;const t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),o=document.getElementById("slowlogFooterStats"),a=document.getElementById("slowlogNodeFilterContainer");t&&(t.textContent="0"),n&&(n.textContent="-"),o&&(o.textContent=""),a&&(a.innerHTML=""),Lt(e)}function Lt(e){const t=document.getElementById("slowlogTableContainer");if(!t)return;const n=e||i.cachedConnections.find(c=>String(c.id)===String(i.selectedConnectionId)||c.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",a=n?n.host:i.lastStatus?.host||"127.0.0.1",s=n?n.port:i.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 1rem;">
        <i data-lucide="clock" style="width: 24px; height: 24px; color: #38bdf8;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Slowlog for ${p(o)} (${p(a)}:${s})
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
  `,y();const l=document.getElementById("btnFetchSlowlogExplicit");l&&(l.onclick=()=>xe())}async function Tt(){O("slowlog"),i.currentSlowlogMinDuration=0,i.currentSlowlogSearch="",i.currentSlowlogNode="all";const e=document.getElementById("btnClearSlowlogModal");e&&(e.style.display=i.lastStatus?.read_only?"none":""),document.querySelectorAll(".slowlog-filter-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-min-duration")==="0")});const t=document.getElementById("slowlogSearchInput");t&&(t.value=""),i.slowlogLoadedForConnId!==i.selectedConnectionId?Lt():me()}function Ri(){O("keys")}async function xe(){const e=document.getElementById("slowlogTableContainer"),t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),o=document.getElementById("slowlogFooterStats"),a=i.selectedConnectionId;e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,y());try{const s=await fetch("/api/slowlog?limit=250");if(!s.ok)throw new Error("Failed to fetch slowlog");const r=await s.json();if(i.selectedConnectionId!==a)return;if(i.allSlowlogEntries=r.entries||[],i.slowlogLoadedForConnId=a,t&&(t.textContent=i.allSlowlogEntries.length),n&&r.slower_than_us!==null&&r.slower_than_us!==void 0){const l=(r.slower_than_us/1e3).toFixed(1);n.textContent=`Threshold: > ${l}ms (${r.slower_than_us} µs)`}o&&(o.textContent=`Total buffer: ${r.total_len||i.allSlowlogEntries.length} entries | Max buffer: ${r.max_len||"N/A"}`),Ai(i.allSlowlogEntries),me()}catch(s){if(i.selectedConnectionId!==a)return;if(e){e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(s.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetrySlowlog" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,y();const r=document.getElementById("btnRetrySlowlog");r&&(r.onclick=()=>xe())}}}function Ai(e){const t=document.getElementById("slowlogNodeFilterContainer");if(!t)return;const n=Array.from(new Set(e.map(a=>a.node).filter(Boolean)));if(n.length<=1){t.innerHTML="";return}t.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${n.length})</option>
      ${n.map(a=>`<option value="${p(a)}" ${i.currentSlowlogNode===a?"selected":""}>${p(a)}</option>`).join("")}
    </select>
  `;const o=document.getElementById("slowlogNodeSelect");o&&o.addEventListener("change",()=>{i.currentSlowlogNode=o.value,me()})}function me(){let e=i.allSlowlogEntries;if(i.currentSlowlogMinDuration>0&&(e=e.filter(t=>t.duration_ms>=i.currentSlowlogMinDuration)),i.currentSlowlogNode&&i.currentSlowlogNode!=="all"&&(e=e.filter(t=>t.node===i.currentSlowlogNode)),i.currentSlowlogSearch){const t=i.currentSlowlogSearch.toLowerCase();e=e.filter(n=>{const o=(n.command||[]).join(" ").toLowerCase(),a=(n.client_ip||"").toLowerCase(),s=(n.node||"").toLowerCase();return o.includes(t)||a.includes(t)||s.includes(t)||String(n.id).includes(t)})}Di(e)}function Di(e){const t=document.getElementById("slowlogTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <i data-lucide="check-circle-2" style="width: 28px; height: 28px; color: #4ade80;"></i>
        </div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.35rem;">No Slow Queries Recorded</h4>
        <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.5;">
          ${i.allSlowlogEntries.length===0?"Redis latency is healthy! All commands executed within the threshold.":"No slowlog entries matched the active filters."}
        </p>
      </div>
    `,y();return}t.innerHTML=`
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
        ${e.map(n=>{let o="badge-duration-fast";n.duration_ms>=50?o="badge-duration-critical":n.duration_ms>=10&&(o="badge-duration-warning");const a=n.command&&n.command.length>0?n.command.join(" "):"(empty)";return`
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
                  <span class="slowlog-cmd-code" title="${p(a)}">${p(a)}</span>
                  <button type="button" class="btn-copy-inline btn-copy-slowlog-cmd" data-cmd="${p(a)}" title="Copy full command">
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
  `,y(),document.querySelectorAll(".btn-copy-slowlog-cmd").forEach(n=>{n.addEventListener("click",async o=>{o.stopPropagation();const a=n.getAttribute("data-cmd");a&&await ne(a)&&(n.classList.add("copied"),n.innerHTML='<i data-lucide="check" style="width: 12px; height: 12px;"></i>',y(),setTimeout(()=>{n.classList.remove("copied"),n.innerHTML='<i data-lucide="copy" style="width: 12px; height: 12px;"></i>',y()},1500))})})}}async function Pi(){if(i.lastStatus?.read_only){E("Slowlog reset is disabled in Read-Only mode.","warning");return}if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");E("Slowlog buffer reset successfully","success"),await xe()}catch(e){E("Error resetting slowlog: "+e.message,"error")}}function zi(){const e=document.getElementById("btnCloseSlowlogModal");e&&e.addEventListener("click",Ri);const t=document.getElementById("btnOpenSlowlog");t&&t.addEventListener("click",Tt);const n=document.getElementById("btnRefreshSlowlogModal");n&&n.addEventListener("click",xe);const o=document.getElementById("btnClearSlowlogModal");o&&o.addEventListener("click",Pi);const a=document.getElementById("slowlogSearchInput");a&&a.addEventListener("input",()=>{i.currentSlowlogSearch=a.value.trim(),me()}),document.querySelectorAll(".slowlog-filter-btn").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(r=>r.classList.remove("active")),s.classList.add("active"),i.currentSlowlogMinDuration=parseInt(s.getAttribute("data-min-duration")||"0",10),me()})})}let ze=null;function Ni(e){ze=e}async function Fi(){const e=document.getElementById("keyspaceNodesModal");e&&(e.classList.add("active"),$t(i.lastStatus),await It())}function rt(){const e=document.getElementById("keyspaceNodesModal");e&&e.classList.remove("active")}async function It(){try{const e=await fetch("/api/status");if(!e.ok)throw new Error("Failed to load node stats");i.lastStatus=await e.json(),$t(i.lastStatus)}catch(e){const t=document.getElementById("keyspaceNodesContainer");t&&(t.innerHTML=`<div style="padding: 2rem; text-align: center; color: var(--accent-danger);">${p(e.message)}</div>`)}}function $t(e){const t=document.getElementById("keyspaceNodesContainer"),n=document.getElementById("keyspaceTotalBadge");if(!t||!e)return;const o=e.node_stats||[],a=o.filter(u=>u.role==="master"),s=a.reduce((u,f)=>u+(f.keys||0),0);if(n&&(n.textContent=`${s.toLocaleString()} keys`),a.length===0){t.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Per-node breakdown is only available for cluster connections.</div>';return}const r=u=>u==null?"—":Number(u).toLocaleString(),l=(u,f="left")=>`<th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: ${f};">${u}</th>`,c=(u,f="")=>`<td style="padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; ${f}">${u}</td>`,d=a.map(u=>{const f=s>0&&u.keys!==null?(u.keys/s*100).toFixed(1):"0.0",h=o.filter(v=>v.role==="replica"&&v.master===u.node),w=`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        ${c(`<span class="role-badge-master">MASTER</span> <span style="color: var(--text-primary); font-weight: 600; margin-left: 6px;">${p(u.node)}</span>`)}
        ${c(u.error?`<span style="color: var(--accent-danger);" title="${p(u.error)}">unreachable</span>`:r(u.keys),"text-align: right; color: var(--text-primary); font-weight: 600;")}
        ${c(`${f}%`,"text-align: right; color: var(--text-secondary);")}
        ${c(p(u.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
        ${c(r(u.connected_clients),"text-align: right; color: #38bdf8;")}
      </tr>`,C=h.map(v=>{const x=v.keys!==null&&u.keys!==null?v.keys-u.keys:null,L=x===null?"":x===0?'<span style="color: var(--accent-success); margin-left: 6px;">in sync</span>':`<span style="color: var(--accent-warning); margin-left: 6px;" title="Replica key count differs from its master (replication lag or expiring keys)">${x>0?"+":""}${x.toLocaleString()}</span>`;return`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(0,0,0,0.12);">
        ${c(`<span style="color: var(--text-muted); margin-left: 0.75rem;">↳</span> <span class="role-badge-replica">REPLICA</span> <span style="color: var(--text-secondary); margin-left: 6px;">${p(v.node)}</span>`)}
        ${c(v.error?`<span style="color: var(--accent-danger);" title="${p(v.error)}">unreachable</span>`:`${r(v.keys)}${L}`,"text-align: right; color: var(--text-secondary);")}
        ${c("","")}
        ${c(p(v.used_memory_human||"—"),"text-align: right; color: var(--text-muted);")}
        ${c(r(v.connected_clients),"text-align: right; color: var(--text-muted);")}
      </tr>`}).join("");return w+C}).join("");t.innerHTML=`
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${l("NODE")}${l("KEYS","right")}${l("SHARE","right")}${l("MEMORY","right")}${l("CLIENTS","right")}</tr>
      </thead>
      <tbody>${d}</tbody>
      <tfoot>
        <tr>
          ${c("Cluster total (masters)","color: var(--text-muted); font-family: inherit;")}
          ${c(s.toLocaleString(),"text-align: right; color: var(--accent-primary); font-weight: 700;")}
          ${c("100%","text-align: right; color: var(--text-muted);")}
          ${c(p(e.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
          ${c("","")}
        </tr>
      </tfoot>
    </table>
  `,y()}function Hi(e){i.currentTopologyData=null,i.topologyLoadedForConnId=null;const t=document.getElementById("topologyStatsGrid"),n=document.getElementById("topologyNodesCountBadge"),o=document.getElementById("tabBadgeTopology");t&&(t.innerHTML=""),n&&(n.textContent="-"),o&&(o.textContent="-"),Bt(e)}function Bt(e){const t=document.getElementById("topologyTableContainer"),n=document.getElementById("topologyEnvBadge");if(!t)return;const o=e||i.cachedConnections.find(u=>String(u.id)===String(i.selectedConnectionId)||u.is_selected)||null,a=o?o.name:i.lastStatus?.connection_name||"Active Cluster",s=o?o.host:i.lastStatus?.host||"127.0.0.1",r=o?o.port:i.lastStatus?.port||6379,l=o?(o.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();n&&(n.textContent=l,n.className=`badge-env badge-env-${l.toLowerCase()}`);const c=document.getElementById("topologySearchInput");c&&(c.disabled=!0,c.placeholder="Load cluster topology to filter nodes..."),t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); margin-bottom: 1rem;">
        <i data-lucide="network" style="width: 24px; height: 24px; color: #c084fc;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Topology Map for ${p(a)} (${p(s)}:${r})
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
  `,y();const d=document.getElementById("btnFetchTopologyExplicit");d&&(d.onclick=()=>we())}async function ae(e=null,t=!1){if(O("topology"),e&&ze){const n=document.querySelector(`.conn-card[data-id="${e}"]`);n&&!n.classList.contains("active")&&await ze(e)}i.topologyLoadedForConnId!==i.selectedConnectionId||!i.currentTopologyData?t?we():Bt():(Mt(i.currentTopologyData),be())}function Oi(){O("keys")}async function we(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),t=document.getElementById("topologyNodesCountBadge"),n=document.getElementById("tabBadgeTopology"),o=document.getElementById("topologyEnvBadge"),a=i.selectedConnectionId,s=i.cachedConnections.find(r=>r.id===a||r.is_selected);if(s&&o){const r=(s.env||"LOCAL").toUpperCase();o.textContent=r,o.className=`badge-env badge-env-${r.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,y());try{const r=await fetch("/api/topology");if(!r.ok)throw new Error("Failed to load cluster topology");const l=await r.json();if(i.selectedConnectionId!==a)return;i.currentTopologyData=l,i.topologyLoadedForConnId=a;const c=`${l.total_nodes} Node${l.total_nodes!==1?"s":""}`;t&&(t.textContent=c),n&&(n.textContent=c);const d=document.getElementById("topologySearchInput");d&&(d.disabled=!1,d.placeholder="Filter nodes by IP, port, node ID, or slot..."),Mt(l),be()}catch(r){if(i.selectedConnectionId!==a)return;if(e){e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${p(r.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetryTopology" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,y();const l=document.getElementById("btnRetryTopology");l&&(l.onclick=()=>we())}}}function Mt(e){const t=document.getElementById("topologyStatsGrid");if(!t)return;const n=e.is_cluster,o=(e.cluster_state||"").toLowerCase()==="ok"||!n;t.innerHTML=`
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
  `}function be(){const e=document.getElementById("topologyTableContainer");if(!e||!i.currentTopologyData)return;const t=i.currentTopologyData.nodes||[],n=(i.currentTopologySearch||"").trim().toLowerCase(),o=i.currentTopologyRole,a=t.filter(s=>{if(o!=="all"&&s.role.toLowerCase()!==o)return!1;if(n){const r=(s.addr||"").toLowerCase().includes(n),l=(s.id||"").toLowerCase().includes(n),c=(s.ip||"").toLowerCase().includes(n),d=(s.slots||"").toLowerCase().includes(n);if(!r&&!l&&!c&&!d)return!1}return!0});if(a.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
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
        ${a.map(s=>{const r=s.role==="master",l=(s.link_state||"connected").toLowerCase()==="connected",c=s.id?s.id.length>12?`${s.id.substring(0,10)}...`:s.id:"N/A",d=s.slots?`${s.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${s.slot_count||0} slots)</span>`:r?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${p(s.id||"")}">${p(c)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${r?"role-badge-master":"role-badge-replica"}">${s.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${p(s.addr||`${s.ip}:${s.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem; text-align: right; color: ${r?"var(--text-primary)":"var(--text-secondary)"};">
                ${s.keys===null||s.keys===void 0?"—":Number(s.keys).toLocaleString()}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${l?"connected":"disconnected"}"></span>
                <span style="color: ${l?"var(--accent-success)":"var(--accent-danger)"};">${s.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${d}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                ${s.master_id?`<span title="${p(s.master_id)}">↳ ${p(s.master_id.substring(0,8))}...</span>`:"—"}
              </td>
              <td style="padding: 0.65rem 0.85rem; text-align: right; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
                ${(s.flags||[]).join(", ")||"none"}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,y()}function Ki(){const e=document.getElementById("btnOpenBulkDeleteModal");e&&(i.lastStatus?.read_only?(e.disabled=!0,e.style.opacity="0.4",e.style.cursor="not-allowed",e.title="🔒 Bulk Delete is disabled in Read-Only mode"):(e.disabled=!1,e.style.opacity="1",e.style.cursor="pointer",e.title="Bulk delete matched keys (Dry-run & confirmation required)"))}function ji(){const e=document.getElementById("btnCloseTopologyModal");e&&e.addEventListener("click",Oi);const t=document.getElementById("btnOpenTopologyTop");t&&t.addEventListener("click",()=>ae(null,!0));const n=document.getElementById("btnRefreshTopologyModal");n&&n.addEventListener("click",we);const o=document.getElementById("topologySearchInput");o&&o.addEventListener("input",()=>{i.currentTopologySearch=o.value.trim(),be()});const a=document.getElementById("topologyRoleFilter");a&&a.addEventListener("click",c=>{const d=c.target.closest(".type-tab");d&&d.dataset.role&&(a.querySelectorAll(".type-tab").forEach(u=>u.classList.remove("active")),d.classList.add("active"),i.currentTopologyRole=d.dataset.role,be())});const s=document.getElementById("btnCloseKeyspaceModal");s&&s.addEventListener("click",rt);const r=document.getElementById("btnRefreshKeyspaceModal");r&&r.addEventListener("click",It);const l=document.getElementById("btnKeyspaceOpenTopology");l&&l.addEventListener("click",()=>{rt(),ae()})}let Ne=null;function Ui(e){Ne=e}function Vi(e){i.allConnectedClients=[],i.clientsLoadedForConnId=null;const t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats");t&&(t.textContent="0"),n&&(n.textContent=""),_t(e)}function _t(e){const t=document.getElementById("clientsTableContainer");if(!t)return;const n=e||i.cachedConnections.find(c=>String(c.id)===String(i.selectedConnectionId)||c.is_selected)||null,o=n?n.name:i.lastStatus?.connection_name||"Active Cluster",a=n?n.host:i.lastStatus?.host||"127.0.0.1",s=n?n.port:i.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(i.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 1rem;">
        <i data-lucide="users" style="width: 24px; height: 24px; color: #38bdf8;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Connected Clients for ${p(o)} (${p(a)}:${s})
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
  `,y();const l=document.getElementById("btnFetchClientsExplicit");l&&(l.onclick=()=>Ce())}async function Xe(){O("clients"),i.clientsLoadedForConnId!==i.selectedConnectionId?_t():Rt(i.allConnectedClients)}function qi(){O("keys")}async function Ce(){const e=document.getElementById("clientsTableContainer"),t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats"),o=document.getElementById("clientsSearchInput"),a=i.selectedConnectionId;e&&(e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',y());try{const s=await fetch("/api/clients");if(!s.ok)throw new Error("Failed to load connected clients");const r=await s.json();if(i.selectedConnectionId!==a)return;i.allConnectedClients=r,i.clientsLoadedForConnId=a,t&&(t.textContent=i.allConnectedClients.length),n&&(n.textContent=`${i.allConnectedClients.length} total connections`),o&&(o.value=""),Fe()}catch(s){if(i.selectedConnectionId!==a)return;if(e){e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error loading clients</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(s.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetryClients" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,y();const r=document.getElementById("btnRetryClients");r&&(r.onclick=()=>Ce())}}}let ce=!1;function Fe(){const e=document.getElementById("clientsSearchInput"),t=e?e.value.trim().toLowerCase():"";let n=i.allConnectedClients||[];ce&&(n=n.filter(o=>!o.is_current_app)),t&&(n=n.filter(o=>(o.addr||"").toLowerCase().includes(t)||(o.name||"").toLowerCase().includes(t)||(o.user||"").toLowerCase().includes(t)||(o.cmd||"").toLowerCase().includes(t)||String(o.id).includes(t))),Rt(n)}function Rt(e){const t=document.getElementById("clientsTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="users" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.4;"></i>
        <p>No matching connected clients found.</p>
      </div>
    `,y();return}t.innerHTML=`
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
  `,y(),t.querySelectorAll(".btn-kill-client").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-id"),a=n.getAttribute("data-addr");Gi(o,a)})})}}async function Gi(e,t){if(i.lastStatus?.read_only){E("Client disconnection is disabled in Read-Only mode.","warning");return}if(confirm(`Are you sure you want to disconnect client #${e} (${t})?`))try{const n=await fetch(`/api/clients/${e}`,{method:"DELETE"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to disconnect client");E(`Disconnected client #${e}`,"success"),await Ce(),Ne&&await Ne()}catch(n){E("Error disconnecting client: "+n.message,"error")}}function Wi(){const e=document.getElementById("btnCloseClientsModal");e&&e.addEventListener("click",qi);const t=document.getElementById("btnOpenClientsModal");t&&t.addEventListener("click",Xe);const n=document.getElementById("btnRefreshClientsModal");n&&n.addEventListener("click",Ce);const o=document.getElementById("clientsSearchInput");o&&o.addEventListener("input",()=>{Fe()});const a=document.getElementById("btnToggleHideInternalClients");a&&a.addEventListener("click",()=>{ce=!ce,a.classList.toggle("active",ce),ce?(a.style.borderColor="var(--accent-primary)",a.style.color="var(--accent-primary)"):(a.style.borderColor="",a.style.color=""),Fe()})}let ee=null,A=[],G=null,W=null,At=[];function Ji(e,t){G=e,W=t}function Qi(e){typeof e=="function"&&At.push(e)}function Dt(e){const t=e||i.cachedConnections.find(x=>x.id===i.selectedConnectionId||x.is_selected)||null,n=t?t.name:i.lastStatus?.connection_name||"Active Target",o=t?t.host:i.lastStatus?.host||"127.0.0.1",a=t?t.port:i.lastStatus?.port||6379,s=(t?t.env||"LOCAL":i.lastStatus?.env||"LOCAL").toUpperCase(),l=(t?t.conn_type||"standalone":i.lastStatus?.is_cluster?"cluster":"standalone")==="cluster"||i.lastStatus?.is_cluster,c=i.lastStatus?.read_only,d=`
    <span>Target:</span>
    <strong class="context-conn-name" style="color: var(--text-primary); font-weight: 600;">${p(n)}</strong>
    <span class="context-conn-endpoint" style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.72rem;">(${p(o)}:${a})</span>
    <span class="badge-env badge-env-${s.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">${s}</span>
    <span class="top-conn-tag" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">${l?"CLUSTER":"STANDALONE"}</span>
    ${c?'<span class="badge-readonly" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;"><i data-lucide="lock" style="width: 10px; height: 10px; vertical-align: middle;"></i> READ ONLY</span>':""}
  `,u=document.getElementById("benchmarkTargetSubtitle");u&&(u.innerHTML=d+' <span style="color: var(--text-muted); font-size: 0.7rem;">| Namespace: __ri_bench__</span>');const f=document.getElementById("memoryTargetSubtitle");f&&(f.innerHTML=d);const h=document.getElementById("slowlogTargetSubtitle");h&&(h.innerHTML=d);const w=document.getElementById("topologyTargetSubtitle");w&&(w.innerHTML=d);const C=document.getElementById("clientsTargetSubtitle");C&&(C.innerHTML=d);const v=document.getElementById("keysTargetText");v&&(v.innerHTML=`
      <span class="target-conn-name">${p(n)}</span>
      <span class="target-endpoint">(${p(o)}:${a})</span>
    `),y()}function Ze(e){const t=i.cachedConnections.find(n=>n.id===e)||null;Dt(t);for(const n of At)try{n(t)}catch(o){console.warn("Error running cluster-switched callback:",o)}}async function Y(){const e=document.getElementById("connectionsList");try{const[t,n]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]),o=await t.json();if(i.cachedConnections=o||[],i.selectedConnectionId){const a=i.cachedConnections.find(s=>s.id===i.selectedConnectionId);if(a&&a.is_connected)i.cachedConnections.forEach(s=>{s.is_selected=s.id===i.selectedConnectionId});else{const s=i.cachedConnections.find(r=>r.is_selected&&r.is_connected)||i.cachedConnections.find(r=>r.is_connected);s&&(i.selectedConnectionId=s.id,localStorage.setItem("redis_insight_selected_conn_id",s.id),i.cachedConnections.forEach(r=>{r.is_selected=r.id===s.id}))}}else{const a=i.cachedConnections.find(s=>s.is_selected&&s.is_connected)||i.cachedConnections.find(s=>s.is_connected);a&&(i.selectedConnectionId=a.id,localStorage.setItem("redis_insight_selected_conn_id",a.id))}if(n.ok){const a=await n.json();i.currentLimit=a.limit||2}He()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function Pt(e,t){const n=document.getElementById("connectedCountDisplay"),o=document.getElementById("connLimitDisplay"),a=document.getElementById("connLimitSelect"),s=document.getElementById("limitProgressDots"),r=document.getElementById("limitCountPill");if(n&&(n.textContent=e),o&&(o.textContent=t),a&&String(a.value)!==String(t)&&(a.value=String(t)),r&&(e>=t&&t>0?(r.classList.add("at-limit"),r.title="Connection limit reached"):(r.classList.remove("at-limit"),r.title=`${e} of ${t} connections in use`)),s){let l="";for(let c=0;c<t;c++){const d=c<e;l+=`<span class="limit-slot-dot ${d?"filled":"empty"}" title="Slot ${c+1}: ${d?"Connected":"Available"}"></span>`}s.innerHTML=l}}function He(){const e=document.getElementById("connectionsList");if(!e)return;const t=document.getElementById("totalConnCountBadge");t&&(t.textContent=i.cachedConnections.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(l=>{const c=l.getAttribute("data-env");let d=0;c==="ALL"?d=i.cachedConnections.length:d=i.cachedConnections.filter(u=>(u.env||"LOCAL").toUpperCase()===c).length,l.textContent=`${c} (${d})`});const o=(i.currentConnSearch||"").trim().toLowerCase(),a=i.currentEnvFilter,s=i.cachedConnections.filter(l=>{if(a!=="ALL"&&(l.env||"LOCAL").toUpperCase()!==a)return!1;if(o){const c=(l.name||"").toLowerCase().includes(o),d=(l.host||"").toLowerCase().includes(o),u=(l.env||"").toLowerCase().includes(o),f=(l.conn_type||"").toLowerCase().includes(o);if(!c&&!d&&!u&&!f)return!1}return!0});s.sort((l,c)=>{const d=l.is_connected?1:0,u=c.is_connected?1:0;if(u!==d)return u-d;const f=l.is_selected?1:0,h=c.is_selected?1:0;return h!==f?h-f:(l.name||"").localeCompare(c.name||"")});const r=i.cachedConnections.filter(l=>l.is_connected).length;if(Pt(r,i.currentLimit),s.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${o?`No results found for "${p(o)}"`:`No connections configured in ${p(a)}`}
        </span>
      </div>
    `,y();return}e.innerHTML=s.map(l=>{const c=(l.env||"LOCAL").toUpperCase(),d=`badge-env-${c.toLowerCase()}`,u=l.conn_type==="cluster",f=l.conn_type==="sentinel",h=l.source==="config",w=!!l.is_connected,C=!!l.is_selected;return`
      <div class="conn-card ${w?"is-connected":""} ${C?"selected active":""}" data-id="${l.id}" title="Click to review config & connection options">
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${C?`
              <span class="conn-status-indicator active" title="Active Cluster (Browsing Keys)">
                <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
              </span>
            `:w?`
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
            ${C?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:w?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${p(l.host)}:${l.port}">
            <i data-lucide="${u?"network":f?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${p(l.host)}:${l.port}</span>
          </div>

          <div class="conn-tags">
            ${l.read_only?'<span class="badge-readonly" title="Read-Only Mode: Mutating operations locked">🔒 RO</span>':""}
            ${u?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${f?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!u&&!f?`<span class="badge-db">DB${l.db}</span>`:""}
            ${l.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${l.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${h?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${w?`
            ${C?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${l.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${l.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${u||w?`
              <button type="button" class="btn-hover-action btn-view-topology-card" data-id="${l.id}" title="View topology & nodes">
                <i data-lucide="layers" style="width: 11px; height: 11px;"></i>
              </button>
            `:""}
          `:`
            <button type="button" class="btn-hover-action btn-hover-connect btn-card-open-config" data-id="${l.id}" title="Review config & Connect">
              <i data-lucide="play" style="width: 11px; height: 11px;"></i>
              <span>Connect</span>
            </button>
            ${h?"":`
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${l.id}" data-name="${p(l.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>
      </div>
    `}).join(""),y(),e.querySelectorAll(".conn-card").forEach(l=>{l.addEventListener("click",c=>{if(c.target.closest(".btn-delete-conn")||c.target.closest(".btn-view-topology-card")||c.target.closest(".btn-card-disconnect")||c.target.closest(".btn-card-select")||c.target.closest(".btn-card-open-config"))return;const d=l.getAttribute("data-id"),u=i.cachedConnections.find(f=>f.id===d);u&&Oe(u)})}),e.querySelectorAll(".btn-card-disconnect").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const d=l.getAttribute("data-id");await et(d)})}),e.querySelectorAll(".btn-card-select").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const d=l.getAttribute("data-id");await Nt(d)})}),e.querySelectorAll(".btn-card-open-config").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const d=l.getAttribute("data-id"),u=i.cachedConnections.find(f=>f.id===d);u&&Oe(u)})}),e.querySelectorAll(".btn-view-topology-card").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const d=l.getAttribute("data-id");await ae(d)})}),e.querySelectorAll(".btn-delete-conn").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const d=l.getAttribute("data-id"),u=l.getAttribute("data-name");confirm(`Are you sure you want to delete '${u}'?`)&&await Zi(d)})})}function Yi(e){if(!e)return[];if(Array.isArray(e))return e.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t));if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n))}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}return[]}function Oe(e){i.activeConfigConn=e;const t=document.getElementById("clusterConfigModal"),n=document.getElementById("cfgModalTitle"),o=document.getElementById("cfgModalSubtitle"),a=document.getElementById("cfgModalBody"),s=document.getElementById("cfgModalFooter");if(!t||!a||!s)return;n&&(n.textContent=e.name||"Cluster Configuration"),o&&(o.textContent="Review configuration before connecting");const r=!!e.is_connected,l=!!e.is_selected,c=e.conn_type==="cluster",d=Yi(e.cluster_nodes),u=i.cachedConnections.filter(M=>M.is_connected).length,f=!r&&u>=i.currentLimit;a.innerHTML=`
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
            ${d.length>0?d.map(M=>`
                  <span class="seed-node-pill" title="${p(M)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${p(M)}
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
      <span>Connected Limit: <strong>${u} of ${i.currentLimit}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${f?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${i.currentLimit} maximum). Please disconnect a connected cluster first or increase the limit.</span>
      </div>
    `:""}

    <div id="cfgTestResultBox" class="test-result-box" style="margin-top: 0.65rem;"></div>
  `,r?s.innerHTML=`
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
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${f?"disabled":""}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `,y(),t.classList.add("active");const h=document.getElementById("btnCloseConfigModal");h&&(h.onclick=()=>t.classList.remove("active"));const w=document.getElementById("btnEditFromConfig");w&&(w.onclick=()=>{t.classList.remove("active"),Ht(e)});const C=document.getElementById("btnConnectFromConfig");C&&(C.onclick=async()=>{await zt(e.id),t.classList.remove("active")});const v=document.getElementById("btnDisconnectFromConfig");v&&(v.onclick=async()=>{await et(e.id),t.classList.remove("active")});const x=document.getElementById("btnSelectFromConfig");x&&(x.onclick=async()=>{await Nt(e.id),t.classList.remove("active")});const L=document.getElementById("btnTopologyFromConfig");L&&(L.onclick=async()=>{t.classList.remove("active"),await ae(e.id)});const B=document.getElementById("btnTestFromConfig");B&&(B.onclick=async()=>{await Xi(e)})}async function Xi(e){const t=document.getElementById("cfgTestResultBox"),n=document.getElementById("btnTestFromConfig");n&&(n.disabled=!0,n.innerHTML="Testing..."),t&&(t.className="test-result-box",t.innerHTML="");try{const a=await(await fetch(`/api/connections/${e.id}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();a.success?(t.className="test-result-box success",t.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${a.latency_ms} ms</strong> (Redis v${a.redis_version})</span>
      `):(t.className="test-result-box error",t.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${p(a.error||"Connection refused")}</span>
      `)}catch(o){t&&(t.className="test-result-box error",t.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${p(o.message)}</span>`)}finally{n&&(n.disabled=!1,n.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),y()}}async function zt(e){if(i.cachedConnections.filter(n=>n.is_connected&&n.id!==e).length>=i.currentLimit){E(`Connection limit reached: Maximum ${i.currentLimit} connected cluster(s) allowed. Please disconnect an existing cluster first.`,"warning",4500);return}try{const n=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to connect to cluster");i.selectedConnectionId=e,localStorage.setItem("redis_insight_selected_conn_id",e),await Y(),Ze(e),E("Connected to cluster successfully","success"),G&&await G(),W&&await W()}catch(n){E("Connection error: "+n.message,"error")}}async function et(e){try{const t=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to disconnect cluster");if(i.selectedConnectionId===e){const a=i.cachedConnections.find(s=>s.is_connected&&s.id!==e);a?(i.selectedConnectionId=a.id,localStorage.setItem("redis_insight_selected_conn_id",a.id)):(i.selectedConnectionId=null,localStorage.removeItem("redis_insight_selected_conn_id"))}await Y(),Ze(i.selectedConnectionId),G&&await G(),i.cachedConnections.some(a=>a.is_connected&&a.id!==e)?W&&await W():(i.keysTableRows=[],i.loadedKeysSet.clear(),i.totalScanned=0,i.currentCursor=0,i.scanComplete=!1,i.dbTotalKeys=0,Ft())}catch(t){E("Disconnect error: "+t.message,"error")}}async function Nt(e){try{i.selectedConnectionId=e,localStorage.setItem("redis_insight_selected_conn_id",e);const t=await fetch(`/api/connections/${e}/select`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to switch cluster");const o=document.getElementById("keyDetailModal");o&&o.classList.remove("active"),i.activeDetailKey=null,i.activeDetailData=null,await Y(),Ze(e),G&&await G(),W&&await W()}catch(t){E("Switch error: "+t.message,"error")}}function Ft(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="flex"),n&&(n.style.display="none");const o=document.getElementById("btnConnectFirstAvailable");o&&(o.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${i.cachedConnections.length})`,i.cachedConnections.length>0&&(o.onclick=()=>Oe(i.cachedConnections[0]))),y()}async function Zi(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");E("Connection deleted","success"),await Y(),G&&await G(),W&&await W()}catch(t){E("Delete error: "+t.message,"error")}}function te(){const e=document.getElementById("clusterNodesList"),t=document.getElementById("clusterNodeCountBadge");if(e){if(t&&(t.textContent=`${A.length} configured`),A.length===0){e.innerHTML=`
      <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
        No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
      </div>
    `;return}e.innerHTML=A.map((n,o)=>{const a=n.role==="master",s=n.role==="replica",r=n.role==="seed",l=a?"master":s?"replica":"",c=a?"master":s?"replica":r?"seed":"manual",d=a?"Master":s?"Replica":r?"Seed":"Node";return`
      <span class="cluster-node-chip ${l}">
        <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
        <span>${p(n.host)}:${n.port}</span>
        <span class="cluster-node-role-badge ${c}">${d}</span>
        <button type="button" class="cluster-node-chip-remove" data-idx="${o}" title="Remove node">
          <i data-lucide="x" style="width: 11px; height: 11px;"></i>
        </button>
      </span>
    `}).join(""),e.querySelectorAll(".cluster-node-chip-remove").forEach(n=>{n.addEventListener("click",o=>{o.stopPropagation();const a=parseInt(n.getAttribute("data-idx"),10);!isNaN(a)&&a>=0&&a<A.length&&(A.splice(a,1),te())})}),y()}}function Ht(e){ee=e.id;const t=document.getElementById("connectionModal"),n=document.getElementById("connectionModalTitle"),o=document.getElementById("btnSaveConn"),a=document.getElementById("connPassword");n&&(n.innerHTML='<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection'),o&&(o.textContent="Update Connection"),document.getElementById("connName").value=e.name||"",document.getElementById("connEnv").value=(e.env||"DEV").toUpperCase();const s=document.getElementById("connTypeSelect");s.value=e.conn_type||"standalone",document.getElementById("connHost").value=e.host||"localhost",document.getElementById("connPort").value=e.port||6379,document.getElementById("connDb").value=e.db||0,document.getElementById("connUsername").value=e.username||"",document.getElementById("connTls").checked=!!e.use_tls,document.getElementById("connReadOnly").checked=!!e.read_only,a&&(a.value="",e.has_password?a.placeholder="•••••••• (Leave blank to keep saved password)":a.placeholder="Enter password (or leave empty)");const r=document.getElementById("clusterNodesGroup"),l=document.getElementById("connHostLabel"),c=document.getElementById("connDbRow");if(A=[],e.conn_type==="cluster"){if(r&&(r.style.display="block"),l&&(l.textContent="Seed Node Host *"),c&&(c.style.display="none"),e.cluster_nodes)try{const u=typeof e.cluster_nodes=="string"?JSON.parse(e.cluster_nodes):e.cluster_nodes;Array.isArray(u)&&(A=u.map(f=>{if(typeof f=="string"&&f.includes(":")){const h=f.split(":");return{host:h[0].trim(),port:parseInt(h[1],10)||6379}}return{host:f.host||"127.0.0.1",port:parseInt(f.port,10)||6379}}))}catch{}}else r&&(r.style.display="none"),l&&(l.textContent="Host *"),c&&(c.style.display="flex");te();const d=document.getElementById("testResultBox");d&&(d.className="test-result-box",d.innerHTML=""),y(),t&&t.classList.add("active")}function eo(){window.openEditConnectionModal=Ht;const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const m=parseInt(e.value,10);try{const g=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:m})});if(g.ok){const b=await g.json();i.currentLimit=b.limit,Pt(b.connected_count,b.limit)}}catch(g){console.warn("Failed to update limit:",g)}});const t=document.getElementById("connSearchInput");t&&t.addEventListener("input",()=>{i.currentConnSearch=t.value.trim(),He()});const n=document.getElementById("envFilterPills");n&&n.addEventListener("click",m=>{const g=m.target.closest(".env-pill-btn");g&&g.dataset.env&&(n.querySelectorAll(".env-pill-btn").forEach(b=>b.classList.remove("active")),g.classList.add("active"),i.currentEnvFilter=g.dataset.env,He())});const o=document.getElementById("btnReloadConfigStatic");o&&o.addEventListener("click",async()=>{o.disabled=!0;try{await fetch("/api/connections/reload-config",{method:"POST"}),await Y()}catch(m){console.warn("Reload config failed:",m)}finally{o.disabled=!1}});const a=document.getElementById("connTypeSelect"),s=document.getElementById("clusterNodesGroup"),r=document.getElementById("connHostLabel"),l=document.getElementById("connPortLabel"),c=document.getElementById("connHost"),d=document.getElementById("connPort"),u=document.getElementById("connDbGroup");a&&s&&a.addEventListener("change",()=>{const m=a.value==="cluster";s.style.display=m?"block":"none",u&&(u.style.display=m?"none":"block"),m?(r&&(r.textContent="Primary Seed Host *"),l&&(l.textContent="Seed Port *"),c&&(c.value==="localhost"||!c.value)&&(c.value="127.0.0.1"),d&&(d.value==="6379"||!d.value)&&(d.value="7000"),A.length===0&&c&&c.value&&d&&d.value&&A.push({host:c.value.trim(),port:parseInt(d.value,10)||7e3,role:"seed"}),te()):(r&&(r.textContent="Host *"),l&&(l.textContent="Port *"),d&&d.value==="7000"&&(d.value="6379"))});const f=document.getElementById("btnAutoDiscoverCluster"),h=document.getElementById("clusterDiscoveryStatus");f&&f.addEventListener("click",async()=>{const m=c?c.value.trim():"127.0.0.1",g=d&&parseInt(d.value,10)||7e3,b=document.getElementById("connUsername").value.trim()||null,S=document.getElementById("connPassword").value||null,T=document.getElementById("connTls").checked;if(!m){h&&(h.className="cluster-discovery-status error",h.style.display="flex",h.innerHTML='<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>',y());return}f.disabled=!0,f.innerHTML="Discovering...";try{const _=await(await fetch("/api/connections/discover-cluster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:m,port:g,username:b,password:S,use_tls:T})})).json();_.success&&_.nodes&&_.nodes.length>0?(A=_.nodes.map(D=>({host:D.host,port:D.port,role:D.role,is_myself:D.is_myself,slots:D.slots})),te(),h&&(h.className="cluster-discovery-status success",h.style.display="flex",h.innerHTML=`
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${_.total_nodes} nodes</strong> (${_.masters_count} masters, ${_.replicas_count} replicas)</span>
            `,y())):h&&(h.className="cluster-discovery-status error",h.style.display="flex",h.innerHTML=`
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${p(_.error||"Cluster discovery failed.")}</span>
            `,y())}catch(I){h&&(h.className="cluster-discovery-status error",h.style.display="flex",h.innerHTML=`
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${p(I.message)}</span>
          `,y())}finally{f.disabled=!1,f.innerHTML='<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes',y()}});const w=document.getElementById("inputCustomClusterNode"),C=document.getElementById("btnAddCustomClusterNode");function v(){if(!w)return;const m=w.value.trim();if(!m)return;let g="127.0.0.1",b=7e3;if(m.includes(":")){const T=m.split(":");g=T[0].trim()||"127.0.0.1",b=parseInt(T[1].trim(),10)||7e3}else isNaN(parseInt(m,10))?g=m:(b=parseInt(m,10),g=c?c.value.trim():"127.0.0.1");A.some(T=>T.host===g&&T.port===b)||(A.push({host:g,port:b,role:"manual"}),te()),w.value=""}C&&C.addEventListener("click",v),w&&w.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),v())});const x=document.getElementById("connectionModal"),L=document.getElementById("btnAddConn");L&&x&&L.addEventListener("click",()=>{ee=null,document.getElementById("connectionForm").reset();const m=document.getElementById("connectionModalTitle"),g=document.getElementById("btnSaveConn"),b=document.getElementById("connPassword");m&&(m.innerHTML='<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection'),g&&(g.textContent="Save Connection"),b&&(b.placeholder="Leave empty if none");const S=document.getElementById("connEnv").value;document.getElementById("connReadOnly").checked=S==="PROD",document.getElementById("clusterNodesGroup").style.display="none",document.getElementById("connHostLabel").textContent="Host *",document.getElementById("connDbRow").style.display="flex",A=[],te();const T=document.getElementById("testResultBox");T&&(T.className="test-result-box",T.innerHTML=""),y(),x.classList.add("active")});const B=document.getElementById("btnCloseModal");B&&x&&B.addEventListener("click",()=>x.classList.remove("active"));const M=document.getElementById("btnCancelModal");M&&x&&M.addEventListener("click",()=>x.classList.remove("active"));const H=document.getElementById("connEnv");H&&H.addEventListener("change",m=>{if(m.target.value==="PROD"){const g=document.getElementById("connReadOnly");g&&(g.checked=!0)}});const U=document.getElementById("btnTestConnModal");U&&U.addEventListener("click",async()=>{const m=document.getElementById("connTypeSelect").value,g=document.getElementById("connHost").value.trim()||"localhost",b=parseInt(document.getElementById("connPort").value,10)||6379,S=parseInt(document.getElementById("connDb").value,10)||0,T=document.getElementById("connUsername").value.trim()||null,I=document.getElementById("connPassword").value,_=document.getElementById("connTls").checked;let D=null;m==="cluster"&&A.length>0&&(D=JSON.stringify(A.map(z=>({host:z.host,port:z.port}))));const $=document.getElementById("testResultBox");U.disabled=!0,U.innerHTML="Testing...",$&&($.className="test-result-box",$.innerHTML="");try{let z;ee&&!I?z=await fetch(`/api/connections/${ee}/test`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:g,port:b,db:S,username:T,use_tls:_,conn_type:m,cluster_nodes:D})}):z=await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:g,port:b,db:S,username:T,password:I||null,use_tls:_,conn_type:m,cluster_nodes:D})});const K=await z.json();if(K.success){$.className="test-result-box success";const R=K.is_cluster?` • Cluster Mode (${K.cluster_nodes_count||A.length} nodes reachable)`:"";$.innerHTML=`
            <i data-lucide="check-circle-2"></i>
            <span>Connected! Latency: <strong>${K.latency_ms} ms</strong>${R} (Redis v${K.redis_version})</span>
          `}else $.className="test-result-box error",$.innerHTML=`
            <i data-lucide="alert-circle"></i>
            <span>Failed: ${p(K.error||"Connection refused")}</span>
          `}catch(z){$&&($.className="test-result-box error",$.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${p(z.message)}</span>`)}finally{U.disabled=!1,U.innerHTML='<i data-lucide="zap"></i> Test Connection',y()}});const F=document.getElementById("connectionForm");F&&F.addEventListener("submit",async m=>{m.preventDefault();const g=document.getElementById("connName").value.trim(),b=document.getElementById("connEnv").value,S=document.getElementById("connTypeSelect").value;let T=document.getElementById("connHost").value.trim()||"localhost",I=parseInt(document.getElementById("connPort").value,10)||6379;const _=parseInt(document.getElementById("connDb").value,10)||0,D=document.getElementById("connUsername").value.trim()||null,$=document.getElementById("connPassword").value,z=document.getElementById("connTls").checked,K=document.getElementById("connAutoActivate").checked,R=document.getElementById("connReadOnly")?.checked||!1;let P=null;S==="cluster"&&(A.length>0?(P=JSON.stringify(A.map(N=>({host:N.host,port:N.port}))),T=A[0].host,I=A[0].port):P=JSON.stringify([{host:T,port:I}]));try{if(ee){const N={name:g,env:b,conn_type:S,host:T,port:I,cluster_nodes:P,db:_,username:D,use_tls:z,read_only:R};$&&(N.password=$);const le=await fetch(`/api/connections/${ee}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)});if(!le.ok){const ke=await le.json().catch(()=>({}));throw new Error(ke.detail||"Failed to update connection")}}else{const N={name:g,env:b,conn_type:S,host:T,port:I,cluster_nodes:P,db:_,username:D,password:$||null,use_tls:z,read_only:R},le=await fetch(`/api/connections?auto_activate=${K}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)});if(!le.ok){const ke=await le.json().catch(()=>({}));throw new Error(ke.detail||"Failed to save connection")}}x.classList.remove("active"),ee=null,F.reset(),A=[],te(),await Y(),E("Connection saved successfully","success"),G&&await G(),W&&await W()}catch(N){E("Error saving: "+N.message,"error")}})}typeof window<"u"&&(window.__redisState=i,window.__redisKeys={updateScanUI:de,resetAndScan:q});const to=window.fetch;window.fetch=function(e,t){let n="";if(typeof e=="string"?n=e:e instanceof URL?n=e.toString():e&&typeof e.url=="string"&&(n=e.url),n.startsWith("/api/")||n.includes("/api/")){const o=i.selectedConnectionId||localStorage.getItem("redis_insight_selected_conn_id");if(o)if(e instanceof Request)try{e.headers.set("X-Connection-ID",o)}catch{}else{t=t||{};const a=new Headers(t.headers||{});a.has("X-Connection-ID")||a.set("X-Connection-ID",o),t={...t,headers:a}}}return to.call(this,e,t)};Ji(se,q);ui(q);oi(Ge);Ii(oe,Ge,se);Ui(se);Ni(zt);Qi(e=>{$i(e),qn(e),_i(e),Vi(e),Hi(e)});ue("benchmark",()=>Ve());ue("memory",()=>Je());ue("slowlog",()=>Tt());ue("topology",()=>ae());ue("clients",()=>Xe());function no(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
                    ${Ot.map(t=>`<option value="${t}"${t===50?" selected":""}>${t.toLocaleString()}</option>`).join("")}
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
  `)}async function se(){const e=document.getElementById("topConnContainer"),t=document.getElementById("topVitalsContainer");try{const o=await(await fetch("/api/status")).json();if(o.connected){const a=i.cachedConnections.find(x=>x.is_selected)||i.cachedConnections.find(x=>x.id===o.connection_id)||i.cachedConnections.find(x=>x.is_connected),s=a&&a.conn_type==="cluster"||o.cluster_nodes&&o.cluster_nodes.length>0||o.is_cluster,r=o.cluster_nodes_count||(o.node_stats&&o.node_stats.length>0?o.node_stats.length:1),l=(o.node_stats||[]).filter(x=>x.role==="master");if(i.lastStatus=o,xi(o.connection_id||a?.id),Ki(),Dt(a),e){const x=(o.env||a?.env||"LOCAL").toUpperCase();e.innerHTML=`
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${p(o.connection_name||"Connected")}">${p(o.connection_name||"Connected")}</span>
            <span class="badge-env badge-env-${x.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem; margin-right: 0.25rem;">${x}</span>
            ${o.read_only?'<span class="badge-readonly" title="Read-Only Mode: All write, update, and delete actions are locked" style="margin-right: 0.25rem;"><i data-lucide="lock"></i> READ ONLY</span>':""}
            <span class="top-conn-endpoint">${o.host}:${o.port}</span>
            <span class="top-conn-tag">${s?"CLUSTER":`DB${o.db}`}</span>
            <button type="button" class="top-conn-disconnect" id="btnTopDisconnect" title="Disconnect ${p(o.connection_name||"instance")}">
              <i data-lucide="power" style="width: 12px; height: 12px;"></i>
            </button>
          </div>
        `}t&&(t.innerHTML=`
          <div class="top-vitals-capsule">
            <div class="vital-item clickable" id="btnOpenTopologyTop" title="View Cluster Topology & Node Health">
              <i data-lucide="layers" style="width: 12px; height: 12px; color: ${s?"#a78bfa":"var(--accent-primary)"};"></i>
              <span class="vital-val" style="color: ${s?"#c084fc":"var(--accent-primary)"};">
                ${s?`${r} ${r===1?"Node":"Nodes"}`:"1 Node"}
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
        `);const c=document.getElementById("tabBadgeKeys");c&&(c.textContent=(o.dbsize||0).toLocaleString());const d=document.getElementById("tabBadgeTopology");d&&(d.textContent=s?`${r} Nodes`:"1 Node");const u=document.getElementById("tabBadgeClients");u&&(u.textContent=String(o.connected_clients||1)),y();const f=document.getElementById("btnTopDisconnect");f&&f.addEventListener("click",()=>{o.connection_id&&et(o.connection_id)});const h=document.getElementById("btnOpenClientsModal");h&&h.addEventListener("click",Xe);const w=document.getElementById("btnOpenTopologyTop");w&&w.addEventListener("click",()=>ae());const C=document.getElementById("btnOpenKeyspaceTop");C&&l.length&&C.addEventListener("click",Fi);const v=document.getElementById("btnOpenMemoryTop");v&&v.addEventListener("click",Je)}else e&&(e.innerHTML=`
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${o.error?`<span class="top-conn-error" title="${p(o.error)}">${p(o.error)}</span>`:""}
          </div>
        `),t&&(t.innerHTML=`
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `),y(),i.totalScanned===0&&i.keysTableRows.length===0&&Ft()}catch{e&&(e.innerHTML=`
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `),t&&(t.innerHTML=""),y()}}function io(){const e=document.getElementById("btnRefreshStats");e&&e.addEventListener("click",se);const t=document.getElementById("clusterConfigModal"),n=document.getElementById("btnCloseConfigModalHeader");n&&t&&n.addEventListener("click",()=>t.classList.remove("active")),t&&t.addEventListener("click",c=>{c.target===t&&t.classList.remove("active")});const o=document.querySelector(".sidebar"),a=document.getElementById("btnToggleSidebar"),s=document.getElementById("btnShowSidebar"),r=c=>{if(!o)return;const d=c!==void 0?c:!o.classList.contains("collapsed");o.classList.toggle("collapsed",d),s&&(s.style.display=d?"inline-flex":"none"),localStorage.setItem("redis_insight_sidebar_collapsed",d?"true":"false"),y()};a&&a.addEventListener("click",()=>r(!0)),s&&s.addEventListener("click",()=>r(!1)),localStorage.getItem("redis_insight_sidebar_collapsed")==="true"&&r(!0),window.addEventListener("keydown",c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()==="b"&&(c.preventDefault(),r())}),window.addEventListener("keydown",c=>{if(c.key==="Escape"){const d=document.querySelector(".modal-backdrop:not(.ws-dashboard-pane).active");if(d){d.classList.remove("active");return}i.activeWorkspaceTab&&i.activeWorkspaceTab!=="keys"&&O("keys")}}),window.addEventListener("focus",()=>{Y()}),setInterval(se,15e3)}async function ct(){no(),y(),jn(),eo(),Ti(),ii(),Mi(),zi(),ji(),Wi(),mi(),yi(),io(),await Y(),await se(),await q()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ct):ct();
