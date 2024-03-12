(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{3817:function(e,t,s){Promise.resolve().then(s.bind(s,2079))},7907:function(e,t,s){"use strict";var n=s(5313);s.o(n,"useRouter")&&s.d(t,{useRouter:function(){return n.useRouter}})},2079:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var n=s(7437),r=s(3237),o=s(7147),a=s(1931),i=s(2265),c=s(7907);/*! js-cookie v3.0.5 | MIT */function l(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)e[n]=s[n]}return e}var u=function e(t,s){function n(e,n,r){if("undefined"!=typeof document){"number"==typeof(r=l({},s,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var a in r)r[a]&&(o+="; "+a,!0!==r[a]&&(o+="="+r[a].split(";")[0]));return document.cookie=e+"="+t.write(n,e)+o}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var s=document.cookie?document.cookie.split("; "):[],n={},r=0;r<s.length;r++){var o=s[r].split("="),a=o.slice(1).join("=");try{var i=decodeURIComponent(o[0]);if(n[i]=t.read(a,i),e===i)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){n(e,"",l({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,l({},this.attributes,t))},withConverter:function(t){return e(l({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),d=e=>{let{params:t,searchParams:s}=e,[l,d]=(0,i.useState)(""),[p,f]=(0,i.useState)(""),[m,h]=(0,i.useState)(""),[g,x]=(0,i.useState)(""),[b,v]=(0,i.useState)(""),[y,S]=(0,i.useState)(!0),{toast:w}=(0,o.pm)(),j=(0,c.useRouter)();console.log(s);let N=s.redirect,T="".concat(r.y,"api/account/login"),O="".concat(r.y,"api/account/register"),A=async()=>{if(y)try{let e=await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:p})});if(200===e.status){w({title:"Login Success!",description:"You are now logged in"}),console.log("here"),console.log(e),console.log(e.headers);let t=await e.json();console.log(t);let s=t.token;s&&(console.log(s),u.set("jwtToken",s,{path:"/",expires:7,sameSite:"relaxed",httpOnly:!1}),console.log("my cookie "+u.get("jwtToken"))),console.log("redir url "+N),N&&"string"==typeof N?(console.log("redirecting to "+N),j.push(N),console.log("redirected to "+N)):j.push("/")}else switch(e.status){case 469:w({title:"Login Failed!",description:"Email not found, try registering",variant:"destructive"}),S(!1);break;case 470:w({title:"Login Failed!",description:"Password incorrect"})}}catch(e){w({title:"Login Failed!",description:e.toString()})}else{if(""===l||""===p||""===m||""===g||""===b){w({title:"Empty Fields!",description:"All fields are required"});return}10!=g.length&&w({title:"Phone number invalid",description:"bad phone number"});try{switch((await fetch(O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:p,username:m,phoneNumber:g})})).status){case 201:w({title:"Account Created!",description:"Log in with your new account"}),j.push("/");break;case 409:w({title:"account with this email exists!",description:"Reset your password if you dont remember"})}}catch(e){}}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" relative h-[95vh] w-full bg-gray-800",children:[(0,n.jsx)("div",{className:"bg-gray-800 h-[65px] max-md:w-[100vw] lg:left-[36vw] max-md:left-0 w-96 absolute -top-[60px] left-[34vw]"}),(0,n.jsx)("div",{className:"flex items-center bg-gray-800 h-[90vh] justify-center",children:(0,n.jsxs)("div",{className:"bg-gray-100 p-14 rounded-xl px-16",children:[(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsx)("h1",{className:"text-3xl mb-10  text-black font-light",children:y?"Login":"Register"})}),(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsxs)("form",{action:e=>{A()},className:"flex flex-col w-full",children:[(0,n.jsx)(a.Z,{id:"909j8",label:"Email",type:"email",sendOp:d,className:"mb-2"}),y?null:(0,n.jsx)(a.Z,{id:"sfsxcs",label:"Username",type:"text",sendOp:h,className:"mb-2"}),y?null:(0,n.jsx)(a.Z,{id:"asfxcccx",label:"Phone Number",type:"text",sendOp:x,className:"mb-2"}),(0,n.jsx)(a.Z,{id:"12fasf",label:"Password",type:"password",sendOp:f,className:"mb-2"}),y?null:(0,n.jsx)(a.Z,{id:"asfsafcxxcxv",label:"Confirm Password",sendOp:v,type:"password",className:"mb-2"}),(0,n.jsx)("button",{className:"bg-black text-white py-2 rounded-lg",children:y?"Login":"Register"}),y?(0,n.jsxs)("p",{className:"text-center mt-5",children:["Dont have an account? ",(0,n.jsx)("span",{className:"text-blue-500 cursor-pointer",onClick:()=>S(!1),children:"Sign Up"})]}):(0,n.jsxs)("p",{className:"text-center mt-5",children:["Already have an account? ",(0,n.jsx)("span",{className:"text-blue-500 cursor-pointer",onClick:()=>S(!0),children:"Login"})]})]})})]})})]})})}},1931:function(e,t,s){"use strict";var n=s(7437),r=s(2265);t.Z=e=>{let{label:t,placeholder:s,value:o,className:a,sendOp:i,id:c,submit:l,type:u="text",onChange:d}=e,[p,f]=(0,r.useState)(!1),[m,h]=(0,r.useState)(!0),g=(0,r.useRef)(null);return(0,n.jsxs)("div",{className:"relative "+a,children:[(0,n.jsx)("input",{ref:g,id:c,onFocus:()=>{f(!0)},onBlur:()=>{f(!1)},placeholder:s,value:o,type:u,onChange:e=>{e.target.value?(h(!1),""===e.target.value.trim()&&(e.target.value="")):h(!0),i&&i(e.target.value)},className:"peer w-full px-3 py-2 text-black border border-gray-300 rounded-md outline-none transition-all duration-300 ".concat("pt-2")+" "+a}),(0,n.jsx)("label",{htmlFor:c,className:"absolute left-3 transition-all duration-300 ".concat(p||!m?"-top-2 bg-white rounded-md px-1 text-xs text-gray-600":"top-2 text-gray-400"),children:t})]})}},7147:function(e,t,s){"use strict";s.d(t,{pm:function(){return p}});var n=s(2265);let r=0,o=new Map,a=e=>{if(o.has(e))return;let t=setTimeout(()=>{o.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e4);o.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?a(s):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},c=[],l={toasts:[]};function u(e){l=i(l,e),c.forEach(e=>{e(l)})}function d(e){let{...t}=e,s=(r=(r+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>u({type:"DISMISS_TOAST",toastId:s});return u({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||n()}}}),{id:s,dismiss:n,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function p(){let[e,t]=n.useState(l);return n.useEffect(()=>(c.push(t),()=>{let e=c.indexOf(t);e>-1&&c.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},3237:function(e,t,s){"use strict";s.d(t,{y:function(){return n}});let n="https://manojshivagange.tech:3000/"}},function(e){e.O(0,[971,69,744],function(){return e(e.s=3817)}),_N_E=e.O()}]);