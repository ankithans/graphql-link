(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{123:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(124);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}})},124:function(e,t,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(0));t.default=function(e){var t=l.useState(0),a=t[0],n=t[1],r=e.transitionDuration||400,i=e.delay||50,c=e.wrapperTag||"div",s=e.childTag||"div",o=void 0===e.visible||e.visible;return l.useEffect((function(){var t=l.default.Children.count(e.children);if(o||(t=0),t==a){var c=setTimeout((function(){e.onComplete&&e.onComplete()}),r);return function(){return clearTimeout(c)}}var s=t>a?1:-1,u=setTimeout((function(){n(a+s)}),i);return function(){return clearTimeout(u)}}),[l.default.Children.count(e.children),i,a,o,r]),l.default.createElement(c,{className:e.className},l.default.Children.map(e.children,(function(t,n){return l.default.createElement(s,{className:e.childClassName,style:{transition:"opacity "+r+"ms, transform "+r+"ms",transform:a>n?"none":"translateY(20px)",opacity:a>n?1:0}},t)})))}},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(90),l=a(22),c=[{title:"Multiple Upstreams",description:r.a.createElement(r.a.Fragment,null,"Consolidate access to multiple upstream GraphQL servers via a single GraphQL gateway server. Introspection of the upstream server to discover their GraphQL schemas.")},{title:"Avoid type conflicts",description:r.a.createElement(r.a.Fragment,null,"Type conflict due to the same type name existing in multiple upstream servers can be avoided by renaming types in the gateway. Supports GraphQL Queries, Mutations, and Subscriptions")},{title:"Dataloader pattern",description:r.a.createElement(r.a.Fragment,null,"Production mode settings to avoid the gateway's schema from dynamically changing due to changes in the upstream schemas. Uses the dataloader pattern to batch multiple query requests to the upstream servers.")},{title:"OpenAPI support",description:r.a.createElement(r.a.Fragment,null,"Link the graphs of different upstream servers by defining additional link fields. Web based configuration UI OpenAPI based upstream servers (get automatically converted to a GraphQL Schema)")}];function s(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row homebody"},c.map((function(e,t){return r.a.createElement("div",{key:t,className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,e.title)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:"card__footer"})))}))))}var o=a(85),u=a(84),m=(a(76),a(123)),d=a.n(m);function p(){return r.a.createElement("div",{className:"main"},r.a.createElement(d.a,{transitionDuration:"500"},r.a.createElement("div",{className:"main__container"},r.a.createElement("div",{className:"main__content"},r.a.createElement("h1",null,"GraphQL Link"),r.a.createElement("h2",null),r.a.createElement("p",null,"is a GraphQL Gateway that lets proxy to other graphQL servers"),r.a.createElement("button",{className:"main__btn"},r.a.createElement(u.a,{to:Object(o.a)("docs/")},"Get Started"))),r.a.createElement("div",{className:"main__img--container"},r.a.createElement("img",{id:"main__img",src:"../../../static/img/logo_without_text_3.png"})))))}t.default=function(){const e=Object(l.default)(),{siteConfig:t={}}=e;return r.a.createElement(i.a,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},r.a.createElement(p,null),r.a.createElement("main",null,r.a.createElement(s,null)))}}}]);