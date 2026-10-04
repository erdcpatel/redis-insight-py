(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=(e,n,t=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(n).forEach(i=>{o.setAttribute(i,String(n[i]))}),t.length&&t.forEach(i=>{const a=He(...i);o.appendChild(a)}),o};var ot=([e,n,t])=>He(e,n,t);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=e=>Array.from(e.attributes).reduce((n,t)=>(n[t.name]=t.value,n),{}),at=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",st=e=>e.flatMap(at).map(t=>t.trim()).filter(Boolean).filter((t,o,i)=>i.indexOf(t)===o).join(" "),lt=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(n,t,o)=>t.toUpperCase()+o.toLowerCase()),Ie=(e,{nameAttr:n,icons:t,attrs:o})=>{const i=e.getAttribute(n);if(i==null)return;const a=lt(i),l=t[a];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const s=it(e),[r,m,u]=l,g={...m,"data-lucide":i,...o,...s},b=st(["lucide",`lucide-${i}`,s,o]);b&&Object.assign(g,{class:b});const x=ot([r,g,u]);return e.parentNode?.replaceChild(x,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=["svg",y,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=["svg",y,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=["svg",y,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=["svg",y,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=["svg",y,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=["svg",y,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=["svg",y,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=["svg",y,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=["svg",y,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=["svg",y,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=["svg",y,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=["svg",y,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=["svg",y,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=["svg",y,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=["svg",y,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=["svg",y,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=["svg",y,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=["svg",y,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=["svg",y,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=["svg",y,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=["svg",y,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=["svg",y,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=["svg",y,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=["svg",y,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=["svg",y,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=["svg",y,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=["svg",y,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=["svg",y,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=["svg",y,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=["svg",y,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=({icons:e={},nameAttr:n="data-lucide",attrs:t={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${n}]`);if(Array.from(o).forEach(i=>Ie(i,{nameAttr:n,icons:e,attrs:t})),n==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(a=>Ie(a,{nameAttr:"icon-name",icons:e,attrs:t})))}};let N=[],D=[],Z=0,X="",P="all",Be=null,S=null,re=!1,B=0,ee="*",ce="all",F=!1,$=0,K=0,H=[],q=new Set,I=null,Oe=null,de=null,v=[],je="ALL",Q="",me=null,Ue="all",Ke="",k=2,V=0;function p(){Pt({icons:{Layers:Ct,Plus:$t,RefreshCw:kt,Search:Mt,Cpu:ht,Trash2:At,Zap:Dt,CheckCircle2:yt,AlertCircle:pt,Database:bt,ShieldCheck:It,Lock:Et,ArrowDownCircle:ut,X:Nt,Play:St,Copy:ft,Clock:gt,Edit:Bt,ExternalLink:xt,Code:vt,Users:Rt,Server:Tt,Network:Lt,GitBranch:wt,ArrowRightLeft:dt,Activity:rt,PieChart:mt,AlertTriangle:zt,TrendingUp:_t,BarChart2:ct}})}function Ft(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
            <button type="button" class="env-pill-btn" data-env="LOCAL">LOCAL</button>
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
          <div id="topStatsContainer">
            <div class="status-pill">
              <span class="status-indicator connected"></span>
              <span>Connecting to Redis...</span>
            </div>
          </div>

          <div class="top-actions">
            <button type="button" class="btn btn-secondary" id="btnOpenSlowlog" title="Real-Time Slowlog & Latency Profiler" style="padding: 0.4rem 0.75rem; font-size: 0.8rem;">
              <i data-lucide="activity" style="width: 14px; height: 14px; color: #38bdf8;"></i>
              Slowlog
            </button>
            <button type="button" class="btn btn-secondary" id="btnOpenMemoryModal" title="Memory Analysis & BigKeys Profiler" style="padding: 0.4rem 0.75rem; font-size: 0.8rem;">
              <i data-lucide="pie-chart" style="width: 14px; height: 14px; color: #a78bfa;"></i>
              Memory & BigKeys
            </button>
            <button type="button" class="btn btn-secondary" id="btnRefreshStats" title="Ping active connection" style="padding: 0.4rem 0.75rem; font-size: 0.8rem;">
              <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
              Ping
            </button>
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
          <h3 class="modal-title">
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

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="connHost">Host / Seed Node *</label>
                <input class="form-input" type="text" id="connHost" name="host" placeholder="localhost" required value="localhost">
              </div>
              <div class="form-group">
                <label class="form-label" for="connPort">Port *</label>
                <input class="form-input" type="number" id="connPort" name="port" placeholder="6379" required value="6379">
              </div>
            </div>

            <div class="form-group" id="clusterNodesGroup" style="display: none;">
              <label class="form-label" for="connClusterNodes">Cluster Seed Nodes (optional)</label>
              <input class="form-input" type="text" id="connClusterNodes" name="cluster_nodes" placeholder="e.g. 10.0.0.1:7000, 10.0.0.2:7001, 10.0.0.3:7002">
              <span style="font-size: 0.72rem; color: var(--text-muted); display: block; margin-top: 0.25rem;">Comma-separated cluster nodes. Redis will auto-discover the remaining nodes in topology.</span>
            </div>

            <div class="form-row">
              <div class="form-group">
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
  `)}async function w(){F=!1,V++;const e=V;B=0,$=0,H=[],q.clear();const n=document.getElementById("emptyWorkspaceState"),t=document.getElementById("gridViewerContainer");n&&(n.style.display="none"),t&&(t.style.display="block"),Ve(),await qe(e)}async function qe(e=null){if(F||B===0&&$>0)return;const n=e!==null?e:V;F=!0,Ae();try{const t=`/api/keys?pattern=${encodeURIComponent(ee)}&cursor=${B}&count=50${ce!=="all"?`&type=${encodeURIComponent(ce)}`:""}`,o=await fetch(t);if(!o.ok)throw new Error("Failed to scan keys");const i=await o.json();if(n!==V)return;B=i.cursor,K=i.total_in_db;const l=(i.keys||[]).filter(s=>q.has(s.name)?!1:(q.add(s.name),!0)).map(s=>({key:s.name,type:s.type,ttl_seconds:s.ttl,status:s.ttl===-1?"Persistent":s.ttl===-2?"Expired":`Expires in ${s.ttl}s`}));l.length>0&&H.push(...l),Ve(),$=q.size}catch(t){console.error("Scan error:",t)}finally{n===V&&(F=!1,Ae())}}function Ve(){const e=document.getElementById("gridViewerContainer");if(e){if(H.length===0){e.innerHTML=`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${d(ee)}</code>".
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
          ${H.map(n=>`
            <tr class="key-row" data-key="${encodeURIComponent(n.key)}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer;">
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
                <span class="btn-inspect-key" data-key="${encodeURIComponent(n.key)}">${d(n.key)}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase;">
                <span class="badge-db">${n.type}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary);">${n.ttl_seconds}</td>
              <td style="padding: 0.65rem 1rem; font-size: 0.8rem; color: ${n.ttl_seconds===-1?"var(--text-muted)":"var(--accent-warning)"};">${n.status}</td>
              <td style="padding: 0.65rem 1rem; text-align: right;" onclick="event.stopPropagation()">
                <button type="button" class="btn-icon danger btn-delete-key-table" data-key="${encodeURIComponent(n.key)}" title="Delete key">
                  <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                </button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `,p(),e.querySelectorAll(".key-row").forEach(n=>{n.addEventListener("click",()=>{const t=decodeURIComponent(n.getAttribute("data-key"));G(t)})}),e.querySelectorAll(".btn-delete-key-table").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const o=decodeURIComponent(n.getAttribute("data-key"));ge(o,()=>{w()})})})}}function Ae(){const e=document.getElementById("scanStatusText"),n=document.getElementById("btnScanNext"),t=B===0&&$>0||$>=K&&K>0;e&&(e.innerHTML=`
      Loaded <strong>${$}</strong> keys
      ${t?'<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>':`(Next Cursor: ${B})`}
      | DB Total: <strong>${K}</strong>
    `),n&&(n.disabled=F||t,n.innerHTML=F?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':t?'<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More',p())}async function G(e){I=e;const n=document.getElementById("keyDetailModal"),t=document.getElementById("detailKeyTitle"),o=document.getElementById("detailHeaderMeta"),i=document.getElementById("detailBodyContent");t.textContent=e,t.title=e,o.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>',i.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>',n.classList.add("active");try{let a=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(a.ok||(a=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!a.ok){let s="Key not found or could not be read";try{const r=await a.json();r&&r.detail&&(s=r.detail)}catch{}throw new Error(s)}const l=await a.json();Oe=l,Ht(l),jt(l)}catch(a){o.innerHTML='<span style="color: var(--accent-danger);">Error</span>',i.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Failed to inspect key</h4>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">${d(a.message)}</p>
      </div>
    `,p()}}function Ht(e){const n=document.getElementById("detailHeaderMeta"),t=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",o=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;n.innerHTML=`
    <div style="display: flex; align-items: center; gap: 0.4rem;">
      <span style="color: var(--text-muted);">Type:</span>
      <span class="badge-db" style="color: var(--accent-primary); font-weight: 600;">${e.type.toUpperCase()}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 0.4rem;">
      <span style="color: var(--text-muted);">Size:</span>
      <span style="font-family: var(--font-mono);">${e.length} items / ${t}</span>
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
  `,p(),document.getElementById("btnEditTtl").addEventListener("click",()=>{Ot(e.name,e.ttl)})}async function Ot(e,n){const t=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,n>0?n:"3600");if(t===null)return;const o=parseInt(t.trim(),10);if(isNaN(o)){alert("Please enter a valid integer.");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:o})})).ok)throw new Error("Failed to update TTL");G(e)}catch(i){alert("Error updating TTL: "+i.message)}}function jt(e){const n=document.getElementById("detailBodyContent"),t=e.type.toLowerCase();if(t==="hash"){const o=e.fields||[];n.innerHTML=`
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
            ${Ge(o)}
          </tbody>
        </table>
      </div>
    `,p(),Ut(e.name,o);return}if(e.is_json||t.includes("json")){const o=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";n.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${d(o)}</div>
    `,p(),document.getElementById("btnCopyJsonValue").addEventListener("click",()=>{navigator.clipboard.writeText(o),alert("JSON copied to clipboard!")});return}if(t==="string"){n.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${d(e.value||"")}</div>
    `,p(),document.getElementById("btnCopyStringValue").addEventListener("click",()=>{navigator.clipboard.writeText(e.value||""),alert("Value copied to clipboard!")});return}if(Array.isArray(e.value)){const o=t==="zset";n.innerHTML=`
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
    `;return}n.innerHTML=`<div class="json-view-box">${d(String(e.value))}</div>`}function Ge(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(n=>`
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
        ${d(n.field)}
      </td>
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
        ${d(n.value)}
      </td>
      <td style="padding: 0.6rem 1rem; text-align: right;">
        <button type="button" class="btn-icon danger btn-delete-hash-field" data-field="${encodeURIComponent(n.field)}" title="Delete field">
          <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
        </button>
      </td>
    </tr>
  `).join("")}function Ut(e,n){const t=document.getElementById("hashFieldSearchInput"),o=document.getElementById("hashFieldCountText"),i=document.getElementById("hashFieldsTableBody");t&&t.addEventListener("input",()=>{const l=t.value.trim().toLowerCase(),s=l?n.filter(r=>r.field.toLowerCase().includes(l)||r.value.toLowerCase().includes(l)):n;i.innerHTML=Ge(s),o.textContent=`${s.length} of ${n.length} fields`,p(),_e(e)});const a=document.getElementById("btnAddHashField");a&&a.addEventListener("click",async()=>{const l=prompt(`Enter field name for hash '${e}':`);if(!l)return;const s=prompt(`Enter value for field '${l}':`);if(s!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:l,value:s})})).ok)throw new Error("Failed to set field");G(e)}catch(r){alert("Error setting field: "+r.message)}}),_e(e)}function _e(e){document.querySelectorAll(".btn-delete-hash-field").forEach(n=>{n.addEventListener("click",async()=>{const t=decodeURIComponent(n.getAttribute("data-field"));if(confirm(`Delete field '${t}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(t)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");G(e)}catch(o){alert("Error: "+o.message)}})})}function d(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function ge(e,n){de=n;const t=document.getElementById("deleteKeyConfirmModal"),o=document.getElementById("deleteKeyTargetName"),i=document.getElementById("inputConfirmDelete"),a=document.getElementById("btnSubmitDeleteKey");o.textContent=e,i.value="",a.disabled=!0,t.classList.add("active"),i.focus(),i.oninput=()=>{const l=i.value.trim().toUpperCase();a.disabled=l!=="CONFIRM"&&i.value.trim()!==e},a.onclick=async()=>{a.disabled=!0,a.textContent="Deleting...";try{const l=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),s=await l.json();if(!l.ok)throw new Error(s.detail||"Failed to delete key");t.classList.remove("active"),de&&de()}catch(l){alert("Error deleting key: "+l.message)}finally{a.disabled=!1,a.textContent="Delete Permanently"}}}async function Kt(){document.getElementById("clientsListModal").classList.add("active"),await ve()}function ze(){document.getElementById("clientsListModal").classList.remove("active")}async function ve(){const e=document.getElementById("clientsTableContainer"),n=document.getElementById("clientsCountBadge"),t=document.getElementById("clientsQuickStats"),o=document.getElementById("clientsSearchInput");e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',p();try{const i=await fetch("/api/clients");if(!i.ok)throw new Error("Failed to load connected clients");N=await i.json(),n&&(n.textContent=N.length),t&&(t.textContent=`${N.length} total connections`),o&&(o.value=""),Je(N)}catch(i){e.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
        <h4>Error loading clients</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${i.message}</p>
      </div>
    `,p()}}function Je(e){const n=document.getElementById("clientsTableContainer");if(!e||e.length===0){n.innerHTML=`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="users" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.4;"></i>
        <p>No matching connected clients found.</p>
      </div>
    `,p();return}n.innerHTML=`
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
        ${e.map(t=>`
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
              #${t.id}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.4rem;">
                <span>${d(t.name)}</span>
                ${t.flags&&t.flags.includes("O")?'<span class="badge-db" style="background: rgba(234, 179, 8, 0.15); color: #fde047; font-size: 0.65rem;">MONITOR</span>':""}
              </div>
              <div class="client-sub-text">User: ${d(t.user)} | Flags: ${d(t.flags||"none")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div class="client-ip-cell">${d(t.addr)}</div>
              <div class="client-sub-text">Target: ${d(t.laddr||"localhost")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem;">
              DB${t.db}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <span class="client-cmd-badge">${d(t.cmd||"idle")}</span>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
              ${t.age_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: ${t.idle>300?"var(--accent-warning)":"var(--accent-success)"};">
              ${t.idle_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; text-align: right;">
              <button type="button" class="btn-icon danger btn-kill-client" data-id="${t.id}" data-addr="${d(t.addr)}" title="Disconnect client">
                <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
              </button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,p(),n.querySelectorAll(".btn-kill-client").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-id"),i=t.getAttribute("data-addr");qt(o,i)})})}async function qt(e,n){if(confirm(`Are you sure you want to disconnect client #${e} (${n})?`))try{const t=await fetch(`/api/clients/${e}`,{method:"DELETE"}),o=await t.json();if(!t.ok)throw new Error(o.detail||"Failed to disconnect client");await ve(),await L()}catch(t){alert("Error disconnecting client: "+t.message)}}async function Vt(){const e=document.getElementById("slowlogModal");if(!e)return;e.classList.add("active"),Z=0,X="",P="all",document.querySelectorAll(".slowlog-filter-btn").forEach(t=>{t.classList.toggle("active",t.getAttribute("data-min-duration")==="0")});const n=document.getElementById("slowlogSearchInput");n&&(n.value=""),await fe()}function Re(){const e=document.getElementById("slowlogModal");e&&e.classList.remove("active")}async function fe(){const e=document.getElementById("slowlogTableContainer"),n=document.getElementById("slowlogCountBadge"),t=document.getElementById("slowlogThresholdBadge"),o=document.getElementById("slowlogFooterStats");e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,p());try{const i=await fetch("/api/slowlog?limit=250");if(!i.ok)throw new Error("Failed to fetch slowlog");const a=await i.json();if(D=a.entries||[],n&&(n.textContent=D.length),t&&a.slower_than_us!==null&&a.slower_than_us!==void 0){const l=(a.slower_than_us/1e3).toFixed(1);t.textContent=`Threshold: > ${l}ms (${a.slower_than_us} µs)`}o&&(o.textContent=`Total buffer: ${a.total_len||D.length} entries | Max buffer: ${a.max_len||"N/A"}`),Gt(D),te()}catch(i){e&&(e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${d(i.message)}</p>
        </div>
      `,p())}}function Gt(e){const n=document.getElementById("slowlogNodeFilterContainer");if(!n)return;const t=Array.from(new Set(e.map(i=>i.node).filter(Boolean)));if(t.length<=1){n.innerHTML="";return}n.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${t.length})</option>
      ${t.map(i=>`<option value="${d(i)}" ${P===i?"selected":""}>${d(i)}</option>`).join("")}
    </select>
  `;const o=document.getElementById("slowlogNodeSelect");o&&o.addEventListener("change",()=>{P=o.value,te()})}function te(){let e=D;if(Z>0&&(e=e.filter(n=>n.duration_ms>=Z)),P&&P!=="all"&&(e=e.filter(n=>n.node===P)),X){const n=X.toLowerCase();e=e.filter(t=>{const o=(t.command||[]).join(" ").toLowerCase(),i=(t.client_ip||"").toLowerCase(),a=(t.node||"").toLowerCase();return o.includes(n)||i.includes(n)||a.includes(n)||String(t.id).includes(n)})}Jt(e)}function Jt(e){const n=document.getElementById("slowlogTableContainer");if(n){if(!e||e.length===0){n.innerHTML=`
      <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <i data-lucide="check-circle-2" style="width: 28px; height: 28px; color: #4ade80;"></i>
        </div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.35rem;">No Slow Queries Recorded</h4>
        <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.5;">
          ${D.length===0?"Redis latency is healthy! All commands executed within the threshold.":"No slowlog entries matched the active filters."}
        </p>
      </div>
    `,p();return}n.innerHTML=`
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
        ${e.map(t=>{let o="badge-duration-fast";t.duration_ms>=50?o="badge-duration-critical":t.duration_ms>=10&&(o="badge-duration-warning");const i=t.command&&t.command.length>0?t.command.join(" "):"(empty)";return`
            <tr>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">#${t.id}</td>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); white-space: nowrap;">
                ${d(t.time_str||"N/A")}
              </td>
              <td>
                <span class="badge-duration ${o}">
                  <i data-lucide="clock" style="width: 11px; height: 11px;"></i>
                  ${t.duration_ms} ms
                </span>
                <span style="font-size: 0.68rem; color: var(--text-muted); display: block; margin-top: 2px; font-family: var(--font-mono);">
                  ${t.duration_us.toLocaleString()} µs
                </span>
              </td>
              <td>
                <span class="slowlog-cmd-code" title="${d(i)}">${d(i)}</span>
              </td>
              <td>
                ${t.node?`<span class="slowlog-node-pill">${d(t.node)}</span>`:'<span style="color: var(--text-muted); font-size: 0.75rem;">Default</span>'}
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                ${d(t.client_ip||"Unknown")}
                ${t.client_name?`<span style="color: var(--text-muted); display: block; font-size: 0.7rem;">(${d(t.client_name)})</span>`:""}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,p()}}async function Wt(){if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");await fe()}catch(e){alert("Error resetting slowlog: "+e.message)}}async function We(){const e=document.getElementById("memoryModal");e&&(e.classList.add("active"),await Qe(),S?be(S):he())}function pe(){const e=document.getElementById("memoryModal");e&&e.classList.remove("active")}async function Qe(){const e=document.getElementById("memoryOverviewContainer");if(e){e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,p();try{const n=await fetch("/api/memory/overview");if(!n.ok)throw new Error("Failed to fetch memory overview");Be=await n.json(),Qt(Be)}catch(n){e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${d(n.message)}</p>
      </div>
    `,p()}}}function Qt(e){const n=document.getElementById("memoryOverviewContainer");if(!n||!e)return;let t="mem-status-healthy",o="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(t="mem-status-critical",o="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(t="mem-status-warning",o=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),n.innerHTML=`
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
          <span class="mem-status-badge ${t}">${e.fragmentation_status}</span>
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
  `,p()}function he(){const e=document.getElementById("memoryProfilingContainer");if(!e)return;e.innerHTML=`
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
  `,p();const n=document.getElementById("btnStartProfilingAction");n&&n.addEventListener("click",()=>{const t=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,o=document.getElementById("memSamplePatternInput").value||"*";Yt(t,o)})}async function Yt(e=500,n="*"){const t=document.getElementById("memoryProfilingContainer");if(t){re=!0,t.innerHTML=`
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: #a78bfa; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">Analyzing Redis Keyspace...</h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
        Scanning sample of up to <strong>${e.toLocaleString()}</strong> keys (pattern <code>${d(n)}</code>) and measuring memory allocations...
      </p>
    </div>
  `,p();try{const o=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:n})});if(!o.ok)throw new Error("Failed to complete memory profiling");S=await o.json(),re=!1,be(S)}catch(o){re=!1,t.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Memory Profiling Failed</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${d(o.message)}</p>
        <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Try Again</button>
      </div>
    `,p();const i=document.getElementById("btnRetryProfiling");i&&i.addEventListener("click",he)}}}function be(e){const n=document.getElementById("memoryProfilingContainer");if(!n||!e)return;const t={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};n.innerHTML=`
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
        ${e.types_breakdown.map(a=>{const l=t[a.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-stacked-segment" style="width: ${a.percentage}%; background: ${l};" title="${a.type.toUpperCase()}: ${a.percentage}% (${a.total_human})"></div>
          `}).join("")}
      </div>

      <!-- Type Cards Grid -->
      <div class="mem-type-cards-grid">
        ${e.types_breakdown.map(a=>{const l=t[a.type.toLowerCase()]||"#94a3b8";return`
            <div class="mem-type-card" style="border-left: 3px solid ${l};">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="type-badge ${a.type.toLowerCase()}" style="font-size: 0.68rem; padding: 0.1rem 0.4rem;">${a.type.toUpperCase()}</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--text-primary);">${a.percentage}%</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${l}; margin-top: 2px;">
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
        ${Ne(e.top_bigkeys)}
      </div>
    </div>
  `,p();const o=document.getElementById("btnReRunProfiling");o&&o.addEventListener("click",he);const i=document.getElementById("bigkeysSearchInput");i&&i.addEventListener("input",()=>{const a=i.value.trim().toLowerCase(),l=a?e.top_bigkeys.filter(r=>r.key.toLowerCase().includes(a)||r.type.toLowerCase().includes(a)):e.top_bigkeys,s=document.getElementById("bigkeysTableContainer");s&&(s.innerHTML=Ne(l),p(),De())}),De()}function Ne(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const n=e[0]?e[0].memory_bytes:1;return`
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
        ${e.map((t,o)=>{let i="rank-normal";o===0?i="rank-gold":o===1?i="rank-silver":o===2&&(i="rank-bronze");const a=n>0?Math.max(5,Math.round(t.memory_bytes/n*100)):10;let l="No TTL (Persistent)",s="var(--text-muted)";return t.ttl>0&&(l=`${t.ttl.toLocaleString()}s`,s="var(--accent-warning)"),`
            <tr>
              <td>
                <span class="rank-badge ${i}">#${o+1}</span>
              </td>
              <td>
                <a href="javascript:void(0)" class="key-name-link bigkey-inspect-btn" data-key="${d(t.key)}" style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 600; color: #38bdf8; text-decoration: none;" title="Inspect key: ${d(t.key)}">
                  ${d(t.key)}
                </a>
              </td>
              <td>
                <span class="type-badge ${t.type.toLowerCase()}" style="font-size: 0.68rem; padding: 0.15rem 0.45rem;">
                  ${t.type.toUpperCase()}
                </span>
              </td>
              <td>
                <div style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--text-primary);">
                  ${t.memory_human}
                </div>
                <div style="width: 100%; height: 5px; background: rgba(255,255,255,0.06); border-radius: 9999px; overflow: hidden; margin-top: 3px;">
                  <div style="width: ${a}%; height: 100%; background: #38bdf8; border-radius: 9999px;"></div>
                </div>
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">
                ${t.length.toLocaleString()}
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: ${s};">
                ${l}
              </td>
              <td style="text-align: right;">
                <div style="display: inline-flex; align-items: center; gap: 0.35rem;">
                  <button type="button" class="btn btn-secondary bigkey-inspect-btn" data-key="${d(t.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Inspect key detail">
                    <i data-lucide="external-link" style="width: 11px; height: 11px;"></i>
                    Inspect
                  </button>
                  <button type="button" class="btn btn-danger bigkey-delete-btn" data-key="${d(t.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Delete oversized key">
                    <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
                  </button>
                </div>
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function De(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-key");n&&(pe(),G(n))})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-key");n&&ge(n,async()=>{S&&(S.top_bigkeys=S.top_bigkeys.filter(t=>t.key!==n),be(S)),await L()})})})}async function A(){const e=document.getElementById("connectionsList");try{const[n,t]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]);v=await n.json()||[],t.ok&&(k=(await t.json()).limit||2),Y()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function Ye(e,n){const t=document.getElementById("connectedCountDisplay"),o=document.getElementById("connLimitDisplay"),i=document.getElementById("connLimitSelect"),a=document.getElementById("limitProgressDots"),l=document.getElementById("limitCountPill");if(t&&(t.textContent=e),o&&(o.textContent=n),i&&String(i.value)!==String(n)&&(i.value=String(n)),l&&(e>=n&&n>0?(l.classList.add("at-limit"),l.title="Connection limit reached"):(l.classList.remove("at-limit"),l.title=`${e} of ${n} connections in use`)),a){let s="";for(let r=0;r<n;r++){const m=r<e;s+=`<span class="limit-slot-dot ${m?"filled":"empty"}" title="Slot ${r+1}: ${m?"Connected":"Available"}"></span>`}a.innerHTML=s}}function Y(){const e=document.getElementById("connectionsList");if(!e)return;const n=document.getElementById("totalConnCountBadge");n&&(n.textContent=v.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(s=>{const r=s.getAttribute("data-env");let m=0;r==="ALL"?m=v.length:m=v.filter(u=>(u.env||"LOCAL").toUpperCase()===r).length,s.textContent=`${r} (${m})`});const o=(Q||"").trim().toLowerCase(),i=je,a=v.filter(s=>{if(i!=="ALL"&&(s.env||"LOCAL").toUpperCase()!==i)return!1;if(o){const r=(s.name||"").toLowerCase().includes(o),m=(s.host||"").toLowerCase().includes(o),u=(s.env||"").toLowerCase().includes(o),g=(s.conn_type||"").toLowerCase().includes(o);if(!r&&!m&&!u&&!g)return!1}return!0});a.sort((s,r)=>{const m=s.is_connected?1:0,u=r.is_connected?1:0;if(u!==m)return u-m;const g=s.is_selected?1:0,b=r.is_selected?1:0;return b!==g?b-g:(s.name||"").localeCompare(r.name||"")});const l=v.filter(s=>s.is_connected).length;if(Ye(l,k),a.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${o?`No results found for "${d(o)}"`:`No connections configured in ${d(i)}`}
        </span>
      </div>
    `,p();return}e.innerHTML=a.map(s=>{const r=(s.env||"LOCAL").toUpperCase(),m=`badge-env-${r.toLowerCase()}`,u=s.conn_type==="cluster",g=s.conn_type==="sentinel",b=s.source==="config",x=!!s.is_connected,C=!!s.is_selected;return`
      <div class="conn-card ${x?"is-connected":""} ${C?"selected active":""}" data-id="${s.id}" title="Click to review config & connection options">
        
        <!-- Header: Lead Indicator + Name + Status Pill -->
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${C?`
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
            ${C?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:x?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <!-- Sub-row: Endpoint on left, Badges on right -->
        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${d(s.host)}:${s.port}">
            <i data-lucide="${u?"network":g?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${d(s.host)}:${s.port}</span>
          </div>

          <div class="conn-tags">
            <span class="badge-env ${m}">${r}</span>
            ${u?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${g?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!u&&!g?`<span class="badge-db">DB${s.db}</span>`:""}
            ${s.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${s.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${b?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <!-- Floating Quick Action Toolbar on Hover -->
        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${x?`
            ${C?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${s.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${s.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${u||x?`
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
    `}).join(""),p(),e.querySelectorAll(".conn-card").forEach(s=>{s.addEventListener("click",r=>{if(r.target.closest(".btn-delete-conn")||r.target.closest(".btn-view-topology-card")||r.target.closest(".btn-card-disconnect")||r.target.closest(".btn-card-select")||r.target.closest(".btn-card-open-config"))return;const m=s.getAttribute("data-id"),u=v.find(g=>g.id===m);u&&ue(u)})}),e.querySelectorAll(".btn-card-disconnect").forEach(s=>{s.addEventListener("click",async r=>{r.stopPropagation();const m=s.getAttribute("data-id");await xe(m)})}),e.querySelectorAll(".btn-card-select").forEach(s=>{s.addEventListener("click",async r=>{r.stopPropagation();const m=s.getAttribute("data-id");await Xe(m)})}),e.querySelectorAll(".btn-card-open-config").forEach(s=>{s.addEventListener("click",r=>{r.stopPropagation();const m=s.getAttribute("data-id"),u=v.find(g=>g.id===m);u&&ue(u)})}),e.querySelectorAll(".btn-view-topology-card").forEach(s=>{s.addEventListener("click",async r=>{r.stopPropagation();const m=s.getAttribute("data-id");await Ce(m)})}),e.querySelectorAll(".btn-delete-conn").forEach(s=>{s.addEventListener("click",async r=>{r.stopPropagation();const m=s.getAttribute("data-id"),u=s.getAttribute("data-name");confirm(`Are you sure you want to delete '${u}'?`)&&await en(m)})})}function Zt(e){if(!e)return[];if(Array.isArray(e))return e.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n));if(typeof e=="string")try{const n=JSON.parse(e);if(Array.isArray(n))return n.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t))}catch{return e.split(",").map(t=>t.trim()).filter(Boolean)}return[]}function ue(e){const n=document.getElementById("clusterConfigModal"),t=document.getElementById("cfgModalTitle"),o=document.getElementById("cfgModalSubtitle"),i=document.getElementById("cfgModalBody"),a=document.getElementById("cfgModalFooter");t.textContent=e.name||"Cluster Configuration",o.textContent="Review configuration before connecting";const l=!!e.is_connected,s=!!e.is_selected,r=e.conn_type==="cluster",m=Zt(e.cluster_nodes),u=v.filter(M=>M.is_connected).length,g=!l&&u>=k;i.innerHTML=`
    <div class="config-status-banner ${l?"connected":"disconnected"}">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="${l?"check-circle-2":"alert-circle"}" style="width: 18px; height: 18px;"></i>
        <span>${l?"Connected & Live":"Not Connected"}</span>
      </div>
      <div>
        ${s?'<span class="badge-selected-cluster">ACTIVE / VIEWING KEYS</span>':l?'<span class="badge-connected-cluster">CONNECTED</span>':'<span style="font-size: 0.75rem; color: var(--text-muted);">Ready to connect</span>'}
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
      ${r&&(m.length>0||e.cluster_nodes)?`
        <div class="config-grid-row config-grid-seeds-row">
          <span class="config-label" style="padding-top: 2px;">
            Seed Endpoints ${m.length>0?`(${m.length})`:""}
          </span>
          <div class="config-seeds-container">
            ${m.length>0?m.map(M=>`
                  <span class="seed-node-pill" title="${d(M)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${d(M)}
                  </span>
                `).join(""):`<span class="seed-node-pill">${d(e.cluster_nodes)}</span>`}
          </div>
        </div>
      `:""}
      ${r?"":`
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
      <span>Connected Limit: <strong>${u} of ${k}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${g?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${k} maximum). Please disconnect a connected cluster first or increase the limit.</span>
      </div>
    `:""}

    <div id="cfgTestResultBox" class="test-result-box" style="margin-top: 0.65rem;"></div>
  `,l?a.innerHTML=`
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="btn btn-secondary" id="btnTopologyFromConfig">
          <i data-lucide="layers" style="width: 13px; height: 13px;"></i>
          Topology & Nodes
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
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="btn btn-secondary" id="btnCloseConfigModal">Cancel</button>
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${g?"disabled":""}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `,p(),n.classList.add("active");const b=document.getElementById("btnCloseConfigModal");b&&(b.onclick=()=>n.classList.remove("active"));const x=document.getElementById("btnConnectFromConfig");x&&(x.onclick=async()=>{await Ze(e.id),n.classList.remove("active")});const C=document.getElementById("btnDisconnectFromConfig");C&&(C.onclick=async()=>{await xe(e.id),n.classList.remove("active")});const O=document.getElementById("btnSelectFromConfig");O&&(O.onclick=async()=>{await Xe(e.id),n.classList.remove("active")});const _=document.getElementById("btnTopologyFromConfig");_&&(_.onclick=async()=>{n.classList.remove("active"),await Ce(e.id)});const j=document.getElementById("btnTestFromConfig");j&&(j.onclick=async()=>{await Xt(e)})}async function Xt(e){const n=document.getElementById("cfgTestResultBox"),t=document.getElementById("btnTestFromConfig");t&&(t.disabled=!0,t.innerHTML="Testing..."),n&&(n.className="test-result-box",n.innerHTML="");try{const i=await(await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:e.host,port:e.port,db:e.db||0,username:e.username||null,password:null,use_tls:e.use_tls||!1,conn_type:e.conn_type||"standalone",cluster_nodes:e.cluster_nodes||null})})).json();i.success?(n.className="test-result-box success",n.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${i.latency_ms} ms</strong> (Redis v${i.redis_version})</span>
      `):(n.className="test-result-box error",n.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${i.error||"Connection refused"}</span>
      `)}catch(o){n&&(n.className="test-result-box error",n.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${o.message}</span>`)}finally{t&&(t.disabled=!1,t.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),p()}}async function Ze(e){if(v.find(t=>t.id===e),v.filter(t=>t.is_connected&&t.id!==e).length>=k){alert(`Connection limit reached: Maximum ${k} connected cluster(s) allowed at a time.
Please disconnect an existing cluster first or increase the limit in the sidebar.`);return}try{const t=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),o=await t.json();if(!t.ok)throw new Error(o.detail||"Failed to connect to cluster");await A(),await L(),await w()}catch(t){alert("Connection error: "+t.message)}}async function xe(e){try{const n=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),t=await n.json();if(!n.ok)throw new Error(t.detail||"Failed to disconnect cluster");await A(),await L(),v.some(i=>i.is_connected&&i.id!==e)?await w():(H=[],q.clear(),$=0,B=0,K=0,we())}catch(n){alert("Disconnect error: "+n.message)}}async function Xe(e){try{const n=await fetch(`/api/connections/${e}/select`,{method:"POST"}),t=await n.json();if(!n.ok)throw new Error(t.detail||"Failed to switch cluster");const o=document.getElementById("keyDetailModal");o&&o.classList.remove("active"),I=null,Oe=null,await A(),await L(),await w()}catch(n){alert("Switch error: "+n.message)}}function we(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const n=document.getElementById("emptyWorkspaceState"),t=document.getElementById("gridViewerContainer");n&&(n.style.display="flex"),t&&(t.style.display="none");const o=document.getElementById("btnConnectFirstAvailable");o&&(o.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${v.length})`,v.length>0&&(o.onclick=()=>ue(v[0]))),p()}async function en(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");await A(),await L(),await w()}catch(n){alert("Delete error: "+n.message)}}async function Ce(e=null){const n=document.getElementById("clusterTopologyModal");if(n){if(n.classList.add("active"),e){const t=document.querySelector(`.conn-card[data-id="${e}"]`);t&&!t.classList.contains("active")&&await Ze(e)}await et()}}function Pe(){const e=document.getElementById("clusterTopologyModal");e&&e.classList.remove("active")}async function et(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),n=document.getElementById("topologyNodesCountBadge"),t=document.getElementById("topologyEnvBadge"),o=v.find(i=>i.is_active);if(o&&t){const i=(o.env||"LOCAL").toUpperCase();t.textContent=i,t.className=`badge-env badge-env-${i.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,p());try{const i=await fetch("/api/topology");if(!i.ok)throw new Error("Failed to load cluster topology");const a=await i.json();me=a,n&&(n.textContent=`${a.total_nodes} Node${a.total_nodes!==1?"s":""}`),tn(a),ye()}catch(i){e&&(e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${i.message}</p>
        </div>
      `,p())}}function tn(e){const n=document.getElementById("topologyStatsGrid");if(!n)return;const t=e.is_cluster,o=(e.cluster_state||"").toLowerCase()==="ok"||!t;n.innerHTML=`
    <div class="topology-stat-card">
      <span class="topology-stat-label">Cluster State</span>
      <span class="topology-stat-value" style="color: ${o?"var(--accent-success)":"var(--accent-danger)"}; display: flex; align-items: center; gap: 0.4rem;">
        <span class="link-dot ${o?"connected":"disconnected"}"></span>
        ${(e.cluster_state||(t?"OK":"Standalone")).toUpperCase()}
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
  `}function ye(){const e=document.getElementById("topologyTableContainer");if(!e||!me)return;const n=me.nodes||[],t=(Ke||"").trim().toLowerCase(),o=Ue,i=n.filter(a=>{if(o!=="all"&&a.role.toLowerCase()!==o)return!1;if(t){const l=(a.addr||"").toLowerCase().includes(t),s=(a.id||"").toLowerCase().includes(t),r=(a.ip||"").toLowerCase().includes(t),m=(a.slots||"").toLowerCase().includes(t);if(!l&&!s&&!r&&!m)return!1}return!0});if(i.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
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
        ${i.map(a=>{const l=a.role==="master",s=(a.link_state||"connected").toLowerCase()==="connected",r=a.id?a.id.length>12?`${a.id.substring(0,10)}...`:a.id:"N/A",m=a.slots?`${a.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${a.slot_count||0} slots)</span>`:l?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${d(a.id||"")}">${d(r)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${l?"role-badge-master":"role-badge-replica"}">${a.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${d(a.addr||`${a.ip}:${a.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${s?"connected":"disconnected"}"></span>
                <span style="color: ${s?"var(--accent-success)":"var(--accent-danger)"};">${a.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${m}
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
  `,p()}async function L(){const e=document.getElementById("topStatsContainer");try{const t=await(await fetch("/api/status")).json();if(t.connected){const o=v.find(g=>g.is_selected)||v.find(g=>g.id===t.connection_id)||v.find(g=>g.is_connected),i=o&&o.conn_type==="cluster"||t.cluster_nodes&&t.cluster_nodes.length>0||t.is_cluster,a=t.cluster_state||"ok",l=o&&o.cluster_nodes?"6":t.cluster_nodes_count||1;e.innerHTML=`
        <div class="status-pill-group">
          <div class="status-pill">
            <span class="status-indicator connected"></span>
            <span>
              ${d(t.connection_name||"Connected")}
              <span style="color: var(--text-muted); font-size: 0.75rem; margin-left: 4px;">(${t.host}:${t.port} ${i?"":`/ DB${t.db}`})</span>
            </span>
          </div>

          <button type="button" class="btn-top-disconnect" id="btnTopDisconnect" title="Disconnect ${d(t.connection_name||"cluster")}">
            <i data-lucide="x" style="width: 12px; height: 12px;"></i>
            Disconnect
          </button>

          <div class="stat-item stat-item-clickable" id="btnOpenTopologyTop" title="Click to view cluster & node topology">
            <span>${i?"Cluster:":"Topology:"}</span>
            <span class="stat-value link-highlight" style="color: ${i?"#a78bfa":"var(--accent-primary)"};">
              ${i?`${a.toUpperCase()} (${l} Nodes)`:`1 Node (DB${t.db})`}
              <i data-lucide="layers" style="width: 11px; height: 11px; margin-left: 2px;"></i>
            </span>
          </div>

          <div class="stat-item">
            <span>Latency:</span>
            <span class="stat-value" style="color: var(--accent-success);">${t.latency_ms} ms</span>
          </div>

          <div class="stat-item">
            <span>Version:</span>
            <span class="stat-value">v${t.redis_version}</span>
          </div>

          <div class="stat-item">
            <span>Total Keys:</span>
            <span class="stat-value">${t.dbsize}</span>
          </div>

          <div class="stat-item stat-item-clickable" id="btnOpenMemoryTop" title="Click to view Memory Analysis & BigKeys Profiler">
            <span>Memory:</span>
            <span class="stat-value link-highlight" style="color: #a78bfa;">
              ${t.used_memory_human||"N/A"}
              <i data-lucide="pie-chart" style="width: 11px; height: 11px; margin-left: 2px;"></i>
            </span>
          </div>

          <div class="stat-item stat-item-clickable" id="btnOpenClientsModal" title="Click to view all connected clients details">
            <span>Clients:</span>
            <span class="stat-value link-highlight">
              ${t.connected_clients||1}
              <i data-lucide="external-link" style="width: 11px; height: 11px; margin-left: 2px;"></i>
            </span>
          </div>
        </div>
      `,p();const s=document.getElementById("btnTopDisconnect");s&&s.addEventListener("click",()=>{t.connection_id&&xe(t.connection_id)});const r=document.getElementById("btnOpenClientsModal");r&&r.addEventListener("click",Kt);const m=document.getElementById("btnOpenTopologyTop");m&&m.addEventListener("click",()=>Ce());const u=document.getElementById("btnOpenMemoryTop");u&&u.addEventListener("click",We)}else e.innerHTML=`
        <div class="status-pill-group">
          <div class="status-pill">
            <span class="status-indicator disconnected"></span>
            <span>Disconnected</span>
          </div>
          ${t.error?`<div class="stat-item" style="color: var(--text-muted);"><span>${t.error}</span></div>`:""}
        </div>
      `,$===0&&H.length===0&&we()}catch{e.innerHTML=`
      <div class="status-pill">
        <span class="status-indicator disconnected"></span>
        <span>Network Error</span>
      </div>
    `}}function nn(){const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const c=parseInt(e.value,10)||2;try{const f=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:c})});if(f.ok){const h=await f.json();k=h.limit,Ye(h.connected_count,h.limit)}}catch(f){console.error("Failed to update limit:",f)}});const n=document.getElementById("clusterConfigModal");n&&n.addEventListener("click",c=>{c.target===n&&n.classList.remove("active")});const t=document.getElementById("connSearchInput"),o=document.getElementById("btnClearConnSearch");t&&t.addEventListener("input",()=>{Q=t.value,o&&(o.style.display=Q?"flex":"none"),Y()}),o&&o.addEventListener("click",()=>{t&&(t.value="",t.focus()),Q="",o.style.display="none",Y()});const i=document.querySelectorAll("#envFilterPills .env-pill-btn");i.forEach(c=>{c.addEventListener("click",()=>{i.forEach(f=>f.classList.remove("active")),c.classList.add("active"),je=c.getAttribute("data-env")||"ALL",Y()})});const a=document.getElementById("btnReloadConfig");a&&a.addEventListener("click",async()=>{a.disabled=!0;try{const f=await(await fetch("/api/connections/reload-config",{method:"POST"})).json();alert(`Config reloaded successfully! Found ${f.total_in_file||0} connection(s) in config.`),await A()}catch(c){alert("Failed to reload config: "+c.message)}finally{a.disabled=!1}});const l=document.getElementById("connTypeSelect"),s=document.getElementById("clusterNodesGroup");l&&s&&l.addEventListener("change",()=>{s.style.display=l.value==="cluster"?"block":"none"});const r=document.getElementById("clusterTopologyModal"),m=document.getElementById("btnCloseTopologyModal");m&&m.addEventListener("click",Pe);const u=document.getElementById("btnRefreshTopologyModal");u&&u.addEventListener("click",et),r&&r.addEventListener("click",c=>{c.target===r&&Pe()});const g=document.getElementById("topologySearchInput");g&&g.addEventListener("input",()=>{Ke=g.value,ye()}),document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(f=>f.classList.remove("active")),c.classList.add("active"),Ue=c.getAttribute("data-role")||"all",ye()})});const b=document.getElementById("clientsListModal");document.getElementById("btnCloseClientsModal").addEventListener("click",ze),document.getElementById("btnRefreshClientsModal").addEventListener("click",ve),b.addEventListener("click",c=>{c.target===b&&ze()});const x=document.getElementById("clientsSearchInput");x&&x.addEventListener("input",()=>{const c=x.value.trim().toLowerCase(),f=c?N.filter(h=>h.addr&&h.addr.toLowerCase().includes(c)||h.ip&&h.ip.toLowerCase().includes(c)||h.name&&h.name.toLowerCase().includes(c)||h.cmd&&h.cmd.toLowerCase().includes(c)||h.user&&h.user.toLowerCase().includes(c)||h.id&&String(h.id).includes(c)):N;Je(f)});const C=document.getElementById("btnOpenSlowlog");C&&C.addEventListener("click",Vt);const O=document.getElementById("btnOpenMemoryModal");O&&O.addEventListener("click",We);const _=document.getElementById("slowlogModal"),j=document.getElementById("btnCloseSlowlogModal");j&&j.addEventListener("click",Re);const M=document.getElementById("btnRefreshSlowlogModal");M&&M.addEventListener("click",fe);const Ee=document.getElementById("btnClearSlowlogModal");Ee&&Ee.addEventListener("click",Wt),_&&_.addEventListener("click",c=>{c.target===_&&Re()});const ne=document.getElementById("slowlogSearchInput");ne&&ne.addEventListener("input",()=>{X=ne.value.trim(),te()}),document.querySelectorAll(".slowlog-filter-btn").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(f=>f.classList.remove("active")),c.classList.add("active"),Z=parseFloat(c.getAttribute("data-min-duration")||"0"),te()})});const oe=document.getElementById("memoryModal"),Le=document.getElementById("btnCloseMemoryModal");Le&&Le.addEventListener("click",pe);const Se=document.getElementById("btnRefreshMemoryModal");Se&&Se.addEventListener("click",Qe),oe&&oe.addEventListener("click",c=>{c.target===oe&&pe()});const T=document.getElementById("connectionModal");document.getElementById("btnAddConn").addEventListener("click",()=>{T.classList.add("active")}),document.getElementById("btnCloseModal").addEventListener("click",()=>{T.classList.remove("active")}),document.getElementById("btnCancelModal").addEventListener("click",()=>{T.classList.remove("active")}),T.addEventListener("click",c=>{c.target===T&&T.classList.remove("active")});const U=document.getElementById("keyDetailModal");document.getElementById("btnCloseDetailModal").addEventListener("click",()=>{U.classList.remove("active")}),U.addEventListener("click",c=>{c.target===U&&U.classList.remove("active")}),document.getElementById("btnCopyKeyName").addEventListener("click",()=>{I&&(navigator.clipboard.writeText(I),alert(`Copied '${I}' to clipboard!`))}),document.getElementById("btnDeleteKeyFromDetail").addEventListener("click",()=>{I&&ge(I,()=>{U.classList.remove("active"),w()})});const $e=document.getElementById("deleteKeyConfirmModal");document.getElementById("btnCloseDeleteConfirmModal").addEventListener("click",()=>{$e.classList.remove("active")}),document.getElementById("btnCancelDeleteConfirm").addEventListener("click",()=>{$e.classList.remove("active")}),document.getElementById("btnTestConnModal").addEventListener("click",async()=>{const c=document.getElementById("connHost").value.trim()||"localhost",f=parseInt(document.getElementById("connPort").value,10)||6379,h=parseInt(document.getElementById("connDb").value,10)||0,ae=document.getElementById("connUsername").value.trim()||null,se=document.getElementById("connPassword").value||null,le=document.getElementById("connTls").checked,E=document.getElementById("testResultBox"),z=document.getElementById("btnTestConnModal");z.disabled=!0,z.innerHTML="Testing...",E.className="test-result-box",E.innerHTML="";try{const R=await(await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:c,port:f,db:h,username:ae,password:se,use_tls:le})})).json();R.success?(E.className="test-result-box success",E.innerHTML=`
          <i data-lucide="check-circle-2"></i>
          <span>Connected! Latency: <strong>${R.latency_ms} ms</strong> (Redis v${R.redis_version})</span>
        `):(E.className="test-result-box error",E.innerHTML=`
          <i data-lucide="alert-circle"></i>
          <span>Failed: ${R.error||"Connection refused"}</span>
        `)}catch(W){E.className="test-result-box error",E.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Error: ${W.message}</span>
      `}finally{z.disabled=!1,z.innerHTML='<i data-lucide="zap"></i> Test Connection',p()}}),document.getElementById("connectionForm").addEventListener("submit",async c=>{c.preventDefault();const f=document.getElementById("connName").value.trim(),h=document.getElementById("connEnv").value,ae=document.getElementById("connTypeSelect").value,se=document.getElementById("connHost").value.trim()||"localhost",le=parseInt(document.getElementById("connPort").value,10)||6379,E=document.getElementById("connClusterNodes")&&document.getElementById("connClusterNodes").value.trim()||null,z=parseInt(document.getElementById("connDb").value,10)||0,W=document.getElementById("connUsername").value.trim()||null,R=document.getElementById("connPassword").value||null,tt=document.getElementById("connTls").checked,nt=document.getElementById("connAutoActivate").checked;try{if(!(await fetch(`/api/connections?auto_activate=${nt}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:f,env:h,conn_type:ae,host:se,port:le,cluster_nodes:E,db:z,username:W,password:R,use_tls:tt})})).ok)throw new Error("Failed to save connection");T.classList.remove("active"),document.getElementById("connectionForm").reset(),await A(),await L(),await w()}catch(Te){alert("Error saving: "+Te.message)}}),document.getElementById("btnRefreshStats").addEventListener("click",L);const J=document.getElementById("keySearchInput");let ie=null;J.addEventListener("input",()=>{clearTimeout(ie),ie=setTimeout(()=>{ee=J.value.trim()||"*",w()},400)}),J.addEventListener("keydown",c=>{c.key==="Enter"&&(clearTimeout(ie),ee=J.value.trim()||"*",w())}),document.querySelectorAll(".type-tab").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll(".type-tab").forEach(f=>f.classList.remove("active")),c.classList.add("active"),ce=c.getAttribute("data-type"),w()})});const ke=document.getElementById("btnScanNext");ke&&ke.addEventListener("click",()=>qe());const Me=document.getElementById("btnResetScan");Me&&Me.addEventListener("click",w),setInterval(L,15e3)}async function Fe(){Ft(),p(),nn();try{await A(),await L()}catch(n){console.error("Failed to load initial status:",n)}v.find(n=>n.is_connected&&n.is_selected)||v.find(n=>n.is_connected)?await w():we()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Fe):Fe();
