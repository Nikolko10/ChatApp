"use strict";var precacheConfig=[["/ChatApp/index.html","238e738e74ae4c72d007641bd69fc677"],["/ChatApp/static/css/main.0a340e63.css","0adc64419a9665a0aaf5370271907866"],["/ChatApp/static/js/main.bcb2e278.js","8b7ecae16af074c52228778af2dbf2d0"],["/ChatApp/static/media/OpenSans-Bold.1b0edf91.woff2","1b0edf913fa67e83e788a6611f31dc26"],["/ChatApp/static/media/OpenSans-Bold.226b9213.ttf","226b9213db056b4883c9156684512b57"],["/ChatApp/static/media/OpenSans-Bold.33696c16.eot","33696c1691b434f58dd2887f2fa2a30f"],["/ChatApp/static/media/OpenSans-Light.597c5963.woff2","597c5963957a9ea5a18a32b6846d83ff"],["/ChatApp/static/media/OpenSans-Light.881324fa.ttf","881324fa5d5717d91517a43efe40fb9f"],["/ChatApp/static/media/OpenSans-Light.b180c799.eot","b180c799a87a4cad9108713ebe309686"],["/ChatApp/static/media/OpenSans-Semibold.31a82a9b.eot","31a82a9bde90eec038693f26ada892ad"],["/ChatApp/static/media/OpenSans-Semibold.51b15d27.ttf","51b15d272cef490c68a298039ae41676"],["/ChatApp/static/media/OpenSans-Semibold.59d1fe1e.woff2","59d1fe1ec9438eaed2fbc89a11204b2f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/ChatApp/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});