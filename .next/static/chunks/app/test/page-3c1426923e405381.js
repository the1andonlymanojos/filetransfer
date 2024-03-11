(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928,931],{6183:function(e,r,t){Promise.resolve().then(t.bind(t,8442))},8442:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}});var s=t(7437),a=t(2265),l=t(8062),n=t(3879),i=t(8025),o=t(2169),c=t(575);let d=a.createContext(null);function u(){let e=a.useContext(d);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let f=a.forwardRef((e,r)=>{let{orientation:t="horizontal",opts:n,setApi:i,plugins:c,className:u,children:f,...m}=e,[x,h]=(0,l.Z)({...n,axis:"horizontal"===t?"x":"y"},c),[p,v]=a.useState(!1),[g,N]=a.useState(!1),w=a.useCallback(e=>{e&&(v(e.canScrollPrev()),N(e.canScrollNext()))},[]),y=a.useCallback(()=>{null==h||h.scrollPrev()},[h]),b=a.useCallback(()=>{null==h||h.scrollNext()},[h]),j=a.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),b())},[y,b]);return a.useEffect(()=>{h&&i&&i(h)},[h,i]),a.useEffect(()=>{if(h)return w(h),h.on("reInit",w),h.on("select",w),()=>{null==h||h.off("select",w)}},[h,w]),(0,s.jsx)(d.Provider,{value:{carouselRef:x,api:h,opts:n,orientation:t||((null==n?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:b,canScrollPrev:p,canScrollNext:g},children:(0,s.jsx)("div",{ref:r,onKeyDownCapture:j,className:(0,o.cn)("relative",u),role:"region","aria-roledescription":"carousel",...m,children:f})})});f.displayName="Carousel";let m=a.forwardRef((e,r)=>{let{className:t,...a}=e,{carouselRef:l,orientation:n}=u();return(0,s.jsx)("div",{ref:l,className:"overflow-hidden",children:(0,s.jsx)("div",{ref:r,className:(0,o.cn)("flex","horizontal"===n?"-ml-4":"-mt-4 flex-col",t),...a})})});m.displayName="CarouselContent";let x=a.forwardRef((e,r)=>{let{className:t,...a}=e,{orientation:l}=u();return(0,s.jsx)("div",{ref:r,role:"group","aria-roledescription":"slide",className:(0,o.cn)("min-w-0 w-fit shrink-0 grow-0 basis-full","horizontal"===l?"pl-4":"pt-4",t),...a})});x.displayName="CarouselItem";let h=a.forwardRef((e,r)=>{let{className:t,variant:a="outline",size:l="icon",...i}=e,{orientation:d,scrollPrev:f,canScrollPrev:m}=u();return(0,s.jsxs)(c.z,{ref:r,variant:a,size:l,className:(0,o.cn)("absolute  h-8 w-8 rounded-full","horizontal"===d?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!m,onClick:f,...i,children:[(0,s.jsx)(n.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});h.displayName="CarouselPrevious";let p=a.forwardRef((e,r)=>{let{className:t,variant:a="outline",size:l="icon",...n}=e,{orientation:d,scrollNext:f,canScrollNext:m}=u();return(0,s.jsxs)(c.z,{ref:r,variant:a,size:l,className:(0,o.cn)("absolute h-8 w-8 rounded-full","horizontal"===d?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!m,onClick:f,...n,children:[(0,s.jsx)(i.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Next slide"})]})});p.displayName="CarouselNext";let v=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});v.displayName="Card",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",t),...a})}).displayName="CardHeader",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("h3",{ref:r,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})}).displayName="CardTitle",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("p",{ref:r,className:(0,o.cn)("text-sm text-muted-foreground",t),...a})}).displayName="CardDescription";let g=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,o.cn)("p-6 pt-0",t),...a})});g.displayName="CardContent",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,o.cn)("flex items-center p-6 pt-0",t),...a})}).displayName="CardFooter";var N=t(7907),w=t(3237),y=e=>{let{images:r,productName:t,location:a,initialBid:l,userBidIfAny:n,listingId:i}=e,o=(0,N.useRouter)();return(0,s.jsx)("div",{className:"w-full my-3 snap-center md:w-1/3 lg:w-1/4 xl:w-1/5",onClick:()=>{console.log("clicked"),o.push("/listing/".concat(i))},children:(0,s.jsx)(v,{className:"w-fit m-2",children:(0,s.jsxs)("div",{className:"flex flex-col max-sm:flex-row",children:[(0,s.jsxs)(f,{className:"w-full max-sm:w-1/2 max-w-lg bg-gray-100",children:[(0,s.jsx)(m,{children:r.map((e,r)=>(0,s.jsx)(x,{children:(0,s.jsx)("div",{className:"p-1",children:(0,s.jsx)(v,{children:(0,s.jsx)(g,{className:"flex aspect-square items-center justify-center p-0",children:(0,s.jsx)("img",{src:"".concat(w.y)+e,width:"800px"})})})})},r))}),(0,s.jsx)(h,{className:"left-4"}),(0,s.jsx)(p,{className:"right-4"})]}),(0,s.jsxs)("div",{className:"bg-gray-100 p-4 max-sm:w-1/2",children:[(0,s.jsx)("div",{className:"font-medium text-lg   col-span-2 leading-none tracking-tight",children:t}),(0,s.jsxs)("div",{className:"flex justify-between",children:[" ",(0,s.jsxs)("div",{className:"col-span-2 text-xl px-0 py-1",children:["₹",l]})]})]})]})})})}},575:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var s=t(7437),a=t(2265),l=t(9143),n=t(7742),i=t(2169);let o=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,r)=>{let{className:t,variant:a,size:n,asChild:c=!1,...d}=e,u=c?l.g7:"button";return(0,s.jsx)(u,{className:(0,i.cn)(o({variant:a,size:n,className:t})),ref:r,...d})});c.displayName="Button"},3237:function(e,r,t){"use strict";t.d(r,{y:function(){return s}});let s="https://manojshivagange.tech:3000/"},2169:function(e,r,t){"use strict";t.d(r,{cn:function(){return l}});var s=t(3167),a=t(1367);function l(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,s.W)(r))}}},function(e){e.O(0,[614,912,971,69,744],function(){return e(e.s=6183)}),_N_E=e.O()}]);