(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6749:function(e,t,s){Promise.resolve().then(s.t.bind(s,3212,23)),Promise.resolve().then(s.t.bind(s,3385,23)),Promise.resolve().then(s.bind(s,9312)),Promise.resolve().then(s.bind(s,2426))},1931:function(e,t,s){"use strict";var r=s(7437),a=s(2265);t.Z=e=>{let{label:t,placeholder:s,value:n,className:i,sendOp:o,id:l,submit:c,type:d="text",onChange:u}=e,[f,m]=(0,a.useState)(!1),[x,h]=(0,a.useState)(!0),p=(0,a.useRef)(null);return(0,r.jsxs)("div",{className:"relative "+i,children:[(0,r.jsx)("input",{ref:p,id:l,onFocus:()=>{m(!0)},onBlur:()=>{m(!1)},placeholder:s,value:n,type:d,onChange:e=>{e.target.value?(h(!1),""===e.target.value.trim()&&(e.target.value="")):h(!0),o&&o(e.target.value)},className:"peer w-full px-3 py-2 text-black border border-gray-300 rounded-md outline-none transition-all duration-300 ".concat("pt-2")+" "+i}),(0,r.jsx)("label",{htmlFor:l,className:"absolute left-3 transition-all duration-300 ".concat(f||!x?"-top-2 bg-white rounded-md px-1 text-xs text-gray-600":"top-2 text-gray-400"),children:t})]})}},9312:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var r=s(7437),a=s(2265),n=s(5376),i=s(7742),o=s(2235),l=s(2169);let c=n.fC,d=n.xz,u=n.x8,f=n.h_,m=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...a,ref:t})});m.displayName=n.aV.displayName;let x=(0,i.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),h=a.forwardRef((e,t)=>{let{side:s="right",className:a,children:i,...c}=e;return(0,r.jsxs)(f,{children:[(0,r.jsx)(m,{}),(0,r.jsxs)(n.VY,{ref:t,className:(0,l.cn)(x({side:s}),a),...c,children:[i,(0,r.jsxs)(n.x8,{className:"absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(o.Z,{stroke:"white",className:"mt-2.5 ml-2.5 h-6 w-6"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});h.displayName=n.VY.displayName;let p=e=>{let{className:t,...s}=e;return(0,r.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s})};p.displayName="SheetFooter",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold text-foreground",s),...a})}).displayName=n.Dx.displayName,a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",s),...a})}).displayName=n.dk.displayName;var g=s(7907),v=s(5326),b=s(575),y=s(703),j=s(1931),N=s(8670),w=()=>{let e="",[t,s]=(0,a.useState)(!1),[n,i]=(0,a.useState)(!1),[o,l]=(0,a.useState)(!1),[f,m]=(0,a.useState)(!1),[x,w]=(0,a.useState)(!1),[k,S]=(0,a.useState)(!1),[T,A]=(0,a.useState)(!0),[C,_]=(0,a.useState)(["Misc"]),R=(0,a.useRef)(null),O=(0,g.useRouter)(),D=t=>{e=t},E=e=>{if(""===e||""===e.trim()){O.push("/");return}let t="/search?search=".concat(e);"&"===t[t.length-1]&&(t=t.slice(0,t.length-1)),console.log(t),O.push(t)},V=t=>{t.preventDefault(),console.log("form submitted"),console.log(e),E(e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center py-2 px-3 bg-gray-800 text-white",children:[(0,r.jsxs)(c,{children:[(0,r.jsx)(d,{asChild:!0,children:(0,r.jsx)(b.z,{variant:"outline",className:"w-fit px-2",children:(0,r.jsx)(y.default,{src:"/menuIcon.png",width:"20",height:"20",alt:"menu icon"})})}),(0,r.jsxs)(h,{className:" border-0 bg-gray-700 rounded-lg shadow-lg p-6",side:"left",children:[(0,r.jsx)("div",{className:"mt-8 -mb-6",children:(0,r.jsx)(v.UQ,{type:"single",collapsible:!0,children:(0,r.jsxs)(v.Qd,{className:"border-0",value:"item-1",children:[(0,r.jsx)(v.o4,{className:"text-gray-300 hover:text-white",children:(0,r.jsx)("div",{className:"text-lg",children:"Account"})}),(0,r.jsxs)(v.vF,{className:"text-gray-300",children:[(0,r.jsx)("div",{className:"mb-2 text-base ml-4 hover:text-white cursor-pointer",onClick:e=>{O.push("/myoffers"),R.current.click()},children:"View My Offers"}),(0,r.jsx)("div",{className:"mb-2 text-base ml-4 hover:text-white cursor-pointer",onClick:e=>{O.push("/mylistings"),R.current.click()},children:"View My Listings"}),(0,r.jsx)("div",{className:"mb-2 text-base ml-4 hover:text-white cursor-pointer",onClick:e=>{O.push("/login"),R.current.click()},children:"Login/Create Account"})]})]})})}),(0,r.jsxs)("div",{className:"flex my-8 justify-between items-center mb-4 text-gray-300 hover:text-white cursor-pointer",onClick:e=>{O.push("/"),R.current.click()},children:[(0,r.jsx)("div",{className:"mr-2 text-lg",children:"Browse around"}),(0,r.jsx)(N.Z,{width:"38",height:"38",className:"mr-5",color:"white"})]}),(0,r.jsxs)("div",{className:"flex my-8 justify-between items-center mb-4 text-gray-300 hover:text-white cursor-pointer",onClick:e=>{O.push("/myoffers"),R.current.click()},children:[(0,r.jsx)("div",{className:"mr-2 text-lg",children:"Buy (view my offers)"}),(0,r.jsx)("img",{src:"/buy.png",width:"38",height:"38",className:"mr-5",alt:"buy icon"})]}),(0,r.jsxs)("div",{className:"flex my-8 items-center justify-between mb-4 text-gray-300 hover:text-white cursor-pointer",onClick:e=>{O.push("/mylistings"),R.current.click()},children:[(0,r.jsx)("div",{className:"mr-2 text-lg",children:"Sell (view my listings)"}),(0,r.jsx)(y.default,{src:"/sell.png",alt:"sell",width:"38",className:"mr-5",height:"38"})]}),(0,r.jsxs)("div",{className:"text-gray-300 my-8 flex items-center justify-between hover:text-white cursor-pointer mb-2",onClick:e=>{O.push("/about"),R.current.click()},children:[(0,r.jsx)("div",{className:"mr-2 text-lg",children:"About"}),(0,r.jsx)(y.default,{src:"/about.png",alt:"sell",width:"38",className:"mr-5",height:"38"})]}),(0,r.jsxs)("div",{className:"text-gray-300 my-8 flex items-center justify-between hover:text-white cursor-pointer mb-2",onClick:e=>{O.push("/issue"),R.current.click()},children:[(0,r.jsx)("div",{className:"mr-2 text-lg",children:"Report an issue"}),(0,r.jsx)(y.default,{src:"/report.png",alt:"sell",width:"38",className:"mr-5",height:"38"})]}),(0,r.jsx)(p,{children:(0,r.jsx)(u,{asChild:!0,children:(0,r.jsx)(b.z,{type:"submit",ref:R,className:"bg-gray-700 text-gray-700",children:"x"})})})]})]}),(0,r.jsx)("div",{className:"pl-32 flex flex-row max-md:yeet",children:(0,r.jsx)("form",{onSubmit:V,children:(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)(j.Z,{id:"asfsss",label:"",placeholder:"What're you looking for?",className:"",sendOp:D}),(0,r.jsx)("button",{className:"bg-amber-500 text-xs text-black w-10 h-10 px-0 mx-0 pl-1 py-0 rounded-md",children:(0,r.jsx)("img",{src:"/search.png",width:"28",height:"28",onClick:()=>{console.log("search icon clicked"),console.log("/search?search=".concat(e)),E(e)}})})]})})}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"text-xl font-bold mr-2",children:"collegeXchange"}),(0,r.jsx)(y.default,{src:"/logo.png",alt:"logo",width:"50",height:"50"})]})]}),(0,r.jsx)("form",{onSubmit:V,children:(0,r.jsxs)("div",{className:"md:yeet flex flex-row p-1",children:["  ",(0,r.jsx)(j.Z,{id:"asfasfsdf",submit:E,label:"",placeholder:"What're you looking for?",className:"w-full",sendOp:D}),(0,r.jsx)("button",{className:"bg-amber-500 text-xs text-black w-10 h-10 px-0 mx-0 pl-1 py-0 rounded-md",onClick:()=>{console.log("search icon clicked"),console.log("/search?search=".concat(e)),E(e)},children:(0,r.jsx)("img",{src:"/search.png",width:"28",height:"28"})})," "]})})]})}},5326:function(e,t,s){"use strict";s.d(t,{Qd:function(){return c},UQ:function(){return l},o4:function(){return d},vF:function(){return u}});var r=s(7437),a=s(2265),n=s(3450),i=s(3441),o=s(2169);let l=n.fC,c=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.ck,{ref:t,className:(0,o.cn)("border-b",s),...a})});c.displayName="AccordionItem";let d=a.forwardRef((e,t)=>{let{className:s,children:a,...l}=e;return(0,r.jsx)(n.h4,{className:"flex",children:(0,r.jsxs)(n.xz,{ref:t,className:(0,o.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",s),...l,children:[a,(0,r.jsxs)("div",{className:"flex flex-row justify-end items-center",children:[(0,r.jsx)("img",{src:"/profile.png",width:"38",height:"38"}),(0,r.jsx)(i.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})]})})});d.displayName=n.xz.displayName;let u=a.forwardRef((e,t)=>{let{className:s,children:a,...i}=e;return(0,r.jsx)(n.VY,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...i,children:(0,r.jsx)("div",{className:(0,o.cn)("pb-4 pt-0",s),children:a})})});u.displayName=n.VY.displayName},575:function(e,t,s){"use strict";s.d(t,{z:function(){return c}});var r=s(7437),a=s(2265),n=s(9143),i=s(7742),o=s(2169);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:s,variant:a,size:i,asChild:c=!1,...d}=e,u=c?n.g7:"button";return(0,r.jsx)(u,{className:(0,o.cn)(l({variant:a,size:i,className:s})),ref:t,...d})});c.displayName="Button"},7290:function(e,t,s){"use strict";s.d(t,{FN:function(){return f},Mi:function(){return h},VW:function(){return c},_i:function(){return d},gD:function(){return m},lj:function(){return p},sA:function(){return x}});var r=s(7437),a=s(2265),n=s(7399),i=s(7742),o=s(2235),l=s(2169);let c=n.zt,d=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.l_,{ref:t,className:(0,l.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...a})});d.displayName=n.l_.displayName;let u=(0,i.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),f=a.forwardRef((e,t)=>{let{className:s,variant:a,...i}=e;return(0,r.jsx)(n.fC,{ref:t,className:(0,l.cn)(u({variant:a}),s),...i})});f.displayName=n.fC.displayName;let m=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.aU,{ref:t,className:(0,l.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...a})});m.displayName=n.aU.displayName;let x=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.x8,{ref:t,className:(0,l.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...a,children:(0,r.jsx)(o.Z,{className:"h-4 w-4"})})});x.displayName=n.x8.displayName;let h=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.Dx,{ref:t,className:(0,l.cn)("text-sm font-semibold",s),...a})});h.displayName=n.Dx.displayName;let p=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.dk,{ref:t,className:(0,l.cn)("text-sm opacity-90",s),...a})});p.displayName=n.dk.displayName},2426:function(e,t,s){"use strict";s.r(t),s.d(t,{Toaster:function(){return i}});var r=s(7437),a=s(7290),n=s(7147);function i(){let{toasts:e}=(0,n.pm)();return(0,r.jsxs)(a.VW,{children:[e.map(function(e){let{id:t,title:s,description:n,action:i,...o}=e;return(0,r.jsxs)(a.FN,{...o,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[s&&(0,r.jsx)(a.Mi,{children:s}),n&&(0,r.jsx)(a.lj,{children:n})]}),i,(0,r.jsx)(a.sA,{})]},t)}),(0,r.jsx)(a._i,{})]})}},7147:function(e,t,s){"use strict";s.d(t,{pm:function(){return f}});var r=s(2265);let a=0,n=new Map,i=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e4);n.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?i(s):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],c={toasts:[]};function d(e){c=o(c,e),l.forEach(e=>{e(c)})}function u(e){let{...t}=e,s=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>d({type:"DISMISS_TOAST",toastId:s});return d({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function f(){let[e,t]=r.useState(c);return r.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},2169:function(e,t,s){"use strict";s.d(t,{cn:function(){return n}});var r=s(3167),a=s(1367);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m6)((0,r.W)(t))}},3385:function(){}},function(e){e.O(0,[614,791,374,971,69,744],function(){return e(e.s=6749)}),_N_E=e.O()}]);