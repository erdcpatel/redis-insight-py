(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(e,t,n=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(i=>{o.setAttribute(i,String(t[i]))}),n.length&&n.forEach(i=>{const a=st(...i);o.appendChild(a)}),o};var wt=([e,t,n])=>st(e,t,n);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),Et=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Lt=e=>e.flatMap(Et).map(n=>n.trim()).filter(Boolean).filter((n,o,i)=>i.indexOf(n)===o).join(" "),St=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,o)=>n.toUpperCase()+o.toLowerCase()),Qe=(e,{nameAttr:t,icons:n,attrs:o})=>{const i=e.getAttribute(t);if(i==null)return;const a=St(i),r=n[a];if(!r)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const s=Ct(e),[c,y,v]=r,f={...y,"data-lucide":i,...o,...s},b=Lt(["lucide",`lucide-${i}`,s,o]);b&&Object.assign(f,{class:b});const x=wt([c,f,v]);return e.parentNode?.replaceChild(x,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=["svg",g,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=["svg",g,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=["svg",g,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=["svg",g,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=["svg",g,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=["svg",g,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=["svg",g,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=["svg",g,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=["svg",g,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=["svg",g,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=["svg",g,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=["svg",g,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=["svg",g,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=["svg",g,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=["svg",g,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=["svg",g,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=["svg",g,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=["svg",g,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=["svg",g,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=["svg",g,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=["svg",g,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=["svg",g,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=["svg",g,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=["svg",g,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=["svg",g,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=["svg",g,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=["svg",g,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=["svg",g,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",g,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",g,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",g,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",g,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",g,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",g,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(i=>Qe(i,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(a=>Qe(a,{nameAttr:"icon-name",icons:e,attrs:n})))}};let q=[],G=[],re=0,de="",J="all",Ye=null,D=null,xe=!1,V=0,ce="*",Ce="all",W=!1,P=0,ee=0,Q=[],te=new Set,K=null,lt=null,we=null,E=[],rt="ALL",se="",Ee=null,dt="all",ct="",H=2,ne=0;function u(){ln({icons:{Layers:jt,Plus:Gt,RefreshCw:Wt,Search:Qt,Cpu:Pt,Trash2:en,Zap:sn,CheckCircle2:Nt,AlertCircle:At,Database:Ht,ShieldCheck:Zt,Lock:Ut,ArrowDownCircle:_t,X:an,Play:qt,Copy:Dt,Clock:Rt,Edit:Xt,ExternalLink:Ft,Code:zt,Users:on,Server:Yt,Network:Kt,GitBranch:Ot,ArrowRightLeft:It,Activity:$t,PieChart:kt,AlertTriangle:nn,TrendingUp:tn,BarChart2:Mt,Power:Jt,ChevronLeft:Tt,ChevronRight:Bt,PanelLeft:Vt}})}function rn(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
  `)}async function A(){W=!1,ne++;const e=ne;V=0,P=0,Q=[],te.clear();const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="none"),n&&(n.style.display="block"),mt(),await pt(e)}async function pt(e=null){if(W||V===0&&P>0)return;const t=e!==null?e:ne;W=!0,Ze();try{const n=`/api/keys?pattern=${encodeURIComponent(ce)}&cursor=${V}&count=50${Ce!=="all"?`&type=${encodeURIComponent(Ce)}`:""}`,o=await fetch(n);if(!o.ok)throw new Error("Failed to scan keys");const i=await o.json();if(t!==ne)return;V=i.cursor,ee=i.total_in_db;const r=(i.keys||[]).filter(s=>te.has(s.name)?!1:(te.add(s.name),!0)).map(s=>({key:s.name,type:s.type,ttl_seconds:s.ttl,status:s.ttl===-1?"Persistent":s.ttl===-2?"Expired":`Expires in ${s.ttl}s`}));r.length>0&&Q.push(...r),mt(),P=te.size}catch(n){console.error("Scan error:",n)}finally{t===ne&&(W=!1,Ze())}}function mt(){const e=document.getElementById("gridViewerContainer");if(e){if(Q.length===0){e.innerHTML=`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${d(ce)}</code>".
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
          ${Q.map(t=>`
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
  `,u(),e.querySelectorAll(".key-row").forEach(t=>{t.addEventListener("click",()=>{const n=decodeURIComponent(t.getAttribute("data-key"));oe(n)})}),e.querySelectorAll(".btn-delete-key-table").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const o=decodeURIComponent(t.getAttribute("data-key"));Ie(o,()=>{A()})})})}}function Ze(){const e=document.getElementById("scanStatusText"),t=document.getElementById("btnScanNext"),n=V===0&&P>0||P>=ee&&ee>0;e&&(e.innerHTML=`
      Loaded <strong>${P}</strong> keys
      ${n?'<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>':`(Next Cursor: ${V})`}
      | DB Total: <strong>${ee}</strong>
    `),t&&(t.disabled=W||n,t.innerHTML=W?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':n?'<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More',u())}async function oe(e){K=e;const t=document.getElementById("keyDetailModal"),n=document.getElementById("detailKeyTitle"),o=document.getElementById("detailHeaderMeta"),i=document.getElementById("detailBodyContent");n.textContent=e,n.title=e,o.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>',i.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>',t.classList.add("active");try{let a=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(a.ok||(a=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!a.ok){let s="Key not found or could not be read";try{const c=await a.json();c&&c.detail&&(s=c.detail)}catch{}throw new Error(s)}const r=await a.json();lt=r,dn(r),pn(r)}catch(a){o.innerHTML='<span style="color: var(--accent-danger);">Error</span>',i.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Failed to inspect key</h4>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">${d(a.message)}</p>
      </div>
    `,u()}}function dn(e){const t=document.getElementById("detailHeaderMeta"),n=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",o=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;t.innerHTML=`
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
    <div style="display: flex; align-items: center; gap: 0.4rem; margin-left: auto;">
      <i data-lucide="clock" style="width: 13px; height: 13px; color: ${e.ttl===-1?"var(--text-muted)":"var(--accent-warning)"};"></i>
      <span style="font-family: var(--font-mono); color: ${e.ttl===-1?"var(--text-muted)":"var(--accent-warning)"}; font-weight: 600;">${o}</span>
      <button type="button" class="btn btn-secondary" id="btnEditTtl" style="padding: 0.2rem 0.5rem; font-size: 0.72rem; margin-left: 0.25rem;">
        Edit TTL
      </button>
    </div>
  `,u(),document.getElementById("btnEditTtl").addEventListener("click",()=>{cn(e.name,e.ttl)})}async function cn(e,t){const n=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,t>0?t:"3600");if(n===null)return;const o=parseInt(n.trim(),10);if(isNaN(o)){alert("Please enter a valid integer.");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:o})})).ok)throw new Error("Failed to update TTL");oe(e)}catch(i){alert("Error updating TTL: "+i.message)}}function pn(e){const t=document.getElementById("detailBodyContent"),n=e.type.toLowerCase();if(n==="hash"){const o=e.fields||[];t.innerHTML=`
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
            ${ut(o)}
          </tbody>
        </table>
      </div>
    `,u(),mn(e.name,o);return}if(e.is_json||n.includes("json")){const o=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${d(o)}</div>
    `,u(),document.getElementById("btnCopyJsonValue").addEventListener("click",()=>{navigator.clipboard.writeText(o),alert("JSON copied to clipboard!")});return}if(n==="string"){t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${d(e.value||"")}</div>
    `,u(),document.getElementById("btnCopyStringValue").addEventListener("click",()=>{navigator.clipboard.writeText(e.value||""),alert("Value copied to clipboard!")});return}if(Array.isArray(e.value)){const o=n==="zset";t.innerHTML=`
      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 15%;">${o?"Score":"Index"}</th>
              <th style="width: 85%;">Element / Member</th>
            </tr>
          </thead>
          <tbody>
            ${e.value.map((i,a)=>`
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
                  ${o?i.score:`[${a}]`}
                </td>
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem;">
                  ${d(o?i.member:String(i))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;return}t.innerHTML=`<div class="json-view-box">${d(String(e.value))}</div>`}function ut(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(t=>`
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
  `).join("")}function mn(e,t){const n=document.getElementById("hashFieldSearchInput"),o=document.getElementById("hashFieldCountText"),i=document.getElementById("hashFieldsTableBody");n&&n.addEventListener("input",()=>{const r=n.value.trim().toLowerCase(),s=r?t.filter(c=>c.field.toLowerCase().includes(r)||c.value.toLowerCase().includes(r)):t;i.innerHTML=ut(s),o.textContent=`${s.length} of ${t.length} fields`,u(),Xe(e)});const a=document.getElementById("btnAddHashField");a&&a.addEventListener("click",async()=>{const r=prompt(`Enter field name for hash '${e}':`);if(!r)return;const s=prompt(`Enter value for field '${r}':`);if(s!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:r,value:s})})).ok)throw new Error("Failed to set field");oe(e)}catch(c){alert("Error setting field: "+c.message)}}),Xe(e)}function Xe(e){document.querySelectorAll(".btn-delete-hash-field").forEach(t=>{t.addEventListener("click",async()=>{const n=decodeURIComponent(t.getAttribute("data-field"));if(confirm(`Delete field '${n}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(n)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");oe(e)}catch(o){alert("Error: "+o.message)}})})}function d(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Ie(e,t){we=t;const n=document.getElementById("deleteKeyConfirmModal"),o=document.getElementById("deleteKeyTargetName"),i=document.getElementById("inputConfirmDelete"),a=document.getElementById("btnSubmitDeleteKey");o.textContent=e,i.value="",a.disabled=!0,n.classList.add("active"),i.focus(),i.oninput=()=>{const r=i.value.trim().toUpperCase();a.disabled=r!=="CONFIRM"&&i.value.trim()!==e},a.onclick=async()=>{a.disabled=!0,a.textContent="Deleting...";try{const r=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),s=await r.json();if(!r.ok)throw new Error(s.detail||"Failed to delete key");n.classList.remove("active"),we&&we()}catch(r){alert("Error deleting key: "+r.message)}finally{a.disabled=!1,a.textContent="Delete Permanently"}}}async function un(){document.getElementById("clientsListModal").classList.add("active"),await Me()}function et(){document.getElementById("clientsListModal").classList.remove("active")}async function Me(){const e=document.getElementById("clientsTableContainer"),t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats"),o=document.getElementById("clientsSearchInput");e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',u();try{const i=await fetch("/api/clients");if(!i.ok)throw new Error("Failed to load connected clients");q=await i.json(),t&&(t.textContent=q.length),n&&(n.textContent=`${q.length} total connections`),o&&(o.value=""),yt(q)}catch(i){e.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
        <h4>Error loading clients</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${i.message}</p>
      </div>
    `,u()}}function yt(e){const t=document.getElementById("clientsTableContainer");if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="users" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.4;"></i>
        <p>No matching connected clients found.</p>
      </div>
    `,u();return}t.innerHTML=`
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
  `,u(),t.querySelectorAll(".btn-kill-client").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-id"),i=n.getAttribute("data-addr");yn(o,i)})})}async function yn(e,t){if(confirm(`Are you sure you want to disconnect client #${e} (${t})?`))try{const n=await fetch(`/api/clients/${e}`,{method:"DELETE"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to disconnect client");await Me(),await N()}catch(n){alert("Error disconnecting client: "+n.message)}}async function gn(){const e=document.getElementById("slowlogModal");if(!e)return;e.classList.add("active"),re=0,de="",J="all",document.querySelectorAll(".slowlog-filter-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-min-duration")==="0")});const t=document.getElementById("slowlogSearchInput");t&&(t.value=""),await ke()}function tt(){const e=document.getElementById("slowlogModal");e&&e.classList.remove("active")}async function ke(){const e=document.getElementById("slowlogTableContainer"),t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),o=document.getElementById("slowlogFooterStats");e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,u());try{const i=await fetch("/api/slowlog?limit=250");if(!i.ok)throw new Error("Failed to fetch slowlog");const a=await i.json();if(G=a.entries||[],t&&(t.textContent=G.length),n&&a.slower_than_us!==null&&a.slower_than_us!==void 0){const r=(a.slower_than_us/1e3).toFixed(1);n.textContent=`Threshold: > ${r}ms (${a.slower_than_us} µs)`}o&&(o.textContent=`Total buffer: ${a.total_len||G.length} entries | Max buffer: ${a.max_len||"N/A"}`),vn(G),pe()}catch(i){e&&(e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${d(i.message)}</p>
        </div>
      `,u())}}function vn(e){const t=document.getElementById("slowlogNodeFilterContainer");if(!t)return;const n=Array.from(new Set(e.map(i=>i.node).filter(Boolean)));if(n.length<=1){t.innerHTML="";return}t.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${n.length})</option>
      ${n.map(i=>`<option value="${d(i)}" ${J===i?"selected":""}>${d(i)}</option>`).join("")}
    </select>
  `;const o=document.getElementById("slowlogNodeSelect");o&&o.addEventListener("change",()=>{J=o.value,pe()})}function pe(){let e=G;if(re>0&&(e=e.filter(t=>t.duration_ms>=re)),J&&J!=="all"&&(e=e.filter(t=>t.node===J)),de){const t=de.toLowerCase();e=e.filter(n=>{const o=(n.command||[]).join(" ").toLowerCase(),i=(n.client_ip||"").toLowerCase(),a=(n.node||"").toLowerCase();return o.includes(t)||i.includes(t)||a.includes(t)||String(n.id).includes(t)})}fn(e)}function fn(e){const t=document.getElementById("slowlogTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <i data-lucide="check-circle-2" style="width: 28px; height: 28px; color: #4ade80;"></i>
        </div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.35rem;">No Slow Queries Recorded</h4>
        <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.5;">
          ${G.length===0?"Redis latency is healthy! All commands executed within the threshold.":"No slowlog entries matched the active filters."}
        </p>
      </div>
    `,u();return}t.innerHTML=`
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
        ${e.map(n=>{let o="badge-duration-fast";n.duration_ms>=50?o="badge-duration-critical":n.duration_ms>=10&&(o="badge-duration-warning");const i=n.command&&n.command.length>0?n.command.join(" "):"(empty)";return`
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
                <span class="slowlog-cmd-code" title="${d(i)}">${d(i)}</span>
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
  `,u()}}async function hn(){if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");await ke()}catch(e){alert("Error resetting slowlog: "+e.message)}}async function gt(){const e=document.getElementById("memoryModal");e&&(e.classList.add("active"),await vt(),D?Be(D):Te())}function Le(){const e=document.getElementById("memoryModal");e&&e.classList.remove("active")}async function vt(){const e=document.getElementById("memoryOverviewContainer");if(e){e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,u();try{const t=await fetch("/api/memory/overview");if(!t.ok)throw new Error("Failed to fetch memory overview");Ye=await t.json(),bn(Ye)}catch(t){e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${d(t.message)}</p>
      </div>
    `,u()}}}function bn(e){const t=document.getElementById("memoryOverviewContainer");if(!t||!e)return;let n="mem-status-healthy",o="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(n="mem-status-critical",o="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(n="mem-status-warning",o=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),t.innerHTML=`
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
  `,u()}function Te(){const e=document.getElementById("memoryProfilingContainer");if(!e)return;e.innerHTML=`
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
  `,u();const t=document.getElementById("btnStartProfilingAction");t&&t.addEventListener("click",()=>{const n=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,o=document.getElementById("memSamplePatternInput").value||"*";xn(n,o)})}async function xn(e=500,t="*"){const n=document.getElementById("memoryProfilingContainer");if(n){xe=!0,n.innerHTML=`
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: #a78bfa; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">Analyzing Redis Keyspace...</h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
        Scanning sample of up to <strong>${e.toLocaleString()}</strong> keys (pattern <code>${d(t)}</code>) and measuring memory allocations...
      </p>
    </div>
  `,u();try{const o=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:t})});if(!o.ok)throw new Error("Failed to complete memory profiling");D=await o.json(),xe=!1,Be(D)}catch(o){xe=!1,n.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Memory Profiling Failed</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${d(o.message)}</p>
        <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Try Again</button>
      </div>
    `,u();const i=document.getElementById("btnRetryProfiling");i&&i.addEventListener("click",Te)}}}function Be(e){const t=document.getElementById("memoryProfilingContainer");if(!t||!e)return;const n={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};t.innerHTML=`
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
        ${e.types_breakdown.map(a=>{const r=n[a.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-stacked-segment" style="width: ${a.percentage}%; background: ${r};" title="${a.type.toUpperCase()}: ${a.percentage}% (${a.total_human})"></div>
          `}).join("")}
      </div>

      <!-- Type Cards Grid -->
      <div class="mem-type-cards-grid">
        ${e.types_breakdown.map(a=>{const r=n[a.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-type-card" style="border-left: 3px solid ${r};">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="type-badge ${a.type.toLowerCase()}" style="font-size: 0.68rem; padding: 0.1rem 0.4rem;">${a.type.toUpperCase()}</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--text-primary);">${a.percentage}%</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${r}; margin-top: 2px;">
                ${a.total_human}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-muted);">
                ${a.count.toLocaleString()} keys
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
        ${e.recommendations.map(a=>`
          <div class="recommendation-item">
            <span>${d(a)}</span>
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
        ${nt(e.top_bigkeys)}
      </div>
    </div>
  `,u();const o=document.getElementById("btnReRunProfiling");o&&o.addEventListener("click",Te);const i=document.getElementById("bigkeysSearchInput");i&&i.addEventListener("input",()=>{const a=i.value.trim().toLowerCase(),r=a?e.top_bigkeys.filter(c=>c.key.toLowerCase().includes(a)||c.type.toLowerCase().includes(a)):e.top_bigkeys,s=document.getElementById("bigkeysTableContainer");s&&(s.innerHTML=nt(r),u(),ot())}),ot()}function nt(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const t=e[0]?e[0].memory_bytes:1;return`
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
        ${e.map((n,o)=>{let i="rank-normal";o===0?i="rank-gold":o===1?i="rank-silver":o===2&&(i="rank-bronze");const a=t>0?Math.max(5,Math.round(n.memory_bytes/t*100)):10;let r="No TTL (Persistent)",s="var(--text-muted)";return n.ttl>0&&(r=`${n.ttl.toLocaleString()}s`,s="var(--accent-warning)"),`
            <tr>
              <td>
                <span class="rank-badge ${i}">#${o+1}</span>
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
                  <div style="width: ${a}%; height: 100%; background: #38bdf8; border-radius: 9999px;"></div>
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
  `}function ot(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&(Le(),oe(t))})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&Ie(t,async()=>{D&&(D.top_bigkeys=D.top_bigkeys.filter(n=>n.key!==t),Be(D)),await N()})})})}async function F(){const e=document.getElementById("connectionsList");try{const[t,n]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]);E=await t.json()||[],n.ok&&(H=(await n.json()).limit||2),le()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function ft(e,t){const n=document.getElementById("connectedCountDisplay"),o=document.getElementById("connLimitDisplay"),i=document.getElementById("connLimitSelect"),a=document.getElementById("limitProgressDots"),r=document.getElementById("limitCountPill");if(n&&(n.textContent=e),o&&(o.textContent=t),i&&String(i.value)!==String(t)&&(i.value=String(t)),r&&(e>=t&&t>0?(r.classList.add("at-limit"),r.title="Connection limit reached"):(r.classList.remove("at-limit"),r.title=`${e} of ${t} connections in use`)),a){let s="";for(let c=0;c<t;c++){const y=c<e;s+=`<span class="limit-slot-dot ${y?"filled":"empty"}" title="Slot ${c+1}: ${y?"Connected":"Available"}"></span>`}a.innerHTML=s}}function le(){const e=document.getElementById("connectionsList");if(!e)return;const t=document.getElementById("totalConnCountBadge");t&&(t.textContent=E.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(s=>{const c=s.getAttribute("data-env");let y=0;c==="ALL"?y=E.length:y=E.filter(v=>(v.env||"LOCAL").toUpperCase()===c).length,s.textContent=`${c} (${y})`});const o=(se||"").trim().toLowerCase(),i=rt,a=E.filter(s=>{if(i!=="ALL"&&(s.env||"LOCAL").toUpperCase()!==i)return!1;if(o){const c=(s.name||"").toLowerCase().includes(o),y=(s.host||"").toLowerCase().includes(o),v=(s.env||"").toLowerCase().includes(o),f=(s.conn_type||"").toLowerCase().includes(o);if(!c&&!y&&!v&&!f)return!1}return!0});a.sort((s,c)=>{const y=s.is_connected?1:0,v=c.is_connected?1:0;if(v!==y)return v-y;const f=s.is_selected?1:0,b=c.is_selected?1:0;return b!==f?b-f:(s.name||"").localeCompare(c.name||"")});const r=E.filter(s=>s.is_connected).length;if(ft(r,H),a.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${o?`No results found for "${d(o)}"`:`No connections configured in ${d(i)}`}
        </span>
      </div>
    `,u();return}e.innerHTML=a.map(s=>{const c=(s.env||"LOCAL").toUpperCase(),y=`badge-env-${c.toLowerCase()}`,v=s.conn_type==="cluster",f=s.conn_type==="sentinel",b=s.source==="config",x=!!s.is_connected,_=!!s.is_selected;return`
      <div class="conn-card ${x?"is-connected":""} ${_?"selected active":""}" data-id="${s.id}" title="Click to review config & connection options">
        
        <!-- Header: Lead Indicator + Name + Status Pill -->
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${_?`
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
            ${_?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:x?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <!-- Sub-row: Endpoint on left, Badges on right -->
        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${d(s.host)}:${s.port}">
            <i data-lucide="${v?"network":f?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${d(s.host)}:${s.port}</span>
          </div>

          <div class="conn-tags">
            <span class="badge-env ${y}">${c}</span>
            ${v?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${f?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!v&&!f?`<span class="badge-db">DB${s.db}</span>`:""}
            ${s.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${s.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${b?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <!-- Floating Quick Action Toolbar on Hover -->
        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${x?`
            ${_?"":`
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
            ${b?"":`
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${s.id}" data-name="${d(s.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>

      </div>
    `}).join(""),u(),e.querySelectorAll(".conn-card").forEach(s=>{s.addEventListener("click",c=>{if(c.target.closest(".btn-delete-conn")||c.target.closest(".btn-view-topology-card")||c.target.closest(".btn-card-disconnect")||c.target.closest(".btn-card-select")||c.target.closest(".btn-card-open-config"))return;const y=s.getAttribute("data-id"),v=E.find(f=>f.id===y);v&&Se(v)})}),e.querySelectorAll(".btn-card-disconnect").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const y=s.getAttribute("data-id");await Ae(y)})}),e.querySelectorAll(".btn-card-select").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const y=s.getAttribute("data-id");await bt(y)})}),e.querySelectorAll(".btn-card-open-config").forEach(s=>{s.addEventListener("click",c=>{c.stopPropagation();const y=s.getAttribute("data-id"),v=E.find(f=>f.id===y);v&&Se(v)})}),e.querySelectorAll(".btn-view-topology-card").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const y=s.getAttribute("data-id");await Ne(y)})}),e.querySelectorAll(".btn-delete-conn").forEach(s=>{s.addEventListener("click",async c=>{c.stopPropagation();const y=s.getAttribute("data-id"),v=s.getAttribute("data-name");confirm(`Are you sure you want to delete '${v}'?`)&&await En(y)})})}function wn(e){if(!e)return[];if(Array.isArray(e))return e.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t));if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n))}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}return[]}function Se(e){const t=document.getElementById("clusterConfigModal"),n=document.getElementById("cfgModalTitle"),o=document.getElementById("cfgModalSubtitle"),i=document.getElementById("cfgModalBody"),a=document.getElementById("cfgModalFooter");n.textContent=e.name||"Cluster Configuration",o.textContent="Review configuration before connecting";const r=!!e.is_connected,s=!!e.is_selected,c=e.conn_type==="cluster",y=wn(e.cluster_nodes),v=E.filter(O=>O.is_connected).length,f=!r&&v>=H;i.innerHTML=`
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
      ${c&&(y.length>0||e.cluster_nodes)?`
        <div class="config-grid-row config-grid-seeds-row">
          <span class="config-label" style="padding-top: 2px;">
            Seed Endpoints ${y.length>0?`(${y.length})`:""}
          </span>
          <div class="config-seeds-container">
            ${y.length>0?y.map(O=>`
                  <span class="seed-node-pill" title="${d(O)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${d(O)}
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
      <span>Connected Limit: <strong>${v} of ${H}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${f?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${H} maximum). Please disconnect a connected cluster first or increase the limit.</span>
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
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${f?"disabled":""}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `,u(),t.classList.add("active");const b=document.getElementById("btnCloseConfigModal");b&&(b.onclick=()=>t.classList.remove("active"));const x=document.getElementById("btnEditFromConfig");x&&(x.onclick=()=>{t.classList.remove("active"),openEditConnectionModal(e)});const _=document.getElementById("btnConnectFromConfig");_&&(_.onclick=async()=>{await ht(e.id),t.classList.remove("active")});const R=document.getElementById("btnDisconnectFromConfig");R&&(R.onclick=async()=>{await Ae(e.id),t.classList.remove("active")});const w=document.getElementById("btnSelectFromConfig");w&&(w.onclick=async()=>{await bt(e.id),t.classList.remove("active")});const z=document.getElementById("btnTopologyFromConfig");z&&(z.onclick=async()=>{t.classList.remove("active"),await Ne(e.id)});const Y=document.getElementById("btnTestFromConfig");Y&&(Y.onclick=async()=>{await Cn(e)})}async function Cn(e){const t=document.getElementById("cfgTestResultBox"),n=document.getElementById("btnTestFromConfig");n&&(n.disabled=!0,n.innerHTML="Testing..."),t&&(t.className="test-result-box",t.innerHTML="");try{const i=await(await fetch(`/api/connections/${e.id}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();i.success?(t.className="test-result-box success",t.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${i.latency_ms} ms</strong> (Redis v${i.redis_version})</span>
      `):(t.className="test-result-box error",t.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${d(i.error||"Connection refused")}</span>
      `)}catch(o){t&&(t.className="test-result-box error",t.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${d(o.message)}</span>`)}finally{n&&(n.disabled=!1,n.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),u()}}async function ht(e){if(E.find(n=>n.id===e),E.filter(n=>n.is_connected&&n.id!==e).length>=H){alert(`Connection limit reached: Maximum ${H} connected cluster(s) allowed at a time.
Please disconnect an existing cluster first or increase the limit in the sidebar.`);return}try{const n=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to connect to cluster");await F(),await N(),await A()}catch(n){alert("Connection error: "+n.message)}}async function Ae(e){try{const t=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to disconnect cluster");await F(),await N(),E.some(i=>i.is_connected&&i.id!==e)?await A():(Q=[],te.clear(),P=0,V=0,ee=0,_e())}catch(t){alert("Disconnect error: "+t.message)}}async function bt(e){try{const t=await fetch(`/api/connections/${e}/select`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to switch cluster");const o=document.getElementById("keyDetailModal");o&&o.classList.remove("active"),K=null,lt=null,await F(),await N(),await A()}catch(t){alert("Switch error: "+t.message)}}function _e(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="flex"),n&&(n.style.display="none");const o=document.getElementById("btnConnectFirstAvailable");o&&(o.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${E.length})`,E.length>0&&(o.onclick=()=>Se(E[0]))),u()}async function En(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");await F(),await N(),await A()}catch(t){alert("Delete error: "+t.message)}}async function Ne(e=null){const t=document.getElementById("clusterTopologyModal");if(t){if(t.classList.add("active"),e){const n=document.querySelector(`.conn-card[data-id="${e}"]`);n&&!n.classList.contains("active")&&await ht(e)}await xt()}}function it(){const e=document.getElementById("clusterTopologyModal");e&&e.classList.remove("active")}async function xt(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),t=document.getElementById("topologyNodesCountBadge"),n=document.getElementById("topologyEnvBadge"),o=E.find(i=>i.is_active);if(o&&n){const i=(o.env||"LOCAL").toUpperCase();n.textContent=i,n.className=`badge-env badge-env-${i.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,u());try{const i=await fetch("/api/topology");if(!i.ok)throw new Error("Failed to load cluster topology");const a=await i.json();Ee=a,t&&(t.textContent=`${a.total_nodes} Node${a.total_nodes!==1?"s":""}`),Ln(a),$e()}catch(i){e&&(e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${i.message}</p>
        </div>
      `,u())}}function Ln(e){const t=document.getElementById("topologyStatsGrid");if(!t)return;const n=e.is_cluster,o=(e.cluster_state||"").toLowerCase()==="ok"||!n;t.innerHTML=`
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
  `}function $e(){const e=document.getElementById("topologyTableContainer");if(!e||!Ee)return;const t=Ee.nodes||[],n=(ct||"").trim().toLowerCase(),o=dt,i=t.filter(a=>{if(o!=="all"&&a.role.toLowerCase()!==o)return!1;if(n){const r=(a.addr||"").toLowerCase().includes(n),s=(a.id||"").toLowerCase().includes(n),c=(a.ip||"").toLowerCase().includes(n),y=(a.slots||"").toLowerCase().includes(n);if(!r&&!s&&!c&&!y)return!1}return!0});if(i.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">NODE ID</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">ROLE</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">ENDPOINT (IP:PORT)</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">LINK STATE</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">ASSIGNED SLOTS</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">MASTER / REPLICA OF</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: right;">FLAGS</th>
        </tr>
      </thead>
      <tbody>
        ${i.map(a=>{const r=a.role==="master",s=(a.link_state||"connected").toLowerCase()==="connected",c=a.id?a.id.length>12?`${a.id.substring(0,10)}...`:a.id:"N/A",y=a.slots?`${a.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${a.slot_count||0} slots)</span>`:r?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${d(a.id||"")}">${d(c)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${r?"role-badge-master":"role-badge-replica"}">${a.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${d(a.addr||`${a.ip}:${a.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${s?"connected":"disconnected"}"></span>
                <span style="color: ${s?"var(--accent-success)":"var(--accent-danger)"};">${a.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${y}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                ${a.master_id?`<span title="${d(a.master_id)}">↳ ${d(a.master_id.substring(0,8))}...</span>`:"—"}
              </td>
              <td style="padding: 0.65rem 0.85rem; text-align: right; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
                ${(a.flags||[]).join(", ")||"none"}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,u()}async function N(){const e=document.getElementById("topConnContainer"),t=document.getElementById("topVitalsContainer");try{const o=await(await fetch("/api/status")).json();if(o.connected){const i=E.find(f=>f.is_selected)||E.find(f=>f.id===o.connection_id)||E.find(f=>f.is_connected),a=i&&i.conn_type==="cluster"||o.cluster_nodes&&o.cluster_nodes.length>0||o.is_cluster,r=i&&i.cluster_nodes?"6":o.cluster_nodes_count||1;if(e){const f=(o.env||i?.env||"LOCAL").toUpperCase();e.innerHTML=`
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${d(o.connection_name||"Connected")}">${d(o.connection_name||"Connected")}</span>
            <span class="badge-env badge-env-${f.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem; margin-right: 0.25rem;">${f}</span>
            <span class="top-conn-endpoint">${o.host}:${o.port}</span>
            <span class="top-conn-tag">${a?"CLUSTER":`DB${o.db}`}</span>
            <button type="button" class="top-conn-disconnect" id="btnTopDisconnect" title="Disconnect ${d(o.connection_name||"instance")}">
              <i data-lucide="power" style="width: 12px; height: 12px;"></i>
            </button>
          </div>
        `}t&&(t.innerHTML=`
          <div class="top-vitals-capsule">
            <div class="vital-item clickable" id="btnOpenTopologyTop" title="View Cluster Topology & Node Health">
              <i data-lucide="layers" style="width: 12px; height: 12px; color: ${a?"#a78bfa":"var(--accent-primary)"};"></i>
              <span class="vital-val" style="color: ${a?"#c084fc":"var(--accent-primary)"};">
                ${a?`${r} Nodes`:"1 Node"}
              </span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="PING round-trip latency">
              <i data-lucide="zap" style="width: 11px; height: 11px; color: var(--accent-success);"></i>
              <span class="vital-val" style="color: var(--accent-success);">${o.latency_ms} ms</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="Total keys in active keyspace">
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
        `),u();const s=document.getElementById("btnTopDisconnect");s&&s.addEventListener("click",()=>{o.connection_id&&Ae(o.connection_id)});const c=document.getElementById("btnOpenClientsModal");c&&c.addEventListener("click",un);const y=document.getElementById("btnOpenTopologyTop");y&&y.addEventListener("click",()=>Ne());const v=document.getElementById("btnOpenMemoryTop");v&&v.addEventListener("click",gt)}else e&&(e.innerHTML=`
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${o.error?`<span class="top-conn-error" title="${d(o.error)}">${d(o.error)}</span>`:""}
          </div>
        `),t&&(t.innerHTML=`
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `),u(),P===0&&Q.length===0&&_e()}catch{e&&(e.innerHTML=`
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `),t&&(t.innerHTML=""),u()}}function Sn(){const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const l=parseInt(e.value,10)||2;try{const m=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:l})});if(m.ok){const p=await m.json();H=p.limit,ft(p.connected_count,p.limit)}}catch(m){console.error("Failed to update limit:",m)}});const t=document.getElementById("clusterConfigModal");t&&t.addEventListener("click",l=>{l.target===t&&t.classList.remove("active")});const n=document.getElementById("connSearchInput"),o=document.getElementById("btnClearConnSearch");n&&n.addEventListener("input",()=>{se=n.value,o&&(o.style.display=se?"flex":"none"),le()}),o&&o.addEventListener("click",()=>{n&&(n.value="",n.focus()),se="",o.style.display="none",le()});const i=document.querySelectorAll("#envFilterPills .env-pill-btn");i.forEach(l=>{l.addEventListener("click",()=>{i.forEach(m=>m.classList.remove("active")),l.classList.add("active"),rt=l.getAttribute("data-env")||"ALL",le()})});const a=document.getElementById("btnReloadConfig");a&&a.addEventListener("click",async()=>{a.disabled=!0;try{const m=await(await fetch("/api/connections/reload-config",{method:"POST"})).json(),p=m.loaded??m.total_in_file??0;alert(`Config reloaded successfully! Synced ${p} connection(s) from config.`),await F()}catch(l){alert("Failed to reload config: "+l.message)}finally{a.disabled=!1}}),window.addEventListener("focus",()=>{F().catch(()=>{})});let r=[];function s(){const l=document.getElementById("clusterNodesList"),m=document.getElementById("clusterNodeCountBadge");if(l){if(m&&(m.textContent=`${r.length} configured`),r.length===0){l.innerHTML=`
        <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
          No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
        </div>
      `;return}l.innerHTML=r.map((p,L)=>{const h=p.role==="master",M=p.role==="replica",C=p.role==="seed",S=h?"master":M?"replica":"",$=h?"master":M?"replica":C?"seed":"manual",B=h?"Master":M?"Replica":C?"Seed":"Node";return`
        <span class="cluster-node-chip ${S}">
          <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
          <span>${d(p.host)}:${p.port}</span>
          <span class="cluster-node-role-badge ${$}">${B}</span>
          <button type="button" class="cluster-node-chip-remove" data-idx="${L}" title="Remove node">
            <i data-lucide="x" style="width: 11px; height: 11px;"></i>
          </button>
        </span>
      `}).join(""),l.querySelectorAll(".cluster-node-chip-remove").forEach(p=>{p.addEventListener("click",L=>{L.stopPropagation();const h=parseInt(p.getAttribute("data-idx"),10);!isNaN(h)&&h>=0&&h<r.length&&(r.splice(h,1),s())})}),u()}}const c=document.getElementById("connTypeSelect"),y=document.getElementById("clusterNodesGroup"),v=document.getElementById("connHostLabel"),f=document.getElementById("connPortLabel"),b=document.getElementById("connHost"),x=document.getElementById("connPort"),_=document.getElementById("connDbGroup");c&&y&&c.addEventListener("change",()=>{const l=c.value==="cluster";y.style.display=l?"block":"none",_&&(_.style.display=l?"none":"block"),l?(v&&(v.textContent="Primary Seed Host *"),f&&(f.textContent="Seed Port *"),b&&(b.value==="localhost"||!b.value)&&(b.value="127.0.0.1"),x&&(x.value==="6379"||!x.value)&&(x.value="7000"),r.length===0&&b&&b.value&&x&&x.value&&r.push({host:b.value.trim(),port:parseInt(x.value,10)||7e3,role:"seed"}),s()):(v&&(v.textContent="Host *"),f&&(f.textContent="Port *"),x&&x.value==="7000"&&(x.value="6379"))});const R=document.getElementById("btnAutoDiscoverCluster"),w=document.getElementById("clusterDiscoveryStatus");R&&R.addEventListener("click",async()=>{const l=b?b.value.trim():"127.0.0.1",m=x&&parseInt(x.value,10)||7e3,p=document.getElementById("connUsername").value.trim()||null,L=document.getElementById("connPassword").value||null,h=document.getElementById("connTls").checked;if(!l){w&&(w.className="cluster-discovery-status error",w.style.display="flex",w.innerHTML='<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>',u());return}R.disabled=!0,R.innerHTML='<i class="lucide-spin" data-lucide="loader-2" style="width: 13px; height: 13px;"></i> Discovering...',u(),w&&(w.className="cluster-discovery-status",w.style.display="none");try{const C=await(await fetch("/api/connections/discover-cluster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:l,port:m,username:p,password:L,use_tls:h})})).json();C.success&&C.nodes&&C.nodes.length>0?(r=C.nodes.map(S=>({host:S.host,port:S.port,role:S.role,is_myself:S.is_myself,slots:S.slots})),s(),w&&(w.className="cluster-discovery-status success",w.style.display="flex",w.innerHTML=`
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${C.total_nodes} nodes</strong> (${C.masters_count} masters, ${C.replicas_count} replicas) • Cluster state: <strong>${C.cluster_state.toUpperCase()}</strong></span>
            `)):w&&(w.className="cluster-discovery-status error",w.style.display="flex",w.innerHTML=`
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${d(C.error||"Cluster discovery failed. Ensure seed node is part of a cluster.")}</span>
            `)}catch(M){w&&(w.className="cluster-discovery-status error",w.style.display="flex",w.innerHTML=`
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${d(M.message)}</span>
          `)}finally{R.disabled=!1,R.innerHTML='<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes',u()}});const z=document.getElementById("inputCustomClusterNode"),Y=document.getElementById("btnAddCustomClusterNode");function O(){if(!z)return;const l=z.value.trim();if(!l)return;let m="127.0.0.1",p=7e3;if(l.includes(":")){const h=l.split(":");m=h[0].trim()||"127.0.0.1",p=parseInt(h[1].trim(),10)||7e3}else isNaN(parseInt(l,10))?m=l:(p=parseInt(l,10),m=b?b.value.trim():"127.0.0.1");r.some(h=>h.host===m&&h.port===p)||(r.push({host:m,port:p,role:"manual"}),s()),z.value=""}Y&&Y.addEventListener("click",O),z&&z.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),O())});const me=document.getElementById("clusterTopologyModal"),Re=document.getElementById("btnCloseTopologyModal");Re&&Re.addEventListener("click",it);const ze=document.getElementById("btnRefreshTopologyModal");ze&&ze.addEventListener("click",xt),me&&me.addEventListener("click",l=>{l.target===me&&it()});const ue=document.getElementById("topologySearchInput");ue&&ue.addEventListener("input",()=>{ct=ue.value,$e()}),document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(m=>m.classList.remove("active")),l.classList.add("active"),dt=l.getAttribute("data-role")||"all",$e()})});const De=document.getElementById("clientsListModal");document.getElementById("btnCloseClientsModal").addEventListener("click",et),document.getElementById("btnRefreshClientsModal").addEventListener("click",Me),De.addEventListener("click",l=>{l.target===De&&et()});const ye=document.getElementById("clientsSearchInput");ye&&ye.addEventListener("input",()=>{const l=ye.value.trim().toLowerCase(),m=l?q.filter(p=>p.addr&&p.addr.toLowerCase().includes(l)||p.ip&&p.ip.toLowerCase().includes(l)||p.name&&p.name.toLowerCase().includes(l)||p.cmd&&p.cmd.toLowerCase().includes(l)||p.user&&p.user.toLowerCase().includes(l)||p.id&&String(p.id).includes(l)):q;yt(m)});const Pe=document.getElementById("btnOpenSlowlog");Pe&&Pe.addEventListener("click",gn);const He=document.getElementById("btnOpenMemoryModal");He&&He.addEventListener("click",gt);const ge=document.getElementById("slowlogModal"),Fe=document.getElementById("btnCloseSlowlogModal");Fe&&Fe.addEventListener("click",tt);const Oe=document.getElementById("btnRefreshSlowlogModal");Oe&&Oe.addEventListener("click",ke);const je=document.getElementById("btnClearSlowlogModal");je&&je.addEventListener("click",hn),ge&&ge.addEventListener("click",l=>{l.target===ge&&tt()});const ve=document.getElementById("slowlogSearchInput");ve&&ve.addEventListener("input",()=>{de=ve.value.trim(),pe()}),document.querySelectorAll(".slowlog-filter-btn").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(m=>m.classList.remove("active")),l.classList.add("active"),re=parseFloat(l.getAttribute("data-min-duration")||"0"),pe()})});const fe=document.getElementById("memoryModal"),Ue=document.getElementById("btnCloseMemoryModal");Ue&&Ue.addEventListener("click",Le);const Ke=document.getElementById("btnRefreshMemoryModal");Ke&&Ke.addEventListener("click",vt),fe&&fe.addEventListener("click",l=>{l.target===fe&&Le()});let j=null;window.openEditConnectionModal=function(l){j=l.id;const m=document.getElementById("connectionModal"),p=document.getElementById("connectionModalTitle"),L=document.getElementById("btnSaveConnModal"),h=document.getElementById("connPassword");p&&(p.innerHTML='<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection'),L&&(L.textContent="Update Connection"),document.getElementById("connName").value=l.name||"",document.getElementById("connEnv").value=(l.env||"DEV").toUpperCase();const M=document.getElementById("connTypeSelect");M.value=l.conn_type||"standalone",document.getElementById("connHost").value=l.host||"localhost",document.getElementById("connPort").value=l.port||6379,document.getElementById("connDb").value=l.db||0,document.getElementById("connUsername").value=l.username||"",document.getElementById("connTls").checked=!!l.use_tls,h.value="",l.has_password?h.placeholder="•••••••• (Leave blank to keep saved password)":h.placeholder="Enter password (or leave empty)";const C=document.getElementById("clusterNodesGroup"),S=document.getElementById("connHostLabel"),$=document.getElementById("connDbRow");if(r=[],l.conn_type==="cluster"){if(C.style.display="block",S.textContent="Seed Node Host *",$.style.display="none",l.cluster_nodes)try{const k=typeof l.cluster_nodes=="string"?JSON.parse(l.cluster_nodes):l.cluster_nodes;Array.isArray(k)&&(r=k.map(I=>{if(typeof I=="string"&&I.includes(":")){const T=I.split(":");return{host:T[0].trim(),port:parseInt(T[1],10)||6379}}return{host:I.host||"127.0.0.1",port:parseInt(I.port,10)||6379}}))}catch{}}else C.style.display="none",S.textContent="Host *",$.style.display="flex";s();const B=document.getElementById("testResultBox");B&&(B.className="test-result-box",B.innerHTML=""),u(),m.classList.add("active")};const U=document.getElementById("connectionModal");document.getElementById("btnAddConn").addEventListener("click",()=>{j=null,document.getElementById("connectionForm").reset();const l=document.getElementById("connectionModalTitle"),m=document.getElementById("btnSaveConnModal"),p=document.getElementById("connPassword");l&&(l.innerHTML='<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection'),m&&(m.textContent="Save Connection"),p&&(p.placeholder="Leave empty if none"),document.getElementById("clusterNodesGroup").style.display="none",document.getElementById("connHostLabel").textContent="Host *",document.getElementById("connDbRow").style.display="flex",r=[],s();const L=document.getElementById("testResultBox");L&&(L.className="test-result-box",L.innerHTML=""),u(),U.classList.add("active")}),document.getElementById("btnCloseModal").addEventListener("click",()=>{U.classList.remove("active")}),document.getElementById("btnCancelModal").addEventListener("click",()=>{U.classList.remove("active")}),U.addEventListener("click",l=>{l.target===U&&U.classList.remove("active")});const Z=document.getElementById("keyDetailModal");document.getElementById("btnCloseDetailModal").addEventListener("click",()=>{Z.classList.remove("active")}),Z.addEventListener("click",l=>{l.target===Z&&Z.classList.remove("active")}),document.getElementById("btnCopyKeyName").addEventListener("click",()=>{K&&(navigator.clipboard.writeText(K),alert(`Copied '${K}' to clipboard!`))}),document.getElementById("btnDeleteKeyFromDetail").addEventListener("click",()=>{K&&Ie(K,()=>{Z.classList.remove("active"),A()})});const Ve=document.getElementById("deleteKeyConfirmModal");document.getElementById("btnCloseDeleteConfirmModal").addEventListener("click",()=>{Ve.classList.remove("active")}),document.getElementById("btnCancelDeleteConfirm").addEventListener("click",()=>{Ve.classList.remove("active")}),document.getElementById("btnTestConnModal").addEventListener("click",async()=>{const l=document.getElementById("connTypeSelect").value,m=document.getElementById("connHost").value.trim()||"localhost",p=parseInt(document.getElementById("connPort").value,10)||6379,L=parseInt(document.getElementById("connDb").value,10)||0,h=document.getElementById("connUsername").value.trim()||null,M=document.getElementById("connPassword").value,C=document.getElementById("connTls").checked;let S=null;l==="cluster"&&r.length>0&&(S=JSON.stringify(r.map(k=>({host:k.host,port:k.port}))));const $=document.getElementById("testResultBox"),B=document.getElementById("btnTestConnModal");B.disabled=!0,B.innerHTML="Testing...",$.className="test-result-box",$.innerHTML="";try{let k;j&&!M?k=await fetch(`/api/connections/${j}/test`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:m,port:p,db:L,username:h,use_tls:C,conn_type:l,cluster_nodes:S})}):k=await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:m,port:p,db:L,username:h,password:M||null,use_tls:C,conn_type:l,cluster_nodes:S})});const I=await k.json();if(I.success){$.className="test-result-box success";const T=I.is_cluster?` • Cluster Mode (${I.cluster_nodes_count||r.length} nodes reachable)`:"";$.innerHTML=`
          <i data-lucide="check-circle-2"></i>
          <span>Connected! Latency: <strong>${I.latency_ms} ms</strong>${T} (Redis v${I.redis_version})</span>
        `}else $.className="test-result-box error",$.innerHTML=`
          <i data-lucide="alert-circle"></i>
          <span>Failed: ${d(I.error||"Connection refused")}</span>
        `}catch(k){$.className="test-result-box error",$.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Error: ${d(k.message)}</span>
      `}finally{B.disabled=!1,B.innerHTML='<i data-lucide="zap"></i> Test Connection',u()}}),document.getElementById("connectionForm").addEventListener("submit",async l=>{l.preventDefault();const m=document.getElementById("connName").value.trim(),p=document.getElementById("connEnv").value,L=document.getElementById("connTypeSelect").value;let h=document.getElementById("connHost").value.trim()||"localhost",M=parseInt(document.getElementById("connPort").value,10)||6379;const C=parseInt(document.getElementById("connDb").value,10)||0,S=document.getElementById("connUsername").value.trim()||null,$=document.getElementById("connPassword").value,B=document.getElementById("connTls").checked,k=document.getElementById("connAutoActivate").checked;let I=null;L==="cluster"&&(r.length>0?(I=JSON.stringify(r.map(T=>({host:T.host,port:T.port}))),h=r[0].host,M=r[0].port):I=JSON.stringify([{host:h,port:M}]));try{if(j){const T={name:m,env:p,conn_type:L,host:h,port:M,cluster_nodes:I,db:C,username:S,use_tls:B};$&&(T.password=$);const X=await fetch(`/api/connections/${j}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)});if(!X.ok){const be=await X.json().catch(()=>({}));throw new Error(be.detail||"Failed to update connection")}}else{const T={name:m,env:p,conn_type:L,host:h,port:M,cluster_nodes:I,db:C,username:S,password:$||null,use_tls:B},X=await fetch(`/api/connections?auto_activate=${k}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)});if(!X.ok){const be=await X.json().catch(()=>({}));throw new Error(be.detail||"Failed to save connection")}}U.classList.remove("active"),j=null,document.getElementById("connectionForm").reset(),r=[],s(),await F(),await N(),await A()}catch(T){alert("Error saving: "+T.message)}}),document.getElementById("btnRefreshStats").addEventListener("click",N);const ie=document.getElementById("keySearchInput");let he=null;ie.addEventListener("input",()=>{clearTimeout(he),he=setTimeout(()=>{ce=ie.value.trim()||"*",A()},400)}),ie.addEventListener("keydown",l=>{l.key==="Enter"&&(clearTimeout(he),ce=ie.value.trim()||"*",A())}),document.querySelectorAll(".type-tab").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll(".type-tab").forEach(m=>m.classList.remove("active")),l.classList.add("active"),Ce=l.getAttribute("data-type"),A()})});const qe=document.getElementById("btnScanNext");qe&&qe.addEventListener("click",()=>pt());const Ge=document.getElementById("btnResetScan");Ge&&Ge.addEventListener("click",A);function ae(l){const m=document.querySelector(".sidebar"),p=document.getElementById("btnShowSidebar");m&&(l?(m.classList.add("collapsed"),p&&(p.style.display="inline-flex"),localStorage.setItem("redis_insight_sidebar_collapsed","true")):(m.classList.remove("collapsed"),p&&(p.style.display="none"),localStorage.setItem("redis_insight_sidebar_collapsed","false")),u())}const Je=document.getElementById("btnToggleSidebar");Je&&Je.addEventListener("click",()=>ae(!0));const We=document.getElementById("btnShowSidebar");We&&We.addEventListener("click",()=>ae(!1)),localStorage.getItem("redis_insight_sidebar_collapsed")==="true"&&ae(!0),document.addEventListener("keydown",l=>{if((l.ctrlKey||l.metaKey)&&l.key.toLowerCase()==="b"){const m=document.querySelector(".sidebar"),p=m&&m.classList.contains("collapsed");ae(!p),l.preventDefault()}}),setInterval(N,15e3)}async function at(){rn(),u(),Sn();try{await F(),await N()}catch(t){console.error("Failed to load initial status:",t)}E.find(t=>t.is_connected&&t.is_selected)||E.find(t=>t.is_connected)?await A():_e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",at):at();
