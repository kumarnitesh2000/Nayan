/*! For license information please see main.3f295c95.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{76:function(e,t,a){e.exports=a(90)},81:function(e,t,a){},82:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),c=(a(81),a(9)),i=(a(71),a(82),a(97)),s=a(65),u=a(43),m=a(57);var h=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2);return t[0],t[1],r.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:"lignt",variant:"dark",style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement(i.a,null,r.a.createElement(m.a.Brand,{href:"#home"},r.a.createElement("img",{src:"http://www.nayanevents.com/images/logo.png",width:150,height:80,alt:"Nayan Logo"})),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(u.a,{className:"me-auto"},r.a.createElement(u.a.Link,{href:"/",className:"text-info mx-1"},r.a.createElement("h5",null," Home")),r.a.createElement(u.a.Link,{href:"/aboutUs",className:"text-info mx-1"},r.a.createElement("h5",null,"About Us ")),r.a.createElement(u.a.Link,{href:"/gallery",className:"text-info mx-1"},r.a.createElement("h5",null,"Gallery"," ")),r.a.createElement(u.a.Link,{href:"/events",className:"text-info mx-1"},r.a.createElement("h5",null,"Events"," ")),r.a.createElement(u.a.Link,{className:"text-info mx-1"},r.a.createElement(s.b,{to:"/ContactUs",className:"text-info"},r.a.createElement("h5",null,"Contact Us")))))))},f=a(98),p=a(72),d=(a(89),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(f.a,{className:"text-light text-center",style:{backgroundColor:"gray"}},r.a.createElement(p.a,{className:"p-4"},r.a.createElement("b",null,"All Rights Reserved. \xa9 2023 Nayanevents")))))}),g=a(13),v=a(99),E=a(10),y=a(50);function w(){w=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(B){i=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var l=t&&t.prototype instanceof h?t:h,o=Object.create(l.prototype),c=new O(r||[]);return n(o,"_invoke",{value:x(e,a,c)}),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(B){return{type:"throw",arg:B}}}e.wrap=s;var m={};function h(){}function f(){}function p(){}var d={};i(d,l,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(k([])));v&&v!==t&&a.call(v,l)&&(d=v);var E=p.prototype=h.prototype=Object.create(d);function y(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;n(this,"_invoke",{value:function(n,l){function o(){return new t((function(r,o){!function n(r,l,o,c){var i=u(e[r],e,l);if("throw"!==i.type){var s=i.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(m).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,c)}))}c(i.arg)}(n,l,r,o)}))}return r=r?r.then(o,o):o()}})}function x(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return M()}for(a.method=r,a.arg=l;;){var o=a.delegate;if(o){var c=N(o,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=u(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===m)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}function N(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var l=r.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function k(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:M}}function M(){return{value:void 0,done:!0}}return f.prototype=p,n(E,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:f,configurable:!0}),f.displayName=i(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},y(b.prototype),i(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var o=new b(s(t,a,n,r),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(E),i(E,c,"Generator"),i(E,l,(function(){return this})),i(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],o=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(c&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),L(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;L(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:k(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var b=function(e){var t=e.users;if(console.log("users length:::",t.length),0===t.length)return null;var a=function(){var e=Object(g.a)(w().mark((function e(t){var a,n,r,l;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.target.id),(a=new Headers).append("Content-Type","application/json"),n=JSON.stringify({id:t.target.id}),r={method:"DELETE",headers:a,body:n,redirect:"follow"},e.next=7,fetch("http://localhost/api/event",r);case 7:return l=e.sent,e.next=10,l.json();case 10:e.sent,window.location.reload();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=t.map((function(e,t){return function(e,t){return console.log(e),r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement(f.a,{lg:12},r.a.createElement(p.a,null,r.a.createElement(y.a,{style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement(E.a,null,r.a.createElement(E.a.Img,{className:"p-3 m-2",variant:"top",src:"http://localhost/".concat(e.image),style:{width:300,height:200}}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,{style:{fontFamily:"cursive",textAlign:"center"}},e.event),r.a.createElement(E.a.Text,null,e.eventDescription),r.a.createElement(v.a,{className:"btn-warning",style:{margin:"20px"},id:t._id,onClick:function(e){return a(e)}},"Delete Event")))))))}(e,t)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{fluid:!0},r.a.createElement(f.a,{style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement(p.a,{className:"h2",style:{fontFamily:"cursive",textAlign:"center"}},"Events")),r.a.createElement(f.a,null,r.a.createElement(p.a,{style:{display:"flex"}},n)),r.a.createElement("div",null)))},x=a(7),N=a(39),j=a(41),L=a(26),O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement(f.a,{lg:12},r.a.createElement(p.a,{lg:4},r.a.createElement(j.a,{controlId:"floatingTextarea",className:"mb-3"},r.a.createElement(L.a.Control,{as:"textarea",placeholder:"Your Name"}))),r.a.createElement(p.a,{lg:4},r.a.createElement(j.a,{controlId:"floatingTextarea",className:"mb-3"},r.a.createElement(L.a.Control,{type:"email",placeholder:"name@example.com"}))),r.a.createElement(p.a,{lg:4},r.a.createElement(j.a,{controlId:"floatingTextarea",className:"mb-3"},r.a.createElement(L.a.Control,{type:"tel",placeholder:"Your Mobile Number"})))),r.a.createElement(f.a,null,r.a.createElement(p.a,{lg:12},r.a.createElement(j.a,{controlId:"floatingTextarea",className:"mb-3"},r.a.createElement(L.a.Control,{as:"textarea",placeholder:"Your Message"})))),r.a.createElement(f.a,{className:"text-center"},r.a.createElement(p.a,null,r.a.createElement(v.a,{className:"btn-warning my-3"},"Send Message")))))},k=a(42),M=function(e){var t=e.user,a=e.onChangeForm,n=e.createUser;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7 mrgnbtm"},r.a.createElement("h2",null,"Create Event"),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement(k.b,{htmlFor:"exampleInputEvent1"},"Event"),r.a.createElement(k.a,{type:"text",onChange:function(e){return a(e)},className:"form-control",name:"Event",value:t.event,id:"Event","aria-describedby":"EventHelp",placeholder:"Event"}),r.a.createElement(k.b,{htmlFor:"exampleInputEvent1"},"Event Description"),r.a.createElement(k.a,{type:"text",onChange:function(e){return a(e)},className:"form-control",name:"eventDescription",value:t.eventDescription,id:"eventDescription","aria-describedby":"EventHelp",placeholder:"Event Description"}),r.a.createElement(k.b,{htmlFor:"resume"},"Cover Image"),r.a.createElement(k.a,{type:"file",className:"form-control",id:"resume",multiple:!0,onChange:function(e){return a(e)}}))),r.a.createElement("button",{type:"button",onClick:function(e){return n()},className:"btn btn-danger"},"Create")))))};function B(){B=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(M){i=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var l=t&&t.prototype instanceof h?t:h,o=Object.create(l.prototype),c=new L(r||[]);return n(o,"_invoke",{value:b(e,a,c)}),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(M){return{type:"throw",arg:M}}}e.wrap=s;var m={};function h(){}function f(){}function p(){}var d={};i(d,l,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(O([])));v&&v!==t&&a.call(v,l)&&(d=v);var E=p.prototype=h.prototype=Object.create(d);function y(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;n(this,"_invoke",{value:function(n,l){function o(){return new t((function(r,o){!function n(r,l,o,c){var i=u(e[r],e,l);if("throw"!==i.type){var s=i.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(m).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,c)}))}c(i.arg)}(n,l,r,o)}))}return r=r?r.then(o,o):o()}})}function b(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return k()}for(a.method=r,a.arg=l;;){var o=a.delegate;if(o){var c=x(o,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=u(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===m)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}function x(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var l=r.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function O(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=p,n(E,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:f,configurable:!0}),f.displayName=i(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},y(w.prototype),i(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var o=new w(s(t,a,n,r),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(E),i(E,c,"Generator"),i(E,l,(function(){return this})),i(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],o=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(c&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;j(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}function F(){return I.apply(this,arguments)}function I(){return(I=Object(g.a)(B().mark((function e(){var t;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/events");case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function T(){return(T=Object(g.a)(B().mark((function e(t){var a,n,r,l;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a=new Headers,(n=new FormData).append("image",t.image,t.image.name),n.append("event",t.event),n.append("eventDescription",t.eventDescription),r={method:"POST",headers:a,body:n},e.next=9,fetch("/api/event",r);case 9:return l=e.sent,e.next=12,l.json();case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(h,null))),r.a.createElement(f.a,{lg:12},r.a.createElement(p.a,null,r.a.createElement(E.a,{body:!0,style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement("h1",{style:{fontFamily:"cursive",textAlign:"center"}},r.a.createElement("b",null,"About")," ",r.a.createElement("span",{className:"text-muted"},"Us")),r.a.createElement("br",null),r.a.createElement("p",{className:"mt-3"},r.a.createElement("b",{className:"text-muted h5"},"Nayan Pro & Events")," is our brainchild to provide quality event planning and execution. We provide event management services to companies & individuals. Our company has been managing events for the past 5 years and has worked extensively with companies from different industries. Nayan Pro & Events makes sure clients are transparency is kept intact in every step of the event planning process.",r.a.createElement("br",null),"Our firm has a vast vendor network of Hotels and partners who help us provide the best and most cost-effective event services to our clients."),r.a.createElement("br",null),r.a.createElement("p",{className:"mt-3"},r.a.createElement("b",{className:"text-muted h5"}," Vision:")," ",r.a.createElement("br",null),"Our vision is to align event objectives with modern concepts to deliver creative and engaging event experiences to your attendees."),r.a.createElement("br",null),r.a.createElement("p",{className:"mt-3"},r.a.createElement("b",{className:"text-muted h5"}," Mission:")," ",r.a.createElement("br",null),"Our mission is to design and carry out personalized, innovative events that meet our clients\u2019 needs and desires."),r.a.createElement("br",null),r.a.createElement("p",{className:"mt-3"},r.a.createElement("b",{className:"text-muted h5"}," Philosophy:")," ",r.a.createElement("br",null),"To make our clients event planning processes simple by offering reliable and impactful services. The experience our clients get from working with us is always as important as the experience we deliver to the events audiences.")))),r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(d,null)))))};var C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(h,null))),r.a.createElement(f.a,{lg:12},r.a.createElement(p.a,null,r.a.createElement("h2",{style:{fontFamily:"cursive",textAlign:"center"}},"Gallery"),r.a.createElement(y.a,{style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement(E.a,null,r.a.createElement(E.a.Img,{className:"p-3 m-2",variant:"top",src:"https://images.unsplash.com/photo-1670139020122-fa0659de63d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,{style:{fontFamily:"cursive",textAlign:"center"}},"Other Events"),r.a.createElement(E.a.Text,null,"We cover decor needs for all your events."),r.a.createElement(v.a,{className:"btn-warning"},"View More"))),r.a.createElement(E.a,null,r.a.createElement(E.a.Img,{className:"p-3 m-2",variant:"top",src:"https://images.unsplash.com/photo-1670139018938-af8bf748a1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,{style:{fontFamily:"cursive",textAlign:"center"}},"Mehndi Ceremony"),r.a.createElement(E.a.Text,null,"Let the color of Mehndi and the joy of your wedding grow more and more."),r.a.createElement(v.a,{className:"btn-warning"},"View More"))),r.a.createElement(E.a,null,r.a.createElement(E.a.Img,{className:"p-3 m-2",variant:"top",src:"https://images.unsplash.com/photo-1596491365022-9a23584889b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,{style:{fontFamily:"cursive",textAlign:"center"}},"Reception"),r.a.createElement(E.a.Text,null,"Get the best Wedding Reception decoration only with Nayan Pro & Events"),r.a.createElement(v.a,{className:"btn-warning"},"View More"))),r.a.createElement(E.a,null,r.a.createElement(E.a.Img,{className:"p-3 m-2",variant:"top",src:"https://images.unsplash.com/photo-1670151791172-af9ad99c671a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,"Wedding"),r.a.createElement(E.a.Text,null,"Best Indian wedding decoration from Nayan Pro & Events."),r.a.createElement(v.a,{className:"btn-warning"},"View More")))))),r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(d,null)))))};var H=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){F().then((function(e){console.log(e),l(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(h,null))),r.a.createElement(f.a,null,r.a.createElement(p.a,{style:{textAlign:"center"}},r.a.createElement("div",{style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement(b,{users:a})))),r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(d,null)))))},_=a(38);var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(h,null))),r.a.createElement(f.a,{lg:12},r.a.createElement(p.a,null,r.a.createElement(E.a,{body:!0,style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement("h1",{style:{fontFamily:"cursive",textAlign:"center"}},r.a.createElement("b",null,"Contact")," ",r.a.createElement("span",{className:"text-muted"},"Us")),r.a.createElement(f.a,{className:"text-center"},r.a.createElement(p.a,{lg:4},r.a.createElement("h3",null,"Reach Out For"),r.a.createElement("a",{href:"http://www.nayanevents.com/event/weddings",className:"mb-3"},r.a.createElement(_.d,null)," Wedding"),r.a.createElement("br",null),r.a.createElement("a",{href:"http://www.nayanevents.com/event/other-events",className:"mb-3"}," ",r.a.createElement(_.d,null)," Other Events"),r.a.createElement("br",null),r.a.createElement("a",{href:"http://www.nayanevents.com/event/birthdays",className:"mb-3"},r.a.createElement(_.d,null)," Birthday"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"mb-3"},r.a.createElement(_.a,null),"info@nayanevent.com"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"mb-3"},r.a.createElement(_.b,null)),"\xa0",r.a.createElement("a",{href:"#",className:"mb-3"},r.a.createElement(_.c,null))),r.a.createElement(p.a,{lg:8},r.a.createElement(L.a,null,r.a.createElement(L.a.Control,{size:"lg",className:"mt-2",type:"text",placeholder:"Your Name"}),r.a.createElement(L.a.Control,{size:"lg",className:"mt-2",type:"tel",placeholder:"Your Mobile Number"}),r.a.createElement(L.a.Control,{size:"lg",className:"mt-2",type:"email",placeholder:"Your Email"}),r.a.createElement(L.a.Control,{size:"lg",className:"mt-2",type:"text",placeholder:"Your Message",rows:7}),r.a.createElement(v.a,{className:"btn-warning mt-2 p-3"},r.a.createElement("h6",null,"Ask For Quote")))))))),r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(d,null)))))};var G=function(){var e=Object(n.useState)({}),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),u=Object(c.a)(o,2),m=u[0],g=u[1],w=Object(n.useState)(0),j=Object(c.a)(w,2),L=j[0],k=j[1];return Object(n.useEffect)((function(){F().then((function(e){console.log(e),g(e),k(e.length)}))}),[]),r.a.createElement(s.a,null,r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/",element:r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{lg:12},r.a.createElement(h,null),r.a.createElement(f.a,{lg:12},r.a.createElement(p.a,null,r.a.createElement(N.a,{fade:!0},r.a.createElement(N.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"http://www.nayanevents.com/images/sliders/8820210921103450.jpeg",alt:"First slide"}),r.a.createElement(N.a.Caption,null)),r.a.createElement(N.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"http://www.nayanevents.com/images/sliders/7120210820115701.jpeg",alt:"Second slide"}),r.a.createElement(N.a.Caption,null)),r.a.createElement(N.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:"http://www.nayanevents.com/images/sliders/7920210819010723.jpeg",alt:"Third slide"}),r.a.createElement(N.a.Caption,null))))),r.a.createElement(f.a,{lg:12},r.a.createElement(p.a,null,r.a.createElement(E.a,{body:!0,style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement("h2",{style:{fontFamily:"cursive",textAlign:"center"}},r.a.createElement("b",null,"About")," ",r.a.createElement("span",{className:"text-muted"},"Us")),r.a.createElement("p",{className:"mt-3"},"Event planning is the energizing art of choreographing people and activities in order to create a show that creates memories of a lifetime. Designing and producing an event, whether it\u2019s a Wedding, Birthday, meeting, corporate event, fund-raiser, tradeshow or any other event, is in many ways comparable to directing a live stage performance."),r.a.createElement("p",{className:"mt-3"},"A bonus, for those who love to travel, it provides an amazing opportunity to travel to luxurious hotels, interesting new places and meet speakers and attendees from around the world. All of this, while enjoying a high level of autonomy and independence!")))),r.a.createElement(f.a,{lg:12},r.a.createElement(p.a,null,r.a.createElement("h2",{style:{fontFamily:"cursive",textAlign:"center"}},"Gallery"),r.a.createElement(y.a,{style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement(E.a,null,r.a.createElement(E.a.Img,{className:"p-3 m-2",variant:"top",src:"https://images.unsplash.com/photo-1670139020122-fa0659de63d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,{style:{fontFamily:"cursive",textAlign:"center"}},"Other Events"),r.a.createElement(E.a.Text,null,"We cover decor needs for all your events."),r.a.createElement(v.a,{className:"btn-warning"},"View More"))),r.a.createElement(E.a,null,r.a.createElement(E.a.Img,{className:"p-3 m-2",variant:"top",src:"https://images.unsplash.com/photo-1670139018938-af8bf748a1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,{style:{fontFamily:"cursive",textAlign:"center"}},"Mehndi Ceremony"),r.a.createElement(E.a.Text,null,"Let the color of Mehndi and the joy of your wedding grow more and more."),r.a.createElement(v.a,{className:"btn-warning"},"View More"))),r.a.createElement(E.a,null,r.a.createElement(E.a.Img,{className:"p-3 m-2",variant:"top",src:"https://images.unsplash.com/photo-1596491365022-9a23584889b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,{style:{fontFamily:"cursive",textAlign:"center"}},"Reception"),r.a.createElement(E.a.Text,null,"Get the best Wedding Reception decoration only with Nayan Pro & Events"),r.a.createElement(v.a,{className:"btn-warning"},"View More"))),r.a.createElement(E.a,null,r.a.createElement(E.a.Img,{className:"p-3 m-2",variant:"top",src:"https://images.unsplash.com/photo-1670151791172-af9ad99c671a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,"Wedding"),r.a.createElement(E.a.Text,null,"Best Indian wedding decoration from Nayan Pro & Events."),r.a.createElement(v.a,{className:"btn-warning"},"View More")))))),r.a.createElement(f.a,null,r.a.createElement(p.a,{style:{textAlign:"center"}},r.a.createElement("div",{style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement(b,{users:m}),r.a.createElement(v.a,{className:"btn-warning my-4",onClick:function(){return window.location.replace("./add")}},"Add Event")))),r.a.createElement(f.a,null,r.a.createElement(p.a,{lg:12},r.a.createElement(O,{className:"mt-3"}))),r.a.createElement(f.a,null,r.a.createElement(p.a,{lg:12},r.a.createElement(d,null)))))}),r.a.createElement(x.a,{path:"/add",element:r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("div",{className:"col-md-8"},r.a.createElement(M,{user:a,onChangeForm:function(e){console.log(e.target.value),"resume"==e.target.id?a.image=e.target.files[0]:a.event=e.target.value,console.log(a),l(a)},createUser:function(e){(function(e){return T.apply(this,arguments)})(a).then((function(e){console.log(e),window.location.reload(),k(L+1)}))}})),r.a.createElement("div",{style:{backgroundImage:'url("http://www.nayanevents.com/images/ptn-bg.jpg")'}},r.a.createElement(b,{users:m})))}),r.a.createElement(x.a,{path:"aboutUs",element:r.a.createElement(A,null)}),r.a.createElement(x.a,{path:"gallery",element:r.a.createElement(C,null)}),r.a.createElement(x.a,{path:"events",element:r.a.createElement(H,null)}),r.a.createElement(x.a,{path:"contactUs",element:r.a.createElement(D,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(20),W=a(21),P=a(28),V=a(29),Z=function(){return r.a.createElement("h1",null,"Something went wrong")},R=function(e){Object(P.a)(a,e);var t=Object(V.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e.componentDidCatch=function(t,a){e.setState({error:t,info:a})},e}return Object(W.a)(a,[{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?r.a.createElement(Z,null):t}}]),a}(r.a.Component);R.getDerivedStateFromError=function(e){return{hasError:!0}},o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.3f295c95.chunk.js.map