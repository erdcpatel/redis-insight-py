(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const pt=[50,100,200,500,1e3,2e3,5e3,1e4],mt=200,o={activeWorkspaceTab:"keys",allConnectedClients:[],allSlowlogEntries:[],currentSlowlogMinDuration:0,currentSlowlogSearch:"",currentSlowlogNode:"all",currentViewMode:localStorage.getItem("redis_insight_view_mode")||"table",currentTreeDelimiter:localStorage.getItem("redis_insight_tree_delimiter")||"auto",treeExpandedPaths:new Set,treeInitialized:!1,currentTreeFilterQuery:"",currentMemoryOverview:null,currentMemoryAnalysis:null,isMemoryProfilingRunning:!1,bigkeysSearchQuery:"",currentCursor:0,currentPattern:"*",currentType:"all",isScanning:!1,totalScanned:0,scanComplete:!1,dbTotalKeys:0,lastStatus:null,keysTableRows:[],loadedKeysSet:new Set,isAutoRefreshActive:!1,autoRefreshIntervalSec:(()=>{let e=parseInt(localStorage.getItem("redis_insight_auto_refresh_sec")||"10",10);return isNaN(e)||e<5?10:e})(),autoRefreshRemainingSec:10,autoRefreshTimer:null,activeDetailKey:null,activeDetailData:null,hashFieldsState:null,pendingDeleteKey:null,pendingDeleteCallback:null,cachedConnections:[],currentEnvFilter:"ALL",currentConnSearch:"",currentTopologyData:null,currentTopologyRole:"all",currentTopologySearch:"",currentLimit:2,activeConfigConn:null,currentScanEpoch:0,scanBatchSize:50};function p(e){return e==null?"":String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(e,t,n=[])=>{const a=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(i=>{a.setAttribute(i,String(t[i]))}),n.length&&n.forEach(i=>{const s=Ke(...i);a.appendChild(s)}),a};var ut=([e,t,n])=>Ke(e,t,n);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),gt=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",ht=e=>e.flatMap(gt).map(n=>n.trim()).filter(Boolean).filter((n,a,i)=>i.indexOf(n)===a).join(" "),ft=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,a)=>n.toUpperCase()+a.toLowerCase()),Pe=(e,{nameAttr:t,icons:n,attrs:a})=>{const i=e.getAttribute(t);if(i==null)return;const s=ft(i),l=n[s];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const r=yt(e),[d,c,m]=l,g={...c,"data-lucide":i,...a,...r},v=ht(["lucide",`lucide-${i}`,r,a]);v&&Object.assign(g,{class:v});const w=ut([d,g,m]);return e.parentNode?.replaceChild(w,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=["svg",x,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=["svg",x,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=["svg",x,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=["svg",x,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=["svg",x,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=["svg",x,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=["svg",x,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=["svg",x,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=["svg",x,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=["svg",x,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=["svg",x,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=["svg",x,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=["svg",x,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=["svg",x,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=["svg",x,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=["svg",x,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=["svg",x,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=["svg",x,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=["svg",x,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=["svg",x,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=["svg",x,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=["svg",x,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=["svg",x,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=["svg",x,[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=["svg",x,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=["svg",x,[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=["svg",x,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=["svg",x,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=["svg",x,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=["svg",x,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=["svg",x,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=["svg",x,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=["svg",x,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=["svg",x,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=["svg",x,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=["svg",x,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",x,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",x,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",x,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",x,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",x,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",x,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",x,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",x,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",x,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",x,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const a=document.querySelectorAll(`[${t}]`);if(Array.from(a).forEach(i=>Pe(i,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(s=>Pe(s,{nameAttr:"icon-name",icons:e,attrs:n})))}};function y(){pn({icons:{Layers:Kt,Plus:Wt,RefreshCw:Yt,Search:Qt,Cpu:Mt,Trash2:on,Zap:cn,CheckCircle2:Tt,AlertCircle:St,Database:Rt,ShieldCheck:Xt,Lock:Ut,ArrowDownCircle:Lt,X:dn,Play:Gt,Copy:It,Clock:$t,Edit:tn,ExternalLink:At,Code:Bt,Users:rn,Server:Zt,Network:Vt,GitBranch:Ft,ArrowRightLeft:bt,Activity:vt,PieChart:wt,AlertTriangle:ln,TrendingUp:sn,BarChart2:xt,Power:Jt,ChevronLeft:Ct,ChevronRight:Et,PanelLeft:qt,Download:_t,FileText:Pt,Folder:Ht,FolderOpen:Nt,FolderTree:zt,Table:nn,List:jt,ChevronDown:kt,Key:Ot,Filter:Dt,Timer:an,Sparkles:en}})}const me={};function ae(e,t){me[e]=t}let ce=!1;function N(e,t=!0){if(!ce){ce=!0;try{["keys","benchmark","memory","slowlog","topology","clients"].includes(e)||(e="keys"),o.activeWorkspaceTab=e,document.querySelectorAll(".ws-tab-btn").forEach(l=>{const r=l.dataset.tab===e;l.classList.toggle("active",r),l.setAttribute("aria-selected",r?"true":"false")}),document.querySelectorAll(".ws-tab-pane").forEach(l=>{l.classList.remove("active")});const a=document.getElementById(`paneWorkspace${mn(e)}`);if(a&&a.classList.add("active"),Object.entries({benchmark:"benchmarkModal",memory:"memoryModal",slowlog:"slowlogModal",topology:"clusterTopologyModal",clients:"clientsListModal"}).forEach(([l,r])=>{const d=document.getElementById(r);d&&(l===e?d.classList.add("active"):d.classList.remove("active"))}),Object.entries({benchmark:"btnOpenBenchmarkModal",slowlog:"btnOpenSlowlog",memory:"btnOpenMemoryModal",topology:"btnOpenTopologyTop",clients:"btnOpenClientsModal"}).forEach(([l,r])=>{const d=document.getElementById(r);d&&d.classList.toggle("active",l===e)}),t&&history.replaceState(null,"",`#/${e}`),me[e])try{me[e]()}catch(l){console.warn(`Error loading data for tab ${e}:`,l)}y()}finally{ce=!1}}}function mn(e){return e.charAt(0).toUpperCase()+e.slice(1)}function un(){const e=document.getElementById("workspaceTabsBar");e&&e.addEventListener("click",t=>{const n=t.target.closest(".ws-tab-btn");n&&n.dataset.tab&&N(n.dataset.tab)}),window.addEventListener("hashchange",()=>{De()}),window.addEventListener("keydown",t=>{const n=document.activeElement?document.activeElement.tagName.toLowerCase():"";if(!(n==="input"||n==="textarea"||n==="select")&&(t.ctrlKey||t.metaKey)&&!t.shiftKey&&!t.altKey){const a={1:"keys",2:"benchmark",3:"memory",4:"slowlog",5:"topology",6:"clients"};a[t.key]&&(t.preventDefault(),N(a[t.key]))}}),De()}function De(){const t=(window.location.hash||"").match(/^#\/([a-z0-9_-]+)/i);if(t){const n=t[1].toLowerCase();if(["keys","benchmark","memory","slowlog","topology","clients"].includes(n)){N(n,!1);return}}N("keys",!1)}let je="probe",F=!1;const oe={counter:{script:`local k = KEYS[1] or 'bench_counter'
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
return redis.call('PING')`,keys:"my_key",args:""}};function Se(e){if(!e)return"";const t=Number(e.network_overhead_ms||0).toFixed(3),n=Number(e.server_exec_ms||0).toFixed(3);return`
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
  `}function Le(e){return e?`
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
  `:""}function Te(e){return!e||!e.length?"":`
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
  `}function Ue(){const e=document.getElementById("benchmarkTargetSubtitle");e&&o.lastStatus&&(e.textContent=`Active Target: ${o.lastStatus.host}:${o.lastStatus.port} (${o.lastStatus.env||"LOCAL"}) | Engine: AsyncIO Native | Namespace: __ri_bench__`);const t=document.getElementById("benchmarkReadOnlyBadge"),n=document.getElementById("optCommandPresetWrite"),a=document.getElementById("optCommandPresetStruct");if(o.lastStatus?.read_only){t&&(t.style.display="inline-flex"),n&&(n.disabled=!0,n.textContent="Write / Set (Disabled - Read-Only)"),a&&(a.disabled=!0,a.textContent="Data Structures (Disabled - Read-Only)");const s=document.getElementById("selCommandPreset");s&&(s.value==="write"||s.value==="structures")&&(s.value="read")}else t&&(t.style.display="none"),n&&(n.disabled=!1,n.textContent="Write / Set (100% SET)"),a&&(a.disabled=!1,a.textContent="Data Structures (HSET / HGET)");const i=document.getElementById("txtLuaScript");if(i&&!i.value.trim()){i.value=oe.counter.script;const s=document.getElementById("txtLuaKeys"),l=document.getElementById("txtLuaArgs");s&&(s.value=oe.counter.keys),l&&(l.value=oe.counter.args)}Ve(je||"probe")}function yn(){N("benchmark"),Ue()}function gn(){N("keys")}function Ve(e){je=e,document.querySelectorAll(".benchmark-tab-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-tab")===e)});const t={probe:document.getElementById("benchmarkPaneProbe"),commands:document.getElementById("benchmarkPaneCommands"),lua:document.getElementById("benchmarkPaneLua"),cluster:document.getElementById("benchmarkPaneCluster")};Object.keys(t).forEach(n=>{t[n]&&(t[n].style.display=n===e?"flex":"none")}),y()}async function hn(){if(F)return;const e=document.getElementById("btnRunProbe"),t=document.getElementById("benchmarkProbeResults"),n=document.getElementById("selProbeCount"),a=parseInt(n?.value||"100",10);F=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Running Probe (${a})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Executing ${a} baseline probes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring network round-trip time vs Redis event-loop CPU duration</div>
      </div>
    `,y());try{const i=await fetch("/api/benchmark/probe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({count:a})});if(!i.ok){const l=await i.json().catch(()=>({detail:"Probe request failed"}));throw new Error(l.detail||"Probe failed")}const s=await i.json();fn(s)}catch(i){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Latency Probe Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(i.message)}</div>
        </div>
      `,y())}finally{F=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Run Latency Probe</span>',y())}}function fn(e){const t=document.getElementById("benchmarkProbeResults");if(!t||!e)return;const n=Number(e.avg_rtt_ms||0).toFixed(3),a=Number(e.breakdown?.server_exec_ms||0).toFixed(3),i=Number(e.breakdown?.network_overhead_ms||0).toFixed(3),s=Number(e.ops_per_sec||0).toLocaleString();t.innerHTML=`
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
        <div class="val" style="color: #38bdf8;">${i} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Transit & TCP stack overhead</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Probe Throughput</div>
        <div class="val" style="color: #fbbf24;">${s} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        <div class="sub">${e.count} probes in ${e.duration_ms}ms</div>
      </div>
    </div>

    ${Se(e.breakdown)}
    ${Le(e.percentiles)}
    ${Te(e.histogram)}
  `,y()}async function vn(){if(F)return;const e=document.getElementById("btnRunCommandBench"),t=document.getElementById("benchmarkCommandResults"),n=document.getElementById("selCommandPreset")?.value||"read",a=parseInt(document.getElementById("selCommandRequests")?.value||"1000",10),i=parseInt(document.getElementById("selCommandConcurrency")?.value||"5",10),s=parseInt(document.getElementById("selCommandPipeline")?.value||"1",10);F=!0,e&&(e.disabled=!0,e.innerHTML=`<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Benchmarking (${a})...</span>`),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #f59e0b; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Running synthetic workload (${n})...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">
          Executing ${a.toLocaleString()} requests across ${i} workers (pipeline: ${s})
        </div>
      </div>
    `,y());try{const l=await fetch("/api/benchmark/commands",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset:n,requests:a,concurrency:i,pipeline:s})});if(!l.ok){const d=await l.json().catch(()=>({detail:"Benchmark request failed"}));throw new Error(d.detail||"Benchmark failed")}const r=await l.json();bn(r)}catch(l){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Benchmark Execution Blocked</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(l.message)}</div>
        </div>
      `,y())}finally{F=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Start Benchmark</span>',y())}}function bn(e){const t=document.getElementById("benchmarkCommandResults");if(!t||!e)return;const n=Number(e.ops_per_sec||0).toLocaleString(),a=Number(e.avg_latency_ms||0).toFixed(3),i=Number(e.percentiles?.p99_ms||0).toFixed(3),s=Number(e.cleaned_keys_count||0).toLocaleString();t.innerHTML=`
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
        <div class="val" style="color: #f472b6;">${i} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">99% of requests below this</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="shield-check" style="width: 12px; height: 12px; color: #10b981;"></i> Cleaned Ephemeral Keys</div>
        <div class="val" style="color: #6ee7b7;">${s}</div>
        <div class="sub">Auto-unlinked via UNLINK</div>
      </div>
    </div>

    ${Se(e.breakdown)}
    ${Le(e.percentiles)}
    ${Te(e.histogram)}
  `,y()}async function xn(){if(F)return;const e=document.getElementById("btnRunLuaBench"),t=document.getElementById("benchmarkLuaResults"),n=document.getElementById("txtLuaScript")?.value||"",a=document.getElementById("txtLuaKeys")?.value||"",i=document.getElementById("txtLuaArgs")?.value||"",s=document.getElementById("selLuaMode")?.value||"profile",l=parseInt(document.getElementById("selLuaIterations")?.value||"100",10),r=a.split(",").map(c=>c.trim()).filter(Boolean),d=i.split(",").map(c=>c.trim()).filter(Boolean);if(!n.trim()){alert("Please enter a Lua script to execute and profile.");return}F=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Executing Script...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Pre-loading and running Lua script on Redis server...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring precise microsecond server execution time</div>
      </div>
    `,y());try{const c=await fetch("/api/benchmark/lua",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({script:n,keys:r,args:d,mode:s,iterations:l,concurrency:5})});if(!c.ok){const g=await c.json().catch(()=>({detail:"Lua benchmark failed"}));throw new Error(g.detail||"Lua benchmark failed")}const m=await c.json();wn(m)}catch(c){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Lua Script Execution Error</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(c.message)}</div>
        </div>
      `,y())}finally{F=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Execute & Profile</span>',y())}}function wn(e){const t=document.getElementById("benchmarkLuaResults");if(!t||!e)return;const n=Number(e.server_duration_ms||0).toFixed(3),a=Number(e.duration_ms||0).toFixed(3);let i="";e.atomicity_warning?i=`
      <div class="atomicity-alert warning">
        <i data-lucide="alert-triangle" style="width: 20px; height: 20px; color: #ef4444; flex-shrink: 0;"></i>
        <div>
          <strong>High Atomicity Warning:</strong> Script spent <strong>${n} ms</strong> executing on the Redis server (> 5ms).
          In Redis, Lua scripts execute atomically and block all other incoming client connections for the entire duration! Consider optimizing loops or moving logic out of Lua.
        </div>
      </div>
    `:i=`
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
      ${Le(e.percentiles)}
      ${Te(e.histogram)}
    `),t.innerHTML=`
    ${i}

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem;">
      <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.35rem;">
        Script Return Value (Evaluated on Server)
      </div>
      <pre style="margin: 0; background: #090d16; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: #38bdf8; font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto;">${p(String(e.result))}</pre>
    </div>

    ${Se(e.breakdown)}
    ${s}
  `,y()}async function kn(){if(F)return;const e=document.getElementById("btnRunClusterMatrix"),t=document.getElementById("benchmarkClusterResults");F=!0,e&&(e.disabled=!0,e.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Evaluating Matrix...</span>'),t&&(t.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Probing primary cluster nodes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring cross-node latency and throughput matrix</div>
      </div>
    `,y());try{const n=await fetch("/api/benchmark/cluster-matrix");if(!n.ok){const i=await n.json().catch(()=>({detail:"Cluster matrix request failed"}));throw new Error(i.detail||"Cluster matrix failed")}const a=await n.json();Cn(a)}catch(n){t&&(t.innerHTML=`
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Cluster Matrix Evaluation Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${p(n.message)}</div>
        </div>
      `,y())}finally{F=!1,e&&(e.disabled=!1,e.innerHTML='<i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i><span>Evaluate Cluster Latency Matrix</span>',y())}}function Cn(e){const t=document.getElementById("benchmarkClusterResults");if(!t||!e)return;const n=Number(e.cluster_avg_latency_ms||0).toFixed(3),a=e.nodes||[];t.innerHTML=`
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #38bdf8;"></i> Cluster Avg Latency</div>
        <div class="val">${n} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Across ${a.length} primary node(s)</div>
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
          ${a.map(i=>`
            <tr class="${i.outlier?"outlier":""}">
              <td>
                <div style="font-family: var(--font-mono); font-weight: 700; color: #38bdf8;">${p(i.node)}</div>
              </td>
              <td>
                <span class="badge-db" style="text-transform: capitalize;">${p(i.role)}</span>
                <span style="font-size: 0.72rem; color: var(--text-muted); margin-left: 0.35rem;">${p(i.slots||"N/A")}</span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.45rem;">
                  <strong style="font-family: var(--font-mono);">${Number(i.avg_latency_ms).toFixed(3)} ms</strong>
                </div>
              </td>
              <td style="font-family: var(--font-mono);">${Number(i.p99_latency_ms).toFixed(3)} ms</td>
              <td style="font-family: var(--font-mono); color: #fbbf24;">${Number(i.ops_per_sec).toLocaleString()} ops/s</td>
              <td>
                ${i.outlier?'<span class="badge-duration badge-duration-danger" style="font-size: 0.7rem; font-weight: 600;">⚠️ Latency Outlier (&gt;1.75x)</span>':'<span class="badge-duration badge-duration-normal" style="font-size: 0.7rem; font-weight: 600; color: #6ee7b7;">Balanced</span>'}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `,y()}function En(){const e=document.getElementById("btnCloseBenchmarkModal");e&&e.addEventListener("click",gn);const t=document.getElementById("btnOpenBenchmarkModal");t&&t.addEventListener("click",yn),document.querySelectorAll(".benchmark-tab-btn").forEach(c=>{c.addEventListener("click",()=>{const m=c.getAttribute("data-tab");m&&Ve(m)})});const n=document.getElementById("btnRunProbe");n&&n.addEventListener("click",hn);const a=document.getElementById("btnRunCommandBench");a&&a.addEventListener("click",vn);const i=document.getElementById("selLuaPreset");i&&i.addEventListener("change",()=>{const c=i.value,m=oe[c];if(m){const g=document.getElementById("txtLuaScript"),v=document.getElementById("txtLuaKeys"),w=document.getElementById("txtLuaArgs");g&&(g.value=m.script),v&&(v.value=m.keys),w&&(w.value=m.args)}});const s=document.getElementById("selLuaMode"),l=document.getElementById("groupLuaBenchmarkControls");s&&l&&s.addEventListener("change",()=>{l.style.display=s.value==="benchmark"?"flex":"none"});const r=document.getElementById("btnRunLuaBench");r&&r.addEventListener("click",xn);const d=document.getElementById("btnRunClusterMatrix");d&&d.addEventListener("click",kn)}let ue=null,ye=null,ge=null;function Sn(e,t,n){ue=e,ye=t,ge=n}async function qe(){N("memory"),await $e(),o.currentMemoryAnalysis?Ie(o.currentMemoryAnalysis):Be()}function Ln(){N("keys")}async function $e(){const e=document.getElementById("memoryOverviewContainer");if(e){e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,y();try{const t=await fetch("/api/memory/overview");if(!t.ok)throw new Error("Failed to fetch memory overview");o.currentMemoryOverview=await t.json(),Tn(o.currentMemoryOverview)}catch(t){e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${p(t.message)}</p>
      </div>
    `,y()}}}function Tn(e){const t=document.getElementById("memoryOverviewContainer");if(!t||!e)return;let n="mem-status-healthy",a="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(n="mem-status-critical",a="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(n="mem-status-warning",a=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),t.innerHTML=`
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
          Max: <span style="font-family: var(--font-mono); color: var(--text-primary);">${e.maxmemory_human}</span> | Policy: ${p(e.maxmemory_policy)}
        </div>
      </div>
    </div>
  `,y()}function Be(){const e=document.getElementById("memoryProfilingContainer");if(!e)return;e.innerHTML=`
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
  `,y();const t=document.getElementById("btnStartProfilingAction");t&&t.addEventListener("click",()=>{const n=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,a=document.getElementById("memSamplePatternInput").value||"*";$n(n,a)})}async function $n(e=500,t="*"){const n=document.getElementById("memoryProfilingContainer");if(n){o.isMemoryProfilingRunning=!0,n.innerHTML=`
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: #a78bfa; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">Analyzing Redis Keyspace...</h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
        Scanning sample of up to <strong>${e.toLocaleString()}</strong> keys (pattern <code>${p(t)}</code>) and measuring memory allocations...
      </p>
    </div>
  `,y();try{const a=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:t})});if(!a.ok)throw new Error("Failed to complete memory profiling");o.currentMemoryAnalysis=await a.json(),o.isMemoryProfilingRunning=!1,Ie(o.currentMemoryAnalysis)}catch(a){o.isMemoryProfilingRunning=!1,n.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Memory Profiling Failed</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(a.message)}</p>
        <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Try Again</button>
      </div>
    `,y();const i=document.getElementById("btnRetryProfiling");i&&i.addEventListener("click",Be)}}}function Ie(e){const t=document.getElementById("memoryProfilingContainer");if(!t||!e)return;const n={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};t.innerHTML=`
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
        ${Ne(e.top_bigkeys)}
      </div>
    </div>
  `,y();const a=document.getElementById("btnReRunProfiling");a&&a.addEventListener("click",Be);const i=document.getElementById("bigkeysSearchInput");i&&i.addEventListener("input",()=>{const s=i.value.trim().toLowerCase(),l=s?e.top_bigkeys.filter(d=>d.key.toLowerCase().includes(s)||d.type.toLowerCase().includes(s)):e.top_bigkeys,r=document.getElementById("bigkeysTableContainer");r&&(r.innerHTML=Ne(l),y(),ze())}),ze()}function Ne(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const t=e[0]?e[0].memory_bytes:1;return`
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
        ${e.map((n,a)=>{let i="rank-normal";a===0?i="rank-gold":a===1?i="rank-silver":a===2&&(i="rank-bronze");const s=t>0?Math.max(5,Math.round(n.memory_bytes/t*100)):10;let l="No TTL (Persistent)",r="var(--text-muted)";return n.ttl>0&&(l=`${n.ttl.toLocaleString()}s`,r="var(--accent-warning)"),`
            <tr>
              <td>
                <span class="rank-badge ${i}">#${a+1}</span>
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
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: ${r};">
                ${l}
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
  `}function ze(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&ue&&ue(t)})}),document.querySelectorAll(".btn-copy-bigkey").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const n=e.getAttribute("data-key");n&&navigator.clipboard.writeText(n).then(()=>{e.classList.add("copied"),e.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px;"></i>',y(),setTimeout(()=>{e.classList.remove("copied"),e.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',y()},1500)})})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&ye&&ye(t,async()=>{o.currentMemoryAnalysis&&(o.currentMemoryAnalysis.top_bigkeys=o.currentMemoryAnalysis.top_bigkeys.filter(n=>n.key!==t),Ie(o.currentMemoryAnalysis)),ge&&await ge()})})})}function Bn(){const e=document.getElementById("btnCloseMemoryModal");e&&e.addEventListener("click",Ln);const t=document.getElementById("btnOpenMemoryModal");t&&t.addEventListener("click",qe);const n=document.getElementById("btnRefreshMemoryModal");n&&n.addEventListener("click",$e)}async function In(){N("slowlog"),o.currentSlowlogMinDuration=0,o.currentSlowlogSearch="",o.currentSlowlogNode="all";const e=document.getElementById("btnClearSlowlogModal");e&&(e.style.display=o.lastStatus?.read_only?"none":""),document.querySelectorAll(".slowlog-filter-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-min-duration")==="0")});const t=document.getElementById("slowlogSearchInput");t&&(t.value=""),await se()}function Mn(){N("keys")}async function se(){const e=document.getElementById("slowlogTableContainer"),t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),a=document.getElementById("slowlogFooterStats");e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,y());try{const i=await fetch("/api/slowlog?limit=250");if(!i.ok)throw new Error("Failed to fetch slowlog");const s=await i.json();if(o.allSlowlogEntries=s.entries||[],t&&(t.textContent=o.allSlowlogEntries.length),n&&s.slower_than_us!==null&&s.slower_than_us!==void 0){const l=(s.slower_than_us/1e3).toFixed(1);n.textContent=`Threshold: > ${l}ms (${s.slower_than_us} µs)`}a&&(a.textContent=`Total buffer: ${s.total_len||o.allSlowlogEntries.length} entries | Max buffer: ${s.max_len||"N/A"}`),Rn(o.allSlowlogEntries),ie()}catch(i){e&&(e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(i.message)}</p>
        </div>
      `,y())}}function Rn(e){const t=document.getElementById("slowlogNodeFilterContainer");if(!t)return;const n=Array.from(new Set(e.map(i=>i.node).filter(Boolean)));if(n.length<=1){t.innerHTML="";return}t.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${n.length})</option>
      ${n.map(i=>`<option value="${p(i)}" ${o.currentSlowlogNode===i?"selected":""}>${p(i)}</option>`).join("")}
    </select>
  `;const a=document.getElementById("slowlogNodeSelect");a&&a.addEventListener("change",()=>{o.currentSlowlogNode=a.value,ie()})}function ie(){let e=o.allSlowlogEntries;if(o.currentSlowlogMinDuration>0&&(e=e.filter(t=>t.duration_ms>=o.currentSlowlogMinDuration)),o.currentSlowlogNode&&o.currentSlowlogNode!=="all"&&(e=e.filter(t=>t.node===o.currentSlowlogNode)),o.currentSlowlogSearch){const t=o.currentSlowlogSearch.toLowerCase();e=e.filter(n=>{const a=(n.command||[]).join(" ").toLowerCase(),i=(n.client_ip||"").toLowerCase(),s=(n.node||"").toLowerCase();return a.includes(t)||i.includes(t)||s.includes(t)||String(n.id).includes(t)})}_n(e)}function _n(e){const t=document.getElementById("slowlogTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <i data-lucide="check-circle-2" style="width: 28px; height: 28px; color: #4ade80;"></i>
        </div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.35rem;">No Slow Queries Recorded</h4>
        <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.5;">
          ${o.allSlowlogEntries.length===0?"Redis latency is healthy! All commands executed within the threshold.":"No slowlog entries matched the active filters."}
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
        ${e.map(n=>{let a="badge-duration-fast";n.duration_ms>=50?a="badge-duration-critical":n.duration_ms>=10&&(a="badge-duration-warning");const i=n.command&&n.command.length>0?n.command.join(" "):"(empty)";return`
            <tr>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">#${n.id}</td>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); white-space: nowrap;">
                ${p(n.time_str||"N/A")}
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
                  <span class="slowlog-cmd-code" title="${p(i)}">${p(i)}</span>
                  <button type="button" class="btn-copy-inline btn-copy-slowlog-cmd" data-cmd="${p(i)}" title="Copy full command">
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
  `,y(),document.querySelectorAll(".btn-copy-slowlog-cmd").forEach(n=>{n.addEventListener("click",a=>{a.stopPropagation();const i=n.getAttribute("data-cmd");i&&navigator.clipboard.writeText(i).then(()=>{n.classList.add("copied"),n.innerHTML='<i data-lucide="check" style="width: 12px; height: 12px;"></i>',y(),setTimeout(()=>{n.classList.remove("copied"),n.innerHTML='<i data-lucide="copy" style="width: 12px; height: 12px;"></i>',y()},1500)})})})}}async function An(){if(o.lastStatus?.read_only){alert("Slowlog reset is disabled in Read-Only mode.");return}if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");await se()}catch(e){alert("Error resetting slowlog: "+e.message)}}function Pn(){const e=document.getElementById("btnCloseSlowlogModal");e&&e.addEventListener("click",Mn);const t=document.getElementById("btnOpenSlowlog");t&&t.addEventListener("click",In);const n=document.getElementById("btnRefreshSlowlogModal");n&&n.addEventListener("click",se);const a=document.getElementById("btnClearSlowlogModal");a&&a.addEventListener("click",An);const i=document.getElementById("slowlogSearchInput");i&&i.addEventListener("input",()=>{o.currentSlowlogSearch=i.value.trim(),ie()}),document.querySelectorAll(".slowlog-filter-btn").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(l=>l.classList.remove("active")),s.classList.add("active"),o.currentSlowlogMinDuration=parseInt(s.getAttribute("data-min-duration")||"0",10),ie()})})}let he=null;function Dn(e){he=e}async function Nn(){const e=document.getElementById("keyspaceNodesModal");e&&(e.classList.add("active"),We(o.lastStatus),await Ge())}function He(){const e=document.getElementById("keyspaceNodesModal");e&&e.classList.remove("active")}async function Ge(){try{const e=await fetch("/api/status");if(!e.ok)throw new Error("Failed to load node stats");o.lastStatus=await e.json(),We(o.lastStatus)}catch(e){const t=document.getElementById("keyspaceNodesContainer");t&&(t.innerHTML=`<div style="padding: 2rem; text-align: center; color: var(--accent-danger);">${p(e.message)}</div>`)}}function We(e){const t=document.getElementById("keyspaceNodesContainer"),n=document.getElementById("keyspaceTotalBadge");if(!t||!e)return;const a=e.node_stats||[],i=a.filter(m=>m.role==="master"),s=i.reduce((m,g)=>m+(g.keys||0),0);if(n&&(n.textContent=`${s.toLocaleString()} keys`),i.length===0){t.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Per-node breakdown is only available for cluster connections.</div>';return}const l=m=>m==null?"—":Number(m).toLocaleString(),r=(m,g="left")=>`<th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: ${g};">${m}</th>`,d=(m,g="")=>`<td style="padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; ${g}">${m}</td>`,c=i.map(m=>{const g=s>0&&m.keys!==null?(m.keys/s*100).toFixed(1):"0.0",v=a.filter(h=>h.role==="replica"&&h.master===m.node),w=`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        ${d(`<span class="role-badge-master">MASTER</span> <span style="color: var(--text-primary); font-weight: 600; margin-left: 6px;">${p(m.node)}</span>`)}
        ${d(m.error?`<span style="color: var(--accent-danger);" title="${p(m.error)}">unreachable</span>`:l(m.keys),"text-align: right; color: var(--text-primary); font-weight: 600;")}
        ${d(`${g}%`,"text-align: right; color: var(--text-secondary);")}
        ${d(p(m.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
        ${d(l(m.connected_clients),"text-align: right; color: #38bdf8;")}
      </tr>`,u=v.map(h=>{const f=h.keys!==null&&m.keys!==null?h.keys-m.keys:null,M=f===null?"":f===0?'<span style="color: var(--accent-success); margin-left: 6px;">in sync</span>':`<span style="color: var(--accent-warning); margin-left: 6px;" title="Replica key count differs from its master (replication lag or expiring keys)">${f>0?"+":""}${f.toLocaleString()}</span>`;return`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(0,0,0,0.12);">
        ${d(`<span style="color: var(--text-muted); margin-left: 0.75rem;">↳</span> <span class="role-badge-replica">REPLICA</span> <span style="color: var(--text-secondary); margin-left: 6px;">${p(h.node)}</span>`)}
        ${d(h.error?`<span style="color: var(--accent-danger);" title="${p(h.error)}">unreachable</span>`:`${l(h.keys)}${M}`,"text-align: right; color: var(--text-secondary);")}
        ${d("","")}
        ${d(p(h.used_memory_human||"—"),"text-align: right; color: var(--text-muted);")}
        ${d(l(h.connected_clients),"text-align: right; color: var(--text-muted);")}
      </tr>`}).join("");return w+u}).join("");t.innerHTML=`
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${r("NODE")}${r("KEYS","right")}${r("SHARE","right")}${r("MEMORY","right")}${r("CLIENTS","right")}</tr>
      </thead>
      <tbody>${c}</tbody>
      <tfoot>
        <tr>
          ${d("Cluster total (masters)","color: var(--text-muted); font-family: inherit;")}
          ${d(s.toLocaleString(),"text-align: right; color: var(--accent-primary); font-weight: 700;")}
          ${d("100%","text-align: right; color: var(--text-muted);")}
          ${d(p(e.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
          ${d("","")}
        </tr>
      </tfoot>
    </table>
  `,y()}async function ne(e=null){if(N("topology"),e&&he){const t=document.querySelector(`.conn-card[data-id="${e}"]`);t&&!t.classList.contains("active")&&await he(e)}await Me()}function zn(){N("keys")}async function Me(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),t=document.getElementById("topologyNodesCountBadge"),n=document.getElementById("tabBadgeTopology"),a=document.getElementById("topologyEnvBadge"),i=o.cachedConnections.find(s=>s.is_active);if(i&&a){const s=(i.env||"LOCAL").toUpperCase();a.textContent=s,a.className=`badge-env badge-env-${s.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,y());try{const s=await fetch("/api/topology");if(!s.ok)throw new Error("Failed to load cluster topology");const l=await s.json();o.currentTopologyData=l;const r=`${l.total_nodes} Node${l.total_nodes!==1?"s":""}`;t&&(t.textContent=r),n&&(n.textContent=r),Hn(l),fe()}catch(s){e&&(e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${p(s.message)}</p>
        </div>
      `,y())}}function Hn(e){const t=document.getElementById("topologyStatsGrid");if(!t)return;const n=e.is_cluster,a=(e.cluster_state||"").toLowerCase()==="ok"||!n;t.innerHTML=`
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
  `}function fe(){const e=document.getElementById("topologyTableContainer");if(!e||!o.currentTopologyData)return;const t=o.currentTopologyData.nodes||[],n=(o.currentTopologySearch||"").trim().toLowerCase(),a=o.currentTopologyRole,i=t.filter(s=>{if(a!=="all"&&s.role.toLowerCase()!==a)return!1;if(n){const l=(s.addr||"").toLowerCase().includes(n),r=(s.id||"").toLowerCase().includes(n),d=(s.ip||"").toLowerCase().includes(n),c=(s.slots||"").toLowerCase().includes(n);if(!l&&!r&&!d&&!c)return!1}return!0});if(i.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
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
        ${i.map(s=>{const l=s.role==="master",r=(s.link_state||"connected").toLowerCase()==="connected",d=s.id?s.id.length>12?`${s.id.substring(0,10)}...`:s.id:"N/A",c=s.slots?`${s.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${s.slot_count||0} slots)</span>`:l?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${p(s.id||"")}">${p(d)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${l?"role-badge-master":"role-badge-replica"}">${s.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${p(s.addr||`${s.ip}:${s.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem; text-align: right; color: ${l?"var(--text-primary)":"var(--text-secondary)"};">
                ${s.keys===null||s.keys===void 0?"—":Number(s.keys).toLocaleString()}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${r?"connected":"disconnected"}"></span>
                <span style="color: ${r?"var(--accent-success)":"var(--accent-danger)"};">${s.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${c}
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
  `,y()}function Fn(){const e=document.getElementById("btnOpenBulkDeleteModal");e&&(o.lastStatus?.read_only?(e.disabled=!0,e.style.opacity="0.4",e.style.cursor="not-allowed",e.title="🔒 Bulk Delete is disabled in Read-Only mode"):(e.disabled=!1,e.style.opacity="1",e.style.cursor="pointer",e.title="Bulk delete matched keys (Dry-run & confirmation required)"))}function On(){const e=document.getElementById("btnCloseTopologyModal");e&&e.addEventListener("click",zn);const t=document.getElementById("btnOpenTopologyTop");t&&t.addEventListener("click",()=>ne());const n=document.getElementById("btnRefreshTopologyModal");n&&n.addEventListener("click",Me);const a=document.getElementById("topologySearchInput");a&&a.addEventListener("input",()=>{o.currentTopologySearch=a.value.trim(),fe()});const i=document.getElementById("topologyRoleFilter");i&&i.addEventListener("click",d=>{const c=d.target.closest(".type-tab");c&&c.dataset.role&&(i.querySelectorAll(".type-tab").forEach(m=>m.classList.remove("active")),c.classList.add("active"),o.currentTopologyRole=c.dataset.role,fe())});const s=document.getElementById("btnCloseKeyspaceModal");s&&s.addEventListener("click",He);const l=document.getElementById("btnRefreshKeyspaceModal");l&&l.addEventListener("click",Ge);const r=document.getElementById("btnKeyspaceOpenTopology");r&&r.addEventListener("click",()=>{He(),ne()})}let ve=null;function Kn(e){ve=e}async function Je(){N("clients"),await le()}function jn(){N("keys")}async function le(){const e=document.getElementById("clientsTableContainer"),t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats"),a=document.getElementById("clientsSearchInput");e&&(e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',y());try{const i=await fetch("/api/clients");if(!i.ok)throw new Error("Failed to load connected clients");o.allConnectedClients=await i.json(),t&&(t.textContent=o.allConnectedClients.length),n&&(n.textContent=`${o.allConnectedClients.length} total connections`),a&&(a.value=""),Ye(o.allConnectedClients)}catch(i){e&&(e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error loading clients</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${p(i.message)}</p>
        </div>
      `,y())}}function Ye(e){const t=document.getElementById("clientsTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
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
                <span>${p(n.name)}</span>
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
  `,y(),t.querySelectorAll(".btn-kill-client").forEach(n=>{n.addEventListener("click",()=>{const a=n.getAttribute("data-id"),i=n.getAttribute("data-addr");Un(a,i)})})}}async function Un(e,t){if(o.lastStatus?.read_only){alert("Client disconnection is disabled in Read-Only mode.");return}if(confirm(`Are you sure you want to disconnect client #${e} (${t})?`))try{const n=await fetch(`/api/clients/${e}`,{method:"DELETE"}),a=await n.json();if(!n.ok)throw new Error(a.detail||"Failed to disconnect client");await le(),ve&&await ve()}catch(n){alert("Error disconnecting client: "+n.message)}}function Vn(){const e=document.getElementById("btnCloseClientsModal");e&&e.addEventListener("click",jn);const t=document.getElementById("btnOpenClientsModal");t&&t.addEventListener("click",Je);const n=document.getElementById("btnRefreshClientsModal");n&&n.addEventListener("click",le);const a=document.getElementById("clientsSearchInput");a&&a.addEventListener("input",()=>{const i=a.value.trim().toLowerCase(),s=i?o.allConnectedClients.filter(l=>(l.addr||"").toLowerCase().includes(i)||(l.name||"").toLowerCase().includes(i)||(l.user||"").toLowerCase().includes(i)||(l.cmd||"").toLowerCase().includes(i)||String(l.id).includes(i)):o.allConnectedClients;Ye(s)})}let W=null,$=[],j=null,U=null;function qn(e,t){j=e,U=t}async function G(){const e=document.getElementById("connectionsList");try{const[t,n]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]),a=await t.json();if(o.cachedConnections=a||[],n.ok){const i=await n.json();o.currentLimit=i.limit||2}be()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function Qe(e,t){const n=document.getElementById("connectedCountDisplay"),a=document.getElementById("connLimitDisplay"),i=document.getElementById("connLimitSelect"),s=document.getElementById("limitProgressDots"),l=document.getElementById("limitCountPill");if(n&&(n.textContent=e),a&&(a.textContent=t),i&&String(i.value)!==String(t)&&(i.value=String(t)),l&&(e>=t&&t>0?(l.classList.add("at-limit"),l.title="Connection limit reached"):(l.classList.remove("at-limit"),l.title=`${e} of ${t} connections in use`)),s){let r="";for(let d=0;d<t;d++){const c=d<e;r+=`<span class="limit-slot-dot ${c?"filled":"empty"}" title="Slot ${d+1}: ${c?"Connected":"Available"}"></span>`}s.innerHTML=r}}function be(){const e=document.getElementById("connectionsList");if(!e)return;const t=document.getElementById("totalConnCountBadge");t&&(t.textContent=o.cachedConnections.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(r=>{const d=r.getAttribute("data-env");let c=0;d==="ALL"?c=o.cachedConnections.length:c=o.cachedConnections.filter(m=>(m.env||"LOCAL").toUpperCase()===d).length,r.textContent=`${d} (${c})`});const a=(o.currentConnSearch||"").trim().toLowerCase(),i=o.currentEnvFilter,s=o.cachedConnections.filter(r=>{if(i!=="ALL"&&(r.env||"LOCAL").toUpperCase()!==i)return!1;if(a){const d=(r.name||"").toLowerCase().includes(a),c=(r.host||"").toLowerCase().includes(a),m=(r.env||"").toLowerCase().includes(a),g=(r.conn_type||"").toLowerCase().includes(a);if(!d&&!c&&!m&&!g)return!1}return!0});s.sort((r,d)=>{const c=r.is_connected?1:0,m=d.is_connected?1:0;if(m!==c)return m-c;const g=r.is_selected?1:0,v=d.is_selected?1:0;return v!==g?v-g:(r.name||"").localeCompare(d.name||"")});const l=o.cachedConnections.filter(r=>r.is_connected).length;if(Qe(l,o.currentLimit),s.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${a?`No results found for "${p(a)}"`:`No connections configured in ${p(i)}`}
        </span>
      </div>
    `,y();return}e.innerHTML=s.map(r=>{const d=(r.env||"LOCAL").toUpperCase(),c=`badge-env-${d.toLowerCase()}`,m=r.conn_type==="cluster",g=r.conn_type==="sentinel",v=r.source==="config",w=!!r.is_connected,u=!!r.is_selected;return`
      <div class="conn-card ${w?"is-connected":""} ${u?"selected active":""}" data-id="${r.id}" title="Click to review config & connection options">
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${u?`
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

          <div class="conn-title-wrap">
            <span class="conn-name" title="${p(r.name)}">${p(r.name)}</span>
          </div>

          <div class="conn-status-badge-wrap">
            ${u?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:w?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${p(r.host)}:${r.port}">
            <i data-lucide="${m?"network":g?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${p(r.host)}:${r.port}</span>
          </div>

          <div class="conn-tags">
            <span class="badge-env ${c}">${d}</span>
            ${r.read_only?'<span class="badge-readonly" title="Read-Only Mode: Mutating operations locked">🔒 RO</span>':""}
            ${m?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${g?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!m&&!g?`<span class="badge-db">DB${r.db}</span>`:""}
            ${r.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${r.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${v?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${w?`
            ${u?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${r.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${r.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${m||w?`
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
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${r.id}" data-name="${p(r.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>
      </div>
    `}).join(""),y(),e.querySelectorAll(".conn-card").forEach(r=>{r.addEventListener("click",d=>{if(d.target.closest(".btn-delete-conn")||d.target.closest(".btn-view-topology-card")||d.target.closest(".btn-card-disconnect")||d.target.closest(".btn-card-select")||d.target.closest(".btn-card-open-config"))return;const c=r.getAttribute("data-id"),m=o.cachedConnections.find(g=>g.id===c);m&&xe(m)})}),e.querySelectorAll(".btn-card-disconnect").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const c=r.getAttribute("data-id");await Re(c)})}),e.querySelectorAll(".btn-card-select").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const c=r.getAttribute("data-id");await Xe(c)})}),e.querySelectorAll(".btn-card-open-config").forEach(r=>{r.addEventListener("click",d=>{d.stopPropagation();const c=r.getAttribute("data-id"),m=o.cachedConnections.find(g=>g.id===c);m&&xe(m)})}),e.querySelectorAll(".btn-view-topology-card").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const c=r.getAttribute("data-id");await ne(c)})}),e.querySelectorAll(".btn-delete-conn").forEach(r=>{r.addEventListener("click",async d=>{d.stopPropagation();const c=r.getAttribute("data-id"),m=r.getAttribute("data-name");confirm(`Are you sure you want to delete '${m}'?`)&&await Jn(c)})})}function Gn(e){if(!e)return[];if(Array.isArray(e))return e.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t));if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n))}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}return[]}function xe(e){o.activeConfigConn=e;const t=document.getElementById("clusterConfigModal"),n=document.getElementById("cfgModalTitle"),a=document.getElementById("cfgModalSubtitle"),i=document.getElementById("cfgModalBody"),s=document.getElementById("cfgModalFooter");if(!t||!i||!s)return;n&&(n.textContent=e.name||"Cluster Configuration"),a&&(a.textContent="Review configuration before connecting");const l=!!e.is_connected,r=!!e.is_selected,d=e.conn_type==="cluster",c=Gn(e.cluster_nodes),m=o.cachedConnections.filter(I=>I.is_connected).length,g=!l&&m>=o.currentLimit;i.innerHTML=`
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
            ${c.length>0?c.map(I=>`
                  <span class="seed-node-pill" title="${p(I)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${p(I)}
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

    ${g?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${o.currentLimit} maximum). Please disconnect a connected cluster first or increase the limit.</span>
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
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${g?"disabled":""}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `,y(),t.classList.add("active");const v=document.getElementById("btnCloseConfigModal");v&&(v.onclick=()=>t.classList.remove("active"));const w=document.getElementById("btnEditFromConfig");w&&(w.onclick=()=>{t.classList.remove("active"),tt(e)});const u=document.getElementById("btnConnectFromConfig");u&&(u.onclick=async()=>{await Ze(e.id),t.classList.remove("active")});const h=document.getElementById("btnDisconnectFromConfig");h&&(h.onclick=async()=>{await Re(e.id),t.classList.remove("active")});const f=document.getElementById("btnSelectFromConfig");f&&(f.onclick=async()=>{await Xe(e.id),t.classList.remove("active")});const M=document.getElementById("btnTopologyFromConfig");M&&(M.onclick=async()=>{t.classList.remove("active"),await ne(e.id)});const A=document.getElementById("btnTestFromConfig");A&&(A.onclick=async()=>{await Wn(e)})}async function Wn(e){const t=document.getElementById("cfgTestResultBox"),n=document.getElementById("btnTestFromConfig");n&&(n.disabled=!0,n.innerHTML="Testing..."),t&&(t.className="test-result-box",t.innerHTML="");try{const i=await(await fetch(`/api/connections/${e.id}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();i.success?(t.className="test-result-box success",t.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${i.latency_ms} ms</strong> (Redis v${i.redis_version})</span>
      `):(t.className="test-result-box error",t.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${p(i.error||"Connection refused")}</span>
      `)}catch(a){t&&(t.className="test-result-box error",t.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${p(a.message)}</span>`)}finally{n&&(n.disabled=!1,n.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),y()}}async function Ze(e){if(o.cachedConnections.filter(n=>n.is_connected&&n.id!==e).length>=o.currentLimit){alert(`Connection limit reached: Maximum ${o.currentLimit} connected cluster(s) allowed at a time.
Please disconnect an existing cluster first or increase the limit in the sidebar.`);return}try{const n=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),a=await n.json();if(!n.ok)throw new Error(a.detail||"Failed to connect to cluster");await G(),j&&await j(),U&&await U()}catch(n){alert("Connection error: "+n.message)}}async function Re(e){try{const t=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to disconnect cluster");await G(),j&&await j(),o.cachedConnections.some(i=>i.is_connected&&i.id!==e)?U&&await U():(o.keysTableRows=[],o.loadedKeysSet.clear(),o.totalScanned=0,o.currentCursor=0,o.scanComplete=!1,o.dbTotalKeys=0,et())}catch(t){alert("Disconnect error: "+t.message)}}async function Xe(e){try{const t=await fetch(`/api/connections/${e}/select`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to switch cluster");const a=document.getElementById("keyDetailModal");a&&a.classList.remove("active"),o.activeDetailKey=null,o.activeDetailData=null,await G(),j&&await j(),U&&await U()}catch(t){alert("Switch error: "+t.message)}}function et(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="flex"),n&&(n.style.display="none");const a=document.getElementById("btnConnectFirstAvailable");a&&(a.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${o.cachedConnections.length})`,o.cachedConnections.length>0&&(a.onclick=()=>xe(o.cachedConnections[0]))),y()}async function Jn(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");await G(),j&&await j(),U&&await U()}catch(t){alert("Delete error: "+t.message)}}function Y(){const e=document.getElementById("clusterNodesList"),t=document.getElementById("clusterNodeCountBadge");if(e){if(t&&(t.textContent=`${$.length} configured`),$.length===0){e.innerHTML=`
      <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
        No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
      </div>
    `;return}e.innerHTML=$.map((n,a)=>{const i=n.role==="master",s=n.role==="replica",l=n.role==="seed",r=i?"master":s?"replica":"",d=i?"master":s?"replica":l?"seed":"manual",c=i?"Master":s?"Replica":l?"Seed":"Node";return`
      <span class="cluster-node-chip ${r}">
        <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
        <span>${p(n.host)}:${n.port}</span>
        <span class="cluster-node-role-badge ${d}">${c}</span>
        <button type="button" class="cluster-node-chip-remove" data-idx="${a}" title="Remove node">
          <i data-lucide="x" style="width: 11px; height: 11px;"></i>
        </button>
      </span>
    `}).join(""),e.querySelectorAll(".cluster-node-chip-remove").forEach(n=>{n.addEventListener("click",a=>{a.stopPropagation();const i=parseInt(n.getAttribute("data-idx"),10);!isNaN(i)&&i>=0&&i<$.length&&($.splice(i,1),Y())})}),y()}}function tt(e){W=e.id;const t=document.getElementById("connectionModal"),n=document.getElementById("connectionModalTitle"),a=document.getElementById("btnSaveConn"),i=document.getElementById("connPassword");n&&(n.innerHTML='<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection'),a&&(a.textContent="Update Connection"),document.getElementById("connName").value=e.name||"",document.getElementById("connEnv").value=(e.env||"DEV").toUpperCase();const s=document.getElementById("connTypeSelect");s.value=e.conn_type||"standalone",document.getElementById("connHost").value=e.host||"localhost",document.getElementById("connPort").value=e.port||6379,document.getElementById("connDb").value=e.db||0,document.getElementById("connUsername").value=e.username||"",document.getElementById("connTls").checked=!!e.use_tls,document.getElementById("connReadOnly").checked=!!e.read_only,i&&(i.value="",e.has_password?i.placeholder="•••••••• (Leave blank to keep saved password)":i.placeholder="Enter password (or leave empty)");const l=document.getElementById("clusterNodesGroup"),r=document.getElementById("connHostLabel"),d=document.getElementById("connDbRow");if($=[],e.conn_type==="cluster"){if(l&&(l.style.display="block"),r&&(r.textContent="Seed Node Host *"),d&&(d.style.display="none"),e.cluster_nodes)try{const m=typeof e.cluster_nodes=="string"?JSON.parse(e.cluster_nodes):e.cluster_nodes;Array.isArray(m)&&($=m.map(g=>{if(typeof g=="string"&&g.includes(":")){const v=g.split(":");return{host:v[0].trim(),port:parseInt(v[1],10)||6379}}return{host:g.host||"127.0.0.1",port:parseInt(g.port,10)||6379}}))}catch{}}else l&&(l.style.display="none"),r&&(r.textContent="Host *"),d&&(d.style.display="flex");Y();const c=document.getElementById("testResultBox");c&&(c.className="test-result-box",c.innerHTML=""),y(),t&&t.classList.add("active")}function Yn(){window.openEditConnectionModal=tt;const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const b=parseInt(e.value,10);try{const k=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:b})});if(k.ok){const C=await k.json();o.currentLimit=C.limit,Qe(C.connected_count,C.limit)}}catch(k){console.warn("Failed to update limit:",k)}});const t=document.getElementById("connSearchInput");t&&t.addEventListener("input",()=>{o.currentConnSearch=t.value.trim(),be()});const n=document.getElementById("envFilterPills");n&&n.addEventListener("click",b=>{const k=b.target.closest(".env-pill-btn");k&&k.dataset.env&&(n.querySelectorAll(".env-pill-btn").forEach(C=>C.classList.remove("active")),k.classList.add("active"),o.currentEnvFilter=k.dataset.env,be())});const a=document.getElementById("btnReloadConfigStatic");a&&a.addEventListener("click",async()=>{a.disabled=!0;try{await fetch("/api/connections/reload-config",{method:"POST"}),await G()}catch(b){console.warn("Reload config failed:",b)}finally{a.disabled=!1}});const i=document.getElementById("connTypeSelect"),s=document.getElementById("clusterNodesGroup"),l=document.getElementById("connHostLabel"),r=document.getElementById("connPortLabel"),d=document.getElementById("connHost"),c=document.getElementById("connPort"),m=document.getElementById("connDbGroup");i&&s&&i.addEventListener("change",()=>{const b=i.value==="cluster";s.style.display=b?"block":"none",m&&(m.style.display=b?"none":"block"),b?(l&&(l.textContent="Primary Seed Host *"),r&&(r.textContent="Seed Port *"),d&&(d.value==="localhost"||!d.value)&&(d.value="127.0.0.1"),c&&(c.value==="6379"||!c.value)&&(c.value="7000"),$.length===0&&d&&d.value&&c&&c.value&&$.push({host:d.value.trim(),port:parseInt(c.value,10)||7e3,role:"seed"}),Y()):(l&&(l.textContent="Host *"),r&&(r.textContent="Port *"),c&&c.value==="7000"&&(c.value="6379"))});const g=document.getElementById("btnAutoDiscoverCluster"),v=document.getElementById("clusterDiscoveryStatus");g&&g.addEventListener("click",async()=>{const b=d?d.value.trim():"127.0.0.1",k=c&&parseInt(c.value,10)||7e3,C=document.getElementById("connUsername").value.trim()||null,E=document.getElementById("connPassword").value||null,S=document.getElementById("connTls").checked;if(!b){v&&(v.className="cluster-discovery-status error",v.style.display="flex",v.innerHTML='<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>',y());return}g.disabled=!0,g.innerHTML="Discovering...";try{const R=await(await fetch("/api/connections/discover-cluster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:b,port:k,username:C,password:E,use_tls:S})})).json();R.success&&R.nodes&&R.nodes.length>0?($=R.nodes.map(_=>({host:_.host,port:_.port,role:_.role,is_myself:_.is_myself,slots:_.slots})),Y(),v&&(v.className="cluster-discovery-status success",v.style.display="flex",v.innerHTML=`
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${R.total_nodes} nodes</strong> (${R.masters_count} masters, ${R.replicas_count} replicas)</span>
            `,y())):v&&(v.className="cluster-discovery-status error",v.style.display="flex",v.innerHTML=`
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${p(R.error||"Cluster discovery failed.")}</span>
            `,y())}catch(P){v&&(v.className="cluster-discovery-status error",v.style.display="flex",v.innerHTML=`
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${p(P.message)}</span>
          `,y())}finally{g.disabled=!1,g.innerHTML='<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes',y()}});const w=document.getElementById("inputCustomClusterNode"),u=document.getElementById("btnAddCustomClusterNode");function h(){if(!w)return;const b=w.value.trim();if(!b)return;let k="127.0.0.1",C=7e3;if(b.includes(":")){const S=b.split(":");k=S[0].trim()||"127.0.0.1",C=parseInt(S[1].trim(),10)||7e3}else isNaN(parseInt(b,10))?k=b:(C=parseInt(b,10),k=d?d.value.trim():"127.0.0.1");$.some(S=>S.host===k&&S.port===C)||($.push({host:k,port:C,role:"manual"}),Y()),w.value=""}u&&u.addEventListener("click",h),w&&w.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),h())});const f=document.getElementById("connectionModal"),M=document.getElementById("btnAddConn");M&&f&&M.addEventListener("click",()=>{W=null,document.getElementById("connectionForm").reset();const b=document.getElementById("connectionModalTitle"),k=document.getElementById("btnSaveConn"),C=document.getElementById("connPassword");b&&(b.innerHTML='<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection'),k&&(k.textContent="Save Connection"),C&&(C.placeholder="Leave empty if none");const E=document.getElementById("connEnv").value;document.getElementById("connReadOnly").checked=E==="PROD",document.getElementById("clusterNodesGroup").style.display="none",document.getElementById("connHostLabel").textContent="Host *",document.getElementById("connDbRow").style.display="flex",$=[],Y();const S=document.getElementById("testResultBox");S&&(S.className="test-result-box",S.innerHTML=""),y(),f.classList.add("active")});const A=document.getElementById("btnCloseModal");A&&f&&A.addEventListener("click",()=>f.classList.remove("active"));const I=document.getElementById("btnCancelModal");I&&f&&I.addEventListener("click",()=>f.classList.remove("active"));const H=document.getElementById("connEnv");H&&H.addEventListener("change",b=>{if(b.target.value==="PROD"){const k=document.getElementById("connReadOnly");k&&(k.checked=!0)}});const q=document.getElementById("btnTestConnModal");q&&q.addEventListener("click",async()=>{const b=document.getElementById("connTypeSelect").value,k=document.getElementById("connHost").value.trim()||"localhost",C=parseInt(document.getElementById("connPort").value,10)||6379,E=parseInt(document.getElementById("connDb").value,10)||0,S=document.getElementById("connUsername").value.trim()||null,P=document.getElementById("connPassword").value,R=document.getElementById("connTls").checked;let _=null;b==="cluster"&&$.length>0&&(_=JSON.stringify($.map(T=>({host:T.host,port:T.port}))));const L=document.getElementById("testResultBox");q.disabled=!0,q.innerHTML="Testing...",L&&(L.className="test-result-box",L.innerHTML="");try{let T;W&&!P?T=await fetch(`/api/connections/${W}/test`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:k,port:C,db:E,username:S,use_tls:R,conn_type:b,cluster_nodes:_})}):T=await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:k,port:C,db:E,username:S,password:P||null,use_tls:R,conn_type:b,cluster_nodes:_})});const B=await T.json();if(B.success){L.className="test-result-box success";const D=B.is_cluster?` • Cluster Mode (${B.cluster_nodes_count||$.length} nodes reachable)`:"";L.innerHTML=`
            <i data-lucide="check-circle-2"></i>
            <span>Connected! Latency: <strong>${B.latency_ms} ms</strong>${D} (Redis v${B.redis_version})</span>
          `}else L.className="test-result-box error",L.innerHTML=`
            <i data-lucide="alert-circle"></i>
            <span>Failed: ${p(B.error||"Connection refused")}</span>
          `}catch(T){L&&(L.className="test-result-box error",L.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${p(T.message)}</span>`)}finally{q.disabled=!1,q.innerHTML='<i data-lucide="zap"></i> Test Connection',y()}});const z=document.getElementById("connectionForm");z&&z.addEventListener("submit",async b=>{b.preventDefault();const k=document.getElementById("connName").value.trim(),C=document.getElementById("connEnv").value,E=document.getElementById("connTypeSelect").value;let S=document.getElementById("connHost").value.trim()||"localhost",P=parseInt(document.getElementById("connPort").value,10)||6379;const R=parseInt(document.getElementById("connDb").value,10)||0,_=document.getElementById("connUsername").value.trim()||null,L=document.getElementById("connPassword").value,T=document.getElementById("connTls").checked,B=document.getElementById("connAutoActivate").checked,D=document.getElementById("connReadOnly")?.checked||!1;let V=null;E==="cluster"&&($.length>0?(V=JSON.stringify($.map(O=>({host:O.host,port:O.port}))),S=$[0].host,P=$[0].port):V=JSON.stringify([{host:S,port:P}]));try{if(W){const O={name:k,env:C,conn_type:E,host:S,port:P,cluster_nodes:V,db:R,username:_,use_tls:T,read_only:D};L&&(O.password=L);const ee=await fetch(`/api/connections/${W}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)});if(!ee.ok){const de=await ee.json().catch(()=>({}));throw new Error(de.detail||"Failed to update connection")}}else{const O={name:k,env:C,conn_type:E,host:S,port:P,cluster_nodes:V,db:R,username:_,password:L||null,use_tls:T,read_only:D},ee=await fetch(`/api/connections?auto_activate=${B}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)});if(!ee.ok){const de=await ee.json().catch(()=>({}));throw new Error(de.detail||"Failed to save connection")}}f.classList.remove("active"),W=null,z.reset(),$=[],Y(),await G(),j&&await j(),U&&await U()}catch(O){alert("Error saving: "+O.message)}})}let we=null;function Qn(e){we=e}async function X(e){o.activeDetailKey=e;const t=document.getElementById("keyDetailModal"),n=document.getElementById("detailKeyTitle"),a=document.getElementById("detailHeaderMeta"),i=document.getElementById("detailBodyContent"),s=document.getElementById("btnDeleteKeyFromDetail");s&&(s.style.display=o.lastStatus?.read_only?"none":""),n&&(n.textContent=e,n.title=e),a&&(a.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>'),i&&(i.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>'),t&&t.classList.add("active");try{let l=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(l.ok||(l=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!l.ok){let d="Key not found or could not be read";try{const c=await l.json();c&&c.detail&&(d=c.detail)}catch{}throw new Error(d)}const r=await l.json();o.activeDetailData=r,Zn(r),ea(r)}catch(l){a&&(a.innerHTML='<span style="color: var(--accent-danger);">Error</span>'),i&&(i.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Failed to inspect key</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">${p(l.message)}</p>
        </div>
      `,y())}}function pe(){const e=document.getElementById("keyDetailModal");e&&e.classList.remove("active")}function Zn(e){const t=document.getElementById("detailHeaderMeta");if(!t)return;const n=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",a=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;t.innerHTML=`
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
      <span style="font-family: var(--font-mono); color: ${e.ttl===-1?"var(--text-muted)":"var(--accent-warning)"}; font-weight: 600;">${a}</span>
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
  `,y();const i=document.getElementById("btnEditTtl");i&&i.addEventListener("click",()=>{Xn(e.name,e.ttl)})}async function Xn(e,t){if(o.lastStatus?.read_only){alert("TTL modification is disabled in Read-Only mode.");return}const n=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,t>0?t:"3600");if(n===null)return;const a=parseInt(n.trim(),10);if(isNaN(a)){alert("Please enter a valid integer.");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:a})})).ok)throw new Error("Failed to update TTL");X(e)}catch(i){alert("Error updating TTL: "+i.message)}}function ea(e){const t=document.getElementById("detailBodyContent");if(!t)return;const n=e.type.toLowerCase();if(n==="hash"){const a=e.fields||[],i=e.has_more_fields?Number(e.fields_cursor||0):0;o.hashFieldsState={key:e.name,cursor:i,fields:[...a],total:Number(e.length||a.length),match:null,loading:!1},t.innerHTML=`
      <div class="fields-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <input type="text" id="hashFieldSearchInput" class="field-search-input" placeholder="Filter fields (Enter: search all)" title="Filters loaded fields instantly; press Enter to search the whole hash on the server (HSCAN MATCH)">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="hashFieldCountText">${at(a.length)}</span>
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
            ${nt(a)}
          </tbody>
        </table>
      </div>
      <div id="hashFieldsFooter" style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);"></div>
    `,y(),na(e.name),_e();return}if(e.is_json||n.includes("json")){const a=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${p(a)}</div>
    `,y();const i=document.getElementById("btnCopyJsonValue");i&&i.addEventListener("click",()=>{navigator.clipboard.writeText(a),alert("JSON copied to clipboard!")});return}if(n==="string"){t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${p(e.value||"")}</div>
    `,y();const a=document.getElementById("btnCopyStringValue");a&&a.addEventListener("click",()=>{navigator.clipboard.writeText(e.value||""),alert("Value copied to clipboard!")});return}if(Array.isArray(e.value)){const a=n==="zset";t.innerHTML=`
      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 15%;">${a?"Score":"Index"}</th>
              <th style="width: 85%;">Element / Member</th>
            </tr>
          </thead>
          <tbody>
            ${e.value.map((i,s)=>`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
                  ${a?i.score:`[${s}]`}
                </td>
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem;">
                  ${p(a?i.member:String(i))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;return}t.innerHTML=`<div class="json-view-box">${p(String(e.value))}</div>`}function nt(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(t=>`
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
  `).join("")}function at(e,t=null){const n=o.hashFieldsState,a=n?n.total:e,i=n&&n.match?`${e.toLocaleString()} matching fields loaded`:e<a?`${e.toLocaleString()} of ${a.toLocaleString()} fields loaded`:`${e.toLocaleString()} fields`;return t!==null?`${t.toLocaleString()} shown · ${i}`:i}function ta(e){return`*${e.replace(/[\\*?\[\]]/g,t=>`\\${t}`)}*`}function ot(){const e=o.hashFieldsState,t=document.getElementById("hashFieldsTableBody"),n=document.getElementById("hashFieldCountText"),a=document.getElementById("hashFieldSearchInput");if(!e||!t)return;const i=a?a.value.trim().toLowerCase():"",s=i?e.fields.filter(l=>l.field.toLowerCase().includes(i)||l.value.toLowerCase().includes(i)):e.fields;t.innerHTML=nt(s),n&&(n.textContent=at(e.fields.length,i?s.length:null)),y(),it(e.key),_e()}function _e(){const e=document.getElementById("hashFieldsFooter"),t=o.hashFieldsState;if(!e||!t)return;const n=t.cursor!==0,a=t.match?`Server-side filter: <code>${p(t.match)}</code> · <a href="#" id="btnClearHashMatch" style="color: var(--accent-primary);">clear</a>`:n?"Search applies to loaded fields. Press Enter to search all fields on the server.":"";e.innerHTML=`
    <span>${a}</span>
    ${n?`
      <button type="button" class="btn btn-secondary" id="btnLoadMoreHashFields" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" ${t.loading?"disabled":""}>
        <i data-lucide="${t.loading?"refresh-cw":"arrow-down-circle"}" ${t.loading?'class="spin"':""} style="width: 13px; height: 13px;"></i>
        ${t.loading?"Loading...":"Load More Fields"}
      </button>`:""}
  `,y();const i=document.getElementById("btnLoadMoreHashFields");i&&i.addEventListener("click",()=>ke());const s=document.getElementById("btnClearHashMatch");s&&s.addEventListener("click",l=>{l.preventDefault();const r=document.getElementById("hashFieldSearchInput");r&&(r.value=""),ke({reset:!0,match:null})})}async function ke({reset:e=!1,match:t}={}){const n=o.hashFieldsState;if(!n||n.loading||!e&&n.cursor===0)return;const a=n.key,i=e?t:n.match;n.loading=!0,_e();try{const s=new URLSearchParams({cursor:String(e?0:n.cursor),count:String(mt)});i&&s.set("match",i);const l=await fetch(`/api/keys/${encodeURIComponent(a)}/hash/fields?${s}`);if(!l.ok){const c=await l.json().catch(()=>({}));throw new Error(c.detail||`Server error: ${l.status}`)}const r=await l.json();if(o.hashFieldsState!==n||o.activeDetailKey!==a)return;e&&(n.fields=[]);const d=new Set(n.fields.map(c=>c.field));for(const c of r.fields||[])d.has(c.field)||(d.add(c.field),n.fields.push(c));n.cursor=Number(r.cursor||0),n.total=Number(r.total??n.total),n.match=i||null}catch(s){alert("Failed to load hash fields: "+s.message)}finally{n.loading=!1,o.hashFieldsState===n&&ot()}}function na(e){const t=document.getElementById("hashFieldSearchInput");t&&(t.addEventListener("input",()=>ot()),t.addEventListener("keydown",a=>{if(a.key!=="Enter"||!o.hashFieldsState)return;const i=t.value.trim(),s=o.hashFieldsState;s.cursor===0&&!s.match||ke({reset:!0,match:i?ta(i):null})}));const n=document.getElementById("btnAddHashField");n&&n.addEventListener("click",async()=>{const a=prompt(`Enter field name for hash '${e}':`);if(!a)return;const i=prompt(`Enter value for field '${a}':`);if(i!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:a,value:i})})).ok)throw new Error("Failed to set field");X(e)}catch(s){alert("Error setting field: "+s.message)}}),it(e)}function it(e){document.querySelectorAll(".btn-delete-hash-field").forEach(t=>{t.addEventListener("click",async()=>{const n=decodeURIComponent(t.getAttribute("data-field"));if(confirm(`Delete field '${n}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(n)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");X(e)}catch(a){alert("Error: "+a.message)}})})}function aa(e){if(!e)return null;const t=e.match(/filename\*\s*=\s*([\w-]*)'[^']*'([^;]+)/i);if(t)try{return decodeURIComponent(t[2].trim().replace(/^"|"$/g,""))}catch{}const n=e.match(/filename\s*=\s*"([^"]*)"/i)||e.match(/filename\s*=\s*([^;]+)/i);return n&&n[1].trim()?n[1].trim():null}function st(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function lt(e,t,n=null){let a=aa(e.headers.get("content-disposition"))||t;const i=String(e.headers.get("x-export-format")||n||"").toLowerCase();i&&!a.toLowerCase().endsWith(`.${i}`)&&(a=`${a}.${i}`);const s=await e.blob();return st(s,a),a}async function oa(e,t){if(!e)return;const n=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Downloading...',y());try{const a=await fetch(`/api/keys/${encodeURIComponent(e)}/download`);if(!a.ok){const s=await a.json().catch(()=>({}));throw new Error(s.detail||`Server error: ${a.status}`)}const i=e.replace(/[^A-Za-z0-9._-]+/g,"_")||"redis_key";await lt(a,i),a.headers.get("x-export-truncated")==="true"&&alert(`Download was capped: the key has ${Number(a.headers.get("x-export-total")||0).toLocaleString()} entries, only the first portion was included.`)}catch(a){alert("Download failed: "+a.message)}finally{t&&(t.disabled=!1,t.innerHTML=n,y())}}function ia(){const e=document.getElementById("btnCloseDetailModal");e&&e.addEventListener("click",pe);const t=document.getElementById("keyDetailModal");t&&t.addEventListener("click",s=>{s.target===t&&pe()});const n=document.getElementById("btnCopyKeyName");n&&n.addEventListener("click",()=>{o.activeDetailKey&&(navigator.clipboard.writeText(o.activeDetailKey),alert(`Copied '${o.activeDetailKey}' to clipboard!`))});const a=document.getElementById("btnDownloadKeyValue");a&&a.addEventListener("click",()=>{oa(o.activeDetailKey,a)});const i=document.getElementById("btnDeleteKeyFromDetail");i&&i.addEventListener("click",()=>{o.activeDetailKey&&we&&we(o.activeDetailKey,()=>{pe()})})}let Ce=null;function sa(e){Ce=e}function re(e,t){if(o.lastStatus?.read_only){alert("Key deletion is disabled in Read-Only mode.");return}o.pendingDeleteKey=e,o.pendingDeleteCallback=t;const n=document.getElementById("deleteKeyConfirmModal"),a=document.getElementById("deleteKeyTargetName"),i=document.getElementById("inputConfirmDelete"),s=document.getElementById("btnSubmitDeleteKey");a&&(a.textContent=e),i&&(i.value=""),s&&(s.disabled=!0),n&&n.classList.add("active"),i&&i.focus(),i&&(i.oninput=()=>{const l=i.value.trim().toUpperCase();s&&(s.disabled=l!=="CONFIRM"&&i.value.trim()!==e)}),s&&(s.onclick=async()=>{s.disabled=!0,s.textContent="Deleting...";try{const l=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),r=await l.json();if(!l.ok)throw new Error(r.detail||"Failed to delete key");n&&n.classList.remove("active"),o.pendingDeleteCallback&&o.pendingDeleteCallback()}catch(l){alert("Error deleting key: "+l.message)}finally{s.disabled=!1,s.textContent="Delete Permanently"}})}function la(){const e=document.getElementById("deleteKeyConfirmModal"),t=document.getElementById("btnCloseDeleteConfirmModal"),n=document.getElementById("btnCancelDeleteConfirm"),a=()=>e&&e.classList.remove("active");t&&t.addEventListener("click",a),n&&n.addEventListener("click",a);const i=document.getElementById("exportKeysModal"),s=document.getElementById("btnOpenExportModal"),l=document.getElementById("btnCloseExportModal"),r=document.getElementById("btnCancelExportModal"),d=document.getElementById("btnExecuteExport");if(s&&i){s.addEventListener("click",()=>{const b=document.getElementById("exportPatternDisplay"),k=document.getElementById("exportTypeDisplay"),C=document.getElementById("exportLoadedCount"),E=document.getElementById("exportScopeLoadedText");b&&(b.textContent=o.currentPattern||"*"),k&&(k.textContent=o.currentType&&o.currentType!=="all"?o.currentType.toUpperCase():"All Types"),C&&(C.textContent=`${o.keysTableRows.length} keys`),E&&(E.textContent=`${o.keysTableRows.length} keys`),i.classList.add("active"),y()});const z=()=>i.classList.remove("active");l&&l.addEventListener("click",z),r&&r.addEventListener("click",z),d&&d.addEventListener("click",async()=>{const b=document.querySelector('input[name="exportFormatRadio"]:checked'),k=document.querySelector('input[name="exportScopeRadio"]:checked'),C=(b?b.value:"csv").toLowerCase(),E=k?k.value:"loaded",S=o.currentPattern||"*",P=o.currentType&&o.currentType!=="all"?o.currentType:"",_=`redis_keys_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.${C}`;if(E==="all"){d.disabled=!0,d.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Exporting...',y();try{let T=`/api/keys/export?pattern=${encodeURIComponent(S)}&format=${C}`;P&&(T+=`&type=${encodeURIComponent(P)}`);const B=await fetch(T);if(!B.ok){const D=await B.json().catch(()=>({detail:"Export failed"}));throw new Error(D.detail||`Server error: ${B.status}`)}await lt(B,_,C),z()}catch(T){alert(`Export failed: ${T.message}`)}finally{d.disabled=!1,d.innerHTML='<i data-lucide="download" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Download',y()}return}if(o.keysTableRows.length===0){alert("No keys loaded in browser to export.");return}let L;if(C==="csv"){const T=`Key,Type,TTL_Seconds
`,B=o.keysTableRows.map(D=>`"${(D.key||"").replace(/"/g,'""')}",${D.type||""},${D.ttl_seconds!==void 0?D.ttl_seconds:-1}`);L=new Blob([T+B.join(`
`)],{type:"text/csv;charset=utf-8;"})}else{const T=o.keysTableRows.map(B=>B.key);L=new Blob([T.join(`
`)+`
`],{type:"text/plain;charset=utf-8;"})}st(L,_),z()})}const c=document.getElementById("bulkDeleteModal"),m=document.getElementById("btnOpenBulkDeleteModal"),g=document.getElementById("btnCloseBulkDeleteModal"),v=document.getElementById("btnCancelBulkDelete"),w=document.getElementById("btnConfirmBulkDelete"),u=document.getElementById("bdCountConfirmInput"),h=document.getElementById("bdProdConfirmInput"),f=document.getElementById("bdProdConfirmGroup"),M=document.getElementById("bulkDeleteProdBanner"),A=document.getElementById("bulkDeleteDryRunStatus"),I=document.getElementById("bulkDeleteDetails");let H=null;function q(){if(!H||!w)return;const z=String(H.matched_count),k=(u?.value||"").trim()===z&&H.matched_count>0;let C=!0;H.is_prod&&(C=(h?.value||"").trim().toUpperCase()==="PROD"),w.disabled=!(k&&C)}if(u&&u.addEventListener("input",q),h&&h.addEventListener("input",q),m&&c){m.addEventListener("click",async()=>{if(o.lastStatus?.read_only){alert("Bulk Delete is disabled in Read-Only mode.");return}const b=o.currentPattern||"*",k=o.currentType&&o.currentType!=="all"?o.currentType:null;H=null,u&&(u.value=""),h&&(h.value=""),w&&(w.disabled=!0),A&&(A.style.display="block"),I&&(I.style.display="none"),c.classList.add("active"),y();try{const C=await fetch("/api/keys/bulk-delete/dry-run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:b,type_filter:k})});if(!C.ok){const V=await C.json().catch(()=>({detail:"Dry run failed"}));throw new Error(V.detail||"Dry run failed")}const E=await C.json();H=E;const S=document.getElementById("bdPatternDisplay"),P=document.getElementById("bdTypeDisplay"),R=document.getElementById("bdCountDisplay"),_=document.getElementById("bdRequiredCountText");S&&(S.textContent=E.pattern),P&&(P.textContent=E.type_filter?E.type_filter.toUpperCase():"All Types"),R&&(R.textContent=E.matched_count.toLocaleString()),_&&(_.textContent=String(E.matched_count)),E.is_prod?(M&&(M.style.display="block"),f&&(f.style.display="block")):(M&&(M.style.display="none"),f&&(f.style.display="none"));const L=document.getElementById("bdPerNodeBreakdown"),T=Object.entries(E.per_node_counts||{});L&&(T.length>1?(L.innerHTML="<strong>Per-node breakdown:</strong> "+T.map(([V,O])=>`${p(V)}: ${O.toLocaleString()}`).join(" &bull; "),L.style.display="block"):L.style.display="none");const B=document.getElementById("bdSampleKeysList"),D=document.getElementById("bdSampleKeysSection");B&&D&&(E.sample_keys&&E.sample_keys.length>0?(B.innerHTML=E.sample_keys.map(V=>`<div>${p(V)}</div>`).join(""),D.style.display="block"):D.style.display="none"),A&&(A.style.display="none"),I&&(I.style.display="flex"),y()}catch(C){A&&(A.innerHTML=`
            <div style="color: var(--accent-danger);">
              <i data-lucide="alert-circle" style="width: 20px; height: 20px; margin-bottom: 0.35rem; display: inline-block;"></i>
              <div>Failed to calculate dry-run: ${p(C.message)}</div>
            </div>
          `,y())}});const z=()=>c.classList.remove("active");g&&g.addEventListener("click",z),v&&v.addEventListener("click",z),w&&w.addEventListener("click",async()=>{if(H){w.disabled=!0,w.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlinking...',y();try{const b=await fetch("/api/keys/bulk-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:H.pattern,type_filter:H.type_filter,expected_count:H.matched_count,confirmed_count:parseInt(u.value.trim(),10),confirmed_env:h?h.value.trim():null})});if(!b.ok){const C=await b.json().catch(()=>({detail:"Bulk delete failed"}));throw new Error(C.detail||"Bulk delete failed")}const k=await b.json();alert(`Bulk delete complete!
${k.message} (Duration: ${k.duration_ms}ms)`),z(),Ce&&Ce()}catch(b){alert(`Bulk delete error: ${b.message}`),w.disabled=!1,w.innerHTML='<i data-lucide="trash-2" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlink Keys',y()}}})}}async function K(){o.isScanning=!1,o.currentScanEpoch++;const e=o.currentScanEpoch;o.currentCursor=0,o.scanComplete=!1,o.totalScanned=0,o.keysTableRows=[],o.loadedKeysSet.clear(),o.treeInitialized=!1,o.treeExpandedPaths.clear();const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="none"),n&&(n.style.display="block"),ct(),await rt(e)}function Q(){const e=document.getElementById("btnToggleAutoRefresh"),t=document.getElementById("autoRefreshStatusText"),n=document.getElementById("autoRefreshIntervalSelect");if(!(!e||!t))if(o.isAutoRefreshActive){e.classList.add("active");const a=o.autoRefreshRemainingSec>=60?`${Math.floor(o.autoRefreshRemainingSec/60)}m ${o.autoRefreshRemainingSec%60}s`:`${o.autoRefreshRemainingSec}s`;e.title=`Auto-refresh active (Pattern: "${o.currentPattern||"*"}"). Refreshing in ${a}. Click to pause.`,t.textContent=`Auto: ${a}`,n&&(n.value=String(o.autoRefreshIntervalSec))}else{e.classList.remove("active");const a=o.autoRefreshIntervalSec>=60?`${Math.floor(o.autoRefreshIntervalSec/60)}m`:`${o.autoRefreshIntervalSec}s`;e.title=`Click to watch keys matching pattern "${o.currentPattern||"*"}" every ${a}`,t.textContent="Auto: Off",n&&(n.value=String(o.autoRefreshIntervalSec))}}function te(){o.autoRefreshRemainingSec=o.autoRefreshIntervalSec,Q()}function ra(){o.isAutoRefreshActive=!0,o.autoRefreshRemainingSec=o.autoRefreshIntervalSec,Q(),o.autoRefreshTimer&&clearInterval(o.autoRefreshTimer),o.autoRefreshTimer=setInterval(async()=>{if(!o.isAutoRefreshActive)return;const e=document.querySelector(".modal-backdrop.active");document.hidden||e||(o.autoRefreshRemainingSec--,o.autoRefreshRemainingSec<=0?(o.autoRefreshRemainingSec=o.autoRefreshIntervalSec,Q(),o.cachedConnections.some(n=>n.is_connected)&&!o.isScanning&&await K()):Q())},1e3)}function da(){o.isAutoRefreshActive=!1,o.autoRefreshTimer&&(clearInterval(o.autoRefreshTimer),o.autoRefreshTimer=null),o.autoRefreshRemainingSec=o.autoRefreshIntervalSec,Q()}function ca(){o.isAutoRefreshActive?da():ra()}function Ae(e){if(e==null)return!0;const t=String(e).trim();if(t===""||t==="0")return!0;if(t.startsWith("{"))try{return Object.values(JSON.parse(t)).every(n=>Number(n)===0)}catch{return!1}return!1}function pa(e){const t=String(e??"").trim();if(t.startsWith("{"))try{const n=Object.values(JSON.parse(t));return`${n.filter(i=>Number(i)!==0).length} of ${n.length} nodes still scanning`}catch{return"more keys available"}return"more keys available"}function ma(){return!!(o.lastStatus&&o.lastStatus.is_cluster)||String(o.currentCursor??"").trim().startsWith("{")}async function rt(e=null){if(o.isScanning||o.scanComplete)return;const t=e!==null?e:o.currentScanEpoch;o.isScanning=!0,Fe();try{const n=`/api/keys?pattern=${encodeURIComponent(o.currentPattern)}&cursor=${encodeURIComponent(String(o.currentCursor??"0"))}&count=${o.scanBatchSize}${o.currentType!=="all"?`&type=${encodeURIComponent(o.currentType)}`:""}`,a=await fetch(n);if(!a.ok)throw new Error("Failed to scan keys");const i=await a.json();if(t!==o.currentScanEpoch)return;o.currentCursor=i.cursor,o.scanComplete=Ae(o.currentCursor),o.dbTotalKeys=i.total_in_db;const l=(i.keys||[]).filter(d=>o.loadedKeysSet.has(d.name)?!1:(o.loadedKeysSet.add(d.name),!0)).map(d=>({key:d.name,type:d.type,ttl_seconds:d.ttl,status:d.ttl===-1?"Persistent":d.ttl===-2?"Expired":`Expires in ${d.ttl}s`}));l.length>0&&o.keysTableRows.push(...l),ct(),o.totalScanned=o.loadedKeysSet.size;const r=document.getElementById("tabBadgeKeys");r&&(r.textContent=o.totalScanned.toLocaleString())}catch(n){console.error("Scan error:",n)}finally{t===o.currentScanEpoch&&(o.isScanning=!1,Fe())}}function ua(e,t="auto"){return e?t&&t!=="auto"?e.includes(t)?t:null:e.includes(":")?":":e.includes("/")?"/":e.includes(".")?".":e.includes("-")?"-":null:null}function ya(e,t="auto"){const n={id:"__root__",name:"Root",fullPrefix:"",delimiter:"",depth:-1,folders:new Map,keys:[],totalKeyCount:0};for(const i of e){const s=i.key||"",l=ua(s,t);if(!l){n.keys.push({...i,leafName:s});continue}let d=s.split(l);if(d.length>1&&d[d.length-1]===""&&(d=d.slice(0,-1)),d.length<=1){n.keys.push({...i,leafName:s});continue}let c=n,m="";for(let v=0;v<d.length-1;v++){const w=d[v];m+=(v>0?l:"")+w;const u=m+l;c.folders.has(w)||c.folders.set(w,{id:u,name:w,fullPrefix:u,delimiter:l,depth:v,folders:new Map,keys:[],totalKeyCount:0}),c=c.folders.get(w)}const g=d[d.length-1]||"(empty)";c.keys.push({...i,leafName:g})}function a(i){let s=i.keys.length;i.keys.sort((r,d)=>(r.leafName||r.key).localeCompare(d.leafName||d.key));const l=new Map([...i.folders.entries()].sort((r,d)=>r[0].localeCompare(d[0])));i.folders=l;for(const r of i.folders.values())a(r),s+=r.totalKeyCount;i.totalKeyCount=s}return a(n),n}function dt(e,t){if(e.name.toLowerCase().includes(t)||e.fullPrefix.toLowerCase().includes(t))return!0;for(const n of e.keys)if(n.key.toLowerCase().includes(t)||n.leafName&&n.leafName.toLowerCase().includes(t))return!0;for(const n of e.folders.values())if(dt(n,t))return!0;return!1}function ga(){const e=document.getElementById("gridViewerContainer");if(e){if(o.keysTableRows.length===0){const t=!o.scanComplete&&Ae(o.currentCursor);e.innerHTML=o.scanComplete?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${p(o.currentPattern)}</code>".
      </div>
    `:t?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${p(o.currentPattern)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${p(o.currentPattern)}</code>" in the part of the keyspace scanned so far.<br>
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
          ${o.keysTableRows.map(t=>`
            <tr class="key-row" data-key="${encodeURIComponent(t.key)}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer;">
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
                <span class="btn-inspect-key" data-key="${encodeURIComponent(t.key)}">${p(t.key)}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase;">
                <span class="badge-db">${t.type}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary);">${t.ttl_seconds}</td>
              <td style="padding: 0.65rem 1rem; font-size: 0.8rem; color: ${t.ttl_seconds===-1?"var(--text-muted)":"var(--accent-warning)"};">${t.status}</td>
              <td style="padding: 0.65rem 1rem; text-align: right;" onclick="event.stopPropagation()">
                ${o.lastStatus?.read_only?`
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
  `,y(),e.querySelectorAll(".key-row").forEach(t=>{t.addEventListener("click",()=>{const n=decodeURIComponent(t.getAttribute("data-key"));X(n)})}),e.querySelectorAll(".btn-delete-key-table").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const a=decodeURIComponent(t.getAttribute("data-key"));re(a,()=>{K()})})})}}function J(){const e=document.getElementById("gridViewerContainer");if(!e)return;if(o.keysTableRows.length===0){const u=!o.scanComplete&&Ae(o.currentCursor);e.innerHTML=o.scanComplete?`
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
    `;return}const t=ya(o.keysTableRows,o.currentTreeDelimiter);if(!o.treeInitialized&&o.treeExpandedPaths.size===0){for(const u of t.folders.values())o.treeExpandedPaths.add(u.id);o.treeInitialized=!0}function n(u){let h=u.folders.size;for(const f of u.folders.values())h+=n(f);return h}const a=n(t),i=!!o.currentTreeFilterQuery.trim(),s=o.currentTreeFilterQuery.trim().toLowerCase();function l(u,h){const f=encodeURIComponent(u.key);return`
      <div class="tree-node tree-leaf key-row" data-key="${f}" style="padding-left: ${h*20+26}px;">
        <div class="tree-node-content">
          <div class="tree-key-icon">
            <i data-lucide="key" style="width: 13px; height: 13px;"></i>
          </div>
          <span class="tree-key-name btn-inspect-key" data-key="${f}" title="${p(u.key)}">
            ${p(u.leafName||u.key)}
          </span>
          <span class="badge-db" style="margin-left: 0.35rem; font-size: 0.68rem; text-transform: uppercase;">${p(u.type)}</span>
          <span class="tree-key-ttl" title="TTL in seconds">${u.ttl_seconds}s</span>
          <span class="tree-key-status" style="color: ${u.ttl_seconds===-1?"var(--text-muted)":"var(--accent-warning)"};">${p(u.status)}</span>
          <div class="tree-key-actions" onclick="event.stopPropagation()">
            ${o.lastStatus?.read_only?`
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
    `}function r(u,h){if(i&&!dt(u,s))return"";const f=i?!0:o.treeExpandedPaths.has(u.id),M=encodeURIComponent(u.id);let A="";for(const I of u.folders.values())A+=r(I,h+1);for(const I of u.keys)i&&!I.key.toLowerCase().includes(s)&&!(I.leafName&&I.leafName.toLowerCase().includes(s))||(A+=l(I,h+1));return`
      <div class="tree-folder-group" data-folder-id="${M}">
        <div class="tree-node tree-folder" data-folder-id="${M}" style="padding-left: ${h*20+8}px;">
          <div class="tree-node-content">
            <button type="button" class="tree-toggle-btn" title="${f?"Collapse":"Expand"}">
              <i data-lucide="${f?"chevron-down":"chevron-right"}" style="width: 14px; height: 14px;"></i>
            </button>
            <div class="tree-folder-icon">
              <i data-lucide="${f?"folder-open":"folder"}" style="width: 15px; height: 15px;"></i>
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
        <div class="tree-children" style="display: ${f?"block":"none"};">
          ${A}
        </div>
      </div>
    `}let d="";if(t.keys.length>0){const u=i?t.keys.filter(h=>h.key.toLowerCase().includes(s)||h.leafName&&h.leafName.toLowerCase().includes(s)):t.keys;u.length>0&&(d=`
        <div class="tree-root-keys-section">
          <div class="tree-root-keys-header" style="padding-left: 10px;">
            <span class="tree-root-keys-title">ROOT KEYS (NO DELIMITER)</span>
            <span class="tree-count-badge">${u.length.toLocaleString()} ${u.length===1?"key":"keys"}</span>
          </div>
          <div class="tree-root-keys-list">
            ${u.map(h=>l(h,0)).join("")}
          </div>
        </div>
      `)}e.innerHTML=`
    <div class="tree-view-wrapper">
      <div class="tree-toolbar">
        <div class="tree-toolbar-left">
          <div class="tree-delimiter-control">
            <label for="treeDelimiterSelect" class="tree-control-label">Delimiter:</label>
            <select id="treeDelimiterSelect" class="tree-select" title="Grouping delimiter convention">
              <option value="auto"${o.currentTreeDelimiter==="auto"?" selected":""}>Auto (:, /, .)</option>
              <option value=":"${o.currentTreeDelimiter===":"?" selected":""}>: (Colon)</option>
              <option value="/"${o.currentTreeDelimiter==="/"?" selected":""}>/ (Slash)</option>
              <option value="."${o.currentTreeDelimiter==="."?" selected":""}>. (Dot)</option>
              <option value="-"${o.currentTreeDelimiter==="-"?" selected":""}>- (Dash)</option>
            </select>
          </div>
          <div class="tree-summary-pill" id="treeSummaryPill">
            ${a.toLocaleString()} ${a===1?"Namespace":"Namespaces"} &bull; ${o.keysTableRows.length.toLocaleString()} ${o.keysTableRows.length===1?"Key":"Keys"}
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
        ${[...t.folders.values()].map(u=>r(u,0)).join("")}
        ${d}
      </div>
    </div>
  `,y(),e.querySelectorAll(".tree-folder").forEach(u=>{u.addEventListener("click",h=>{if(h.target.closest(".tree-filter-prefix-btn"))return;const f=decodeURIComponent(u.getAttribute("data-folder-id"));o.treeExpandedPaths.has(f)?o.treeExpandedPaths.delete(f):o.treeExpandedPaths.add(f),J()})}),e.querySelectorAll(".tree-filter-prefix-btn").forEach(u=>{u.addEventListener("click",h=>{h.stopPropagation();const f=u.getAttribute("data-prefix"),M=document.getElementById("keySearchInput");M&&f&&(M.value=f+"*",o.currentPattern=f+"*",K())})}),e.querySelectorAll(".tree-leaf").forEach(u=>{u.addEventListener("click",()=>{const h=decodeURIComponent(u.getAttribute("data-key"));X(h)})}),e.querySelectorAll(".btn-delete-key-table").forEach(u=>{u.addEventListener("click",h=>{h.stopPropagation();const f=decodeURIComponent(u.getAttribute("data-key"));re(f,()=>{K()})})});const c=document.getElementById("treeDelimiterSelect");c&&c.addEventListener("change",u=>{o.currentTreeDelimiter=u.target.value,localStorage.setItem("redis_insight_tree_delimiter",o.currentTreeDelimiter),o.treeExpandedPaths.clear(),o.treeInitialized=!1,J()});const m=document.getElementById("btnExpandAllTree");m&&m.addEventListener("click",()=>{function u(h){for(const f of h.folders.values())o.treeExpandedPaths.add(f.id),u(f)}u(t),J()});const g=document.getElementById("btnCollapseAllTree");g&&g.addEventListener("click",()=>{o.treeExpandedPaths.clear(),J()});const v=document.getElementById("treeFilterInput");v&&v.addEventListener("input",u=>{o.currentTreeFilterQuery=u.target.value,J();const h=document.getElementById("treeFilterInput");h&&(h.focus(),h.setSelectionRange(h.value.length,h.value.length))});const w=document.getElementById("btnClearTreeFilter");w&&w.addEventListener("click",()=>{o.currentTreeFilterQuery="",J()})}function Ee(){o.currentViewMode==="tree"?J():ga()}function ct(){Ee()}function ha(){const e=document.getElementById("scanChunkLabel");e&&(e.textContent=`Safe SCAN (Chunk ${o.scanBatchSize.toLocaleString()})`)}function Fe(){const e=document.getElementById("scanStatusText"),t=document.getElementById("btnScanNext"),n=o.scanComplete;e&&(e.innerHTML=`
      Loaded <strong>${o.totalScanned.toLocaleString()}</strong> keys
      ${n?'<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>':`<span style="color: var(--text-muted);">(${p(pa(o.currentCursor))})</span>`}
      | ${ma()?"Cluster Total":"DB Total"}: <strong>${Number(o.dbTotalKeys||0).toLocaleString()}</strong>
    `),t&&(t.disabled=o.isScanning||n,t.innerHTML=o.isScanning?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':n?'<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More',y())}function fa(){const e=document.getElementById("keySearchInput");let t=null;e&&(e.addEventListener("input",()=>{clearTimeout(t),t=setTimeout(()=>{o.currentPattern=e.value.trim()||"*",te(),K()},500)}),e.addEventListener("keydown",m=>{m.key==="Enter"&&(clearTimeout(t),o.currentPattern=e.value.trim()||"*",te(),K())}));const n=document.getElementById("typeFilterGroup");n&&n.addEventListener("click",m=>{const g=m.target.closest(".type-tab");g&&g.dataset.type&&(n.querySelectorAll(".type-tab").forEach(v=>v.classList.remove("active")),g.classList.add("active"),o.currentType=g.dataset.type,te(),K())});const a=document.getElementById("btnScanNext");a&&a.addEventListener("click",()=>rt());const i=document.getElementById("btnResetScan");i&&i.addEventListener("click",()=>{te(),K()});const s=document.getElementById("scanBatchSizeSelect");s&&s.addEventListener("change",m=>{o.scanBatchSize=parseInt(m.target.value,10)||50,ha()});const l=document.getElementById("btnViewTable"),r=document.getElementById("btnViewTree");l&&l.addEventListener("click",()=>{o.currentViewMode!=="table"&&(o.currentViewMode="table",localStorage.setItem("redis_insight_view_mode","table"),l.classList.add("active"),r&&r.classList.remove("active"),Ee())}),r&&r.addEventListener("click",()=>{o.currentViewMode!=="tree"&&(o.currentViewMode="tree",localStorage.setItem("redis_insight_view_mode","tree"),r.classList.add("active"),l&&l.classList.remove("active"),Ee())});const d=document.getElementById("btnToggleAutoRefresh");d&&d.addEventListener("click",()=>{ca()});const c=document.getElementById("autoRefreshIntervalSelect");c&&c.addEventListener("change",m=>{const g=parseInt(m.target.value,10);!isNaN(g)&&g>=5&&(o.autoRefreshIntervalSec=g,localStorage.setItem("redis_insight_auto_refresh_sec",String(g)),te())}),Q()}qn(Z,K);sa(K);Qn(re);Sn(X,re,Z);Kn(Z);Dn(Ze);ae("benchmark",()=>Ue());ae("memory",()=>$e());ae("slowlog",()=>se());ae("topology",()=>Me());ae("clients",()=>le());function va(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
              </div>

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
                    ${pt.map(t=>`<option value="${t}"${t===50?" selected":""}>${t.toLocaleString()}</option>`).join("")}
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
  `)}async function Z(){const e=document.getElementById("topConnContainer"),t=document.getElementById("topVitalsContainer");try{const a=await(await fetch("/api/status")).json();if(a.connected){const i=o.cachedConnections.find(f=>f.is_selected)||o.cachedConnections.find(f=>f.id===a.connection_id)||o.cachedConnections.find(f=>f.is_connected),s=i&&i.conn_type==="cluster"||a.cluster_nodes&&a.cluster_nodes.length>0||a.is_cluster,l=a.cluster_nodes_count||(a.node_stats&&a.node_stats.length>0?a.node_stats.length:1),r=(a.node_stats||[]).filter(f=>f.role==="master");if(o.lastStatus=a,Fn(),e){const f=(a.env||i?.env||"LOCAL").toUpperCase();e.innerHTML=`
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${p(a.connection_name||"Connected")}">${p(a.connection_name||"Connected")}</span>
            <span class="badge-env badge-env-${f.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem; margin-right: 0.25rem;">${f}</span>
            ${a.read_only?'<span class="badge-readonly" title="Read-Only Mode: All write, update, and delete actions are locked" style="margin-right: 0.25rem;"><i data-lucide="lock"></i> READ ONLY</span>':""}
            <span class="top-conn-endpoint">${a.host}:${a.port}</span>
            <span class="top-conn-tag">${s?"CLUSTER":`DB${a.db}`}</span>
            <button type="button" class="top-conn-disconnect" id="btnTopDisconnect" title="Disconnect ${p(a.connection_name||"instance")}">
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
        `);const d=document.getElementById("tabBadgeKeys");d&&(d.textContent=(a.dbsize||0).toLocaleString());const c=document.getElementById("tabBadgeTopology");c&&(c.textContent=s?`${l} Nodes`:"1 Node");const m=document.getElementById("tabBadgeClients");m&&(m.textContent=String(a.connected_clients||1)),y();const g=document.getElementById("btnTopDisconnect");g&&g.addEventListener("click",()=>{a.connection_id&&Re(a.connection_id)});const v=document.getElementById("btnOpenClientsModal");v&&v.addEventListener("click",Je);const w=document.getElementById("btnOpenTopologyTop");w&&w.addEventListener("click",()=>ne());const u=document.getElementById("btnOpenKeyspaceTop");u&&r.length&&u.addEventListener("click",Nn);const h=document.getElementById("btnOpenMemoryTop");h&&h.addEventListener("click",qe)}else e&&(e.innerHTML=`
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${a.error?`<span class="top-conn-error" title="${p(a.error)}">${p(a.error)}</span>`:""}
          </div>
        `),t&&(t.innerHTML=`
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `),y(),o.totalScanned===0&&o.keysTableRows.length===0&&et()}catch{e&&(e.innerHTML=`
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `),t&&(t.innerHTML=""),y()}}function ba(){const e=document.getElementById("btnRefreshStats");e&&e.addEventListener("click",Z);const t=document.getElementById("clusterConfigModal"),n=document.getElementById("btnCloseConfigModalHeader");n&&t&&n.addEventListener("click",()=>t.classList.remove("active")),t&&t.addEventListener("click",d=>{d.target===t&&t.classList.remove("active")});const a=document.querySelector(".sidebar"),i=document.getElementById("btnToggleSidebar"),s=document.getElementById("btnShowSidebar"),l=d=>{if(!a)return;const c=d!==void 0?d:!a.classList.contains("collapsed");a.classList.toggle("collapsed",c),s&&(s.style.display=c?"inline-flex":"none"),localStorage.setItem("redis_insight_sidebar_collapsed",c?"true":"false"),y()};i&&i.addEventListener("click",()=>l(!0)),s&&s.addEventListener("click",()=>l(!1)),localStorage.getItem("redis_insight_sidebar_collapsed")==="true"&&l(!0),window.addEventListener("keydown",d=>{(d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="b"&&(d.preventDefault(),l())}),window.addEventListener("keydown",d=>{if(d.key==="Escape"){const c=document.querySelector(".modal-backdrop:not(.ws-dashboard-pane).active");if(c){c.classList.remove("active");return}o.activeWorkspaceTab&&o.activeWorkspaceTab!=="keys"&&N("keys")}}),window.addEventListener("focus",()=>{G()}),setInterval(Z,15e3)}async function Oe(){va(),y(),un(),Yn(),fa(),En(),Bn(),Pn(),On(),Vn(),ia(),la(),ba(),await G(),await Z(),await K()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Oe):Oe();
