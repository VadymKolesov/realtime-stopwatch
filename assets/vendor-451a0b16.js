/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=function(n,t){if(!n)throw an(t)},an=function(n){return new Error("Firebase Database ("+Ec.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},_f=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[e++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[e++],o=n[e++],a=n[e++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[e++],o=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},uo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(e[u],e[h],e[d],e[f])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(vc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):_f(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const c=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new mf;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tc=function(n){const t=vc(n);return uo.encodeByteArray(t,!0)},$i=function(n){return Tc(n).replace(/\./g,"")},yr=function(n){try{return uo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n){return Ic(void 0,n)}function Ic(n,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const e=t;return new Date(e.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return t}for(const e in t)!t.hasOwnProperty(e)||!yf(e)||(n[e]=Ic(n[e],t[e]));return n}function yf(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=()=>Ef().__FIREBASE_DEFAULTS__,Tf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},If=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&yr(n[1]);return t&&JSON.parse(t)},ho=()=>{try{return vf()||Tf()||If()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wf=n=>{var t,e;return(e=(t=ho())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Af=n=>{const t=wf(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},wc=()=>{var n;return(n=ho())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[$i(JSON.stringify(e)),$i(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ac(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bn())}function Sf(){var n;const t=(n=ho())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cc(){return Ec.NODE_ADMIN===!0}function Pf(){return!Sf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sc(){try{return typeof indexedDB=="object"}catch{return!1}}function bf(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="FirebaseError";class ln extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Nf,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rc.prototype.create)}}class Rc{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Df(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ln(s,a,i)}}function Df(n,t){return n.replace(kf,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const kf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n){return JSON.parse(n)}function ot(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=function(n){let t={},e={},i={},s="";try{const r=n.split(".");t=qn(yr(r[0])||""),e=qn(yr(r[1])||""),s=r[2],i=e.d||{},delete e.d}catch{}return{header:t,claims:e,data:i,signature:s}},Vf=function(n){const t=Pc(n),e=t.claims;return!!e&&typeof e=="object"&&e.hasOwnProperty("iat")},xf=function(n){const t=Pc(n).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function Ge(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}function Oa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function zi(n,t,e){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=t.call(e,n[s],s,n));return i}function Er(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const r=n[s],o=t[s];if(Ma(r)&&Ma(o)){if(!Er(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function Ma(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const i=this.W_;if(typeof t=="string")for(let h=0;h<16;h++)i[h]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let h=0;h<16;h++)i[h]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,e){if(t==null)return;e===void 0&&(e=t.length);const i=e-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<e;){if(o===0)for(;s<=i;)this.compress_(t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[o]=t.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<e;)if(r[o]=t[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=e}digest(){const t=[];let e=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=e&255,e/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)t[i]=this.chain_[s]>>r&255,++i;return t}}function Lf(n,t){return`${n} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,y(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):s<65536?(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},_s=function(n){let t=0;for(let e=0;e<n.length;e++){const i=n.charCodeAt(e);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,e++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n){return n&&n._delegate?n._delegate:n}class Qe{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new fo;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qf(t))try{this.getOrInitializeService({instanceIdentifier:ue})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ue){return this.instances.has(t)}getOptions(t=ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Bf(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=ue){return this.component?this.component.multipleInstances?t:ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bf(n){return n===ue?void 0:n}function qf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Uf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const Wf={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},$f=D.INFO,zf={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Hf=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=zf[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class po{constructor(t){this.name=t,this._logLevel=$f,this._logHandler=Hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const Gf=(n,t)=>t.some(e=>n instanceof e);let La,Fa;function Kf(){return La||(La=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qf(){return Fa||(Fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bc=new WeakMap,vr=new WeakMap,Nc=new WeakMap,Qs=new WeakMap,_o=new WeakMap;function Yf(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Zt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&bc.set(e,n)}).catch(()=>{}),_o.set(t,n),t}function Xf(n){if(vr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});vr.set(n,t)}let Tr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return vr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Nc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Zt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jf(n){Tr=n(Tr)}function Zf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Ys(this),t,...e);return Nc.set(i,t.sort?t.sort():[t]),Zt(i)}:Qf().includes(n)?function(...t){return n.apply(Ys(this),t),Zt(bc.get(this))}:function(...t){return Zt(n.apply(Ys(this),t))}}function tp(n){return typeof n=="function"?Zf(n):(n instanceof IDBTransaction&&Xf(n),Gf(n,Kf())?new Proxy(n,Tr):n)}function Zt(n){if(n instanceof IDBRequest)return Yf(n);if(Qs.has(n))return Qs.get(n);const t=tp(n);return t!==n&&(Qs.set(n,t),_o.set(t,n)),t}const Ys=n=>_o.get(n);function ep(n,t,{blocked:e,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,t),a=Zt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const np=["get","getKey","getAll","getAllKeys","count"],ip=["put","add","delete","clear"],Xs=new Map;function Ua(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Xs.get(t))return Xs.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=ip.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||np.includes(e)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),s&&l.done]))[0]};return Xs.set(t,r),r}Jf(n=>({...n,get:(t,e,i)=>Ua(t,e)||n.get(t,e,i),has:(t,e)=>!!Ua(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(rp(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function rp(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ir="@firebase/app",Ba="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new po("@firebase/app"),op="@firebase/app-compat",ap="@firebase/analytics-compat",lp="@firebase/analytics",cp="@firebase/app-check-compat",up="@firebase/app-check",hp="@firebase/auth",dp="@firebase/auth-compat",fp="@firebase/database",pp="@firebase/database-compat",_p="@firebase/functions",mp="@firebase/functions-compat",gp="@firebase/installations",yp="@firebase/installations-compat",Ep="@firebase/messaging",vp="@firebase/messaging-compat",Tp="@firebase/performance",Ip="@firebase/performance-compat",wp="@firebase/remote-config",Ap="@firebase/remote-config-compat",Cp="@firebase/storage",Sp="@firebase/storage-compat",Rp="@firebase/firestore",Pp="@firebase/firestore-compat",bp="firebase",Np="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]",Dp={[Ir]:"fire-core",[op]:"fire-core-compat",[lp]:"fire-analytics",[ap]:"fire-analytics-compat",[up]:"fire-app-check",[cp]:"fire-app-check-compat",[hp]:"fire-auth",[dp]:"fire-auth-compat",[fp]:"fire-rtdb",[pp]:"fire-rtdb-compat",[_p]:"fire-fn",[mp]:"fire-fn-compat",[gp]:"fire-iid",[yp]:"fire-iid-compat",[Ep]:"fire-fcm",[vp]:"fire-fcm-compat",[Tp]:"fire-perf",[Ip]:"fire-perf-compat",[wp]:"fire-rc",[Ap]:"fire-rc-compat",[Cp]:"fire-gcs",[Sp]:"fire-gcs-compat",[Rp]:"fire-fst",[Pp]:"fire-fst-compat","fire-js":"fire-js",[bp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Map,Ar=new Map;function kp(n,t){try{n.container.addComponent(t)}catch(e){ve.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function jn(n){const t=n.name;if(Ar.has(t))return ve.debug(`There were multiple attempts to register component ${t}.`),!1;Ar.set(t,n);for(const e of Hi.values())kp(e,n);return!0}function Vp(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},te=new Rc("app","Firebase",xp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=Np;function Mp(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:wr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw te.create("bad-app-name",{appName:String(s)});if(e||(e=wc()),!e)throw te.create("no-options");const r=Hi.get(s);if(r){if(Er(e,r.options)&&Er(i,r.config))return r;throw te.create("duplicate-app",{appName:s})}const o=new jf(s);for(const l of Ar.values())o.addComponent(l);const a=new Op(e,i,o);return Hi.set(s,a),a}function Lp(n=wr){const t=Hi.get(n);if(!t&&n===wr&&wc())return Mp();if(!t)throw te.create("no-app",{appName:n});return t}function ee(n,t,e){var i;let s=(i=Dp[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ve.warn(a.join(" "));return}jn(new Qe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="firebase-heartbeat-database",Up=1,Wn="firebase-heartbeat-store";let Js=null;function kc(){return Js||(Js=ep(Fp,Up,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Wn)}catch(e){console.warn(e)}}}}).catch(n=>{throw te.create("idb-open",{originalErrorMessage:n.message})})),Js}async function Bp(n){try{const e=(await kc()).transaction(Wn),i=await e.objectStore(Wn).get(Vc(n));return await e.done,i}catch(t){if(t instanceof ln)ve.warn(t.message);else{const e=te.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ve.warn(e.message)}}}async function qa(n,t){try{const i=(await kc()).transaction(Wn,"readwrite");await i.objectStore(Wn).put(t,Vc(n)),await i.done}catch(e){if(e instanceof ln)ve.warn(e.message);else{const i=te.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ve.warn(i.message)}}}function Vc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=1024,jp=30*24*60*60*1e3;class Wp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new zp(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ja();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ja(),{heartbeatsToSend:i,unsentEntries:s}=$p(this._heartbeatsCache.heartbeats),r=$i(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ja(){return new Date().toISOString().substring(0,10)}function $p(n,t=qp){const e=[];let i=n.slice();for(const s of n){const r=e.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Wa(e)>t){r.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Wa(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class zp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sc()?bf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return qa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return qa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Wa(n){return $i(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n){jn(new Qe("platform-logger",t=>new sp(t),"PRIVATE")),jn(new Qe("heartbeat",t=>new Wp(t),"PRIVATE")),ee(Ir,Ba,n),ee(Ir,Ba,"esm2017"),ee("fire-js","")}Hp("");var Gp="firebase",Kp="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ee(Gp,Kp,"app");const $a="@firebase/database",za="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc="";function Qp(n){xc=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){e==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),ot(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return e==null?null:qn(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){e==null?delete this.cache_[t]:this.cache_[t]=e}get(t){return Xt(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const t=window[n];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Yp(t)}}catch{}return new Xp},fe=Oc("localStorage"),Cr=Oc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new po("@firebase/database"),Jp=function(){let n=1;return function(){return n++}}(),Mc=function(n){const t=Ff(n),e=new Mf;e.update(t);const i=e.digest();return uo.encodeByteArray(i)},li=function(...n){let t="";for(let e=0;e<n.length;e++){const i=n[e];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=li.apply(null,i):typeof i=="object"?t+=ot(i):t+=i,t+=" "}return t};let ye=null,Ha=!0;const Zp=function(n,t){y(!t||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(je.logLevel=D.VERBOSE,ye=je.log.bind(je),t&&Cr.set("logging_enabled",!0)):typeof n=="function"?ye=n:(ye=null,Cr.remove("logging_enabled"))},dt=function(...n){if(Ha===!0&&(Ha=!1,ye===null&&Cr.get("logging_enabled")===!0&&Zp(!0)),ye){const t=li.apply(null,n);ye(t)}},ci=function(n){return function(...t){dt(n,...t)}},Sr=function(...n){const t="FIREBASE INTERNAL ERROR: "+li(...n);je.error(t)},Te=function(...n){const t=`FIREBASE FATAL ERROR: ${li(...n)}`;throw je.error(t),new Error(t)},Tt=function(...n){const t="FIREBASE WARNING: "+li(...n);je.warn(t)},t_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},e_=function(n){if(document.readyState==="complete")n();else{let t=!1;const e=function(){if(!document.body){setTimeout(e,Math.floor(10));return}t||(t=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&e()}),window.attachEvent("onload",e))}},Ye="[MIN_NAME]",Ie="[MAX_NAME]",cn=function(n,t){if(n===t)return 0;if(n===Ye||t===Ie)return-1;if(t===Ye||n===Ie)return 1;{const e=Ga(n),i=Ga(t);return e!==null?i!==null?e-i===0?n.length-t.length:e-i:-1:i!==null?1:n<t?-1:1}},n_=function(n,t){return n===t?0:n<t?-1:1},yn=function(n,t){if(t&&n in t)return t[n];throw new Error("Missing required key ("+n+") in object: "+ot(t))},mo=function(n){if(typeof n!="object"||n===null)return ot(n);const t=[];for(const i in n)t.push(i);t.sort();let e="{";for(let i=0;i<t.length;i++)i!==0&&(e+=","),e+=ot(t[i]),e+=":",e+=mo(n[t[i]]);return e+="}",e},Fc=function(n,t){const e=n.length;if(e<=t)return[n];const i=[];for(let s=0;s<e;s+=t)s+t>e?i.push(n.substring(s,e)):i.push(n.substring(s,s+t));return i};function Rt(n,t){for(const e in n)n.hasOwnProperty(e)&&t(e,n[e])}const Uc=function(n){y(!Lc(n),"Invalid JSON number");const t=11,e=52,i=(1<<t-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,e-a)-Math.pow(2,e))):(r=0,o=Math.round(n/Math.pow(2,1-i-e))));const c=[];for(l=e;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},i_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},s_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},r_=new RegExp("^-?(0*)\\d{1,10}$"),o_=-2147483648,a_=2147483647,Ga=function(n){if(r_.test(n)){const t=Number(n);if(t>=o_&&t<=a_)return t}return null},ui=function(n){try{n()}catch(t){setTimeout(()=>{const e=t.stack||"";throw Tt("Exception was thrown by user callback.",e),t},Math.floor(0))}},l_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Dn=function(n,t){const e=setTimeout(n,t);return typeof e=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(e):typeof e=="object"&&e.unref&&e.unref(),e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=e==null?void 0:e.getImmediate({optional:!0}),this.appCheck||e==null||e.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((e,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(e,i):e(null)},0)})}addTokenChangeListener(t){var e;(e=this.appCheckProvider)===null||e===void 0||e.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){Tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(t,e,i){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(e=>e&&e.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((e,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(e,i):e(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(e=>e.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(e=>e.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tt(t)}}class Rr{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Rr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="5",Bc="v",qc="s",jc="r",Wc="f",$c=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zc="ls",Hc="p",Pr="ac",Gc="websocket",Kc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t,e,i,s,r=!1,o="",a=!1,l=!1){this.secure=e,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fe.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&fe.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function d_(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Qc(n,t,e){y(typeof t=="string","typeof type must == string"),y(typeof e=="object","typeof params must == object");let i;if(t===Gc)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(t===Kc)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);d_(n)&&(e.ns=n.namespace);const s=[];return Rt(e,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.counters_={}}incrementCounter(t,e=1){Xt(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return gf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs={},tr={};function yo(n){const t=n.toString();return Zs[t]||(Zs[t]=new f_),Zs[t]}function p_(n,t){const e=n.toString();return tr[e]||(tr[e]=t()),tr[e]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){for(this.pendingResponses[t]=e;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ui(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="start",m_="close",g_="pLPCommand",y_="pRTLPCB",Yc="id",Xc="pw",Jc="ser",E_="cb",v_="seg",T_="ts",I_="d",w_="dframe",Zc=1870,tu=30,A_=Zc-tu,C_=25e3,S_=3e4;class Ue{constructor(t,e,i,s,r,o,a){this.connId=t,this.repoInfo=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ci(t),this.stats_=yo(e),this.urlFn=l=>(this.appCheckToken&&(l[Pr]=this.appCheckToken),Qc(e,Kc,l))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new __(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(S_)),e_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Eo((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ka)this.id=a,this.password=l;else if(o===m_)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ka]="t",i[Jc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[E_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Bc]=go,this.transportSessionId&&(i[qc]=this.transportSessionId),this.lastSessionId&&(i[zc]=this.lastSessionId),this.applicationId&&(i[Hc]=this.applicationId),this.appCheckToken&&(i[Pr]=this.appCheckToken),typeof location<"u"&&location.hostname&&$c.test(location.hostname)&&(i[jc]=Wc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ue.forceAllow_=!0}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){return Ue.forceAllow_?!0:!Ue.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!i_()&&!s_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=ot(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const i=Tc(e),s=Fc(i,A_);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(t,e){this.myDisconnFrame=document.createElement("iframe");const i={};i[w_]="t",i[Yc]=t,i[Xc]=e,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=ot(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Eo{constructor(t,e,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jp(),window[g_+this.uniqueCallbackIdentifier]=t,window[y_+this.uniqueCallbackIdentifier]=e,this.myIFrame=Eo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){dt("frame writing exception"),a.stack&&dt(a.stack),dt(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||dt("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Yc]=this.myID,t[Xc]=this.myPW,t[Jc]=this.currentSerial;let e=this.urlFn(t),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tu+i.length<=Zc;){const o=this.pendingSegs.shift();i=i+"&"+v_+s+"="+o.seg+"&"+T_+s+"="+o.ts+"&"+I_+s+"="+o.d,s++}return e=e+i,this.addLongPollTag_(e,this.currentSerial),!0}else return!1}enqueueSegment(t,e,i){this.pendingSegs.push({seg:t,ts:e,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const i=()=>{this.outstandingRequests.delete(e),this.newRequest_()},s=setTimeout(i,Math.floor(C_)),r=()=>{clearTimeout(s),i()};this.addTag(t,r)}addTag(t,e){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),e())},i.onerror=()=>{dt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=16384,P_=45e3;let Gi=null;typeof MozWebSocket<"u"?Gi=MozWebSocket:typeof WebSocket<"u"&&(Gi=WebSocket);class bt{constructor(t,e,i,s,r,o,a){this.connId=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ci(this.connId),this.stats_=yo(e),this.connURL=bt.connectionURL_(e,o,a,s,i),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,i,s,r){const o={};return o[Bc]=go,typeof location<"u"&&location.hostname&&$c.test(location.hostname)&&(o[jc]=Wc),e&&(o[qc]=e),i&&(o[zc]=i),s&&(o[Pr]=s),r&&(o[Hc]=r),Qc(t,Gc,o)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fe.set("previous_websocket_failure",!0);try{let i;Cc(),this.mySock=new Gi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){bt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(e);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Gi!==null&&!bt.forceDisallow_}static previouslyFailed(){return fe.isInMemoryStorage||fe.get("previous_websocket_failure")===!0}markConnectionHealthy(){fe.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const i=qn(e);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(y(this.frames===null,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(e);else{const i=this.extractFrameCount_(e);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const e=ot(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const i=Fc(e,R_);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(P_))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bt.responsesRequiredToBeHealthy=2;bt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Ue,bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=bt&&bt.isAvailable();let i=e&&!bt.previouslyFailed();if(t.webSocketOnly&&(e||Tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[bt];else{const s=this.transports_=[];for(const r of $n.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);$n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$n.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=6e4,N_=5e3,D_=10*1024,k_=100*1024,er="t",Qa="d",V_="s",Ya="r",x_="e",Xa="o",Ja="a",Za="n",tl="p",O_="h";class M_{constructor(t,e,i,s,r,o,a,l,c,u){this.id=t,this.repoInfo_=e,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ci("c:"+this.id+":"),this.transportManager_=new $n(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(e,i)},Math.floor(0));const s=t.healthyTimeout||0;s>0&&(this.healthyTimeout_=Dn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>k_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>D_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(er in t){const e=t[er];e===Ja?this.upgradeIfSecondaryHealthy_():e===Ya?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):e===Xa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=yn("t",t),i=yn("d",t);if(e==="c")this.onSecondaryControl_(i);else if(e==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+e)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ja,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Za,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=yn("t",t),i=yn("d",t);e==="c"?this.onControl_(i):e==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=yn(er,t);if(Qa in t){const i=t[Qa];if(e===O_){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(e===Za){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===V_?this.onConnectionShutdown_(i):e===Ya?this.onReset_(i):e===x_?Sr("Server Error: "+i):e===Xa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sr("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,i=t.v,s=t.h;this.sessionId=t.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),go!==i&&Tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,i),Dn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(b_))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Dn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(N_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tl,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{put(t,e,i,s){}merge(t,e,i,s){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,i){}onDisconnectMerge(t,e,i){}onDisconnectCancel(t,e){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t){this.allowedEvents_=t,this.listeners_={},y(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,e)}}on(t,e,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:i});const s=this.getInitialEvent(t);s&&e.apply(i,s)}off(t,e,i){this.validateEventType_(t);const s=this.listeners_[t]||[];for(let r=0;r<s.length;r++)if(s[r].callback===e&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(t){y(this.allowedEvents_.find(e=>e===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends nu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ac()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ki}getInitialEvent(t){return y(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=32,nl=768;class W{constructor(t,e){if(e===void 0){this.pieces_=t.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)this.pieces_[e]!==""&&(t+="/"+this.pieces_[e]);return t||"/"}}function F(){return new W("")}function k(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function se(n){return n.pieces_.length-n.pieceNum_}function q(n){let t=n.pieceNum_;return t<n.pieces_.length&&t++,new W(n.pieces_,t)}function iu(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function L_(n){let t="";for(let e=n.pieceNum_;e<n.pieces_.length;e++)n.pieces_[e]!==""&&(t+="/"+encodeURIComponent(String(n.pieces_[e])));return t||"/"}function su(n,t=0){return n.pieces_.slice(n.pieceNum_+t)}function ru(n){if(n.pieceNum_>=n.pieces_.length)return null;const t=[];for(let e=n.pieceNum_;e<n.pieces_.length-1;e++)t.push(n.pieces_[e]);return new W(t,0)}function tt(n,t){const e=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)e.push(n.pieces_[i]);if(t instanceof W)for(let i=t.pieceNum_;i<t.pieces_.length;i++)e.push(t.pieces_[i]);else{const i=t.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&e.push(i[s])}return new W(e,0)}function b(n){return n.pieceNum_>=n.pieces_.length}function St(n,t){const e=k(n),i=k(t);if(e===null)return t;if(e===i)return St(q(n),q(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+n+")")}function ou(n,t){if(se(n)!==se(t))return!1;for(let e=n.pieceNum_,i=t.pieceNum_;e<=n.pieces_.length;e++,i++)if(n.pieces_[e]!==t.pieces_[i])return!1;return!0}function Nt(n,t){let e=n.pieceNum_,i=t.pieceNum_;if(se(n)>se(t))return!1;for(;e<n.pieces_.length;){if(n.pieces_[e]!==t.pieces_[i])return!1;++e,++i}return!0}class F_{constructor(t,e){this.errorPrefix_=e,this.parts_=su(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=_s(this.parts_[i]);au(this)}}function U_(n,t){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(t),n.byteLength_+=_s(t),au(n)}function B_(n){const t=n.parts_.pop();n.byteLength_-=_s(t),n.parts_.length>0&&(n.byteLength_-=1)}function au(n){if(n.byteLength_>nl)throw new Error(n.errorPrefix_+"has a key path longer than "+nl+" bytes ("+n.byteLength_+").");if(n.parts_.length>el)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+el+") or object contains a cycle "+he(n))}function he(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends nu{constructor(){super(["visible"]);let t,e;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(e="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(e="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(e="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new vo}getInitialEvent(t){return y(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=1e3,q_=60*5*1e3,il=30*1e3,j_=1.3,W_=3e4,$_="server_kill",sl=3;class Ht extends eu{constructor(t,e,i,s,r,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ht.nextPersistentConnectionId_++,this.log_=ci("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=En,this.maxReconnectDelay_=q_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Cc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vo.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Ki.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,i){const s=++this.requestNumber_,r={r:s,a:t,b:e};this.log_(ot(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(t){this.initConnection_();const e=new fo,s={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?e.resolve(a):e.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),e.promise}listen(t,e,i,s){this.initConnection_();const r=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),y(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:e,query:t,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(i)})}sendListen_(t){const e=t.query,i=e._path.toString(),s=e._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";t.tag&&(r.q=e._queryObject,r.t=t.tag),r.h=t.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ht.warnOnListenWarnings_(l,e),(this.listens.get(i)&&this.listens.get(i).get(s))===t&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),t.onComplete&&t.onComplete(c,l))})}static warnOnListenWarnings_(t,e){if(t&&typeof t=="object"&&Xt(t,"w")){const i=Ge(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+e._queryParams.getIndex().toString()+'"',r=e._path.toString();Tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||xf(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=il)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=Vf(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(e,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===t&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const e=t.s,i=t.d||"error";e==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,i)})}unlisten(t,e){const i=t._path.toString(),s=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),y(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,t._queryObject,e)}sendUnlisten_(t,e,i,s){this.log_("Unlisten on "+t+" for "+e);const r={p:t},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(t,e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:i})}onDisconnectMerge(t,e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:i})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,i,s){const r={p:e,d:i};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(t,e,i,s){this.putInternal("p",t,e,i,s)}merge(t,e,i,s){this.putInternal("m",t,e,i,s)}putInternal(t,e,i,s,r){this.initConnection_();const o={p:e,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:t,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,s=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,i,r=>{this.log_(e+" response",r),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+ot(t));const e=t.r,i=this.requestCBHash_[e];i&&(delete this.requestCBHash_[e],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),t==="d"?this.onDataUpdate_(e.p,e.d,!1,e.t):t==="m"?this.onDataUpdate_(e.p,e.d,!0,e.t):t==="c"?this.onListenRevoked_(e.p,e.q):t==="ac"?this.onAuthRevoked_(e.s,e.d):t==="apc"?this.onAppCheckRevoked_(e.s,e.d):t==="sd"?this.onSecurityDebugPacket_(e):Sr("Unrecognized action received from server: "+ot(t)+`
Are you using the latest client?`)}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>W_&&(this.reconnectDelay_=En),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*j_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ht.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new M_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,i,f=>{Tt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt($_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Tt(h),l())}}}interrupt(t){dt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){dt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Oa(this.interruptReasons_)&&(this.reconnectDelay_=En,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let i;e?i=e.map(r=>mo(r)).join("$"):i="default";const s=this.removeListen_(t,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(t,e){const i=new W(t).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(e),r.delete(e),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(t,e){dt("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sl&&(this.reconnectDelay_=il,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){dt("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";t["sdk."+e+"."+xc.replace(/\./g,"-")]=1,Ac()?t["framework.cordova"]=1:Rf()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Ki.getInstance().currentlyOnline();return Oa(this.interruptReasons_)&&t}}Ht.nextPersistentConnectionId_=0;Ht.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new V(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const i=new V(Ye,t),s=new V(Ye,e);return this.compare(i,s)!==0}minPost(){return V.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi;class lu extends ms{static get __EMPTY_NODE(){return bi}static set __EMPTY_NODE(t){bi=t}compare(t,e){return cn(t.name,e.name)}isDefinedOn(t){throw an("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return V.MIN}maxPost(){return new V(Ie,bi)}makePost(t,e){return y(typeof t=="string","KeyIndex indexValue must always be a string."),new V(t,bi)}toString(){return".key"}}const We=new lu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni=class{constructor(t,e,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=e?i(t.key,e):1,s&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),e;if(this.resultGenerator_?e=this.resultGenerator_(t.key,t.value):e={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}},vt=class Cn{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??Cn.RED,this.left=s??Ot.EMPTY_NODE,this.right=r??Ot.EMPTY_NODE}copy(t,e,i,s,r){return new Cn(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s=s.copy(null,e,null,null,null):s=s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ot.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let i,s;if(i=this,e(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),e(t,i.key)===0){if(i.right.isEmpty())return Ot.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Cn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Cn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}};vt.RED=!0;vt.BLACK=!1;class z_{copy(t,e,i,s,r){return this}insert(t,e,i){return new vt(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Ot=class Ui{constructor(t,e=Ui.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new Ui(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,vt.BLACK,null,null))}remove(t){return new Ui(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,vt.BLACK,null,null))}get(t){let e,i=this.root_;for(;!i.isEmpty();){if(e=this.comparator_(t,i.key),e===0)return i.value;e<0?i=i.left:e>0&&(i=i.right)}return null}getPredecessorKey(t){let e,i=this.root_,s=null;for(;!i.isEmpty();)if(e=this.comparator_(t,i.key),e===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else e<0?i=i.left:e>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Ni(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new Ni(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new Ni(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new Ni(this.root_,null,this.comparator_,!0,t)}};Ot.EMPTY_NODE=new z_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(n,t){return cn(n.name,t.name)}function To(n,t){return cn(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br;function G_(n){br=n}const cu=function(n){return typeof n=="number"?"number:"+Uc(n):"string:"+n},uu=function(n){if(n.isLeafNode()){const t=n.val();y(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Xt(t,".sv"),"Priority must be a string or number.")}else y(n===br||n.isEmpty(),"priority of unexpected type.");y(n===br||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl;class J{constructor(t,e=J.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uu(this.priorityNode_)}static set __childrenNodeConstructor(t){rl=t}static get __childrenNodeConstructor(){return rl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new J(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return b(t)?this:k(t)===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return t===".priority"?this.updatePriority(e):e.isEmpty()&&t!==".priority"?this:J.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const i=k(t);return i===null?e:e.isEmpty()&&i!==".priority"?this:(y(i!==".priority"||se(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,J.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+cu(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",e==="number"?t+=Uc(this.value_):t+=this.value_,this.lazyHash_=Mc(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===J.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof J.__childrenNodeConstructor?-1:(y(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,i=typeof this.value_,s=J.VALUE_TYPE_ORDER.indexOf(e),r=J.VALUE_TYPE_ORDER.indexOf(i);return y(s>=0,"Unknown leaf type: "+e),y(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}else return!1}}J.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hu,du;function K_(n){hu=n}function Q_(n){du=n}class Y_ extends ms{compare(t,e){const i=t.node.getPriority(),s=e.node.getPriority(),r=i.compareTo(s);return r===0?cn(t.name,e.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return V.MIN}maxPost(){return new V(Ie,new J("[PRIORITY-POST]",du))}makePost(t,e){const i=hu(t);return new V(e,new J("[PRIORITY-POST]",i))}toString(){return".priority"}}const _t=new Y_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=Math.log(2);class J_{constructor(t){const e=r=>parseInt(Math.log(r)/X_,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const s=i(this.count);this.bits_=t+1&s}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Qi=function(n,t,e,i){n.sort(t);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=e?e(h):h,new vt(d,h.node,vt.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=s(l,f),T=s(f+1,c);return h=n[f],d=e?e(h):h,new vt(d,h.node,vt.BLACK,m,T)}},r=function(l){let c=null,u=null,h=n.length;const d=function(m,T){const v=h-m,L=h;h-=m;const z=s(v+1,L),it=n[v],Pt=e?e(it):it;f(new vt(Pt,it.node,T,null,z))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const T=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));T?d(v,vt.BLACK):(d(v,vt.BLACK),d(v,vt.RED))}return u},o=new J_(n.length),a=r(o);return new Ot(i||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr;const xe={};class $t{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return y(xe&&_t,"ChildrenNode.ts has not been loaded"),nr=nr||new $t({".priority":xe},{".priority":_t}),nr}get(t){const e=Ge(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof Ot?e:null}hasIndex(t){return Xt(this.indexSet_,t.toString())}addIndex(t,e){y(t!==We,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=e.getIterator(V.Wrap);let o=r.getNext();for(;o;)s=s||t.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Qi(i,t.getCompare()):a=xe;const l=t.toString(),c=Object.assign({},this.indexSet_);c[l]=t;const u=Object.assign({},this.indexes_);return u[l]=a,new $t(u,c)}addToIndexes(t,e){const i=zi(this.indexes_,(s,r)=>{const o=Ge(this.indexSet_,r);if(y(o,"Missing index implementation for "+r),s===xe)if(o.isDefinedOn(t.node)){const a=[],l=e.getIterator(V.Wrap);let c=l.getNext();for(;c;)c.name!==t.name&&a.push(c),c=l.getNext();return a.push(t),Qi(a,o.getCompare())}else return xe;else{const a=e.get(t.name);let l=s;return a&&(l=l.remove(new V(t.name,a))),l.insert(t,t.node)}});return new $t(i,this.indexSet_)}removeFromIndexes(t,e){const i=zi(this.indexes_,s=>{if(s===xe)return s;{const r=e.get(t.name);return r?s.remove(new V(t.name,r)):s}});return new $t(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn;class O{constructor(t,e,i){this.children_=t,this.priorityNode_=e,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&uu(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vn||(vn=new O(new Ot(To),null,$t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vn}updatePriority(t){return this.children_.isEmpty()?this:new O(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const e=this.children_.get(t);return e===null?vn:e}}getChild(t){const e=k(t);return e===null?this:this.getImmediateChild(e).getChild(q(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,e){if(y(e,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(e);{const i=new V(t,e);let s,r;e.isEmpty()?(s=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(t,e),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?vn:this.priorityNode_;return new O(s,o,r)}}updateChild(t,e){const i=k(t);if(i===null)return e;{y(k(t)!==".priority"||se(t)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(q(t),e);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let i=0,s=0,r=!0;if(this.forEachChild(_t,(o,a)=>{e[o]=a.val(t),i++,r&&O.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!t&&r&&s<2*i){const o=[];for(const a in e)o[a]=e[a];return o}else return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+cu(this.getPriority().val())+":"),this.forEachChild(_t,(e,i)=>{const s=i.hash();s!==""&&(t+=":"+e+":"+s)}),this.lazyHash_=t===""?"":Mc(t)}return this.lazyHash_}getPredecessorChildName(t,e,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new V(t,e));return r?r.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const i=e.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new V(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const i=e.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new V(e,this.children_.get(e)):null}forEachChild(t,e){const i=this.resolveIndex_(t);return i?i.inorderTraversal(s=>e(s.name,s.node)):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const i=this.resolveIndex_(e);if(i)return i.getIteratorFrom(t,s=>s);{const s=this.children_.getIteratorFrom(t.name,V.Wrap);let r=s.peek();for(;r!=null&&e.compare(r,t)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const i=this.resolveIndex_(e);if(i)return i.getReverseIteratorFrom(t,s=>s);{const s=this.children_.getReverseIteratorFrom(t.name,V.Wrap);let r=s.peek();for(;r!=null&&e.compare(r,t)>0;)s.getNext(),r=s.peek();return s}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===hi?-1:0}withIndex(t){if(t===We||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new O(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===We||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority()))if(this.children_.count()===e.children_.count()){const i=this.getIterator(_t),s=e.getIterator(_t);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===We?null:this.indexMap_.get(t.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Z_ extends O{constructor(){super(new Ot(To),O.EMPTY_NODE,$t.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return O.EMPTY_NODE}isEmpty(){return!1}}const hi=new Z_;Object.defineProperties(V,{MIN:{value:new V(Ye,O.EMPTY_NODE)},MAX:{value:new V(Ie,hi)}});lu.__EMPTY_NODE=O.EMPTY_NODE;J.__childrenNodeConstructor=O;G_(hi);Q_(hi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=!0;function ft(n,t=null){if(n===null)return O.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(t=n[".priority"]),y(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const e=n;return new J(e,ft(t))}if(!(n instanceof Array)&&tm){const e=[];let i=!1;if(Rt(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ft(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),e.push(new V(o,l)))}}),e.length===0)return O.EMPTY_NODE;const r=Qi(e,H_,o=>o.name,To);if(i){const o=Qi(e,_t.getCompare());return new O(r,ft(t),new $t({".priority":o},{".priority":_t}))}else return new O(r,ft(t),$t.Default)}else{let e=O.EMPTY_NODE;return Rt(n,(i,s)=>{if(Xt(n,i)&&i.substring(0,1)!=="."){const r=ft(s);(r.isLeafNode()||!r.isEmpty())&&(e=e.updateImmediateChild(i,r))}}),e.updatePriority(ft(t))}}K_(ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em extends ms{constructor(t){super(),this.indexPath_=t,y(!b(t)&&k(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const i=this.extractChild(t.node),s=this.extractChild(e.node),r=i.compareTo(s);return r===0?cn(t.name,e.name):r}makePost(t,e){const i=ft(t),s=O.EMPTY_NODE.updateChild(this.indexPath_,i);return new V(e,s)}maxPost(){const t=O.EMPTY_NODE.updateChild(this.indexPath_,hi);return new V(Ie,t)}toString(){return su(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm extends ms{compare(t,e){const i=t.node.compareTo(e.node);return i===0?cn(t.name,e.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(t,e){const i=ft(t);return new V(e,i)}toString(){return".value"}}const im=new nm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n){return{type:"value",snapshotNode:n}}function rm(n,t){return{type:"child_added",snapshotNode:t,childName:n}}function om(n,t){return{type:"child_removed",snapshotNode:t,childName:n}}function ol(n,t,e){return{type:"child_changed",snapshotNode:t,childName:n,oldSnap:e}}function am(n,t){return{type:"child_moved",snapshotNode:t,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ye}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ie}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_t}copy(){const t=new Io;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function al(n){const t={};if(n.isDefault())return t;let e;if(n.index_===_t?e="$priority":n.index_===im?e="$value":n.index_===We?e="$key":(y(n.index_ instanceof em,"Unrecognized index type!"),e=n.index_.toString()),t.orderBy=ot(e),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";t[i]=ot(n.indexStartValue_),n.startNameSet_&&(t[i]+=","+ot(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";t[i]=ot(n.indexEndValue_),n.endNameSet_&&(t[i]+=","+ot(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?t.limitToFirst=n.limit_:t.limitToLast=n.limit_),t}function ll(n){const t={};if(n.startSet_&&(t.sp=n.indexStartValue_,n.startNameSet_&&(t.sn=n.indexStartName_),t.sin=!n.startAfterSet_),n.endSet_&&(t.ep=n.indexEndValue_,n.endNameSet_&&(t.en=n.indexEndName_),t.ein=!n.endBeforeSet_),n.limitSet_){t.l=n.limit_;let e=n.viewFrom_;e===""&&(n.isViewFromLeft()?e="l":e="r"),t.vf=e}return n.index_!==_t&&(t.i=n.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends eu{constructor(t,e,i,s){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ci("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return e!==void 0?"tag$"+e:(y(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,i,s){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const o=Yi.getListenId_(t,i),a={};this.listens_[o]=a;const l=al(t._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Ge(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(t,e){const i=Yi.getListenId_(t,e);delete this.listens_[i]}get(t){const e=al(t._queryParams),i=t._path.toString(),s=new fo;return this.restRequest_(i+".json",e,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(t){}restRequest_(t,e={},i){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(e.auth=s.accessToken),r&&r.token&&(e.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Of(e);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=qn(a.responseText)}catch{Tt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Tt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(){return{value:null,children:new Map}}function fu(n,t,e){if(b(t))n.value=e,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(t,e);else{const i=k(t);n.children.has(i)||n.children.set(i,Xi());const s=n.children.get(i);t=q(t),fu(s,t,e)}}function Nr(n,t,e){n.value!==null?e(t,n.value):cm(n,(i,s)=>{const r=new W(t.toString()+"/"+i);Nr(s,r,e)})}function cm(n,t){n.children.forEach((e,i)=>{t(i,e)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&Rt(this.last_,(i,s)=>{e[i]=e[i]-s}),this.last_=t,e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=10*1e3,hm=30*1e3,dm=5*60*1e3;class fm{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new um(t);const i=cl+(hm-cl)*Math.random();Dn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),e={};let i=!1;Rt(t,(s,r)=>{r>0&&Xt(this.statsToReport_,s)&&(e[s]=r,i=!0)}),i&&this.server_.reportStats(e),Dn(this.reportStats_.bind(this),Math.floor(Math.random()*2*dm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mt||(Mt={}));function pu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _u(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mu(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,e,i){this.path=t,this.affectedTree=e,this.revert=i,this.type=Mt.ACK_USER_WRITE,this.source=pu()}operationForChild(t){if(b(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new W(t));return new Ji(F(),e,this.revert)}}else return y(k(this.path)===t,"operationForChild called for unrelated child."),new Ji(q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e,i){this.source=t,this.path=e,this.snap=i,this.type=Mt.OVERWRITE}operationForChild(t){return b(this.path)?new we(this.source,F(),this.snap.getImmediateChild(t)):new we(this.source,q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,i){this.source=t,this.path=e,this.children=i,this.type=Mt.MERGE}operationForChild(t){if(b(this.path)){const e=this.children.subtree(new W(t));return e.isEmpty()?null:e.value?new we(this.source,F(),e.value):new zn(this.source,F(),e)}else return y(k(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new zn(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,e,i){this.node_=t,this.fullyInitialized_=e,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(b(t))return this.isFullyInitialized()&&!this.filtered_;const e=k(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function pm(n,t,e,i){const s=[],r=[];return t.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(am(o.childName,o.snapshotNode))}),Tn(n,s,"child_removed",t,i,e),Tn(n,s,"child_added",t,i,e),Tn(n,s,"child_moved",r,i,e),Tn(n,s,"child_changed",t,i,e),Tn(n,s,"value",t,i,e),s}function Tn(n,t,e,i,s,r){const o=i.filter(a=>a.type===e);o.sort((a,l)=>mm(n,a,l)),o.forEach(a=>{const l=_m(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&t.push(c.createEvent(l,n.query_))})})}function _m(n,t,e){return t.type==="value"||t.type==="child_removed"||(t.prevName=e.getPredecessorChildName(t.childName,t.snapshotNode,n.index_)),t}function mm(n,t,e){if(t.childName==null||e.childName==null)throw an("Should only compare child_ events.");const i=new V(t.childName,t.snapshotNode),s=new V(e.childName,e.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n,t){return{eventCache:n,serverCache:t}}function kn(n,t,e,i){return gu(new wo(t,e,i),n.serverCache)}function yu(n,t,e,i){return gu(n.eventCache,new wo(t,e,i))}function Dr(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ae(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir;const gm=()=>(ir||(ir=new Ot(n_)),ir);class B{constructor(t,e=gm()){this.value=t,this.children=e}static fromObject(t){let e=new B(null);return Rt(t,(i,s)=>{e=e.set(new W(i),s)}),e}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(this.value!=null&&e(this.value))return{path:F(),value:this.value};if(b(t))return null;{const i=k(t),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(q(t),e);return r!=null?{path:tt(new W(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(b(t))return this;{const e=k(t),i=this.children.get(e);return i!==null?i.subtree(q(t)):new B(null)}}set(t,e){if(b(t))return new B(e,this.children);{const i=k(t),r=(this.children.get(i)||new B(null)).set(q(t),e),o=this.children.insert(i,r);return new B(this.value,o)}}remove(t){if(b(t))return this.children.isEmpty()?new B(null):new B(null,this.children);{const e=k(t),i=this.children.get(e);if(i){const s=i.remove(q(t));let r;return s.isEmpty()?r=this.children.remove(e):r=this.children.insert(e,s),this.value===null&&r.isEmpty()?new B(null):new B(this.value,r)}else return this}}get(t){if(b(t))return this.value;{const e=k(t),i=this.children.get(e);return i?i.get(q(t)):null}}setTree(t,e){if(b(t))return e;{const i=k(t),r=(this.children.get(i)||new B(null)).setTree(q(t),e);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new B(this.value,o)}}fold(t){return this.fold_(F(),t)}fold_(t,e){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(tt(t,s),e)}),e(t,this.value,i)}findOnPath(t,e){return this.findOnPath_(t,F(),e)}findOnPath_(t,e,i){const s=this.value?i(e,this.value):!1;if(s)return s;if(b(t))return null;{const r=k(t),o=this.children.get(r);return o?o.findOnPath_(q(t),tt(e,r),i):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,F(),e)}foreachOnPath_(t,e,i){if(b(t))return this;{this.value&&i(e,this.value);const s=k(t),r=this.children.get(s);return r?r.foreachOnPath_(q(t),tt(e,s),i):new B(null)}}foreach(t){this.foreach_(F(),t)}foreach_(t,e){this.children.inorderTraversal((i,s)=>{s.foreach_(tt(t,i),e)}),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal((e,i)=>{i.value&&t(e,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.writeTree_=t}static empty(){return new kt(new B(null))}}function Vn(n,t,e){if(b(t))return new kt(new B(e));{const i=n.writeTree_.findRootMostValueAndPath(t);if(i!=null){const s=i.path;let r=i.value;const o=St(s,t);return r=r.updateChild(o,e),new kt(n.writeTree_.set(s,r))}else{const s=new B(e),r=n.writeTree_.setTree(t,s);return new kt(r)}}}function ul(n,t,e){let i=n;return Rt(e,(s,r)=>{i=Vn(i,tt(t,s),r)}),i}function hl(n,t){if(b(t))return kt.empty();{const e=n.writeTree_.setTree(t,new B(null));return new kt(e)}}function kr(n,t){return Pe(n,t)!=null}function Pe(n,t){const e=n.writeTree_.findRootMostValueAndPath(t);return e!=null?n.writeTree_.get(e.path).getChild(St(e.path,t)):null}function dl(n){const t=[],e=n.writeTree_.value;return e!=null?e.isLeafNode()||e.forEachChild(_t,(i,s)=>{t.push(new V(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&t.push(new V(i,s.value))}),t}function ne(n,t){if(b(t))return n;{const e=Pe(n,t);return e!=null?new kt(new B(e)):new kt(n.writeTree_.subtree(t))}}function Vr(n){return n.writeTree_.isEmpty()}function Xe(n,t){return Eu(F(),n.writeTree_,t)}function Eu(n,t,e){if(t.value!=null)return e.updateChild(n,t.value);{let i=null;return t.children.inorderTraversal((s,r)=>{s===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):e=Eu(tt(n,s),r,e)}),!e.getChild(n).isEmpty()&&i!==null&&(e=e.updateChild(tt(n,".priority"),i)),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n,t){return Cu(t,n)}function ym(n,t,e,i,s){y(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:t,snap:e,writeId:i,visible:s}),s&&(n.visibleWrites=Vn(n.visibleWrites,t,e)),n.lastWriteId=i}function Em(n,t){for(let e=0;e<n.allWrites.length;e++){const i=n.allWrites[e];if(i.writeId===t)return i}return null}function vm(n,t){const e=n.allWrites.findIndex(a=>a.writeId===t);y(e>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[e];n.allWrites.splice(e,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=e&&Tm(a,i.path)?s=!1:Nt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Im(n),!0;if(i.snap)n.visibleWrites=hl(n.visibleWrites,i.path);else{const a=i.children;Rt(a,l=>{n.visibleWrites=hl(n.visibleWrites,tt(i.path,l))})}return!0}else return!1}function Tm(n,t){if(n.snap)return Nt(n.path,t);for(const e in n.children)if(n.children.hasOwnProperty(e)&&Nt(tt(n.path,e),t))return!0;return!1}function Im(n){n.visibleWrites=Tu(n.allWrites,wm,F()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function wm(n){return n.visible}function Tu(n,t,e){let i=kt.empty();for(let s=0;s<n.length;++s){const r=n[s];if(t(r)){const o=r.path;let a;if(r.snap)Nt(e,o)?(a=St(e,o),i=Vn(i,a,r.snap)):Nt(o,e)&&(a=St(o,e),i=Vn(i,F(),r.snap.getChild(a)));else if(r.children){if(Nt(e,o))a=St(e,o),i=ul(i,a,r.children);else if(Nt(o,e))if(a=St(o,e),b(a))i=ul(i,F(),r.children);else{const l=Ge(r.children,k(a));if(l){const c=l.getChild(q(a));i=Vn(i,F(),c)}}}else throw an("WriteRecord should have .snap or .children")}}return i}function Iu(n,t,e,i,s){if(!i&&!s){const r=Pe(n.visibleWrites,t);if(r!=null)return r;{const o=ne(n.visibleWrites,t);if(Vr(o))return e;if(e==null&&!kr(o,F()))return null;{const a=e||O.EMPTY_NODE;return Xe(o,a)}}}else{const r=ne(n.visibleWrites,t);if(!s&&Vr(r))return e;if(!s&&e==null&&!kr(r,F()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Nt(c.path,t)||Nt(t,c.path))},a=Tu(n.allWrites,o,t),l=e||O.EMPTY_NODE;return Xe(a,l)}}}function Am(n,t,e){let i=O.EMPTY_NODE;const s=Pe(n.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(_t,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(e){const r=ne(n.visibleWrites,t);return e.forEachChild(_t,(o,a)=>{const l=Xe(ne(r,new W(o)),a);i=i.updateImmediateChild(o,l)}),dl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ne(n.visibleWrites,t);return dl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Cm(n,t,e,i,s){y(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=tt(t,e);if(kr(n.visibleWrites,r))return null;{const o=ne(n.visibleWrites,r);return Vr(o)?s.getChild(e):Xe(o,s.getChild(e))}}function Sm(n,t,e,i){const s=tt(t,e),r=Pe(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(e)){const o=ne(n.visibleWrites,s);return Xe(o,i.getNode().getImmediateChild(e))}else return null}function Rm(n,t){return Pe(n.visibleWrites,t)}function Pm(n,t,e,i,s,r,o){let a;const l=ne(n.visibleWrites,t),c=Pe(l,F());if(c!=null)a=c;else if(e!=null)a=Xe(l,e);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function bm(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function xr(n,t,e,i){return Iu(n.writeTree,n.treePath,t,e,i)}function wu(n,t){return Am(n.writeTree,n.treePath,t)}function fl(n,t,e,i){return Cm(n.writeTree,n.treePath,t,e,i)}function Zi(n,t){return Rm(n.writeTree,tt(n.treePath,t))}function Nm(n,t,e,i,s,r){return Pm(n.writeTree,n.treePath,t,e,i,s,r)}function Ao(n,t,e){return Sm(n.writeTree,n.treePath,t,e)}function Au(n,t){return Cu(tt(n.treePath,t),n.writeTree)}function Cu(n,t){return{treePath:n,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,i=t.childName;y(e==="child_added"||e==="child_changed"||e==="child_removed","Only child changes supported for tracking"),y(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(e==="child_added"&&r==="child_removed")this.changeMap.set(i,ol(i,t.snapshotNode,s.snapshotNode));else if(e==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(e==="child_removed"&&r==="child_changed")this.changeMap.set(i,om(i,s.oldSnap));else if(e==="child_changed"&&r==="child_added")this.changeMap.set(i,rm(i,t.snapshotNode));else if(e==="child_changed"&&r==="child_changed")this.changeMap.set(i,ol(i,t.snapshotNode,s.oldSnap));else throw an("Illegal combination of changes: "+t+" occurred after "+s)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{getCompleteChild(t){return null}getChildAfterChild(t,e,i){return null}}const Su=new km;class Co{constructor(t,e,i=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=i}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new wo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ao(this.writes_,t,i)}}getChildAfterChild(t,e,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ae(this.viewCache_),r=Nm(this.writes_,s,e,1,i,t);return r.length===0?null:r[0]}}function Vm(n,t){y(t.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(t.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function xm(n,t,e,i,s){const r=new Dm;let o,a;if(e.type===Mt.OVERWRITE){const c=e;c.source.fromUser?o=Or(n,t,c.path,c.snap,i,s,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!b(c.path),o=ts(n,t,c.path,c.snap,i,s,a,r))}else if(e.type===Mt.MERGE){const c=e;c.source.fromUser?o=Mm(n,t,c.path,c.children,i,s,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Mr(n,t,c.path,c.children,i,s,a,r))}else if(e.type===Mt.ACK_USER_WRITE){const c=e;c.revert?o=Um(n,t,c.path,i,s,r):o=Lm(n,t,c.path,c.affectedTree,i,s,r)}else if(e.type===Mt.LISTEN_COMPLETE)o=Fm(n,t,e.path,i,r);else throw an("Unknown operation type: "+e.type);const l=r.getChanges();return Om(t,o,l),{viewCache:o,changes:l}}function Om(n,t,e){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Dr(n);(e.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&e.push(sm(Dr(t)))}}function Ru(n,t,e,i,s,r){const o=t.eventCache;if(Zi(i,e)!=null)return t;{let a,l;if(b(e))if(y(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const c=Ae(t),u=c instanceof O?c:O.EMPTY_NODE,h=wu(i,u);a=n.filter.updateFullNode(t.eventCache.getNode(),h,r)}else{const c=xr(i,Ae(t));a=n.filter.updateFullNode(t.eventCache.getNode(),c,r)}else{const c=k(e);if(c===".priority"){y(se(e)===1,"Can't have a priority with additional path components");const u=o.getNode();l=t.serverCache.getNode();const h=fl(i,e,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=q(e);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const d=fl(i,e,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ao(i,c,t.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return kn(t,a,o.isFullyInitialized()||b(e),n.filter.filtersNodes())}}function ts(n,t,e,i,s,r,o,a){const l=t.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(b(e))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(e,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=k(e);if(!l.isCompleteForPath(e)&&se(e)>1)return t;const m=q(e),v=l.getNode().getImmediateChild(f).updateChild(m,i);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,m,Su,null)}const h=yu(t,c,l.isFullyInitialized()||b(e),u.filtersNodes()),d=new Co(s,h,r);return Ru(n,h,e,s,d,a)}function Or(n,t,e,i,s,r,o){const a=t.eventCache;let l,c;const u=new Co(s,t,r);if(b(e))c=n.filter.updateFullNode(t.eventCache.getNode(),i,o),l=kn(t,c,!0,n.filter.filtersNodes());else{const h=k(e);if(h===".priority")c=n.filter.updatePriority(t.eventCache.getNode(),i),l=kn(t,c,a.isFullyInitialized(),a.isFiltered());else{const d=q(e),f=a.getNode().getImmediateChild(h);let m;if(b(d))m=i;else{const T=u.getCompleteChild(h);T!=null?iu(d)===".priority"&&T.getChild(ru(d)).isEmpty()?m=T:m=T.updateChild(d,i):m=O.EMPTY_NODE}if(f.equals(m))l=t;else{const T=n.filter.updateChild(a.getNode(),h,m,d,u,o);l=kn(t,T,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function pl(n,t){return n.eventCache.isCompleteForChild(t)}function Mm(n,t,e,i,s,r,o){let a=t;return i.foreach((l,c)=>{const u=tt(e,l);pl(t,k(u))&&(a=Or(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=tt(e,l);pl(t,k(u))||(a=Or(n,a,u,c,s,r,o))}),a}function _l(n,t,e){return e.foreach((i,s)=>{t=t.updateChild(i,s)}),t}function Mr(n,t,e,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,c;b(e)?c=i:c=new B(null).setTree(e,i);const u=t.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=t.serverCache.getNode().getImmediateChild(h),m=_l(n,f,d);l=ts(n,l,new W(h),m,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!t.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=t.serverCache.getNode().getImmediateChild(h),T=_l(n,m,d);l=ts(n,l,new W(h),T,s,r,o,a)}}),l}function Lm(n,t,e,i,s,r,o){if(Zi(s,e)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(i.value!=null){if(b(e)&&l.isFullyInitialized()||l.isCompleteForPath(e))return ts(n,t,e,l.getNode().getChild(e),s,r,a,o);if(b(e)){let c=new B(null);return l.getNode().forEachChild(We,(u,h)=>{c=c.set(new W(u),h)}),Mr(n,t,e,c,s,r,a,o)}else return t}else{let c=new B(null);return i.foreach((u,h)=>{const d=tt(e,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Mr(n,t,e,c,s,r,a,o)}}function Fm(n,t,e,i,s){const r=t.serverCache,o=yu(t,r.getNode(),r.isFullyInitialized()||b(e),r.isFiltered());return Ru(n,o,e,i,Su,s)}function Um(n,t,e,i,s,r){let o;if(Zi(i,e)!=null)return t;{const a=new Co(i,t,s),l=t.eventCache.getNode();let c;if(b(e)||k(e)===".priority"){let u;if(t.serverCache.isFullyInitialized())u=xr(i,Ae(t));else{const h=t.serverCache.getNode();y(h instanceof O,"serverChildren would be complete if leaf node"),u=wu(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=k(e);let h=Ao(i,u,t.serverCache);h==null&&t.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,q(e),a,r):t.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,O.EMPTY_NODE,q(e),a,r):c=l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=xr(i,Ae(t)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||Zi(i,F())!=null,kn(t,c,o,n.filter.filtersNodes())}}function Bm(n,t){const e=Ae(n.viewCache_);return e&&(n.query._queryParams.loadsAllData()||!b(t)&&!e.getImmediateChild(k(t)).isEmpty())?e.getChild(t):null}function ml(n,t,e,i){t.type===Mt.MERGE&&t.source.queryId!==null&&(y(Ae(n.viewCache_),"We should always have a full cache before handling merges"),y(Dr(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=xm(n.processor_,s,t,e,i);return Vm(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,qm(n,r.changes,r.viewCache.eventCache.getNode(),null)}function qm(n,t,e,i){const s=i?[i]:n.eventRegistrations_;return pm(n.eventGenerator_,t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;function jm(n){y(!gl,"__referenceConstructor has already been defined"),gl=n}function So(n,t,e,i){const s=t.source.queryId;if(s!==null){const r=n.views.get(s);return y(r!=null,"SyncTree gave us an op for an invalid query."),ml(r,t,e,i)}else{let r=[];for(const o of n.views.values())r=r.concat(ml(o,t,e,i));return r}}function Ro(n,t){let e=null;for(const i of n.views.values())e=e||Bm(i,t);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;function Wm(n){y(!yl,"__referenceConstructor has already been defined"),yl=n}class El{constructor(t){this.listenProvider_=t,this.syncPointTree_=new B(null),this.pendingWriteTree_=bm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $m(n,t,e,i,s){return ym(n.pendingWriteTree_,t,e,i,s),s?ys(n,new we(pu(),t,e)):[]}function Be(n,t,e=!1){const i=Em(n.pendingWriteTree_,t);if(vm(n.pendingWriteTree_,t)){let r=new B(null);return i.snap!=null?r=r.set(F(),!0):Rt(i.children,o=>{r=r.set(new W(o),!0)}),ys(n,new Ji(i.path,r,e))}else return[]}function gs(n,t,e){return ys(n,new we(_u(),t,e))}function zm(n,t,e){const i=B.fromObject(e);return ys(n,new zn(_u(),t,i))}function Hm(n,t,e,i){const s=Du(n,i);if(s!=null){const r=ku(s),o=r.path,a=r.queryId,l=St(o,t),c=new we(mu(a),l,e);return Vu(n,o,c)}else return[]}function Gm(n,t,e,i){const s=Du(n,i);if(s){const r=ku(s),o=r.path,a=r.queryId,l=St(o,t),c=B.fromObject(e),u=new zn(mu(a),l,c);return Vu(n,o,u)}else return[]}function Pu(n,t,e){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(t,(o,a)=>{const l=St(o,t),c=Ro(a,l);if(c)return c});return Iu(s,t,r,e,!0)}function ys(n,t){return bu(t,n.syncPointTree_,null,vu(n.pendingWriteTree_,F()))}function bu(n,t,e,i){if(b(n.path))return Nu(n,t,e,i);{const s=t.get(F());e==null&&s!=null&&(e=Ro(s,F()));let r=[];const o=k(n.path),a=n.operationForChild(o),l=t.children.get(o);if(l&&a){const c=e?e.getImmediateChild(o):null,u=Au(i,o);r=r.concat(bu(a,l,c,u))}return s&&(r=r.concat(So(s,n,i,e))),r}}function Nu(n,t,e,i){const s=t.get(F());e==null&&s!=null&&(e=Ro(s,F()));let r=[];return t.children.inorderTraversal((o,a)=>{const l=e?e.getImmediateChild(o):null,c=Au(i,o),u=n.operationForChild(o);u&&(r=r.concat(Nu(u,a,l,c)))}),s&&(r=r.concat(So(s,n,i,e))),r}function Du(n,t){return n.tagToQueryMap.get(t)}function ku(n){const t=n.indexOf("$");return y(t!==-1&&t<n.length-1,"Bad queryKey."),{queryId:n.substr(t+1),path:new W(n.substr(0,t))}}function Vu(n,t,e){const i=n.syncPointTree_.get(t);y(i,"Missing sync point for query tag that we're tracking");const s=vu(n.pendingWriteTree_,t);return So(i,e,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new Po(e)}node(){return this.node_}}class bo{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=tt(this.path_,t);return new bo(this.syncTree_,e)}node(){return Pu(this.syncTree_,this.path_)}}const Km=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},vl=function(n,t,e){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Qm(n[".sv"],t,e);if(typeof n[".sv"]=="object")return Ym(n[".sv"],t);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Qm=function(n,t,e){switch(n){case"timestamp":return e.timestamp;default:y(!1,"Unexpected server value: "+n)}},Ym=function(n,t,e){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&y(!1,"Unexpected increment value: "+i);const s=t.node();if(y(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Xm=function(n,t,e,i){return No(t,new bo(e,n),i)},Jm=function(n,t,e){return No(n,new Po(t),e)};function No(n,t,e){const i=n.getPriority().val(),s=vl(i,t.getImmediateChild(".priority"),e);let r;if(n.isLeafNode()){const o=n,a=vl(o.getValue(),t,e);return a!==o.getValue()||s!==o.getPriority().val()?new J(a,ft(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new J(s))),o.forEachChild(_t,(a,l)=>{const c=No(l,t.getImmediateChild(a),e);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t="",e=null,i={children:{},childCount:0}){this.name=t,this.parent=e,this.node=i}}function ko(n,t){let e=t instanceof W?t:new W(t),i=n,s=k(e);for(;s!==null;){const r=Ge(i.node.children,s)||{children:{},childCount:0};i=new Do(s,i,r),e=q(e),s=k(e)}return i}function un(n){return n.node.value}function xu(n,t){n.node.value=t,Lr(n)}function Ou(n){return n.node.childCount>0}function Zm(n){return un(n)===void 0&&!Ou(n)}function Es(n,t){Rt(n.node.children,(e,i)=>{t(new Do(e,n,i))})}function Mu(n,t,e,i){e&&!i&&t(n),Es(n,s=>{Mu(s,t,!0,i)}),e&&i&&t(n)}function tg(n,t,e){let i=e?n:n.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function di(n){return new W(n.parent===null?n.name:di(n.parent)+"/"+n.name)}function Lr(n){n.parent!==null&&eg(n.parent,n.name,n)}function eg(n,t,e){const i=Zm(e),s=Xt(n.node.children,t);i&&s?(delete n.node.children[t],n.node.childCount--,Lr(n)):!i&&!s&&(n.node.children[t]=e.node,n.node.childCount++,Lr(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=/[\[\].#$\/\u0000-\u001F\u007F]/,ig=/[\[\].#$\u0000-\u001F\u007F]/,sr=10*1024*1024,Lu=function(n){return typeof n=="string"&&n.length!==0&&!ng.test(n)},sg=function(n){return typeof n=="string"&&n.length!==0&&!ig.test(n)},rg=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sg(n)},Fu=function(n,t,e){const i=e instanceof W?new F_(e,n):e;if(t===void 0)throw new Error(n+"contains undefined "+he(i));if(typeof t=="function")throw new Error(n+"contains a function "+he(i)+" with contents = "+t.toString());if(Lc(t))throw new Error(n+"contains "+t.toString()+" "+he(i));if(typeof t=="string"&&t.length>sr/3&&_s(t)>sr)throw new Error(n+"contains a string greater than "+sr+" utf8 bytes "+he(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let s=!1,r=!1;if(Rt(t,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Lu(o)))throw new Error(n+" contains an invalid key ("+o+") "+he(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);U_(i,o),Fu(n,a,i),B_(i)}),s&&r)throw new Error(n+' contains ".value" child '+he(i)+" in addition to actual children.")}},og=function(n,t){const e=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Lu(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||e.length!==0&&!rg(e))throw new Error(Lf(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lg(n,t){let e=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();e!==null&&!ou(r,e.path)&&(n.eventLists_.push(e),e=null),e===null&&(e={events:[],path:r}),e.events.push(s)}e&&n.eventLists_.push(e)}function be(n,t,e){lg(n,e),cg(n,i=>Nt(i,t)||Nt(t,i))}function cg(n,t){n.recursionDepth_++;let e=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;t(r)?(ug(n.eventLists_[i]),n.eventLists_[i]=null):e=!1}}e&&(n.eventLists_=[]),n.recursionDepth_--}function ug(n){for(let t=0;t<n.events.length;t++){const e=n.events[t];if(e!==null){n.events[t]=null;const i=e.getEventRunner();ye&&dt("event: "+e.toString()),ui(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="repo_interrupt",dg=25;class fg{constructor(t,e,i,s){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ag,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xi(),this.transactionQueueTree_=new Do,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pg(n,t,e){if(n.stats_=yo(n.repoInfo_),n.forceRestClient_||l_())n.server_=new Yi(n.repoInfo_,(i,s,r,o)=>{Tl(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Il(n,!0),0);else{if(typeof e<"u"&&e!==null){if(typeof e!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(e)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ht(n.repoInfo_,t,(i,s,r,o)=>{Tl(n,i,s,r,o)},i=>{Il(n,i)},i=>{mg(n,i)},n.authTokenProvider_,n.appCheckProvider_,e),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=p_(n.repoInfo_,()=>new fm(n.stats_,n.server_)),n.infoData_=new lm,n.infoSyncTree_=new El({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=gs(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vo(n,"connected",!1),n.serverSyncTree_=new El({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);be(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function _g(n){const e=n.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+e}function Uu(n){return Km({timestamp:_g(n)})}function Tl(n,t,e,i,s){n.dataUpdateCount++;const r=new W(t);e=n.interceptServerDataCallback_?n.interceptServerDataCallback_(t,e):e;let o=[];if(s)if(i){const l=zi(e,c=>ft(c));o=Gm(n.serverSyncTree_,r,l,s)}else{const l=ft(e);o=Hm(n.serverSyncTree_,r,l,s)}else if(i){const l=zi(e,c=>ft(c));o=zm(n.serverSyncTree_,r,l)}else{const l=ft(e);o=gs(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Oo(n,r)),be(n.eventQueue_,a,o)}function Il(n,t){Vo(n,"connected",t),t===!1&&yg(n)}function mg(n,t){Rt(t,(e,i)=>{Vo(n,e,i)})}function Vo(n,t,e){const i=new W("/.info/"+t),s=ft(e);n.infoData_.updateSnapshot(i,s);const r=gs(n.infoSyncTree_,i,s);be(n.eventQueue_,i,r)}function gg(n){return n.nextWriteId_++}function yg(n){Bu(n,"onDisconnectEvents");const t=Uu(n),e=Xi();Nr(n.onDisconnect_,F(),(s,r)=>{const o=Xm(s,r,n.serverSyncTree_,t);fu(e,s,o)});let i=[];Nr(e,F(),(s,r)=>{i=i.concat(gs(n.serverSyncTree_,s,r));const o=Ig(n,s);Oo(n,o)}),n.onDisconnect_=Xi(),be(n.eventQueue_,F(),i)}function Eg(n){n.persistentConnection_&&n.persistentConnection_.interrupt(hg)}function Bu(n,...t){let e="";n.persistentConnection_&&(e=n.persistentConnection_.id+":"),dt(e,...t)}function qu(n,t,e){return Pu(n.serverSyncTree_,t,e)||O.EMPTY_NODE}function xo(n,t=n.transactionQueueTree_){if(t||vs(n,t),un(t)){const e=Wu(n,t);y(e.length>0,"Sending zero length transaction queue"),e.every(s=>s.status===0)&&vg(n,di(t),e)}else Ou(t)&&Es(t,e=>{xo(n,e)})}function vg(n,t,e){const i=e.map(c=>c.currentWriteId),s=qu(n,t,i);let r=s;const o=s.hash();for(let c=0;c<e.length;c++){const u=e[c];y(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=St(t,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;n.server_.put(l.toString(),a,c=>{Bu(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<e.length;d++)e[d].status=2,u=u.concat(Be(n.serverSyncTree_,e[d].currentWriteId)),e[d].onComplete&&h.push(()=>e[d].onComplete(null,!0,e[d].currentOutputSnapshotResolved)),e[d].unwatcher();vs(n,ko(n.transactionQueueTree_,t)),xo(n,n.transactionQueueTree_),be(n.eventQueue_,t,u);for(let d=0;d<h.length;d++)ui(h[d])}else{if(c==="datastale")for(let h=0;h<e.length;h++)e[h].status===3?e[h].status=4:e[h].status=0;else{Tt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<e.length;h++)e[h].status=4,e[h].abortReason=c}Oo(n,t)}},o)}function Oo(n,t){const e=ju(n,t),i=di(e),s=Wu(n,e);return Tg(n,s,i),i}function Tg(n,t,e){if(t.length===0)return;const i=[];let s=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],c=St(e,l.path);let u=!1,h;if(y(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Be(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dg)u=!0,h="maxretry",s=s.concat(Be(n.serverSyncTree_,l.currentWriteId,!0));else{const d=qu(n,l.path,o);l.currentInputSnapshot=d;const f=t[a].update(d.val());if(f!==void 0){Fu("transaction failed: Data returned ",f,l.path);let m=ft(f);typeof f=="object"&&f!=null&&Xt(f,".priority")||(m=m.updatePriority(d.getPriority()));const v=l.currentWriteId,L=Uu(n),z=Jm(m,d,L);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=z,l.currentWriteId=gg(n),o.splice(o.indexOf(v),1),s=s.concat($m(n.serverSyncTree_,l.path,z,l.currentWriteId,l.applyLocally)),s=s.concat(Be(n.serverSyncTree_,v,!0))}else u=!0,h="nodata",s=s.concat(Be(n.serverSyncTree_,l.currentWriteId,!0))}be(n.eventQueue_,e,s),s=[],u&&(t[a].status=2,function(d){setTimeout(d,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(h==="nodata"?i.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):i.push(()=>t[a].onComplete(new Error(h),!1,null))))}vs(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)ui(i[a]);xo(n,n.transactionQueueTree_)}function ju(n,t){let e,i=n.transactionQueueTree_;for(e=k(t);e!==null&&un(i)===void 0;)i=ko(i,e),t=q(t),e=k(t);return i}function Wu(n,t){const e=[];return $u(n,t,e),e.sort((i,s)=>i.order-s.order),e}function $u(n,t,e){const i=un(t);if(i)for(let s=0;s<i.length;s++)e.push(i[s]);Es(t,s=>{$u(n,s,e)})}function vs(n,t){const e=un(t);if(e){let i=0;for(let s=0;s<e.length;s++)e[s].status!==2&&(e[i]=e[s],i++);e.length=i,xu(t,e.length>0?e:void 0)}Es(t,i=>{vs(n,i)})}function Ig(n,t){const e=di(ju(n,t)),i=ko(n.transactionQueueTree_,t);return tg(i,s=>{rr(n,s)}),rr(n,i),Mu(i,s=>{rr(n,s)}),e}function rr(n,t){const e=un(t);if(e){const i=[];let s=[],r=-1;for(let o=0;o<e.length;o++)e[o].status===3||(e[o].status===1?(y(r===o-1,"All SENT items should be at beginning of queue."),r=o,e[o].status=3,e[o].abortReason="set"):(y(e[o].status===0,"Unexpected transaction status in abort"),e[o].unwatcher(),s=s.concat(Be(n.serverSyncTree_,e[o].currentWriteId,!0)),e[o].onComplete&&i.push(e[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xu(t,void 0):e.length=r+1,be(n.eventQueue_,di(t),s);for(let o=0;o<i.length;o++)ui(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(n){let t="";const e=n.split("/");for(let i=0;i<e.length;i++)if(e[i].length>0){let s=e[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}t+="/"+s}return t}function Ag(n){const t={};n.charAt(0)==="?"&&(n=n.substring(1));for(const e of n.split("&")){if(e.length===0)continue;const i=e.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Tt(`Invalid query segment '${e}' in query '${n}'`)}return t}const wl=function(n,t){const e=Cg(n),i=e.namespace;e.domain==="firebase.com"&&Te(e.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&e.domain!=="localhost"&&Te("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),e.secure||t_();const s=e.scheme==="ws"||e.scheme==="wss";return{repoInfo:new h_(e.host,e.secure,i,s,t,"",i!==e.subdomain),path:new W(e.pathString)}},Cg=function(n){let t="",e="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),t=n.substring(0,Math.min(u,h)),u<h&&(s=wg(n.substring(u,h)));const d=Ag(n.substring(Math.min(n.length,h)));c=t.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if(f.toLowerCase()==="localhost")e="localhost";else if(f.split(".").length<=2)e=f;else{const m=t.indexOf(".");i=t.substring(0,m).toLowerCase(),e=t.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:e,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,e,i,s){this._repo=t,this._path=e,this._queryParams=i,this._orderByCalled=s}get key(){return b(this._path)?null:iu(this._path)}get ref(){return new hn(this._repo,this._path)}get _queryIdentifier(){const t=ll(this._queryParams),e=mo(t);return e==="{}"?"default":e}get _queryObject(){return ll(this._queryParams)}isEqual(t){if(t=Ke(t),!(t instanceof Mo))return!1;const e=this._repo===t._repo,i=ou(this._path,t._path),s=this._queryIdentifier===t._queryIdentifier;return e&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+L_(this._path)}}class hn extends Mo{constructor(t,e){super(t,e,new Io,!1)}get parent(){const t=ru(this._path);return t===null?null:new hn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}jm(hn);Wm(hn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="FIREBASE_DATABASE_EMULATOR_HOST",Fr={};let Rg=!1;function Pg(n,t,e,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Te("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=wl(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Sg]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=wl(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Rr(Rr.OWNER):new u_(n.name,n.options,t);og("Invalid Firebase Database URL",o),b(o.path)||Te("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Ng(a,n,u,new c_(n.name,e));return new Dg(h,n)}function bg(n,t){const e=Fr[t];(!e||e[n.key]!==n)&&Te(`Database ${t}(${n.repoInfo_}) has already been deleted.`),Eg(n),delete e[n.key]}function Ng(n,t,e,i){let s=Fr[t.name];s||(s={},Fr[t.name]=s);let r=s[n.toURLString()];return r&&Te("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new fg(n,Rg,e,i),s[n.toURLString()]=r,r}class Dg{constructor(t,e){this._repoInternal=t,this.app=e,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hn(this._repo,F())),this._rootInternal}_delete(){return this._rootInternal!==null&&(bg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Te("Cannot call "+t+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(n){Qp(Dc),jn(new Qe("database",(t,{instanceIdentifier:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return Pg(i,s,r,e)},"PUBLIC").setMultipleInstances(!0)),ee($a,za,n),ee($a,za,"esm2017")}Ht.prototype.simpleListen=function(n,t){this.sendRequest("q",{p:n},t)};Ht.prototype.echo=function(n,t){this.sendRequest("echo",{d:n},t)};kg();var Vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,Lo=Lo||{},C=Vg||self;function Ts(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function fi(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function xg(n){return Object.prototype.hasOwnProperty.call(n,or)&&n[or]||(n[or]=++Og)}var or="closure_uid_"+(1e9*Math.random()>>>0),Og=0;function Mg(n,t,e){return n.call.apply(n.bind,arguments)}function Lg(n,t,e){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(t,s)}}return function(){return n.apply(t,arguments)}}function mt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=Mg:mt=Lg,mt.apply(null,arguments)}function Di(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var i=e.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function nt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function le(){this.s=this.s,this.o=this.o}var Fg=0;le.prototype.s=!1;le.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Fg!=0)&&xg(this)};le.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zu=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Fo(n){const t=n.length;if(0<t){const e=Array(t);for(let i=0;i<t;i++)e[i]=n[i];return e}return[]}function Al(n,t){for(let e=1;e<arguments.length;e++){const i=arguments[e];if(Ts(i)){const s=n.length||0,r=i.length||0;n.length=s+r;for(let o=0;o<r;o++)n[s+o]=i[o]}else n.push(i)}}function gt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var Ug=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};C.addEventListener("test",e,t),C.removeEventListener("test",e,t)}catch{}return n}();function Hn(n){return/^[\s\xa0]*$/.test(n)}function Is(){var n=C.navigator;return n&&(n=n.userAgent)?n:""}function xt(n){return Is().indexOf(n)!=-1}function Uo(n){return Uo[" "](n),n}Uo[" "]=function(){};function Bg(n,t){var e=ky;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var qg=xt("Opera"),Je=xt("Trident")||xt("MSIE"),Hu=xt("Edge"),Ur=Hu||Je,Gu=xt("Gecko")&&!(Is().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge"))&&!(xt("Trident")||xt("MSIE"))&&!xt("Edge"),jg=Is().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge");function Ku(){var n=C.document;return n?n.documentMode:void 0}var Br;t:{var ar="",lr=function(){var n=Is();if(Gu)return/rv:([^\);]+)(\)|;)/.exec(n);if(Hu)return/Edge\/([\d\.]+)/.exec(n);if(Je)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(jg)return/WebKit\/(\S+)/.exec(n);if(qg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(lr&&(ar=lr?lr[1]:""),Je){var cr=Ku();if(cr!=null&&cr>parseFloat(ar)){Br=String(cr);break t}}Br=ar}var qr;if(C.document&&Je){var Cl=Ku();qr=Cl||parseInt(Br,10)||void 0}else qr=void 0;var Wg=qr;function Gn(n,t){if(gt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Gu){t:{try{Uo(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:$g[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Gn.$.h.call(this)}}nt(Gn,gt);var $g={2:"touch",3:"pen",4:"mouse"};Gn.prototype.h=function(){Gn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var pi="closure_listenable_"+(1e6*Math.random()|0),zg=0;function Hg(n,t,e,i,s){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!i,this.la=s,this.key=++zg,this.fa=this.ia=!1}function ws(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Bo(n,t,e){for(const i in n)t.call(e,n[i],i,n)}function Gg(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Qu(n){const t={};for(const e in n)t[e]=n[e];return t}const Sl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yu(n,t){let e,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(e in i)n[e]=i[e];for(let r=0;r<Sl.length;r++)e=Sl[r],Object.prototype.hasOwnProperty.call(i,e)&&(n[e]=i[e])}}function As(n){this.src=n,this.g={},this.h=0}As.prototype.add=function(n,t,e,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Wr(n,t,i,s);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Hg(t,this.src,r,!!i,s),t.ia=e,n.push(t)),t};function jr(n,t){var e=t.type;if(e in n.g){var i=n.g[e],s=zu(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ws(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Wr(n,t,e,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.fa&&r.listener==t&&r.capture==!!e&&r.la==i)return s}return-1}var qo="closure_lm_"+(1e6*Math.random()|0),ur={};function Xu(n,t,e,i,s){if(i&&i.once)return Zu(n,t,e,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Xu(n,t[r],e,i,s);return null}return e=$o(e),n&&n[pi]?n.O(t,e,fi(i)?!!i.capture:!!i,s):Ju(n,t,e,!1,i,s)}function Ju(n,t,e,i,s,r){if(!t)throw Error("Invalid event type");var o=fi(s)?!!s.capture:!!s,a=Wo(n);if(a||(n[qo]=a=new As(n)),e=a.add(t,e,i,o,r),e.proxy)return e;if(i=Kg(),e.proxy=i,i.src=n,i.listener=e,n.addEventListener)Ug||(s=o),s===void 0&&(s=!1),n.addEventListener(t.toString(),i,s);else if(n.attachEvent)n.attachEvent(eh(t.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Kg(){function n(e){return t.call(n.src,n.listener,e)}const t=Qg;return n}function Zu(n,t,e,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Zu(n,t[r],e,i,s);return null}return e=$o(e),n&&n[pi]?n.P(t,e,fi(i)?!!i.capture:!!i,s):Ju(n,t,e,!0,i,s)}function th(n,t,e,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)th(n,t[r],e,i,s);else i=fi(i)?!!i.capture:!!i,e=$o(e),n&&n[pi]?(n=n.i,t=String(t).toString(),t in n.g&&(r=n.g[t],e=Wr(r,e,i,s),-1<e&&(ws(r[e]),Array.prototype.splice.call(r,e,1),r.length==0&&(delete n.g[t],n.h--)))):n&&(n=Wo(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Wr(t,e,i,s)),(e=-1<n?t[n]:null)&&jo(e))}function jo(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[pi])jr(t.i,n);else{var e=n.type,i=n.proxy;t.removeEventListener?t.removeEventListener(e,i,n.capture):t.detachEvent?t.detachEvent(eh(e),i):t.addListener&&t.removeListener&&t.removeListener(i),(e=Wo(t))?(jr(e,n),e.h==0&&(e.src=null,t[qo]=null)):ws(n)}}}function eh(n){return n in ur?ur[n]:ur[n]="on"+n}function Qg(n,t){if(n.fa)n=!0;else{t=new Gn(t,this);var e=n.listener,i=n.la||n.src;n.ia&&jo(n),n=e.call(i,t)}return n}function Wo(n){return n=n[qo],n instanceof As?n:null}var hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function $o(n){return typeof n=="function"?n:(n[hr]||(n[hr]=function(t){return n.handleEvent(t)}),n[hr])}function et(){le.call(this),this.i=new As(this),this.S=this,this.J=null}nt(et,le);et.prototype[pi]=!0;et.prototype.removeEventListener=function(n,t,e,i){th(this,n,t,e,i)};function lt(n,t){var e,i=n.J;if(i)for(e=[];i;i=i.J)e.push(i);if(n=n.S,i=t.type||t,typeof t=="string")t=new gt(t,n);else if(t instanceof gt)t.target=t.target||n;else{var s=t;t=new gt(i,n),Yu(t,s)}if(s=!0,e)for(var r=e.length-1;0<=r;r--){var o=t.g=e[r];s=ki(o,i,!0,t)&&s}if(o=t.g=n,s=ki(o,i,!0,t)&&s,s=ki(o,i,!1,t)&&s,e)for(r=0;r<e.length;r++)o=t.g=e[r],s=ki(o,i,!1,t)&&s}et.prototype.N=function(){if(et.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],i=0;i<e.length;i++)ws(e[i]);delete n.g[t],n.h--}}this.J=null};et.prototype.O=function(n,t,e,i){return this.i.add(String(n),t,!1,e,i)};et.prototype.P=function(n,t,e,i){return this.i.add(String(n),t,!0,e,i)};function ki(n,t,e,i){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&jr(n.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var zo=C.JSON.stringify;class Yg{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Xg(){var n=Ho;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Jg{constructor(){this.h=this.g=null}add(t,e){const i=nh.get();i.set(t,e),this.h?this.h.next=i:this.g=i,this.h=i}}var nh=new Yg(()=>new Zg,n=>n.reset());class Zg{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function ty(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function ey(n){C.setTimeout(()=>{throw n},0)}let Kn,Qn=!1,Ho=new Jg,ih=()=>{const n=C.Promise.resolve(void 0);Kn=()=>{n.then(ny)}};var ny=()=>{for(var n;n=Xg();){try{n.h.call(n.g)}catch(e){ey(e)}var t=nh;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}Qn=!1};function Cs(n,t){et.call(this),this.h=n||1,this.g=t||C,this.j=mt(this.qb,this),this.l=Date.now()}nt(Cs,et);E=Cs.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),lt(this,"tick"),this.ga&&(Go(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Go(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}E.N=function(){Cs.$.N.call(this),Go(this),delete this.g};function Ko(n,t,e){if(typeof n=="function")e&&(n=mt(n,e));else if(n&&typeof n.handleEvent=="function")n=mt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:C.setTimeout(n,t||0)}function sh(n){n.g=Ko(()=>{n.g=null,n.i&&(n.i=!1,sh(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class iy extends le{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:sh(this)}N(){super.N(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yn(n){le.call(this),this.h=n,this.g={}}nt(Yn,le);var Rl=[];function rh(n,t,e,i){Array.isArray(e)||(e&&(Rl[0]=e.toString()),e=Rl);for(var s=0;s<e.length;s++){var r=Xu(t,e[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function oh(n){Bo(n.g,function(t,e){this.g.hasOwnProperty(e)&&jo(t)},n),n.g={}}Yn.prototype.N=function(){Yn.$.N.call(this),oh(this)};Yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ss(){this.g=!0}Ss.prototype.Ea=function(){this.g=!1};function sy(n,t,e,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+e+`
`+o})}function ry(n,t,e,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+e+`
`+r+" "+o})}function qe(n,t,e,i){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+ay(n,e)+(i?" "+i:"")})}function oy(n,t){n.info(function(){return"TIMEOUT: "+t})}Ss.prototype.info=function(){};function ay(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var i=e[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return zo(e)}catch{return t}}var Ne={},Pl=null;function Rs(){return Pl=Pl||new et}Ne.Ta="serverreachability";function ah(n){gt.call(this,Ne.Ta,n)}nt(ah,gt);function Xn(n){const t=Rs();lt(t,new ah(t))}Ne.STAT_EVENT="statevent";function lh(n,t){gt.call(this,Ne.STAT_EVENT,n),this.stat=t}nt(lh,gt);function Et(n){const t=Rs();lt(t,new lh(t,n))}Ne.Ua="timingevent";function ch(n,t){gt.call(this,Ne.Ua,n),this.size=t}nt(ch,gt);function _i(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){n()},t)}var Ps={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},uh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qo(){}Qo.prototype.h=null;function bl(n){return n.h||(n.h=n.i())}function hh(){}var mi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yo(){gt.call(this,"d")}nt(Yo,gt);function Xo(){gt.call(this,"c")}nt(Xo,gt);var $r;function bs(){}nt(bs,Qo);bs.prototype.g=function(){return new XMLHttpRequest};bs.prototype.i=function(){return{}};$r=new bs;function gi(n,t,e,i){this.l=n,this.j=t,this.m=e,this.W=i||1,this.U=new Yn(this),this.P=ly,n=Ur?125:void 0,this.V=new Cs(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dh}function dh(){this.i=null,this.g="",this.h=!1}var ly=45e3,fh={},zr={};E=gi.prototype;E.setTimeout=function(n){this.P=n};function Hr(n,t,e){n.L=1,n.A=Ds(Qt(t)),n.u=e,n.S=!0,ph(n,null)}function ph(n,t){n.G=Date.now(),yi(n),n.B=Qt(n.A);var e=n.B,i=n.W;Array.isArray(i)||(i=[String(i)]),Ih(e.i,"t",i),n.o=0,e=n.l.J,n.h=new dh,n.g=Wh(n.l,e?t:null,!n.u),0<n.O&&(n.M=new iy(mt(n.Pa,n,n.g),n.O)),rh(n.U,n.g,"readystatechange",n.nb),t=n.I?Qu(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),Xn(),sy(n.j,n.v,n.B,n.m,n.W,n.u)}E.nb=function(n){n=n.target;const t=this.M;t&&Lt(n)==3?t.l():this.Pa(n)};E.Pa=function(n){try{if(n==this.g)t:{const u=Lt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ur||this.g&&(this.h.h||this.g.ja()||Vl(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Xn(3):Xn(2)),Ns(this);var e=this.g.da();this.ca=e;e:if(_h(this)){var i=Vl(this.g);n="";var s=i.length,r=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pe(this),xn(this);var o="";break e}this.h.i=new C.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,n+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,ry(this.j,this.v,this.B,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hn(a)){var c=a;break e}}c=null}if(e=c)qe(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gr(this,e);else{this.i=!1,this.s=3,Et(12),pe(this),xn(this);break t}}this.S?(mh(this,u,o),Ur&&this.i&&u==3&&(rh(this.U,this.V,"tick",this.mb),this.V.start())):(qe(this.j,this.m,o,null),Gr(this,o)),u==4&&pe(this),this.i&&!this.J&&(u==4?Uh(this.l,this):(this.i=!1,yi(this)))}else by(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),pe(this),xn(this)}}}catch{}finally{}};function _h(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function mh(n,t,e){let i=!0,s;for(;!n.J&&n.o<e.length;)if(s=cy(n,e),s==zr){t==4&&(n.s=4,Et(14),i=!1),qe(n.j,n.m,null,"[Incomplete Response]");break}else if(s==fh){n.s=4,Et(15),qe(n.j,n.m,e,"[Invalid Chunk]"),i=!1;break}else qe(n.j,n.m,s,null),Gr(n,s);_h(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,Et(16),i=!1),n.i=n.i&&i,i?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),ia(t),t.M=!0,Et(11))):(qe(n.j,n.m,e,"[Invalid Chunked Response]"),pe(n),xn(n))}E.mb=function(){if(this.g){var n=Lt(this.g),t=this.g.ja();this.o<t.length&&(Ns(this),mh(this,n,t),this.i&&n!=4&&yi(this))}};function cy(n,t){var e=n.o,i=t.indexOf(`
`,e);return i==-1?zr:(e=Number(t.substring(e,i)),isNaN(e)?fh:(i+=1,i+e>t.length?zr:(t=t.slice(i,i+e),n.o=i+e,t)))}E.cancel=function(){this.J=!0,pe(this)};function yi(n){n.Y=Date.now()+n.P,gh(n,n.P)}function gh(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=_i(mt(n.lb,n),t)}function Ns(n){n.C&&(C.clearTimeout(n.C),n.C=null)}E.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(oy(this.j,this.B),this.L!=2&&(Xn(),Et(17)),pe(this),this.s=2,xn(this)):gh(this,this.Y-n)};function xn(n){n.l.H==0||n.J||Uh(n.l,n)}function pe(n){Ns(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Go(n.V),oh(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Gr(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Kr(e.i,n))){if(!n.K&&Kr(e.i,n)&&e.H==3){try{var i=e.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)is(e),Os(e);else break t;na(e),Et(18)}}else e.Fa=s[1],0<e.Fa-e.V&&37500>s[2]&&e.G&&e.A==0&&!e.v&&(e.v=_i(mt(e.ib,e),6e3));if(1>=Ch(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else _e(e,11)}else if((n.K||e.g==n)&&is(e),!Hn(t))for(s=e.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const u=c[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,e.L=i,e.l.info("backChannelRequestTimeoutMs_="+i)),i=e;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Jo(r,r.h),r.h=null))}if(i.F){const T=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(i.Da=T,j(i.I,i.F,T))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),i=e;var o=n;if(i.wa=jh(i,i.J?i.pa:null,i.Y),o.K){Sh(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.C&&(Ns(a),yi(a)),i.g=o}else Lh(i);0<e.j.length&&Ms(e)}else c[0]!="stop"&&c[0]!="close"||_e(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?_e(e,7):ea(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}Xn(4)}catch{}}function uy(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Ts(n)){for(var t=[],e=n.length,i=0;i<e;i++)t.push(n[i]);return t}t=[],e=0;for(i in n)t[e++]=n[i];return t}function hy(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Ts(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const i in n)t[e++]=i;return t}}}function yh(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Ts(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=hy(n),i=uy(n),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],e&&e[r],n)}var Eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dy(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var i=n[e].indexOf("="),s=null;if(0<=i){var r=n[e].substring(0,i);s=n[e].substring(i+1)}else r=n[e];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ee(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Ee){this.h=n.h,es(this,n.j),this.s=n.s,this.g=n.g,ns(this,n.m),this.l=n.l;var t=n.i,e=new Jn;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Nl(this,e),this.o=n.o}else n&&(t=String(n).match(Eh))?(this.h=!1,es(this,t[1]||"",!0),this.s=Sn(t[2]||""),this.g=Sn(t[3]||"",!0),ns(this,t[4]),this.l=Sn(t[5]||"",!0),Nl(this,t[6]||"",!0),this.o=Sn(t[7]||"")):(this.h=!1,this.i=new Jn(null,this.h))}Ee.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Rn(t,Dl,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Rn(t,Dl,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Rn(e,e.charAt(0)=="/"?_y:py,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Rn(e,gy)),n.join("")};function Qt(n){return new Ee(n)}function es(n,t,e){n.j=e?Sn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function ns(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Nl(n,t,e){t instanceof Jn?(n.i=t,yy(n.i,n.h)):(e||(t=Rn(t,my)),n.i=new Jn(t,n.h))}function j(n,t,e){n.i.set(t,e)}function Ds(n){return j(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Sn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Rn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,fy),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function fy(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Dl=/[#\/\?@]/g,py=/[#\?:]/g,_y=/[#\?]/g,my=/[#\?@]/g,gy=/#/g;function Jn(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function ce(n){n.g||(n.g=new Map,n.h=0,n.i&&dy(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}E=Jn.prototype;E.add=function(n,t){ce(this),this.i=null,n=dn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function vh(n,t){ce(n),t=dn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Th(n,t){return ce(n),t=dn(n,t),n.g.has(t)}E.forEach=function(n,t){ce(this),this.g.forEach(function(e,i){e.forEach(function(s){n.call(t,s,i,this)},this)},this)};E.ta=function(){ce(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let i=0;i<t.length;i++){const s=n[i];for(let r=0;r<s.length;r++)e.push(t[i])}return e};E.Z=function(n){ce(this);let t=[];if(typeof n=="string")Th(this,n)&&(t=t.concat(this.g.get(dn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};E.set=function(n,t){return ce(this),this.i=null,n=dn(this,n),Th(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};E.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Ih(n,t,e){vh(n,t),0<e.length&&(n.i=null,n.g.set(dn(n,t),Fo(e)),n.h+=e.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var i=t[e];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),n.push(s)}}return this.i=n.join("&")};function dn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function yy(n,t){t&&!n.j&&(ce(n),n.i=null,n.g.forEach(function(e,i){var s=i.toLowerCase();i!=s&&(vh(this,i),Ih(this,s,e))},n)),n.j=t}var Ey=class{constructor(n,t){this.g=n,this.map=t}};function wh(n){this.l=n||vy,C.PerformanceNavigationTiming?(n=C.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(C.g&&C.g.Ka&&C.g.Ka()&&C.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vy=10;function Ah(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Ch(n){return n.h?1:n.g?n.g.size:0}function Kr(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Jo(n,t){n.g?n.g.add(t):n.h=t}function Sh(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}wh.prototype.cancel=function(){if(this.i=Rh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Rh(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Fo(n.i)}var Ty=class{stringify(n){return C.JSON.stringify(n,void 0)}parse(n){return C.JSON.parse(n,void 0)}};function Iy(){this.g=new Ty}function wy(n,t,e){const i=e||"";try{yh(n,function(s,r){let o=s;fi(s)&&(o=zo(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function Ay(n,t){const e=new Ss;if(C.Image){const i=new Image;i.onload=Di(Vi,e,i,"TestLoadImage: loaded",!0,t),i.onerror=Di(Vi,e,i,"TestLoadImage: error",!1,t),i.onabort=Di(Vi,e,i,"TestLoadImage: abort",!1,t),i.ontimeout=Di(Vi,e,i,"TestLoadImage: timeout",!1,t),C.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else t(!1)}function Vi(n,t,e,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function ks(n){this.l=n.ec||null,this.j=n.ob||!1}nt(ks,Qo);ks.prototype.g=function(){return new Vs(this.l,this.j)};ks.prototype.i=function(n){return function(){return n}}({});function Vs(n,t){et.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Zo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Vs,et);var Zo=0;E=Vs.prototype;E.open=function(n,t){if(this.readyState!=Zo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,Zn(this)};E.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||C).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=Zo};E.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ph(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Ph(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}E.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Ei(this):Zn(this),this.readyState==3&&Ph(this)}};E.Za=function(n){this.g&&(this.response=this.responseText=n,Ei(this))};E.Ya=function(n){this.g&&(this.response=n,Ei(this))};E.ka=function(){this.g&&Ei(this)};function Ei(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Zn(n)}E.setRequestHeader=function(n,t){this.v.append(n,t)};E.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function Zn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Cy=C.JSON.parse;function G(n){et.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=bh,this.L=this.M=!1}nt(G,et);var bh="",Sy=/^https?$/i,Ry=["POST","PUT"];E=G.prototype;E.Oa=function(n){this.M=n};E.ha=function(n,t,e,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$r.g(),this.C=this.u?bl(this.u):bl($r),this.g.onreadystatechange=mt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(r){kl(this,r);return}if(n=e||"",e=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)e.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())e.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(e.keys()).find(r=>r.toLowerCase()=="content-type"),s=C.FormData&&n instanceof C.FormData,!(0<=zu(Ry,t))||i||s||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of e)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{kh(this),0<this.B&&((this.L=Py(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.ua,this)):this.A=Ko(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){kl(this,r)}};function Py(n){return Je&&typeof n.timeout=="number"&&n.ontimeout!==void 0}E.ua=function(){typeof Lo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function kl(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Nh(n),xs(n)}function Nh(n){n.F||(n.F=!0,lt(n,"complete"),lt(n,"error"))}E.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,lt(this,"complete"),lt(this,"abort"),xs(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xs(this,!0)),G.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?Dh(this):this.kb())};E.kb=function(){Dh(this)};function Dh(n){if(n.h&&typeof Lo<"u"&&(!n.C[1]||Lt(n)!=4||n.da()!=2)){if(n.v&&Lt(n)==4)Ko(n.La,0,n);else if(lt(n,"readystatechange"),Lt(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var i;if(i=o===0){var s=String(n.I).match(Eh)[1]||null;!s&&C.self&&C.self.location&&(s=C.self.location.protocol.slice(0,-1)),i=!Sy.test(s?s.toLowerCase():"")}e=i}if(e)lt(n,"complete"),lt(n,"success");else{n.m=6;try{var r=2<Lt(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",Nh(n)}}finally{xs(n)}}}}function xs(n,t){if(n.g){kh(n);const e=n.g,i=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||lt(n,"ready");try{e.onreadystatechange=i}catch{}}}function kh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(C.clearTimeout(n.A),n.A=null)}E.isActive=function(){return!!this.g};function Lt(n){return n.g?n.g.readyState:0}E.da=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Cy(t)}};function Vl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case bh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function by(n){const t={};n=(n.g&&2<=Lt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<n.length;i++){if(Hn(n[i]))continue;var e=ty(n[i]);const s=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const r=t[s]||[];t[s]=r,r.push(e)}Gg(t,function(i){return i.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vh(n){let t="";return Bo(n,function(e,i){t+=i,t+=":",t+=e,t+=`\r
`}),t}function ta(n,t,e){t:{for(i in e){var i=!1;break t}i=!0}i||(e=Vh(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):j(n,t,e))}function In(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function xh(n){this.Ga=0,this.j=[],this.l=new Ss,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=In("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=In("baseRetryDelayMs",5e3,n),this.hb=In("retryDelaySeedMs",1e4,n),this.eb=In("forwardChannelMaxRetries",2,n),this.xa=In("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new wh(n&&n.concurrentRequestLimit),this.Ja=new Iy,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=xh.prototype;E.ra=8;E.H=1;function ea(n){if(Oh(n),n.H==3){var t=n.W++,e=Qt(n.I);if(j(e,"SID",n.K),j(e,"RID",t),j(e,"TYPE","terminate"),vi(n,e),t=new gi(n,n.l,t),t.L=2,t.A=Ds(Qt(e)),e=!1,C.navigator&&C.navigator.sendBeacon)try{e=C.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&C.Image&&(new Image().src=t.A,e=!0),e||(t.g=Wh(t.l,null),t.g.ha(t.A)),t.G=Date.now(),yi(t)}qh(n)}function Os(n){n.g&&(ia(n),n.g.cancel(),n.g=null)}function Oh(n){Os(n),n.u&&(C.clearTimeout(n.u),n.u=null),is(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&C.clearTimeout(n.m),n.m=null)}function Ms(n){if(!Ah(n.i)&&!n.m){n.m=!0;var t=n.Na;Kn||ih(),Qn||(Kn(),Qn=!0),Ho.add(t,n),n.C=0}}function Ny(n,t){return Ch(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=_i(mt(n.Na,n,t),Bh(n,n.C)),n.C++,!0)}E.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new gi(this,this.l,n);let r=this.s;if(this.U&&(r?(r=Qu(r),Yu(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var i=this.j[e];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Mh(this,s,t),e=Qt(this.I),j(e,"RID",n),j(e,"CVER",22),this.F&&j(e,"X-HTTP-Session-Id",this.F),vi(this,e),r&&(this.O?t="headers="+encodeURIComponent(String(Vh(r)))+"&"+t:this.o&&ta(e,this.o,r)),Jo(this.i,s),this.bb&&j(e,"TYPE","init"),this.P?(j(e,"$req",t),j(e,"SID","null"),s.aa=!0,Hr(s,e,null)):Hr(s,e,t),this.H=2}}else this.H==3&&(n?xl(this,n):this.j.length==0||Ah(this.i)||xl(this))};function xl(n,t){var e;t?e=t.m:e=n.W++;const i=Qt(n.I);j(i,"SID",n.K),j(i,"RID",e),j(i,"AID",n.V),vi(n,i),n.o&&n.s&&ta(i,n.o,n.s),e=new gi(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Mh(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Jo(n.i,e),Hr(e,i,t)}function vi(n,t){n.na&&Bo(n.na,function(e,i){j(t,i,e)}),n.h&&yh({},function(e,i){j(t,i,e)})}function Mh(n,t,e){e=Math.min(n.j.length,e);var i=n.h?mt(n.h.Va,n.h,n):null;t:{var s=n.j;let r=-1;for(;;){const o=["count="+e];r==-1?0<e?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<e;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{wy(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,i}function Lh(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;Kn||ih(),Qn||(Kn(),Qn=!0),Ho.add(t,n),n.A=0}}function na(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=_i(mt(n.Ma,n),Bh(n,n.A)),n.A++,!0)}E.Ma=function(){if(this.u=null,Fh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=_i(mt(this.jb,this),n)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Et(10),Os(this),Fh(this))};function ia(n){n.B!=null&&(C.clearTimeout(n.B),n.B=null)}function Fh(n){n.g=new gi(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Qt(n.wa);j(t,"RID","rpc"),j(t,"SID",n.K),j(t,"AID",n.V),j(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&j(t,"TO",n.qa),j(t,"TYPE","xmlhttp"),vi(n,t),n.o&&n.s&&ta(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=Ds(Qt(t)),e.u=null,e.S=!0,ph(e,n)}E.ib=function(){this.v!=null&&(this.v=null,Os(this),na(this),Et(19))};function is(n){n.v!=null&&(C.clearTimeout(n.v),n.v=null)}function Uh(n,t){var e=null;if(n.g==t){is(n),ia(n),n.g=null;var i=2}else if(Kr(n.i,t))e=t.F,Sh(n.i,t),i=1;else return;if(n.H!=0){if(t.i)if(i==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var s=n.C;i=Rs(),lt(i,new ch(i,e)),Ms(n)}else Lh(n);else if(s=t.s,s==3||s==0&&0<t.ca||!(i==1&&Ny(n,t)||i==2&&na(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),s){case 1:_e(n,5);break;case 4:_e(n,10);break;case 3:_e(n,6);break;default:_e(n,2)}}}function Bh(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function _e(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var i=mt(n.pb,n);e||(e=new Ee("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||es(e,"https"),Ds(e)),Ay(e.toString(),i)}else Et(2);n.H=0,n.h&&n.h.za(t),qh(n),Oh(n)}E.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Et(2)):(this.l.info("Failed to ping google.com"),Et(1))};function qh(n){if(n.H=0,n.ma=[],n.h){const t=Rh(n.i);(t.length!=0||n.j.length!=0)&&(Al(n.ma,t),Al(n.ma,n.j),n.i.i.length=0,Fo(n.j),n.j.length=0),n.h.ya()}}function jh(n,t,e){var i=e instanceof Ee?Qt(e):new Ee(e);if(i.g!="")t&&(i.g=t+"."+i.g),ns(i,i.m);else{var s=C.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new Ee(null);i&&es(r,i),t&&(r.g=t),s&&ns(r,s),e&&(r.l=e),i=r}return e=n.F,t=n.Da,e&&t&&j(i,e,t),j(i,"VER",n.ra),vi(n,i),i}function Wh(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new G(new ks({ob:e})):new G(n.va),t.Oa(n.J),t}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function $h(){}E=$h.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function ss(){if(Je&&!(10<=Number(Wg)))throw Error("Environmental error: no available transport.")}ss.prototype.g=function(n,t){return new wt(n,t)};function wt(n,t){et.call(this),this.g=new xh(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Hn(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Hn(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new fn(this)}nt(wt,et);wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Et(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=jh(n,null,n.Y),Ms(n)};wt.prototype.close=function(){ea(this.g)};wt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=zo(n),n=e);t.j.push(new Ey(t.fb++,n)),t.H==3&&Ms(t)};wt.prototype.N=function(){this.g.h=null,delete this.j,ea(this.g),delete this.g,wt.$.N.call(this)};function zh(n){Yo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}nt(zh,Yo);function Hh(){Xo.call(this),this.status=1}nt(Hh,Xo);function fn(n){this.g=n}nt(fn,$h);fn.prototype.Ba=function(){lt(this.g,"a")};fn.prototype.Aa=function(n){lt(this.g,new zh(n))};fn.prototype.za=function(n){lt(this.g,new Hh)};fn.prototype.ya=function(){lt(this.g,"b")};function Dy(){this.blockSize=-1}function Vt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt(Vt,Dy);Vt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function dr(n,t,e){e||(e=0);var i=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)i[s]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(s=0;16>s;++s)i[s]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],s=n.g[2];var r=n.g[3],o=t+(r^e&(s^r))+i[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=r+(s^t&(e^s))+i[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(e^r&(t^e))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=e+(t^s&(r^t))+i[3]+3250441966&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(r^e&(s^r))+i[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=r+(s^t&(e^s))+i[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(e^r&(t^e))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=e+(t^s&(r^t))+i[7]+4249261313&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(r^e&(s^r))+i[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=r+(s^t&(e^s))+i[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(e^r&(t^e))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=e+(t^s&(r^t))+i[11]+2304563134&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(r^e&(s^r))+i[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=r+(s^t&(e^s))+i[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(e^r&(t^e))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=e+(t^s&(r^t))+i[15]+1236535329&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(s^r&(e^s))+i[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^s&(t^e))+i[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(r^t))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(s^r))+i[0]+3921069994&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(e^s))+i[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^s&(t^e))+i[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(r^t))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(s^r))+i[4]+3889429448&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(e^s))+i[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^s&(t^e))+i[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(r^t))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(s^r))+i[8]+1163531501&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(e^s))+i[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^s&(t^e))+i[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(r^t))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(s^r))+i[12]+2368359562&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(e^s^r)+i[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^s)+i[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^e)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=e+(s^r^t)+i[14]+4259657740&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^r)+i[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^s)+i[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^e)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=e+(s^r^t)+i[10]+3200236656&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^r)+i[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^s)+i[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^e)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=e+(s^r^t)+i[6]+76029189&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^r)+i[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^s)+i[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^e)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=e+(s^r^t)+i[2]+3299628645&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(s^(e|~r))+i[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~s))+i[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~e))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=e+(r^(s|~t))+i[5]+4237533241&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~r))+i[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~s))+i[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~e))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=e+(r^(s|~t))+i[1]+2240044497&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~r))+i[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~s))+i[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~e))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=e+(r^(s|~t))+i[13]+1309151649&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~r))+i[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~s))+i[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~e))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=e+(r^(s|~t))+i[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+r&4294967295}Vt.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(s==0)for(;r<=e;)dr(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<t;)if(i[s++]=n.charCodeAt(r++),s==this.blockSize){dr(this,i),s=0;break}}else for(;r<t;)if(i[s++]=n[r++],s==this.blockSize){dr(this,i),s=0;break}}this.h=s,this.i+=t};Vt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var i=0;32>i;i+=8)n[e++]=this.g[t]>>>i&255;return n};function M(n,t){this.h=t;for(var e=[],i=!0,s=n.length-1;0<=s;s--){var r=n[s]|0;i&&r==t||(e[s]=r,i=!1)}this.g=e}var ky={};function sa(n){return-128<=n&&128>n?Bg(n,function(t){return new M([t|0],0>t?-1:0)}):new M([n|0],0>n?-1:0)}function Ft(n){if(isNaN(n)||!isFinite(n))return $e;if(0>n)return rt(Ft(-n));for(var t=[],e=1,i=0;n>=e;i++)t[i]=n/e|0,e*=Qr;return new M(t,0)}function Gh(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return rt(Gh(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Ft(Math.pow(t,8)),i=$e,s=0;s<n.length;s+=8){var r=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+r),t);8>r?(r=Ft(Math.pow(t,r)),i=i.R(r).add(Ft(o))):(i=i.R(e),i=i.add(Ft(o)))}return i}var Qr=4294967296,$e=sa(0),Yr=sa(1),Ol=sa(16777216);E=M.prototype;E.ea=function(){if(At(this))return-rt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var i=this.D(e);n+=(0<=i?i:Qr+i)*t,t*=Qr}return n};E.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(zt(this))return"0";if(At(this))return"-"+rt(this).toString(n);for(var t=Ft(Math.pow(n,6)),e=this,i="";;){var s=os(e,t).g;e=rs(e,s.R(t));var r=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=s,zt(e))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};E.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function zt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function At(n){return n.h==-1}E.X=function(n){return n=rs(this,n),At(n)?-1:zt(n)?0:1};function rt(n){for(var t=n.g.length,e=[],i=0;i<t;i++)e[i]=~n.g[i];return new M(e,~n.h).add(Yr)}E.abs=function(){return At(this)?rt(this):this};E.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],i=0,s=0;s<=t;s++){var r=i+(this.D(s)&65535)+(n.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,e[s]=o<<16|r}return new M(e,e[e.length-1]&-2147483648?-1:0)};function rs(n,t){return n.add(rt(t))}E.R=function(n){if(zt(this)||zt(n))return $e;if(At(this))return At(n)?rt(this).R(rt(n)):rt(rt(this).R(n));if(At(n))return rt(this.R(rt(n)));if(0>this.X(Ol)&&0>n.X(Ol))return Ft(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],i=0;i<2*t;i++)e[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<n.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=n.D(s)>>>16,l=n.D(s)&65535;e[2*i+2*s]+=o*l,xi(e,2*i+2*s),e[2*i+2*s+1]+=r*l,xi(e,2*i+2*s+1),e[2*i+2*s+1]+=o*a,xi(e,2*i+2*s+1),e[2*i+2*s+2]+=r*a,xi(e,2*i+2*s+2)}for(i=0;i<t;i++)e[i]=e[2*i+1]<<16|e[2*i];for(i=t;i<2*t;i++)e[i]=0;return new M(e,0)};function xi(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function wn(n,t){this.g=n,this.h=t}function os(n,t){if(zt(t))throw Error("division by zero");if(zt(n))return new wn($e,$e);if(At(n))return t=os(rt(n),t),new wn(rt(t.g),rt(t.h));if(At(t))return t=os(n,rt(t)),new wn(rt(t.g),t.h);if(30<n.g.length){if(At(n)||At(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Yr,i=t;0>=i.X(n);)e=Ml(e),i=Ml(i);var s=Oe(e,1),r=Oe(i,1);for(i=Oe(i,2),e=Oe(e,2);!zt(i);){var o=r.add(i);0>=o.X(n)&&(s=s.add(e),r=o),i=Oe(i,1),e=Oe(e,1)}return t=rs(n,s.R(t)),new wn(s,t)}for(s=$e;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),i=Math.ceil(Math.log(e)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Ft(e),o=r.R(t);At(o)||0<o.X(n);)e-=i,r=Ft(e),o=r.R(t);zt(r)&&(r=Yr),s=s.add(r),n=rs(n,o)}return new wn(s,n)}E.gb=function(n){return os(this,n).h};E.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],i=0;i<t;i++)e[i]=this.D(i)&n.D(i);return new M(e,this.h&n.h)};E.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],i=0;i<t;i++)e[i]=this.D(i)|n.D(i);return new M(e,this.h|n.h)};E.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],i=0;i<t;i++)e[i]=this.D(i)^n.D(i);return new M(e,this.h^n.h)};function Ml(n){for(var t=n.g.length+1,e=[],i=0;i<t;i++)e[i]=n.D(i)<<1|n.D(i-1)>>>31;return new M(e,n.h)}function Oe(n,t){var e=t>>5;t%=32;for(var i=n.g.length-e,s=[],r=0;r<i;r++)s[r]=0<t?n.D(r+e)>>>t|n.D(r+e+1)<<32-t:n.D(r+e);return new M(s,n.h)}ss.prototype.createWebChannel=ss.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;Ps.NO_ERROR=0;Ps.TIMEOUT=8;Ps.HTTP_ERROR=6;uh.COMPLETE="complete";hh.EventType=mi;mi.OPEN="a";mi.CLOSE="b";mi.ERROR="c";mi.MESSAGE="d";et.prototype.listen=et.prototype.O;G.prototype.listenOnce=G.prototype.P;G.prototype.getLastError=G.prototype.Sa;G.prototype.getLastErrorCode=G.prototype.Ia;G.prototype.getStatus=G.prototype.da;G.prototype.getResponseJson=G.prototype.Wa;G.prototype.getResponseText=G.prototype.ja;G.prototype.send=G.prototype.ha;G.prototype.setWithCredentials=G.prototype.Oa;Vt.prototype.digest=Vt.prototype.l;Vt.prototype.reset=Vt.prototype.reset;Vt.prototype.update=Vt.prototype.j;M.prototype.add=M.prototype.add;M.prototype.multiply=M.prototype.R;M.prototype.modulo=M.prototype.gb;M.prototype.compare=M.prototype.X;M.prototype.toNumber=M.prototype.ea;M.prototype.toString=M.prototype.toString;M.prototype.getBits=M.prototype.D;M.fromNumber=Ft;M.fromString=Gh;var Vy=function(){return new ss},xy=function(){return Rs()},fr=Ps,Oy=uh,My=Ne,Ll={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Oi=hh,Ly=G,Fy=Vt,ze=M;const Fl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=new po("@firebase/firestore");function An(){return Ce.logLevel}function g(n,...t){if(Ce.logLevel<=D.DEBUG){const e=t.map(ra);Ce.debug(`Firestore (${pn}): ${n}`,...e)}}function qt(n,...t){if(Ce.logLevel<=D.ERROR){const e=t.map(ra);Ce.error(`Firestore (${pn}): ${n}`,...e)}}function Ze(n,...t){if(Ce.logLevel<=D.WARN){const e=t.map(ra);Ce.warn(`Firestore (${pn}): ${n}`,...e)}}function ra(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const t=`FIRESTORE (${pn}) INTERNAL ASSERTION FAILED: `+n;throw qt(t),new Error(t)}function U(n,t){n||A()}function R(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends ln{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Uy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ht.UNAUTHENTICATED))}shutdown(){}}class By{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class qy{constructor(t){this.t=t,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=l=>this.i!==i?(i=this.i,e(l)):Promise.resolve();let r=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Gt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Gt)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(U(typeof i.accessToken=="string"),new Kh(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string"),new ht(t)}}class jy{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Wy{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new jy(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $y{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zy{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=r=>{r.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(U(typeof e.token=="string"),this.R=e.token,new $y(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Hy(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<e&&(i+=t.charAt(s[r]%t.length))}return i}}function x(n,t){return n<t?-1:n>t?1:0}function tn(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new I(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new I(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new I(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new X(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new X(0,0))}static max(){return new S(new X(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,i){e===void 0?e=0:e>t.length&&A(),i===void 0?i=t.length-e:i>t.length-e&&A(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return ti.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ti?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const r=t.get(s),o=e.get(s);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends ti{construct(t,e,i){return new H(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new I(_.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Gy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends ti{construct(t,e,i){return new at(t,e,i)}static isValidIdentifier(t){return Gy.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const r=()=>{if(i.length===0)throw new I(_.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new I(_.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new I(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new I(_.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(H.fromString(t))}static fromName(t){return new w(H.fromString(t).popFirst(5))}static empty(){return new w(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new H(t.slice()))}}function Ky(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=S.fromTimestamp(i===1e9?new X(e+1,0):new X(e,i));return new re(s,w.empty(),t)}function Qy(n){return new re(n.readTime,n.key,-1)}class re{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new re(S.min(),w.empty(),-1)}static max(){return new re(S.max(),w.empty(),-1)}}function Yy(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=w.comparator(n.documentKey,t.documentKey),e!==0?e:x(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(n){if(n.code!==_.FAILED_PRECONDITION||n.message!==Xy)throw n;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new p((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(e,r).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof p?e:p.resolve(e)}catch(e){return p.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):p.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):p.reject(e)}static resolve(t){return new p((e,i)=>{e(t)})}static reject(t){return new p((e,i)=>{i(t)})}static waitFor(t){return new p((e,i)=>{let s=0,r=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&e()},l=>i(l))}),o=!0,r===s&&e()})}static or(t){let e=p.resolve(!1);for(const i of t)e=e.next(s=>s?p.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,r)=>{i.push(e.call(this,s,r))}),this.waitFor(i)}static mapArray(t,e){return new p((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;e(t[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(t,e){return new p((i,s)=>{const r=()=>{t()===!0?e().next(()=>{r()},s):i()};r()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Gt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new On(t,e.error)):this.V.resolve()},this.transaction.onerror=i=>{const s=aa(i.target.error);this.V.reject(new On(t,s))}}static open(t,e,i,s){try{return new oa(e,t.transaction(s,i))}catch(r){throw new On(e,r)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(g("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new tE(e)}}class me{constructor(t,e,i){this.name=t,this.version=e,this.p=i,me.S(Bn())===12.2&&qt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return g("SimpleDb","Removing database:",t),de(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Sc())return!1;if(me.C())return!0;const t=Bn(),e=me.S(t),i=0<e&&e<10,s=me.v(t),r=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||i||r)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(i)}static v(t){const e=t.match(/Android ([\d.]+)/i),i=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(i)}async O(t){return this.db||(g("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,i)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=r=>{const o=r.target.result;e(o)},s.onblocked=()=>{i(new On(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=r=>{const o=r.target.error;o.name==="VersionError"?i(new I(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?i(new I(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):i(new On(t,o))},s.onupgradeneeded=r=>{g("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.p.N(o,s.transaction,r.oldVersion,this.version).next(()=>{g("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,i,s){const r=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=oa.open(this.db,t,r?"readonly":"readwrite",i),l=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),p.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(g("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Zy{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return de(this.k.delete())}}class On extends I{constructor(t,e){super(_.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ii(n){return n.name==="IndexedDbTransactionError"}class tE{constructor(t){this.store=t}put(t,e){let i;return e!==void 0?(g("SimpleDb","PUT",this.store.name,t,e),i=this.store.put(e,t)):(g("SimpleDb","PUT",this.store.name,"<auto-key>",t),i=this.store.put(t)),de(i)}add(t){return g("SimpleDb","ADD",this.store.name,t,t),de(this.store.add(t))}get(t){return de(this.store.get(t)).next(e=>(e===void 0&&(e=null),g("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return g("SimpleDb","DELETE",this.store.name,t),de(this.store.delete(t))}count(){return g("SimpleDb","COUNT",this.store.name),de(this.store.count())}W(t,e){const i=this.options(t,e),s=i.index?this.store.index(i.index):this.store;if(typeof s.getAll=="function"){const r=s.getAll(i.range);return new p((o,a)=>{r.onerror=l=>{a(l.target.error)},r.onsuccess=l=>{o(l.target.result)}})}{const r=this.cursor(i),o=[];return this.G(r,(a,l)=>{o.push(l)}).next(()=>o)}}j(t,e){const i=this.store.getAll(t,e===null?void 0:e);return new p((s,r)=>{i.onerror=o=>{r(o.target.error)},i.onsuccess=o=>{s(o.target.result)}})}H(t,e){g("SimpleDb","DELETE ALL",this.store.name);const i=this.options(t,e);i.J=!1;const s=this.cursor(i);return this.G(s,(r,o,a)=>a.delete())}Y(t,e){let i;e?i=t:(i={},e=t);const s=this.cursor(i);return this.G(s,e)}Z(t){const e=this.cursor({});return new p((i,s)=>{e.onerror=r=>{const o=aa(r.target.error);s(o)},e.onsuccess=r=>{const o=r.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():i()}):i()}})}G(t,e){const i=[];return new p((s,r)=>{t.onerror=o=>{r(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new Zy(a),c=e(a.primaryKey,a.value,l);if(c instanceof p){const u=c.catch(h=>(l.done(),p.reject(h)));i.push(u)}l.isDone?s():l.$===null?a.continue():a.continue(l.$)}}).next(()=>p.waitFor(i))}options(t,e){let i;return t!==void 0&&(typeof t=="string"?i=t:e=t),{index:i,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const i=this.store.index(t.index);return t.J?i.openKeyCursor(t.range,e):i.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function de(n){return new p((t,e)=>{n.onsuccess=i=>{const s=i.target.result;t(s)},n.onerror=i=>{const s=aa(i.target.error);e(s)}})}let Ul=!1;function aa(n){const t=me.S(Bn());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const i=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ul||(Ul=!0,setTimeout(()=>{throw i},0)),i}}return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.se(i),this.oe=i=>e.writeSequenceNumber(i))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}la._e=-1;function Ls(n){return n==null}function as(n){return n===0&&1/n==-1/0}function eE(n){return typeof n=="number"&&Number.isInteger(n)&&!as(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function _n(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Yh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,e){this.comparator=t,this.root=e||st.EMPTY}insert(t,e){return new $(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new $(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Mi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Mi(this.root,t,this.comparator,!0)}}class Mi{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??st.RED,this.left=s??st.EMPTY,this.right=r??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,r){return new st(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return st.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,i,s,r){return this}insert(t,e,i){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.comparator=t,this.data=new $(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ql(this.data.getIterator())}getIteratorFrom(t){return new ql(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class ql{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new Dt([])}unionWith(t){let e=new ct(at.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Dt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return tn(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Xh("Invalid base64 string: "+r):r}}(t);return new yt(e)}static fromUint8Array(t){const e=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(t);return new yt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const nE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oe(n){if(U(!!n),typeof n=="string"){let t=0;const e=nE.exec(n);if(U(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Q(n.seconds),nanos:Q(n.nanos)}}function Q(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Se(n){return typeof n=="string"?yt.fromBase64String(n):yt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ua(n){const t=n.mapValue.fields.__previous_value__;return ca(t)?ua(t):t}function ei(n){const t=oe(n.mapValue.fields.__local_write_time__.timestampValue);return new X(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(t,e,i,s,r,o,a,l,c){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ni{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ni&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Re(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ca(n)?4:sE(n)?9007199254740991:10:A()}function jt(n,t){if(n===t)return!0;const e=Re(n);if(e!==Re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ei(n).isEqual(ei(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=oe(s.timestampValue),a=oe(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,r){return Se(s.bytesValue).isEqual(Se(r.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,r){return Q(s.geoPointValue.latitude)===Q(r.geoPointValue.latitude)&&Q(s.geoPointValue.longitude)===Q(r.geoPointValue.longitude)}(n,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Q(s.integerValue)===Q(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Q(s.doubleValue),a=Q(r.doubleValue);return o===a?as(o)===as(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return tn(n.arrayValue.values||[],t.arrayValue.values||[],jt);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(Bl(o)!==Bl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!jt(o[l],a[l])))return!1;return!0}(n,t);default:return A()}}function ii(n,t){return(n.values||[]).find(e=>jt(e,t))!==void 0}function en(n,t){if(n===t)return 0;const e=Re(n),i=Re(t);if(e!==i)return x(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return x(n.booleanValue,t.booleanValue);case 2:return function(r,o){const a=Q(r.integerValue||r.doubleValue),l=Q(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return jl(n.timestampValue,t.timestampValue);case 4:return jl(ei(n),ei(t));case 5:return x(n.stringValue,t.stringValue);case 6:return function(r,o){const a=Se(r),l=Se(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=x(a[c],l[c]);if(u!==0)return u}return x(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(r,o){const a=x(Q(r.latitude),Q(o.latitude));return a!==0?a:x(Q(r.longitude),Q(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=en(a[c],l[c]);if(u)return u}return x(a.length,l.length)}(n.arrayValue,t.arrayValue);case 10:return function(r,o){if(r===Li.mapValue&&o===Li.mapValue)return 0;if(r===Li.mapValue)return 1;if(o===Li.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=x(l[h],u[h]);if(d!==0)return d;const f=en(a[l[h]],c[u[h]]);if(f!==0)return f}return x(l.length,u.length)}(n.mapValue,t.mapValue);default:throw A()}}function jl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return x(n,t);const e=oe(n),i=oe(t),s=x(e.seconds,i.seconds);return s!==0?s:x(e.nanos,i.nanos)}function nn(n){return Xr(n)}function Xr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=oe(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Se(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return w.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const r of e.values||[])s?s=!1:i+=",",i+=Xr(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Xr(e.fields[o])}`;return s+"}"}(n.mapValue):A()}function Jr(n){return!!n&&"integerValue"in n}function ha(n){return!!n&&"arrayValue"in n}function Wl(n){return!!n&&"nullValue"in n}function $l(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Bi(n){return!!n&&"mapValue"in n}function Mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return _n(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Mn(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Mn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function sE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Bi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mn(e)}setAll(t){let e=at.emptyPath(),i={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,i,s),i={},s=[],e=a.popLast()}o?i[a.lastSegment()]=Mn(o):s.push(a.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,i,s)}delete(t){const e=this.field(t.popLast());Bi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Bi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){_n(e,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new Ct(Mn(this.value))}}function Jh(n){const t=[];return _n(n.fields,(e,i)=>{const s=new at([e]);if(Bi(i)){const r=Jh(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)}),new Dt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e,i,s,r,o,a){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new pt(t,0,S.min(),S.min(),S.min(),Ct.empty(),0)}static newFoundDocument(t,e,i,s){return new pt(t,1,e,S.min(),i,s,0)}static newNoDocument(t,e){return new pt(t,2,e,S.min(),S.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new pt(t,3,e,S.min(),S.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e){this.position=t,this.inclusive=e}}function zl(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const r=t[s],o=n.position[s];if(r.field.isKeyField()?i=w.comparator(w.fromName(o.referenceValue),e.key):i=en(o,e.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Hl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!jt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e="asc"){this.field=t,this.dir=e}}function rE(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{}class Y extends Zh{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new aE(t,e,i):e==="array-contains"?new uE(t,i):e==="in"?new hE(t,i):e==="not-in"?new dE(t,i):e==="array-contains-any"?new fE(t,i):new Y(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new lE(t,i):new cE(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(en(e,this.value)):e!==null&&Re(this.value)===Re(e)&&this.matchesComparison(en(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends Zh{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Wt(t,e)}matches(t){return td(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function td(n){return n.op==="and"}function ed(n){return oE(n)&&td(n)}function oE(n){for(const t of n.filters)if(t instanceof Wt)return!1;return!0}function Zr(n){if(n instanceof Y)return n.field.canonicalString()+n.op.toString()+nn(n.value);if(ed(n))return n.filters.map(t=>Zr(t)).join(",");{const t=n.filters.map(e=>Zr(e)).join(",");return`${n.op}(${t})`}}function nd(n,t){return n instanceof Y?function(i,s){return s instanceof Y&&i.op===s.op&&i.field.isEqual(s.field)&&jt(i.value,s.value)}(n,t):n instanceof Wt?function(i,s){return s instanceof Wt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&nd(o,s.filters[a]),!0):!1}(n,t):void A()}function id(n){return n instanceof Y?function(e){return`${e.field.canonicalString()} ${e.op} ${nn(e.value)}`}(n):n instanceof Wt?function(e){return e.op.toString()+" {"+e.getFilters().map(id).join(" ,")+"}"}(n):"Filter"}class aE extends Y{constructor(t,e,i){super(t,e,i),this.key=w.fromName(i.referenceValue)}matches(t){const e=w.comparator(t.key,this.key);return this.matchesComparison(e)}}class lE extends Y{constructor(t,e){super(t,"in",e),this.keys=sd("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class cE extends Y{constructor(t,e){super(t,"not-in",e),this.keys=sd("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function sd(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>w.fromName(i.referenceValue))}class uE extends Y{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ha(e)&&ii(e.arrayValue,this.value)}}class hE extends Y{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ii(this.value.arrayValue,e)}}class dE extends Y{constructor(t,e){super(t,"not-in",e)}matches(t){if(ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ii(this.value.arrayValue,e)}}class fE extends Y{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ha(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>ii(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(t,e=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function Gl(n,t=null,e=[],i=[],s=null,r=null,o=null){return new pE(n,t,e,i,s,r,o)}function da(n){const t=R(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Zr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Ls(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>nn(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>nn(i)).join(",")),t.ce=e}return t.ce}function fa(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!rE(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!nd(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Hl(n.startAt,t.startAt)&&Hl(n.endAt,t.endAt)}function to(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,e=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function _E(n,t,e,i,s,r,o,a){return new Fs(n,t,e,i,s,r,o,a)}function Us(n){return new Fs(n)}function Kl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mE(n){return n.collectionGroup!==null}function Ln(n){const t=R(n);if(t.le===null){t.le=[];const e=new Set;for(const r of t.explicitOrderBy)t.le.push(r),e.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ct(at.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.le.push(new cs(r,i))}),e.has(at.keyField().canonicalString())||t.le.push(new cs(at.keyField(),i))}return t.le}function Ut(n){const t=R(n);return t.he||(t.he=gE(t,Ln(n))),t.he}function gE(n,t){if(n.limitType==="F")return Gl(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new cs(s.field,r)});const e=n.endAt?new ls(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ls(n.startAt.position,n.startAt.inclusive):null;return Gl(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function eo(n,t,e){return new Fs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Bs(n,t){return fa(Ut(n),Ut(t))&&n.limitType===t.limitType}function rd(n){return`${da(Ut(n))}|lt:${n.limitType}`}function Me(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>id(s)).join(", ")}]`),Ls(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>nn(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>nn(s)).join(",")),`Target(${i})`}(Ut(n))}; limitType=${n.limitType})`}function qs(n,t){return t.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):w.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,t)&&function(i,s){for(const r of Ln(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(o,a,l){const c=zl(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,Ln(i),s)||i.endAt&&!function(o,a,l){const c=zl(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,Ln(i),s))}(n,t)}function yE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function od(n){return(t,e)=>{let i=!1;for(const s of Ln(n)){const r=EE(s,t,e);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function EE(n,t,e){const i=n.field.isKeyField()?w.comparator(t.key,e.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?en(l,c):A()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){_n(this.inner,(e,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return Yh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=new $(w.comparator);function Yt(){return vE}const ad=new $(w.comparator);function Pn(...n){let t=ad;for(const e of n)t=t.insert(e.key,e);return t}function ld(n){let t=ad;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function ge(){return Fn()}function cd(){return Fn()}function Fn(){return new mn(n=>n.toString(),(n,t)=>n.isEqual(t))}const TE=new $(w.comparator),IE=new ct(w.comparator);function P(...n){let t=IE;for(const e of n)t=t.add(e);return t}const wE=new ct(x);function AE(){return wE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:as(t)?"-0":t}}function hd(n){return{integerValue:""+n}}function CE(n,t){return eE(t)?hd(t):ud(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this._=void 0}}function SE(n,t,e){return n instanceof us?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&ca(r)&&(r=ua(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(e,t):n instanceof si?fd(n,t):n instanceof ri?pd(n,t):function(s,r){const o=dd(s,r),a=Ql(o)+Ql(s.Ie);return Jr(o)&&Jr(s.Ie)?hd(a):ud(s.serializer,a)}(n,t)}function RE(n,t,e){return n instanceof si?fd(n,t):n instanceof ri?pd(n,t):e}function dd(n,t){return n instanceof hs?function(i){return Jr(i)||function(r){return!!r&&"doubleValue"in r}(i)}(t)?t:{integerValue:0}:null}class us extends js{}class si extends js{constructor(t){super(),this.elements=t}}function fd(n,t){const e=_d(t);for(const i of n.elements)e.some(s=>jt(s,i))||e.push(i);return{arrayValue:{values:e}}}class ri extends js{constructor(t){super(),this.elements=t}}function pd(n,t){let e=_d(t);for(const i of n.elements)e=e.filter(s=>!jt(s,i));return{arrayValue:{values:e}}}class hs extends js{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Ql(n){return Q(n.integerValue||n.doubleValue)}function _d(n){return ha(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function PE(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof si&&s instanceof si||i instanceof ri&&s instanceof ri?tn(i.elements,s.elements,jt):i instanceof hs&&s instanceof hs?jt(i.Ie,s.Ie):i instanceof us&&s instanceof us}(n.transform,t.transform)}class bE{constructor(t,e){this.version=t,this.transformResults=e}}class Kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Kt}static exists(t){return new Kt(void 0,t)}static updateTime(t){return new Kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ws{}function md(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new yd(n.key,Kt.none()):new wi(n.key,n.data,Kt.none());{const e=n.data,i=Ct.empty();let s=new ct(at.comparator);for(let r of t.fields)if(!s.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new De(n.key,i,new Dt(s.toArray()),Kt.none())}}function NE(n,t,e){n instanceof wi?function(s,r,o){const a=s.value.clone(),l=Xl(s.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof De?function(s,r,o){if(!qi(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Xl(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(gd(s)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Un(n,t,e,i){return n instanceof wi?function(r,o,a,l){if(!qi(r.precondition,o))return a;const c=r.value.clone(),u=Jl(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,i):n instanceof De?function(r,o,a,l){if(!qi(r.precondition,o))return a;const c=Jl(r.fieldTransforms,l,o),u=o.data;return u.setAll(gd(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,t,e,i):function(r,o,a){return qi(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function DE(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),r=dd(i.transform,s||null);r!=null&&(e===null&&(e=Ct.empty()),e.set(i.field,r))}return e||null}function Yl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&tn(i,s,(r,o)=>PE(r,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class wi extends Ws{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class De extends Ws{constructor(t,e,i,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function gd(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Xl(n,t,e){const i=new Map;U(n.length===e.length);for(let s=0;s<e.length;s++){const r=n[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,RE(o,a,e[s]))}return i}function Jl(n,t,e){const i=new Map;for(const s of n){const r=s.transform,o=e.data.field(s.field);i.set(s.field,SE(r,o,t))}return i}class yd extends Ws{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kE extends Ws{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&NE(r,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Un(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Un(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=cd();return this.mutations.forEach(s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(s.key)?null:a;const l=md(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(S.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),P())}isEqual(t){return this.batchId===t.batchId&&tn(this.mutations,t.mutations,(e,i)=>Yl(e,i))&&tn(this.baseMutations,t.baseMutations,(e,i)=>Yl(e,i))}}class pa{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){U(t.mutations.length===i.length);let s=function(){return TE}();const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new pa(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K,N;function ME(n){switch(n){default:return A();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Ed(n){if(n===void 0)return qt("GRPC error has no .code"),_.UNKNOWN;switch(n){case K.OK:return _.OK;case K.CANCELLED:return _.CANCELLED;case K.UNKNOWN:return _.UNKNOWN;case K.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case K.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case K.INTERNAL:return _.INTERNAL;case K.UNAVAILABLE:return _.UNAVAILABLE;case K.UNAUTHENTICATED:return _.UNAUTHENTICATED;case K.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case K.NOT_FOUND:return _.NOT_FOUND;case K.ALREADY_EXISTS:return _.ALREADY_EXISTS;case K.PERMISSION_DENIED:return _.PERMISSION_DENIED;case K.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case K.ABORTED:return _.ABORTED;case K.OUT_OF_RANGE:return _.OUT_OF_RANGE;case K.UNIMPLEMENTED:return _.UNIMPLEMENTED;case K.DATA_LOSS:return _.DATA_LOSS;default:return A()}}(N=K||(K={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new ze([4294967295,4294967295],0);function Zl(n){const t=LE().encode(n),e=new Fy;return e.update(t),new Uint8Array(e.digest())}function tc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new ze([e,i],0),new ze([s,r],0)]}class _a{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new bn(`Invalid padding: ${e}`);if(i<0)throw new bn(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new bn(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new bn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=ze.fromNumber(this.Te)}de(t,e,i){let s=t.add(e.multiply(ze.fromNumber(i)));return s.compare(FE)===1&&(s=new ze([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=Zl(t),[i,s]=tc(e);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ae(o))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new _a(r,s,e);return i.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=Zl(t),[i,s]=tc(e);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Re(o)}}Re(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class bn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e,i,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,Ai.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new $s(S.min(),s,new $(x),Yt(),P())}}class Ai{constructor(t,e,i,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new Ai(i,e,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e,i,s){this.Ve=t,this.removedTargetIds=e,this.key=i,this.me=s}}class vd{constructor(t,e){this.targetId=t,this.fe=e}}class Td{constructor(t,e,i=yt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class ec{constructor(){this.ge=0,this.pe=ic(),this.ye=yt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=P(),e=P(),i=P();return this.pe.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:A()}}),new Ai(this.ye,this.we,t,e,i)}Fe(){this.Se=!1,this.pe=ic()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,U(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class UE{constructor(t){this.Be=t,this.ke=new Map,this.qe=Yt(),this.Qe=nc(),this.Ke=new $(x)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const i=this.ze(e);switch(t.state){case 0:this.je(e)&&i.Ce(t.resumeToken);break;case 1:i.Ne(),i.be||i.Fe(),i.Ce(t.resumeToken);break;case 2:i.Ne(),i.be||this.removeTarget(e);break;case 3:this.je(e)&&(i.Le(),i.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),i.Ce(t.resumeToken));break;default:A()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((i,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,i=t.fe.count,s=this.Ye(e);if(s){const r=s.target;if(to(r))if(i===0){const o=new w(r.path);this.We(e,o,pt.newNoDocument(o,S.min()))}else U(i===1);else{const o=this.Ze(e);if(o!==i){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(e);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,c)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=e;let o,a;try{o=Se(i).toUint8Array()}catch(l){if(l instanceof Xh)return Ze("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new _a(o,s,r)}catch(l){return Ze(l instanceof bn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,e,i){return e.fe.count===i-this.rt(t,e.targetId)?0:2}rt(t,e){const i=this.Be.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.We(e,r,null),s++)}),s}it(t){const e=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&to(a.target)){const l=new w(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,pt.newNoDocument(l,t))}r.De&&(e.set(o,r.ve()),r.Fe())}});let i=P();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(t));const s=new $s(t,e,this.Ke,this.qe,i);return this.qe=Yt(),this.Qe=nc(),this.Ke=new $(x),s}Ue(t,e){if(!this.je(t))return;const i=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,i),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,i){if(!this.je(t))return;const s=this.ze(t);this.st(t,e)?s.Me(e,1):s.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),i&&(this.qe=this.qe.insert(e,i))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new ec,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new ct(x),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||g("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Be._t(t)}He(t){this.ke.set(t,new ec),this.Be.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Be.getRemoteKeysForTarget(t).has(e)}}function nc(){return new $(w.comparator)}function ic(){return new $(w.comparator)}const BE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),jE=(()=>({and:"AND",or:"OR"}))();class WE{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function no(n,t){return n.useProto3Json||Ls(t)?t:{value:t}}function ds(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Id(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function $E(n,t){return ds(n,t.toTimestamp())}function Bt(n){return U(!!n),S.fromTimestamp(function(e){const i=oe(e);return new X(i.seconds,i.nanos)}(n))}function ma(n,t){return io(n,t).canonicalString()}function io(n,t){const e=function(s){return new H(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function wd(n){const t=H.fromString(n);return U(Pd(t)),t}function so(n,t){return ma(n.databaseId,t.path)}function pr(n,t){const e=wd(t);if(e.get(1)!==n.databaseId.projectId)throw new I(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new I(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new w(Cd(e))}function Ad(n,t){return ma(n.databaseId,t)}function zE(n){const t=wd(n);return t.length===4?H.emptyPath():Cd(t)}function ro(n){return new H(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Cd(n){return U(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function sc(n,t,e){return{name:so(n,t),fields:e.value.mapValue.fields}}function HE(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(U(u===void 0||typeof u=="string"),yt.fromBase64String(u||"")):(U(u===void 0||u instanceof Uint8Array),yt.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:Ed(c.code);return new I(u,c.message||"")}(o);e=new Td(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=pr(n,i.document.name),r=Bt(i.document.updateTime),o=i.document.createTime?Bt(i.document.createTime):S.min(),a=new Ct({mapValue:{fields:i.document.fields}}),l=pt.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];e=new ji(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=pr(n,i.document),r=i.readTime?Bt(i.readTime):S.min(),o=pt.newNoDocument(s,r),a=i.removedTargetIds||[];e=new ji([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=pr(n,i.document),r=i.removedTargetIds||[];e=new ji([],r,s,null)}else{if(!("filter"in t))return A();{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new OE(s,r),a=i.targetId;e=new vd(a,o)}}return e}function GE(n,t){let e;if(t instanceof wi)e={update:sc(n,t.key,t.value)};else if(t instanceof yd)e={delete:so(n,t.key)};else if(t instanceof De)e={update:sc(n,t.key,t.data),updateMask:nv(t.fieldMask)};else{if(!(t instanceof kE))return A();e={verify:so(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof us)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ri)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof hs)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw A()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:$E(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:A()}(n,t.precondition)),e}function KE(n,t){return n&&n.length>0?(U(t!==void 0),n.map(e=>function(s,r){let o=s.updateTime?Bt(s.updateTime):Bt(r);return o.isEqual(S.min())&&(o=Bt(r)),new bE(o,s.transformResults||[])}(e,t))):[]}function QE(n,t){return{documents:[Ad(n,t.path)]}}function YE(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=Ad(n,s);const r=function(c){if(c.length!==0)return Rd(Wt.create(c,"and"))}(t.filters);r&&(e.structuredQuery.where=r);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Le(d.field),direction:ZE(d.dir)}}(u))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=no(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:e,parent:s}}function XE(n){let t=zE(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){U(i===1);const u=e.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let r=[];e.where&&(r=function(h){const d=Sd(h);return d instanceof Wt&&ed(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(m){return new cs(Fe(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ls(d)?null:d}(e.limit));let l=null;e.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ls(f,d)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ls(f,d)}(e.endAt)),_E(t,s,o,r,a,"F",l,c)}function JE(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Sd(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=Fe(e.unaryFilter.field);return Y.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Fe(e.unaryFilter.field);return Y.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fe(e.unaryFilter.field);return Y.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fe(e.unaryFilter.field);return Y.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(e){return Y.create(Fe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Wt.create(e.compositeFilter.filters.map(i=>Sd(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(n):A()}function ZE(n){return BE[n]}function tv(n){return qE[n]}function ev(n){return jE[n]}function Le(n){return{fieldPath:n.canonicalString()}}function Fe(n){return at.fromServerFormat(n.fieldPath)}function Rd(n){return n instanceof Y?function(e){if(e.op==="=="){if($l(e.value))return{unaryFilter:{field:Le(e.field),op:"IS_NAN"}};if(Wl(e.value))return{unaryFilter:{field:Le(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if($l(e.value))return{unaryFilter:{field:Le(e.field),op:"IS_NOT_NAN"}};if(Wl(e.value))return{unaryFilter:{field:Le(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Le(e.field),op:tv(e.op),value:e.value}}}(n):n instanceof Wt?function(e){const i=e.getFilters().map(s=>Rd(s));return i.length===1?i[0]:{compositeFilter:{op:ev(e.op),filters:i}}}(n):A()}function nv(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Pd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e,i,s,r=S.min(),o=S.min(),a=yt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(t){this.ct=t}}function sv(n){const t=XE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?eo(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(){this._n=new ov}addToCollectionParentIndex(t,e){return this._n.add(e),p.resolve()}getCollectionParents(t,e){return p.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return p.resolve()}deleteFieldIndex(t,e){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,e){return p.resolve()}getDocumentsMatchingTarget(t,e){return p.resolve(null)}getIndexType(t,e){return p.resolve(0)}getFieldIndexes(t,e){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,e){return p.resolve(re.min())}getMinOffsetFromCollectionGroup(t,e){return p.resolve(re.min())}updateCollectionGroup(t,e,i){return p.resolve()}updateIndexEntries(t,e){return p.resolve()}}class ov{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new ct(H.comparator),r=!s.has(i);return this.index[e]=s.add(i),r}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new ct(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new sn(0)}static Ln(){return new sn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.changes=new mn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?p.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Un(i.mutation,s,Dt.empty(),X.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,P()).next(()=>i))}getLocalViewOfDocuments(t,e,i=P()){const s=ge();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(r=>{let o=Pn();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const i=ge();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,P()))}populateOverlays(t,e,i){const s=[];return i.forEach(r=>{e.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(t,s).next(r=>{r.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,i,s){let r=Yt();const o=Fn(),a=function(){return Fn()}();return e.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof De)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Un(u.mutation,c,u.mutation.getFieldMask(),X.now())):o.set(c.key,Dt.empty())}),this.recalculateAndSaveOverlays(t,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),e.forEach((c,u)=>{var h;return a.set(c,new lv(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const i=Fn();let s=new $((o,a)=>o-a),r=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=e.get(l);if(c===null)return;let u=i.get(l)||Dt.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||P()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=cd();u.forEach(d=>{if(!r.has(d)){const f=md(e.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return p.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(o){return w.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):mE(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-r.size):p.resolve(ge());let a=-1,l=r;return o.next(c=>p.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?p.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,l,c,P())).next(u=>({batchId:a,changes:ld(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new w(e)).next(i=>{let s=Pn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const r=e.collectionGroup;let o=Pn();return this.indexManager.getCollectionParents(t,r).next(a=>p.forEach(a,l=>{const c=function(h,d){return new Fs(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,l.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,i,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,r,s))).next(o=>{r.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,pt.newInvalidDocument(u)))});let a=Pn();return o.forEach((l,c)=>{const u=r.get(l);u!==void 0&&Un(u.mutation,c,Dt.empty(),X.now()),qs(e,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return p.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Bt(s.createTime)}}(e)),p.resolve()}getNamedQuery(t,e){return p.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:sv(s.bundledQuery),readTime:Bt(s.readTime)}}(e)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.overlays=new $(w.comparator),this.hr=new Map}getOverlay(t,e){return p.resolve(this.overlays.get(e))}getOverlays(t,e){const i=ge();return p.forEach(e,s=>this.getOverlay(t,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,r)=>{this.ht(t,e,r)}),p.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(i)),p.resolve()}getOverlaysForCollection(t,e,i){const s=ge(),r=e.length+1,o=new w(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return p.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let r=new $((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=ge(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ge(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return p.resolve(a)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new xE(e,i));let r=this.hr.get(e);r===void 0&&(r=P(),this.hr.set(e,r)),this.hr.set(e,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.Pr=new ct(Z.Ir),this.Tr=new ct(Z.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const i=new Z(t,e);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Ar(new Z(t,e))}Rr(t,e){t.forEach(i=>this.removeReference(i,e))}Vr(t){const e=new w(new H([])),i=new Z(e,t),s=new Z(e,t+1),r=[];return this.Tr.forEachInRange([i,s],o=>{this.Ar(o),r.push(o.key)}),r}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new w(new H([])),i=new Z(e,t),s=new Z(e,t+1);let r=P();return this.Tr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(t){const e=new Z(t,0),i=this.Pr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Z{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return w.comparator(t.key,e.key)||x(t.pr,e.pr)}static Er(t,e){return x(t.pr,e.pr)||w.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new ct(Z.Ir)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VE(r,e,i,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Z(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,e){return p.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.br(i),r=s<0?0:s;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Z(e,0),s=new Z(e,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([i,s],o=>{const a=this.Sr(o.pr);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new ct(x);return e.forEach(s=>{const r=new Z(s,0),o=new Z(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,o],a=>{i=i.add(a.pr)})}),p.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let r=i;w.isDocumentKey(r)||(r=r.child(""));const o=new Z(new w(r),0);let a=new ct(x);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),p.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(i=>{const s=this.Sr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){U(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return p.forEach(e.mutations,s=>{const r=new Z(s.key,e.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,e){const i=new Z(e,0),s=this.wr.firstAfterOrEqual(i);return p.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(t){this.vr=t,this.docs=function(){return new $(w.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.vr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return p.resolve(i?i.document.mutableCopy():pt.newInvalidDocument(e))}getEntries(t,e){let i=Yt();return e.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():pt.newInvalidDocument(s))}),p.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let r=Yt();const o=e.path,a=new w(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Yy(Qy(u),i)<=0||(s.has(u.key)||qs(e,u))&&(r=r.insert(u.key,u.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(t,e,i,s){A()}Fr(t,e){return p.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new pv(this)}getSize(t){return p.resolve(this.size)}}class pv extends av{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(i)}),p.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(t){this.persistence=t,this.Mr=new mn(e=>da(e),fa),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ga,this.targetCount=0,this.Lr=sn.Nn()}forEachTarget(t,e){return this.Mr.forEach((i,s)=>e(s)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Or&&(this.Or=e),p.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new sn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,p.resolve()}updateTargetData(t,e){return this.qn(e),p.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,e,i){let s=0;const r=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&i.get(a.targetId)===null&&(this.Mr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),p.waitFor(r).next(()=>s)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,e){const i=this.Mr.get(e)||null;return p.resolve(i)}addMatchingKeys(t,e,i){return this.Nr.dr(e,i),p.resolve()}removeMatchingKeys(t,e,i){this.Nr.Rr(e,i);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach(o=>{r.push(s.markPotentiallyOrphaned(t,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),p.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Nr.gr(e);return p.resolve(i)}containsKey(t,e){return p.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(t,e){this.Br={},this.overlays={},this.kr=new la(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new _v(this),this.indexManager=new rv,this.remoteDocumentCache=function(s){return new fv(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new iv(e),this.$r=new uv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new hv,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Br[t.toKey()];return i||(i=new dv(e,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,i){g("MemoryPersistence","Starting transaction:",t);const s=new gv(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(r=>this.referenceDelegate.Wr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gr(t,e){return p.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,e)))}}class gv extends Jy{constructor(t){super(),this.currentSequenceNumber=t}}class ya{constructor(t){this.persistence=t,this.zr=new ga,this.jr=null}static Hr(t){return new ya(t)}get Jr(){if(this.jr)return this.jr;throw A()}addReference(t,e,i){return this.zr.addReference(i,e),this.Jr.delete(i.toString()),p.resolve()}removeReference(t,e,i){return this.zr.removeReference(i,e),this.Jr.add(i.toString()),p.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),p.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(r=>this.Jr.add(r.toString()))}).next(()=>i.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Jr,i=>{const s=w.fromPath(i);return this.Yr(t,s).next(r=>{r||e.removeEntry(s,S.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(i=>{i?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return p.or([()=>p.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.qi=i,this.Qi=s}static Ki(t,e){let i=P(),s=P();for(const r of e.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ea(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Pf()?8:me.v(Bn())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,i,s){const r={result:null};return this.ji(t,e).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Hi(t,e,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new yv;return this.Ji(t,e,o).next(a=>{if(r.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>r.result)}Yi(t,e,i,s){return i.documentReadCount<this.Wi?(An()<=D.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",Me(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),p.resolve()):(An()<=D.DEBUG&&g("QueryEngine","Query:",Me(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(An()<=D.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",Me(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ut(e))):p.resolve())}ji(t,e){if(Kl(e))return p.resolve(null);let i=Ut(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=eo(e,null,"F"),i=Ut(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(r=>{const o=P(...r);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(l=>{const c=this.Zi(e,a);return this.Xi(e,c,o,l.readTime)?this.ji(t,eo(e,null,"F")):this.es(t,c,e,l)}))})))}Hi(t,e,i,s){return Kl(e)||s.isEqual(S.min())?p.resolve(null):this.zi.getDocuments(t,i).next(r=>{const o=this.Zi(e,r);return this.Xi(e,o,i,s)?p.resolve(null):(An()<=D.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Me(e)),this.es(t,o,e,Ky(s,-1)).next(a=>a))})}Zi(t,e){let i=new ct(od(t));return e.forEach((s,r)=>{qs(t,r)&&(i=i.add(r))}),i}Xi(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ji(t,e,i){return An()<=D.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",Me(e)),this.zi.getDocumentsMatchingQuery(t,e,re.min(),i)}es(t,e,i,s){return this.zi.getDocumentsMatchingQuery(t,i,s).next(r=>(e.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(t,e,i,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new $(x),this.rs=new mn(r=>da(r),fa),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cv(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Tv(n,t,e,i){return new vv(n,t,e,i)}async function bd(n,t){const e=R(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,e._s(t),e.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=P();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return e.localDocuments.getDocuments(i,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function Iv(n,t){const e=R(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),r=e.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=p.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(l,m)).next(T=>{const v=c.docVersions.get(m);U(v!==null),T.version.compareTo(v)<0&&(h.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),u.addEntry(T)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(e,i,t,r).next(()=>r.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=P();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Nd(n){const t=R(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function wv(n,t){const e=R(n),i=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const a=[];t.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(e.Qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>e.Qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(yt.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(T,v,L){return T.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(d,f,u)&&a.push(e.Qr.updateTargetData(r,f))});let l=Yt(),c=P();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Av(r,o,t.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!i.isEqual(S.min())){const u=e.Qr.getLastRemoteSnapshotVersion(r).next(h=>e.Qr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(e.ns=s,r))}function Av(n,t,e){let i=P(),s=P();return e.forEach(r=>i=i.add(r)),t.getEntries(n,i).next(r=>{let o=Yt();return e.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(S.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):g("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function Cv(n,t){const e=R(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function Sv(n,t){const e=R(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return e.Qr.getTargetData(i,t).next(r=>r?(s=r,p.resolve(s)):e.Qr.allocateTargetId(i).next(o=>(s=new Jt(t,o,"TargetPurposeListen",i.currentSequenceNumber),e.Qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=e.ns.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(i.targetId,i),e.rs.set(t,i.targetId)),i})}async function oo(n,t,e){const i=R(n),s=i.ns.get(t),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ii(o))throw o;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}i.ns=i.ns.remove(t),i.rs.delete(s.target)}function rc(n,t,e){const i=R(n);let s=S.min(),r=P();return i.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=R(l),d=h.rs.get(u);return d!==void 0?p.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(i,o,Ut(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.ts.getDocumentsMatchingQuery(o,t,e?s:S.min(),e?r:P())).next(a=>(Rv(i,yE(t),a),{documents:a,hs:r})))}function Rv(n,t,e){let i=n.ss.get(t)||S.min();e.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.ss.set(t,i)}class oc{constructor(){this.activeTargetIds=AE()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pv{constructor(){this.no=new oc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,i){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new oc,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi=null;function _r(){return Fi===null?Fi=function(){return 268435456+Math.round(2147483648*Math.random())}():Fi++,"0x"+Fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class kv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=i+"://"+e.host,this.po=`projects/${s}/databases/${r}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get wo(){return!1}So(e,i,s,r,o){const a=_r(),l=this.bo(e,i.toUriEncodedString());g("RestConnection",`Sending RPC '${e}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,r,o),this.Co(e,l,c,s).then(u=>(g("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw Ze("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(e,i,s,r,o,a){return this.So(e,i,s,r,o)}Do(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>e[o]=r),s&&s.headers.forEach((r,o)=>e[o]=r)}bo(e,i){const s=Nv[e];return`${this.fo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,i,s){const r=_r();return new Promise((o,a)=>{const l=new Ly;l.setWithCredentials(!0),l.listenOnce(Oy.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case fr.NO_ERROR:const u=l.getResponseJson();g(ut,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(u)),o(u);break;case fr.TIMEOUT:g(ut,`RPC '${t}' ${r} timed out`),a(new I(_.DEADLINE_EXCEEDED,"Request time out"));break;case fr.HTTP_ERROR:const h=l.getStatus();if(g(ut,`RPC '${t}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const L=v.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(L)>=0?L:_.UNKNOWN}(f.status);a(new I(m,f.message))}else a(new I(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new I(_.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{g(ut,`RPC '${t}' ${r} completed.`)}});const c=JSON.stringify(s);g(ut,`RPC '${t}' ${r} sending request:`,s),l.send(e,"POST",c,i,15)})}Fo(t,e,i){const s=_r(),r=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Vy(),a=xy(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,e,i),l.encodeInitMessageHeaders=!0;const u=r.join("");g(ut,`Creating RPC '${t}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const m=new Dv({lo:v=>{f?g(ut,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(d||(g(ut,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),g(ut,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},ho:()=>h.close()}),T=(v,L,z)=>{v.listen(L,it=>{try{z(it)}catch(Pt){setTimeout(()=>{throw Pt},0)}})};return T(h,Oi.EventType.OPEN,()=>{f||g(ut,`RPC '${t}' stream ${s} transport opened.`)}),T(h,Oi.EventType.CLOSE,()=>{f||(f=!0,g(ut,`RPC '${t}' stream ${s} transport closed`),m.Vo())}),T(h,Oi.EventType.ERROR,v=>{f||(f=!0,Ze(ut,`RPC '${t}' stream ${s} transport errored:`,v),m.Vo(new I(_.UNAVAILABLE,"The operation could not be completed")))}),T(h,Oi.EventType.MESSAGE,v=>{var L;if(!f){const z=v.data[0];U(!!z);const it=z,Pt=it.error||((L=it[0])===null||L===void 0?void 0:L.error);if(Pt){g(ut,`RPC '${t}' stream ${s} received error:`,Pt);const Ri=Pt.status;let Ve=function(pf){const xa=K[pf];if(xa!==void 0)return Ed(xa)}(Ri),Pi=Pt.message;Ve===void 0&&(Ve=_.INTERNAL,Pi="Unknown error status: "+Ri+" with message "+Pt.message),f=!0,m.Vo(new I(Ve,Pi)),h.close()}else g(ut,`RPC '${t}' stream ${s} received:`,z),m.mo(z)}}),T(a,My.STAT_EVENT,v=>{v.stat===Ll.PROXY?g(ut,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===Ll.NOPROXY&&g(ut,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.Ro()},0),m}}function mr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(n){return new WE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e,i=1e3,s=1.5,r=6e4){this.oi=t,this.timerId=e,this.Mo=i,this.xo=s,this.Oo=r,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),i=Math.max(0,Date.now()-this.Bo),s=Math.max(0,e-i);s>0&&g("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e,i,s,r,o,a,l){this.oi=t,this.$o=i,this.Uo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Dd(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===_.RESOURCE_EXHAUSTED?(qt(e.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Wo===e&&this.o_(i,s)},i=>{t(()=>{const s=new I(_.UNKNOWN,"Fetching auth token failed: "+i.message);return this.__(s)})})}o_(t,e){const i=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{i(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{i(()=>this.__(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return g("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vv extends kd{constructor(t,e,i,s,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=HE(this.serializer,t),i=function(r){if(!("targetChange"in r))return S.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?Bt(o.readTime):S.min()}(t);return this.listener.u_(e,i)}c_(t){const e={};e.database=ro(this.serializer),e.addTarget=function(r,o){let a;const l=o.target;if(a=to(l)?{documents:QE(r,l)}:{query:YE(r,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Id(r,o.resumeToken);const c=no(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=ds(r,o.snapshotVersion.toTimestamp());const c=no(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const i=JE(this.serializer,t);i&&(e.labels=i),this.t_(e)}l_(t){const e={};e.database=ro(this.serializer),e.removeTarget=t,this.t_(e)}}class xv extends kd{constructor(t,e,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(U(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=KE(t.writeResults,t.commitTime),i=Bt(t.commitTime);return this.listener.T_(i,e)}return U(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=ro(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>GE(this.serializer,i))};this.t_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new I(_.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.So(t,io(e,i),s,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(_.UNKNOWN,r.toString())})}vo(t,e,i,s,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,io(e,i),s,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new I(_.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Mv{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(qt(e),this.g_=!1):g("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(t,e,i,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io(o=>{i.enqueueAndForget(async()=>{ke(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=R(l);c.v_.add(4),await Ci(c),c.x_.set("Unknown"),c.v_.delete(4),await Hs(c)}(this))})}),this.x_=new Mv(i,s)}}async function Hs(n){if(ke(n))for(const t of n.F_)await t(!0)}async function Ci(n){for(const t of n.F_)await t(!1)}function Vd(n,t){const e=R(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),wa(e)?Ia(e):gn(e).Jo()&&Ta(e,t))}function va(n,t){const e=R(n),i=gn(e);e.C_.delete(t),i.Jo()&&xd(e,t),e.C_.size===0&&(i.Jo()?i.Xo():ke(e)&&e.x_.set("Unknown"))}function Ta(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(S.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}gn(n).c_(t)}function xd(n,t){n.O_.Oe(t),gn(n).l_(t)}function Ia(n){n.O_=new UE({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),gn(n).start(),n.x_.p_()}function wa(n){return ke(n)&&!gn(n).Ho()&&n.C_.size>0}function ke(n){return R(n).v_.size===0}function Od(n){n.O_=void 0}async function Fv(n){n.C_.forEach((t,e)=>{Ta(n,t)})}async function Uv(n,t){Od(n),wa(n)?(n.x_.S_(t),Ia(n)):n.x_.set("Unknown")}async function Bv(n,t,e){if(n.x_.set("Online"),t instanceof Td&&t.state===2&&t.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(n,t)}catch(i){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await fs(n,i)}else if(t instanceof ji?n.O_.$e(t):t instanceof vd?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(S.min()))try{const i=await Nd(n.localStore);e.compareTo(i)>=0&&await function(r,o){const a=r.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.C_.get(c);u&&r.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.C_.get(l);if(!u)return;r.C_.set(l,u.withResumeToken(yt.EMPTY_BYTE_STRING,u.snapshotVersion)),xd(r,l);const h=new Jt(u.target,l,c,u.sequenceNumber);Ta(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(i){g("RemoteStore","Failed to raise snapshot:",i),await fs(n,i)}}async function fs(n,t,e){if(!Ii(t))throw t;n.v_.add(1),await Ci(n),n.x_.set("Offline"),e||(e=()=>Nd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await Hs(n)})}function Md(n,t){return t().catch(e=>fs(n,e,t))}async function Gs(n){const t=R(n),e=ae(t);let i=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;qv(t);)try{const s=await Cv(t.localStore,i);if(s===null){t.D_.length===0&&e.Xo();break}i=s.batchId,jv(t,s)}catch(s){await fs(t,s)}Ld(t)&&Fd(t)}function qv(n){return ke(n)&&n.D_.length<10}function jv(n,t){n.D_.push(t);const e=ae(n);e.Jo()&&e.P_&&e.I_(t.mutations)}function Ld(n){return ke(n)&&!ae(n).Ho()&&n.D_.length>0}function Fd(n){ae(n).start()}async function Wv(n){ae(n).d_()}async function $v(n){const t=ae(n);for(const e of n.D_)t.I_(e.mutations)}async function zv(n,t,e){const i=n.D_.shift(),s=pa.from(i,t,e);await Md(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Gs(n)}async function Hv(n,t){t&&ae(n).P_&&await async function(i,s){if(function(o){return ME(o)&&o!==_.ABORTED}(s.code)){const r=i.D_.shift();ae(i).Zo(),await Md(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Gs(i)}}(n,t),Ld(n)&&Fd(n)}async function lc(n,t){const e=R(n);e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const i=ke(e);e.v_.add(3),await Ci(e),i&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await Hs(e)}async function Gv(n,t){const e=R(n);t?(e.v_.delete(2),await Hs(e)):t||(e.v_.add(2),await Ci(e),e.x_.set("Unknown"))}function gn(n){return n.N_||(n.N_=function(e,i,s){const r=R(e);return r.R_(),new Vv(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Po:Fv.bind(null,n),To:Uv.bind(null,n),u_:Bv.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),wa(n)?Ia(n):n.x_.set("Unknown")):(await n.N_.stop(),Od(n))})),n.N_}function ae(n){return n.L_||(n.L_=function(e,i,s){const r=R(e);return r.R_(),new xv(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Po:Wv.bind(null,n),To:Hv.bind(null,n),E_:$v.bind(null,n),T_:zv.bind(null,n)}),n.F_.push(async t=>{t?(n.L_.Zo(),await Gs(n)):(await n.L_.stop(),n.D_.length>0&&(g("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e,i,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,r){const o=Date.now()+i,a=new Aa(t,e,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(_.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ca(n,t){if(qt("AsyncQueue",`${t}: ${n}`),Ii(n))return new I(_.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this.comparator=t?(e,i)=>t(e,i)||w.comparator(e.key,i.key):(e,i)=>w.comparator(e.key,i.key),this.keyedMap=Pn(),this.sortedSet=new $(this.comparator)}static emptySet(t){return new He(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof He)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new He;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.B_=new $(w.comparator)}track(t){const e=t.doc.key,i=this.B_.get(e);i?t.type!==0&&i.type===3?this.B_=this.B_.insert(e,t):t.type===3&&i.type!==1?this.B_=this.B_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.B_=this.B_.remove(e):t.type===1&&i.type===2?this.B_=this.B_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):A():this.B_=this.B_.insert(e,t)}k_(){const t=[];return this.B_.inorderTraversal((e,i)=>{t.push(i)}),t}}class rn{constructor(t,e,i,s,r,o,a,l,c){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,e,i,s,r){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new rn(t,e,He.emptySet(e),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Bs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class Qv{constructor(){this.queries=new mn(t=>rd(t),Bs),this.onlineState="Unknown",this.W_=new Set}}async function Ud(n,t){const e=R(n);let i=3;const s=t.query;let r=e.queries.get(s);r?!r.K_()&&t.U_()&&(i=2):(r=new Kv,i=t.U_()?0:1);try{switch(i){case 0:r.q_=await e.onListen(s,!0);break;case 1:r.q_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=Ca(o,`Initialization of query '${Me(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,r),r.Q_.push(t),t.G_(e.onlineState),r.q_&&t.z_(r.q_)&&Sa(e)}async function Bd(n,t){const e=R(n),i=t.query;let s=3;const r=e.queries.get(i);if(r){const o=r.Q_.indexOf(t);o>=0&&(r.Q_.splice(o,1),r.Q_.length===0?s=t.U_()?0:1:!r.K_()&&t.U_()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function Yv(n,t){const e=R(n);let i=!1;for(const s of t){const r=s.query,o=e.queries.get(r);if(o){for(const a of o.Q_)a.z_(s)&&(i=!0);o.q_=s}}i&&Sa(e)}function Xv(n,t,e){const i=R(n),s=i.queries.get(t);if(s)for(const r of s.Q_)r.onError(e);i.queries.delete(t)}function Sa(n){n.W_.forEach(t=>{t.next()})}var ao,uc;(uc=ao||(ao={})).j_="default",uc.Cache="cache";class qd{constructor(t,e,i){this.query=t,this.H_=e,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=i||{}}z_(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new rn(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),e=!0):this.X_(t,this.onlineState)&&(this.ea(t),e=!0),this.Y_=t,e}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let e=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),e=!0),e}X_(t,e){if(!t.fromCache||!this.U_())return!0;const i=e!=="Offline";return(!this.options.ta||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const e=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ea(t){t=rn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==ao.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t){this.key=t}}class Wd{constructor(t){this.key=t}}class Jv{constructor(t,e){this.query=t,this.ua=e,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=P(),this.mutatedKeys=P(),this.ha=od(t),this.Pa=new He(this.ha)}get Ia(){return this.ua}Ta(t,e){const i=e?e.Ea:new cc,s=e?e.Pa:this.Pa;let r=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const d=s.get(u),f=qs(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),T=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==T&&(i.track({type:3,doc:f}),v=!0):this.da(d,f)||(i.track({type:2,doc:f}),v=!0,(l&&this.ha(f,l)>0||c&&this.ha(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),v=!0):d&&!f&&(i.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=T?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Pa:o,Ea:i,Xi:a,mutatedKeys:r}}da(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const r=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((u,h)=>function(f,m){const T=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return T(f)-T(m)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(i),s=s!=null&&s;const a=e&&!s?this.Ra():[],l=this.la.size===0&&this.current&&!s?1:0,c=l!==this.ca;return this.ca=l,o.length!==0||c?{snapshot:new rn(this.query,t.Pa,r,o,t.mutatedKeys,l===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new cc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(e=>this.ua=this.ua.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ua=this.ua.delete(e)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=P(),this.Pa.forEach(i=>{this.ma(i.key)&&(this.la=this.la.add(i.key))});const e=[];return t.forEach(i=>{this.la.has(i)||e.push(new Wd(i))}),this.la.forEach(i=>{t.has(i)||e.push(new jd(i))}),e}fa(t){this.ua=t.hs,this.la=P();const e=this.Ta(t.documents);return this.applyChanges(e,!0)}ga(){return rn.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class Zv{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class tT{constructor(t){this.key=t,this.pa=!1}}class eT{constructor(t,e,i,s,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new mn(a=>rd(a),Bs),this.Sa=new Map,this.ba=new Set,this.Da=new $(w.comparator),this.Ca=new Map,this.va=new ga,this.Fa={},this.Ma=new Map,this.xa=sn.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function nT(n,t,e=!0){const i=Qd(n);let s;const r=i.wa.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.ga()):s=await $d(i,t,e,!0),s}async function iT(n,t){const e=Qd(n);await $d(e,t,!0,!1)}async function $d(n,t,e,i){const s=await Sv(n.localStore,Ut(t)),r=s.targetId,o=e?n.sharedClientState.addLocalQueryTarget(r):"not-current";let a;return i&&(a=await sT(n,t,r,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&Vd(n.remoteStore,s),a}async function sT(n,t,e,i,s){n.Na=(h,d,f)=>async function(T,v,L,z){let it=v.view.Ta(L);it.Xi&&(it=await rc(T.localStore,v.query,!1).then(({documents:Pi})=>v.view.Ta(Pi,it)));const Pt=z&&z.targetChanges.get(v.targetId),Ri=z&&z.targetMismatches.get(v.targetId)!=null,Ve=v.view.applyChanges(it,T.isPrimaryClient,Pt,Ri);return dc(T,v.targetId,Ve.Va),Ve.snapshot}(n,h,d,f);const r=await rc(n.localStore,t,!0),o=new Jv(t,r.hs),a=o.Ta(r.documents),l=Ai.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),c=o.applyChanges(a,n.isPrimaryClient,l);dc(n,e,c.Va);const u=new Zv(t,e,o);return n.wa.set(t,u),n.Sa.has(e)?n.Sa.get(e).push(t):n.Sa.set(e,[t]),c.snapshot}async function rT(n,t,e){const i=R(n),s=i.wa.get(t),r=i.Sa.get(s.targetId);if(r.length>1)return i.Sa.set(s.targetId,r.filter(o=>!Bs(o,t))),void i.wa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await oo(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),e&&va(i.remoteStore,s.targetId),lo(i,s.targetId)}).catch(Ti)):(lo(i,s.targetId),await oo(i.localStore,s.targetId,!0))}async function oT(n,t){const e=R(n),i=e.wa.get(t),s=e.Sa.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),va(e.remoteStore,i.targetId))}async function aT(n,t,e){const i=pT(n);try{const s=await function(o,a){const l=R(o),c=X.now(),u=a.reduce((f,m)=>f.add(m.key),P());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Yt(),T=P();return l.os.getEntries(f,u).next(v=>{m=v,m.forEach((L,z)=>{z.isValidDocument()||(T=T.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,m)).next(v=>{h=v;const L=[];for(const z of a){const it=DE(z,h.get(z.key).overlayedDocument);it!=null&&L.push(new De(z.key,it,Jh(it.value.mapValue),Kt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,L,a)}).next(v=>{d=v;const L=v.applyToLocalDocumentSet(h,T);return l.documentOverlayCache.saveOverlays(f,v.batchId,L)})}).then(()=>({batchId:d.batchId,changes:ld(h)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Fa[o.currentUser.toKey()];c||(c=new $(x)),c=c.insert(a,l),o.Fa[o.currentUser.toKey()]=c}(i,s.batchId,e),await Si(i,s.changes),await Gs(i.remoteStore)}catch(s){const r=Ca(s,"Failed to persist write");e.reject(r)}}async function zd(n,t){const e=R(n);try{const i=await wv(e.localStore,t);t.targetChanges.forEach((s,r)=>{const o=e.Ca.get(r);o&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?U(o.pa):s.removedDocuments.size>0&&(U(o.pa),o.pa=!1))}),await Si(e,i,t)}catch(i){await Ti(i)}}function hc(n,t,e){const i=R(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.wa.forEach((r,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=R(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(c=!0)}),c&&Sa(l)}(i.eventManager,t),s.length&&i.ya.u_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function lT(n,t,e){const i=R(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Ca.get(t),r=s&&s.key;if(r){let o=new $(w.comparator);o=o.insert(r,pt.newNoDocument(r,S.min()));const a=P().add(r),l=new $s(S.min(),new Map,new $(x),o,a);await zd(i,l),i.Da=i.Da.remove(r),i.Ca.delete(t),Ra(i)}else await oo(i.localStore,t,!1).then(()=>lo(i,t,e)).catch(Ti)}async function cT(n,t){const e=R(n),i=t.batch.batchId;try{const s=await Iv(e.localStore,t);Gd(e,i,null),Hd(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Si(e,s)}catch(s){await Ti(s)}}async function uT(n,t,e){const i=R(n);try{const s=await function(o,a){const l=R(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(U(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(i.localStore,t);Gd(i,t,e),Hd(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Si(i,s)}catch(s){await Ti(s)}}function Hd(n,t){(n.Ma.get(t)||[]).forEach(e=>{e.resolve()}),n.Ma.delete(t)}function Gd(n,t,e){const i=R(n);let s=i.Fa[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(e?r.reject(e):r.resolve(),s=s.remove(t)),i.Fa[i.currentUser.toKey()]=s}}function lo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Sa.get(t))n.wa.delete(i),e&&n.ya.La(i,e);n.Sa.delete(t),n.isPrimaryClient&&n.va.Vr(t).forEach(i=>{n.va.containsKey(i)||Kd(n,i)})}function Kd(n,t){n.ba.delete(t.path.canonicalString());const e=n.Da.get(t);e!==null&&(va(n.remoteStore,e),n.Da=n.Da.remove(t),n.Ca.delete(e),Ra(n))}function dc(n,t,e){for(const i of e)i instanceof jd?(n.va.addReference(i.key,t),hT(n,i)):i instanceof Wd?(g("SyncEngine","Document no longer in limbo: "+i.key),n.va.removeReference(i.key,t),n.va.containsKey(i.key)||Kd(n,i.key)):A()}function hT(n,t){const e=t.key,i=e.path.canonicalString();n.Da.get(e)||n.ba.has(i)||(g("SyncEngine","New document in limbo: "+e),n.ba.add(i),Ra(n))}function Ra(n){for(;n.ba.size>0&&n.Da.size<n.maxConcurrentLimboResolutions;){const t=n.ba.values().next().value;n.ba.delete(t);const e=new w(H.fromString(t)),i=n.xa.next();n.Ca.set(i,new tT(e)),n.Da=n.Da.insert(e,i),Vd(n.remoteStore,new Jt(Ut(Us(e.path)),i,"TargetPurposeLimboResolution",la._e))}}async function Si(n,t,e){const i=R(n),s=[],r=[],o=[];i.wa.isEmpty()||(i.wa.forEach((a,l)=>{o.push(i.Na(l,t,e).then(c=>{if((c||e)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Ea.Ki(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.ya.u_(s),await async function(l,c){const u=R(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(c,d=>p.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>p.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ii(h))throw h;g("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),m=f.snapshotVersion,T=f.withLastLimboFreeSnapshotVersion(m);u.ns=u.ns.insert(d,T)}}}(i.localStore,r))}async function dT(n,t){const e=R(n);if(!e.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());const i=await bd(e.localStore,t);e.currentUser=t,function(r,o){r.Ma.forEach(a=>{a.forEach(l=>{l.reject(new I(_.CANCELLED,o))})}),r.Ma.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Si(e,i.us)}}function fT(n,t){const e=R(n),i=e.Ca.get(t);if(i&&i.pa)return P().add(i.key);{let s=P();const r=e.Sa.get(t);if(!r)return s;for(const o of r){const a=e.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Qd(n){const t=R(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=zd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lT.bind(null,t),t.ya.u_=Yv.bind(null,t.eventManager),t.ya.La=Xv.bind(null,t.eventManager),t}function pT(n){const t=R(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uT.bind(null,t),t}class fc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=zs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Tv(this.persistence,new Ev,t.initialUser,this.serializer)}createPersistence(t){return new mv(ya.Hr,this.serializer)}createSharedClientState(t){return new Pv}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _T{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>hc(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=dT.bind(null,this.syncEngine),await Gv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Qv}()}createDatastore(t){const e=zs(t.databaseInfo.databaseId),i=function(r){return new kv(r)}(t.databaseInfo);return function(r,o,a,l){return new Ov(r,o,a,l)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,r,o,a){return new Lv(i,s,r,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>hc(this.syncEngine,e,0),function(){return ac.D()?new ac:new bv}())}createSyncEngine(t,e){return function(s,r,o,a,l,c,u){const h=new eT(s,r,o,a,l,c);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(i){const s=R(i);g("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Ci(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):qt("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=Qh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{g("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(g("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ca(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function gr(n,t){n.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await bd(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function pc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await yT(n);g("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>lc(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>lc(t.remoteStore,s)),n._onlineComponents=t}function gT(n){return n.name==="FirebaseError"?n.code===_.FAILED_PRECONDITION||n.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function yT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await gr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!gT(e))throw e;Ze("Error using user provided cache. Falling back to memory cache: "+e),await gr(n,new fc)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await gr(n,new fc);return n._offlineComponents}async function Xd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await pc(n,n._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await pc(n,new _T))),n._onlineComponents}function ET(n){return Xd(n).then(t=>t.syncEngine)}async function co(n){const t=await Xd(n),e=t.eventManager;return e.onListen=nT.bind(null,t.syncEngine),e.onUnlisten=rT.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=iT.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=oT.bind(null,t.syncEngine),e}function vT(n,t,e={}){const i=new Gt;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Yd({next:d=>{o.enqueueAndForget(()=>Bd(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new I(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new I(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new qd(Us(a.path),u,{includeMetadataChanges:!0,ta:!0});return Ud(r,h)}(await co(n),n.asyncQueue,t,e,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(n,t,e){if(!e)throw new I(_.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function IT(n,t,e,i){if(t===!0&&i===!0)throw new I(_.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function mc(n){if(!w.isDocumentKey(n))throw new I(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Pa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":A()}function ie(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new I(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Pa(n);throw new I(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new I(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new I(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}IT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jd((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new I(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new I(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new I(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ba{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new I(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gc(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Uy;switch(i.type){case"firstParty":return new Wy(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new I(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=_c.get(e);i&&(g("ComponentProvider","Removing Datastore"),_c.delete(e),i.terminate())}(this),Promise.resolve()}}function wT(n,t,e,i={}){var s;const r=(n=ie(n,ba))._getSettings(),o=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ze("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=ht.MOCK_USER;else{a=Cf(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new I(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ht(c)}n._authCredentials=new By(new Kh(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Ks(this.firestore,t,this._query)}}class It{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class oi extends Ks{constructor(t,e,i){super(t,e,Us(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new w(t))}withConverter(t){return new oi(this.firestore,t,this._path)}}function QT(n,t,...e){if(n=Ke(n),arguments.length===1&&(t=Qh.newId()),TT("doc","path",t),n instanceof ba){const i=H.fromString(t,...e);return mc(i),new It(n,null,new w(i))}{if(!(n instanceof It||n instanceof oi))throw new I(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(H.fromString(t,...e));return mc(i),new It(n.firestore,n instanceof oi?n.converter:null,new w(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Dd(this,"async_queue_retry"),this.cu=()=>{const e=mr();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=mr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const e=mr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const e=new Gt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!Ii(t))throw t;g("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const e=this.nu.then(()=>(this._u=!0,t().catch(i=>{this.ou=i,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw qt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this._u=!1,i))));return this.nu=e,e}enqueueAfterDelay(t,e,i){this.lu(),this.uu.indexOf(t)>-1&&(e=0);const s=Aa.createAndSchedule(this,t,e,i,r=>this.Iu(r));return this.su.push(s),s}lu(){this.ou&&A()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const e of this.su)if(e.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.su)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const e=this.su.indexOf(t);this.su.splice(e,1)}}function yc(n){return function(e,i){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class ai extends ba{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new AT}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zd(this),this._firestoreClient.terminate()}}function YT(n,t){const e=typeof n=="object"?n:Lp(),i=typeof n=="string"?n:t||"(default)",s=Vp(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Af("firestore");r&&wT(s,...r)}return s}function Na(n){return n._firestoreClient||Zd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Zd(n){var t,e,i;const s=n._freezeSettings(),r=function(a,l,c,u){return new iE(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Jd(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new mT(n._authCredentials,n._appCheckCredentials,n._queue,r),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this._byteString=t}static fromBase64String(t){try{return new on(yt.fromBase64String(t))}catch(e){throw new I(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new on(yt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new I(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new I(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new I(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=/^__.*__$/;class ST{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new De(t,this.data,this.fieldMask,e,this.fieldTransforms):new wi(t,this.data,e,this.fieldTransforms)}}function ef(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Va{constructor(t,e,i,s,r,o){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ru(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new Va(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.mu({path:i,gu:!1});return s.pu(t),s}yu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.mu({path:i,gu:!1});return s.Ru(),s}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return ps(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(ef(this.Vu)&&CT.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class RT{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||zs(t)}Cu(t,e,i,s=!1){return new Va({Vu:t,methodName:e,Du:i,path:at.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function PT(n){const t=n._freezeSettings(),e=zs(n._databaseId);return new RT(n._databaseId,!!t.ignoreUndefinedProperties,e)}function bT(n,t,e,i,s,r={}){const o=n.Cu(r.merge||r.mergeFields?2:0,t,e,s);of("Data must be an object, but it was:",o,i);const a=sf(i,o);let l,c;if(r.merge)l=new Dt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=NT(t,h,e);if(!o.contains(d))throw new I(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kT(u,d)||u.push(d)}l=new Dt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new ST(new Ct(a),l,c)}function nf(n,t){if(rf(n=Ke(n)))return of("Unsupported field value:",t,n),sf(n,t);if(n instanceof tf)return function(i,s){if(!ef(s.Vu))throw s.Su(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let l=nf(a,s.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(n,t)}return function(i,s){if((i=Ke(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return CE(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=X.fromDate(i);return{timestampValue:ds(s.serializer,r)}}if(i instanceof X){const r=new X(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ds(s.serializer,r)}}if(i instanceof ka)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof on)return{bytesValue:Id(s.serializer,i._byteString)};if(i instanceof It){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ma(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Su(`Unsupported field value: ${Pa(i)}`)}(n,t)}function sf(n,t){const e={};return Yh(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_n(n,(i,s)=>{const r=nf(s,t.fu(i));r!=null&&(e[i]=r)}),{mapValue:{fields:e}}}function rf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof ka||n instanceof on||n instanceof It||n instanceof tf)}function of(n,t,e){if(!rf(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=Pa(e);throw i==="an object"?t.Su(n+" a custom object"):t.Su(n+" "+i)}}function NT(n,t,e){if((t=Ke(t))instanceof Da)return t._internalPath;if(typeof t=="string")return af(n,t);throw ps("Field path arguments must be of type string or ",n,!1,void 0,e)}const DT=new RegExp("[~\\*/\\[\\]]");function af(n,t,e){if(t.search(DT)>=0)throw ps(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Da(...t.split("."))._internalPath}catch{throw ps(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ps(n,t,e,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new I(_.INVALID_ARGUMENT,a+n+l)}function kT(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,e,i,s,r){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new VT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(cf("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class VT extends lf{data(){return super.data()}}function cf(n,t){return typeof t=="string"?af(n,t):t instanceof Da?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new I(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class OT{convertValue(t,e="none"){switch(Re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Se(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw A()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return _n(t,(s,r)=>{i[s]=this.convertValue(r,e)}),i}convertGeoPoint(t){return new ka(Q(t.latitude),Q(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=ua(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(ei(t));default:return null}}convertTimestamp(t){const e=oe(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=H.fromString(t);U(Pd(i));const s=new ni(i.get(1),i.get(3)),r=new w(i.popFirst(5));return s.isEqual(e)||qt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uf extends lf{constructor(t,e,i,s,r,o){super(t,e,i,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Wi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(cf("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class Wi extends uf{data(t={}){return super.data(t)}}class LT{constructor(t,e,i,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Nn(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new Wi(this._firestore,this._userDataWriter,i.key,i,new Nn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new I(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Wi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Nn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Wi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Nn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:FT(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function FT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(n){n=ie(n,It);const t=ie(n.firestore,ai);return vT(Na(t),n._key).then(e=>df(t,n,e))}class hf extends OT{constructor(t){super(),this.firestore=t}convertBytes(t){return new on(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function JT(n,t,e){n=ie(n,It);const i=ie(n.firestore,ai),s=MT(n.converter,t,e);return UT(i,[bT(PT(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Kt.none())])}function ZT(n,...t){var e,i,s;n=Ke(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||yc(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(yc(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(n instanceof It)c=ie(n.firestore,ai),u=Us(n._key.path),l={next:h=>{t[o]&&t[o](df(c,n,h))},error:t[o+1],complete:t[o+2]};else{const h=ie(n,Ks);c=ie(h.firestore,ai),u=h._query;const d=new hf(c);l={next:f=>{t[o]&&t[o](new LT(c,d,h,f))},error:t[o+1],complete:t[o+2]},xT(n._query)}return function(d,f,m,T){const v=new Yd(T),L=new qd(f,v,m);return d.asyncQueue.enqueueAndForget(async()=>Ud(await co(d),L)),()=>{v.Qa(),d.asyncQueue.enqueueAndForget(async()=>Bd(await co(d),L))}}(Na(c),u,a,l)}function UT(n,t){return function(i,s){const r=new Gt;return i.asyncQueue.enqueueAndForget(async()=>aT(await ET(i),s,r)),r.promise}(Na(n),t)}function df(n,t,e){const i=e.docs.get(t._key),s=new hf(n);return new uf(n,s,t._key,i,new Nn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){pn=s})(Dc),jn(new Qe("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new ai(new qy(i.getProvider("auth-internal")),new zy(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new I(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),ee(Fl,"4.5.0",t),ee(Fl,"4.5.0","esm2017")})();var BT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ff={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(n){(function(t,e){n.exports?n.exports=e():t.Toastify=e()})(BT,function(t){var e=function(o){return new e.lib.init(o)},i="1.12.0";e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:i,constructor:e,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||e.defaults.text,this.options.node=o.node||e.defaults.node,this.options.duration=o.duration===0?0:o.duration||e.defaults.duration,this.options.selector=o.selector||e.defaults.selector,this.options.callback=o.callback||e.defaults.callback,this.options.destination=o.destination||e.defaults.destination,this.options.newWindow=o.newWindow||e.defaults.newWindow,this.options.close=o.close||e.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=o.positionLeft||e.defaults.positionLeft,this.options.position=o.position||e.defaults.position,this.options.backgroundColor=o.backgroundColor||e.defaults.backgroundColor,this.options.avatar=o.avatar||e.defaults.avatar,this.options.className=o.className||e.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?e.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||e.defaults.onClick,this.options.offset=o.offset||e.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||e.defaults.ariaLive,this.options.style=o.style||e.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",(function(v){v.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(v){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",(function(v){v.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",(function(v){v.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var d=s("x",this.options),f=s("y",this.options),m=this.options.position=="left"?d:"-"+d,T=this.options.gravity=="toastify-top"?f:"-"+f;o.style.transform="translate("+m+","+T+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=e.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),e.reposition()}).bind(this),400)}},e.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),u,h=0;h<c.length;h++){r(c[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=c[h].offsetHeight;u=u.substr(9,u.length-1);var f=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(c[h].style[u]=l[u]+"px",l[u]+=d+f):r(c[h],"toastify-left")===!0?(c[h].style[u]=o[u]+"px",o[u]+=d+f):(c[h].style[u]=a[u]+"px",a[u]+=d+f)}return this};function s(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return e.lib.init.prototype=e.lib,e})})(ff);var jT=ff.exports;const tI=qT(jT);const WT="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let eI=(n=21)=>{let t="",e=crypto.getRandomValues(new Uint8Array(n));for(;n--;)t+=WT[e[n]&63];return t};export{tI as T,XT as a,QT as d,YT as g,Mp as i,eI as n,ZT as o,JT as s};
//# sourceMappingURL=vendor-451a0b16.js.map
