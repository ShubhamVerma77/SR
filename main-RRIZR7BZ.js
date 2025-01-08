import{a as _}from"./chunk-VNS2DXHJ.js";import{a as z}from"./chunk-WHOHKRXC.js";import{a as O,b as H,c as P,d as D,e as N,f as j,g as R,h as I,i as T}from"./chunk-DESVKOJ3.js";import{k as L,m as M,s as S,t as F}from"./chunk-XYWL7EQH.js";import{Aa as m,Ka as p,Pa as A,W as f,Wa as c,Ya as e,Za as t,_a as a,ea as l,eb as r,fa as s,fb as v,lb as d,nb as E}from"./chunk-POW5AUN2.js";var g=class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["app-error"]],decls:10,vars:0,consts:[[1,"bg-gray-100","h-screen","flex","items-center","justify-center"],[1,"text-center"],[1,"text-9xl","font-bold","text-blue-500"],[1,"text-2xl","md:text-3xl","font-medium","text-gray-800","mt-4"],[1,"text-md","md:text-lg","text-gray-600","mt-2"],["href","/",1,"mt-6","inline-block","px-6","py-3","bg-blue-500","text-white","font-medium","text-lg","rounded-lg","shadow-md","hover:bg-blue-600","focus:outline-none","focus:ring-2","focus:ring-blue-400","focus:ring-offset-2"]],template:function(o,u){o&1&&(e(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"404"),t(),e(4,"p",3),r(5,"Oops! Page not found."),t(),e(6,"p",4),r(7,"The page you are looking for doesn\u2019t exist or has been moved."),t(),e(8,"a",5),r(9,"Go to Homepage"),t()()())},encapsulation:2})};function B(n,i){if(n&1&&(e(0,"tr")(1,"td",2),r(2),t(),e(3,"td",2),r(4),t(),e(5,"td",2),r(6),t()()),n&2){let o=i.$implicit;m(2),v(o.name),m(2),v(o.phonenumber),m(2),v(o.message)}}var C=class n{service=f(z);ngOnInit(){this.FetchUser()}contactus=[];FetchUser(){this.service.getUser().subscribe(i=>{if(i==null){console.log("No data found");return}this.contactus=Object.values(i),console.log(i)})}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["app-users"]],decls:12,vars:1,consts:[[1,"flex","justify-center","items-center","min-h-screen"],[1,"table-auto","text-center","border-collapse"],[1,"border","px-4","py-2"],[4,"ngFor","ngForOf"]],template:function(o,u){o&1&&(e(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),r(5,"Name"),t(),e(6,"th",2),r(7,"Phone Number"),t(),e(8,"th",2),r(9,"Message"),t()()(),e(10,"tbody"),A(11,B,7,3,"tr",3),t()()()),o&2&&(m(11),c("ngForOf",u.contactus))},dependencies:[M,L],encapsulation:2})};var G=(n,i)=>{let o=f(N);return typeof sessionStorage<"u"&&!sessionStorage.getItem("person")?(o.navigate(["/**"]),!1):!0};var U=[{path:"",component:_,title:"SR"},{path:"home",loadComponent:()=>import("./chunk-RDIE7DSO.js").then(n=>n.HomeComponent),title:"Home"},{path:"contact",loadComponent:()=>import("./chunk-7STDGSFA.js").then(n=>n.ContactComponent),title:"Contact"},{path:"about",loadComponent:()=>import("./chunk-GMQYFY74.js").then(n=>n.AboutComponent),title:"About"},{path:"login",loadComponent:()=>import("./chunk-CHVD3QOR.js").then(n=>n.LoginComponent),title:"Login"},{path:"product",loadComponent:()=>import("./chunk-G6QMY23W.js").then(n=>n.ProductsComponent),title:"Product"},{path:"user",component:C,title:"User",canActivate:[G]},{path:"**",component:g,title:"Page not found"}];var V={providers:[S(),E({eventCoalescing:!0}),I(U),P(H()),S(F())]};var y=()=>({exact:!0}),b=class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["app-header"]],decls:25,vars:8,consts:[[1,"text-gray-400","bg-gray-900","body-font"],[1,"container","mx-auto","flex","flex-wrap","p-5","flex-col","md:flex-row","items-center"],[1,"flex","animate-bounce","title-font","font-medium","items-center","text-white","mb-4","md:mb-0"],["xmlns","http://www.w3.org/2000/svg","fill","none","stroke","currentColor","viewBox","0 0 16 16",1,"w-10","h-10","text-white","p-2","bg-green-500","rounded-full"],["fill-rule","evenodd","d","M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"],["fill-rule","evenodd","d","M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"],[1,"ml-3","text-xl"],[1,"md:ml-auto","flex","flex-wrap","items-center","text-base","justify-center"],["href","#","routerLink","/home","routerLinkActive","active","ariaCurrentWhenActive","page",1,"relative","group","mr-5",3,"routerLinkActiveOptions"],[1,"text-gray-300","transition-colors","duration-300","ease-out","group-hover:text-white","active:text-green-500"],[1,"absolute","left-0","bottom-0","w-full","h-0.5","bg-green-500","scale-x-0","group-hover:scale-x-100","origin-left","transition-transform","duration-300","ease-out"],["href","#","routerLink","/about","routerLinkActive","active","ariaCurrentWhenActive","page",1,"relative","group","mr-5",3,"routerLinkActiveOptions"],["href","#","routerLink","/product","routerLinkActive","active","ariaCurrentWhenActive","page",1,"relative","group","mr-5",3,"routerLinkActiveOptions"],["href","#","routerLink","/contact","routerLinkActive","active","ariaCurrentWhenActive","page",1,"relative","group","mr-5",3,"routerLinkActiveOptions"]],template:function(o,u){o&1&&(e(0,"header",0)(1,"div",1)(2,"a",2),l(),e(3,"svg",3),a(4,"path",4)(5,"path",5),t(),s(),e(6,"span",6),r(7,"Codiz !"),t()(),e(8,"nav",7)(9,"a",8)(10,"span",9),r(11," Home "),t(),a(12,"span",10),t(),e(13,"a",11)(14,"span",9),r(15," About "),t(),a(16,"span",10),t(),e(17,"a",12)(18,"span",9),r(19," Services "),t(),a(20,"span",10),t(),e(21,"a",13)(22,"span",9),r(23," Contact "),t(),a(24,"span",10),t()()()()),o&2&&(m(9),c("routerLinkActiveOptions",d(4,y)),m(4),c("routerLinkActiveOptions",d(5,y)),m(4),c("routerLinkActiveOptions",d(6,y)),m(4),c("routerLinkActiveOptions",d(7,y)))},dependencies:[T,j,R],styles:[".active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#22c55e}.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{transform:scaleX(1)}"]})};var w=class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["app-footer"]],decls:27,vars:0,consts:[[1,"text-gray-400","bg-gray-900","body-font"],[1,"bg-black-800","bg-opacity-75"],[1,"container","mx-auto","py-4","px-5","flex","flex-wrap","flex-col","sm:flex-row"],[1,"w-64","flex-shrink-0","md:mx-0","mx-auto","text-center","md:text-left"],[1,"flex","title-font","font-medium","items-center","md:justify-start","justify-center","text-white"],["xmlns","http://www.w3.org/2000/svg","fill","none","stroke","currentColor","viewBox","0 0 16 16",1,"w-10","h-10","text-white","p-2","bg-green-500","rounded-full"],["fill-rule","evenodd","d","M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"],["fill-rule","evenodd","d","M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"],[1,"ml-3","text-xl"],[1,"text-gray-400","text-sm","text-center","sm:text-left"],["href","https://twitter.com/knyttneve","rel","noopener noreferrer","target","_blank",1,"text-gray-500","ml-1"],[1,"inline-flex","sm:ml-auto","sm:mt-0","mt-2","justify-center","sm:justify-start"],[1,"text-gray-400"],["fill","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","viewBox","0 0 24 24",1,"w-5","h-5"],["d","M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"],[1,"ml-3","text-gray-400"],["d","M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"],["fill","none","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","viewBox","0 0 24 24",1,"w-5","h-5"],["width","20","height","20","x","2","y","2","rx","5","ry","5"],["d","M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"],["fill","currentColor","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","0","viewBox","0 0 24 24",1,"w-5","h-5"],["stroke","none","d","M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"],["cx","4","cy","4","r","2","stroke","none"]],template:function(o,u){o&1&&(e(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),l(),e(5,"svg",5),a(6,"path",6)(7,"path",7),t(),s(),e(8,"span",8),r(9,"Codiz !"),t()()(),e(10,"p",9),a(11,"a",10),t(),e(12,"span",11)(13,"a",12),l(),e(14,"svg",13),a(15,"path",14),t()(),s(),e(16,"a",15),l(),e(17,"svg",13),a(18,"path",16),t()(),s(),e(19,"a",15),l(),e(20,"svg",17),a(21,"rect",18)(22,"path",19),t()(),s(),e(23,"a",15),l(),e(24,"svg",20),a(25,"path",21)(26,"circle",22),t()()()()()())},encapsulation:2})};var k=class n{title="RoutingAngular";static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["app-root"]],decls:3,vars:0,template:function(o,u){o&1&&a(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[D,b,w],encapsulation:2})};O(k,V).catch(n=>console.error(n));