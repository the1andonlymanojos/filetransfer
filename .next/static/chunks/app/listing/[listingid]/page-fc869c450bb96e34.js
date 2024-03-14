(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{9452:function(e,t,s){Promise.resolve().then(s.bind(s,3938)),Promise.resolve().then(s.bind(s,6467)),Promise.resolve().then(s.bind(s,5372)),Promise.resolve().then(s.bind(s,8861)),Promise.resolve().then(s.bind(s,1150))},94:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,s(7461).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},3938:function(e,t,s){"use strict";s.r(t);var l=s(7437),a=s(8861),i=s(1150),n=s(2265);t.default=e=>{let{listingId:t,suggestedMinimumBid:s,highestBid:c}=e,[o,r]=(0,n.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"bg-white rounded-lg p-4 mb-4 w-full",children:[(0,l.jsx)("p",{className:"text-lg font-medium mb-2",children:"Your Offer"}),(0,l.jsx)(a.default,{setUpdated:r,updated:o,listingId:t})]}),(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)(i.default,{setUpdateFlag:r,productId:t,curr:c||s,delta:(c||s)/20,min:10,max:1e4})})]})}},6467:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var l=s(7437),a=s(2265);function i(e){let{images:t,className:s,height:i}=e,[n,c]=(0,a.useState)(0),[o,r]=(0,a.useState)(0);return(0,l.jsxs)("div",{className:"".concat(s),children:[(0,l.jsx)("div",{className:"mb-2 bg-white w-full max-h-[500px] aspect-square max-w-full overflow-hidden",children:(0,l.jsx)("img",{className:"w-full h-full object-contain",src:t[n]})}),(0,l.jsx)("div",{className:(i||" h-16 ")+"flex flex-row w-full overflow-x-scroll justify-start gap-1 items-center",children:t.map((e,t)=>(0,l.jsx)("img",{src:e,className:"h-full",onMouseOver:()=>{c(t)},onMouseLeave:()=>{c(o)},onClick:()=>{c(t),r(t)}},t))})]})}},5372:function(e,t,s){"use strict";s.r(t);var l=s(7437),a=s(917),i=s(1931),n=s(575),c=s(3237),o=s(2265),r=s(7147),d=s(7290),u=s(7907);t.default=e=>{let{listingId:t}=e,s=(0,u.useRouter)(),[h,f]=(0,o.useState)(""),x="".concat(c.y,"api/questions/").concat(t);console.log(x);let[m,p]=(0,o.useState)([]),j=(0,r.pm)(),g=async e=>{let t=await fetch(x,{method:"GET",cache:"no-cache",headers:{"Content-Type":"application/json"}}),s=await t.json();200!==t.status&&(console.log("failed to fetch"),console.log(t.status),console.log(await t.json())),console.log(s),p(s.questions)};return(0,o.useEffect)(()=>{g(t)},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"relative bg-white rounded-lg p-4 mb-1 w-full",children:[(0,l.jsx)("div",{className:"text-xl font-thin absolute top-2 left-7",children:"QnA"}),(0,l.jsx)("div",{className:"bg-white rounded-lg p-2 mb-1 mt-4 w-full max-h-[300px] overflow-y-scroll",children:(0,l.jsx)(a.Z,{questions:m})}),(0,l.jsx)("div",{className:"text-xs font-thin absolute bottom-1 left-4",children:"scroll for more"})]}),(0,l.jsxs)("div",{className:"bg-white rounded-lg p-1 w-full",children:[(0,l.jsx)(i.Z,{label:"Ask a question",className:"m-1",sendOp:f,id:"dhfgfdghcfgchg"}),(0,l.jsx)(n.z,{className:"ml-2 bg-gray-800 text-white",onClick:e=>{if(""===h||""===h.trim()){j.toast({title:"Empty question",description:"Please enter a question"});return}h.length>100&&j.toast({title:"Question too long",description:"Please keep the question under 100 characters"}),(async()=>{let e="".concat(c.y,"api/questions/").concat(t),a=await fetch(e,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:h}),credentials:"include"});if(401===a.status){j.toast({title:"Not logged in",description:"Please log in to ask a question",action:(0,l.jsx)(d.gD,{asChild:!0,altText:"login",children:(0,l.jsx)(n.z,{className:"bg-gray-100 text-black",variant:"default",onClick:e=>{s.push("/login?redirect="+window.location.pathname)},children:"Login"})})});return}if(200!==a.status){j.toast({title:"Failed to ask question",description:"Please try again"});return}if(200===a.status){j.toast({title:"Question asked",description:"Your question has been asked"});let e=(await a.json()).questionId;p(s=>[...s,{id:e,listing_id:t,user_id:0,question:h,answer:null,answered:!1,created_at:"2021-10-20T00:00:00Z"}]),f("")}})()},variant:"outline",children:"Submit"})]})]})}},8861:function(e,t,s){"use strict";s.r(t);var l=s(7437),a=s(2265),i=s(3237);t.default=e=>{let{listingId:t,updated:s,setUpdated:n}=e,c="".concat(i.y,"api/offers/listing/").concat(t),[o,r]=(0,a.useState)({}),[d,u]=(0,a.useState)(!0),[h,f]=(0,a.useState)(!1),[x,m]=(0,a.useState)(""),[p,j]=(0,a.useState)(!0),[g,v]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=Date.parse(o.expires_at),t=Date.parse(o.created_at),s=Math.floor((e-Date.now())*100/(e-t));s<0&&(s=100),console.log(s=100-s),v(Math.max(5,s))},[o]);let y=async()=>{let e=await fetch(c,{method:"GET",cache:"no-cache",credentials:"include"});200!==e.status&&401!==e.status&&460!==e.status&&(f(!0),m("Failed to fetch offers")),401===e.status&&j(!1),460===e.status&&(f(!0),m("No offers yet"));let t=await e.json();console.log(t),t.offer&&(r(t.offer),console.log(o)),u(!1)};return(0,a.useEffect)(()=>{n&&(console.log("updated value"),y(),n(!1),console.log(o))},[s]),(0,a.useEffect)(()=>{y()},[]),(0,l.jsxs)("div",{children:[d&&(0,l.jsx)("div",{children:"Loading..."}),p&&h&&(0,l.jsx)("div",{children:x}),!p&&(0,l.jsx)("div",{children:"Log in to see offers"}),!d&&!h&&!o&&(0,l.jsx)("div",{children:"No offers yet"}),p&&!d&&!h&&o&&(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,l.jsx)("div",{className:"py-2 inline-block min-w-full sm:px-6 lg:px-8",children:(0,l.jsx)("div",{className:"overflow-hidden",children:(0,l.jsxs)("table",{className:"min-w-full",children:[(0,l.jsx)("thead",{className:"bg-white border-b",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",className:"text-sm font-medium text-gray-900 px-6 py-4 text-left",children:"Amount"}),(0,l.jsx)("th",{scope:"col",className:"text-sm font-medium text-gray-900 px-6 py-4 text-left",children:"Status"})]})}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{className:"bg-gray-100 border-b",children:[(0,l.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:o.amount}),(0,l.jsx)("td",{className:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",children:null===o.accepted?"Pending":1===o.accepted?"Accepted!":"Rejected"})]})})]})})})}),(0,l.jsxs)("div",{className:"bg-white rounded-lg p-4 mb-4 w-full",children:[(0,l.jsx)("p",{className:"text-lg font-medium mb-2",children:"Time Left"}),(0,l.jsx)("div",{className:"bg-gray-300 rounded-full h-4 w-full",children:(0,l.jsx)("div",{className:"bg-gray-500 rounded-full h-4",style:{width:g+"%"}})})]})]})]})}},1150:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var l=s(7437),a=s(3237),i=s(3929);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s(7461).Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);var c=s(94),o=s(575),r=s(2265),d=s(7147),u=s(7907),h=e=>{let{delta:t,curr:s,min:h,max:f,productId:x,setUpdateFlag:m}=e,[p,j]=(0,r.useState)(Math.round(s)),g=Math.round(h),v=Math.round(f),y=Math.round(t),w=(0,r.useRef)(null),b=(0,r.useRef)(null),N=(0,r.useRef)(null),k=(0,r.useRef)(null),{toast:S}=(0,d.pm)(),C=(0,u.useRouter)(),P=async()=>{console.log(N.current.value),console.log(p);let e="".concat(a.y,"api/offers/create/").concat(x),t={price:p,ttl:N.current.value},s=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"});if(console.log(s.status),console.log(await s.json()),401===s.status){S({title:"Uh Oh!",description:"Looks like you are not logged in, please login to place a bid"}),C.push("/login?redirect=".concat(window.location.pathname));return}if(469===s.status){S({title:"Nice Try ;)",description:"You cant bid on your own listing"}),k.current.click();return}m&&(m(!0),console.log("set update flag")),S({title:"Bid Placed!",description:"You can view your offers in Account > My Offers section"}),k.current.click()},q=()=>{if(p-y<g){w.current.disabled=!0;return}b.current.disabled=!1,j(p-y)},M=()=>{if(p+y>v){b.current.disabled=!0;return}w.current.disabled=!1,j(p+y)},[O,T]=(0,r.useState)(!1);return(0,l.jsx)("div",{children:(0,l.jsxs)(i.dy,{children:[(0,l.jsx)(i.Qz,{asChild:!0,children:(0,l.jsx)(o.z,{onClick:()=>T(!0),children:"Place Bid"})}),(0,l.jsx)(i.sc,{className:"flex  items-center justify-center",children:(0,l.jsxs)("div",{className:"max-w-sm ",children:[(0,l.jsxs)(i.OX,{children:[(0,l.jsx)(i.iI,{className:"text-xl",children:"Are you sure?"}),(0,l.jsx)(i.u6,{className:"text-basis",children:"Placing a bid means that you are interested in buying the product/service at the price if accepted. "})]}),(0,l.jsxs)("div",{className:"flex items-center justify-center mt-8 mb-8 space-x-2",children:[(0,l.jsx)(o.z,{ref:w,className:"h-8 rounded-2xl p-0 w-8",onClick:e=>{q()},children:(0,l.jsx)(n,{color:"white",className:"h-6 w-6"})}),(0,l.jsxs)("div",{className:"text-3xl",children:["₹",p]}),(0,l.jsx)(o.z,{ref:b,className:"h-8 rounded-2xl p-0 w-8",onClick:e=>{M()},children:(0,l.jsx)(c.Z,{color:"white",className:"h-6 w-6"})})]}),(0,l.jsxs)("div",{className:"flex  items-center justify-center space-x-2",children:[(0,l.jsx)("div",{children:"Bid Validity:"}),(0,l.jsxs)("select",{ref:N,children:[" ",(0,l.jsx)("option",{value:1,children:"1 Day"}),(0,l.jsx)("option",{value:2,children:" 2 Days "})," ",(0,l.jsx)("option",{value:3,children:"3 Days"})," "]})," "]}),(0,l.jsxs)(i.ze,{children:[(0,l.jsx)("div",{className:"flex justify-center"}),(0,l.jsx)(o.z,{onClick:P,children:"Submit"}),(0,l.jsx)(i.uh,{asChild:!0,children:(0,l.jsx)(o.z,{ref:k,variant:"outline",children:"Cancel"})})]})]})})]})})}}},function(e){e.O(0,[614,791,484,859,971,69,744],function(){return e(e.s=9452)}),_N_E=e.O()}]);