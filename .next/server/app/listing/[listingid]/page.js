(()=>{var e={};e.id=848,e.ids=[848],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},7147:e=>{"use strict";e.exports=require("fs")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5746:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var l=t(482),i=t(9108),a=t(2563),n=t.n(a),r=t(8300),o={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>r[e]);t.d(s,o);let c=["",{children:["listing",{children:["[listingid]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,9078)),"/Users/manojos/WebstormProjects/cexchange/src/app/listing/[listingid]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,2607)),"/Users/manojos/WebstormProjects/cexchange/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/manojos/WebstormProjects/cexchange/src/app/listing/[listingid]/page.tsx"],u="/listing/[listingid]/page",m={require:t,loadChunk:()=>Promise.resolve()},x=new l.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/listing/[listingid]/page",pathname:"/listing/[listingid]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9035:(e,s,t)=>{Promise.resolve().then(t.bind(t,4023)),Promise.resolve().then(t.bind(t,2613)),Promise.resolve().then(t.bind(t,3040)),Promise.resolve().then(t.bind(t,6228)),Promise.resolve().then(t.bind(t,9042))},1838:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,t(9224).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},4023:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var l=t(5344),i=t(6228),a=t(9042),n=t(3729);let r=({listingId:e,suggestedMinimumBid:s,highestBid:t})=>{let[r,o]=(0,n.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"bg-white rounded-lg p-4 mb-4 w-full",children:[l.jsx("p",{className:"text-lg font-medium mb-2",children:"Your Offer"}),l.jsx(i.default,{setUpdated:o,updated:r,listingId:e})]}),l.jsx("div",{className:"flex justify-center",children:l.jsx(a.default,{setUpdateFlag:o,productId:e,curr:t||s,delta:(t||s)/20,min:10,max:1e4})})]})}},2613:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var l=t(5344),i=t(3729);function a({images:e,className:s,height:t}){let[a,n]=(0,i.useState)(0),[r,o]=(0,i.useState)(0);return(0,l.jsxs)("div",{className:`${s}`,children:[l.jsx("div",{className:"mb-2 bg-white w-full max-h-[500px] aspect-square max-w-full overflow-hidden",children:l.jsx("img",{className:"w-full h-full object-contain",src:e[a]})}),l.jsx("div",{className:(t||" h-16 ")+"flex flex-row w-full overflow-x-scroll justify-start gap-1 items-center",children:e.map((e,s)=>l.jsx("img",{src:e,className:"h-full",onMouseOver:()=>{n(s)},onMouseLeave:()=>{n(r)},onClick:()=>{n(s),o(s)}},s))})]})}},3040:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var l=t(5344),i=t(6335),a=t(6637),n=t(5094),r=t(6887),o=t(3729),c=t(9769),d=t(2032),u=t(8428);let m=({listingId:e})=>{let s=(0,u.useRouter)(),[t,m]=(0,o.useState)(""),x=`${r.y}api/questions/${e}`;console.log(x);let[h,f]=(0,o.useState)([]),p=(0,c.pm)(),g=async e=>{let s=await fetch(x,{method:"GET",cache:"no-cache",headers:{"Content-Type":"application/json"}}),t=await s.json();200!==s.status&&(console.log("failed to fetch"),console.log(s.status),console.log(await s.json())),console.log(t),f(t.questions)};return(0,o.useEffect)(()=>{g(e)},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"relative bg-white rounded-lg p-4 mb-1 w-full",children:[l.jsx("div",{className:"text-xl font-thin absolute top-2 left-7",children:"QnA"}),l.jsx("div",{className:"bg-white rounded-lg p-2 mb-1 mt-4 w-full max-h-[300px] overflow-y-scroll",children:l.jsx(i.Z,{questions:h})}),l.jsx("div",{className:"text-xs font-thin absolute bottom-1 left-4",children:"scroll for more"})]}),(0,l.jsxs)("div",{className:"bg-white rounded-lg p-1 w-full",children:[l.jsx(a.Z,{label:"Ask a question",className:"m-1",sendOp:m,id:"dhfgfdghcfgchg"}),l.jsx(n.z,{className:"ml-2 bg-gray-800 text-white",onClick:i=>{if(""===t||""===t.trim()){p.toast({title:"Empty question",description:"Please enter a question"});return}t.length>100&&p.toast({title:"Question too long",description:"Please keep the question under 100 characters"}),(async()=>{let i=`${r.y}api/questions/${e}`,a=await fetch(i,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t}),credentials:"include"});if(401===a.status){p.toast({title:"Not logged in",description:"Please log in to ask a question",action:l.jsx(d.gD,{asChild:!0,altText:"login",children:l.jsx(n.z,{className:"bg-gray-100 text-black",variant:"default",onClick:e=>{s.push("/login?redirect="+window.location.pathname)},children:"Login"})})});return}if(200!==a.status){p.toast({title:"Failed to ask question",description:"Please try again"});return}if(200===a.status){p.toast({title:"Question asked",description:"Your question has been asked"});let s=(await a.json()).questionId;f(l=>[{id:s,listing_id:e,user_id:0,question:t,answer:null,answered:0,created_at:"2021-10-20T00:00:00Z"},...l]),m("")}})()},variant:"outline",children:"Submit"})]})]})}},6228:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var l=t(5344),i=t(3729),a=t(6887);let n=({listingId:e,updated:s,setUpdated:t})=>{let n=`${a.y}api/offers/listing/${e}`,[r,o]=(0,i.useState)({}),[c,d]=(0,i.useState)(!0),[u,m]=(0,i.useState)(!1),[x,h]=(0,i.useState)(""),[f,p]=(0,i.useState)(!0),[g,j]=(0,i.useState)(0);(0,i.useEffect)(()=>{let e=Date.parse(r.expires_at),s=Date.parse(r.created_at),t=Math.floor((e-Date.now())*100/(e-s));t<0&&(t=100),console.log(t=100-t),j(Math.max(5,t))},[r]);let y=async()=>{let e=await fetch(n,{method:"GET",cache:"no-cache",credentials:"include"});200!==e.status&&401!==e.status&&460!==e.status&&(m(!0),h("Failed to fetch offers")),401===e.status&&p(!1),460===e.status&&(m(!0),h("No offers yet"));let s=await e.json();console.log(s),s.offer&&(o(s.offer),console.log(r)),d(!1)};return(0,i.useEffect)(()=>{t&&(console.log("updated value"),y(),t(!1),console.log(r))},[s]),(0,i.useEffect)(()=>{y()},[]),(0,l.jsxs)("div",{children:[c&&l.jsx("div",{children:"Loading..."}),f&&u&&l.jsx("div",{children:x}),!f&&l.jsx("div",{children:"Log in to see offers"}),!c&&!u&&!r&&l.jsx("div",{children:"No offers yet"}),f&&!c&&!u&&r&&(0,l.jsxs)("div",{className:"flex flex-col",children:[l.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:l.jsx("div",{className:"py-2 inline-block min-w-full sm:px-6 lg:px-8",children:l.jsx("div",{className:"overflow-hidden",children:(0,l.jsxs)("table",{className:"min-w-full",children:[l.jsx("thead",{className:"bg-white border-b",children:(0,l.jsxs)("tr",{children:[l.jsx("th",{scope:"col",className:"text-sm font-medium text-gray-900 px-6 py-4 text-left",children:"Amount"}),l.jsx("th",{scope:"col",className:"text-sm font-medium text-gray-900 px-6 py-4 text-left",children:"Status"})]})}),l.jsx("tbody",{children:(0,l.jsxs)("tr",{className:"bg-gray-100 border-b",children:[l.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:r.amount}),l.jsx("td",{className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",children:null===r.accepted?"Pending":1===r.accepted?"Accepted!":"Rejected"})]})})]})})})}),(0,l.jsxs)("div",{className:"bg-white rounded-lg p-4 mb-4 w-full",children:[l.jsx("p",{className:"text-lg font-medium mb-2",children:"Time Left"}),l.jsx("div",{className:"bg-gray-300 rounded-full h-4 w-full",children:l.jsx("div",{className:"bg-gray-500 rounded-full h-4",style:{width:g+"%"}})})]})]})]})}},9042:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var l=t(5344),i=t(6887),a=t(677);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,t(9224).Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);var r=t(1838),o=t(5094),c=t(3729),d=t(9769),u=t(8428);let m=({delta:e,curr:s,min:t,max:m,productId:x,setUpdateFlag:h})=>{let[f,p]=(0,c.useState)(Math.round(s)),g=Math.round(t),j=Math.round(m),y=Math.round(e),v=(0,c.useRef)(null),b=(0,c.useRef)(null),w=(0,c.useRef)(null),N=(0,c.useRef)(null),{toast:P}=(0,d.pm)(),q=(0,u.useRouter)(),k=async()=>{console.log(w.current.value),console.log(f);let e=`${i.y}api/offers/create/${x}`,s={price:f,ttl:w.current.value},t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s),credentials:"include"});if(console.log(t.status),console.log(await t.json()),401===t.status){P({title:"Uh Oh!",description:"Looks like you are not logged in, please login to place a bid"}),q.push(`/login?redirect=${window.location.pathname}`);return}if(469===t.status){P({title:"Nice Try ;)",description:"You cant bid on your own listing"}),N.current.click();return}h&&(h(!0),console.log("set update flag")),P({title:"Bid Placed!",description:"You can view your offers in Account > My Offers section"}),N.current.click()},S=()=>{if(f-y<g){v.current.disabled=!0;return}b.current.disabled=!1,p(f-y)},_=()=>{if(f+y>j){b.current.disabled=!0;return}v.current.disabled=!1,p(f+y)},[C,M]=(0,c.useState)(!1);return l.jsx("div",{children:(0,l.jsxs)(a.dy,{children:[l.jsx(a.Qz,{asChild:!0,children:l.jsx(o.z,{onClick:()=>M(!0),children:"Place Bid"})}),l.jsx(a.sc,{className:"flex  items-center justify-center",children:(0,l.jsxs)("div",{className:"max-w-sm ",children:[(0,l.jsxs)(a.OX,{children:[l.jsx(a.iI,{className:"text-xl",children:"Are you sure?"}),l.jsx(a.u6,{className:"text-basis",children:"Placing a bid means that you are interested in buying the product/service at the price if accepted. "})]}),(0,l.jsxs)("div",{className:"flex items-center justify-center mt-8 mb-8 space-x-2",children:[l.jsx(o.z,{ref:v,className:"h-8 rounded-2xl p-0 w-8",onClick:e=>{S()},children:l.jsx(n,{color:"white",className:"h-6 w-6"})}),(0,l.jsxs)("div",{className:"text-3xl",children:["₹",f]}),l.jsx(o.z,{ref:b,className:"h-8 rounded-2xl p-0 w-8",onClick:e=>{_()},children:l.jsx(r.Z,{color:"white",className:"h-6 w-6"})})]}),(0,l.jsxs)("div",{className:"flex  items-center justify-center space-x-2",children:[l.jsx("div",{children:"Bid Validity:"}),(0,l.jsxs)("select",{ref:w,children:[" ",l.jsx("option",{value:1,children:"1 Day"}),l.jsx("option",{value:2,children:" 2 Days "})," ",l.jsx("option",{value:3,children:"3 Days"})," "]})," "]}),(0,l.jsxs)(a.ze,{children:[l.jsx("div",{className:"flex justify-center"}),l.jsx(o.z,{onClick:k,children:"Submit"}),l.jsx(a.uh,{asChild:!0,children:l.jsx(o.z,{ref:N,variant:"outline",children:"Cancel"})})]})]})})]})})}},6335:(e,s,t)=>{"use strict";t.d(s,{Z:()=>o});var l=t(5344),i=t(6637),a=t(6124),n=t(5094),r=t(6887);let o=({questions:e,withansbox:s,setQ:t})=>l.jsx("div",{children:l.jsx(a.UQ,{type:s?"single":"multiple",defaultChecked:!1,children:e.map((e,o)=>(0,l.jsxs)(a.Qd,{value:"item "+o,children:[l.jsx(a.o4,{children:e.question}),l.jsx(a.vF,{children:e.answered?e.answer:s?l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:"p-1 m-1",children:[l.jsx(i.Z,{label:"Answer",type:"text",onChange:e=>{},id:"afsdfasd"+o}),l.jsx(n.z,{onClick:s=>{let l=document.getElementById("afsdfasd"+o).value;console.log(l);let i=`${r.y}api/questions/answer/${e.id}`;fetch(i,{method:"POST",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:l})}).then(s=>{200===s.status?(console.log("success"),e.answer=l,t(s=>s.filter(s=>s.id!==e.id))):console.log("failed")})},className:"bg-gray-100 text-black font-thin",children:"Submit Answer"})]})}):"Not answered yet"})]},o))})})},677:(e,s,t)=>{"use strict";t.d(s,{OX:()=>x,Qz:()=>o,dy:()=>r,iI:()=>f,sc:()=>m,u6:()=>p,uh:()=>d,ze:()=>h});var l=t(5344),i=t(3729),a=t(4885),n=t(1453);let r=({shouldScaleBackground:e=!0,...s})=>l.jsx(a.d.Root,{shouldScaleBackground:e,...s});r.displayName="Drawer";let o=a.d.Trigger,c=a.d.Portal,d=a.d.Close,u=i.forwardRef(({className:e,...s},t)=>l.jsx(a.d.Overlay,{ref:t,className:(0,n.cn)("fixed inset-0 z-50 bg-black/80",e),...s}));u.displayName=a.d.Overlay.displayName;let m=i.forwardRef(({className:e,children:s,...t},i)=>(0,l.jsxs)(c,{children:[l.jsx(u,{}),(0,l.jsxs)(a.d.Content,{ref:i,className:(0,n.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",e),...t,children:[l.jsx("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),s]})]}));m.displayName="DrawerContent";let x=({className:e,...s})=>l.jsx("div",{className:(0,n.cn)("grid gap-1.5 p-4 text-center sm:text-left",e),...s});x.displayName="DrawerHeader";let h=({className:e,...s})=>l.jsx("div",{className:(0,n.cn)("mt-auto flex flex-col gap-2 p-4",e),...s});h.displayName="DrawerFooter";let f=i.forwardRef(({className:e,...s},t)=>l.jsx(a.d.Title,{ref:t,className:(0,n.cn)("text-lg font-semibold leading-none tracking-tight",e),...s}));f.displayName=a.d.Title.displayName;let p=i.forwardRef(({className:e,...s},t)=>l.jsx(a.d.Description,{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",e),...s}));p.displayName=a.d.Description.displayName},6887:(e,s,t)=>{"use strict";t.d(s,{y:()=>l});let l="https://manojshivagange.tech:3000/"},9078:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>q});var l=t(5036),i=t(6843);let a=(0,i.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/ImageCar.tsx`),{__esModule:n,$$typeof:r}=a,o=a.default,c=(0,i.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/PlaceBidThingy.tsx`),{__esModule:d,$$typeof:u}=c,m=c.default,x=(0,i.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/OfferTables.tsx`),{__esModule:h,$$typeof:f}=x,p=x.default,g=(0,i.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/HoistedPair.tsx`),{__esModule:j,$$typeof:y}=g,v=g.default,b=(0,i.createProxy)(String.raw`/Users/manojos/WebstormProjects/cexchange/src/components/InteractiveQbox.tsx`),{__esModule:w,$$typeof:N}=b,P=b.default,q=async({params:e})=>{let s=e.listingid;console.log(s);let t=`https://manojshivagange.tech:3000/api/listings/${s}`;console.log(t);let i=await fetch(t,{method:"GET",cache:"no-cache"});if(200!==i.status)return console.log("failed to fetch"),console.log(i.status),console.log(await i.json()),l.jsx("div",{children:"Failed to fetch"});let a=await i.json();console.log(a);let n=a.images,r=a.title,c=a.location,d=a.suggested_minimum_bid,u=a.description,x=a.highest_bid;return(0,l.jsxs)(l.Fragment,{children:[l.jsx("div",{className:"max-sm:yeet",children:(0,l.jsxs)("div",{className:"flex flex-row justify-evenly items-start bg-gray-100 rounded-lg p-6 shadow-md",children:[l.jsx("div",{className:"flex flex-row justify-center mb-6",children:l.jsx(o,{images:n,className:"m-5 w-[30vw]"})}),l.jsx("div",{className:"flex mt-5 flex-col items-baseline h-full w-[30vw]",children:(0,l.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[(0,l.jsxs)("div",{children:[l.jsx("h1",{className:"text-3xl font-bold mb-2",children:r}),l.jsx("p",{className:"text-lg font-medium mb-10",children:c})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:"text-lg font-medium mb-4",children:["Description",l.jsx("br",{}),u]}),l.jsx("p",{className:"text-lg font-medium mb-6",children:x?`Highest bid: ${x}`:`Suggested Minimum Bid: ${d}`})]}),l.jsx(m,{productId:s,curr:x||d,delta:(x||d)/20,min:10,max:1e4})]})}),(0,l.jsxs)("div",{className:"flex w-[25vw] max-w-96 min-w-52 flex-col items-center w-full",children:[(0,l.jsxs)("div",{className:"bg-white rounded-lg p-4 mb-4 w-full",children:[l.jsx("p",{className:"text-lg font-medium mb-2",children:"Your Offer"}),s?l.jsx(p,{listingId:s}):l.jsx("div",{children:"Invalid ID"})]}),l.jsx(P,{listingId:s})]})]})}),(0,l.jsxs)("div",{className:"sm:yeet",children:[l.jsx("h1",{className:"text-3xl font-bold m-5 mb-2",children:r}),l.jsx("p",{className:"text-lg font-medium mt-2 ml-5 mr-2 mb-6",children:c}),l.jsx(o,{images:n,className:"p-5 w-full"}),(0,l.jsxs)("p",{className:"text-lg font-medium mt-5 ml-5 mr-2 mb-4",children:["Description",l.jsx("br",{}),u]}),(0,l.jsxs)("p",{className:"text-lg font-medium mt-5 ml-5 mr-2 mb-6",children:["Suggested Minimum Bid: ",d," "]}),l.jsx("div",{children:l.jsx(v,{listingId:s,suggestedMinimumBid:d,highestBid:x})}),l.jsx("div",{className:"bg-white rounded-lg p-4 mb-4 w-full",children:l.jsx(P,{listingId:s})})]})]})}},3881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var l=t(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,l.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),l=s.X(0,[638,313,337,885,302],()=>t(5746));module.exports=l})();