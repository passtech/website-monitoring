(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return x}});var l=t(85893),r=t(9008),u=t.n(r),s=t(67294),d=t(45697),n=t.n(d);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},o.apply(this,arguments)}function i(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var v=(0,s.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,d=i(e,["color","size"]);return s.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),s.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.createElement("polyline",{points:"17 6 23 6 23 12"}))}));v.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},v.displayName="TrendingUp";var c=v;function T(){return T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},T.apply(this,arguments)}function Z(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var h=(0,s.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,d=Z(e,["color","size"]);return s.createElement("svg",T({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),s.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),s.createElement("polyline",{points:"17 18 23 18 23 12"}))}));h.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},h.displayName="TrendingDown";var p=h,g=t(74041),f=t(18121),_=t(49384),b={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},y=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=b[e],l=a[0],r=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,_.BE)(r)-(0,_.BE)(l):t.reverse?l-r:r-l}(e.key,e.values)>0?(0,l.jsx)(c,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(p,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return b[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],m=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in b})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var r=l[0],u=l[l.length-1],s=b[t].treshold;(!s||Math.abs(r-u)>(s||0))&&r!==u&&(a[t]=[r,u])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(f.s,{title:(0,_.p5)(e),url:"/url/".concat(encodeURIComponent((0,_.N0)(e))),children:(0,l.jsx)(g.Table,{columns:y,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},G=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2023-06-01T09:34:07.000Z","value":8}],"httpGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A+"}],"nmapGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2023-06-01T09:34:07.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"dependabotGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"E"}],"dependabotCount":[{"date":"2023-06-01T09:34:07.000Z","value":26}],"testsslExpireSoon":[{"date":"2023-06-01T09:34:07.000Z","value":false}],"testsslExpireDate":[{"date":"2023-06-01T09:34:07.000Z","value":"2023-07-13T00:27:00.000Z"}],"testsslGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A+"}],"cookiesGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"B"}],"cookiesCount":[{"date":"2023-06-01T09:34:07.000Z","value":2}],"trackersGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"trackersCount":[{"date":"2023-06-01T09:34:07.000Z","value":0}],"lighthouse_performance":[{"date":"2023-06-01T09:34:07.000Z","value":0.25}],"lighthouse_performanceGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"E"}],"lighthouse_accessibility":[{"date":"2023-06-01T09:34:07.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2023-06-01T09:34:07.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-06-01T09:34:07.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-06-01T09:34:07.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"E"}],"declaration-a11y":[{"date":"2023-06-01T09:34:07.000Z","value":"C"}],"ecoindexGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"E"}]},"https://beta.gouv.fr":{"404":[{"date":"2023-06-01T09:34:07.000Z","value":12}],"httpGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"D+"}],"nmapGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2023-06-01T09:34:07.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2023-06-01T09:34:07.000Z","value":false}],"testsslExpireDate":[{"date":"2023-06-01T09:34:07.000Z","value":"2023-06-23T07:23:00.000Z"}],"testsslGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A+"}],"cookiesGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"B"}],"cookiesCount":[{"date":"2023-06-01T09:34:07.000Z","value":2}],"trackersGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"trackersCount":[{"date":"2023-06-01T09:34:07.000Z","value":0}],"lighthouse_performance":[{"date":"2023-06-01T09:34:07.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2023-06-01T09:34:07.000Z","value":0.92}],"lighthouse_accessibilityGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2023-06-01T09:34:07.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-06-01T09:34:07.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-06-01T09:34:07.000Z","value":0.6}],"lighthouse_pwaGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"C"}],"declaration-a11y":[{"date":"2023-06-01T09:34:07.000Z","value":"C"}],"ecoindexGrade":[{"date":"2023-06-01T09:34:07.000Z","value":"B"}]},"https://demo.tech.fr":{"404":[{"date":"2023-06-01T15:09:54.000Z","value":"A+"}],"httpGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2023-06-01T15:09:54.000Z","value":false}],"testsslExpireDate":[{"date":"2023-06-01T15:09:54.000Z","value":"2023-07-31T10:49:00.000Z"},{"date":"2023-07-02T01:24:20.000Z","value":"2023-09-29T10:49:00.000Z"},{"date":"2023-09-03T01:01:08.000Z","value":"2023-11-28T10:49:00.000Z"},{"date":"2023-11-05T01:08:09.670Z","value":"2024-01-27T10:49:00.000Z"}],"testsslGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"A"}],"cookiesGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"B"},{"date":"2023-07-16T01:30:19.000Z","value":"C"},{"date":"2023-07-23T01:16:59.000Z","value":"B"},{"date":"2023-07-30T01:13:21.000Z","value":"C"},{"date":"2023-08-06T01:01:29.000Z","value":"B"},{"date":"2023-09-17T01:02:14.000Z","value":"C"},{"date":"2023-10-08T01:03:01.000Z","value":"B"},{"date":"2023-10-22T01:08:41.000Z","value":"C"},{"date":"2023-10-29T01:09:15.000Z","value":"B"},{"date":"2023-11-05T01:08:09.670Z","value":"C"}],"cookiesCount":[{"date":"2023-06-01T15:09:54.000Z","value":2},{"date":"2023-07-16T01:30:19.000Z","value":3},{"date":"2023-07-23T01:16:59.000Z","value":2},{"date":"2023-07-30T01:13:21.000Z","value":3},{"date":"2023-08-06T01:01:29.000Z","value":2},{"date":"2023-09-17T01:02:14.000Z","value":3},{"date":"2023-10-08T01:03:01.000Z","value":2},{"date":"2023-10-22T01:08:41.000Z","value":3},{"date":"2023-10-29T01:09:15.000Z","value":2},{"date":"2023-11-05T01:08:09.670Z","value":3}],"trackersGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"B"}],"trackersCount":[{"date":"2023-06-01T15:09:54.000Z","value":2}],"lighthouse_performance":[{"date":"2023-06-01T15:09:54.000Z","value":0.98087158203125},{"date":"2023-06-04T01:25:33.000Z","value":0.9808673858642578},{"date":"2023-06-11T01:21:44.000Z","value":0.9808006286621094},{"date":"2023-06-18T01:21:16.000Z","value":0.9763339996337891},{"date":"2023-06-25T01:26:44.000Z","value":0.9762636184692383},{"date":"2023-07-02T01:24:20.000Z","value":0.9763267517089844},{"date":"2023-07-09T01:27:58.000Z","value":0.9765567779541016},{"date":"2023-07-16T01:30:19.000Z","value":0.9765344619750976},{"date":"2023-07-23T01:16:59.000Z","value":0.9765094757080078},{"date":"2023-07-30T01:13:21.000Z","value":0.987669563293457},{"date":"2023-08-06T01:01:29.000Z","value":0.9877811431884765},{"date":"2023-08-13T00:59:08.000Z","value":0.9888345718383789},{"date":"2023-08-27T01:03:12.000Z","value":0.994483757019043},{"date":"2023-09-03T01:01:08.000Z","value":0.9942909240722656},{"date":"2023-09-10T01:01:38.000Z","value":0.9939773559570313},{"date":"2023-09-17T01:02:14.000Z","value":0.9937631607055664},{"date":"2023-09-24T01:01:52.000Z","value":0.9934730529785156},{"date":"2023-10-01T01:07:05.000Z","value":0.9927703857421875},{"date":"2023-10-08T01:03:01.000Z","value":0.9924808502197265},{"date":"2023-10-15T01:05:51.000Z","value":0.9926361083984375},{"date":"2023-10-22T01:08:41.000Z","value":0.9924654006958008},{"date":"2023-10-29T01:09:15.000Z","value":0.9925559997558594},{"date":"2023-11-05T01:08:09.670Z","value":0.9924982070922852}],"lighthouse_performanceGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2023-06-01T15:09:54.000Z","value":0.73},{"date":"2023-07-30T01:13:21.000Z","value":0.7}],"lighthouse_accessibilityGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2023-06-01T15:09:54.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-06-01T15:09:54.000Z","value":0.77},{"date":"2023-07-30T01:13:21.000Z","value":0.83}],"lighthouse_seoGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"B"}],"lighthouse_pwa":[{"date":"2023-06-01T15:09:54.000Z","value":0.9}],"lighthouse_pwaGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"A"}],"declaration-a11y":[{"date":"2023-06-01T15:09:54.000Z","value":"F"}],"ecoindexGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"C"},{"date":"2023-07-30T01:13:21.000Z","value":"A"}],"declaration-rgpd":[]},"https://www.bimcloud.fr":{"404":[{"date":"2023-06-01T15:09:54.000Z","value":"A+"}],"httpGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2023-06-01T15:09:54.000Z","value":false}],"testsslExpireDate":[{"date":"2023-06-01T15:09:54.000Z","value":"2023-07-20T10:50:00.000Z"},{"date":"2023-06-25T01:26:44.000Z","value":"2023-09-18T10:50:00.000Z"},{"date":"2023-08-20T01:04:49.000Z","value":"2023-11-17T10:50:00.000Z"},{"date":"2023-10-22T01:08:41.000Z","value":"2024-01-16T10:50:00.000Z"}],"testsslGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"A"}],"cookiesGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"A"}],"cookiesCount":[{"date":"2023-06-01T15:09:54.000Z","value":0}],"trackersGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"A"}],"trackersCount":[{"date":"2023-06-01T15:09:54.000Z","value":0}],"lighthouse_performance":[{"date":"2023-06-01T15:09:54.000Z","value":0.8310005187988281},{"date":"2023-06-04T01:25:33.000Z","value":0.8309988021850586},{"date":"2023-06-11T01:21:44.000Z","value":0.8309944152832032},{"date":"2023-06-18T01:21:16.000Z","value":0.8179372787475586},{"date":"2023-06-25T01:26:44.000Z","value":0.8179346084594726},{"date":"2023-07-02T01:24:20.000Z","value":0.8179407119750977},{"date":"2023-07-09T01:27:58.000Z","value":0.8179389953613281},{"date":"2023-07-16T01:30:19.000Z","value":0.8172296524047852},{"date":"2023-07-23T01:16:59.000Z","value":0.8171281814575195},{"date":"2023-07-30T01:13:21.000Z","value":0.8170326232910157},{"date":"2023-08-06T01:01:29.000Z","value":0.8170309066772461},{"date":"2023-08-13T00:59:08.000Z","value":0.8161079406738281},{"date":"2023-08-20T01:04:49.000Z","value":0.8161113739013672},{"date":"2023-08-27T01:03:12.000Z","value":0.8406454086303711},{"date":"2023-09-03T01:01:08.000Z","value":0.8406436920166016},{"date":"2023-09-10T01:01:38.000Z","value":0.8406471252441406},{"date":"2023-09-17T01:02:14.000Z","value":0.8406488418579101},{"date":"2023-09-24T01:01:52.000Z","value":0.8399442672729492},{"date":"2023-10-01T01:07:05.000Z","value":0.8399459838867187},{"date":"2023-10-22T01:08:41.000Z","value":0.8399442672729492},{"date":"2023-11-05T01:08:09.670Z","value":0.8399454116821289}],"lighthouse_performanceGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"B"},{"date":"2023-08-27T01:03:12.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2023-06-01T15:09:54.000Z","value":0.8}],"lighthouse_accessibilityGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2023-06-01T15:09:54.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"A"}],"lighthouse_seo":[{"date":"2023-06-01T15:09:54.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2023-06-01T15:09:54.000Z","value":0.6}],"lighthouse_pwaGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"C"}],"declaration-a11y":[{"date":"2023-06-01T15:09:54.000Z","value":"F"}],"ecoindexGrade":[{"date":"2023-06-01T15:09:54.000Z","value":"B"}],"declaration-rgpd":[]}}'),x=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u(),{children:(0,l.jsx)("title",{children:"Evolutions - Dashlord"})}),(0,l.jsx)(m,{trends:G})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return T}});var l=t(85893),r=(t(67294),t(94184)),u=t.n(r),s=t(659),d=t(73973),n=t(83206),o=t(41664),i=t.n(o),v=t(75670),c=t.n(v),T=function(e){var a=e.title,t=e.children,r=e.info,o=e.url,v=e.urlText,T=void 0===v?"":v,Z=e.className,h=e.isExternal,p=void 0!==h&&h;return(0,l.jsxs)("div",{className:u()(c().container,Z),children:[(0,l.jsxs)("div",{className:c().banner,children:[(0,l.jsx)("h5",{className:c().mainTitle,children:a}),r&&(0,l.jsx)(s.Z,{overlay:r,children:(0,l.jsx)(d.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),o&&(p?(0,l.jsx)("a",{style:{float:"right"},href:o,target:"_blank",rel:"noreferrer noopener",children:T}):(0,l.jsx)(i(),{prefetch:!1,href:o,children:(0,l.jsxs)("a",{style:{float:"right"},children:[T,(0,l.jsx)(n.Z,{})]})}))]}),(0,l.jsx)("div",{className:c().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return a=21105,e(e.s=a);var a}));var a=e.O();_N_E=a}]);