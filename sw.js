if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.1a72ab99.css",revision:null},{url:"assets/index.6a70de84.js",revision:null},{url:"index.html",revision:"47b3a4a4c52bad1ce921084910be4af1"},{url:"favicon.ico",revision:"e40b3b263e5a49ba5de63537bda22cfd"},{url:"apple-touch-icon.png",revision:"cd873176aa48c9afacce95e08d3e29ee"},{url:"pwa-192x192.png",revision:"2c26be8883391b7d71b96bcf2fa72d1f"},{url:"pwa-512x512.png",revision:"15befe7ceedf51fd4263df2dcc88f31b"},{url:"manifest.webmanifest",revision:"6afc09a1c1e53b5f487222307c6840eb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
