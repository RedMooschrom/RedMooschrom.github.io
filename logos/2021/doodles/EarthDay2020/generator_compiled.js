(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},p=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:n(a)}},r=function(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},t;
if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var u;a:{var ba={a:!0},ca={};try{ca.__proto__=ba;u=ca.a;break a}catch(a){}u=!1}t=u?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var da=t,ea=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},v="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},fa=function(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&
self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("a");},w=fa(this),x=function(a,b){if(b){var c=w;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&v(c,a,{configurable:!0,writable:!0,value:b})}},ha=function(){ha=function(){};w.Symbol||(w.Symbol=ia)},ja=function(a,b){this.g=a;v(this,"description",{configurable:!0,writable:!0,value:b})};
ja.prototype.toString=function(){return this.g};
var ia=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ja("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}(),y=function(){ha();var a=w.Symbol.iterator;a||(a=w.Symbol.iterator=w.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&v(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(n(this))}});y=function(){}},ka=function(a){y();a={next:a};a[w.Symbol.iterator]=function(){return this};return a},z=function(a,
b){return Object.prototype.hasOwnProperty.call(a,b)};
x("WeakMap",function(a){function b(){}function c(g){var k=typeof g;return"object"===k&&null!==g||"function"===k}function d(g){if(!z(g,h)){var k=new b;v(g,h,{value:k})}}function e(g){var k=Object[g];k&&(Object[g]=function(m){if(m instanceof b)return m;d(m);return k(m)})}if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),k=Object.seal({}),m=new a([[g,2],[k,3]]);if(2!=m.get(g)||3!=m.get(k))return!1;m.delete(g);m.set(k,4);return!m.has(g)&&4==m.get(k)}catch(q){return!1}}())return a;var h=
"$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var l=0,f=function(g){this.g=(l+=Math.random()+1).toString();if(g){g=p(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}};f.prototype.set=function(g,k){if(!c(g))throw Error("b");d(g);if(!z(g,h))throw Error("c`"+g);g[h][this.g]=k;return this};f.prototype.get=function(g){return c(g)&&z(g,h)?g[h][this.g]:void 0};f.prototype.has=function(g){return c(g)&&z(g,h)&&z(g[h],this.g)};f.prototype.delete=function(g){return c(g)&&
z(g,h)&&z(g[h],this.g)?delete g[h][this.g]:!1};return f});
x("Map",function(a){if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),g=new a(p([[f,"s"]]));if("s"!=g.get(f)||1!=g.size||g.get({x:4})||g.set({x:4},"t")!=g||2!=g.size)return!1;var k=g.entries(),m=k.next();if(m.done||m.value[0]!=f||"s"!=m.value[1])return!1;m=k.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!k.next().done?!1:!0}catch(q){return!1}}())return a;y();var b=new WeakMap,c=function(f){this.i={};this.g=
h();this.size=0;if(f){f=p(f);for(var g;!(g=f.next()).done;)g=g.value,this.set(g[0],g[1])}};c.prototype.set=function(f,g){f=0===f?0:f;var k=d(this,f);k.list||(k.list=this.i[k.id]=[]);k.s?k.s.value=g:(k.s={next:this.g,H:this.g.H,head:this.g,key:f,value:g},k.list.push(k.s),this.g.H.next=k.s,this.g.H=k.s,this.size++);return this};c.prototype.delete=function(f){f=d(this,f);return f.s&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.i[f.id],f.s.H.next=f.s.next,f.s.next.H=f.s.H,f.s.head=null,
this.size--,!0):!1};c.prototype.clear=function(){this.i={};this.g=this.g.H=h();this.size=0};c.prototype.has=function(f){return!!d(this,f).s};c.prototype.get=function(f){return(f=d(this,f).s)&&f.value};c.prototype.entries=function(){return e(this,function(f){return[f.key,f.value]})};c.prototype.keys=function(){return e(this,function(f){return f.key})};c.prototype.values=function(){return e(this,function(f){return f.value})};c.prototype.forEach=function(f,g){for(var k=this.entries(),m;!(m=k.next()).done;)m=
m.value,f.call(g,m[1],m[0],this)};c.prototype[Symbol.iterator]=c.prototype.entries;var d=function(f,g){var k=g&&typeof g;"object"==k||"function"==k?b.has(g)?k=b.get(g):(k=""+ ++l,b.set(g,k)):k="p_"+g;var m=f.i[k];if(m&&z(f.i,k))for(f=0;f<m.length;f++){var q=m[f];if(g!==g&&q.key!==q.key||g===q.key)return{id:k,list:m,index:f,s:q}}return{id:k,list:m,index:-1,s:void 0}},e=function(f,g){var k=f.g;return ka(function(){if(k){for(;k.head!=f.g;)k=k.H;for(;k.next!=k.head;)return k=k.next,{done:!1,value:g(k)};
k=null}return{done:!0,value:void 0}})},h=function(){var f={};return f.H=f.next=f.head=f},l=0;return c});x("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
x("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,h=0;h<e;h++){var l=d[h];if(b.call(c,l,h,d)){b=l;break a}}b=void 0}return b}});
x("Set",function(a){if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),h=e.next();if(h.done||h.value[0]!=c||h.value[1]!=c)return!1;h=e.next();return h.done||h.value[0]==c||4!=h.value[0].x||h.value[1]!=h.value[0]?!1:e.next().done}catch(l){return!1}}())return a;y();var b=function(c){this.g=new Map;if(c){c=
p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size};b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};b.prototype.clear=function(){this.g.clear();this.size=0};b.prototype.has=function(c){return this.g.has(c)};b.prototype.entries=function(){return this.g.entries()};b.prototype.values=function(){return this.g.values()};b.prototype.keys=b.prototype.values;
b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(h){return c.call(d,h,h,e)})};return b});var la=this||self;var ma=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)},na=function(a){return Array.prototype.concat.apply([],arguments)},oa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},A=function(a){for(var b=pa||Math.random,c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}};var B=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};B.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};B.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};B.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var C=function(a,b){this.width=a;this.height=b};C.prototype.aspectRatio=function(){return this.width/this.height};C.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};C.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};C.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var D=function(a,b,c,d){this.g=a;this.i=b;this.width=c;this.height=d};D.prototype.ceil=function(){this.g=Math.ceil(this.g);this.i=Math.ceil(this.i);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};D.prototype.floor=function(){this.g=Math.floor(this.g);this.i=Math.floor(this.i);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
D.prototype.round=function(){this.g=Math.round(this.g);this.i=Math.round(this.i);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var E=function(a){this.o=qa(a.width,a.height);this.i=a;this.S=new D(0,0,this.i.width,this.i.height);this.v=new Map;this.w=[]};E.prototype.forEach=function(a,b){if(b){var c=b,d=this.S,e=Math.max(c.g,d.g),h=Math.min(c.g+c.width,d.g+d.width);if(e<=h){var l=Math.max(c.i,d.i);d=Math.min(c.i+c.height,d.i+d.height);l<=d&&(c.g=e,c.i=l,c.width=h-e,c.height=d-l)}}else b=this.S;for(c=b.g;c<b.g+b.width;c++)for(e=b.i;e<b.i+b.height;e++)a(c,e)};
var F=function(a,b,c){return!(0>b||0>c||b>a.i.width-1||c>a.i.height-1)},qa=function(a,b){return Array(a).fill(null).map(function(){return Array(b).fill(0)})},ra=function(a){var b=[].concat(r(a.v.values())).map(function(c){return{anchor:[c.anchor.x,c.anchor.y],shape:c.shape,type:c.type,id:c.id,mirrored:c.mirrored,biome:c.biome}});return{noSpawnAreas:a.w.map(function(c){return[c.g,c.i,c.width,c.height]}),terrainData:b,size:[a.i.width,a.i.height],map:a.o}};var sa=1,ta=function(a){E.call(this,a);this.j=new Map;this.g=qa(a.width,a.height)};ea(ta,E);var G=function(a,b){a.j.set(b.id,b)},H=function(a,b,c){return(b=a.g[b][c])&&a.j.has(b)?a.j.get(b).biome:0},ua=function(a,b,c){if(!F(a,b,c))return!1;var d=a.g[b][c];return!a.o[b][c]&&!!d},va=function(a,b){b.id=sa++;for(var c=p(b.shape),d=c.next();!d.done;d=c.next())d=d.value,a.o[b.anchor.x+d[0]][b.anchor.y+d[1]]=b.id;a.v.set(b.id,b)};var I=function(a,b){this.i={};this.g=[];this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("d");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof I)for(c=a.T(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])};I.prototype.o=function(){J(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.i[this.g[b]]);return a};I.prototype.T=function(){J(this);return this.g.concat()};
var J=function(a){if(a.j!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];K(a.i,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.j!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],K(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}};I.prototype.get=function(a,b){return K(this.i,a)?this.i[a]:b};I.prototype.set=function(a,b){K(this.i,a)||(this.j++,this.g.push(a));this.i[a]=b};I.prototype.forEach=function(a,b){for(var c=this.T(),d=0;d<c.length;d++){var e=c[d],h=this.get(e);a.call(b,h,e,this)}};
var K=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var wa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,xa=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var h=a[c].substring(0,d);e=a[c].substring(d+1)}else h=a[c];b(h,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var L=function(){var a=location.href;this.o=this.U=this.j="";this.S=null;this.v=this.w="";this.g=!1;if(a instanceof L){this.g=a.g;ya(this,a.j);this.U=a.U;this.o=a.o;za(this,a.S);this.w=a.w;var b=a.i;var c=new M;c.j=b.j;b.g&&(c.g=new I(b.g),c.i=b.i);Aa(this,c);this.v=a.v}else a&&(b=String(a).match(wa))?(this.g=!1,ya(this,b[1]||"",!0),this.U=N(b[2]||""),this.o=N(b[3]||"",!0),za(this,b[4]),this.w=N(b[5]||"",!0),Aa(this,b[6]||"",!0),this.v=N(b[7]||"")):(this.g=!1,this.i=new M(null,this.g))};
L.prototype.toString=function(){var a=[],b=this.j;b&&a.push(O(b,Ba,!0),":");var c=this.o;if(c||"file"==b)a.push("//"),(b=this.U)&&a.push(O(b,Ba,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.S,null!=c&&a.push(":",String(c));if(c=this.w)this.o&&"/"!=c.charAt(0)&&a.push("/"),a.push(O(c,"/"==c.charAt(0)?Ca:Da,!0));(c=this.i.toString())&&a.push("?",c);(c=this.v)&&a.push("#",O(c,Ea));return a.join("")};
var ya=function(a,b,c){a.j=c?N(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))},za=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("e`"+b);a.S=b}else a.S=null},Aa=function(a,b,c){b instanceof M?(a.i=b,Fa(a.i,a.g)):(c||(b=O(b,Ga)),a.i=new M(b,a.g))},N=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},O=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Ha),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Ha=function(a){a=a.charCodeAt(0);
return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Ba=/[#\/\?@]/g,Da=/[#\?:]/g,Ca=/[#\?]/g,Ga=/[#\?@]/g,Ea=/#/g,M=function(a,b){this.i=this.g=null;this.j=a||null;this.v=!!b},P=function(a){a.g||(a.g=new I,a.i=0,a.j&&xa(a.j,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))};M.prototype.add=function(a,b){P(this);this.j=null;a=Q(this,a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.i+=1;return this};
var Ia=function(a,b){P(a);b=Q(a,b);K(a.g.i,b)&&(a.j=null,a.i-=a.g.get(b).length,a=a.g,K(a.i,b)&&(delete a.i[b],a.j--,a.g.length>2*a.j&&J(a)))},Ja=function(a,b){P(a);b=Q(a,b);return K(a.g.i,b)};M.prototype.forEach=function(a,b){P(this);this.g.forEach(function(c,d){ma(c,function(e){a.call(b,e,d,this)},this)},this)};M.prototype.T=function(){P(this);for(var a=this.g.o(),b=this.g.T(),c=[],d=0;d<b.length;d++)for(var e=a[d],h=0;h<e.length;h++)c.push(b[d]);return c};
M.prototype.o=function(a){P(this);var b=[];if("string"===typeof a)Ja(this,a)&&(b=na(b,this.g.get(Q(this,a))));else{a=this.g.o();for(var c=0;c<a.length;c++)b=na(b,a[c])}return b};M.prototype.set=function(a,b){P(this);this.j=null;a=Q(this,a);Ja(this,a)&&(this.i-=this.g.get(a).length);this.g.set(a,[b]);this.i+=1;return this};M.prototype.get=function(a,b){if(!a)return b;a=this.o(a);return 0<a.length?String(a[0]):b};
M.prototype.toString=function(){if(this.j)return this.j;if(!this.g)return"";for(var a=[],b=this.g.T(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.o(d);for(var h=0;h<d.length;h++){var l=e;""!==d[h]&&(l+="="+encodeURIComponent(String(d[h])));a.push(l)}}return this.j=a.join("&")};
var Q=function(a,b){b=String(b);a.v&&(b=b.toLowerCase());return b},Fa=function(a,b){b&&!a.v&&(P(a),a.j=null,a.g.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(Ia(this,d),Ia(this,e),0<c.length&&(this.j=null,this.g.set(Q(this,e),oa(c)),this.i+=c.length))},a));a.v=b};var R,S,pa=function(){return R()};S=void 0;var Ka=(new L).i.get("seed")||S||""+(new seededRandom.seedrandom)(),La=new seededRandom.seedrandom(Ka);S=Ka;R=La;var T=function(a,b){b=p(a instanceof B?[a.x,a.y]:[a,b]);a=b.next().value;b=b.next().value;var c=a%2?[new B(a-1,b+1),new B(a+1,b+1)]:[new B(a-1,b-1),new B(a+1,b-1)];return[].concat(r([new B(a,b-1),new B(a,b+1),new B(a+1,b),new B(a-1,b)]),r(c))};var Ma=function(a){var b=[];a.forEach(function(c,d){var e=noise.simplex2(c/a.i.width*90,d/a.i.height*90);.75<Math.abs(e)&&b.push([c,d])});return b},Na=function(a,b,c){return T(b,c).filter(function(d){return F(a,d.x,d.y)}).map(function(d){return a.g[d.x][d.y]}).find(function(d){return!!d})};var Oa=function(){this.i=[];this.g=[]};Oa.prototype.o=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.g.length;for(b=0;b<c;++b)a.push(this.g[b]);return a};var U=[1,2,3,4,5,6];var V=function(a,b,c,d){this.size=new C(a,b);this.w=c;this.v=d};V.prototype.o=function(a){return a};
var Pa=function(a,b){if(a.w){var c=new D(-4,b.i.height-10,b.i.width+6,15),d=[b.i.width/2,b.i.height-11];b.forEach(function(l,f){b.g[l][f]=80<Math.pow(l-d[0],2)+Math.pow(f-d[1],2)&&0<f-d[1]?-1:0},c);b.w.push(c)}if(a.v){a=new D(0,0,b.i.width,10);var e=[b.i.width/2,5];b.forEach(function(l,f){20>Math.pow(l-e[0],2)+Math.pow(f-e[1],2)&&(b.g[l][f]=0)},a);b.w.push(a)}var h=0;b.forEach(function(l,f){if(6>=l||l>=b.i.width-6)h++,b.g[l][f]=-1});G(b,{id:-1,origin:[0,0],size:h,neighbors:[],biome:7});G(b,{id:-2,
origin:[0,0],size:1,neighbors:[],biome:8});G(b,{id:-3,origin:[0,0],size:1,neighbors:[],biome:9});return b};var W=function(a,b,c,d){V.call(this,a,b,c,d);this.i=null;this.j=[];this.g=null;la.document&&(a=document.getElementById("debugCanvas"))&&(a.width=500,a.height=500,this.g=a.getContext("2d"),this.g.fillStyle="#fff",this.g.strokeStyle="#000",this.g.lineWidth=1,this.g.fillRect(0,0,500,500))};ea(W,V);
W.prototype.o=function(a){var b=Math.floor(65536*R());noise.seed(b);b=Ma(a);this.i=d3.Delaunay.from(b).voronoi([0,0,this.size.width,this.size.height]);this.g&&(this.g.setTransform(1,0,0,1,0,0),this.g.fillStyle="#fff",this.g.fillRect(0,0,500,500),this.g.translate(0,500),this.g.scale(2.1,-2.1));this.i=Qa(this,b);for(var c=0;c<b.length;c++)Ra(this,c)&&this.j.push(c);for(c=0;c<b.length;c++)1^+(0<=this.j.indexOf(c))?(Sa(this,a,c,b[c]),Ta(this,c,"red")):Ta(this,c,"#fff");if(this.g)for(b=p(b),c=b.next();!c.done;c=
b.next())Ua(this.g,c.value);var d=[];a.forEach(function(l,f){if(!a.g[l][f]&&.3>R()){var g=Na(a,l,f);g&&d.push([g,l,f])}});b=p(d);for(c=b.next();!c.done;c=b.next()){var e=p(c.value);c=e.next().value;var h=e.next().value;e=e.next().value;a.g[h][e]=c}a.forEach(function(l,f){if(!a.g[l][f]){var g=T(l,f).filter(function(k){return F(a,k.x,k.y)}).map(function(k){return a.g[k.x][k.y]});2>g.filter(function(k){return!k}).length&&(g=g.filter(function(k){return!!k})[0],a.g[l][f]=g)}});a.forEach(function(l,f){a.g[l][f]&&
3>T(l,f).filter(function(g){return F(a,g.x,g.y)&&!!a.g[g.x][g.y]}).length&&(a.g[l][f]=0)});return a};
var Qa=function(a,b){for(var c=0;1>c;c++){for(var d=0;d<b.length;d++){var e=b[d],h=a.i.cellPolygon(d);e[0]=0;e[1]=0;for(var l=p(h),f=l.next();!f.done;f=l.next())f=f.value,e[0]+=f[0],e[1]+=f[1];h=[].concat(r(h)).length;e[0]/=h;e[1]/=h}a.i=d3.Delaunay.from(b).voronoi([0,0,a.size.width,a.size.height])}return a.i},Ra=function(a,b){b=[].concat(r(a.i.neighbors(b)));return.35>b.filter(function(c){return 0<=a.j.indexOf(c)}).length/b.length},Sa=function(a,b,c,d){var e=new B(d[0],d[1]),h=c+1,l=0,f=Va(a.i.cellPolygon(c));
b.forEach(function(g,k){if(!b.g[g][k]&&a.i.contains(c,g,k)){var m=new B(g,k);var q=m.x-e.x;m=m.y-e.y;q=q*q+m*m;q=q<464/3?0:q/464;R()<q||(b.g[g][k]=h,l++)}},new D(Math.floor(f.W),Math.floor(f.$),Math.ceil(f.ka-f.W),Math.ceil(f.ma-f.$)));G(b,{id:h,origin:d.map(function(g){return Math.round(g)}),size:l,neighbors:[].concat(r(a.i.neighbors(c))).map(function(g){return g+1}),biome:0})},Ta=function(a,b,c){a.g&&(a.g.beginPath(),a.g.fillStyle=c,a.i.renderCell(b,a.g),a.g.fill())},Ua=function(a,b){a.fillStyle=
"#000";a.beginPath();a.arc(b[0],b[1],1,0,2*Math.PI);a.closePath();a.fill()},Va=function(a){for(var b={W:a[0][0],$:a[0][1],ka:a[0][1],ma:a[0][1]},c=1;c<a.length;c++){var d=a[c][0],e=a[c][1];b.W=Math.min(b.W,d);b.ka=Math.max(b.ka,d);b.$=Math.min(b.$,e);b.ma=Math.max(b.ma,e)}return b};var Wa=function(a,b,c,d){a=p(a);for(var e=a.next();!e.done;e=a.next())if(e=e.value,!d(b+e[0],c+e[1]))return!1;return!0},Xa=function(a){return a.map(function(b){return b[0]%2?[b[0],b[1]-1]:[b[0],b[1]]})};var X=[[0,0]],Ya=function(a){return a.map(function(b){return[-b[0],b[1]]})},Y=function(a,b,c,d){c=void 0===c?[]:c;d=void 0===d?1:d;if(1==b.length)return{type:a,V:b,ta:b,wa:b,ua:b,va:d,ha:c};var e=Xa(b);return{type:a,V:b,ta:e,wa:Ya(b),ua:Ya(e),va:d,ha:c}},Z=[Y(1,[[0,0],[0,1],[0,2],[0,3],[-1,1],[-1,2],[-1,3]],[3]),Y(2,[[0,0],[0,1],[0,2],[-1,1],[-1,2],[1,1],[1,2]],[1,2,3,5,6,7]),Y(3,[[0,0],[0,1],[0,2],[0,3],[-1,2],[-1,3],[1,2],[1,3],[2,2]],[4]),Y(4,[[0,0],[0,1],[0,2],[1,1],[1,2],[1,3]],[4]),Y(5,[[0,
0],[0,1],[0,2],[-1,1],[-1,2]],[1,3,6]),Y(6,[[0,0],[0,1],[0,2],[0,3],[-1,1],[-1,2],[-1,3],[-2,1],[-2,2],[1,1],[1,2],[1,3],[2,1],[2,2]],[2],.3),Y(7,[[0,0],[0,1],[0,2],[-1,2],[1,2]],[6]),Y(8,[[0,0],[0,1],[0,2],[-1,1],[-1,2],[-1,3],[-2,1],[-2,2]],[5],.4),Y(9,X,[],.3),Y(10,X,[],.3),Y(11,X)];var Za=function(a,b,c,d){a=H(d,a,b);return!c.ha.length||0<=c.ha.indexOf(a)},$a=function(a,b){var c=[];b.forEach(function(d,e){var h=d%2?[a.V,a.wa]:[a.ta,a.ua],l=.5>R();h=l?h[1]:h[0];Za(d,e,a,b)&&Wa(h,d,e,function(f,g){return ua(b,f,g)})&&R()<a.va&&c.push({anchor:new B(d,e),shape:h,type:a.type,id:0,mirrored:l,biome:H(b,d,e)})});return c},ab=function(a,b){1<R()||!Wa(a.shape,a.anchor.x,a.anchor.y,function(c,d){return ua(b,c,d)})||va(b,a)},bb=function(a,b){for(var c=!0,d=0;c;){c=!1;for(var e=p(Z),h=e.next();!h.done;h=
e.next())!(h=a.get(h.value.type))||d>=h.length||(c=!0,ab(h[d],b));d++}},cb=function(a,b){for(var c=new Map,d=p([10,9,11]),e=d.next();!e.done;e=d.next())e=e.value,c.set(e,a.get(e)),a.delete(e);bb(a,b);bb(c,b)},db=function(a){var b=new Map;Z.sort(function(h,l){return l.V.length-h.V.length});for(var c=p(Z),d=c.next();!d.done;d=c.next()){d=d.value;var e=$a(d,a);A(e);b.set(d.type,$a(d,a))}cb(b,a)},eb=function(a){a.forEach(function(b,c){var d=a.o[b][c];d=a.v.has(d)?a.v.get(d):null;var e=H(a,b,c);!d||d.anchor.x==
b&&d.anchor.y==c||va(a,{type:11,id:0,shape:[[0,0]],anchor:new B(b,c),mirrored:.5>R(),biome:e})})};self.onmessage=function(a){a=a.data;a=new W(a[0],a[1],a[2],a[3]);var b=new ta(a.size);b=a.o(b);a=Pa(a,b);b=new Set([-1]);var c=[].concat(r(a.j.values()));A(c);var d=Math.floor(R()*U.length);c=p(c);for(var e=c.next();!e.done;e=c.next()){var h=e.value;if(!b.has(h.id)){e=[];var l=new Oa;l.g.push(h);for(h=0;0!=l.i.length||0!=l.g.length;){var f,g=f=l;0==g.i.length&&(g.i=g.g,g.i.reverse(),g.g=[]);f=f.i.pop();b.add(f.id);e.push(f.id);h+=f.size;f=f.neighbors;A(f);f=p(f);for(g=f.next();!g.done;g=f.next())g=
g.value,!b.has(g)&&a.j.has(g)&&(g=a.j.get(g),l.g.push(g));if(200<=h)break}e=p(e);for(l=e.next();!l.done;l=e.next())a.j.get(l.value).biome=U[d];d=(d+1)%U.length}}db(a);eb(a);postMessage(ra(a))};}).call(this);
