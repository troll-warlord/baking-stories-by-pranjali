(function(e){function t(t){for(var r,o,l=t[0],n=t[1],c=t[2],g=0,u=[];g<l.length;g++)o=l[g],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);p&&p(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,l=1;l<a.length;l++){var n=a[l];0!==i[n]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},i={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/baking-stories-by-pranjali/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=n;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("app-nav"),a("v-main",{staticClass:"content"},[a("router-view")],1),a("app-footer")],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"app-nav d-flex",staticStyle:{clear:"both"},attrs:{id:"app-nav"}},[a("v-app-bar",{attrs:{id:"app-nav-bar",fixed:"",color:"blue",dark:"","shrink-on-scroll":"","fade-img-on-scroll":"",src:"https://picsum.photos/1920/1080?random",height:"768"},scopedSlots:e._u([{key:"img",fn:function(t){var r=t.props;return[a("v-img",e._b({attrs:{id:"app-nav-bar-image",gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",r,!1),[a("div",{staticClass:"text-h2 mb-5",attrs:{id:"title"},domProps:{textContent:e._s(e.title)}}),a("div",{staticClass:"text-h5 mb-10",attrs:{id:"subtitle"},domProps:{textContent:e._s(e.subtitle)}}),a("div",{staticClass:"text-h6 mt-10",attrs:{id:"instagram"}},[a("v-icon",{attrs:{large:""}},[e._v(" mdi-instagram ")]),e._v(" "+e._s(e.instagram)+" ")],1),a("div",{staticClass:"text-h6",attrs:{id:"phone"}},[a("v-icon",{attrs:{large:""}},[e._v(" mdi-phone ")]),e._v(" "+e._s(e.phone)+" ")],1)])]}}])},[a("v-app-bar-title",[e._v(" "+e._s(e.title))])],1)],1)},l=[],n={name:"AppNav",data:function(){return{title:"Baking Stories by Pranjali",subtitle:"Baked with love ♥",instagram:"instagram.com/bakingstoriesbypranjali",phone:"+91 98765 43210",searchString:null}}},c=n,p=(a("bdcd"),a("2877")),g=a("6544"),u=a.n(g),m=a("40dc"),d=a("bb78"),h=a("a523"),f=a("132d"),v=a("adda"),b=Object(p["a"])(c,o,l,!1,null,"3097ed48",null),w=b.exports;u()(b,{VAppBar:m["a"],VAppBarTitle:d["a"],VContainer:h["a"],VIcon:f["a"],VImg:v["a"]});var C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"app-footer",attrs:{id:"app-footer"}},[a("v-footer",{staticClass:"blue",attrs:{padless:"",dark:"",absolute:"",app:!0}},[a("v-card",{staticClass:"flex blue text-center",attrs:{flat:"",tile:""}},[a("v-card-title",{staticClass:"white justify-center"},e._l(e.socialLinks,(function(t,r){return a("v-btn",{key:r,staticClass:"mx-4 ma-auto",attrs:{href:t.link,light:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[e._v(" "+e._s(t.icon)+" ")])],1)})),1),a("v-card-text",{staticClass:"py-2 white--text text-center"},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("Baking Stories by Pranjali")])])],1)],1)],1)},y=[],k={name:"AppFooter",data:function(){return{socialLinks:[{icon:"mdi-facebook",link:"https://facebook.com"},{icon:"mdi-twitter",link:"https://twitter.com"},{icon:"mdi-instagram",link:"https://instagram.com/bakingstoriesbypranjali"}]}}},x=k,_=a("8336"),V=a("b0af"),j=a("99d9"),D=a("553a"),S=Object(p["a"])(x,C,y,!1,null,"71859842",null),K=S.exports;u()(S,{VBtn:_["a"],VCard:V["a"],VCardText:j["b"],VCardTitle:j["c"],VContainer:h["a"],VFooter:D["a"],VIcon:f["a"]});var B={name:"App",components:{AppNav:w,AppFooter:K}},O=B,P=a("7496"),T=a("f6c4"),F=Object(p["a"])(O,i,s,!1,null,null,null),I=F.exports;u()(F,{VApp:P["a"],VMain:T["a"]});var R=a("8c4f"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"home pa-0",attrs:{fluid:"",id:"home"}},[a("app-products")],1)},A=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"app-products pa-6",staticStyle:{"margin-top":"800px"},attrs:{fluid:"",id:"app-products"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"9"}},[a("div",{staticClass:"text-h4"},[e._v("Items")])]),a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-select",{attrs:{items:e.allFilters,chips:"",label:"Filters",multiple:"",solo:"",rounded:"","deletable-chips":""},model:{value:e.filters,callback:function(t){e.filters=t},expression:"filters"}})],1)],1),a("v-divider",{staticClass:"mb-8"}),a("card-row",{attrs:{filters:e.filters}})],1)},N=[],H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-lazy",{staticStyle:{margin:"auto"}},[0!=e.getData.length?a("v-row",e._l(e.getData,(function(e){return a("v-col",{key:e.name,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("card-row-item",{attrs:{data:e}})],1)})),1):a("v-row",[a("div",{staticClass:"text-h4"},[e._v("No items found")])])],1)},M=[],W=a("5530"),z=a("2f62"),J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mx-auto my-12 rounded-xl",attrs:{loading:e.loading,hover:"","max-width":"374"}},[a("v-img",{attrs:{src:e.data.images[0].src}}),a("v-card-title",[e._v(e._s(e.data.name))]),a("v-card-text",[a("v-chip-group",{attrs:{column:""}},e._l(e.data.tags,(function(t,r){return a("v-chip",{key:r,attrs:{"x-small":""}},[e._v(" "+e._s(t)+" ")])})),1),a("div",{staticClass:"my-4 text-subtitle-1"},[e._v("$ • Italian, Cafe")]),a("div",{staticClass:"text-truncate"},[e._v(" "+e._s(e.data.description)+" ")])],1),a("v-divider",{staticClass:"ma-4"}),a("v-row",{staticClass:"pr-10 pb-5"},[a("v-spacer"),a("v-col",{attrs:{cols:"3","align-self":"end"}},[a("card-row-item-details",{attrs:{data:e.data}})],1)],1)],1)},L=[],G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{scrollable:"","max-width":"80%"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"deep-purple lighten-2",text:"","align-self":"right",rounded:""}},"v-btn",i,!1),r),[e._v(" Details ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{staticClass:"rounded-xl"},[a("v-card-title",[e._v(e._s(e.data.name))]),a("v-card-text",{staticClass:"body-1"},[a("v-carousel",{staticClass:"rounded-xl",attrs:{"hide-delimiters":"",height:"auto","show-arrows-on-hover":""}},e._l(e.data.images,(function(t,r){return a("v-carousel-item",{key:r,attrs:{transition:"fade-transition",ripple:!0}},[a("v-img",{attrs:{src:t.src,"aspect-ratio":16/9},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1),a("v-row",{staticClass:"mt-5"},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-chip-group",{attrs:{column:""}},e._l(e.data.tags,(function(t,r){return a("v-chip",{key:r,attrs:{small:""}},[e._v(" "+e._s(t)+" ")])})),1),e._v(" "+e._s(e.data.description)+" ")],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-data-table",{attrs:{headers:e.headers,"calculate-widths":!0,items:e.data.pricing,"hide-default-footer":""}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",rounded:"",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")])],1)],1)],1)],1)},Y=[],q={name:"CardRowItemDetails",props:["data"],data:function(){return{dialog:!1,headers:[{text:"Price (₹)",value:"price",sortable:!1},{text:"Weight (g)",value:"weight",sortable:!1}]}}},Q=q,U=a("5e66"),X=a("3e35"),Z=a("cc20"),ee=a("ef9a"),te=a("62ad"),ae=a("8fea"),re=a("169a"),ie=a("490a"),se=a("0fd9"),oe=a("2fa4"),le=Object(p["a"])(Q,G,Y,!1,null,null,null),ne=le.exports;u()(le,{VBtn:_["a"],VCard:V["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VCarousel:U["a"],VCarouselItem:X["a"],VChip:Z["a"],VChipGroup:ee["a"],VCol:te["a"],VDataTable:ae["a"],VDialog:re["a"],VImg:v["a"],VProgressCircular:ie["a"],VRow:se["a"],VSpacer:oe["a"]});var ce={name:"AppCardItem",components:{CardRowItemDetails:ne},props:["data"],data:function(){return{loading:!1,selection:1}},methods:{reserve:function(){var e=this;this.loading=!0,setTimeout((function(){return e.loading=!1}),2e3)}}},pe=ce,ge=a("ce7e"),ue=Object(p["a"])(pe,J,L,!1,null,"4273e080",null),me=ue.exports;u()(ue,{VCard:V["a"],VCardText:j["b"],VCardTitle:j["c"],VChip:Z["a"],VChipGroup:ee["a"],VCol:te["a"],VDivider:ge["a"],VImg:v["a"],VRow:se["a"],VSpacer:oe["a"]});var de={name:"CardRow",components:{CardRowItem:me},props:["filters"],data:function(){return{itemFilters:["Cakes","Brownies","Muffins","Hampers"],eventFilters:["Birthdays","Anniversaries","Baby Showers","Weddings"]}},watch:{filters:function(){this.$store.state.filters=this.filters}},computed:Object(W["a"])({},Object(z["b"])({getData:"applyFilters"}))},he=de,fe=a("b687"),ve=Object(p["a"])(he,H,M,!1,null,null,null),be=ve.exports;u()(ve,{VCol:te["a"],VLazy:fe["a"],VRow:se["a"]});var we={components:{CardRow:be},name:"AppProducts",data:function(){return{allFilters:[{header:"Types"},{text:"Cakes"},{text:"Brownies"},{text:"Muffins"},{text:"Hampers"},{header:"Events"},{text:"Birthdays"},{text:"Anniversaries"},{text:"Baby Showers"},{text:"Weddings"}],filters:[]}}},Ce=we,ye=a("b974"),ke=Object(p["a"])(Ce,$,N,!1,null,"99c70fbc",null),xe=ke.exports;u()(ke,{VCol:te["a"],VContainer:h["a"],VDivider:ge["a"],VRow:se["a"],VSelect:ye["a"]});var _e={name:"Home",components:{AppProducts:xe}},Ve=_e,je=Object(p["a"])(Ve,E,A,!1,null,"851ac47a",null),De=je.exports;u()(je,{VContainer:h["a"]}),r["a"].use(R["a"]);var Se=[{path:"/",name:"Home",component:De},{path:"*",name:"404 Not Found",redirect:De}],Ke=new R["a"]({mode:"history",base:"/baking-stories-by-pranjali/",routes:Se}),Be=Ke,Oe=(a("4de4"),a("caad"),a("2532"),a("e599"));r["a"].use(z["a"]);var Pe=new z["a"].Store({state:{cakes:Oe,filters:[]},getters:{applyFilters:function(e){return 0==e.filters.length?e.cakes:e.cakes.filter((function(t){return e.filters.every((function(e){return t.tags.includes(e)}))}))}},mutations:{},actions:{},modules:{}}),Te=a("f309");r["a"].use(Te["a"]);var Fe=new Te["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Be,store:Pe,vuetify:Fe,render:function(e){return e(I)}}).$mount("#app")},"7f5b":function(e,t,a){},bdcd:function(e,t,a){"use strict";a("7f5b")},e599:function(e){e.exports=JSON.parse('[{"name":"Chocolate Truffle","path":"chocolate-truffle","tags":["Cakes","Hampers"],"description":"Delicios cake made of chocoloate with multiple layers. Delicios cake made of chocoloate with multiple layers. Delicios cake made of chocoloate with multiple layers. Delicios cake made of chocoloate with multiple layers. Delicios cake made of chocoloate with multiple layers. Delicios cake made of chocoloate with multiple layers. Delicios cake made of chocoloate with multiple layers. Delicios cake made of chocoloate with multiple layers. Delicios cake made of chocoloate with multiple layers. Delicios cake made of chocoloate with multiple layers. Delicios cake made of chocoloate with multiple layers. Delicios cake made of chocoloate with multiple layers. ","images":[{"img":true,"src":"images/ChocolateTruffle/img1.jpg","alt":"Chocolate Truffle image 1"},{"img":true,"src":"images/ChocolateTruffle/img2.jpg","alt":"Chocolate Truffle image 2"},{"img":true,"src":"images/ChocolateTruffle/img3.jpg","alt":"Chocolate Truffle image 3"}],"keyIngredients":["Chocolate","Egg","Sugar","Vanila extract"],"type":"Veg","pricing":[{"weight":"0.5 Kg","price":1000},{"weight":"1 Kg","price":200},{"weight":"1.5 Kg","price":300},{"weight":"2 Kg","price":400}],"orderCount":100034},{"name":"Dark Chocolate","path":"dark-chocolate","tags":["Cakes","Hampers"],"description":"Delicios cake made of dark chocoloate with multiple layers","images":[{"img":true,"src":"images/DarkChocolate/img1.jpg","alt":"Dark Chocolate image 1"},{"img":true,"src":"images/DarkChocolate/img2.jpg","alt":"Dark Chocolate image 2"},{"img":true,"src":"images/DarkChocolate/img3.jpg","alt":"Dark Chocolate image 3"}],"keyIngredients":["Chocolate","Egg","Sugar","Vanila extract"],"type":"Non-Veg","pricing":[{"weight":"0.5 Kg","price":100},{"weight":"1 Kg","price":200},{"weight":"1.5 Kg","price":300},{"weight":"2 Kg","price":400}],"orderCount":700},{"name":"Strawberry","path":"strawberry","tags":["Cakes","Birthdays"],"description":"Delicios cake made of strawberry with multiple layers","images":[{"img":true,"src":"images/Strawberry/img1.jpg","alt":"Strawberry image 1"},{"img":true,"src":"images/Strawberry/img2.jpg","alt":"Strawberry image 2"},{"img":true,"src":"images/Strawberry/img3.jpg","alt":"Strawberry image 3"}],"keyIngredients":["Chocolate","Egg","Sugar","Vanila extract"],"type":"Non-Veg","pricing":[{"weight":"0.5 Kg","price":100},{"weight":"1 Kg","price":200},{"weight":"1.5 Kg","price":300},{"weight":"2 Kg","price":400}],"orderCount":700},{"name":"Rasmalai","path":"rasmalai","tags":["Brownies","Hampers"],"description":"Delicios cake made of dark chocoloate with multiple layers","images":[{"img":true,"src":"images/Rasmalai/img1.jpg","alt":"Rasmalai image 1"},{"img":true,"src":"images/Rasmalai/img2.jpg","alt":"Rasmalai image 2"},{"img":true,"src":"images/Rasmalai/img3.jpg","alt":"Rasmalai image 3"}],"keyIngredients":["Chocolate","Egg","Sugar","Vanila extract"],"type":"Non-Veg","pricing":[{"weight":"0.5 Kg","price":100},{"weight":"1 Kg","price":200},{"weight":"1.5 Kg","price":300},{"weight":"2 Kg","price":400}],"orderCount":4443},{"name":"Pineapple","path":"pineapple","tags":["Cakes","Weddings"],"description":"Delicios cake made of dark chocoloate with multiple layers","images":[{"img":true,"src":"images/Pineapple/img1.jpg","alt":"Pineapple image 1"},{"img":true,"src":"images/Pineapple/img2.jpg","alt":"Pineapple image 2"},{"img":true,"src":"images/Pineapple/img3.jpg","alt":"Pineapple image 3"}],"keyIngredients":["Chocolate","Egg","Sugar","Vanila extract"],"type":"Non-Veg","pricing":[{"weight":"0.5 Kg","price":100},{"weight":"1 Kg","price":200},{"weight":"1.5 Kg","price":300},{"weight":"2 Kg","price":400}],"orderCount":433},{"name":"Black Forest","path":"black-forest","tags":["Cakes","Hampers"],"description":"Delicios cake made of dark chocoloate with multiple layers","images":[{"img":true,"src":"images/BlackForest/img1.jpg","alt":"Black Forest image 1"},{"img":true,"src":"images/BlackForest/img2.jpg","alt":"Black Forest image 2"},{"img":true,"src":"images/BlackForest/img3.jpg","alt":"Black Forest image 3"}],"keyIngredients":["Chocolate","Egg","Sugar","Vanila extract"],"type":"Non-Veg","pricing":[{"weight":"0.5 Kg","price":100},{"weight":"1 Kg","price":200},{"weight":"1.5 Kg","price":300},{"weight":"2 Kg","price":400}],"orderCount":120}]')}});
//# sourceMappingURL=app.27b1f6d0.js.map