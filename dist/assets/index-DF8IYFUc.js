(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=(e,t,n=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{o.setAttribute(a,String(t[a]))}),n.length&&n.forEach(a=>{const i=Ut(...a);o.appendChild(i)}),o};var fn=([e,t,n])=>Ut(e,t,n);/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=e=>Array.from(e.attributes).reduce((t,n)=>(t[n.name]=n.value,t),{}),vn=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",bn=e=>e.flatMap(vn).map(n=>n.trim()).filter(Boolean).filter((n,o,a)=>a.indexOf(n)===o).join(" "),xn=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,n,o)=>n.toUpperCase()+o.toLowerCase()),Rt=(e,{nameAttr:t,icons:n,attrs:o})=>{const a=e.getAttribute(t);if(a==null)return;const i=xn(a),r=n[i];if(!r)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const l=hn(e),[c,y,g]=r,b={...y,"data-lucide":a,...o,...l},w=bn(["lucide",`lucide-${a}`,l,o]);w&&Object.assign(b,{class:w});const h=fn([c,b,g]);return e.parentNode?.replaceChild(h,e)};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",v,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",v,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",v,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",v,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",v,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",v,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",v,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",v,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",v,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",v,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",v,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",v,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",v,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",v,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",v,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=["svg",v,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=["svg",v,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",v,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=["svg",v,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=["svg",v,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=["svg",v,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=["svg",v,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=["svg",v,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=["svg",v,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=["svg",v,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=["svg",v,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=["svg",v,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=["svg",v,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=["svg",v,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=["svg",v,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=["svg",v,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=["svg",v,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=["svg",v,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=["svg",v,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=["svg",v,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=["svg",v,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=({icons:e={},nameAttr:t="data-lucide",attrs:n={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(a=>Rt(a,{nameAttr:t,icons:e,attrs:n})),t==="data-lucide"){const a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(i=>Rt(i,{nameAttr:"icon-name",icons:e,attrs:n})))}};let re=[],de=[],Se=0,$e="",ce="all",Dt=null,W=null,Ke=!1,Y=0,P="*",z="all",oe=!1,he=0,ie=!1,Ze=0,B=null,H=[],ge=new Set,U=!1,R=parseInt(localStorage.getItem("redis_insight_auto_refresh_sec")||"10",10);(isNaN(R)||R<5)&&(R=10);let O=R,pe=null,G=null,qt=null,Ue=null,I=[],Vt="ALL",ke="",Ve=null,Gt="all",Jt="",Z=2,fe=0,Ie=50,J=null;const Wt=[50,100,200,500,1e3,2e3,5e3,1e4],ao=200;function u(){oo({icons:{Layers:Hn,Plus:Un,RefreshCw:Vn,Search:Gn,Cpu:An,Trash2:Zn,Zap:no,CheckCircle2:Tn,AlertCircle:$n,Database:Rn,ShieldCheck:Wn,Lock:On,ArrowDownCircle:In,X:to,Play:Kn,Copy:_n,Clock:Mn,Edit:Yn,ExternalLink:Nn,Code:Bn,Users:eo,Server:Jn,Network:Fn,GitBranch:Pn,ArrowRightLeft:En,Activity:wn,PieChart:kn,AlertTriangle:Xn,TrendingUp:Qn,BarChart2:Cn,Power:qn,ChevronLeft:Ln,ChevronRight:Sn,PanelLeft:jn,Download:Dn,FileText:zn}})}function io(){const e=document.getElementById("app");e&&(e.innerHTML=`
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

          <!-- Panel 1: Safe SCAN Status & Live Auto-Refresh Watcher -->
          <div class="chunk-status-bar">
            <div class="status-left">
              <span class="safety-badge">
                <i data-lucide="shield-check" style="width: 14px; height: 14px;"></i>
                <span id="scanChunkLabel">Safe SCAN (Chunk 50)</span>
              </span>
              <span id="scanStatusText" class="scan-status-text">Scanning keys...</span>
            </div>

            <div class="status-right">
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
            </div>
          </div>

          <!-- Panel 2: Key Browsing Pagination & Action Operations -->
          <div class="keys-actions-bar">
            <div class="actions-left" id="scanActionsGroup">
              <label for="scanBatchSizeSelect" class="batch-size-label">Keys per scan</label>
              <select id="scanBatchSizeSelect" class="batch-size-select" title="Keys requested per SCAN batch (applies to the next Load More)">
                ${Wt.map(t=>`<option value="${t}"${t===50?" selected":""}>${t.toLocaleString()}</option>`).join("")}
              </select>
              <button type="button" class="btn btn-primary btn-toolbar-action" id="btnScanNext" style="font-size: 0.75rem; padding: 0.32rem 0.75rem;">
                <i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i>
                <span>Load More</span>
              </button>
            </div>

            <div class="actions-right">
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
  `)}async function D(){oe=!1,fe++;const e=fe;Y=0,ie=!1,he=0,H=[],ge.clear();const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="none"),n&&(n.style.display="block"),Xt(),await Qt(e)}function ae(){const e=document.getElementById("btnToggleAutoRefresh"),t=document.getElementById("autoRefreshStatusText"),n=document.getElementById("autoRefreshIntervalSelect");if(!(!e||!t))if(U){e.classList.add("active");const o=O>=60?`${Math.floor(O/60)}m ${O%60}s`:`${O}s`;e.title=`Auto-refresh active (Pattern: "${P||"*"}"). Refreshing in ${o}. Click to pause.`,t.textContent=`Auto: ${o}`,n&&(n.value=String(R))}else{e.classList.remove("active");const o=R>=60?`${Math.floor(R/60)}m`:`${R}s`;e.title=`Click to watch keys matching pattern "${P||"*"}" every ${o}`,t.textContent="Auto: Off",n&&(n.value=String(R))}}function Ce(){O=R,ae()}function Yt(){U=!0,O=R,ae(),pe&&clearInterval(pe),pe=setInterval(async()=>{if(!U)return;const e=document.querySelector(".modal-backdrop.active");document.hidden||e||(O--,O<=0?(O=R,ae(),I.some(n=>n.is_connected)&&!oe&&await D()):ae())},1e3)}function so(){U=!1,pe&&(clearInterval(pe),pe=null),O=R,ae()}function lo(){U?so():Yt()}function Zt(e){if(e==null)return!0;const t=String(e).trim();if(t===""||t==="0")return!0;if(t.startsWith("{"))try{return Object.values(JSON.parse(t)).every(n=>Number(n)===0)}catch{return!1}return!1}function ro(e){const t=String(e??"").trim();if(t.startsWith("{"))try{const n=Object.values(JSON.parse(t));return`${n.filter(a=>Number(a)!==0).length} of ${n.length} nodes still scanning`}catch{return"more keys available"}return"more keys available"}function co(){return!!(B&&B.is_cluster)||String(Y??"").trim().startsWith("{")}async function Qt(e=null){if(oe||ie)return;const t=e!==null?e:fe;oe=!0,zt();try{const n=`/api/keys?pattern=${encodeURIComponent(P)}&cursor=${encodeURIComponent(String(Y??"0"))}&count=${Ie}${z!=="all"?`&type=${encodeURIComponent(z)}`:""}`,o=await fetch(n);if(!o.ok)throw new Error("Failed to scan keys");const a=await o.json();if(t!==fe)return;Y=a.cursor,ie=Zt(Y),Ze=a.total_in_db;const r=(a.keys||[]).filter(l=>ge.has(l.name)?!1:(ge.add(l.name),!0)).map(l=>({key:l.name,type:l.type,ttl_seconds:l.ttl,status:l.ttl===-1?"Persistent":l.ttl===-2?"Expired":`Expires in ${l.ttl}s`}));r.length>0&&H.push(...r),Xt(),he=ge.size}catch(n){console.error("Scan error:",n)}finally{t===fe&&(oe=!1,zt())}}function Xt(){const e=document.getElementById("gridViewerContainer");if(e){if(H.length===0){const t=!ie&&Zt(Y);e.innerHTML=ie?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${d(P)}</code>".
      </div>
    `:t?`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${d(P)}</code>"...
      </div>
    `:`
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${d(P)}</code>" in the part of the keyspace scanned so far.<br>
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
          ${H.map(t=>`
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
                ${B?.read_only?`
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
  `,u(),e.querySelectorAll(".key-row").forEach(t=>{t.addEventListener("click",()=>{const n=decodeURIComponent(t.getAttribute("data-key"));ve(n)})}),e.querySelectorAll(".btn-delete-key-table").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const o=decodeURIComponent(t.getAttribute("data-key"));Xe(o,()=>{D()})})})}}function Nt(){const e=document.getElementById("scanChunkLabel");e&&(e.textContent=`Safe SCAN (Chunk ${Ie.toLocaleString()})`)}function zt(){const e=document.getElementById("scanStatusText"),t=document.getElementById("btnScanNext"),n=ie;e&&(e.innerHTML=`
      Loaded <strong>${he.toLocaleString()}</strong> keys
      ${n?'<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>':`<span style="color: var(--text-muted);">(${d(ro(Y))})</span>`}
      | ${co()?"Cluster Total":"DB Total"}: <strong>${Number(Ze||0).toLocaleString()}</strong>
    `),t&&(t.disabled=oe||n,t.innerHTML=oe?'<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...':n?'<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded':'<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More',u())}async function ve(e){G=e;const t=document.getElementById("keyDetailModal"),n=document.getElementById("detailKeyTitle"),o=document.getElementById("detailHeaderMeta"),a=document.getElementById("detailBodyContent"),i=document.getElementById("btnDeleteKeyFromDetail");i&&(i.style.display=B?.read_only?"none":""),n.textContent=e,n.title=e,o.innerHTML='<span style="color: var(--text-muted);">Loading key details...</span>',a.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>',t.classList.add("active");try{let r=await fetch(`/api/keys/detail?key=${encodeURIComponent(e)}`);if(r.ok||(r=await fetch(`/api/keys/${encodeURIComponent(e)}/detail`)),!r.ok){let c="Key not found or could not be read";try{const y=await r.json();y&&y.detail&&(c=y.detail)}catch{}throw new Error(c)}const l=await r.json();qt=l,po(l),uo(l)}catch(r){o.innerHTML='<span style="color: var(--accent-danger);">Error</span>',a.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Failed to inspect key</h4>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">${d(r.message)}</p>
      </div>
    `,u()}}function po(e){const t=document.getElementById("detailHeaderMeta"),n=e.memory_bytes?e.memory_bytes>1024?`${(e.memory_bytes/1024).toFixed(1)} KB`:`${e.memory_bytes} B`:"N/A",o=e.ttl===-1?"No expiration":e.ttl===-2?"Expired":`${e.ttl}s`;t.innerHTML=`
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
      ${B?.read_only?`
        <span title="Read-Only Mode: TTL modification locked" style="font-size: 0.72rem; color: var(--text-muted); display: inline-flex; align-items: center; gap: 3px; margin-left: 0.25rem;">
          <i data-lucide="lock" style="width: 11px; height: 11px;"></i>
        </span>
      `:`
        <button type="button" class="btn btn-secondary" id="btnEditTtl" style="padding: 0.2rem 0.5rem; font-size: 0.72rem; margin-left: 0.25rem;">
          Edit TTL
        </button>
      `}
    </div>
  `,u();const a=document.getElementById("btnEditTtl");a&&a.addEventListener("click",()=>{mo(e.name,e.ttl)})}async function mo(e,t){if(B?.read_only){alert("TTL modification is disabled in Read-Only mode.");return}const n=prompt(`Enter new TTL in seconds for '${e}':
(-1 to persist with no expiration, or number of seconds)`,t>0?t:"3600");if(n===null)return;const o=parseInt(n.trim(),10);if(isNaN(o)){alert("Please enter a valid integer.");return}try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/ttl`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({seconds:o})})).ok)throw new Error("Failed to update TTL");ve(e)}catch(a){alert("Error updating TTL: "+a.message)}}function uo(e){const t=document.getElementById("detailBodyContent"),n=e.type.toLowerCase();if(n==="hash"){const o=e.fields||[],a=e.has_more_fields?Number(e.fields_cursor||0):0;J={key:e.name,cursor:a,fields:[...o],total:Number(e.length||o.length),match:null,loading:!1},t.innerHTML=`
      <div class="fields-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <input type="text" id="hashFieldSearchInput" class="field-search-input" placeholder="Filter fields (Enter: search all)" title="Filters loaded fields instantly; press Enter to search the whole hash on the server (HSCAN MATCH)">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="hashFieldCountText">${tn(o.length)}</span>
        </div>
        ${B?.read_only?"":`
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
            ${en(o)}
          </tbody>
        </table>
      </div>
      <div id="hashFieldsFooter" style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);"></div>
    `,u(),go(e.name),Qe();return}if(e.is_json||n.includes("json")){const o=e.parsed_json?JSON.stringify(e.parsed_json,null,2):e.value||"";t.innerHTML=`
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
    `;return}t.innerHTML=`<div class="json-view-box">${d(String(e.value))}</div>`}function en(e){return e.length===0?'<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>':e.map(t=>`
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
        ${d(t.field)}
      </td>
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
        ${d(t.value)}
      </td>
      <td style="padding: 0.6rem 1rem; text-align: right;">
        ${B?.read_only?`
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
  `).join("")}function tn(e,t=null){const n=J,o=n?n.total:e,a=n&&n.match?`${e.toLocaleString()} matching fields loaded`:e<o?`${e.toLocaleString()} of ${o.toLocaleString()} fields loaded`:`${e.toLocaleString()} fields`;return t!==null?`${t.toLocaleString()} shown · ${a}`:a}function yo(e){return`*${e.replace(/[\\*?\[\]]/g,t=>`\\${t}`)}*`}function nn(){const e=J,t=document.getElementById("hashFieldsTableBody"),n=document.getElementById("hashFieldCountText"),o=document.getElementById("hashFieldSearchInput");if(!e||!t)return;const a=o?o.value.trim().toLowerCase():"",i=a?e.fields.filter(r=>r.field.toLowerCase().includes(a)||r.value.toLowerCase().includes(a)):e.fields;t.innerHTML=en(i),n&&(n.textContent=tn(e.fields.length,a?i.length:null)),u(),on(e.key),Qe()}function Qe(){const e=document.getElementById("hashFieldsFooter"),t=J;if(!e||!t)return;const n=t.cursor!==0,o=t.match?`Server-side filter: <code>${d(t.match)}</code> · <a href="#" id="btnClearHashMatch" style="color: var(--accent-primary);">clear</a>`:n?"Search applies to loaded fields. Press Enter to search all fields on the server.":"";e.innerHTML=`
    <span>${o}</span>
    ${n?`
      <button type="button" class="btn btn-secondary" id="btnLoadMoreHashFields" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" ${t.loading?"disabled":""}>
        <i data-lucide="${t.loading?"refresh-cw":"arrow-down-circle"}" ${t.loading?'class="spin"':""} style="width: 13px; height: 13px;"></i>
        ${t.loading?"Loading...":"Load More Fields"}
      </button>`:""}
  `,u();const a=document.getElementById("btnLoadMoreHashFields");a&&a.addEventListener("click",()=>Ge());const i=document.getElementById("btnClearHashMatch");i&&i.addEventListener("click",r=>{r.preventDefault();const l=document.getElementById("hashFieldSearchInput");l&&(l.value=""),Ge({reset:!0,match:null})})}async function Ge({reset:e=!1,match:t}={}){const n=J;if(!n||n.loading||!e&&n.cursor===0)return;const o=n.key,a=e?t:n.match;n.loading=!0,Qe();try{const i=new URLSearchParams({cursor:String(e?0:n.cursor),count:String(ao)});a&&i.set("match",a);const r=await fetch(`/api/keys/${encodeURIComponent(o)}/hash/fields?${i}`);if(!r.ok){const y=await r.json().catch(()=>({}));throw new Error(y.detail||`Server error: ${r.status}`)}const l=await r.json();if(J!==n||G!==o)return;e&&(n.fields=[]);const c=new Set(n.fields.map(y=>y.field));for(const y of l.fields||[])c.has(y.field)||(c.add(y.field),n.fields.push(y));n.cursor=Number(l.cursor||0),n.total=Number(l.total??n.total),n.match=a||null}catch(i){alert("Failed to load hash fields: "+i.message)}finally{n.loading=!1,J===n&&nn()}}function go(e){const t=document.getElementById("hashFieldSearchInput");t&&(t.addEventListener("input",()=>nn()),t.addEventListener("keydown",o=>{if(o.key!=="Enter"||!J)return;const a=t.value.trim(),i=J;i.cursor===0&&!i.match||Ge({reset:!0,match:a?yo(a):null})}));const n=document.getElementById("btnAddHashField");n&&n.addEventListener("click",async()=>{const o=prompt(`Enter field name for hash '${e}':`);if(!o)return;const a=prompt(`Enter value for field '${o}':`);if(a!==null)try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:o,value:a})})).ok)throw new Error("Failed to set field");ve(e)}catch(i){alert("Error setting field: "+i.message)}}),on(e)}function on(e){document.querySelectorAll(".btn-delete-hash-field").forEach(t=>{t.addEventListener("click",async()=>{const n=decodeURIComponent(t.getAttribute("data-field"));if(confirm(`Delete field '${n}' from hash '${e}'?`))try{if(!(await fetch(`/api/keys/${encodeURIComponent(e)}/field/${encodeURIComponent(n)}`,{method:"DELETE"})).ok)throw new Error("Failed to delete field");ve(e)}catch(o){alert("Error: "+o.message)}})})}function fo(e){if(!e)return null;const t=e.match(/filename\*\s*=\s*([\w-]*)'[^']*'([^;]+)/i);if(t)try{return decodeURIComponent(t[2].trim().replace(/^"|"$/g,""))}catch{}const n=e.match(/filename\s*=\s*"([^"]*)"/i)||e.match(/filename\s*=\s*([^;]+)/i);return n&&n[1].trim()?n[1].trim():null}function an(e,t){const n=URL.createObjectURL(e),o=document.createElement("a");o.href=n,o.download=t,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(n),3e4)}async function sn(e,t,n=null){let o=fo(e.headers.get("content-disposition"))||t;const a=String(e.headers.get("x-export-format")||n||"").toLowerCase();a&&!o.toLowerCase().endsWith(`.${a}`)&&(o=`${o}.${a}`);const i=await e.blob();return an(i,o),o}async function ho(e,t){if(!e)return;const n=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Downloading...',u());try{const o=await fetch(`/api/keys/${encodeURIComponent(e)}/download`);if(!o.ok){const i=await o.json().catch(()=>({}));throw new Error(i.detail||`Server error: ${o.status}`)}const a=e.replace(/[^A-Za-z0-9._-]+/g,"_")||"redis_key";await sn(o,a),o.headers.get("x-export-truncated")==="true"&&alert(`Download was capped: the key has ${Number(o.headers.get("x-export-total")||0).toLocaleString()} entries, only the first portion was included.`)}catch(o){alert("Download failed: "+o.message)}finally{t&&(t.disabled=!1,t.innerHTML=n,u())}}function d(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Xe(e,t){if(B?.read_only){alert("Key deletion is disabled in Read-Only mode.");return}Ue=t;const n=document.getElementById("deleteKeyConfirmModal"),o=document.getElementById("deleteKeyTargetName"),a=document.getElementById("inputConfirmDelete"),i=document.getElementById("btnSubmitDeleteKey");o.textContent=e,a.value="",i.disabled=!0,n.classList.add("active"),a.focus(),a.oninput=()=>{const r=a.value.trim().toUpperCase();i.disabled=r!=="CONFIRM"&&a.value.trim()!==e},i.onclick=async()=>{i.disabled=!0,i.textContent="Deleting...";try{const r=await fetch(`/api/keys/${encodeURIComponent(e)}?confirmed=true`,{method:"DELETE"}),l=await r.json();if(!r.ok)throw new Error(l.detail||"Failed to delete key");n.classList.remove("active"),Ue&&Ue()}catch(r){alert("Error deleting key: "+r.message)}finally{i.disabled=!1,i.textContent="Delete Permanently"}}}async function vo(){document.getElementById("clientsListModal").classList.add("active"),await et()}function Pt(){document.getElementById("clientsListModal").classList.remove("active")}async function et(){const e=document.getElementById("clientsTableContainer"),t=document.getElementById("clientsCountBadge"),n=document.getElementById("clientsQuickStats"),o=document.getElementById("clientsSearchInput");e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>',u();try{const a=await fetch("/api/clients");if(!a.ok)throw new Error("Failed to load connected clients");re=await a.json(),t&&(t.textContent=re.length),n&&(n.textContent=`${re.length} total connections`),o&&(o.value=""),ln(re)}catch(a){e.innerHTML=`
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
        <h4>Error loading clients</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${a.message}</p>
      </div>
    `,u()}}function ln(e){const t=document.getElementById("clientsTableContainer");if(!e||e.length===0){t.innerHTML=`
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
              ${B?.read_only?`
                <span title="Read-Only Mode: Disconnecting clients is locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
                  <i data-lucide="lock" style="width: 13px; height: 13px;"></i>
                </span>
              `:`
                <button type="button" class="btn-icon danger btn-kill-client" data-id="${n.id}" data-addr="${d(n.addr)}" title="Disconnect client">
                  <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                </button>
              `}
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,u(),t.querySelectorAll(".btn-kill-client").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-id"),a=n.getAttribute("data-addr");bo(o,a)})})}async function bo(e,t){if(B?.read_only){alert("Client disconnection is disabled in Read-Only mode.");return}if(confirm(`Are you sure you want to disconnect client #${e} (${t})?`))try{const n=await fetch(`/api/clients/${e}`,{method:"DELETE"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to disconnect client");await et(),await q()}catch(n){alert("Error disconnecting client: "+n.message)}}async function xo(){const e=document.getElementById("slowlogModal");if(!e)return;e.classList.add("active"),Se=0,$e="",ce="all";const t=document.getElementById("btnClearSlowlogModal");t&&(t.style.display=B?.read_only?"none":""),document.querySelectorAll(".slowlog-filter-btn").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-min-duration")==="0")});const n=document.getElementById("slowlogSearchInput");n&&(n.value=""),await tt()}function Ht(){const e=document.getElementById("slowlogModal");e&&e.classList.remove("active")}async function tt(){const e=document.getElementById("slowlogTableContainer"),t=document.getElementById("slowlogCountBadge"),n=document.getElementById("slowlogThresholdBadge"),o=document.getElementById("slowlogFooterStats");e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `,u());try{const a=await fetch("/api/slowlog?limit=250");if(!a.ok)throw new Error("Failed to fetch slowlog");const i=await a.json();if(de=i.entries||[],t&&(t.textContent=de.length),n&&i.slower_than_us!==null&&i.slower_than_us!==void 0){const r=(i.slower_than_us/1e3).toFixed(1);n.textContent=`Threshold: > ${r}ms (${i.slower_than_us} µs)`}o&&(o.textContent=`Total buffer: ${i.total_len||de.length} entries | Max buffer: ${i.max_len||"N/A"}`),wo(de),Te()}catch(a){e&&(e.innerHTML=`
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${d(a.message)}</p>
        </div>
      `,u())}}function wo(e){const t=document.getElementById("slowlogNodeFilterContainer");if(!t)return;const n=Array.from(new Set(e.map(a=>a.node).filter(Boolean)));if(n.length<=1){t.innerHTML="";return}t.innerHTML=`
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${n.length})</option>
      ${n.map(a=>`<option value="${d(a)}" ${ce===a?"selected":""}>${d(a)}</option>`).join("")}
    </select>
  `;const o=document.getElementById("slowlogNodeSelect");o&&o.addEventListener("change",()=>{ce=o.value,Te()})}function Te(){let e=de;if(Se>0&&(e=e.filter(t=>t.duration_ms>=Se)),ce&&ce!=="all"&&(e=e.filter(t=>t.node===ce)),$e){const t=$e.toLowerCase();e=e.filter(n=>{const o=(n.command||[]).join(" ").toLowerCase(),a=(n.client_ip||"").toLowerCase(),i=(n.node||"").toLowerCase();return o.includes(t)||a.includes(t)||i.includes(t)||String(n.id).includes(t)})}Eo(e)}function Eo(e){const t=document.getElementById("slowlogTableContainer");if(t){if(!e||e.length===0){t.innerHTML=`
      <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <i data-lucide="check-circle-2" style="width: 28px; height: 28px; color: #4ade80;"></i>
        </div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.35rem;">No Slow Queries Recorded</h4>
        <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.5;">
          ${de.length===0?"Redis latency is healthy! All commands executed within the threshold.":"No slowlog entries matched the active filters."}
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
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <span class="slowlog-cmd-code" title="${d(a)}">${d(a)}</span>
                  <button type="button" class="btn-copy-inline btn-copy-slowlog-cmd" data-cmd="${d(a)}" title="Copy full command">
                    <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
                  </button>
                </div>
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
  `,u(),document.querySelectorAll(".btn-copy-slowlog-cmd").forEach(n=>{n.addEventListener("click",o=>{o.stopPropagation();const a=n.getAttribute("data-cmd");a&&navigator.clipboard.writeText(a).then(()=>{n.classList.add("copied"),n.innerHTML='<i data-lucide="check" style="width: 12px; height: 12px;"></i>',u(),setTimeout(()=>{n.classList.remove("copied"),n.innerHTML='<i data-lucide="copy" style="width: 12px; height: 12px;"></i>',u()},1500)})})})}}async function Co(){if(B?.read_only){alert("Slowlog reset is disabled in Read-Only mode.");return}if(confirm(`Are you sure you want to reset the Redis Slowlog buffer?

This will clear recorded slow commands across all connected Redis instances.`))try{if(!(await fetch("/api/slowlog/reset",{method:"POST"})).ok)throw new Error("Failed to reset slowlog");await tt()}catch(e){alert("Error resetting slowlog: "+e.message)}}async function rn(){const e=document.getElementById("memoryModal");e&&(e.classList.add("active"),await dn(),W?ot(W):nt())}function Je(){const e=document.getElementById("memoryModal");e&&e.classList.remove("active")}async function dn(){const e=document.getElementById("memoryOverviewContainer");if(e){e.innerHTML=`
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `,u();try{const t=await fetch("/api/memory/overview");if(!t.ok)throw new Error("Failed to fetch memory overview");Dt=await t.json(),ko(Dt)}catch(t){e.innerHTML=`
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${d(t.message)}</p>
      </div>
    `,u()}}}function ko(e){const t=document.getElementById("memoryOverviewContainer");if(!t||!e)return;let n="mem-status-healthy",o="Optimal (1.0 - 1.5)";e.fragmentation_status==="critical"?(n="mem-status-critical",o="Critical (> 2.0)"):e.fragmentation_status==="warning"&&(n="mem-status-warning",o=e.fragmentation_ratio<.9?"Swapping (< 0.9)":"Warning (> 1.5)"),t.innerHTML=`
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
  `,u()}function nt(){const e=document.getElementById("memoryProfilingContainer");if(!e)return;e.innerHTML=`
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
  `,u();const t=document.getElementById("btnStartProfilingAction");t&&t.addEventListener("click",()=>{const n=parseInt(document.getElementById("memSampleSizeSelect").value,10)||500,o=document.getElementById("memSamplePatternInput").value||"*";Lo(n,o)})}async function Lo(e=500,t="*"){const n=document.getElementById("memoryProfilingContainer");if(n){Ke=!0,n.innerHTML=`
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: #a78bfa; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">Analyzing Redis Keyspace...</h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
        Scanning sample of up to <strong>${e.toLocaleString()}</strong> keys (pattern <code>${d(t)}</code>) and measuring memory allocations...
      </p>
    </div>
  `,u();try{const o=await fetch("/api/memory/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sample_size:e,pattern:t})});if(!o.ok)throw new Error("Failed to complete memory profiling");W=await o.json(),Ke=!1,ot(W)}catch(o){Ke=!1,n.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Memory Profiling Failed</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${d(o.message)}</p>
        <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Try Again</button>
      </div>
    `,u();const a=document.getElementById("btnRetryProfiling");a&&a.addEventListener("click",nt)}}}function ot(e){const t=document.getElementById("memoryProfilingContainer");if(!t||!e)return;const n={string:"#38bdf8",hash:"#ec4899",list:"#a855f7",set:"#eab308",zset:"#22c55e",stream:"#06b6d4",json:"#f97316",other:"#94a3b8"};t.innerHTML=`
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
        ${Ot(e.top_bigkeys)}
      </div>
    </div>
  `,u();const o=document.getElementById("btnReRunProfiling");o&&o.addEventListener("click",nt);const a=document.getElementById("bigkeysSearchInput");a&&a.addEventListener("input",()=>{const i=a.value.trim().toLowerCase(),r=i?e.top_bigkeys.filter(c=>c.key.toLowerCase().includes(i)||c.type.toLowerCase().includes(i)):e.top_bigkeys,l=document.getElementById("bigkeysTableContainer");l&&(l.innerHTML=Ot(r),u(),Ft())}),Ft()}function Ot(e){if(!e||e.length===0)return'<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>';const t=e[0]?e[0].memory_bytes:1;return`
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
        ${e.map((n,o)=>{let a="rank-normal";o===0?a="rank-gold":o===1?a="rank-silver":o===2&&(a="rank-bronze");const i=t>0?Math.max(5,Math.round(n.memory_bytes/t*100)):10;let r="No TTL (Persistent)",l="var(--text-muted)";return n.ttl>0&&(r=`${n.ttl.toLocaleString()}s`,l="var(--accent-warning)"),`
            <tr>
              <td>
                <span class="rank-badge ${a}">#${o+1}</span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <a href="javascript:void(0)" class="key-name-link bigkey-inspect-btn" data-key="${d(n.key)}" style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 600; color: #38bdf8; text-decoration: none;" title="Inspect key: ${d(n.key)}">
                    ${d(n.key)}
                  </a>
                  <button type="button" class="btn-copy-inline btn-copy-bigkey" data-key="${d(n.key)}" title="Copy key name">
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
                  <div style="width: ${i}%; height: 100%; background: #38bdf8; border-radius: 9999px;"></div>
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
                  <button type="button" class="btn btn-secondary bigkey-inspect-btn" data-key="${d(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Inspect key detail">
                    <i data-lucide="external-link" style="width: 11px; height: 11px;"></i>
                    Inspect
                  </button>
                  ${B?.read_only?"":`
                    <button type="button" class="btn btn-danger bigkey-delete-btn" data-key="${d(n.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Delete oversized key">
                      <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
                    </button>
                  `}
                </div>
              </td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function Ft(){document.querySelectorAll(".bigkey-inspect-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&(Je(),ve(t))})}),document.querySelectorAll(".btn-copy-bigkey").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const n=e.getAttribute("data-key");n&&navigator.clipboard.writeText(n).then(()=>{e.classList.add("copied"),e.innerHTML='<i data-lucide="check" style="width: 11px; height: 11px;"></i>',u(),setTimeout(()=>{e.classList.remove("copied"),e.innerHTML='<i data-lucide="copy" style="width: 11px; height: 11px;"></i>',u()},1500)})})}),document.querySelectorAll(".bigkey-delete-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-key");t&&Xe(t,async()=>{W&&(W.top_bigkeys=W.top_bigkeys.filter(n=>n.key!==t),ot(W)),await q()})})})}async function Q(){const e=document.getElementById("connectionsList");try{const[t,n]=await Promise.all([fetch("/api/connections"),fetch("/api/connections/limit")]);I=await t.json()||[],n.ok&&(Z=(await n.json()).limit||2),Le()}catch{e&&(e.innerHTML='<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>')}}function cn(e,t){const n=document.getElementById("connectedCountDisplay"),o=document.getElementById("connLimitDisplay"),a=document.getElementById("connLimitSelect"),i=document.getElementById("limitProgressDots"),r=document.getElementById("limitCountPill");if(n&&(n.textContent=e),o&&(o.textContent=t),a&&String(a.value)!==String(t)&&(a.value=String(t)),r&&(e>=t&&t>0?(r.classList.add("at-limit"),r.title="Connection limit reached"):(r.classList.remove("at-limit"),r.title=`${e} of ${t} connections in use`)),i){let l="";for(let c=0;c<t;c++){const y=c<e;l+=`<span class="limit-slot-dot ${y?"filled":"empty"}" title="Slot ${c+1}: ${y?"Connected":"Available"}"></span>`}i.innerHTML=l}}function Le(){const e=document.getElementById("connectionsList");if(!e)return;const t=document.getElementById("totalConnCountBadge");t&&(t.textContent=I.length),document.querySelectorAll("#envFilterPills .env-pill-btn").forEach(l=>{const c=l.getAttribute("data-env");let y=0;c==="ALL"?y=I.length:y=I.filter(g=>(g.env||"LOCAL").toUpperCase()===c).length,l.textContent=`${c} (${y})`});const o=(ke||"").trim().toLowerCase(),a=Vt,i=I.filter(l=>{if(a!=="ALL"&&(l.env||"LOCAL").toUpperCase()!==a)return!1;if(o){const c=(l.name||"").toLowerCase().includes(o),y=(l.host||"").toLowerCase().includes(o),g=(l.env||"").toLowerCase().includes(o),b=(l.conn_type||"").toLowerCase().includes(o);if(!c&&!y&&!g&&!b)return!1}return!0});i.sort((l,c)=>{const y=l.is_connected?1:0,g=c.is_connected?1:0;if(g!==y)return g-y;const b=l.is_selected?1:0,w=c.is_selected?1:0;return w!==b?w-b:(l.name||"").localeCompare(c.name||"")});const r=I.filter(l=>l.is_connected).length;if(cn(r,Z),i.length===0){e.innerHTML=`
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${o?`No results found for "${d(o)}"`:`No connections configured in ${d(a)}`}
        </span>
      </div>
    `,u();return}e.innerHTML=i.map(l=>{const c=(l.env||"LOCAL").toUpperCase(),y=`badge-env-${c.toLowerCase()}`,g=l.conn_type==="cluster",b=l.conn_type==="sentinel",w=l.source==="config",h=!!l.is_connected,N=!!l.is_selected;return`
      <div class="conn-card ${h?"is-connected":""} ${N?"selected active":""}" data-id="${l.id}" title="Click to review config & connection options">
        
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
            <span class="conn-name" title="${d(l.name)}">${d(l.name)}</span>
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
          <div class="conn-endpoint" title="${d(l.host)}:${l.port}">
            <i data-lucide="${g?"network":b?"git-branch":"server"}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${d(l.host)}:${l.port}</span>
          </div>

          <div class="conn-tags">
            <span class="badge-env ${y}">${c}</span>
            ${l.read_only?'<span class="badge-readonly" title="Read-Only Mode: Mutating operations locked">🔒 RO</span>':""}
            ${g?'<span class="badge-conn-type badge-type-cluster">CLUSTER</span>':""}
            ${b?'<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>':""}
            ${!g&&!b?`<span class="badge-db">DB${l.db}</span>`:""}
            ${l.use_tls?'<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>':""}
            ${l.has_password?'<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>':""}
            ${w?'<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>':""}
          </div>
        </div>

        <!-- Floating Quick Action Toolbar on Hover -->
        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${h?`
            ${N?"":`
              <button type="button" class="btn-hover-action btn-card-select" data-id="${l.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            `}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${l.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${g||h?`
              <button type="button" class="btn-hover-action btn-view-topology-card" data-id="${l.id}" title="View topology & nodes">
                <i data-lucide="layers" style="width: 11px; height: 11px;"></i>
              </button>
            `:""}
          `:`
            <button type="button" class="btn-hover-action btn-hover-connect btn-card-open-config" data-id="${l.id}" title="Review config & Connect">
              <i data-lucide="play" style="width: 11px; height: 11px;"></i>
              <span>Connect</span>
            </button>
            ${w?"":`
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${l.id}" data-name="${d(l.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            `}
          `}
        </div>

      </div>
    `}).join(""),u(),e.querySelectorAll(".conn-card").forEach(l=>{l.addEventListener("click",c=>{if(c.target.closest(".btn-delete-conn")||c.target.closest(".btn-view-topology-card")||c.target.closest(".btn-card-disconnect")||c.target.closest(".btn-card-select")||c.target.closest(".btn-card-open-config"))return;const y=l.getAttribute("data-id"),g=I.find(b=>b.id===y);g&&We(g)})}),e.querySelectorAll(".btn-card-disconnect").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const y=l.getAttribute("data-id");await at(y)})}),e.querySelectorAll(".btn-card-select").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const y=l.getAttribute("data-id");await mn(y)})}),e.querySelectorAll(".btn-card-open-config").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const y=l.getAttribute("data-id"),g=I.find(b=>b.id===y);g&&We(g)})}),e.querySelectorAll(".btn-view-topology-card").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const y=l.getAttribute("data-id");await Me(y)})}),e.querySelectorAll(".btn-delete-conn").forEach(l=>{l.addEventListener("click",async c=>{c.stopPropagation();const y=l.getAttribute("data-id"),g=l.getAttribute("data-name");confirm(`Are you sure you want to delete '${g}'?`)&&await Io(y)})})}function So(e){if(!e)return[];if(Array.isArray(e))return e.map(t=>typeof t=="object"&&t!==null?`${t.host||"127.0.0.1"}:${t.port||6379}`:String(t));if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(n=>typeof n=="object"&&n!==null?`${n.host||"127.0.0.1"}:${n.port||6379}`:String(n))}catch{return e.split(",").map(n=>n.trim()).filter(Boolean)}return[]}function We(e){const t=document.getElementById("clusterConfigModal"),n=document.getElementById("cfgModalTitle"),o=document.getElementById("cfgModalSubtitle"),a=document.getElementById("cfgModalBody"),i=document.getElementById("cfgModalFooter");n.textContent=e.name||"Cluster Configuration",o.textContent="Review configuration before connecting";const r=!!e.is_connected,l=!!e.is_selected,c=e.conn_type==="cluster",y=So(e.cluster_nodes),g=I.filter(X=>X.is_connected).length,b=!r&&g>=Z;a.innerHTML=`
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
            ${y.length>0?y.map(X=>`
                  <span class="seed-node-pill" title="${d(X)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${d(X)}
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
      <span>Connected Limit: <strong>${g} of ${Z}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${b?`
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${Z} maximum). Please disconnect a connected cluster first or increase the limit.</span>
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
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${b?"disabled":""}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `,u(),t.classList.add("active");const w=document.getElementById("btnCloseConfigModal");w&&(w.onclick=()=>t.classList.remove("active"));const h=document.getElementById("btnEditFromConfig");h&&(h.onclick=()=>{t.classList.remove("active"),openEditConnectionModal(e)});const N=document.getElementById("btnConnectFromConfig");N&&(N.onclick=async()=>{await pn(e.id),t.classList.remove("active")});const T=document.getElementById("btnDisconnectFromConfig");T&&(T.onclick=async()=>{await at(e.id),t.classList.remove("active")});const E=document.getElementById("btnSelectFromConfig");E&&(E.onclick=async()=>{await mn(e.id),t.classList.remove("active")});const F=document.getElementById("btnTopologyFromConfig");F&&(F.onclick=async()=>{t.classList.remove("active"),await Me(e.id)});const me=document.getElementById("btnTestFromConfig");me&&(me.onclick=async()=>{await $o(e)})}async function $o(e){const t=document.getElementById("cfgTestResultBox"),n=document.getElementById("btnTestFromConfig");n&&(n.disabled=!0,n.innerHTML="Testing..."),t&&(t.className="test-result-box",t.innerHTML="");try{const a=await(await fetch(`/api/connections/${e.id}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json();a.success?(t.className="test-result-box success",t.innerHTML=`
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${a.latency_ms} ms</strong> (Redis v${a.redis_version})</span>
      `):(t.className="test-result-box error",t.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${d(a.error||"Connection refused")}</span>
      `)}catch(o){t&&(t.className="test-result-box error",t.innerHTML=`<i data-lucide="alert-circle"></i><span>Error: ${d(o.message)}</span>`)}finally{n&&(n.disabled=!1,n.innerHTML='<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection'),u()}}async function pn(e){if(I.find(n=>n.id===e),I.filter(n=>n.is_connected&&n.id!==e).length>=Z){alert(`Connection limit reached: Maximum ${Z} connected cluster(s) allowed at a time.
Please disconnect an existing cluster first or increase the limit in the sidebar.`);return}try{const n=await fetch(`/api/connections/${e}/connect`,{method:"POST"}),o=await n.json();if(!n.ok)throw new Error(o.detail||"Failed to connect to cluster");await Q(),await q(),await D()}catch(n){alert("Connection error: "+n.message)}}async function at(e){try{const t=await fetch(`/api/connections/${e}/disconnect`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to disconnect cluster");await Q(),await q(),I.some(a=>a.is_connected&&a.id!==e)?await D():(H=[],ge.clear(),he=0,Y=0,ie=!1,Ze=0,it())}catch(t){alert("Disconnect error: "+t.message)}}async function mn(e){try{const t=await fetch(`/api/connections/${e}/select`,{method:"POST"}),n=await t.json();if(!t.ok)throw new Error(n.detail||"Failed to switch cluster");const o=document.getElementById("keyDetailModal");o&&o.classList.remove("active"),G=null,qt=null,await Q(),await q(),await D()}catch(t){alert("Switch error: "+t.message)}}function it(){const e=document.getElementById("scanStatusText");e&&(e.textContent="No cluster connected");const t=document.getElementById("emptyWorkspaceState"),n=document.getElementById("gridViewerContainer");t&&(t.style.display="flex"),n&&(n.style.display="none");const o=document.getElementById("btnConnectFirstAvailable");o&&(o.innerHTML=`<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${I.length})`,I.length>0&&(o.onclick=()=>We(I[0]))),u()}async function Io(e){try{if(!(await fetch(`/api/connections/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete");await Q(),await q(),await D()}catch(t){alert("Delete error: "+t.message)}}async function To(){const e=document.getElementById("keyspaceNodesModal");e&&(e.classList.add("active"),yn(B),await un())}function qe(){const e=document.getElementById("keyspaceNodesModal");e&&e.classList.remove("active")}async function un(){try{const e=await fetch("/api/status");if(!e.ok)throw new Error("Failed to load node stats");B=await e.json(),yn(B)}catch(e){const t=document.getElementById("keyspaceNodesContainer");t&&(t.innerHTML=`<div style="padding: 2rem; text-align: center; color: var(--accent-danger);">${d(e.message)}</div>`)}}function yn(e){const t=document.getElementById("keyspaceNodesContainer"),n=document.getElementById("keyspaceTotalBadge");if(!t||!e)return;const o=e.node_stats||[],a=o.filter(g=>g.role==="master"),i=a.reduce((g,b)=>g+(b.keys||0),0);if(n&&(n.textContent=`${i.toLocaleString()} keys`),a.length===0){t.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Per-node breakdown is only available for cluster connections.</div>';return}const r=g=>g==null?"—":Number(g).toLocaleString(),l=(g,b="left")=>`<th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: ${b};">${g}</th>`,c=(g,b="")=>`<td style="padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; ${b}">${g}</td>`,y=a.map(g=>{const b=i>0&&g.keys!==null?(g.keys/i*100).toFixed(1):"0.0",w=o.filter(T=>T.role==="replica"&&T.master===g.node),h=`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        ${c(`<span class="role-badge-master">MASTER</span> <span style="color: var(--text-primary); font-weight: 600; margin-left: 6px;">${d(g.node)}</span>`)}
        ${c(g.error?`<span style="color: var(--accent-danger);" title="${d(g.error)}">unreachable</span>`:r(g.keys),"text-align: right; color: var(--text-primary); font-weight: 600;")}
        ${c(`${b}%`,"text-align: right; color: var(--text-secondary);")}
        ${c(d(g.used_memory_human||"—"),"text-align: right; color: #c084fc;")}
        ${c(r(g.connected_clients),"text-align: right; color: #38bdf8;")}
      </tr>`,N=w.map(T=>{const E=T.keys!==null&&g.keys!==null?T.keys-g.keys:null,F=E===null?"":E===0?'<span style="color: var(--accent-success); margin-left: 6px;">in sync</span>':`<span style="color: var(--accent-warning); margin-left: 6px;" title="Replica key count differs from its master (replication lag or expiring keys)">${E>0?"+":""}${E.toLocaleString()}</span>`;return`
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(0,0,0,0.12);">
        ${c(`<span style="color: var(--text-muted); margin-left: 0.75rem;">↳</span> <span class="role-badge-replica">REPLICA</span> <span style="color: var(--text-secondary); margin-left: 6px;">${d(T.node)}</span>`)}
        ${c(T.error?`<span style="color: var(--accent-danger);" title="${d(T.error)}">unreachable</span>`:`${r(T.keys)}${F}`,"text-align: right; color: var(--text-secondary);")}
        ${c("","")}
        ${c(d(T.used_memory_human||"—"),"text-align: right; color: var(--text-muted);")}
        ${c(r(T.connected_clients),"text-align: right; color: var(--text-muted);")}
      </tr>`}).join("");return h+N}).join("");t.innerHTML=`
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${l("NODE")}${l("KEYS","right")}${l("SHARE","right")}${l("MEMORY","right")}${l("CLIENTS","right")}</tr>
      </thead>
      <tbody>${y}</tbody>
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
  `,u()}async function Me(e=null){const t=document.getElementById("clusterTopologyModal");if(t){if(t.classList.add("active"),e){const n=document.querySelector(`.conn-card[data-id="${e}"]`);n&&!n.classList.contains("active")&&await pn(e)}await gn()}}function jt(){const e=document.getElementById("clusterTopologyModal");e&&e.classList.remove("active")}async function gn(){document.getElementById("topologyStatsGrid");const e=document.getElementById("topologyTableContainer"),t=document.getElementById("topologyNodesCountBadge"),n=document.getElementById("topologyEnvBadge"),o=I.find(a=>a.is_active);if(o&&n){const a=(o.env||"LOCAL").toUpperCase();n.textContent=a,n.className=`badge-env badge-env-${a.toLowerCase()}`}e&&(e.innerHTML=`
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `,u());try{const a=await fetch("/api/topology");if(!a.ok)throw new Error("Failed to load cluster topology");const i=await a.json();Ve=i,t&&(t.textContent=`${i.total_nodes} Node${i.total_nodes!==1?"s":""}`),Mo(i),Ye()}catch(a){e&&(e.innerHTML=`
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${a.message}</p>
        </div>
      `,u())}}function Mo(e){const t=document.getElementById("topologyStatsGrid");if(!t)return;const n=e.is_cluster,o=(e.cluster_state||"").toLowerCase()==="ok"||!n;t.innerHTML=`
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
  `}function Ye(){const e=document.getElementById("topologyTableContainer");if(!e||!Ve)return;const t=Ve.nodes||[],n=(Jt||"").trim().toLowerCase(),o=Gt,a=t.filter(i=>{if(o!=="all"&&i.role.toLowerCase()!==o)return!1;if(n){const r=(i.addr||"").toLowerCase().includes(n),l=(i.id||"").toLowerCase().includes(n),c=(i.ip||"").toLowerCase().includes(n),y=(i.slots||"").toLowerCase().includes(n);if(!r&&!l&&!c&&!y)return!1}return!0});if(a.length===0){e.innerHTML='<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>';return}e.innerHTML=`
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
        ${a.map(i=>{const r=i.role==="master",l=(i.link_state||"connected").toLowerCase()==="connected",c=i.id?i.id.length>12?`${i.id.substring(0,10)}...`:i.id:"N/A",y=i.slots?`${i.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${i.slot_count||0} slots)</span>`:r?"None":"<span style='color: var(--text-muted);'>Replication slave</span>";return`
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
                <span class="link-dot ${l?"connected":"disconnected"}"></span>
                <span style="color: ${l?"var(--accent-success)":"var(--accent-danger)"};">${i.link_state||"connected"}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${y}
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
  `,u()}function Bo(){const e=document.getElementById("btnOpenBulkDeleteModal");e&&(B?.read_only?(e.disabled=!0,e.style.opacity="0.4",e.style.cursor="not-allowed",e.title="🔒 Bulk Delete is disabled in Read-Only mode"):(e.disabled=!1,e.style.opacity="1",e.style.cursor="pointer",e.title="Bulk delete matched keys (Dry-run & confirmation required)"))}async function q(){const e=document.getElementById("topConnContainer"),t=document.getElementById("topVitalsContainer");try{const o=await(await fetch("/api/status")).json();if(o.connected){const a=I.find(h=>h.is_selected)||I.find(h=>h.id===o.connection_id)||I.find(h=>h.is_connected),i=a&&a.conn_type==="cluster"||o.cluster_nodes&&o.cluster_nodes.length>0||o.is_cluster,r=o.cluster_nodes_count||(o.node_stats&&o.node_stats.length>0?o.node_stats.length:1),l=(o.node_stats||[]).filter(h=>h.role==="master");if(B=o,Bo(),e){const h=(o.env||a?.env||"LOCAL").toUpperCase();e.innerHTML=`
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${d(o.connection_name||"Connected")}">${d(o.connection_name||"Connected")}</span>
            <span class="badge-env badge-env-${h.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem; margin-right: 0.25rem;">${h}</span>
            ${o.read_only?'<span class="badge-readonly" title="Read-Only Mode: All write, update, and delete actions are locked" style="margin-right: 0.25rem;"><i data-lucide="lock"></i> READ ONLY</span>':""}
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
                ${i?`${r} ${r===1?"Node":"Nodes"}`:"1 Node"}
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
        `),u();const c=document.getElementById("btnTopDisconnect");c&&c.addEventListener("click",()=>{o.connection_id&&at(o.connection_id)});const y=document.getElementById("btnOpenClientsModal");y&&y.addEventListener("click",vo);const g=document.getElementById("btnOpenTopologyTop");g&&g.addEventListener("click",()=>Me());const b=document.getElementById("btnOpenKeyspaceTop");b&&l.length&&b.addEventListener("click",To);const w=document.getElementById("btnOpenMemoryTop");w&&w.addEventListener("click",rn)}else e&&(e.innerHTML=`
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${o.error?`<span class="top-conn-error" title="${d(o.error)}">${d(o.error)}</span>`:""}
          </div>
        `),t&&(t.innerHTML=`
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `),u(),he===0&&H.length===0&&it()}catch{e&&(e.innerHTML=`
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `),t&&(t.innerHTML=""),u()}}function _o(){const e=document.getElementById("connLimitSelect");e&&e.addEventListener("change",async()=>{const s=parseInt(e.value,10)||2;try{const m=await fetch("/api/connections/limit",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:s})});if(m.ok){const p=await m.json();Z=p.limit,cn(p.connected_count,p.limit)}}catch(m){console.error("Failed to update limit:",m)}});const t=document.getElementById("clusterConfigModal");t&&t.addEventListener("click",s=>{s.target===t&&t.classList.remove("active")});const n=document.getElementById("connSearchInput"),o=document.getElementById("btnClearConnSearch");n&&n.addEventListener("input",()=>{ke=n.value,o&&(o.style.display=ke?"flex":"none"),Le()}),o&&o.addEventListener("click",()=>{n&&(n.value="",n.focus()),ke="",o.style.display="none",Le()});const a=document.querySelectorAll("#envFilterPills .env-pill-btn");a.forEach(s=>{s.addEventListener("click",()=>{a.forEach(m=>m.classList.remove("active")),s.classList.add("active"),Vt=s.getAttribute("data-env")||"ALL",Le()})});const i=document.getElementById("btnReloadConfig");i&&i.addEventListener("click",async()=>{i.disabled=!0;try{const m=await(await fetch("/api/connections/reload-config",{method:"POST"})).json(),p=m.loaded??m.total_in_file??0;alert(`Config reloaded successfully! Synced ${p} connection(s) from config.`),await Q()}catch(s){alert("Failed to reload config: "+s.message)}finally{i.disabled=!1}}),window.addEventListener("focus",()=>{Q().catch(()=>{})});let r=[];function l(){const s=document.getElementById("clusterNodesList"),m=document.getElementById("clusterNodeCountBadge");if(s){if(m&&(m.textContent=`${r.length} configured`),r.length===0){s.innerHTML=`
        <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
          No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
        </div>
      `;return}s.innerHTML=r.map((p,x)=>{const f=p.role==="master",$=p.role==="replica",C=p.role==="seed",M=f?"master":$?"replica":"",k=f?"master":$?"replica":C?"seed":"manual",_=f?"Master":$?"Replica":C?"Seed":"Node";return`
        <span class="cluster-node-chip ${M}">
          <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
          <span>${d(p.host)}:${p.port}</span>
          <span class="cluster-node-role-badge ${k}">${_}</span>
          <button type="button" class="cluster-node-chip-remove" data-idx="${x}" title="Remove node">
            <i data-lucide="x" style="width: 11px; height: 11px;"></i>
          </button>
        </span>
      `}).join(""),s.querySelectorAll(".cluster-node-chip-remove").forEach(p=>{p.addEventListener("click",x=>{x.stopPropagation();const f=parseInt(p.getAttribute("data-idx"),10);!isNaN(f)&&f>=0&&f<r.length&&(r.splice(f,1),l())})}),u()}}const c=document.getElementById("connTypeSelect"),y=document.getElementById("clusterNodesGroup"),g=document.getElementById("connHostLabel"),b=document.getElementById("connPortLabel"),w=document.getElementById("connHost"),h=document.getElementById("connPort"),N=document.getElementById("connDbGroup");c&&y&&c.addEventListener("change",()=>{const s=c.value==="cluster";y.style.display=s?"block":"none",N&&(N.style.display=s?"none":"block"),s?(g&&(g.textContent="Primary Seed Host *"),b&&(b.textContent="Seed Port *"),w&&(w.value==="localhost"||!w.value)&&(w.value="127.0.0.1"),h&&(h.value==="6379"||!h.value)&&(h.value="7000"),r.length===0&&w&&w.value&&h&&h.value&&r.push({host:w.value.trim(),port:parseInt(h.value,10)||7e3,role:"seed"}),l()):(g&&(g.textContent="Host *"),b&&(b.textContent="Port *"),h&&h.value==="7000"&&(h.value="6379"))});const T=document.getElementById("btnAutoDiscoverCluster"),E=document.getElementById("clusterDiscoveryStatus");T&&T.addEventListener("click",async()=>{const s=w?w.value.trim():"127.0.0.1",m=h&&parseInt(h.value,10)||7e3,p=document.getElementById("connUsername").value.trim()||null,x=document.getElementById("connPassword").value||null,f=document.getElementById("connTls").checked;if(!s){E&&(E.className="cluster-discovery-status error",E.style.display="flex",E.innerHTML='<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>',u());return}T.disabled=!0,T.innerHTML='<i class="lucide-spin" data-lucide="loader-2" style="width: 13px; height: 13px;"></i> Discovering...',u(),E&&(E.className="cluster-discovery-status",E.style.display="none");try{const C=await(await fetch("/api/connections/discover-cluster",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:s,port:m,username:p,password:x,use_tls:f})})).json();C.success&&C.nodes&&C.nodes.length>0?(r=C.nodes.map(M=>({host:M.host,port:M.port,role:M.role,is_myself:M.is_myself,slots:M.slots})),l(),E&&(E.className="cluster-discovery-status success",E.style.display="flex",E.innerHTML=`
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${C.total_nodes} nodes</strong> (${C.masters_count} masters, ${C.replicas_count} replicas) • Cluster state: <strong>${C.cluster_state.toUpperCase()}</strong></span>
            `)):E&&(E.className="cluster-discovery-status error",E.style.display="flex",E.innerHTML=`
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${d(C.error||"Cluster discovery failed. Ensure seed node is part of a cluster.")}</span>
            `)}catch($){E&&(E.className="cluster-discovery-status error",E.style.display="flex",E.innerHTML=`
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${d($.message)}</span>
          `)}finally{T.disabled=!1,T.innerHTML='<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes',u()}});const F=document.getElementById("inputCustomClusterNode"),me=document.getElementById("btnAddCustomClusterNode");function X(){if(!F)return;const s=F.value.trim();if(!s)return;let m="127.0.0.1",p=7e3;if(s.includes(":")){const f=s.split(":");m=f[0].trim()||"127.0.0.1",p=parseInt(f[1].trim(),10)||7e3}else isNaN(parseInt(s,10))?m=s:(p=parseInt(s,10),m=w?w.value.trim():"127.0.0.1");r.some(f=>f.host===m&&f.port===p)||(r.push({host:m,port:p,role:"manual"}),l()),F.value=""}me&&me.addEventListener("click",X),F&&F.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),X())});const Be=document.getElementById("clusterTopologyModal"),st=document.getElementById("btnCloseTopologyModal");st&&st.addEventListener("click",jt);const lt=document.getElementById("btnRefreshTopologyModal");lt&&lt.addEventListener("click",gn),Be&&Be.addEventListener("click",s=>{s.target===Be&&jt()});const _e=document.getElementById("topologySearchInput");_e&&_e.addEventListener("input",()=>{Jt=_e.value,Ye()}),document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(m=>m.classList.remove("active")),s.classList.add("active"),Gt=s.getAttribute("data-role")||"all",Ye()})});const rt=document.getElementById("keyspaceNodesModal");document.getElementById("btnCloseKeyspaceModal").addEventListener("click",qe),document.getElementById("btnRefreshKeyspaceModal").addEventListener("click",un),document.getElementById("btnKeyspaceOpenTopology").addEventListener("click",()=>{qe(),Me()}),rt.addEventListener("click",s=>{s.target===rt&&qe()});const dt=document.getElementById("clientsListModal");document.getElementById("btnCloseClientsModal").addEventListener("click",Pt),document.getElementById("btnRefreshClientsModal").addEventListener("click",et),dt.addEventListener("click",s=>{s.target===dt&&Pt()});const Ae=document.getElementById("clientsSearchInput");Ae&&Ae.addEventListener("input",()=>{const s=Ae.value.trim().toLowerCase(),m=s?re.filter(p=>p.addr&&p.addr.toLowerCase().includes(s)||p.ip&&p.ip.toLowerCase().includes(s)||p.name&&p.name.toLowerCase().includes(s)||p.cmd&&p.cmd.toLowerCase().includes(s)||p.user&&p.user.toLowerCase().includes(s)||p.id&&String(p.id).includes(s)):re;ln(m)});const ct=document.getElementById("btnOpenSlowlog");ct&&ct.addEventListener("click",xo);const pt=document.getElementById("btnOpenMemoryModal");pt&&pt.addEventListener("click",rn);const Re=document.getElementById("slowlogModal"),mt=document.getElementById("btnCloseSlowlogModal");mt&&mt.addEventListener("click",Ht);const ut=document.getElementById("btnRefreshSlowlogModal");ut&&ut.addEventListener("click",tt);const yt=document.getElementById("btnClearSlowlogModal");yt&&yt.addEventListener("click",Co),Re&&Re.addEventListener("click",s=>{s.target===Re&&Ht()});const De=document.getElementById("slowlogSearchInput");De&&De.addEventListener("input",()=>{$e=De.value.trim(),Te()}),document.querySelectorAll(".slowlog-filter-btn").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".slowlog-filter-btn").forEach(m=>m.classList.remove("active")),s.classList.add("active"),Se=parseFloat(s.getAttribute("data-min-duration")||"0"),Te()})});const Ne=document.getElementById("memoryModal"),gt=document.getElementById("btnCloseMemoryModal");gt&&gt.addEventListener("click",Je);const ft=document.getElementById("btnRefreshMemoryModal");ft&&ft.addEventListener("click",dn),Ne&&Ne.addEventListener("click",s=>{s.target===Ne&&Je()});let ee=null;window.openEditConnectionModal=function(s){ee=s.id;const m=document.getElementById("connectionModal"),p=document.getElementById("connectionModalTitle"),x=document.getElementById("btnSaveConnModal"),f=document.getElementById("connPassword");p&&(p.innerHTML='<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection'),x&&(x.textContent="Update Connection"),document.getElementById("connName").value=s.name||"",document.getElementById("connEnv").value=(s.env||"DEV").toUpperCase();const $=document.getElementById("connTypeSelect");$.value=s.conn_type||"standalone",document.getElementById("connHost").value=s.host||"localhost",document.getElementById("connPort").value=s.port||6379,document.getElementById("connDb").value=s.db||0,document.getElementById("connUsername").value=s.username||"",document.getElementById("connTls").checked=!!s.use_tls,document.getElementById("connReadOnly").checked=!!s.read_only,f.value="",s.has_password?f.placeholder="•••••••• (Leave blank to keep saved password)":f.placeholder="Enter password (or leave empty)";const C=document.getElementById("clusterNodesGroup"),M=document.getElementById("connHostLabel"),k=document.getElementById("connDbRow");if(r=[],s.conn_type==="cluster"){if(C.style.display="block",M.textContent="Seed Node Host *",k.style.display="none",s.cluster_nodes)try{const S=typeof s.cluster_nodes=="string"?JSON.parse(s.cluster_nodes):s.cluster_nodes;Array.isArray(S)&&(r=S.map(L=>{if(typeof L=="string"&&L.includes(":")){const A=L.split(":");return{host:A[0].trim(),port:parseInt(A[1],10)||6379}}return{host:L.host||"127.0.0.1",port:parseInt(L.port,10)||6379}}))}catch{}}else C.style.display="none",M.textContent="Host *",k.style.display="flex";l();const _=document.getElementById("testResultBox");_&&(_.className="test-result-box",_.innerHTML=""),u(),m.classList.add("active")};const ht=document.getElementById("connEnv");ht&&ht.addEventListener("change",s=>{if(s.target.value==="PROD"){const m=document.getElementById("connReadOnly");m&&(m.checked=!0)}});const te=document.getElementById("connectionModal");document.getElementById("btnAddConn").addEventListener("click",()=>{ee=null,document.getElementById("connectionForm").reset();const s=document.getElementById("connectionModalTitle"),m=document.getElementById("btnSaveConnModal"),p=document.getElementById("connPassword");s&&(s.innerHTML='<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection'),m&&(m.textContent="Save Connection"),p&&(p.placeholder="Leave empty if none");const x=document.getElementById("connEnv").value;document.getElementById("connReadOnly").checked=x==="PROD",document.getElementById("clusterNodesGroup").style.display="none",document.getElementById("connHostLabel").textContent="Host *",document.getElementById("connDbRow").style.display="flex",r=[],l();const f=document.getElementById("testResultBox");f&&(f.className="test-result-box",f.innerHTML=""),u(),te.classList.add("active")}),document.getElementById("btnCloseModal").addEventListener("click",()=>{te.classList.remove("active")}),document.getElementById("btnCancelModal").addEventListener("click",()=>{te.classList.remove("active")}),te.addEventListener("click",s=>{s.target===te&&te.classList.remove("active")});const ue=document.getElementById("keyDetailModal");document.getElementById("btnCloseDetailModal").addEventListener("click",()=>{ue.classList.remove("active")}),ue.addEventListener("click",s=>{s.target===ue&&ue.classList.remove("active")});const ze=document.getElementById("btnDownloadKeyValue");ze&&ze.addEventListener("click",()=>ho(G,ze)),document.getElementById("btnCopyKeyName").addEventListener("click",()=>{G&&(navigator.clipboard.writeText(G),alert(`Copied '${G}' to clipboard!`))}),document.getElementById("btnDeleteKeyFromDetail").addEventListener("click",()=>{G&&Xe(G,()=>{ue.classList.remove("active"),D()})});const vt=document.getElementById("deleteKeyConfirmModal");document.getElementById("btnCloseDeleteConfirmModal").addEventListener("click",()=>{vt.classList.remove("active")}),document.getElementById("btnCancelDeleteConfirm").addEventListener("click",()=>{vt.classList.remove("active")}),document.getElementById("btnTestConnModal").addEventListener("click",async()=>{const s=document.getElementById("connTypeSelect").value,m=document.getElementById("connHost").value.trim()||"localhost",p=parseInt(document.getElementById("connPort").value,10)||6379,x=parseInt(document.getElementById("connDb").value,10)||0,f=document.getElementById("connUsername").value.trim()||null,$=document.getElementById("connPassword").value,C=document.getElementById("connTls").checked;let M=null;s==="cluster"&&r.length>0&&(M=JSON.stringify(r.map(S=>({host:S.host,port:S.port}))));const k=document.getElementById("testResultBox"),_=document.getElementById("btnTestConnModal");_.disabled=!0,_.innerHTML="Testing...",k.className="test-result-box",k.innerHTML="";try{let S;ee&&!$?S=await fetch(`/api/connections/${ee}/test`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:m,port:p,db:x,username:f,use_tls:C,conn_type:s,cluster_nodes:M})}):S=await fetch("/api/connections/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:m,port:p,db:x,username:f,password:$||null,use_tls:C,conn_type:s,cluster_nodes:M})});const L=await S.json();if(L.success){k.className="test-result-box success";const A=L.is_cluster?` • Cluster Mode (${L.cluster_nodes_count||r.length} nodes reachable)`:"";k.innerHTML=`
          <i data-lucide="check-circle-2"></i>
          <span>Connected! Latency: <strong>${L.latency_ms} ms</strong>${A} (Redis v${L.redis_version})</span>
        `}else k.className="test-result-box error",k.innerHTML=`
          <i data-lucide="alert-circle"></i>
          <span>Failed: ${d(L.error||"Connection refused")}</span>
        `}catch(S){k.className="test-result-box error",k.innerHTML=`
        <i data-lucide="alert-circle"></i>
        <span>Error: ${d(S.message)}</span>
      `}finally{_.disabled=!1,_.innerHTML='<i data-lucide="zap"></i> Test Connection',u()}}),document.getElementById("connectionForm").addEventListener("submit",async s=>{s.preventDefault();const m=document.getElementById("connName").value.trim(),p=document.getElementById("connEnv").value,x=document.getElementById("connTypeSelect").value;let f=document.getElementById("connHost").value.trim()||"localhost",$=parseInt(document.getElementById("connPort").value,10)||6379;const C=parseInt(document.getElementById("connDb").value,10)||0,M=document.getElementById("connUsername").value.trim()||null,k=document.getElementById("connPassword").value,_=document.getElementById("connTls").checked,S=document.getElementById("connAutoActivate").checked,L=document.getElementById("connReadOnly")?.checked||!1;let A=null;x==="cluster"&&(r.length>0?(A=JSON.stringify(r.map(V=>({host:V.host,port:V.port}))),f=r[0].host,$=r[0].port):A=JSON.stringify([{host:f,port:$}]));try{if(ee){const V={name:m,env:p,conn_type:x,host:f,port:$,cluster_nodes:A,db:C,username:M,use_tls:_,read_only:L};k&&(V.password=k);const ye=await fetch(`/api/connections/${ee}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(V)});if(!ye.ok){const je=await ye.json().catch(()=>({}));throw new Error(je.detail||"Failed to update connection")}}else{const V={name:m,env:p,conn_type:x,host:f,port:$,cluster_nodes:A,db:C,username:M,password:k||null,use_tls:_,read_only:L},ye=await fetch(`/api/connections?auto_activate=${S}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(V)});if(!ye.ok){const je=await ye.json().catch(()=>({}));throw new Error(je.detail||"Failed to save connection")}}te.classList.remove("active"),ee=null,document.getElementById("connectionForm").reset(),r=[],l(),await Q(),await q(),await D()}catch(V){alert("Error saving: "+V.message)}}),document.getElementById("btnRefreshStats").addEventListener("click",q);const be=document.getElementById("keySearchInput");let Pe=null;be.addEventListener("input",()=>{clearTimeout(Pe),Pe=setTimeout(()=>{P=be.value.trim()||"*",D(),U&&Ce()},400)}),be.addEventListener("keydown",s=>{s.key==="Enter"&&(clearTimeout(Pe),P=be.value.trim()||"*",D(),U&&Ce())}),document.querySelectorAll(".type-tab").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".type-tab").forEach(m=>m.classList.remove("active")),s.classList.add("active"),z=s.getAttribute("data-type"),D(),U&&Ce()})});const xe=document.getElementById("scanBatchSizeSelect");xe&&(xe.value=String(Ie),xe.addEventListener("change",()=>{const s=parseInt(xe.value,10);Ie=Wt.includes(s)?s:50,Nt()})),Nt();const bt=document.getElementById("btnScanNext");bt&&bt.addEventListener("click",()=>Qt());const xt=document.getElementById("btnResetScan");xt&&xt.addEventListener("click",()=>{D(),U&&Ce()});const wt=document.getElementById("btnToggleAutoRefresh"),we=document.getElementById("autoRefreshIntervalSelect");we&&(we.value=String(R),we.addEventListener("change",()=>{const s=Math.max(5,parseInt(we.value,10)||10);R=s,O=s,localStorage.setItem("redis_insight_auto_refresh_sec",String(s)),U?Yt():ae()})),wt&&wt.addEventListener("click",()=>{lo()}),ae();const He=document.getElementById("exportKeysModal"),Et=document.getElementById("btnOpenExportModal"),Ct=document.getElementById("btnCloseExportModal"),kt=document.getElementById("btnCancelExportModal"),se=document.getElementById("btnExecuteExport");if(Et&&He){Et.addEventListener("click",()=>{document.getElementById("exportPatternDisplay").textContent=P||"*",document.getElementById("exportTypeDisplay").textContent=z&&z!=="all"?z.toUpperCase():"All Types",document.getElementById("exportLoadedCount").textContent=`${H.length} keys`,document.getElementById("exportScopeLoadedText").textContent=`${H.length} keys`,He.classList.add("active"),u()});const s=()=>He.classList.remove("active");Ct&&Ct.addEventListener("click",s),kt&&kt.addEventListener("click",s),se&&se.addEventListener("click",async()=>{const m=document.querySelector('input[name="exportFormatRadio"]:checked'),p=document.querySelector('input[name="exportScopeRadio"]:checked'),x=(m?m.value:"csv").toLowerCase(),f=p?p.value:"loaded",$=P||"*",C=z&&z!=="all"?z:"",k=`redis_keys_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.${x}`;if(f==="all"){se.disabled=!0,se.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Exporting...',u();try{let S=`/api/keys/export?pattern=${encodeURIComponent($)}&format=${x}`;C&&(S+=`&type=${encodeURIComponent(C)}`);const L=await fetch(S);if(!L.ok){const A=await L.json().catch(()=>({detail:"Export failed"}));throw new Error(A.detail||`Server error: ${L.status}`)}await sn(L,k,x),s()}catch(S){alert(`Export failed: ${S.message}`)}finally{se.disabled=!1,se.innerHTML='<i data-lucide="download" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Download',u()}return}if(H.length===0){alert("No keys loaded in browser to export.");return}let _;if(x==="csv"){const S=`Key,Type,TTL_Seconds
`,L=H.map(A=>`"${(A.key||"").replace(/"/g,'""')}",${A.type||""},${A.ttl_seconds!==void 0?A.ttl_seconds:-1}`);_=new Blob([S+L.join(`
`)],{type:"text/csv;charset=utf-8;"})}else{const S=H.map(L=>L.key);_=new Blob([S.join(`
`)+`
`],{type:"text/plain;charset=utf-8;"})}an(_,k),s()})}const Oe=document.getElementById("bulkDeleteModal"),Lt=document.getElementById("btnOpenBulkDeleteModal"),St=document.getElementById("btnCloseBulkDeleteModal"),$t=document.getElementById("btnCancelBulkDelete"),j=document.getElementById("btnConfirmBulkDelete"),le=document.getElementById("bdCountConfirmInput"),ne=document.getElementById("bdProdConfirmInput"),It=document.getElementById("bdProdConfirmGroup"),Tt=document.getElementById("bulkDeleteProdBanner"),Fe=document.getElementById("bulkDeleteDryRunStatus"),Mt=document.getElementById("bulkDeleteDetails");let K=null;function Bt(){if(!K||!j)return;const s=String(K.matched_count),p=(le?.value||"").trim()===s&&K.matched_count>0;let x=!0;K.is_prod&&(x=(ne?.value||"").trim().toUpperCase()==="PROD"),j.disabled=!(p&&x)}if(le&&le.addEventListener("input",Bt),ne&&ne.addEventListener("input",Bt),Lt&&Oe){Lt.addEventListener("click",async()=>{if(B?.read_only){alert("Bulk Delete is disabled in Read-Only mode.");return}const m=P||"*",p=z&&z!=="all"?z:null;K=null,le&&(le.value=""),ne&&(ne.value=""),j&&(j.disabled=!0),Fe.style.display="block",Mt.style.display="none",Oe.classList.add("active"),u();try{const x=await fetch("/api/keys/bulk-delete/dry-run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:m,type_filter:p})});if(!x.ok){const k=await x.json().catch(()=>({detail:"Dry run failed"}));throw new Error(k.detail||"Dry run failed")}const f=await x.json();K=f,document.getElementById("bdPatternDisplay").textContent=f.pattern,document.getElementById("bdTypeDisplay").textContent=f.type_filter?f.type_filter.toUpperCase():"All Types",document.getElementById("bdCountDisplay").textContent=f.matched_count.toLocaleString(),document.getElementById("bdRequiredCountText").textContent=String(f.matched_count),f.is_prod?(Tt.style.display="block",It.style.display="block"):(Tt.style.display="none",It.style.display="none");const $=document.getElementById("bdPerNodeBreakdown"),C=Object.entries(f.per_node_counts||{});C.length>1?($.innerHTML="<strong>Per-node breakdown:</strong> "+C.map(([k,_])=>`${d(k)}: ${_.toLocaleString()}`).join(" &bull; "),$.style.display="block"):$.style.display="none";const M=document.getElementById("bdSampleKeysList");f.sample_keys&&f.sample_keys.length>0?(M.innerHTML=f.sample_keys.map(k=>`<div>${d(k)}</div>`).join(""),document.getElementById("bdSampleKeysSection").style.display="block"):document.getElementById("bdSampleKeysSection").style.display="none",Fe.style.display="none",Mt.style.display="flex",u()}catch(x){Fe.innerHTML=`
          <div style="color: var(--accent-danger);">
            <i data-lucide="alert-circle" style="width: 20px; height: 20px; margin-bottom: 0.35rem; display: inline-block;"></i>
            <div>Failed to calculate dry-run: ${d(x.message)}</div>
          </div>
        `,u()}});const s=()=>Oe.classList.remove("active");St&&St.addEventListener("click",s),$t&&$t.addEventListener("click",s),j&&j.addEventListener("click",async()=>{if(K){j.disabled=!0,j.innerHTML='<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlinking...',u();try{const m=await fetch("/api/keys/bulk-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:K.pattern,type_filter:K.type_filter,expected_count:K.matched_count,confirmed_count:parseInt(le.value.trim(),10),confirmed_env:ne?ne.value.trim():null})});if(!m.ok){const x=await m.json().catch(()=>({detail:"Bulk delete failed"}));throw new Error(x.detail||"Bulk delete failed")}const p=await m.json();alert(`Bulk delete complete!
${p.message} (Duration: ${p.duration_ms}ms)`),s(),D()}catch(m){alert(`Bulk delete error: ${m.message}`),j.disabled=!1,j.innerHTML='<i data-lucide="trash-2" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlink Keys',u()}}})}function Ee(s){const m=document.querySelector(".sidebar"),p=document.getElementById("btnShowSidebar");m&&(s?(m.classList.add("collapsed"),p&&(p.style.display="inline-flex"),localStorage.setItem("redis_insight_sidebar_collapsed","true")):(m.classList.remove("collapsed"),p&&(p.style.display="none"),localStorage.setItem("redis_insight_sidebar_collapsed","false")),u())}const _t=document.getElementById("btnToggleSidebar");_t&&_t.addEventListener("click",()=>Ee(!0));const At=document.getElementById("btnShowSidebar");At&&At.addEventListener("click",()=>Ee(!1)),localStorage.getItem("redis_insight_sidebar_collapsed")==="true"&&Ee(!0),document.addEventListener("keydown",s=>{if((s.ctrlKey||s.metaKey)&&s.key.toLowerCase()==="b"){const m=document.querySelector(".sidebar"),p=m&&m.classList.contains("collapsed");Ee(!p),s.preventDefault()}}),document.addEventListener("keydown",s=>{s.key==="Escape"&&document.querySelectorAll(".modal-backdrop.active").forEach(p=>p.classList.remove("active"))}),document.querySelectorAll(".modal-backdrop").forEach(s=>{s.addEventListener("click",m=>{m.target===s&&s.classList.remove("active")})}),setInterval(q,15e3)}async function Kt(){io(),u(),_o();try{await Q(),await q()}catch(t){console.error("Failed to load initial status:",t)}I.find(t=>t.is_connected&&t.is_selected)||I.find(t=>t.is_connected)?await D():it()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Kt):Kt();
