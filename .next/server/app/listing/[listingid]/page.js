(()=>{var e={};e.id=848,e.ids=[848],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},7147:e=>{"use strict";e.exports=require("fs")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5746:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>r.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>o,routeModule:()=>x,tree:()=>d});var l=t(482),i=t(9108),a=t(2563),r=t.n(a),n=t(8300),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);t.d(s,c);let d=["",{children:["listing",{children:["[listingid]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,869)),"/Users/manojos/WebstormProjects/cexchange/src/app/listing/[listingid]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,2607)),"/Users/manojos/WebstormProjects/cexchange/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["/Users/manojos/WebstormProjects/cexchange/src/app/listing/[listingid]/page.tsx"],m="/listing/[listingid]/page",u={require:t,loadChunk:()=>Promise.resolve()},x=new l.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/listing/[listingid]/page",pathname:"/listing/[listingid]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9400:(e,s,t)=>{Promise.resolve().then(t.bind(t,4023)),Promise.resolve().then(t.bind(t,2613)),Promise.resolve().then(t.bind(t,6228)),Promise.resolve().then(t.bind(t,9042))},1838:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,t(9224).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},4023:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var l=t(5344),i=t(6228),a=t(9042),r=t(3729);let n=({listingId:e,suggestedMinimumBid:s,highestBid:t})=>{let[n,c]=(0,r.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"bg-white rounded-lg p-4 mb-4 w-full",children:[l.jsx("p",{className:"text-lg font-medium mb-2",children:"Your Offer"}),l.jsx(i.default,{setUpdated:c,updated:n,listingId:e})]}),l.jsx("div",{className:"flex justify-center",children:l.jsx(a.default,{setUpdateFlag:c,productId:e,curr:t||s,delta:(t||s)/20,min:10,max:1e4})})]})}},2613:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var l=t(5344),i=t(3729);function a({images:e,className:s,height:t}){let[a,r]=(0,i.useState)(0),[n,c]=(0,i.useState)(0);return(0,l.jsxs)("div",{className:`${s}`,children:[l.jsx("div",{className:"mb-2 bg-white w-full max-h-[500px] aspect-square max-w-full overflow-hidden",children:l.jsx("img",{className:"w-full h-full object-contain",src:e[a]})}),l.jsx("div",{className:(t||" h-16 ")+"flex flex-row w-full overflow-x-scroll justify-start gap-1 items-center",children:e.map((e,s)=>l.jsx("img",{src:e,className:"h-full",onMouseOver:()=>{r(s)},onMouseLeave:()=>{r(n)},onClick:()=>{r(s),c(s)}},s))})]})}},6228:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var l=t(5344),i=t(3729),a=t(6887);let r=({listingId:e,updated:s,setUpdated:t})=>{let r=`${a.y}api/offers/listing/${e}`,[n,c]=(0,i.useState)({}),[d,o]=(0,i.useState)(!0),[m,u]=(0,i.useState)(!1),[x,h]=(0,i.useState)(""),[f,p]=(0,i.useState)(!0),[g,j]=(0,i.useState)(0);(0,i.useEffect)(()=>{let e=Date.parse(n.expires_at),s=Date.parse(n.created_at),t=Math.floor((e-Date.now())*100/(e-s));t<0&&(t=100),console.log(t=100-t),j(Math.max(5,t))},[n]);let v=async()=>{let e=await fetch(r,{method:"GET",cache:"no-cache",credentials:"include"});200!==e.status&&401!==e.status&&460!==e.status&&(u(!0),h("Failed to fetch offers")),401===e.status&&p(!1),460===e.status&&(u(!0),h("No offers yet"));let s=await e.json();console.log(s),s.offer&&(c(s.offer),console.log(n)),o(!1)};return(0,i.useEffect)(()=>{t&&(console.log("updated value"),v(),t(!1),console.log(n))},[s]),(0,i.useEffect)(()=>{v()},[]),(0,l.jsxs)("div",{children:[d&&l.jsx("div",{children:"Loading..."}),f&&m&&l.jsx("div",{children:x}),!f&&l.jsx("div",{children:"Log in to see offers"}),!d&&!m&&!n&&l.jsx("div",{children:"No offers yet"}),f&&!d&&!m&&n&&(0,l.jsxs)("div",{className:"flex flex-col",children:[l.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:l.jsx("div",{className:"py-2 inline-block min-w-full sm:px-6 lg:px-8",children:l.jsx("div",{className:"overflow-hidden",children:(0,l.jsxs)("table",{className:"min-w-full",children:[l.jsx("thead",{className:"bg-white border-b",children:(0,l.jsxs)("tr",{children:[l.jsx("th",{scope:"col",className:"text-sm font-medium text-gray-900 px-6 py-4 text-left",children:"Amount"}),l.jsx("th",{scope:"col",className:"text-sm font-medium text-gray-900 px-6 py-4 text-left",children:"Status"})]})}),l.jsx("tbody",{children:(0,l.jsxs)("tr",{className:"bg-gray-100 border-b",children:[l.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:n.amount}),l.jsx("td",{className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",children:null===n.accepted?"Pending":1===n.accepted?"Accepted!":"Rejected"})]})})]})})})}),(0,l.jsxs)("div",{className:"bg-white rounded-lg p-4 mb-4 w-full",children:[l.jsx("p",{className:"text-lg font-medium mb-2",children:"Time Left"}),l.jsx("div",{className:"bg-gray-300 rounded-full h-4 w-full",children:l.jsx("div",{className:"bg-gray-500 rounded-full h-4",style:{width:g+"%"}})})]})]})]})}},9042:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>u});var l=t(5344),i=t(6887),a=t(677);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,t(9224).Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);var n=t(1838),c=t(5094),d=t(3729),o=t(9769),m=t(8428);let u=({delta:e,curr:s,min:t,max:u,productId:x,setUpdateFlag:h})=>{let[f,p]=(0,d.useState)(Math.round(s)),g=Math.round(t),j=Math.round(u),v=Math.round(e),y=(0,d.useRef)(null),b=(0,d.useRef)(null),w=(0,d.useRef)(null),N=(0,d.useRef)(null),{toast:P}=(0,o.pm)(),_=(0,m.useRouter)(),M=async()=>{console.log(w.current.value),console.log(f);let e=`${i.y}api/offers/create/${x}`,s={price:f,ttl:w.current.value},t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s),credentials:"include"});if(console.log(t.status),console.log(await t.json()),401===t.status){P({title:"Uh Oh!",description:"Looks like you are not logged in, please login to place a bid"}),_.push(`/login?redirect=${window.location.pathname}`);return}if(469===t.status){P({title:"Nice Try ;)",description:"You cant bid on your own listing"}),N.current.click();return}h&&(h(!0),console.log("set update flag")),P({title:"Bid Placed!",description:"You can view your offers in Account > My Offers section"}),N.current.click()},S=()=>{if(f-v<g){y.current.disabled=!0;return}b.current.disabled=!1,p(f-v)},k=()=>{if(f+v>j){b.current.disabled=!0;return}y.current.disabled=!1,p(f+v)},[q,C]=(0,d.useState)(!1);return l.jsx("div",{children:(0,l.jsxs)(a.dy,{children:[l.jsx(a.Qz,{asChild:!0,children:l.jsx(c.z,{onClick:()=>C(!0),children:"Place Bid"})}),l.jsx(a.sc,{className:"flex  items-center justify-center",children:(0,l.jsxs)("div",{className:"max-w-sm ",children:[(0,l.jsxs)(a.OX,{children:[l.jsx(a.iI,{className:"text-xl",children:"Are you sure?"}),l.jsx(a.u6,{className:"text-basis",children:"Placing a bid means that you are interested in buying the product/service at the price if accepted. "})]}),(0,l.jsxs)("div",{className:"flex items-center justify-center mt-8 mb-8 space-x-2",children:[l.jsx(c.z,{ref:y,className:"h-8 rounded-2xl p-0 w-8",onClick:e=>{S()},children:l.jsx(r,{color:"white",className:"h-6 w-6"})}),(0,l.jsxs)("div",{className:"text-3xl",children:["₹",f]}),l.jsx(c.z,{ref:b,className:"h-8 rounded-2xl p-0 w-8",onClick:e=>{k()},children:l.jsx(n.Z,{color:"white",className:"h-6 w-6"})})]}),(0,l.jsxs)("div",{className:"flex  items-center justify-center space-x-2",children:[l.jsx("div",{children:"Bid Validity:"}),(0,l.jsxs)("select",{ref:w,children:[" ",l.jsx("option",{value:1,children:"1 Day"}),l.jsx("option",{value:2,children:" 2 Days "})," ",l.jsx("option",{value:3,children:"3 Days"})," "]})," "]}),(0,l.jsxs)(a.ze,{children:[l.jsx("div",{className:"flex justify-center"}),l.jsx(c.z,{onClick:M,children:"Submit"}),l.jsx(a.uh,{asChild:!0,children:l.jsx(c.z,{ref:N,variant:"outline",children:"Cancel"})})]})]})})]})})}},677:(e,s,t)=>{"use strict";t.d(s,{OX:()=>x,Qz:()=>c,dy:()=>n,iI:()=>f,sc:()=>u,u6:()=>p,uh:()=>o,ze:()=>h});var l=t(5344),i=t(3729),a=t(4885),r=t(1453);let n=({shouldScaleBackground:e=!0,...s})=>l.jsx(a.d.Root,{shouldScaleBackground:e,...s});n.displayName="Drawer";let c=a.d.Trigger,d=a.d.Portal,o=a.d.Close,m=i.forwardRef(({className:e,...s},t)=>l.jsx(a.d.Overlay,{ref:t,className:(0,r.cn)("fixed inset-0 z-50 bg-black/80",e),...s}));m.displayName=a.d.Overlay.displayName;let u=i.forwardRef(({className:e,children:s,...t},i)=>(0,l.jsxs)(d,{children:[l.jsx(m,{}),(0,l.jsxs)(a.d.Content,{ref:i,className:(0,r.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",e),...t,children:[l.jsx("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),s]})]}));u.displayName="DrawerContent";let x=({className:e,...s})=>l.jsx("div",{className:(0,r.cn)("grid gap-1.5 p-4 text-center sm:text-left",e),...s});x.displayName="DrawerHeader";let h=({className:e,...s})=>l.jsx("div",{className:(0,r.cn)("mt-auto flex flex-col gap-2 p-4",e),...s});h.displayName="DrawerFooter";let f=i.forwardRef(({className:e,...s},t)=>l.jsx(a.d.Title,{ref:t,className:(0,r.cn)("text-lg font-semibold leading-none tracking-tight",e),...s}));f.displayName=a.d.Title.displayName;let p=i.forwardRef(({className:e,...s},t)=>l.jsx(a.d.Description,{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",e),...s}));p.displayName=a.d.Description.displayName},6887:(e,s,t)=>{"use strict";t.d(s,{y:()=>l});let l="https://manojshivagange.tech:3000/"},869:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>b});var l=t(5036),i=t(6843);let a=(0,i.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/ImageCar.tsx`),{__esModule:r,$$typeof:n}=a,c=a.default,d=(0,i.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/PlaceBidThingy.tsx`),{__esModule:o,$$typeof:m}=d,u=d.default,x=(0,i.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/OfferTables.tsx`),{__esModule:h,$$typeof:f}=x,p=x.default,g=(0,i.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/HoistedPair.tsx`),{__esModule:j,$$typeof:v}=g,y=g.default,b=async({params:e})=>{let s=e.listingid;console.log(s);let t=`http://127.0.0.1:3001/api/listings/${s}`;console.log(t);let i=await fetch(t,{method:"GET",cache:"no-cache"});if(200!==i.status)return console.log("failed to fetch"),console.log(i.status),console.log(await i.json()),l.jsx("div",{children:"Failed to fetch"});let a=await i.json();console.log(a);let r=a.images,n=a.title,d=a.location,o=a.suggested_minimum_bid,m=a.description,x=a.highest_bid;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"max-sm:yeet",children:[(0,l.jsxs)("div",{className:"flex flex-row justify-evenly items-start bg-gray-100 rounded-lg p-6 shadow-md",children:[l.jsx("div",{className:"flex flex-row justify-center mb-6",children:l.jsx(c,{images:r,className:"m-5 w-[30vw]"})}),l.jsx("div",{className:"flex mt-5 flex-col items-baseline h-full w-[30vw]",children:(0,l.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[(0,l.jsxs)("div",{children:[l.jsx("h1",{className:"text-3xl font-bold mb-2",children:n}),l.jsx("p",{className:"text-lg font-medium mb-10",children:d})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:"text-lg font-medium mb-4",children:["Description",l.jsx("br",{}),m]}),l.jsx("p",{className:"text-lg font-medium mb-6",children:x?`Highest bid: ${x}`:`Suggested Minimum Bid: ${o}`})]}),l.jsx(u,{productId:s,curr:x||o,delta:(x||o)/20,min:10,max:1e4})]})}),l.jsx("div",{className:"flex w-[25vw] max-w-96 min-w-52 flex-col items-center w-full",children:(0,l.jsxs)("div",{className:"bg-white rounded-lg p-4 mb-4 w-full",children:[l.jsx("p",{className:"text-lg font-medium mb-2",children:"Your Offer"}),s?l.jsx(p,{listingId:s}):l.jsx("div",{children:"Invalid ID"})]})})]}),l.jsx("div",{className:"bg-white rounded-lg p-4 w-full",children:l.jsx("p",{className:"text-lg font-medium mb-2",children:"Posted By"})})]}),(0,l.jsxs)("div",{className:"sm:yeet",children:[l.jsx("h1",{className:"text-3xl font-bold m-5 mb-2",children:n}),l.jsx("p",{className:"text-lg font-medium mt-2 ml-5 mr-2 mb-6",children:d}),l.jsx(c,{images:r,className:"p-5 w-full"}),(0,l.jsxs)("p",{className:"text-lg font-medium mt-5 ml-5 mr-2 mb-4",children:["Description",l.jsx("br",{}),m]}),(0,l.jsxs)("p",{className:"text-lg font-medium mt-5 ml-5 mr-2 mb-6",children:["Suggested Minimum Bid: ",o," "]}),l.jsx("div",{children:l.jsx(y,{listingId:s,suggestedMinimumBid:o,highestBid:x})}),l.jsx("div",{className:"bg-white rounded-lg p-4 mb-4 w-full",children:l.jsx("p",{className:"text-lg font-medium mb-2",children:"Posted By"})})]})]})}},3881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var l=t(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,l.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),l=s.X(0,[638,313,337,885,302],()=>t(5746));module.exports=l})();