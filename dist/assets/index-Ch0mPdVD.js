(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const Yt=[50,100,200,500,1e3,2e3,5e3,1e4],Zt=200,o={activeWorkspaceTab:"keys",allConnectedClients:[],allSlowlogEntries:[],currentSlowlogMinDuration:0,currentSlowlogSearch:"",currentSlowlogNode:"all",currentSlowlogTimeWindow:"all",currentViewMode:localStorage.getItem("redis_insight_view_mode")||"table",activeTreeDelimiters:(()=>{try{const t=localStorage.getItem("redis_insight_tree_delimiters_global");if(t){const n=JSON.parse(t);if(Array.isArray(n)&&n.length>0)return n}}catch{}const e=localStorage.getItem("redis_insight_tree_delimiter");return e&&e!=="auto"?[e]:[":","/","."]})(),customTreeDelimiters:(()=>{try{const e=localStorage.getItem("redis_insight_custom_delimiters");if(e){const t=JSON.parse(e);if(Array.isArray(t))return t}}catch{}return[]})(),treeDelimiterPreset:localStorage.getItem("redis_insight_tree_delimiter_preset")||"auto",get currentTreeDelimiter(){return this.treeDelimiterPreset||this.activeTreeDelimiters&&this.activeTreeDelimiters[0]||"auto"},set currentTreeDelimiter(e){this.treeDelimiterPreset=e},treeExpandedPaths:new Set,treeInitialized:!1,currentTreeFilterQuery:"",currentMemoryOverview:null,currentMemoryAnalysis:null,isMemoryProfilingRunning:!1,memoryLoadedForConnId:null,bigkeysSearchQuery:"",slowlogLoadedForConnId:null,clientsLoadedForConnId:null,topologyLoadedForConnId:null,currentCursor:0,currentPattern:"*",currentType:"all",currentTtlFilter:"all",isScanning:!1,totalScanned:0,scanComplete:!1,dbTotalKeys:0,lastStatus:null,keysTableRows:[],loadedKeysSet:new Set,searchScope:"local",localFilterQuery:"",localMatchCount:0,localMatchDurationMs:0,maxLoadedKeysLimit:1e5,isMemoryCeilingReached:!1,isAutoRefreshActive:!1,autoRefreshIntervalSec:(()=>{let e=parseInt(localStorage.getItem("redis_insight_auto_refresh_sec")||"10",10);return isNaN(e)||e<5?10:e})(),autoRefreshRemainingSec:10,autoRefreshTimer:null,activeDetailKey:null,activeDetailData:null,hashFieldsState:null,pendingDeleteKey:null,pendingDeleteCallback:null,selectedConnectionId:(()=>{const e=localStorage.getItem("redis_insight_selected_conn_id");if(!e)return null;const t=Number(e);return!isNaN(t)&&String(t)===e.trim()?t:e})(),cachedConnections:[],currentEnvFilter:"ALL",currentConnSearch:"",currentTopologyData:null,currentTopologyRole:"all",currentTopologySearch:"",currentLimit:2,activeConfigConn:null,currentScanEpoch:0,scanBatchSize:50};function p(e){return e==null?"":String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(e,t,n=[])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{i.setAttribute(a,String(t[a]))}),n.length&&n.forEach(a=>{const l=bt(...a);i.appendChild(l)}),i};var Xt=([e,t,n])=>bt(e,t,n);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),tn=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",nn=e=>e.flatMap(tn).map(n=>n.trim()).filter(Boolean).filter((n,i,a)=>a.indexOf(n)===i).join(" "),on=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,i)=>n.toUpperCase()+i.toLowerCase()),rt=(e,{nameAttr:t,icons:n,attrs:i})=>{const a=e.getAttribute(t);if(a==null)return;const l=on(a),r=n[l];if(!r)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const s=en(e),[d,c,m]=r,y={...c,"data-lucide":a,...i,...s},g=nn(["lucide",`lucide-${a}`,s,i]);g&&Object.assign(y,{class:g});const h=Xt([d,y,m]);return e.parentNode?.replaceChild(h,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",S,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",S,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",S,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",S,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",S,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",S,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",S,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",S,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",S,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",S,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",S,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",S,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",S,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",S,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",S,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",S,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",S,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",S,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",S,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",S,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",S,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",S,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",S,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",S,[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",S,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",S,[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",S,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",S,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",S,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",S,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",S,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=["svg",S,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",S,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=["svg",S,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=["svg",S,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=["svg",S,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=["svg",S,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=["svg",S,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=["svg",S,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=["svg",S,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=["svg",S,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=["svg",S,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=["svg",S,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=["svg",S,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=["svg",S,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=["svg",S,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${t}]`);if(Array.from(i).forEach(a=>rt(a,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(l=>rt(l,{nameAttr:"icon-name",icons:e,attrs:n})))}};function f(){Yn({icons:{Layers:In,Plus:Dn,RefreshCw:Pn,Search:zn,Cpu:vn,Trash2:Vn,Zap:Qn,CheckCircle2:yn,AlertCircle:mn,Database:bn,ShieldCheck:Hn,Lock:Mn,ArrowDownCircle:un,X:Jn,Play:An,Copy:hn,Clock:gn,Edit:Kn,ExternalLink:wn,Code:fn,Users:Gn,Server:Fn,Network:_n,GitBranch:Tn,ArrowRightLeft:sn,Activity:an,PieChart:rn,AlertTriangle:Wn,TrendingUp:qn,BarChart2:ln,Power:Nn,ChevronLeft:cn,ChevronRight:pn,PanelLeft:Rn,Download:xn,FileText:Cn,Folder:Ln,FolderOpen:Sn,FolderTree:En,Table:jn,List:Bn,ChevronDown:dn,Key:$n,Filter:kn,Timer:Un,Sparkles:On}})}const Re={};function ge(e,t){Re[e]=t}let $e=!1;function O(e,t=!0){if(!$e){$e=!0;try{["keys","benchmark","memory","slowlog","topology","clients"].includes(e)||(e="keys"),o.activeWorkspaceTab=e,document.querySelectorAll(".ws-tab-btn").forEach(r=>{const s=r.dataset.tab===e;r.classList.toggle("active",s),r.setAttribute("aria-selected",s?"true":"false")}),document.querySelectorAll(".ws-tab-pane").forEach(r=>{r.classList.remove("active")});const i=document.getElementById(`paneWorkspace${Zn(e)}`);if(i&&i.classList.add("active"),Object.entries({benchmark:"benchmarkModal",memory:"memoryModal",slowlog:"slowlogModal",topology:"clusterTopologyModal",clients:"clientsListModal"}).forEach(([r,s])=>{const d=document.getElementById(s);d&&(r===e?d.classList.add("active"):d.classList.remove("active"))}),Object.entries({benchmark:"btnOpenBenchmarkModal",slowlog:"btnOpenSlowlog",memory:"btnOpenMemoryModal",topology:"btnOpenTopologyTop",clients:"btnOpenClientsModal"}).forEach(([r,s])=>{const d=document.getElementById(s);d&&d.classList.toggle("active",r===e)}),t&&history.replaceState(null,"",`#/${e}`),Re[e])try{Re[e]()}catch(r){console.warn(`Error loading data for tab ${e}:`,r)}f()}finally{$e=!1}}}function Zn(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Xn(){const e=document.getElementById("workspaceTabsBar");e&&e.addEventListener("click",t=>{const n=t.target.closest(".ws-tab-btn");n&&n.dataset.tab&&O(n.dataset.tab)}),window.addEventListener("hashchange",()=>{dt()}),window.addEventListener("keydown",t=>{const n=document.activeElement?document.activeElement.tagName.toLowerCase():"";if(!(n==="input"||n==="textarea"||n==="select")&&(t.ctrlKey||t.metaKey)&&!t.shiftKey&&!t.altKey){const i={1:"keys",2:"benchmark",3:"memory",4:"slowlog",5:"topology",6:"clients"};i[t.key]&&(t.preventDefault(),O(i[t.key]))}}),dt()}function dt(){const t=(window.location.hash||"").match(/^#\/([a-z0-9_-]+)/i);if(t){const n=t[1].toLowerCase();if(["keys","benchmark","memory","slowlog","topology","clients"].includes(n)){O(n,!1);return}}O("keys",!1)}let X=null;function eo(){return(!X||!document.body.contains(X))&&(X=document.createElement("div"),X.id="appToastContainer",X.className="toast-container",document.body.appendChild(X)),X}function E(e,t="info",n=2500){if(!e)return;const i=eo(),a=document.createElement("div");a.className=`toast-pill toast-${t}`;const l=t==="success"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>':t==="error"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>':t==="warning"?'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>':'<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';a.innerHTML=`
    <span class="toast-icon-wrapper">${l}</span>
    <span class="toast-message">${to(e)}</span>
    <button type="button" class="toast-close" title="Dismiss">&times;</button>
  `;const r=a.querySelector(".toast-close");if(r&&r.addEventListener("click",()=>Ie(a)),i.appendChild(a),requestAnimationFrame(()=>{a.classList.add("toast-show")}),n>0){const s=setTimeout(()=>{Ie(a)},n);a.addEventListener("mouseenter",()=>clearTimeout(s)),a.addEventListener("mouseleave",()=>{setTimeout(()=>Ie(a),1e3)})}return a}function Ie(e){!e||e.classList.contains("toast-exit")||(e.classList.remove("toast-show"),e.classList.add("toast-exit"),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},250))}function to(e){return typeof e!="string"?String(e??""):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}async function Y(e){typeof e!="string"&&(e=String(e??""));try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",t.setAttribute("readonly",""),document.body.appendChild(t),t.focus(),t.select();const n=document.execCommand("copy");return t.remove(),n}catch{return!1}}let xt="probe",j=!1;const xe={counter:{script:`local k = KEYS[1] or 'bench_counter'
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
return redis.call('PING')`,keys:"my_key",args:""}};function Je(e){if(!e)return"";const t=Number(e.network_overhead_ms||0).toFixed(3),n=Number(e.server_exec_ms||0).toFixed(3);return`
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
  `}function Qe(e){return e?`
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
  `:""}function Ye(e){return!e||!e.length?"":`
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
  `}function no(e){j=!1;const t=e||o.cachedConnections.find(y=>y.id===o.selectedConnectionId||y.is_selected),n=t?t.name:"Active Cluster",i=t?t.host:o.lastStatus?.host||"",a=t?t.port:o.lastStatus?.port||"",l=t?(t.env||"LOCAL").toUpperCase():(o.lastStatus?.env||"LOCAL").toUpperCase(),r=document.getElementById("benchmarkTargetSubtitle");r&&(r.textContent=`Active Target: ${n} (${i}:${a}) [${l}] | Engine: AsyncIO Native | Namespace: __ri_bench__`);const s=document.getElementById("benchmarkProbeResults");s&&(s.innerHTML=`
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
    `);const m=document.getElementById("benchmarkClusterResults");m&&(m.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="layers" style="width: 28px; height: 28px; color: #c084fc; margin-bottom: 0.75rem; opacity: 0.85;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Ready to benchmark multi-node cluster matrix on ${p(n)}</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Probes every cluster master node simultaneously to measure node-by-node latency distribution</div>
      </div>
    `),Ze(),f()}function Ze(){const e=document.getElementById("benchmarkTargetSubtitle");if(e){const l=o.cachedConnections.find(m=>m.id===o.selectedConnectionId||m.is_selected),r=l?l.name:o.lastStatus?.host?`${o.lastStatus.host}:${o.lastStatus.port}`:"Active Target",s=l?l.host:o.lastStatus?.host||"",d=l?l.port:o.lastStatus?.port||"",c=l?(l.env||"LOCAL").toUpperCase():(o.lastStatus?.env||"LOCAL").toUpperCase();e.textContent=`Active Target: ${r} (${s}:${d}) [${c}] | Engine: AsyncIO Native | Namespace: __ri_bench__`}const t=document.getElementById("benchmarkReadOnlyBadge"),n=document.getElementById("optCommandPresetWrite"),i=document.getElementById("optCommandPresetStruct");if(o.lastStatus?.read_only){t&&(t.style.display="inline-flex"),n&&(n.disabled=!0,n.textContent="Write / Set (Disabled - Read-Only)"),i&&(i.disabled=!0,i.textContent="Data Structures (Disabled - Read-Only)");const l=document.getElementById("selCommandPreset");l&&(l.value==="write"||l.value==="structures")&&(l.value="read")}else t&&(t.style.display="none"),n&&(n.disabled=!1,n.textContent="Write / Set (100% SET)"),i&&(i.disabled=!1,i.textContent="Data Structures (HSET / HGET)");const a=document.getElementById("txtLuaScript");if(a&&!a.value.trim()){a.value=xe.counter.script;const l=document.getElementById("txtLuaKeys"),r=document.getElementById("txtLuaArgs");l&&(l.value=xe.counter.keys),r&&(r.value=xe.counter.args)}wt(xt||"probe")}function oo(){O("benchmark"),Ze()}function io(){O("keys")}function wt(e){xt=e,document.querySelectorAll(".benchmark-tab-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-tab")===e)});const t={probe:document.getElementById("benchmarkPaneProbe"),commands:document.getElementById("benchmarkPaneCommands"),lua:document.getElementById("benchmarkPaneLua"),cluster:document.getElementById("benchmarkPaneCluster")};Object.keys(t).forEach(n=>{t[n]&&(t[n].style.display=n===e?"flex":"none")}),f()}async function ao(){if(j)return;const e=document.getElementById("btnRunProbe"),t=document.getElementById("benchmarkProbeResults"),n=document.getElementById("selProbeCount"),i=parseInt(n?.value||"100",10);j=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Running Probe (${i})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Executing ${i} baseline probes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring network round-trip time vs Redis event-loop CPU duration</div>
      </div>
    `,f());try{const a=await fetch("/api/benchmark/probe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({count:i})});if(!a.ok){const r=await a.json().catch(()=>({detail:"Probe request failed"}));throw new Error(r.detail||"Probe failed")}const l=await a.json();so(l)}catch(a){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Latency Probe Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(a.message)}</div>
        </div>
      `,f())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Run Latency Probe</span>',f())}}function so(e){const t=document.getElementById("benchmarkProbeResults");if(!t||!e)return;const n=Number(e.avg_rtt_ms||0).toFixed(3),i=Number(e.breakdown?.server_exec_ms||0).toFixed(3),a=Number(e.breakdown?.network_overhead_ms||0).toFixed(3),l=Number(e.ops_per_sec||0).toLocaleString();t.innerHTML=`
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #38bdf8;"></i> Total Round-Trip (RTT)</div>
        <div class="val">${n} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Average client observed latency</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="cpu" style="width: 12px; height: 12px; color: #10b981;"></i> Redis Server CPU Time</div>
        <div class="val" style="color: #6ee7b7;">${i} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Isolated server execution delay</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="network" style="width: 12px; height: 12px; color: #38bdf8;"></i> Network Overhead</div>
        <div class="val" style="color: #38bdf8;">${a} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Transit & TCP stack overhead</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Probe Throughput</div>
        <div class="val" style="color: #fbbf24;">${l} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        <div class="sub">${e.count} probes in ${e.duration_ms}ms</div>
      </div>
    </div>

    ${Je(e.breakdown)}
    ${Qe(e.percentiles)}
    ${Ye(e.histogram)}
  `,f()}async function lo(){if(j)return;const e=document.getElementById("btnRunCommandBench"),t=document.getElementById("benchmarkCommandResults"),n=document.getElementById("selCommandPreset")?.value||"read",i=parseInt(document.getElementById("selCommandRequests")?.value||"1000",10),a=parseInt(document.getElementById("selCommandConcurrency")?.value||"5",10),l=parseInt(document.getElementById("selCommandPipeline")?.value||"1",10);j=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Benchmarking (${i})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #f59e0b; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Running synthetic workload (${n})...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">
          Executing ${i.toLocaleString()} requests across ${a} workers (pipeline: ${l})
        </div>
      </div>
    `,f());try{const r=await fetch("/api/benchmark/commands",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset:n,requests:i,concurrency:a,pipeline:l})});if(!r.ok){const d=await r.json().catch(()=>({detail:"Benchmark request failed"}));throw new Error(d.detail||"Benchmark failed")}const s=await r.json();ro(s)}catch(r){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Benchmark Execution Blocked</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(r.message)}</div>
        </div>
      `,f())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Start Benchmark</span>',f())}}function ro(e){const t=document.getElementById("benchmarkCommandResults");if(!t||!e)return;const n=Number(e.ops_per_sec||0).toLocaleString(),i=Number(e.avg_latency_ms||0).toFixed(3),a=Number(e.percentiles?.p99_ms||0).toFixed(3),l=Number(e.cleaned_keys_count||0).toLocaleString();t.innerHTML=`
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Throughput</div>
        <div class="val" style="color: #fbbf24;">${n} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        <div class="sub">${e.total_requests.toLocaleString()} ops in ${e.duration_ms}ms</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="clock" style="width: 12px; height: 12px; color: #38bdf8;"></i> Avg Latency</div>
        <div class="val">${i} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Mean per-operation latency</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #ec4899;"></i> P99 Tail Latency</div>
        <div class="val" style="color: #f472b6;">${a} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">99% of requests below this</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="shield-check" style="width: 12px; height: 12px; color: #10b981;"></i> Cleaned Ephemeral Keys</div>
        <div class="val" style="color: #6ee7b7;">${l}</div>
        <div class="sub">Auto-unlinked via UNLINK</div>
      </div>
    </div>

    ${Je(e.breakdown)}
    ${Qe(e.percentiles)}
    ${Ye(e.histogram)}
  `,f()}async function co(){if(j)return;const e=document.getElementById("btnRunLuaBench"),t=document.getElementById("benchmarkLuaResults"),n=document.getElementById("txtLuaScript")?.value||"",i=document.getElementById("txtLuaKeys")?.value||"",a=document.getElementById("txtLuaArgs")?.value||"",l=document.getElementById("selLuaMode")?.value||"profile",r=parseInt(document.getElementById("selLuaIterations")?.value||"100",10),s=i.split(",").map(c=>c.trim()).filter(Boolean),d=a.split(",").map(c=>c.trim()).filter(Boolean);if(!n.trim()){E("Please enter a Lua script to execute and profile.","warning");return}j=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Executing Script...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Pre-loading and running Lua script on Redis server...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring precise microsecond server execution time</div>
      </div>
    `,f());try{const c=await fetch("/api/benchmark/lua",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({script:n,keys:s,args:d,mode:l,iterations:r,concurrency:5})});if(!c.ok){const y=await c.json().catch(()=>({detail:"Lua benchmark failed"}));throw new Error(y.detail||"Lua benchmark failed")}const m=await c.json();po(m)}catch(c){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Lua Script Execution Error</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(c.message)}</div>
        </div>
      `,f())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Execute & Profile</span>',f())}}function po(e){const t=document.getElementById("benchmarkLuaResults");if(!t||!e)return;const n=Number(e.server_duration_ms||0).toFixed(3),i=Number(e.duration_ms||0).toFixed(3);let a="";e.atomicity_warning?a=`
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
    `;let l="";e.mode==="benchmark"&&e.ops_per_sec&&(l=`
      <div class="benchmark-metrics-grid">
        <div class="benchmark-metric-card">
          <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Script Throughput</div>
          <div class="val" style="color: #fbbf24;">${Number(e.ops_per_sec).toLocaleString()} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        </div>
        <div class="benchmark-metric-card">
          <div class="label"><i data-lucide="clock" style="width: 12px; height: 12px; color: #38bdf8;"></i> Total Duration</div>
          <div class="val">${i} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        </div>
      </div>
      ${Qe(e.percentiles)}
      ${Ye(e.histogram)}
    `),t.innerHTML=`
    ${a}

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem;">
      <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.35rem;">
        Script Return Value (Evaluated on Server)
      </div>
      <pre style="margin: 0; background: #090d16; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: #38bdf8; font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto;">${p(String(e.result))}</pre>
    </div>

    ${Je(e.breakdown)}
    ${l}
  `,f()}async function mo(){if(j)return;const e=document.getElementById("btnRunClusterMatrix"),t=document.getElementById("benchmarkClusterResults");j=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Evaluating Matrix...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Probing primary cluster nodes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring cross-node latency and throughput matrix</div>
      </div>
    `,f());try{const n=await fetch("/api/benchmark/cluster-matrix");if(!n.ok){const a=await n.json().catch(()=>({detail:"Cluster matrix request failed"}));throw new Error(a.detail||"Cluster matrix failed")}const i=await n.json();uo(i)}catch(n){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Cluster Matrix Evaluation Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(n.message)}</div>
        </div>
      `,f())}finally{j=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i><span>Evaluate Cluster Latency Matrix</span>',f())}}function uo(e){const t=document.getElementById("benchmarkClusterResults");if(!t||!e)return;const n=Number(e.cluster_avg_latency_ms||0).toFixed(3),i=e.nodes||[];t.innerHTML=`
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #38bdf8;"></i> Cluster Avg Latency</div>
        <div class="val">${n} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Across ${i.length} primary node(s)</div>
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
          ${i.map(a=>`
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
  `,f()}function yo(){const e=document.getElementById("btnCloseBenchmarkModal");e&&e.addEventListener("click",io);const t=document.getElementById("btnOpenBenchmarkModal");t&&t.addEventListener("click",oo),document.querySelectorAll(".benchmark-tab-btn").forEach(c=>{c.addEventListener("click",()=>{const m=c.getAttribute("data-tab");m&&wt(m)})});const n=document.getElementById("btnRunProbe");n&&n.addEventListener("click",ao);const i=document.getElementById("btnRunCommandBench");i&&i.addEventListener("click",lo);const a=document.getElementById("selLuaPreset");a&&a.addEventListener("change",()=>{const c=a.value,m=xe[c];if(m){const y=document.getElementById("txtLuaScript"),g=document.getElementById("txtLuaKeys"),h=document.getElementById("txtLuaArgs");y&&(y.value=m.script),g&&(g.value=m.keys),h&&(h.value=m.args)}});const l=document.getElementById("selLuaMode"),r=document.getElementById("groupLuaBenchmarkControls");l&&r&&l.addEventListener("change",()=>{r.style.display=l.value==="benchmark"?"flex":"none"});const s=document.getElementById("btnRunLuaBench");s&&s.addEventListener("click",co);const d=document.getElementById("btnRunClusterMatrix");d&&d.addEventListener("click",mo)}let Ae=null;function me(e,t="Copied!",n=1500){if(!e)return;const i=e.innerHTML;e.classList.add("btn-copy-feedback","copied"),e.innerHTML=`<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><polyline points="20 6 9 17 4 12"></polyline></svg>${t}`,setTimeout(()=>{e.classList.remove("copied"),e.innerHTML=i},n)}function go(e){Ae=e}async function oe(e){o.activeDetailKey=e;const t=document.getElementById("keyDetailModal"),n=document.getElementById("detailKeyTitle"),i=document.getElementById("detailHeaderMeta"),a=document.getElementById("detailBodyContent"),l=document.getElementById("btnDeleteKeyFromDetail");l&&(l.style.display=o.lastStatus?.read_only?"none":""),n&&(n.textContent=e,n.title=e),i&&(i.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>'),a&&(a.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>'),t&&t.classList.add("active");try{let r=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(r.ok||(r=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!r.ok){let d="Key not found or could not be read";try{const c=await r.json();c&&c.detail&&(d=c.detail)}catch{}throw new Error(d)}const s=await r.json();o.activeDetailData=s,fo(s),vo(s)}catch(r){i&&(i.innerHTML='<span style="color: var(--accent-danger);">Error</span>'),a&&(a.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Failed to inspect key</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">${p(r.message)}</p>
        </div>
      `,f())}}function Be(){const e=document.getElementById("keyDetailModal");e&&e.classList.remove("active")}function fo(e){const t=document.getElementById("detailHeaderMeta");if(!t)return;const n=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",i=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;t.innerHTML=`
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
      <span style="font-family: var(--font-mono); color: ${e.ttl===-1?"var(--text-muted)":"var(--accent-warning)"}; font-weight: 600;">${i}</span>
      ${o.lastStatus?.read_only?`
        <span title="Read-Only Mode: TTL modification locked" style="font-size: 0.72rem; color: var(--text-muted); display: inline-flex; align-items: center; gap: 3px; margin-left: 0.25rem;">
          <i data-lucide="lock" style="width: 11px; height: 11px;"></i>
        </span>
      `:`
        <button type="button" class="btn btn-secondary" id="btnEditTtl" style="padding: 0.2rem 0.5rem; font-size: 0.72rem; margin-left: 0.25rem;">
          Edit TTL
        </button>
      `}
    </div>
  `,f();const a=document.getElementById("btnEditTtl");a&&a.addEventListener("click",()=>{ho(e.name,e.ttl)})}async function ho(e,t){if(o.lastStatus?.read_only){E("TTL modification is disabled in Read-Only mode.","warning");return}const n=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,t>0?t:"3600");if(n===null)return;const i=parseInt(n.trim(),10);if(isNaN(i)){E("Please enter a valid integer for TTL.","warning");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:i})})).ok)throw new Error("Failed to update TTL");E(`Updated TTL for "${e}"`,"success"),oe(e)}catch(a){E("Error updating TTL: "+a.message,"error")}}function vo(e){const t=document.getElementById("detailBodyContent");if(!t)return;const n=e.type.toLowerCase();if(n==="hash"){const i=e.fields||[],a=e.has_more_fields?Number(e.fields_cursor||0):0;o.hashFieldsState={key:e.name,cursor:a,fields:[...i],total:Number(e.length||i.length),match:null,loading:!1},t.innerHTML=`
      <div class="fields-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <input type="text" id="hashFieldSearchInput" class="field-search-input" placeholder="Filter fields (Enter: search all)" title="Filters loaded fields instantly; press Enter to search the whole hash on the server (HSCAN MATCH)">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="hashFieldCountText">${kt(i.length)}</span>
        </div>
        ${o.lastStatus?.read_only?"":`
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
            ${Ct(i)}
          </tbody>
        </table>
      </div>
      <div id="hashFieldsFooter" style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);"></div>
    `,f(),xo(e.name),Xe();return}if(e.is_json||n.includes("json")){const i=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${p(i)}</div>
    `,f();const a=document.getElementById("btnCopyJsonValue");a&&a.addEventListener("click",async()=>{await Y(i)?(E("JSON copied to clipboard","success"),me(a,"Copied!")):E("Failed to copy JSON to clipboard","error")});return}if(n==="string"){t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${p(e.value||"")}</div>
    `,f();const i=document.getElementById("btnCopyStringValue");i&&i.addEventListener("click",async()=>{await Y(e.value||"")?(E("Value copied to clipboard","success"),me(i,"Copied!")):E("Failed to copy value to clipboard","error")});return}if(n==="stream"){const i=Array.isArray(e.value)?e.value:[],a=s=>{if(!s||isNaN(s))return"";const d=Math.floor((Date.now()-s)/1e3);if(d<0)return"just now";if(d<60)return`${d}s ago`;const c=Math.floor(d/60);if(c<60)return`${c}m ago`;const m=Math.floor(c/60);return m<24?`${m}h ago`:`${Math.floor(m/24)}d ago`};t.innerHTML=`
      <div class="stream-meta-bar">
        <div class="stream-filter-box">
          <i data-lucide="search" style="width: 13px; height: 13px; color: var(--text-muted); flex-shrink: 0;"></i>
          <input type="text" id="streamFilterInput" placeholder="Filter stream entries by field name, value, or entry ID...">
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="streamFilterCountText">
            Showing ${i.length} of ${(e.length||i.length).toLocaleString()} entries
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
            ${i.length===0?`
              <tr><td colspan="2" style="text-align: center; color: var(--text-muted); padding: 2rem;">
                <i data-lucide="git-commit" style="width: 24px; height: 24px; color: var(--text-muted); margin-bottom: 0.5rem; display: inline-block;"></i>
                <div>Stream is empty (0 entries)</div>
              </td></tr>
            `:i.map((s,d)=>{const c=s.id||"",m=String(c).match(/^(\d{10,13})-/);let y="",g="";if(m)try{const k=parseInt(m[1],10);y=new Date(k).toLocaleString(),g=a(k)}catch{}const h=s.fields||{},w=Object.entries(h),C=w.map(([k,I])=>`
                <div class="stream-entry-pill" title="${p(k)}: ${p(String(I))}">
                  <span class="pill-key">${p(k)}:</span>
                  <span class="pill-val">${p(String(I))}</span>
                </div>
              `).join(""),b=`${c} ${w.map(([k,I])=>`${k} ${I}`).join(" ")}`.toLowerCase();return`
                <tr class="stream-entry-row" data-search="${p(b)}" style="border-bottom: 1px solid rgba(255,255,255,0.04);">
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
                    ${y?`
                      <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-sans); margin-top: 3px; display: flex; align-items: center; gap: 0.35rem;">
                        <span>${p(y)}</span>
                        ${g?`<span class="badge-env" style="font-size: 0.62rem; padding: 0.05rem 0.3rem;">${p(g)}</span>`:""}
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
    `,f(),t.querySelectorAll(".btn-copy-stream-id").forEach(s=>{s.addEventListener("click",async()=>{const d=s.getAttribute("data-copy")||"";await Y(d)&&(s.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px; color: #10b981;"></i>',f(),setTimeout(()=>{s.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',f()},1500))})}),t.querySelectorAll(".btn-copy-stream-json").forEach(s=>{s.addEventListener("click",async()=>{const d=parseInt(s.getAttribute("data-idx")||"-1",10);d>=0&&i[d]&&await Y(JSON.stringify(i[d],null,2))&&(s.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px; color: #10b981;"></i>',f(),setTimeout(()=>{s.innerHTML='<i data-lucide="code" style="width: 11px; height: 11px;"></i>',f()},1500))})});const l=document.getElementById("streamFilterInput"),r=document.getElementById("streamFilterCountText");l&&l.addEventListener("input",()=>{const s=l.value.trim().toLowerCase(),d=t.querySelectorAll(".stream-entry-row");let c=0;d.forEach(m=>{const y=m.getAttribute("data-search")||"";!s||y.includes(s)?(m.style.display="",c++):m.style.display="none"}),r&&(r.textContent=`Showing ${c} of ${i.length} entries`)});return}if(Array.isArray(e.value)){const i=n==="zset";t.innerHTML=`
      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 15%;">${i?"Score":"Index"}</th>
              <th style="width: 85%;">Element / Member</th>
            </tr>
          </thead>
          <tbody>
            ${e.value.map((a,l)=>`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
                  ${i?a.score:`[${l}]`}
                </td>
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem;">
                  ${p(i?a.member:String(a))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;return}t.innerHTML=`<div class="json-view-box">${p(String(e.value))}</div>`}function Ct(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(t=>`
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
        ${p(t.field)}
      </td>
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
        ${p(t.value)}
      </td>
      <td style="padding: 0.6rem 1rem; text-align: right;">
        ${o.lastStatus?.read_only?`
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
  `).join("")}function kt(e,t=null){const n=o.hashFieldsState,i=n?n.total:e,a=n&&n.match?`${e.toLocaleString()} matching fields loaded`:e<i?`${e.toLocaleString()} of ${i.toLocaleString()} fields loaded`:`${e.toLocaleString()} fields`;return t!==null?`${t.toLocaleString()} shown · ${a}`:a}function bo(e){return`*${e.replace(/[\\*?\[\]]/g,t=>`\\${t}`)}*`}function St(){const e=o.hashFieldsState,t=document.getElementById("hashFieldsTableBody"),n=document.getElementById("hashFieldCountText"),i=document.getElementById("hashFieldSearchInput");if(!e||!t)return;const a=i?i.value.trim().toLowerCase():"",l=a?e.fields.filter(r=>r.field.toLowerCase().includes(a)||r.value.toLowerCase().includes(a)):e.fields;t.innerHTML=Ct(l),n&&(n.textContent=kt(e.fields.length,a?l.length:null)),f(),Et(e.key),Xe()}function Xe(){const e=document.getElementById("hashFieldsFooter"),t=o.hashFieldsState;if(!e||!t)return;const n=t.cursor!==0,i=t.match?`Server-side filter: <code>${p(t.match)}</code> · <a href="#" id="btnClearHashMatch" style="color: var(--accent-primary);">clear</a>`:n?"Search applies to loaded fields. Press Enter to search all fields on the server.":"";e.innerHTML=`
    <span>${i}</span>
    ${n?`
      <button type="button" class="btn btn-secondary" id="btnLoadMoreHashFields" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" ${t.loading?"disabled":""}>
        <i data-lucide="${t.loading?"refresh-cw":"arrow-down-circle"}" ${t.loading?'class="spin"':""} style="width: 13px; height: 13px;"></i>
        ${t.loading?"Loading...":"Load More Fields"}
      </button>`:""}
  `,f();const a=document.getElementById("btnLoadMoreHashFields");a&&a.addEventListener("click",()=>De());const l=document.getElementById("btnClearHashMatch");l&&l.addEventListener("click",r=>{r.preventDefault();const s=document.getElementById("hashFieldSearchInput");s&&(s.value=""),De({reset:!0,match:null})})}async function De({reset:e=!1,match:t}={}){const n=o.hashFieldsState;if(!n||n.loading||!e&&n.cursor===0)return;const i=n.key,a=e?t:n.match;n.loading=!0,Xe();try{const l=new URLSearchParams({cursor:String(e?0:n.cursor),count:String(Zt)});a&&l.set("match",a);const r=await fetch(`/api/keys/${encodeURIComponent(i)}/hash/fields?${l}`);if(!r.ok){const c=await r.json().catch(()=>({}));throw new Error(c.detail||`Server error: ${r.status}`)}const s=await r.json();if(o.hashFieldsState!==n||o.activeDetailKey!==i)return;e&&(n.fields=[]);const d=new Set(n.fields.map(c=>c.field));for(const c of s.fields||[])d.has(c.field)||(d.add(c.field),n.fields.push(c));n.cursor=Number(s.cursor||0),n.total=Number(s.total??n.total),n.match=a||null}catch(l){E("Failed to load hash fields: "+l.message,"error")}finally{n.loading=!1,o.hashFieldsState===n&&St()}}function xo(e){const t=document.getElementById("hashFieldSearchInput");t&&(t.addEventListener("input",()=>St()),t.addEventListener("keydown",i=>{if(i.key!=="Enter"||!o.hashFieldsState)return;const a=t.value.trim(),l=o.hashFieldsState;l.cursor===0&&!l.match||De({reset:!0,match:a?bo(a):null})}));const n=document.getElementById("btnAddHashField");n&&n.addEventListener("click",async()=>{const i=prompt(`Enter field name for hash '${e}':`);if(!i)return;const a=prompt(`Enter value for field '${i}':`);if(a!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:i,value:a})})).ok)throw new Error("Failed to set field");E(`Added field "${i}" to hash`,"success"),oe(e)}catch(l){E("Error setting field: "+l.message,"error")}}),Et(e)}function Et(e){document.querySelectorAll(".btn-delete-hash-field").forEach(t=>{t.addEventListener("click",async()=>{const n=decodeURIComponent(t.getAttribute("data-field"));if(confirm(`Delete field '${n}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(n)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");E(`Deleted field "${n}"`,"success"),oe(e)}catch(i){E("Error: "+i.message,"error")}})})}function wo(e){if(!e)return null;const t=e.match(/filename\*\s*=\s*([\w-]*)'[^']*'([^;]+)/i);if(t)try{return decodeURIComponent(t[2].trim().replace(/^"|"$/g,""))}catch{}const n=e.match(/filename\s*=\s*"([^"]*)"/i)||e.match(/filename\s*=\s*([^;]+)/i);return n&&n[1].trim()?n[1].trim():null}function Ce(e,t){const n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=t,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function Lt(e,t,n=null){let i=wo(e.headers.get("content-disposition"))||t;const a=String(e.headers.get("x-export-format")||n||"").toLowerCase();a&&!i.toLowerCase().endsWith(`.${a}`)&&(i=`${i}.${a}`);const l=await e.blob();return Ce(l,i),i}async function Co(e,t){if(!e)return;const n=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Downloading...',f());try{const i=await fetch(`/api/keys/${encodeURIComponent(e)}/download`);if(!i.ok){const l=await i.json().catch(()=>({}));throw new Error(l.detail||`Server error: ${i.status}`)}const a=e.replace(/[^A-Za-z0-9._-]+/g,"_")||"redis_key";await Lt(i,a),i.headers.get("x-export-truncated")==="true"?E("Download was capped: only the first portion was included.","warning"):E(`Downloaded value for "${e}"`,"success")}catch(i){E("Download failed: "+i.message,"error")}finally{t&&(t.disabled=!1,t.innerHTML=n,f())}}function ko(){const e=document.getElementById("btnCloseDetailModal");e&&e.addEventListener("click",Be);const t=document.getElementById("keyDetailModal");t&&t.addEventListener("click",l=>{l.target===t&&Be()});const n=document.getElementById("btnCopyKeyName");n&&n.addEventListener("click",async()=>{o.activeDetailKey&&(await Y(o.activeDetailKey)?(E(`Copied key "${o.activeDetailKey}" to clipboard`,"success"),me(n,"Key Copied!")):E("Failed to copy key to clipboard","error"))});const i=document.getElementById("btnDownloadKeyValue");i&&i.addEventListener("click",()=>{Co(o.activeDetailKey,i)});const a=document.getElementById("btnDeleteKeyFromDetail");a&&a.addEventListener("click",()=>{o.activeDetailKey&&Ae&&Ae(o.activeDetailKey,()=>{Be()})})}let Ne=null;function So(e){Ne=e}function et(e,t){if(o.lastStatus?.read_only){E("Key deletion is disabled in Read-Only mode.","warning");return}o.pendingDeleteKey=e,o.pendingDeleteCallback=t;const n=document.getElementById("deleteKeyConfirmModal"),i=document.getElementById("deleteKeyTargetName"),a=document.getElementById("inputConfirmDelete"),l=document.getElementById("btnSubmitDeleteKey");i&&(i.textContent=e),a&&(a.value=""),l&&(l.disabled=!0),n&&n.classList.add("active"),a&&a.focus(),a&&(a.oninput=()=>{const r=a.value.trim().toUpperCase();l&&(l.disabled=r!=="CONFIRM"&&a.value.trim()!==e)}),l&&(l.onclick=async()=>{l.disabled=!0,l.textContent="Deleting...";try{const r=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),s=await r.json();if(!r.ok)throw new Error(s.detail||"Failed to delete key");E(`Key "${e}" deleted permanently`,"success"),n&&n.classList.remove("active"),o.pendingDeleteCallback&&o.pendingDeleteCallback()}catch(r){E("Error deleting key: "+r.message,"error")}finally{l.disabled=!1,l.textContent="Delete Permanently"}})}function Eo(){const e=document.getElementById("deleteKeyConfirmModal"),t=document.getElementById("btnCloseDeleteConfirmModal"),n=document.getElementById("btnCancelDeleteConfirm"),i=()=>e&&e.classList.remove("active");t&&t.addEventListener("click",i),n&&n.addEventListener("click",i);const a=document.getElementById("exportKeysModal"),l=document.getElementById("btnOpenExportModal"),r=document.getElementById("btnCloseExportModal"),s=document.getElementById("btnCancelExportModal"),d=document.getElementById("btnExecuteExport");if(l&&a){l.addEventListener("click",()=>{const u=document.getElementById("exportPatternDisplay"),v=document.getElementById("exportTypeDisplay"),x=document.getElementById("exportTtlDisplay"),L=document.getElementById("exportLoadedCount"),T=document.getElementById("exportScopeLoadedText"),$=o.currentTtlFilter||"all",_=$==="persistent"?"∞ No TTL (Persistent)":$==="expiring"?"⏳ Expiring Only":"All TTLs",N=$==="persistent"?o.keysTableRows.filter(B=>B.ttl_seconds===-1):$==="expiring"?o.keysTableRows.filter(B=>B.ttl_seconds>0):o.keysTableRows;u&&(u.textContent=o.currentPattern||"*"),v&&(v.textContent=o.currentType&&o.currentType!=="all"?o.currentType.toUpperCase():"All Types"),x&&(x.textContent=_),L&&(L.textContent=`${N.length} keys`),T&&(T.textContent=`${N.length} keys`),a.classList.add("active"),f()});const H=()=>a.classList.remove("active");r&&r.addEventListener("click",H),s&&s.addEventListener("click",H),d&&d.addEventListener("click",async()=>{const u=document.querySelector('input[name="exportFormatRadio"]:checked'),v=document.querySelector('input[name="exportScopeRadio"]:checked'),x=(u?u.value:"csv").toLowerCase(),L=v?v.value:"loaded",T=o.currentPattern||"*",$=o.currentType&&o.currentType!=="all"?o.currentType:"",_=o.currentTtlFilter&&o.currentTtlFilter!=="all"?o.currentTtlFilter:"",B=`redis_keys_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.${x}`;if(L==="all"){d.disabled=!0,d.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Exporting...',f();try{let R=`/api/keys/export?pattern=${encodeURIComponent(T)}&format=${x}`;$&&(R+=`&type=${encodeURIComponent($)}`),_&&(R+=`&ttl_filter=${encodeURIComponent(_)}`);const P=await fetch(R);if(!P.ok){const F=await P.json().catch(()=>({detail:"Export failed"}));throw new Error(F.detail||`Server error: ${P.status}`)}await Lt(P,B,x),E(`Exported keys matching "${o.currentPattern||"*"}"`,"success"),H()}catch(R){E(`Export failed: ${R.message}`,"error")}finally{d.disabled=!1,d.innerHTML='<i data-lucide="download" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Download',f()}return}const z=o.currentTtlFilter==="persistent"?o.keysTableRows.filter(R=>R.ttl_seconds===-1):o.currentTtlFilter==="expiring"?o.keysTableRows.filter(R=>R.ttl_seconds>0):o.keysTableRows;if(z.length===0){E("No keys matching filters loaded in browser to export.","warning");return}let K;if(x==="csv"){const R=`Key,Type,TTL_Seconds
`,P=z.map(F=>`"${(F.key||"").replace(/"/g,'""')}",${F.type||""},${F.ttl_seconds!==void 0?F.ttl_seconds:-1}`);K=new Blob([R+P.join(`
`)],{type:"text/csv;charset=utf-8;"})}else{const R=z.map(P=>P.key);K=new Blob([R.join(`
`)+`
`],{type:"text/plain;charset=utf-8;"})}Ce(K,B),H()})}const c=document.getElementById("bulkDeleteModal"),m=document.getElementById("btnOpenBulkDeleteModal"),y=document.getElementById("btnCloseBulkDeleteModal"),g=document.getElementById("btnCancelBulkDelete"),h=document.getElementById("btnConfirmBulkDelete"),w=document.getElementById("bdCountConfirmInput"),C=document.getElementById("bdProdConfirmInput"),b=document.getElementById("bdProdConfirmGroup"),k=document.getElementById("bulkDeleteProdBanner"),I=document.getElementById("bulkDeleteDryRunStatus"),D=document.getElementById("bulkDeleteDetails");let M=null;function U(){if(!M||!h)return;const H=String(M.matched_count),v=(w?.value||"").trim()===H&&M.matched_count>0;let x=!0;M.is_prod&&(x=(C?.value||"").trim().toUpperCase()==="PROD"),h.disabled=!(v&&x)}if(w&&w.addEventListener("input",U),C&&C.addEventListener("input",U),m&&c){m.addEventListener("click",async()=>{if(o.lastStatus?.read_only){E("Bulk Delete is disabled in Read-Only mode.","warning");return}const u=o.currentPattern||"*",v=o.currentType&&o.currentType!=="all"?o.currentType:null;M=null,w&&(w.value=""),C&&(C.value=""),h&&(h.disabled=!0),I&&(I.style.display="block"),D&&(D.style.display="none"),c.classList.add("active"),f();try{const x=await fetch("/api/keys/bulk-delete/dry-run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:u,type_filter:v})});if(!x.ok){const P=await x.json().catch(()=>({detail:"Dry run failed"}));throw new Error(P.detail||"Dry run failed")}const L=await x.json();M=L;const T=document.getElementById("bdPatternDisplay"),$=document.getElementById("bdTypeDisplay"),_=document.getElementById("bdCountDisplay"),N=document.getElementById("bdRequiredCountText");T&&(T.textContent=L.pattern),$&&($.textContent=L.type_filter?L.type_filter.toUpperCase():"All Types"),_&&(_.textContent=L.matched_count.toLocaleString()),N&&(N.textContent=String(L.matched_count)),L.is_prod?(k&&(k.style.display="block"),b&&(b.style.display="block")):(k&&(k.style.display="none"),b&&(b.style.display="none"));const B=document.getElementById("bdPerNodeBreakdown"),z=Object.entries(L.per_node_counts||{});B&&(z.length>1?(B.innerHTML="<strong>Per-node breakdown:</strong> "+z.map(([P,F])=>`${p(P)}: ${F.toLocaleString()}`).join(" &bull; "),B.style.display="block"):B.style.display="none");const K=document.getElementById("bdSampleKeysList"),R=document.getElementById("bdSampleKeysSection");K&&R&&(L.sample_keys&&L.sample_keys.length>0?(K.innerHTML=L.sample_keys.map(P=>`<div>${p(P)}</div>`).join(""),R.style.display="block"):R.style.display="none"),I&&(I.style.display="none"),D&&(D.style.display="flex"),f()}catch(x){I&&(I.innerHTML=`
            <div style="color: var(--accent-danger);">
              <i data-lucide="alert-circle" style="width: 20px; height: 20px; margin-bottom: 0.35rem; display: inline-block;"></i>
              <div>Failed to calculate dry-run: ${p(x.message)}</div>
            </div>
          `,f())}});const H=()=>c.classList.remove("active");y&&y.addEventListener("click",H),g&&g.addEventListener("click",H),h&&h.addEventListener("click",async()=>{if(M){h.disabled=!0,h.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlinking...',f();try{const u=await fetch("/api/keys/bulk-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:M.pattern,type_filter:M.type_filter,expected_count:M.matched_count,confirmed_count:parseInt(w.value.trim(),10),confirmed_env:C?C.value.trim():null})});if(!u.ok){const x=await u.json().catch(()=>({detail:"Bulk delete failed"}));throw new Error(x.detail||"Bulk delete failed")}const v=await u.json();E(`Bulk delete complete: ${v.message} (${v.duration_ms}ms)`,"success",4e3),H(),Ne&&Ne()}catch(u){E(`Bulk delete error: ${u.message}`,"error"),h.disabled=!1,h.innerHTML='<i data-lucide="trash-2" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlink Keys',f()}}})}}let Pe=null,ze="all";function Me(e,t=[":","/","."]){const n=[...t].sort((s,d)=>d.length-s.length),i=new Map,a=[];let l=0;for(let s=0;s<e.length;s++){const d=e[s],c=d.key||"";l+=c.length;let m=null;for(const h of n){const w=c.indexOf(h);if(w!==-1){m=c.slice(0,w+h.length);break}}const y=m||"(root)";i.has(y)||i.set(y,{prefix:y,count:0,types:new Set,sampleKeys:[],memoryEstimate:0});const g=i.get(y);g.count++,d.type&&g.types.add(d.type),g.sampleKeys.length<3&&g.sampleKeys.push(c),d.memory&&(g.memoryEstimate+=d.memory),/\s/.test(c)&&a.push({key:c,type:d.type,issue:"Whitespace in Key",severity:"warning",desc:"Key contains space or whitespace characters that complicate shell scripting"});for(const h of n)if(c.endsWith(h)){a.push({key:c,type:d.type,issue:"Trailing Delimiter",severity:"warning",desc:`Key ends with delimiter '${h}' leaving an empty child token`});break}(c.includes("::")||c.includes("//"))&&a.push({key:c,type:d.type,issue:"Double Delimiter",severity:"info",desc:"Key has repeated delimiters ('::' or '//') which may cause empty tree nodes"}),/[^\x20-\x7E]/.test(c)&&a.push({key:c,type:d.type,issue:"Non-ASCII Characters",severity:"warning",desc:"Key contains non-printable or binary bytes"}),c.length>128&&a.push({key:c,type:d.type,issue:"Long Key (>128 chars)",severity:"info",desc:`Key length is ${c.length} characters; long keys consume extra Redis dictionary RAM`}),!m&&e.length>20&&a.push({key:c,type:d.type,issue:"Missing Namespace",severity:"info",desc:"Key has no delimiter prefix and sits directly in the root namespace"})}const r=Array.from(i.values()).map(s=>({prefix:s.prefix,count:s.count,percentage:e.length>0?(s.count/e.length*100).toFixed(1):0,types:Array.from(s.types),sampleKeys:s.sampleKeys,memoryEstimate:s.memoryEstimate})).sort((s,d)=>d.count-s.count);return{totalAnalyzed:e.length,avgKeyLength:e.length>0?(l/e.length).toFixed(1):0,distinctNamespacesCount:r.length,topNamespace:r[0]||null,namespaces:r,anomalies:a.slice(0,100),totalAnomaliesCount:a.length,durationMs:.5}}function Lo(e){const t=document.getElementById("namespaceModal");if(!t)return;const n=document.getElementById("btnCloseNamespaceModal");n&&n.addEventListener("click",fe),t.addEventListener("click",s=>{s.target===t&&fe()});const i=document.getElementById("tabBtnNsDistribution"),a=document.getElementById("tabBtnNsHygiene"),l=document.getElementById("paneNsDistribution"),r=document.getElementById("paneNsHygiene");i&&a&&l&&r&&(i.addEventListener("click",()=>{i.classList.add("active"),a.classList.remove("active"),l.style.display="block",r.style.display="none"}),a.addEventListener("click",()=>{a.classList.add("active"),i.classList.remove("active"),r.style.display="block",l.style.display="none"})),t.addEventListener("click",s=>{const d=s.target.closest(".btn-ns-filter");if(d){const y=d.getAttribute("data-prefix");y&&(fe(),Bo(y));return}const c=s.target.closest(".btn-inspect-hygiene-key");if(c){const y=c.getAttribute("data-key");y&&(fe(),oe(y));return}const m=s.target.closest(".hygiene-cat-pill");m&&(ze=m.getAttribute("data-cat")||"all",document.querySelectorAll(".hygiene-cat-pill").forEach(g=>g.classList.remove("active")),m.classList.add("active"),Tt())})}function fe(){const e=document.getElementById("namespaceModal");e&&(e.style.display="none")}async function To(e){const t=document.getElementById("namespaceModal");if(!t)return;t.style.display="flex";const n=document.getElementById("nsEmptyState"),i=document.getElementById("nsContentWrapper");if(!o.keysTableRows||o.keysTableRows.length===0){n&&(n.style.display="block"),i&&(i.style.display="none");return}n&&(n.style.display="none"),i&&(i.style.display="flex");const a=performance.now();let l=null;if(e)try{l=await new Promise((r,s)=>{const d="ns_"+Date.now(),c=m=>{m.data&&m.data.id===d&&(e.removeEventListener("message",c),m.data.success?r(m.data.data):s(new Error(m.data.error)))};e.addEventListener("message",c),e.postMessage({id:d,type:"ANALYZE_NAMESPACES_AND_HYGIENE",payload:{keys:o.keysTableRows,delimiters:o.activeTreeDelimiters||[":","/","."]}}),setTimeout(()=>{e.removeEventListener("message",c),r(Me(o.keysTableRows,o.activeTreeDelimiters))},1500)})}catch{l=Me(o.keysTableRows,o.activeTreeDelimiters)}else l=Me(o.keysTableRows,o.activeTreeDelimiters);l.durationMs||(l.durationMs=performance.now()-a),Pe=l,$o(l),Io(l),Tt()}function $o(e){const t=e.durationMs<1?"< 1ms":`${e.durationMs.toFixed(1)}ms`,n=document.getElementById("nsStudioSubtitle");n&&(n.textContent=`Analyzed ${e.totalAnalyzed.toLocaleString()} loaded keys • 0 Redis operations (${t})`);const i=document.getElementById("kpiNsTotalKeys");i&&(i.textContent=e.totalAnalyzed.toLocaleString());const a=document.getElementById("kpiNsCount");a&&(a.textContent=e.distinctNamespacesCount.toLocaleString());const l=document.getElementById("kpiNsTop");l&&(e.topNamespace?l.innerHTML=`<span style="color: var(--accent-primary); font-family: var(--font-mono);">${p(e.topNamespace.prefix)}</span> <span style="font-size: 0.72rem; color: var(--text-muted);">(${e.topNamespace.percentage}%)</span>`:l.textContent="—");const r=document.getElementById("kpiNsHygiene");r&&(e.totalAnomaliesCount===0?r.innerHTML='<span style="color: #10b981;">0 Issues (Clean)</span>':r.innerHTML=`<span style="color: var(--accent-warning);">${e.totalAnomaliesCount.toLocaleString()} Flags</span>`);const s=document.getElementById("badgeNsDistCount");s&&(s.textContent=e.distinctNamespacesCount);const d=document.getElementById("badgeNsHygCount");d&&(d.textContent=e.totalAnomaliesCount,d.style.background=e.totalAnomaliesCount>0?"rgba(245, 158, 11, 0.2)":"rgba(16, 185, 129, 0.2)",d.style.color=e.totalAnomaliesCount>0?"var(--accent-warning)":"#10b981")}function Io(e){const t=document.getElementById("tbodyNsDistribution");if(!t)return;if(!e.namespaces||e.namespaces.length===0){t.innerHTML='<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">No namespaces found</td></tr>';return}const n=e.namespaces[0]?.count||1;t.innerHTML=e.namespaces.map(i=>{const a=Math.max(4,Math.round(i.count/n*100)),l=(i.types||[]).map(r=>`<span class="type-badge ${r}">${p(r)}</span>`).join(" ");return`
      <tr>
        <td style="font-family: var(--font-mono); font-weight: 600; color: #38bdf8;">
          ${p(i.prefix)}
        </td>
        <td style="font-weight: 700;">${i.count.toLocaleString()}</td>
        <td style="width: 28%;">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <div style="flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;">
              <div style="width: ${a}%; height: 100%; background: linear-gradient(90deg, #38bdf8, #818cf8); border-radius: 3px;"></div>
            </div>
            <span style="font-size: 0.75rem; font-weight: 600; min-width: 42px; text-align: right;">${i.percentage}%</span>
          </div>
        </td>
        <td>${l||'<span style="color: var(--text-muted);">—</span>'}</td>
        <td style="text-align: right;">
          <button type="button" class="btn btn-secondary btn-ns-filter" data-prefix="${p(i.prefix)}" title="Filter table by this namespace" style="padding: 0.25rem 0.6rem; font-size: 0.72rem;">
            🔍 Filter
          </button>
        </td>
      </tr>
    `}).join("")}function Tt(){const e=document.getElementById("tbodyNsHygiene");if(!e||!Pe)return;let t=Pe.anomalies||[];if(ze!=="all"&&(t=t.filter(n=>n.issue.toLowerCase().includes(ze.toLowerCase()))),t.length===0){e.innerHTML=`
      <tr>
        <td colspan="4" style="text-align: center; color: #10b981; padding: 2.5rem 1rem;">
          <div style="font-weight: 600; font-size: 0.9rem;">✨ Clean Keyspace! No hygiene anomalies detected.</div>
          <div style="color: var(--text-muted); font-size: 0.75rem; margin-top: 0.25rem;">
            All loaded keys follow standard naming conventions without illegal spaces, trailing separators, or excessive length.
          </div>
        </td>
      </tr>
    `;return}e.innerHTML=t.map(n=>{const a=n.severity==="warning"?"background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3);":"background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3);";return`
      <tr>
        <td style="font-family: var(--font-mono); font-size: 0.76rem; max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${p(n.key)}">
          ${p(n.key)}
        </td>
        <td>
          <span style="font-size: 0.7rem; font-weight: 600; padding: 0.15rem 0.45rem; border-radius: 4px; ${a}">
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
    `}).join("")}function Bo(e){const t=document.getElementById("keySearchInput");if(!t)return;const n=e==="(root)"?"":e;t.value=n?`${n}*`:"*",t.dispatchEvent(new Event("input",{bubbles:!0}))}let $t=null;try{$t=new Worker(new URL("/assets/keys-worker-CCRILazq.js",import.meta.url),{type:"module"})}catch(e){console.warn("Keys Web Worker fallback to main thread:",e)}async function q(){o.isScanning=!1,o.currentScanEpoch++;const e=o.currentScanEpoch;o.currentCursor=0,o.scanComplete=!1,o.totalScanned=0,o.keysTableRows=[],o.loadedKeysSet.clear(),o.treeInitialized=!1,o.treeExpandedPaths.clear(),o.isMemoryCeilingReached=!1;const t=document.getElementById("memoryLimitBanner");t&&(t.style.display="none");const n=document.getElementById("emptyWorkspaceState"),i=document.getElementById("gridViewerContainer");n&&(n.style.display="none"),i&&(i.style.display="block"),At(),await It(e)}function ie(){const e=document.getElementById("btnToggleAutoRefresh"),t=document.getElementById("autoRefreshStatusText"),n=document.getElementById("autoRefreshIntervalSelect");if(!(!e||!t))if(o.isAutoRefreshActive){e.classList.add("active");const i=o.autoRefreshRemainingSec>=60?`${Math.floor(o.autoRefreshRemainingSec/60)}m ${o.autoRefreshRemainingSec%60}s`:`${o.autoRefreshRemainingSec}s`;e.title=`Auto-refresh active (Pattern: "${o.currentPattern||"*"}"). Refreshing in ${i}. Click to pause.`,t.textContent=`Auto: ${i}`,n&&(n.value=String(o.autoRefreshIntervalSec))}else{e.classList.remove("active");const i=o.autoRefreshIntervalSec>=60?`${Math.floor(o.autoRefreshIntervalSec/60)}m`:`${o.autoRefreshIntervalSec}s`;e.title=`Click to watch keys matching pattern "${o.currentPattern||"*"}" every ${i}`,t.textContent="Auto: Off",n&&(n.value=String(o.autoRefreshIntervalSec))}}function he(){o.autoRefreshRemainingSec=o.autoRefreshIntervalSec,ie()}function Mo(){o.isAutoRefreshActive=!0,o.autoRefreshRemainingSec=o.autoRefreshIntervalSec,ie(),o.autoRefreshTimer&&clearInterval(o.autoRefreshTimer),o.autoRefreshTimer=setInterval(async()=>{if(!o.isAutoRefreshActive)return;const e=document.querySelector(".modal-backdrop.active");document.hidden||e||(o.autoRefreshRemainingSec--,o.autoRefreshRemainingSec<=0?(o.autoRefreshRemainingSec=o.autoRefreshIntervalSec,ie(),o.cachedConnections.some(n=>n.is_connected)&&!o.isScanning&&await q()):ie())},1e3)}function _o(){o.isAutoRefreshActive=!1,o.autoRefreshTimer&&(clearInterval(o.autoRefreshTimer),o.autoRefreshTimer=null),o.autoRefreshRemainingSec=o.autoRefreshIntervalSec,ie()}function Ro(){o.isAutoRefreshActive?_o():Mo()}function tt(e){if(e==null)return!0;const t=String(e).trim();if(t===""||t==="0")return!0;if(t.startsWith("{"))try{return Object.values(JSON.parse(t)).every(n=>Number(n)===0)}catch{return!1}return!1}function ct(e){const t=String(e??"").trim();if(t.startsWith("{"))try{const n=Object.values(JSON.parse(t));return`${n.filter(a=>Number(a)!==0).length}/${n.length} nodes scanning`}catch{return""}return""}async function It(e=null){if(o.isScanning||o.scanComplete)return;const t=o.maxLoadedKeysLimit||1e5;if(o.keysTableRows.length>=t){o.isMemoryCeilingReached=!0,pe();return}const n=e!==null?e:o.currentScanEpoch;o.isScanning=!0,pe();try{const i=`/api/keys?pattern=${encodeURIComponent(o.currentPattern)}&cursor=${encodeURIComponent(String(o.currentCursor??"0"))}&count=${o.scanBatchSize}${o.currentType!=="all"?`&type=${encodeURIComponent(o.currentType)}`:""}`,a=await fetch(i);if(!a.ok)throw new Error("Failed to scan keys");const l=await a.json();if(n!==o.currentScanEpoch)return;o.currentCursor=l.cursor,o.scanComplete=tt(o.currentCursor),o.dbTotalKeys=l.total_in_db;const r=Math.max(0,t-o.keysTableRows.length),d=(l.keys||[]).filter(m=>o.loadedKeysSet.has(m.name)?!1:(o.loadedKeysSet.add(m.name),!0)).slice(0,r).map(m=>({key:m.name,type:m.type,ttl_seconds:m.ttl,status:m.ttl===-1?"Persistent":m.ttl===-2?"Expired":`Expires in ${m.ttl}s`}));d.length>0&&o.keysTableRows.push(...d),o.keysTableRows.length>=t&&(o.isMemoryCeilingReached=!0),At(),o.totalScanned=o.loadedKeysSet.size;const c=document.getElementById("tabBadgeKeys");c&&(c.textContent=o.totalScanned.toLocaleString())}catch(i){console.error("Scan error:",i)}finally{n===o.currentScanEpoch&&(o.isScanning=!1,pe())}}const ve=[":","/",".","-","_"],pt={auto:[":","/","."],":":[":"],"/":["/"],".":["."],"-":["-"],_:["_"]};function Bt(){if(o.lastStatus?.connection_id)return o.lastStatus.connection_id;const e=o.cachedConnections?.find(n=>n.is_selected);if(e)return e.id;const t=o.cachedConnections?.find(n=>n.is_connected);return t?t.id:null}function we(e){if(!Array.isArray(e)||e.length===0)return"custom";const t=new Set(e);if(t.size===3&&t.has(":")&&t.has("/")&&t.has("."))return"auto";if(t.size===1){if(t.has(":"))return":";if(t.has("/"))return"/";if(t.has("."))return".";if(t.has("-"))return"-";if(t.has("_"))return"_"}return"custom"}function be(e=null){const t=e||Bt();t&&localStorage.setItem(`redis_insight_tree_delimiters_${t}`,JSON.stringify(o.activeTreeDelimiters)),localStorage.setItem("redis_insight_tree_delimiters_global",JSON.stringify(o.activeTreeDelimiters)),localStorage.setItem("redis_insight_tree_delimiter_preset",o.treeDelimiterPreset),localStorage.setItem("redis_insight_custom_delimiters",JSON.stringify(o.customTreeDelimiters))}function Ao(e=null){const t=e||Bt();let n=null;if(t){const a=localStorage.getItem(`redis_insight_tree_delimiters_${t}`);if(a)try{const l=JSON.parse(a);Array.isArray(l)&&l.length>0&&(n=l)}catch{}}if(!n){const a=localStorage.getItem("redis_insight_tree_delimiters_global");if(a)try{const l=JSON.parse(a);Array.isArray(l)&&l.length>0&&(n=l)}catch{}}Array.isArray(n)&&n.length>0?o.activeTreeDelimiters=n:o.activeTreeDelimiters=[":","/","."];const i=localStorage.getItem("redis_insight_custom_delimiters");if(i)try{const a=JSON.parse(i);Array.isArray(a)&&(o.customTreeDelimiters=a)}catch{}o.treeDelimiterPreset=we(o.activeTreeDelimiters)}function Do(e,t=o.activeTreeDelimiters){if(!e||!t||t.length===0)return{segments:[],leafName:e||""};const n=[...t].filter(r=>typeof r=="string"&&r.length>0).sort((r,s)=>s.length-r.length);if(n.length===0)return{segments:[],leafName:e};const i=[];let a=0;for(;a<e.length;){let r=-1,s=null;for(const c of n){const m=e.indexOf(c,a);m!==-1&&(r===-1||m<r?(r=m,s=c):m===r&&c.length>(s?s.length:0)&&(s=c))}if(r===-1)break;const d=e.slice(a,r);(d!==""||i.length>0)&&i.push({name:d,delim:s}),a=r+s.length}const l=e.slice(a);return i.length===0?{segments:[],leafName:e}:{segments:i,leafName:l||"(empty)"}}function No(e,t=o.activeTreeDelimiters){const n={id:"__root__",name:"Root",fullPrefix:"",delimiter:"",depth:-1,folders:new Map,keys:[],totalKeyCount:0},i=Array.isArray(t)?t:typeof t=="string"&&t!=="auto"?[t]:o.activeTreeDelimiters||[":","/","."];for(const l of e){const r=l.key||"",{segments:s,leafName:d}=Do(r,i);if(s.length===0){n.keys.push({...l,leafName:r});continue}let c=n,m="";for(let y=0;y<s.length;y++){const{name:g,delim:h}=s[y];m+=g+h;const w=m;c.folders.has(g)||c.folders.set(g,{id:w,name:g,fullPrefix:w,delimiter:h,depth:y,folders:new Map,keys:[],totalKeyCount:0}),c=c.folders.get(g)}c.keys.push({...l,leafName:d||"(empty)"})}function a(l){let r=l.keys.length;l.keys.sort((d,c)=>(d.leafName||d.key).localeCompare(c.leafName||c.key));const s=new Map([...l.folders.entries()].sort((d,c)=>d[0].localeCompare(c[0])));l.folders=s;for(const d of l.folders.values())a(d),r+=d.totalKeyCount;l.totalKeyCount=r}return a(n),n}function Mt(e,t){if(e.name.toLowerCase().includes(t)||e.fullPrefix.toLowerCase().includes(t))return!0;for(const n of e.keys)if(n.key.toLowerCase().includes(t)||n.leafName&&n.leafName.toLowerCase().includes(t))return!0;for(const n of e.folders.values())if(Mt(n,t))return!0;return!1}function Po(e,t="i"){let n="^";for(let i=0;i<e.length;i++){const a=e[i];a==="*"?n+=".*":a==="?"?n+=".":/[.\\+*?[^\]$(){}=!<>|:-]/.test(a)?n+="\\"+a:n+=a}return n+="$",new RegExp(n,t)}function _t(e){const t=(e||"").trim();if(!t||t==="*")return()=>!0;if(t.startsWith("/")&&t.lastIndexOf("/")>0)try{const i=t.lastIndexOf("/"),a=t.slice(1,i),l=t.slice(i+1)||"i",r=new RegExp(a,l);return s=>r.test(s)}catch{}if(t.includes("*")||t.includes("?"))try{const i=Po(t,"i");return a=>i.test(a)}catch{}if(/[\^$|()\\[\\]{}]/.test(t))try{const i=new RegExp(t,"i");return a=>i.test(a)}catch{}const n=t.toLowerCase();return i=>i.toLowerCase().includes(n)}function Rt(){const e=performance.now();let t=o.keysTableRows||[];const n=(o.localFilterQuery||"").trim();if(n&&n!=="*"){const l=_t(n);t=t.filter(r=>l(r.key))}if(o.currentType&&o.currentType!=="all"){const l=o.currentType.toLowerCase();t=t.filter(r=>(r.type||"").toLowerCase()===l)}const i=(o.currentTtlFilter||"all").toLowerCase();i==="expiring"?t=t.filter(l=>l.ttl_seconds>0):(i==="persistent"||i==="no-ttl")&&(t=t.filter(l=>l.ttl_seconds===-1));const a=(performance.now()-e).toFixed(1);return o.localMatchCount=t.length,o.localMatchDurationMs=a,t}const de=44,mt=20;function _e(e){const t=encodeURIComponent(e.key),i=!!o.lastStatus?.read_only?`<span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
         <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
       </span>`:`<button type="button" class="btn-icon danger btn-delete-key-table" data-key="${t}" title="Delete key">
         <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
       </button>`,a=e.ttl_seconds===-1?`<span class="badge-persistent" style="background: rgba(148, 163, 184, 0.12); color: #94a3b8; border: 1px solid rgba(148, 163, 184, 0.25); padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">
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
        ${a}
      </td>
      <td style="padding: 0.65rem 1rem; text-align: right;" onclick="event.stopPropagation()">
        ${i}
      </td>
    </tr>
  `}function zo(){const e=document.getElementById("gridViewerContainer");if(!e)return;const t=Rt();if(t.length===0){if(o.isScanning&&o.keysTableRows.length===0){e.innerHTML=`
        <div class="table-loading-card">
          <div class="spinner-ring"></div>
          <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">Scanning Keyspace...</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">Fetching keys matching "<code>${p(o.currentPattern)}</code>" from Redis</div>
        </div>
      `;return}if(o.keysTableRows.length>0){const g=(o.localFilterQuery||"").trim();if(g&&g!=="*"){e.innerHTML=`
          <div style="padding: 3.5rem 1.5rem; text-align: center; color: var(--text-muted);">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 0.85rem;">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--accent-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </div>
            <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem; margin-bottom: 0.35rem;">
              No loaded keys match "<code>${p(g)}</code>"
            </div>
            <p style="font-size: 0.8rem; color: var(--text-muted); max-width: 480px; margin: 0 auto 1.25rem; line-height: 1.5;">
              Searched across all <strong>${o.keysTableRows.length.toLocaleString()}</strong> keys currently loaded in browser memory.
              The key may exist in the Redis cluster but has not been loaded yet.
            </p>
            <button type="button" class="btn btn-primary" id="btnFallbackRemoteScan" style="padding: 0.45rem 1.15rem; font-size: 0.82rem;">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 5px;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span>Scan Redis Cluster for "${p(g)}"</span>
            </button>
          </div>
        `;const h=document.getElementById("btnFallbackRemoteScan");h&&h.addEventListener("click",()=>{o.searchScope="remote",o.currentPattern=g.includes("*")?g:`${g}*`;const w=document.getElementById("keySearchInput");w&&(w.value=o.currentPattern),q()});return}e.innerHTML=`
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${p(o.currentTtlFilter)}</strong>" or Type filter "<strong>${p(o.currentType)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${o.keysTableRows.length.toLocaleString()} total keys loaded in browser memory)</span>
        </div>
      `;return}const y=!o.scanComplete&&tt(o.currentCursor);e.innerHTML=o.scanComplete?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${p(o.currentPattern)}</code>".
      </div>
    `:y?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${p(o.currentPattern)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${p(o.currentPattern)}</code>" in the part of the keyspace scanned so far.<br>
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
            ${t.map(_e).join("")}
          </tbody>
        </table>
      </div>
    `;return}const a=n*de,l=Math.min(n,60);e.innerHTML=`
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
            ${t.slice(0,l).map(_e).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;const r=document.getElementById("keysTableViewport"),s=document.getElementById("virtualScrollContent"),d=document.getElementById("keysTableBody");let c=0,m=l;r&&s&&d&&r.addEventListener("scroll",()=>{const y=r.scrollTop,g=r.clientHeight||600,h=Math.max(0,Math.floor(y/de)-mt),w=Math.ceil(g/de),C=Math.min(n,h+w+mt*2);if(h!==c||C!==m){c=h,m=C;const b=h*de;s.style.top=`${b}px`,d.innerHTML=t.slice(h,C).map(_e).join("")}},{passive:!0})}function J(){const e=document.getElementById("gridViewerContainer");if(!e)return;const t=Rt();if(t.length===0){if(o.keysTableRows.length>0){e.innerHTML=`
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${p(o.currentTtlFilter)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${o.keysTableRows.length.toLocaleString()} total keys scanned so far)</span>
        </div>
      `;return}const u=!o.scanComplete&&tt(o.currentCursor);e.innerHTML=o.scanComplete?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${p(o.currentPattern)}</code>".
      </div>
    `:u?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${p(o.currentPattern)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${p(o.currentPattern)}</code>" in the part of the keyspace scanned so far.<br>
        The scan is not finished — click <strong>Load More</strong> to keep scanning.
      </div>
    `;return}const n=No(t,o.activeTreeDelimiters);if(!o.treeInitialized&&o.treeExpandedPaths.size===0){for(const u of n.folders.values())o.treeExpandedPaths.add(u.id);o.treeInitialized=!0}function i(u){let v=u.folders.size;for(const x of u.folders.values())v+=i(x);return v}const a=i(n),l=!!o.currentTreeFilterQuery.trim(),r=o.currentTreeFilterQuery.trim().toLowerCase();function s(u,v){const x=encodeURIComponent(u.key);return`
      <div class="tree-node tree-leaf key-row" data-key="${x}" style="padding-left: ${v*20+26}px;">
        <div class="tree-node-content">
          <div class="tree-key-icon">
            <i data-lucide="key" style="width: 13px; height: 13px;"></i>
          </div>
          <span class="tree-key-name btn-inspect-key" data-key="${x}" title="${p(u.key)}">
            ${p(u.leafName||u.key)}
          </span>
          <span class="badge-db" style="margin-left: 0.35rem; font-size: 0.68rem; text-transform: uppercase;">${p(u.type)}</span>
          ${u.ttl_seconds===-1?'<span class="badge-persistent" style="margin-left: 0.35rem; font-size: 0.65rem; padding: 0.08rem 0.35rem; border-radius: 4px; background: rgba(148, 163, 184, 0.12); color: #94a3b8; border: 1px solid rgba(148, 163, 184, 0.25); font-weight: 500;">∞ Persistent</span>':`<span class="tree-key-ttl" style="margin-left: 0.35rem; background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 4px; padding: 0.08rem 0.35rem; font-size: 0.65rem; font-weight: 600;" title="Expires in ${u.ttl_seconds}s">⏳ ${u.ttl_seconds}s</span>`}
          <div class="tree-key-actions" onclick="event.stopPropagation()">
            ${o.lastStatus?.read_only?`
              <span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
                <i data-lucide="lock" style="width: 13px; height: 13px;"></i>
              </span>
            `:`
              <button type="button" class="btn-icon danger btn-delete-key-table" data-key="${x}" title="Delete key">
                <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
              </button>
            `}
          </div>
        </div>
      </div>
    `}function d(u,v){if(l&&!Mt(u,r))return"";const x=l?!0:o.treeExpandedPaths.has(u.id),L=encodeURIComponent(u.id);let T="";if(x){for(const $ of u.folders.values())T+=d($,v+1);for(const $ of u.keys)l&&!$.key.toLowerCase().includes(r)&&!($.leafName&&$.leafName.toLowerCase().includes(r))||(T+=s($,v+1))}return`
      <div class="tree-folder-group" data-folder-id="${L}">
        <div class="tree-node tree-folder" data-folder-id="${L}" style="padding-left: ${v*20+8}px;">
          <div class="tree-node-content">
            <button type="button" class="tree-toggle-btn" title="${x?"Collapse":"Expand"}">
              <i data-lucide="${x?"chevron-down":"chevron-right"}" style="width: 14px; height: 14px;"></i>
            </button>
            <div class="tree-folder-icon">
              <i data-lucide="${x?"folder-open":"folder"}" style="width: 15px; height: 15px;"></i>
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
        <div class="tree-children" style="display: ${x?"block":"none"};">
          ${T}
        </div>
      </div>
    `}let c="";if(n.keys.length>0){const u=l?n.keys.filter(v=>v.key.toLowerCase().includes(r)||v.leafName&&v.leafName.toLowerCase().includes(r)):n.keys;u.length>0&&(c=`
        <div class="tree-root-keys-section">
          <div class="tree-root-keys-header" style="padding-left: 10px;">
            <span class="tree-root-keys-title">ROOT KEYS (NO DELIMITER)</span>
            <span class="tree-count-badge">${u.length.toLocaleString()} ${u.length===1?"key":"keys"}</span>
          </div>
          <div class="tree-root-keys-list">
            ${u.map(v=>s(v,0)).join("")}
          </div>
        </div>
      `)}const y=[...ve,...(o.customTreeDelimiters||[]).filter(u=>!ve.includes(u))].map(u=>{const v=(o.activeTreeDelimiters||[]).includes(u),x=!ve.includes(u);return`
      <span class="tree-delim-chip ${v?"active":""} ${x?"custom":""}" data-delim="${p(u)}" title="${v?"Click to disable":"Click to enable"} delimiter '${p(u)}'">
        <span class="delim-char">${p(u)}</span>
        ${x?`<button type="button" class="tree-delim-chip-remove" data-remove-delim="${p(u)}" title="Remove custom delimiter">&times;</button>`:""}
      </span>
    `}).join("");e.innerHTML=`
    <div class="tree-view-wrapper">
      <div class="tree-toolbar">
        <div class="tree-toolbar-left">
          <div class="tree-delimiter-control">
            <label for="treeDelimiterSelect" class="tree-control-label">Delimiters:</label>
            <select id="treeDelimiterSelect" class="tree-select" title="Grouping delimiter convention">
              <option value="auto"${o.treeDelimiterPreset==="auto"?" selected":""}>Auto (:, /, .)</option>
              <option value=":"${o.treeDelimiterPreset===":"?" selected":""}>: (Colon)</option>
              <option value="/"${o.treeDelimiterPreset==="/"?" selected":""}>/ (Slash)</option>
              <option value="."${o.treeDelimiterPreset==="."?" selected":""}>. (Dot)</option>
              <option value="-"${o.treeDelimiterPreset==="-"?" selected":""}>- (Dash)</option>
              <option value="_"${o.treeDelimiterPreset==="_"?" selected":""}>_ (Underscore)</option>
              <option value="custom"${o.treeDelimiterPreset==="custom"?" selected":""}>Custom (${(o.activeTreeDelimiters||[]).length} active)</option>
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
          <div class="tree-summary-pill" id="treeSummaryPill" title="${a.toLocaleString()} total namespaces parsed">
            ${a.toLocaleString()} ${a===1?"Namespace":"Namespaces"}
          </div>
        </div>
        <div class="tree-toolbar-right">
          <div class="tree-filter-box">
            <i data-lucide="search" style="width: 12px; height: 12px; color: var(--text-muted); flex-shrink: 0;"></i>
            <input type="text" id="treeFilterInput" class="tree-filter-input" placeholder="Filter loaded tree..." value="${p(o.currentTreeFilterQuery)}">
            ${o.currentTreeFilterQuery?`
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
        ${[...n.folders.values()].map(u=>d(u,0)).join("")}
        ${c}
      </div>
    </div>
  `,f(),e.querySelectorAll(".tree-folder").forEach(u=>{u.addEventListener("click",v=>{if(v.target.closest(".tree-filter-prefix-btn"))return;const x=decodeURIComponent(u.getAttribute("data-folder-id"));o.treeExpandedPaths.has(x)?o.treeExpandedPaths.delete(x):o.treeExpandedPaths.add(x),J()})}),e.querySelectorAll(".tree-filter-prefix-btn").forEach(u=>{u.addEventListener("click",v=>{v.stopPropagation();const x=u.getAttribute("data-prefix"),L=document.getElementById("keySearchInput");L&&x&&(L.value=x+"*",o.currentPattern=x+"*",q())})});const g=document.getElementById("treeDelimiterSelect");g&&g.addEventListener("change",u=>{const v=u.target.value;v==="custom"?o.treeDelimiterPreset="custom":pt[v]&&(o.activeTreeDelimiters=[...pt[v]],o.treeDelimiterPreset=v),be(),o.treeExpandedPaths.clear(),o.treeInitialized=!1,J()}),e.querySelectorAll(".tree-delim-chip").forEach(u=>{u.addEventListener("click",v=>{if(v.target.closest(".tree-delim-chip-remove"))return;const x=u.getAttribute("data-delim");x&&(o.activeTreeDelimiters.includes(x)?o.activeTreeDelimiters=o.activeTreeDelimiters.filter(L=>L!==x):o.activeTreeDelimiters.push(x),o.treeDelimiterPreset=we(o.activeTreeDelimiters),be(),o.treeExpandedPaths.clear(),o.treeInitialized=!1,J())})}),e.querySelectorAll(".tree-delim-chip-remove").forEach(u=>{u.addEventListener("click",v=>{v.stopPropagation();const x=u.getAttribute("data-remove-delim");x&&(o.customTreeDelimiters=(o.customTreeDelimiters||[]).filter(L=>L!==x),o.activeTreeDelimiters=(o.activeTreeDelimiters||[]).filter(L=>L!==x),o.treeDelimiterPreset=we(o.activeTreeDelimiters),be(),o.treeExpandedPaths.clear(),o.treeInitialized=!1,J())})});const h=document.getElementById("btnAddDelimToggle"),w=document.getElementById("treeCustomDelimPopover"),C=document.getElementById("customDelimInput"),b=document.getElementById("btnConfirmAddDelim"),k=document.getElementById("btnCancelAddDelim");h&&w&&h.addEventListener("click",u=>{u.stopPropagation();const v=w.style.display!=="none";w.style.display=v?"none":"flex",!v&&C&&(C.value="",C.focus())});function I(){if(!C)return;const u=C.value.trim();u&&(!o.customTreeDelimiters.includes(u)&&!ve.includes(u)&&o.customTreeDelimiters.push(u),o.activeTreeDelimiters.includes(u)||o.activeTreeDelimiters.push(u),o.treeDelimiterPreset=we(o.activeTreeDelimiters),be(),o.treeExpandedPaths.clear(),o.treeInitialized=!1,J())}b&&b.addEventListener("click",u=>{u.stopPropagation(),I()}),C&&C.addEventListener("keydown",u=>{u.key==="Enter"?(u.preventDefault(),I()):u.key==="Escape"&&w&&(w.style.display="none")}),k&&k.addEventListener("click",u=>{u.stopPropagation(),w&&(w.style.display="none")});const D=document.getElementById("btnExpandAllTree");D&&D.addEventListener("click",()=>{function u(v){for(const x of v.folders.values())o.treeExpandedPaths.add(x.id),u(x)}u(n),J()});const M=document.getElementById("btnCollapseAllTree");M&&M.addEventListener("click",()=>{o.treeExpandedPaths.clear(),J()});const U=document.getElementById("treeFilterInput");U&&U.addEventListener("input",u=>{o.currentTreeFilterQuery=u.target.value,J();const v=document.getElementById("treeFilterInput");v&&(v.focus(),v.setSelectionRange(v.value.length,v.value.length))});const H=document.getElementById("btnClearTreeFilter");H&&H.addEventListener("click",()=>{o.currentTreeFilterQuery="",J()})}function Q(){o.currentViewMode==="tree"?J():zo()}function At(){Q()}function Fo(){const e=document.getElementById("scanChunkLabel");e&&(e.textContent=`Safe (${o.scanBatchSize.toLocaleString()})`)}function ee(){const e=document.getElementById("scopeBtnLocal"),t=document.getElementById("scopeBtnRemote"),n=document.getElementById("keySearchInput"),i=document.getElementById("searchMatchCountBadge"),a=document.getElementById("btnClearSearchQuery"),l=o.searchScope==="local";if(e&&e.classList.toggle("active",l),t&&t.classList.toggle("active",!l),n&&(l?(n.placeholder="Filter loaded keys by regex, glob (*), or text (instant)...",n.title="Instant in-memory filter across loaded keys (~5ms). Press Enter or click Cluster SCAN to query Redis."):(n.placeholder="Scan Redis cluster by pattern (e.g. *, users:*, order:*) - Press Enter",n.title="Query Redis Cluster directly with pattern. Clears local cache and scans Redis.")),a){const r=n?n.value.trim():"";a.style.display=r&&r!=="*"?"inline-flex":"none"}if(i){const r=o.keysTableRows.length;if(r>0&&l){const s=(o.localFilterQuery||"").trim();s&&s!=="*"?(i.textContent=`${o.localMatchCount.toLocaleString()} / ${r.toLocaleString()} (${o.localMatchDurationMs}ms)`,i.title=`Filtered ${o.localMatchCount.toLocaleString()} of ${r.toLocaleString()} loaded keys in ${o.localMatchDurationMs}ms`):(i.textContent=`${r.toLocaleString()} loaded`,i.title=`${r.toLocaleString()} keys loaded in browser memory`),i.style.display="inline-flex"}else i.style.display="none"}}function Ho(){const e=document.getElementById("memoryLimitBanner");if(!e)return;const t=o.keysTableRows.length,n=o.maxLoadedKeysLimit||1e5;if(t>=n){o.isMemoryCeilingReached=!0;const i=n+1e5;e.innerHTML=`
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
          <span>Raise Ceiling (${i.toLocaleString()})</span>
        </button>
      </div>
    `,e.style.display="flex";const a=document.getElementById("btnRaiseMemoryCeiling");a&&a.addEventListener("click",()=>{o.maxLoadedKeysLimit=i,o.isMemoryCeilingReached=!1,e.style.display="none",pe()})}else o.isMemoryCeilingReached=!1,e.style.display="none"}function pe(){const e=document.getElementById("scanStatusText"),t=document.getElementById("btnScanNext"),n=document.getElementById("keysLoadingShimmer"),i=!!o.isScanning,a=o.scanComplete,l=o.isMemoryCeilingReached||o.keysTableRows.length>=(o.maxLoadedKeysLimit||1e5);n&&n.classList.toggle("active",i),e&&(e.innerHTML=`
      ${i?'<span style="color: var(--accent-primary); display: inline-flex; align-items: center; gap: 4px; margin-right: 4px;"><span class="spin" style="display: inline-block;">↻</span> Scanning...</span>':""}
      Loaded <strong>${o.totalScanned.toLocaleString()}</strong> / <strong>${Number(o.dbTotalKeys||0).toLocaleString()}</strong> keys
      ${l?'<span style="color: #fbbf24; margin-left: 4px; font-weight: 500;">(Ceiling)</span>':a?'<span style="color: var(--text-muted); margin-left: 4px; font-weight: 400;">(All)</span>':ct(o.currentCursor)?`<span style="color: var(--text-muted); margin-left: 4px;">(${p(ct(o.currentCursor))})</span>`:""}
    `),t&&(l?(t.disabled=!0,t.style.display="inline-flex",t.style.opacity="0.75",t.innerHTML=`<i data-lucide="shield-alert" style="width: 13px; height: 13px; color: #fbbf24;"></i> Memory Ceiling (${o.maxLoadedKeysLimit.toLocaleString()})`):(t.disabled=i||a,t.style.opacity="",t.style.display=a?"none":"inline-flex",t.innerHTML=i?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More'),f()),Ho(),ee()}function Oo(){const e=document.getElementById("gridViewerContainer");e&&e.addEventListener("click",b=>{const k=b.target.closest(".btn-delete-key-table");if(k){b.stopPropagation();const M=decodeURIComponent(k.getAttribute("data-key"));et(M,()=>{q()});return}const I=b.target.closest(".btn-inspect-key");if(I){b.stopPropagation();const M=decodeURIComponent(I.getAttribute("data-key"));oe(M);return}const D=b.target.closest(".key-row");if(D){const M=decodeURIComponent(D.getAttribute("data-key"));oe(M);return}});const t=document.getElementById("keySearchInput");let n=null;t&&(t.addEventListener("input",()=>{const b=t.value,k=document.getElementById("btnClearSearchQuery");k&&(k.style.display=b.trim()&&b.trim()!=="*"?"inline-flex":"none"),o.searchScope==="local"?(o.localFilterQuery=b.trim(),Q(),ee()):(clearTimeout(n),n=setTimeout(()=>{o.currentPattern=b.trim()||"*"},300))}),t.addEventListener("keydown",b=>{if(b.key==="Enter"){clearTimeout(n);const k=t.value.trim()||"*";o.localFilterQuery=k;const I=_t(k),D=k==="*"?(o.keysTableRows||[]).length:(o.keysTableRows||[]).filter(M=>I(M.key)).length;o.searchScope==="remote"||b.shiftKey||o.keysTableRows.length===0||o.searchScope==="local"&&D===0?(o.currentPattern=k,he(),q()):(Q(),ee())}}));const i=document.getElementById("scopeBtnLocal"),a=document.getElementById("scopeBtnRemote");i&&i.addEventListener("click",()=>{o.searchScope="local";const b=document.getElementById("keySearchInput");b&&(o.localFilterQuery=b.value.trim()),Q(),ee()}),a&&a.addEventListener("click",()=>{o.searchScope="remote";const b=document.getElementById("keySearchInput");b&&(o.currentPattern=b.value.trim()||"*"),ee()});const l=document.getElementById("btnClearSearchQuery");l&&l.addEventListener("click",()=>{t&&(t.value="*",o.localFilterQuery="*",o.searchScope==="remote"&&(o.currentPattern="*"),Q(),ee(),t.focus())});const r=document.getElementById("typeFilterGroup");r&&r.addEventListener("click",b=>{const k=b.target.closest(".type-tab");k&&k.dataset.type&&(r.querySelectorAll(".type-tab").forEach(I=>I.classList.remove("active")),k.classList.add("active"),o.currentType=k.dataset.type,o.searchScope==="local"&&o.keysTableRows.length>0?(Q(),ee()):(he(),q()))});const s=document.getElementById("ttlFilterSelect");s&&s.addEventListener("change",b=>{o.currentTtlFilter=b.target.value,Q()});const d=document.getElementById("btnScanNext");d&&d.addEventListener("click",()=>It());const c=document.getElementById("btnResetScan");c&&c.addEventListener("click",()=>{he(),q()}),Lo();const m=document.getElementById("btnOpenNamespaceModal");m&&m.addEventListener("click",()=>{To($t)});const y=document.getElementById("scanBatchSizeSelect");y&&y.addEventListener("change",b=>{o.scanBatchSize=parseInt(b.target.value,10)||50,Fo()});const g=document.getElementById("btnViewTable"),h=document.getElementById("btnViewTree");g&&g.addEventListener("click",()=>{o.currentViewMode!=="table"&&(o.currentViewMode="table",localStorage.setItem("redis_insight_view_mode","table"),g.classList.add("active"),h&&h.classList.remove("active"),Q())}),h&&h.addEventListener("click",()=>{o.currentViewMode!=="tree"&&(o.currentViewMode="tree",localStorage.setItem("redis_insight_view_mode","tree"),h.classList.add("active"),g&&g.classList.remove("active"),Q())});const w=document.getElementById("btnToggleAutoRefresh");w&&w.addEventListener("click",()=>{Ro()});const C=document.getElementById("autoRefreshIntervalSelect");C&&C.addEventListener("change",b=>{const k=parseInt(b.target.value,10);!isNaN(k)&&k>=5&&(o.autoRefreshIntervalSec=k,localStorage.setItem("redis_insight_auto_refresh_sec",String(k)),he())}),ie()}let Fe=null,He=null,Oe=null,V=null;function Ko(e,t,n){Fe=e,He=t,Oe=n}function jo(e){if(V){try{V.abort()}catch{}V=null}o.isMemoryProfilingRunning=!1,o.currentMemoryOverview=null,o.currentMemoryAnalysis=null,o.memoryLoadedForConnId=null,Ke(e),ue({notice:"Cluster switched. Diagnostic caches cleared. Click below to profile the active cluster."})}function Ke(e){const t=document.getElementById("memoryOverviewContainer");if(!t)return;const n=e||o.cachedConnections.find(d=>String(d.id)===String(o.selectedConnectionId)||d.is_selected)||null,i=n?n.name:o.lastStatus?.connection_name||"Active Cluster",a=n?n.host:o.lastStatus?.host||"127.0.0.1",l=n?n.port:o.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(o.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div class="mem-cluster-prompt-card" style="padding: 1.5rem; text-align: center; background: rgba(15,23,42,0.6); border: 1px dashed var(--border-subtle); border-radius: 8px;">
      <div style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; flex-wrap: wrap; justify-content: center;">
        <i data-lucide="server" style="width: 16px; height: 16px; color: #a78bfa;"></i>
        <strong style="color: var(--text-primary); font-size: 0.95rem;">${p(i)}</strong>
        <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">(${p(a)}:${l})</span>
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
  `,f();const s=document.getElementById("btnLoadMemoryOverviewExplicit");s&&s.addEventListener("click",()=>{ot()})}async function nt(){O("memory"),o.memoryLoadedForConnId!==o.selectedConnectionId?Ke():o.currentMemoryOverview?Dt(o.currentMemoryOverview):Ke(),o.currentMemoryAnalysis&&o.currentMemoryAnalysis._target_conn_id===o.selectedConnectionId?it(o.currentMemoryAnalysis):ue()}function Uo(){O("keys")}async function ot(){const e=document.getElementById("memoryOverviewContainer");if(!e)return;const t=o.selectedConnectionId;e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,f();try{const n=await fetch("/api/memory/overview");if(!n.ok)throw new Error("Failed to fetch memory overview");const i=await n.json();if(o.selectedConnectionId!==t)return;o.currentMemoryOverview=i,o.memoryLoadedForConnId=t,Dt(o.currentMemoryOverview)}catch(n){if(o.selectedConnectionId!==t)return;e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${p(n.message)}</p>
        <button type="button" class="btn btn-secondary btn-sm" id="btnRetryMemOverview" style="margin-top: 0.5rem;">Retry</button>
      </div>
    `,f();const i=document.getElementById("btnRetryMemOverview");i&&(i.onclick=()=>ot())}}function Dt(e){const t=document.getElementById("memoryOverviewContainer");if(!t||!e)return;let n="mem-status-healthy",i="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(n="mem-status-critical",i="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(n="mem-status-warning",i=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),t.innerHTML=`
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
          RSS: <span style="font-family: var(--font-mono); color: var(--text-primary); font-weight: 600;">${e.used_memory_rss_human}</span> (${i})
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
  `,f()}function ue(e={}){const t=document.getElementById("memoryProfilingContainer");if(!t)return;const n=o.cachedConnections.find(c=>String(c.id)===String(o.selectedConnectionId)||c.is_selected)||null,i=n?n.name:o.lastStatus?.connection_name||"Active Cluster",a=n?n.host:o.lastStatus?.host||"127.0.0.1",l=n?n.port:o.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(o.lastStatus?.env||"LOCAL").toUpperCase(),s=e?.notice;t.innerHTML=`
    ${s?`
      <div style="background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--radius-md); padding: 0.65rem 1rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #38bdf8;">
        <i data-lucide="info" style="width: 15px; height: 15px; flex-shrink: 0;"></i>
        <span>${p(s)}</span>
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
          <strong style="color: var(--accent-primary);">${p(i)}</strong>
          <span style="color: var(--text-muted); font-family: var(--font-mono);">(${p(a)}:${l})</span>
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
  `,f();const d=document.getElementById("btnStartProfilingAction");d&&d.addEventListener("click",()=>{const c=document.getElementById("memScanModeSelect")?.value||"sample",m=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,y=document.getElementById("memSamplePatternInput").value||"*";if(c==="full"){const g=document.getElementById("deepScanSafetyModal");if(g){g.classList.add("active"),f();const h=()=>g.classList.remove("active"),w=document.getElementById("btnCancelDeepScan"),C=document.getElementById("btnCloseDeepScanModal"),b=document.getElementById("btnConfirmDeepScan");w&&(w.onclick=h),C&&(C.onclick=h),b&&(b.onclick=()=>{h(),ut(m,y,"full")});return}}ut(m,y,c)})}async function ut(e=500,t="*",n="sample"){const i=document.getElementById("memoryProfilingContainer");if(!i)return;if(V)try{V.abort()}catch{}V=new AbortController;const a=V.signal,l=o.selectedConnectionId;o.isMemoryProfilingRunning=!0;const r=n==="full";i.innerHTML=`
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
  `,f();const s=document.getElementById("btnCancelMemoryProfiling");s&&(s.onclick=()=>{if(V)try{V.abort()}catch{}});try{const d=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:t,scan_mode:n}),signal:a});if(!d.ok){const m=await d.json().catch(()=>({})),y=m.detail?typeof m.detail=="string"?m.detail:JSON.stringify(m.detail):`Failed to complete memory profiling (HTTP ${d.status})`;throw new Error(y)}const c=await d.json();if(o.selectedConnectionId!==l){console.warn("Discarding memory profiling response for switched cluster:",l);return}c._target_conn_id=l,c._analyzed_at=new Date().toISOString(),o.currentMemoryAnalysis=c,o.isMemoryProfilingRunning=!1,it(o.currentMemoryAnalysis)}catch(d){if(o.isMemoryProfilingRunning=!1,d.name==="AbortError"){ue({notice:"Memory scan was cancelled."});return}if(o.selectedConnectionId===l){i.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Memory Profiling Failed</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(d.message)}</p>
          <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Back to Profiling Safeguards</button>
        </div>
      `,f();const c=document.getElementById("btnRetryProfiling");c&&(c.onclick=()=>ue())}}finally{V&&V.signal===a&&(V=null)}}function it(e){const t=document.getElementById("memoryProfilingContainer");if(!t||!e)return;const n=o.cachedConnections.find(s=>String(s.id)===String(e._target_conn_id||o.selectedConnectionId)||s.is_selected)||null;n?n.name:o.lastStatus?.connection_name,n?n.host:o.lastStatus?.host,n?n.port:o.lastStatus?.port,n?(n.env||"LOCAL").toUpperCase():(o.lastStatus?.env||"LOCAL").toUpperCase();const i=e._analyzed_at?new Date(e._analyzed_at).toLocaleTimeString():new Date().toLocaleTimeString(),a={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};t.innerHTML=`
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
          <span style="color: var(--text-secondary); margin-left: 4px;">${p(i)}</span>
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
            ${(e.ttl_forecast.horizons||[]).map(s=>{const c={"< 1 Hour":"#10b981","1 - 24 Hours":"#06b6d4","1 - 7 Days":"#3b82f6","> 7 Days":"#8b5cf6","No Expiration (Persistent)":"#f43f5e"}[s.label]||"#94a3b8";return`
                <div class="mem-stacked-segment" style="width: ${s.memory_percentage}%; background: ${c};" title="${p(s.label)}: ${s.memory_percentage}% (${s.total_memory_human}, ${s.key_count.toLocaleString()} keys)"></div>
              `}).join("")}
          </div>
        </div>

        <!-- 5 Horizon Breakdown Cards (Single Unified Row) -->
        <div class="mem-ttl-kpi-grid" style="grid-template-columns: repeat(5, minmax(0, 1fr));">
          ${(e.ttl_forecast.horizons||[]).map(s=>{const c={"< 1 Hour":"#10b981","1 - 24 Hours":"#06b6d4","1 - 7 Days":"#3b82f6","> 7 Days":"#8b5cf6","No Expiration (Persistent)":"#f43f5e"}[s.label]||"#94a3b8";return`
              <div class="mem-ttl-kpi-item" style="border-top: 2px solid ${c};">
                <div class="kpi-label">${p(s.label)}</div>
                <div class="kpi-val" style="color: ${c};">${s.total_memory_human}</div>
                <div class="kpi-sub">${s.key_count.toLocaleString()} keys (${s.memory_percentage}%)</div>
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
              ${e.ttl_forecast.top_leak_namespaces.map(s=>`
                <tr>
                  <td>
                    <code style="font-family: var(--font-mono); font-weight: 600; color: #38bdf8; background: rgba(56,189,248,0.1); padding: 0.15rem 0.4rem; border-radius: 4px;">
                      ${p(s.namespace)}
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
                    <button type="button" class="btn btn-secondary btn-inspect-leak" data-namespace="${p(s.namespace)}" title="Filter keys in Keys Browser matching ${p(s.namespace)} with No TTL" style="padding: 0.25rem 0.55rem; font-size: 0.72rem;">
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
        ${e.types_breakdown.map(s=>{const d=a[s.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-stacked-segment" style="width: ${s.percentage}%; background: ${d};" title="${s.type.toUpperCase()}: ${s.percentage}% (${s.total_human})"></div>
          `}).join("")}
      </div>

      <!-- Type Cards Grid -->
      <div class="mem-type-cards-grid">
        ${e.types_breakdown.map(s=>{const d=a[s.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-type-card" style="border-left: 3px solid ${d};">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="type-badge ${s.type.toLowerCase()}" style="font-size: 0.68rem; padding: 0.1rem 0.4rem;">${s.type.toUpperCase()}</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--text-primary);">${s.percentage}%</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${d}; margin-top: 2px;">
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
            <span>${p(s)}</span>
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
        ${yt(e.top_bigkeys)}
      </div>
    </div>
  `,f();const l=document.getElementById("btnReRunProfiling");l&&l.addEventListener("click",ue);const r=document.getElementById("bigkeysSearchInput");r&&r.addEventListener("input",()=>{const s=r.value.trim().toLowerCase(),d=s?e.top_bigkeys.filter(m=>m.key.toLowerCase().includes(s)||m.type.toLowerCase().includes(s)):e.top_bigkeys,c=document.getElementById("bigkeysTableContainer");c&&(c.innerHTML=yt(d),f(),gt())}),gt()}function yt(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const t=e[0]?e[0].memory_bytes:1;return`
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
        ${e.map((n,i)=>{let a="rank-normal";i===0?a="rank-gold":i===1?a="rank-silver":i===2&&(a="rank-bronze");const l=t>0?Math.max(5,Math.round(n.memory_bytes/t*100)):10;let r="No TTL (Persistent)",s="var(--text-muted)";return n.ttl>0&&(r=`${n.ttl.toLocaleString()}s`,s="var(--accent-warning)"),`
            <tr>
              <td>
                <span class="rank-badge ${a}">#${i+1}</span>
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
                  <div style="width: ${l}%; height: 100%; background: #38bdf8; border-radius: 9999px;"></div>
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
                  <button type="button" class="btn btn-secondary bigkey-inspect-btn" data-key="${p(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Inspect key detail">
                    <i data-lucide="external-link" style="width: 11px; height: 11px;"></i>
                    Inspect
                  </button>
                  ${o.lastStatus?.read_only?"":`
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
  `}function gt(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&Fe&&Fe(t)})}),document.querySelectorAll(".btn-copy-bigkey").forEach(e=>{e.addEventListener("click",async t=>{t.stopPropagation();const n=e.getAttribute("data-key");n&&await Y(n)&&(e.classList.add("copied"),e.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px;"></i>',f(),setTimeout(()=>{e.classList.remove("copied"),e.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',f()},1500))})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&He&&He(t,async()=>{o.currentMemoryAnalysis&&(o.currentMemoryAnalysis.top_bigkeys=o.currentMemoryAnalysis.top_bigkeys.filter(n=>n.key!==t),it(o.currentMemoryAnalysis)),Oe&&await Oe()})})}),document.querySelectorAll(".btn-inspect-leak").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-namespace");if(t){o.currentPattern=t,o.currentTtlFilter="persistent";const n=document.getElementById("keySearchInput");n&&(n.value=t);const i=document.getElementById("ttlFilterSelect");i&&(i.value="persistent"),O("keys"),q()}})})}function Vo(){const e=document.getElementById("btnCloseMemoryModal");e&&e.addEventListener("click",Uo);const t=document.getElementById("btnOpenMemoryModal");t&&t.addEventListener("click",nt);const n=document.getElementById("btnRefreshMemoryModal");n&&n.addEventListener("click",ot)}function ye(e){if(!e)return"";const t=Math.floor(Date.now()/1e3),n=Math.max(0,t-e);return n<60?`${n}s ago`:n<3600?`${Math.floor(n/60)}m ago`:n<86400?`${Math.floor(n/3600)}h ago`:`${Math.floor(n/86400)}d ago`}function qo(e){o.allSlowlogEntries=[],o.slowlogLoadedForConnId=null,o.currentSlowlogTimeWindow="all";const t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),i=document.getElementById("slowlogFooterStats"),a=document.getElementById("slowlogNodeFilterContainer");t&&(t.textContent="0"),n&&(n.textContent="-"),i&&(i.textContent=""),a&&(a.innerHTML=""),Nt(e)}function Nt(e){const t=document.getElementById("slowlogTableContainer");if(!t)return;const n=e||o.cachedConnections.find(d=>String(d.id)===String(o.selectedConnectionId)||d.is_selected)||null,i=n?n.name:o.lastStatus?.connection_name||"Active Cluster",a=n?n.host:o.lastStatus?.host||"127.0.0.1",l=n?n.port:o.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(o.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 1rem;">
        <i data-lucide="clock" style="width: 24px; height: 24px; color: #38bdf8;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Slowlog for ${p(i)} (${p(a)}:${l})
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
  `,f();const s=document.getElementById("btnFetchSlowlogExplicit");s&&(s.onclick=()=>Se())}async function Pt(){O("slowlog"),o.currentSlowlogMinDuration=0,o.currentSlowlogSearch="",o.currentSlowlogNode="all",o.currentSlowlogTimeWindow="all";const e=document.getElementById("btnClearSlowlogModal");e&&(e.style.display=o.lastStatus?.read_only?"none":""),document.querySelectorAll(".slowlog-filter-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-min-duration")==="0")}),document.querySelectorAll(".slowlog-time-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-time-window")==="all")});const t=document.getElementById("slowlogSearchInput");t&&(t.value=""),o.slowlogLoadedForConnId!==o.selectedConnectionId?Nt():ae()}function Wo(){O("keys")}async function Se(){const e=document.getElementById("slowlogTableContainer"),t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),i=document.getElementById("slowlogFooterStats"),a=o.selectedConnectionId;e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,f());try{const l=await fetch("/api/slowlog?limit=250");if(!l.ok)throw new Error("Failed to fetch slowlog");const r=await l.json();if(o.selectedConnectionId!==a)return;if(o.allSlowlogEntries=r.entries||[],o.slowlogLoadedForConnId=a,t&&(t.textContent=o.allSlowlogEntries.length),n&&r.slower_than_us!==null&&r.slower_than_us!==void 0){const s=(r.slower_than_us/1e3).toFixed(1);n.textContent=`Threshold: > ${s}ms (${r.slower_than_us} µs)`}i&&(i.textContent=`Total buffer: ${r.total_len||o.allSlowlogEntries.length} entries | Max buffer: ${r.max_len||"N/A"}`),Go(o.allSlowlogEntries),ae()}catch(l){if(o.selectedConnectionId!==a)return;if(e){e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(l.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetrySlowlog" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,f();const r=document.getElementById("btnRetrySlowlog");r&&(r.onclick=()=>Se())}}}function Go(e){const t=document.getElementById("slowlogNodeFilterContainer");if(!t)return;const n=Array.from(new Set(e.map(a=>a.node).filter(Boolean)));if(n.length<=1){t.innerHTML="";return}t.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${n.length})</option>
      ${n.map(a=>`<option value="${p(a)}" ${o.currentSlowlogNode===a?"selected":""}>${p(a)}</option>`).join("")}
    </select>
  `;const i=document.getElementById("slowlogNodeSelect");i&&i.addEventListener("change",()=>{o.currentSlowlogNode=i.value,ae()})}function ae(){let e=o.allSlowlogEntries;if(o.currentSlowlogTimeWindow&&o.currentSlowlogTimeWindow!=="all"){const t=Math.floor(Date.now()/1e3);let n=0;o.currentSlowlogTimeWindow==="5m"?n=300:o.currentSlowlogTimeWindow==="15m"?n=900:o.currentSlowlogTimeWindow==="1h"?n=3600:o.currentSlowlogTimeWindow==="24h"&&(n=1440*60);const i=t-n;e=e.filter(a=>(a.timestamp||0)>=i)}if(o.currentSlowlogMinDuration>0&&(e=e.filter(t=>t.duration_ms>=o.currentSlowlogMinDuration)),o.currentSlowlogNode&&o.currentSlowlogNode!=="all"&&(e=e.filter(t=>t.node===o.currentSlowlogNode)),o.currentSlowlogSearch){const t=o.currentSlowlogSearch.toLowerCase();e=e.filter(n=>{const i=(n.command||[]).join(" ").toLowerCase(),a=(n.client_ip||"").toLowerCase(),l=(n.node||"").toLowerCase();return i.includes(t)||a.includes(t)||l.includes(t)||String(n.id).includes(t)})}o.currentlyFilteredSlowlogEntries=e,Jo(e)}function Jo(e){const t=document.getElementById("slowlogTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <i data-lucide="check-circle-2" style="width: 28px; height: 28px; color: #4ade80;"></i>
        </div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.35rem;">No Slow Queries Recorded</h4>
        <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.5;">
          ${o.allSlowlogEntries.length===0?"Redis latency is healthy! All commands executed within the threshold.":"No slowlog entries matched the active filters."}
        </p>
      </div>
    `,f();return}t.innerHTML=`
    <table class="keys-table" style="width: 100%;">
      <thead>
        <tr>
          <th style="width: 60px;"># ID</th>
          <th style="width: 155px;">Timestamp</th>
          <th style="width: 110px;">Execution Time</th>
          <th>Command &amp; Arguments</th>
          <th style="width: 150px;">Target Node</th>
          <th style="width: 170px;">Client Caller</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(n=>{let i="badge-duration-fast";n.duration_ms>=50?i="badge-duration-critical":n.duration_ms>=10&&(i="badge-duration-warning");const a=n.command&&n.command.length>0?n.command.join(" "):"(empty)";return`
            <tr>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">#${n.id}</td>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); white-space: nowrap;">
                ${p(n.time_str||"N/A")}
                ${ye(n.timestamp)?`<span style="font-size: 0.68rem; color: #38bdf8; display: block; margin-top: 2px; font-weight: 500;">${ye(n.timestamp)}</span>`:""}
              </td>
              <td>
                <span class="badge-duration ${i}">
                  <i data-lucide="clock" style="width: 11px; height: 11px;"></i>
                  ${n.duration_ms} ms
                </span>
                <span style="font-size: 0.68rem; color: var(--text-muted); display: block; margin-top: 2px; font-family: var(--font-mono);">
                  ${n.duration_us.toLocaleString()} µs
                </span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <span class="slowlog-cmd-code slowlog-cmd-zoomable" data-id="${n.id}" title="Click to zoom in and inspect full command &amp; Lua script">${p(a)}</span>
                  <button type="button" class="btn-copy-inline btn-inspect-slowlog-cmd" data-id="${n.id}" title="Zoom In / View Full Command &amp; Lua Script">
                    <i data-lucide="zoom-in" style="width: 12px; height: 12px; color: #38bdf8;"></i>
                  </button>
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
  `,f(),t.querySelectorAll(".btn-inspect-slowlog-cmd, .slowlog-cmd-zoomable").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation();const a=n.getAttribute("data-id");a&&Qo(a)})}),t.querySelectorAll(".btn-copy-slowlog-cmd").forEach(n=>{n.addEventListener("click",async i=>{i.stopPropagation();const a=n.getAttribute("data-cmd");a&&await Y(a)&&me(n,"Copied!")})})}}function Qo(e){const t=document.getElementById("slowlogDetailModal"),n=document.getElementById("slowlogDetailTitle"),i=document.getElementById("slowlogDetailDurationBadge"),a=document.getElementById("slowlogDetailSubtitle"),l=document.getElementById("slowlogDetailBody"),r=document.getElementById("slowlogDetailFooterTelemetry");if(!t||!l)return;const s=(o.allSlowlogEntries||[]).find(g=>String(g.id)===String(e));if(!s)return;if(n&&(n.textContent=`Slowlog Command #${s.id}`),i){let g="badge-duration-fast";s.duration_ms>=50?g="badge-duration-critical":s.duration_ms>=10&&(g="badge-duration-warning"),i.className=`badge-duration ${g}`,i.textContent=`${s.duration_ms} ms (${s.duration_us.toLocaleString()} µs)`}a&&(a.textContent=`Recorded at ${s.time_str} (${ye(s.timestamp)}) • Node: ${s.node||"Default"}`),r&&(r.textContent=`Entry ID: ${s.id} | Timestamp: ${s.timestamp} | Client: ${s.client_ip||"Unknown"}`);const d=s.command&&s.command.length>0?s.command.join(" "):"(empty)",c=s.command&&s.command[0]?s.command[0].toUpperCase():"",m=(s.command||[]).some(g=>typeof g=="string"&&(g.includes("more bytes)")||g.includes("more arguments)")));let y="";if(c==="EVAL"&&s.command.length>=2){const g=s.command[1],h=parseInt(s.command[2]||"0",10)||0,w=s.command.slice(3,3+h),C=s.command.slice(3+h);y=`
      <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: var(--radius-md); padding: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="file-code" style="width: 16px; height: 16px; color: #38bdf8;"></i>
            <strong style="font-size: 0.85rem; color: #38bdf8;">Lua Script Inspector</strong>
            <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">(${new Blob([g]).size} bytes, ${g.split(`
`).length} lines)</span>
          </div>
          <button type="button" class="btn btn-secondary btn-sm btn-copy-detail-action" data-copy="${p(g)}" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
            <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
            Copy Lua Script
          </button>
        </div>
        <pre class="slowlog-lua-box"><code>${p(g)}</code></pre>
        ${w.length>0||C.length>0?`
          <div style="display: flex; gap: 1rem; margin-top: 0.75rem; flex-wrap: wrap;">
            ${w.length>0?`
              <div style="flex: 1; min-width: 200px;">
                <span style="font-size: 0.72rem; font-weight: 600; color: #4ade80; display: block; margin-bottom: 0.25rem;">KEYS (${w.length}):</span>
                <div style="display: flex; gap: 0.3rem; flex-wrap: wrap;">
                  ${w.map((b,k)=>`<span class="slowlog-vital-chip" style="color: #4ade80; border-color: rgba(74, 222, 128, 0.3);">KEYS[${k+1}] = ${p(b)}</span>`).join("")}
                </div>
              </div>
            `:""}
            ${C.length>0?`
              <div style="flex: 1; min-width: 200px;">
                <span style="font-size: 0.72rem; font-weight: 600; color: #94a3b8; display: block; margin-bottom: 0.25rem;">ARGV (${C.length}):</span>
                <div style="display: flex; gap: 0.3rem; flex-wrap: wrap;">
                  ${C.map((b,k)=>`<span class="slowlog-vital-chip" style="color: #cbd5e1; border-color: rgba(148, 163, 184, 0.3);">ARGV[${k+1}] = ${p(b)}</span>`).join("")}
                </div>
              </div>
            `:""}
          </div>
        `:""}
      </div>
    `}else if(c==="EVALSHA"&&s.command.length>=2){const g=s.command[1],h=parseInt(s.command[2]||"0",10)||0,w=s.command.slice(3,3+h),C=s.command.slice(3+h);y=`
      <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: var(--radius-md); padding: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="hash" style="width: 16px; height: 16px; color: #c084fc;"></i>
            <strong style="font-size: 0.85rem; color: #c084fc;">Lua Script SHA1 Reference</strong>
            <code style="font-size: 0.78rem; color: var(--text-primary);">${p(g)}</code>
          </div>
          <button type="button" class="btn btn-secondary btn-sm btn-copy-detail-action" data-copy="${p(g)}" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
            <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
            Copy SHA
          </button>
        </div>
        ${w.length>0||C.length>0?`
          <div style="display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap;">
            ${w.length>0?`
              <div>
                <span style="font-size: 0.72rem; font-weight: 600; color: #4ade80; display: block; margin-bottom: 0.25rem;">KEYS (${w.length}):</span>
                <div style="display: flex; gap: 0.3rem; flex-wrap: wrap;">
                  ${w.map((b,k)=>`<span class="slowlog-vital-chip" style="color: #4ade80;">KEYS[${k+1}] = ${p(b)}</span>`).join("")}
                </div>
              </div>
            `:""}
            ${C.length>0?`
              <div>
                <span style="font-size: 0.72rem; font-weight: 600; color: #94a3b8; display: block; margin-bottom: 0.25rem;">ARGV (${C.length}):</span>
                <div style="display: flex; gap: 0.3rem; flex-wrap: wrap;">
                  ${C.map((b,k)=>`<span class="slowlog-vital-chip">ARGV[${k+1}] = ${p(b)}</span>`).join("")}
                </div>
              </div>
            `:""}
          </div>
        `:""}
      </div>
    `}l.innerHTML=`
    <!-- Vitals Strip -->
    <div class="slowlog-vitals-strip">
      <div class="slowlog-vital-chip">
        <i data-lucide="clock" style="width: 13px; height: 13px; color: #38bdf8;"></i>
        <span>Duration: <strong>${s.duration_ms} ms</strong> (${s.duration_us.toLocaleString()} µs)</span>
      </div>
      <div class="slowlog-vital-chip">
        <i data-lucide="server" style="width: 13px; height: 13px; color: #a78bfa;"></i>
        <span>Node: <strong>${p(s.node||"Default")}</strong></span>
      </div>
      <div class="slowlog-vital-chip">
        <i data-lucide="user" style="width: 13px; height: 13px; color: #4ade80;"></i>
        <span>Caller: <strong>${p(s.client_ip||"Unknown")}</strong> ${s.client_name?"("+p(s.client_name)+")":""}</span>
      </div>
      <div class="slowlog-vital-chip">
        <i data-lucide="list" style="width: 13px; height: 13px; color: #f59e0b;"></i>
        <span>Arguments: <strong>${s.command?.length||0}</strong></span>
      </div>
    </div>

    <!-- Redis Server Truncation Banner -->
    ${m?`
      <div class="slowlog-truncation-banner">
        <i data-lucide="info" style="color: #fbbf24; width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px;"></i>
        <div>
          <strong style="color: #fbbf24; font-size: 0.82rem;">Redis Server-Side Truncation Notice</strong>
          <p style="margin: 0.2rem 0 0; font-size: 0.76rem; color: var(--text-secondary); line-height: 1.45;">
            One or more arguments were truncated by Redis to 128 bytes in the internal SLOWLOG ring buffer (<code>#define SLOWLOG_ENTRY_MAX_STRING 128</code>).
            Redis enforces this compile-time limit inside its C engine to prevent slowlog entries from exhausting server RAM. Bytes beyond 128 were not stored by Redis at execution time and cannot be recovered from the engine.
          </p>
        </div>
      </div>
    `:""}

    ${y}

    <!-- Raw Full Command -->
    <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <span style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary);">Full Command String</span>
        <button type="button" class="btn btn-secondary btn-sm btn-copy-detail-action" data-copy="${p(d)}" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
          Copy Full Command
        </button>
      </div>
      <pre style="background: #090d16; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 4px; padding: 0.75rem 1rem; font-family: var(--font-mono); font-size: 0.78rem; line-height: 1.5; color: #f1f5f9; white-space: pre-wrap; word-break: break-all; max-height: 160px; overflow-y: auto; margin: 0;"><code>${p(d)}</code></pre>
    </div>

    <!-- Argument Breakdown Table -->
    <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
      <div style="padding: 0.75rem 1rem; background: rgba(0, 0, 0, 0.2); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary);">Command Arguments Breakdown (${s.command?.length||0})</span>
      </div>
      <div style="max-height: 260px; overflow-y: auto;">
        <table class="slowlog-args-table">
          <thead>
            <tr>
              <th style="width: 45px;">#</th>
              <th style="width: 110px;">Role</th>
              <th style="width: 100px;">Length</th>
              <th>Argument Value</th>
              <th style="width: 50px; text-align: center;">Copy</th>
            </tr>
          </thead>
          <tbody>
            ${(s.command||[]).map((g,h)=>{let w=`<span class="badge-tag" style="color: var(--text-muted); font-size: 0.7rem;">ARG ${h}</span>`;if(h===0)w='<span class="badge-tag" style="background: rgba(56,189,248,0.2); color: #38bdf8; font-size: 0.7rem;">COMMAND</span>';else if(c==="EVAL"&&h===1)w='<span class="badge-tag" style="background: rgba(168,85,247,0.2); color: #c084fc; font-size: 0.7rem;">LUA SCRIPT</span>';else if(c==="EVAL"&&h===2)w='<span class="badge-tag" style="background: rgba(245,158,11,0.2); color: #fbbf24; font-size: 0.7rem;">NUMKEYS</span>';else if(c==="EVAL"&&h>=3&&h<3+(parseInt(s.command[2]||"0",10)||0))w=`<span class="badge-tag" style="background: rgba(74,222,128,0.2); color: #4ade80; font-size: 0.7rem;">KEYS[${h-2}]</span>`;else if(c==="EVAL"&&h>=3+(parseInt(s.command[2]||"0",10)||0)){const b=parseInt(s.command[2]||"0",10)||0;w=`<span class="badge-tag" style="background: rgba(148,163,184,0.2); color: #94a3b8; font-size: 0.7rem;">ARGV[${h-2-b}]</span>`}const C=new Blob([String(g)]).size;return`
                <tr>
                  <td style="font-family: var(--font-mono); color: var(--text-muted);">${h}</td>
                  <td>${w}</td>
                  <td style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.72rem;">${C} B</td>
                  <td style="font-family: var(--font-mono); font-size: 0.78rem; word-break: break-all; white-space: pre-wrap; color: #e2e8f0;">
                    ${p(String(g))}
                  </td>
                  <td style="text-align: center;">
                    <button type="button" class="btn-copy-inline btn-copy-detail-action" data-copy="${p(String(g))}" title="Copy Argument">
                      <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
                    </button>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,t.classList.add("active"),f(),l.querySelectorAll(".btn-copy-detail-action").forEach(g=>{g.addEventListener("click",async h=>{h.stopPropagation();const w=g.getAttribute("data-copy");w&&await Y(w)&&me(g,"Copied!")})})}function ft(){const e=document.getElementById("slowlogDetailModal");e&&e.classList.remove("active")}function Yo(){const e=document.getElementById("exportSlowlogModal");if(!e)return;const t=document.getElementById("exportSlowlogTimeWindowDisplay"),n=document.getElementById("exportSlowlogMinLatencyDisplay"),i=document.getElementById("exportSlowlogFilteredCount"),a=document.getElementById("exportSlowlogTotalCount"),l=document.getElementById("exportSlowlogScopeFilteredText"),r=document.getElementById("exportSlowlogScopeAllText"),s=o.currentSlowlogTimeWindow&&o.currentSlowlogTimeWindow!=="all"?`Last ${o.currentSlowlogTimeWindow}`:"All Time",d=o.currentSlowlogMinDuration>0?`> ${o.currentSlowlogMinDuration} ms`:"All (> 0ms)",c=o.currentlyFilteredSlowlogEntries||o.allSlowlogEntries||[],m=o.allSlowlogEntries||[];t&&(t.textContent=s),n&&(n.textContent=d),i&&(i.textContent=`${c.length} entries`),a&&(a.textContent=`${m.length} entries`),l&&(l.textContent=`${c.length}`),r&&(r.textContent=`${m.length}`),e.classList.add("active"),f()}function je(){const e=document.getElementById("exportSlowlogModal");e&&e.classList.remove("active")}function Zo(){const e=document.querySelector('input[name="exportSlowlogFormatRadio"]:checked')?.value||"json",t=document.querySelector('input[name="exportSlowlogScopeRadio"]:checked')?.value||"filtered",n=t==="all"?o.allSlowlogEntries||[]:o.currentlyFilteredSlowlogEntries||o.allSlowlogEntries||[];if(n.length===0){E("No slowlog entries to export for selected scope","warning");return}const i=o.cachedConnections.find(r=>String(r.id)===String(o.selectedConnectionId)||r.is_selected),a=(i?i.name:"redis").replace(/[^a-zA-Z0-9_-]/g,"_"),l=new Date().toISOString().replace(/[:.]/g,"-");if(e==="json"){const r=n.map(d=>({id:d.id,timestamp:d.timestamp,time_str:d.time_str,relative_time:ye(d.timestamp),duration_ms:d.duration_ms,duration_us:d.duration_us,node:d.node||"Default",client_ip:d.client_ip||null,client_name:d.client_name||null,command_args:d.command||[],command_string:(d.command||[]).join(" ")})),s=new Blob([JSON.stringify(r,null,2)],{type:"application/json"});Ce(s,`slowlog_${a}_${t}_${l}.json`)}else{const r=y=>y==null?'""':`"${String(y).replace(/"/g,'""')}"`,s=["ID","Timestamp","Time","Relative_Time","Duration_MS","Duration_US","Target_Node","Client_IP","Client_Name","Command"],d=n.map(y=>[y.id,y.timestamp,r(y.time_str),r(ye(y.timestamp)),y.duration_ms,y.duration_us,r(y.node||"Default"),r(y.client_ip||""),r(y.client_name||""),r((y.command||[]).join(" "))].join(",")),c=[s.join(","),...d].join(`
`),m=new Blob([c],{type:"text/csv;charset=utf-8;"});Ce(m,`slowlog_${a}_${t}_${l}.csv`)}je(),E(`Exported ${n.length} slowlog entries (${e.toUpperCase()})`,"success")}async function Xo(){if(o.lastStatus?.read_only){E("Slowlog reset is disabled in Read-Only mode.","warning");return}if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");E("Slowlog buffer reset successfully","success"),await Se()}catch(e){E("Error resetting slowlog: "+e.message,"error")}}function ei(){const e=document.getElementById("btnCloseSlowlogModal");e&&e.addEventListener("click",Wo);const t=document.getElementById("btnOpenSlowlog");t&&t.addEventListener("click",Pt);const n=document.getElementById("btnRefreshSlowlogModal");n&&n.addEventListener("click",Se);const i=document.getElementById("btnClearSlowlogModal");i&&i.addEventListener("click",Xo);const a=document.getElementById("btnExportSlowlogModal");a&&a.addEventListener("click",Yo);const l=document.getElementById("btnCloseExportSlowlogModal");l&&l.addEventListener("click",je);const r=document.getElementById("btnCancelExportSlowlogModal");r&&r.addEventListener("click",je);const s=document.getElementById("btnExecuteExportSlowlog");s&&s.addEventListener("click",Zo);const d=document.getElementById("btnCloseSlowlogDetailModal");d&&d.addEventListener("click",ft);const c=document.getElementById("btnDismissSlowlogDetailModal");c&&c.addEventListener("click",ft);const m=document.getElementById("slowlogSearchInput");m&&m.addEventListener("input",()=>{o.currentSlowlogSearch=m.value.trim(),ae()}),document.querySelectorAll(".slowlog-filter-btn").forEach(y=>{y.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(g=>g.classList.remove("active")),y.classList.add("active"),o.currentSlowlogMinDuration=parseInt(y.getAttribute("data-min-duration")||"0",10),ae()})}),document.querySelectorAll(".slowlog-time-btn").forEach(y=>{y.addEventListener("click",()=>{document.querySelectorAll(".slowlog-time-btn").forEach(g=>g.classList.remove("active")),y.classList.add("active"),o.currentSlowlogTimeWindow=y.getAttribute("data-time-window")||"all",ae()})})}let Ue=null;function ti(e){Ue=e}async function ni(){const e=document.getElementById("keyspaceNodesModal");e&&(e.classList.add("active"),Ft(o.lastStatus),await zt())}function ht(){const e=document.getElementById("keyspaceNodesModal");e&&e.classList.remove("active")}async function zt(){try{const e=await fetch("/api/status");if(!e.ok)throw new Error("Failed to load node stats");o.lastStatus=await e.json(),Ft(o.lastStatus)}catch(e){const t=document.getElementById("keyspaceNodesContainer");t&&(t.innerHTML=`<div style="padding: 2rem; text-align: center; color: var(--accent-danger);">${p(e.message)}</div>`)}}function Ft(e){const t=document.getElementById("keyspaceNodesContainer"),n=document.getElementById("keyspaceTotalBadge");if(!t||!e)return;const i=e.node_stats||[],a=i.filter(m=>m.role==="master"),l=a.reduce((m,y)=>m+(y.keys||0),0);if(n&&(n.textContent=`${l.toLocaleString()} keys`),a.length===0){t.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Per-node breakdown is only available for cluster connections.</div>';return}const r=m=>m==null?"—":Number(m).toLocaleString(),s=(m,y="left")=>`<th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: ${y};">${m}</th>`,d=(m,y="")=>`<td style="padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; ${y}">${m}</td>`,c=a.map(m=>{const y=l>0&&m.keys!==null?(m.keys/l*100).toFixed(1):"0.0",g=i.filter(C=>C.role==="replica"&&C.master===m.node),h=`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        ${d(`<span class="role-badge-master">MASTER</span> <span style="color: var(--text-primary); font-weight: 600; margin-left: 6px;">${p(m.node)}</span>`)}
        ${d(m.error?`<span style="color: var(--accent-danger);" title="${p(m.error)}">unreachable</span>`:r(m.keys),"text-align: right; color: var(--text-primary); font-weight: 600;")}
        ${d(`${y}%`,"text-align: right; color: var(--text-secondary);")}
        ${d(p(m.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
        ${d(r(m.connected_clients),"text-align: right; color: #38bdf8;")}
      </tr>`,w=g.map(C=>{const b=C.keys!==null&&m.keys!==null?C.keys-m.keys:null,k=b===null?"":b===0?'<span style="color: var(--accent-success); margin-left: 6px;">in sync</span>':`<span style="color: var(--accent-warning); margin-left: 6px;" title="Replica key count differs from its master (replication lag or expiring keys)">${b>0?"+":""}${b.toLocaleString()}</span>`;return`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(0,0,0,0.12);">
        ${d(`<span style="color: var(--text-muted); margin-left: 0.75rem;">↳</span> <span class="role-badge-replica">REPLICA</span> <span style="color: var(--text-secondary); margin-left: 6px;">${p(C.node)}</span>`)}
        ${d(C.error?`<span style="color: var(--accent-danger);" title="${p(C.error)}">unreachable</span>`:`${r(C.keys)}${k}`,"text-align: right; color: var(--text-secondary);")}
        ${d("","")}
        ${d(p(C.used_memory_human||"—"),"text-align: right; color: var(--text-muted);")}
        ${d(r(C.connected_clients),"text-align: right; color: var(--text-muted);")}
      </tr>`}).join("");return h+w}).join("");t.innerHTML=`
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${s("NODE")}${s("KEYS","right")}${s("SHARE","right")}${s("MEMORY","right")}${s("CLIENTS","right")}</tr>
      </thead>
      <tbody>${c}</tbody>
      <tfoot>
        <tr>
          ${d("Cluster total (masters)","color: var(--text-muted); font-family: inherit;")}
          ${d(l.toLocaleString(),"text-align: right; color: var(--accent-primary); font-weight: 700;")}
          ${d("100%","text-align: right; color: var(--text-muted);")}
          ${d(p(e.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
          ${d("","")}
        </tr>
      </tfoot>
    </table>
  `,f()}function oi(e){o.currentTopologyData=null,o.topologyLoadedForConnId=null;const t=document.getElementById("topologyStatsGrid"),n=document.getElementById("topologyNodesCountBadge"),i=document.getElementById("tabBadgeTopology");t&&(t.innerHTML=""),n&&(n.textContent="-"),i&&(i.textContent="-"),Ht(e)}function Ht(e){const t=document.getElementById("topologyTableContainer"),n=document.getElementById("topologyEnvBadge");if(!t)return;const i=e||o.cachedConnections.find(m=>String(m.id)===String(o.selectedConnectionId)||m.is_selected)||null,a=i?i.name:o.lastStatus?.connection_name||"Active Cluster",l=i?i.host:o.lastStatus?.host||"127.0.0.1",r=i?i.port:o.lastStatus?.port||6379,s=i?(i.env||"LOCAL").toUpperCase():(o.lastStatus?.env||"LOCAL").toUpperCase();n&&(n.textContent=s,n.className=`badge-env badge-env-${s.toLowerCase()}`);const d=document.getElementById("topologySearchInput");d&&(d.disabled=!0,d.placeholder="Load cluster topology to filter nodes..."),t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); margin-bottom: 1rem;">
        <i data-lucide="network" style="width: 24px; height: 24px; color: #c084fc;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Topology Map for ${p(a)} (${p(l)}:${r})
        <span class="badge-env badge-env-${s.toLowerCase()}" style="margin-left: 0.4rem; vertical-align: middle;">${s}</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 1.25rem; line-height: 1.5;">
        Cluster switched. Diagnostics cache cleared. Click below to inspect cluster nodes, primary/replica roles, and hash slot distribution.
      </p>
      <button type="button" class="btn btn-primary" id="btnFetchTopologyExplicit" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        Load Cluster Topology
      </button>
    </div>
  `,f();const c=document.getElementById("btnFetchTopologyExplicit");c&&(c.onclick=()=>Ee())}async function se(e=null,t=!1){if(O("topology"),e&&Ue){const n=document.querySelector(`.conn-card[data-id="${e}"]`);n&&!n.classList.contains("active")&&await Ue(e)}o.topologyLoadedForConnId!==o.selectedConnectionId||!o.currentTopologyData?t?Ee():Ht():(Ot(o.currentTopologyData),ke())}function ii(){O("keys")}async function Ee(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),t=document.getElementById("topologyNodesCountBadge"),n=document.getElementById("tabBadgeTopology"),i=document.getElementById("topologyEnvBadge"),a=o.selectedConnectionId,l=o.cachedConnections.find(r=>r.id===a||r.is_selected);if(l&&i){const r=(l.env||"LOCAL").toUpperCase();i.textContent=r,i.className=`badge-env badge-env-${r.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,f());try{const r=await fetch("/api/topology");if(!r.ok)throw new Error("Failed to load cluster topology");const s=await r.json();if(o.selectedConnectionId!==a)return;o.currentTopologyData=s,o.topologyLoadedForConnId=a;const d=`${s.total_nodes} Node${s.total_nodes!==1?"s":""}`;t&&(t.textContent=d),n&&(n.textContent=d);const c=document.getElementById("topologySearchInput");c&&(c.disabled=!1,c.placeholder="Filter nodes by IP, port, node ID, or slot..."),Ot(s),ke()}catch(r){if(o.selectedConnectionId!==a)return;if(e){e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${p(r.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetryTopology" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,f();const s=document.getElementById("btnRetryTopology");s&&(s.onclick=()=>Ee())}}}function Ot(e){const t=document.getElementById("topologyStatsGrid");if(!t)return;const n=e.is_cluster,i=(e.cluster_state||"").toLowerCase()==="ok"||!n;t.innerHTML=`
    <div class="topology-stat-card">
      <span class="topology-stat-label">Cluster State</span>
      <span class="topology-stat-value" style="color: ${i?"var(--accent-success)":"var(--accent-danger)"}; display: flex; align-items: center; gap: 0.4rem;">
        <span class="link-dot ${i?"connected":"disconnected"}"></span>
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
  `}function ke(){const e=document.getElementById("topologyTableContainer");if(!e||!o.currentTopologyData)return;const t=o.currentTopologyData.nodes||[],n=(o.currentTopologySearch||"").trim().toLowerCase(),i=o.currentTopologyRole,a=t.filter(l=>{if(i!=="all"&&l.role.toLowerCase()!==i)return!1;if(n){const r=(l.addr||"").toLowerCase().includes(n),s=(l.id||"").toLowerCase().includes(n),d=(l.ip||"").toLowerCase().includes(n),c=(l.slots||"").toLowerCase().includes(n);if(!r&&!s&&!d&&!c)return!1}return!0});if(a.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
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
        ${a.map(l=>{const r=l.role==="master",s=(l.link_state||"connected").toLowerCase()==="connected",d=l.id?l.id.length>12?`${l.id.substring(0,10)}...`:l.id:"N/A",c=l.slots?`${l.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${l.slot_count||0} slots)</span>`:r?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${p(l.id||"")}">${p(d)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${r?"role-badge-master":"role-badge-replica"}">${l.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${p(l.addr||`${l.ip}:${l.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem; text-align: right; color: ${r?"var(--text-primary)":"var(--text-secondary)"};">
                ${l.keys===null||l.keys===void 0?"—":Number(l.keys).toLocaleString()}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${s?"connected":"disconnected"}"></span>
                <span style="color: ${s?"var(--accent-success)":"var(--accent-danger)"};">${l.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${c}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                ${l.master_id?`<span title="${p(l.master_id)}">↳ ${p(l.master_id.substring(0,8))}...</span>`:"—"}
              </td>
              <td style="padding: 0.65rem 0.85rem; text-align: right; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
                ${(l.flags||[]).join(", ")||"none"}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,f()}function ai(){const e=document.getElementById("btnOpenBulkDeleteModal");e&&(o.lastStatus?.read_only?(e.disabled=!0,e.style.opacity="0.4",e.style.cursor="not-allowed",e.title="🔒 Bulk Delete is disabled in Read-Only mode"):(e.disabled=!1,e.style.opacity="1",e.style.cursor="pointer",e.title="Bulk delete matched keys (Dry-run & confirmation required)"))}function si(){const e=document.getElementById("btnCloseTopologyModal");e&&e.addEventListener("click",ii);const t=document.getElementById("btnOpenTopologyTop");t&&t.addEventListener("click",()=>se(null,!0));const n=document.getElementById("btnRefreshTopologyModal");n&&n.addEventListener("click",Ee);const i=document.getElementById("topologySearchInput");i&&i.addEventListener("input",()=>{o.currentTopologySearch=i.value.trim(),ke()});const a=document.getElementById("topologyRoleFilter");a&&a.addEventListener("click",d=>{const c=d.target.closest(".type-tab");c&&c.dataset.role&&(a.querySelectorAll(".type-tab").forEach(m=>m.classList.remove("active")),c.classList.add("active"),o.currentTopologyRole=c.dataset.role,ke())});const l=document.getElementById("btnCloseKeyspaceModal");l&&l.addEventListener("click",ht);const r=document.getElementById("btnRefreshKeyspaceModal");r&&r.addEventListener("click",zt);const s=document.getElementById("btnKeyspaceOpenTopology");s&&s.addEventListener("click",()=>{ht(),se()})}let Ve=null;function li(e){Ve=e}function ri(e){o.allConnectedClients=[],o.clientsLoadedForConnId=null;const t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats");t&&(t.textContent="0"),n&&(n.textContent=""),Kt(e)}function Kt(e){const t=document.getElementById("clientsTableContainer");if(!t)return;const n=e||o.cachedConnections.find(d=>String(d.id)===String(o.selectedConnectionId)||d.is_selected)||null,i=n?n.name:o.lastStatus?.connection_name||"Active Cluster",a=n?n.host:o.lastStatus?.host||"127.0.0.1",l=n?n.port:o.lastStatus?.port||6379,r=n?(n.env||"LOCAL").toUpperCase():(o.lastStatus?.env||"LOCAL").toUpperCase();t.innerHTML=`
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 1rem;">
        <i data-lucide="users" style="width: 24px; height: 24px; color: #38bdf8;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Connected Clients for ${p(i)} (${p(a)}:${l})
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
  `,f();const s=document.getElementById("btnFetchClientsExplicit");s&&(s.onclick=()=>Le())}async function at(){O("clients"),o.clientsLoadedForConnId!==o.selectedConnectionId?Kt():jt(o.allConnectedClients)}function di(){O("keys")}async function Le(){const e=document.getElementById("clientsTableContainer"),t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats"),i=document.getElementById("clientsSearchInput"),a=o.selectedConnectionId;e&&(e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',f());try{const l=await fetch("/api/clients");if(!l.ok)throw new Error("Failed to load connected clients");const r=await l.json();if(o.selectedConnectionId!==a)return;o.allConnectedClients=r,o.clientsLoadedForConnId=a,t&&(t.textContent=o.allConnectedClients.length),n&&(n.textContent=`${o.allConnectedClients.length} total connections`),i&&(i.value=""),qe()}catch(l){if(o.selectedConnectionId!==a)return;if(e){e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error loading clients</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(l.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetryClients" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `,f();const r=document.getElementById("btnRetryClients");r&&(r.onclick=()=>Le())}}}let ce=!1;function qe(){const e=document.getElementById("clientsSearchInput"),t=e?e.value.trim().toLowerCase():"";let n=o.allConnectedClients||[];ce&&(n=n.filter(i=>!i.is_current_app)),t&&(n=n.filter(i=>(i.addr||"").toLowerCase().includes(t)||(i.name||"").toLowerCase().includes(t)||(i.user||"").toLowerCase().includes(t)||(i.cmd||"").toLowerCase().includes(t)||String(i.id).includes(t))),jt(n)}function jt(e){const t=document.getElementById("clientsTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="users" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.4;"></i>
        <p>No matching connected clients found.</p>
      </div>
    `,f();return}t.innerHTML=`
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
              ${o.lastStatus?.read_only?`
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
  `,f(),t.querySelectorAll(".btn-kill-client").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-id"),a=n.getAttribute("data-addr");ci(i,a)})})}}async function ci(e,t){if(o.lastStatus?.read_only){E("Client disconnection is disabled in Read-Only mode.","warning");return}if(confirm(`Are you sure you want to disconnect client #${e} (${t})?`))try{const n=await fetch(`/api/clients/${e}`,{method:"DELETE"}),i=await n.json();if(!n.ok)throw new Error(i.detail||"Failed to disconnect client");E(`Disconnected client #${e}`,"success"),await Le(),Ve&&await Ve()}catch(n){E("Error disconnecting client: "+n.message,"error")}}function pi(){const e=document.getElementById("btnCloseClientsModal");e&&e.addEventListener("click",di);const t=document.getElementById("btnOpenClientsModal");t&&t.addEventListener("click",at);const n=document.getElementById("btnRefreshClientsModal");n&&n.addEventListener("click",Le);const i=document.getElementById("clientsSearchInput");i&&i.addEventListener("input",()=>{qe()});const a=document.getElementById("btnToggleHideInternalClients");a&&a.addEventListener("click",()=>{ce=!ce,a.classList.toggle("active",ce),ce?(a.style.borderColor="var(--accent-primary)",a.style.color="var(--accent-primary)"):(a.style.borderColor="",a.style.color=""),qe()})}let te=null,A=[],W=null,G=null,Ut=[];function mi(e,t){W=e,G=t}function ui(e){typeof e=="function"&&Ut.push(e)}function Vt(e){const t=e||o.cachedConnections.find(b=>b.id===o.selectedConnectionId||b.is_selected)||null,n=t?t.name:o.lastStatus?.connection_name||"Active Target",i=t?t.host:o.lastStatus?.host||"127.0.0.1",a=t?t.port:o.lastStatus?.port||6379,l=(t?t.env||"LOCAL":o.lastStatus?.env||"LOCAL").toUpperCase(),s=(t?t.conn_type||"standalone":o.lastStatus?.is_cluster?"cluster":"standalone")==="cluster"||o.lastStatus?.is_cluster,d=o.lastStatus?.read_only,c=`
    <span>Target:</span>
    <strong class="context-conn-name" style="color: var(--text-primary); font-weight: 600;">${p(n)}</strong>
    <span class="context-conn-endpoint" style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.72rem;">(${p(i)}:${a})</span>
    <span class="badge-env badge-env-${l.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">${l}</span>
    <span class="top-conn-tag" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">${s?"CLUSTER":"STANDALONE"}</span>
    ${d?'<span class="badge-readonly" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;"><i data-lucide="lock" style="width: 10px; height: 10px; vertical-align: middle;"></i> READ ONLY</span>':""}
  `,m=document.getElementById("benchmarkTargetSubtitle");m&&(m.innerHTML=c+' <span style="color: var(--text-muted); font-size: 0.7rem;">| Namespace: __ri_bench__</span>');const y=document.getElementById("memoryTargetSubtitle");y&&(y.innerHTML=c);const g=document.getElementById("slowlogTargetSubtitle");g&&(g.innerHTML=c);const h=document.getElementById("topologyTargetSubtitle");h&&(h.innerHTML=c);const w=document.getElementById("clientsTargetSubtitle");w&&(w.innerHTML=c);const C=document.getElementById("keysTargetText");C&&(C.innerHTML=`
      <span class="target-conn-name">${p(n)}</span>
      <span class="target-endpoint">(${p(i)}:${a})</span>
    `),f()}function st(e){const t=o.cachedConnections.find(n=>n.id===e)||null;Vt(t);for(const n of Ut)try{n(t)}catch(i){console.warn("Error running cluster-switched callback:",i)}}async function Z(){const e=document.getElementById("connectionsList");try{const[t,n]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]),i=await t.json();if(o.cachedConnections=i||[],o.selectedConnectionId){const a=o.cachedConnections.find(l=>l.id===o.selectedConnectionId);if(a&&a.is_connected)o.cachedConnections.forEach(l=>{l.is_selected=l.id===o.selectedConnectionId});else{const l=o.cachedConnections.find(r=>r.is_selected&&r.is_connected)||o.cachedConnections.find(r=>r.is_connected);l&&(o.selectedConnectionId=l.id,localStorage.setItem("redis_insight_selected_conn_id",l.id),o.cachedConnections.forEach(r=>{r.is_selected=r.id===l.id}))}}else{const a=o.cachedConnections.find(l=>l.is_selected&&l.is_connected)||o.cachedConnections.find(l=>l.is_connected);a&&(o.selectedConnectionId=a.id,localStorage.setItem("redis_insight_selected_conn_id",a.id))}if(n.ok){const a=await n.json();o.currentLimit=a.limit||2}We()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function qt(e,t){const n=document.getElementById("connectedCountDisplay"),i=document.getElementById("connLimitDisplay"),a=document.getElementById("connLimitSelect"),l=document.getElementById("limitProgressDots"),r=document.getElementById("limitCountPill");if(n&&(n.textContent=e),i&&(i.textContent=t),a&&String(a.value)!==String(t)&&(a.value=String(t)),r&&(e>=t&&t>0?(r.classList.add("at-limit"),r.title="Connection limit reached"):(r.classList.remove("at-limit"),r.title=`${e} of ${t} connections in use`)),l){let s="";for(let d=0;d<t;d++){const c=d<e;s+=`<span class="limit-slot-dot ${c?"filled":"empty"}" title="Slot ${d+1}: ${c?"Connected":"Available"}"></span>`}l.innerHTML=s}}function We(){const e=document.getElementById("connectionsList");if(!e)return;const t=document.getElementById("totalConnCountBadge");t&&(t.textContent=o.cachedConnections.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(s=>{const d=s.getAttribute("data-env");let c=0;d==="ALL"?c=o.cachedConnections.length:c=o.cachedConnections.filter(m=>(m.env||"LOCAL").toUpperCase()===d).length,s.textContent=`${d} (${c})`});const i=(o.currentConnSearch||"").trim().toLowerCase(),a=o.currentEnvFilter,l=o.cachedConnections.filter(s=>{if(a!=="ALL"&&(s.env||"LOCAL").toUpperCase()!==a)return!1;if(i){const d=(s.name||"").toLowerCase().includes(i),c=(s.host||"").toLowerCase().includes(i),m=(s.env||"").toLowerCase().includes(i),y=(s.conn_type||"").toLowerCase().includes(i);if(!d&&!c&&!m&&!y)return!1}return!0});l.sort((s,d)=>{const c=s.is_connected?1:0,m=d.is_connected?1:0;if(m!==c)return m-c;const y=s.is_selected?1:0,g=d.is_selected?1:0;return g!==y?g-y:(s.name||"").localeCompare(d.name||"")});const r=o.cachedConnections.filter(s=>s.is_connected).length;if(qt(r,o.currentLimit),l.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${i?`No results found for "${p(i)}"`:`No connections configured in ${p(a)}`}
        </span>
      </div>
    `,f();return}e.innerHTML=l.map(s=>{const d=(s.env||"LOCAL").toUpperCase(),c=`badge-env-${d.toLowerCase()}`,m=s.conn_type==="cluster",y=s.conn_type==="sentinel",g=s.source==="config",h=!!s.is_connected,w=!!s.is_selected;return`
      <div class="conn-card ${h?"is-connected":""} ${w?"selected active":""}" data-id="${s.id}" title="Click to review config & connection options">
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${w?`
              <span class="conn-status-indicator active" title="Active Cluster (Browsing Keys)">
                <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
              </span>
            `:h?`
              <span class="conn-status-indicator connected" title="Connected Cluster">
                <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
              </span>
            `:`
              <span class="conn-status-dot idle" title="Disconnected"></span>
            `}
          </div>

          <div class="conn-title-wrap" style="display: flex; align-items: center; gap: 0.35rem; min-width: 0; flex: 1;">
            <span class="conn-name" title="${p(s.name)}">${p(s.name)}</span>
            <span class="badge-env ${c}" style="font-size: 0.62rem; padding: 0.05rem 0.35rem; flex-shrink: 0;">${d}</span>
          </div>

          <div class="conn-status-badge-wrap">
            ${w?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:h?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${p(s.host)}:${s.port}">
            <i data-lucide="${m?"network":y?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${p(s.host)}:${s.port}</span>
          </div>

          <div class="conn-tags">
            ${s.read_only?'<span class="badge-readonly" title="Read-Only Mode: Mutating operations locked">🔒 RO</span>':""}
            ${m?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${y?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!m&&!y?`<span class="badge-db">DB${s.db}</span>`:""}
            ${s.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${s.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${g?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${h?`
            ${w?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${s.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${s.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${m||h?`
              <button type="button" class="btn-hover-action btn-view-topology-card" data-id="${s.id}" title="View topology & nodes">
                <i data-lucide="layers" style="width: 11px; height: 11px;"></i>
              </button>
            `:""}
          `:`
            <button type="button" class="btn-hover-action btn-hover-connect btn-card-open-config" data-id="${s.id}" title="Review config & Connect">
              <i data-lucide="play" style="width: 11px; height: 11px;"></i>
              <span>Connect</span>
            </button>
            ${g?"":`
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${s.id}" data-name="${p(s.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>
      </div>
    `}).join(""),f(),e.querySelectorAll(".conn-card").forEach(s=>{s.addEventListener("click",d=>{if(d.target.closest(".btn-delete-conn")||d.target.closest(".btn-view-topology-card")||d.target.closest(".btn-card-disconnect")||d.target.closest(".btn-card-select")||d.target.closest(".btn-card-open-config"))return;const c=s.getAttribute("data-id"),m=o.cachedConnections.find(y=>y.id===c);m&&Ge(m)})}),e.querySelectorAll(".btn-card-disconnect").forEach(s=>{s.addEventListener("click",async d=>{d.stopPropagation();const c=s.getAttribute("data-id");await lt(c)})}),e.querySelectorAll(".btn-card-select").forEach(s=>{s.addEventListener("click",async d=>{d.stopPropagation();const c=s.getAttribute("data-id");await Gt(c)})}),e.querySelectorAll(".btn-card-open-config").forEach(s=>{s.addEventListener("click",d=>{d.stopPropagation();const c=s.getAttribute("data-id"),m=o.cachedConnections.find(y=>y.id===c);m&&Ge(m)})}),e.querySelectorAll(".btn-view-topology-card").forEach(s=>{s.addEventListener("click",async d=>{d.stopPropagation();const c=s.getAttribute("data-id");await se(c)})}),e.querySelectorAll(".btn-delete-conn").forEach(s=>{s.addEventListener("click",async d=>{d.stopPropagation();const c=s.getAttribute("data-id"),m=s.getAttribute("data-name");confirm(`Are you sure you want to delete '${m}'?`)&&await fi(c)})})}function yi(e){if(!e)return[];if(Array.isArray(e))return e.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t));if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n))}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}return[]}function Ge(e){o.activeConfigConn=e;const t=document.getElementById("clusterConfigModal"),n=document.getElementById("cfgModalTitle"),i=document.getElementById("cfgModalSubtitle"),a=document.getElementById("cfgModalBody"),l=document.getElementById("cfgModalFooter");if(!t||!a||!l)return;n&&(n.textContent=e.name||"Cluster Configuration"),i&&(i.textContent="Review configuration before connecting");const r=!!e.is_connected,s=!!e.is_selected,d=e.conn_type==="cluster",c=yi(e.cluster_nodes),m=o.cachedConnections.filter(D=>D.is_connected).length,y=!r&&m>=o.currentLimit;a.innerHTML=`
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
            ${c.length>0?c.map(D=>`
                  <span class="seed-node-pill" title="${p(D)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${p(D)}
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
      <span>Connected Limit: <strong>${m} of ${o.currentLimit}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${y?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${o.currentLimit} maximum). Please disconnect a connected cluster first or increase the limit.</span>
      </div>
    `:""}

    <div id="cfgTestResultBox" class="test-result-box" style="margin-top: 0.65rem;"></div>
  `,r?l.innerHTML=`
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
    `:l.innerHTML=`
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
    `,f(),t.classList.add("active");const g=document.getElementById("btnCloseConfigModal");g&&(g.onclick=()=>t.classList.remove("active"));const h=document.getElementById("btnEditFromConfig");h&&(h.onclick=()=>{t.classList.remove("active"),Qt(e)});const w=document.getElementById("btnConnectFromConfig");w&&(w.onclick=async()=>{await Wt(e.id),t.classList.remove("active")});const C=document.getElementById("btnDisconnectFromConfig");C&&(C.onclick=async()=>{await lt(e.id),t.classList.remove("active")});const b=document.getElementById("btnSelectFromConfig");b&&(b.onclick=async()=>{await Gt(e.id),t.classList.remove("active")});const k=document.getElementById("btnTopologyFromConfig");k&&(k.onclick=async()=>{t.classList.remove("active"),await se(e.id)});const I=document.getElementById("btnTestFromConfig");I&&(I.onclick=async()=>{await gi(e)})}async function gi(e){const t=document.getElementById("cfgTestResultBox"),n=document.getElementById("btnTestFromConfig");n&&(n.disabled=!0,n.innerHTML="Testing..."),t&&(t.className="test-result-box",t.innerHTML="");try{const a=await(await fetch(`/api/connections/${e.id}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();a.success?(t.className="test-result-box success",t.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${a.latency_ms} ms</strong> (Redis v${a.redis_version})</span>
      `):(t.className="test-result-box error",t.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${p(a.error||"Connection refused")}</span>
      `)}catch(i){t&&(t.className="test-result-box error",t.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${p(i.message)}</span>`)}finally{n&&(n.disabled=!1,n.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),f()}}async function Wt(e){if(o.cachedConnections.filter(n=>n.is_connected&&n.id!==e).length>=o.currentLimit){E(`Connection limit reached: Maximum ${o.currentLimit} connected cluster(s) allowed. Please disconnect an existing cluster first.`,"warning",4500);return}try{const n=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),i=await n.json();if(!n.ok)throw new Error(i.detail||"Failed to connect to cluster");o.selectedConnectionId=e,localStorage.setItem("redis_insight_selected_conn_id",e),await Z(),st(e),E("Connected to cluster successfully","success"),W&&await W(),G&&await G()}catch(n){E("Connection error: "+n.message,"error")}}async function lt(e){try{const t=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to disconnect cluster");if(o.selectedConnectionId===e){const a=o.cachedConnections.find(l=>l.is_connected&&l.id!==e);a?(o.selectedConnectionId=a.id,localStorage.setItem("redis_insight_selected_conn_id",a.id)):(o.selectedConnectionId=null,localStorage.removeItem("redis_insight_selected_conn_id"))}await Z(),st(o.selectedConnectionId),W&&await W(),o.cachedConnections.some(a=>a.is_connected&&a.id!==e)?G&&await G():(o.keysTableRows=[],o.loadedKeysSet.clear(),o.totalScanned=0,o.currentCursor=0,o.scanComplete=!1,o.dbTotalKeys=0,Jt())}catch(t){E("Disconnect error: "+t.message,"error")}}async function Gt(e){try{o.selectedConnectionId=e,localStorage.setItem("redis_insight_selected_conn_id",e);const t=await fetch(`/api/connections/${e}/select`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to switch cluster");const i=document.getElementById("keyDetailModal");i&&i.classList.remove("active"),o.activeDetailKey=null,o.activeDetailData=null,await Z(),st(e),W&&await W(),G&&await G()}catch(t){E("Switch error: "+t.message,"error")}}function Jt(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="flex"),n&&(n.style.display="none");const i=document.getElementById("btnConnectFirstAvailable");i&&(i.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${o.cachedConnections.length})`,o.cachedConnections.length>0&&(i.onclick=()=>Ge(o.cachedConnections[0]))),f()}async function fi(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");E("Connection deleted","success"),await Z(),W&&await W(),G&&await G()}catch(t){E("Delete error: "+t.message,"error")}}function ne(){const e=document.getElementById("clusterNodesList"),t=document.getElementById("clusterNodeCountBadge");if(e){if(t&&(t.textContent=`${A.length} configured`),A.length===0){e.innerHTML=`
      <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
        No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
      </div>
    `;return}e.innerHTML=A.map((n,i)=>{const a=n.role==="master",l=n.role==="replica",r=n.role==="seed",s=a?"master":l?"replica":"",d=a?"master":l?"replica":r?"seed":"manual",c=a?"Master":l?"Replica":r?"Seed":"Node";return`
      <span class="cluster-node-chip ${s}">
        <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
        <span>${p(n.host)}:${n.port}</span>
        <span class="cluster-node-role-badge ${d}">${c}</span>
        <button type="button" class="cluster-node-chip-remove" data-idx="${i}" title="Remove node">
          <i data-lucide="x" style="width: 11px; height: 11px;"></i>
        </button>
      </span>
    `}).join(""),e.querySelectorAll(".cluster-node-chip-remove").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation();const a=parseInt(n.getAttribute("data-idx"),10);!isNaN(a)&&a>=0&&a<A.length&&(A.splice(a,1),ne())})}),f()}}function Qt(e){te=e.id;const t=document.getElementById("connectionModal"),n=document.getElementById("connectionModalTitle"),i=document.getElementById("btnSaveConn"),a=document.getElementById("connPassword");n&&(n.innerHTML='<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection'),i&&(i.textContent="Update Connection"),document.getElementById("connName").value=e.name||"",document.getElementById("connEnv").value=(e.env||"DEV").toUpperCase();const l=document.getElementById("connTypeSelect");l.value=e.conn_type||"standalone",document.getElementById("connHost").value=e.host||"localhost",document.getElementById("connPort").value=e.port||6379,document.getElementById("connDb").value=e.db||0,document.getElementById("connUsername").value=e.username||"",document.getElementById("connTls").checked=!!e.use_tls,document.getElementById("connReadOnly").checked=!!e.read_only,a&&(a.value="",e.has_password?a.placeholder="•••••••• (Leave blank to keep saved password)":a.placeholder="Enter password (or leave empty)");const r=document.getElementById("clusterNodesGroup"),s=document.getElementById("connHostLabel"),d=document.getElementById("connDbRow");if(A=[],e.conn_type==="cluster"){if(r&&(r.style.display="block"),s&&(s.textContent="Seed Node Host *"),d&&(d.style.display="none"),e.cluster_nodes)try{const m=typeof e.cluster_nodes=="string"?JSON.parse(e.cluster_nodes):e.cluster_nodes;Array.isArray(m)&&(A=m.map(y=>{if(typeof y=="string"&&y.includes(":")){const g=y.split(":");return{host:g[0].trim(),port:parseInt(g[1],10)||6379}}return{host:y.host||"127.0.0.1",port:parseInt(y.port,10)||6379}}))}catch{}}else r&&(r.style.display="none"),s&&(s.textContent="Host *"),d&&(d.style.display="flex");ne();const c=document.getElementById("testResultBox");c&&(c.className="test-result-box",c.innerHTML=""),f(),t&&t.classList.add("active")}function hi(){window.openEditConnectionModal=Qt;const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const u=parseInt(e.value,10);try{const v=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:u})});if(v.ok){const x=await v.json();o.currentLimit=x.limit,qt(x.connected_count,x.limit)}}catch(v){console.warn("Failed to update limit:",v)}});const t=document.getElementById("connSearchInput");t&&t.addEventListener("input",()=>{o.currentConnSearch=t.value.trim(),We()});const n=document.getElementById("envFilterPills");n&&n.addEventListener("click",u=>{const v=u.target.closest(".env-pill-btn");v&&v.dataset.env&&(n.querySelectorAll(".env-pill-btn").forEach(x=>x.classList.remove("active")),v.classList.add("active"),o.currentEnvFilter=v.dataset.env,We())});const i=document.getElementById("btnReloadConfigStatic");i&&i.addEventListener("click",async()=>{i.disabled=!0;try{await fetch("/api/connections/reload-config",{method:"POST"}),await Z()}catch(u){console.warn("Reload config failed:",u)}finally{i.disabled=!1}});const a=document.getElementById("connTypeSelect"),l=document.getElementById("clusterNodesGroup"),r=document.getElementById("connHostLabel"),s=document.getElementById("connPortLabel"),d=document.getElementById("connHost"),c=document.getElementById("connPort"),m=document.getElementById("connDbGroup");a&&l&&a.addEventListener("change",()=>{const u=a.value==="cluster";l.style.display=u?"block":"none",m&&(m.style.display=u?"none":"block"),u?(r&&(r.textContent="Primary Seed Host *"),s&&(s.textContent="Seed Port *"),d&&(d.value==="localhost"||!d.value)&&(d.value="127.0.0.1"),c&&(c.value==="6379"||!c.value)&&(c.value="7000"),A.length===0&&d&&d.value&&c&&c.value&&A.push({host:d.value.trim(),port:parseInt(c.value,10)||7e3,role:"seed"}),ne()):(r&&(r.textContent="Host *"),s&&(s.textContent="Port *"),c&&c.value==="7000"&&(c.value="6379"))});const y=document.getElementById("btnAutoDiscoverCluster"),g=document.getElementById("clusterDiscoveryStatus");y&&y.addEventListener("click",async()=>{const u=d?d.value.trim():"127.0.0.1",v=c&&parseInt(c.value,10)||7e3,x=document.getElementById("connUsername").value.trim()||null,L=document.getElementById("connPassword").value||null,T=document.getElementById("connTls").checked;if(!u){g&&(g.className="cluster-discovery-status error",g.style.display="flex",g.innerHTML='<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>',f());return}y.disabled=!0,y.innerHTML="Discovering...";try{const _=await(await fetch("/api/connections/discover-cluster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:u,port:v,username:x,password:L,use_tls:T})})).json();_.success&&_.nodes&&_.nodes.length>0?(A=_.nodes.map(N=>({host:N.host,port:N.port,role:N.role,is_myself:N.is_myself,slots:N.slots})),ne(),g&&(g.className="cluster-discovery-status success",g.style.display="flex",g.innerHTML=`
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${_.total_nodes} nodes</strong> (${_.masters_count} masters, ${_.replicas_count} replicas)</span>
            `,f())):g&&(g.className="cluster-discovery-status error",g.style.display="flex",g.innerHTML=`
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${p(_.error||"Cluster discovery failed.")}</span>
            `,f())}catch($){g&&(g.className="cluster-discovery-status error",g.style.display="flex",g.innerHTML=`
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${p($.message)}</span>
          `,f())}finally{y.disabled=!1,y.innerHTML='<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes',f()}});const h=document.getElementById("inputCustomClusterNode"),w=document.getElementById("btnAddCustomClusterNode");function C(){if(!h)return;const u=h.value.trim();if(!u)return;let v="127.0.0.1",x=7e3;if(u.includes(":")){const T=u.split(":");v=T[0].trim()||"127.0.0.1",x=parseInt(T[1].trim(),10)||7e3}else isNaN(parseInt(u,10))?v=u:(x=parseInt(u,10),v=d?d.value.trim():"127.0.0.1");A.some(T=>T.host===v&&T.port===x)||(A.push({host:v,port:x,role:"manual"}),ne()),h.value=""}w&&w.addEventListener("click",C),h&&h.addEventListener("keydown",u=>{u.key==="Enter"&&(u.preventDefault(),C())});const b=document.getElementById("connectionModal"),k=document.getElementById("btnAddConn");k&&b&&k.addEventListener("click",()=>{te=null,document.getElementById("connectionForm").reset();const u=document.getElementById("connectionModalTitle"),v=document.getElementById("btnSaveConn"),x=document.getElementById("connPassword");u&&(u.innerHTML='<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection'),v&&(v.textContent="Save Connection"),x&&(x.placeholder="Leave empty if none");const L=document.getElementById("connEnv").value;document.getElementById("connReadOnly").checked=L==="PROD",document.getElementById("clusterNodesGroup").style.display="none",document.getElementById("connHostLabel").textContent="Host *",document.getElementById("connDbRow").style.display="flex",A=[],ne();const T=document.getElementById("testResultBox");T&&(T.className="test-result-box",T.innerHTML=""),f(),b.classList.add("active")});const I=document.getElementById("btnCloseModal");I&&b&&I.addEventListener("click",()=>b.classList.remove("active"));const D=document.getElementById("btnCancelModal");D&&b&&D.addEventListener("click",()=>b.classList.remove("active"));const M=document.getElementById("connEnv");M&&M.addEventListener("change",u=>{if(u.target.value==="PROD"){const v=document.getElementById("connReadOnly");v&&(v.checked=!0)}});const U=document.getElementById("btnTestConnModal");U&&U.addEventListener("click",async()=>{const u=document.getElementById("connTypeSelect").value,v=document.getElementById("connHost").value.trim()||"localhost",x=parseInt(document.getElementById("connPort").value,10)||6379,L=parseInt(document.getElementById("connDb").value,10)||0,T=document.getElementById("connUsername").value.trim()||null,$=document.getElementById("connPassword").value,_=document.getElementById("connTls").checked;let N=null;u==="cluster"&&A.length>0&&(N=JSON.stringify(A.map(z=>({host:z.host,port:z.port}))));const B=document.getElementById("testResultBox");U.disabled=!0,U.innerHTML="Testing...",B&&(B.className="test-result-box",B.innerHTML="");try{let z;te&&!$?z=await fetch(`/api/connections/${te}/test`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:v,port:x,db:L,username:T,use_tls:_,conn_type:u,cluster_nodes:N})}):z=await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:v,port:x,db:L,username:T,password:$||null,use_tls:_,conn_type:u,cluster_nodes:N})});const K=await z.json();if(K.success){B.className="test-result-box success";const R=K.is_cluster?` • Cluster Mode (${K.cluster_nodes_count||A.length} nodes reachable)`:"";B.innerHTML=`
            <i data-lucide="check-circle-2"></i>
            <span>Connected! Latency: <strong>${K.latency_ms} ms</strong>${R} (Redis v${K.redis_version})</span>
          `}else B.className="test-result-box error",B.innerHTML=`
            <i data-lucide="alert-circle"></i>
            <span>Failed: ${p(K.error||"Connection refused")}</span>
          `}catch(z){B&&(B.className="test-result-box error",B.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${p(z.message)}</span>`)}finally{U.disabled=!1,U.innerHTML='<i data-lucide="zap"></i> Test Connection',f()}});const H=document.getElementById("connectionForm");H&&H.addEventListener("submit",async u=>{u.preventDefault();const v=document.getElementById("connName").value.trim(),x=document.getElementById("connEnv").value,L=document.getElementById("connTypeSelect").value;let T=document.getElementById("connHost").value.trim()||"localhost",$=parseInt(document.getElementById("connPort").value,10)||6379;const _=parseInt(document.getElementById("connDb").value,10)||0,N=document.getElementById("connUsername").value.trim()||null,B=document.getElementById("connPassword").value,z=document.getElementById("connTls").checked,K=document.getElementById("connAutoActivate").checked,R=document.getElementById("connReadOnly")?.checked||!1;let P=null;L==="cluster"&&(A.length>0?(P=JSON.stringify(A.map(F=>({host:F.host,port:F.port}))),T=A[0].host,$=A[0].port):P=JSON.stringify([{host:T,port:$}]));try{if(te){const F={name:v,env:x,conn_type:L,host:T,port:$,cluster_nodes:P,db:_,username:N,use_tls:z,read_only:R};B&&(F.password=B);const re=await fetch(`/api/connections/${te}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)});if(!re.ok){const Te=await re.json().catch(()=>({}));throw new Error(Te.detail||"Failed to update connection")}}else{const F={name:v,env:x,conn_type:L,host:T,port:$,cluster_nodes:P,db:_,username:N,password:B||null,use_tls:z,read_only:R},re=await fetch(`/api/connections?auto_activate=${K}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)});if(!re.ok){const Te=await re.json().catch(()=>({}));throw new Error(Te.detail||"Failed to save connection")}}b.classList.remove("active"),te=null,H.reset(),A=[],ne(),await Z(),E("Connection saved successfully","success"),W&&await W(),G&&await G()}catch(F){E("Error saving: "+F.message,"error")}})}typeof window<"u"&&(window.__redisState=o,window.__redisKeys={updateScanUI:pe,resetAndScan:q});const vi=window.fetch;window.fetch=function(e,t){let n="";if(typeof e=="string"?n=e:e instanceof URL?n=e.toString():e&&typeof e.url=="string"&&(n=e.url),n.startsWith("/api/")||n.includes("/api/")){const i=o.selectedConnectionId||localStorage.getItem("redis_insight_selected_conn_id");if(i)if(e instanceof Request)try{e.headers.set("X-Connection-ID",i)}catch{}else{t=t||{};const a=new Headers(t.headers||{});a.has("X-Connection-ID")||a.set("X-Connection-ID",i),t={...t,headers:a}}}return vi.call(this,e,t)};mi(le,q);So(q);go(et);Ko(oe,et,le);li(le);ti(Wt);ui(e=>{jo(e),no(e),qo(e),ri(e),oi(e)});ge("benchmark",()=>Ze());ge("memory",()=>nt());ge("slowlog",()=>Pt());ge("topology",()=>se());ge("clients",()=>at());function bi(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
                    <button type="button" class="view-mode-tab ${o.currentViewMode==="table"?"active":""}" id="btnViewTable" data-mode="table" title="Flat Table View">
                      <i data-lucide="table" style="width: 13px; height: 13px;"></i>
                      <span>Table</span>
                    </button>
                    <button type="button" class="view-mode-tab ${o.currentViewMode==="tree"?"active":""}" id="btnViewTree" data-mode="tree" title="Virtual Tree / Namespace Folder View">
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
                    ${Yt.map(t=>`<option value="${t}"${t===50?" selected":""}>${t.toLocaleString()}</option>`).join("")}
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
                  <button type="button" class="btn btn-secondary" id="btnExportSlowlogModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
                    <i data-lucide="download" style="width: 13px; height: 13px;"></i>
                    Export
                  </button>
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
                <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
                  <div style="display: inline-flex; align-items: center; gap: 0.3rem;">
                    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Time Window:</span>
                    <button type="button" class="env-pill-btn slowlog-time-btn active" data-time-window="all">All</button>
                    <button type="button" class="env-pill-btn slowlog-time-btn" data-time-window="5m">5m</button>
                    <button type="button" class="env-pill-btn slowlog-time-btn" data-time-window="15m">15m</button>
                    <button type="button" class="env-pill-btn slowlog-time-btn" data-time-window="1h">1h</button>
                    <button type="button" class="env-pill-btn slowlog-time-btn" data-time-window="24h">24h</button>
                  </div>
                  <div class="actions-divider" style="height: 18px; margin: 0 0.15rem;"></div>
                  <div style="display: inline-flex; align-items: center; gap: 0.3rem;">
                    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Min Latency:</span>
                    <button type="button" class="env-pill-btn slowlog-filter-btn active" data-min-duration="0">All</button>
                    <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="1">&gt; 1ms</button>
                    <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="5">&gt; 5ms</button>
                    <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="10">&gt; 10ms</button>
                    <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="50">&gt; 50ms</button>
                  </div>
                  <div id="slowlogNodeFilterContainer" style="display: inline-flex; align-items: center;"></div>
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

    <!-- Export Slowlog Modal (Dialog) -->
    <div class="modal-backdrop" id="exportSlowlogModal">
      <div class="config-modal-card" style="max-width: 480px;">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i data-lucide="download" style="color: #38bdf8; width: 20px; height: 20px;"></i>
            <div>
              <h3 class="modal-title">Export Slowlog Entries</h3>
              <div style="font-size: 0.72rem; color: var(--text-muted);">Download slow query telemetry and command arguments</div>
            </div>
          </div>
          <button type="button" class="btn-icon" id="btnCloseExportSlowlogModal">
            <i data-lucide="x"></i>
          </button>
        </div>
        <div style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem;">
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.75rem 1rem; font-size: 0.8rem;">
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-muted);">Time Window:</span>
              <strong id="exportSlowlogTimeWindowDisplay" style="color: #38bdf8;">All</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 0.25rem;">
              <span style="color: var(--text-muted);">Min Latency:</span>
              <span id="exportSlowlogMinLatencyDisplay" style="font-weight: 500;">All (&gt; 0ms)</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 0.25rem;">
              <span style="color: var(--text-muted);">Filtered Entries:</span>
              <strong id="exportSlowlogFilteredCount" style="color: var(--accent-primary);">0 entries</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 0.25rem;">
              <span style="color: var(--text-muted);">Total Buffer:</span>
              <span id="exportSlowlogTotalCount" style="color: var(--text-secondary);">0 entries</span>
            </div>
          </div>

          <div>
            <label style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.4rem; display: block;">Export Format</label>
            <div style="display: flex; gap: 1rem;">
              <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; cursor: pointer;">
                <input type="radio" name="exportSlowlogFormatRadio" value="json" checked>
                <span>JSON (Full telemetry &amp; args array)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; cursor: pointer;">
                <input type="radio" name="exportSlowlogFormatRadio" value="csv">
                <span>CSV (Spreadsheet compatible)</span>
              </label>
            </div>
          </div>

          <div>
            <label style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.4rem; display: block;">Export Scope</label>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; cursor: pointer;">
                <input type="radio" name="exportSlowlogScopeRadio" value="filtered" checked>
                <span>Currently Filtered Entries (<strong id="exportSlowlogScopeFilteredText">0</strong>)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; cursor: pointer;">
                <input type="radio" name="exportSlowlogScopeRadio" value="all">
                <span>All Loaded Buffer Entries (<strong id="exportSlowlogScopeAllText">0</strong>)</span>
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 0.85rem 1.25rem; background: rgba(0,0,0,0.25); border-top: 1px solid var(--border-color); display: flex; justify-content: flex-end; gap: 0.6rem;">
          <button type="button" class="btn btn-secondary" id="btnCancelExportSlowlogModal">Cancel</button>
          <button type="button" class="btn btn-primary" id="btnExecuteExportSlowlog" style="display: flex; align-items: center; gap: 0.35rem; background: #38bdf8; border-color: #38bdf8; color: #07090e; font-weight: 600;">
            <i data-lucide="download" style="width: 14px; height: 14px;"></i>
            <span>Download Export</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Slowlog Command Zoom & Detailed Inspector Modal -->
    <div class="modal-backdrop" id="slowlogDetailModal">
      <div class="config-modal-card slowlog-detail-card">
        <div class="modal-header" style="flex-shrink: 0;">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <i data-lucide="zoom-in" style="color: #38bdf8; width: 22px; height: 22px;"></i>
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <h3 class="modal-title" id="slowlogDetailTitle">Slowlog Command Details</h3>
                <span id="slowlogDetailDurationBadge" class="badge-duration badge-duration-warning" style="font-size: 0.75rem;">-- ms</span>
              </div>
              <div id="slowlogDetailSubtitle" style="font-size: 0.72rem; color: var(--text-muted);">
                Entry #-- • Timestamp: --
              </div>
            </div>
          </div>
          <button type="button" class="btn-icon" id="btnCloseSlowlogDetailModal">
            <i data-lucide="x"></i>
          </button>
        </div>

        <div id="slowlogDetailBody" style="padding: 1.25rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; flex: 1;">
          <!-- Content dynamically rendered by slowlog.js -->
        </div>

        <div class="modal-actions" style="padding: 0.75rem 1.25rem; background: var(--bg-secondary); border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-shrink: 0;">
          <div id="slowlogDetailFooterTelemetry" style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
            --
          </div>
          <button type="button" class="btn btn-secondary" id="btnDismissSlowlogDetailModal">Close</button>
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
  `)}async function le(){const e=document.getElementById("topConnContainer"),t=document.getElementById("topVitalsContainer");try{const i=await(await fetch("/api/status")).json();if(i.connected){const a=o.cachedConnections.find(b=>b.is_selected)||o.cachedConnections.find(b=>b.id===i.connection_id)||o.cachedConnections.find(b=>b.is_connected),l=a&&a.conn_type==="cluster"||i.cluster_nodes&&i.cluster_nodes.length>0||i.is_cluster,r=i.cluster_nodes_count||(i.node_stats&&i.node_stats.length>0?i.node_stats.length:1),s=(i.node_stats||[]).filter(b=>b.role==="master");if(o.lastStatus=i,Ao(i.connection_id||a?.id),ai(),Vt(a),e){const b=(i.env||a?.env||"LOCAL").toUpperCase();e.innerHTML=`
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${p(i.connection_name||"Connected")}">${p(i.connection_name||"Connected")}</span>
            <span class="badge-env badge-env-${b.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem; margin-right: 0.25rem;">${b}</span>
            ${i.read_only?'<span class="badge-readonly" title="Read-Only Mode: All write, update, and delete actions are locked" style="margin-right: 0.25rem;"><i data-lucide="lock"></i> READ ONLY</span>':""}
            <span class="top-conn-endpoint">${i.host}:${i.port}</span>
            <span class="top-conn-tag">${l?"CLUSTER":`DB${i.db}`}</span>
            <button type="button" class="top-conn-disconnect" id="btnTopDisconnect" title="Disconnect ${p(i.connection_name||"instance")}">
              <i data-lucide="power" style="width: 12px; height: 12px;"></i>
            </button>
          </div>
        `}t&&(t.innerHTML=`
          <div class="top-vitals-capsule">
            <div class="vital-item clickable" id="btnOpenTopologyTop" title="View Cluster Topology & Node Health">
              <i data-lucide="layers" style="width: 12px; height: 12px; color: ${l?"#a78bfa":"var(--accent-primary)"};"></i>
              <span class="vital-val" style="color: ${l?"#c084fc":"var(--accent-primary)"};">
                ${l?`${r} ${r===1?"Node":"Nodes"}`:"1 Node"}
              </span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="PING round-trip latency">
              <i data-lucide="zap" style="width: 11px; height: 11px; color: var(--accent-success);"></i>
              <span class="vital-val" style="color: var(--accent-success);">${i.latency_ms} ms</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item${s.length?" clickable":""}" id="btnOpenKeyspaceTop" title="${s.length?`Total keys across ${s.length} master nodes. Click for per-node breakdown`:"Total keys in active keyspace"}">
              <span class="vital-label">Keys:</span>
              <span class="vital-val">${(i.dbsize||0).toLocaleString()}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item clickable" id="btnOpenMemoryTop" title="Memory usage. Click to open Memory Analysis & BigKeys Profiler">
              <i data-lucide="pie-chart" style="width: 12px; height: 12px; color: #a78bfa;"></i>
              <span class="vital-val" style="color: #c084fc;">${i.used_memory_human||"N/A"}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item clickable" id="btnOpenClientsModal" title="Connected clients. Click to view clients list">
              <i data-lucide="users" style="width: 12px; height: 12px; color: #38bdf8;"></i>
              <span class="vital-val" style="color: #38bdf8;">${i.connected_clients||1}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="Redis server version">
              <span class="vital-label">v${i.redis_version}</span>
            </div>
          </div>
        `);const d=document.getElementById("tabBadgeKeys");d&&(d.textContent=(i.dbsize||0).toLocaleString());const c=document.getElementById("tabBadgeTopology");c&&(c.textContent=l?`${r} Nodes`:"1 Node");const m=document.getElementById("tabBadgeClients");m&&(m.textContent=String(i.connected_clients||1)),f();const y=document.getElementById("btnTopDisconnect");y&&y.addEventListener("click",()=>{i.connection_id&&lt(i.connection_id)});const g=document.getElementById("btnOpenClientsModal");g&&g.addEventListener("click",at);const h=document.getElementById("btnOpenTopologyTop");h&&h.addEventListener("click",()=>se());const w=document.getElementById("btnOpenKeyspaceTop");w&&s.length&&w.addEventListener("click",ni);const C=document.getElementById("btnOpenMemoryTop");C&&C.addEventListener("click",nt)}else e&&(e.innerHTML=`
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${i.error?`<span class="top-conn-error" title="${p(i.error)}">${p(i.error)}</span>`:""}
          </div>
        `),t&&(t.innerHTML=`
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `),f(),o.totalScanned===0&&o.keysTableRows.length===0&&Jt()}catch{e&&(e.innerHTML=`
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `),t&&(t.innerHTML=""),f()}}function xi(){const e=document.getElementById("btnRefreshStats");e&&e.addEventListener("click",le);const t=document.getElementById("clusterConfigModal"),n=document.getElementById("btnCloseConfigModalHeader");n&&t&&n.addEventListener("click",()=>t.classList.remove("active")),t&&t.addEventListener("click",d=>{d.target===t&&t.classList.remove("active")});const i=document.querySelector(".sidebar"),a=document.getElementById("btnToggleSidebar"),l=document.getElementById("btnShowSidebar"),r=d=>{if(!i)return;const c=d!==void 0?d:!i.classList.contains("collapsed");i.classList.toggle("collapsed",c),l&&(l.style.display=c?"inline-flex":"none"),localStorage.setItem("redis_insight_sidebar_collapsed",c?"true":"false"),f()};a&&a.addEventListener("click",()=>r(!0)),l&&l.addEventListener("click",()=>r(!1)),localStorage.getItem("redis_insight_sidebar_collapsed")==="true"&&r(!0),window.addEventListener("keydown",d=>{(d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="b"&&(d.preventDefault(),r())}),window.addEventListener("keydown",d=>{if(d.key==="Escape"){const c=document.querySelector(".modal-backdrop:not(.ws-dashboard-pane).active");if(c){c.classList.remove("active");return}o.activeWorkspaceTab&&o.activeWorkspaceTab!=="keys"&&O("keys")}}),window.addEventListener("focus",()=>{Z()}),setInterval(le,15e3)}async function vt(){bi(),f(),Xn(),hi(),Oo(),yo(),Vo(),ei(),si(),pi(),ko(),Eo(),xi(),await Z(),await le(),await q()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",vt):vt();
