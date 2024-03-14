(()=>{var e={};e.id=226,e.ids=[226],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},7147:e=>{"use strict";e.exports=require("fs")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6300:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=s(482),a=s(9108),n=s(2563),i=s.n(n),o=s(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["transactions",{children:["[transactionID]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2340)),"/Users/manojos/WebstormProjects/cexchange/src/app/transactions/[transactionID]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,2607)),"/Users/manojos/WebstormProjects/cexchange/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/manojos/WebstormProjects/cexchange/src/app/transactions/[transactionID]/page.tsx"],u="/transactions/[transactionID]/page",m={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/transactions/[transactionID]/page",pathname:"/transactions/[transactionID]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9527:(e,t,s)=>{Promise.resolve().then(s.bind(s,1502))},1532:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s(9224).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},1502:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(5344),a=s(3729),n=s(8428),i=s(9769),o=s(5094),l=s(1532),c=s(6887);let d=({params:e})=>{let t=(0,n.useRouter)(),{toast:s}=(0,i.pm)(),[d,u]=(0,a.useState)(null),[m,x]=(0,a.useState)(!1),p=`${c.y}api/transactions/${e.transactionID}`,h=async()=>{let e=await fetch(p,{method:"GET",cache:"no-cache",credentials:"include"});if(200!==e.status&&401!==e.status&&x(!0),401===e.status){s({title:"Uh Oh!",description:"Looks like you are not logged in, please to check offers"}),t.push(`/login?redirect=${window.location.pathname}`);return}console.log(e.status),console.log(e);let r=await e.json();console.log(r),u(r.transaction)};return(0,a.useEffect)(()=>{h(),console.log(d)},[]),r.jsx("div",{className:"flex flex-row justify-center",children:(0,r.jsxs)("div",{className:"w-full max-w-md",children:[r.jsx("div",{className:"text-3xl font-semibold mb-4",children:"Aaaaand.... Deal is done!"}),r.jsx("div",{className:"mb-4",children:"Please use the below details to get in touch with the other party and fulfill the boilerplate."}),(0,r.jsxs)("div",{className:"bg-gray-100 p-4 rounded-md shadow-md flex items-center",children:[r.jsx("img",{src:`${c.y}${d?.image_path}`,className:"w-32 h-32 object-cover rounded-lg mr-4",alt:"thumbnail"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"text-lg font-semibold mb-2",children:d?.listing_title}),(0,r.jsxs)("div",{className:"text-gray-600",children:["Amount: ₹",d?.offer_amount]})]})]}),(0,r.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-x-8",children:[(0,r.jsxs)("div",{children:[r.jsx("div",{className:"text-lg font-semibold mt-4",children:"Seller"}),r.jsx("div",{className:"text-gray-600 mt-1",children:d?.seller_name}),r.jsx("div",{className:"text-gray-600",children:d?.seller_email}),r.jsx("div",{className:"text-gray-600",children:d?.seller_phone})]}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"text-lg font-semibold mt-4",children:"Buyer"}),r.jsx("div",{className:"text-gray-600 mt-1",children:d?.buyer_name}),r.jsx("div",{className:"text-gray-600",children:d?.buyer_email}),r.jsx("div",{className:"text-gray-600",children:d?.buyer_phone})]})]}),(0,r.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-x-8",children:[(0,r.jsxs)(o.z,{onClick:e=>{t.push("/mylistings")},children:[r.jsx(l.Z,{})," My Listings"]}),(0,r.jsxs)(o.z,{onClick:e=>{t.push("/myoffers")},children:[" ",r.jsx(l.Z,{})," My Offers "]})]})]})})}},6887:(e,t,s)=>{"use strict";s.d(t,{y:()=>r});let r="https://manojshivagange.tech:3000/"},2340:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>i});let r=(0,s(6843).createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/app/transactions/[transactionID]/page.tsx`),{__esModule:a,$$typeof:n}=r,i=r.default},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,313,337,621],()=>s(6300));module.exports=r})();