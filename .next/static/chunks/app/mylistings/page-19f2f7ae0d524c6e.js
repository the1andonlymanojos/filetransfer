(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[242],{6647:function(){},7292:function(e,t,s){Promise.resolve().then(s.bind(s,8786))},8786:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var i=s(7437),n=s(3237);s(6348);var r=s(2265),a=s(7147),o=s(7907),l=s(7805),c=e=>{let{title:t,thumbnail:s,highest_bid:r,listing_id:a,isOpen:c}=e,d=(0,o.useRouter)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"flex items-center bg-gray-100 rounded-lg shadow-lg p-4 mb-4",onClick:e=>{d.push("/mylistings/offers/".concat(a))},children:[(0,i.jsx)("img",{src:"".concat(n.y).concat(s),className:"w-20 h-20 object-cover rounded-lg mr-4",alt:"thumbnail"}),(0,i.jsx)("div",{className:"flex flex-col justify-between flex-1",children:(0,i.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,i.jsx)("h3",{className:"text-lg font-semibold m-1 mr-4",children:t}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:"text-gray-600",children:["Highest Bid",(0,i.jsx)("br",{})," ",r?"₹"+r:"No bids yet"]}),(0,i.jsx)("p",{className:"text-gray-600 text-sm"})]})]})}),(0,i.jsx)("div",{className:"flex flex-col items-center",children:(0,i.jsx)(l.Z,{width:50})})]})})},d=s(575),u=()=>{let e="".concat(n.y,"api/account/listings"),[t,s]=(0,r.useState)([]),[l,u]=(0,r.useState)([]),[f,h]=(0,r.useState)([]),{toast:m}=(0,a.pm)(),g=(0,o.useRouter)(),x=async()=>{let t=await fetch(e,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});console.log(t.status);let i=await t.json();if(console.log(i),401===t.status){m({title:"Uh Oh!",description:"You are not logged in",duration:1e4}),g.push("/login?redirect=".concat(window.location.pathname));return}200===t.status&&s(i.listings)};return(0,r.useEffect)(()=>{x()},[]),(0,r.useEffect)(()=>{t&&(u(t.filter(e=>"available"===e.availability).sort((e,t)=>t.id-e.id)),h(t.filter(e=>"available"!==e.availability).sort((e,t)=>t.id-e.id)))},[t]),(0,i.jsx)("div",{className:"flex-row flex justify-center",children:(0,i.jsx)("div",{className:"max-w-sm",children:(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsxs)("div",{className:"flex fex-row justify-between",children:[(0,i.jsx)("h1",{className:"text-2xl p-2",children:"My Listings"}),(0,i.jsx)(d.z,{variant:"default",className:"m-2",onClick:e=>{window.location.href="/listing/new"},children:"New Listing"})]}),(0,i.jsx)("div",{className:"text-xl text-gray-600 m-2",children:"Open Listings:"}),(0,i.jsx)("div",{className:"max-h-[50vh] overflow-y-scroll bg-green-100 p-1 rounded-xl",children:l.map((e,t)=>(0,i.jsx)(c,{isOpen:!0,title:e.title,thumbnail:e.image_path,highest_bid:e.highest_bid,listing_id:e.id},t))}),(0,i.jsx)("div",{className:"text-xl text-gray-600 m-2",children:"Closed Listings:"}),(0,i.jsx)("div",{className:"max-h-[50vh] overflow-y-scroll bg-gray-300 p-1 rounded-xl",children:f.map((e,t)=>(0,i.jsx)(c,{isOpen:!1,title:e.title,thumbnail:e.image_path,highest_bid:e.highest_bid,listing_id:e.id},t))})]})})})}},575:function(e,t,s){"use strict";s.d(t,{z:function(){return c}});var i=s(7437),n=s(2265),r=s(9143),a=s(7742),o=s(2169);let l=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:s,variant:n,size:a,asChild:c=!1,...d}=e,u=c?r.g7:"button";return(0,i.jsx)(u,{className:(0,o.cn)(l({variant:n,size:a,className:s})),ref:t,...d})});c.displayName="Button"},7147:function(e,t,s){"use strict";s.d(t,{pm:function(){return f}});var i=s(2265);let n=0,r=new Map,a=e=>{if(r.has(e))return;let t=setTimeout(()=>{r.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e4);r.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?a(s):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],c={toasts:[]};function d(e){c=o(c,e),l.forEach(e=>{e(c)})}function u(e){let{...t}=e,s=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),i=()=>d({type:"DISMISS_TOAST",toastId:s});return d({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||i()}}}),{id:s,dismiss:i,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function f(){let[e,t]=i.useState(c);return i.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},3237:function(e,t,s){"use strict";s.d(t,{y:function(){return i}});let i="https://manojshivagange.tech:3000/"},2169:function(e,t,s){"use strict";s.d(t,{cn:function(){return r}});var i=s(3167),n=s(1367);function r(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,n.m6)((0,i.W)(t))}}},function(e){e.O(0,[218,614,392,971,69,744],function(){return e(e.s=7292)}),_N_E=e.O()}]);