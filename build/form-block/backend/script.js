!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t,n){e.exports=n(28)()},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=window.wp.blocks},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},,function(e,t){e.exports=window.wp.data},function(e,t,n){var r=n(12),o=n(13),i=n(14);e.exports=function(e,t){return r(e)||o(e,t)||i()}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},,,function(e,t,n){"use strict";e.exports=n(30)},,,,function(e,t){e.exports=window.wp.serverSideRender},,,,,,,function(e,t,n){"use strict";var r=n(29);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,I=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case c:case u:case a:case p:return e;default:switch(e=e&&e.$$typeof){case s:case m:case b:case g:case l:return e;default:return t}}case i:return t}}}function x(e){return w(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=s,t.ContextProvider=l,t.Element=o,t.ForwardRef=m,t.Fragment=c,t.Lazy=b,t.Memo=g,t.Portal=i,t.Profiler=u,t.StrictMode=a,t.Suspense=p,t.isAsyncMode=function(e){return x(e)||w(e)===f},t.isConcurrentMode=x,t.isContextConsumer=function(e){return w(e)===s},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===m},t.isFragment=function(e){return w(e)===c},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===g},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===u},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===d||e===u||e===a||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===g||e.$$typeof===l||e.$$typeof===s||e.$$typeof===m||e.$$typeof===v||e.$$typeof===I||e.$$typeof===O||e.$$typeof===y)},t.typeOf=w},,,,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(5),i=n(7),c=n(4),a=n(10),u=n(1),l=n(21),s=n.n(l),f=n(6),d=n.n(f),m=n(11),p=n.n(m),h=n(8),g=n.n(h);function b(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=n(2),I=n.n(v),O=n(3);n(17);function w(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function x(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function j(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return x(n.overflowY,t)||x(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function E(e,t,n,r,o,i,c,a){return i<e&&c>t||i>e&&c<t?0:i<=e&&a<=n||c>=t&&a>=n?i-e-r:c>t&&a<n||i<e&&a>n?c-t+o:0}var k=0;function _(e,t){e&&function(e,t){var n=window,r=t.scrollMode,o=t.block,i=t.inline,c=t.boundary,a=t.skipOverflowHiddenElements,u="function"==typeof c?c:function(e){return e!==c};if(!w(e))throw new TypeError("Invalid target");for(var l=document.scrollingElement||document.documentElement,s=[],f=e;w(f)&&u(f);){if((f=f.parentNode)===l){s.push(f);break}f===document.body&&j(f)&&!j(document.documentElement)||j(f,a)&&s.push(f)}for(var d=n.visualViewport?n.visualViewport.width:innerWidth,m=n.visualViewport?n.visualViewport.height:innerHeight,p=window.scrollX||pageXOffset,h=window.scrollY||pageYOffset,g=e.getBoundingClientRect(),b=g.height,y=g.width,v=g.top,I=g.right,O=g.bottom,x=g.left,k="start"===o||"nearest"===o?v:"end"===o?O:v+b/2,_="center"===i?x+y/2:"end"===i?I:x,M=[],S=0;S<s.length;S++){var C=s[S],R=C.getBoundingClientRect(),T=R.height,D=R.width,L=R.top,P=R.right,A=R.bottom,N=R.left;if("if-needed"===r&&v>=0&&x>=0&&O<=m&&I<=d&&v>=L&&O<=A&&x>=N&&I<=P)return M;var V=getComputedStyle(C),B=parseInt(V.borderLeftWidth,10),F=parseInt(V.borderTopWidth,10),K=parseInt(V.borderRightWidth,10),z=parseInt(V.borderBottomWidth,10),$=0,H=0,W="offsetWidth"in C?C.offsetWidth-C.clientWidth-B-K:0,U="offsetHeight"in C?C.offsetHeight-C.clientHeight-F-z:0;if(l===C)$="start"===o?k:"end"===o?k-m:"nearest"===o?E(h,h+m,m,F,z,h+k,h+k+b,b):k-m/2,H="start"===i?_:"center"===i?_-d/2:"end"===i?_-d:E(p,p+d,d,B,K,p+_,p+_+y,y),$=Math.max(0,$+h),H=Math.max(0,H+p);else{$="start"===o?k-L-F:"end"===o?k-A+z+U:"nearest"===o?E(L,A,T,F,z+U,k,k+b,b):k-(L+T/2)+U/2,H="start"===i?_-N-B:"center"===i?_-(N+D/2)+W/2:"end"===i?_-P+K+W:E(N,P,D,B,K+W,_,_+y,y);var Z=C.scrollLeft,Y=C.scrollTop;k+=Y-($=Math.max(0,Math.min(Y+$,C.scrollHeight-T+U))),_+=Z-(H=Math.max(0,Math.min(Z+H,C.scrollWidth-D+W)))}M.push({el:C,top:$,left:H})}return M}(e,{boundary:t,block:"nearest",scrollMode:"if-needed"}).forEach((function(e){var t=e.el,n=e.top,r=e.left;t.scrollTop=n,t.scrollLeft=r}))}function M(e,t){return e===t||e.contains&&e.contains(t)}function S(e,t){var n;function r(){n&&clearTimeout(n)}function o(){for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];r(),n=setTimeout((function(){n=null,e.apply(void 0,i)}),t)}return o.cancel=r,o}function C(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return t&&t.apply(void 0,[e].concat(r)),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault}))}}function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){"function"==typeof t?t(e):t&&(t.current=e)}))}}function T(){return String(k++)}function D(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function L(e,t){return Object.keys(e).reduce((function(n,r){return n[r]=P(t,r)?t[r]:e[r],n}),{})}function P(e,t){return void 0!==e[t]}function A(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&0!==t.indexOf("Arrow")?"Arrow"+t:t}function N(e,t,n,r,o){if(void 0===o&&(o=!0),0===n)return-1;var i=n-1;("number"!=typeof t||t<0||t>=n)&&(t=e>0?-1:i+1);var c=t+e;c<0?c=o?i:0:c>i&&(c=o?0:i);var a=V(e,c,n,r,o);return-1===a?t>=n?-1:t:a}function V(e,t,n,r,o){var i=r(t);if(!i||!i.hasAttribute("disabled"))return t;if(e>0){for(var c=t+1;c<n;c++)if(!r(c).hasAttribute("disabled"))return c}else for(var a=t-1;a>=0;a--)if(!r(a).hasAttribute("disabled"))return a;return o?e>0?V(1,0,n,r,!1):V(-1,n-1,n,r,!1):-1}function B(e,t,n,r){return void 0===r&&(r=!0),t.some((function(t){return t&&(M(t,e)||r&&M(t,n.activeElement))}))}var F=S((function(){z().textContent=""}),500);function K(e,t){var n=z(t);e&&(n.textContent=e,F())}function z(e){void 0===e&&(e=document);var t=e.getElementById("a11y-status-message");return t||((t=e.createElement("div")).setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var $={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function H(e,t,n){var r=e.props,o=e.type,i={};Object.keys(t).forEach((function(r){!function(e,t,n,r){var o=t.props,i=t.type,c="on"+q(e)+"Change";o[c]&&void 0!==r[e]&&r[e]!==n[e]&&o[c](y({type:i},r))}(r,e,t,n),n[r]!==t[r]&&(i[r]=n[r])})),r.onStateChange&&Object.keys(i).length&&r.onStateChange(y({type:o},i))}var W=S((function(e,t){K(e(),t)}),200);function U(e){var t=e.id,n=e.labelId,r=e.menuId,o=e.getItemId,i=e.toggleButtonId,c=void 0===t?"downshift-"+T():t;return{labelId:n||c+"-label",menuId:r||c+"-menu",getItemId:o||function(e){return c+"-item-"+e},toggleButtonId:i||c+"-toggle-button"}}function Z(e,t,n){return void 0!==e?e:0===n.length?-1:n.indexOf(t)}function Y(e){return/^\S{1}$/.test(e)}function q(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function X(e){var t=Object(O.useRef)(e);return t.current=e,t}function G(e,t,n){var r=Object(O.useRef)(),o=Object(O.useRef)(),i=Object(O.useCallback)((function(t,n){o.current=n,t=L(t,n.props);var r=e(t,n);return n.props.stateReducer(t,y({},n,{changes:r}))}),[e]),c=Object(O.useReducer)(i,t),a=c[0],u=c[1],l=X(n),s=Object(O.useCallback)((function(e){return u(y({props:l.current},e))}),[l]),f=o.current;return Object(O.useEffect)((function(){f&&r.current&&r.current!==a&&H(f,L(r.current,f.props),a),r.current=a}),[a,n,f]),[a,s]}function J(e,t,n){var r=G(e,t,n),o=r[0],i=r[1];return[L(o,n),i]}var Q={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11ySelectionMessage:function(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""},scrollIntoView:_,circularNavigation:!1,environment:"undefined"==typeof window?{}:window};function ee(e,t,n){void 0===n&&(n=$);var r="default"+q(t);return r in e?e[r]:n[t]}function te(e,t,n){if(void 0===n&&(n=$),t in e)return e[t];var r="initial"+q(t);return r in e?e[r]:ee(e,t,n)}function ne(e){var t=te(e,"selectedItem"),n=te(e,"isOpen"),r=te(e,"highlightedIndex"),o=te(e,"inputValue");return{highlightedIndex:r<0&&t&&n?e.items.indexOf(t):r,isOpen:n,selectedItem:t,inputValue:o}}function re(e,t,n,r){var o=e.items,i=e.initialHighlightedIndex,c=e.defaultHighlightedIndex,a=t.selectedItem,u=t.highlightedIndex;return 0===o.length?-1:void 0!==i&&u===i?i:void 0!==c?c:a?0===n?o.indexOf(a):N(n,o.indexOf(a),o.length,r,!1):0===n?-1:n<0?o.length-1:0}function oe(e,t,n,r){var o=Object(O.useRef)({isMouseDown:!1,isTouchMove:!1});return Object(O.useEffect)((function(){var i=function(){o.current.isMouseDown=!0},c=function(i){o.current.isMouseDown=!1,e&&!B(i.target,t.map((function(e){return e.current})),n.document)&&r()},a=function(){o.current.isTouchMove=!1},u=function(){o.current.isTouchMove=!0},l=function(i){!e||o.current.isTouchMove||B(i.target,t.map((function(e){return e.current})),n.document,!1)||r()};return n.addEventListener("mousedown",i),n.addEventListener("mouseup",c),n.addEventListener("touchstart",a),n.addEventListener("touchmove",u),n.addEventListener("touchend",l),function(){n.removeEventListener("mousedown",i),n.removeEventListener("mouseup",c),n.removeEventListener("touchstart",a),n.removeEventListener("touchmove",u),n.removeEventListener("touchend",l)}}),[e,n]),o}function ie(){for(var e=!1,t=Object(O.useRef)(!0),n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=Object(O.useRef)(r.reduce((function(e,t){return e[t]={},e}),{}));Object(O.useEffect)((function(){e&&(Object.keys(i.current).forEach((function(e){var n=i.current[e];if(!t.current||Object.keys(n).length){var r=n.suppressRefError,o=n.refKey,c=n.elementRef;c&&c.current||r||console.error('downshift: The ref prop "'+o+'" from '+e+" was not applied correctly on your element.")}else console.error("downshift: You forgot to call the "+e+" getter function on your component / element.")})),t.current=!1)}));var c=Object(O.useCallback)((function(e,t,n,r){0}),[]);return c}function ce(e,t,n){var r=n.isInitialMount,o=n.previousResultCount,i=n.highlightedIndex,c=n.items,a=n.environment,u=b(n,["isInitialMount","previousResultCount","highlightedIndex","items","environment"]);Object(O.useEffect)((function(){r||W((function(){return e(y({highlightedIndex:i,highlightedItem:c[i],resultCount:c.length,previousResultCount:o},u))}),a.document)}),t)}function ae(e){var t=e.highlightedIndex,n=e.isOpen,r=e.itemRefs,o=e.getItemNodeFromIndex,i=e.menuElement,c=e.scrollIntoView,a=Object(O.useRef)(!0);return Object(O.useEffect)((function(){t<0||!n||!Object.keys(r.current).length||(!1===a.current?a.current=!0:c(o(t),i))}),[t]),a}function ue(e){var t=e.isInitialMount,n=e.props,r=e.state,o=Object(O.useRef)(n);Object(O.useEffect)((function(){t||(o.current,o.current=n)}),[r,n,t])}function le(e,t,n,r,o){for(var i=n.map((function(e){return r(e).toLowerCase()})),c=e.toLowerCase(),a=function(e,t){var n=o(t);return e.startsWith(c)&&!(n&&n.hasAttribute("disabled"))},u=t+1;u<i.length;u++){if(a(i[u],u))return u}for(var l=0;l<t;l++){if(a(i[l],l))return l}return t}I.a.array.isRequired,I.a.func,I.a.func,I.a.func,I.a.bool,I.a.number,I.a.number,I.a.number,I.a.bool,I.a.bool,I.a.bool,I.a.any,I.a.any,I.a.any,I.a.string,I.a.string,I.a.string,I.a.func,I.a.string,I.a.func,I.a.func,I.a.func,I.a.func,I.a.func,I.a.shape({addEventListener:I.a.func,removeEventListener:I.a.func,document:I.a.shape({getElementById:I.a.func,activeElement:I.a.any,body:I.a.any})});var se=y({},Q,{getA11yStatusMessage:function(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount;return t?n?n!==r?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.":"":"No results are available.":""}}),fe=Object.freeze({__proto__:null,MenuKeyDownArrowDown:0,MenuKeyDownArrowUp:1,MenuKeyDownEscape:2,MenuKeyDownHome:3,MenuKeyDownEnd:4,MenuKeyDownEnter:5,MenuKeyDownSpaceButton:6,MenuKeyDownCharacter:7,MenuBlur:8,MenuMouseLeave:9,ItemMouseMove:10,ItemClick:11,ToggleButtonClick:12,ToggleButtonKeyDownArrowDown:13,ToggleButtonKeyDownArrowUp:14,ToggleButtonKeyDownCharacter:15,FunctionToggleMenu:16,FunctionOpenMenu:17,FunctionCloseMenu:18,FunctionSetHighlightedIndex:19,FunctionSelectItem:20,FunctionSetInputValue:21,FunctionReset:22});function de(e,t){var n,r=t.type,o=t.props,i=t.shiftKey;switch(r){case 10:n={highlightedIndex:t.index};break;case 11:n={isOpen:ee(o,"isOpen"),highlightedIndex:ee(o,"highlightedIndex"),selectedItem:o.items[t.index]};break;case 15:var c=t.key,a=""+e.inputValue+c,u=le(a,e.selectedItem?o.items.indexOf(e.selectedItem):-1,o.items,o.itemToString,t.getItemNodeFromIndex);n=y({inputValue:a},u>=0&&{selectedItem:o.items[u]});break;case 13:n={highlightedIndex:re(o,e,1,t.getItemNodeFromIndex),isOpen:!0};break;case 14:n={highlightedIndex:re(o,e,-1,t.getItemNodeFromIndex),isOpen:!0};break;case 5:case 6:n=y({isOpen:ee(o,"isOpen"),highlightedIndex:ee(o,"highlightedIndex")},e.highlightedIndex>=0&&{selectedItem:o.items[e.highlightedIndex]});break;case 3:n={highlightedIndex:V(1,0,o.items.length,t.getItemNodeFromIndex,!1)};break;case 4:n={highlightedIndex:V(-1,o.items.length-1,o.items.length,t.getItemNodeFromIndex,!1)};break;case 2:case 8:n={isOpen:!1,highlightedIndex:-1};break;case 7:var l=t.key,s=""+e.inputValue+l,f=le(s,e.highlightedIndex,o.items,o.itemToString,t.getItemNodeFromIndex);n=y({inputValue:s},f>=0&&{highlightedIndex:f});break;case 0:n={highlightedIndex:N(i?5:1,e.highlightedIndex,o.items.length,t.getItemNodeFromIndex,o.circularNavigation)};break;case 1:n={highlightedIndex:N(i?-5:-1,e.highlightedIndex,o.items.length,t.getItemNodeFromIndex,o.circularNavigation)};break;case 9:n={highlightedIndex:-1};break;case 12:case 16:n={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:re(o,e,0)};break;case 17:n={isOpen:!0,highlightedIndex:re(o,e,0)};break;case 18:n={isOpen:!1};break;case 19:n={highlightedIndex:t.highlightedIndex};break;case 20:n={selectedItem:t.selectedItem};break;case 21:n={inputValue:t.inputValue};break;case 22:n={highlightedIndex:ee(o,"highlightedIndex"),isOpen:ee(o,"isOpen"),selectedItem:ee(o,"selectedItem"),inputValue:ee(o,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return y({},e,n)}function me(e){void 0===e&&(e={});var t=y({},se,e),n=t.items,r=t.scrollIntoView,o=t.environment,i=t.initialIsOpen,c=t.defaultIsOpen,a=t.itemToString,u=t.getA11ySelectionMessage,l=t.getA11yStatusMessage,s=J(de,ne(t),t),f=s[0],d=s[1],m=f.isOpen,p=f.highlightedIndex,h=f.selectedItem,g=f.inputValue,v=Object(O.useRef)(null),I=Object(O.useRef)(null),w=Object(O.useRef)();w.current={};var x=Object(O.useRef)(!0),j=Object(O.useRef)(null),E=Object(O.useRef)(U(t)),k=Object(O.useRef)(),_=Object(O.useRef)(!0),M=X({state:f,props:t}),T=function(e){return w.current[E.current.getItemId(e)]};ce(l,[m,p,g,n],y({isInitialMount:_.current,previousResultCount:k.current,items:n,environment:o,itemToString:a},f)),ce(u,[h],y({isInitialMount:_.current,previousResultCount:k.current,items:n,environment:o,itemToString:a},f));var D=ae({menuElement:I.current,highlightedIndex:p,isOpen:m,itemRefs:w,scrollIntoView:r,getItemNodeFromIndex:T});Object(O.useEffect)((function(){_.current&&(j.current=S((function(e){e({type:21,inputValue:""})}),500)),g&&j.current(d)}),[d,g]),ue({isInitialMount:_.current,props:t,state:f}),Object(O.useEffect)((function(){_.current?(i||c||m)&&I.current&&I.current.focus():m?I.current&&I.current.focus():o.document.activeElement===I.current&&v.current&&(x.current=!1,v.current.focus())}),[m]),Object(O.useEffect)((function(){_.current||(k.current=n.length)}));var L=oe(m,[I,v],o,(function(){d({type:8})})),P=ie("getMenuProps","getToggleButtonProps");Object(O.useEffect)((function(){_.current=!1}),[]);var N=Object(O.useMemo)((function(){return{ArrowDown:function(e){e.preventDefault(),d({type:13,getItemNodeFromIndex:T,shiftKey:e.shiftKey})},ArrowUp:function(e){e.preventDefault(),d({type:14,getItemNodeFromIndex:T,shiftKey:e.shiftKey})}}}),[d]),V=Object(O.useMemo)((function(){return{ArrowDown:function(e){e.preventDefault(),d({type:0,getItemNodeFromIndex:T,shiftKey:e.shiftKey})},ArrowUp:function(e){e.preventDefault(),d({type:1,getItemNodeFromIndex:T,shiftKey:e.shiftKey})},Home:function(e){e.preventDefault(),d({type:3,getItemNodeFromIndex:T})},End:function(e){e.preventDefault(),d({type:4,getItemNodeFromIndex:T})},Escape:function(){d({type:2})},Enter:function(e){e.preventDefault(),d({type:5})}," ":function(e){e.preventDefault(),d({type:6})}}}),[d]),B=Object(O.useCallback)((function(){d({type:16})}),[d]),F=Object(O.useCallback)((function(){d({type:18})}),[d]),K=Object(O.useCallback)((function(){d({type:17})}),[d]),z=Object(O.useCallback)((function(e){d({type:19,highlightedIndex:e})}),[d]),$=Object(O.useCallback)((function(e){d({type:20,selectedItem:e})}),[d]),H=Object(O.useCallback)((function(){d({type:22})}),[d]),W=Object(O.useCallback)((function(e){d({type:21,inputValue:e})}),[d]),q=Object(O.useCallback)((function(e){return y({id:E.current.labelId,htmlFor:E.current.toggleButtonId},e)}),[]),G=Object(O.useCallback)((function(e,t){var n,r=void 0===e?{}:e,o=r.onMouseLeave,i=r.refKey,c=void 0===i?"ref":i,a=r.onKeyDown,u=r.onBlur,l=r.ref,s=b(r,["onMouseLeave","refKey","onKeyDown","onBlur","ref"]),f=(void 0===t?{}:t).suppressRefError,m=void 0!==f&&f,p=M.current.state;return P("getMenuProps",m,c,I),y(((n={})[c]=R(l,(function(e){I.current=e})),n.id=E.current.menuId,n.role="listbox",n["aria-labelledby"]=E.current.labelId,n.tabIndex=-1,n),p.isOpen&&p.highlightedIndex>-1&&{"aria-activedescendant":E.current.getItemId(p.highlightedIndex)},{onMouseLeave:C(o,(function(){d({type:9})})),onKeyDown:C(a,(function(e){var t=A(e);t&&V[t]?V[t](e):Y(t)&&d({type:7,key:t,getItemNodeFromIndex:T})})),onBlur:C(u,(function(){!1!==x.current?!L.current.isMouseDown&&d({type:8}):x.current=!0}))},s)}),[d,M,V,L,P]);return{getToggleButtonProps:Object(O.useCallback)((function(e,t){var n,r=void 0===e?{}:e,o=r.onClick,i=r.onKeyDown,c=r.refKey,a=void 0===c?"ref":c,u=r.ref,l=b(r,["onClick","onKeyDown","refKey","ref"]),s=(void 0===t?{}:t).suppressRefError,f=void 0!==s&&s,m=y(((n={})[a]=R(u,(function(e){v.current=e})),n.id=E.current.toggleButtonId,n["aria-haspopup"]="listbox",n["aria-expanded"]=M.current.state.isOpen,n["aria-labelledby"]=E.current.labelId+" "+E.current.toggleButtonId,n),l);return l.disabled||(m.onClick=C(o,(function(){d({type:12})})),m.onKeyDown=C(i,(function(e){var t=A(e);t&&N[t]?N[t](e):Y(t)&&d({type:15,key:t,getItemNodeFromIndex:T})}))),P("getToggleButtonProps",f,a,v),m}),[d,M,N,P]),getLabelProps:q,getMenuProps:G,getItemProps:Object(O.useCallback)((function(e){var t,n=void 0===e?{}:e,r=n.item,o=n.index,i=n.onMouseMove,c=n.onClick,a=n.refKey,u=void 0===a?"ref":a,l=n.ref,s=b(n,["item","index","onMouseMove","onClick","refKey","ref"]),f=M.current,m=f.state,p=f.props,h=Z(o,r,p.items);if(h<0)throw new Error("Pass either item or item index in getItemProps!");var g=y(((t={role:"option","aria-selected":""+(h===m.highlightedIndex),id:E.current.getItemId(h)})[u]=R(l,(function(e){e&&(w.current[E.current.getItemId(h)]=e)})),t),s);return s.disabled||(g.onMouseMove=C(i,(function(){o!==m.highlightedIndex&&(D.current=!1,d({type:10,index:o}))})),g.onClick=C(c,(function(){d({type:11,index:o})}))),g}),[d,M,D]),toggleMenu:B,openMenu:K,closeMenu:F,setHighlightedIndex:z,selectItem:$,reset:H,setInputValue:W,highlightedIndex:p,isOpen:m,selectedItem:h,inputValue:g}}me.stateChangeTypes=fe;I.a.array.isRequired,I.a.func,I.a.func,I.a.func,I.a.bool,I.a.number,I.a.number,I.a.number,I.a.bool,I.a.bool,I.a.bool,I.a.any,I.a.any,I.a.any,I.a.string,I.a.string,I.a.string,I.a.string,I.a.string,I.a.string,I.a.func,I.a.string,I.a.string,I.a.func,I.a.func,I.a.func,I.a.func,I.a.func,I.a.func,I.a.shape({addEventListener:I.a.func,removeEventListener:I.a.func,document:I.a.shape({getElementById:I.a.func,activeElement:I.a.any,body:I.a.any})});y({},Q,{getA11yStatusMessage:D,circularNavigation:!0});I.a.array,I.a.array,I.a.array,I.a.func,I.a.func,I.a.func,I.a.number,I.a.number,I.a.number,I.a.func,I.a.func,I.a.string,I.a.string,I.a.shape({addEventListener:I.a.func,removeEventListener:I.a.func,document:I.a.shape({getElementById:I.a.func,activeElement:I.a.any,body:I.a.any})});var pe=function(e){return e&&e.name},he=function(e,t){var n=e.selectedItem,r=t.type,o=t.changes,i=t.props.items;switch(r){case me.stateChangeTypes.ToggleButtonKeyDownArrowDown:return{selectedItem:i[n?Math.min(i.indexOf(n)+1,i.length-1):0]};case me.stateChangeTypes.ToggleButtonKeyDownArrowUp:return{selectedItem:i[n?Math.max(i.indexOf(n)-1,0):i.length-1]};default:return o}};function ge(e){var t=e.className,n=e.hideLabelFromVision,o=e.label,i=e.selectPlaceholder,a=e.searchPlaceholder,u=e.noResultsLabel,l=e.options,s=e.onChange,f=e.value,m=me({initialSelectedItem:l[0],items:l,itemToString:pe,onSelectedItemChange:s,selectedItem:f,stateReducer:he}),h=m.getLabelProps,b=m.getToggleButtonProps,y=m.getMenuProps,v=m.getItemProps,I=m.isOpen,O=m.highlightedIndex,w=m.selectedItem,x=Object(r.useState)(l),j=p()(x,2),E=j[0],k=j[1],_=y({className:g()("components-custom-select-control__menu","components-searchable-select-control__menu"),"aria-hidden":!I});return _["aria-activedescendant"]&&"downshift-null"===_["aria-activedescendant"].slice(0,"downshift-null".length)&&delete _["aria-activedescendant"],Object(r.createElement)("div",{className:g()("components-custom-select-control","components-searchable-select-control",t)},n?Object(r.createElement)(c.VisuallyHidden,d()({as:"label"},h()),o):Object(r.createElement)("label",h({className:g()("components-custom-select-control__label","components-searchable-select-control__label")}),o),Object(r.createElement)(c.Button,b({"aria-label":o,"aria-labelledby":void 0,className:g()("components-custom-select-control__button","components-searchable-select-control__button"),isSmall:!1}),Object(r.createElement)("span",{className:"components-searchable-select-control__button-text",title:pe(w)},pe(w)||i),Object(r.createElement)(c.Icon,{icon:Object(r.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)("path",{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})),className:g()("components-custom-select-control__button-icon","components-searchable-select-control__button-icon")})),Object(r.createElement)("div",_,I&&Object(r.createElement)("div",{className:g()("components-custom-select-control__menu-inner","components-searchable-select-control__menu-inner")},Object(r.createElement)(c.TextControl,{placeholder:a,className:g()("components-custom-select-control__search","components-searchable-select-control__search"),onChange:function(e){if(l.length>0){var t=l.filter((function(t){return-1!=t.name.toLowerCase().search(e.toLowerCase().trim())}));t.length<1&&t.push({key:"-2",name:u,style:{opacity:"0.7",pointerEvents:"none"}}),k(t)}}}),Object(r.createElement)("ul",{className:g()("components-custom-select-control__items","components-searchable-select-control__items")},E.map((function(e,t){return Object(r.createElement)("li",v({item:e,index:t,key:e.key,className:g()(e.className,"components-custom-select-control__item","components-searchable-select-control__item",{"is-highlighted":t===O},{"is-selected":e&&w&&e.key==w.key}),style:e.style}),e&&w&&e.key==w.key&&Object(r.createElement)(c.Icon,{icon:Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)("path",{d:"M9 18.6L3.5 13l1-1L9 16.4l9.5-9.9 1 1z"})),className:g()("components-custom-select-control__item-icon","components-searchable-select-control__item-icon")}),e.name)}))))))}var be=Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 60 60"},Object(r.createElement)("path",{d:"M56.854,21.7383,55.2056,20.09a4.5061,4.5061,0,0,0-6.3638,0L44.9077,24.024V13.55a6.5075,6.5075,0,0,0-6.5-6.5h-14.87c-.03, 0-.0572.0143-.0869.0161a1.4825,1.4825,0,0,0-.349.0645,1.466,1.466,0,0,0-.14.0432,1.4907,1.4907,0,0,0-.4249.259l-16.21, 14.52a1.4844,1.4844,0,0,0-.2576.3135c-.0194.03-.0363.0606-.0534.0922a1.4847,1.4847,0,0,0-.1275.3136c-.0057.0205-.0149.04-.02.06a1.493, 1.493,0,0,0-.0409.3376V50.45a6.5076,6.5076,0,0,0,6.5,6.5h26.08a6.5075,6.5075,0,0,0,6.5-6.5V40.049L56.8545,28.1025A4.5061, 4.5061,0,0,0,56.854,21.7383Zm-3.77.4726,1.6479,1.6485a1.5027,1.5027,0,0,1,.0005,2.122L53.6994,27.015l-3.77-3.77, 1.0339-1.034A1.5038,1.5038,0,0,1,53.0845,22.2109ZM35.9058,44.8086l-5.0552,1.2793,1.2851-5.0488L47.808,25.366l3.77, 3.77ZM19.8951,13.8268l2.143-1.92V18.07a3.5042,3.5042,0,0,1-3.5,3.5H11.2505ZM41.9077,50.45a3.5042,3.5042,0,0,1-3.5, 3.5h-26.08a3.5042,3.5042,0,0,1-3.5-3.5V24.57h9.7105a6.5075,6.5075,0,0,0,6.5-6.5V10.05h13.37a3.5042,3.5042,0,0,1,3.5, 3.5V27.0241L29.7231,39.209a1.4932,1.4932,0,0,0-.393.69L27.3213,47.79a1.5,1.5,0,0,0,1.8218,1.8243l7.8994-1.9991a1.4966, 1.4966,0,0,0,.6924-.3935l4.1728-4.1727Z"}));Object(i.updateCategory)("wpzoom-blocks",{icon:Object(r.createElement)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)("path",{fill:"#08618a",d:"m13.66481,9.79698l-0.75323,0l0,2.36856c0.15993,0.00928 0.30065,0.02011 0.76443, 0.02011c0.85719,0 1.36894,-0.49197 1.36894,-1.25313c0,-0.67296 -0.56453,-1.13554  -1.38014,-1.13554zm-1.66481,-9.59801c-6.73758,0 -12.19898,5.28324 -12.19898, 11.80103s5.4614,11.80103 12.19898,11.80103s12.19898,-5.28324 12.19898, -11.80103s-5.46298,-11.80103 -12.19898,-11.80103zm-1.48729,9.59801l-0.76762, 0l-1.78316,5.56944l-0.63489,0l-1.77354,-3.94812l-1.78316,3.94812l-0.63489, 0l-1.81354,-5.56944l-0.72446,0l0,-0.92824l2.87862,0l0,0.92824l-0.91477,0l1.07789, 3.39737l1.64242,-3.70676l0.60451,0l1.64242,3.70676l1.00753,-3.39737l-0.90196,0l0, -0.92824l2.87862,0l0,0.92824l0,0zm3.06253,3.3525c-0.31185,0 -0.50376,0 -0.66369, -0.00928l0,1.14329l0.79961,0l0,0.92824l-2.7187,0l0,-0.92824l0.79961,0l0, -4.48649l-0.79961,0l0,-0.92824l2.73308,0c1.42012,0 2.49961,0.78592 2.49961, 2.09164c-0.00161,1.4728 -1.08909,2.1891 -2.64994,2.1891l0.00002,-0.00002l0, 0zm8.33043,2.06223l-5.10797,0l-0.10074,-0.5879l4.84569,-4.82685l-2.53958, 0l-0.25269,1.08295l-1.03791,0l0.48297,-2.01119l4.95763,0l0.10074,0.5879l-4.84569, 4.82685l2.68992,0l0.25269,-1.08295l1.03791,0l-0.48297,2.01119z"}))}),Object(i.registerBlockType)("zoom-forms/form-block",{title:Object(u.__)("ZOOM Form","wpzoom-blocks"),description:Object(u.__)("A custom form for accepting input from users.","wpzoom-blocks"),icon:be,category:"wpzoom-blocks",supports:{align:!0,html:!1},attributes:{formId:{type:"string",default:"-1"}},example:{},edit:function(e){var t=e.attributes,n=e.setAttributes,i=t.formId,l=i&&""!=String(i).trim()?String(i):"-1",f=Object(a.useSelect)((function(e){return e("core").getEntityRecords("postType","wpzf-form",{order:"asc",orderby:"title",per_page:-1})}),[]),d=f&&f.length>0?f.map((function(e){return{key:String(e.id),name:e.title.raw}})):[],m=d.find((function(e){return e.key==l})),p=Object(r.createElement)(ge,{label:Object(u.__)("Form","zoom-forms"),selectPlaceholder:d.length<1?Object(u.__)("No forms exist...","zoom-forms"):Object(u.__)("Select a form...","zoom-forms"),searchPlaceholder:Object(u.__)("Search...","zoom-forms"),noResultsLabel:Object(u.__)("Nothing found...","zoom-forms"),options:d,value:void 0!==m?m:"",onChange:function(e){return n({formId:String(e.selectedItem.key)})}}),h=Object(r.createElement)(c.__experimentalHStack,{expanded:!0,alignment:"right"},Object(r.createElement)(c.Button,{variant:"link",text:Object(u.__)("Edit form","zoom-forms"),icon:Object(r.createElement)("svg",{viewBox:"0 0 24 24"},Object(r.createElement)("path",{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"})),iconSize:20,href:wpzf_formblock.admin_url+"post.php?post="+l+"&action=edit",style:{textDecoration:"none"}}));return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.InspectorControls,null,Object(r.createElement)(c.PanelBody,{title:Object(u.__)("Options","zoom-forms")},d.length>0?p:Object(r.createElement)(c.Disabled,null,p),"-1"!==l&&h)),Object(r.createElement)(r.Fragment,null,"-1"!=l?Object(r.createElement)(s.a,{block:"zoom-forms/form-block",attributes:t}):Object(r.createElement)(c.Placeholder,{icon:be,label:Object(u.__)("ZOOM Forms","zoom-forms")},d.length>0?p:Object(r.createElement)(c.Disabled,null,p))))}})}]);