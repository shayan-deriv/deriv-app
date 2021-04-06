/*! For license information please see icon-message-content.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/shared"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","react"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/components"),require("@deriv/shared"),require("react")):e["@deriv/account"]=r(e["@deriv/components"],e["@deriv/shared"],e.react)}(self,(function(e,r,t){return(()=>{var n={"../../../node_modules/classnames/index.js":(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)&&t.length){var a=o.apply(null,t);a&&e.push(a)}else if("object"===s)for(var c in t)n.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,r,t)=>{"use strict";var n=t("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,s,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:s,resetWarningCache:o};return t.PropTypes=t,t}},"../../../node_modules/prop-types/index.js":(e,r,t)=>{e.exports=t("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":r=>{"use strict";r.exports=e},"@deriv/shared":e=>{"use strict";e.exports=r},react:e=>{"use strict";e.exports=t}},o={};function s(e){if(o[e])return o[e].exports;var r=o[e]={exports:{}};return n[e](r,r.exports,s),r.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var a={};return(()=>{"use strict";s.d(a,{default:()=>u});var e=s("react"),r=s.n(e),t=s("../../../node_modules/prop-types/index.js"),n=s("../../../node_modules/classnames/index.js"),o=s.n(n),c=s("@deriv/components"),p=s("@deriv/shared");function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var l=function(e){var t=e.children,n=e.className,s=e.full_width,a=e.icon,l=e.icon_row,u=e.message,d=e.text;return r().createElement(c.Div100vhContainer,{className:o()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":s}),is_disabled:(0,p.isDesktop)(),height_offset:"110px"},r().createElement("div",{className:o()("account-management__message-content",i({},"".concat(n,"__message-content"),n))},a&&r().createElement("div",{className:o()("account-management__message-icon",i({},"".concat(n,"__message-icon"),n))},a),l&&r().createElement("div",null,l),r().createElement(c.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:o()("account-management__message",i({},"".concat(n,"__message"),n))},u),d&&r().createElement("div",{className:"account-management__text-container"},r().createElement(c.Text,{className:o()(i({},"".concat(n,"__text"),n)),as:"p",size:"xs",align:"center"},d)),t))};l.propTypes={children:t.PropTypes.oneOfType([t.PropTypes.object,t.PropTypes.array]),className:t.PropTypes.string,full_width:t.PropTypes.bool,icon:t.PropTypes.object,message:t.PropTypes.oneOfType([t.PropTypes.node,t.PropTypes.string,t.PropTypes.object]),text:t.PropTypes.string};const u=l})(),a.default})()}));