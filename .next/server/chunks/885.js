"use strict";exports.id=885,exports.ids=[885],exports.modules={4885:(e,t,n)=>{n.d(t,{d:()=>M});var r=n(9408),o=n(3729),i=o.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{},direction:"bottom"}),a=()=>o.useContext(i);!function(e,{insertAt:t}={}){if(!e||"undefined"==typeof document)return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);var l=o.useEffect;function u(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}function s(){return c(/^iPhone/)||c(/^iPad/)||c(/^Mac/)&&navigator.maxTouchPoints>1}function c(e){}var d="undefined"!=typeof document&&window.visualViewport;function f(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function p(e){for(f(e)&&(e=e.parentElement);e&&!f(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}var m,v=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),g=0;function h(e,t,n){let r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}function w(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function b(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let t=p(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top;e.getBoundingClientRect().bottom>t.getBoundingClientRect().bottom&&(t.scrollTop+=r-n)}e=t.parentElement}}function y(e){return e instanceof HTMLInputElement&&!v.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function E(...e){return o.useCallback(function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(...e),e)}var R=null,$=new WeakMap;function x(e,t,n=!1){if(!e||!(e instanceof HTMLElement)||!t)return;let r={};Object.entries(t).forEach(([t,n])=>{if(t.startsWith("--")){e.style.setProperty(t,n);return}r[t]=e.style[t],e.style[t]=n}),n||$.set(e,r)}function P(e,t){if(!e||!(e instanceof HTMLElement))return;let n=$.get(e);n&&(t?e.style[t]=n[t]:Object.entries(n).forEach(([t,n])=>{e.style[t]=n}))}var D=e=>{switch(e){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return e}};function S(e,t){let n=window.getComputedStyle(e),r=n.transform||n.webkitTransform||n.mozTransform,o=r.match(/^matrix3d\((.+)\)$/);return o?parseFloat(o[1].split(", ")[D(t)?13:12]):(o=r.match(/^matrix\((.+)\)$/))?parseFloat(o[1].split(", ")[D(t)?5:4]):null}var T={DURATION:.5,EASE:[.32,.72,0,1]};function O(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...e)=>{var n;return null==(n=t.current)?void 0:n.call(t,...e)},[])}var A="vaul-dragging";function C({open:e,onOpenChange:t,children:n,shouldScaleBackground:a,onDrag:c,onRelease:f,snapPoints:v,nested:E=!1,closeThreshold:$=.25,scrollLockTimeout:C=100,dismissible:N=!0,fadeFromIndex:I=v&&v.length-1,activeSnapPoint:M,setActiveSnapPoint:k,fixed:z,modal:F=!0,onClose:H,direction:B="bottom",preventScrollRestoration:L=!0}){var U;let[j=!1,W]=o.useState(!1),[Y,q]=o.useState(!1),[V,X]=o.useState(!1),[_,G]=o.useState(!1),[J,K]=o.useState(!1),[Q,Z]=o.useState(!1),ee=o.useRef(null),et=o.useRef(null),en=o.useRef(null),er=o.useRef(null),eo=o.useRef(null),ei=o.useRef(!1),ea=o.useRef(null),el=o.useRef(0),eu=o.useRef(!1),es=o.useRef(0),ec=o.useRef(null),ed=o.useRef((null==(U=ec.current)?void 0:U.getBoundingClientRect().height)||0),ef=o.useRef(0),ep=o.useCallback(e=>{v&&e===ew.length-1&&(et.current=new Date)},[]),{activeSnapPoint:em,activeSnapPointIndex:ev,setActiveSnapPoint:eg,onRelease:eh,snapPointsOffset:ew,onDrag:eb,shouldFade:ey,getPercentageDragged:eE}=function({activeSnapPointProp:e,setActiveSnapPointProp:t,snapPoints:n,drawerRef:r,overlayRef:i,fadeFromIndex:a,onSnapPointChange:l,direction:u="bottom"}){let[s,c]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,i]=function({defaultProp:e,onChange:t}){let n=o.useState(e),[r]=n,i=o.useRef(r),a=O(t);return o.useEffect(()=>{i.current!==r&&(a(r),i.current=r)},[r,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,l=a?e:r,u=O(n);return[l,o.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&u(n)}else i(t)},[a,e,i,u])]}({prop:e,defaultProp:null==n?void 0:n[0],onChange:t}),d=o.useMemo(()=>s===(null==n?void 0:n[n.length-1])||null,[n,s]),f=n&&n.length>0&&(a||0===a)&&!Number.isNaN(a)&&n[a]===s||!n,p=o.useMemo(()=>null==n?void 0:n.findIndex(e=>e===s),[n,s]),m=o.useMemo(()=>{var e;return null!=(e=null==n?void 0:n.map(e=>{let t="string"==typeof e,n=0;return t&&(n=parseInt(e,10)),D(u),t?n:0}))?e:[]},[n]),v=o.useMemo(()=>null!==p?null==m?void 0:m[p]:null,[m,p]),g=o.useCallback(e=>{var t;let o=null!=(t=null==m?void 0:m.findIndex(t=>t===e))?t:null;l(o),x(r.current,{transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,transform:D(u)?`translate3d(0, ${e}px, 0)`:`translate3d(${e}px, 0, 0)`}),m&&o!==m.length-1&&o!==a?x(i.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,opacity:"0"}):x(i.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,opacity:"1"}),c(null!==o?null==n?void 0:n[o]:null)},[r.current,n,m,a,i,c]);return o.useEffect(()=>{var t;if(e){let r=null!=(t=null==n?void 0:n.findIndex(t=>t===e))?t:-1;m&&-1!==r&&"number"==typeof m[r]&&g(m[r])}},[e,n,m,g]),{isLastSnapPoint:d,activeSnapPoint:s,shouldFade:f,getPercentageDragged:function(e,t){if(!n||"number"!=typeof p||!m||void 0===a)return null;let r=p===a-1;if(p>=a&&t)return 0;if(r&&!t)return 1;if(!f&&!r)return null;let o=r?p+1:p-1,i=e/Math.abs(r?m[o]-m[o-1]:m[o+1]-m[o]);return r?1-i:i},setActiveSnapPoint:c,activeSnapPointIndex:p,onRelease:function({draggedDistance:e,closeDrawer:t,velocity:r,dismissible:o}){if(void 0===a)return;let l="bottom"===u||"right"===u?(null!=v?v:0)-e:(null!=v?v:0)+e,s=p===a-1,c=0===p,f=e>0;if(s&&x(i.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),r>2&&!f){o?t():g(m[0]);return}if(r>2&&f&&m&&n){g(m[n.length-1]);return}let h=null==m?void 0:m.reduce((e,t)=>"number"!=typeof e||"number"!=typeof t?e:Math.abs(t-l)<Math.abs(e-l)?t:e),w=D(u)?window.innerHeight:window.innerWidth;if(r>.4&&Math.abs(e)<.4*w){let e=f?1:-1;if(e>0&&d){g(m[n.length-1]);return}if(c&&e<0&&o&&t(),null===p)return;g(m[p+e]);return}g(h)},onDrag:function({draggedDistance:e}){if(null===v)return;let t="bottom"===u||"right"===u?v-e:v+e;("bottom"===u||"right"===u)&&t<m[m.length-1]||("top"===u||"left"===u)&&t>m[m.length-1]||x(r.current,{transform:D(u)?`translate3d(0, ${t}px, 0)`:`translate3d(${t}px, 0, 0)`})},snapPointsOffset:m}}({snapPoints:v,activeSnapPointProp:M,setActiveSnapPointProp:k,drawerRef:ec,fadeFromIndex:I,overlayRef:ee,onSnapPointChange:ep,direction:B});!function(e={}){let{isDisabled:t}=e;l(()=>{if(!t){let e,t,n,r,o,i;return 1==++g&&(m=s()?(t=0,n=window.pageXOffset,r=window.pageYOffset,o=u(h(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`)),window.scrollTo(0,0),i=u(w(document,"touchstart",n=>{(e=p(n.target))===document.documentElement&&e===document.body||(t=n.changedTouches[0].pageY)},{passive:!1,capture:!0}),w(document,"touchmove",n=>{if(!e||e===document.documentElement||e===document.body){n.preventDefault();return}let r=n.changedTouches[0].pageY,o=e.scrollTop,i=e.scrollHeight-e.clientHeight;0!==i&&((o<=0&&r>t||o>=i&&r<t)&&n.preventDefault(),t=r)},{passive:!1,capture:!0}),w(document,"touchend",e=>{let t=e.target;y(t)&&t!==document.activeElement&&(e.preventDefault(),t.style.transform="translateY(-2000px)",t.focus(),requestAnimationFrame(()=>{t.style.transform=""}))},{passive:!1,capture:!0}),w(document,"focus",e=>{let t=e.target;y(t)&&(t.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{t.style.transform="",d&&(d.height<window.innerHeight?requestAnimationFrame(()=>{b(t)}):d.addEventListener("resize",()=>b(t),{once:!0}))}))},!0),w(window,"scroll",()=>{window.scrollTo(0,0)})),()=>{o(),i(),window.scrollTo(n,r)}):u(h(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`))),()=>{0==--g&&m()}}},[t])}({isDisabled:!j||J||!F||Q||!Y});let{restorePositionSetting:eR}=function({isOpen:e,modal:t,nested:n,hasBeenOpened:r,preventScrollRestoration:i}){let[a,l]=o.useState(""),u=o.useRef(0),s=o.useCallback(()=>{if(null===R&&e){R={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height};let{scrollX:e,innerHeight:t}=window;document.body.style.setProperty("position","fixed","important"),document.body.style.top=`${-u.current}px`,document.body.style.left=`${-e}px`,document.body.style.right="0px",document.body.style.height="auto",setTimeout(()=>requestAnimationFrame(()=>{let e=t-window.innerHeight;e&&u.current>=t&&(document.body.style.top=`${-(u.current+e)}px`)}),300)}},[e]),c=o.useCallback(()=>{if(null!==R){let e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=R.position,document.body.style.top=R.top,document.body.style.left=R.left,document.body.style.height=R.height,document.body.style.right="unset",requestAnimationFrame(()=>{if(i&&a!==window.location.href){l(window.location.href);return}window.scrollTo(t,e)}),R=null}},[a]);return o.useEffect(()=>{function e(){u.current=window.scrollY}return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),o.useEffect(()=>{n||!r||(e?(s(),t||setTimeout(()=>{c()},500)):c())},[e,r,a,t,n,s,c]),{restorePositionSetting:c}}({isOpen:j,modal:F,nested:E,hasBeenOpened:Y,preventScrollRestoration:L});function e$(){return(window.innerWidth-26)/window.innerWidth}function ex(e,t){var n;let r=e,o=null==(n=window.getSelection())?void 0:n.toString(),i=ec.current?S(ec.current,B):null,a=new Date;if(r.hasAttribute("data-vaul-no-drag"))return!1;if("right"===B||"left"===B)return!0;if(et.current&&a.getTime()-et.current.getTime()<500)return!1;if(null!==i&&("bottom"===B?i>0:i<0))return!0;if(o&&o.length>0)return!1;if(eo.current&&a.getTime()-eo.current.getTime()<C&&0===i||t)return eo.current=a,!1;for(;r;){if(r.scrollHeight>r.clientHeight){if(0!==r.scrollTop)return eo.current=new Date,!1;if("dialog"===r.getAttribute("role"))break}r=r.parentNode}return!0}function eP(){ec.current&&(null==H||H(),x(ec.current,{transform:D(B)?`translate3d(0, ${"bottom"===B?"100%":"-100%"}, 0)`:`translate3d(${"right"===B?"100%":"-100%"}, 0, 0)`,transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),x(ee.current,{opacity:"0",transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),eS(!1),setTimeout(()=>{X(!1),W(!1)},300),setTimeout(()=>{v&&eg(v[0])},1e3*T.DURATION))}function eD(){if(!ec.current)return;let e=document.querySelector("[vaul-drawer-wrapper]"),t=S(ec.current,B);x(ec.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),x(ee.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,opacity:"1"}),a&&t&&t>0&&j&&x(e,{borderRadius:"8px",overflow:"hidden",...D(B)?{transform:`scale(${e$()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${e$()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${T.DURATION}s`,transitionTimingFunction:`cubic-bezier(${T.EASE.join(",")})`},!0)}function eS(e){let t=document.querySelector("[vaul-drawer-wrapper]");t&&a&&(e?(x(document.body,{background:document.body.style.backgroundColor||document.body.style.background}),x(document.body,{background:"black"},!0),x(t,{borderRadius:"8px",overflow:"hidden",...D(B)?{transform:`scale(${e$()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${e$()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${T.DURATION}s`,transitionTimingFunction:`cubic-bezier(${T.EASE.join(",")})`})):(P(t,"overflow"),P(t,"transform"),P(t,"borderRadius"),x(t,{transitionProperty:"transform, border-radius",transitionDuration:`${T.DURATION}s`,transitionTimingFunction:`cubic-bezier(${T.EASE.join(",")})`})))}return o.useEffect(()=>()=>{eS(!1),eR()},[]),o.useEffect(()=>{var e;function t(){var e;if(ec.current&&(y(document.activeElement)||eu.current)){let t=(null==(e=window.visualViewport)?void 0:e.height)||0,n=window.innerHeight-t,r=ec.current.getBoundingClientRect().height||0;ef.current||(ef.current=r);let o=ec.current.getBoundingClientRect().top;if(Math.abs(es.current-n)>60&&(eu.current=!eu.current),v&&v.length>0&&ew&&ev&&(n+=ew[ev]||0),es.current=n,r>t||eu.current){let e=ec.current.getBoundingClientRect().height,r=e;e>t&&(r=t-26),z?ec.current.style.height=`${e-Math.max(n,0)}px`:ec.current.style.height=`${Math.max(r,t-o)}px`}else ec.current.style.height=`${ef.current}px`;v&&v.length>0&&!eu.current?ec.current.style.bottom="0px":ec.current.style.bottom=`${Math.max(n,0)}px`}}return null==(e=window.visualViewport)||e.addEventListener("resize",t),()=>{var e;return null==(e=window.visualViewport)?void 0:e.removeEventListener("resize",t)}},[ev,v,ew]),o.useEffect(()=>{if(!j&&a){let e=setTimeout(()=>{P(document.body)},200);return()=>clearTimeout(e)}},[j,a]),o.useEffect(()=>{e?(W(!0),q(!0)):eP()},[e]),o.useEffect(()=>{_&&(null==t||t(j))},[j]),o.useEffect(()=>{G(!0)},[]),o.useEffect(()=>{j&&(x(document.documentElement,{scrollBehavior:"auto"}),et.current=new Date,eS(!0))},[j]),o.useEffect(()=>{var e;if(ec.current&&V){let t=null==(e=null==ec?void 0:ec.current)?void 0:e.querySelectorAll("*");null==t||t.forEach(e=>{(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth)&&e.classList.add("vaul-scrollable")})}},[V]),o.createElement(r.fC,{modal:F,onOpenChange:n=>{if(void 0!==e){null==t||t(n);return}n?(q(!0),W(n)):eP()},open:j},o.createElement(i.Provider,{value:{visible:V,activeSnapPoint:em,snapPoints:v,setActiveSnapPoint:eg,drawerRef:ec,overlayRef:ee,scaleBackground:eS,onOpenChange:t,onPress:function(e){var t;(N||v)&&(!ec.current||ec.current.contains(e.target))&&(ed.current=(null==(t=ec.current)?void 0:t.getBoundingClientRect().height)||0,K(!0),en.current=new Date,s()&&window.addEventListener("touchend",()=>ei.current=!1,{once:!0}),e.target.setPointerCapture(e.pointerId),el.current=D(B)?e.screenY:e.screenX)},setVisible:X,onRelease:function(e){var t;if(!J||!ec.current)return;ec.current.classList.remove(A),ei.current=!1,K(!1),er.current=new Date;let n=S(ec.current,B);if(!ex(e.target,!1)||!n||Number.isNaN(n)||null===en.current)return;let r=er.current.getTime()-en.current.getTime(),o=el.current-(D(B)?e.screenY:e.screenX),i=Math.abs(o)/r;if(i>.05&&(Z(!0),setTimeout(()=>{Z(!1)},200)),v){eh({draggedDistance:o*("bottom"===B||"right"===B?1:-1),closeDrawer:eP,velocity:i,dismissible:N}),null==f||f(e,!0);return}if("bottom"===B||"right"===B?o>0:o<0){eD(),null==f||f(e,!0);return}if(i>.4||n>=Math.min(null!=(t=ec.current.getBoundingClientRect().height)?t:0,window.innerHeight)*$){eP(),null==f||f(e,!1);return}null==f||f(e,!0),eD()},onDrag:function(e){if(ec.current&&J){let t="bottom"===B||"right"===B?1:-1,n=(el.current-(D(B)?e.screenY:e.screenX))*t,r=n>0;if(v&&0===ev&&!N||!ei.current&&!ex(e.target,r))return;if(ec.current.classList.add(A),ei.current=!0,x(ec.current,{transition:"none"}),x(ee.current,{transition:"none"}),v&&eb({draggedDistance:n}),r&&!v){let e=Math.min(-(8*(Math.log(n+1)-2)*1),0)*t;x(ec.current,{transform:D(B)?`translate3d(0, ${e}px, 0)`:`translate3d(${e}px, 0, 0)`});return}let o=Math.abs(n),i=document.querySelector("[vaul-drawer-wrapper]"),l=o/ed.current,u=eE(o,r);null!==u&&(l=u);let s=1-l;if((ey||I&&ev===I-1)&&(null==c||c(e,l),x(ee.current,{opacity:`${s}`,transition:"none"},!0)),i&&ee.current&&a){let e=Math.min(e$()+l*(1-e$()),1),t=8-8*l,n=Math.max(0,14-14*l);x(i,{borderRadius:`${t}px`,transform:D(B)?`scale(${e}) translate3d(0, ${n}px, 0)`:`scale(${e}) translate3d(${n}px, 0, 0)`,transition:"none"},!0)}if(!v){let e=o*t;x(ec.current,{transform:D(B)?`translate3d(0, ${e}px, 0)`:`translate3d(${e}px, 0, 0)`})}}},dismissible:N,isOpen:j,shouldFade:ey,closeDrawer:eP,onNestedDrag:function(e,t){if(t<0)return;let n=D(B)?window.innerHeight:window.innerWidth,r=(n-16)/n,o=r+t*(1-r),i=-16+16*t;x(ec.current,{transform:D(B)?`scale(${o}) translate3d(0, ${i}px, 0)`:`scale(${o}) translate3d(${i}px, 0, 0)`,transition:"none"})},onNestedOpenChange:function(e){let t=e?(window.innerWidth-16)/window.innerWidth:1;ea.current&&window.clearTimeout(ea.current),x(ec.current,{transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,transform:`scale(${t}) translate3d(0, ${e?-16:0}px, 0)`}),!e&&ec.current&&(ea.current=setTimeout(()=>{let e=S(ec.current,B);x(ec.current,{transition:"none",transform:D(B)?`translate3d(0, ${e}px, 0)`:`translate3d(${e}px, 0, 0)`})},500))},onNestedRelease:function(e,t){let n=D(B)?window.innerHeight:window.innerWidth,r=t?(n-16)/n:1,o=t?-16:0;t&&x(ec.current,{transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,transform:D(B)?`scale(${r}) translate3d(0, ${o}px, 0)`:`scale(${r}) translate3d(${o}px, 0, 0)`})},keyboardIsOpen:eu,openProp:e,modal:F,snapPointsOffset:ew,direction:B}},n))}var N=o.forwardRef(function({children:e,...t},n){let{overlayRef:i,snapPoints:l,onRelease:u,shouldFade:s,isOpen:c,visible:d}=a(),f=E(n,i),p=l&&l.length>0;return o.createElement(r.aV,{onMouseUp:u,ref:f,"vaul-drawer-visible":d?"true":"false","vaul-overlay":"","vaul-snap-points":c&&p?"true":"false","vaul-snap-points-overlay":c&&s?"true":"false",...t})});N.displayName="Drawer.Overlay";var I=o.forwardRef(function({onOpenAutoFocus:e,onPointerDownOutside:t,onAnimationEnd:n,style:i,...l},u){let{drawerRef:s,onPress:c,onRelease:d,onDrag:f,dismissible:p,keyboardIsOpen:m,snapPointsOffset:v,visible:g,closeDrawer:h,modal:w,openProp:b,onOpenChange:y,setVisible:R,direction:$}=a(),x=E(u,s);return o.useEffect(()=>{R(!0)},[]),o.createElement(r.VY,{onOpenAutoFocus:t=>{var n;e?e(t):(t.preventDefault(),null==(n=s.current)||n.focus())},onPointerDown:c,onPointerDownOutside:e=>{if(null==t||t(e),!w||e.defaultPrevented){e.preventDefault();return}m.current&&(m.current=!1),e.preventDefault(),null==y||y(!1),p&&void 0===b&&h()},onPointerMove:f,onPointerUp:d,ref:x,style:v&&v.length>0?{"--snap-point-height":`${v[0]}px`,...i}:i,...l,"vaul-drawer":"","vaul-drawer-direction":$,"vaul-drawer-visible":g?"true":"false"})});I.displayName="Drawer.Content";var M={Root:C,NestedRoot:function({onDrag:e,onOpenChange:t,...n}){let{onNestedDrag:r,onNestedOpenChange:i,onNestedRelease:l}=a();if(!r)throw Error("Drawer.NestedRoot must be placed in another drawer");return o.createElement(C,{nested:!0,onClose:()=>{i(!1)},onDrag:(t,n)=>{r(t,n),null==e||e(t,n)},onOpenChange:e=>{e&&i(e),null==t||t(e)},onRelease:l,...n})},Content:I,Overlay:N,Trigger:r.xz,Portal:r.h_,Close:r.x8,Title:r.Dx,Description:r.dk}}};