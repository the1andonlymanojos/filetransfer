(()=>{var e={};e.id=928,e.ids=[928],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},7147:e=>{"use strict";e.exports=require("fs")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2575:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=t(482),a=t(9108),l=t(2563),i=t.n(l),n=t(8300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);t.d(s,o);let c=["",{children:["test",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8482)),"/Users/manojos/WebstormProjects/cexchange/src/app/test/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,2607)),"/Users/manojos/WebstormProjects/cexchange/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/manojos/WebstormProjects/cexchange/src/app/test/page.tsx"],u="/test/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/test/page",pathname:"/test",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},441:(e,s,t)=>{Promise.resolve().then(t.bind(t,3002))},3002:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>w});var r=t(5344),a=t(3729),l=t(2522),i=t(3024),n=t(5299),o=t(1453),c=t(5094);let d=a.createContext(null);function u(){let e=a.useContext(d);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let m=a.forwardRef(({orientation:e="horizontal",opts:s,setApi:t,plugins:i,className:n,children:c,...u},m)=>{let[p,x]=(0,l.Z)({...s,axis:"horizontal"===e?"x":"y"},i),[f,g]=a.useState(!1),[h,j]=a.useState(!1),v=a.useCallback(e=>{e&&(g(e.canScrollPrev()),j(e.canScrollNext()))},[]),N=a.useCallback(()=>{x?.scrollPrev()},[x]),w=a.useCallback(()=>{x?.scrollNext()},[x]),y=a.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),N()):"ArrowRight"===e.key&&(e.preventDefault(),w())},[N,w]);return a.useEffect(()=>{x&&t&&t(x)},[x,t]),a.useEffect(()=>{if(x)return v(x),x.on("reInit",v),x.on("select",v),()=>{x?.off("select",v)}},[x,v]),r.jsx(d.Provider,{value:{carouselRef:p,api:x,opts:s,orientation:e||(s?.axis==="y"?"vertical":"horizontal"),scrollPrev:N,scrollNext:w,canScrollPrev:f,canScrollNext:h},children:r.jsx("div",{ref:m,onKeyDownCapture:y,className:(0,o.cn)("relative",n),role:"region","aria-roledescription":"carousel",...u,children:c})})});m.displayName="Carousel";let p=a.forwardRef(({className:e,...s},t)=>{let{carouselRef:a,orientation:l}=u();return r.jsx("div",{ref:a,className:"overflow-hidden",children:r.jsx("div",{ref:t,className:(0,o.cn)("flex","horizontal"===l?"-ml-4":"-mt-4 flex-col",e),...s})})});p.displayName="CarouselContent";let x=a.forwardRef(({className:e,...s},t)=>{let{orientation:a}=u();return r.jsx("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,o.cn)("min-w-0 w-fit shrink-0 grow-0 basis-full","horizontal"===a?"pl-4":"pt-4",e),...s})});x.displayName="CarouselItem";let f=a.forwardRef(({className:e,variant:s="outline",size:t="icon",...a},l)=>{let{orientation:n,scrollPrev:d,canScrollPrev:m}=u();return(0,r.jsxs)(c.z,{ref:l,variant:s,size:t,className:(0,o.cn)("absolute  h-8 w-8 rounded-full","horizontal"===n?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!m,onClick:d,...a,children:[r.jsx(i.Z,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Previous slide"})]})});f.displayName="CarouselPrevious";let g=a.forwardRef(({className:e,variant:s="outline",size:t="icon",...a},l)=>{let{orientation:i,scrollNext:d,canScrollNext:m}=u();return(0,r.jsxs)(c.z,{ref:l,variant:s,size:t,className:(0,o.cn)("absolute h-8 w-8 rounded-full","horizontal"===i?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!m,onClick:d,...a,children:[r.jsx(n.Z,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Next slide"})]})});g.displayName="CarouselNext";let h=a.forwardRef(({className:e,...s},t)=>r.jsx("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...s}));h.displayName="Card",a.forwardRef(({className:e,...s},t)=>r.jsx("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",e),...s})).displayName="CardHeader",a.forwardRef(({className:e,...s},t)=>r.jsx("h3",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",e),...s})).displayName="CardTitle",a.forwardRef(({className:e,...s},t)=>r.jsx("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",e),...s})).displayName="CardDescription";let j=a.forwardRef(({className:e,...s},t)=>r.jsx("div",{ref:t,className:(0,o.cn)("p-6 pt-0",e),...s}));j.displayName="CardContent",a.forwardRef(({className:e,...s},t)=>r.jsx("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",e),...s})).displayName="CardFooter";var v=t(8428),N=t(6887);let w=({images:e,productName:s,location:t,initialBid:a,userBidIfAny:l,listingId:i})=>{let n=(0,v.useRouter)();return r.jsx("div",{className:"w-full my-3 snap-center md:w-1/3 lg:w-1/4 xl:w-1/5",onClick:()=>{console.log("clicked");let e=`/listing/${i}`;n.push(e)},children:r.jsx(h,{className:"w-fit m-2",children:(0,r.jsxs)("div",{className:"flex flex-col max-sm:flex-row",children:[(0,r.jsxs)(m,{className:"w-full max-sm:w-1/2 max-w-lg bg-gray-100",children:[r.jsx(p,{children:e.map((e,s)=>r.jsx(x,{children:r.jsx("div",{className:"p-1",children:r.jsx(h,{children:r.jsx(j,{className:"flex aspect-square items-center justify-center p-0",children:r.jsx("img",{src:`${N.y}`+e,className:"w-full h-full object-contain"})})})})},s))}),r.jsx(f,{className:"left-4"}),r.jsx(g,{className:"right-4"})]}),(0,r.jsxs)("div",{className:"bg-gray-100 p-4 max-sm:w-1/2",children:[r.jsx("div",{className:"font-medium text-lg   col-span-2 leading-none tracking-tight",children:s}),(0,r.jsxs)("div",{className:"flex justify-between",children:[" ",(0,r.jsxs)("div",{className:"col-span-2 text-xl px-0 py-1",children:["₹",a]})]})]})]})})})}},6887:(e,s,t)=>{"use strict";t.d(s,{y:()=>r});let r="https://manojshivagange.tech:3000/"},8482:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var r=t(5036),a=t(4495);let l=()=>(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:" m-5 p-5 border-black border  border-solid",children:[{id:1,uploaderId:1,title:"Table",location:"BH2",description:"A table",suggestedMinimumBid:50,images:["/prodcutImage1.png","/ProductImage2.png"]},{id:2,uploaderId:1,title:"Maggi",location:"BH2",description:"A table",suggestedMinimumBid:24,images:["/maggi.jpg","/cup.png"]}].map((e,s)=>r.jsx(a.ZP,{images:e.images,productName:e.title,initialBid:e.suggestedMinimumBid,location:e.location,userBidIfAny:0,listingId:e.id},e.id))}),r.jsx("div",{className:"overflow-hidden w-32 h-32 bg-[url('/bg1.png')] bg-no-repeat resize",children:"aasdfsafasdf"})]})},4495:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>i});let r=(0,t(6843).createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/ProductCardShadCn.tsx`),{__esModule:a,$$typeof:l}=r,i=r.default},3881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[638,313,337,534,621],()=>t(2575));module.exports=r})();