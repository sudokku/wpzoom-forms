!function(){var e={8552:function(e,t,r){var n=r(852)(r(5639),"DataView");e.exports=n},7071:function(e,t,r){var n=r(852)(r(5639),"Map");e.exports=n},3818:function(e,t,r){var n=r(852)(r(5639),"Promise");e.exports=n},8525:function(e,t,r){var n=r(852)(r(5639),"Set");e.exports=n},2705:function(e,t,r){var n=r(5639).Symbol;e.exports=n},577:function(e,t,r){var n=r(852)(r(5639),"WeakMap");e.exports=n},4239:function(e,t,r){var n=r(2705),o=r(9607),c=r(2333),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):c(e)}},9454:function(e,t,r){var n=r(4239),o=r(7005);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},8458:function(e,t,r){var n=r(3560),o=r(5346),c=r(3218),a=r(346),i=/^\[object .+?Constructor\]$/,u=Function.prototype,l=Object.prototype,f=u.toString,s=l.hasOwnProperty,p=RegExp("^"+f.call(s).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!c(e)||o(e))&&(n(e)?p:i).test(a(e))}},8749:function(e,t,r){var n=r(4239),o=r(1780),c=r(7005),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,e.exports=function(e){return c(e)&&o(e.length)&&!!a[n(e)]}},280:function(e,t,r){var n=r(5726),o=r(6916),c=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))c.call(e,r)&&"constructor"!=r&&t.push(r);return t}},7518:function(e){e.exports=function(e){return function(t){return e(t)}}},4429:function(e,t,r){var n=r(5639)["__core-js_shared__"];e.exports=n},1957:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},852:function(e,t,r){var n=r(8458),o=r(7801);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},9607:function(e,t,r){var n=r(2705),o=Object.prototype,c=o.hasOwnProperty,a=o.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=c.call(e,i),r=e[i];try{e[i]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[i]=r:delete e[i]),o}},4160:function(e,t,r){var n=r(8552),o=r(7071),c=r(3818),a=r(8525),i=r(577),u=r(4239),l=r(346),f="[object Map]",s="[object Promise]",p="[object Set]",m="[object WeakMap]",b="[object DataView]",y=l(n),d=l(o),v=l(c),h=l(a),w=l(i),j=u;(n&&j(new n(new ArrayBuffer(1)))!=b||o&&j(new o)!=f||c&&j(c.resolve())!=s||a&&j(new a)!=p||i&&j(new i)!=m)&&(j=function(e){var t=u(e),r="[object Object]"==t?e.constructor:void 0,n=r?l(r):"";if(n)switch(n){case y:return b;case d:return f;case v:return s;case h:return p;case w:return m}return t}),e.exports=j},7801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},5346:function(e,t,r){var n,o=r(4429),c=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!c&&c in e}},5726:function(e){var t=Object.prototype;e.exports=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||t)}},6916:function(e,t,r){var n=r(5569)(Object.keys,Object);e.exports=n},1167:function(e,t,r){e=r.nmd(e);var n=r(1957),o=t&&!t.nodeType&&t,c=o&&e&&!e.nodeType&&e,a=c&&c.exports===o&&n.process,i=function(){try{return c&&c.require&&c.require("util").types||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=i},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5569:function(e){e.exports=function(e,t){return function(r){return e(t(r))}}},5639:function(e,t,r){var n=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,c=n||o||Function("return this")();e.exports=c},346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},5694:function(e,t,r){var n=r(9454),o=r(7005),c=Object.prototype,a=c.hasOwnProperty,i=c.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(e){return o(e)&&a.call(e,"callee")&&!i.call(e,"callee")};e.exports=u},1469:function(e){var t=Array.isArray;e.exports=t},8612:function(e,t,r){var n=r(3560),o=r(1780);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},4144:function(e,t,r){e=r.nmd(e);var n=r(5639),o=r(5062),c=t&&!t.nodeType&&t,a=c&&e&&!e.nodeType&&e,i=a&&a.exports===c?n.Buffer:void 0,u=(i?i.isBuffer:void 0)||o;e.exports=u},1609:function(e,t,r){var n=r(280),o=r(4160),c=r(5694),a=r(1469),i=r(8612),u=r(4144),l=r(5726),f=r(6719),s=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(i(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||u(e)||f(e)||c(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(l(e))return!n(e).length;for(var r in e)if(s.call(e,r))return!1;return!0}},3560:function(e,t,r){var n=r(4239),o=r(3218);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},1780:function(e){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},6719:function(e,t,r){var n=r(8749),o=r(7518),c=r(1167),a=c&&c.isTypedArray,i=a?o(a):n;e.exports=i},5062:function(e){e.exports=function(){return!1}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={id:n,loaded:!1,exports:{}};return e[n](c,c.exports,r),c.loaded=!0,c.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){"use strict";var e=window.React,t=window.wp.blocks,n=JSON.parse('{"u2":"wpzoom-forms/multi-checkbox-field"}');function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function u(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,a,i=[],u=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=c.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=r(1609),s=r.n(f),p=window.wp.blockEditor,m=window.wp.element,b=window.wp.i18n,y=window.wp.components;function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var h=n.u2;(0,t.registerBlockType)(h,{icon:(0,e.createElement)("svg",{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("title",null),(0,e.createElement)("path",{d:"M54,56H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H54a2,2,0,0,1,2,2V54A2,2,0,0,1,54,56ZM4,52H52V4H4Z"}),(0,e.createElement)("path",{d:"M25.5,41a2,2,0,0,1-1.41-.58L8.59,24.9a2,2,0,0,1,2.82-2.82L25.5,36.17,44.59,17.08a2,2,0,1,1,2.82,2.83L26.92,40.41A2,2,0,0,1,25.5,41Z"}),(0,e.createElement)("path",{d:"M126,24H68a2,2,0,0,1,0-4h58a2,2,0,0,1,0,4Z"}),(0,e.createElement)("path",{d:"M54,128H2a2,2,0,0,1-2-2V74a2,2,0,0,1,2-2H54a2,2,0,0,1,2,2v52A2,2,0,0,1,54,128ZM4,124H52V76H4Z"}),(0,e.createElement)("path",{d:"M107,36H68a2,2,0,0,1,0-4h39a2,2,0,0,1,0,4Z"}),(0,e.createElement)("path",{d:"M126,96H68a2,2,0,0,1,0-4h58a2,2,0,0,1,0,4Z"}),(0,e.createElement)("path",{d:"M116,108H68a2,2,0,0,1,0-4h48a2,2,0,0,1,0,4Z"})),edit:function(t){var r=(0,p.useBlockProps)({className:"unstyled-list"}),n=t.attributes,o=t.setAttributes,a=t.clientId,i=n.id,f=n.name,v=n.options,h=n.defaultValue,w=n.label,j=n.showLabel,g=n.required,O=l((0,m.useState)(!1),2),E=O[0],x=O[1],_=l((0,m.useState)(""),2),k=_[0],S=_[1];return(0,m.useEffect)((function(){i||o({id:"input_"+a.substr(0,8)})}),[]),(0,m.useEffect)((function(){if(v){var e="";v.forEach((function(t){e+=t+"\n"})),S(e)}}),[v]),(0,e.createElement)(m.Fragment,null,(0,e.createElement)(p.InspectorControls,null,(0,e.createElement)(y.PanelBody,{title:(0,b.__)("Options","wpzoom-forms")},(0,e.createElement)(y.TextControl,{label:(0,b.__)("Name","wpzoom-forms"),value:f,placeholder:(0,b.__)("e.g. My Checkbox Field","wpzoom-forms"),onChange:function(e){return o({name:e})}}),(0,e.createElement)(y.Card,{size:"small"},(0,e.createElement)(y.CardHeader,null,(0,b.__)("Items","wpzoom-forms"),(0,e.createElement)(y.Button,{icon:"insert",label:(0,b.__)("Add Item","wpzoom-forms"),onClick:function(){var e=u(v);e.push((0,b.sprintf)((0,b.__)("Item #%s","wpzoom-forms"),v.length+1)),o({options:e})}.bind(void 0)})),(0,e.createElement)(y.CardBody,null,v.map((function(t,r){return(0,e.createElement)(m.Fragment,{key:r},(0,e.createElement)(y.Flex,null,(0,e.createElement)(y.FlexBlock,null,(0,e.createElement)(y.TextControl,{value:v[r],onChange:function(e){return function(e,t){var r=u(v);r[t]=e,o({options:r})}(e,r)}})),v.length>1&&(0,e.createElement)(y.FlexItem,null,(0,e.createElement)(y.Button,{icon:"no-alt",label:(0,b.__)("Delete Item","wpzoom-forms"),onClick:function(){return function(e){var t=u(v);t.splice(e,1),o({options:t})}(r)}}))))})))),(0,e.createElement)(y.Button,{icon:"admin-settings",label:(0,b.__)("Add Bulk Options","wpzoom-forms"),onClick:function(){return x(!0)}},(0,b.__)("Add Bulk Options","wpzoom-forms")),E&&(0,e.createElement)(y.Modal,{title:(0,b.__)("Add Bulk Options","wpzoom-forms"),onRequestClose:function(){return x(!1)},shouldCloseOnClickOutside:!0},(0,e.createElement)("div",{className:"wpzoom-forms-extra-options",style:{maxWidth:"720px",maxHeight:"525px"}},(0,e.createElement)("div",{className:"form-group"},(0,e.createElement)("div",{className:"wrap-content"},(0,e.createElement)(y.TextareaControl,{label:(0,b.__)("Bulk Options","wpzoom-forms"),help:(0,b.__)("Each line break is a new option.","wpzoom-forms"),className:"bulk-add-enter-options",rows:"5",value:k,onChange:function(e){return S(e)}}))),(0,e.createElement)("div",{className:"form-group"},(0,e.createElement)(y.Button,{isDefault:!0,onClick:function(){return x(!1)}},(0,b.__)("Cancel","recipe-card-blocks-by-wpzoom")),!s()(k)&&(0,e.createElement)(y.Button,{isPrimary:!0,onClick:function(){var e;e=k.split("\n").filter(Boolean),o({options:e}),x(!1)}},(0,b.__)("Bulk Add","recipe-card-blocks-by-wpzoom"))))),(0,e.createElement)(y.SelectControl,{label:(0,b.__)("Default Value","wpzoom-forms"),value:h,options:v.map((function(e,t){return{label:e,value:e}})),onChange:function(e){return o({defaultValue:e})}}),(0,e.createElement)(y.ToggleControl,{label:(0,b.__)("Show Label","wpzoom-forms"),checked:!!j,onChange:function(e){return o({showLabel:!!e})}}),j&&(0,e.createElement)(y.TextControl,{label:(0,b.__)("Label","wpzoom-forms"),value:w,onChange:function(e){return o({label:e})}}),(0,e.createElement)(y.ToggleControl,{label:(0,b.__)("Required","wpzoom-forms"),checked:!!g,onChange:function(e){return o({required:!!e})}}))),(0,e.createElement)(m.Fragment,null,j&&(0,e.createElement)("label",{htmlFor:i},(0,e.createElement)(p.RichText,{tagName:"label",placeholder:(0,b.__)("Label","wpzoom-forms"),value:w,htmlFor:i,onChange:function(e){return o({label:e})}}),g&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,b.__)("*","wpzoom-forms"))),(0,e.createElement)("ul",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r),v.map((function(t,r){return(0,e.createElement)("li",{key:r},(0,e.createElement)("label",null,(0,e.createElement)("input",{type:"checkbox",name:"".concat(i,"[]"),id:i,value:t,checked:t==h,onChange:function(e){},required:!!g}),t))})))))},save:function(t){var r=t.attributes,n=p.useBlockProps.save(),o=r.id,a=(r.name,r.options),i=r.defaultValue,u=r.label,l=r.showLabel,f=r.required;return(0,e.createElement)(e.Fragment,null,l&&(0,e.createElement)("label",{htmlFor:o},(0,e.createElement)(p.RichText.Content,{tagName:"label",value:u,htmlFor:o}),f&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,b.__)("*","wpzoom-forms"))),(0,e.createElement)("ul",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},n),a.map((function(t,r){return(0,e.createElement)("li",{key:r},(0,e.createElement)("label",null,(0,e.createElement)("input",{type:"checkbox",name:"".concat(o,"[]"),id:o,value:t,checked:t==i,onChange:function(e){},required:!!f}),t))}))))}})}()}();