(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6542cd13fd5dd1bcffd4":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return i}),n.d(t,"e",function(){return s}),n.d(t,"d",function(){return u});var r=n("a28fc3c963a1d4d1a2e5"),a=function(e){return e.get("global")},o=function(){return Object(r.a)(a,function(e){return e.get("currentUser")})},c=function(){return Object(r.a)(a,function(e){return e.get("loading")})},i=function(){return Object(r.a)(a,function(e){return e.get("error")})},s=function(){return Object(r.a)(a,function(e){return e.getIn(["userData","repositories"])})},u=function(){return Object(r.a)(a,function(e){return e.getIn(["userData","content"])})}},a72b40110d9c31c9b5c5:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"f",function(){return o}),n.d(t,"e",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return u});var r=n("fcb99a06256635f70435");function a(){return{type:r.d}}function o(e,t){return{type:r.f,repos:e,username:t}}function c(e){return{type:r.e,error:e}}function i(e){return{type:r.a,page:e}}function s(e){return{type:r.c,content:e}}function u(e){return{type:r.b,error:e}}},adc20f99e57c573c589c:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=n("8a2d1b95e05b6a321e74"),c=n.n(o),i=n("5ef9de3df8d92ea0e41c"),s=n.n(i),u=n("a1cf5d6fa4ed65a6ddd5"),f=n.n(u),l=n("f3b0ff1628e56352bcbf"),d=n.n(l),p=n("5fa3f8487e09c6182715"),b=n.n(p),h=n("6a4f9c383785f9168266"),g=n.n(h),m=n("f2873ecf7390fe7d7c89"),y=n.n(m),v=n("cc13decd9f9c09598c2f"),w="@@saga-injector/restart-on-remount",j="@@saga-injector/daemon",O="@@saga-injector/once-till-unmount",k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S=[w,j,O],x=function(e){return g()(b()(e)&&!f()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},P=function(e){var t={saga:d.a,mode:function(e){return b()(e)&&S.includes(e)}};g()(y()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function R(e){return Object(v.a)(e),{injectSaga:function(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments[2];t||Object(v.a)(e);var o=k({},r,{mode:r.mode||w}),c=o.saga,i=o.mode;x(n),P(o);var s=Reflect.has(e.injectedSagas,n);(!s||s&&i!==j&&i!==O)&&(e.injectedSagas[n]=k({},o,{task:e.runSaga(c,a)}))}}(e,!0),ejectSaga:function(e,t){return function(n){if(t||Object(v.a)(e),x(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==j&&(r.task.cancel(),e.injectedSagas[n]="done")}}}(e,!0)}}var E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function A(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,n=e.saga,r=e.mode;return function(e){var o=function(o){function c(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n=A(this,(e=c.__proto__||Object.getPrototypeOf(c)).call.apply(e,[this].concat(a))),n.injectors=R(n.context.store),A(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,a.a.Component),E(c,[{key:"componentWillMount",value:function(){(0,this.injectors.injectSaga)(t,{saga:n,mode:r},this.props)}},{key:"componentWillUnmount",value:function(){(0,this.injectors.ejectSaga)(t)}},{key:"render",value:function(){return a.a.createElement(e,this.props)}}]),c}();return o.WrappedComponent=e,o.contextTypes={store:c.a.object.isRequired},o.displayName="withSaga("+(e.displayName||e.name||"Component")+")",s()(o,e)}}},c611ca373eec6f4e262d:function(e,t,n){"use strict";var r=n("deb1edf8e03fc2092ec7").a.h1.withConfig({displayName:"H1"})(["font-size:2em;margin-bottom:0.25em;"]);t.a=r},cc13decd9f9c09598c2f:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("f2873ecf7390fe7d7c89"),a=n.n(r),o=n("f3b0ff1628e56352bcbf"),c=n.n(o),i=n("d3a850c4000d77bccc89"),s=n.n(i),u=n("6a4f9c383785f9168266"),f=n.n(u);function l(e){var t={dispatch:c.a,subscribe:c.a,getState:c.a,replaceReducer:c.a,runSaga:c.a,injectedReducers:s.a,injectedSagas:s.a};f()(a()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=n("8a2d1b95e05b6a321e74"),c=n.n(o),i=n("5ef9de3df8d92ea0e41c"),s=n.n(i),u=n("6a4f9c383785f9168266"),f=n.n(u),l=n("a1cf5d6fa4ed65a6ddd5"),d=n.n(l),p=n("f3b0ff1628e56352bcbf"),b=n.n(p),h=n("5fa3f8487e09c6182715"),g=n.n(h),m=n("cc13decd9f9c09598c2f"),y=n("491cc2e27aa2b4221847");function v(e){return Object(m.a)(e),{injectReducer:function(e,t){return function(n,r){t||Object(m.a)(e),f()(g()(n)&&!d()(n)&&b()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(y.a)(e.injectedReducers)))}}(e,!0)}}var w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,n=e.reducer;return function(e){var r=function(r){function o(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var r=arguments.length,a=Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=n=j(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a))),n.injectors=v(n.context.store),j(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,a.a.Component),w(o,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(t,n)}},{key:"render",value:function(){return a.a.createElement(e,this.props)}}]),o}();return r.WrappedComponent=e,r.contextTypes={store:c.a.object.isRequired},r.displayName="withReducer("+(e.displayName||e.name||"Component")+")",s()(r,e)}}},e669355c7f6c57fa84d4:function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=(n("0d7f0986bcd2f33d8a2a"),n("c611ca373eec6f4e262d"),n("c24bed51432614143de4"),n("bc81a7c30e2e0ff4f7ca")),c=n("fd107da5869b7ae197ce"),i=n.n(c),s=n("713e75a5d913fc7297dd"),u=n("f785ee5e734b0d324a31"),f=n("9dd8920a108c4e3b44d0"),l=(n("8a2d1b95e05b6a321e74"),n("6c68d13fe9e3e77d8fc4")),d=n("fcb99a06256635f70435"),p=n("a72b40110d9c31c9b5c5"),b=n("f363639bc5c3c97af546"),h=n("a28fc3c963a1d4d1a2e5"),g=n("54f683fcda7806277002"),m=Object(g.fromJS)({page:""});var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments[1];switch(t.type){case"REMEOVEME":return e.set("username",t.name.replace(/@/gi,""));default:return e}},v=function(e){return e.get("global")},w=function(){return Object(h.a)(v,function(e){return e.getIn(["userData","page"])})},j=regeneratorRuntime.mark(k),O=regeneratorRuntime.mark(S);function k(){var e,t,n,r;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(l.c)(w());case 2:return e=a.sent,t="README.md","page1"===e&&(t="Algemeen.md"),"page2"===e&&(t="Voorzieningen.md"),n="https://raw.githubusercontent.com/maanenh/sauerland/master/content/HetHuisje/"+t,a.prev=7,a.next=10,Object(l.a)(b.a,n);case 10:return r=a.sent,console.log("response: "+e+" / "+r),a.next=14,Object(l.b)(Object(p.c)(r));case 14:a.next=20;break;case 16:return a.prev=16,a.t0=a.catch(7),a.next=20,Object(l.b)(Object(p.d)(a.t0));case 20:case"end":return a.stop()}},j,this,[[7,16]])}function S(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.d)(d.a,k);case 2:case"end":return e.stop()}},O,this)}var x=n("d7dd51e1bf6bfc2c9c3d"),P=n("ab4cb61bcb2dc161defb"),R=n("d95b0cf107403b178365"),E=n("adc20f99e57c573c589c"),A=n("6542cd13fd5dd1bcffd4");n.d(t,"mapDispatchToProps",function(){return M});var B,W=(B="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,r){var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={}),t&&a)for(var c in a)void 0===t[c]&&(t[c]=a[c]);else t||(t=a||{});if(1===o)t.children=r;else if(o>1){for(var i=Array(o),s=0;s<o;s++)i[s]=arguments[s+3];t.children=i}return{$$typeof:B,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var T={position:"fixed",top:"110px"},D={position:"static"},C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),_(t,[{key:"componentDidMount",value:function(){console.log("DITMOUNT="+this.props.match.params.page),this.props.onSubmitForm(this.props.match.params.page)}},{key:"componentDidUpdate",value:function(e){console.log("COMPONENT DID UPDATE"),e.match.params.page!==this.props.match.params.page&&(console.log("page changes="+this.props.match.params.page),this.props.onSubmitForm(this.props.match.params.page));var t=location.hash;t&&(t=t.substring(1));var n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth",block:"center"})}},{key:"render",value:function(){console.log("RENDER");var e=this.props,t=(e.loading,e.error,e.content),n=this.props.match.params.page;return W(s.a,{},void 0,W(f.a,{style:{height:"79px"}}),W(f.a,{},void 0,W(u.a,{md:"0",lg:"2",className:"d-none d-lg-block",style:D},void 0,W("aside",{style:T},void 0,W("div",{},void 0,W(o.NavHashLink,{smooth:!0,to:"#sec1"},void 0,"sec1"),W("br",{}),W(o.NavHashLink,{smooth:!0,to:"#sec2"},void 0,"sec2")))),W(u.a,{style:D,lg:"10"},void 0,W("span",{className:"anchor",id:"sec1"}),W("h5",{},void 0,"One ",n),W(i.a,{className:"image-example",source:t,escapeHtml:!1,transformImageUri:function(e){console.log("imgUri######## ="+e);var t="https://raw.githubusercontent.com/maanenh/sauerland/master/content/HetHuisje/"+e;return console.log("IMAGE URL",t),t},renderers:{ximage:function(e){return console.log("renderer ************:",e),W("p",{},void 0,e.value)},paragraph:function(e){var t=e.children;if(t&&t[0]&&t[0].props&&t[0].props.value){console.log("children[0].props.value",t[0].props.value);var n=function(e){if(!/^\{:.*\}\n*$/.test(e))return[];for(var t=/(?:^|\W)\.([A-Za-z0-9_-]+)(?!\w)/g,n=[],r=void 0;r=t.exec(e);)n.push(r[1]);return n}(t[0].props.value);if(n.length>0){var r=n.join(" ");console.log("CLASSES",r),console.log("CHILD=",t[0]);var a=t.slice(1);return W("p",{className:r},void 0,a)}}return W("p",{},void 0,t)}}}),W("hr",{}),W("span",{className:"anchor",id:"sec2"}),W("h5",{},void 0,"Two"),W("p",{},void 0,"xxx Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog."),W("p",{},void 0,"Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland."),W("p",{},void 0,"Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland."),W("p",{},void 0,"Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog."),W("p",{},void 0,"Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland."),W("p",{},void 0,"Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog."),W("p",{},void 0,"Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland."),W("hr",{}))))}}]),t}();function M(e){return{onSubmitForm:function(t){console.log("evt",t),e(Object(p.a)(t))}}}var H=Object(h.b)({content:Object(A.d)(),loading:Object(A.c)(),error:Object(A.b)()}),I=function(e,t){return console.log("WRAPPER",e),t},N=I("withConnect",Object(x.connect)(H,M)),L=I("withReduder",Object(R.a)({key:"content",reducer:y})),V=I("withSage",Object(E.a)({key:"content",saga:S}));t.default=Object(P.compose)(L,V,N)(C)},f363639bc5c3c97af546:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});n("81466c1910d9b02d71b2");function r(e){return 204===e.status||205===e.status?null:e.text()}function a(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function o(t,n){return e(t,n).then(a).then(r)}}).call(this,n("5e511fa944f88972e69c"))}}]);