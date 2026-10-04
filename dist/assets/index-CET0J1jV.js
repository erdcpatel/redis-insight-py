(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(e,n,t=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(n).forEach(a=>{o.setAttribute(a,String(n[a]))}),t.length&&t.forEach(a=>{const i=ye(...a);o.appendChild(i)}),o};var ke=([e,n,t])=>ye(e,n,t);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=e=>Array.from(e.attributes).reduce((n,t)=>(n[t.name]=t.value,n),{}),Ae=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",De=e=>e.flatMap(Ae).map(t=>t.trim()).filter(Boolean).filter((t,o,a)=>a.indexOf(t)===o).join(" "),Ne=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(n,t,o)=>t.toUpperCase()+o.toLowerCase()),de=(e,{nameAttr:n,icons:t,attrs:o})=>{const a=e.getAttribute(n);if(a==null)return;const i=Ne(a),d=t[i];if(!d)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const s=Be(e),[l,c,m]=d,g={...c,"data-lucide":a,...o,...s},x=De(["lucide",`lucide-${a}`,s,o]);x&&Object.assign(g,{class:x});const w=ke([l,g,m]);return e.parentNode?.replaceChild(w,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=["svg",u,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=["svg",u,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=["svg",u,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=["svg",u,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=["svg",u,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=["svg",u,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=["svg",u,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=["svg",u,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=["svg",u,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=["svg",u,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=["svg",u,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=["svg",u,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=["svg",u,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=["svg",u,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=["svg",u,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=["svg",u,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=["svg",u,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=["svg",u,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=["svg",u,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=["svg",u,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=["svg",u,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=["svg",u,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=["svg",u,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=["svg",u,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=["svg",u,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=({icons:e={},nameAttr:n="data-lucide",attrs:t={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${n}]`);if(Array.from(o).forEach(a=>de(a,{nameAttr:n,icons:e,attrs:t})),n==="data-lucide"){const a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(i=>de(i,{nameAttr:"icon-name",icons:e,attrs:t})))}};let _=[],B=0,V="*",Y="all",R=!1,S=0,P=0,F=[],H=new Set,k=null,ge=null,Q=null,v=[],ve="ALL",U="",Z=null,fe="all",he="",I=2,O=0;function y(){it({icons:{Layers:qe,Plus:Qe,RefreshCw:Ye,Search:Ze,Cpu:je,Trash2:nt,Zap:st,CheckCircle2:ze,AlertCircle:Re,Database:Ue,ShieldCheck:et,Lock:Ge,ArrowDownCircle:Fe,X:at,Play:We,Copy:Oe,Clock:Pe,Edit:tt,ExternalLink:Ke,Code:He,Users:ot,Server:Xe,Network:Je,GitBranch:Ve,ArrowRightLeft:_e}})}function lt(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
            <button type="button" class="btn btn-secondary" id="btnRefreshStats" title="Ping active connection">
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
  `)}async function C(){R=!1,O++;const e=O;B=0,S=0,F=[],H.clear();const n=document.getElementById("emptyWorkspaceState"),t=document.getElementById("gridViewerContainer");n&&(n.style.display="none"),t&&(t.style.display="block"),xe(),await be(e)}async function be(e=null){if(R||B===0&&S>0)return;const n=e!==null?e:O;R=!0,ce();try{const t=`/api/keys?pattern=${encodeURIComponent(V)}&cursor=${B}&count=50${Y!=="all"?`&type=${encodeURIComponent(Y)}`:""}`,o=await fetch(t);if(!o.ok)throw new Error("Failed to scan keys");const a=await o.json();if(n!==O)return;B=a.cursor,P=a.total_in_db;const d=(a.keys||[]).filter(s=>H.has(s.name)?!1:(H.add(s.name),!0)).map(s=>({key:s.name,type:s.type,ttl_seconds:s.ttl,status:s.ttl===-1?"Persistent":s.ttl===-2?"Expired":`Expires in ${s.ttl}s`}));d.length>0&&F.push(...d),xe(),S=H.size}catch(t){console.error("Scan error:",t)}finally{n===O&&(R=!1,ce())}}function xe(){const e=document.getElementById("gridViewerContainer");if(e){if(F.length===0){e.innerHTML=`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${p(V)}</code>".
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
          ${F.map(n=>`
            <tr class="key-row" data-key="${encodeURIComponent(n.key)}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer;">
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
                <span class="btn-inspect-key" data-key="${encodeURIComponent(n.key)}">${p(n.key)}</span>
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
  `,y(),e.querySelectorAll(".key-row").forEach(n=>{n.addEventListener("click",()=>{const t=decodeURIComponent(n.getAttribute("data-key"));q(t)})}),e.querySelectorAll(".btn-delete-key-table").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const o=decodeURIComponent(n.getAttribute("data-key"));Ce(o,()=>{C()})})})}}function ce(){const e=document.getElementById("scanStatusText"),n=document.getElementById("btnScanNext"),t=B===0&&S>0||S>=P&&P>0;e&&(e.innerHTML=`
      Loaded <strong>${S}</strong> keys
      ${t?'<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>':`(Next Cursor: ${B})`}
      | DB Total: <strong>${P}</strong>
    `),n&&(n.disabled=R||t,n.innerHTML=R?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':t?'<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More',y())}async function q(e){k=e;const n=document.getElementById("keyDetailModal"),t=document.getElementById("detailKeyTitle"),o=document.getElementById("detailHeaderMeta"),a=document.getElementById("detailBodyContent");t.textContent=e,t.title=e,o.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>',a.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>',n.classList.add("active");try{let i=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(i.ok||(i=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!i.ok){let s="Key not found or could not be read";try{const l=await i.json();l&&l.detail&&(s=l.detail)}catch{}throw new Error(s)}const d=await i.json();ge=d,dt(d),rt(d)}catch(i){o.innerHTML='<span style="color: var(--accent-danger);">Error</span>',a.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Failed to inspect key</h4>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">${p(i.message)}</p>
      </div>
    `,y()}}function dt(e){const n=document.getElementById("detailHeaderMeta"),t=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",o=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;n.innerHTML=`
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
  `,y(),document.getElementById("btnEditTtl").addEventListener("click",()=>{ct(e.name,e.ttl)})}async function ct(e,n){const t=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,n>0?n:"3600");if(t===null)return;const o=parseInt(t.trim(),10);if(isNaN(o)){alert("Please enter a valid integer.");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:o})})).ok)throw new Error("Failed to update TTL");q(e)}catch(a){alert("Error updating TTL: "+a.message)}}function rt(e){const n=document.getElementById("detailBodyContent"),t=e.type.toLowerCase();if(t==="hash"){const o=e.fields||[];n.innerHTML=`
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
            ${we(o)}
          </tbody>
        </table>
      </div>
    `,y(),pt(e.name,o);return}if(e.is_json||t.includes("json")){const o=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";n.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${p(o)}</div>
    `,y(),document.getElementById("btnCopyJsonValue").addEventListener("click",()=>{navigator.clipboard.writeText(o),alert("JSON copied to clipboard!")});return}if(t==="string"){n.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${p(e.value||"")}</div>
    `,y(),document.getElementById("btnCopyStringValue").addEventListener("click",()=>{navigator.clipboard.writeText(e.value||""),alert("Value copied to clipboard!")});return}if(Array.isArray(e.value)){const o=t==="zset";n.innerHTML=`
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
                  ${p(o?a.member:String(a))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;return}n.innerHTML=`<div class="json-view-box">${p(String(e.value))}</div>`}function we(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(n=>`
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
        ${p(n.field)}
      </td>
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
        ${p(n.value)}
      </td>
      <td style="padding: 0.6rem 1rem; text-align: right;">
        <button type="button" class="btn-icon danger btn-delete-hash-field" data-field="${encodeURIComponent(n.field)}" title="Delete field">
          <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
        </button>
      </td>
    </tr>
  `).join("")}function pt(e,n){const t=document.getElementById("hashFieldSearchInput"),o=document.getElementById("hashFieldCountText"),a=document.getElementById("hashFieldsTableBody");t&&t.addEventListener("input",()=>{const d=t.value.trim().toLowerCase(),s=d?n.filter(l=>l.field.toLowerCase().includes(d)||l.value.toLowerCase().includes(d)):n;a.innerHTML=we(s),o.textContent=`${s.length} of ${n.length} fields`,y(),re(e)});const i=document.getElementById("btnAddHashField");i&&i.addEventListener("click",async()=>{const d=prompt(`Enter field name for hash '${e}':`);if(!d)return;const s=prompt(`Enter value for field '${d}':`);if(s!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:d,value:s})})).ok)throw new Error("Failed to set field");q(e)}catch(l){alert("Error setting field: "+l.message)}}),re(e)}function re(e){document.querySelectorAll(".btn-delete-hash-field").forEach(n=>{n.addEventListener("click",async()=>{const t=decodeURIComponent(n.getAttribute("data-field"));if(confirm(`Delete field '${t}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(t)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");q(e)}catch(o){alert("Error: "+o.message)}})})}function p(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Ce(e,n){Q=n;const t=document.getElementById("deleteKeyConfirmModal"),o=document.getElementById("deleteKeyTargetName"),a=document.getElementById("inputConfirmDelete"),i=document.getElementById("btnSubmitDeleteKey");o.textContent=e,a.value="",i.disabled=!0,t.classList.add("active"),a.focus(),a.oninput=()=>{const d=a.value.trim().toUpperCase();i.disabled=d!=="CONFIRM"&&a.value.trim()!==e},i.onclick=async()=>{i.disabled=!0,i.textContent="Deleting...";try{const d=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),s=await d.json();if(!d.ok)throw new Error(s.detail||"Failed to delete key");t.classList.remove("active"),Q&&Q()}catch(d){alert("Error deleting key: "+d.message)}finally{i.disabled=!1,i.textContent="Delete Permanently"}}}async function mt(){document.getElementById("clientsListModal").classList.add("active"),await te()}function pe(){document.getElementById("clientsListModal").classList.remove("active")}async function te(){const e=document.getElementById("clientsTableContainer"),n=document.getElementById("clientsCountBadge"),t=document.getElementById("clientsQuickStats"),o=document.getElementById("clientsSearchInput");e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',y();try{const a=await fetch("/api/clients");if(!a.ok)throw new Error("Failed to load connected clients");_=await a.json(),n&&(n.textContent=_.length),t&&(t.textContent=`${_.length} total connections`),o&&(o.value=""),Ee(_)}catch(a){e.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
        <h4>Error loading clients</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${a.message}</p>
      </div>
    `,y()}}function Ee(e){const n=document.getElementById("clientsTableContainer");if(!e||e.length===0){n.innerHTML=`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="users" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.4;"></i>
        <p>No matching connected clients found.</p>
      </div>
    `,y();return}n.innerHTML=`
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
                <span>${p(t.name)}</span>
                ${t.flags&&t.flags.includes("O")?'<span class="badge-db" style="background: rgba(234, 179, 8, 0.15); color: #fde047; font-size: 0.65rem;">MONITOR</span>':""}
              </div>
              <div class="client-sub-text">User: ${p(t.user)} | Flags: ${p(t.flags||"none")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div class="client-ip-cell">${p(t.addr)}</div>
              <div class="client-sub-text">Target: ${p(t.laddr||"localhost")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem;">
              DB${t.db}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <span class="client-cmd-badge">${p(t.cmd||"idle")}</span>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
              ${t.age_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: ${t.idle>300?"var(--accent-warning)":"var(--accent-success)"};">
              ${t.idle_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; text-align: right;">
              <button type="button" class="btn-icon danger btn-kill-client" data-id="${t.id}" data-addr="${p(t.addr)}" title="Disconnect client">
                <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
              </button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,y(),n.querySelectorAll(".btn-kill-client").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-id"),a=t.getAttribute("data-addr");ut(o,a)})})}async function ut(e,n){if(confirm(`Are you sure you want to disconnect client #${e} (${n})?`))try{const t=await fetch(`/api/clients/${e}`,{method:"DELETE"}),o=await t.json();if(!t.ok)throw new Error(o.detail||"Failed to disconnect client");await te(),await L()}catch(t){alert("Error disconnecting client: "+t.message)}}async function A(){const e=document.getElementById("connectionsList");try{const[n,t]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]);v=await n.json()||[],t.ok&&(I=(await t.json()).limit||2),K()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function Le(e,n){const t=document.getElementById("connectedCountDisplay"),o=document.getElementById("connLimitDisplay"),a=document.getElementById("connLimitSelect"),i=document.getElementById("limitProgressDots"),d=document.getElementById("limitCountPill");if(t&&(t.textContent=e),o&&(o.textContent=n),a&&String(a.value)!==String(n)&&(a.value=String(n)),d&&(e>=n&&n>0?(d.classList.add("at-limit"),d.title="Connection limit reached"):(d.classList.remove("at-limit"),d.title=`${e} of ${n} connections in use`)),i){let s="";for(let l=0;l<n;l++){const c=l<e;s+=`<span class="limit-slot-dot ${c?"filled":"empty"}" title="Slot ${l+1}: ${c?"Connected":"Available"}"></span>`}i.innerHTML=s}}function K(){const e=document.getElementById("connectionsList");if(!e)return;const n=document.getElementById("totalConnCountBadge");n&&(n.textContent=v.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(s=>{const l=s.getAttribute("data-env");let c=0;l==="ALL"?c=v.length:c=v.filter(m=>(m.env||"LOCAL").toUpperCase()===l).length,s.textContent=`${l} (${c})`});const o=(U||"").trim().toLowerCase(),a=ve,i=v.filter(s=>{if(a!=="ALL"&&(s.env||"LOCAL").toUpperCase()!==a)return!1;if(o){const l=(s.name||"").toLowerCase().includes(o),c=(s.host||"").toLowerCase().includes(o),m=(s.env||"").toLowerCase().includes(o),g=(s.conn_type||"").toLowerCase().includes(o);if(!l&&!c&&!m&&!g)return!1}return!0});i.sort((s,l)=>{const c=s.is_connected?1:0,m=l.is_connected?1:0;if(m!==c)return m-c;const g=s.is_selected?1:0,x=l.is_selected?1:0;return x!==g?x-g:(s.name||"").localeCompare(l.name||"")});const d=v.filter(s=>s.is_connected).length;if(Le(d,I),i.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${o?`No results found for "${p(o)}"`:`No connections configured in ${p(a)}`}
        </span>
      </div>
    `,y();return}e.innerHTML=i.map(s=>{const l=(s.env||"LOCAL").toUpperCase(),c=`badge-env-${l.toLowerCase()}`,m=s.conn_type==="cluster",g=s.conn_type==="sentinel",x=s.source==="config",w=!!s.is_connected,b=!!s.is_selected;return`
      <div class="conn-card ${w?"is-connected":""} ${b?"selected active":""}" data-id="${s.id}" title="Click to review config & connection options">
        
        <!-- Header: Lead Indicator + Name + Status Pill -->
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${b?`
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
            <span class="conn-name" title="${p(s.name)}">${p(s.name)}</span>
          </div>

          <div class="conn-status-badge-wrap">
            ${b?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:w?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <!-- Sub-row: Endpoint on left, Badges on right -->
        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${p(s.host)}:${s.port}">
            <i data-lucide="${m?"network":g?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${p(s.host)}:${s.port}</span>
          </div>

          <div class="conn-tags">
            <span class="badge-env ${c}">${l}</span>
            ${m?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${g?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!m&&!g?`<span class="badge-db">DB${s.db}</span>`:""}
            ${s.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${s.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${x?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <!-- Floating Quick Action Toolbar on Hover -->
        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${w?`
            ${b?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${s.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${s.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${m||w?`
              <button type="button" class="btn-hover-action btn-view-topology-card" data-id="${s.id}" title="View topology & nodes">
                <i data-lucide="layers" style="width: 11px; height: 11px;"></i>
              </button>
            `:""}
          `:`
            <button type="button" class="btn-hover-action btn-hover-connect btn-card-open-config" data-id="${s.id}" title="Review config & Connect">
              <i data-lucide="play" style="width: 11px; height: 11px;"></i>
              <span>Connect</span>
            </button>
            ${x?"":`
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${s.id}" data-name="${p(s.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>

      </div>
    `}).join(""),y(),e.querySelectorAll(".conn-card").forEach(s=>{s.addEventListener("click",l=>{if(l.target.closest(".btn-delete-conn")||l.target.closest(".btn-view-topology-card")||l.target.closest(".btn-card-disconnect")||l.target.closest(".btn-card-select")||l.target.closest(".btn-card-open-config"))return;const c=s.getAttribute("data-id"),m=v.find(g=>g.id===c);m&&X(m)})}),e.querySelectorAll(".btn-card-disconnect").forEach(s=>{s.addEventListener("click",async l=>{l.stopPropagation();const c=s.getAttribute("data-id");await ne(c)})}),e.querySelectorAll(".btn-card-select").forEach(s=>{s.addEventListener("click",async l=>{l.stopPropagation();const c=s.getAttribute("data-id");await Te(c)})}),e.querySelectorAll(".btn-card-open-config").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const c=s.getAttribute("data-id"),m=v.find(g=>g.id===c);m&&X(m)})}),e.querySelectorAll(".btn-view-topology-card").forEach(s=>{s.addEventListener("click",async l=>{l.stopPropagation();const c=s.getAttribute("data-id");await ae(c)})}),e.querySelectorAll(".btn-delete-conn").forEach(s=>{s.addEventListener("click",async l=>{l.stopPropagation();const c=s.getAttribute("data-id"),m=s.getAttribute("data-name");confirm(`Are you sure you want to delete '${m}'?`)&&await vt(c)})})}function yt(e){if(!e)return[];if(Array.isArray(e))return e.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n));if(typeof e=="string")try{const n=JSON.parse(e);if(Array.isArray(n))return n.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t))}catch{return e.split(",").map(t=>t.trim()).filter(Boolean)}return[]}function X(e){const n=document.getElementById("clusterConfigModal"),t=document.getElementById("cfgModalTitle"),o=document.getElementById("cfgModalSubtitle"),a=document.getElementById("cfgModalBody"),i=document.getElementById("cfgModalFooter");t.textContent=e.name||"Cluster Configuration",o.textContent="Review configuration before connecting";const d=!!e.is_connected,s=!!e.is_selected,l=e.conn_type==="cluster",c=yt(e.cluster_nodes),m=v.filter(T=>T.is_connected).length,g=!d&&m>=I;a.innerHTML=`
    <div class="config-status-banner ${d?"connected":"disconnected"}">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="${d?"check-circle-2":"alert-circle"}" style="width: 18px; height: 18px;"></i>
        <span>${d?"Connected & Live":"Not Connected"}</span>
      </div>
      <div>
        ${s?'<span class="badge-selected-cluster">ACTIVE / VIEWING KEYS</span>':d?'<span class="badge-connected-cluster">CONNECTED</span>':'<span style="font-size: 0.75rem; color: var(--text-muted);">Ready to connect</span>'}
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
      ${l&&(c.length>0||e.cluster_nodes)?`
        <div class="config-grid-row config-grid-seeds-row">
          <span class="config-label" style="padding-top: 2px;">
            Seed Endpoints ${c.length>0?`(${c.length})`:""}
          </span>
          <div class="config-seeds-container">
            ${c.length>0?c.map(T=>`
                  <span class="seed-node-pill" title="${p(T)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${p(T)}
                  </span>
                `).join(""):`<span class="seed-node-pill">${p(e.cluster_nodes)}</span>`}
          </div>
        </div>
      `:""}
      ${l?"":`
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
      <span>Connected Limit: <strong>${m} of ${I}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${g?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${I} maximum). Please disconnect a connected cluster first or increase the limit.</span>
      </div>
    `:""}

    <div id="cfgTestResultBox" class="test-result-box" style="margin-top: 0.65rem;"></div>
  `,d?i.innerHTML=`
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
    `:i.innerHTML=`
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
    `,y(),n.classList.add("active");const x=document.getElementById("btnCloseConfigModal");x&&(x.onclick=()=>n.classList.remove("active"));const w=document.getElementById("btnConnectFromConfig");w&&(w.onclick=async()=>{await $e(e.id),n.classList.remove("active")});const b=document.getElementById("btnDisconnectFromConfig");b&&(b.onclick=async()=>{await ne(e.id),n.classList.remove("active")});const $=document.getElementById("btnSelectFromConfig");$&&($.onclick=async()=>{await Te(e.id),n.classList.remove("active")});const z=document.getElementById("btnTopologyFromConfig");z&&(z.onclick=async()=>{n.classList.remove("active"),await ae(e.id)});const M=document.getElementById("btnTestFromConfig");M&&(M.onclick=async()=>{await gt(e)})}async function gt(e){const n=document.getElementById("cfgTestResultBox"),t=document.getElementById("btnTestFromConfig");t&&(t.disabled=!0,t.innerHTML="Testing..."),n&&(n.className="test-result-box",n.innerHTML="");try{const a=await(await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:e.host,port:e.port,db:e.db||0,username:e.username||null,password:null,use_tls:e.use_tls||!1,conn_type:e.conn_type||"standalone",cluster_nodes:e.cluster_nodes||null})})).json();a.success?(n.className="test-result-box success",n.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${a.latency_ms} ms</strong> (Redis v${a.redis_version})</span>
      `):(n.className="test-result-box error",n.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${a.error||"Connection refused"}</span>
      `)}catch(o){n&&(n.className="test-result-box error",n.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${o.message}</span>`)}finally{t&&(t.disabled=!1,t.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),y()}}async function $e(e){if(v.find(t=>t.id===e),v.filter(t=>t.is_connected&&t.id!==e).length>=I){alert(`Connection limit reached: Maximum ${I} connected cluster(s) allowed at a time.
Please disconnect an existing cluster first or increase the limit in the sidebar.`);return}try{const t=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),o=await t.json();if(!t.ok)throw new Error(o.detail||"Failed to connect to cluster");await A(),await L(),await C()}catch(t){alert("Connection error: "+t.message)}}async function ne(e){try{const n=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),t=await n.json();if(!n.ok)throw new Error(t.detail||"Failed to disconnect cluster");await A(),await L(),v.some(a=>a.is_connected&&a.id!==e)?await C():(F=[],H.clear(),S=0,B=0,P=0,oe())}catch(n){alert("Disconnect error: "+n.message)}}async function Te(e){try{const n=await fetch(`/api/connections/${e}/select`,{method:"POST"}),t=await n.json();if(!n.ok)throw new Error(t.detail||"Failed to switch cluster");const o=document.getElementById("keyDetailModal");o&&o.classList.remove("active"),k=null,ge=null,await A(),await L(),await C()}catch(n){alert("Switch error: "+n.message)}}function oe(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const n=document.getElementById("emptyWorkspaceState"),t=document.getElementById("gridViewerContainer");n&&(n.style.display="flex"),t&&(t.style.display="none");const o=document.getElementById("btnConnectFirstAvailable");o&&(o.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${v.length})`,v.length>0&&(o.onclick=()=>X(v[0]))),y()}async function vt(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");await A(),await L(),await C()}catch(n){alert("Delete error: "+n.message)}}async function ae(e=null){const n=document.getElementById("clusterTopologyModal");if(n){if(n.classList.add("active"),e){const t=document.querySelector(`.conn-card[data-id="${e}"]`);t&&!t.classList.contains("active")&&await $e(e)}await Se()}}function me(){const e=document.getElementById("clusterTopologyModal");e&&e.classList.remove("active")}async function Se(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),n=document.getElementById("topologyNodesCountBadge"),t=document.getElementById("topologyEnvBadge"),o=v.find(a=>a.is_active);if(o&&t){const a=(o.env||"LOCAL").toUpperCase();t.textContent=a,t.className=`badge-env badge-env-${a.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,y());try{const a=await fetch("/api/topology");if(!a.ok)throw new Error("Failed to load cluster topology");const i=await a.json();Z=i,n&&(n.textContent=`${i.total_nodes} Node${i.total_nodes!==1?"s":""}`),ft(i),ee()}catch(a){e&&(e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${a.message}</p>
        </div>
      `,y())}}function ft(e){const n=document.getElementById("topologyStatsGrid");if(!n)return;const t=e.is_cluster,o=(e.cluster_state||"").toLowerCase()==="ok"||!t;n.innerHTML=`
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
  `}function ee(){const e=document.getElementById("topologyTableContainer");if(!e||!Z)return;const n=Z.nodes||[],t=(he||"").trim().toLowerCase(),o=fe,a=n.filter(i=>{if(o!=="all"&&i.role.toLowerCase()!==o)return!1;if(t){const d=(i.addr||"").toLowerCase().includes(t),s=(i.id||"").toLowerCase().includes(t),l=(i.ip||"").toLowerCase().includes(t),c=(i.slots||"").toLowerCase().includes(t);if(!d&&!s&&!l&&!c)return!1}return!0});if(a.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
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
        ${a.map(i=>{const d=i.role==="master",s=(i.link_state||"connected").toLowerCase()==="connected",l=i.id?i.id.length>12?`${i.id.substring(0,10)}...`:i.id:"N/A",c=i.slots?`${i.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${i.slot_count||0} slots)</span>`:d?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${p(i.id||"")}">${p(l)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${d?"role-badge-master":"role-badge-replica"}">${i.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${p(i.addr||`${i.ip}:${i.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${s?"connected":"disconnected"}"></span>
                <span style="color: ${s?"var(--accent-success)":"var(--accent-danger)"};">${i.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${c}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                ${i.master_id?`<span title="${p(i.master_id)}">↳ ${p(i.master_id.substring(0,8))}...</span>`:"—"}
              </td>
              <td style="padding: 0.65rem 0.85rem; text-align: right; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
                ${(i.flags||[]).join(", ")||"none"}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,y()}async function L(){const e=document.getElementById("topStatsContainer");try{const t=await(await fetch("/api/status")).json();if(t.connected){const o=v.find(m=>m.is_selected)||v.find(m=>m.id===t.connection_id)||v.find(m=>m.is_connected),a=o&&o.conn_type==="cluster"||t.cluster_nodes&&t.cluster_nodes.length>0||t.is_cluster,i=t.cluster_state||"ok",d=o&&o.cluster_nodes?"6":t.cluster_nodes_count||1;e.innerHTML=`
        <div class="status-pill-group">
          <div class="status-pill">
            <span class="status-indicator connected"></span>
            <span>
              ${p(t.connection_name||"Connected")}
              <span style="color: var(--text-muted); font-size: 0.75rem; margin-left: 4px;">(${t.host}:${t.port} ${a?"":`/ DB${t.db}`})</span>
            </span>
          </div>

          <button type="button" class="btn-top-disconnect" id="btnTopDisconnect" title="Disconnect ${p(t.connection_name||"cluster")}">
            <i data-lucide="x" style="width: 12px; height: 12px;"></i>
            Disconnect
          </button>

          <div class="stat-item stat-item-clickable" id="btnOpenTopologyTop" title="Click to view cluster & node topology">
            <span>${a?"Cluster:":"Topology:"}</span>
            <span class="stat-value link-highlight" style="color: ${a?"#a78bfa":"var(--accent-primary)"};">
              ${a?`${i.toUpperCase()} (${d} Nodes)`:`1 Node (DB${t.db})`}
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

          <div class="stat-item">
            <span>Memory:</span>
            <span class="stat-value">${t.used_memory_human||"N/A"}</span>
          </div>

          <div class="stat-item stat-item-clickable" id="btnOpenClientsModal" title="Click to view all connected clients details">
            <span>Clients:</span>
            <span class="stat-value link-highlight">
              ${t.connected_clients||1}
              <i data-lucide="external-link" style="width: 11px; height: 11px; margin-left: 2px;"></i>
            </span>
          </div>
        </div>
      `,y();const s=document.getElementById("btnTopDisconnect");s&&s.addEventListener("click",()=>{t.connection_id&&ne(t.connection_id)});const l=document.getElementById("btnOpenClientsModal");l&&l.addEventListener("click",mt);const c=document.getElementById("btnOpenTopologyTop");c&&c.addEventListener("click",()=>ae())}else e.innerHTML=`
        <div class="status-pill-group">
          <div class="status-pill">
            <span class="status-indicator disconnected"></span>
            <span>Disconnected</span>
          </div>
          ${t.error?`<div class="stat-item" style="color: var(--text-muted);"><span>${t.error}</span></div>`:""}
        </div>
      `,S===0&&F.length===0&&oe()}catch{e.innerHTML=`
      <div class="status-pill">
        <span class="status-indicator disconnected"></span>
        <span>Network Error</span>
      </div>
    `}}function ht(){const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const r=parseInt(e.value,10)||2;try{const h=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:r})});if(h.ok){const f=await h.json();I=f.limit,Le(f.connected_count,f.limit)}}catch(h){console.error("Failed to update limit:",h)}});const n=document.getElementById("clusterConfigModal");n&&n.addEventListener("click",r=>{r.target===n&&n.classList.remove("active")});const t=document.getElementById("connSearchInput"),o=document.getElementById("btnClearConnSearch");t&&t.addEventListener("input",()=>{U=t.value,o&&(o.style.display=U?"flex":"none"),K()}),o&&o.addEventListener("click",()=>{t&&(t.value="",t.focus()),U="",o.style.display="none",K()});const a=document.querySelectorAll("#envFilterPills .env-pill-btn");a.forEach(r=>{r.addEventListener("click",()=>{a.forEach(h=>h.classList.remove("active")),r.classList.add("active"),ve=r.getAttribute("data-env")||"ALL",K()})});const i=document.getElementById("btnReloadConfig");i&&i.addEventListener("click",async()=>{i.disabled=!0;try{const h=await(await fetch("/api/connections/reload-config",{method:"POST"})).json();alert(`Config reloaded successfully! Found ${h.total_in_file||0} connection(s) in config.`),await A()}catch(r){alert("Failed to reload config: "+r.message)}finally{i.disabled=!1}});const d=document.getElementById("connTypeSelect"),s=document.getElementById("clusterNodesGroup");d&&s&&d.addEventListener("change",()=>{s.style.display=d.value==="cluster"?"block":"none"});const l=document.getElementById("clusterTopologyModal"),c=document.getElementById("btnCloseTopologyModal");c&&c.addEventListener("click",me);const m=document.getElementById("btnRefreshTopologyModal");m&&m.addEventListener("click",Se),l&&l.addEventListener("click",r=>{r.target===l&&me()});const g=document.getElementById("topologySearchInput");g&&g.addEventListener("input",()=>{he=g.value,ee()}),document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(h=>h.classList.remove("active")),r.classList.add("active"),fe=r.getAttribute("data-role")||"all",ee()})});const x=document.getElementById("clientsListModal");document.getElementById("btnCloseClientsModal").addEventListener("click",pe),document.getElementById("btnRefreshClientsModal").addEventListener("click",te),x.addEventListener("click",r=>{r.target===x&&pe()});const w=document.getElementById("clientsSearchInput");w&&w.addEventListener("input",()=>{const r=w.value.trim().toLowerCase(),h=r?_.filter(f=>f.addr&&f.addr.toLowerCase().includes(r)||f.ip&&f.ip.toLowerCase().includes(r)||f.name&&f.name.toLowerCase().includes(r)||f.cmd&&f.cmd.toLowerCase().includes(r)||f.user&&f.user.toLowerCase().includes(r)||f.id&&String(f.id).includes(r)):_;Ee(h)});const b=document.getElementById("connectionModal");document.getElementById("btnAddConn").addEventListener("click",()=>{b.classList.add("active")}),document.getElementById("btnCloseModal").addEventListener("click",()=>{b.classList.remove("active")}),document.getElementById("btnCancelModal").addEventListener("click",()=>{b.classList.remove("active")}),b.addEventListener("click",r=>{r.target===b&&b.classList.remove("active")});const $=document.getElementById("keyDetailModal");document.getElementById("btnCloseDetailModal").addEventListener("click",()=>{$.classList.remove("active")}),$.addEventListener("click",r=>{r.target===$&&$.classList.remove("active")}),document.getElementById("btnCopyKeyName").addEventListener("click",()=>{k&&(navigator.clipboard.writeText(k),alert(`Copied '${k}' to clipboard!`))}),document.getElementById("btnDeleteKeyFromDetail").addEventListener("click",()=>{k&&Ce(k,()=>{$.classList.remove("active"),C()})});const z=document.getElementById("deleteKeyConfirmModal");document.getElementById("btnCloseDeleteConfirmModal").addEventListener("click",()=>{z.classList.remove("active")}),document.getElementById("btnCancelDeleteConfirm").addEventListener("click",()=>{z.classList.remove("active")}),document.getElementById("btnTestConnModal").addEventListener("click",async()=>{const r=document.getElementById("connHost").value.trim()||"localhost",h=parseInt(document.getElementById("connPort").value,10)||6379,f=parseInt(document.getElementById("connDb").value,10)||0,G=document.getElementById("connUsername").value.trim()||null,J=document.getElementById("connPassword").value||null,W=document.getElementById("connTls").checked,E=document.getElementById("testResultBox"),D=document.getElementById("btnTestConnModal");D.disabled=!0,D.innerHTML="Testing...",E.className="test-result-box",E.innerHTML="";try{const N=await(await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:r,port:h,db:f,username:G,password:J,use_tls:W})})).json();N.success?(E.className="test-result-box success",E.innerHTML=`
          <i data-lucide="check-circle-2"></i>
          <span>Connected! Latency: <strong>${N.latency_ms} ms</strong> (Redis v${N.redis_version})</span>
        `):(E.className="test-result-box error",E.innerHTML=`
          <i data-lucide="alert-circle"></i>
          <span>Failed: ${N.error||"Connection refused"}</span>
        `)}catch(j){E.className="test-result-box error",E.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Error: ${j.message}</span>
      `}finally{D.disabled=!1,D.innerHTML='<i data-lucide="zap"></i> Test Connection',y()}}),document.getElementById("connectionForm").addEventListener("submit",async r=>{r.preventDefault();const h=document.getElementById("connName").value.trim(),f=document.getElementById("connEnv").value,G=document.getElementById("connTypeSelect").value,J=document.getElementById("connHost").value.trim()||"localhost",W=parseInt(document.getElementById("connPort").value,10)||6379,E=document.getElementById("connClusterNodes")&&document.getElementById("connClusterNodes").value.trim()||null,D=parseInt(document.getElementById("connDb").value,10)||0,j=document.getElementById("connUsername").value.trim()||null,N=document.getElementById("connPassword").value||null,Ie=document.getElementById("connTls").checked,Me=document.getElementById("connAutoActivate").checked;try{if(!(await fetch(`/api/connections?auto_activate=${Me}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h,env:f,conn_type:G,host:J,port:W,cluster_nodes:E,db:D,username:j,password:N,use_tls:Ie})})).ok)throw new Error("Failed to save connection");b.classList.remove("active"),document.getElementById("connectionForm").reset(),await A(),await L(),await C()}catch(le){alert("Error saving: "+le.message)}}),document.getElementById("btnRefreshStats").addEventListener("click",L);const M=document.getElementById("keySearchInput");let T=null;M.addEventListener("input",()=>{clearTimeout(T),T=setTimeout(()=>{V=M.value.trim()||"*",C()},400)}),M.addEventListener("keydown",r=>{r.key==="Enter"&&(clearTimeout(T),V=M.value.trim()||"*",C())}),document.querySelectorAll(".type-tab").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll(".type-tab").forEach(h=>h.classList.remove("active")),r.classList.add("active"),Y=r.getAttribute("data-type"),C()})});const se=document.getElementById("btnScanNext");se&&se.addEventListener("click",()=>be());const ie=document.getElementById("btnResetScan");ie&&ie.addEventListener("click",C),setInterval(L,15e3)}async function ue(){lt(),y(),ht();try{await A(),await L()}catch(n){console.error("Failed to load initial status:",n)}v.find(n=>n.is_connected&&n.is_selected)||v.find(n=>n.is_connected)?await C():oe()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ue):ue();
