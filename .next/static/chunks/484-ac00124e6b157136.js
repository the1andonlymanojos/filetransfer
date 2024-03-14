"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{9484:function(e,t,n){n.d(t,{d:function(){return M}});var r=n(5376),o=n(2265),a=o.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{},direction:"bottom"}),i=()=>o.useContext(a);!function(e){let{insertAt:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||"undefined"==typeof document)return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}('[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}\n');var l="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function c(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];for(let e of t)"function"==typeof e&&e(...n)}}function u(){return s(/^iPhone/)||s(/^iPad/)||s(/^Mac/)&&navigator.maxTouchPoints>1}function s(e){return"undefined"!=typeof window&&null!=window.navigator?e.test(window.navigator.platform):void 0}var d="undefined"!=typeof document&&window.visualViewport;function f(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function p(e){for(f(e)&&(e=e.parentElement);e&&!f(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}var m,v=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),g=0;function h(e,t,n){let r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}function w(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function b(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let t=p(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top;e.getBoundingClientRect().bottom>t.getBoundingClientRect().bottom&&(t.scrollTop+=r-n)}e=t.parentElement}}function y(e){return e instanceof HTMLInputElement&&!v.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function E(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.useCallback(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})}(...t),t)}var R=null,x=new WeakMap;function P(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!(e instanceof HTMLElement)||!t)return;let r={};Object.entries(t).forEach(t=>{let[n,o]=t;if(n.startsWith("--")){e.style.setProperty(n,o);return}r[n]=e.style[n],e.style[n]=o}),n||x.set(e,r)}function D(e,t){if(!e||!(e instanceof HTMLElement))return;let n=x.get(e);n&&(t?e.style[t]=n[t]:Object.entries(n).forEach(t=>{let[n,r]=t;e.style[n]=r}))}var S=e=>{switch(e){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return e}};function T(e,t){let n=window.getComputedStyle(e),r=n.transform||n.webkitTransform||n.mozTransform,o=r.match(/^matrix3d\((.+)\)$/);return o?parseFloat(o[1].split(", ")[S(t)?13:12]):(o=r.match(/^matrix\((.+)\)$/))?parseFloat(o[1].split(", ")[S(t)?5:4]):null}var A={DURATION:.5,EASE:[.32,.72,0,1]};function O(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>function(){for(var e,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return null==(e=t.current)?void 0:e.call(t,...r)},[])}var C="vaul-dragging";function N(e){var t;let{open:n,onOpenChange:i,children:s,shouldScaleBackground:f,onDrag:v,onRelease:E,snapPoints:x,nested:N=!1,closeThreshold:k=.25,scrollLockTimeout:I=100,dismissible:M=!0,fadeFromIndex:H=x&&x.length-1,activeSnapPoint:z,setActiveSnapPoint:F,fixed:L,modal:B=!0,onClose:W,direction:U="bottom",preventScrollRestoration:j=!0}=e,[Y=!1,q]=o.useState(!1),[V,X]=o.useState(!1),[_,$]=o.useState(!1),[G,J]=o.useState(!1),[K,Q]=o.useState(!1),[Z,ee]=o.useState(!1),et=o.useRef(null),en=o.useRef(null),er=o.useRef(null),eo=o.useRef(null),ea=o.useRef(null),ei=o.useRef(!1),el=o.useRef(null),ec=o.useRef(0),eu=o.useRef(!1),es=o.useRef(0),ed=o.useRef(null),ef=o.useRef((null==(t=ed.current)?void 0:t.getBoundingClientRect().height)||0),ep=o.useRef(0),em=o.useCallback(e=>{x&&e===eb.length-1&&(en.current=new Date)},[]),{activeSnapPoint:ev,activeSnapPointIndex:eg,setActiveSnapPoint:eh,onRelease:ew,snapPointsOffset:eb,onDrag:ey,shouldFade:eE,getPercentageDragged:eR}=function(e){let{activeSnapPointProp:t,setActiveSnapPointProp:n,snapPoints:r,drawerRef:a,overlayRef:i,fadeFromIndex:l,onSnapPointChange:c,direction:u="bottom"}=e,[s,d]=function(e){let{prop:t,defaultProp:n,onChange:r=()=>{}}=e,[a,i]=function(e){let{defaultProp:t,onChange:n}=e,r=o.useState(t),[a]=r,i=o.useRef(a),l=O(n);return o.useEffect(()=>{i.current!==a&&(l(a),i.current=a)},[a,i,l]),r}({defaultProp:n,onChange:r}),l=void 0!==t,c=l?t:a,u=O(r);return[c,o.useCallback(e=>{if(l){let n="function"==typeof e?e(t):e;n!==t&&u(n)}else i(e)},[l,t,i,u])]}({prop:t,defaultProp:null==r?void 0:r[0],onChange:n}),f=o.useMemo(()=>s===(null==r?void 0:r[r.length-1])||null,[r,s]),p=r&&r.length>0&&(l||0===l)&&!Number.isNaN(l)&&r[l]===s||!r,m=o.useMemo(()=>null==r?void 0:r.findIndex(e=>e===s),[r,s]),v=o.useMemo(()=>{var e;return null!=(e=null==r?void 0:r.map(e=>{let t="undefined"!=typeof window,n="string"==typeof e,r=0;if(n&&(r=parseInt(e,10)),S(u)){let o=n?r:t?e*window.innerHeight:0;return t?"bottom"===u?window.innerHeight-o:-window.innerHeight+o:o}let o=n?r:t?e*window.innerWidth:0;return t?"right"===u?window.innerWidth-o:-window.innerWidth+o:o}))?e:[]},[r]),g=o.useMemo(()=>null!==m?null==v?void 0:v[m]:null,[v,m]),h=o.useCallback(e=>{var t;let n=null!=(t=null==v?void 0:v.findIndex(t=>t===e))?t:null;c(n),P(a.current,{transition:"transform ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),transform:S(u)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")}),v&&n!==v.length-1&&n!==l?P(i.current,{transition:"opacity ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),opacity:"0"}):P(i.current,{transition:"opacity ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),opacity:"1"}),d(null!==n?null==r?void 0:r[n]:null)},[a.current,r,v,l,i,d]);return o.useEffect(()=>{var e;if(t){let n=null!=(e=null==r?void 0:r.findIndex(e=>e===t))?e:-1;v&&-1!==n&&"number"==typeof v[n]&&h(v[n])}},[t,r,v,h]),{isLastSnapPoint:f,activeSnapPoint:s,shouldFade:p,getPercentageDragged:function(e,t){if(!r||"number"!=typeof m||!v||void 0===l)return null;let n=m===l-1;if(m>=l&&t)return 0;if(n&&!t)return 1;if(!p&&!n)return null;let o=n?m+1:m-1,a=e/Math.abs(n?v[o]-v[o-1]:v[o+1]-v[o]);return n?1-a:a},setActiveSnapPoint:d,activeSnapPointIndex:m,onRelease:function(e){let{draggedDistance:t,closeDrawer:n,velocity:o,dismissible:a}=e;if(void 0===l)return;let c="bottom"===u||"right"===u?(null!=g?g:0)-t:(null!=g?g:0)+t,s=m===l-1,d=0===m,p=t>0;if(s&&P(i.current,{transition:"opacity ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")")}),o>2&&!p){a?n():h(v[0]);return}if(o>2&&p&&v&&r){h(v[r.length-1]);return}let w=null==v?void 0:v.reduce((e,t)=>"number"!=typeof e||"number"!=typeof t?e:Math.abs(t-c)<Math.abs(e-c)?t:e),b=S(u)?window.innerHeight:window.innerWidth;if(o>.4&&Math.abs(t)<.4*b){let e=p?1:-1;if(e>0&&f){h(v[r.length-1]);return}if(d&&e<0&&a&&n(),null===m)return;h(v[m+e]);return}h(w)},onDrag:function(e){let{draggedDistance:t}=e;if(null===g)return;let n="bottom"===u||"right"===u?g-t:g+t;("bottom"===u||"right"===u)&&n<v[v.length-1]||("top"===u||"left"===u)&&n>v[v.length-1]||P(a.current,{transform:S(u)?"translate3d(0, ".concat(n,"px, 0)"):"translate3d(".concat(n,"px, 0, 0)")})},snapPointsOffset:v}}({snapPoints:x,activeSnapPointProp:z,setActiveSnapPointProp:F,drawerRef:ed,fadeFromIndex:H,overlayRef:et,onSnapPointChange:em,direction:U});!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{isDisabled:t}=e;l(()=>{if(!t){let e,t,n,r,o,a;return 1==++g&&(m=u()?(t=0,n=window.pageXOffset,r=window.pageYOffset,o=c(h(document.documentElement,"paddingRight","".concat(window.innerWidth-document.documentElement.clientWidth,"px"))),window.scrollTo(0,0),a=c(w(document,"touchstart",n=>{(e=p(n.target))===document.documentElement&&e===document.body||(t=n.changedTouches[0].pageY)},{passive:!1,capture:!0}),w(document,"touchmove",n=>{if(!e||e===document.documentElement||e===document.body){n.preventDefault();return}let r=n.changedTouches[0].pageY,o=e.scrollTop,a=e.scrollHeight-e.clientHeight;0!==a&&((o<=0&&r>t||o>=a&&r<t)&&n.preventDefault(),t=r)},{passive:!1,capture:!0}),w(document,"touchend",e=>{let t=e.target;y(t)&&t!==document.activeElement&&(e.preventDefault(),t.style.transform="translateY(-2000px)",t.focus(),requestAnimationFrame(()=>{t.style.transform=""}))},{passive:!1,capture:!0}),w(document,"focus",e=>{let t=e.target;y(t)&&(t.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{t.style.transform="",d&&(d.height<window.innerHeight?requestAnimationFrame(()=>{b(t)}):d.addEventListener("resize",()=>b(t),{once:!0}))}))},!0),w(window,"scroll",()=>{window.scrollTo(0,0)})),()=>{o(),a(),window.scrollTo(n,r)}):c(h(document.documentElement,"paddingRight","".concat(window.innerWidth-document.documentElement.clientWidth,"px")))),()=>{0==--g&&m()}}},[t])}({isDisabled:!Y||K||!B||Z||!V});let{restorePositionSetting:ex}=function(e){let{isOpen:t,modal:n,nested:r,hasBeenOpened:a,preventScrollRestoration:i}=e,[l,c]=o.useState("undefined"!=typeof window?window.location.href:""),u=o.useRef(0),s=o.useCallback(()=>{if(null===R&&t){R={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height};let{scrollX:e,innerHeight:t}=window;document.body.style.setProperty("position","fixed","important"),document.body.style.top="".concat(-u.current,"px"),document.body.style.left="".concat(-e,"px"),document.body.style.right="0px",document.body.style.height="auto",setTimeout(()=>requestAnimationFrame(()=>{let e=t-window.innerHeight;e&&u.current>=t&&(document.body.style.top="".concat(-(u.current+e),"px"))}),300)}},[t]),d=o.useCallback(()=>{if(null!==R){let e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=R.position,document.body.style.top=R.top,document.body.style.left=R.left,document.body.style.height=R.height,document.body.style.right="unset",requestAnimationFrame(()=>{if(i&&l!==window.location.href){c(window.location.href);return}window.scrollTo(t,e)}),R=null}},[l]);return o.useEffect(()=>{function e(){u.current=window.scrollY}return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),o.useEffect(()=>{r||!a||(t?(s(),n||setTimeout(()=>{d()},500)):d())},[t,a,l,n,r,s,d]),{restorePositionSetting:d}}({isOpen:Y,modal:B,nested:N,hasBeenOpened:V,preventScrollRestoration:j});function eP(){return(window.innerWidth-26)/window.innerWidth}function eD(e,t){var n;let r=e,o=null==(n=window.getSelection())?void 0:n.toString(),a=ed.current?T(ed.current,U):null,i=new Date;if(r.hasAttribute("data-vaul-no-drag"))return!1;if("right"===U||"left"===U)return!0;if(en.current&&i.getTime()-en.current.getTime()<500)return!1;if(null!==a&&("bottom"===U?a>0:a<0))return!0;if(o&&o.length>0)return!1;if(ea.current&&i.getTime()-ea.current.getTime()<I&&0===a||t)return ea.current=i,!1;for(;r;){if(r.scrollHeight>r.clientHeight){if(0!==r.scrollTop)return ea.current=new Date,!1;if("dialog"===r.getAttribute("role"))break}r=r.parentNode}return!0}function eS(){ed.current&&(null==W||W(),P(ed.current,{transform:S(U)?"translate3d(0, ".concat("bottom"===U?"100%":"-100%",", 0)"):"translate3d(".concat("right"===U?"100%":"-100%",", 0, 0)"),transition:"transform ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")")}),P(et.current,{opacity:"0",transition:"opacity ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")")}),eA(!1),setTimeout(()=>{$(!1),q(!1)},300),setTimeout(()=>{x&&eh(x[0])},1e3*A.DURATION))}function eT(){if(!ed.current)return;let e=document.querySelector("[vaul-drawer-wrapper]"),t=T(ed.current,U);P(ed.current,{transform:"translate3d(0, 0, 0)",transition:"transform ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")")}),P(et.current,{transition:"opacity ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),opacity:"1"}),f&&t&&t>0&&Y&&P(e,{borderRadius:"".concat(8,"px"),overflow:"hidden",...S(U)?{transform:"scale(".concat(eP(),") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)"),transformOrigin:"top"}:{transform:"scale(".concat(eP(),") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)"),transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:"".concat(A.DURATION,"s"),transitionTimingFunction:"cubic-bezier(".concat(A.EASE.join(","),")")},!0)}function eA(e){let t=document.querySelector("[vaul-drawer-wrapper]");t&&f&&(e?(P(document.body,{background:document.body.style.backgroundColor||document.body.style.background}),P(document.body,{background:"black"},!0),P(t,{borderRadius:"".concat(8,"px"),overflow:"hidden",...S(U)?{transform:"scale(".concat(eP(),") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)"),transformOrigin:"top"}:{transform:"scale(".concat(eP(),") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)"),transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:"".concat(A.DURATION,"s"),transitionTimingFunction:"cubic-bezier(".concat(A.EASE.join(","),")")})):(D(t,"overflow"),D(t,"transform"),D(t,"borderRadius"),P(t,{transitionProperty:"transform, border-radius",transitionDuration:"".concat(A.DURATION,"s"),transitionTimingFunction:"cubic-bezier(".concat(A.EASE.join(","),")")})))}return o.useEffect(()=>()=>{eA(!1),ex()},[]),o.useEffect(()=>{var e;function t(){var e;if(ed.current&&(y(document.activeElement)||eu.current)){let t=(null==(e=window.visualViewport)?void 0:e.height)||0,n=window.innerHeight-t,r=ed.current.getBoundingClientRect().height||0;ep.current||(ep.current=r);let o=ed.current.getBoundingClientRect().top;if(Math.abs(es.current-n)>60&&(eu.current=!eu.current),x&&x.length>0&&eb&&eg&&(n+=eb[eg]||0),es.current=n,r>t||eu.current){let e=ed.current.getBoundingClientRect().height,r=e;e>t&&(r=t-26),L?ed.current.style.height="".concat(e-Math.max(n,0),"px"):ed.current.style.height="".concat(Math.max(r,t-o),"px")}else ed.current.style.height="".concat(ep.current,"px");x&&x.length>0&&!eu.current?ed.current.style.bottom="0px":ed.current.style.bottom="".concat(Math.max(n,0),"px")}}return null==(e=window.visualViewport)||e.addEventListener("resize",t),()=>{var e;return null==(e=window.visualViewport)?void 0:e.removeEventListener("resize",t)}},[eg,x,eb]),o.useEffect(()=>{if(!Y&&f){let e=setTimeout(()=>{D(document.body)},200);return()=>clearTimeout(e)}},[Y,f]),o.useEffect(()=>{n?(q(!0),X(!0)):eS()},[n]),o.useEffect(()=>{G&&(null==i||i(Y))},[Y]),o.useEffect(()=>{J(!0)},[]),o.useEffect(()=>{Y&&(P(document.documentElement,{scrollBehavior:"auto"}),en.current=new Date,eA(!0))},[Y]),o.useEffect(()=>{var e;if(ed.current&&_){let t=null==(e=null==ed?void 0:ed.current)?void 0:e.querySelectorAll("*");null==t||t.forEach(e=>{(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth)&&e.classList.add("vaul-scrollable")})}},[_]),o.createElement(r.fC,{modal:B,onOpenChange:e=>{if(void 0!==n){null==i||i(e);return}e?(X(!0),q(e)):eS()},open:Y},o.createElement(a.Provider,{value:{visible:_,activeSnapPoint:ev,snapPoints:x,setActiveSnapPoint:eh,drawerRef:ed,overlayRef:et,scaleBackground:eA,onOpenChange:i,onPress:function(e){var t;(M||x)&&(!ed.current||ed.current.contains(e.target))&&(ef.current=(null==(t=ed.current)?void 0:t.getBoundingClientRect().height)||0,Q(!0),er.current=new Date,u()&&window.addEventListener("touchend",()=>ei.current=!1,{once:!0}),e.target.setPointerCapture(e.pointerId),ec.current=S(U)?e.screenY:e.screenX)},setVisible:$,onRelease:function(e){var t;if(!K||!ed.current)return;ed.current.classList.remove(C),ei.current=!1,Q(!1),eo.current=new Date;let n=T(ed.current,U);if(!eD(e.target,!1)||!n||Number.isNaN(n)||null===er.current)return;let r=eo.current.getTime()-er.current.getTime(),o=ec.current-(S(U)?e.screenY:e.screenX),a=Math.abs(o)/r;if(a>.05&&(ee(!0),setTimeout(()=>{ee(!1)},200)),x){ew({draggedDistance:o*("bottom"===U||"right"===U?1:-1),closeDrawer:eS,velocity:a,dismissible:M}),null==E||E(e,!0);return}if("bottom"===U||"right"===U?o>0:o<0){eT(),null==E||E(e,!0);return}if(a>.4||n>=Math.min(null!=(t=ed.current.getBoundingClientRect().height)?t:0,window.innerHeight)*k){eS(),null==E||E(e,!1);return}null==E||E(e,!0),eT()},onDrag:function(e){if(ed.current&&K){let t="bottom"===U||"right"===U?1:-1,n=(ec.current-(S(U)?e.screenY:e.screenX))*t,r=n>0;if(x&&0===eg&&!M||!ei.current&&!eD(e.target,r))return;if(ed.current.classList.add(C),ei.current=!0,P(ed.current,{transition:"none"}),P(et.current,{transition:"none"}),x&&ey({draggedDistance:n}),r&&!x){let e=Math.min(-(8*(Math.log(n+1)-2)*1),0)*t;P(ed.current,{transform:S(U)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")});return}let o=Math.abs(n),a=document.querySelector("[vaul-drawer-wrapper]"),i=o/ef.current,l=eR(o,r);null!==l&&(i=l);let c=1-i;if((eE||H&&eg===H-1)&&(null==v||v(e,i),P(et.current,{opacity:"".concat(c),transition:"none"},!0)),a&&et.current&&f){let e=Math.min(eP()+i*(1-eP()),1),t=8-8*i,n=Math.max(0,14-14*i);P(a,{borderRadius:"".concat(t,"px"),transform:S(U)?"scale(".concat(e,") translate3d(0, ").concat(n,"px, 0)"):"scale(".concat(e,") translate3d(").concat(n,"px, 0, 0)"),transition:"none"},!0)}if(!x){let e=o*t;P(ed.current,{transform:S(U)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")})}}},dismissible:M,isOpen:Y,shouldFade:eE,closeDrawer:eS,onNestedDrag:function(e,t){if(t<0)return;let n=S(U)?window.innerHeight:window.innerWidth,r=(n-16)/n,o=r+t*(1-r),a=-16+16*t;P(ed.current,{transform:S(U)?"scale(".concat(o,") translate3d(0, ").concat(a,"px, 0)"):"scale(".concat(o,") translate3d(").concat(a,"px, 0, 0)"),transition:"none"})},onNestedOpenChange:function(e){let t=e?(window.innerWidth-16)/window.innerWidth:1;el.current&&window.clearTimeout(el.current),P(ed.current,{transition:"transform ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),transform:"scale(".concat(t,") translate3d(0, ").concat(e?-16:0,"px, 0)")}),!e&&ed.current&&(el.current=setTimeout(()=>{let e=T(ed.current,U);P(ed.current,{transition:"none",transform:S(U)?"translate3d(0, ".concat(e,"px, 0)"):"translate3d(".concat(e,"px, 0, 0)")})},500))},onNestedRelease:function(e,t){let n=S(U)?window.innerHeight:window.innerWidth,r=t?(n-16)/n:1,o=t?-16:0;t&&P(ed.current,{transition:"transform ".concat(A.DURATION,"s cubic-bezier(").concat(A.EASE.join(","),")"),transform:S(U)?"scale(".concat(r,") translate3d(0, ").concat(o,"px, 0)"):"scale(".concat(r,") translate3d(").concat(o,"px, 0, 0)")})},keyboardIsOpen:eu,openProp:n,modal:B,snapPointsOffset:eb,direction:U}},s))}var k=o.forwardRef(function(e,t){let{children:n,...a}=e,{overlayRef:l,snapPoints:c,onRelease:u,shouldFade:s,isOpen:d,visible:f}=i(),p=E(t,l),m=c&&c.length>0;return o.createElement(r.aV,{onMouseUp:u,ref:p,"vaul-drawer-visible":f?"true":"false","vaul-overlay":"","vaul-snap-points":d&&m?"true":"false","vaul-snap-points-overlay":d&&s?"true":"false",...a})});k.displayName="Drawer.Overlay";var I=o.forwardRef(function(e,t){let{onOpenAutoFocus:n,onPointerDownOutside:a,onAnimationEnd:l,style:c,...u}=e,{drawerRef:s,onPress:d,onRelease:f,onDrag:p,dismissible:m,keyboardIsOpen:v,snapPointsOffset:g,visible:h,closeDrawer:w,modal:b,openProp:y,onOpenChange:R,setVisible:x,direction:P}=i(),D=E(t,s);return o.useEffect(()=>{x(!0)},[]),o.createElement(r.VY,{onOpenAutoFocus:e=>{var t;n?n(e):(e.preventDefault(),null==(t=s.current)||t.focus())},onPointerDown:d,onPointerDownOutside:e=>{if(null==a||a(e),!b||e.defaultPrevented){e.preventDefault();return}v.current&&(v.current=!1),e.preventDefault(),null==R||R(!1),m&&void 0===y&&w()},onPointerMove:p,onPointerUp:f,ref:D,style:g&&g.length>0?{"--snap-point-height":"".concat(g[0],"px"),...c}:c,...u,"vaul-drawer":"","vaul-drawer-direction":P,"vaul-drawer-visible":h?"true":"false"})});I.displayName="Drawer.Content";var M={Root:N,NestedRoot:function(e){let{onDrag:t,onOpenChange:n,...r}=e,{onNestedDrag:a,onNestedOpenChange:l,onNestedRelease:c}=i();if(!a)throw Error("Drawer.NestedRoot must be placed in another drawer");return o.createElement(N,{nested:!0,onClose:()=>{l(!1)},onDrag:(e,n)=>{a(e,n),null==t||t(e,n)},onOpenChange:e=>{e&&l(e),null==n||n(e)},onRelease:c,...r})},Content:I,Overlay:k,Trigger:r.xz,Portal:r.h_,Close:r.x8,Title:r.Dx,Description:r.dk}}}]);