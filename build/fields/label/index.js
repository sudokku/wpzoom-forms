!function(){"use strict";var e=window.React,t=window.wp.blocks,r=JSON.parse('{"u2":"wpzoom-forms/label-field"}');function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=window.wp.blockEditor,c=window.wp.element,u=window.wp.data,s=window.wp.i18n,f=window.wp.components;function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var b=r.u2;(0,t.registerBlockType)(b,{icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 32 32"},(0,e.createElement)("path",{d:"M17.56,31a1,1,0,0,1-.71-.29L1.29,15.15A1,1,0,0,1,1,14.44V4.2A3.2,3.2,0,0,1,4.2,1H14.44a1,1,0,0,1,.71.29L30.71,16.85a1, 1,0,0,1,0,1.41L18.26,30.71A1,1,0,0,1,17.56,31ZM3,14,17.56,28.59l11-11L14,3H4.2A1.2,1.2,0,0,0,3,4.2ZM8.41,8.41A2,2,0,1, 0,7,9,2,2,0,0,0,8.41,8.41ZM22.36,19.54a1,1,0,0,0,0-1.41l-9.9-9.9A1,1,0,0,0,11,9.64l9.9,9.9a1,1,0,0,0,1.41,0Zm-4.95.71a1, 1,0,0,0,0-1.41L9.64,11a1,1,0,0,0-1.41,1.41L16,20.24a1,1,0,0,0,1.41,0Z"})),edit:function(t){var r,n=(0,a.useBlockProps)(),l=t.attributes,p=t.setAttributes,b=t.clientId,w=l.id,y=l.name,d=l.forInput,g=l.required;(0,c.useEffect)((function(){w||p({id:"input_"+b.substr(0,8)})}),[]);var v=(0,u.useSelect)((function(e){return e("core/block-editor").getBlocks()}),[]),O=v&&v.length>0?function e(t){var r=[];return t.forEach((function(t){t.name.startsWith("wpzoom-forms/")&&!t.name.endsWith("label-field")&&r.push({value:t.attributes.id,label:t.attributes.name}),t.innerBlocks&&(r=[].concat(i(r),i(e(t.innerBlocks))))})),r}(v):[],h=(null==O||null===(r=O.find((function(e){return e.value==d})))||void 0===r||r.label,(0,e.createElement)(c.Fragment,null,(0,e.createElement)(f.SelectControl,{label:(0,s.__)("For Input","wpzoom-forms"),value:d,options:O.length>0?O:[{value:"-1",label:(0,s.__)("No inputs found...","wpzoom-forms")}],onChange:function(e){return p({forInput:e})}}),(0,e.createElement)(f.ToggleControl,{label:(0,s.__)("Required","wpzoom-forms"),checked:!!g,onChange:function(e){return p({required:!!e})}})));return(0,e.createElement)(c.Fragment,null,(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(f.PanelBody,{title:(0,s.__)("Options","wpzoom-forms")},O.length>0?h:(0,e.createElement)(Disabled,null,h))),(0,e.createElement)(c.Fragment,null,(0,e.createElement)(a.RichText,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({tagName:"label",placeholder:(0,s.__)("Label","wpzoom-forms"),value:y,htmlFor:d,onChange:function(e){return p({name:e})},"data-required":!!g},n)),g&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,s.__)("*","wpzoom-forms"))))},save:function(t){var r=t.attributes,n=a.useBlockProps.save(),l=(r.id,r.name),i=r.forInput,c=r.required;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.RichText.Content,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({tagName:"label",value:l,htmlFor:i,"data-required":!!c},n)),c&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,s.__)("*","wpzoom-forms")))}})}();