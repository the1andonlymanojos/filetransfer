(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{9076:function(e,t,s){Promise.resolve().then(s.bind(s,61))},61:function(e,t,s){"use strict";s.r(t);var r=s(7437),a=s(8442),n=s(3237),l=s(2265),i=s(575),o=s(7147);t.default=e=>{let{params:t,searchParams:s}=e,c=s.search,[d,u]=(0,l.useState)(0),[f,m]=(0,l.useState)(30),[x,h]=(0,l.useState)([]),[p,g]=(0,l.useState)(!1),{toast:v}=(0,o.pm)(),N="".concat(n.y,"api/listings/search"),j=async(e,t)=>{let s=await fetch(N,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:e,offset:t,searchString:c})}),r=await s.json();200!==s.status&&404===s.status&&(v({title:"Uh Oh!",description:"No results found, showing new listings"}),h(e=>[...e,...r.listings])),h([...r.listings]),u(t=>t+e)};return(0,l.useEffect)(()=>{},[x]),(0,l.useEffect)(()=>{j(f,d),console.log("listings"+x)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"max-sm:yeet flex  justify-between",children:[(0,r.jsx)("div",{className:"w-[15vw] "}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("div",{className:"font-roboto font-thin text-3xl",children:"Showing results for"}),(0,r.jsx)("div",{className:"font-thin text-5xl",children:c}),(0,r.jsx)("div",{className:"m-2 flex flex-row flex-wrap items-start",children:x.map((e,t)=>(0,r.jsx)(a.default,{listingId:e.id,images:e.images,productName:e.title,initialBid:e.suggested_minimum_bid,location:e.location,userBidIfAny:0},t))}),(0,r.jsx)(i.z,{onClick:e=>{j(f,d)},children:"Load More"})]}),(0,r.jsx)("div",{className:"w-[15vw]"})]}),(0,r.jsxs)("div",{className:"p-2 sm:yeet",children:[(0,r.jsx)("div",{className:"font-roboto font-thin text-3xl",children:"Showing results for"}),(0,r.jsx)("div",{className:"font-thin text-5xl",children:c}),(0,r.jsx)("div",{className:"m-2",children:x.map((e,t)=>(0,r.jsx)(a.default,{listingId:e.id,images:e.images,productName:e.title,initialBid:e.suggested_minimum_bid,location:e.location,userBidIfAny:0},t))}),(0,r.jsx)(i.z,{onClick:e=>{j(f,d)},children:"Load More"})]})]})}},8442:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var r=s(7437),a=s(2265),n=s(8062),l=s(3879),i=s(8025),o=s(2169),c=s(575);let d=a.createContext(null);function u(){let e=a.useContext(d);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let f=a.forwardRef((e,t)=>{let{orientation:s="horizontal",opts:l,setApi:i,plugins:c,className:u,children:f,...m}=e,[x,h]=(0,n.Z)({...l,axis:"horizontal"===s?"x":"y"},c),[p,g]=a.useState(!1),[v,N]=a.useState(!1),j=a.useCallback(e=>{e&&(g(e.canScrollPrev()),N(e.canScrollNext()))},[]),w=a.useCallback(()=>{null==h||h.scrollPrev()},[h]),y=a.useCallback(()=>{null==h||h.scrollNext()},[h]),b=a.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),w()):"ArrowRight"===e.key&&(e.preventDefault(),y())},[w,y]);return a.useEffect(()=>{h&&i&&i(h)},[h,i]),a.useEffect(()=>{if(h)return j(h),h.on("reInit",j),h.on("select",j),()=>{null==h||h.off("select",j)}},[h,j]),(0,r.jsx)(d.Provider,{value:{carouselRef:x,api:h,opts:l,orientation:s||((null==l?void 0:l.axis)==="y"?"vertical":"horizontal"),scrollPrev:w,scrollNext:y,canScrollPrev:p,canScrollNext:v},children:(0,r.jsx)("div",{ref:t,onKeyDownCapture:b,className:(0,o.cn)("relative",u),role:"region","aria-roledescription":"carousel",...m,children:f})})});f.displayName="Carousel";let m=a.forwardRef((e,t)=>{let{className:s,...a}=e,{carouselRef:n,orientation:l}=u();return(0,r.jsx)("div",{ref:n,className:"overflow-hidden",children:(0,r.jsx)("div",{ref:t,className:(0,o.cn)("flex","horizontal"===l?"-ml-4":"-mt-4 flex-col",s),...a})})});m.displayName="CarouselContent";let x=a.forwardRef((e,t)=>{let{className:s,...a}=e,{orientation:n}=u();return(0,r.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,o.cn)("min-w-0 w-fit shrink-0 grow-0 basis-full","horizontal"===n?"pl-4":"pt-4",s),...a})});x.displayName="CarouselItem";let h=a.forwardRef((e,t)=>{let{className:s,variant:a="outline",size:n="icon",...i}=e,{orientation:d,scrollPrev:f,canScrollPrev:m}=u();return(0,r.jsxs)(c.z,{ref:t,variant:a,size:n,className:(0,o.cn)("absolute  h-8 w-8 rounded-full","horizontal"===d?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",s),disabled:!m,onClick:f,...i,children:[(0,r.jsx)(l.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});h.displayName="CarouselPrevious";let p=a.forwardRef((e,t)=>{let{className:s,variant:a="outline",size:n="icon",...l}=e,{orientation:d,scrollNext:f,canScrollNext:m}=u();return(0,r.jsxs)(c.z,{ref:t,variant:a,size:n,className:(0,o.cn)("absolute h-8 w-8 rounded-full","horizontal"===d?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",s),disabled:!m,onClick:f,...l,children:[(0,r.jsx)(i.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Next slide"})]})});p.displayName="CarouselNext";let g=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...a})});g.displayName="Card",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",s),...a})}).displayName="CardHeader",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("h3",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",s),...a})}).displayName="CardTitle",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",s),...a})}).displayName="CardDescription";let v=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("p-6 pt-0",s),...a})});v.displayName="CardContent",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",s),...a})}).displayName="CardFooter";var N=s(7907),j=s(3237),w=e=>{let{images:t,productName:s,location:a,initialBid:n,userBidIfAny:l,listingId:i}=e,o=(0,N.useRouter)();return(0,r.jsx)("div",{className:"w-full my-3 snap-center md:w-1/3 lg:w-1/4 xl:w-1/5",onClick:()=>{console.log("clicked"),o.push("/listing/".concat(i))},children:(0,r.jsx)(g,{className:"w-fit m-2",children:(0,r.jsxs)("div",{className:"flex flex-col max-sm:flex-row",children:[(0,r.jsxs)(f,{className:"w-full max-sm:w-1/2 max-w-lg bg-gray-100",children:[(0,r.jsx)(m,{children:t.map((e,t)=>(0,r.jsx)(x,{children:(0,r.jsx)("div",{className:"p-1",children:(0,r.jsx)(g,{children:(0,r.jsx)(v,{className:"flex aspect-square items-center justify-center p-0",children:(0,r.jsx)("img",{src:"".concat(j.y)+e,className:"w-full h-full object-contain"})})})})},t))}),(0,r.jsx)(h,{className:"left-4"}),(0,r.jsx)(p,{className:"right-4"})]}),(0,r.jsxs)("div",{className:"bg-gray-100 p-4 max-sm:w-1/2",children:[(0,r.jsx)("div",{className:"font-medium text-lg   col-span-2 leading-none tracking-tight",children:s}),(0,r.jsxs)("div",{className:"flex justify-between",children:[" ",(0,r.jsxs)("div",{className:"col-span-2 text-xl px-0 py-1",children:["₹",n]})]})]})]})})})}},575:function(e,t,s){"use strict";s.d(t,{z:function(){return c}});var r=s(7437),a=s(2265),n=s(9143),l=s(7742),i=s(2169);let o=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:s,variant:a,size:l,asChild:c=!1,...d}=e,u=c?n.g7:"button";return(0,r.jsx)(u,{className:(0,i.cn)(o({variant:a,size:l,className:s})),ref:t,...d})});c.displayName="Button"},7147:function(e,t,s){"use strict";s.d(t,{pm:function(){return f}});var r=s(2265);let a=0,n=new Map,l=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e4);n.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?l(s):e.toasts.forEach(e=>{l(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],c={toasts:[]};function d(e){c=i(c,e),o.forEach(e=>{e(c)})}function u(e){let{...t}=e,s=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>d({type:"DISMISS_TOAST",toastId:s});return d({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function f(){let[e,t]=r.useState(c);return r.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},3237:function(e,t,s){"use strict";s.d(t,{y:function(){return r}});let r="https://manojshivagange.tech:3000/"},2169:function(e,t,s){"use strict";s.d(t,{cn:function(){return n}});var r=s(3167),a=s(1367);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m6)((0,r.W)(t))}}},function(e){e.O(0,[614,912,971,69,744],function(){return e(e.s=9076)}),_N_E=e.O()}]);