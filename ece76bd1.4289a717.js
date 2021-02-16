(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{74:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),s=a.n(r),i=a(80),l=a(89),c=a(82),o=a(22),m=a(83),u=a(75),p=a.n(u);const d=[{title:"Multiple Upstreams",description:s.a.createElement(s.a.Fragment,null,"Consolidate access to multiple upstream GraphQL servers via a single GraphQL gateway server. Introspection of the upstream server to discover their GraphQL schemas.")},{title:"Configuration",description:s.a.createElement(s.a.Fragment,null,"The configuration uses GraphQL queries to define which upstream fields and types can be accessed. Upstream types, that are accessible, are automatically merged into the gateway schema.")},{title:"Avoid type conflicts",description:s.a.createElement(s.a.Fragment,null,"Type conflict due to the same type name existing in multiple upstream servers can be avoided by renaming types in the gateway. Supports GraphQL Queries, Mutations, and Subscriptions")},{title:"Dataloader pattern",description:s.a.createElement(s.a.Fragment,null,"Production mode settings to avoid the gateway's schema from dynamically changing due to changes in the upstream schemas. Uses the dataloader pattern to batch multiple query requests to the upstream servers.")},{title:"OpenAPI support",description:s.a.createElement(s.a.Fragment,null,"Link the graphs of different upstream servers by defining additional link fields. Web based configuration UI OpenAPI based upstream servers (get automatically converted to a GraphQL Schema)")}];function h({title:e,description:t}){return s.a.createElement("div",{className:Object(i.a)("col col--4",p.a.feature)},s.a.createElement("h3",null,e),s.a.createElement("p",null,t))}t.default=function(){const e=Object(o.default)(),{siteConfig:t={}}=e;return s.a.createElement(l.a,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},s.a.createElement("header",{className:Object(i.a)("hero hero--primary",p.a.heroBanner)},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"hero__title"},t.title),s.a.createElement("p",{className:"hero__subtitle"},t.tagline),s.a.createElement("div",{className:p.a.buttons},s.a.createElement(c.a,{className:Object(i.a)("button  button--outline button--secondary button--lg",p.a.getStarted),to:Object(m.a)("docs/")},"Get Started")))),s.a.createElement("main",null,d&&d.length>0&&s.a.createElement("section",{className:p.a.features},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},d.map(((e,t)=>s.a.createElement(h,Object(n.a)({key:t},e)))))))))}}}]);