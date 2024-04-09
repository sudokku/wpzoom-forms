!function(){"use strict";var e=window.React,t=window.wp.blocks,o=JSON.parse('{"u2":"wpzoom-forms/datepicker-field"}');function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t,o){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var l=window.wp.blockEditor,a=window.wp.element,m=window.wp.i18n,c=window.wp.components;function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}var s=o.u2;(0,t.registerBlockType)(s,{icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100"},(0,e.createElement)("path",{d:"M15,58.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75 v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"}),(0,e.createElement)("path",{d:"M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35 C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"})),edit:function(t){var o=(0,l.useBlockProps)(),r=t.attributes,i=t.setAttributes,s=t.clientId,p=r.id,f=r.name,b=r.mode,w=r.format,d=r.customFormat,v=r.label,_=r.showLabel,g=r.required;return(0,a.useEffect)((function(){p||i({id:"input_"+s.substr(0,8)})}),[]),(0,e.createElement)(a.Fragment,null,(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(c.PanelBody,{title:(0,m.__)("Options","wpzoom-forms")},(0,e.createElement)(c.TextControl,{label:(0,m.__)("Name","wpzoom-forms"),value:f,placeholder:(0,m.__)("e.g. My Text Field","wpzoom-forms"),onChange:function(e){return i({name:e})}}),(0,e.createElement)(c.SelectControl,{label:(0,m.__)("Mode","wpzoom-forms"),value:b,options:[{label:(0,m.__)("Single","wpzoom-forms"),value:"single"},{label:(0,m.__)("Multiple","wpzoom-forms"),value:"multiple"},{label:(0,m.__)("Range","wpzoom-forms"),value:"range"}],onChange:function(e){return i({mode:e})}}),(0,e.createElement)(c.SelectControl,{label:(0,m.__)("Format","wpzoom-forms"),value:w,options:[{label:(0,m.__)("Y-m-d","wpzoom-forms"),value:"Y-m-d"},{label:(0,m.__)("F j, Y","wpzoom-forms"),value:"F j, Y"},{label:(0,m.__)("m/d/Y","wpzoom-forms"),value:"m/d/Y"},{label:(0,m.__)("d/m/Y","wpzoom-forms"),value:"d/m/Y"},{label:(0,m.__)("Custom","wpzoom-forms"),value:"custom_format"}],onChange:function(e){return i({format:e})}}),"custom_format"==w&&(0,e.createElement)(c.TextControl,{label:(0,m.__)("Custom Format","wpzoom-forms"),value:d,onChange:function(e){return i({customFormat:e})}}),(0,e.createElement)(c.ToggleControl,{label:(0,m.__)("Show Label","wpzoom-forms"),checked:!!_,onChange:function(e){return i({showLabel:!!e})}}),_&&(0,e.createElement)(c.TextControl,{label:(0,m.__)("Label","wpzoom-forms"),value:v,onChange:function(e){return i({label:e})}}),(0,e.createElement)(c.ToggleControl,{label:(0,m.__)("Required","wpzoom-forms"),checked:!!g,onChange:function(e){return i({required:!!e})}}))),(0,e.createElement)(a.Fragment,null,_&&(0,e.createElement)("label",{htmlFor:p},(0,e.createElement)(l.RichText,{tagName:"label",placeholder:(0,m.__)("Label","wpzoom-forms"),value:v,htmlFor:p,onChange:function(e){return i({label:e})}}),g&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,m.__)("*","wpzoom-forms"))),(0,e.createElement)("input",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({"data-datepicker":"true","data-date-format":"custom_format"==w?d:w,"data-mode":b,type:"text",name:p,id:p,placeholder:"custom_format"==w?d:w,required:!!g},o))))},save:function(t){var o=t.attributes,r=l.useBlockProps.save(),a=o.id,c=(o.name,o.mode),u=o.format,s=o.customFormat,p=o.label,f=o.showLabel,b=o.required;return(0,e.createElement)(e.Fragment,null,f&&(0,e.createElement)("label",{htmlFor:a},(0,e.createElement)(l.RichText.Content,{tagName:"label",value:p,htmlFor:a}),b&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,m.__)("*","wpzoom-forms"))),(0,e.createElement)("input",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({"data-datepicker":"true","data-date-format":"custom_format"==u?s:u,"data-mode":c,type:"text",name:a,id:a,placeholder:"custom_format"==u?s:u,required:!!b},r)))}})}();