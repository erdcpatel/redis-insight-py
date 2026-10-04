(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=(e,t,n=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{o.setAttribute(a,String(t[a]))}),n.length&&n.forEach(a=>{const i=Ct(...a);o.appendChild(i)}),o};var Ht=([e,t,n])=>Ct(e,t,n);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),Ot=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",jt=e=>e.flatMap(Ot).map(n=>n.trim()).filter(Boolean).filter((n,o,a)=>a.indexOf(n)===o).join(" "),Kt=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,o)=>n.toUpperCase()+o.toLowerCase()),ut=(e,{nameAttr:t,icons:n,attrs:o})=>{const a=e.getAttribute(t);if(a==null)return;const i=Kt(a),r=n[i];if(!r)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const s=Ft(e),[d,m,y]=r,h={...m,"data-lucide":a,...o,...s},b=jt(["lucide",`lucide-${a}`,s,o]);b&&Object.assign(h,{class:b});const p=Ht([d,h,y]);return e.parentNode?.replaceChild(p,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=["svg",v,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=["svg",v,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=["svg",v,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=["svg",v,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=["svg",v,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=["svg",v,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=["svg",v,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=["svg",v,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=["svg",v,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=["svg",v,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",v,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",v,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",v,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",v,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",v,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",v,[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",v,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",v,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",v,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",v,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",v,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",v,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",v,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",v,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",v,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",v,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",v,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",v,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",v,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",v,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",v,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",v,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",v,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",v,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",v,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",v,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(a=>ut(a,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(i=>ut(i,{nameAttr:"icon-name",icons:e,attrs:n})))}};let te=[],ne=[],be=0,xe="",ae="all",yt=null,V=null,Be=!1,K=0,U="*",se="all",q=!1,le=0,D=!1,Fe=0,Z=null,X=[],ie=new Set,Q=null,Et=null,Ae=null,E=[],Lt="ALL",fe="",Ne=null,St="all",$t="",G=2,j=0,oe=!1,P=!1,we=!1,F=null,me={};const kt=2e4;function f(){kn({icons:{Layers:rn,Plus:un,RefreshCw:gn,Search:fn,Cpu:nn,Trash2:wn,Zap:$n,CheckCircle2:Zt,AlertCircle:Yt,Database:on,ShieldCheck:hn,Lock:dn,ArrowDownCircle:Qt,X:Sn,Play:mn,Copy:tn,Clock:Xt,Edit:bn,ExternalLink:an,Code:en,Users:Ln,Server:vn,Network:cn,GitBranch:ln,ArrowRightLeft:Vt,Activity:Ut,PieChart:Gt,AlertTriangle:En,TrendingUp:Cn,BarChart2:qt,Power:yn,ChevronLeft:Jt,ChevronRight:Wt,PanelLeft:pn,FastForward:sn,Square:xn}})}function Mn(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
              <button type="button" class="regex-toggle" id="btnRegexToggle" title="Regex mode: match key names with a regular expression (e.g. ^user:\\d+:profile$)">.*</button>
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
                Safe SCAN (non-blocking)
              </span>
              <span id="scanStatusText">Scanning keys...</span>
            </div>

            <div style="display: flex; align-items: center; gap: 0.5rem;" id="scanActionsGroup">
              <button type="button" class="btn btn-secondary" id="btnScanNext" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">
                <i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i>
                Load More
              </button>
              <button type="button" class="btn btn-secondary" id="btnScanAll" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" title="Keep scanning every node until the scan completes (Stop at any time)">
                <i data-lucide="fast-forward" style="width: 13px; height: 13px;"></i>
                Scan All
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
  `)}async function N(){q=!1,j++;const e=j;K=0,D=!1,le=0,X=[],ie.clear(),P=!1,we=!1,F=null,me={};const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="none"),n&&(n.style.display="block"),ze(),await Oe(e)}function Mt(e){if(e==null)return!0;const t=String(e).trim();if(t===""||t==="0")return!0;if(t.startsWith("{"))try{return Object.values(JSON.parse(t)).every(n=>Number(n)===0)}catch{return!1}return!1}function It(e){const t=String(e??"").trim();if(t.startsWith("{"))try{const n=Object.values(JSON.parse(t));return`${n.filter(a=>Number(a)!==0).length} of ${n.length} nodes still scanning`}catch{return"more keys available"}return"more keys available"}function Re(){return U&&U!=="*"||se!=="all"}function ve(){const e=oe&&U!=="*"?`regex <code>${c(U)}</code>`:`"<code>${c(U)}</code>"`;return se!=="all"?`${e} (type: ${c(se)})`:e}async function In(){if(P){P=!1,pe();return}if(D||q||F)return;const e=j;for(P=!0,we=!1,pe();P&&!D&&e===j;){if(ie.size>=kt){we=!0;break}if(!await Oe(e,1e3))break}e===j&&(P=!1,pe())}function Tn(){return!!(Z&&Z.is_cluster)||String(K??"").trim().startsWith("{")}async function Oe(e=null,t=50){if(q||D)return!1;const n=e!==null?e:j;q=!0,pe();try{const o=`/api/keys?pattern=${encodeURIComponent(U)}&cursor=${encodeURIComponent(String(K??"0"))}&count=${t}${se!=="all"?`&type=${encodeURIComponent(se)}`:""}${oe?"&regex=true":""}`,a=await fetch(o);if(!a.ok){let d="Failed to scan keys";try{const m=await a.json();m&&m.detail&&(d=typeof m.detail=="string"?m.detail:JSON.stringify(m.detail))}catch{}throw new Error(d)}const i=await a.json();if(n!==j)return!1;F=null,K=i.cursor,D=Mt(K),Fe=i.total_in_db;const r=(i.keys||[]).filter(d=>ie.has(d.name)?!1:(ie.add(d.name),!0));r.forEach(d=>{d.node&&(me[d.node]=(me[d.node]||0)+1)});const s=r.map(d=>({key:d.name,type:d.type,ttl_seconds:d.ttl,status:d.ttl===-1?"Persistent":d.ttl===-2?"Expired":`Expires in ${d.ttl}s`}));return s.length>0&&X.push(...s),le=ie.size,ze(),Gn(),!0}catch(o){return console.error("Scan error:",o),n===j&&(F=o.message||"Failed to scan keys",P=!1,ze()),!1}finally{n===j&&(q=!1,pe())}}function ze(){const e=document.getElementById("gridViewerContainer");if(e){if(X.length===0){const t=!D&&Mt(K);e.innerHTML=F?`
      <div style="padding: 3rem; text-align: center; color: var(--accent-danger); font-size: 0.85rem;">
        ${c(F)}
      </div>
    `:D?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching ${ve()} — the whole keyspace was scanned.
      </div>
    `:t?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching ${ve()}...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for ${ve()} in the part of the keyspace scanned so far.<br>
        The scan is not finished — click <strong>Load More</strong> or <strong>Scan All</strong> to keep scanning.
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
          ${X.map(t=>`
            <tr class="key-row" data-key="${encodeURIComponent(t.key)}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer;">
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
                <span class="btn-inspect-key" data-key="${encodeURIComponent(t.key)}">${c(t.key)}</span>
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
  `,f(),e.querySelectorAll(".key-row").forEach(t=>{t.addEventListener("click",()=>{const n=decodeURIComponent(t.getAttribute("data-key"));ue(n)})}),e.querySelectorAll(".btn-delete-key-table").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const o=decodeURIComponent(t.getAttribute("data-key"));je(o,()=>{N()})})})}}function pe(){const e=document.getElementById("scanStatusText"),t=document.getElementById("btnScanNext"),n=D,o=document.getElementById("btnScanAll");if(e){const a=`${Tn()?"Cluster Total":"DB Total"}: <strong>${Number(Fe||0).toLocaleString()}</strong>`,i=we&&!n?`<span style="color: var(--accent-warning);">(Scan All stopped at ${kt.toLocaleString()} loaded keys — refine the pattern or use Load More)</span>`:n?`<span style="color: var(--accent-success); margin-left: 6px;">(${Re()?"scan complete":"All Keys Loaded"})</span>`:`<span style="color: var(--text-muted);">(${P?"scanning all · ":""}${c(It(K))})</span>`;F?e.innerHTML=`<span style="color: var(--accent-danger);">${c(F)}</span> | ${a}`:Re()?e.innerHTML=`
        Matched <strong>${le.toLocaleString()}</strong>${n?"":" so far"}
        ${i}
        | ${a}
      `:e.innerHTML=`
        Loaded <strong>${le.toLocaleString()}</strong> keys
        ${i}
        | ${a}
      `}o&&(o.disabled=!P&&(q||n||!!F),o.innerHTML=P?'<i data-lucide="square" style="width: 13px; height: 13px;"></i> Stop':'<i data-lucide="fast-forward" style="width: 13px; height: 13px;"></i> Scan All'),t&&(t.disabled=q||n||P||!!F,t.innerHTML=q?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':n?'<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More',f())}async function ue(e){Q=e;const t=document.getElementById("keyDetailModal"),n=document.getElementById("detailKeyTitle"),o=document.getElementById("detailHeaderMeta"),a=document.getElementById("detailBodyContent");n.textContent=e,n.title=e,o.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>',a.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>',t.classList.add("active");try{let i=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(i.ok||(i=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!i.ok){let s="Key not found or could not be read";try{const d=await i.json();d&&d.detail&&(s=d.detail)}catch{}throw new Error(s)}const r=await i.json();Et=r,Bn(r),_n(r)}catch(i){o.innerHTML='<span style="color: var(--accent-danger);">Error</span>',a.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Failed to inspect key</h4>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">${c(i.message)}</p>
      </div>
    `,f()}}function Bn(e){const t=document.getElementById("detailHeaderMeta"),n=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",o=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;t.innerHTML=`
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
  `,f(),document.getElementById("btnEditTtl").addEventListener("click",()=>{An(e.name,e.ttl)})}async function An(e,t){const n=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,t>0?t:"3600");if(n===null)return;const o=parseInt(n.trim(),10);if(isNaN(o)){alert("Please enter a valid integer.");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:o})})).ok)throw new Error("Failed to update TTL");ue(e)}catch(a){alert("Error updating TTL: "+a.message)}}function _n(e){const t=document.getElementById("detailBodyContent"),n=e.type.toLowerCase();if(n==="hash"){const o=e.fields||[];t.innerHTML=`
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
            ${Tt(o)}
          </tbody>
        </table>
      </div>
    `,f(),Nn(e.name,o);return}if(e.is_json||n.includes("json")){const o=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${c(o)}</div>
    `,f(),document.getElementById("btnCopyJsonValue").addEventListener("click",()=>{navigator.clipboard.writeText(o),alert("JSON copied to clipboard!")});return}if(n==="string"){t.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${e.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${c(e.value||"")}</div>
    `,f(),document.getElementById("btnCopyStringValue").addEventListener("click",()=>{navigator.clipboard.writeText(e.value||""),alert("Value copied to clipboard!")});return}if(Array.isArray(e.value)){const o=n==="zset";t.innerHTML=`
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
                  ${c(o?a.member:String(a))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;return}t.innerHTML=`<div class="json-view-box">${c(String(e.value))}</div>`}function Tt(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(t=>`
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
        ${c(t.field)}
      </td>
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
        ${c(t.value)}
      </td>
      <td style="padding: 0.6rem 1rem; text-align: right;">
        <button type="button" class="btn-icon danger btn-delete-hash-field" data-field="${encodeURIComponent(t.field)}" title="Delete field">
          <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
        </button>
      </td>
    </tr>
  `).join("")}function Nn(e,t){const n=document.getElementById("hashFieldSearchInput"),o=document.getElementById("hashFieldCountText"),a=document.getElementById("hashFieldsTableBody");n&&n.addEventListener("input",()=>{const r=n.value.trim().toLowerCase(),s=r?t.filter(d=>d.field.toLowerCase().includes(r)||d.value.toLowerCase().includes(r)):t;a.innerHTML=Tt(s),o.textContent=`${s.length} of ${t.length} fields`,f(),gt(e)});const i=document.getElementById("btnAddHashField");i&&i.addEventListener("click",async()=>{const r=prompt(`Enter field name for hash '${e}':`);if(!r)return;const s=prompt(`Enter value for field '${r}':`);if(s!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:r,value:s})})).ok)throw new Error("Failed to set field");ue(e)}catch(d){alert("Error setting field: "+d.message)}}),gt(e)}function gt(e){document.querySelectorAll(".btn-delete-hash-field").forEach(t=>{t.addEventListener("click",async()=>{const n=decodeURIComponent(t.getAttribute("data-field"));if(confirm(`Delete field '${n}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(n)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");ue(e)}catch(o){alert("Error: "+o.message)}})})}function c(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function je(e,t){Ae=t;const n=document.getElementById("deleteKeyConfirmModal"),o=document.getElementById("deleteKeyTargetName"),a=document.getElementById("inputConfirmDelete"),i=document.getElementById("btnSubmitDeleteKey");o.textContent=e,a.value="",i.disabled=!0,n.classList.add("active"),a.focus(),a.oninput=()=>{const r=a.value.trim().toUpperCase();i.disabled=r!=="CONFIRM"&&a.value.trim()!==e},i.onclick=async()=>{i.disabled=!0,i.textContent="Deleting...";try{const r=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),s=await r.json();if(!r.ok)throw new Error(s.detail||"Failed to delete key");n.classList.remove("active"),Ae&&Ae()}catch(r){alert("Error deleting key: "+r.message)}finally{i.disabled=!1,i.textContent="Delete Permanently"}}}async function Rn(){document.getElementById("clientsListModal").classList.add("active"),await Ke()}function ft(){document.getElementById("clientsListModal").classList.remove("active")}async function Ke(){const e=document.getElementById("clientsTableContainer"),t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats"),o=document.getElementById("clientsSearchInput");e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',f();try{const a=await fetch("/api/clients");if(!a.ok)throw new Error("Failed to load connected clients");te=await a.json(),t&&(t.textContent=te.length),n&&(n.textContent=`${te.length} total connections`),o&&(o.value=""),Bt(te)}catch(a){e.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
        <h4>Error loading clients</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${a.message}</p>
      </div>
    `,f()}}function Bt(e){const t=document.getElementById("clientsTableContainer");if(!e||e.length===0){t.innerHTML=`
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
                <span>${c(n.name)}</span>
                ${n.flags&&n.flags.includes("O")?'<span class="badge-db" style="background: rgba(234, 179, 8, 0.15); color: #fde047; font-size: 0.65rem;">MONITOR</span>':""}
              </div>
              <div class="client-sub-text">User: ${c(n.user)} | Flags: ${c(n.flags||"none")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div class="client-ip-cell">${c(n.addr)}</div>
              <div class="client-sub-text">Target: ${c(n.laddr||"localhost")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem;">
              DB${n.db}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <span class="client-cmd-badge">${c(n.cmd||"idle")}</span>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
              ${n.age_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: ${n.idle>300?"var(--accent-warning)":"var(--accent-success)"};">
              ${n.idle_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; text-align: right;">
              <button type="button" class="btn-icon danger btn-kill-client" data-id="${n.id}" data-addr="${c(n.addr)}" title="Disconnect client">
                <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
              </button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,f(),t.querySelectorAll(".btn-kill-client").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-id"),a=n.getAttribute("data-addr");zn(o,a)})})}async function zn(e,t){if(confirm(`Are you sure you want to disconnect client #${e} (${t})?`))try{const n=await fetch(`/api/clients/${e}`,{method:"DELETE"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to disconnect client");await Ke(),await O()}catch(n){alert("Error disconnecting client: "+n.message)}}async function Pn(){const e=document.getElementById("slowlogModal");if(!e)return;e.classList.add("active"),be=0,xe="",ae="all",document.querySelectorAll(".slowlog-filter-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-min-duration")==="0")});const t=document.getElementById("slowlogSearchInput");t&&(t.value=""),await Ue()}function vt(){const e=document.getElementById("slowlogModal");e&&e.classList.remove("active")}async function Ue(){const e=document.getElementById("slowlogTableContainer"),t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),o=document.getElementById("slowlogFooterStats");e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,f());try{const a=await fetch("/api/slowlog?limit=250");if(!a.ok)throw new Error("Failed to fetch slowlog");const i=await a.json();if(ne=i.entries||[],t&&(t.textContent=ne.length),n&&i.slower_than_us!==null&&i.slower_than_us!==void 0){const r=(i.slower_than_us/1e3).toFixed(1);n.textContent=`Threshold: > ${r}ms (${i.slower_than_us} µs)`}o&&(o.textContent=`Total buffer: ${i.total_len||ne.length} entries | Max buffer: ${i.max_len||"N/A"}`),Dn(ne),Ce()}catch(a){e&&(e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${c(a.message)}</p>
        </div>
      `,f())}}function Dn(e){const t=document.getElementById("slowlogNodeFilterContainer");if(!t)return;const n=Array.from(new Set(e.map(a=>a.node).filter(Boolean)));if(n.length<=1){t.innerHTML="";return}t.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${n.length})</option>
      ${n.map(a=>`<option value="${c(a)}" ${ae===a?"selected":""}>${c(a)}</option>`).join("")}
    </select>
  `;const o=document.getElementById("slowlogNodeSelect");o&&o.addEventListener("change",()=>{ae=o.value,Ce()})}function Ce(){let e=ne;if(be>0&&(e=e.filter(t=>t.duration_ms>=be)),ae&&ae!=="all"&&(e=e.filter(t=>t.node===ae)),xe){const t=xe.toLowerCase();e=e.filter(n=>{const o=(n.command||[]).join(" ").toLowerCase(),a=(n.client_ip||"").toLowerCase(),i=(n.node||"").toLowerCase();return o.includes(t)||a.includes(t)||i.includes(t)||String(n.id).includes(t)})}Hn(e)}function Hn(e){const t=document.getElementById("slowlogTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <i data-lucide="check-circle-2" style="width: 28px; height: 28px; color: #4ade80;"></i>
        </div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.35rem;">No Slow Queries Recorded</h4>
        <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.5;">
          ${ne.length===0?"Redis latency is healthy! All commands executed within the threshold.":"No slowlog entries matched the active filters."}
        </p>
      </div>
    `,f();return}t.innerHTML=`
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
                ${c(n.time_str||"N/A")}
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
                <span class="slowlog-cmd-code" title="${c(a)}">${c(a)}</span>
              </td>
              <td>
                ${n.node?`<span class="slowlog-node-pill">${c(n.node)}</span>`:'<span style="color: var(--text-muted); font-size: 0.75rem;">Default</span>'}
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                ${c(n.client_ip||"Unknown")}
                ${n.client_name?`<span style="color: var(--text-muted); display: block; font-size: 0.7rem;">(${c(n.client_name)})</span>`:""}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,f()}}async function Fn(){if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");await Ue()}catch(e){alert("Error resetting slowlog: "+e.message)}}async function At(){const e=document.getElementById("memoryModal");e&&(e.classList.add("active"),await _t(),V?qe(V):Ve())}function Pe(){const e=document.getElementById("memoryModal");e&&e.classList.remove("active")}async function _t(){const e=document.getElementById("memoryOverviewContainer");if(e){e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,f();try{const t=await fetch("/api/memory/overview");if(!t.ok)throw new Error("Failed to fetch memory overview");yt=await t.json(),On(yt)}catch(t){e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${c(t.message)}</p>
      </div>
    `,f()}}}function On(e){const t=document.getElementById("memoryOverviewContainer");if(!t||!e)return;let n="mem-status-healthy",o="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(n="mem-status-critical",o="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(n="mem-status-warning",o=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),t.innerHTML=`
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
          Max: <span style="font-family: var(--font-mono); color: var(--text-primary);">${e.maxmemory_human}</span> | Policy: ${c(e.maxmemory_policy)}
        </div>
      </div>
    </div>
  `,f()}function Ve(){const e=document.getElementById("memoryProfilingContainer");if(!e)return;e.innerHTML=`
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
  `,f();const t=document.getElementById("btnStartProfilingAction");t&&t.addEventListener("click",()=>{const n=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,o=document.getElementById("memSamplePatternInput").value||"*";jn(n,o)})}async function jn(e=500,t="*"){const n=document.getElementById("memoryProfilingContainer");if(n){Be=!0,n.innerHTML=`
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: #a78bfa; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">Analyzing Redis Keyspace...</h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
        Scanning sample of up to <strong>${e.toLocaleString()}</strong> keys (pattern <code>${c(t)}</code>) and measuring memory allocations...
      </p>
    </div>
  `,f();try{const o=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:t})});if(!o.ok)throw new Error("Failed to complete memory profiling");V=await o.json(),Be=!1,qe(V)}catch(o){Be=!1,n.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Memory Profiling Failed</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${c(o.message)}</p>
        <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Try Again</button>
      </div>
    `,f();const a=document.getElementById("btnRetryProfiling");a&&a.addEventListener("click",Ve)}}}function qe(e){const t=document.getElementById("memoryProfilingContainer");if(!t||!e)return;const n={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};t.innerHTML=`
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
            <span>${c(i)}</span>
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
        ${ht(e.top_bigkeys)}
      </div>
    </div>
  `,f();const o=document.getElementById("btnReRunProfiling");o&&o.addEventListener("click",Ve);const a=document.getElementById("bigkeysSearchInput");a&&a.addEventListener("input",()=>{const i=a.value.trim().toLowerCase(),r=i?e.top_bigkeys.filter(d=>d.key.toLowerCase().includes(i)||d.type.toLowerCase().includes(i)):e.top_bigkeys,s=document.getElementById("bigkeysTableContainer");s&&(s.innerHTML=ht(r),f(),bt())}),bt()}function ht(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const t=e[0]?e[0].memory_bytes:1;return`
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
                <a href="javascript:void(0)" class="key-name-link bigkey-inspect-btn" data-key="${c(n.key)}" style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 600; color: #38bdf8; text-decoration: none;" title="Inspect key: ${c(n.key)}">
                  ${c(n.key)}
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
                  <button type="button" class="btn btn-secondary bigkey-inspect-btn" data-key="${c(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Inspect key detail">
                    <i data-lucide="external-link" style="width: 11px; height: 11px;"></i>
                    Inspect
                  </button>
                  <button type="button" class="btn btn-danger bigkey-delete-btn" data-key="${c(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Delete oversized key">
                    <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
                  </button>
                </div>
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function bt(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&(Pe(),ue(t))})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&je(t,async()=>{V&&(V.top_bigkeys=V.top_bigkeys.filter(n=>n.key!==t),qe(V)),await O()})})})}async function J(){const e=document.getElementById("connectionsList");try{const[t,n]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]);E=await t.json()||[],n.ok&&(G=(await n.json()).limit||2),he()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function Nt(e,t){const n=document.getElementById("connectedCountDisplay"),o=document.getElementById("connLimitDisplay"),a=document.getElementById("connLimitSelect"),i=document.getElementById("limitProgressDots"),r=document.getElementById("limitCountPill");if(n&&(n.textContent=e),o&&(o.textContent=t),a&&String(a.value)!==String(t)&&(a.value=String(t)),r&&(e>=t&&t>0?(r.classList.add("at-limit"),r.title="Connection limit reached"):(r.classList.remove("at-limit"),r.title=`${e} of ${t} connections in use`)),i){let s="";for(let d=0;d<t;d++){const m=d<e;s+=`<span class="limit-slot-dot ${m?"filled":"empty"}" title="Slot ${d+1}: ${m?"Connected":"Available"}"></span>`}i.innerHTML=s}}function he(){const e=document.getElementById("connectionsList");if(!e)return;const t=document.getElementById("totalConnCountBadge");t&&(t.textContent=E.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(s=>{const d=s.getAttribute("data-env");let m=0;d==="ALL"?m=E.length:m=E.filter(y=>(y.env||"LOCAL").toUpperCase()===d).length,s.textContent=`${d} (${m})`});const o=(fe||"").trim().toLowerCase(),a=Lt,i=E.filter(s=>{if(a!=="ALL"&&(s.env||"LOCAL").toUpperCase()!==a)return!1;if(o){const d=(s.name||"").toLowerCase().includes(o),m=(s.host||"").toLowerCase().includes(o),y=(s.env||"").toLowerCase().includes(o),h=(s.conn_type||"").toLowerCase().includes(o);if(!d&&!m&&!y&&!h)return!1}return!0});i.sort((s,d)=>{const m=s.is_connected?1:0,y=d.is_connected?1:0;if(y!==m)return y-m;const h=s.is_selected?1:0,b=d.is_selected?1:0;return b!==h?b-h:(s.name||"").localeCompare(d.name||"")});const r=E.filter(s=>s.is_connected).length;if(Nt(r,G),i.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${o?`No results found for "${c(o)}"`:`No connections configured in ${c(a)}`}
        </span>
      </div>
    `,f();return}e.innerHTML=i.map(s=>{const d=(s.env||"LOCAL").toUpperCase(),m=`badge-env-${d.toLowerCase()}`,y=s.conn_type==="cluster",h=s.conn_type==="sentinel",b=s.source==="config",p=!!s.is_connected,L=!!s.is_selected;return`
      <div class="conn-card ${p?"is-connected":""} ${L?"selected active":""}" data-id="${s.id}" title="Click to review config & connection options">
        
        <!-- Header: Lead Indicator + Name + Status Pill -->
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${L?`
              <span class="conn-status-indicator active" title="Active Cluster (Browsing Keys)">
                <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
              </span>
            `:p?`
              <span class="conn-status-indicator connected" title="Connected Cluster">
                <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
              </span>
            `:`
              <span class="conn-status-dot idle" title="Disconnected"></span>
            `}
          </div>

          <div class="conn-title-wrap">
            <span class="conn-name" title="${c(s.name)}">${c(s.name)}</span>
          </div>

          <div class="conn-status-badge-wrap">
            ${L?`
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            `:p?`
              <span class="badge-connected-cluster">CONNECTED</span>
            `:""}
          </div>
        </div>

        <!-- Sub-row: Endpoint on left, Badges on right -->
        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${c(s.host)}:${s.port}">
            <i data-lucide="${y?"network":h?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${c(s.host)}:${s.port}</span>
          </div>

          <div class="conn-tags">
            <span class="badge-env ${m}">${d}</span>
            ${y?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${h?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!y&&!h?`<span class="badge-db">DB${s.db}</span>`:""}
            ${s.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${s.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${b?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <!-- Floating Quick Action Toolbar on Hover -->
        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${p?`
            ${L?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${s.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${s.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${y||p?`
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
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${s.id}" data-name="${c(s.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>

      </div>
    `}).join(""),f(),e.querySelectorAll(".conn-card").forEach(s=>{s.addEventListener("click",d=>{if(d.target.closest(".btn-delete-conn")||d.target.closest(".btn-view-topology-card")||d.target.closest(".btn-card-disconnect")||d.target.closest(".btn-card-select")||d.target.closest(".btn-card-open-config"))return;const m=s.getAttribute("data-id"),y=E.find(h=>h.id===m);y&&De(y)})}),e.querySelectorAll(".btn-card-disconnect").forEach(s=>{s.addEventListener("click",async d=>{d.stopPropagation();const m=s.getAttribute("data-id");await Ge(m)})}),e.querySelectorAll(".btn-card-select").forEach(s=>{s.addEventListener("click",async d=>{d.stopPropagation();const m=s.getAttribute("data-id");await zt(m)})}),e.querySelectorAll(".btn-card-open-config").forEach(s=>{s.addEventListener("click",d=>{d.stopPropagation();const m=s.getAttribute("data-id"),y=E.find(h=>h.id===m);y&&De(y)})}),e.querySelectorAll(".btn-view-topology-card").forEach(s=>{s.addEventListener("click",async d=>{d.stopPropagation();const m=s.getAttribute("data-id");await Ee(m)})}),e.querySelectorAll(".btn-delete-conn").forEach(s=>{s.addEventListener("click",async d=>{d.stopPropagation();const m=s.getAttribute("data-id"),y=s.getAttribute("data-name");confirm(`Are you sure you want to delete '${y}'?`)&&await Vn(m)})})}function Kn(e){if(!e)return[];if(Array.isArray(e))return e.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t));if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n))}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}return[]}function De(e){const t=document.getElementById("clusterConfigModal"),n=document.getElementById("cfgModalTitle"),o=document.getElementById("cfgModalSubtitle"),a=document.getElementById("cfgModalBody"),i=document.getElementById("cfgModalFooter");n.textContent=e.name||"Cluster Configuration",o.textContent="Review configuration before connecting";const r=!!e.is_connected,s=!!e.is_selected,d=e.conn_type==="cluster",m=Kn(e.cluster_nodes),y=E.filter(R=>R.is_connected).length,h=!r&&y>=G;a.innerHTML=`
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
        <span class="config-value">${c(e.name)}</span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Environment</span>
        <span class="config-value">
          <span class="badge-env badge-env-${(e.env||"LOCAL").toLowerCase()}">${(e.env||"LOCAL").toUpperCase()}</span>
        </span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Connection Type</span>
        <span class="config-value" style="text-transform: capitalize;">${c(e.conn_type||"standalone")}</span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Host / Seed Node</span>
        <span class="config-value" style="color: var(--accent-primary);">${c(e.host)}:${e.port}</span>
      </div>
      ${d&&(m.length>0||e.cluster_nodes)?`
        <div class="config-grid-row config-grid-seeds-row">
          <span class="config-label" style="padding-top: 2px;">
            Seed Endpoints ${m.length>0?`(${m.length})`:""}
          </span>
          <div class="config-seeds-container">
            ${m.length>0?m.map(R=>`
                  <span class="seed-node-pill" title="${c(R)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${c(R)}
                  </span>
                `).join(""):`<span class="seed-node-pill">${c(e.cluster_nodes)}</span>`}
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
          ${e.username?c(e.username):"default"} / ${e.has_password?"•••••••• (Encrypted)":"None"}
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
      <span>Connected Limit: <strong>${y} of ${G}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${h?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${G} maximum). Please disconnect a connected cluster first or increase the limit.</span>
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
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${h?"disabled":""}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `,f(),t.classList.add("active");const b=document.getElementById("btnCloseConfigModal");b&&(b.onclick=()=>t.classList.remove("active"));const p=document.getElementById("btnEditFromConfig");p&&(p.onclick=()=>{t.classList.remove("active"),openEditConnectionModal(e)});const L=document.getElementById("btnConnectFromConfig");L&&(L.onclick=async()=>{await Rt(e.id),t.classList.remove("active")});const z=document.getElementById("btnDisconnectFromConfig");z&&(z.onclick=async()=>{await Ge(e.id),t.classList.remove("active")});const w=document.getElementById("btnSelectFromConfig");w&&(w.onclick=async()=>{await zt(e.id),t.classList.remove("active")});const H=document.getElementById("btnTopologyFromConfig");H&&(H.onclick=async()=>{t.classList.remove("active"),await Ee(e.id)});const $=document.getElementById("btnTestFromConfig");$&&($.onclick=async()=>{await Un(e)})}async function Un(e){const t=document.getElementById("cfgTestResultBox"),n=document.getElementById("btnTestFromConfig");n&&(n.disabled=!0,n.innerHTML="Testing..."),t&&(t.className="test-result-box",t.innerHTML="");try{const a=await(await fetch(`/api/connections/${e.id}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();a.success?(t.className="test-result-box success",t.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${a.latency_ms} ms</strong> (Redis v${a.redis_version})</span>
      `):(t.className="test-result-box error",t.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${c(a.error||"Connection refused")}</span>
      `)}catch(o){t&&(t.className="test-result-box error",t.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${c(o.message)}</span>`)}finally{n&&(n.disabled=!1,n.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),f()}}async function Rt(e){if(E.find(n=>n.id===e),E.filter(n=>n.is_connected&&n.id!==e).length>=G){alert(`Connection limit reached: Maximum ${G} connected cluster(s) allowed at a time.
Please disconnect an existing cluster first or increase the limit in the sidebar.`);return}try{const n=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to connect to cluster");await J(),await O(),await N()}catch(n){alert("Connection error: "+n.message)}}async function Ge(e){try{const t=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to disconnect cluster");await J(),await O(),E.some(a=>a.is_connected&&a.id!==e)?await N():(X=[],ie.clear(),le=0,K=0,D=!1,Fe=0,Je())}catch(t){alert("Disconnect error: "+t.message)}}async function zt(e){try{const t=await fetch(`/api/connections/${e}/select`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to switch cluster");const o=document.getElementById("keyDetailModal");o&&o.classList.remove("active"),Q=null,Et=null,await J(),await O(),await N()}catch(t){alert("Switch error: "+t.message)}}function Je(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="flex"),n&&(n.style.display="none");const o=document.getElementById("btnConnectFirstAvailable");o&&(o.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${E.length})`,E.length>0&&(o.onclick=()=>De(E[0]))),f()}async function Vn(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");await J(),await O(),await N()}catch(t){alert("Delete error: "+t.message)}}async function qn(){const e=document.getElementById("keyspaceNodesModal");e&&(e.classList.add("active"),We(Z),await Pt())}function _e(){const e=document.getElementById("keyspaceNodesModal");e&&e.classList.remove("active")}async function Pt(){try{const e=await fetch("/api/status");if(!e.ok)throw new Error("Failed to load node stats");Z=await e.json(),We(Z)}catch(e){const t=document.getElementById("keyspaceNodesContainer");t&&(t.innerHTML=`<div style="padding: 2rem; text-align: center; color: var(--accent-danger);">${c(e.message)}</div>`)}}function Gn(){const e=document.getElementById("keyspaceNodesModal");e&&e.classList.contains("active")&&We(Z)}function We(e){const t=document.getElementById("keyspaceNodesContainer"),n=document.getElementById("keyspaceTotalBadge");if(!t||!e)return;const o=e.node_stats||[],a=o.filter(p=>p.role==="master"),i=a.reduce((p,L)=>p+(L.keys||0),0);if(n&&(n.textContent=`${i.toLocaleString()} keys`),a.length===0){t.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Per-node breakdown is only available for cluster connections.</div>';return}const r=p=>p==null?"—":Number(p).toLocaleString(),s=Re()&&(X.length>0||D),d=Object.values(me).reduce((p,L)=>p+L,0),m=(p,L="left")=>`<th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: ${L};">${p}</th>`,y=(p,L="")=>`<td style="padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; ${L}">${p}</td>`,h=a.map(p=>{const L=i>0&&p.keys!==null?(p.keys/i*100).toFixed(1):"0.0",z=o.filter($=>$.role==="replica"&&$.master===p.node),w=`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        ${y(`<span class="role-badge-master">MASTER</span> <span style="color: var(--text-primary); font-weight: 600; margin-left: 6px;">${c(p.node)}</span>`)}
        ${y(p.error?`<span style="color: var(--accent-danger);" title="${c(p.error)}">unreachable</span>`:r(p.keys),"text-align: right; color: var(--text-primary); font-weight: 600;")}
        ${y(`${L}%`,"text-align: right; color: var(--text-secondary);")}
        ${y(c(p.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
        ${y(r(p.connected_clients),"text-align: right; color: #38bdf8;")}
        ${s?y(r(me[p.node]||0),"text-align: right; color: var(--accent-warning); font-weight: 600;"):""}
      </tr>`,H=z.map($=>{const R=$.keys!==null&&p.keys!==null?$.keys-p.keys:null,re=R===null?"":R===0?'<span style="color: var(--accent-success); margin-left: 6px;">in sync</span>':`<span style="color: var(--accent-warning); margin-left: 6px;" title="Replica key count differs from its master (replication lag or expiring keys)">${R>0?"+":""}${R.toLocaleString()}</span>`;return`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(0,0,0,0.12);">
        ${y(`<span style="color: var(--text-muted); margin-left: 0.75rem;">↳</span> <span class="role-badge-replica">REPLICA</span> <span style="color: var(--text-secondary); margin-left: 6px;">${c($.node)}</span>`)}
        ${y($.error?`<span style="color: var(--accent-danger);" title="${c($.error)}">unreachable</span>`:`${r($.keys)}${re}`,"text-align: right; color: var(--text-secondary);")}
        ${y("","")}
        ${y(c($.used_memory_human||"—"),"text-align: right; color: var(--text-muted);")}
        ${y(r($.connected_clients),"text-align: right; color: var(--text-muted);")}
        ${s?y("",""):""}
      </tr>`}).join("");return w+H}).join(""),b=s?`<div style="padding: 0.25rem 0.25rem 0.75rem; font-size: 0.78rem; color: var(--text-muted);">
        MATCHED = keys found for ${ve()}
        ${D?'<span style="color: var(--accent-success);">(scan complete)</span>':`<span>(so far — ${c(It(K))})</span>`}
      </div>`:"";t.innerHTML=`
    ${b}
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${m("NODE")}${m("KEYS","right")}${m("SHARE","right")}${m("MEMORY","right")}${m("CLIENTS","right")}${s?m("MATCHED","right"):""}</tr>
      </thead>
      <tbody>${h}</tbody>
      <tfoot>
        <tr>
          ${y("Cluster total (masters)","color: var(--text-muted); font-family: inherit;")}
          ${y(i.toLocaleString(),"text-align: right; color: var(--accent-primary); font-weight: 700;")}
          ${y("100%","text-align: right; color: var(--text-muted);")}
          ${y(c(e.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
          ${y("","")}
          ${s?y(d.toLocaleString(),"text-align: right; color: var(--accent-warning); font-weight: 700;"):""}
        </tr>
      </tfoot>
    </table>
  `,f()}async function Ee(e=null){const t=document.getElementById("clusterTopologyModal");if(t){if(t.classList.add("active"),e){const n=document.querySelector(`.conn-card[data-id="${e}"]`);n&&!n.classList.contains("active")&&await Rt(e)}await Dt()}}function xt(){const e=document.getElementById("clusterTopologyModal");e&&e.classList.remove("active")}async function Dt(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),t=document.getElementById("topologyNodesCountBadge"),n=document.getElementById("topologyEnvBadge"),o=E.find(a=>a.is_active);if(o&&n){const a=(o.env||"LOCAL").toUpperCase();n.textContent=a,n.className=`badge-env badge-env-${a.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,f());try{const a=await fetch("/api/topology");if(!a.ok)throw new Error("Failed to load cluster topology");const i=await a.json();Ne=i,t&&(t.textContent=`${i.total_nodes} Node${i.total_nodes!==1?"s":""}`),Jn(i),He()}catch(a){e&&(e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${a.message}</p>
        </div>
      `,f())}}function Jn(e){const t=document.getElementById("topologyStatsGrid");if(!t)return;const n=e.is_cluster,o=(e.cluster_state||"").toLowerCase()==="ok"||!n;t.innerHTML=`
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
  `}function He(){const e=document.getElementById("topologyTableContainer");if(!e||!Ne)return;const t=Ne.nodes||[],n=($t||"").trim().toLowerCase(),o=St,a=t.filter(i=>{if(o!=="all"&&i.role.toLowerCase()!==o)return!1;if(n){const r=(i.addr||"").toLowerCase().includes(n),s=(i.id||"").toLowerCase().includes(n),d=(i.ip||"").toLowerCase().includes(n),m=(i.slots||"").toLowerCase().includes(n);if(!r&&!s&&!d&&!m)return!1}return!0});if(a.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
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
        ${a.map(i=>{const r=i.role==="master",s=(i.link_state||"connected").toLowerCase()==="connected",d=i.id?i.id.length>12?`${i.id.substring(0,10)}...`:i.id:"N/A",m=i.slots?`${i.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${i.slot_count||0} slots)</span>`:r?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${c(i.id||"")}">${c(d)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${r?"role-badge-master":"role-badge-replica"}">${i.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${c(i.addr||`${i.ip}:${i.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem; text-align: right; color: ${r?"var(--text-primary)":"var(--text-secondary)"};">
                ${i.keys===null||i.keys===void 0?"—":Number(i.keys).toLocaleString()}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${s?"connected":"disconnected"}"></span>
                <span style="color: ${s?"var(--accent-success)":"var(--accent-danger)"};">${i.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${m}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                ${i.master_id?`<span title="${c(i.master_id)}">↳ ${c(i.master_id.substring(0,8))}...</span>`:"—"}
              </td>
              <td style="padding: 0.65rem 0.85rem; text-align: right; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
                ${(i.flags||[]).join(", ")||"none"}
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `,f()}async function O(){const e=document.getElementById("topConnContainer"),t=document.getElementById("topVitalsContainer");try{const o=await(await fetch("/api/status")).json();if(o.connected){const a=E.find(p=>p.is_selected)||E.find(p=>p.id===o.connection_id)||E.find(p=>p.is_connected),i=a&&a.conn_type==="cluster"||o.cluster_nodes&&o.cluster_nodes.length>0||o.is_cluster,r=o.cluster_nodes_count||(o.node_stats?o.node_stats.length:1),s=(o.node_stats||[]).filter(p=>p.role==="master");if(Z=o,e){const p=(o.env||a?.env||"LOCAL").toUpperCase();e.innerHTML=`
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${c(o.connection_name||"Connected")}">${c(o.connection_name||"Connected")}</span>
            <span class="badge-env badge-env-${p.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem; margin-right: 0.25rem;">${p}</span>
            <span class="top-conn-endpoint">${o.host}:${o.port}</span>
            <span class="top-conn-tag">${i?"CLUSTER":`DB${o.db}`}</span>
            <button type="button" class="top-conn-disconnect" id="btnTopDisconnect" title="Disconnect ${c(o.connection_name||"instance")}">
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
        `),f();const d=document.getElementById("btnTopDisconnect");d&&d.addEventListener("click",()=>{o.connection_id&&Ge(o.connection_id)});const m=document.getElementById("btnOpenClientsModal");m&&m.addEventListener("click",Rn);const y=document.getElementById("btnOpenTopologyTop");y&&y.addEventListener("click",()=>Ee());const h=document.getElementById("btnOpenKeyspaceTop");h&&s.length&&h.addEventListener("click",qn);const b=document.getElementById("btnOpenMemoryTop");b&&b.addEventListener("click",At)}else e&&(e.innerHTML=`
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${o.error?`<span class="top-conn-error" title="${c(o.error)}">${c(o.error)}</span>`:""}
          </div>
        `),t&&(t.innerHTML=`
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `),f(),le===0&&X.length===0&&Je()}catch{e&&(e.innerHTML=`
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `),t&&(t.innerHTML=""),f()}}function Wn(){const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const l=parseInt(e.value,10)||2;try{const g=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:l})});if(g.ok){const u=await g.json();G=u.limit,Nt(u.connected_count,u.limit)}}catch(g){console.error("Failed to update limit:",g)}});const t=document.getElementById("clusterConfigModal");t&&t.addEventListener("click",l=>{l.target===t&&t.classList.remove("active")});const n=document.getElementById("connSearchInput"),o=document.getElementById("btnClearConnSearch");n&&n.addEventListener("input",()=>{fe=n.value,o&&(o.style.display=fe?"flex":"none"),he()}),o&&o.addEventListener("click",()=>{n&&(n.value="",n.focus()),fe="",o.style.display="none",he()});const a=document.querySelectorAll("#envFilterPills .env-pill-btn");a.forEach(l=>{l.addEventListener("click",()=>{a.forEach(g=>g.classList.remove("active")),l.classList.add("active"),Lt=l.getAttribute("data-env")||"ALL",he()})});const i=document.getElementById("btnReloadConfig");i&&i.addEventListener("click",async()=>{i.disabled=!0;try{const g=await(await fetch("/api/connections/reload-config",{method:"POST"})).json(),u=g.loaded??g.total_in_file??0;alert(`Config reloaded successfully! Synced ${u} connection(s) from config.`),await J()}catch(l){alert("Failed to reload config: "+l.message)}finally{i.disabled=!1}}),window.addEventListener("focus",()=>{J().catch(()=>{})});let r=[];function s(){const l=document.getElementById("clusterNodesList"),g=document.getElementById("clusterNodeCountBadge");if(l){if(g&&(g.textContent=`${r.length} configured`),r.length===0){l.innerHTML=`
        <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
          No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
        </div>
      `;return}l.innerHTML=r.map((u,S)=>{const x=u.role==="master",T=u.role==="replica",C=u.role==="seed",k=x?"master":T?"replica":"",M=x?"master":T?"replica":C?"seed":"manual",_=x?"Master":T?"Replica":C?"Seed":"Node";return`
        <span class="cluster-node-chip ${k}">
          <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
          <span>${c(u.host)}:${u.port}</span>
          <span class="cluster-node-role-badge ${M}">${_}</span>
          <button type="button" class="cluster-node-chip-remove" data-idx="${S}" title="Remove node">
            <i data-lucide="x" style="width: 11px; height: 11px;"></i>
          </button>
        </span>
      `}).join(""),l.querySelectorAll(".cluster-node-chip-remove").forEach(u=>{u.addEventListener("click",S=>{S.stopPropagation();const x=parseInt(u.getAttribute("data-idx"),10);!isNaN(x)&&x>=0&&x<r.length&&(r.splice(x,1),s())})}),f()}}const d=document.getElementById("connTypeSelect"),m=document.getElementById("clusterNodesGroup"),y=document.getElementById("connHostLabel"),h=document.getElementById("connPortLabel"),b=document.getElementById("connHost"),p=document.getElementById("connPort"),L=document.getElementById("connDbGroup");d&&m&&d.addEventListener("change",()=>{const l=d.value==="cluster";m.style.display=l?"block":"none",L&&(L.style.display=l?"none":"block"),l?(y&&(y.textContent="Primary Seed Host *"),h&&(h.textContent="Seed Port *"),b&&(b.value==="localhost"||!b.value)&&(b.value="127.0.0.1"),p&&(p.value==="6379"||!p.value)&&(p.value="7000"),r.length===0&&b&&b.value&&p&&p.value&&r.push({host:b.value.trim(),port:parseInt(p.value,10)||7e3,role:"seed"}),s()):(y&&(y.textContent="Host *"),h&&(h.textContent="Port *"),p&&p.value==="7000"&&(p.value="6379"))});const z=document.getElementById("btnAutoDiscoverCluster"),w=document.getElementById("clusterDiscoveryStatus");z&&z.addEventListener("click",async()=>{const l=b?b.value.trim():"127.0.0.1",g=p&&parseInt(p.value,10)||7e3,u=document.getElementById("connUsername").value.trim()||null,S=document.getElementById("connPassword").value||null,x=document.getElementById("connTls").checked;if(!l){w&&(w.className="cluster-discovery-status error",w.style.display="flex",w.innerHTML='<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>',f());return}z.disabled=!0,z.innerHTML='<i class="lucide-spin" data-lucide="loader-2" style="width: 13px; height: 13px;"></i> Discovering...',f(),w&&(w.className="cluster-discovery-status",w.style.display="none");try{const C=await(await fetch("/api/connections/discover-cluster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:l,port:g,username:u,password:S,use_tls:x})})).json();C.success&&C.nodes&&C.nodes.length>0?(r=C.nodes.map(k=>({host:k.host,port:k.port,role:k.role,is_myself:k.is_myself,slots:k.slots})),s(),w&&(w.className="cluster-discovery-status success",w.style.display="flex",w.innerHTML=`
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${C.total_nodes} nodes</strong> (${C.masters_count} masters, ${C.replicas_count} replicas) • Cluster state: <strong>${C.cluster_state.toUpperCase()}</strong></span>
            `)):w&&(w.className="cluster-discovery-status error",w.style.display="flex",w.innerHTML=`
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${c(C.error||"Cluster discovery failed. Ensure seed node is part of a cluster.")}</span>
            `)}catch(T){w&&(w.className="cluster-discovery-status error",w.style.display="flex",w.innerHTML=`
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${c(T.message)}</span>
          `)}finally{z.disabled=!1,z.innerHTML='<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes',f()}});const H=document.getElementById("inputCustomClusterNode"),$=document.getElementById("btnAddCustomClusterNode");function R(){if(!H)return;const l=H.value.trim();if(!l)return;let g="127.0.0.1",u=7e3;if(l.includes(":")){const x=l.split(":");g=x[0].trim()||"127.0.0.1",u=parseInt(x[1].trim(),10)||7e3}else isNaN(parseInt(l,10))?g=l:(u=parseInt(l,10),g=b?b.value.trim():"127.0.0.1");r.some(x=>x.host===g&&x.port===u)||(r.push({host:g,port:u,role:"manual"}),s()),H.value=""}$&&$.addEventListener("click",R),H&&H.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),R())});const re=document.getElementById("clusterTopologyModal"),Ye=document.getElementById("btnCloseTopologyModal");Ye&&Ye.addEventListener("click",xt);const Qe=document.getElementById("btnRefreshTopologyModal");Qe&&Qe.addEventListener("click",Dt),re&&re.addEventListener("click",l=>{l.target===re&&xt()});const Le=document.getElementById("topologySearchInput");Le&&Le.addEventListener("input",()=>{$t=Le.value,He()}),document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(g=>g.classList.remove("active")),l.classList.add("active"),St=l.getAttribute("data-role")||"all",He()})});const Ze=document.getElementById("keyspaceNodesModal");document.getElementById("btnCloseKeyspaceModal").addEventListener("click",_e),document.getElementById("btnRefreshKeyspaceModal").addEventListener("click",Pt),document.getElementById("btnKeyspaceOpenTopology").addEventListener("click",()=>{_e(),Ee()}),Ze.addEventListener("click",l=>{l.target===Ze&&_e()});const Xe=document.getElementById("clientsListModal");document.getElementById("btnCloseClientsModal").addEventListener("click",ft),document.getElementById("btnRefreshClientsModal").addEventListener("click",Ke),Xe.addEventListener("click",l=>{l.target===Xe&&ft()});const Se=document.getElementById("clientsSearchInput");Se&&Se.addEventListener("input",()=>{const l=Se.value.trim().toLowerCase(),g=l?te.filter(u=>u.addr&&u.addr.toLowerCase().includes(l)||u.ip&&u.ip.toLowerCase().includes(l)||u.name&&u.name.toLowerCase().includes(l)||u.cmd&&u.cmd.toLowerCase().includes(l)||u.user&&u.user.toLowerCase().includes(l)||u.id&&String(u.id).includes(l)):te;Bt(g)});const et=document.getElementById("btnOpenSlowlog");et&&et.addEventListener("click",Pn);const tt=document.getElementById("btnOpenMemoryModal");tt&&tt.addEventListener("click",At);const $e=document.getElementById("slowlogModal"),nt=document.getElementById("btnCloseSlowlogModal");nt&&nt.addEventListener("click",vt);const ot=document.getElementById("btnRefreshSlowlogModal");ot&&ot.addEventListener("click",Ue);const at=document.getElementById("btnClearSlowlogModal");at&&at.addEventListener("click",Fn),$e&&$e.addEventListener("click",l=>{l.target===$e&&vt()});const ke=document.getElementById("slowlogSearchInput");ke&&ke.addEventListener("input",()=>{xe=ke.value.trim(),Ce()}),document.querySelectorAll(".slowlog-filter-btn").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(g=>g.classList.remove("active")),l.classList.add("active"),be=parseFloat(l.getAttribute("data-min-duration")||"0"),Ce()})});const Me=document.getElementById("memoryModal"),it=document.getElementById("btnCloseMemoryModal");it&&it.addEventListener("click",Pe);const st=document.getElementById("btnRefreshMemoryModal");st&&st.addEventListener("click",_t),Me&&Me.addEventListener("click",l=>{l.target===Me&&Pe()});let W=null;window.openEditConnectionModal=function(l){W=l.id;const g=document.getElementById("connectionModal"),u=document.getElementById("connectionModalTitle"),S=document.getElementById("btnSaveConnModal"),x=document.getElementById("connPassword");u&&(u.innerHTML='<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection'),S&&(S.textContent="Update Connection"),document.getElementById("connName").value=l.name||"",document.getElementById("connEnv").value=(l.env||"DEV").toUpperCase();const T=document.getElementById("connTypeSelect");T.value=l.conn_type||"standalone",document.getElementById("connHost").value=l.host||"localhost",document.getElementById("connPort").value=l.port||6379,document.getElementById("connDb").value=l.db||0,document.getElementById("connUsername").value=l.username||"",document.getElementById("connTls").checked=!!l.use_tls,x.value="",l.has_password?x.placeholder="•••••••• (Leave blank to keep saved password)":x.placeholder="Enter password (or leave empty)";const C=document.getElementById("clusterNodesGroup"),k=document.getElementById("connHostLabel"),M=document.getElementById("connDbRow");if(r=[],l.conn_type==="cluster"){if(C.style.display="block",k.textContent="Seed Node Host *",M.style.display="none",l.cluster_nodes)try{const B=typeof l.cluster_nodes=="string"?JSON.parse(l.cluster_nodes):l.cluster_nodes;Array.isArray(B)&&(r=B.map(I=>{if(typeof I=="string"&&I.includes(":")){const A=I.split(":");return{host:A[0].trim(),port:parseInt(A[1],10)||6379}}return{host:I.host||"127.0.0.1",port:parseInt(I.port,10)||6379}}))}catch{}}else C.style.display="none",k.textContent="Host *",M.style.display="flex";s();const _=document.getElementById("testResultBox");_&&(_.className="test-result-box",_.innerHTML=""),f(),g.classList.add("active")};const Y=document.getElementById("connectionModal");document.getElementById("btnAddConn").addEventListener("click",()=>{W=null,document.getElementById("connectionForm").reset();const l=document.getElementById("connectionModalTitle"),g=document.getElementById("btnSaveConnModal"),u=document.getElementById("connPassword");l&&(l.innerHTML='<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection'),g&&(g.textContent="Save Connection"),u&&(u.placeholder="Leave empty if none"),document.getElementById("clusterNodesGroup").style.display="none",document.getElementById("connHostLabel").textContent="Host *",document.getElementById("connDbRow").style.display="flex",r=[],s();const S=document.getElementById("testResultBox");S&&(S.className="test-result-box",S.innerHTML=""),f(),Y.classList.add("active")}),document.getElementById("btnCloseModal").addEventListener("click",()=>{Y.classList.remove("active")}),document.getElementById("btnCancelModal").addEventListener("click",()=>{Y.classList.remove("active")}),Y.addEventListener("click",l=>{l.target===Y&&Y.classList.remove("active")});const de=document.getElementById("keyDetailModal");document.getElementById("btnCloseDetailModal").addEventListener("click",()=>{de.classList.remove("active")}),de.addEventListener("click",l=>{l.target===de&&de.classList.remove("active")}),document.getElementById("btnCopyKeyName").addEventListener("click",()=>{Q&&(navigator.clipboard.writeText(Q),alert(`Copied '${Q}' to clipboard!`))}),document.getElementById("btnDeleteKeyFromDetail").addEventListener("click",()=>{Q&&je(Q,()=>{de.classList.remove("active"),N()})});const lt=document.getElementById("deleteKeyConfirmModal");document.getElementById("btnCloseDeleteConfirmModal").addEventListener("click",()=>{lt.classList.remove("active")}),document.getElementById("btnCancelDeleteConfirm").addEventListener("click",()=>{lt.classList.remove("active")}),document.getElementById("btnTestConnModal").addEventListener("click",async()=>{const l=document.getElementById("connTypeSelect").value,g=document.getElementById("connHost").value.trim()||"localhost",u=parseInt(document.getElementById("connPort").value,10)||6379,S=parseInt(document.getElementById("connDb").value,10)||0,x=document.getElementById("connUsername").value.trim()||null,T=document.getElementById("connPassword").value,C=document.getElementById("connTls").checked;let k=null;l==="cluster"&&r.length>0&&(k=JSON.stringify(r.map(B=>({host:B.host,port:B.port}))));const M=document.getElementById("testResultBox"),_=document.getElementById("btnTestConnModal");_.disabled=!0,_.innerHTML="Testing...",M.className="test-result-box",M.innerHTML="";try{let B;W&&!T?B=await fetch(`/api/connections/${W}/test`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:g,port:u,db:S,username:x,use_tls:C,conn_type:l,cluster_nodes:k})}):B=await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:g,port:u,db:S,username:x,password:T||null,use_tls:C,conn_type:l,cluster_nodes:k})});const I=await B.json();if(I.success){M.className="test-result-box success";const A=I.is_cluster?` • Cluster Mode (${I.cluster_nodes_count||r.length} nodes reachable)`:"";M.innerHTML=`
          <i data-lucide="check-circle-2"></i>
          <span>Connected! Latency: <strong>${I.latency_ms} ms</strong>${A} (Redis v${I.redis_version})</span>
        `}else M.className="test-result-box error",M.innerHTML=`
          <i data-lucide="alert-circle"></i>
          <span>Failed: ${c(I.error||"Connection refused")}</span>
        `}catch(B){M.className="test-result-box error",M.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Error: ${c(B.message)}</span>
      `}finally{_.disabled=!1,_.innerHTML='<i data-lucide="zap"></i> Test Connection',f()}}),document.getElementById("connectionForm").addEventListener("submit",async l=>{l.preventDefault();const g=document.getElementById("connName").value.trim(),u=document.getElementById("connEnv").value,S=document.getElementById("connTypeSelect").value;let x=document.getElementById("connHost").value.trim()||"localhost",T=parseInt(document.getElementById("connPort").value,10)||6379;const C=parseInt(document.getElementById("connDb").value,10)||0,k=document.getElementById("connUsername").value.trim()||null,M=document.getElementById("connPassword").value,_=document.getElementById("connTls").checked,B=document.getElementById("connAutoActivate").checked;let I=null;S==="cluster"&&(r.length>0?(I=JSON.stringify(r.map(A=>({host:A.host,port:A.port}))),x=r[0].host,T=r[0].port):I=JSON.stringify([{host:x,port:T}]));try{if(W){const A={name:g,env:u,conn_type:S,host:x,port:T,cluster_nodes:I,db:C,username:k,use_tls:_};M&&(A.password=M);const ce=await fetch(`/api/connections/${W}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)});if(!ce.ok){const Te=await ce.json().catch(()=>({}));throw new Error(Te.detail||"Failed to update connection")}}else{const A={name:g,env:u,conn_type:S,host:x,port:T,cluster_nodes:I,db:C,username:k,password:M||null,use_tls:_},ce=await fetch(`/api/connections?auto_activate=${B}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)});if(!ce.ok){const Te=await ce.json().catch(()=>({}));throw new Error(Te.detail||"Failed to save connection")}}Y.classList.remove("active"),W=null,document.getElementById("connectionForm").reset(),r=[],s(),await J(),await O(),await N()}catch(A){alert("Error saving: "+A.message)}}),document.getElementById("btnRefreshStats").addEventListener("click",O);const ee=document.getElementById("keySearchInput");let ye=null;ee.addEventListener("input",()=>{clearTimeout(ye),ye=setTimeout(()=>{U=ee.value.trim()||"*",N()},400)}),ee.addEventListener("keydown",l=>{l.key==="Enter"&&(clearTimeout(ye),U=ee.value.trim()||"*",N())});const Ie=document.getElementById("btnRegexToggle");Ie&&Ie.addEventListener("click",()=>{oe=!oe,Ie.classList.toggle("active",oe),ee.placeholder=oe?"Search keys by regex (e.g. ^user:\\d+:profile$, session|token) - Press Enter":"Search keys by pattern (e.g. *, bikes:*, sample_*) - Press Enter",clearTimeout(ye),U=ee.value.trim()||"*",N()}),document.querySelectorAll("#typeFilterGroup .type-tab").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll("#typeFilterGroup .type-tab").forEach(g=>g.classList.remove("active")),l.classList.add("active"),se=l.getAttribute("data-type"),N()})});const rt=document.getElementById("btnScanNext");rt&&rt.addEventListener("click",()=>Oe());const dt=document.getElementById("btnScanAll");dt&&dt.addEventListener("click",()=>In());const ct=document.getElementById("btnResetScan");ct&&ct.addEventListener("click",N);function ge(l){const g=document.querySelector(".sidebar"),u=document.getElementById("btnShowSidebar");g&&(l?(g.classList.add("collapsed"),u&&(u.style.display="inline-flex"),localStorage.setItem("redis_insight_sidebar_collapsed","true")):(g.classList.remove("collapsed"),u&&(u.style.display="none"),localStorage.setItem("redis_insight_sidebar_collapsed","false")),f())}const pt=document.getElementById("btnToggleSidebar");pt&&pt.addEventListener("click",()=>ge(!0));const mt=document.getElementById("btnShowSidebar");mt&&mt.addEventListener("click",()=>ge(!1)),localStorage.getItem("redis_insight_sidebar_collapsed")==="true"&&ge(!0),document.addEventListener("keydown",l=>{if((l.ctrlKey||l.metaKey)&&l.key.toLowerCase()==="b"){const g=document.querySelector(".sidebar"),u=g&&g.classList.contains("collapsed");ge(!u),l.preventDefault()}}),setInterval(O,15e3)}async function wt(){Mn(),f(),Wn();try{await J(),await O()}catch(t){console.error("Failed to load initial status:",t)}E.find(t=>t.is_connected&&t.is_selected)||E.find(t=>t.is_connected)?await N():Je()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",wt):wt();
