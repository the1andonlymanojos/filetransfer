exports.id=621,exports.ids=[621],exports.modules={8702:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},510:(e,t,s)=>{Promise.resolve().then(s.bind(s,8078)),Promise.resolve().then(s.bind(s,3859))},6637:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(5344),a=s(3729);let i=({label:e,placeholder:t,value:s,className:i,sendOp:o,id:n,submit:l,type:d="text",onChange:c})=>{let[u,m]=(0,a.useState)(!1),[x,f]=(0,a.useState)(!0),h=(0,a.useRef)(null);return(0,r.jsxs)("div",{className:"relative "+i,children:[r.jsx("input",{ref:h,id:n,onFocus:()=>{m(!0)},onBlur:()=>{m(!1)},placeholder:t,value:s,type:d,onChange:e=>{e.target.value?(f(!1),""===e.target.value.trim()&&(e.target.value="")):f(!0),o&&o(e.target.value)},className:"peer w-full px-3 py-2 text-black border border-gray-300 rounded-md outline-none transition-all duration-300 pt-2 "+i}),r.jsx("label",{htmlFor:n,className:`absolute left-3 transition-all duration-300 ${u||!x?"-top-2 bg-white rounded-md px-1 text-xs text-gray-600":"top-2 text-gray-400"}`,children:e})]})}},8078:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>R});var r=s(5344),a=s(3729),i=s(9408),o=s(8720),n=s(4513),l=s(1453);let d=i.fC,c=i.xz,u=i.x8,m=i.h_,x=a.forwardRef(({className:e,...t},s)=>r.jsx(i.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:s}));x.displayName=i.aV.displayName;let f=(0,o.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),h=a.forwardRef(({side:e="right",className:t,children:s,...a},o)=>(0,r.jsxs)(m,{children:[r.jsx(x,{}),(0,r.jsxs)(i.VY,{ref:o,className:(0,l.cn)(f({side:e}),t),...a,children:[s,(0,r.jsxs)(i.x8,{className:"absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[r.jsx(n.Z,{stroke:"white",className:"mt-2.5 ml-2.5 h-6 w-6"}),r.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));h.displayName=i.VY.displayName;let p=({className:e,...t})=>r.jsx("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});p.displayName="SheetFooter",a.forwardRef(({className:e,...t},s)=>r.jsx(i.Dx,{ref:s,className:(0,l.cn)("text-lg font-semibold text-foreground",e),...t})).displayName=i.Dx.displayName,a.forwardRef(({className:e,...t},s)=>r.jsx(i.dk,{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",e),...t})).displayName=i.dk.displayName;var g=s(8428),v=s(7683),b=s(5390);let y=v.fC,j=a.forwardRef(({className:e,...t},s)=>r.jsx(v.ck,{ref:s,className:(0,l.cn)("border-b",e),...t}));j.displayName="AccordionItem";let N=a.forwardRef(({className:e,children:t,...s},a)=>r.jsx(v.h4,{className:"flex",children:(0,r.jsxs)(v.xz,{ref:a,className:(0,l.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...s,children:[t,(0,r.jsxs)("div",{className:"flex flex-row justify-end items-center",children:[r.jsx("img",{src:"/profile.png",width:"38",height:"38"}),r.jsx(b.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})]})}));N.displayName=v.xz.displayName;let w=a.forwardRef(({className:e,children:t,...s},a)=>r.jsx(v.VY,{ref:a,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...s,children:r.jsx("div",{className:(0,l.cn)("pb-4 pt-0",e),children:t})}));w.displayName=v.VY.displayName;var k=s(5094),S=s(9410),T=s(6637),A=s(8765);let R=()=>{let e="",[t,s]=(0,a.useState)(!1),[i,o]=(0,a.useState)(!1),[n,l]=(0,a.useState)(!1),[m,x]=(0,a.useState)(!1),[f,v]=(0,a.useState)(!1),[b,R]=(0,a.useState)(!1),[C,_]=(0,a.useState)(!0),[P,D]=(0,a.useState)(["Misc"]),O=(0,a.useRef)(null),V=(0,g.useRouter)(),M=t=>{e=t},I=e=>{if(""===e||""===e.trim()){V.push("/");return}let t=`/search?search=${e}`;"&"===t[t.length-1]&&(t=t.slice(0,t.length-1)),console.log(t),V.push(t)},z=t=>{t.preventDefault(),console.log("form submitted"),console.log(e),I(e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center py-2 px-3 bg-gray-800 text-white",children:[(0,r.jsxs)(d,{children:[r.jsx(c,{asChild:!0,children:r.jsx(k.z,{variant:"outline",className:"w-fit px-2",children:r.jsx(S.default,{src:"/menuIcon.png",width:"20",height:"20",alt:"menu icon"})})}),(0,r.jsxs)(h,{className:" border-0 bg-gray-700 rounded-lg shadow-lg p-6",side:"left",children:[r.jsx("div",{className:"mt-8 -mb-6",children:r.jsx(y,{type:"single",collapsible:!0,children:(0,r.jsxs)(j,{className:"border-0",value:"item-1",children:[r.jsx(N,{className:"text-gray-300 hover:text-white",children:r.jsx("div",{className:"text-lg",children:"Account"})}),(0,r.jsxs)(w,{className:"text-gray-300",children:[r.jsx("div",{className:"mb-2 text-base ml-4 hover:text-white cursor-pointer",onClick:e=>{V.push("/myoffers"),O.current.click()},children:"View My Offers"}),r.jsx("div",{className:"mb-2 text-base ml-4 hover:text-white cursor-pointer",onClick:e=>{V.push("/mylistings"),O.current.click()},children:"View My Listings"}),r.jsx("div",{className:"mb-2 text-base ml-4 hover:text-white cursor-pointer",onClick:e=>{V.push("/login"),O.current.click()},children:"Login/Create Account"}),r.jsx("div",{className:"mb-2 text-base ml-4 hover:text-white cursor-pointer",children:"Personal Details"})]})]})})}),(0,r.jsxs)("div",{className:"flex my-8 justify-between items-center mb-4 text-gray-300 hover:text-white cursor-pointer",onClick:e=>{V.push("/"),O.current.click()},children:[r.jsx("div",{className:"mr-2 text-lg",children:"Browse around"}),r.jsx(A.Z,{width:"38",height:"38",className:"mr-5",color:"white"})]}),(0,r.jsxs)("div",{className:"flex my-8 justify-between items-center mb-4 text-gray-300 hover:text-white cursor-pointer",onClick:e=>{V.push("/myoffers"),O.current.click()},children:[r.jsx("div",{className:"mr-2 text-lg",children:"My Bids"}),r.jsx("img",{src:"/buy.png",width:"38",height:"38",className:"mr-5",alt:"buy icon"})]}),(0,r.jsxs)("div",{className:"flex my-8 items-center justify-between mb-4 text-gray-300 hover:text-white cursor-pointer",onClick:e=>{V.push("/mylistings"),O.current.click()},children:[r.jsx("div",{className:"mr-2 text-lg",children:"Sell"}),r.jsx(S.default,{src:"/sell.png",alt:"sell",width:"38",className:"mr-5",height:"38"})]}),(0,r.jsxs)("div",{className:"text-gray-300 my-8 flex items-center justify-between hover:text-white cursor-pointer mb-2",onClick:e=>{V.push("/about"),O.current.click()},children:[r.jsx("div",{className:"mr-2 text-lg",children:"About"}),r.jsx(S.default,{src:"/about.png",alt:"sell",width:"38",className:"mr-5",height:"38"})]}),(0,r.jsxs)("div",{className:"text-gray-300 my-8 flex items-center justify-between hover:text-white cursor-pointer mb-2",children:[r.jsx("div",{className:"mr-2 text-lg",children:"Report an issue"}),r.jsx(S.default,{src:"/report.png",alt:"sell",width:"38",className:"mr-5",height:"38"})]}),r.jsx(p,{children:r.jsx(u,{asChild:!0,children:r.jsx(k.z,{type:"submit",ref:O,className:"bg-gray-700 text-gray-700",children:"x"})})})]})]}),r.jsx("div",{className:"pl-32 flex flex-row max-md:yeet",children:r.jsx("form",{onSubmit:z,children:(0,r.jsxs)("div",{className:"flex flex-row",children:[r.jsx(T.Z,{id:"asfsss",label:"",placeholder:"What're you looking for?",className:"",sendOp:M}),r.jsx("button",{className:"bg-amber-500 text-xs text-black w-10 h-10 px-0 mx-0 pl-1 py-0 rounded-md",children:r.jsx("img",{src:"/search.png",width:"28",height:"28",onClick:()=>{console.log("search icon clicked"),console.log(`/search?search=${e}`),I(e)}})})]})})}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx("div",{className:"text-xl font-bold mr-2",children:"collegeXchange"}),r.jsx(S.default,{src:"/logo.png",alt:"logo",width:"50",height:"50"})]})]}),r.jsx("form",{onSubmit:z,children:(0,r.jsxs)("div",{className:"md:yeet flex flex-row p-1",children:["  ",r.jsx(T.Z,{id:"asfasfsdf",submit:I,label:"",placeholder:"What're you looking for?",className:"w-full",sendOp:M}),r.jsx("button",{className:"bg-amber-500 text-xs text-black w-10 h-10 px-0 mx-0 pl-1 py-0 rounded-md",onClick:()=>{console.log("search icon clicked"),console.log(`/search?search=${e}`),I(e)},children:r.jsx("img",{src:"/search.png",width:"28",height:"28"})})," "]})})]})}},5094:(e,t,s)=>{"use strict";s.d(t,{z:()=>d});var r=s(5344),a=s(3729),i=s(2751),o=s(8720),n=s(1453);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:t,size:s,asChild:a=!1,...o},d)=>{let c=a?i.g7:"button";return r.jsx(c,{className:(0,n.cn)(l({variant:t,size:s,className:e})),ref:d,...o})});d.displayName="Button"},2032:(e,t,s)=>{"use strict";s.d(t,{FN:()=>m,Mi:()=>h,VW:()=>d,_i:()=>c,gD:()=>x,lj:()=>p,sA:()=>f});var r=s(5344),a=s(3729),i=s(7953),o=s(8720),n=s(4513),l=s(1453);let d=i.zt,c=a.forwardRef(({className:e,...t},s)=>r.jsx(i.l_,{ref:s,className:(0,l.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));c.displayName=i.l_.displayName;let u=(0,o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),m=a.forwardRef(({className:e,variant:t,...s},a)=>r.jsx(i.fC,{ref:a,className:(0,l.cn)(u({variant:t}),e),...s}));m.displayName=i.fC.displayName;let x=a.forwardRef(({className:e,...t},s)=>r.jsx(i.aU,{ref:s,className:(0,l.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));x.displayName=i.aU.displayName;let f=a.forwardRef(({className:e,...t},s)=>r.jsx(i.x8,{ref:s,className:(0,l.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:r.jsx(n.Z,{className:"h-4 w-4"})}));f.displayName=i.x8.displayName;let h=a.forwardRef(({className:e,...t},s)=>r.jsx(i.Dx,{ref:s,className:(0,l.cn)("text-sm font-semibold",e),...t}));h.displayName=i.Dx.displayName;let p=a.forwardRef(({className:e,...t},s)=>r.jsx(i.dk,{ref:s,className:(0,l.cn)("text-sm opacity-90",e),...t}));p.displayName=i.dk.displayName},3859:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Toaster:()=>o});var r=s(5344),a=s(2032),i=s(9769);function o(){let{toasts:e}=(0,i.pm)();return(0,r.jsxs)(a.VW,{children:[e.map(function({id:e,title:t,description:s,action:i,...o}){return(0,r.jsxs)(a.FN,{...o,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[t&&r.jsx(a.Mi,{children:t}),s&&r.jsx(a.lj,{children:s})]}),i,r.jsx(a.sA,{})]},e)}),r.jsx(a._i,{})]})}},9769:(e,t,s)=>{"use strict";s.d(t,{pm:()=>m});var r=s(3729);let a=0,i=new Map,o=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e4);i.set(e,t)},n=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?o(s):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function c(e){d=n(d,e),l.forEach(e=>{e(d)})}function u({...e}){let t=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||s()}}}),{id:t,dismiss:s,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function m(){let[e,t]=r.useState(d);return r.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},1453:(e,t,s)=>{"use strict";s.d(t,{cn:()=>i});var r=s(6815),a=s(9377);function i(...e){return(0,a.m6)((0,r.W)(e))}},2607:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>v,metadata:()=>g});var r=s(5036),a=s(6408),i=s.n(a);s(5023);var o=s(990),n=s(1774),l=s(6843);let d=(0,l.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/NavThing.tsx`),{__esModule:c,$$typeof:u}=d,m=d.default,x=(0,l.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/ui/toaster.tsx`),{__esModule:f,$$typeof:h}=x;x.default;let p=(0,l.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/ui/toaster.tsx#Toaster`);s(4790);let g={title:"Next.js",description:"Generated by Next.js"};function v({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:function(...e){return(0,n.m6)((0,o.W)(e))}("min-h-screen bg-background font-sans antialiased",i().variable),children:[r.jsx(m,{}),e,r.jsx(p,{})]})})}},5023:()=>{}};