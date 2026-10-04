(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=(e,t,n=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{o.setAttribute(a,String(t[a]))}),n.length&&n.forEach(a=>{const i=Mt(...a);o.appendChild(i)}),o};var Wt=([e,t,n])=>Mt(e,t,n);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),Qt=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Zt=e=>e.flatMap(Qt).map(n=>n.trim()).filter(Boolean).filter((n,o,a)=>a.indexOf(n)===o).join(" "),Xt=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,o)=>n.toUpperCase()+o.toLowerCase()),xt=(e,{nameAttr:t,icons:n,attrs:o})=>{const a=e.getAttribute(t);if(a==null)return;const i=Xt(a),r=n[i];if(!r)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const s=Yt(e),[c,g,u]=r,x={...g,"data-lucide":a,...o,...s},w=Zt(["lucide",`lucide-${a}`,s,o]);w&&Object.assign(x,{class:w});const h=Wt([c,x,u]);return e.parentNode?.replaceChild(h,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",b,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",b,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",b,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",b,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",b,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",b,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",b,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",b,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",b,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",b,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",b,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",b,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",b,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",b,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",b,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",b,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",b,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",b,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",b,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",b,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",b,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",b,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",b,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",b,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",b,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",b,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",b,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",b,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",b,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",b,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",b,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",b,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",b,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",b,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=["svg",b,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",b,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(a=>xt(a,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(i=>xt(i,{nameAttr:"icon-name",icons:e,attrs:n})))}};let oe=[],ae=[],be=0,xe="",ie="all",wt=null,K=null,Ae=!1,U=0,j="*",R="all",se=!1,ue=0,X=!1,Oe=0,le=null,z=[],pe=new Set,Z=null,Bt=null,De=null,M=[],_t="ALL",fe="",Re=null,At="all",Dt="",V=2,me=0;function y(){zn({icons:{Layers:bn,Plus:kn,RefreshCw:Sn,Search:$n,Cpu:un,Trash2:Bn,Zap:Rn,CheckCircle2:dn,AlertCircle:ln,Database:yn,ShieldCheck:Tn,Lock:xn,ArrowDownCircle:rn,X:Nn,Play:En,Copy:mn,Clock:cn,Edit:Mn,ExternalLink:vn,Code:pn,Users:Dn,Server:In,Network:wn,GitBranch:hn,ArrowRightLeft:tn,Activity:en,PieChart:on,AlertTriangle:An,TrendingUp:_n,BarChart2:nn,Power:Ln,ChevronLeft:an,ChevronRight:sn,PanelLeft:Cn,Download:gn,FileText:fn}})}function Pn(){const e=document.getElementById("app");e&&(e.innerHTML=`
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

          <!-- Safe Chunk Bar -->
          <div class="chunk-status-bar">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span class="safety-badge">
                <i data-lucide="shield-check" style="width: 14px; height: 14px;"></i>
                Safe SCAN (Chunk 50)
              </span>
              <span id="scanStatusText">Scanning keys...</span>
            </div>

            <div style="display: flex; align-items: center; gap: 0.5rem;" id="scanActionsGroup">
              <button type="button" class="btn btn-secondary" id="btnScanNext" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">
                <i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i>
                Load More
              </button>
              <button type="button" class="btn btn-secondary" id="btnResetScan" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">
                <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
                Refresh
              </button>
              <button type="button" class="btn btn-secondary" id="btnOpenExportModal" title="Export matched key names (CSV/TXT)" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">
                <i data-lucide="download" style="width: 13px; height: 13px;"></i>
                Export
              </button>
              <button type="button" class="btn btn-secondary" id="btnOpenBulkDeleteModal" title="Bulk delete matched keys (Dry-run & confirmation required)" style="font-size: 0.75rem; padding: 0.35rem 0.75rem; color: var(--accent-danger); border-color: rgba(239, 68, 68, 0.4);">
                <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
                Bulk Delete
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

            <div style="display: flex; gap: 1.5rem; margin-top: 0.25rem;">
              <label class="form-checkbox-group">
                <input type="checkbox" id="connTls" name="use_tls">
                <span>Use TLS/SSL</span>
              </label>
              <label class="form-checkbox-group">
                <input type="checkbox" id="connAutoActivate" name="auto_activate" checked>
                <span>Activate on save</span>
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
  `)}async function D(){se=!1,me++;const e=me;U=0,X=!1,ue=0,z=[],pe.clear();const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="none"),n&&(n.style.display="block"),zt(),await Rt(e)}function Nt(e){if(e==null)return!0;const t=String(e).trim();if(t===""||t==="0")return!0;if(t.startsWith("{"))try{return Object.values(JSON.parse(t)).every(n=>Number(n)===0)}catch{return!1}return!1}function Hn(e){const t=String(e??"").trim();if(t.startsWith("{"))try{const n=Object.values(JSON.parse(t));return`${n.filter(a=>Number(a)!==0).length} of ${n.length} nodes still scanning`}catch{return"more keys available"}return"more keys available"}function On(){return!!(le&&le.is_cluster)||String(U??"").trim().startsWith("{")}async function Rt(e=null){if(se||X)return;const t=e!==null?e:me;se=!0,Ct();try{const n=`/api/keys?pattern=${encodeURIComponent(j)}&cursor=${encodeURIComponent(String(U??"0"))}&count=50${R!=="all"?`&type=${encodeURIComponent(R)}`:""}`,o=await fetch(n);if(!o.ok)throw new Error("Failed to scan keys");const a=await o.json();if(t!==me)return;U=a.cursor,X=Nt(U),Oe=a.total_in_db;const r=(a.keys||[]).filter(s=>pe.has(s.name)?!1:(pe.add(s.name),!0)).map(s=>({key:s.name,type:s.type,ttl_seconds:s.ttl,status:s.ttl===-1?"Persistent":s.ttl===-2?"Expired":`Expires in ${s.ttl}s`}));r.length>0&&z.push(...r),zt(),ue=pe.size}catch(n){console.error("Scan error:",n)}finally{t===me&&(se=!1,Ct())}}function zt(){const e=document.getElementById("gridViewerContainer");if(e){if(z.length===0){const t=!X&&Nt(U);e.innerHTML=X?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${d(j)}</code>".
      </div>
    `:t?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${d(j)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${d(j)}</code>" in the part of the keyspace scanned so far.<br>
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
                <button type="button" class="btn-icon danger btn-delete-key-table" data-key="${encodeURIComponent(t.key)}" title="Delete key">
                  <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                </button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `,y(),e.querySelectorAll(".key-row").forEach(t=>{t.addEventListener("click",()=>{const n=decodeURIComponent(t.getAttribute("data-key"));ye(n)})}),e.querySelectorAll(".btn-delete-key-table").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const o=decodeURIComponent(t.getAttribute("data-key"));Fe(o,()=>{D()})})})}}function Ct(){const e=document.getElementById("scanStatusText"),t=document.getElementById("btnScanNext"),n=X;e&&(e.innerHTML=`
      Loaded <strong>${ue.toLocaleString()}</strong> keys
      ${n?'<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>':`<span style="color: var(--text-muted);">(${d(Hn(U))})</span>`}
      | ${On()?"Cluster Total":"DB Total"}: <strong>${Number(Oe||0).toLocaleString()}</strong>
    `),t&&(t.disabled=se||n,t.innerHTML=se?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':n?'<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More',y())}async function ye(e){Z=e;const t=document.getElementById("keyDetailModal"),n=document.getElementById("detailKeyTitle"),o=document.getElementById("detailHeaderMeta"),a=document.getElementById("detailBodyContent");n.textContent=e,n.title=e,o.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>',a.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>',t.classList.add("active");try{let i=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(i.ok||(i=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!i.ok){let s="Key not found or could not be read";try{const c=await i.json();c&&c.detail&&(s=c.detail)}catch{}throw new Error(s)}const r=await i.json();Bt=r,Fn(r),Kn(r)}catch(i){o.innerHTML='<span style="color: var(--accent-danger);">Error</span>',a.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Failed to inspect key</h4>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">${d(i.message)}</p>
      </div>
    `,y()}}function Fn(e){const t=document.getElementById("detailHeaderMeta"),n=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",o=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;t.innerHTML=`
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
      <span style="font-family: var(--font-mono); color: ${e.ttl===-1?"var(--text-muted)":"var(--accent-warning)"}; font-weight: 600;">${o}</span>
      <button type="button" class="btn btn-secondary" id="btnEditTtl" style="padding: 0.2rem 0.5rem; font-size: 0.72rem; margin-left: 0.25rem;">
        Edit TTL
      </button>
    </div>
  `,y(),document.getElementById("btnEditTtl").addEventListener("click",()=>{jn(e.name,e.ttl)})}async function jn(e,t){const n=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,t>0?t:"3600");if(n===null)return;const o=parseInt(n.trim(),10);if(isNaN(o)){alert("Please enter a valid integer.");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:o})})).ok)throw new Error("Failed to update TTL");ye(e)}catch(a){alert("Error updating TTL: "+a.message)}}function Kn(e){const t=document.getElementById("detailBodyContent"),n=e.type.toLowerCase();if(n==="hash"){const o=e.fields||[];t.innerHTML=`
      <div class="fields-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <input type="text" id="hashFieldSearchInput" class="field-search-input" placeholder="Search ${o.length} fields...">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="hashFieldCountText">${o.length} fields</span>
        </div>
        <button type="button" class="btn btn-secondary" id="btnAddHashField" style="font-size: 0.75rem; padding: 0.35rem 0.65rem;">
          <i data-lucide="plus" style="width: 13px; height: 13px;"></i>
          Add Field
        </button>
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
            ${Pt(o)}
          </tbody>
        </table>
      </div>
    `,y(),Un(e.name,o);return}if(e.is_json||n.includes("json")){const o=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${d(o)}</div>
    `,y(),document.getElementById("btnCopyJsonValue").addEventListener("click",()=>{navigator.clipboard.writeText(o),alert("JSON copied to clipboard!")});return}if(n==="string"){t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${d(e.value||"")}</div>
    `,y(),document.getElementById("btnCopyStringValue").addEventListener("click",()=>{navigator.clipboard.writeText(e.value||""),alert("Value copied to clipboard!")});return}if(Array.isArray(e.value)){const o=n==="zset";t.innerHTML=`
      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 15%;">${o?"Score":"Index"}</th>
              <th style="width: 85%;">Element / Member</th>
            </tr>
          </thead>
          <tbody>
            ${e.value.map((a,i)=>`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
                  ${o?a.score:`[${i}]`}
                </td>
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem;">
                  ${d(o?a.member:String(a))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;return}t.innerHTML=`<div class="json-view-box">${d(String(e.value))}</div>`}function Pt(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(t=>`
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
        ${d(t.field)}
      </td>
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
        ${d(t.value)}
      </td>
      <td style="padding: 0.6rem 1rem; text-align: right;">
        <button type="button" class="btn-icon danger btn-delete-hash-field" data-field="${encodeURIComponent(t.field)}" title="Delete field">
          <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
        </button>
      </td>
    </tr>
  `).join("")}function Un(e,t){const n=document.getElementById("hashFieldSearchInput"),o=document.getElementById("hashFieldCountText"),a=document.getElementById("hashFieldsTableBody");n&&n.addEventListener("input",()=>{const r=n.value.trim().toLowerCase(),s=r?t.filter(c=>c.field.toLowerCase().includes(r)||c.value.toLowerCase().includes(r)):t;a.innerHTML=Pt(s),o.textContent=`${s.length} of ${t.length} fields`,y(),Et(e)});const i=document.getElementById("btnAddHashField");i&&i.addEventListener("click",async()=>{const r=prompt(`Enter field name for hash '${e}':`);if(!r)return;const s=prompt(`Enter value for field '${r}':`);if(s!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:r,value:s})})).ok)throw new Error("Failed to set field");ye(e)}catch(c){alert("Error setting field: "+c.message)}}),Et(e)}function Et(e){document.querySelectorAll(".btn-delete-hash-field").forEach(t=>{t.addEventListener("click",async()=>{const n=decodeURIComponent(t.getAttribute("data-field"));if(confirm(`Delete field '${n}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(n)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");ye(e)}catch(o){alert("Error: "+o.message)}})})}function d(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Fe(e,t){De=t;const n=document.getElementById("deleteKeyConfirmModal"),o=document.getElementById("deleteKeyTargetName"),a=document.getElementById("inputConfirmDelete"),i=document.getElementById("btnSubmitDeleteKey");o.textContent=e,a.value="",i.disabled=!0,n.classList.add("active"),a.focus(),a.oninput=()=>{const r=a.value.trim().toUpperCase();i.disabled=r!=="CONFIRM"&&a.value.trim()!==e},i.onclick=async()=>{i.disabled=!0,i.textContent="Deleting...";try{const r=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),s=await r.json();if(!r.ok)throw new Error(s.detail||"Failed to delete key");n.classList.remove("active"),De&&De()}catch(r){alert("Error deleting key: "+r.message)}finally{i.disabled=!1,i.textContent="Delete Permanently"}}}async function Vn(){document.getElementById("clientsListModal").classList.add("active"),await je()}function kt(){document.getElementById("clientsListModal").classList.remove("active")}async function je(){const e=document.getElementById("clientsTableContainer"),t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats"),o=document.getElementById("clientsSearchInput");e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',y();try{const a=await fetch("/api/clients");if(!a.ok)throw new Error("Failed to load connected clients");oe=await a.json(),t&&(t.textContent=oe.length),n&&(n.textContent=`${oe.length} total connections`),o&&(o.value=""),Ht(oe)}catch(a){e.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
        <h4>Error loading clients</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${a.message}</p>
      </div>
    `,y()}}function Ht(e){const t=document.getElementById("clientsTableContainer");if(!e||e.length===0){t.innerHTML=`
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
              <button type="button" class="btn-icon danger btn-kill-client" data-id="${n.id}" data-addr="${d(n.addr)}" title="Disconnect client">
                <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
              </button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,y(),t.querySelectorAll(".btn-kill-client").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-id"),a=n.getAttribute("data-addr");qn(o,a)})})}async function qn(e,t){if(confirm(`Are you sure you want to disconnect client #${e} (${t})?`))try{const n=await fetch(`/api/clients/${e}`,{method:"DELETE"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to disconnect client");await je(),await F()}catch(n){alert("Error disconnecting client: "+n.message)}}async function Gn(){const e=document.getElementById("slowlogModal");if(!e)return;e.classList.add("active"),be=0,xe="",ie="all",document.querySelectorAll(".slowlog-filter-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-min-duration")==="0")});const t=document.getElementById("slowlogSearchInput");t&&(t.value=""),await Ke()}function Lt(){const e=document.getElementById("slowlogModal");e&&e.classList.remove("active")}async function Ke(){const e=document.getElementById("slowlogTableContainer"),t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),o=document.getElementById("slowlogFooterStats");e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,y());try{const a=await fetch("/api/slowlog?limit=250");if(!a.ok)throw new Error("Failed to fetch slowlog");const i=await a.json();if(ae=i.entries||[],t&&(t.textContent=ae.length),n&&i.slower_than_us!==null&&i.slower_than_us!==void 0){const r=(i.slower_than_us/1e3).toFixed(1);n.textContent=`Threshold: > ${r}ms (${i.slower_than_us} µs)`}o&&(o.textContent=`Total buffer: ${i.total_len||ae.length} entries | Max buffer: ${i.max_len||"N/A"}`),Jn(ae),we()}catch(a){e&&(e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${d(a.message)}</p>
        </div>
      `,y())}}function Jn(e){const t=document.getElementById("slowlogNodeFilterContainer");if(!t)return;const n=Array.from(new Set(e.map(a=>a.node).filter(Boolean)));if(n.length<=1){t.innerHTML="";return}t.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${n.length})</option>
      ${n.map(a=>`<option value="${d(a)}" ${ie===a?"selected":""}>${d(a)}</option>`).join("")}
    </select>
  `;const o=document.getElementById("slowlogNodeSelect");o&&o.addEventListener("change",()=>{ie=o.value,we()})}function we(){let e=ae;if(be>0&&(e=e.filter(t=>t.duration_ms>=be)),ie&&ie!=="all"&&(e=e.filter(t=>t.node===ie)),xe){const t=xe.toLowerCase();e=e.filter(n=>{const o=(n.command||[]).join(" ").toLowerCase(),a=(n.client_ip||"").toLowerCase(),i=(n.node||"").toLowerCase();return o.includes(t)||a.includes(t)||i.includes(t)||String(n.id).includes(t)})}Wn(e)}function Wn(e){const t=document.getElementById("slowlogTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <i data-lucide="check-circle-2" style="width: 28px; height: 28px; color: #4ade80;"></i>
        </div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.35rem;">No Slow Queries Recorded</h4>
        <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.5;">
          ${ae.length===0?"Redis latency is healthy! All commands executed within the threshold.":"No slowlog entries matched the active filters."}
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
                ${d(n.time_str||"N/A")}
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
                <span class="slowlog-cmd-code" title="${d(a)}">${d(a)}</span>
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
  `,y()}}async function Yn(){if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");await Ke()}catch(e){alert("Error resetting slowlog: "+e.message)}}async function Ot(){const e=document.getElementById("memoryModal");e&&(e.classList.add("active"),await Ft(),K?Ve(K):Ue())}function ze(){const e=document.getElementById("memoryModal");e&&e.classList.remove("active")}async function Ft(){const e=document.getElementById("memoryOverviewContainer");if(e){e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,y();try{const t=await fetch("/api/memory/overview");if(!t.ok)throw new Error("Failed to fetch memory overview");wt=await t.json(),Qn(wt)}catch(t){e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${d(t.message)}</p>
      </div>
    `,y()}}}function Qn(e){const t=document.getElementById("memoryOverviewContainer");if(!t||!e)return;let n="mem-status-healthy",o="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(n="mem-status-critical",o="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(n="mem-status-warning",o=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),t.innerHTML=`
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
          Max: <span style="font-family: var(--font-mono); color: var(--text-primary);">${e.maxmemory_human}</span> | Policy: ${d(e.maxmemory_policy)}
        </div>
      </div>
    </div>
  `,y()}function Ue(){const e=document.getElementById("memoryProfilingContainer");if(!e)return;e.innerHTML=`
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
  `,y();const t=document.getElementById("btnStartProfilingAction");t&&t.addEventListener("click",()=>{const n=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,o=document.getElementById("memSamplePatternInput").value||"*";Zn(n,o)})}async function Zn(e=500,t="*"){const n=document.getElementById("memoryProfilingContainer");if(n){Ae=!0,n.innerHTML=`
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: #a78bfa; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">Analyzing Redis Keyspace...</h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
        Scanning sample of up to <strong>${e.toLocaleString()}</strong> keys (pattern <code>${d(t)}</code>) and measuring memory allocations...
      </p>
    </div>
  `,y();try{const o=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:t})});if(!o.ok)throw new Error("Failed to complete memory profiling");K=await o.json(),Ae=!1,Ve(K)}catch(o){Ae=!1,n.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Memory Profiling Failed</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${d(o.message)}</p>
        <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Try Again</button>
      </div>
    `,y();const a=document.getElementById("btnRetryProfiling");a&&a.addEventListener("click",Ue)}}}function Ve(e){const t=document.getElementById("memoryProfilingContainer");if(!t||!e)return;const n={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};t.innerHTML=`
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
        ${St(e.top_bigkeys)}
      </div>
    </div>
  `,y();const o=document.getElementById("btnReRunProfiling");o&&o.addEventListener("click",Ue);const a=document.getElementById("bigkeysSearchInput");a&&a.addEventListener("input",()=>{const i=a.value.trim().toLowerCase(),r=i?e.top_bigkeys.filter(c=>c.key.toLowerCase().includes(i)||c.type.toLowerCase().includes(i)):e.top_bigkeys,s=document.getElementById("bigkeysTableContainer");s&&(s.innerHTML=St(r),y(),$t())}),$t()}function St(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const t=e[0]?e[0].memory_bytes:1;return`
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
        ${e.map((n,o)=>{let a="rank-normal";o===0?a="rank-gold":o===1?a="rank-silver":o===2&&(a="rank-bronze");const i=t>0?Math.max(5,Math.round(n.memory_bytes/t*100)):10;let r="No TTL (Persistent)",s="var(--text-muted)";return n.ttl>0&&(r=`${n.ttl.toLocaleString()}s`,s="var(--accent-warning)"),`
            <tr>
              <td>
                <span class="rank-badge ${a}">#${o+1}</span>
              </td>
              <td>
                <a href="javascript:void(0)" class="key-name-link bigkey-inspect-btn" data-key="${d(n.key)}" style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 600; color: #38bdf8; text-decoration: none;" title="Inspect key: ${d(n.key)}">
                  ${d(n.key)}
                </a>
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
                  <button type="button" class="btn btn-danger bigkey-delete-btn" data-key="${d(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Delete oversized key">
                    <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
                  </button>
                </div>
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function $t(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&(ze(),ye(t))})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&Fe(t,async()=>{K&&(K.top_bigkeys=K.top_bigkeys.filter(n=>n.key!==t),Ve(K)),await F()})})})}async function q(){const e=document.getElementById("connectionsList");try{const[t,n]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]);M=await t.json()||[],n.ok&&(V=(await n.json()).limit||2),he()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function jt(e,t){const n=document.getElementById("connectedCountDisplay"),o=document.getElementById("connLimitDisplay"),a=document.getElementById("connLimitSelect"),i=document.getElementById("limitProgressDots"),r=document.getElementById("limitCountPill");if(n&&(n.textContent=e),o&&(o.textContent=t),a&&String(a.value)!==String(t)&&(a.value=String(t)),r&&(e>=t&&t>0?(r.classList.add("at-limit"),r.title="Connection limit reached"):(r.classList.remove("at-limit"),r.title=`${e} of ${t} connections in use`)),i){let s="";for(let c=0;c<t;c++){const g=c<e;s+=`<span class="limit-slot-dot ${g?"filled":"empty"}" title="Slot ${c+1}: ${g?"Connected":"Available"}"></span>`}i.innerHTML=s}}function he(){const e=document.getElementById("connectionsList");if(!e)return;const t=document.getElementById("totalConnCountBadge");t&&(t.textContent=M.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(s=>{const c=s.getAttribute("data-env");let g=0;c==="ALL"?g=M.length:g=M.filter(u=>(u.env||"LOCAL").toUpperCase()===c).length,s.textContent=`${c} (${g})`});const o=(fe||"").trim().toLowerCase(),a=_t,i=M.filter(s=>{if(a!=="ALL"&&(s.env||"LOCAL").toUpperCase()!==a)return!1;if(o){const c=(s.name||"").toLowerCase().includes(o),g=(s.host||"").toLowerCase().includes(o),u=(s.env||"").toLowerCase().includes(o),x=(s.conn_type||"").toLowerCase().includes(o);if(!c&&!g&&!u&&!x)return!1}return!0});i.sort((s,c)=>{const g=s.is_connected?1:0,u=c.is_connected?1:0;if(u!==g)return u-g;const x=s.is_selected?1:0,w=c.is_selected?1:0;return w!==x?w-x:(s.name||"").localeCompare(c.name||"")});const r=M.filter(s=>s.is_connected).length;if(jt(r,V),i.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${o?`No results found for "${d(o)}"`:`No connections configured in ${d(a)}`}
        </span>
      </div>
    `,y();return}e.innerHTML=i.map(s=>{const c=(s.env||"LOCAL").toUpperCase(),g=`badge-env-${c.toLowerCase()}`,u=s.conn_type==="cluster",x=s.conn_type==="sentinel",w=s.source==="config",h=!!s.is_connected,N=!!s.is_selected;return`
      <div class="conn-card ${h?"is-connected":""} ${N?"selected active":""}" data-id="${s.id}" title="Click to review config & connection options">
        
        <!-- Header: Lead Indicator + Name + Status Pill -->
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${N?`
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

          <div class="conn-title-wrap">
            <span class="conn-name" title="${d(s.name)}">${d(s.name)}</span>
          </div>

          <div class="conn-status-badge-wrap">
            ${N?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:h?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <!-- Sub-row: Endpoint on left, Badges on right -->
        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${d(s.host)}:${s.port}">
            <i data-lucide="${u?"network":x?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${d(s.host)}:${s.port}</span>
          </div>

          <div class="conn-tags">
            <span class="badge-env ${g}">${c}</span>
            ${u?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${x?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!u&&!x?`<span class="badge-db">DB${s.db}</span>`:""}
            ${s.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${s.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${w?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <!-- Floating Quick Action Toolbar on Hover -->
        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${h?`
            ${N?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${s.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${s.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${u||h?`
              <button type="button" class="btn-hover-action btn-view-topology-card" data-id="${s.id}" title="View topology & nodes">
                <i data-lucide="layers" style="width: 11px; height: 11px;"></i>
              </button>
            `:""}
          `:`
            <button type="button" class="btn-hover-action btn-hover-connect btn-card-open-config" data-id="${s.id}" title="Review config & Connect">
              <i data-lucide="play" style="width: 11px; height: 11px;"></i>
              <span>Connect</span>
            </button>
            ${w?"":`
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${s.id}" data-name="${d(s.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>

      </div>
    `}).join(""),y(),e.querySelectorAll(".conn-card").forEach(s=>{s.addEventListener("click",c=>{if(c.target.closest(".btn-delete-conn")||c.target.closest(".btn-view-topology-card")||c.target.closest(".btn-card-disconnect")||c.target.closest(".btn-card-select")||c.target.closest(".btn-card-open-config"))return;const g=s.getAttribute("data-id"),u=M.find(x=>x.id===g);u&&Pe(u)})}),e.querySelectorAll(".btn-card-disconnect").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const g=s.getAttribute("data-id");await qe(g)})}),e.querySelectorAll(".btn-card-select").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const g=s.getAttribute("data-id");await Ut(g)})}),e.querySelectorAll(".btn-card-open-config").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation();const g=s.getAttribute("data-id"),u=M.find(x=>x.id===g);u&&Pe(u)})}),e.querySelectorAll(".btn-view-topology-card").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const g=s.getAttribute("data-id");await Ce(g)})}),e.querySelectorAll(".btn-delete-conn").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const g=s.getAttribute("data-id"),u=s.getAttribute("data-name");confirm(`Are you sure you want to delete '${u}'?`)&&await to(g)})})}function Xn(e){if(!e)return[];if(Array.isArray(e))return e.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t));if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n))}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}return[]}function Pe(e){const t=document.getElementById("clusterConfigModal"),n=document.getElementById("cfgModalTitle"),o=document.getElementById("cfgModalSubtitle"),a=document.getElementById("cfgModalBody"),i=document.getElementById("cfgModalFooter");n.textContent=e.name||"Cluster Configuration",o.textContent="Review configuration before connecting";const r=!!e.is_connected,s=!!e.is_selected,c=e.conn_type==="cluster",g=Xn(e.cluster_nodes),u=M.filter(G=>G.is_connected).length,x=!r&&u>=V;a.innerHTML=`
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
      ${c&&(g.length>0||e.cluster_nodes)?`
        <div class="config-grid-row config-grid-seeds-row">
          <span class="config-label" style="padding-top: 2px;">
            Seed Endpoints ${g.length>0?`(${g.length})`:""}
          </span>
          <div class="config-seeds-container">
            ${g.length>0?g.map(G=>`
                  <span class="seed-node-pill" title="${d(G)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${d(G)}
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
      <span>Connected Limit: <strong>${u} of ${V}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${x?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${V} maximum). Please disconnect a connected cluster first or increase the limit.</span>
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
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${x?"disabled":""}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `,y(),t.classList.add("active");const w=document.getElementById("btnCloseConfigModal");w&&(w.onclick=()=>t.classList.remove("active"));const h=document.getElementById("btnEditFromConfig");h&&(h.onclick=()=>{t.classList.remove("active"),openEditConnectionModal(e)});const N=document.getElementById("btnConnectFromConfig");N&&(N.onclick=async()=>{await Kt(e.id),t.classList.remove("active")});const I=document.getElementById("btnDisconnectFromConfig");I&&(I.onclick=async()=>{await qe(e.id),t.classList.remove("active")});const C=document.getElementById("btnSelectFromConfig");C&&(C.onclick=async()=>{await Ut(e.id),t.classList.remove("active")});const P=document.getElementById("btnTopologyFromConfig");P&&(P.onclick=async()=>{t.classList.remove("active"),await Ce(e.id)});const re=document.getElementById("btnTestFromConfig");re&&(re.onclick=async()=>{await eo(e)})}async function eo(e){const t=document.getElementById("cfgTestResultBox"),n=document.getElementById("btnTestFromConfig");n&&(n.disabled=!0,n.innerHTML="Testing..."),t&&(t.className="test-result-box",t.innerHTML="");try{const a=await(await fetch(`/api/connections/${e.id}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();a.success?(t.className="test-result-box success",t.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${a.latency_ms} ms</strong> (Redis v${a.redis_version})</span>
      `):(t.className="test-result-box error",t.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${d(a.error||"Connection refused")}</span>
      `)}catch(o){t&&(t.className="test-result-box error",t.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${d(o.message)}</span>`)}finally{n&&(n.disabled=!1,n.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),y()}}async function Kt(e){if(M.find(n=>n.id===e),M.filter(n=>n.is_connected&&n.id!==e).length>=V){alert(`Connection limit reached: Maximum ${V} connected cluster(s) allowed at a time.
Please disconnect an existing cluster first or increase the limit in the sidebar.`);return}try{const n=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to connect to cluster");await q(),await F(),await D()}catch(n){alert("Connection error: "+n.message)}}async function qe(e){try{const t=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to disconnect cluster");await q(),await F(),M.some(a=>a.is_connected&&a.id!==e)?await D():(z=[],pe.clear(),ue=0,U=0,X=!1,Oe=0,Ge())}catch(t){alert("Disconnect error: "+t.message)}}async function Ut(e){try{const t=await fetch(`/api/connections/${e}/select`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to switch cluster");const o=document.getElementById("keyDetailModal");o&&o.classList.remove("active"),Z=null,Bt=null,await q(),await F(),await D()}catch(t){alert("Switch error: "+t.message)}}function Ge(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="flex"),n&&(n.style.display="none");const o=document.getElementById("btnConnectFirstAvailable");o&&(o.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${M.length})`,M.length>0&&(o.onclick=()=>Pe(M[0]))),y()}async function to(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");await q(),await F(),await D()}catch(t){alert("Delete error: "+t.message)}}async function no(){const e=document.getElementById("keyspaceNodesModal");e&&(e.classList.add("active"),qt(le),await Vt())}function Ne(){const e=document.getElementById("keyspaceNodesModal");e&&e.classList.remove("active")}async function Vt(){try{const e=await fetch("/api/status");if(!e.ok)throw new Error("Failed to load node stats");le=await e.json(),qt(le)}catch(e){const t=document.getElementById("keyspaceNodesContainer");t&&(t.innerHTML=`<div style="padding: 2rem; text-align: center; color: var(--accent-danger);">${d(e.message)}</div>`)}}function qt(e){const t=document.getElementById("keyspaceNodesContainer"),n=document.getElementById("keyspaceTotalBadge");if(!t||!e)return;const o=e.node_stats||[],a=o.filter(u=>u.role==="master"),i=a.reduce((u,x)=>u+(x.keys||0),0);if(n&&(n.textContent=`${i.toLocaleString()} keys`),a.length===0){t.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Per-node breakdown is only available for cluster connections.</div>';return}const r=u=>u==null?"—":Number(u).toLocaleString(),s=(u,x="left")=>`<th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: ${x};">${u}</th>`,c=(u,x="")=>`<td style="padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; ${x}">${u}</td>`,g=a.map(u=>{const x=i>0&&u.keys!==null?(u.keys/i*100).toFixed(1):"0.0",w=o.filter(I=>I.role==="replica"&&I.master===u.node),h=`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        ${c(`<span class="role-badge-master">MASTER</span> <span style="color: var(--text-primary); font-weight: 600; margin-left: 6px;">${d(u.node)}</span>`)}
        ${c(u.error?`<span style="color: var(--accent-danger);" title="${d(u.error)}">unreachable</span>`:r(u.keys),"text-align: right; color: var(--text-primary); font-weight: 600;")}
        ${c(`${x}%`,"text-align: right; color: var(--text-secondary);")}
        ${c(d(u.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
        ${c(r(u.connected_clients),"text-align: right; color: #38bdf8;")}
      </tr>`,N=w.map(I=>{const C=I.keys!==null&&u.keys!==null?I.keys-u.keys:null,P=C===null?"":C===0?'<span style="color: var(--accent-success); margin-left: 6px;">in sync</span>':`<span style="color: var(--accent-warning); margin-left: 6px;" title="Replica key count differs from its master (replication lag or expiring keys)">${C>0?"+":""}${C.toLocaleString()}</span>`;return`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(0,0,0,0.12);">
        ${c(`<span style="color: var(--text-muted); margin-left: 0.75rem;">↳</span> <span class="role-badge-replica">REPLICA</span> <span style="color: var(--text-secondary); margin-left: 6px;">${d(I.node)}</span>`)}
        ${c(I.error?`<span style="color: var(--accent-danger);" title="${d(I.error)}">unreachable</span>`:`${r(I.keys)}${P}`,"text-align: right; color: var(--text-secondary);")}
        ${c("","")}
        ${c(d(I.used_memory_human||"—"),"text-align: right; color: var(--text-muted);")}
        ${c(r(I.connected_clients),"text-align: right; color: var(--text-muted);")}
      </tr>`}).join("");return h+N}).join("");t.innerHTML=`
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${s("NODE")}${s("KEYS","right")}${s("SHARE","right")}${s("MEMORY","right")}${s("CLIENTS","right")}</tr>
      </thead>
      <tbody>${g}</tbody>
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
  `,y()}async function Ce(e=null){const t=document.getElementById("clusterTopologyModal");if(t){if(t.classList.add("active"),e){const n=document.querySelector(`.conn-card[data-id="${e}"]`);n&&!n.classList.contains("active")&&await Kt(e)}await Gt()}}function It(){const e=document.getElementById("clusterTopologyModal");e&&e.classList.remove("active")}async function Gt(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),t=document.getElementById("topologyNodesCountBadge"),n=document.getElementById("topologyEnvBadge"),o=M.find(a=>a.is_active);if(o&&n){const a=(o.env||"LOCAL").toUpperCase();n.textContent=a,n.className=`badge-env badge-env-${a.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,y());try{const a=await fetch("/api/topology");if(!a.ok)throw new Error("Failed to load cluster topology");const i=await a.json();Re=i,t&&(t.textContent=`${i.total_nodes} Node${i.total_nodes!==1?"s":""}`),oo(i),He()}catch(a){e&&(e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${a.message}</p>
        </div>
      `,y())}}function oo(e){const t=document.getElementById("topologyStatsGrid");if(!t)return;const n=e.is_cluster,o=(e.cluster_state||"").toLowerCase()==="ok"||!n;t.innerHTML=`
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
  `}function He(){const e=document.getElementById("topologyTableContainer");if(!e||!Re)return;const t=Re.nodes||[],n=(Dt||"").trim().toLowerCase(),o=At,a=t.filter(i=>{if(o!=="all"&&i.role.toLowerCase()!==o)return!1;if(n){const r=(i.addr||"").toLowerCase().includes(n),s=(i.id||"").toLowerCase().includes(n),c=(i.ip||"").toLowerCase().includes(n),g=(i.slots||"").toLowerCase().includes(n);if(!r&&!s&&!c&&!g)return!1}return!0});if(a.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
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
        ${a.map(i=>{const r=i.role==="master",s=(i.link_state||"connected").toLowerCase()==="connected",c=i.id?i.id.length>12?`${i.id.substring(0,10)}...`:i.id:"N/A",g=i.slots?`${i.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${i.slot_count||0} slots)</span>`:r?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
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
                ${g}
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
  `,y()}async function F(){const e=document.getElementById("topConnContainer"),t=document.getElementById("topVitalsContainer");try{const o=await(await fetch("/api/status")).json();if(o.connected){const a=M.find(h=>h.is_selected)||M.find(h=>h.id===o.connection_id)||M.find(h=>h.is_connected),i=a&&a.conn_type==="cluster"||o.cluster_nodes&&o.cluster_nodes.length>0||o.is_cluster,r=o.cluster_nodes_count||(o.node_stats?o.node_stats.length:1),s=(o.node_stats||[]).filter(h=>h.role==="master");if(le=o,e){const h=(o.env||a?.env||"LOCAL").toUpperCase();e.innerHTML=`
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${d(o.connection_name||"Connected")}">${d(o.connection_name||"Connected")}</span>
            <span class="badge-env badge-env-${h.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem; margin-right: 0.25rem;">${h}</span>
            <span class="top-conn-endpoint">${o.host}:${o.port}</span>
            <span class="top-conn-tag">${i?"CLUSTER":`DB${o.db}`}</span>
            <button type="button" class="top-conn-disconnect" id="btnTopDisconnect" title="Disconnect ${d(o.connection_name||"instance")}">
              <i data-lucide="power" style="width: 12px; height: 12px;"></i>
            </button>
          </div>
        `}t&&(t.innerHTML=`
          <div class="top-vitals-capsule">
            <div class="vital-item clickable" id="btnOpenTopologyTop" title="View Cluster Topology & Node Health">
              <i data-lucide="layers" style="width: 12px; height: 12px; color: ${i?"#a78bfa":"var(--accent-primary)"};"></i>
              <span class="vital-val" style="color: ${i?"#c084fc":"var(--accent-primary)"};">
                ${i?`${r} Nodes`:"1 Node"}
              </span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="PING round-trip latency">
              <i data-lucide="zap" style="width: 11px; height: 11px; color: var(--accent-success);"></i>
              <span class="vital-val" style="color: var(--accent-success);">${o.latency_ms} ms</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item${s.length?" clickable":""}" id="btnOpenKeyspaceTop" title="${s.length?`Total keys across ${s.length} master nodes. Click for per-node breakdown`:"Total keys in active keyspace"}">
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
        `),y();const c=document.getElementById("btnTopDisconnect");c&&c.addEventListener("click",()=>{o.connection_id&&qe(o.connection_id)});const g=document.getElementById("btnOpenClientsModal");g&&g.addEventListener("click",Vn);const u=document.getElementById("btnOpenTopologyTop");u&&u.addEventListener("click",()=>Ce());const x=document.getElementById("btnOpenKeyspaceTop");x&&s.length&&x.addEventListener("click",no);const w=document.getElementById("btnOpenMemoryTop");w&&w.addEventListener("click",Ot)}else e&&(e.innerHTML=`
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${o.error?`<span class="top-conn-error" title="${d(o.error)}">${d(o.error)}</span>`:""}
          </div>
        `),t&&(t.innerHTML=`
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `),y(),ue===0&&z.length===0&&Ge()}catch{e&&(e.innerHTML=`
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `),t&&(t.innerHTML=""),y()}}function ao(){const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const l=parseInt(e.value,10)||2;try{const m=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:l})});if(m.ok){const p=await m.json();V=p.limit,jt(p.connected_count,p.limit)}}catch(m){console.error("Failed to update limit:",m)}});const t=document.getElementById("clusterConfigModal");t&&t.addEventListener("click",l=>{l.target===t&&t.classList.remove("active")});const n=document.getElementById("connSearchInput"),o=document.getElementById("btnClearConnSearch");n&&n.addEventListener("input",()=>{fe=n.value,o&&(o.style.display=fe?"flex":"none"),he()}),o&&o.addEventListener("click",()=>{n&&(n.value="",n.focus()),fe="",o.style.display="none",he()});const a=document.querySelectorAll("#envFilterPills .env-pill-btn");a.forEach(l=>{l.addEventListener("click",()=>{a.forEach(m=>m.classList.remove("active")),l.classList.add("active"),_t=l.getAttribute("data-env")||"ALL",he()})});const i=document.getElementById("btnReloadConfig");i&&i.addEventListener("click",async()=>{i.disabled=!0;try{const m=await(await fetch("/api/connections/reload-config",{method:"POST"})).json(),p=m.loaded??m.total_in_file??0;alert(`Config reloaded successfully! Synced ${p} connection(s) from config.`),await q()}catch(l){alert("Failed to reload config: "+l.message)}finally{i.disabled=!1}}),window.addEventListener("focus",()=>{q().catch(()=>{})});let r=[];function s(){const l=document.getElementById("clusterNodesList"),m=document.getElementById("clusterNodeCountBadge");if(l){if(m&&(m.textContent=`${r.length} configured`),r.length===0){l.innerHTML=`
        <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
          No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
        </div>
      `;return}l.innerHTML=r.map((p,f)=>{const v=p.role==="master",$=p.role==="replica",E=p.role==="seed",B=v?"master":$?"replica":"",k=v?"master":$?"replica":E?"seed":"manual",_=v?"Master":$?"Replica":E?"Seed":"Node";return`
        <span class="cluster-node-chip ${B}">
          <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
          <span>${d(p.host)}:${p.port}</span>
          <span class="cluster-node-role-badge ${k}">${_}</span>
          <button type="button" class="cluster-node-chip-remove" data-idx="${f}" title="Remove node">
            <i data-lucide="x" style="width: 11px; height: 11px;"></i>
          </button>
        </span>
      `}).join(""),l.querySelectorAll(".cluster-node-chip-remove").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation();const v=parseInt(p.getAttribute("data-idx"),10);!isNaN(v)&&v>=0&&v<r.length&&(r.splice(v,1),s())})}),y()}}const c=document.getElementById("connTypeSelect"),g=document.getElementById("clusterNodesGroup"),u=document.getElementById("connHostLabel"),x=document.getElementById("connPortLabel"),w=document.getElementById("connHost"),h=document.getElementById("connPort"),N=document.getElementById("connDbGroup");c&&g&&c.addEventListener("change",()=>{const l=c.value==="cluster";g.style.display=l?"block":"none",N&&(N.style.display=l?"none":"block"),l?(u&&(u.textContent="Primary Seed Host *"),x&&(x.textContent="Seed Port *"),w&&(w.value==="localhost"||!w.value)&&(w.value="127.0.0.1"),h&&(h.value==="6379"||!h.value)&&(h.value="7000"),r.length===0&&w&&w.value&&h&&h.value&&r.push({host:w.value.trim(),port:parseInt(h.value,10)||7e3,role:"seed"}),s()):(u&&(u.textContent="Host *"),x&&(x.textContent="Port *"),h&&h.value==="7000"&&(h.value="6379"))});const I=document.getElementById("btnAutoDiscoverCluster"),C=document.getElementById("clusterDiscoveryStatus");I&&I.addEventListener("click",async()=>{const l=w?w.value.trim():"127.0.0.1",m=h&&parseInt(h.value,10)||7e3,p=document.getElementById("connUsername").value.trim()||null,f=document.getElementById("connPassword").value||null,v=document.getElementById("connTls").checked;if(!l){C&&(C.className="cluster-discovery-status error",C.style.display="flex",C.innerHTML='<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>',y());return}I.disabled=!0,I.innerHTML='<i class="lucide-spin" data-lucide="loader-2" style="width: 13px; height: 13px;"></i> Discovering...',y(),C&&(C.className="cluster-discovery-status",C.style.display="none");try{const E=await(await fetch("/api/connections/discover-cluster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:l,port:m,username:p,password:f,use_tls:v})})).json();E.success&&E.nodes&&E.nodes.length>0?(r=E.nodes.map(B=>({host:B.host,port:B.port,role:B.role,is_myself:B.is_myself,slots:B.slots})),s(),C&&(C.className="cluster-discovery-status success",C.style.display="flex",C.innerHTML=`
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${E.total_nodes} nodes</strong> (${E.masters_count} masters, ${E.replicas_count} replicas) • Cluster state: <strong>${E.cluster_state.toUpperCase()}</strong></span>
            `)):C&&(C.className="cluster-discovery-status error",C.style.display="flex",C.innerHTML=`
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${d(E.error||"Cluster discovery failed. Ensure seed node is part of a cluster.")}</span>
            `)}catch($){C&&(C.className="cluster-discovery-status error",C.style.display="flex",C.innerHTML=`
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${d($.message)}</span>
          `)}finally{I.disabled=!1,I.innerHTML='<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes',y()}});const P=document.getElementById("inputCustomClusterNode"),re=document.getElementById("btnAddCustomClusterNode");function G(){if(!P)return;const l=P.value.trim();if(!l)return;let m="127.0.0.1",p=7e3;if(l.includes(":")){const v=l.split(":");m=v[0].trim()||"127.0.0.1",p=parseInt(v[1].trim(),10)||7e3}else isNaN(parseInt(l,10))?m=l:(p=parseInt(l,10),m=w?w.value.trim():"127.0.0.1");r.some(v=>v.host===m&&v.port===p)||(r.push({host:m,port:p,role:"manual"}),s()),P.value=""}re&&re.addEventListener("click",G),P&&P.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),G())});const Ee=document.getElementById("clusterTopologyModal"),Je=document.getElementById("btnCloseTopologyModal");Je&&Je.addEventListener("click",It);const We=document.getElementById("btnRefreshTopologyModal");We&&We.addEventListener("click",Gt),Ee&&Ee.addEventListener("click",l=>{l.target===Ee&&It()});const ke=document.getElementById("topologySearchInput");ke&&ke.addEventListener("input",()=>{Dt=ke.value,He()}),document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(m=>m.classList.remove("active")),l.classList.add("active"),At=l.getAttribute("data-role")||"all",He()})});const Ye=document.getElementById("keyspaceNodesModal");document.getElementById("btnCloseKeyspaceModal").addEventListener("click",Ne),document.getElementById("btnRefreshKeyspaceModal").addEventListener("click",Vt),document.getElementById("btnKeyspaceOpenTopology").addEventListener("click",()=>{Ne(),Ce()}),Ye.addEventListener("click",l=>{l.target===Ye&&Ne()});const Qe=document.getElementById("clientsListModal");document.getElementById("btnCloseClientsModal").addEventListener("click",kt),document.getElementById("btnRefreshClientsModal").addEventListener("click",je),Qe.addEventListener("click",l=>{l.target===Qe&&kt()});const Le=document.getElementById("clientsSearchInput");Le&&Le.addEventListener("input",()=>{const l=Le.value.trim().toLowerCase(),m=l?oe.filter(p=>p.addr&&p.addr.toLowerCase().includes(l)||p.ip&&p.ip.toLowerCase().includes(l)||p.name&&p.name.toLowerCase().includes(l)||p.cmd&&p.cmd.toLowerCase().includes(l)||p.user&&p.user.toLowerCase().includes(l)||p.id&&String(p.id).includes(l)):oe;Ht(m)});const Ze=document.getElementById("btnOpenSlowlog");Ze&&Ze.addEventListener("click",Gn);const Xe=document.getElementById("btnOpenMemoryModal");Xe&&Xe.addEventListener("click",Ot);const Se=document.getElementById("slowlogModal"),et=document.getElementById("btnCloseSlowlogModal");et&&et.addEventListener("click",Lt);const tt=document.getElementById("btnRefreshSlowlogModal");tt&&tt.addEventListener("click",Ke);const nt=document.getElementById("btnClearSlowlogModal");nt&&nt.addEventListener("click",Yn),Se&&Se.addEventListener("click",l=>{l.target===Se&&Lt()});const $e=document.getElementById("slowlogSearchInput");$e&&$e.addEventListener("input",()=>{xe=$e.value.trim(),we()}),document.querySelectorAll(".slowlog-filter-btn").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(m=>m.classList.remove("active")),l.classList.add("active"),be=parseFloat(l.getAttribute("data-min-duration")||"0"),we()})});const Ie=document.getElementById("memoryModal"),ot=document.getElementById("btnCloseMemoryModal");ot&&ot.addEventListener("click",ze);const at=document.getElementById("btnRefreshMemoryModal");at&&at.addEventListener("click",Ft),Ie&&Ie.addEventListener("click",l=>{l.target===Ie&&ze()});let J=null;window.openEditConnectionModal=function(l){J=l.id;const m=document.getElementById("connectionModal"),p=document.getElementById("connectionModalTitle"),f=document.getElementById("btnSaveConnModal"),v=document.getElementById("connPassword");p&&(p.innerHTML='<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection'),f&&(f.textContent="Update Connection"),document.getElementById("connName").value=l.name||"",document.getElementById("connEnv").value=(l.env||"DEV").toUpperCase();const $=document.getElementById("connTypeSelect");$.value=l.conn_type||"standalone",document.getElementById("connHost").value=l.host||"localhost",document.getElementById("connPort").value=l.port||6379,document.getElementById("connDb").value=l.db||0,document.getElementById("connUsername").value=l.username||"",document.getElementById("connTls").checked=!!l.use_tls,v.value="",l.has_password?v.placeholder="•••••••• (Leave blank to keep saved password)":v.placeholder="Enter password (or leave empty)";const E=document.getElementById("clusterNodesGroup"),B=document.getElementById("connHostLabel"),k=document.getElementById("connDbRow");if(r=[],l.conn_type==="cluster"){if(E.style.display="block",B.textContent="Seed Node Host *",k.style.display="none",l.cluster_nodes)try{const T=typeof l.cluster_nodes=="string"?JSON.parse(l.cluster_nodes):l.cluster_nodes;Array.isArray(T)&&(r=T.map(L=>{if(typeof L=="string"&&L.includes(":")){const S=L.split(":");return{host:S[0].trim(),port:parseInt(S[1],10)||6379}}return{host:L.host||"127.0.0.1",port:parseInt(L.port,10)||6379}}))}catch{}}else E.style.display="none",B.textContent="Host *",k.style.display="flex";s();const _=document.getElementById("testResultBox");_&&(_.className="test-result-box",_.innerHTML=""),y(),m.classList.add("active")};const W=document.getElementById("connectionModal");document.getElementById("btnAddConn").addEventListener("click",()=>{J=null,document.getElementById("connectionForm").reset();const l=document.getElementById("connectionModalTitle"),m=document.getElementById("btnSaveConnModal"),p=document.getElementById("connPassword");l&&(l.innerHTML='<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection'),m&&(m.textContent="Save Connection"),p&&(p.placeholder="Leave empty if none"),document.getElementById("clusterNodesGroup").style.display="none",document.getElementById("connHostLabel").textContent="Host *",document.getElementById("connDbRow").style.display="flex",r=[],s();const f=document.getElementById("testResultBox");f&&(f.className="test-result-box",f.innerHTML=""),y(),W.classList.add("active")}),document.getElementById("btnCloseModal").addEventListener("click",()=>{W.classList.remove("active")}),document.getElementById("btnCancelModal").addEventListener("click",()=>{W.classList.remove("active")}),W.addEventListener("click",l=>{l.target===W&&W.classList.remove("active")});const de=document.getElementById("keyDetailModal");document.getElementById("btnCloseDetailModal").addEventListener("click",()=>{de.classList.remove("active")}),de.addEventListener("click",l=>{l.target===de&&de.classList.remove("active")}),document.getElementById("btnCopyKeyName").addEventListener("click",()=>{Z&&(navigator.clipboard.writeText(Z),alert(`Copied '${Z}' to clipboard!`))}),document.getElementById("btnDeleteKeyFromDetail").addEventListener("click",()=>{Z&&Fe(Z,()=>{de.classList.remove("active"),D()})});const it=document.getElementById("deleteKeyConfirmModal");document.getElementById("btnCloseDeleteConfirmModal").addEventListener("click",()=>{it.classList.remove("active")}),document.getElementById("btnCancelDeleteConfirm").addEventListener("click",()=>{it.classList.remove("active")}),document.getElementById("btnTestConnModal").addEventListener("click",async()=>{const l=document.getElementById("connTypeSelect").value,m=document.getElementById("connHost").value.trim()||"localhost",p=parseInt(document.getElementById("connPort").value,10)||6379,f=parseInt(document.getElementById("connDb").value,10)||0,v=document.getElementById("connUsername").value.trim()||null,$=document.getElementById("connPassword").value,E=document.getElementById("connTls").checked;let B=null;l==="cluster"&&r.length>0&&(B=JSON.stringify(r.map(T=>({host:T.host,port:T.port}))));const k=document.getElementById("testResultBox"),_=document.getElementById("btnTestConnModal");_.disabled=!0,_.innerHTML="Testing...",k.className="test-result-box",k.innerHTML="";try{let T;J&&!$?T=await fetch(`/api/connections/${J}/test`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:m,port:p,db:f,username:v,use_tls:E,conn_type:l,cluster_nodes:B})}):T=await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:m,port:p,db:f,username:v,password:$||null,use_tls:E,conn_type:l,cluster_nodes:B})});const L=await T.json();if(L.success){k.className="test-result-box success";const S=L.is_cluster?` • Cluster Mode (${L.cluster_nodes_count||r.length} nodes reachable)`:"";k.innerHTML=`
          <i data-lucide="check-circle-2"></i>
          <span>Connected! Latency: <strong>${L.latency_ms} ms</strong>${S} (Redis v${L.redis_version})</span>
        `}else k.className="test-result-box error",k.innerHTML=`
          <i data-lucide="alert-circle"></i>
          <span>Failed: ${d(L.error||"Connection refused")}</span>
        `}catch(T){k.className="test-result-box error",k.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Error: ${d(T.message)}</span>
      `}finally{_.disabled=!1,_.innerHTML='<i data-lucide="zap"></i> Test Connection',y()}}),document.getElementById("connectionForm").addEventListener("submit",async l=>{l.preventDefault();const m=document.getElementById("connName").value.trim(),p=document.getElementById("connEnv").value,f=document.getElementById("connTypeSelect").value;let v=document.getElementById("connHost").value.trim()||"localhost",$=parseInt(document.getElementById("connPort").value,10)||6379;const E=parseInt(document.getElementById("connDb").value,10)||0,B=document.getElementById("connUsername").value.trim()||null,k=document.getElementById("connPassword").value,_=document.getElementById("connTls").checked,T=document.getElementById("connAutoActivate").checked;let L=null;f==="cluster"&&(r.length>0?(L=JSON.stringify(r.map(S=>({host:S.host,port:S.port}))),v=r[0].host,$=r[0].port):L=JSON.stringify([{host:v,port:$}]));try{if(J){const S={name:m,env:p,conn_type:f,host:v,port:$,cluster_nodes:L,db:E,username:B,use_tls:_};k&&(S.password=k);const A=await fetch(`/api/connections/${J}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(S)});if(!A.ok){const Q=await A.json().catch(()=>({}));throw new Error(Q.detail||"Failed to update connection")}}else{const S={name:m,env:p,conn_type:f,host:v,port:$,cluster_nodes:L,db:E,username:B,password:k||null,use_tls:_},A=await fetch(`/api/connections?auto_activate=${T}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S)});if(!A.ok){const Q=await A.json().catch(()=>({}));throw new Error(Q.detail||"Failed to save connection")}}W.classList.remove("active"),J=null,document.getElementById("connectionForm").reset(),r=[],s(),await q(),await F(),await D()}catch(S){alert("Error saving: "+S.message)}}),document.getElementById("btnRefreshStats").addEventListener("click",F);const ge=document.getElementById("keySearchInput");let Te=null;ge.addEventListener("input",()=>{clearTimeout(Te),Te=setTimeout(()=>{j=ge.value.trim()||"*",D()},400)}),ge.addEventListener("keydown",l=>{l.key==="Enter"&&(clearTimeout(Te),j=ge.value.trim()||"*",D())}),document.querySelectorAll(".type-tab").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll(".type-tab").forEach(m=>m.classList.remove("active")),l.classList.add("active"),R=l.getAttribute("data-type"),D()})});const st=document.getElementById("btnScanNext");st&&st.addEventListener("click",()=>Rt());const lt=document.getElementById("btnResetScan");lt&&lt.addEventListener("click",D);const Me=document.getElementById("exportKeysModal"),rt=document.getElementById("btnOpenExportModal"),dt=document.getElementById("btnCloseExportModal"),ct=document.getElementById("btnCancelExportModal"),ee=document.getElementById("btnExecuteExport");if(rt&&Me){rt.addEventListener("click",()=>{document.getElementById("exportPatternDisplay").textContent=j||"*",document.getElementById("exportTypeDisplay").textContent=R&&R!=="all"?R.toUpperCase():"All Types",document.getElementById("exportLoadedCount").textContent=`${z.length} keys`,document.getElementById("exportScopeLoadedText").textContent=`${z.length} keys`,Me.classList.add("active"),y()});const l=()=>Me.classList.remove("active");dt&&dt.addEventListener("click",l),ct&&ct.addEventListener("click",l),ee&&ee.addEventListener("click",async()=>{const m=document.querySelector('input[name="exportFormatRadio"]:checked'),p=document.querySelector('input[name="exportScopeRadio"]:checked'),f=(m?m.value:"csv").toLowerCase(),v=p?p.value:"loaded",$=j||"*",E=R&&R!=="all"?R:"",k=`redis_keys_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.${f}`;if(v==="all"){ee.disabled=!0,ee.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Exporting...',y();try{let L=`/api/keys/export?pattern=${encodeURIComponent($)}&format=${f}`;E&&(L+=`&type=${encodeURIComponent(E)}`);const S=await fetch(L);if(!S.ok){const ce=await S.json().catch(()=>({detail:"Export failed"}));throw new Error(ce.detail||`Server error: ${S.status}`)}let A=k;const Q=S.headers.get("content-disposition");if(Q&&Q.includes("filename=")){const ce=Q.match(/filename="?([^";]+)"?/);ce&&ce[1]&&(A=ce[1])}A.endsWith(`.${f}`)||(A=`${A}.${f}`);const Jt=await S.blob(),ne=document.createElement("a");ne.href=URL.createObjectURL(Jt),ne.download=A,document.body.appendChild(ne),ne.click(),document.body.removeChild(ne),URL.revokeObjectURL(ne.href),l()}catch(L){alert(`Export failed: ${L.message}`)}finally{ee.disabled=!1,ee.innerHTML='<i data-lucide="download" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Download',y()}return}if(z.length===0){alert("No keys loaded in browser to export.");return}let _;if(f==="csv"){const L=`Key,Type,TTL_Seconds
`,S=z.map(A=>`"${(A.key||"").replace(/"/g,'""')}",${A.type||""},${A.ttl_seconds!==void 0?A.ttl_seconds:-1}`);_=new Blob([L+S.join(`
`)],{type:"text/csv;charset=utf-8;"})}else{const L=z.map(S=>S.key);_=new Blob([L.join(`
`)+`
`],{type:"text/plain;charset=utf-8;"})}const T=document.createElement("a");T.href=URL.createObjectURL(_),T.download=k,document.body.appendChild(T),T.click(),document.body.removeChild(T),URL.revokeObjectURL(T.href),l()})}const Be=document.getElementById("bulkDeleteModal"),pt=document.getElementById("btnOpenBulkDeleteModal"),mt=document.getElementById("btnCloseBulkDeleteModal"),ut=document.getElementById("btnCancelBulkDelete"),H=document.getElementById("btnConfirmBulkDelete"),te=document.getElementById("bdCountConfirmInput"),Y=document.getElementById("bdProdConfirmInput"),yt=document.getElementById("bdProdConfirmGroup"),gt=document.getElementById("bulkDeleteProdBanner"),_e=document.getElementById("bulkDeleteDryRunStatus"),vt=document.getElementById("bulkDeleteDetails");let O=null;function ft(){if(!O||!H)return;const l=String(O.matched_count),p=(te?.value||"").trim()===l&&O.matched_count>0;let f=!0;O.is_prod&&(f=(Y?.value||"").trim().toUpperCase()==="PROD"),H.disabled=!(p&&f)}if(te&&te.addEventListener("input",ft),Y&&Y.addEventListener("input",ft),pt&&Be){pt.addEventListener("click",async()=>{const m=j||"*",p=R&&R!=="all"?R:null;O=null,te&&(te.value=""),Y&&(Y.value=""),H&&(H.disabled=!0),_e.style.display="block",vt.style.display="none",Be.classList.add("active"),y();try{const f=await fetch("/api/keys/bulk-delete/dry-run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:m,type_filter:p})});if(!f.ok){const k=await f.json().catch(()=>({detail:"Dry run failed"}));throw new Error(k.detail||"Dry run failed")}const v=await f.json();O=v,document.getElementById("bdPatternDisplay").textContent=v.pattern,document.getElementById("bdTypeDisplay").textContent=v.type_filter?v.type_filter.toUpperCase():"All Types",document.getElementById("bdCountDisplay").textContent=v.matched_count.toLocaleString(),document.getElementById("bdRequiredCountText").textContent=String(v.matched_count),v.is_prod?(gt.style.display="block",yt.style.display="block"):(gt.style.display="none",yt.style.display="none");const $=document.getElementById("bdPerNodeBreakdown"),E=Object.entries(v.per_node_counts||{});E.length>1?($.innerHTML="<strong>Per-node breakdown:</strong> "+E.map(([k,_])=>`${d(k)}: ${_.toLocaleString()}`).join(" &bull; "),$.style.display="block"):$.style.display="none";const B=document.getElementById("bdSampleKeysList");v.sample_keys&&v.sample_keys.length>0?(B.innerHTML=v.sample_keys.map(k=>`<div>${d(k)}</div>`).join(""),document.getElementById("bdSampleKeysSection").style.display="block"):document.getElementById("bdSampleKeysSection").style.display="none",_e.style.display="none",vt.style.display="flex",y()}catch(f){_e.innerHTML=`
          <div style="color: var(--accent-danger);">
            <i data-lucide="alert-circle" style="width: 20px; height: 20px; margin-bottom: 0.35rem; display: inline-block;"></i>
            <div>Failed to calculate dry-run: ${d(f.message)}</div>
          </div>
        `,y()}});const l=()=>Be.classList.remove("active");mt&&mt.addEventListener("click",l),ut&&ut.addEventListener("click",l),H&&H.addEventListener("click",async()=>{if(O){H.disabled=!0,H.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlinking...',y();try{const m=await fetch("/api/keys/bulk-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:O.pattern,type_filter:O.type_filter,expected_count:O.matched_count,confirmed_count:parseInt(te.value.trim(),10),confirmed_env:Y?Y.value.trim():null})});if(!m.ok){const f=await m.json().catch(()=>({detail:"Bulk delete failed"}));throw new Error(f.detail||"Bulk delete failed")}const p=await m.json();alert(`Bulk delete complete!
${p.message} (Duration: ${p.duration_ms}ms)`),l(),D()}catch(m){alert(`Bulk delete error: ${m.message}`),H.disabled=!1,H.innerHTML='<i data-lucide="trash-2" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlink Keys',y()}}})}function ve(l){const m=document.querySelector(".sidebar"),p=document.getElementById("btnShowSidebar");m&&(l?(m.classList.add("collapsed"),p&&(p.style.display="inline-flex"),localStorage.setItem("redis_insight_sidebar_collapsed","true")):(m.classList.remove("collapsed"),p&&(p.style.display="none"),localStorage.setItem("redis_insight_sidebar_collapsed","false")),y())}const ht=document.getElementById("btnToggleSidebar");ht&&ht.addEventListener("click",()=>ve(!0));const bt=document.getElementById("btnShowSidebar");bt&&bt.addEventListener("click",()=>ve(!1)),localStorage.getItem("redis_insight_sidebar_collapsed")==="true"&&ve(!0),document.addEventListener("keydown",l=>{if((l.ctrlKey||l.metaKey)&&l.key.toLowerCase()==="b"){const m=document.querySelector(".sidebar"),p=m&&m.classList.contains("collapsed");ve(!p),l.preventDefault()}}),setInterval(F,15e3)}async function Tt(){Pn(),y(),ao();try{await q(),await F()}catch(t){console.error("Failed to load initial status:",t)}M.find(t=>t.is_connected&&t.is_selected)||M.find(t=>t.is_connected)?await D():Ge()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Tt):Tt();
